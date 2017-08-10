// path是node中的内置模块
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // 配置打包的入口文件,就是要打包谁
    entry: './src/main.js',

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
    ]
};
