<template>
  <nav class="headerBar-nav">
    <ul>
      <li @click="handelLeftBar"><icon href="icon-headerMore" size="30" fill="#fff"></icon></li>
      <li><icon href="icon-hearderMy" size="30" fill="#fff"></icon></li>
      <li><icon href="icon-headerOrigin" size="30" fill="#fff"></icon></li>
      <li><icon href="icon-headerCom" size="30" fill="#fff"></icon></li>
      <li><icon href="icon-headerSeach" size="30" fill="#fff"></icon></li>
    </ul>
  </nav>
</template>
<script>
  console.log('headerBar.vue')
  import Config from 'Config'
  export default {
    name: 'headerBar',
    methods: {
      handelLeftBar: function () {
//        Config.isShowLeft = !Config.isShowLeft
        console.log(Config)
        let newObj = Object.assign({}, Config)
        newObj.isShowLeft = !newObj.isShowLeft
//        Config.setLeft(newObj.isShowLeft)
        console.log(Config)
        console.log(newObj)
        Config.setLeft(newObj)
        console.log(Config)
      }
    }
  }
</script>