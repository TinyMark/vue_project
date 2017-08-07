'use strict';
const mongoDB = require('mongodb');
let mongoClient = mongoDB.MongoClient;
let ObjectID = mongoDB.ObjectID;
let dbURL = 'mongodb://127.0.0.1:27017/store';

// 这是一个专门用来操作商品数据的模块，这个模块对外暴漏一个GoodsManager类
class GoodsManager {

    constructor(goodsList = []) {
        this.goodsList = goodsList;
        this.init();
    };

    // 这个方法一般是在创建实例的时候，把一些需要额外计算的操作放置到这里
    init() {
        // 如果商品列表是有数据的，那么找出数据中的最大ID，否则给个0为初始ID
        if(this.goodsList && this.goodsList.length) {
            GoodsManager.id = this.goodsList.reduce((g1, g2) => g1.id > g2.id? g1: g2).id;
        }else {
            GoodsManager.id = 0;
        }

    };

    // 静态成员：用来获取新商品的ID
    static getNextID() {
        return ++GoodsManager.id
    };

    // 获取全部数据
    getAll(successful) {
        mongoClient.connect(dbURL, function(err, db) {
            // 获取数据是异步的，所以使用回调，回调触发时证明数据获取完毕，
            // 完毕后调用用户传过来的回调进行下一步的处理。
            if(!err) {

                // 如果使用then，成功与失败需要不同的函数指定，第一个成功第二个为失败
                db.collection('goods').find().toArray()
                .then(successful, (err) => console.log(err));

                // 如果使用普通方式，只有一个回调函数，
                // 这个回调会有err与data两种数据让你自己区分做不同逻辑处理
                // db.collection('goods').find().toArray((err, data) => {
                //     if(!err) {
                //         successful(data);
                //     }else {
                //         console.log(err);
                //     }
                // });
                
            }else {
                console.log(err);
            }
        });
    };

    // 添加，接收来自客户端的各种数据
    add(data, successful) {
        mongoClient.connect(dbURL, function(err, db) {  
            // 获取数据是异步的，所以使用回调，回调触发时证明数据获取完毕，
            // 完毕后调用用户传过来的回调进行下一步的处理。
            // mongoDB会自动给数据添加一个唯一的_id
            if(!err) {
                db.collection('goods').insert(data)
                .then(successful);
            }else {
                console.log(err);
            }
        });
    };

    // 删除，接收来自客户端的ID
    del(id, successful) {
        mongoClient.connect(dbURL, function(err, db) {
            if(!err) {
                // 数据删除是异步的，所以使用回调，回调触发时证明数据删除完毕，
                // 完毕后调用用户传过来的回调进行下一步的处理。
                db.collection('goods').remove({_id: ObjectID(id)})
                .then(successful);
            }else {
                console.log(err);
            }
        });
    };

    // 查找，接收来自客户端的名称搜索条件
    search(keycode, successful) {
        mongoClient.connect(dbURL, function(err, db) {
            if(!err) {
                // 数据删除是异步的，所以使用回调，回调触发时证明数据删除完毕，
                // 完毕后调用用户传过来的回调进行下一步的处理。
                db.collection('goods').find({name: new RegExp(keycode)}).toArray()
                .then(successful);
            }else {
                console.log(err);
            }
        });
    };

    //修改
    modify() {
        console.log('还么有');
    };

    // 获取排序后的数据
    sort(orderby, successful) {
        mongoClient.connect(dbURL, function(err, db) {
            if(!err) {
                // 数据删除是异步的，所以使用回调，回调触发时证明数据删除完毕，
                // 完毕后调用用户传过来的回调进行下一步的处理。

                // orderby是来自于客户端的查询字符串转换后的对象数据，
                // 格式为这样{ keycode: 'name', order: '1' }
                // 我们在调用sort方法时，需要提取name与1值，使用es6新的对象属性定义方式提取
                db.collection('goods').find().sort({
                    [orderby.keycode]: +orderby.order  // 需要注意，前端数据传给后端，都变成了字符串，需要转为数字才OK
                }).toArray()
                .then(successful);
            }else {
                console.log(err);
            }
        });
    };

};

// 把类暴漏到外面
module.exports = GoodsManager;
