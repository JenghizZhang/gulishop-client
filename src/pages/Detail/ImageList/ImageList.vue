<template>
    <div class="swiper-container" ref="imgSwiper">
        <div class="swiper-wrapper">
            <div
                class="swiper-slide"
                v-for="(img, index) in imgList"
                :key="index"
                @mouseenter="hoverIndex = index"
                @mouseleave="hoverIndex = -1"
                @click="changeDefaultIndex(index)"
            >
                <img
                    :src="img.imgUrl"
                    :class="{
                        active: chosenIndex === index,
                        hover: hoverIndex === index,
                    }"
                />
            </div>
        </div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
    </div>
</template>

<script>
import Swiper from "swiper";
export default {
    name: "ImageList",
    props: ["imgList"],
    data() {
        return {
            hoverIndex: -1,
            chosenIndex: 0,
        };
    },
    methods: {
        changeDefaultIndex(index) {
            this.chosenIndex = index;
            this.$bus.$emit("changeDefaultIndex", index);
        },
    },
    watch: {
        imgList: {
            immediate: true,
            handler() {
                this.$nextTick(() => {
                    new Swiper(this.$refs.imgSwiper, {
                        direction: "horizontal", //垂直切换选项
                        loop: false, // 循环模式选项
                        slidesPerView: "auto",
                        slidesPerGroup: 6,
                        // 如果需要前进后退按钮
                        navigation: {
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                        },
                    });
                });
            },
        },
    },
};
</script>

<style lang="less" scoped>
.swiper-container {
    height: 56px;
    width: 412px;
    box-sizing: border-box;
    padding: 0 12px;

    .swiper-slide {
        width: 56px;
        height: 56px;

        img {
            width: 100%;
            height: 100%;
            border: 1px solid #ccc;
            padding: 2px;
            width: 50px;
            height: 50px;
            display: block;

            &.hover {
                border: 2px solid rgba(250, 139, 64, 0.726);
                padding: 1px;
            }

            &.active {
                border: 2px solid #f60;
                padding: 1px;
            }
        }
    }

    .swiper-button-next {
        left: auto;
        right: 0;
    }

    .swiper-button-prev {
        left: 0;
        right: auto;
    }

    .swiper-button-next,
    .swiper-button-prev {
        box-sizing: border-box;
        width: 12px;
        height: 56px;
        background: rgb(235, 235, 235);
        border: 1px solid rgb(204, 204, 204);
        top: 0;
        margin-top: 0;
        &::after {
            font-size: 12px;
        }
    }
}
</style>