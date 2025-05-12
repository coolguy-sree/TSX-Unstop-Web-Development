export function initializeAnimations() {
  // Initialize typed.js for hero section
  document.addEventListener('DOMContentLoaded', () => {
    const typedElement = document.querySelector('.typed');
    
    if (typedElement) {
      const typedItems = typedElement.getAttribute('data-typed-items').split(',');
      
      // Simple implementation of typing animation
      let currentItemIndex = 0;
      let currentCharIndex = 0;
      let isDeleting = false;
      let typingSpeed = 100;
      
      function type() {
        const currentItem = typedItems[currentItemIndex].trim();
        
        if (isDeleting) {
          typedElement.textContent = currentItem.substring(0, currentCharIndex - 1);
          currentCharIndex--;
          typingSpeed = 50;
        } else {
          typedElement.textContent = currentItem.substring(0, currentCharIndex + 1);
          currentCharIndex++;
          typingSpeed = 100;
        }
        
        if (!isDeleting && currentCharIndex === currentItem.length) {
          // Pause at the end of typing
          isDeleting = true;
          typingSpeed = 1000; // Wait a bit before deleting
        } else if (isDeleting && currentCharIndex === 0) {
          isDeleting = false;
          currentItemIndex = (currentItemIndex + 1) % typedItems.length;
          typingSpeed = 500; // Pause before typing next item
        }
        
        setTimeout(type, typingSpeed);
      }
      
      // Start the typing animation
      setTimeout(type, 1000);
    }
    
    // Add scroll reveal animations
    const revealElements = document.querySelectorAll('.progress-bar');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const width = entry.target.getAttribute('aria-valuenow') + '%';
          setTimeout(() => {
            entry.target.style.width = width;
          }, 300);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    
    revealElements.forEach(element => {
      element.style.width = '0%';
      observer.observe(element);
    });
    
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Close mobile menu if open
        const navbarToggler = document.querySelector('.navbar-toggler');
        const navbarCollapse = document.querySelector('.navbar-collapse');
        
        if (navbarCollapse.classList.contains('show')) {
          navbarToggler.click();
        }
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Adjust for header
            behavior: 'smooth'
          });
        }
      });
    });
    
    // Add scroll spy for active navigation
    window.addEventListener('scroll', () => {
      const scrollPosition = window.scrollY;
      
      document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${sectionId}`) {
              link.classList.add('active');
            }
          });
        }
      });
    });
  });
}