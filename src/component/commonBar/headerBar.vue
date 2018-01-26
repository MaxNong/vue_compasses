<template>
  <nav class="headerBar-nav">
    <ul>
      <li @click="handelLeftBar"><icon href="icon-headerMore" size="30" fill="#fff"></icon></li>
      <li @click="goNext('home')"><icon href="icon-icon-" size="30" fill="#fff"></icon></li>
      <li @click="goNext('remotemusic')"><icon href="icon-icon-1" size="30" fill="#fff"></icon></li>
      <li @click="goNext('community')"><icon href="icon-headerCom" size="30" fill="#fff"></icon></li>
      <li><icon href="icon-icon-2" size="30" fill="#fff"></icon></li>
    </ul>
  </nav>
</template>
<script>
  import Config from 'config'
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