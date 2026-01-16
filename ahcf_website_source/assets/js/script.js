// Toggle FAQ Accordion
function toggleFaq(element) {
  const parent = element.parentElement;
  parent.classList.toggle('active');
}

// Donation Functions
function processDonation() {
  alert('Redirecting to payment gateway...\nThis is a demo website. In a real scenario, this would process actual donations.');
}

function processRecurringDonation() {
  alert('Setting up monthly donation...\nThis is a demo website. In a real scenario, this would set up recurring payments.');
}

function sponsorProgram() {
  alert('Program sponsorship inquiry received!\nOur team will contact you shortly with details.');
}

// Scroll to top for donation page
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Contact Form Handler
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const subject = document.getElementById('subject').value;
      
      if (name && email && subject) {
        alert(`Thank you, ${name}! Your message has been received. We'll get back to you at ${email} soon.`);
        contactForm.reset();
      } else {
        alert('Please fill in all required fields.');
      }
    });
  }

  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const email = this.querySelector('input[type="email"]').value;
      if (email) {
        alert(`Thank you for subscribing! You'll receive updates at ${email}.`);
        this.reset();
      }
    });
  }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#' && document.querySelector(href)) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Add active class to nav link based on current page
function highlightCurrentPage() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// Run on page load
document.addEventListener('DOMContentLoaded', highlightCurrentPage);

// Hamburger Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Toggle menu when hamburger is clicked
  if (hamburger) {
    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
  }

  // Close menu when a link is clicked
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
    const isClickInsideNav = navMenu.contains(event.target);
    const isClickOnHamburger = hamburger && hamburger.contains(event.target);
    
    if (!isClickInsideNav && !isClickOnHamburger && navMenu.classList.contains('active')) {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    }
  });
});

// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
    }
  });
}, observerOptions);

// Add fade in animation CSS
const style = document.createElement('style');
style.innerHTML = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
document.head.appendChild(style);

// Observe cards and sections
document.querySelectorAll('.service-card, .program-card, .team-member, .mission-card, .story-card').forEach(el => {
  observer.observe(el);
});

// Donation amount selection
document.querySelectorAll('.amount-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    const amount = this.getAttribute('data-amount');
    
    // Remove previous selection
    this.parentElement.querySelectorAll('.amount-btn').forEach(b => {
      b.style.backgroundColor = '';
      b.style.color = '';
    });
    
    // Add current selection
    if (amount !== 'custom') {
      this.style.backgroundColor = '#00a86b';
      this.style.color = 'white';
    } else {
      const customAmount = prompt('Enter custom donation amount (in ₹):');
      if (customAmount && !isNaN(customAmount)) {
        this.style.backgroundColor = '#00a86b';
        this.style.color = 'white';
        this.textContent = '₹' + customAmount;
      }
    }
  });
});

// Counter animation for stats
function animateCounters() {
  const counters = document.querySelectorAll('.stat-item h3');
  
  counters.forEach(counter => {
    const target = parseInt(counter.textContent);
    let current = 0;
    const increment = target / 50;
    
    const updateCount = () => {
      current += increment;
      if (current < target) {
        counter.textContent = Math.ceil(current) + '+';
        requestAnimationFrame(updateCount);
      } else {
        counter.textContent = target + '+';
      }
    };
    
    updateCount();
  });
}

// Trigger counter animation when stats section is visible
const statsObserver = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounters();
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

const statsSection = document.querySelector('.stats');
if (statsSection) {
  statsObserver.observe(statsSection);
}

// Search functionality (can be extended)
function searchWebsite(query) {
  console.log('Searching for:', query);
  // Implementation for search functionality
}

// Print-friendly donation page
function printDonationPage() {
  window.print();
}

// Share on social media
function shareOnSocial(platform) {
  const currentUrl = window.location.href;
  const message = 'Support Arunaashray Health Care Foundation - Providing Healthcare to All!';
  
  let shareUrl = '';
  
  if (platform === 'facebook') {
    shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`;
  } else if (platform === 'twitter') {
    shareUrl = `https://twitter.com/intent/tweet?url=${currentUrl}&text=${message}`;
  } else if (platform === 'whatsapp') {
    shareUrl = `https://wa.me/?text=${message}%20${currentUrl}`;
  }
  
  if (shareUrl) {
    window.open(shareUrl, '_blank', 'width=600,height=400');
  }
}

// Program sponsor quick select
function selectSponsorProgram(programName, amount) {
  alert(`Selected: ${programName}\nAmount: ₹${amount}`);
  // Redirect to donation page
  window.location.href = 'donate.html';
}

// Initialize tooltips
function initTooltips() {
  const tooltips = document.querySelectorAll('[data-tooltip]');
  
  tooltips.forEach(tooltip => {
    tooltip.addEventListener('mouseover', function() {
      const text = this.getAttribute('data-tooltip');
      const tooltipEl = document.createElement('div');
      tooltipEl.className = 'tooltip';
      tooltipEl.textContent = text;
      document.body.appendChild(tooltipEl);
      
      const rect = this.getBoundingClientRect();
      tooltipEl.style.position = 'absolute';
      tooltipEl.style.top = (rect.top - tooltipEl.offsetHeight - 10) + 'px';
      tooltipEl.style.left = rect.left + 'px';
    });
    
    tooltip.addEventListener('mouseout', function() {
      const tooltips = document.querySelectorAll('.tooltip');
      tooltips.forEach(t => t.remove());
    });
  });
}

// Call initialization
document.addEventListener('DOMContentLoaded', initTooltips);

// Keyboard navigation support
document.addEventListener('keydown', function(e) {
  // Esc to close modals (if any)
  if (e.key === 'Escape') {
    // Handle escape key
  }
  
  // Ctrl/Cmd + K to focus search (if implemented)
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
    e.preventDefault();
    // Focus search input
  }
});

// Page visibility handling
document.addEventListener('visibilitychange', function() {
  if (document.hidden) {
    console.log('Page is hidden');
  } else {
    console.log('Page is visible');
  }
});

// Error handling for images
document.querySelectorAll('img').forEach(img => {
  img.addEventListener('error', function() {
    this.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23f0f0f0" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="16" fill="%23999"%3EImage not available%3C/text%3E%3C/svg%3E';
  });
});

// Mobile responsive check
function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Performance monitoring
window.addEventListener('load', function() {
  const perfData = window.performance.timing;
  const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
  console.log('Page load time: ' + pageLoadTime + 'ms');
});

// Service Worker registration (for offline support - optional)
if ('serviceWorker' in navigator) {
  // navigator.serviceWorker.register('sw.js').catch(err => console.log('SW registration failed'));
}

// Logging utility
const logger = {
  log: function(message) {
    console.log('[AHCF] ' + message);
  },
  error: function(message) {
    console.error('[AHCF ERROR] ' + message);
  },
  warn: function(message) {
    console.warn('[AHCF WARNING] ' + message);
  }
};

// Export for testing
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { logger, isMobileDevice, shareOnSocial };
}