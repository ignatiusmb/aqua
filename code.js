/*!
 * Aqua v0.19.10 by @ignatiusmb - https://imbagus.com
 * MIT Licensed --> https://aqua.imbagus.com
 */
window.aqua = window.aqua || {}
aqua.code = {
  createToolbar: pre => {
    const toolbar = document.createElement('div')
    toolbar.className = 'aqua-code-toolbar'
    const createTool = (iconClass, text) => {
      const tool = document.createElement('a')
      const icon = document.createElement('i')
      const tooltip = document.createElement('span')
      tool.className = `aqua-ctb-item`
      icon.className = iconClass
      tooltip.className = 'aqua-ctb-tooltip'
      tooltip.innerText = text
      tool.appendChild(icon)
      tool.appendChild(tooltip)
      return { tool, tooltip }
    }

    // Toggle Numbering Button
    const numbering = createTool('fas fa-list-ol', 'Toggle Numbering')
    numbering.tool.addEventListener('click', () => pre.classList.toggle('numbered'))
    toolbar.appendChild(numbering.tool)

    // Copy Code Button
    const copy = createTool('far fa-copy', 'Copy')
    copy.tool.addEventListener('click', () => {
      const codeLines = pre.querySelectorAll('code')
      const copyArea = document.createElement('textarea')
      copyArea.className = 'ghost-area'
      for (const code of codeLines) copyArea.value += code.innerText
      document.body.appendChild(copyArea)
      copyArea.focus()
      copyArea.select()
      try {
        if (document.execCommand('copy')) {
          copy.tooltip.innerText = 'Copied!'
          setTimeout(() => (copy.tooltip.innerText = 'Copy'), 5000)
        } else {
          copy.tooltip.innerText = 'Copy Failed'
          setTimeout(() => (copy.tooltip.innerText = 'Copy'), 5000)
        }
      } catch (err) {
        alert('An error occurred while copying, copy failed')
      }
      document.body.removeChild(copyArea)
    })
    toolbar.appendChild(copy.tool)

    return toolbar
  },
  init: () => {
    if (document.querySelectorAll('div.aqua-code-toolbar').length) return
    for (const codeFormat of document.querySelectorAll('pre.aqua-code')) {
      const language = codeFormat.dataset.language
      const title = codeFormat.dataset.title
      let lineNumber = parseInt(codeFormat.dataset.lineStart)
      const wrapper = document.createElement('div')
      const header = document.createElement('div')
      const pre = document.createElement('pre')
      wrapper.classList.add('aqua-code-box')
      header.classList.add('aqua-code-header')
      header.dataset.language = language ? language : ''
      pre.className = codeFormat.className

      if (title) header.textContent = title
      else header.classList.add('empty')
      if (language) pre.classList.add(`language-${language}`)
      else pre.classList.add('language-none')

      if (!lineNumber) lineNumber = 1
      for (const line of codeFormat.textContent.split('\n')) {
        const code = document.createElement('code')
        code.dataset.line = lineNumber++
        code.textContent = `${line}\n`
        pre.appendChild(code)
      }
      while (!pre.lastChild.textContent.trim().length) pre.removeChild(pre.lastChild)
      header.appendChild(aqua.code.createToolbar(pre))
      wrapper.appendChild(header)
      wrapper.appendChild(pre)
      codeFormat.replaceWith(wrapper)
    }
  }
}
;(() => {
  const prism = document.createElement('script')
  prism.type = 'text/javascript'
  prism.src = 'https://cdn.imbagus.com/ajax/prism.js'
  prism.dataset.manual = true
  prism.onload = () => (aqua.code.highlight = () => Prism.highlightAll())
  document.head.appendChild(prism)
})()
