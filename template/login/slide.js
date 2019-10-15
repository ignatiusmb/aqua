/*! Aqua v0.19.10 by @ignatiusmb - https://imbagus.com
 *  MIT Licensed --> https://aqua.imbagus.com
 */
for (const formWrapper of document.querySelectorAll('.aqua-form-wrapper')) {
  formWrapper.querySelector('#sign-up').addEventListener('click', () => {
    formWrapper.classList.add('toggled')
  })
  formWrapper.querySelector('#sign-in').addEventListener('click', () => {
    formWrapper.classList.remove('toggled')
  })
}
