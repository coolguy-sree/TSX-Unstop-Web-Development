export function renderContact() {
  // Add styles to document head
  const styleElement = document.createElement('style');
  styleElement.textContent = `
    .contact-info {
      background-color: var(--surface);
      border-radius: var(--border-radius-md);
      padding: var(--space-4);
      box-shadow: 0 5px 15px var(--shadow-color);
      height: 100%;
    }
    
    .contact-info h3 {
      font-size: 1.75rem;
      font-weight: 600;
      margin-bottom: var(--space-2);
    }
    
    .contact-info p {
      color: var(--text-secondary);
      margin-bottom: var(--space-3);
    }
    
    .contact-item {
      display: flex;
      align-items: flex-start;
      margin-bottom: var(--space-3);
    }
    
    .contact-item .icon {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: rgba(var(--primary-rgb), 0.1);
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: var(--space-2);
      color: var(--primary);
      font-size: 1.3rem;
      flex-shrink: 0;
    }
    
    .contact-item .text h5 {
      font-size: 1rem;
      font-weight: 600;
      margin-bottom: 5px;
    }
    
    .contact-item .text p {
      margin-bottom: 0;
      color: var(--text-secondary);
      font-size: 0.95rem;
    }
    
    .social-links {
      display: flex;
      gap: var(--space-2);
    }
    
    .social-link {
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
    
    .social-link:hover {
      background-color: var(--primary);
      color: white;
      transform: translateY(-5px);
    }
    
    .contact-form-wrapper {
      background-color: var(--surface);
      border-radius: var(--border-radius-md);
      padding: var(--space-4);
      box-shadow: 0 5px 15px var(--shadow-color);
      height: 100%;
    }
    
    .form-group {
      margin-bottom: var(--space-3);
    }
    
    .form-control {
      height: 50px;
      padding: 10px 15px;
      font-size: 1rem;
      border: 1px solid var(--border-color);
      border-radius: var(--border-radius-sm);
      background-color: var(--background);
      color: var(--text-primary);
      transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
    }
    
    .form-control:focus {
      border-color: var(--primary);
      box-shadow: 0 0 0 0.25rem rgba(var(--primary-rgb), 0.25);
    }
    
    textarea.form-control {
      height: auto;
      resize: vertical;
    }
    
    label {
      display: block;
      margin-bottom: 8px;
      font-weight: 500;
      color: var(--text-primary);
    }
    
    @media (max-width: 992px) {
      .contact-info {
        margin-bottom: var(--space-4);
      }
      
      .contact-form-wrapper {
        height: auto;
      }
    }
  `;
  document.head.appendChild(styleElement);

  return `
    <section id="contact" class="contact py-5">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center mb-5">
            <span class="section-subtitle" data-aos="fade-up">Get In Touch</span>
            <h2 class="section-title" data-aos="fade-up" data-aos-delay="100">Contact Me</h2>
          </div>
        </div>
        
        <div class="row">
          <div class="col-lg-5" data-aos="fade-right">
            <div class="contact-info">
              <h3>Let's talk about everything!</h3>
              <p>
                Feel free to reach out if you want to collaborate on a project, have a job opportunity, 
                or just want to say hello. I'll get back to you as soon as possible.
              </p>
              
              <div class="contact-item">
                <div class="icon">
                  <i class="bi bi-geo-alt"></i>
                </div>
                <div class="text">
                  <h5>Location:</h5>
                  <p>Hyderabad</p>
                </div>
              </div>
              
              <div class="contact-item">
                <div class="icon">
                  <i class="bi bi-envelope"></i>
                </div>
                <div class="text">
                  <h5>Email:</h5>
                  <p>sistlasree24@gmail.com</p>
                </div>
              </div>
              
              <div class="contact-item">
                <div class="icon">
                  <i class="bi bi-phone"></i>
                </div>
                <div class="text">
                  <h5>Phone:</h5>
                  <p>+91 9063680491</p>
                </div>
              </div>
              
              <div class="contact-item">
                <div class="icon">
                  <i class="bi bi-calendar-check"></i>
                </div>
                <div class="text">
                  <h5>Availability:</h5>
                  <p>Monday - Friday, 9:00 AM - 5:00 PM</p>
                </div>
              </div>
              
              <div class="social-links mt-4">
                <a href="#" class="social-link" aria-label="GitHub">
                  <i class="bi bi-github"></i>
                </a>
                <a href="#" class="social-link" aria-label="LinkedIn">
                  <i class="bi bi-linkedin"></i>
                </a>
                <a href="#" class="social-link" aria-label="Twitter">
                  <i class="bi bi-twitter-x"></i>
                </a>
                <a href="#" class="social-link" aria-label="Dribbble">
                  <i class="bi bi-dribbble"></i>
                </a>
              </div>
            </div>
          </div>
          
          <div class="col-lg-7 mt-5 mt-lg-0" data-aos="fade-left">
            <div class="contact-form-wrapper">
              <form id="contact-form" class="contact-form">
                <div class="row">
                  <div class="col-md-6 form-group">
                    <label for="name">Full Name</label>
                    <input type="text" id="name" name="name" class="form-control" required>
                  </div>
                  
                  <div class="col-md-6 form-group">
                    <label for="email">Email Address</label>
                    <input type="email" id="email" name="email" class="form-control" required>
                  </div>
                </div>
                
                <div class="form-group mt-3">
                  <label for="subject">Subject</label>
                  <input type="text" id="subject" name="subject" class="form-control" required>
                </div>
                
                <div class="form-group mt-3">
                  <label for="message">Message</label>
                  <textarea id="message" name="message" rows="6" class="form-control" required></textarea>
                </div>
                
                <div class="form-group mt-4 text-center">
                  <button type="submit" class="btn btn-primary">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

// Add form handling when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  renderContact();
  
  // Add contact form functionality
  document.addEventListener('submit', (e) => {
    if (e.target.id === 'contact-form') {
      e.preventDefault();
      
      // Get form data
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData.entries());
      
      // Simple form validation
      let isValid = true;
      const fields = ['name', 'email', 'subject', 'message'];
      
      fields.forEach(field => {
        const input = document.getElementById(field);
        if (!input.value.trim()) {
          input.classList.add('is-invalid');
          isValid = false;
        } else {
          input.classList.remove('is-invalid');
        }
      });
      
      if (isValid) {
        // In a real app, you would send this data to a server
        console.log('Form submitted:', data);
        
        // Show success message
        alert('Thank you! Your message has been sent successfully.');
        
        // Reset form
        e.target.reset();
      }
    }
  });
});