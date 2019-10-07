const filenames = ['code', 'form', 'modal']
const frag = document.createDocumentFragment()
const cdnFetch = (type, name) => {
  let tag
  if (type === 'ajax') {
    tag = document.createElement('script')
    tag.type = 'text/javascript'
    tag.src = `https://cdn.imbagus.com/${type}/${name}.js`
  } else {
    tag = document.createElement('link')
    tag.rel = 'stylesheet'
    tag.type = 'text/css'
    tag.src = `https://cdn.imbagus.com/${type}/${name}.${type}`
  }
  return tag
}
const addAquaSheet = (name, styling) => {
  let tag
  if (styling) {
    tag = document.createElement('link')
    tag.rel = 'stylesheet'
    tag.type = 'text/css'
    tag.href = `https://aqua.imbagus.com/${name}.css`
  } else {
    tag = document.createElement('script')
    tag.type = 'text/javascript'
    tag.src = `https://aqua.imbagus.com/${name}.js`
  }
  return tag
}
window.addEventListener('DOMContentLoaded', () => {
  frag.appendChild(addAquaSheet('core', true))
  for (const name of filenames) frag.appendChild(addAquaSheet(name, true))
  document.head.appendChild(frag)
})
window.addEventListener('load', () => {
  frag.appendChild(cdnFetch('ajax', 'prism'))
  for (const name of filenames) frag.appendChild(addAquaSheet(name, false))
  document.body.appendChild(frag)
})
