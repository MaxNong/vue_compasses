var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var webpack = require('webpack')
module.exports = {
  entry: ['webpack-hot-middleware/client?reload=true?http://127.0.0.1:7777/','./index.js'],
  output: {
    path: __dirname + '/',
    publicPath: '/',
    filename: 'index.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: './../dists/index.html',
      template: path.resolve(__dirname, './index.html'),
      inject: true
    })
  ]
 /* module: {
    loaders: [
      { test: /\.js?$/, loaders: ['react-hot', 'babel'], exclude:     /node_modules/ },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
      { test: /\.css$/, loader: "style!css" },
      {test: /\.less/,loader: 'style-loader!css-loader!less-loader'}
    ]
  }*/
  /*resolve:{
    extensions:['','.js','.json']
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ]*/
};
