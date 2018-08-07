const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.conf')

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

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
        host: '0.0.0.0',
        port: 2333,
        overlay: {
            errors: true
        },
        historyApiFallback: true,
        compress:true
        // proxy: {
        //     '/api': 'http://127.0.0.1:3333',
        //     '/user': 'http://127.0.0.1:3333'
        // },
        // proxy: {
        //     '/api': {
        //         // changeOrigin:true, //请求转发,解决跨域
        //         target: "http://localhost:3000", // 将 URL 中带有 /api 的请求代理到本地的 3000 端口的服务上
        //         pathRewrite: { '^/api': '' }, // 把 URL 中 path 部分的 `api` 移除掉
        //     },
        // },
    }
})

module.exports = webpackConfig;