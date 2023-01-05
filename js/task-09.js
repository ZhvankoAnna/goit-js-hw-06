function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonEl = document.querySelector('.change-color')
const colorValueEl = document.querySelector('.color')

buttonEl.addEventListener('click', handleButtonClick)

function handleButtonClick() {
  const color = getRandomHexColor()

  document.body.style.backgroundColor = color
  colorValueEl.textContent = color
}