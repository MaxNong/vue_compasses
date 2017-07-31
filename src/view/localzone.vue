<template>
    <listitem :isMarTop="true" :items="localListKinds"></listitem>
    <draplist :items="localMusicKinds" title="创建的歌单"></draplist>
    <draplist :items="localCollectKinds" title="收藏的歌单"></draplist>
</template>
<style>

</style>
<script>
  import listitem from '../component/list/list-item.vue'
  import contentCon from '../constants/contentCon'
  import draplist from '../component/list/drapList.vue'
  import leftbar from '../component/sidebar/index.vue'
  export default {
    components: {
      listitem,
      draplist,
      leftbar
    },
    data() {
      return {
        localListKinds: contentCon.localListKinds,
        localMusicKinds: contentCon.localMusicKinds,
        localCollectKinds: contentCon.localCollectKinds,
        isShowLeft: false
      }
    }
  }
</script>