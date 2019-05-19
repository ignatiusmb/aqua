for (const modal of document.getElementsByClassName('bsh-modal')) {
  const popup = modal.getElementsByClassName('popup')[0]
  const popContent = popup.getElementsByClassName('content')[0]
  popContent.classList.add('bsa-zoom')

  const close = document.createElement('a')
  close.className = 'close'
  const closeIcon = document.createElement('i')
  closeIcon.className = 'fas fa-window-close'
  close.appendChild(closeIcon)
  close.addEventListener('click', popup.classList.remove('pop'))
  popContent.insertAdjacentElement('afterbegin', close)

  for (const preview of modal.getElementsByClassName('preview')) {
    for (const overlay of preview.getElementsByClassName('overlay')) {
      const icon = document.createElement('i')
      icon.className = 'fas fa-plus'
      overlay.appendChild(icon)
    }
    preview.addEventListener('click', () => {
      popup.classList.add('pop')
      document.body.style.overflow = 'hidden'
    })
  }

  for (const close of popup.getElementsByClassName('close')) {
    close.addEventListener('click', () => {
      popup.classList.remove('pop')
      document.body.style.overflow = 'unset'
    })
  }
}
