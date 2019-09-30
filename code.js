;(async function() {
  const prism = document.createElement('script')
  prism.type = 'text/javascript'
  prism.src = 'https://imbagus.com/bluesheets/prism.js'
  document.body.appendChild(prism)
})()
const bshCreateToolbar = () => {
  const toolbar = document.createElement('div')
  toolbar.className = 'cb-toolbar'

  const createTool = (iconClass, text) => {
    let tool = document.createElement('a')
    let icon = document.createElement('i')
    let tooltip = document.createElement('span')
    tool.className = `tb-item`
    icon.className = iconClass
    tooltip.className = 'tb-tooltip'
    tooltip.innerText = text
    tool.appendChild(icon)
    tool.appendChild(tooltip)
    return { tool: tool, tooltip: tooltip }
  }

  const copyButton = createTool('far fa-copy', 'Copy')
  copyButton.tool.addEventListener('click', e => {
    const currentBox = e.currentTarget.parentElement.parentElement
    const codeLines = currentBox.getElementsByTagName('code')

    const copyArea = document.createElement('textarea')
    copyArea.className = 'ghost-area'
    for (const code of codeLines) copyArea.value += code.innerText
    document.body.appendChild(copyArea)
    copyArea.focus()
    copyArea.select()
    try {
      if (document.execCommand('copy')) {
        copyButton.tooltip.innerText = 'Copied!'
        setTimeout(() => {
          copyButton.tooltip.innerText = 'Copy'
        }, 5000)
      } else {
        copyButton.tooltip.innerText = 'Copy Failed'
        setTimeout(() => {
          copyButton.tooltip.innerText = 'Copy'
        }, 5000)
      }
    } catch (err) {
      alert('An error occurred while copying, copy failed')
    }
    document.body.removeChild(copyArea)
  })
  toolbar.appendChild(copyButton.tool)

  const toggleNumbering = createTool('fas fa-list-ol', 'Toggle Numbering')
  toggleNumbering.tool.addEventListener('click', e => {
    const clickedTool = e.currentTarget
    const currentBox = clickedTool.parentElement.parentElement
    currentBox.classList.toggle('numbered')
  })
  toolbar.appendChild(toggleNumbering.tool)
  return toolbar
}

for (const codeBox of document.getElementsByClassName('bsh-code-box')) {
  const header = codeBox.getElementsByClassName('cb-header')
  if (header.length > 0) {
    for (const head of header) {
      if (head.innerHTML.length === 0) head.classList.add('none')
      const dataLang = head.dataset.language
      // pre tag boxes
      const pres = head.parentElement.getElementsByTagName('pre')
      if (dataLang !== undefined && dataLang !== '') {
        for (const pre of pres) pre.classList.add(`language-${dataLang}`)
      } else {
        for (const pre of pres) pre.classList.add('language-none')
      }

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
        for (const code of pre.getElementsByTagName('code')) {
          if (dataLine === undefined) dataLine = 1
          code.dataset.line = dataLine++
        }

        pre.insertAdjacentElement('afterend', bshCreateToolbar())
      }
    }
  }
}
