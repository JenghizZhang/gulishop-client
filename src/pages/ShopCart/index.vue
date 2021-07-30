<template>
    <div class="cart">
        <h4>全部商品</h4>
        <div class="cart-main">
            <div class="cart-th">
                <div class="cart-th1">全部</div>
                <div class="cart-th2">商品</div>
                <div class="cart-th3">单价（元）</div>
                <div class="cart-th4">数量</div>
                <div class="cart-th5">小计（元）</div>
                <div class="cart-th6">操作</div>
            </div>
            <div class="cart-body">
                <ul
                    class="cart-list"
                    v-for="(cart, index) in cartInfoList"
                    :key="index"
                >
                    <li class="cart-list-con1">
                        <input
                            type="checkbox"
                            name="chk_list"
                            v-model="cart.isChecked"
                            @click="updateOneCheck(cart)"
                        />
                    </li>
                    <li class="cart-list-con2">
                        <img :src="cart.imgUrl" />
                        <div class="item-msg">
                            {{ cart.skuName }}
                        </div>
                    </li>
                    <li class="cart-list-con4">
                        <span class="price">{{ cart.skuPrice }}.00</span>
                    </li>
                    <li class="cart-list-con5">
                        <a
                            href="javascript:void(0)"
                            class="mins"
                            @click="cart.skuNum <= 1 ? null : cart.skuNum--"
                            >-</a
                        >
                        <input
                            autocomplete="off"
                            type="text"
                            v-model.number="cart.skuNum"
                            minnum="1"
                            class="itxt"
                            @change="cart.skuNum < 1 ? (cart.skuNum = 1) : null"
                        />
                        <a
                            href="javascript:void(0)"
                            class="plus"
                            @click="cart.skuNum++"
                            >+</a
                        >
                    </li>
                    <li class="cart-list-con6">
                        <span class="sum">{{
                            cart.skuPrice * cart.skuNum
                        }}</span>
                    </li>
                    <li class="cart-list-con7">
                        <a
                            href="javascript:;"
                            class="sindelet"
                            @click="deleteOne(cart, index)"
                            >删除</a
                        >
                        <br />
                        <a href="#none">移到收藏</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="cart-tool">
            <div class="select-all">
                <input
                    class="chooseAll"
                    type="checkbox"
                    v-model="isAllChecked"
                />
                <span>全{{ isAllChecked ? null : "不" }}选</span>
            </div>
            <div class="option">
                <a href="javascript:;" @click="deleteAll">删除选中的商品</a>
                <a href="#none">移到我的关注</a>
                <a href="#none">清除下柜商品</a>
            </div>
            <div class="money-box">
                <div class="chosed">
                    已选择 <span>{{ ckeckedNum }}</span
                    >件商品
                </div>
                <div class="sumprice">
                    <em>总价（不含运费） ：</em>
                    <i class="summoney">{{ totalCost }}</i>
                </div>
                <div class="sumbtn">
                    <router-link class="sum-btn" to="/trade" >结算</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
    name: "ShopCart",
    data() {
        return {
            cartInfoList:[]
        }
    },
    methods: {
        ...mapActions("shopCart", [
            "getShopCartList",
            "updateShopCartIsChecked",
            "deleteShopCart",
            "deleteShopCartAll"
        ]),
        // 修改购物车选中状态，单个修改
        async updateOneCheck(cart) {
            try {
                await this.updateShopCartIsChecked({
                    skuId: cart.id,
                    isChecked: !cart.isChecked,
                });
            } catch (error) {
                alert(error.message);
            }
        },
        // 删除单个购物车
        deleteOne(_, index) {
            this.cartInfoList.splice(index, 1);
            this.deleteShopCart(index)
                .then((data) => {
                    // console.log(data);
                })
                .catch((error) => {
                    alert(error.message);
                });
        },
        // 删除多个购物车数据
        deleteAll(){
            this.deleteShopCartAll(this.cartInfoList)
            let newShopCartList = []
            this.cartInfoList.forEach((item,index)=>{
                if(!item.isChecked){
                    newShopCartList.push(item)
                }
            })
            this.cartInfoList = newShopCartList;
        }
    },
    computed: {
        // 统计件数
        ckeckedNum() {
            return this.cartInfoList.reduce(
                (prev, cart) => prev + (cart.isChecked ? cart.skuNum : 0),
                0
            );
        },
        // 统计总价
        totalCost() {
            return this.cartInfoList.reduce(
                (prev, cart) =>
                    prev + (cart.isChecked ? cart.skuNum : 0) * cart.skuPrice,
                0
            );
        },
        // 全选
        isAllChecked: {
            set(value) {
                this.$store.dispatch("shopCart/updateCartIsCheckedAll", {
                    isChecked: value,
                    cartInfoList: this.cartInfoList,
                });
                this.cartInfoList.forEach((cart) => (cart.isChecked = value));
            },
            get() {
                return this.cartInfoList.every((cart) => cart.isChecked);
            },
        },
    },
    mounted() {
        this.getShopCartList()
            .then(data=>this.cartInfoList=data)
    },
};
</script>

<style lang="less" scoped>
.cart {
    width: 1200px;
    margin: 0 auto;

    h4 {
        margin: 9px 0;
        font-size: 14px;
        line-height: 21px;
    }

    .cart-main {
        .cart-th {
            background: #f5f5f5;
            border: 1px solid #ddd;
            padding: 10px;
            overflow: hidden;

            & > div {
                float: left;
            }

            .cart-th1 {
                width: 25%;

                input {
                    vertical-align: middle;
                }

                span {
                    vertical-align: middle;
                }
            }

            .cart-th2 {
                width: 25%;
            }

            .cart-th3,
            .cart-th4,
            .cart-th5,
            .cart-th6 {
                width: 12.5%;
            }
        }

        .cart-body {
            margin: 15px 0;
            border: 1px solid #ddd;

            .cart-list {
                padding: 10px;
                border-bottom: 1px solid #ddd;
                overflow: hidden;

                & > li {
                    float: left;
                }

                .cart-list-con1 {
                    width: 15%;
                }

                .cart-list-con2 {
                    width: 35%;

                    img {
                        width: 82px;
                        height: 82px;
                        float: left;
                    }

                    .item-msg {
                        float: left;
                        width: 150px;
                        margin: 0 10px;
                        line-height: 18px;
                    }
                }

                .cart-list-con4 {
                    width: 10%;
                }

                .cart-list-con5 {
                    width: 15%;

                    .mins {
                        border: 1px solid #ddd;
                        border-right: 0;
                        float: left;
                        color: #666;
                        width: 6px;
                        text-align: center;
                        padding: 8px;
                    }

                    input {
                        border: 1px solid #ddd;
                        width: 40px;
                        height: 33px;
                        float: left;
                        text-align: center;
                        font-size: 14px;
                    }

                    .plus {
                        border: 1px solid #ddd;
                        border-left: 0;
                        float: left;
                        color: #666;
                        width: 6px;
                        text-align: center;
                        padding: 8px;
                    }
                }

                .cart-list-con6 {
                    width: 12%;

                    .sum {
                        font-size: 16px;
                    }
                }

                .cart-list-con7 {
                    width: 13%;

                    a {
                        color: #666;
                    }
                }
            }
        }
    }

    .cart-tool {
        overflow: hidden;
        border: 1px solid #ddd;

        .select-all {
            padding: 10px;
            overflow: hidden;
            float: left;

            span {
                vertical-align: middle;
            }

            input {
                vertical-align: middle;
            }
        }

        .option {
            padding: 10px;
            overflow: hidden;
            float: left;

            a {
                float: left;
                padding: 0 10px;
                color: #666;
            }
        }

        .money-box {
            float: right;

            .chosed {
                line-height: 26px;
                float: left;
                padding: 0 10px;
            }

            .sumprice {
                width: 200px;
                line-height: 22px;
                float: left;
                padding: 0 10px;

                .summoney {
                    color: #c81623;
                    font-size: 16px;
                }
            }

            .sumbtn {
                float: right;

                a {
                    display: block;
                    position: relative;
                    width: 96px;
                    height: 52px;
                    line-height: 52px;
                    color: #fff;
                    text-align: center;
                    font-size: 18px;
                    font-family: "Microsoft YaHei";
                    background: #e1251b;
                    overflow: hidden;
                }
            }
        }
    }
}
</style>