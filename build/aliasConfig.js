var path = require('path')

// 获取绝对路径
function getAbsolutePath(addr) {
  if (!/\/src\//.test(addr)) {
    addr = '../src/' + addr;
  }
  console.log(path.resolve(__dirname, addr))
  return path.resolve(__dirname, addr);
}

module.exports = {
  'vue': 'vue/dist/vue.js',
  'utils': getAbsolutePath('common/utils.js'),
  'listitem': getAbsolutePath('component/list/list-item'),
  'icon': getAbsolutePath('component/icon/index.vue')
}

