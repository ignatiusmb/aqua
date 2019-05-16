document.getElementById('sign-up').addEventListener('click', () => {
  document.getElementById('form-wrapper').classList.add('toggled')
})

document.getElementById('sign-in').addEventListener('click', () => {
  document.getElementById('form-wrapper').classList.remove('toggled')
})
