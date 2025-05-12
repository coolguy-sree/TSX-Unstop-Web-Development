export function renderAbout() {
  // Add styles to document head
  const styleElement = document.createElement('style');
  styleElement.textContent = `
    .section-subtitle {
      display: inline-block;
      font-size: 1rem;
      font-weight: 500;
      color: var(--primary);
      position: relative;
      padding-bottom: var(--space-1);
      margin-bottom: var(--space-1);
    }
    
    .section-subtitle::after {
      content: '';
      position: absolute;
      width: 50px;
      height: 2px;
      background-color: var(--primary);
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
    }
    
    .section-title {
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: var(--space-3);
      position: relative;
    }
    
    .about-image {
      position: relative;
      border-radius: var(--border-radius-md);
      overflow: hidden;
      box-shadow: 0 10px 30px var(--shadow-color);
    }
    
    .about-image img {
      width: 100%;
      transition: transform var(--transition-normal);
    }
    
    .about-image:hover img {
      transform: scale(1.05);
    }
    
    .experience-badge {
      position: absolute;
      right: -20px;
      bottom: 30px;
      background: linear-gradient(135deg, var(--primary), var(--accent));
      color: white;
      padding: var(--space-2);
      width: 110px;
      height: 110px;
      border-radius: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      box-shadow: 0 10px 20px rgba(var(--primary-rgb), 0.3);
    }
    
    .experience-badge .years {
      font-size: 2rem;
      font-weight: 700;
      line-height: 1;
    }
    
    .experience-badge .text {
      font-size: 0.9rem;
      margin-top: 5px;
    }
    
    .about-content h3 {
      margin-bottom: var(--space-3);
      font-size: 1.75rem;
      font-weight: 600;
    }
    
    .about-content p {
      margin-bottom: var(--space-2);
      color: var(--text-secondary);
      font-size: 1.1rem;
    }
    
    .info-item {
      display: flex;
      align-items: flex-start;
      margin-bottom: var(--space-3);
    }
    
    .info-item i {
      font-size: 1.5rem;
      color: var(--primary);
      margin-right: var(--space-2);
      margin-top: 5px;
    }
    
    .info-item h5 {
      margin-bottom: 5px;
      font-weight: 600;
      font-size: 1.1rem;
    }
    
    .info-item p {
      margin-bottom: 0;
      color: var(--text-secondary);
    }
    
    @media (max-width: 992px) {
      .about-image {
        margin-bottom: var(--space-4);
      }
      
      .experience-badge {
        width: 90px;
        height: 90px;
        right: 20px;
        bottom: 20px;
      }
      
      .experience-badge .years {
        font-size: 1.75rem;
      }
      
      .experience-badge .text {
        font-size: 0.8rem;
      }
      
      .about-buttons {
        display: flex;
        justify-content: center;
      }
      
      .about-content h3 {
        text-align: center;
      }
    }
    
    @media (max-width: 576px) {
      .section-title {
        font-size: 2rem;
      }
      
      .about-buttons {
        flex-direction: column;
        gap: var(--space-2);
        align-items: center;
      }
      
      .about-buttons .btn-outline {
        margin-left: 0 !important;
      }
      
      .info-item {
        flex-direction: column;
        text-align: center;
      }
      
      .info-item i {
        margin-right: 0;
        margin-bottom: var(--space-1);
      }
    }
  `;
  document.head.appendChild(styleElement);

  return `
    <section id="about" class="about py-5">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center mb-5">
            <span class="section-subtitle" data-aos="fade-up">About Me</span>
            <h2 class="section-title" data-aos="fade-up" data-aos-delay="100">My Story</h2>
          </div>
        </div>
        <div class="row align-items-center">
          <div class="col-lg-5" data-aos="fade-right">
            <div class="about-image">
              <img src="https://images.pexels.com/photos/6146813/pexels-photo-6146813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                   alt="About me" class="img-fluid rounded">
              <div class="experience-badge" data-aos="zoom-in" data-aos-delay="200">
                <span class="years">1</span>
                <span class="text">Year Experience</span>
              </div>
            </div>
          </div>
          <div class="col-lg-7 mt-5 mt-lg-0" data-aos="fade-left" data-aos-delay="100">
            <div class="about-content">
              <h3>A passionate Developer & Designer based in Hyderabad</h3>
              <p>
                I'm a frontend developer with 1 year of experience building exceptional digital experiences that are fast, accessible, visually appealing, and responsive. My focus is creating intuitive and dynamic user interfaces that provide real value to users.
              </p>
              <p>
                I have a proven track record of delivering high-quality web applications and collaborating effectively with cross-functional teams. My passion for clean code and attention to detail drive me to create solutions that not only look great but also perform exceptionally well.
              </p>
              <div class="about-info">
                <div class="row">
                  <div class="col-md-6">
                    <div class="info-item">
                      <i class="bi bi-envelope"></i>
                      <div>
                        <h5>Email</h5>
                        <p>sistlasree24@gmail.com</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="info-item">
                      <i class="bi bi-geo-alt"></i>
                      <div>
                        <h5>Location</h5>
                        <p>Hyderabad</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="info-item">
                      <i class="bi bi-translate"></i>
                      <div>
                        <h5>Languages</h5>
                        <p>English</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="info-item">
                      <i class="bi bi-briefcase"></i>
                      <div>
                        <h5>Freelance</h5>
                        <p>Available</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="about-buttons mt-4">
                <a href="https://drive.google.com/file/d/1HigDAt9dkvSyAVFxCgVWhyY6hjlgXbwx/view?usp=drive_link" class="btn btn-primary">Download CV</a>
                <a href="#contact" class="btn btn-outline ms-3">Hire Me</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

// Add styles when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  renderAbout();
});