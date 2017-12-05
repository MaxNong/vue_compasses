import Router from 'vue-router'
import routes from './routerViews/index'
import Vue from 'vue'

console.log('router.js')
Vue.use(Router)
let router = new Router({//这里注意实例化路由的时候是routes而不是routers（大坑）
  routes
})
export default router
