const inputEl = document.querySelector('#validation-input')

inputEl.addEventListener('blur', handleInputChange)

function handleInputChange(event) {
    if(Number(event.target.dataset.length) === event.target.value.length) {
        inputEl.classList.remove('invalid')
        inputEl.classList.add('valid')
    } else {
        inputEl.classList.remove('valid')
        inputEl.classList.add('invalid')
    }
}