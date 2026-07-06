/**
 * ═══ PUBLICATIONS / PATENTS COMPONENT ═══
 * Renders publication & patent cards from CONFIG.publications.
 */

const Publications = {
  init() {
    this.renderPublications();
  },

  /** Render publication cards */
  renderPublications() {
    const grid = document.getElementById('publicationsGrid');
    if (!grid) return;

    grid.innerHTML = CONFIG.publications.map((pub, i) => `
      <article class="pub-card reveal" style="transition-delay: ${i * 0.1}s">

        <!-- Header -->
        <div class="pub-card__header">
          <h3 class="pub-card__title">${pub.title}</h3>
        </div>

        <!-- Meta -->
        <div class="pub-card__meta">
          <span class="pub-card__date">${pub.date}</span>
        </div>

        <!-- Summary -->
        <p class="pub-card__summary">${pub.summary}</p>

        <!-- Tags -->
        <div class="pub-card__tags">
          ${pub.tags.map(tag => `<span class="pub-tag">${tag}</span>`).join('')}
        </div>

      </article>
    `).join('');

    // Re-initialize scroll reveals for new cards
    if (typeof App !== 'undefined' && App.initScrollReveal) {
      setTimeout(() => App.initScrollReveal(), 100);
    }
  }
};
