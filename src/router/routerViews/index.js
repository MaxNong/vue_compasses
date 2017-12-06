import RemoteMusic from './remoteMusic'
let defaultRouter = [
  {
    path: '/',
    name: 'home',
    component: resolve => {
      require(['../../index.vue'], resolve)
    }
  },
  {
    path: '*',
    redirect: '/'
  }
]
let routers = Array.prototype.concat(RemoteMusic, defaultRouter)
export default  routers