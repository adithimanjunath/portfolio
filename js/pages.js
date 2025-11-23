/* Page Switching System */

document.addEventListener('DOMContentLoaded', () => {
  initPageSwitching();
});

/**
 * Initialize page switching functionality
 */
function initPageSwitching() {
  // Get all navigation links with data-page attribute
  const navLinks = document.querySelectorAll('[data-page]');
  
  // Add click handlers to all page links
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const pageName = link.getAttribute('data-page');
      showPage(pageName);
      
      // Close mobile menu if open
      const navLinksContainer = document.querySelector('.nav-links');
      if (navLinksContainer) {
        navLinksContainer.classList.remove('active');
      }
    });
  });
  
  // Also handle CTA buttons on home page
  const ctaButtons = document.querySelectorAll('.cta-buttons a[data-page]');
  ctaButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const pageName = btn.getAttribute('data-page');
      showPage(pageName);
    });
  });
  
  // Show home page by default
  showPage('home');
}

/**
 * Show a specific page and hide others
 * @param {string} pageName - The page to show (e.g., 'home', 'about', 'resume', 'projects', 'contact')
 */
function showPage(pageName) {
  // Hide all pages
  const allPages = document.querySelectorAll('.page');
  allPages.forEach(page => {
    page.classList.remove('active');
  });
  
  // Show the requested page
  const targetPage = document.getElementById(`page-${pageName}`);
  if (targetPage) {
    targetPage.classList.add('active');
    
    // Scroll to top of content area
    const contentWrapper = document.querySelector('.content-wrapper');
    if (contentWrapper) {
      contentWrapper.scrollTop = 0;
    }
    
    // Update active nav link
    updateActiveNavLink(pageName);
  }
}

/**
 * Update the active state of navigation links
 * @param {string} pageName - The current page name
 */
function updateActiveNavLink(pageName) {
  // Remove active class from all nav links
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    link.classList.remove('active');
  });
  
  // Add active class to matching link
  const activeLink = document.querySelector(`.nav-links a[data-page="${pageName}"]`);
  if (activeLink) {
    activeLink.classList.add('active');
  }
}
