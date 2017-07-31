<template>
    <div class="main">
        <div class="topbanner">
            <dl>
                <dd @click="isShowLeft=true" class="half"><span class="icon-navlist"></span></dd>
                <dd class="other-half">
                <dt><span class="icon-localmusic-w"></span></dt>
                <dt><span class="icon-remotemusic"></span></dt>
                <dt><span class="icon-moremusic"></span></dt>
                </dd>
                <dd class="half"><span class="icon-serch"></span></dd>
            </dl>
        </div>
        <div class="maincontent">
            <!--<router-view></router-view>-->
            <listitem :isMarTop="true" :items="localListKinds"></listitem>
            <draplist :items="localMusicKinds" title="创建的歌单"></draplist>
            <draplist :items="localCollectKinds" title="收藏的歌单"></draplist>
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
  import listitem from './component/list/list-item.vue'
  import contentCon from './constants/contentCon'
  import draplist from './component/list/drapList.vue'
  import playbar from './component/playbar/index.vue'
  import leftbar from './component/sidebar/index.vue'
  export default {
    components: {
      listitem,
      draplist,
      playbar,
      leftbar
    },
    data() {
      return {
        localListKinds: contentCon.localListKinds,
        localMusicKinds: contentCon.localMusicKinds,
        localCollectKinds: contentCon.localCollectKinds,
        isShowLeft: false,
      }
    }
  }
</script>