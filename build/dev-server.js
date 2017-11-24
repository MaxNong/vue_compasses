var express = require('express')
var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var proxyMiddleware = require('http-proxy-middleware') //代理
var config = require('./webpack.config.js')
var indexConfig = require('../config/index.js')
var proxyTable = indexConfig.dev.proxyTable

var app = express()
var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, {
  publicPath: "/"
}))
app.use(webpackHotMiddleware(compiler))
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})
app.listen(7778, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:7778')
});

