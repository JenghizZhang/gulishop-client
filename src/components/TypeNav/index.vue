<template>
    <!-- 商品分类导航 -->
    <div class="type-nav">
        <div class="container">
            <div @mouseleave="moveOutDiv" @mouseenter="isShow=true">
                <h2 class="all">全部商品分类</h2>
                <transition name="sort">
                    <div class="sort" v-show='isShow'>
                        <div class="all-sort-list2" @click="toSearch">
                            <div 
                                class="item" 
                                :class="{item_on:currentIndex===index}" 
                                @mouseenter="moveInItem(index)" 
                                v-for="(c1,index) in categoryList" 
                                :key="c1.categoryId"
                            >
                                <h3>
                                    <!-- 第一种写法：所有a标签换成router-link，组件对象太多会卡 -->
                                    <!-- <router-link 
                                        :to="{
                                            path:'/search',
                                            query:{
                                                category1Id:c1.categoryId,
                                                categoryName:c1.categoryName,
                                            }
                                        }"
                                    >
                                        {{c1.categoryName}}
                                    </router-link> -->
                                    <!-- 第二种写法：编程式导航 -->
                                    <!-- <a 
                                        href="javascript:;" 
                                        @click="$router.push({
                                            path: '/search',
                                            query: {
                                            category1Id: c1.categoryId,
                                            categoryName: c1.categoryName
                                            }
                                        })"
                                    >
                                        {{c1.categoryName}}
                                    </a> -->
                                    <a 
                                        href="javascript:;" 
                                        :data-category1Id="c1.categoryId"
                                        :data-categoryName="c1.categoryName"
                                    >
                                        {{c1.categoryName}}
                                    </a>
                                </h3>
                                <div class="item-list clearfix">
                                    <div class="subitem">
                                        <dl class="fore" v-for="(c2) in c1.categoryChild" :key="c2.categoryId">
                                            <dt>
                                                <!-- <router-link
                                                    :to="{
                                                        path: '/search',
                                                        query: {
                                                        category2Id: c2.categoryId,
                                                        categoryName: c2.categoryName
                                                        }
                                                    }"
                                                >
                                                    {{c2.categoryName}}
                                                </router-link> -->
                                                <!-- <a 
                                                    href="javascript:;" 
                                                    @click="$router.push({
                                                        path: '/search',
                                                        query: {
                                                        category2Id: c2.categoryId,
                                                        categoryName: c2.categoryName
                                                        }
                                                    })"
                                                >
                                                    {{c2.categoryName}}
                                                </a> -->
                                                <a 
                                                    href="javascript:;"
                                                    :data-category2Id="c2.categoryId"
                                                    :data-categoryName="c2.categoryName"
                                                >
                                                    {{c2.categoryName}}
                                                </a>
                                            </dt>
                                            <dd>
                                                <em v-for="(c3) in c2.categoryChild" :key="c3.categoryId">
                                                    <!-- <router-link
                                                        :to="{
                                                            path: '/search',
                                                            query: {
                                                            category3Id: c3.categoryId,
                                                            categoryName: c3.categoryName
                                                            }
                                                        }"
                                                    >
                                                        {{c3.categoryName}}
                                                    </router-link> -->
                                                    <!-- <a 
                                                        href="javascript:;" 
                                                        @click="$router.push({
                                                            path: '/search',
                                                            query: {
                                                            category3Id: c3.categoryId,
                                                            categoryName: c3.categoryName
                                                            }
                                                        })"
                                                    >
                                                        {{c3.categoryName}}
                                                    </a> -->
                                                    <a 
                                                        href="javascript:;"
                                                        :data-category3Id="c3.categoryId" 
                                                        :data-categoryName="c3.categoryName"
                                                    >
                                                        {{c3.categoryName}}
                                                    </a>
                                                </em>
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                            <!--<div class="item">
                                <h3>
                                    <a href="">家用电器</a>
                                </h3>
                                <div class="item-list clearfix">
                                    <div class="subitem">
                                        <dl class="fore">
                                            <dt>
                                                <a href="">电子书1</a>
                                            </dt>
                                            <dd>
                                                <em>
                                                    <a href="">免费</a>
                                                </em>
                                                <em>
                                                    <a href="">小说</a>
                                                </em>
                                                <em>
                                                    <a href="">励志与成功</a>
                                                </em>
                                                <em>
                                                    <a href="">婚恋/两性</a>
                                                </em>
                                                <em>
                                                    <a href="">文学</a>
                                                </em>
                                                <em>
                                                    <a href="">经管</a>
                                                </em>
                                                <em>
                                                    <a href="">畅读VIP</a>
                                                </em>
                                            </dd>
                                        </dl>
                                        <dl class="fore">
                                            <dt>
                                                <a href="">数字音乐</a>
                                            </dt>
                                            <dd>
                                                <em>
                                                    <a href="">通俗流行</a>
                                                </em>
                                                <em>
                                                    <a href="">古典音乐</a>
                                                </em>
                                                <em>
                                                    <a href="">摇滚说唱</a>
                                                </em>
                                                <em>
                                                    <a href="">爵士蓝调</a>
                                                </em>
                                                <em>
                                                    <a href="">乡村民谣</a>
                                                </em>
                                                <em>
                                                    <a href="">有声读物</a>
                                                </em>
                                            </dd>
                                        </dl>
                                        <dl class="fore">
                                            <dt>
                                                <a href="">音像</a>
                                            </dt>
                                            <dd>
                                                <em>
                                                    <a href="">音乐</a>
                                                </em>
                                                <em>
                                                    <a href="">影视</a>
                                                </em>
                                                <em>
                                                    <a href="">教育音像</a>
                                                </em>
                                                <em>
                                                    <a href="">游戏</a>
                                                </em>
                                            </dd>
                                        </dl>
                                        <dl class="fore">
                                            <dt>文艺</dt>
                                            <dd>
                                                <em>
                                                    <a href="">小说</a>
                                                </em>
                                                <em>
                                                    <a href="">文学</a>
                                                </em>
                                                <em>
                                                    <a href="">青春文学</a>
                                                </em>
                                                <em>
                                                    <a href="">传记</a>
                                                </em>
                                                <em>
                                                    <a href="">艺术</a>
                                                </em>
                                            </dd>
                                        </dl>
                                        <dl class="fore">
                                            <dt>人文社科</dt>
                                            <dd>
                                                <em>
                                                    <a href="">历史</a>
                                                </em>
                                                <em>
                                                    <a href="">心理学</a>
                                                </em>
                                                <em>
                                                    <a href="">政治/军事</a>
                                                </em>
                                                <em>
                                                    <a href="">国学/古籍</a>
                                                </em>
                                                <em>
                                                    <a href="">哲学/宗教</a>
                                                </em>
                                                <em>
                                                    <a href="">社会科学</a>
                                                </em>
                                            </dd>
                                        </dl>
                                        <dl class="fore">
                                            <dt>经管励志</dt>
                                            <dd>
                                                <em>
                                                    <a href="">经济</a>
                                                </em>
                                                <em>
                                                    <a href="">金融与投资</a>
                                                </em>
                                                <em>
                                                    <a href="">管理</a>
                                                </em>
                                                <em>
                                                    <a href="">励志与成功</a>
                                                </em>
                                            </dd>
                                        </dl>
                                        <dl class="fore">
                                            <dt>生活</dt>
                                            <dd>
                                                <em>
                                                    <a href="">家庭与育儿</a>
                                                </em>
                                                <em>
                                                    <a href="">旅游/地图</a>
                                                </em>
                                                <em>
                                                    <a href="">烹饪/美食</a>
                                                </em>
                                                <em>
                                                    <a href="">时尚/美妆</a>
                                                </em>
                                                <em>
                                                    <a href="">家居</a>
                                                </em>
                                                <em>
                                                    <a href="">婚恋与两性</a>
                                                </em>
                                                <em>
                                                    <a href="">娱乐/休闲</a>
                                                </em>
                                                <em>
                                                    <a href="">健身与保健</a>
                                                </em>
                                                <em>
                                                    <a href="">动漫/幽默</a>
                                                </em>
                                                <em>
                                                    <a href="">体育/运动</a>
                                                </em>
                                            </dd>
                                        </dl>
                                        <dl class="fore">
                                            <dt>科技</dt>
                                            <dd>
                                                <em>
                                                    <a href="">科普</a>
                                                </em>
                                                <em>
                                                    <a href="">IT</a>
                                                </em>
                                                <em>
                                                    <a href="">建筑</a>
                                                </em>
                                                <em>
                                                    <a href="">医学</a>
                                                </em>
                                                <em>
                                                    <a href="">工业技术</a>
                                                </em>
                                                <em>
                                                    <a href="">电子/通信</a>
                                                </em>
                                                <em>
                                                    <a href="">农林</a>
                                                </em>
                                                <em>
                                                    <a href="">科学与自然</a>
                                                </em>
                                            </dd>
                                        </dl>
                                        <dl class="fore">
                                            <dt>少儿</dt>
                                            <dd>
                                                <em>
                                                    <a href="">少儿</a>
                                                </em>
                                                <em>
                                                    <a href="">0-2岁</a>
                                                </em>
                                                <em>
                                                    <a href="">3-6岁</a>
                                                </em>
                                                <em>
                                                    <a href="">7-10岁</a>
                                                </em>
                                                <em>
                                                    <a href="">11-14岁</a>
                                                </em>
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <h3>
                                    <a href="">手机、数码、充值</a>
                                </h3>
                                <div class="item-list clearfix">
                                    <div class="subitem">
                                        <dl class="fore">
                                            <dt>
                                                <a href="">充值</a>
                                            </dt>
                                            <dd>
                                                <em>
                                                    <a href="recharge.html">充值</a>
                                                </em>
                                            </dd>
                                        </dl>
                                        <dl class="fore">
                                            <dt>
                                                <a href="">电子书2</a>
                                            </dt>
                                            <dd>
                                                <em>
                                                    <a href="">免费</a>
                                                </em>
                                                <em>
                                                    <a href="">小说</a>
                                                </em>
                                                <em>
                                                    <a href="">励志与成功</a>
                                                </em>
                                                <em>
                                                    <a href="">婚恋/两性</a>
                                                </em>
                                                <em>
                                                    <a href="">文学</a>
                                                </em>
                                                <em>
                                                    <a href="">经管</a>
                                                </em>
                                                <em>
                                                    <a href="">畅读VIP</a>
                                                </em>
                                            </dd>
                                        </dl>
                                        <dl class="fore">
                                            <dt>
                                                <a href="">数字音乐</a>
                                            </dt>
                                            <dd>
                                                <em>
                                                    <a href="">通俗流行</a>
                                                </em>
                                                <em>
                                                    <a href="">古典音乐</a>
                                                </em>
                                                <em>
                                                    <a href="">摇滚说唱</a>
                                                </em>
                                                <em>
                                                    <a href="">爵士蓝调</a>
                                                </em>
                                                <em>
                                                    <a href="">乡村民谣</a>
                                                </em>
                                                <em>
                                                    <a href="">有声读物</a>
                                                </em>
                                            </dd>
                                        </dl>
                                        <dl class="fore">
                                            <dt>
                                                <a href="">音像</a>
                                            </dt>
                                            <dd>
                                                <em>
                                                    <a href="">音乐</a>
                                                </em>
                                                <em>
                                                    <a href="">影视</a>
                                                </em>
                                                <em>
                                                    <a href="">教育音像</a>
                                                </em>
                                                <em>
                                                    <a href="">游戏</a>
                                                </em>
                                            </dd>
                                        </dl>
                                        <dl class="fore">
                                            <dt>文艺</dt>
                                            <dd>
                                                <em>
                                                    <a href="">小说</a>
                                                </em>
                                                <em>
                                                    <a href="">文学</a>
                                                </em>
                                                <em>
                                                    <a href="">青春文学</a>
                                                </em>
                                                <em>
                                                    <a href="">传记</a>
                                                </em>
                                                <em>
                                                    <a href="">艺术</a>
                                                </em>
                                            </dd>
                                        </dl>
                                        <dl class="fore">
                                            <dt>人文社科</dt>
                                            <dd>
                                                <em>
                                                    <a href="">历史</a>
                                                </em>
                                                <em>
                                                    <a href="">心理学</a>
                                                </em>
                                                <em>
                                                    <a href="">政治/军事</a>
                                                </em>
                                                <em>
                                                    <a href="">国学/古籍</a>
                                                </em>
                                                <em>
                                                    <a href="">哲学/宗教</a>
                                                </em>
                                                <em>
                                                    <a href="">社会科学</a>
                                                </em>
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <h3>
                                    <a href="">电脑、办公</a>
                                </h3>
                                <div class="item-list clearfix">
                                    <div class="subitem">
                                        <dl class="fore">
                                            <dt>
                                                <a href="">电子书3</a>
                                            </dt>
                                            <dd>
                                                <em>
                                                    <a href="">免费</a>
                                                </em>
                                                <em>
                                                    <a href="">小说</a>
                                                </em>
                                                <em>
                                                    <a href="">励志与成功</a>
                                                </em>
                                                <em>
                                                    <a href="">婚恋/两性</a>
                                                </em>
                                                <em>
                                                    <a href="">文学</a>
                                                </em>
                                                <em>
                                                    <a href="">经管</a>
                                                </em>
                                                <em>
                                                    <a href="">畅读VIP</a>
                                                </em>
                                            </dd>
                                        </dl>
                                        <dl class="fore">
                                            <dt>
                                                <a href="">数字音乐</a>
                                            </dt>
                                            <dd>
                                                <em>
                                                    <a href="">通俗流行</a>
                                                </em>
                                                <em>
                                                    <a href="">古典音乐</a>
                                                </em>
                                                <em>
                                                    <a href="">摇滚说唱</a>
                                                </em>
                                                <em>
                                                    <a href="">爵士蓝调</a>
                                                </em>
                                                <em>
                                                    <a href="">乡村民谣</a>
                                                </em>
                                                <em>
                                                    <a href="">有声读物</a>
                                                </em>
                                            </dd>
                                        </dl>
                                        <dl class="fore">
                                            <dt>
                                                <a href="">音像</a>
                                            </dt>
                                            <dd>
                                                <em>
                                                    <a href="">音乐</a>
                                                </em>
                                                <em>
                                                    <a href="">影视</a>
                                                </em>
                                                <em>
                                                    <a href="">教育音像</a>
                                                </em>
                                                <em>
                                                    <a href="">游戏</a>
                                                </em>
                                            </dd>
                                        </dl>
                                        <dl class="fore">
                                            <dt>文艺</dt>
                                            <dd>
                                                <em>
                                                    <a href="">小说</a>
                                                </em>
                                                <em>
                                                    <a href="">文学</a>
                                                </em>
                                                <em>
                                                    <a href="">青春文学</a>
                                                </em>
                                                <em>
                                                    <a href="">传记</a>
                                                </em>
                                                <em>
                                                    <a href="">艺术</a>
                                                </em>
                                            </dd>
                                        </dl>
                                        <dl class="fore">
                                            <dt>人文社科</dt>
                                            <dd>
                                                <em>
                                                    <a href="">历史</a>
                                                </em>
                                                <em>
                                                    <a href="">心理学</a>
                                                </em>
                                                <em>
                                                    <a href="">政治/军事</a>
                                                </em>
                                                <em>
                                                    <a href="">国学/古籍</a>
                                                </em>
                                                <em>
                                                    <a href="">哲学/宗教</a>
                                                </em>
                                                <em>
                                                    <a href="">社会科学</a>
                                                </em>
                                            </dd>
                                        </dl>
                                        <dl class="fore">
                                            <dt>经管励志</dt>
                                            <dd>
                                                <em>
                                                    <a href="">经济</a>
                                                </em>
                                                <em>
                                                    <a href="">金融与投资</a>
                                                </em>
                                                <em>
                                                    <a href="">管理</a>
                                                </em>
                                                <em>
                                                    <a href="">励志与成功</a>
                                                </em>
                                            </dd>
                                        </dl>
                                        <dl class="fore">
                                            <dt>生活</dt>
                                            <dd>
                                                <em>
                                                    <a href="">家庭与育儿</a>
                                                </em>
                                                <em>
                                                    <a href="">旅游/地图</a>
                                                </em>
                                                <em>
                                                    <a href="">烹饪/美食</a>
                                                </em>
                                                <em>
                                                    <a href="">时尚/美妆</a>
                                                </em>
                                                <em>
                                                    <a href="">家居</a>
                                                </em>
                                                <em>
                                                    <a href="">婚恋与两性</a>
                                                </em>
                                                <em>
                                                    <a href="">娱乐/休闲</a>
                                                </em>
                                                <em>
                                                    <a href="">健身与保健</a>
                                                </em>
                                                <em>
                                                    <a href="">动漫/幽默</a>
                                                </em>
                                                <em>
                                                    <a href="">体育/运动</a>
                                                </em>
                                            </dd>
                                        </dl>
                                        <dl class="fore">
                                            <dt>科技</dt>
                                            <dd>
                                                <em>
                                                    <a href="">科普</a>
                                                </em>
                                                <em>
                                                    <a href="">IT</a>
                                                </em>
                                                <em>
                                                    <a href="">建筑</a>
                                                </em>
                                                <em>
                                                    <a href="">医学</a>
                                                </em>
                                                <em>
                                                    <a href="">工业技术</a>
                                                </em>
                                                <em>
                                                    <a href="">电子/通信</a>
                                                </em>
                                                <em>
                                                    <a href="">农林</a>
                                                </em>
                                                <em>
                                                    <a href="">科学与自然</a>
                                                </em>
                                            </dd>
                                        </dl>
                                        <dl class="fore">
                                            <dt>少儿</dt>
                                            <dd>
                                                <em>
                                                    <a href="">少儿</a>
                                                </em>
                                                <em>
                                                    <a href="">0-2岁</a>
                                                </em>
                                                <em>
                                                    <a href="">3-6岁</a>
                                                </em>
                                                <em>
                                                    <a href="">7-10岁</a>
                                                </em>
                                                <em>
                                                    <a href="">11-14岁</a>
                                                </em>
                                            </dd>
                                        </dl>
                                        <dl class="fore">
                                            <dt>教育</dt>
                                            <dd>
                                                <em>
                                                    <a href="">教材教辅</a>
                                                </em>
                                                <em>
                                                    <a href="">考试</a>
                                                </em>
                                                <em>
                                                    <a href="">外语学习</a>
                                                </em>
                                            </dd>
                                        </dl>
                                        <dl class="fore">
                                            <dt>其它</dt>
                                            <dd>
                                                <em>
                                                    <a href="">英文原版书</a>
                                                </em>
                                                <em>
                                                    <a href="">港台图书</a>
                                                </em>
                                                <em>
                                                    <a href="">工具书</a>
                                                </em>
                                                <em>
                                                    <a href="">套装书</a>
                                                </em>
                                                <em>
                                                    <a href="">杂志/期刊</a>
                                                </em>
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <h3>
                                    <a href="">家居、家具、家装、厨具</a>
                                </h3>
                                <div class="item-list clearfix">
                                    <div class="subitem">
                                        <dl class="fore">
                                            <dt>
                                                <a href="">电子书4</a>
                                            </dt>
                                            <dd>
                                                <em>
                                                    <a href="">免费</a>
                                                </em>
                                                <em>
                                                    <a href="">小说</a>
                                                </em>
                                                <em>
                                                    <a href="">励志与成功</a>
                                                </em>
                                                <em>
                                                    <a href="">婚恋/两性</a>
                                                </em>
                                                <em>
                                                    <a href="">文学</a>
                                                </em>
                                                <em>
                                                    <a href="">经管</a>
                                                </em>
                                                <em>
                                                    <a href="">畅读VIP</a>
                                                </em>
                                            </dd>
                                        </dl>
                                        <dl class="fore">
                                            <dt>
                                                <a href="">数字音乐</a>
                                            </dt>
                                            <dd>
                                                <em>
                                                    <a href="">通俗流行</a>
                                                </em>
                                                <em>
                                                    <a href="">古典音乐</a>
                                                </em>
                                                <em>
                                                    <a href="">摇滚说唱</a>
                                                </em>
                                                <em>
                                                    <a href="">爵士蓝调</a>
                                                </em>
                                                <em>
                                                    <a href="">乡村民谣</a>
                                                </em>
                                                <em>
                                                    <a href="">有声读物</a>
                                                </em>
                                            </dd>
                                        </dl>
                                        <dl class="fore">
                                            <dt>
                                                <a href="">音像</a>
                                            </dt>
                                            <dd>
                                                <em>
                                                    <a href="">音乐</a>
                                                </em>
                                                <em>
                                                    <a href="">影视</a>
                                                </em>
                                                <em>
                                                    <a href="">教育音像</a>
                                                </em>
                                                <em>
                                                    <a href="">游戏</a>
                                                </em>
                                            </dd>
                                        </dl>
                                        <dl class="fore">
                                            <dt>文艺</dt>
                                            <dd>
                                                <em>
                                                    <a href="">小说</a>
                                                </em>
                                                <em>
                                                    <a href="">文学</a>
                                                </em>
                                                <em>
                                                    <a href="">青春文学</a>
                                                </em>
                                                <em>
                                                    <a href="">传记</a>
                                                </em>
                                                <em>
                                                    <a href="">艺术</a>
                                                </em>
                                            </dd>
                                        </dl>
                                        <dl class="fore">
                                            <dt>人文社科</dt>
                                            <dd>
                                                <em>
                                                    <a href="">历史</a>
                                                </em>
                                                <em>
                                                    <a href="">心理学</a>
                                                </em>
                                                <em>
                                                    <a href="">政治/军事</a>
                                                </em>
                                                <em>
                                                    <a href="">国学/古籍</a>
                                                </em>
                                                <em>
                                                    <a href="">哲学/宗教</a>
                                                </em>
                                                <em>
                                                    <a href="">社会科学</a>
                                                </em>
                                            </dd>
                                        </dl>
                                        <dl class="fore">
                                            <dt>经管励志</dt>
                                            <dd>
                                                <em>
                                                    <a href="">经济</a>
                                                </em>
                                                <em>
                                                    <a href="">金融与投资</a>
                                                </em>
                                                <em>
                                                    <a href="">管理</a>
                                                </em>
                                                <em>
                                                    <a href="">励志与成功</a>
                                                </em>
                                            </dd>
                                        </dl>
                                        <dl class="fore">
                                            <dt>生活</dt>
                                            <dd>
                                                <em>
                                                    <a href="">家庭与育儿</a>
                                                </em>
                                                <em>
                                                    <a href="">旅游/地图</a>
                                                </em>
                                                <em>
                                                    <a href="">烹饪/美食</a>
                                                </em>
                                                <em>
                                                    <a href="">时尚/美妆</a>
                                                </em>
                                                <em>
                                                    <a href="">家居</a>
                                                </em>
                                                <em>
                                                    <a href="">婚恋与两性</a>
                                                </em>
                                                <em>
                                                    <a href="">娱乐/休闲</a>
                                                </em>
                                                <em>
                                                    <a href="">健身与保健</a>
                                                </em>
                                                <em>
                                                    <a href="">动漫/幽默</a>
                                                </em>
                                                <em>
                                                    <a href="">体育/运动</a>
                                                </em>
                                            </dd>
                                        </dl>
                                        <dl class="fore">
                                            <dt>科技</dt>
                                            <dd>
                                                <em>
                                                    <a href="">科普</a>
                                                </em>
                                                <em>
                                                    <a href="">IT</a>
                                                </em>
                                                <em>
                                                    <a href="">建筑</a>
                                                </em>
                                                <em>
                                                    <a href="">医学</a>
                                                </em>
                                                <em>
                                                    <a href="">工业技术</a>
                                                </em>
                                                <em>
                                                    <a href="">电子/通信</a>
                                                </em>
                                                <em>
                                                    <a href="">农林</a>
                                                </em>
                                                <em>
                                                    <a href="">科学与自然</a>
                                                </em>
                                            </dd>
                                        </dl>
                                        <dl class="fore">
                                            <dt>少儿</dt>
                                            <dd>
                                                <em>
                                                    <a href="">少儿</a>
                                                </em>
                                                <em>
                                                    <a href="">0-2岁</a>
                                                </em>
                                                <em>
                                                    <a href="">3-6岁</a>
                                                </em>
                                                <em>
                                                    <a href="">7-10岁</a>
                                                </em>
                                                <em>
                                                    <a href="">11-14岁</a>
                                                </em>
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <h3>
                                    <a href="">服饰内衣</a>
                                </h3>
                                <div class="item-list clearfix">
                                    <div class="subitem">
                                        <dl class="fore">
                                            <dt>
                                                <a href="">电子书5</a>
                                            </dt>
                                            <dd>
                                                <em>
                                                    <a href="">免费</a>
                                                </em>
                                                <em>
                                                    <a href="">小说</a>
                                                </em>
                                                <em>
                                                    <a href="">励志与成功</a>
                                                </em>
                                                <em>
                                                    <a href="">婚恋/两性</a>
                                                </em>
                                                <em>
                                                    <a href="">文学</a>
                                                </em>
                                                <em>
                                                    <a href="">经管</a>
                                                </em>
                                                <em>
                                                    <a href="">畅读VIP</a>
                                                </em>
                                            </dd>
                                        </dl>
                                        <dl class="fore">
                                            <dt>
                                                <a href="">数字音乐</a>
                                            </dt>
                                            <dd>
                                                <em>
                                                    <a href="">通俗流行</a>
                                                </em>
                                                <em>
                                                    <a href="">古典音乐</a>
                                                </em>
                                                <em>
                                                    <a href="">摇滚说唱</a>
                                                </em>
                                                <em>
                                                    <a href="">爵士蓝调</a>
                                                </em>
                                                <em>
                                                    <a href="">乡村民谣</a>
                                                </em>
                                                <em>
                                                    <a href="">有声读物</a>
                                                </em>
                                            </dd>
                                        </dl>
                                        <dl class="fore">
                                            <dt>
                                                <a href="">音像</a>
                                            </dt>
                                            <dd>
                                                <em>
                                                    <a href="">音乐</a>
                                                </em>
                                                <em>
                                                    <a href="">影视</a>
                                                </em>
                                                <em>
                                                    <a href="">教育音像</a>
                                                </em>
                                                <em>
                                                    <a href="">游戏</a>
                                                </em>
                                            </dd>
                                        </dl>
                                        <dl class="fore">
                                            <dt>文艺</dt>
                                            <dd>
                                                <em>
                                                    <a href="">小说</a>
                                                </em>
                                                <em>
                                                    <a href="">文学</a>
                                                </em>
                                                <em>
                                                    <a href="">青春文学</a>
                                                </em>
                                                <em>
                                                    <a href="">传记</a>
                                                </em>
                                                <em>
                                                    <a href="">艺术</a>
                                                </em>
                                            </dd>
                                        </dl>
                                        <dl class="fore">
                                            <dt>人文社科</dt>
                                            <dd>
                                                <em>
                                                    <a href="">历史</a>
                                                </em>
                                                <em>
                                                    <a href="">心理学</a>
                                                </em>
                                                <em>
                                                    <a href="">政治/军事</a>
                                                </em>
                                                <em>
                                                    <a href="">国学/古籍</a>
                                                </em>
                                                <em>
                                                    <a href="">哲学/宗教</a>
                                                </em>
                                                <em>
                                                    <a href="">社会科学</a>
                                                </em>
                                            </dd>
                                        </dl>
                                        <dl class="fore">
                                            <dt>经管励志</dt>
                                            <dd>
                                                <em>
                                                    <a href="">经济</a>
                                                </em>
                                                <em>
                                                    <a href="">金融与投资</a>
                                                </em>
                                                <em>
                                                    <a href="">管理</a>
                                                </em>
                                                <em>
                                                    <a href="">励志与成功</a>
                                                </em>
                                            </dd>
                                        </dl>
                                        <dl class="fore">
                                            <dt>生活</dt>
                                            <dd>
                                                <em>
                                                    <a href="">家庭与育儿</a>
                                                </em>
                                                <em>
                                                    <a href="">旅游/地图</a>
                                                </em>
                                                <em>
                                                    <a href="">烹饪/美食</a>
                                                </em>
                                                <em>
                                                    <a href="">时尚/美妆</a>
                                                </em>
                                                <em>
                                                    <a href="">家居</a>
                                                </em>
                                                <em>
                                                    <a href="">婚恋与两性</a>
                                                </em>
                                                <em>
                                                    <a href="">娱乐/休闲</a>
                                                </em>
                                                <em>
                                                    <a href="">健身与保健</a>
                                                </em>
                                                <em>
                                                    <a href="">动漫/幽默</a>
                                                </em>
                                                <em>
                                                    <a href="">体育/运动</a>
                                                </em>
                                            </dd>
                                        </dl>
                                        <dl class="fore">
                                            <dt>科技</dt>
                                            <dd>
                                                <em>
                                                    <a href="">科普</a>
                                                </em>
                                                <em>
                                                    <a href="">IT</a>
                                                </em>
                                                <em>
                                                    <a href="">建筑</a>
                                                </em>
                                                <em>
                                                    <a href="">医学</a>
                                                </em>
                                                <em>
                                                    <a href="">工业技术</a>
                                                </em>
                                                <em>
                                                    <a href="">电子/通信</a>
                                                </em>
                                                <em>
                                                    <a href="">农林</a>
                                                </em>
                                                <em>
                                                    <a href="">科学与自然</a>
                                                </em>
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <h3>
                                    <a href="">个护化妆</a>
                                </h3>
                                <div class="item-list clearfix">
                                    <div class="subitem">
                                        <dl class="fore">
                                            <dt>
                                                <a href="">电子书6</a>
                                            </dt>
                                            <dd>
                                                <em>
                                                    <a href="">免费</a>
                                                </em>
                                                <em>
                                                    <a href="">小说</a>
                                                </em>
                                                <em>
                                                    <a href="">励志与成功</a>
                                                </em>
                                                <em>
                                                    <a href="">婚恋/两性</a>
                                                </em>
                                                <em>
                                                    <a href="">文学</a>
                                                </em>
                                                <em>
                                                    <a href="">经管</a>
                                                </em>
                                                <em>
                                                    <a href="">畅读VIP</a>
                                                </em>
                                            </dd>
                                        </dl>
                                        <dl class="fore">
                                            <dt>
                                                <a href="">数字音乐</a>
                                            </dt>
                                            <dd>
                                                <em>
                                                    <a href="">通俗流行</a>
                                                </em>
                                                <em>
                                                    <a href="">古典音乐</a>
                                                </em>
                                                <em>
                                                    <a href="">摇滚说唱</a>
                                                </em>
                                                <em>
                                                    <a href="">爵士蓝调</a>
                                                </em>
                                                <em>
                                                    <a href="">乡村民谣</a>
                                                </em>
                                                <em>
                                                    <a href="">有声读物</a>
                                                </em>
                                            </dd>
                                        </dl>
                                        <dl class="fore">
                                            <dt>
                                                <a href="">音像</a>
                                            </dt>
                                            <dd>
                                                <em>
                                                    <a href="">音乐</a>
                                                </em>
                                                <em>
                                                    <a href="">影视</a>
                                                </em>
                                                <em>
                                                    <a href="">教育音像</a>
                                                </em>
                                                <em>
                                                    <a href="">游戏</a>
                                                </em>
                                            </dd>
                                        </dl>
                                        <dl class="fore">
                                            <dt>文艺</dt>
                                            <dd>
                                                <em>
                                                    <a href="">小说</a>
                                                </em>
                                                <em>
                                                    <a href="">文学</a>
                                                </em>
                                                <em>
                                                    <a href="">青春文学</a>
                                                </em>
                                                <em>
                                                    <a href="">传记</a>
                                                </em>
                                                <em>
                                                    <a href="">艺术</a>
                                                </em>
                                            </dd>
                                        </dl>
                                        <dl class="fore">
                                            <dt>人文社科</dt>
                                            <dd>
                                                <em>
                                                    <a href="">历史</a>
                                                </em>
                                                <em>
                                                    <a href="">心理学</a>
                                                </em>
                                                <em>
                                                    <a href="">政治/军事</a>
                                                </em>
                                                <em>
                                                    <a href="">国学/古籍</a>
                                                </em>
                                                <em>
                                                    <a href="">哲学/宗教</a>
                                                </em>
                                                <em>
                                                    <a href="">社会科学</a>
                                                </em>
                                            </dd>
                                        </dl>
                                        <dl class="fore">
                                            <dt>经管励志</dt>
                                            <dd>
                                                <em>
                                                    <a href="">经济</a>
                                                </em>
                                                <em>
                                                    <a href="">金融与投资</a>
                                                </em>
                                                <em>
                                                    <a href="">管理</a>
                                                </em>
                                                <em>
                                                    <a href="">励志与成功</a>
                                                </em>
                                            </dd>
                                        </dl>
                                        <dl class="fore">
                                            <dt>生活</dt>
                                            <dd>
                                                <em>
                                                    <a href="">家庭与育儿</a>
                                                </em>
                                                <em>
                                                    <a href="">旅游/地图</a>
                                                </em>
                                                <em>
                                                    <a href="">烹饪/美食</a>
                                                </em>
                                                <em>
                                                    <a href="">时尚/美妆</a>
                                                </em>
                                                <em>
                                                    <a href="">家居</a>
                                                </em>
                                                <em>
                                                    <a href="">婚恋与两性</a>
                                                </em>
                                                <em>
                                                    <a href="">娱乐/休闲</a>
                                                </em>
                                                <em>
                                                    <a href="">健身与保健</a>
                                                </em>
                                                <em>
                                                    <a href="">动漫/幽默</a>
                                                </em>
                                                <em>
                                                    <a href="">体育/运动</a>
                                                </em>
                                            </dd>
                                        </dl>
                                        <dl class="fore">
                                            <dt>科技</dt>
                                            <dd>
                                                <em>
                                                    <a href="">科普</a>
                                                </em>
                                                <em>
                                                    <a href="">IT</a>
                                                </em>
                                                <em>
                                                    <a href="">建筑</a>
                                                </em>
                                                <em>
                                                    <a href="">医学</a>
                                                </em>
                                                <em>
                                                    <a href="">工业技术</a>
                                                </em>
                                                <em>
                                                    <a href="">电子/通信</a>
                                                </em>
                                                <em>
                                                    <a href="">农林</a>
                                                </em>
                                                <em>
                                                    <a href="">科学与自然</a>
                                                </em>
                                            </dd>
                                        </dl>
                                        <dl class="fore">
                                            <dt>少儿</dt>
                                            <dd>
                                                <em>
                                                    <a href="">少儿</a>
                                                </em>
                                                <em>
                                                    <a href="">0-2岁</a>
                                                </em>
                                                <em>
                                                    <a href="">3-6岁</a>
                                                </em>
                                                <em>
                                                    <a href="">7-10岁</a>
                                                </em>
                                                <em>
                                                    <a href="">11-14岁</a>
                                                </em>
                                            </dd>
                                        </dl>
                                        <dl class="fore">
                                            <dt>教育</dt>
                                            <dd>
                                                <em>
                                                    <a href="">教材教辅</a>
                                                </em>
                                                <em>
                                                    <a href="">考试</a>
                                                </em>
                                                <em>
                                                    <a href="">外语学习</a>
                                                </em>
                                            </dd>
                                        </dl>
                                        <dl class="fore">
                                            <dt>其它</dt>
                                            <dd>
                                                <em>
                                                    <a href="">英文原版书</a>
                                                </em>
                                                <em>
                                                    <a href="">港台图书</a>
                                                </em>
                                                <em>
                                                    <a href="">工具书</a>
                                                </em>
                                                <em>
                                                    <a href="">套装书</a>
                                                </em>
                                                <em>
                                                    <a href="">杂志/期刊</a>
                                                </em>
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <h3>
                                    <a href="">运动健康</a>
                                </h3>
                                <div class="item-list clearfix">
                                    <div class="subitem">
                                        <dl class="fore">
                                            <dt>
                                                <a href="">电子书7</a>
                                            </dt>
                                            <dd>
                                                <em>
                                                    <a href="">免费</a>
                                                </em>
                                                <em>
                                                    <a href="">小说</a>
                                                </em>
                                                <em>
                                                    <a href="">励志与成功</a>
                                                </em>
                                                <em>
                                                    <a href="">婚恋/两性</a>
                                                </em>
                                                <em>
                                                    <a href="">文学</a>
                                                </em>
                                                <em>
                                                    <a href="">经管</a>
                                                </em>
                                                <em>
                                                    <a href="">畅读VIP</a>
                                                </em>
                                            </dd>
                                        </dl>
                                        <dl class="fore">
                                            <dt>
                                                <a href="">数字音乐</a>
                                            </dt>
                                            <dd>
                                                <em>
                                                    <a href="">通俗流行</a>
                                                </em>
                                                <em>
                                                    <a href="">古典音乐</a>
                                                </em>
                                                <em>
                                                    <a href="">摇滚说唱</a>
                                                </em>
                                                <em>
                                                    <a href="">爵士蓝调</a>
                                                </em>
                                                <em>
                                                    <a href="">乡村民谣</a>
                                                </em>
                                                <em>
                                                    <a href="">有声读物</a>
                                                </em>
                                            </dd>
                                        </dl>
                                        <dl class="fore">
                                            <dt>
                                                <a href="">音像</a>
                                            </dt>
                                            <dd>
                                                <em>
                                                    <a href="">音乐</a>
                                                </em>
                                                <em>
                                                    <a href="">影视</a>
                                                </em>
                                                <em>
                                                    <a href="">教育音像</a>
                                                </em>
                                                <em>
                                                    <a href="">游戏</a>
                                                </em>
                                            </dd>
                                        </dl>
                                        <dl class="fore">
                                            <dt>文艺</dt>
                                            <dd>
                                                <em>
                                                    <a href="">小说</a>
                                                </em>
                                                <em>
                                                    <a href="">文学</a>
                                                </em>
                                                <em>
                                                    <a href="">青春文学</a>
                                                </em>
                                                <em>
                                                    <a href="">传记</a>
                                                </em>
                                                <em>
                                                    <a href="">艺术</a>
                                                </em>
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <h3>
                                    <a href="">汽车用品</a>
                                </h3>
                                <div class="item-list clearfix">
                                    <div class="subitem">
                                        <dl class="fore">
                                            <dt>
                                                <a href="">电子书8</a>
                                            </dt>
                                            <dd>
                                                <em>
                                                    <a href="">免费</a>
                                                </em>
                                                <em>
                                                    <a href="">小说</a>
                                                </em>
                                                <em>
                                                    <a href="">励志与成功</a>
                                                </em>
                                                <em>
                                                    <a href="">婚恋/两性</a>
                                                </em>
                                                <em>
                                                    <a href="">文学</a>
                                                </em>
                                                <em>
                                                    <a href="">经管</a>
                                                </em>
                                                <em>
                                                    <a href="">畅读VIP</a>
                                                </em>
                                            </dd>
                                        </dl>
                                        <dl class="fore">
                                            <dt>
                                                <a href="">数字音乐</a>
                                            </dt>
                                            <dd>
                                                <em>
                                                    <a href="">通俗流行</a>
                                                </em>
                                                <em>
                                                    <a href="">古典音乐</a>
                                                </em>
                                                <em>
                                                    <a href="">摇滚说唱</a>
                                                </em>
                                                <em>
                                                    <a href="">爵士蓝调</a>
                                                </em>
                                                <em>
                                                    <a href="">乡村民谣</a>
                                                </em>
                                                <em>
                                                    <a href="">有声读物</a>
                                                </em>
                                            </dd>
                                        </dl>
                                        <dl class="fore">
                                            <dt>
                                                <a href="">音像</a>
                                            </dt>
                                            <dd>
                                                <em>
                                                    <a href="">音乐</a>
                                                </em>
                                                <em>
                                                    <a href="">影视</a>
                                                </em>
                                                <em>
                                                    <a href="">教育音像</a>
                                                </em>
                                                <em>
                                                    <a href="">游戏</a>
                                                </em>
                                            </dd>
                                        </dl>
                                        <dl class="fore">
                                            <dt>文艺</dt>
                                            <dd>
                                                <em>
                                                    <a href="">小说</a>
                                                </em>
                                                <em>
                                                    <a href="">文学</a>
                                                </em>
                                                <em>
                                                    <a href="">青春文学</a>
                                                </em>
                                                <em>
                                                    <a href="">传记</a>
                                                </em>
                                                <em>
                                                    <a href="">艺术</a>
                                                </em>
                                            </dd>
                                        </dl>
                                        <dl class="fore">
                                            <dt>人文社科</dt>
                                            <dd>
                                                <em>
                                                    <a href="">历史</a>
                                                </em>
                                                <em>
                                                    <a href="">心理学</a>
                                                </em>
                                                <em>
                                                    <a href="">政治/军事</a>
                                                </em>
                                                <em>
                                                    <a href="">国学/古籍</a>
                                                </em>
                                                <em>
                                                    <a href="">哲学/宗教</a>
                                                </em>
                                                <em>
                                                    <a href="">社会科学</a>
                                                </em>
                                            </dd>
                                        </dl>
                                        <dl class="fore">
                                            <dt>经管励志</dt>
                                            <dd>
                                                <em>
                                                    <a href="">经济</a>
                                                </em>
                                                <em>
                                                    <a href="">金融与投资</a>
                                                </em>
                                                <em>
                                                    <a href="">管理</a>
                                                </em>
                                                <em>
                                                    <a href="">励志与成功</a>
                                                </em>
                                            </dd>
                                        </dl>
                                        <dl class="fore">
                                            <dt>生活</dt>
                                            <dd>
                                                <em>
                                                    <a href="">家庭与育儿</a>
                                                </em>
                                                <em>
                                                    <a href="">旅游/地图</a>
                                                </em>
                                                <em>
                                                    <a href="">烹饪/美食</a>
                                                </em>
                                                <em>
                                                    <a href="">时尚/美妆</a>
                                                </em>
                                                <em>
                                                    <a href="">家居</a>
                                                </em>
                                                <em>
                                                    <a href="">婚恋与两性</a>
                                                </em>
                                                <em>
                                                    <a href="">娱乐/休闲</a>
                                                </em>
                                                <em>
                                                    <a href="">健身与保健</a>
                                                </em>
                                                <em>
                                                    <a href="">动漫/幽默</a>
                                                </em>
                                                <em>
                                                    <a href="">体育/运动</a>
                                                </em>
                                            </dd>
                                        </dl>
                                        <dl class="fore">
                                            <dt>科技</dt>
                                            <dd>
                                                <em>
                                                    <a href="">科普</a>
                                                </em>
                                                <em>
                                                    <a href="">IT</a>
                                                </em>
                                                <em>
                                                    <a href="">建筑</a>
                                                </em>
                                                <em>
                                                    <a href="">医学</a>
                                                </em>
                                                <em>
                                                    <a href="">工业技术</a>
                                                </em>
                                                <em>
                                                    <a href="">电子/通信</a>
                                                </em>
                                                <em>
                                                    <a href="">农林</a>
                                                </em>
                                                <em>
                                                    <a href="">科学与自然</a>
                                                </em>
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <h3>
                                    <a href="">彩票、旅行</a>
                                </h3>
                            </div>
                            <div class="item">
                                <h3>
                                    <a href="">理财、众筹</a>
                                </h3>
                            </div>
                            <div class="item">
                                <h3>
                                    <a href="">母婴、玩具</a>
                                </h3>
                            </div>
                            <div class="item">
                                <h3>
                                    <a href="">箱包</a>
                                </h3>
                            </div>
                            <div class="item">
                                <h3>
                                    <a href="">运动户外</a>
                                </h3>
                            </div>
                            <div class="item">
                                <h3>
                                    <a href="">箱包</a>
                                </h3>
                            </div> -->
                        </div>
                    </div>
                </transition>
            </div>
            <nav class="nav">
                <a href="###">服装城</a>
                <a href="###">美妆馆</a>
                <a href="###">尚品汇超市</a>
                <a href="###">全球购</a>
                <a href="###">闪购</a>
                <a href="###">团购</a>
                <a href="###">有趣</a>
                <a href="###">秒杀</a>
            </nav>

        </div>
    </div>
</template>

<script>
    import {mapState} from "vuex"
    import throttle from 'lodash/throttle'
    export default {
        name:'TypeNav',
        mounted() {
            // 之前我们是在typeNav组件内部dispatch去发送ajax请求，这样的话
            // 因为typeNav是被多个页面公用的，所以每次切换到一个页面，这个组件都会重新创建
            // mounted都会执行 因此有几个页面公用了这个typeNav就会执行几次ajax请求还不包含切换
            // 所以我们放到App里面就只用执行一次，因为数据一样，没必要多次请求
            // this.$store.dispatch('home/getCategoryList');
            if(this.$route.path !== '/home'){
                //证明这个组件时在search里，需要一上来隐藏sort
                this.isShow=false;
            }
        },
        data() {
            return {
                currentIndex:-1,
                isShow:true,
            }
        },
        methods: {
            moveInItem:throttle(function(index) {
                this.currentIndex=index
            },10,{'trailing':false}),

            // 事件委派的回调函数
            toSearch(event){
                let targetNode = event.target //获取目标元素，真正发生事件的元素
                let data = targetNode.dataset||{} //获取当前目标元素身上data-属性 组成的对象
                // 不管点击的是哪个a标签,参数通过event.target.dataset携带
                let {category1id,category2id,category3id,categoryname} = data

                if(targetNode.nodeName==='A'){
                    // 如果是a标签,则data一定有categoryid和categoryname,如果不是则为undefined
                    let location = {
                        name: 'search',
                        query: {
                            categoryName:categoryname,
                        }
                    }
                    // 确定是一级二级还是三级的id
                    if(category1id){
                        location.query.category1Id=category1id
                    }else if(category2id){
                        location.query.category2Id=category2id
                    }else{
                        location.query.category3Id=category3id
                    }

                    // 跳转之前，要合并原来过来时候带的params参数
                    location.params=this.$route.params
                    this.$router.push(location)
                }
            },

            // 移除div
            moveOutDiv(){
                this.currentIndex=-1
                if(this.$route.path !== '/home'){
                    this.isShow= false
                }
            }
        },
        // 从vuex把数据捞到vue组件当中
        computed:{
            // ...mapState({
            //     categoryList: state=>state.home.categoryList,
            // })
            ...mapState('home',['categoryList'])
        }
    }
</script>

<style lang='less' scoped>
    .type-nav {
        border-bottom: 2px solid #e1251b;

        .container {
            width: 1200px;
            margin: 0 auto;
            display: flex;
            position: relative;

            .all {
                width: 210px;
                height: 45px;
                background-color: #e1251b;
                line-height: 45px;
                text-align: center;
                color: #fff;
                font-size: 14px;
                font-weight: bold;
            }

            .nav {
                a {
                    height: 45px;
                    margin: 0 22px;
                    line-height: 45px;
                    font-size: 16px;
                    color: #333;
                }
            }

            .sort {
                position: absolute;
                left: 0;
                top: 45px;
                width: 210px;
                height: 461px;
                position: absolute;
                background: #fafafa;
                z-index: 999;

                &.sort-enter, &.sort-leave-to{
                    height: 0;
                    opacity:0;
                }

                & .sort-enter-to, &.sort-leave{
                    height: 461px;
                    opacity:1;
                }

                &.sort-enter-active, &.sort-leave-active{
                    transition: all 0.3s;
                }

                .all-sort-list2 {
                    .item {
                        h3 {
                            line-height: 30px;
                            font-size: 14px;
                            font-weight: 400;
                            overflow: hidden;
                            padding: 0 20px;
                            margin: 0;

                            a {
                                color: #333;
                            }
                        }

                        .item-list {
                            display: none;
                            position: absolute;
                            width: 734px;
                            min-height: 460px;
                            background: #f7f7f7;
                            left: 210px;
                            border: 1px solid #ddd;
                            top: 0;
                            z-index: 9999 !important;

                            .subitem {
                                float: left;
                                width: 650px;
                                padding: 0 4px 0 8px;

                                dl {
                                    border-top: 1px solid #eee;
                                    padding: 6px 0;
                                    overflow: hidden;
                                    zoom: 1;

                                    &.fore {
                                        border-top: 0;
                                    }

                                    dt {
                                        float: left;
                                        width: 54px;
                                        line-height: 22px;
                                        text-align: right;
                                        padding: 3px 6px 0 0;
                                        font-weight: 700;
                                    }

                                    dd {
                                        float: left;
                                        width: 515px;
                                        padding: 3px 0 0;
                                        overflow: hidden;

                                        em {
                                            float: left;
                                            height: 14px;
                                            line-height: 14px;
                                            padding: 0 8px;
                                            margin-top: 5px;
                                            border-left: 1px solid #ccc;
                                        }
                                    }
                                }
                            }
                        }
                        &.item_on {
                            background-color: lightgray;
                            .item-list {
                                display: block;
                            }
                        }
                        /* &:hover {
                            background-color: lightgray;
                            .item-list {
                                display: block;
                            }
                        } */
                    }
                }
            }
        }
    }
</style>