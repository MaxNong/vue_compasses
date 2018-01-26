<template>
  <div>
    <headerBar></headerBar>
    <listItem :items="listMusic"></listItem>
    <drapList :items="createdMusic" title="收藏的歌单"></drapList>
    <drapList :items="collectMusic" title="收藏的歌单"></drapList>
    <footPlayBar></footPlayBar>
  </div>
</template>
<script>
  import listItem from 'listItem'
  import drapList from 'drapList'
  import footPlayBar from 'footPlayBar'
  import Config from 'config'
  export default {
    data () {
      return {
        listMusic: Config.constData.localListKinds,
        createdMusic: Config.constData.localMusicKinds,
        collectMusic: Config.constData.localCollectKinds
      }
    },
    components: {
      listItem,
      drapList,
      footPlayBar
    }
  }
</script>