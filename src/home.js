import addElement from './addElement'

const createContent = () => {
  const link = 'https://images.unsplash.com/photo-1502301103665-0b95cc738daf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80';
  addElement('img', undefined, undefined, 'src', link);
  addElement('p', undefined, "Welcome to my restaurant! The selection is eclectic, but there's something for everyone!");
}

const loadHomePage = () => {
  const content = createContent();
}

export default loadHomePage