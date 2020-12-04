import addElement from './addElement'

const createContent = () => {
  // Header
  const body = document.querySelector('body');
  const header = document.createElement('header');
  body.prepend(header);
  addElement('h1', 'header', "Flagg's Favorite Foods");
  
  // Navigation bar
  addElement('nav', 'header')
  
  // Navigation tabs
  addElement('ul', 'nav', undefined, 'class', 'nav-list');
  const menu = ['HOME', 'MENU', 'CONTACT']
  menu.forEach(tab => {
    addElement('li', '.nav-list', tab, 'class', tab.toLowerCase())
  });
}

const loadBase = () => {
  const content = createContent();
}

export default loadBase