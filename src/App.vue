<template>
    <div class="main">
        <titlebar @update:ShowLeft="(ShowLeft) => isShowLeft=ShowLeft"></titlebar>
        <div class="maincontent">
            <transition name="translate" mode="out-in">
                <router-view></router-view>
            </transition>
        </div>
        <div class="playbox">
            <playbar></playbar>
        </div>
        <leftbar :isShow.sync="isShowLeft"></leftbar>
    </div>
</template>
<style lang="sass">
    @import "./assets/scss/common.scss";
</style>
<script>
  import titlebar from './component/tab/titlebar.vue'
  import playbar from './component/playbar/index.vue'
  import leftbar from './component/sidebar/index.vue'
  export default {
    components: {
      playbar,
      leftbar,
      titlebar
    },
    data() {
      return {
        isShowLeft: false,
      }
    },
    created () {
      console.log(this.$route)
      this.$route.name == 'home' ? this.$router.push({name: 'localzone'}) : ''
    }
  }
</script>