export function renderNavigation() {
  // Add styles to document head
  const styleElement = document.createElement('style');
  styleElement.textContent = `
    .header {
      position: relative;
      z-index: 1000;
    }
    
    .navbar {
      background-color: rgba(var(--surface-rgb), 0.8);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      padding: var(--space-2) 0;
      transition: all var(--transition-normal);
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }
    
    .navbar-scrolled {
      box-shadow: 0 4px 16px var(--shadow-color);
      padding: var(--space-1) 0;
    }
    
    .logo {
      font-weight: 700;
      font-size: 1.5rem;
      color: var(--primary);
      background: linear-gradient(135deg, var(--primary), var(--accent));
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    
    .nav-link {
      color: var(--text-primary);
      font-weight: 500;
      margin: 0 var(--space-1);
      padding: var(--space-1) var(--space-2);
      border-radius: var(--border-radius-sm);
      transition: all var(--transition-fast);
    }
    
    .nav-link:hover {
      color: var(--primary);
      background-color: rgba(var(--primary-rgb), 0.1);
    }
    
    .nav-link.active {
      color: var(--primary);
      font-weight: 600;
    }
    
    #theme-toggle {
      background: transparent;
      border: none;
      color: var(--text-primary);
      padding: var(--space-1);
      font-size: 1.2rem;
      cursor: pointer;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all var(--transition-fast);
    }
    
    #theme-toggle:hover {
      background-color: rgba(var(--primary-rgb), 0.1);
      color: var(--primary);
    }
    
    .theme-icon-dark {
      display: block;
    }
    
    .theme-icon-light {
      display: none;
    }
    
    .dark-theme .theme-icon-dark {
      display: none;
    }
    
    .dark-theme .theme-icon-light {
      display: block;
    }
    
    @media (max-width: 992px) {
      .navbar-collapse {
        background-color: var(--surface);
        border-radius: var(--border-radius-md);
        padding: var(--space-2);
        box-shadow: 0 4px 12px var(--shadow-color);
        margin-top: var(--space-2);
      }
      
      .nav-link {
        padding: var(--space-2);
        margin: var(--space-1) 0;
      }
    }
  `;
  document.head.appendChild(styleElement);

  // Add root variables
  const rootStyles = document.createElement('style');
  rootStyles.textContent = `
    :root { 
      --surface-rgb: 255, 255, 255; 
      --primary-rgb: 10, 132, 255; 
    }
    .dark-theme { 
      --surface-rgb: 50, 50, 53; 
      --primary-rgb: 10, 132, 255; 
    }
  `;
  document.head.appendChild(rootStyles);

  return `
    <header class="header">
      <nav class="navbar navbar-expand-lg fixed-top">
        <div class="container">
          <a class="navbar-brand" href="#hero">
            <span class="logo">SS</span>
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" 
                  aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link" href="#hero">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#about">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#skills">Skills</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#projects">Projects</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#contact">Contact</a>
              </li>
              <li class="nav-item">
                <button id="theme-toggle" class="btn btn-sm" aria-label="Toggle theme">
                  <i class="bi bi-moon-fill theme-icon-dark"></i>
                  <i class="bi bi-sun-fill theme-icon-light"></i>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  `;
}

// Add navigation functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  renderNavigation();
  
  // Add scroll event listener to change navbar on scroll
  window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }
  });
  
  // Handle active navigation links
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');
  
  window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (window.scrollY >= (sectionTop - 200)) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').includes(current)) {
        link.classList.add('active');
      }
    });
  });
});