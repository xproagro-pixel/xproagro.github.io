// script.js - Modular JavaScript for XProAgro website

// Smooth scrolling for navigation links
document.querySelectorAll('.navbar__menu a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Contact form handling
const contactForm = document.querySelector('.contact__form');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    
    // Basic validation
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    if (!name || !email || !message) {
      alert('Please fill in all fields.');
      return;
    }
    
    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }
    
    // In a real app, send data to server
    alert('Thank you for your message! We will get back to you soon.');
    contactForm.reset();
  });
}

// Lazy loading for images (if any in future)
const images = document.querySelectorAll('img[data-src]');
const imageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      img.classList.remove('lazy');
      observer.unobserve(img);
    }
  });
});

images.forEach(img => imageObserver.observe(img));

// Performance: Defer non-critical scripts
// This is already handled by placing script at end of body

// Error handling
window.addEventListener('error', function(e) {
  console.error('JavaScript error:', e.message);
  // In production, send to logging service
});

// Accessibility: Keyboard navigation enhancement
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    // Close any open modals or menus if implemented
  }
});