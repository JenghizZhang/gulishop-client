import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import home from '@/store/home'
import user from '@/store/user'
import search from '@/store/search'
import detail from '@/store/detail'
import shopCart from '@/store/shopCart'

export default new Vuex.Store({
    modules: { user, home, search, detail, shopCart },
})