// const { injectBabelPlugin } = require('react-app-rewired')
const { override, addWebpackAlias, overrideDevServer } = require('customize-cra')
const path = require('path')

const changeDevServerConfig = () => (config) => {

  config.public = process.env.REACT_APP_PUBLIC
  config.hotOnly = true
  config.overlay = {
    errors: true,
    wranings: false
  }
  config.useLocalIp  = false

  return config
}

module.exports = {
  webpack: override(
    addWebpackAlias({
      '@': path.resolve(__dirname, './src'),
      '@api': path.resolve(__dirname, './src/api'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@com': path.resolve(__dirname, './src/components'),
      '@config': path.resolve(__dirname, './src/config'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@router': path.resolve(__dirname, './src/router'),
      '@store': path.resolve(__dirname, './src/store'),
      '@test': path.resolve(__dirname, './src/test'),
      '@utils': path.resolve(__dirname, './src/utils'),
    })
  ),
  devServer: overrideDevServer(
    changeDevServerConfig()
  )
}
