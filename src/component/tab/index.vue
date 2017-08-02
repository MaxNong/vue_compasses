<template>
    <div class="tabbox">
        <ul>
            <li :class="{active: activeIndex == index}" @click="changeTab(index)" v-for="(item, index) in items">{{item.text}}</li>
        </ul>
    </div>
</template>
<style>

</style>
<script>
  import contentCon from '../../constants/contentCon'
  export default {
    data(){
      return {
        items: contentCon.remoteMusicTab,
        activeIndex: 0
      }
    },
    methods: {
      changeTab: function (index) {
        this.activeIndex = index
      }
    }
  }

</script>