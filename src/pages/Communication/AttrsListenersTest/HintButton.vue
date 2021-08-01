// 带提示的button组件
<template>
    <a href="javascript:;" :title="title">
        <el-button v-bind="$attrs" v-on="$listeners"></el-button>
    </a>
</template>

<script>
export default {
    name: "HintButton",
    props: ["title"],
    mounted() {
        console.log("this.$listeners", this.$listeners);
        console.log("this.$attrs", this.$attrs);
    },
};
</script>

<style lang='less' scoped>
</style>