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
        <listitem :isMarTop="true" :items="localListKinds"></listitem>
        <draplist :items="localMusicKinds" title="创建的歌单"></draplist>
        <draplist :items="localCollectKinds" title="收藏的歌单"></draplist>
        <!--<div class="leftmenu"></div>-->
    </div>

</template>
<style lang="sass">
    @import "./assets/scss/common.scss"
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
                localListKinds: contentCon.localListKinds,
                localMusicKinds: contentCon.localMusicKinds,
                localCollectKinds: contentCon.localCollectKinds
            }
        }
    }
</script>