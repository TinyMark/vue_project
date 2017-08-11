// 这是文件是咱们项目的入口，所有的项目依赖都在这里引入
import Vue from 'vue';
import App from './App.vue';

// 现在使用.vue文件组件项目后，这个vue实例的作用仅仅是为了关联视图，
// 不要在这里写什么methods等等逻辑性的代码，都放到组件当中。
let vm = new Vue({
    el: '#app',
    render: function(c) {
        return c(App);
    }
});

// 该方法专门用来定义全局过滤器
Vue.filter('formatP', function(val) {
    return '￥' + val;
});