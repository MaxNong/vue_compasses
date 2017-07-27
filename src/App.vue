<template>
    <div class="main">
        <div class="topbanner">
            <dl>
                <dd class="half"><span class="icon-navlist"></span></dd>
                <dd class="other-half">
                <dt><span class="icon-leftbtn"></span></dt>
                <dt><span class="icon-mymusic"></span></dt>
                <dt><span class="icon-moremusic"></span></dt>
                </dd>
                <dd class="half"><span class="icon-serch"></span></dd>
            </dl>
        </div>
        <listitem :items="items"></listitem>
        <draplist></draplist>
    </div>
</template>
<style lang="sass">
    @import "./assets/scss/common.scss";
</style>
<script>
  import listitem from './component/list/list-item.vue'
  import contentCon from './constants/contentCon'
  import draplist from './component/list/drapList.vue'
  export default {
    components: {
      listitem,
      draplist
    },
    data() {
      return {
        items: contentCon.localListKinds,
        drapitems: contentCon.localMusicKinds
      }
    }
  }
</script>