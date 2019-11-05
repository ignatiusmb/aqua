/*! Aqua v0.19.10 by @ignatiusmb - https://imbagus.com
 *  MIT Licensed -> https://github.com/ignatiusmb/aqua
 */
Aqua.init = () => {
  if (Aqua.code) Aqua.code.init()
  if (Aqua.form) Aqua.form.init()
  if (Aqua.modal) Aqua.modal.init()
}
window.addEventListener('DOMContentLoaded', () => Aqua.init())
window.addEventListener('load', () => {
  if (Aqua.code) Aqua.code.highlight()
})
