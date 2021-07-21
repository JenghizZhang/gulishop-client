<template>
    <div class="swiper-container" id="mySwiper" ref="swiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in dataList" :key="item.id">
                <img :src="item.imgUrl" />
            </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>

        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
    </div>
</template>

<script>
import Swiper from "swiper"; //引入swiper的js
export default {
    name: "MySwiper",
    props: ["dataList"],
    watch: {
        dataList: {
            immediate: true,
            handler() {
                //一旦数据变化，就去实例化swiper
                //因为有数据也需要挂载到页面上，所以直接创建swiper实例不行
                //需要等结构完全形成之后再去实例化，this.$nextTick(func)
                this.$nextTick(function () {
                    new Swiper(this.$refs.swiper, {
                        direction: "horizontal", //垂直切换选项
                        loop: true, // 循环模式选项

                        // 如果需要分页器
                        pagination: {
                            el: ".swiper-pagination",
                        },

                        // 如果需要前进后退按钮
                        navigation: {
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                        },

                        /// 如果需要滚动条
                        // scrollbar: {
                        //     el: '.swiper-scrollbar',
                        // },
                    });
                });
            },
        },
    },
};
</script>

<style lang='less' scoped>
</style>