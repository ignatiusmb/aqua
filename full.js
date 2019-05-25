window.addEventListener('DOMContentLoaded', () => {
  const scriptNames = ['code', 'form', 'modal']
  const frag = document.createDocumentFragment()
  const addBlueScript = name => {
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = `https://cdn.jsdelivr.net/gh/ignatiusmb/bluesheets/${name}.min.js`
    return script
  }
  for (const name of scriptNames) frag.appendChild(addBlueScript(name))
  document.body.insertAdjacentElement('beforeend', frag)
})
