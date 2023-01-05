function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector('input')
const createBtnEl = document.querySelector('[data-create]')
const destroyBtnEl = document.querySelector('[data-destroy]')
const boxEl = document.querySelector('#boxes')

let amount = 0
let divArray = []

inputEl.addEventListener('input', handleInputChange)
createBtnEl.addEventListener('click', handleCreateBtnClick)
destroyBtnEl.addEventListener('click', handleDestroyBtnClick)

function handleInputChange(event) {
  console.log(event.target.value)
  amount = event.target.value
  return amount
}

function handleCreateBtnClick() {
  createBoxes(amount)
}

function handleDestroyBtnClick() {
  boxEl.innerHTML = ''
  divArray = []
}

function createBoxes(amount) {
  for(let i = 30; i < amount * 10 + 30; i += 10) {
    const color = getRandomHexColor()
    const box = `<div style="background-color: ${color}; width: ${i}px; height: ${i}px;"></div>`

    divArray.push(box)
  }

  boxEl.insertAdjacentHTML('beforeend', divArray.join(''))
}