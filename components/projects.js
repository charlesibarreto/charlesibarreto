/**
 * ═══ PROJECTS COMPONENT ═══
 * Renders project cards, filtering, and modal details from CONFIG.projects.
 */

const Projects = {
  activeFilter: 'all',

  init() {
    this.renderFilters();
    this.renderProjects();
    this.bindModal();
  },

  /** Generate filter buttons from project categories */
  renderFilters() {
    const container = document.getElementById('projectFilters');
    if (!container) return;

    const categories = ['all', ...new Set(CONFIG.projects.map(p => p.category).filter(Boolean))];

    container.innerHTML = categories.map(cat =>
      `<button class="filter-btn ${cat === 'all' ? 'active' : ''}" data-filter="${cat}">
        ${cat.charAt(0).toUpperCase() + cat.slice(1)}
      </button>`
    ).join('');

    container.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        container.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.activeFilter = btn.dataset.filter;
        this.renderProjects();
      });
    });
  },

  /** Render project cards */
  renderProjects() {
    const grid = document.getElementById('projectsGrid');
    if (!grid) return;

    const filtered = this.activeFilter === 'all'
      ? CONFIG.projects
      : CONFIG.projects.filter(p => p.category === this.activeFilter);

    const gradients = [
      'linear-gradient(135deg, #6366F1, #8B5CF6)',
      'linear-gradient(135deg, #EC4899, #F43F5E)',
      'linear-gradient(135deg, #14B8A6, #06B6D4)',
      'linear-gradient(135deg, #F59E0B, #EF4444)',
      'linear-gradient(135deg, #8B5CF6, #EC4899)',
      'linear-gradient(135deg, #06B6D4, #3B82F6)',
    ];

    grid.innerHTML = filtered.map((project, i) => {
      const gradient = gradients[i % gradients.length];

      // Support video OR image
      let mediaContent;
      if (project.video) {
        mediaContent = `
          <iframe class="project-card__video"
                  src="${project.video}"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen></iframe>`;
      } else if (project.image) {
        mediaContent = `<img src="${project.image}" alt="${project.title}" loading="lazy">`;
      } else {
        mediaContent = `
          <div class="project-card__pattern" style="background: ${gradient}">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="1">
              <rect x="3" y="3" width="18" height="18" rx="2"/>
              <circle cx="8.5" cy="8.5" r="1.5"/>
              <path d="m21 15-5-5L5 21"/>
            </svg>
          </div>`;
      }

      return `
        <article class="project-card reveal" data-index="${i}" style="transition-delay: ${i * 0.1}s">
          <div class="project-card__image" style="${!project.image && !project.video ? 'background:' + gradient : ''}">
            ${mediaContent}
            ${project.featured ? '<span class="project-card__featured">Featured</span>' : ''}
          </div>
          <div class="project-card__body">
            <h3 class="project-card__title">${project.title}</h3>
            <p class="project-card__description">${project.description}</p>
            <div class="project-card__tech">
              ${project.tech.map(t => `<span>${t}</span>`).join('')}
            </div>
            <div class="project-card__links">
              ${project.liveUrl && project.liveUrl !== '#' ? `
                <a href="${project.liveUrl}" class="project-card__link" target="_blank" rel="noopener" onclick="event.stopPropagation()">
                  Media
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                    <polyline points="15 3 21 3 21 9"/>
                    <line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                </a>` : ''}
            </div>
          </div>
        </article>`;
    }).join('');

    if (typeof App !== 'undefined' && App.initScrollReveal) {
      setTimeout(() => App.initScrollReveal(), 100);
    }
  },

  /** Handle project card click → open modal */
  bindModal() {
    const modal = document.getElementById('projectModal');
    const modalContent = document.getElementById('modalContent');
    const backdrop = modal.querySelector('.modal__backdrop');

    document.getElementById('projectsGrid').addEventListener('click', (e) => {
      const card = e.target.closest('.project-card');
      if (!card) return;

      const index = parseInt(card.dataset.index);
      const project = (this.activeFilter === 'all'
        ? CONFIG.projects
        : CONFIG.projects.filter(p => p.category === this.activeFilter)
      )[index];

      if (!project) return;

      // Media inside modal
      let modalMedia = '';
      if (project.video) {
        modalMedia = `
          <iframe class="modal__video"
                  src="${project.video}"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen></iframe>`;
      } else if (project.image) {
        modalMedia = `<img class="modal__image" src="${project.image}" alt="${project.title}">`;
      }

      modalContent.innerHTML = `
        <button class="modal__close" aria-label="Close">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        <h3 class="modal__title">${project.title}</h3>

        ${modalMedia}

        <p class="modal__description">${project.description}</p>

        <div class="modal__tech">
          ${project.tech.map(t => `<span>${t}</span>`).join('')}
        </div>

        <div class="modal__links">
          ${project.liveUrl ? `<a href="${project.liveUrl}" class="btn btn--primary" target="_blank" rel="noopener"><span>Media</span></a>` : ''}
        </div>
      `;

      modal.classList.add('active');
      document.body.style.overflow = 'hidden';

      modalContent.querySelector('.modal__close').addEventListener('click', () => this.closeModal());
    });

    backdrop.addEventListener('click', () => this.closeModal());
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') this.closeModal();
    });
  },

  closeModal() {
    document.getElementById('projectModal').classList.remove('active');
    document.body.style.overflow = '';
  }
};
