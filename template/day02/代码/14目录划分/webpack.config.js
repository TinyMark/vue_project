// path是node中的内置模块
const path = require('path');

module.exports = {
    // 配置打包的入口文件,就是要打包谁
    entry: './src/main.js',
    // 配置打包后的输出路径
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'buld.js'
    }
};
