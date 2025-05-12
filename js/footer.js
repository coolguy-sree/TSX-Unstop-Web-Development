export function renderFooter() {
  // Add styles to document head
  const styleElement = document.createElement('style');
  styleElement.textContent = `
    .footer {
      background-color: var(--neutral-900);
      color: var(--neutral-300);
      padding: var(--space-6) 0 var(--space-3);
      position: relative;
    }
    
    .footer-brand {
      margin-bottom: var(--space-3);
    }
    
    .footer-logo {
      font-size: 1.75rem;
      font-weight: 700;
      color: white;
      margin-bottom: var(--space-2);
      display: inline-block;
      background: linear-gradient(135deg, var(--primary), var(--accent));
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    
    .footer-desc {
      color: var(--neutral-400);
      font-size: 0.95rem;
      max-width: 350px;
    }
    
    .footer-title {
      font-size: 1.1rem;
      color: white;
      margin-bottom: var(--space-3);
      font-weight: 600;
      position: relative;
      padding-bottom: 10px;
    }
    
    .footer-title::after {
      content: '';
      position: absolute;
      width: 30px;
      height: 2px;
      background-color: var(--primary);
      left: 0;
      bottom: 0;
    }
    
    .footer-links {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    
    .footer-links li {
      margin-bottom: var(--space-2);
    }
    
    .footer-links li a {
      color: var(--neutral-400);
      font-size: 0.95rem;
      transition: color var(--transition-fast);
      position: relative;
      padding-left: var(--space-2);
    }
    
    .footer-links li a::before {
      content: '→';
      position: absolute;
      left: 0;
      opacity: 0;
      transition: opacity var(--transition-fast), transform var(--transition-fast);
    }
    
    .footer-links li a:hover {
      color: var(--primary);
      padding-left: var(--space-3);
    }
    
    .footer-links li a:hover::before {
      opacity: 1;
      transform: translateX(5px);
    }
    
    .footer-info {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    
    .footer-info li {
      display: flex;
      align-items: center;
      margin-bottom: var(--space-2);
      color: var(--neutral-400);
      font-size: 0.95rem;
    }
    
    .footer-info li i {
      margin-right: var(--space-1);
      color: var(--primary);
    }
    
    .footer-social {
      display: flex;
      padding: 0;
      list-style: none;
      margin: var(--space-3) 0 0;
      gap: var(--space-2);
    }
    
    .footer-social li a {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgba(255, 255, 255, 0.1);
      color: white;
      transition: all var(--transition-fast);
    }
    
    .footer-social li a:hover {
      background-color: var(--primary);
      transform: translateY(-5px);
    }
    
    .footer-bottom {
      padding-top: var(--space-3);
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      font-size: 0.9rem;
    }
    
    .footer-bottom-links {
      display: flex;
      gap: var(--space-3);
    }
    
    .footer-bottom-links a {
      color: var(--neutral-400);
      transition: color var(--transition-fast);
    }
    
    .footer-bottom-links a:hover {
      color: var(--primary);
    }
    
    .scroll-top {
      position: absolute;
      right: 30px;
      bottom: 30px;
    }
    
    .scroll-top a {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: var(--primary);
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      box-shadow: 0 2px 10px rgba(var(--primary-rgb), 0.5);
      transition: all var(--transition-fast);
    }
    
    .scroll-top a:hover {
      background-color: var(--primary-dark);
      transform: translateY(-5px);
    }
    
    @media (max-width: 992px) {
      .footer-bottom {
        flex-direction: column;
        gap: var(--space-2);
        text-align: center;
      }
      
      .copyright {
        margin-bottom: var(--space-2);
      }
      
      .footer-bottom-links {
        flex-wrap: wrap;
        justify-content: center;
      }
      
      .scroll-top {
        right: 20px;
        bottom: 20px;
      }
    }
    
    @media (max-width: 576px) {
      .footer {
        padding-top: var(--space-5);
      }
      
      .footer-title {
        margin-top: var(--space-2);
      }
      
      .footer-bottom-links {
        gap: var(--space-2);
        flex-direction: column;
      }
    }
  `;
  document.head.appendChild(styleElement);

  const currentYear = new Date().getFullYear();
  
  return `
    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="col-lg-4" data-aos="fade-right">
            <div class="footer-brand">
              <a href="#hero" class="footer-logo">Surya Saroj</a>
              <p class="footer-desc">
                Frontend Developer & UI/UX Designer creating exceptional digital experiences 
                that are fast, accessible, and user-friendly.
              </p>
            </div>
          </div>
          
          <div class="col-lg-2 col-md-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="100">
            <h5 class="footer-title">Links</h5>
            <ul class="footer-links">
              <li><a href="#hero">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div class="col-lg-3 col-md-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="200">
            <h5 class="footer-title">Services</h5>
            <ul class="footer-links">
              <li><a href="#">Web Development</a></li>
              <li><a href="#">UI/UX Design</a></li>
              <li><a href="#">Responsive Design</a></li>
              <li><a href="#">Performance Optimization</a></li>
              <li><a href="#">E-commerce Solutions</a></li>
            </ul>
          </div>
          
          <div class="col-lg-3 col-md-4 mt-4 mt-lg-0" data-aos="fade-left" data-aos-delay="300">
            <h5 class="footer-title">Contact</h5>
            <ul class="footer-info">
              <li>
                <i class="bi bi-geo-alt"></i>
                <span>Hyderabad</span>
              </li>
              <li>
                <i class="bi bi-envelope"></i>
                <span>sistlasree24@gmail.com</span>
              </li>
              <li>
                <i class="bi bi-phone"></i>
                <span>+91 9063680491</span>
              </li>
            </ul>
            
            <ul class="footer-social">
              <li>
                <a href="#" aria-label="GitHub">
                  <i class="bi bi-github"></i>
                </a>
              </li>
              <li>
                <a href="#" aria-label="LinkedIn">
                  <i class="bi bi-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="#" aria-label="Twitter">
                  <i class="bi bi-twitter-x"></i>
                </a>
              </li>
              <li>
                <a href="#" aria-label="Dribbble">
                  <i class="bi bi-dribbble"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div class="row mt-5">
          <div class="col-12">
            <div class="footer-bottom">
              <div class="copyright">
                &copy; ${currentYear} SURYA SAROJ. All Rights Reserved.
              </div>
              <div class="footer-bottom-links">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
                <a href="#">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="scroll-top">
        <a href="#hero" aria-label="Scroll to top">
          <i class="bi bi-arrow-up"></i>
        </a>
      </div>
    </footer>
  `;
}

// Add footer when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  renderFooter();
});