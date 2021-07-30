import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import 'swiper/css/swiper.css'; //引入swiper的css
import { Button, MessageBox, Message, Notification } from 'element-ui'


import TypeNav from '@/components/TypeNav'
import MySwiper from '@/components/MySwiper'
import Pagination from '@/components/Pagination'
import { default as store } from '@/store'
import '@/mock/mockServer'
import * as API from '@/api' // 直接获取接口请求函数暴露出来的对象

Vue.component('MySwiper', MySwiper)
Vue.component('TypeNav', TypeNav)
Vue.component('Pagination', Pagination)
Vue.config.productionTip = false;

Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$message = Message;
Vue.prototype.$notify = Notification;
Vue.use(Button)

new Vue({
  beforeCreate() {
    Vue.prototype.$bus = this;
    Vue.prototype.$API = API
  },
  el: '#app',
  render: h => h(App),
  router, //vc vm都可以使用$route $router
  store, //所有组件都可以拿到this.$store
})