export function renderProjects() {
  // Add styles to document head
  const styleElement = document.createElement('style');
  styleElement.textContent = `
    .portfolio-filter {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: var(--space-2);
      margin-bottom: var(--space-4);
    }
    
    .filter-btn {
      padding: 8px 20px;
      background-color: transparent;
      border: 1px solid var(--border-color);
      border-radius: var(--border-radius-sm);
      color: var(--text-secondary);
      font-weight: 500;
      cursor: pointer;
      transition: all var(--transition-fast);
    }
    
    .filter-btn.active, .filter-btn:hover {
      background-color: var(--primary);
      color: white;
      border-color: var(--primary);
    }
    
    .portfolio-container {
      position: relative;
    }
    
    .portfolio-item {
      margin-bottom: var(--space-4);
    }
    
    .portfolio-card {
      position: relative;
      overflow: hidden;
      border-radius: var(--border-radius-md);
      box-shadow: 0 5px 15px var(--shadow-color);
      transition: transform var(--transition-normal);
    }
    
    .portfolio-card:hover {
      transform: translateY(-10px);
    }
    
    .portfolio-img {
      overflow: hidden;
      position: relative;
    }
    
    .portfolio-img img {
      width: 100%;
      height: 250px;
      object-fit: cover;
      transition: transform var(--transition-normal);
    }
    
    .portfolio-card:hover .portfolio-img img {
      transform: scale(1.1);
    }
    
    .portfolio-info {
      padding: var(--space-3);
      background-color: var(--surface);
      position: relative;
      z-index: 1;
    }
    
    .portfolio-info h4 {
      font-size: 1.25rem;
      font-weight: 600;
      margin-bottom: 5px;
    }
    
    .portfolio-info p {
      color: var(--primary);
      font-size: 0.9rem;
      margin-bottom: var(--space-2);
    }
    
    .portfolio-links {
      display: flex;
      gap: var(--space-2);
    }
    
    .portfolio-link {
      width: 35px;
      height: 35px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgba(var(--primary-rgb), 0.1);
      border-radius: 50%;
      color: var(--primary);
      font-size: 1.2rem;
      transition: all var(--transition-fast);
    }
    
    .portfolio-link:hover {
      background-color: var(--primary);
      color: white;
    }
    
    @media (max-width: 576px) {
      .portfolio-filter {
        flex-direction: column;
        align-items: center;
      }
      
      .filter-btn {
        width: 100%;
        max-width: 200px;
      }
      
      .portfolio-img img {
        height: 200px;
      }
    }
  `;
  document.head.appendChild(styleElement);

  return `
    <section id="projects" class="projects py-5">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center mb-5">
            <span class="section-subtitle" data-aos="fade-up">My Portfolio</span>
            <h2 class="section-title" data-aos="fade-up" data-aos-delay="100">Recent Projects</h2>
          </div>
        </div>
        
        <div class="row mb-4">
          <div class="col-12 text-center" data-aos="fade-up">
            <div class="portfolio-filter">
              <button class="filter-btn active" data-filter="all">All</button>
              <button class="filter-btn" data-filter="web">Web Development</button>
              <button class="filter-btn" data-filter="ui">UI/UX Design</button>
              <button class="filter-btn" data-filter="app">Mobile App</button>
            </div>
          </div>
        </div>
        
        <div class="row portfolio-container">
          <div class="col-lg-4 col-md-6 portfolio-item web" data-aos="fade-up">
            <div class="portfolio-card">
              <div class="portfolio-img">
                <img src="https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="E-commerce Website" class="img-fluid">
              </div>
              <div class="portfolio-info">
                <h4>E-commerce Platform</h4>
                <p>Web Development</p>
                <div class="portfolio-links">
                  <a href="#" class="portfolio-link" title="View Details">
                    <i class="bi bi-link-45deg"></i>
                  </a>
                  <a href="#" class="portfolio-link" title="View Code">
                    <i class="bi bi-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div class="col-lg-4 col-md-6 portfolio-item ui" data-aos="fade-up" data-aos-delay="100">
            <div class="portfolio-card">
              <div class="portfolio-img">
                <img src="https://images.pexels.com/photos/326501/pexels-photo-326501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Mobile Banking App" class="img-fluid">
              </div>
              <div class="portfolio-info">
                <h4>Mobile Banking App</h4>
                <p>UI/UX Design</p>
                <div class="portfolio-links">
                  <a href="#" class="portfolio-link" title="View Details">
                    <i class="bi bi-link-45deg"></i>
                  </a>
                  <a href="#" class="portfolio-link" title="View Code">
                    <i class="bi bi-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div class="col-lg-4 col-md-6 portfolio-item app" data-aos="fade-up" data-aos-delay="200">
            <div class="portfolio-card">
              <div class="portfolio-img">
                <img src="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Fitness Tracker App" class="img-fluid">
              </div>
              <div class="portfolio-info">
                <h4>Fitness Tracker App</h4>
                <p>Mobile App</p>
                <div class="portfolio-links">
                  <a href="#" class="portfolio-link" title="View Details">
                    <i class="bi bi-link-45deg"></i>
                  </a>
                  <a href="#" class="portfolio-link" title="View Code">
                    <i class="bi bi-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div class="col-lg-4 col-md-6 portfolio-item web" data-aos="fade-up" data-aos-delay="300">
            <div class="portfolio-card">
              <div class="portfolio-img">
                <img src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Blog Platform" class="img-fluid">
              </div>
              <div class="portfolio-info">
                <h4>Blog Platform</h4>
                <p>Web Development</p>
                <div class="portfolio-links">
                  <a href="#" class="portfolio-link" title="View Details">
                    <i class="bi bi-link-45deg"></i>
                  </a>
                  <a href="#" class="portfolio-link" title="View Code">
                    <i class="bi bi-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div class="col-lg-4 col-md-6 portfolio-item ui" data-aos="fade-up" data-aos-delay="400">
            <div class="portfolio-card">
              <div class="portfolio-img">
                <img src="https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Food Delivery App" class="img-fluid">
              </div>
              <div class="portfolio-info">
                <h4>Food Delivery App</h4>
                <p>UI/UX Design</p>
                <div class="portfolio-links">
                  <a href="#" class="portfolio-link" title="View Details">
                    <i class="bi bi-link-45deg"></i>
                  </a>
                  <a href="#" class="portfolio-link" title="View Code">
                    <i class="bi bi-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div class="col-lg-4 col-md-6 portfolio-item app" data-aos="fade-up" data-aos-delay="500">
            <div class="portfolio-card">
              <div class="portfolio-img">
                <img src="https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Travel Booking App" class="img-fluid">
              </div>
              <div class="portfolio-info">
                <h4>Travel Booking App</h4>
                <p>Mobile App</p>
                <div class="portfolio-links">
                  <a href="#" class="portfolio-link" title="View Details">
                    <i class="bi bi-link-45deg"></i>
                  </a>
                  <a href="#" class="portfolio-link" title="View Code">
                    <i class="bi bi-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="row mt-5">
          <div class="col-12 text-center" data-aos="fade-up">
            <a href="#" class="btn btn-outline">View All Projects</a>
          </div>
        </div>
      </div>
    </section>
  `;
}

// Add projects functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  renderProjects();
  
  // Add portfolio filtering functionality
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('filter-btn')) {
      const filterValue = e.target.getAttribute('data-filter');
      
      // Update active button
      document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
      });
      e.target.classList.add('active');
      
      // Filter items
      document.querySelectorAll('.portfolio-item').forEach(item => {
        if (filterValue === 'all' || item.classList.contains(filterValue)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    }
  });
});