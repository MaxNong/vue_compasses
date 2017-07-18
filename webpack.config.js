var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    index: './src/index',
    login: './src/pageIndex'
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: "[name].js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'login/login.html', //http访问路径
      template: './login.html',
      inject: true,
      chunks: ['login']
    }),
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: true,
      chunks: ['index']
    }),
  ],
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.js'
    }
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style', 'css']
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      }
    ],
  }
}