import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import 'swiper/css/swiper.css'; //引入swiper的css

import TypeNav from '@/components/TypeNav'
import store from '@/store'
import '@/mock/mockServer'
Vue.component('TypeNav',TypeNav)

Vue.config.productionTip = false;

new Vue({
  el:'#app',
  render: h => h(App),
  router, //vc vm都可以使用$route $router
  store, //所有组件都可以拿到this.$store
})