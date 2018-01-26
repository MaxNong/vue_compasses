<template>
  <div>
    <headerBar></headerBar>
    <xButton value="开启监听" @click="openListen"></xButton>
  </div>
</template>
<script>
  import xButton from 'xButton'
  export default {
    data () {
      return {}
    },
    components: {xButton},
    methods: {
      openListen: function () {
        let option = {
          name: 'getInfo',
          data: {},
          resolve: function (data) {
            console.log(data)
            window.alert('data')
          }
        }
        this.$Api(option)
      }
    }
  }

</script>