<template>
    <!-- 组件中的模版全部写到这里，vue最终自动关联 -->
    <div>
        {{ content }}
    </div>
</template>

<script>
    // vue文件中的脚本要求我们导出一个组件的配置项
    export default {
        data() {
            return {
                content: '组件内容'
            };
        }
    }
</script>

<style>
    /* 这里书写组件的样式 */
</style>
