// path是node中的内置模块
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    // 配置打包的入口文件,就是要打包谁
    entry: './src/js/main.js',

    // 配置打包后的输出路径
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'buld.js'
    },

    // 该配置项专门用来添加各种插件的
    plugins: [

        // 配置html的自动脚本注入
        new htmlWebpackPlugin({
            template: './src/index.html', // 原html
            filename: 'index.html',  // 注入后的html
            inject: 'body' // 脚本注入到页面的body中
        })
    ],

    module: {
        
        // 该配置项专门用来扩展webpack能够打包的文件类型的
        rules: [
            {
                test: /\.css$/,

                // 注意：这里的laoder配置是有顺序的，webpack会倒序依次调用对应的loader对指定类型文件进行打包处理
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,

                // 注意：这里的laoder配置是有顺序的，webpack会倒序依次调用对应的loader对指定类型文件进行打包处理
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.scss$/,

                // 注意：这里的laoder配置是有顺序的，webpack会倒序依次调用对应的loader对指定类型文件进行打包处理
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.tpl$/,

                // 注意：这里的laoder配置是有顺序的，webpack会倒序依次调用对应的loader对指定类型文件进行打包处理
                use: [
                    'html-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,

                // 注意：这里的laoder配置是有顺序的，webpack会倒序依次调用对应的loader对指定类型文件进行打包处理
                use: [
                    // 这里的limit配置的是字节大小，1024字节是一kb
                    { loader: 'url-loader', options: { limit: 5000 } },
                    'image-webpack-loader'
                ]
            }
        ],
    }
};
