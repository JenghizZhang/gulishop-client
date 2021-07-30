import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'
import Dertail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
import Trade from '@/pages/Trade'
import Pay from '@/pages/Pay'
import PaySuccess from '@/pages/PaySuccess'
import Center from '@/pages/Center'
import MyOrder from '@/pages/Center/MyOrder'
import GroupOrder from '@/pages/Center/GroupOrder'

export default
    [
        {
            path: '/home',
            component: Home,
        },
        {
            path: '/center',
            component: Center,
            children: [
                {
                    path: 'myOrder',
                    component: MyOrder
                },
                {
                    path: 'groupOrder',
                    component: GroupOrder
                },
                {
                    path: "/center",
                    redirect: 'myOrder'
                }
            ]
        },
        {
            path: '/trade',
            component: Trade,
        },
        {
            path: '/pay',
            component: Pay,
        },
        {
            path: '/paySuccess',
            component: PaySuccess,
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
