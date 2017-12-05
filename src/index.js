'use strict'
console.log('index.js')
window.isShowLeft = false
import Vue from 'vue'
import router from './router/router'
import pluginCtrl from './launch/pluginCtrl'
import App from './App.vue'
import Config from '../config/config'
window.Vue = Vue
pluginCtrl.init(Vue)
Vue.startApp = function () {
  const app = new Vue({
    router,
    template: '<App/>',
    components: {App}
  }).$mount('#app')
}
Vue.startApp()
