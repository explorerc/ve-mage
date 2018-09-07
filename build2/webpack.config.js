const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const {
  BundleAnalyzerPlugin
} = require('webpack-bundle-analyzer')

const config = require('./config')
const developmentConfig = require('./webpack.dev.conf')
const productionConfig = require('./webpack.prod.conf')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

function subPath (_path) {
  return path.posix.join(config[process.env.BUILD_ENV].SUB_DIR, _path)
}

const generateConfig = (isProd) => {
  const devStyleLoader = {
    loader: 'style-loader',
    options: {
      sourceMap: !isProd
    }
  }

  const cssLoader = [{
    loader: 'css-loader',
    options: {
      minimize: isProd,
      sourceMap: !isProd
    }
  },
  {
    loader: 'postcss-loader'
  }
  ]
  let scssLoader = cssLoader.concat([{
    loader: 'sass-loader',
    options: {
      sourceMap: !isProd
    }
  }])

  let styleLoader = isProd ? [MiniCssExtractPlugin.loader].concat(scssLoader) : [devStyleLoader].concat(scssLoader)

  const plugins = [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html',
      minify: true
    }),
    new webpack.DefinePlugin({
      'process.env': {
        IMGHOST: JSON.stringify(config[process.env.BUILD_ENV].IMGHOST),
        BUILD_ENV: JSON.stringify(config[process.env.BUILD_ENV].BUILD_ENV),
        API_PATH: JSON.stringify(config[process.env.BUILD_ENV].API_PATH),
        PUBLIC_PATH: JSON.stringify(config[process.env.BUILD_ENV].PUBLIC_PATH)
      }
    }),
    new CopyWebpackPlugin([{
      from: resolve('src/static'),
      to: resolve(`dist/${config[process.env.BUILD_ENV].SUB_DIR}`),
      ignore: ['.*']
    }])
  ]

  if (config.buildDetail && isProd) {
    plugins.push(new BundleAnalyzerPlugin({
      analyzerPort: 8899
    }))
  }

  return {
    target: 'web',
    mode: isProd ? 'production' : 'development',
    entry: {
      app: resolve('src/app.js')
    },
    output: {
      filename: subPath('js/[name].[hash:5].js'),
      chunkFilename: subPath('js/[name].[hash:5].js'),
      path: resolve('dist'),
      publicPath: config[process.env.BUILD_ENV].PUBLIC_PATH
    },
    externals: {
      'vue': 'Vue',
      'element-ui': 'ELEMENT'
    },
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        'src': resolve('src'),
        'assets': resolve('src/assets'),
        'components': resolve('src/components'),
        'store': resolve('src/store')
      }
    },
    module: {
      rules: [{
        test: /\.(vue|js|jsx)$/,
        loader: 'eslint-loader',
        include: resolve('src'),
        enforce: 'pre'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        include: resolve('src')
      },
      {
        test: /\.js[x]?$/,
        include: resolve('src'),
        use: [{
          loader: 'babel-loader'
        }]
      },
      {
        test: /\.css$/,
        use: cssLoader
      },
      {
        test: /\.scss$/,
        include: resolve('src'),
        use: styleLoader
      },
      {
        test: /.(png|jpg|gif)$/,
        use: [{
          loader: 'url-loader',
          options: {
            name: subPath('img/[name].[hash:7].[ext]'),
            limit: 1000 // 单位是byte
          }
        }],
        include: resolve('src')
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 1000,
            name: subPath('media/[name].[hash:7].[ext]')
          }
        }],
        include: resolve('src')
      },
      {
        test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 1000,
            name: subPath('fonts/[name].[hash:7].[ext]')
          }
        }]
      }
      ]
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          common: {
            name: 'common',
            chunks: 'async',
            minChunks: 2,
            minSize: 0
          },
          vender: {
            name: 'vendor',
            test: resolve('node_modules'),
            chunks: 'all',
            priority: 10
          }
        }
      },
      runtimeChunk: {
        name: 'manifest'
      }
    },
    plugins: plugins
  }
}

const isProd = process.env.NODE_ENV === 'production'
module.exports = () => {
  let config = isProd ? productionConfig : developmentConfig
  const baseConfig = generateConfig(isProd)
  return merge(baseConfig, config)
}
