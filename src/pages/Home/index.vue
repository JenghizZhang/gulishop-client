<template>
    <div>
        <TypeNav />
        <ListContainer />
        <TodayRecommend />
        <Rank />
        <Like />
        <Floor />
        <Floor />
        <Brand />
    </div>
</template>

<script>
    import ListContainer from './ListContainer/ListContainer.vue'
    import TodayRecommend from './TodayRecommend/TodayRecommend.vue'
    import Rank from './Rank/Rank.vue'
    import Like from './Like/Like.vue'
    import Floor from './Floor/Floor.vue'
    import Brand from './Brand/Brand.vue'
    export default {
        name:'Home',
        components: {ListContainer,TodayRecommend,Rank,Like,Floor,Brand}
    }
</script>

<style scoped>
    
</style>