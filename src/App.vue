<template>
    <div class="appTop">{{message}}</div>

</template>
<style>
    .appTop {
        width: 100px;
        height: 100px;
        background: red;
    }
</style>
<script>
  export default {
    data() {
      return {
        message: '测试代码'
      }
    }
  }
</script>