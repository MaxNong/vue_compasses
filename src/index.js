'use strict'
import Vue from 'vue'
import App from './App.vue'
window.Vue = Vue
var compile = new Vue()
console.log(compile)
Vue.startApp = function () {
 /* Vue.component('my-component', {template: '<div>333</div>'})
  var MyComponent = new Vue({
    template: '<div>66666</div>'
  })
  MyComponent.$mount('#app')
  console.log(MyComponent)*/
  alert(444)
  const app = new Vue({
    template: '<App />',
    components: { App }
  }).$mount('#app')
}
Vue.startApp()
