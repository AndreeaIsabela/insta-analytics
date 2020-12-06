module.exports = {
  outputDir: 'build/client/',

  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:8081',
        ws: true,
        changeOrigin: true
      }
    }
  },

  chainWebpack: config => {
    config.module
      .rule('pug')
      .test(/\.pug$/)
      .use('pug-plain-loader')
      .loader('pug-plain-loader')
      .end()
  }
}
