import loadHomePage from './home'
import loadContactPage from './contact'
import loadMenuPage from './menu';
import loadBase from './base';

loadBase();
loadHomePage();

const home = document.querySelector('.home');
const menu = document.querySelector('.menu');
const contact = document.querySelector('.contact');

// Event listeners for navigation
const eventListeners = (() => {
  home.addEventListener('click', (e) => {
    loadHomePage()
    toggleBackground(e.target);
  })

  menu.addEventListener('click', (e) => {
    loadMenuPage()
    toggleBackground(e.target);
  })

  contact.addEventListener('click', (e) => {
    loadContactPage()
    toggleBackground(e.target);
  })
})();

function toggleBackground(element) {
  const tabs = [home, menu, contact]
  tabs.forEach(tab => {
    if (tab === element && !element.classList.contains('light-bg')) {
      element.classList.add('light-bg');
    } else if (tab !== element) {
      tab.classList.remove('light-bg');
    }
  })
}