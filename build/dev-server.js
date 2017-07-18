var express = require('express')
var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('../webpack.config.js')

var app = express()
var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, {
  publicPath: "/"
}))
app.use(webpackHotMiddleware(compiler))
app.listen(7778, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:7778')
});

