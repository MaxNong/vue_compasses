var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var aliasConfig = require('./aliasConfig')
console.log(path.resolve(__dirname, '..', "src"))
/*function resolve (dir) {
 return path.join(__dirname, '..', dir)
 }*/

module.exports = {
  entry: {
    index: './src/index'
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
  ],
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    modules: [
      path.resolve(__dirname, "src"), "node_modules"
    ],
    alias: aliasConfig
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