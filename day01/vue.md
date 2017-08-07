# Vue

## Vue学习资源

[Vue官网：https://cn.vuejs.org/](https://cn.vuejs.org/)

[Vue GitHub：https://github.com/vuejs/vue](https://github.com/vuejs/vue)

[Vue1.0 在线文档：http://v1-cn.vuejs.org/guide/](http://v1-cn.vuejs.org/guide/)

[Vue2.0 在线文档：https://cn.vuejs.org/v2/guide/](https://cn.vuejs.org/v2/guide/)

## MVVM概念

* MVVM拆分解释为：
> Model:
> ~~~ text
> 负责数据存储
> ~~~
> View:
> ~~~ text
> 负责页面展示
> ~~~
> View Model:
> ~~~ text
> 负责业务逻辑处理（比如Ajax请求等），对数据进行加工后交给视图展示
> ~~~

* MVVM要解决的问题是将业务逻辑代码与视图代码进行完全分离，使各自的职责更加清晰，后期代码维护更加简单
> 用图解的形式分析Ajax请求回来数据后直接操作Dom来达到视图的更新的缺点，> 以及使用MVVM模式是如何来解决这个缺点的
> ![](http://img.ptcms.csdn.net/article/201508/11/55c9abacf113a.jpg)

## Vue初体验

### Vue编写步骤

1.  引入vue.js文件
~~~ javascript
<script src='node_modules/vue/dist/vue.js'></script>
~~~
2.  在 body 中指定 vue 控制区域
~~~javascript
<body id='app'>
    {{msg}}
</body>
~~~
3.  实例化 vue 对象,编写指令
~~~javascript
<script>
    var vm = new Vue({
        el: '#app',
        data: {
            msg: 'hello vue'
        }
    })
</script>
~~~

### Vue常用指令

*   {{ }} 插值表达式
~~~ text
无论何时，绑定的数据对象上 msg 属性发生了改变，插值处的内容都会更新
~~~
> {{ }} 会将数据解释为纯文本

* v-text
~~~ text
可以将一个变量的值渲染到指定的元素中
~~~
> v-text 会将数据解释为纯文本
>~~~javascript
><div v-text="msg"></div>
><script>
>    new Vue({
>        data:{
>            msg:'hello Vue'
>        }
>    })
></script>
>~~~

* v-html
* v-cloak
* v-model 以及双向数据绑定
* v-bind
* v-for
* v-if
* v-show
* v-on

        v-on:click
        v-on:keydown
        v-on:keyup
        v-on:mousedown
        v-on:mouseover
        v-on:submit
        
*

