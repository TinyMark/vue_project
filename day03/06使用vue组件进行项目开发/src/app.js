import Vue from 'vue';
import App from './App.vue'


Vue.filter('formName', function (name) {
    return '《' + name + '》'
})

new Vue({
    el: '#app',
    render: (c) => c(App)
})