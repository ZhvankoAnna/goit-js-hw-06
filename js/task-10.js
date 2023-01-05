function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector('input')
const createBtnEl = document.querySelector('[data-create]')
const destroyBtnEl = document.querySelector('[data-destroy]')
const boxEl = document.querySelector('#boxes')

let amount = 0
let divArray = []
let size = 30

inputEl.addEventListener('input', handleInputChange)
createBtnEl.addEventListener('click', handleCreateBtnClick)
destroyBtnEl.addEventListener('click', handleDestroyBtnClick)

function handleInputChange(event) {
  event.preventDefault()

  amount = event.target.value
}

function handleCreateBtnClick() {
  divArray = []
  createBoxes(amount)
}

function handleDestroyBtnClick() {
  boxEl.innerHTML = ''
  count = 30
}

function createBoxes(amount) {
  for(let i = 0; i < amount; i++) {
    const color = getRandomHexColor()
    const box = `<div style="background-color: ${color}; width: ${size}px; height: ${size}px;"></div>`
    size +=10
    divArray.push(box)
  }

  boxEl.insertAdjacentHTML('beforeend', divArray.join(''))
}