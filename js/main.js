/* Main JavaScript - Navigation & Contact Form */

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initContactForm();
});

function initNav() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const navAnchors = navLinks ? navLinks.querySelectorAll('a') : [];
  const sections = document.querySelectorAll('main section[id]');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      const expanded = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.setAttribute('aria-expanded', String(!expanded));
      navLinks.classList.toggle('active');
    });
  }

  navAnchors.forEach(link => {
    link.addEventListener('click', () => {
      navLinks?.classList.remove('active');
      if (hamburger) {
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  });

  if (sections.length && navAnchors.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        navAnchors.forEach(link => link.classList.remove('active'));
        const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
        active?.classList.add('active');
      });
    }, {
      threshold: 0.5
    });

    sections.forEach(section => observer.observe(section));
  }
}

function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.querySelector('input[name=\"name\"]').value.trim();
    const email = form.querySelector('input[name=\"email\"]').value.trim();
    const message = form.querySelector('textarea[name=\"message\"]').value.trim();

    if (!name || !email || !message) {
      alert('Please fill in all fields.');
      return;
    }

    alert(`Thanks, ${name}! I'll respond at ${email} soon.`);
    form.reset();
  });
}
