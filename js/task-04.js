const decrementBtnEl = document.querySelector('[data-action="decrement"]')
const incrementBtnEl = document.querySelector('[data-action="increment"]')
const valueEl = document.querySelector('#value')
let counterValue = 0

decrementBtnEl.addEventListener('click', handleDecrementBtnClick)
incrementBtnEl.addEventListener('click', handleIncrementBtnClick)

function handleDecrementBtnClick() {
    counterValue -= 1
    valueEl.textContent = counterValue
}

function handleIncrementBtnClick() {
    counterValue += 1
    valueEl.textContent = counterValue
}