export function setupThemeToggle() {
  document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Check for saved theme preference or use the system preference
    const savedTheme = localStorage.getItem('theme');
    
    // Apply the right theme based on saved preference or system preference
    if (savedTheme === 'dark' || (!savedTheme && prefersDarkScheme.matches)) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
    
    // Toggle theme when the button is clicked
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-theme');
      
      // Save the preference
      if (document.body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
      } else {
        localStorage.setItem('theme', 'light');
      }
    });
    
    // Listen for system preference changes
    prefersDarkScheme.addEventListener('change', (e) => {
      if (!localStorage.getItem('theme')) {
        if (e.matches) {
          document.body.classList.add('dark-theme');
        } else {
          document.body.classList.remove('dark-theme');
        }
      }
    });
  });
}