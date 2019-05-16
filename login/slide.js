document.getElementById('sign-up').addEventListener('click', () => {
  document.getElementById('form-container').classList.add('toggled')
})

document.getElementById('sign-in').addEventListener('click', () => {
  document.getElementById('form-container').classList.remove('toggled')
})
