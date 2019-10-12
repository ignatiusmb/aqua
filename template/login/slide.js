const formWrapper = document.getElementById('aqua-form-wrapper')
document.getElementById('sign-up').addEventListener('click', () => {
  formWrapper.classList.add('toggled')
})
document.getElementById('sign-in').addEventListener('click', () => {
  formWrapper.classList.remove('toggled')
})
