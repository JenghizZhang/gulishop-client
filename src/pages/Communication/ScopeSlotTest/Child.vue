<template>
    <div>
        <h2>这个是标题</h2>
        <slot></slot>
        <slot name="child2"></slot>
    </div>
</template>

<script>
export default {
    name:'Child'
}
</script>

<style lang='less' scoped>
    
</style>