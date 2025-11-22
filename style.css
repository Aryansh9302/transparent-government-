/* ===================== ROOT & GLOBAL ===================== */
:root {
  --saffron: #ff8a2a;
  --saffron-deep: #ff6a00;
  --white: #ffffff;
  --green: #1aa34a;
  --green-deep: #008c3b;
  --navy: #23395d;
  --bg-soft: #fff8f0;
  --bg-card: #ffffff;
  --border-soft: #e7e7f2;
  --shadow-soft: 0 14px 35px rgba(15, 23, 42, 0.08);
  --radius-lg: 22px;
  --radius-md: 16px;
  --radius-pill: 999px;
  --text-main: #111827;
  --text-muted: #6b7280;
  --transition-fast: 0.18s ease;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
    sans-serif;
  color: var(--text-main);
  background: radial-gradient(circle at top left, #fff5ea 0, #ffffff 50%);
}

body {
  min-height: 100vh;
}

/* ===================== LANGUAGE SIDEBAR ===================== */

.language-sidebar {
  position: fixed;
  right: 1.2rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: 120;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.5rem;
}

/* Small round button */
.lang-toggle {
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.55rem 0.7rem;
  border-radius: 999px;
  font-size: 0.85rem;
  background: #111827;
  color: #f9fafb;
  box-shadow: 0 8px 18px rgba(15, 23, 42, 0.5);
}

.lang-current {
  font-weight: 600;
}

/* Panel */
.lang-panel {
  position: relative;
  width: 260px;
  max-height: 420px;
  overflow: hidden;
  border-radius: 18px;
  background: #f9fafb;
  box-shadow: var(--shadow-soft);
  border: 1px solid rgba(15, 23, 42, 0.08);
  padding: 0.7rem 0.75rem 0.85rem;
  transform-origin: right center;
  transform: scale(0.95);
  opacity: 0;
  pointer-events: none;
  transition: opacity var(--transition-fast), transform var(--transition-fast);
}

.lang-panel.open {
  opacity: 1;
  pointer-events: auto;
  transform: scale(1);
}

.lang-title {
  margin: 0 0 0.4rem;
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--navy);
}

.lang-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.32rem;
  max-height: 360px;
  overflow: auto;
}

/* Hide native scrollbar but keep scrollability */
.lang-list::-webkit-scrollbar {
  width: 5px;
}
.lang-list::-webkit-scrollbar-thumb {
  background: #cbd5f5;
  border-radius: 999px;
}

.lang-option {
  border-radius: 999px;
  border: none;
  padding: 0.25rem 0.5rem;
  font-size: 0.8rem;
  cursor: pointer;
  background: #edf2ff;
  color: #111827;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: background var(--transition-fast), transform var(--transition-fast);
}

.lang-option:hover {
  background: #e0e7ff;
  transform: translateY(-1px);
}

.lang-option.active {
  background: linear-gradient(135deg, var(--saffron), var(--green));
  color: #ffffff;
}

/* ===================== TOP HEADER / NAVBAR ===================== */

.top-header {
  position: sticky;
  z-index: 80;
  top: 0;
  backdrop-filter: blur(14px);
  background: linear-gradient(
    to bottom,
    rgba(17, 24, 39, 0.92),
    rgba(17, 24, 39, 0.94)
  );
  color: #f9fafb;
  border-bottom: 3px solid var(--saffron-deep);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.65rem 2.3rem;
}

.brand {
  display: flex;
  align-items: center;
  gap: 0.65rem;
}

.flag-vertical {
  display: flex;
  flex-direction: column;
  width: 12px;
  border-radius: 999px;
  overflow: hidden;
  box-shadow: 0 0 0 1px rgba(249, 250, 251, 0.7);
}

.flag-vertical span {
  flex: 1;
}

.flag-saffron {
  background: var(--saffron);
}
.flag-white {
  background: #ffffff;
}
.flag-green {
  background: var(--green);
}

.brand-text {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
}

.brand-title {
  margin: 0;
  font-size: 1.15rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.brand-tagline {
  margin: 0;
  font-size: 0.75rem;
  color: #e5e7eb;
}

/* Nav */
.main-nav {
  display: flex;
  align-items: center;
  gap: 1.25rem;
}

.nav-link {
  text-decoration: none;
  color: #e5e7eb;
  font-size: 0.9rem;
  padding: 0.35rem 0.7rem;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  transition: background var(--transition-fast), color var(--transition-fast),
    transform var(--transition-fast);
}

.nav-link:hover {
  background: rgba(243, 244, 246, 0.12);
  color: #ffffff;
  transform: translateY(-1px);
}

.nav-icon {
  font-size: 0.95rem;
}

/* ===================== HERO ===================== */

.hero {
  position: relative;
  padding: 2.5rem 2.3rem 2.2rem;
  background: radial-gradient(circle at top, #fff5ea 0, #ffffff 45%, #e9ffe9 100%);
  overflow: hidden;
}

.hero-inner {
  max-width: 760px;
  margin: 0 auto;
  text-align: center;
}

.hero-kicker {
  margin: 0 0 0.4rem;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: var(--navy);
}

.hero-title {
  margin: 0 0 0.6rem;
  font-size: 1.9rem;
  font-weight: 800;
}

.hero-subtitle {
  margin: 0 0 1rem;
  color: var(--text-muted);
  font-size: 0.98rem;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.8rem;
  margin-bottom: 0.7rem;
}

.btn {
  border-radius: var(--radius-pill);
  border: none;
  cursor: pointer;
  font-weight: 600;
  padding: 0.65rem 1.5rem;
  font-size: 0.9rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  transition: transform var(--transition-fast), box-shadow var(--transition-fast),
    background var(--transition-fast), color var(--transition-fast);
}

.btn.primary {
  background: linear-gradient(120deg, var(--saffron-deep), var(--green-deep));
  color: #ffffff;
  box-shadow: var(--shadow-soft);
}

.btn.primary:hover {
  transform: translateY(-1px);
  box-shadow: 0 20px 40px rgba(16, 185, 129, 0.4);
}

.btn.outline {
  background: transparent;
  border: 1.7px solid var(--navy);
  color: var(--navy);
}

.btn.outline:hover {
  background: rgba(17, 24, 39, 0.06);
  transform: translateY(-1px);
}

/* hero note */
.hero-note {
  margin: 0.3rem 0 1.7rem;
  font-size: 0.84rem;
  color: var(--text-muted);
}

/* Feature cards under hero */
.hero-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 1rem;
  max-width: 980px;
  margin: 0 auto;
}

.feature-card {
  position: relative;
  background: var(--bg-card);
  border-radius: var(--radius-lg);
  border-top: 3.2px solid transparent;
  box-shadow: var(--shadow-soft);
  padding: 1rem 1.1rem 1.2rem;
  overflow: hidden;
}

.feature-card:nth-child(1) {
  border-top-color: var(--saffron-deep);
}
.feature-card:nth-child(2) {
  border-top-color: #2563eb;
}
.feature-card:nth-child(3) {
  border-top-color: var(--green-deep);
}

.feature-icon {
  width: 38px;
  height: 38px;
  border-radius: 14px;
  background: #fff1e5;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
  font-size: 1.3rem;
}

.feature-title {
  margin: 0 0 0.25rem;
  font-size: 1rem;
  font-weight: 700;
}

.feature-text {
  margin: 0;
  font-size: 0.86rem;
  color: var(--text-muted);
}

/* Subtle India map background behind features */
.hero-map {
  position: absolute;
  inset: 0;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.18;
  mix-blend-mode: multiply;
}

.map-overlay {
  position: absolute;
  width: 380px;
  height: 520px;
  border-radius: 160px;
  background: radial-gradient(
    circle at center,
    rgba(255, 255, 255, 0.2) 0,
    rgba(0, 0, 0, 0.08) 95%
  );
  overflow: hidden;
}

.map-strip {
  position: absolute;
  left: 0;
  right: 0;
  height: 33.33%;
}

.strip-saffron {
  top: 0;
  background: linear-gradient(to bottom, var(--saffron), transparent);
}
.strip-white {
  top: 33.33%;
  background: rgba(255, 255, 255, 0.9);
}
.strip-green {
  bottom: 0;
  background: linear-gradient(to top, var(--green), transparent);
}

.map-label {
  position: relative;
  z-index: 1;
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
  border: 1px solid rgba(17, 24, 39, 0.14);
  backdrop-filter: blur(12px);
  background: rgba(249, 250, 251, 0.9);
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

/* ===================== PROJECT SHELL + TABS ===================== */

.projects-shell {
  text-align: center;
  padding: 1.4rem 2.3rem 0.1rem;
}

.section-heading {
  margin: 0 0 1rem;
  font-size: 1.35rem;
}

.project-tabs {
  display: inline-flex;
  padding: 0.3rem;
  border-radius: 999px;
  background: #f4f4ff;
  box-shadow: inset 0 0 0 1px #e2e5ff;
  gap: 0.25rem;
}

.project-tab {
  border-radius: 999px;
  border: none;
  background: transparent;
  padding: 0.45rem 1.1rem;
  font-size: 0.88rem;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  color: #4b5563;
  font-weight: 600;
  transition: background var(--transition-fast), color var(--transition-fast),
    transform var(--transition-fast), box-shadow var(--transition-fast);
}

.project-tab.active {
  background: linear-gradient(120deg, var(--saffron), var(--green));
  color: #ffffff;
  transform: translateY(-1px);
  box-shadow: var(--shadow-soft);
}

.tab-icon {
  font-size: 1rem;
}

/* ===================== PROJECT SECTIONS ===================== */

.projects-section {
  padding: 1.6rem 2.3rem 1.8rem;
}

.section-header {
  max-width: 920px;
  margin: 0 auto 1.1rem;
}

.section-header h2 {
  margin: 0 0 0.3rem;
  font-size: 1.25rem;
}

.section-header p {
  margin: 0;
  color: var(--text-muted);
  font-size: 0.9rem;
}

/* Filter row */
.filters-row {
  max-width: 920px;
  margin: 0 auto 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 0.8rem;
}

.filter-group {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  font-size: 0.85rem;
}

.filter-group label {
  font-weight: 600;
  color: #4b5563;
}

.filter-group select {
  border-radius: 999px;
  border: 1px solid var(--border-soft);
  padding: 0.45rem 0.85rem;
  background: #f9fafb;
  font-size: 0.85rem;
  outline: none;
}

.filter-group select:focus {
  border-color: var(--navy);
}

/* Project cards */
.projects-grid {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.2rem;
}

.project-card {
  background: var(--bg-card);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-soft);
  border-left: 3px solid var(--saffron-deep);
  padding: 1.05rem 1.1rem 0.9rem;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}

.project-card-header {
  display: flex;
  justify-content: space-between;
  gap: 0.6rem;
  align-items: flex-start;
}

.project-name {
  margin: 0 0 0.18rem;
  font-weight: 700;
  font-size: 1rem;
}

.project-desc {
  margin: 0;
  font-size: 0.82rem;
  color: var(--text-muted);
}

.badges-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.35rem;
}

.status-pill {
  padding: 0.2rem 0.65rem;
  border-radius: 999px;
  font-size: 0.7rem;
  font-weight: 600;
  border: none;
  background: #e0edff;
  color: #1d4ed8;
}

.status-pill.approved {
  background: #fef3c7;
  color: #92400e;
}

.status-pill.completed {
  background: #d1fae5;
  color: #065f46;
}

/* meta line */
.project-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  font-size: 0.8rem;
  color: var(--text-muted);
  align-items: center;
}

.meta-item {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
}

/* metrics */
.metric-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.5rem;
  margin-top: 0.4rem;
}

.metric-card {
  border-radius: var(--radius-md);
  padding: 0.55rem 0.6rem;
  font-size: 0.76rem;
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}

.metric-label {
  color: #6b7280;
}

.metric-value {
  font-weight: 700;
  font-size: 0.82rem;
}

/* different metric background colors */
.metric-announced {
  background: #eef2ff;
}
.metric-sanctioned {
  background: #e6f9f0;
}
.metric-used {
  background: #fff4e5;
}
.metric-remaining {
  background: #f3e8ff;
}

/* utilization */
.utilization-row {
  margin-top: 0.45rem;
  font-size: 0.76rem;
}

.utilization-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.25rem;
  color: #4b5563;
}

.progress-track {
  width: 100%;
  height: 6px;
  border-radius: 999px;
  background: #e5e7eb;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, var(--green), var(--green-deep));
  transition: width 0.3s ease-out;
}

/* contractor */
.contractor-row {
  margin-top: 0.6rem;
  padding: 0.55rem 0.6rem;
  border-radius: 14px;
  background: #f9fafb;
  display: flex;
  flex-direction: column;
  gap: 0.12rem;
  font-size: 0.8rem;
}

.contractor-name {
  font-weight: 600;
}

.contractor-type {
  color: var(--text-muted);
  font-size: 0.78rem;
}

/* digital signature link display */
.signatures-link {
  margin-top: 0.3rem;
  font-size: 0.8rem;
  color: var(--saffron-deep);
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.2rem;
  text-decoration: none;
}

.signatures-link:hover {
  text-decoration: underline;
}

/* ===================== FOOTER ===================== */

.site-footer {
  padding: 0.25rem 1.5rem 1.25rem;
  margin-top: 0.6rem;
  background: linear-gradient(
    to right,
    var(--saffron),
    #ffffff 45%,
    var(--green)
  );
}

.footer-inner {
  max-width: 1020px;
  margin: 0.2rem auto 0;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 18px;
  text-align: center;
  padding: 0.7rem 0.9rem 0.8rem;
  font-size: 0.82rem;
  color: #4b5563;
}

.footer-text {
  margin: 0 0 0.2rem;
}

.footer-subtext {
  margin: 0;
  font-size: 0.78rem;
}

/* ===================== UTILITIES & RESPONSIVE ===================== */

@media (max-width: 1024px) {
  .hero {
    padding-inline: 1.5rem;
  }

  .projects-shell,
  .projects-section {
    padding-inline: 1.5rem;
  }
}

@media (max-width: 800px) {
  .top-header {
    padding-inline: 1.1rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.45rem;
  }

  .main-nav {
    gap: 0.7rem;
    flex-wrap: wrap;
  }

  .metric-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .language-sidebar {
    right: 0.6rem;
  }
}

@media (max-width: 600px) {
  .hero {
    padding-inline: 1rem;
  }

  .projects-shell,
  .projects-section {
    padding-inline: 1rem;
  }

  .language-sidebar {
    top: auto;
    bottom: 1rem;
    transform: none;
  }

  .lang-panel {
    width: 230px;
  }
}
