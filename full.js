const filenames = ['code', 'form', 'modal']
const frag = document.createDocumentFragment()
const addBlueSheet = (name, styling) => {
  let tag
  if (styling) {
    tag = document.createElement('link')
    tag.rel = 'stylesheet'
    tag.type = 'text/css'
    tag.href = `https://cdn.jsdelivr.net/gh/ignatiusmb/bluesheets/${name}.css`
  } else {
    tag = document.createElement('script')
    tag.type = 'text/javascript'
    tag.src = `https://cdn.jsdelivr.net/gh/ignatiusmb/bluesheets/${name}.js`
  }
  return tag
}
window.addEventListener('DOMContentLoaded', () => {
  frag.appendChild('core', true)
  for (const name of filenames) frag.appendChild(addBlueSheet(name, true))
  document.head.appendChild(frag)
})
window.addEventListener('load', () => {
  for (const name of filenames) frag.appendChild(addBlueSheet(name, false))
  document.body.appendChild(frag)
})
