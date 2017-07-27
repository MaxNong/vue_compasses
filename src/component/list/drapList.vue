<template>
    <div>
        <div class="toptrans">
            <i class="icon-down midpic"></i>
            <span>创建的歌单</span>
            <i class="icon-set midpic flo-right"></i>
        </div>
        <listitem :items="items"></listitem>
    </div>
</template>
<style>

</style>
<script>
  import listitem from '../../component/list/list-item.vue'
    import contentCon from '../../constants/contentCon'
    export default {
      data () {
        return {
          items: contentCon.localListKinds,
        }
      },
      components: {listitem}
    }

</script>