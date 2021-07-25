import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import 'swiper/css/swiper.css'; //引入swiper的css

import TypeNav from '@/components/TypeNav'
import MySwiper from '@/components/MySwiper'
import Pagination from '@/components/Pagination'
import store from '@/store'
import '@/mock/mockServer'
Vue.component('MySwiper', MySwiper)
Vue.component('TypeNav', TypeNav)
Vue.component('Pagination', Pagination)
Vue.config.productionTip = false;

new Vue({
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
  el: '#app',
  render: h => h(App),
  router, //vc vm都可以使用$route $router
  store, //所有组件都可以拿到this.$store
})