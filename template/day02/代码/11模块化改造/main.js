const Vue = require('./vue.js');
const myModule = require('./my_module.js');

console.log(myModule.min([32,12,3,6]));
console.log(myModule.max([32,12,3,6]));

// 定义全局组件，在任何实例所关联的视图中都可以使用
Vue.component('vue-tab', {
    template: '<p>{{ content }}</p>',
    data: function() {
        return { content: 'tab栏' };
    }
});

var data = {};
var vm = new Vue({
    el: '#app',
    data: data,
    components: {
        'vue-nav': {
            template: '<p>{{ content }}</p>',
            data: function() {
                return { content: 'nav导航' };
            }
        }
    }
});