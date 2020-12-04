const addElement = (type, parent = '#content', text, attribute, attributeValue) => {
  let parentEl = document.querySelector(parent);
  let newElement = document.createElement(type);
  if (text) {
    newElement.textContent = text;
  }
  if (attribute) {
    newElement.setAttribute(attribute, attributeValue)
  }
  parentEl.appendChild(newElement);
  return newElement;
}

export default addElement