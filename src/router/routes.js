// import Home from '@/pages/Home'
// import Login from '@/pages/Login'
// import Register from '@/pages/Register'
// import Search from '@/pages/Search'
// import Dertail from '@/pages/Detail'
// import AddCartSuccess from '@/pages/AddCartSuccess'
// import ShopCart from '@/pages/ShopCart'
// import Trade from '@/pages/Trade'
// import Pay from '@/pages/Pay'
// import PaySuccess from '@/pages/PaySuccess'
// import Center from '@/pages/Center'
// import MyOrder from '@/pages/Center/MyOrder'
// import GroupOrder from '@/pages/Center/GroupOrder'

const Home = () => import('@/pages/Home')
const Login = () => import('@/pages/Login')
const Register = () => import('@/pages/Register')
const Search = () => import('@/pages/Search')
const Dertail = () => import('@/pages/Detail')
const AddCartSuccess = () => import('@/pages/AddCartSuccess')
const ShopCart = () => import('@/pages/ShopCart')
const Trade = () => import('@/pages/Trade')
const Pay = () => import('@/pages/Pay')
const PaySuccess = () => import('@/pages/PaySuccess')
const Center = () => import('@/pages/Center')
const MyOrder = () => import('@/pages/Center/MyOrder')
const GroupOrder = () => import('@/pages/Center/GroupOrder')

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
            beforeEnter: (to, from, next) => {
                // 只有从购物车才能跳转这里
                if (from.path === '/shopCart') {
                    next()
                } else {
                    next('/')
                }
            }
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
            component: AddCartSuccess,
            beforeEnter: (to, from, next) => {
                // 只有携带了skuNum和sessionStorage有skuInfo数据才可以去添加购物车成功
                let skuNum = to.query.skuNum
                let skuInfo = sessionStorage.getItem('SKUINFO_KEY')
                if (skuNum && skuInfo) {
                    next()
                } else {
                    alert('没有添加成功')
                    next('/')
                }
            }
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
        },
        {
            path: '/communication',
            component: () => import('@/pages/Communication/Communication'),
            children: [
                {
                    path: 'event',
                    component: () => import('@/pages/Communication/EventTest/EventTest'),
                    meta: {
                        isHideFooter: true
                    },
                },
                {
                    path: 'model',
                    component: () => import('@/pages/Communication/ModelTest/ModelTest'),
                    meta: {
                        isHideFooter: true
                    },
                },
                {
                    path: 'sync',
                    component: () => import('@/pages/Communication/SyncTest/SyncTest'),
                    meta: {
                        isHideFooter: true
                    },
                },
                {
                    path: 'attrs-listeners',
                    component: () => import('@/pages/Communication/AttrsListenersTest/AttrsListenersTest'),
                    meta: {
                        isHideFooter: true
                    },
                },
                {
                    path: 'children-parent',
                    component: () => import('@/pages/Communication/ChildrenParentTest/ChildrenParentTest'),
                    meta: {
                        isHideFooter: true
                    },
                },
                {
                    path: 'scope-slot',
                    component: () => import('@/pages/Communication/ScopeSlotTest/ScopeSlotTest'),
                    meta: {
                        isHideFooter: true
                    },
                }
            ]
        }
    ]
