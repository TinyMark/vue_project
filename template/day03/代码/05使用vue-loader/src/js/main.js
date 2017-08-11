import Vue from 'vue';
import App from './App.vue';

let vm = new Vue({
    el: '#app',
    // 使用render方法把根组件渲染到el关联的视图中
    render: function(c) {
        return c(App);
    }
});
