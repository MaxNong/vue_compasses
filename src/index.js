'use strict'
import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import pluginCtrl from './launch/pluginCtrl'
import Config from '../config/config'
window.Vue = Vue
window.Config = Config
pluginCtrl.init(Vue)
Vue.startApp = function () {
  const app = new Vue({
    router,
    template: '<App/>',
    components: {App}
  }).$mount('#app')
}
Vue.startApp()
