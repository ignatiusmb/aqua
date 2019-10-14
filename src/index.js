const aquaInit = () => {
  aquaCode.init()
  aquaForm.init()
  aquaModal.init()
}
window.addEventListener('DOMContentLoaded', () => aquaInit())
window.addEventListener('load', () => {
  aquaCode.highlight()
})

const parser = new DOMParser()
const getArticle = async tab => {
  let response
  if (tab === 'component') response = await fetch('/index.html')
  else if (tab === 'template') response = await fetch('/template/index.html')
  const html = await response.text()
  const doc = parser.parseFromString(html, 'text/html')
  return await doc.querySelector('article main')
}

const articles = {}
const navItems = document.querySelectorAll('nav .tab-item')
for (const item of navItems) {
  const tabName = item.querySelector('span').textContent.toLowerCase()
  const url = tabName !== 'component' ? `/${tabName}` : '/'
  const title = `Aqua • ${tabName[0].toUpperCase() + tabName.slice(1)}`

  item.addEventListener('click', async () => {
    navItems.forEach(i => i.classList.remove('active'))
    item.classList.add('active')
    const current = document.querySelector('article main')
    articles[current.id] = current
    if (articles[tabName]) {
      current.replaceWith(articles[tabName])
    } else {
      articles[tabName] = await getArticle(tabName)
      current.replaceWith(articles[tabName])
      aquaInit()
      aquaCode.highlight()
    }
    window.history.replaceState({}, title, url)
  })
}
