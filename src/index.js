'use strict'
import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
window.Vue = Vue
console.log(router)
Vue.startApp = function () {
  const app = new Vue({
    router,
    template: '<App/>',
    components: {App}
  }).$mount('#app')
}
Vue.startApp()
