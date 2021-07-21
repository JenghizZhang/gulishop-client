<template>
    <div>
        <Header />
        <router-view></router-view>
        <Footer v-show="!$route.meta.isHiddenFooter"/>
        <!-- <Footer v-show="$route.path.indexOf('/login') ===-1 && $route.path.indexOf('/register') ===-1"/> -->
    </div>
</template>

<script>
    import Footer from '@/components/Footer'
    import Header from '@/components/Header'
    
    export default {
        name: "App",
        // 非路由组件的注册
        components:{Footer, Header},
        mounted() {
            this.$store.dispatch('home/getCategoryList')
        },
    };
</script>

<style scoped>

</style>
