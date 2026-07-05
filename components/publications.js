/**
 * ═══ PUBLICATIONS / PATENTS COMPONENT ═══
 * Renders publication & patent cards from CONFIG.publications.
 */

const Publications = {
  init() {
    this.renderPublications();
  },

  renderPublications() {
    const grid = document.getElementById('publicationsGrid');
    if (!grid) return;

    grid.innerHTML = CONFIG.publications.map((pub, i) => `
      <div class="pub-card reveal" style="transition-delay: ${i * 0.08}s">
        
        <div class="pub-card__header">
          <span class="pub-card__title">${pub.title}</span>
          <span class="pub-card__type">${pub.type}</span>
        </div>

        <div class="pub-card__meta">
          <span class="pub-card__date">${pub.date}</span>
        </div>

        <div class="pub-card__summary">
          ${pub.summary}
        </div>

        <div class="pub-card__tags">
          ${pub.tags.map(tag => `<span class="pub-tag">${tag}</span>`).join('')}
        </div>

      </div>
    `).join('');
  }
};
