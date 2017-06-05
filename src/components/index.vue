<template>
  <div class="actionsheet" v-if="show">
    <div class="actionsheet-mask" @click="show = false" v-track="{name:trackName+'_close'}"></div>
    <div class="actionsheet-body" v-el:main>
      <h3 v-if="title" class="actionsheet-title">
        <span class="icon-{{iconType}} icon" @click="goBack" v-track="{name:trackName+'_goBack'}"></span>
        {{title}}
      </h3>
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      show: {
        type: Boolean,
        required: true,
        default: false,
        twoWay: true
      },
      title: {
        type: String
      },
      // 点back是否自动关闭
      autoClose: {
        type: Boolean,
        default: true
      },
      iconType: {
        type: String,
        default: 'back'
      },
      trackName: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
      }
    },
    methods: {
      goBack () {
        if (!this.autoClose) {
          // 点back后冒泡一个事件
          this.$dispatch('sheet-back')
        } else {
          this.show = false
        }
      }
    },
    watch: {
      // 要有个时间间隔，这样才有动画效果
      'show': function (v) {
        if (v) {
          var self = this
          setTimeout(function () {
            self.$els.main.classList.add('show')
          })
        }
      }
    },
    events: {
      // 接收外面要求关闭弹框的事件
      'sheet-close': function () {
        this.show = false
      }
    }
  }
</script>
