import { min, max } from './my_module.js'
import suibian from './my_module2.js'
import './index.less'
import Vue from './vue.js'


console.log(min([32, 12, 3, 6]));
console.log(max([32, 12, 3, 6]));

suibian('真随便啊');

// 全局使用
Vue.component('vue-tab', {
    template: '<p>{{ content }}</p>',
    data: function () {
        return {
            content: 'Tab栏'
        }
    }
})


var vm = new Vue({
    el: '#app',
    data: {},
    // 局部使用
    components: {
        'vue-nav': {
            template: '<p>{{ content }}</p>',
            data: function () {
                return {
                    content: 'Nav导航'
                }
            }
        }
    }
})