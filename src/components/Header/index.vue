<template>
    <!-- 头部 -->
    <header class="header">
        <!-- 头部的第一行 -->
        <div class="top">
            <div class="container">
                <div class="loginList">
                    <p>尚品汇欢迎您！</p>
                    <p v-if="user.account">
                        <span>欢迎{{ user.account }}</span>
                        <a
                            href="javascript:"
                            :style="{ marginLeft: '10px' }"
                            @click="logout"
                            >退出登录</a
                        >
                    </p>
                    <p v-else>
                        <span>请</span>
                        <router-link to="/login">登录</router-link>
                        <router-link to="/register">免费注册</router-link>
                    </p>
                </div>
                <div class="typeList">
                    <router-link to="/center">我的订单</router-link>
                    <router-link to="/shopCart">我的购物车</router-link>
                    <a href="###">我的尚品汇</a>
                    <a href="###">尚品汇会员</a>
                    <a href="###">企业采购</a>
                    <a href="###">关注尚品汇</a>
                    <a href="###">合作招商</a>
                    <a href="###">商家后台</a>
                </div>
            </div>
        </div>
        <!--头部第二行 搜索区域-->
        <div class="bottom">
            <h1 class="logoArea">
                <!-- <router-link class="logo" title="尚品汇" to="/home" target="_blank"> -->
                <router-link class="logo" title="尚品汇" to="/home">
                    <img src="./images/logo.png" alt="" />
                </router-link>
            </h1>
            <div class="searchArea">
                <div class="searchForm">
                    <input
                        type="text"
                        id="autocomplete"
                        class="input-error input-xxlarge"
                        autocomplete="off"
                        v-model="keyWord"
                        @keyup.prevent.enter="toSearch"
                    />
                    <button
                        class="sui-btn btn-xlarge btn-danger"
                        type="button"
                        @click="toSearch"
                    >
                        搜索
                    </button>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import storageUtils from "@/utils/storageUtils";
export default {
    name: "Header",
    data() {
        return {
            keyWord: "",
            // user: this.$store.state.user.user,
        };
    },
    computed: {
        user(){
            return this.$store.state.user.user
        }
    },
    methods: {
        toSearch() {
            if (this.$route.path !== "/home") {
                this.$router.replace({
                    name: "search",
                    params: { keyword: this.keyWord || undefined },
                    query: this.$route.query,
                });
            } else {
                this.$router.push({
                    name: "search",
                    params: { keyword: this.keyWord || undefined },
                    query: this.$route.query,
                });
            }
        },
        setKeyword() {
            this.keyWord = "";
        },
        logout() {
            storageUtils.removeUser();
            this.$router.push("login");
            this.$store.commit("user/CLEAR_USER");
        },
    },
    mounted() {
        this.$bus.$on("clearKeyword", this.setKeyword);
    },
};
</script>

<style lang='less' scoped>
.header {
    & > .top {
        background-color: #eaeaea;
        height: 30px;
        line-height: 30px;

        .container {
            width: 1200px;
            margin: 0 auto;
            overflow: hidden;

            .loginList {
                float: left;

                p {
                    float: left;
                    margin-right: 10px;

                    .register {
                        border-left: 1px solid #b3aeae;
                        padding: 0 5px;
                        margin-left: 5px;
                    }
                }
            }

            .typeList {
                float: right;

                a {
                    padding: 0 10px;

                    & + a {
                        border-left: 1px solid #b3aeae;
                    }
                }
            }
        }
    }

    & > .bottom {
        width: 1200px;
        margin: 0 auto;
        overflow: hidden;

        .logoArea {
            float: left;

            .logo {
                img {
                    width: 175px;
                    margin: 25px 45px;
                }
            }
        }

        .searchArea {
            float: right;
            margin-top: 35px;

            .searchForm {
                overflow: hidden;

                input {
                    box-sizing: border-box;
                    width: 490px;
                    height: 32px;
                    padding: 0px 4px;
                    border: 2px solid #ea4a36;
                    float: left;

                    &:focus {
                        outline: none;
                    }
                }

                button {
                    height: 32px;
                    width: 68px;
                    background-color: #ea4a36;
                    border: none;
                    color: #fff;
                    float: left;
                    cursor: pointer;

                    &:focus {
                        outline: none;
                    }
                }
            }
        }
    }
}
</style>