/**
 * 统一管理全局组件、指令等
 */
import globalComponent from './globalComponent.js'
console.log('pluginCtrl.js')
let pluginCtrl = {
  init (vue) {
    globalComponent.initComponents(vue)
  }
}
export default pluginCtrl