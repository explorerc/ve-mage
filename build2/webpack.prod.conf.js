const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const config = require('./config')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

function subPath (_path) {
  return path.posix.join(config[process.env.BUILD_ENV].SUB_DIR, _path)
}

module.exports = {
  output: {
    filename: subPath('js/[name].[chunkhash:8].js'),
    chunkFilename: subPath('js/[name].[chunkhash:8].js')
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new MiniCssExtractPlugin({
      filename: subPath('css/[name].css'),
      chunkFilename: subPath('css/[name].[contenthash:5].css')
    }),
    new CleanWebpackPlugin(['dist'], {
      root: resolve('/'),
      verbose: true
    })
  ]
}
