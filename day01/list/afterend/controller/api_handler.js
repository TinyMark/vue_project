'use strict';

// 内置模块
const express = require('express');
const querystring = require('querystring');
let router = express.Router();

// 自己写的模块
const GoodsManager = require('../model/goods_manager.js');
let goodsManager = new GoodsManager();

// 请求的最开始，统一添加跨域响应头，
// 注意这里没有给前端返回数据，所以必须要调用next方法，继续交由下一个中间件处理
router.use((req, resp, next) => {
    resp.set({
        "Access-Control-Allow-Origin": "*",
        'Access-Control-Allow-Methods': '*'
    });
    next();
});

// 获取全部商品列表数据
router.get('/api/goods/list*', (req, resp, next) => {
    // 因为现在获取数据使用的是数据库操作，是异步的，
    // 通过回调才能知道什么时候获取完毕，完毕后返回会前端。
    goodsManager.getAll((data) => {
        resp.json(data);
    });
});

// 添加商品
router.post('/api/goods/add*', (req, resp, next) => {

    // 添加数据的过程需要连接数据库，是异步的，
    // 所以需要写回调，回调执行时证明数据添加成功了。
    goodsManager.add(req.body, function() {

        // 获取数据又是异步的，又得写回调
        goodsManager.getAll(function(data) {
            resp.json(data);
        });
        
    });
});

// 删除商品
router.get('/api/goods/delete*', (req, resp, next) => {
    // 因为现在删除数据使用的是数据库操作，是异步的，
    // 通过回调才能知道什么时候删除完毕，删除完毕后再获取全部数据返回前端才能保证数据的准备性
    goodsManager.del(req.query.id, () => {

        // 因为现在获取数据使用的是数据库操作，是异步的，
        // 通过回调才能知道什么时候获取完毕，完毕后返回会前端。
        goodsManager.getAll((data) => {     
            resp.json(data);
        });
        
    });
});

// 查找商品
router.get('/api/goods/search*', (req, resp, next) => {
    // 因为现在搜索数据使用的是数据库操作，是异步的，
    // 通过回调才能知道什么时候搜索完毕，完毕后把搜索的结果返回前端
    goodsManager.search(req.query.keycode, (data) => {
        resp.json(data);
    });    
});

// 排序
router.get('/api/goods/sortlist*', (req, resp, next) => {
    // 因为现在搜索数据使用的是数据库操作，是异步的，
    // 通过回调才能知道什么时候搜索完毕，完毕后把搜索的结果返回前端
    goodsManager.sort(req.query, (data) => {
        resp.json(data);
    });
});

// 把该配置好的路由对象暴漏出去
module.exports = router;
