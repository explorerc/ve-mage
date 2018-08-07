const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.conf')
const config = require('./config');

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

console.log(config.local.proxyTable);

const webpackConfig = merge(baseConfig, {
  devtool: '#cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.scss/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'postcss-loader'
            // options: {
            //     sourceMap: true
            // }
          },
          'sass-loader'
        ],
        include: resolve('src'),
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    inline: true,
    hot: true,
    contentBase: resolve('dist'),
    open: false,
    host: 'localhost',
    port: 2333,
    overlay: {
      warnings: false,
      errors: true
    },
    historyApiFallback: true,
    compress: true,
    proxy: config.local.proxyTable
  }
})

module.exports = webpackConfig;
