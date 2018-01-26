<template>
  <div>
    <headerBar></headerBar>
    <tab :tabList="tabList"></tab>
    <swiper :bannerList="bannerList" picurl="img" linkurl="src"></swiper>
    <section class="remoteZone-mus">
      <ul>
        <router-link tag="li" :to="{name: 'home'}">
          <icon href="icon-xilanhua1" size="30"></icon>
          <h3>私人FM</h3>
        </router-link>
        <router-link tag="li" :to="{name: 'home'}">
          <icon href="icon-xilanhua1" size="30"></icon>
          <h3>每日推荐</h3>
        </router-link>
        <router-link tag="li" :to="{name: 'home'}">
          <icon href="icon-xilanhua1" size="30"></icon>
          <h3>歌单</h3>
        </router-link>
        <router-link tag="li" :to="{name: 'home'}">
          <icon href="icon-xilanhua1" size="30"></icon>
          <h3>排行榜</h3>
        </router-link>
      </ul>
    </section>
    <groombox :groomList="groomList"></groombox>
    <div class="remoteZone-bottom">
      看视频，发现更多又去内容&nbsp;>
    </div>
  </div>
</template>
<style>

</style>
<script>
  import swiper from 'swiper'
  import tab from '../component/tab/index.vue'
  import Config from 'config'
  import groombox from '../component/groombox/index.vue'
  export default {
    data () {
      return {
        bannerList: Config.constData.bannerList,
        tabList: Config.constData.remoteMusicTab,
        groomList: Config.constData.musboxdetail
      }
    },
    components: {
      tab,
      swiper,
      groombox
    }
  }
</script>