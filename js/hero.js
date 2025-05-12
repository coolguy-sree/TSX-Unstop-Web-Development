export function renderHero() {
  // Add styles to document head
  const styleElement = document.createElement('style');
  styleElement.textContent = `
    .hero {
      min-height: 100vh;
      display: flex;
      align-items: center;
      position: relative;
      padding-top: 80px;
    }
    
    .hero-greeting {
      display: inline-block;
      font-size: 1.2rem;
      font-weight: 500;
      color: var(--primary);
      margin-bottom: var(--space-1);
      position: relative;
    }
    
    .hero-greeting::after {
      content: '';
      position: absolute;
      width: 70px;
      height: 2px;
      background-color: var(--primary);
      left: 105%;
      top: 50%;
      transform: translateY(-50%);
    }
    
    .hero-title {
      font-size: 4rem;
      font-weight: 700;
      margin-bottom: var(--space-1);
      background: linear-gradient(135deg, var(--primary), var(--accent));
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    
    .hero-subtitle {
      font-size: 1.75rem;
      color: var(--text-secondary);
      margin-bottom: var(--space-3);
    }
    
    .hero-description {
      font-size: 1.2rem;
      max-width: 550px;
      margin-bottom: var(--space-4);
      color: var(--text-secondary);
    }
    
    .hero-social {
      display: flex;
      gap: var(--space-2);
    }
    
    .hero-social a {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgba(var(--primary-rgb), 0.1);
      color: var(--primary);
      transition: all var(--transition-fast);
    }
    
    .hero-social a:hover {
      background-color: var(--primary);
      color: white;
      transform: translateY(-5px);
    }
    
    .hero-image {
      position: relative;
      text-align: center;
    }
    
    .hero-profile-image {
      width: 360px;
      height: 360px;
      object-fit: cover;
      border: 5px solid rgba(var(--primary-rgb), 0.3);
      padding: 5px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
      position: relative;
      z-index: 1;
    }
    
    .hero-shape {
      position: absolute;
      width: 300px;
      height: 300px;
      border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
      background: linear-gradient(135deg, var(--primary), var(--accent));
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 0;
      animation: morph 8s ease-in-out infinite;
      opacity: 0.6;
    }
    
    @keyframes morph {
      0% {
        border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
      }
      25% {
        border-radius: 58% 42% 75% 25% / 76% 46% 54% 24%;
      }
      50% {
        border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%;
      }
      75% {
        border-radius: 33% 67% 58% 42% / 63% 68% 32% 37%;
      }
      100% {
        border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
      }
    }
    
    .hero-scroll-indicator {
      position: absolute;
      bottom: 30px;
      left: 50%;
      transform: translateX(-50%);
      animation: bounce 2s infinite;
    }
    
    .hero-scroll-indicator a {
      width: 50px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--primary);
      font-size: 1.5rem;
      border-radius: 50%;
      transition: all var(--transition-fast);
    }
    
    .hero-scroll-indicator a:hover {
      color: white;
      background-color: var(--primary);
    }
    
    @keyframes bounce {
      0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
      }
      40% {
        transform: translateY(-10px);
      }
      60% {
        transform: translateY(-5px);
      }
    }
    
    @media (max-width: 992px) {
      .hero-content {
        text-align: center;
        margin-bottom: var(--space-4);
      }
      
      .hero-greeting::after {
        display: none;
      }
      
      .hero-description {
        margin-left: auto;
        margin-right: auto;
      }
      
      .hero-social {
        justify-content: center;
      }
      
      .hero-profile-image {
        width: 280px;
        height: 280px;
      }
      
      .hero-shape {
        width: 240px;
        height: 240px;
      }
    }
    
    @media (max-width: 576px) {
      .hero-title {
        font-size: 2.5rem;
      }
      
      .hero-subtitle {
        font-size: 1.25rem;
      }
      
      .hero-description {
        font-size: 1rem;
      }
      
      .hero-profile-image {
        width: 240px;
        height: 240px;
      }
      
      .hero-shape {
        width: 200px;
        height: 200px;
      }
      
      .hero-buttons {
        display: flex;
        flex-direction: column;
        gap: var(--space-2);
      }
      
      .hero-buttons .btn-outline {
        margin-left: 0 !important;
      }
    }
  `;
  document.head.appendChild(styleElement);

  return `
    <section id="hero" class="hero">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 hero-content" data-aos="fade-right">
            <span class="hero-greeting">Hello, I'm</span>
            <h1 class="hero-title">Surya Saroj</h1>
            <p class="hero-subtitle"><span class="typed" data-typed-items="Frontend Developer, UI/UX Designer, Web Developer"></span></p>
            <p class="hero-description">
              Creating beautiful, functional, and user-friendly websites and applications that make an impact.
            </p>
            <div class="hero-buttons">
              <a href="#projects" class="btn btn-primary">View My Work</a>
              <a href="#contact" class="btn btn-outline ms-3">Contact Me</a>
            </div>
            <div class="hero-social mt-4">
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <i class="bi bi-github"></i>
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i class="bi bi-linkedin"></i>
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <i class="bi bi-twitter-x"></i>
              </a>
              <a href="https://dribbble.com/" target="_blank" rel="noopener noreferrer" aria-label="Dribbble">
                <i class="bi bi-dribbble"></i>
              </a>
            </div>
          </div>
          <div class="col-lg-6 hero-image" data-aos="fade-left" data-aos-delay="200">
            <img src="https://images.pexels.com/photos/3760373/pexels-photo-3760373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                 alt="Professional portrait" class="img-fluid rounded-circle hero-profile-image">
            <div class="hero-shape"></div>
          </div>
        </div>
      </div>
      <div class="hero-scroll-indicator">
        <a href="#about">
          <i class="bi bi-chevron-down"></i>
        </a>
      </div>
    </section>
  `;
}

// Add hero when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  renderHero();
});