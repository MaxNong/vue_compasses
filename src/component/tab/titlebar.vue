<template>
    <div class="topbanner">
        <dl>
            <dd @click="updateMark" class="half"><span class="icon-navlist"></span></dd>
            <dd class="other-half">
            <dt @click="changeZone(0)"><span :class="[index==0 ? 'icon-localmusic-w' : 'icon-localmusic']"></span></dt>
            <dt @click="changeZone(1)"><span :class="[index==1 ? 'icon-remotemusic-w' : 'icon-remotemusic']"></span></dt>
            <dt @click="changeZone(2)"><span :class="[index==2 ? 'icon-moremusic-w' : 'icon-moremusic']"></span></dt>
            </dd>
            <dd class="half"><span class="icon-serch"></span></dd>
        </dl>
    </div>
</template>
<style></style>
<script>
  export default {
    data () {
      return {
        box: ['localzone', 'remotemusic', 'community'],
        index: 0
      }
    },
    methods: {
      updateMark: function () {
        this.$emit('update:ShowLeft', true)
      },
      changeZone: function (index) {
        this.index = index
        this.$router.push({name: this.box[index]})
      }
    }
  }
</script>