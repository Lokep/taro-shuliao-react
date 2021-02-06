module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  defineConstants: {},
  mini: {},
  h5: {
    esnextModules: ['taro-ui'],
    devServer: {
      host: 'localhost',
      port: 10086,
      proxy: {
        '/': { // rest服务的path
          target: 'http://192.168.3.30:8600', // 服务端地址
          changeOrigin: true
        }
      }
    },
  }
}
