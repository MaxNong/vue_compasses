/**
 * @param url: 需要分享的url
 * @param option: 需要分享的文案 Object String（可传可选）
 */
import axios from 'axios'
import { isObject } from 'utils'
let share = {
  init: function (url, option) {
    let wx = window.wx
    let json = {targetUrl: url || window.location.href.split('#')[0]}
    let opts = {
      house: {
        title: '杭州房价蹭蹭涨，房产价值免费评',
        desc: '七桥为您提供专业房产评估及房产抵押贷款服务',
        link: window.location.protocol + '//' + window.location.host + '/#/activity/house',
        imgUrl: window.location.protocol + '//' + window.location.host + '图片路径'
      },
      default: {
        title: '标题',
        desc: '描述',
        link: window.location.protocol + '//' + window.location.host + '地址',
        imgUrl: window.location.protocol + '//' + window.location.host + '图片路径'
      }
    }
    let opt = isObject(option || 'default') ? option : opts[option || 'default']
    window.setShareInfo({
      title: opt.title || '', // 分享标题
      summary: opt.desc || '', // 分享内容
      pic: opt.imgUrl || '', // 分享图片
      url: opt.link || '' // 分享链接
    })
    axios.get('/api/house/getwxsign', {params: json}).then(function (d) {
      let res = d.data
      wx.config({
        debug: false,
        appId: res.data.appid,
        timestamp: res.data.timestamp,
        nonceStr: res.data.nonceStr,
        signature: res.data.signature,
        jsApiList: [
          'onMenuShareTimeline',
          'onMenuShareAppMessage',
          'onMenuShareQQ',
          'onMenuShareWeibo'
        ]
      })
      wx.ready(function () {
        wx.onMenuShareTimeline(opt)
        wx.onMenuShareAppMessage(opt)
        wx.onMenuShareQQ(opt)
        wx.onMenuShareWeibo(opt)
      })
    })
  }
}

export default share
