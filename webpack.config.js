const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HappyPack = require('happypack')
const os = require('os')
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length })
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const chalk = require('chalk')

const config = {
    target: 'web',
    mode: 'production',
    entry: {
        index: './src/index.js'
    },
    output: {
        filename: '[name].[hash].js',
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
                include: path.join(__dirname, 'src'),

            },
            {
                test: /.(png|jpg|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        outputPath: 'images/',
                        limit: 500 //单位是byte
                    }
                }]
            }
        ]
    },
    optimization: {
        namedModules: true,
        splitChunks: {
            chunks: "all",
            cacheGroups: {
                vendor: {
                    test: /node_modules/,
                    name: "vendor",
                    priority: 10
                },
                commons: {
                    name: "common",
                    minChunks: 1,
                    minSize: 0
                }
            }
        },
        runtimeChunk: {
            name: 'manifest'
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html'
        }),
        new CleanWebpackPlugin(['dist']),
        // 热更新，热更新不是刷新
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),//用户名替代id
        new ProgressBarPlugin({
            format: '  build [:bar] ' + chalk.green.bold(':percent') + ' (:elapsed seconds)'
        })
    ],
    devServer: {
        inline: true,//打包后加入一个websocket客户端
        hot: true,//热加载
        contentBase: path.resolve(__dirname, 'dist'),
        host: '0.0.0.0',//主机地址
        port: 9090,
        // compress: true//开发服务器是否启动gzip等压缩
    }
};

module.exports = config;