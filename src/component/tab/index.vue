<template>
    <div class="tab-content">
        <ul>
            <li :style="{width: 100/tabList.length+'%'}" :class="{active: activeIndex == index}" @click="changeTab(index)" v-for="(item, index) in tabList">
                {{item.text}}
            </li>
        </ul>
    </div>
</template>
<style>

</style>
<script>
  export default {
    data(){
      return {
        activeIndex: 0
      }
    },
    props: {
      tabList: {
        type: Array
      }
    },
    methods: {
      changeTab: function (index) {
        this.activeIndex = index
      }
    }
  }

</script>