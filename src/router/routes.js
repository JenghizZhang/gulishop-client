import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'
import Dertail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'

export default
    [
        {
            path: '/home',
            component: Home,
        },
        {
            path: '/shopCart',
            component: ShopCart,
        },
        {
            path: '/addcartsuccess',
            component: AddCartSuccess
        },
        {
            path: '/detail/:goodsId?',
            name: 'detail',
            component: Dertail,
        },
        {
            path: '/login',
            component: Login,
            meta: {
                isHiddenFooter: true
            }
        },
        {
            path: '/register',
            component: Register,
            meta: {
                isHiddenFooter: true
            }
        },
        {
            path: '/search/:keyword?',
            component: Search,
            name: 'search',
            props: true
        },
        {
            path: '/',
            redirect: '/home'
        }
    ]
