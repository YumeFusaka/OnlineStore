const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: './',
  transpileDependencies: true,
  // 关闭eslint校验
  lintOnSave: false 
})
