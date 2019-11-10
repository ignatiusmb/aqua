import STATIC from './helper/static'
import is from './helper/is'

const syntaxHighlighter = (manual = false) => {
  if (is.highlighter.added || is.highlighter.loaded) return
  is.highlighter.added = true

  const url = 'https://cdn.imbagus.com/ajax/prism.js'
  if (manual) return url

  const prism = document.createElement('script')
  prism.type = 'text/javascript'
  prism.src = url
  prism.dataset.manual = true
  return document.body.appendChild(prism)
}

const highlight = () => {
  if (is.highlighter.running) return
  if (!is.highlighter.loaded) {
    syntaxHighlighter().onload = () => (is.highlighter.loaded = true)
    is.highlighter.running = true
    const check = setTimeout(() => {
      if (is.highlighter.loaded) {
        Prism.highlightAll()
        is.highlighter.running = false
        clearTimeout(check)
      } else setTimeout(check, STATIC.checkTimeout)
    }, STATIC.checkTimeout)
  } else Prism.highlightAll()
}

const createToolbar = pre => {
  const toolbar = document.createElement('div')
  toolbar.className = 'aqua-code-toolbar'
  const createTool = (iconClass, description) => {
    const tool = document.createElement('a')
    const icon = document.createElement('i')
    const tooltip = document.createElement('span')
    tool.className = `aqua-ctb-item`
    icon.className = iconClass
    tooltip.className = 'aqua-ctb-tooltip'
    tooltip.innerText = description
    tool.appendChild(icon)
    tool.appendChild(tooltip)
    return tool
  }
  const snackbar = document.querySelector('.aqua-snackbar.code')

  // Toggle Numbering Button
  const numbering = createTool('fas fa-list-ol', 'Toggle Numbering')
  numbering.addEventListener('click', () => pre.classList.toggle('numbered'))
  toolbar.appendChild(numbering)

  // Copy Code Button
  const copy = createTool('far fa-copy', 'Copy')
  const copyTimeout = {}
  copy.addEventListener('click', () => {
    const codeLines = pre.querySelectorAll('code')
    const copyArea = document.createElement('textarea')
    const description = document.createElement('span')
    copyArea.className = 'ghost-area'
    for (const code of codeLines) copyArea.value += code.innerText
    document.body.appendChild(copyArea)
    copyArea.focus()
    copyArea.select()
    try {
      if (document.execCommand('copy')) description.textContent = 'Copied to clipboard!'
      else description.textContent = 'Copy failed'
    } catch (err) {
      description.textContent = `An error occurred --> ${err}`
    }
    if (snackbar.firstChild.tagName !== 'I') snackbar.removeChild(snackbar.firstChild)
    snackbar.insertAdjacentElement('afterbegin', description)
    if (!snackbar.classList.contains('show')) {
      if (copyTimeout.add) clearTimeout(copyTimeout.add)
      if (copyTimeout.remove) clearTimeout(copyTimeout.remove)
      copyTimeout.add = setTimeout(() => snackbar.classList.add('show'), 200)
      copyTimeout.remove = setTimeout(() => snackbar.classList.remove('show'), 5000)
    } else {
      if (copyTimeout.add) clearTimeout(copyTimeout.add)
      if (copyTimeout.remove) clearTimeout(copyTimeout.remove)
      snackbar.classList.remove('show')
      copyTimeout.add = setTimeout(() => snackbar.classList.add('show'), 600)
      copyTimeout.remove = setTimeout(() => snackbar.classList.remove('show'), 5000)
    }
    document.body.removeChild(copyArea)
  })
  toolbar.appendChild(copy)

  return toolbar
}

const init = () => {
  if (document.querySelectorAll('div.aqua-code-toolbar').length) return
  if (!document.querySelector('.aqua-snackbar.code')) {
    const snackbar = document.createElement('div')
    snackbar.className = 'aqua-snackbar code'
    const icon = document.createElement('i')
    icon.className = 'fas fa-times'
    icon.addEventListener('click', () => snackbar.classList.remove('show'))
    snackbar.appendChild(icon)
    document.body.appendChild(snackbar)
  }
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
    while (!pre.firstChild.textContent.trim().length) pre.removeChild(pre.firstChild)
    while (!pre.lastChild.textContent.trim().length) pre.removeChild(pre.lastChild)
    header.appendChild(Aqua.code.createToolbar(pre))
    wrapper.appendChild(header)
    wrapper.appendChild(pre)
    codeFormat.replaceWith(wrapper)
  }
}

export { init as default, syntaxHighlighter, highlight, createToolbar }
