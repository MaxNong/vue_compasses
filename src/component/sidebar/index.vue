<template>
  <section class="sidebarleft">
    <div :class="[isShow.isShowLeft ? 'mask1' : 'mask']">
      <div class="sidebar">
        <div class="sidebar-title">
          <img src="../../assets/images/Smile.png" width="80" alt="">
          <h3>繁华<i>level</i></h3>
          <span>签到</span>
        </div>
        <div class="sidebar-content">
          <ul>
            <li>
              <div class="side-left">
                <img src="../../assets/images/cry.png" width="25" alt="">
              </div>
              <div class="side-center">
                我的消息
              </div>
            </li>
            <li>
              <div class="side-left">
                <img src="../../assets/images/cry.png" width="25" alt="">
              </div>
              <div class="side-center">
                会员中心
              </div>
            </li>
            <li class="border-top">
              <div class="side-left">
                <img src="../../assets/images/cry.png" width="25" alt="">
              </div>
              <div class="side-center">
                商城
              </div>
              <span>音乐</span>
            </li>
            <li>
              <div class="side-left">
                <img src="../../assets/images/cry.png" width="25" alt="">
              </div>
              <div class="side-center">
                我的好友
              </div>
            </li>
            <li>
              <div class="side-left">
                <img src="../../assets/images/cry.png" width="25" alt="">
              </div>
              <div class="side-center">
                附近的人
              </div>
            </li>
            <li class="border-top">
              <div class="side-left">
                <img src="../../assets/images/cry.png" width="25" alt="">
              </div>
              <div class="side-center">
                个性换肤
              </div>
              <span>官方红</span>
            </li>
            <li>
              <div class="side-left">
                <img src="../../assets/images/cry.png" width="25" alt="">
              </div>
              <div class="side-center">
                听歌识曲
              </div>
            </li>
          </ul>
        </div>

      </div>
      <div class="sidebar-foot">
        <span><img src="../../assets/images/cry.png" width="25" alt="">夜间模式</span>
        <span><img src="../../assets/images/cry.png" width="25" alt="">设置</span>
        <span><img src="../../assets/images/cry.png" width="25" alt="">退出</span>
      </div>
    </div>
    <div @click="closeMusicList" class="maskscreen" v-show="isShow.isShowLeft"></div>
  </section>
</template>
<script>
  import Config from 'Config'
  export default {
    data () {
      return {
        isShow: Config
      }
    },
    methods: {
      closeMusicList: function () {
        Config.isShowLeft = !Config.isShowLeft
      }
    }
  }
</script>