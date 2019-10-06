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

for (const codeBox of document.querySelectorAll('.bss-code-box')) {
  for (const head of codeBox.querySelectorAll('.bss-code-header')) {
    if (!head.innerHTML.length) head.classList.add('none')
    const dataLang = head.dataset.language
    // pre tag boxes
    const pres = codeBox.querySelectorAll('pre')
    if (dataLang) for (const pre of pres) pre.classList.add(`language-${dataLang}`)
    else for (const pre of pres) pre.classList.add('language-none')

    const frag = document.createDocumentFragment()
    for (const pre of pres) {
      for (const line of pre.textContent.split('\n')) {
        // wrap in code tag
        const codeLine = document.createElement('code')
        codeLine.textContent = `${line}\n`
        frag.appendChild(codeLine)
      }
      while (pre.lastChild) pre.removeChild(pre.firstChild)
      pre.appendChild(frag)

      // data lines
      let dataLine = pre.dataset.line
      for (const code of pre.querySelectorAll('code')) {
        if (!dataLine) dataLine = 1
        code.dataset.line = dataLine++
      }

      head.appendChild(bssCreateToolbar(pre))
    }
  }
}
