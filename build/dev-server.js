var express = require('express')
var webpack = require('webpack')
var config = require('../webpack.config.js')
var app = express()
var compiler = webpack(config)
var hotMiddleware = require('webpack-hot-middleware')(compiler)
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    // 发布事件
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})
app.use(hotMiddleware)
app.listen(9999, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:9999')
})