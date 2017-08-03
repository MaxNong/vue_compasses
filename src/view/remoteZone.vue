<template>
    <div>
        <tab></tab>
        <banner></banner>
        <section class="remote-musicbar">
            <ul>
                <li>
                    <span class="icon-FM"></span>
                    <h3>私人FM</h3>
                </li>
                <li>
                    <span class="icon-groom"></span>
                    <h3>每日歌曲推荐</h3>
                </li>
                <li>
                    <span class="icon-hotmusic"></span>
                    <h3>云音乐热歌榜</h3>
                </li>
            </ul>
        </section>
        <groombox></groombox>
    </div>
</template>
<style>

</style>
<script>
  import tab from '../component/tab/index.vue'
  import banner from '../component/banner/index.vue'
  import groombox from '../component/groombox/index.vue'
  export default {
    components: {
      tab,
      banner,
      groombox
    }
  }
</script>