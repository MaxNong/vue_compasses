<template>
  <div>
    <headerBar></headerBar>
    <listItem :isMarTop="true" :items="localListKinds"></listItem>
  </div>
</template>
<script>
  import headerBar from 'headerBar'
  import listItem from 'listItem'
  import constData from 'constData'
  export default {
    data () {
      return {
        localListKinds: constData.localListKinds
      }
    },
    components: {
      headerBar,
      listItem
    }
  }
</script>