const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  outputDir: 'dist',
  devServer: {
    // port: 8000,
    open: true,
    // host: '127.0.0.1',
    /* 解决跨域问题 */
    proxy: {
      /* 写代理服务器相关信息 */
      "/api": {
        target: "http://182.92.128.115"
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        "http": resolve('src/http'),
        "components": resolve('src/components'),
        "pages": resolve('src/pages'),
        "router": resolve('src/router'),
        "mock": resolve('src/mock'),
        "store":resolve('src/store')
      }
    }
  },
  lintOnSave: false
}