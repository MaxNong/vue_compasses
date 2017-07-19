var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    index: './src/index',
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: "[name].js"
  },
  plugins: [
    /*new HtmlWebpackPlugin({
      filename: 'login/login.html', //http访问路径
      template: './login.html',
      inject: true,
      chunks: ['login']
    }),*/
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