<template>
<div class="wrapper">
    <div class="operation">
        <input v-model="goodsName" class="add-name" type="text" placeholder="请输入名称">
        <input v-model="goodsPrice" class="price-name" type="text" placeholder="请输入价格">
        <button @click="add" class="add-btn" type="button">添加数据</button>
    </div>
    <div class="search">
        <input v-model="searchVal" type="text" placeHolder="请输入筛选内容">
    </div>
    <table id="tb">
        <thead>
            <tr>
                <th>编号</th>
                <th>名称</th>
                <th>价格</th>
                <th>操作</th>
            </tr>
        </thead>
        <tbody v-cloak>
            <tr v-for="(v, i) in goodsList" v-if="search(v.name)" :key="i">
                <td>{{ i + 1 }}</td>
                <td>{{ v.name }}</td>
                <td>{{ v.price | formatP }}</td>
                <td>
                    <a @click="del(i)" href="#">删除</a>
                </td>
            </tr>
        </tbody>
    </table>
</div>  
</template>

<script>
export default {
    data() {
        return {
            goodsList: [
                { name: '帽子', price: 888 },
                { name: '裤子', price: 288 },
                { name: '凉鞋', price: 188 },
                { name: 'T', price: 578 },
            ],
            goodsName: '',
            goodsPrice: '',
            searchVal: ''
        };
    },
    methods: {

        // 添加商品
        add: function() {
            this.goodsList.push({
                name: this.goodsName,
                price: this.goodsPrice
            });
        },

        // 删除商品
        del: function(i) {
            this.goodsList.splice(i, 1);
        },

        // 搜索，用于列表渲染时的判断条件
        search: function(name) {
            return new RegExp(this.searchVal).test(name);
        }
    },

    // 起始filters这里面也是定义一些方法，只不过使用方式不一样,
    // 这里面的函数只能在插值表达式当中通过 | 管道符来调用，
    // 默认这个函数会接收到插值表达式中的值，方法中可以对这个值进行一些逻辑处理，
    // 最后把处理的结果return出去，那么页面中就是显示return的结果。
    filters: {

        formatPrice: function(val) {
            return '$' + val;
        }

    }
}
</script>

<style>
.wrapper {
    width: 800px;
    margin: 20px auto;
}
.operation {
    margin-bottom: 10px;
    text-align: center;
    line-height: 20px;
    font-size: 18px;
}
.operation input {
    padding: 5px;
    border: 1px solid deepskyblue;
}
.operation button {
    border-radius: 3px;
    background-color: deepskyblue;
}
.search {
    text-align: left;
    line-height: 20px;
    font-size: 18px;
}
.search input {
    padding: 5px;
    border: 1px solid deeppink;
}
#tb{
    width: 800px;
    border-collapse: collapse;
    margin: 20px auto;
}
#tb th{
    background-color: #0094ff;
    color:white;
    font-size: 16px;
    padding: 5px;
    text-align: center;
    border: 1px solid black;
}
#tb td{
    padding: 5px;
    text-align: center;
    border: 1px solid black;
}
[v-cloak] {
    display: none;
}
</style>

