/*! Aqua v0.19.10 by @ignatiusmb - https://imbagus.com
 *  MIT Licensed --> https://github.com/ignatiusmb/aqua
 */
aqua.init = () => {
  if (aqua.code) aqua.code.init()
  if (aqua.form) aqua.form.init()
  if (aqua.modal) aqua.modal.init()
}
window.addEventListener('DOMContentLoaded', () => aqua.init())
window.addEventListener('load', () => {
  if (aqua.code) aqua.code.highlight()
})
