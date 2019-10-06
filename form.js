for (const form of document.getElementsByClassName('bss-form')) {
  if (form.tagName === 'FORM') {
    for (const input of form.getElementsByTagName('input')) {
      const label = document.createElement('label')
      const newInput = document.createElement('input')
      const placeholder = document.createElement('span')

      label.htmlFor = input.type
      newInput.type = input.type
      newInput.placeholder = ' '
      placeholder.textContent = input.placeholder
      placeholder.textContent.charAt(0).toUpperCase()

      label.appendChild(newInput)
      label.appendChild(placeholder)
      input.insertAdjacentElement('afterend', label)
      form.removeChild(input)
    }
  }
}
