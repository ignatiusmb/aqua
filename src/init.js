window.Aqua = window.Aqua || {}
Aqua.init = () => {
  if (Aqua.code) Aqua.code.init()
  if (Aqua.form) Aqua.form.init()
  if (Aqua.modal) Aqua.modal.init()
}
window.addEventListener('DOMContentLoaded', () => Aqua.init())
window.addEventListener('load', () => {
  if (Aqua.code) Aqua.code.highlight()
})
