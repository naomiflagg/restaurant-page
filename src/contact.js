import addElement from './addElement'

const createContent = () => {
  // Contact header
  addElement('h2', undefined, 'Contact the owner');

  // Contact sub-headers
  addElement('h3', undefined, undefined, 'class', 'github');
  addElement('a', '.github', 'Github', 'href', 'https://github.com/naomiflagg/');

  addElement('h3', undefined, undefined, 'class', 'linkedin');
  addElement('a', '.linkedin', 'LinkedIn', 'href', 'https://www.linkedin.com/in/naomiflagg/');
}

const loadContactPage = () => {
  const content = createContent();
}

export default loadContactPage