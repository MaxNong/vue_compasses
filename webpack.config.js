var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    index: './src/index',
    // load: './src/load',
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: "[name].js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: true,
      chunks: ['index']
    }),
    /*new HtmlWebpackPlugin({
      template: './load.html',
      inject: true,
      chunks: ['load']
    }),*/
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
      },
      {
        test: /\.scss/,
        loaders: ["style", "css", "sass"]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        /*query: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }*/
      }
    ],
  }
}