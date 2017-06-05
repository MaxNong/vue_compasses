<template>
  <sheet :title="title" icon-type="close" :show.sync="show" :track-name="trackName">
    <div class="actionsheet-bank-sheet">
      <div class="popup-bottom">
        <ul class="withdraw-ui">
          <li v-for="(key, obj) in menus" @click="dispatchEvent('bank-choose', key)" v-track="{name:trackName+'bankChoose'}">
            <p>
              <i class="bank-{{obj.bank}}"></i>
              <em>{{obj.bank_name}}(尾号{{obj.account_no_short}})<br /><small>{{typeName}}上限{{obj.single_sign}}元</small></em>
              <span :class="{'select-character': selected==$index}"></span>
            </p>
          </li>
          <li @click="addBank" v-track="{name:trackName+'addBank'}"><p class="new-card">使用新卡{{typeName}}<i class="arrow-r"></i></p></li>
        </ul>
      </div>
    </div>
  </sheet>
</template>

<script>
  // 用sheet外框
  import sheet from 'actionsheet'
  export default {
    components: {
      sheet
    },
    props: {
      show: {
        type: Boolean,
        required: true,
        default: false,
        twoWay: true
      },
      showCancel: {
        type: Boolean,
        default: true
      },
      title: {
        type: String,
        default: '选择充值方式'
      },
      menus: {
        type: Array,
        required: false,
        default: []
      },
      type: {
        default: 0   //0来自充值页  1来自提现页
      },
      selected: {
        type: Number,
        required: false,
        default: 0
      },
      trackName: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        typeName: this.type ? '提现' : '充值'
      }
    },
    methods: {
      dispatchEvent (event, menu) {
        if (event === 'bank-choose') {
          // 如果选的是当前已经选中项只关了弹框就可以了
          if (this.selected != menu) {
            this.$dispatch(event, menu)
            this.selected = menu
          }
          this.show = false
        }
      },
      addBank () {
        let obj = {name: 'addBank'}
        if (!this.type) {
          obj.query = {fromRecharge: 1}
        }
        this.$router.go(obj)
      }
    }
  }
</script>


