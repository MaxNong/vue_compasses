import RemoteMusic from './remoteMusic'
let routers = []
let defaultRouter = [
  {
    path: '/',
    name: 'home',
    component: resolve => {
      require(['../../App.vue', '../../view/localzone.vue'], resolve)
    }
  },
  {
    path: '*',
    redirect: '/'
  }
]
routers = Array.prototype.concat(RemoteMusic, defaultRouter)
export default  routers