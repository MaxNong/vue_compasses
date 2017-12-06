<template>
  <nav class="headerBar-nav">
    <ul>
      <li @click="handelLeftBar"><icon href="icon-headerMore" size="30" fill="#fff"></icon></li>
      <li @click="goNext('home')"><icon href="icon-hearderMy" size="30" fill="#fff"></icon></li>
      <li @click="goNext('remotemusic')"><icon href="icon-headerOrigin" size="30" fill="#fff"></icon></li>
      <li><icon href="icon-headerCom" size="30" fill="#fff"></icon></li>
      <li><icon href="icon-headerSeach" size="30" fill="#fff"></icon></li>
    </ul>
  </nav>
</template>
<script>
  import Config from 'Config'
  export default {
    name: 'headerBar',
    methods: {
      handelLeftBar: function () {
        Config.isShowLeft = !Config.isShowLeft
      },
      goNext: function (router) {
        this.$router.push({name: router})
      }
    }
  }
</script>