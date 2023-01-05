const inputEl = document.querySelector('#name-input')
const nameEl = document.querySelector('#name-output')

inputEl.addEventListener('input', handleInputChange)

function handleInputChange(event) {
    nameEl.textContent = event.target.value
}