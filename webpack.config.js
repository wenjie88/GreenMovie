var htmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var webpack = require('webpack')
var path = require('path')

module.exports = {
    entry: {
        main: './src/app.js',
        vendor: ['vue', 'vue-router', 'vuex'],
        // majs: 'materialize-css/bin/materialize.js'
        // material: ['vue-material']
    },
    output: {
        path: __dirname + '/dist',
        // filename: '[name]-[hash:5].js'
        filename: 'js/[name].bundle.js',
        chunkFilename: 'js/[name].chunk.js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    // extractCSS: true,
                    loaders: {
                        // css:ExtractTextPlugin.extract({
                        //     use:'css-loader',
                        //     fallback:'vue-style-loader'
                        // })
                        //css:'vue-style-loader!css-loader?importLoaders: 1!postcss-loader',
                    },
                    // postcss: [require('autoprefixer')()]
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            // {
            //     test: /\.html$/,
            //     loader: 'html-loader',
            // },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        { loader: 'css-loader', options: { importLoaders: 1 } },
                        'postcss-loader',
                    ]
                })
            },
            // {
            //     test: /.less$/,
            //     use: [
            //         'style-loader',
            //         {
            //             loader: 'css-loader',
            //             options: {
            //                 importLoaders: 1
            //             }
            //         },
            //         'postcss-loader',
            //         'less-loader'
            //     ]
            // },
            {
                test: /\.(jpg|png|gif|svg)$/i,
                // loader: 'file-loader',
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1000,
                            name: 'assets/[name]-[hash:5].[ext]'
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                    },
                ]
            },
            {
                test: /\.(ttf|eot|woff(2)?)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader",
                options: {
                    limit: 1000,
                    name: 'assets/[name]-[hash:5].[ext]'
                }
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: 'index.html',
            filename: 'index.html',
            inject: 'body',
            // title: 'webpack is main'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            names: [    // 提取公共模块名称
                'vendor', // manifest 用于分离 webpack runtime 
                // 'material'
            ],
            filename: 'js/[name].js', // 公共模块文件名
            minChunks: Infinity     // Infinity 表示仅仅创建公共组件块，不会把任何modules打包进去。
        }),
        new ExtractTextPlugin('css/style.css')
        // new webpack.HotModuleReplacementPlugin()//热加载插件
    ],
    devtool: 'eval-source-map',//配置生成Source Maps，选择合适的选项
    devServer: {
        historyApiFallback: true,
        noInfo: true,
        proxy: {
            "/ajax": {
                target: "http://baijia.baidu.com/",
                changeOrigin: true,
                // secure: false
            }
        }
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
}

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#soucre-map'

    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': { NODE_ENV: '"production"' }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: { warnings: false },
            // output: { comments: false },
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
        }),

    ])
}