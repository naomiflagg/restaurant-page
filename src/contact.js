import addElement from './addElement'

const createContent = () => {
  // Contact header
  addElement('h2', undefined, 'Contact the owner');

  // Contact sub-headers
  addElement('h3', undefined, undefined, 'class', 'github');
  const gitIcon = addElement('i', '.github', undefined, 'class', 'fab');
  gitIcon.classList.add('fa-github');
  addElement('a', '.github', 'Github', 'href', 'https://github.com/naomiflagg/');

  addElement('h3', undefined, undefined, 'class', 'linkedin');
  const linkedIcon = addElement('i', '.linkedin', undefined, 'class', 'fab');
  linkedIcon.classList.add('fa-linkedin-in');
  addElement('a', '.linkedin', 'LinkedIn', 'href', 'https://www.linkedin.com/in/naomiflagg/');
}

const stylizeContent = () => {
  const content = document.querySelector('#content');
  content.classList.add('contact');
}

const loadContactPage = () => {
  const content = createContent();
  const stylize = stylizeContent();
}

export default loadContactPage