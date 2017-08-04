'use strict'
import Vue from 'vue'
import Load from './load.vue'
import router from './router/router'
window.Vue = Vue
Vue.startApp = function () {
  const load = new Vue({
    router,
    template: '<load/>',
    components: {Load}
  }).$mount('#load')
}
Vue.startApp()
