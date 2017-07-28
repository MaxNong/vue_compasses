<template>
    <div>
        <div class="playbar">
            <div class="left">
                <div class="lefticon">
                    <img src="../../assets/images/atm.png" alt="">
                </div>
                <div class="center">
                    <dl>
                        <b>呦呦呦</b>
                        <dt>呦呦呦切克闹</dt>
                    </dl>
                </div>
            </div>
            <div class="right">
                <img src="../../assets/images/play.png" alt="">
                <img @click="getPlayList()" class="marlef" src="../../assets/images/Category.png" alt="">
            </div>
        </div>
        <div :class="[sty ? 'playlist1' : 'playlist']">
            <div class="muslist-top">
                <div class="muslist-left">
                    <img src="../../assets/images/atm.png" alt="">
                    <span>列表循环</span>
                </div>
                <div class="muslist-right">
                    <div class="muslist-right-collect">
                        <img src="../../assets/images/atm.png" alt="">
                        <span>收藏</span>
                    </div>
                    <div class="muslist-right-empty">
                        <img src="../../assets/images/atm.png" alt="">
                        <span>清空</span>
                    </div>
                </div>
            </div>
            <musiclist :items="items"></musiclist>
        </div>
        <div @click="closeMusicList" class="maskscreen" v-show="ismask"></div>
    </div>
</template>
<style>

</style>
<script>
  import musiclist from '../../component/list/musiclist.vue'
  import contentCon from '../../constants/contentCon'
  export default {
    data () {
      return {
        sty: false,
        ismask: false,
        items: contentCon.playBarList,
      }
    },
    components: {
      musiclist
    },
    methods: {
      getPlayList: function () {
        this.sty = true
        this.ismask = true
      },
      closeMusicList: function () {
        this.sty = false
        this.ismask = false
      }
    }
  }
</script>