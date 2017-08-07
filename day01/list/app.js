const express = require('express');
const bodyParser = require('body-parser');
const apiHandler = require('./afterend/controller/api_handler.js');

let app = express();

// use用来添加功能强大的中间件处理函数，所有请求不分url不分method
app.use(express.static('./public'));
app.use(express.static('./frontend'));
app.use(express.static('./node_modules'));

// 使用第三方包来解析post请求发送的数据，
// 注意，一定要先使用强大的中间件，后面的才会接收到这个中间件处理的结果
app.use(bodyParser.urlencoded({ extended: false }));

// 使用apiHandler暴漏的路由对象
app.use(apiHandler);

// url为/api/goods/打头的，都要经过apiHandler中间件进一步处理
app.all('/api/goods/*', apiHandler);

app.listen(8888, () => console.log('走你'));
