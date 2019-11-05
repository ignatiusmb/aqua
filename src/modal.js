/*! Aqua v0.19.10 by @ignatiusmb - https://imbagus.com
 *  MIT Licensed -> https://github.com/ignatiusmb/aqua
 */
window.Aqua = window.Aqua || {}
Aqua.modal = {
  init: () => {
    for (const modal of document.querySelectorAll('.aqua-modal')) {
      const popup = modal.querySelector('.aqua-modal-popup')
      const popContent = popup.querySelector('.content')
      popContent.classList.add('bsa-zoom')

      const close = document.createElement('a')
      close.className = 'close'
      const closeIcon = document.createElement('i')
      closeIcon.className = 'fas fa-window-close'
      close.appendChild(closeIcon)
      close.addEventListener('click', popup.classList.remove('pop'))
      popContent.insertAdjacentElement('afterbegin', close)

      for (const preview of modal.querySelectorAll('.aqua-modal-preview')) {
        for (const overlay of preview.querySelectorAll('.overlay')) {
          const icon = document.createElement('i')
          icon.className = 'fas fa-plus'
          overlay.appendChild(icon)
        }
        preview.addEventListener('click', () => {
          popup.classList.add('pop')
          document.body.style.overflow = 'hidden'
        })
      }

      for (const close of popup.querySelectorAll('.close')) {
        close.addEventListener('click', () => {
          popup.classList.remove('pop')
          document.body.style.overflow = 'unset'
        })
      }
    }
  }
}
