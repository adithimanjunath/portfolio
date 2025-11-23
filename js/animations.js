/* Animations & Scroll Effects */

document.addEventListener('DOMContentLoaded', () => {
  initScrollAnimations();
  initHighlightReveal();
  initColorTransitions();
});

function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('[data-animate]');
  if (!animatedElements.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('animate-in');
      obs.unobserve(entry.target);
    });
  }, {
    threshold: 0.2,
    rootMargin: '0px 0px -40px 0px'
  });

  animatedElements.forEach(el => observer.observe(el));
}

function initHighlightReveal() {
  const highlightElements = document.querySelectorAll('[data-highlight]');
  if (!highlightElements.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      obs.unobserve(entry.target);
    });
  }, {
    threshold: 0.4,
    rootMargin: '0px 0px -30px 0px'
  });

  highlightElements.forEach(el => observer.observe(el));
}

function initColorTransitions() {
  const sections = document.querySelectorAll('section[data-color]');
  if (!sections.length) return;
  const root = document.documentElement;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const color = entry.target.getAttribute('data-color');
      if (color) {
        root.style.setProperty('--page-bg', color);
      }
    });
  }, {
    threshold: 0.5
  });

  sections.forEach(section => observer.observe(section));
}
