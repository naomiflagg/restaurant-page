import addElement from './addElement'

const createContent = () => {
  addElement('h2', undefined, 'Menu');
  
  // Appetizers
  addElement('h3', undefined, 'Appetizers', 'class', 'appetizers');
  addMenuSections('appetizers', ['Tom Yum soup', 'Beetroot salad', 'Prawn crackers', 'Crab bisque']);

  // Mains
  addElement('h3', undefined, 'Mains', 'class', 'mains');
  addMenuSections('mains', ['Spaghetti carbonara', 'Tofu and eggplant stirfry', 'Impossible burger', 'Pad see ew', 'Panang curry']);

  // Sides 
  addElement('h3', undefined, 'Sides', 'class', 'sides');
  addMenuSections('sides', ['Brussel sprouts', 'Sweet potato fries', 'Garlic green beans'])

  // Desserts
  addElement('h3', undefined, 'Desserts', 'class', 'desserts');
  addMenuSections('desserts', ['Lemon cheesecake', 'Blueberry crumble', 'Slice of Funfetti'])
}

const addMenuSections = (section, items) => {
  let sectionList = `${section}List`
  addElement('ul', `.${section}`, undefined, 'class', `${section}List`);
  addMenuItems(sectionList, items);
}

const addMenuItems = (sectionList, items) => {
  items.forEach(item => {
    addElement('li', `.${sectionList}`, item)
  })
}

const loadMenuPage = () => {
  const content = createContent();
}

export default loadMenuPage