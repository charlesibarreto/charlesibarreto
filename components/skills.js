/**
 * ═══ SKILLS COMPONENT ═══
 * Renders skill cards without progress bars.
 */

const Skills = {
  init() {
    this.renderSkills();
  },

  renderSkills() {
    const grid = document.getElementById('skillsGrid');
    if (!grid) return;

    grid.innerHTML = CONFIG.skills.map((skill, i) => `
      <div class="skill-card reveal" style="transition-delay: ${i * 0.08}s">
        <div class="skill-card__header">
          <span class="skill-card__name">
            <span class="skill-card__icon">${skill.icon || '⚡'}</span>
            ${skill.name}
          </span>
        </div>
      </div>
    `).join('');
  },

  // No bar animation needed anymore
  animateBars() {}
};
