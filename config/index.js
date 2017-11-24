module.exports = {
  dev: {
   /* env: require('./dev.env'),
    port: 9080,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',*/
    proxyTable: {
      '/api': {
        target: 'http://127.0.0.1:7001/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api'
        }
      }
    },

    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
}