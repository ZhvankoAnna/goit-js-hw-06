const formEl = document.querySelector('.login-form')

formEl.addEventListener('submit', handleFormSubmit)

function handleFormSubmit(event) {
    event.preventDefault()

    const formElements = event.target.elements

    if(formElements.email.value.length === 0 || formElements.password.value.length === 0){
        alert("Bсі поля повинні бути заповнені")
    } else {
        const mail = formElements.email.value
        const password = formElements.password.value
        const formData = {mail, password}
        console.log(formData)
        formEl.reset()
    }
}