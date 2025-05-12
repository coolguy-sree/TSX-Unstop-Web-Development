export function renderSkills() {
  // Add styles to document head
  const styleElement = document.createElement('style');
  styleElement.textContent = `
    .skills {
      background-color: var(--background);
    }
    
    .skills-content h3 {
      font-size: 1.75rem;
      font-weight: 600;
      margin-bottom: var(--space-2);
    }
    
    .skills-content p {
      color: var(--text-secondary);
      margin-bottom: var(--space-3);
    }
    
    .skill-item {
      margin-bottom: var(--space-3);
    }
    
    .skill-info {
      display: flex;
      justify-content: space-between;
      margin-bottom: 8px;
    }
    
    .skill-info h5 {
      font-size: 1rem;
      font-weight: 600;
      margin-bottom: 0;
    }
    
    .skill-info span {
      font-weight: 500;
      color: var(--primary);
    }
    
    .progress {
      height: 8px;
      background-color: var(--neutral-200);
      border-radius: var(--border-radius-sm);
      overflow: hidden;
    }
    
    .progress-bar {
      height: 100%;
      background: linear-gradient(to right, var(--primary), var(--accent));
      border-radius: var(--border-radius-sm);
      transition: width 1.5s ease-in-out;
    }
    
    .service-card {
      background-color: var(--surface);
      border-radius: var(--border-radius-md);
      padding: var(--space-3);
      box-shadow: 0 5px 15px var(--shadow-color);
      height: 100%;
      transition: all var(--transition-normal);
      position: relative;
      overflow: hidden;
      z-index: 1;
    }
    
    .service-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, var(--primary), var(--accent));
      z-index: -1;
      opacity: 0;
      transition: opacity var(--transition-normal);
    }
    
    .service-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 15px 30px var(--shadow-color);
    }
    
    .service-card:hover::before {
      opacity: 1;
    }
    
    .service-card:hover .service-icon,
    .service-card:hover h4,
    .service-card:hover p {
      color: white;
    }
    
    .service-icon {
      font-size: 2.5rem;
      color: var(--primary);
      margin-bottom: var(--space-2);
      transition: color var(--transition-normal);
    }
    
    .service-card h4 {
      font-size: 1.2rem;
      font-weight: 600;
      margin-bottom: var(--space-2);
      transition: color var(--transition-normal);
    }
    
    .service-card p {
      margin-bottom: 0;
      color: var(--text-secondary);
      transition: color var(--transition-normal);
    }
    
    .tech-stack {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: var(--space-3);
      margin-top: var(--space-4);
    }
    
    .tech-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100px;
      transition: transform var(--transition-fast);
    }
    
    .tech-item:hover {
      transform: translateY(-5px);
    }
    
    .tech-item i {
      font-size: 2.5rem;
      color: var(--primary);
      margin-bottom: var(--space-1);
    }
    
    .tech-item span {
      font-size: 0.9rem;
      font-weight: 500;
    }
    
    @media (max-width: 992px) {
      .service-card {
        margin-bottom: var(--space-3);
      }
    }
    
    @media (max-width: 576px) {
      .tech-item {
        width: 80px;
      }
      
      .tech-item i {
        font-size: 2rem;
      }
      
      .tech-item span {
        font-size: 0.8rem;
      }
    }
  `;
  document.head.appendChild(styleElement);

  return `
    <section id="skills" class="skills py-5 bg-light">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center mb-5">
            <span class="section-subtitle" data-aos="fade-up">My Skills</span>
            <h2 class="section-title" data-aos="fade-up" data-aos-delay="100">My Expertise</h2>
          </div>
        </div>
        
        <div class="row">
          <div class="col-lg-6" data-aos="fade-right">
            <div class="skills-content mb-5">
              <h3>Technical Skills</h3>
              <p>
                Throughout my career, I've acquired a diverse set of skills that allow me to 
                create exceptional digital experiences from concept to deployment.
              </p>
            </div>
            
            <div class="skills-progress">
              <div class="skill-item" data-aos="fade-up">
                <div class="skill-info">
                  <h5>HTML/CSS</h5>
                  <span>95%</span>
                </div>
                <div class="progress">
                  <div class="progress-bar" role="progressbar" style="width: 95%" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              
              <div class="skill-item" data-aos="fade-up" data-aos-delay="100">
                <div class="skill-info">
                  <h5>JavaScript</h5>
                  <span>90%</span>
                </div>
                <div class="progress">
                  <div class="progress-bar" role="progressbar" style="width: 90%" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              
              <div class="skill-item" data-aos="fade-up" data-aos-delay="200">
                <div class="skill-info">
                  <h5>React</h5>
                  <span>88%</span>
                </div>
                <div class="progress">
                  <div class="progress-bar" role="progressbar" style="width: 88%" aria-valuenow="88" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              
              <div class="skill-item" data-aos="fade-up" data-aos-delay="300">
                <div class="skill-info">
                  <h5>UI/UX Design</h5>
                  <span>85%</span>
                </div>
                <div class="progress">
                  <div class="progress-bar" role="progressbar" style="width: 85%" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              
              <div class="skill-item" data-aos="fade-up" data-aos-delay="400">
                <div class="skill-info">
                  <h5>Node.js</h5>
                  <span>80%</span>
                </div>
                <div class="progress">
                  <div class="progress-bar" role="progressbar" style="width: 80%" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="col-lg-6 mt-5 mt-lg-0" data-aos="fade-left">
            <div class="row">
              <div class="col-md-6" data-aos="zoom-in" data-aos-delay="100">
                <div class="service-card">
                  <div class="service-icon">
                    <i class="bi bi-code-slash"></i>
                  </div>
                  <h4>Web Development</h4>
                  <p>Building responsive and performant websites with modern technologies.</p>
                </div>
              </div>
              
              <div class="col-md-6" data-aos="zoom-in" data-aos-delay="200">
                <div class="service-card">
                  <div class="service-icon">
                    <i class="bi bi-palette"></i>
                  </div>
                  <h4>UI/UX Design</h4>
                  <p>Creating intuitive and beautiful user interfaces and experiences.</p>
                </div>
              </div>
              
              <div class="col-md-6" data-aos="zoom-in" data-aos-delay="300">
                <div class="service-card">
                  <div class="service-icon">
                    <i class="bi bi-phone"></i>
                  </div>
                  <h4>Responsive Design</h4>
                  <p>Ensuring your site looks and works perfectly on all devices.</p>
                </div>
              </div>
              
              <div class="col-md-6" data-aos="zoom-in" data-aos-delay="400">
                <div class="service-card">
                  <div class="service-icon">
                    <i class="bi bi-speedometer2"></i>
                  </div>
                  <h4>Performance Optimization</h4>
                  <p>Improving site speed and overall performance for better user experience.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="row mt-5 pt-4">
          <div class="col-12 text-center" data-aos="fade-up">
            <h3>Tools & Technologies</h3>
            <div class="tech-stack">
              <div class="tech-item" data-aos="zoom-in" data-aos-delay="100">
                <i class="bi bi-filetype-html"></i>
                <span>HTML5</span>
              </div>
              <div class="tech-item" data-aos="zoom-in" data-aos-delay="150">
                <i class="bi bi-filetype-css"></i>
                <span>CSS3</span>
              </div>
              <div class="tech-item" data-aos="zoom-in" data-aos-delay="200">
                <i class="bi bi-filetype-js"></i>
                <span>JavaScript</span>
              </div>
              <div class="tech-item" data-aos="zoom-in" data-aos-delay="250">
                <i class="bi bi-react"></i>
                <span>React</span>
              </div>
              <div class="tech-item" data-aos="zoom-in" data-aos-delay="300">
                <i class="bi bi-bootstrap"></i>
                <span>Bootstrap</span>
              </div>
              <div class="tech-item" data-aos="zoom-in" data-aos-delay="350">
                <i class="bi bi-git"></i>
                <span>Git</span>
              </div>
              <div class="tech-item" data-aos="zoom-in" data-aos-delay="400">
                <i class="bi bi-github"></i>
                <span>GitHub</span>
              </div>
              <div class="tech-item" data-aos="zoom-in" data-aos-delay="450">
                <i class="bi bi-filetype-sass"></i>
                <span>Sass</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

// Add skills when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  renderSkills();
});