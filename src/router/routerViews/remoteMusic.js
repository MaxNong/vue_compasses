export default [
  {
    path: '/localzone',
    name: 'localzone',
    component: resolve => {
      require(['../../view/localzone.vue'], resolve)
    }
  },
  {
    path: '/remotemusic',
    name: 'remotemusic',
    component: resolve => {
      require(['../../view/remoteZone.vue'], resolve)
    }
  },
  {
    path: '/community',
    name: 'community',
    component: resolve => {
      require(['../../view/community.vue'], resolve)
    }
  }
]