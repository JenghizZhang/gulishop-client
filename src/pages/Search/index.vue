<template>
    <div>
        <TypeNav />
        <div class="main">
            <div class="py-container">
                <!--bread-->
                <div class="bread">
                    <ul class="fl sui-breadcrumb">
                        <li>
                            <a href="#">全部结果</a>
                        </li>
                    </ul>
                    <ul class="fl sui-tag">
                        <li class="with-x" v-if="searchParams.categoryName">
                            {{ searchParams.categoryName }}
                            <i @click="removeCategoryName">×</i>
                        </li>
                        <li class="with-x" v-if="searchParams.keyword">
                            {{ searchParams.keyword }}
                            <i @click="removeKeyword">×</i>
                        </li>
                        <li class="with-x" v-if="searchParams.trademark">
                            {{ searchParams.trademark.split(":")[1] }}
                            <i @click="removeTrademark">×</i>
                        </li>
                        <li
                            class="with-x"
                            v-for="(attr, index) in searchParams.props"
                            :key="attr"
                        >
                            {{ attr }}
                            <i @click="removeAttr(index)">×</i>
                        </li>
                    </ul>
                </div>

                <!--selector-->
                <SearchSelector
                    @searchForTrademark="searchForTrademark"
                    @searchForAttr="searchForAttr"
                />

                <!--details-->
                <div class="details clearfix">
                    <div class="sui-navbar">
                        <div class="navbar-inner filter">
                            <ul class="sui-nav">
                                <li
                                    :class="{active:sortFlag ==='1',}"
                                >
                                    <a href="javascript:;"  @click="changeSort('1')">
                                        综合
                                        <span v-if="sortFlag === '1'"
                                            class="iconfont"
                                            :class="{
                                                icondown:
                                                    sortType === 'desc',
                                                iconup:
                                                    sortType === 'asc',
                                            }"
                                        ></span>
                                    </a>
                                </li>

                                <li
                                    :class="{active:sortFlag ==='2',}"
                                >
                                    <a href="javascript:;" @click="changeSort('2')">
                                        价格
                                        <i
                                            v-if="sortFlag === '2'"
                                            class="iconfont"
                                            :class="{
                                                icondown:
                                                    sortType === 'desc',
                                                iconup:
                                                    sortType === 'asc',
                                            }"
                                        ></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:;">销量</a>
                                </li>
                                <li>
                                    <a href="javascript:;">新品</a>
                                </li>
                                <li>
                                    <a href="javascript:;">评价</a>
                                </li>
                                <!-- <li>
                                    <a href="#">价格⬇</a>
                                </li> -->
                            </ul>
                        </div>
                    </div>
                    <div class="goods-list">
                        <ul class="yui3-g">
                            <li
                                class="yui3-u-1-5"
                                v-for="(good, index) in goodsList"
                                :key="index"
                            >
                                <div class="list-wrap">
                                    <div class="p-img">
                                        <router-link :to="`/detail/${good.id}`">
                                            <img v-lazy="good.defaultImg" style="height:245px;width:204px"/>
                                        </router-link>
                                    </div>
                                    <div class="price">
                                        <strong>
                                            <i>¥{{ good.price }}.00</i>
                                        </strong>
                                    </div>
                                    <div class="attr">
                                        <router-link
                                            :to="`/detail/${good.id}`"
                                            title="促销信息，下单即赠送三个月CIBN视频会员卡！【小米电视新品4A 58 火爆预约中】"
                                        >
                                            {{ good.title }}
                                        </router-link>
                                    </div>
                                    <div class="commit">
                                        <i class="command"
                                            >已有<span>2000</span>人评价</i
                                        >
                                    </div>
                                    <div class="operate">
                                        <a
                                            href="success-cart.html"
                                            target="_blank"
                                            class="
                                                sui-btn
                                                btn-bordered btn-danger
                                            "
                                            >加入购物车</a
                                        >
                                        <a
                                            href="javascript:void(0);"
                                            class="sui-btn btn-bordered"
                                            >收藏</a
                                        >
                                    </div>
                                </div>
                            </li>

                            <!-- <li class="yui3-u-1-5">
                                <div class="list-wrap">
                                    <div class="p-img">
                                        <a href="item.html" target="_blank"
                                            ><img src="./images/mobile01.png"
                                        /></a>
                                    </div>
                                    <div class="price">
                                        <strong>
                                            <i>¥6088.00</i>
                                        </strong>
                                    </div>
                                    <div class="attr">
                                        <a
                                            target="_blank"
                                            href="item.html"
                                            title="促销信息，下单即赠送三个月CIBN视频会员卡！【小米电视新品4A 58 火爆预约中】"
                                            >Apple苹果iPhone 6s
                                            (A1699)Apple苹果iPhone 6s
                                            (A1699)Apple苹果iPhone 6s
                                            (A1699)Apple苹果iPhone 6s (A1699)</a
                                        >
                                    </div>
                                    <div class="commit">
                                        <i class="command"
                                            >已有<span>2000</span>人评价</i
                                        >
                                    </div>
                                    <div class="operate">
                                        <a
                                            href="success-cart.html"
                                            target="_blank"
                                            class="
                                                sui-btn
                                                btn-bordered btn-danger
                                            "
                                            >加入购物车</a
                                        >
                                        <a
                                            href="javascript:void(0);"
                                            class="sui-btn btn-bordered"
                                            >收藏</a
                                        >
                                    </div>
                                </div>
                            </li>
                            <li class="yui3-u-1-5">
                                <div class="list-wrap">
                                    <div class="p-img">
                                        <img src="./images/mobile02.png" />
                                    </div>
                                    <div class="price">
                                        <strong>
                                            <i>¥6088.00</i>
                                        </strong>
                                    </div>
                                    <div class="attr">
                                        <a
                                            target="_blank"
                                            href="item.html"
                                            title="促销信息，下单即赠送三个月CIBN视频会员卡！【小米电视新品4A 58 火爆预约中】"
                                            >Apple苹果iPhone 6s
                                            (A1699)Apple苹果iPhone 6s
                                            (A1699)Apple苹果iPhone 6s
                                            (A1699)Apple苹果iPhone 6s (A1699)</a
                                        >
                                    </div>
                                    <div class="commit">
                                        <i class="command"
                                            >已有<span>2000</span>人评价</i
                                        >
                                    </div>
                                    <div class="operate">
                                        <a
                                            href="success-cart.html"
                                            target="_blank"
                                            class="
                                                sui-btn
                                                btn-bordered btn-danger
                                            "
                                            >加入购物车</a
                                        >
                                        <a
                                            href="javascript:void(0);"
                                            class="sui-btn btn-bordered"
                                            >收藏</a
                                        >
                                    </div>
                                </div>
                            </li>
                            <li class="yui3-u-1-5">
                                <div class="list-wrap">
                                    <div class="p-img">
                                        <img src="./images/mobile03.png" />
                                    </div>
                                    <div class="price">
                                        <strong>
                                            <i>¥6088.00</i>
                                        </strong>
                                    </div>
                                    <div class="attr">
                                        <a
                                            target="_blank"
                                            href="item.html"
                                            title="促销信息，下单即赠送三个月CIBN视频会员卡！【小米电视新品4A 58 火爆预约中】"
                                            >Apple苹果iPhone 6s
                                            (A1699)Apple苹果iPhone 6s
                                            (A1699)Apple苹果iPhone 6s
                                            (A1699)Apple苹果iPhone 6s (A1699)</a
                                        >
                                    </div>
                                    <div class="commit">
                                        <i class="command"
                                            >已有<span>2000</span>人评价</i
                                        >
                                    </div>
                                    <div class="operate">
                                        <a
                                            href="success-cart.html"
                                            target="_blank"
                                            class="
                                                sui-btn
                                                btn-bordered btn-danger
                                            "
                                            >加入购物车</a
                                        >
                                        <a
                                            href="javascript:void(0);"
                                            class="sui-btn btn-bordered"
                                            >收藏</a
                                        >
                                    </div>
                                </div>
                            </li>
                            <li class="yui3-u-1-5">
                                <div class="list-wrap">
                                    <div class="p-img">
                                        <img src="./images/mobile04.png" />
                                    </div>
                                    <div class="price">
                                        <strong>
                                            <i>¥6088.00</i>
                                        </strong>
                                    </div>
                                    <div class="attr">
                                        <a
                                            target="_blank"
                                            href="item.html"
                                            title="促销信息，下单即赠送三个月CIBN视频会员卡！【小米电视新品4A 58 火爆预约中】"
                                            >Apple苹果iPhone 6s
                                            (A1699)Apple苹果iPhone 6s
                                            (A1699)Apple苹果iPhone 6s
                                            (A1699)Apple苹果iPhone 6s (A1699)</a
                                        >
                                    </div>
                                    <div class="commit">
                                        <i class="command"
                                            >已有<span>2000</span>人评价</i
                                        >
                                    </div>
                                    <div class="operate">
                                        <a
                                            href="success-cart.html"
                                            target="_blank"
                                            class="
                                                sui-btn
                                                btn-bordered btn-danger
                                            "
                                            >加入购物车</a
                                        >
                                        <a
                                            href="javascript:void(0);"
                                            class="sui-btn btn-bordered"
                                            >收藏</a
                                        >
                                    </div>
                                </div>
                            </li>
                            <li class="yui3-u-1-5">
                                <div class="list-wrap">
                                    <div class="p-img">
                                        <img src="./images/mobile05.png" />
                                    </div>
                                    <div class="price">
                                        <strong>
                                            <i>¥6088.00</i>
                                        </strong>
                                    </div>
                                    <div class="attr">
                                        <a
                                            target="_blank"
                                            href="item.html"
                                            title="促销信息，下单即赠送三个月CIBN视频会员卡！【小米电视新品4A 58 火爆预约中】"
                                            >Apple苹果iPhone 6s
                                            (A1699)Apple苹果iPhone 6s
                                            (A1699)Apple苹果iPhone 6s
                                            (A1699)Apple苹果iPhone 6s (A1699)</a
                                        >
                                    </div>
                                    <div class="commit">
                                        <i class="command"
                                            >已有<span>2000</span>人评价</i
                                        >
                                    </div>
                                    <div class="operate">
                                        <a
                                            href="success-cart.html"
                                            target="_blank"
                                            class="
                                                sui-btn
                                                btn-bordered btn-danger
                                            "
                                            >加入购物车</a
                                        >
                                        <a
                                            href="javascript:void(0);"
                                            class="sui-btn btn-bordered"
                                            >收藏</a
                                        >
                                    </div>
                                </div>
                            </li>
                            <li class="yui3-u-1-5">
                                <div class="list-wrap">
                                    <div class="p-img">
                                        <img src="./images/mobile06.png" />
                                    </div>
                                    <div class="price">
                                        <strong>
                                            <i>¥6088.00</i>
                                        </strong>
                                    </div>
                                    <div class="attr">
                                        <a
                                            target="_blank"
                                            href="item.html"
                                            title="促销信息，下单即赠送三个月CIBN视频会员卡！【小米电视新品4A 58 火爆预约中】"
                                            >Apple苹果iPhone 6s
                                            (A1699)Apple苹果iPhone 6s
                                            (A1699)Apple苹果iPhone 6s
                                            (A1699)Apple苹果iPhone 6s (A1699)</a
                                        >
                                    </div>
                                    <div class="commit">
                                        <i class="command"
                                            >已有<span>2000</span>人评价</i
                                        >
                                    </div>
                                    <div class="operate">
                                        <a
                                            href="success-cart.html"
                                            target="_blank"
                                            class="
                                                sui-btn
                                                btn-bordered btn-danger
                                            "
                                            >加入购物车</a
                                        >
                                        <a
                                            href="javascript:void(0);"
                                            class="sui-btn btn-bordered"
                                            >收藏</a
                                        >
                                    </div>
                                </div>
                            </li>
                            <li class="yui3-u-1-5">
                                <div class="list-wrap">
                                    <div class="p-img">
                                        <img src="./images/mobile01.png" />
                                    </div>
                                    <div class="price">
                                        <strong>
                                            <i>¥6088.00</i>
                                        </strong>
                                    </div>
                                    <div class="attr">
                                        <a
                                            target="_blank"
                                            href="item.html"
                                            title="促销信息，下单即赠送三个月CIBN视频会员卡！【小米电视新品4A 58 火爆预约中】"
                                            >Apple苹果iPhone 6s
                                            (A1699)Apple苹果iPhone 6s
                                            (A1699)Apple苹果iPhone 6s
                                            (A1699)Apple苹果iPhone 6s (A1699)</a
                                        >
                                    </div>
                                    <div class="commit">
                                        <i class="command"
                                            >已有<span>2000</span>人评价</i
                                        >
                                    </div>
                                    <div class="operate">
                                        <a
                                            href="success-cart.html"
                                            target="_blank"
                                            class="
                                                sui-btn
                                                btn-bordered btn-danger
                                            "
                                            >加入购物车</a
                                        >
                                        <a
                                            href="javascript:void(0);"
                                            class="sui-btn btn-bordered"
                                            >收藏</a
                                        >
                                    </div>
                                </div>
                            </li>
                            <li class="yui3-u-1-5">
                                <div class="list-wrap">
                                    <div class="p-img">
                                        <img src="./images/mobile02.png" />
                                    </div>
                                    <div class="price">
                                        <strong>
                                            <i>¥6088.00</i>
                                        </strong>
                                    </div>
                                    <div class="attr">
                                        <a
                                            target="_blank"
                                            href="item.html"
                                            title="促销信息，下单即赠送三个月CIBN视频会员卡！【小米电视新品4A 58 火爆预约中】"
                                            >Apple苹果iPhone 6s
                                            (A1699)Apple苹果iPhone 6s
                                            (A1699)Apple苹果iPhone 6s
                                            (A1699)Apple苹果iPhone 6s (A1699)</a
                                        >
                                    </div>
                                    <div class="commit">
                                        <i class="command"
                                            >已有<span>2000</span>人评价</i
                                        >
                                    </div>
                                    <div class="operate">
                                        <a
                                            href="success-cart.html"
                                            target="_blank"
                                            class="
                                                sui-btn
                                                btn-bordered btn-danger
                                            "
                                            >加入购物车</a
                                        >
                                        <a
                                            href="javascript:void(0);"
                                            class="sui-btn btn-bordered"
                                            >收藏</a
                                        >
                                    </div>
                                </div>
                            </li>
                            <li class="yui3-u-1-5">
                                <div class="list-wrap">
                                    <div class="p-img">
                                        <img src="./images/mobile03.png" />
                                    </div>
                                    <div class="price">
                                        <strong>
                                            <i>¥6088.00</i>
                                        </strong>
                                    </div>
                                    <div class="attr">
                                        <a
                                            target="_blank"
                                            href="item.html"
                                            title="促销信息，下单即赠送三个月CIBN视频会员卡！【小米电视新品4A 58 火爆预约中】"
                                            >Apple苹果iPhone 6s
                                            (A1699)Apple苹果iPhone 6s
                                            (A1699)Apple苹果iPhone 6s
                                            (A1699)Apple苹果iPhone 6s (A1699)</a
                                        >
                                    </div>
                                    <div class="commit">
                                        <i class="command"
                                            >已有<span>2000</span>人评价</i
                                        >
                                    </div>
                                    <div class="operate">
                                        <a
                                            href="success-cart.html"
                                            target="_blank"
                                            class="
                                                sui-btn
                                                btn-bordered btn-danger
                                            "
                                            >加入购物车</a
                                        >
                                        <a
                                            href="javascript:void(0);"
                                            class="sui-btn btn-bordered"
                                            >收藏</a
                                        >
                                    </div>
                                </div>
                            </li>
                            <li class="yui3-u-1-5">
                                <div class="list-wrap">
                                    <div class="p-img">
                                        <img src="./images/mobile04.png" />
                                    </div>
                                    <div class="price">
                                        <strong>
                                            <i>¥6088.00</i>
                                        </strong>
                                    </div>
                                    <div class="attr">
                                        <a
                                            target="_blank"
                                            href="item.html"
                                            title="促销信息，下单即赠送三个月CIBN视频会员卡！【小米电视新品4A 58 火爆预约中】"
                                            >Apple苹果iPhone 6s
                                            (A1699)Apple苹果iPhone 6s
                                            (A1699)Apple苹果iPhone 6s
                                            (A1699)Apple苹果iPhone 6s (A1699)</a
                                        >
                                    </div>
                                    <div class="commit">
                                        <i class="command"
                                            >已有<span>2000</span>人评价</i
                                        >
                                    </div>
                                    <div class="operate">
                                        <a
                                            href="success-cart.html"
                                            target="_blank"
                                            class="
                                                sui-btn
                                                btn-bordered btn-danger
                                            "
                                            >加入购物车</a
                                        >
                                        <a
                                            href="javascript:void(0);"
                                            class="sui-btn btn-bordered"
                                            >收藏</a
                                        >
                                    </div>
                                </div>
                            </li> -->
                        </ul>
                    </div>
                    <div class="designedPagination">
                        <Pagination 
                            :currentPageNo='searchParams.pageNo'
                            :total='searchInfo.total'
                            :pageSize='searchParams.pageSize'
                            :continueNo='5'
                            @changePageNo='changePageNo'
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
import SearchSelector from "./SearchSelector/SearchSelector";
export default {
    name: "Search",

    components: {
        SearchSelector,
    },
    methods: {
        ...mapActions("search", ["getSearchInfo"]),
        // 删除分类名称搜索条件
        removeCategoryName() {
            this.searchParams.categoryName = undefined;
            this.searchParams.category1Id = undefined;
            this.searchParams.category2Id = undefined;
            this.searchParams.category3Id = undefined;
            this.searchParams.pageNo=1
            this.$router.replace({
                name: "search",
                params: { keyword: this.searchParams.keyword || undefined },
                query: {},
            });
        },
        // 删除关键字的搜索条件
        removeKeyword() {
            this.searchParams.keyword = undefined;
            this.searchParams.pageNo=1
            this.$router.replace({
                name: "search",
                params: {},
                query: this.$route.query,
            });
            this.$bus.$emit("clearKeyword");
        },
        // 删除品牌
        removeTrademark() {
            this.searchParams.trademark = undefined;
            this.searchParams.pageNo=1
            this.getSearchInfo(this.searchParams);
        },
        // 删除某个属性值搜索，重新发请求
        removeAttr(index) {
            this.searchParams.props.splice(index, 1);
            this.searchParams.pageNo=1
            this.getSearchInfo(this.searchParams);
        },
        // 用户点击品牌后重新发请求
        searchForTrademark(trademark) {
            this.searchParams.trademark = trademark;
            this.searchParams.pageNo=1
            this.getSearchInfo(this.searchParams);
        },
        // 用户点击平台属性后重新发送请求
        searchForAttr(attr) {
            // 判断是否发过请求
            if (this.searchParams.props.indexOf(attr) === -1) {
                this.searchParams.props.push(attr);
                this.searchParams.pageNo=1
                this.getSearchInfo(this.searchParams);
            }
        },
        // 点击综合或者价格的排序回调
        changeSort(sortFlag){
            // 判断点击是不是和原来的排序标志一样
            let originSortFlag = this.sortFlag;
            let originSortType = this.sortType;
            let newOrder = ''
            if(sortFlag===originSortFlag){
                // 点击的是同一个排序
                newOrder = `${sortFlag}:${originSortType==='asc'?'desc':'asc'}`
            }else{
                // 点击的是不同的排序
                newOrder = `${sortFlag}:asc`
            }
            this.searchParams.order=newOrder;
            this.searchParams.pageNo=1
            this.getSearchInfo(this.searchParams);
        },
        // 点击页码回调函数
        changePageNo(num){
            this.searchParams.pageNo=num
            this.getSearchInfo(this.searchParams);
        }
    },
    computed: {
        ...mapGetters("search", ["goodsList"]),
        ...mapState("search", ["searchInfo"]),
        sortFlag(){
            return this.searchParams.order.split(':')[0]
        },
        sortType(){
            return this.searchParams.order.split(':')[1]
        }
    },
    data() {
        return {
            searchParams: {
                // 这个对象称作初始化搜索参数
                // 之后只要是作为搜索条件的所有相关数据全部先在这个对象初始化
                category1Id: undefined,
                category2Id: undefined,
                category3Id: undefined,
                categoryName: undefined,
                keyword: undefined,
                props: [],
                trademark: undefined,

                // 默认搜索条件
                order: "1:asc", // 排序规则，后台排序，要给后台一个默认的排序规则
                pageNo: 6, // 搜索第几页商品，分页也是后台做好的
                pageSize: 10,
            },
        };
    },
    watch: {
        $route: {
            handler() {
                this.searchParams = {
                    ...this.searchParams,
                    ...this.$route.params,
                    ...this.$route.query,
                };
                Object.keys(this.searchParams).forEach((key) => {
                    if (this.searchParams[key] === "") {
                        delete this.searchParams[key];
                    }
                });
                this.getSearchInfo(this.searchParams);
            },
        },
    },
    beforeMount() {
        // 在点击三级分类或者点击搜索按钮发送请求前，把参数添加到searchParams中
        this.searchParams = {
            ...this.searchParams,
            ...this.$route.params,
            ...this.$route.query,
        };
        Object.keys(this.searchParams).forEach((key) => {
            if (this.searchParams[key] === "") {
                delete this.searchParams[key];
            }
        });
    },
    mounted() {
        this.getSearchInfo(this.searchParams);
    },
};
</script>

<style lang="less" scoped>
.main {
    margin: 10px 0;

    .py-container {
        width: 1200px;
        margin: 0 auto;

        .bread {
            margin-bottom: 5px;
            overflow: hidden;

            .sui-breadcrumb {
                padding: 3px 15px;
                margin: 0;
                font-weight: 400;
                border-radius: 3px;
                float: left;

                li {
                    display: inline-block;
                    line-height: 18px;

                    a {
                        color: #666;
                        text-decoration: none;

                        &:hover {
                            color: #4cb9fc;
                        }
                    }
                }
            }

            .sui-tag {
                margin-top: -5px;
                list-style: none;
                font-size: 0;
                line-height: 0;
                padding: 5px 0 0;
                margin-bottom: 18px;
                float: left;

                .with-x {
                    font-size: 12px;
                    margin: 0 5px 5px 0;
                    display: inline-block;
                    overflow: hidden;
                    color: #000;
                    background: #f7f7f7;
                    padding: 0 7px;
                    height: 20px;
                    line-height: 20px;
                    border: 1px solid #dedede;
                    white-space: nowrap;
                    transition: color 400ms;
                    cursor: pointer;

                    i {
                        margin-left: 10px;
                        cursor: pointer;
                        font: 400 14px tahoma;
                        display: inline-block;
                        height: 100%;
                        vertical-align: middle;
                    }

                    &:hover {
                        color: #28a3ef;
                    }
                }
            }
        }

        .details {
            margin-bottom: 5px;

            .sui-navbar {
                overflow: visible;
                margin-bottom: 0;

                .filter {
                    min-height: 40px;
                    padding-right: 20px;
                    background: #fbfbfb;
                    border: 1px solid #e2e2e2;
                    padding-left: 0;
                    border-radius: 0;
                    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.065);

                    .sui-nav {
                        position: relative;
                        left: 0;
                        display: block;
                        float: left;
                        margin: 0 10px 0 0;

                        li {
                            float: left;
                            line-height: 18px;

                            a {
                                display: block;
                                cursor: pointer;
                                padding: 11px 15px;
                                color: #777;
                                text-decoration: none;
                            }

                            &.active {
                                a {
                                    background: #e1251b;
                                    color: #fff;
                                }
                            }
                        }
                    }
                }
            }

            .goods-list {
                margin: 20px 0;

                ul {
                    display: flex;
                    flex-wrap: wrap;

                    li {
                        height: 100%;
                        width: 20%;
                        margin-top: 10px;
                        line-height: 28px;

                        .list-wrap {
                            .p-img {
                                padding-left: 15px;
                                width: 215px;
                                height: 255px;

                                a {
                                    color: #666;

                                    img {
                                        max-width: 100%;
                                        height: auto;
                                        vertical-align: middle;
                                    }
                                }
                            }

                            .price {
                                padding-left: 15px;
                                font-size: 18px;
                                color: #c81623;

                                strong {
                                    font-weight: 700;

                                    i {
                                        margin-left: -5px;
                                    }
                                }
                            }

                            .attr {
                                padding-left: 15px;
                                width: 85%;
                                overflow: hidden;
                                margin-bottom: 8px;
                                min-height: 38px;
                                cursor: pointer;
                                line-height: 1.8;
                                display: -webkit-box;
                                -webkit-box-orient: vertical;
                                -webkit-line-clamp: 2;

                                a {
                                    color: #333;
                                    text-decoration: none;
                                }
                            }

                            .commit {
                                padding-left: 15px;
                                height: 22px;
                                font-size: 13px;
                                color: #a7a7a7;

                                span {
                                    font-weight: 700;
                                    color: #646fb0;
                                }
                            }

                            .operate {
                                padding: 12px 15px;

                                .sui-btn {
                                    display: inline-block;
                                    padding: 2px 14px;
                                    box-sizing: border-box;
                                    margin-bottom: 0;
                                    font-size: 12px;
                                    line-height: 18px;
                                    text-align: center;
                                    vertical-align: middle;
                                    cursor: pointer;
                                    border-radius: 0;
                                    background-color: transparent;
                                    margin-right: 15px;
                                }

                                .btn-bordered {
                                    min-width: 85px;
                                    background-color: transparent;
                                    border: 1px solid #8c8c8c;
                                    color: #8c8c8c;

                                    &:hover {
                                        border: 1px solid #666;
                                        color: #fff !important;
                                        background-color: #666;
                                        text-decoration: none;
                                    }
                                }

                                .btn-danger {
                                    border: 1px solid #e1251b;
                                    color: #e1251b;

                                    &:hover {
                                        border: 1px solid #e1251b;
                                        background-color: #e1251b;
                                        color: white !important;
                                        text-decoration: none;
                                    }
                                }
                            }
                        }
                    }
                }
            }
            .designedPagination {
                display:flex;
                justify-content:center;

            }
            .page {
                width: 733px;
                height: 66px;
                overflow: hidden;
                float: right;

                .sui-pagination {
                    margin: 18px 0;

                    ul {
                        margin-left: 0;
                        margin-bottom: 0;
                        vertical-align: middle;
                        width: 490px;
                        float: left;

                        li {
                            line-height: 18px;
                            display: inline-block;

                            a {
                                position: relative;
                                float: left;
                                line-height: 18px;
                                text-decoration: none;
                                background-color: #fff;
                                border: 1px solid #e0e9ee;
                                margin-left: -1px;
                                font-size: 14px;
                                padding: 9px 18px;
                                color: #333;
                            }

                            &.active {
                                a {
                                    background-color: #fff;
                                    color: #e1251b;
                                    border-color: #fff;
                                    cursor: default;
                                }
                            }

                            &.prev {
                                a {
                                    background-color: #fafafa;
                                }
                            }

                            &.disabled {
                                a {
                                    color: #999;
                                    cursor: default;
                                }
                            }

                            &.dotted {
                                span {
                                    margin-left: -1px;
                                    position: relative;
                                    float: left;
                                    line-height: 18px;
                                    text-decoration: none;
                                    background-color: #fff;
                                    font-size: 14px;
                                    border: 0;
                                    padding: 9px 18px;
                                    color: #333;
                                }
                            }

                            &.next {
                                a {
                                    background-color: #fafafa;
                                }
                            }
                        }
                    }

                    div {
                        color: #333;
                        font-size: 14px;
                        float: right;
                        width: 241px;
                    }
                }
            }
        }
    }
}
</style>