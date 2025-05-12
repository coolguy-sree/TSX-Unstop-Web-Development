import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import AOS from 'aos'
import { renderNavigation } from './js/navigation.js'
import { renderHero } from './js/hero.js'
import { renderAbout } from './js/about.js'
import { renderSkills } from './js/skills.js'
import { renderProjects } from './js/projects.js'
import { renderContact } from './js/contact.js'
import { renderFooter } from './js/footer.js'
import { setupThemeToggle } from './js/theme.js'
import { initializeAnimations } from './js/animations.js'

document.addEventListener('DOMContentLoaded', () => {
  // Initialize AOS (Animate On Scroll)
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    mirror: false
  })
  
  // Render all sections
  const appContainer = document.querySelector('#app')
  appContainer.innerHTML = `
    ${renderNavigation()}
    <main>
      ${renderHero()}
      ${renderAbout()}
      ${renderSkills()}
      ${renderProjects()}
      ${renderContact()}
    </main>
    ${renderFooter()}
  `
  
  // Setup functionality
  setupThemeToggle()
  initializeAnimations()
})