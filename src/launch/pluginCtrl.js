/**
 * 统一管理全局组件、指令等
 */
import globalComponent from './globalComponent.js'
import api from 'api'

let pluginCtrl = {
  init (vue) {
    globalComponent.initComponents(vue)
    Vue.prototype.$Api = api
  }
}
export default pluginCtrl