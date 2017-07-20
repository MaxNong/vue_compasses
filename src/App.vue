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
    </div>
</template>
<style lang="sass">
    @import "./assets/scss/common.scss";
</style>
<script>
  import listitem from './component/list/list-item.vue'
  export default {
    components: {listitem},
    data() {
      return {
        items: [
          {message: '本地音乐', left_icon: 'icon-leftbtn' },
          {message: '最近播放', left_icon: 'icon-leftbtn'}
        ]
      }
    }
  }
</script>