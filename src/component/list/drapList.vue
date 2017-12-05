<template>
  <div>
    <div @click="showHideList" class="draplist">
      <icon :href="isShow ? 'icon-xia' : 'icon-shang'" size="15"></icon>
      <span class="drap-title">{{title}}</span>
      <icon class="rig-svg" href="icon-shezhi" size="15"></icon>
    </div>
    <listItem v-show="isShow" :items="items"></listItem>
  </div>
</template>
<script>
  console.log('drapList.vue')
  import listItem from 'listItem'
  export default {
    props: {
      title: {
        type: String,
        default: ''
      },
      items: {
        type: Array,
        default: []
      }
    },
    data () {
      return {
        isShow: true
      }
    },
    components: {
      listItem
    },
    methods: {
      showHideList: function () {
        this.isShow = !this.isShow
      }
    }
  }
</script>