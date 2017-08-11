<template>
    <div>
        <div class="wrapper">
            <div class="operation">
                <input class="add-name" type="text" placeholder="请输入歌名" v-model='name'>
                <input class="add-price" type="text" placeholder="请输入作者" v-model='author'>
                <button class="add-btn" type="button" @click='add'>添加数据</button>
            </div>
            <div class="search">
                <input v-model='searchVal' type="text" placeholder="请输入筛选内容">
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
                <tbody>
                    <tr v-for='(v,i) in songsList' v-if='search(v.name)' v-cloak>
                        <td>{{ i+1 }}</td>
                        <td>{{ v.name | formName(v.name) }}</td>
                        <td>{{ v.author }}</td>
                        <td>
                            <a href="#" @click='del(i)'>删除</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
Vue.filter('formName', function (name) {
    return '《' + name + '》'
})
export default {
    data() {
        var vm = new Vue({
            el: '.wrapper',
            data: {
                songsList: [
                    { name: '双截棍', author: '周杰伦' },
                    { name: '曹操', author: '林俊杰' },
                    { name: '唯一', author: '王力宏' }
                ],
                name: '',
                author: '',
                searchVal: ''
            },
            methods: {
                add: function () {
                    var obj = {
                        name: this.name,
                        author: this.author
                    }
                    this.songsList.push(obj);
                    name = '';
                    author = '';
                },
                del: function (i) {
                    this.songsList.splice(i, 1);
                },
                search: function (name) {
                    return new RegExp(this.searchVal).test(name)
                }
            }
        })
    }
}
</script>

<style>
[v-cloak] {
    display: none;
}

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

#tb {
    width: 800px;
    border-collapse: collapse;
    margin: 20px auto;
}

#tb th {
    background-color: #0094ff;
    color: white;
    font-size: 16px;
    padding: 5px;
    text-align: center;
    border: 1px solid black;
}

#tb td {
    padding: 5px;
    text-align: center;
    border: 1px solid black;
}
</style>
