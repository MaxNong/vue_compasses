<template>
    <div class="main">
        <transition name="translate" mode="out-in">
            <router-view></router-view>
        </transition>
        <leftBar></leftBar>
    </div>
</template>
<style lang="sass">
    @import "./assets/scss/common.scss"
</style>
<script>
  import leftBar from './component/sidebar/index.vue'
  export default {
    name: 'app',
    components: {
      leftBar
    },
    data() {
      return {
      }
    },
    created () {
    }
  }
</script>