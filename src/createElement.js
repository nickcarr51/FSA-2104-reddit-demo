export const createEl = (el, classes, props) => {
  const element = document.createElement(el);

  classes.forEach(c => {
    element.classList.add(c);
  })

  for (let key in props) {
    element[key] = props[key]
  }

  return element;
}