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
  export default {
    name: 'headerBar',
    methods: {
      handelLeftBar: function () {
        console.log(this.isShowLeft)
        this.isShowLeft = !this.isShowLeft
      }
    }
  }
</script>