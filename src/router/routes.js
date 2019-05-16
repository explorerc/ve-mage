// const entry=() => import(/* webpackChunkName: "todo-view" */ '../views/todo/todo.vue')
/* 登录页面PC */
const Login = () => import('src/pages/login')
/* 首次设置密码 */
const SetPassword = () => import('src/pages/login/set-password')
/* 注册页面 */
const Register = () => import('src/pages/login/register')
/* 忘记密码 */
const Forgot = () => import('src/pages/login/forgot')
/* 联系卖家 */
// const Chat = () => import('src/pages/user-mager/chat')
const Layout = () => import('src/pages/layout')
const GoodMager = () => import('src/pages/good-mager/list')

const goodEdit = () => import('src/pages/good-mager/edit')/* 创建 编辑 商品 */
const OrderMager = () => import('src/pages/sale-mager/list')
const OrderEdit = () => import('src/pages/sale-mager/edit')
const OrderStatis = () => import('src/pages/sale-mager/order-statist')
const KindMager = () => import('src/pages/kind-mager/list')
const UserList = () => import('src/pages/user-mager/user-list')/* 用户管理 */
const UserEdit = () => import('src/pages/user-mager/edit')/* 用户管理 */
const MageList = () => import('src/pages/user-mager/mage-list')/* 用户管理 */
const Coupon = () => import('src/pages/sale-mager/coupon')/* 优惠券管理 */
const Personal = () => import('src/pages/user-mager/personal-info')/* 管理员管理自己信息 */
export default [{
  path: '/',
  name: 'Layout',
  component: Layout,
  redirect: '/goodMager/list',
  meta: {
    isAuth: true
  },
  children: [
    {
      path: '/goodMager/list',
      name: 'GoodMager',
      component: GoodMager,
      meta: {
        isAuth: true
      }
    },
    {
      path: '/goodMager/edit/:type',
      name: 'goodCreate',
      component: goodEdit,
      meta: {
        isAuth: true
      }
    },
    {
      path: '/goodMager/edit/:id/:type',
      name: 'goodEdit',
      component: goodEdit,
      meta: {
        isAuth: true
      }
    },
    {
      path: '/orderMager/list',
      name: 'Order',
      component: OrderMager,
      meta: {
        isAuth: true
      }
      // redirect: '/orderMager/list/isPay',
    },
    {
      path: '/orderMager/edit/:type',
      name: 'orderCreate',
      component: OrderEdit,
      meta: {
        isAuth: true
      }
    },
    {
      path: '/orderMager/edit/:id/:type',
      name: 'OrderUpdate',
      component: OrderEdit,
      meta: {
        isAuth: true
      }
    },
    {
      path: '/kindMager/list',
      name: 'kind',
      component: KindMager,
      meta: {
        isAuth: true
      }
      // redirect: '/orderMager/list/isPay',
    },
    {
      path: '/userMager/list',
      name: 'userList',
      component: UserList,
      meta: {
        isAuth: true
      }
      // redirect: '/orderMager/list/isPay',CouponList
    },
    {
      path: '/userMager/mage',
      name: 'mageist',
      component: MageList,
      meta: {
        isAuth: true
      }
      // redirect: '/orderMager/list/isPay',CouponList
    },
    {
      path: '/userMager/edit/:id',
      name: 'userEdit',
      component: UserEdit,
      meta: {
        isAuth: true
      }
      // redirect: '/orderMager/list/isPay',CouponList
    },
    {
      path: '/saleMager/coupon',
      name: 'Coupon',
      component: Coupon,
      meta: {
        isAuth: true
      }
      // redirect: '/orderMager/list/isPay',CouponList
    },
    {
      path: '/userMager/personal',
      name: 'Personal',
      component: Personal,
      meta: {
        isAuth: true
      }
    },
    {
      path: '/saleMager/orderStatist',
      name: 'OrderStatis',
      component: OrderStatis,
      meta: {
        isAuth: true
      }
    }
  ]
},
{
  path: '/login',
  name: 'login',
  component: Login
},
{
  path: '/register',
  name: 'register',
  component: Register
},
{
  path: '/setPassword',
  name: 'setPassword',
  component: SetPassword
},
{
  path: '/forgot',
  name: 'forgot',
  component: Forgot
}
]
