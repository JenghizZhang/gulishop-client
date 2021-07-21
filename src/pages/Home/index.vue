<template>
    <div>
        <TypeNav />
        <ListContainer />
        <TodayRecommend />
        <Rank />
        <Like />
        <Floor :floor='floor' v-for="(floor) in floorList" :key="floor.id"/>
        <Brand />
    </div>
</template>

<script>
    import { mapState } from 'vuex'

    import ListContainer from './ListContainer/ListContainer.vue'
    import TodayRecommend from './TodayRecommend/TodayRecommend.vue'
    import Rank from './Rank/Rank.vue'
    import Like from './Like/Like.vue'
    import Floor from './Floor/Floor.vue'
    import Brand from './Brand/Brand.vue'

    export default {
        name:'Home',
        components: {ListContainer,TodayRecommend,Rank,Like,Floor,Brand},
        mounted() {
            this.$store.dispatch('home/getFloorList')
        },
        computed:{
            ...mapState('home',['floorList'])
        }
    }
</script>

<style scoped>
    
</style>