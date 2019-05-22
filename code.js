window.onload = () => {
  const prism = document.createElement('script')
  prism.type = 'text/javascript'
  prism.src = 'https://cdn.jsdelivr.net/gh/ignatiusmb/bluesheets/prism.js'
  document.getElementsByTagName('script')[0].insertAdjacentElement('beforebegin', prism)
}
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
    return tool
  }

  const copyButton = createTool('far fa-copy', 'Copy')
  copyButton.addEventListener('click', e => {
    const clickedTool = e.currentTarget
    const currentBox = clickedTool.parentElement.parentElement
    const codeLines = currentBox.getElementsByTagName('code')

    const copyArea = document.createElement('textarea')
    copyArea.className = 'ghost-area'
    for (let j = 0; j < codeLines.length; j++) {
      if (j !== codeLines.length - 1) copyArea.value += codeLines[j].innerText + '\n'
      else copyArea.value += codeLines[j].innerText
    }
    copyArea.value.trim()
    document.body.appendChild(copyArea)
    copyArea.focus()
    copyArea.select()
    try {
      if (document.execCommand('copy')) alert('Code Block Copied!')
      else alert('Copy Unsuccessful...')
    } catch (err) {
      alert('Error, unable to copy')
    }
    document.body.removeChild(copyArea)
  })
  toolbar.appendChild(copyButton)

  const toggleNumbering = createTool('fas fa-list-ol', 'Toggle Numbering')
  toggleNumbering.addEventListener('click', e => {
    const clickedTool = e.currentTarget
    const currentBox = clickedTool.parentElement.parentElement
    currentBox.classList.toggle('numbered')
  })
  toolbar.appendChild(toggleNumbering)
  return toolbar
}

for (const codeBox of document.getElementsByClassName('code-box')) {
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
