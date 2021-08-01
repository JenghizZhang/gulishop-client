<template>
    <div>
        <h1>EventTest组件</h1>
        <!-- html标签添加原生dom事件 -->
        <button @click="test">点我</button>
        <!-- 组件标签添加原生dom事件 -->
        <Event1 @click.native='test1'/>
    </div>
</template>

<script type="text/ecmascript-6">
import Event1 from "./Event1.vue";
import Event2 from "./Event2.vue";

export default {
    name: "EventTest",

    components: {
        Event1,
        Event2,
    },

    methods: {
        test(event) {
            console.log(event.target)
        },
        test1(event){
            console.log(event.target)
        }
    },
};
</script>
