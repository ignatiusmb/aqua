;(async function() {
  const prism = document.createElement('script')
  prism.type = 'text/javascript'
  prism.src = 'https://cdn.imbagus.com/ajax/prism.js'
  document.head.appendChild(prism)
})()
const bssCreateToolbar = el => {
  const toolbar = document.createElement('div')
  toolbar.className = 'bss-code-toolbar'
  const createTool = (iconClass, text) => {
    const tool = document.createElement('a')
    const icon = document.createElement('i')
    const tooltip = document.createElement('span')
    tool.className = `bss-ctb-item`
    icon.className = iconClass
    tooltip.className = 'bss-ctb-tooltip'
    tooltip.innerText = text
    tool.appendChild(icon)
    tool.appendChild(tooltip)
    return { tool, tooltip }
  }

  // Copy Code Button
  const copy = createTool('far fa-copy', 'Copy')
  copy.tool.addEventListener('click', () => {
    const codeLines = el.querySelectorAll('code')
    const copyArea = document.createElement('textarea')
    copyArea.className = 'ghost-area'
    for (const code of codeLines) copyArea.value += code.innerText
    document.body.appendChild(copyArea)
    copyArea.focus()
    copyArea.select()
    try {
      if (document.execCommand('copy')) {
        copy.tooltip.innerText = 'Copied!'
        setTimeout(() => {
          copy.tooltip.innerText = 'Copy'
        }, 5000)
      } else {
        copy.tooltip.innerText = 'Copy Failed'
        setTimeout(() => {
          copy.tooltip.innerText = 'Copy'
        }, 5000)
      }
    } catch (err) {
      alert('An error occurred while copying, copy failed')
    }
    document.body.removeChild(copyArea)
  })
  toolbar.appendChild(copy.tool)

  // Toggle Numbering Button
  const numbering = createTool('fas fa-list-ol', 'Toggle Numbering')
  numbering.tool.addEventListener('click', () => {
    el.classList.toggle('numbered')
  })
  toolbar.appendChild(numbering.tool)

  return toolbar
}

for (const bssCode of document.querySelectorAll('pre.bss-code')) {
  const language = bssCode.dataset.language
  const title = bssCode.dataset.title
  let lineNumber = parseInt(bssCode.dataset.lineStart)
  const wrapper = document.createElement('div')
  const header = document.createElement('div')
  const pre = document.createElement('pre')
  wrapper.classList.add('bss-code-box')
  header.classList.add('bss-code-header')
  header.dataset.language = language ? language : ''
  pre.className = bssCode.className

  if (title) header.textContent = title
  else header.classList.add('empty')
  if (language) pre.classList.add(`language-${language}`)
  else pre.classList.add('language-none')

  if (!lineNumber) lineNumber = 1
  for (const line of bssCode.textContent.split('\n')) {
    const code = document.createElement('code')
    code.dataset.line = lineNumber++
    code.textContent = `${line}\n`
    pre.appendChild(code)
  }
  while (!pre.lastChild.textContent.trim().length) pre.removeChild(pre.lastChild)
  header.appendChild(bssCreateToolbar(pre))
  wrapper.appendChild(header)
  wrapper.appendChild(pre)
  bssCode.replaceWith(wrapper)
}
