const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulElem = document.querySelector('#ingredients')

const listElems = ingredients.map(item => {
  const itemEl = document.createElement("li")
  itemEl.textContent = item
  itemEl.classList.add('item')
  return itemEl
})

ulElem.append(...listElems)