const path = require('path')
const webpack = require('webpack')
const config = require('./config')

module.exports = {
  devtool: 'source-map',
  devServer: {
    contentBase: path.resolve(__dirname, '../dist/'),
    hot: true,
    overlay: {
      warnings: false,
      errors: true
    },
    historyApiFallback: true,
    compress: config.compress,
    host: config.host,
    open: config.autoOpen,
    port: config.port,
    proxy: config.local.proxyTable
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}
