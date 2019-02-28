
module.exports = {
  devServer: {
    /*
      字符串模式
      开发中，项目的所有请求，都会代理到这个地址，是不可取得
    */
    // proxy: 'https://m.maizuo.com'
    // 使用对象模式
    proxy: {
      // 只对 key 开头为 /api开头的 才会代理到 下面的地址
      '/api': {
        target: 'https://m.maizuo.com',
        pathRewrite: { // 重写 重命名
          '^/api': ''
        }
      }
    }
  },
  // 如果项目不是在web服务 根目录下的话 ，需要配置 pablicPath
  publicPath: '/mz/'
}
