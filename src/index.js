const navItems = document.querySelectorAll('nav .tab-item')

for (const item of navItems) {
  item.addEventListener('click', () => {
    navItems.forEach(i => i.classList.remove('active'))
    item.classList.add('active')
  })
}
