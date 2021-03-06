// const entry=() => import(/* webpackChunkName: "todo-view" */ '../views/todo/todo.vue')
/* 登录页面PC */
const Login = () => import('src/pages/login')
/* 首次设置密码 */
const SetPassword = () => import('src/pages/login/set-password')
/* 注册页面 */
const Register = () => import('src/pages/login/register')
/* 忘记密码 */
const Forgot = () => import('src/pages/login/forgot')
const Layout = () => import('src/pages/layout')
const GoodMager = () => import('src/pages/good-mager/list')
/* 创建 编辑 活动 */
const goodEdit = () => import('src/pages/good-mager/edit')
const OrderMager = () => import('src/pages/sale-mager/list')
const OrderEdit = () => import('src/pages/good-mager/edit')
const KindMager = () => import('src/pages/sale-mager/list')
const KindEdit = () => import('src/pages/good-mager/edit')

export default [{
  path: '/login',
  name: 'login',
  component: Login,
  meta: {
    noAuth: true,
    noLogin: true
  }
},
{
  path: '/register',
  name: 'register',
  component: Register,
  meta: {
    noAuth: true,
    noLogin: true
  }
},
{
  path: '/setPassword',
  name: 'setPassword',
  component: SetPassword,
  meta: {
    noAuth: true,
    noLogin: true
  }
},
{
  path: '/forgot',
  name: 'forgot',
  component: Forgot,
  meta: {
    noAuth: true
  }
},
{
  path: '/',
  name: 'Layout',
  component: Layout,
  redirect: '/goodMager/list',
  children: [
    {
      path: '/goodMager/list',
      name: 'GoodMager',
      component: GoodMager
    },
    {
      path: '/goodMager/edit/:type',
      name: 'goodCreate',
      component: goodEdit
    },
    {
      path: '/goodMager/edit/:id/:type',
      name: 'goodEdit',
      component: goodEdit
    },
    {
      path: '/orderMager/list',
      name: 'Order',
      component: OrderMager
      // redirect: '/orderMager/list/isPay',
    },
    {
      path: '/orderMager/edit/:type',
      name: 'orderCreate',
      component: OrderEdit
    },
    {
      path: '/orderMager/edit/:id/:type',
      name: 'orderEdit',
      component: OrderEdit
    },
    {
      path: '/kindMager/list',
      name: 'kind',
      component: KindMager
      // redirect: '/orderMager/list/isPay',
    },
    {
      path: '/kindMager/edit/:type',
      name: 'kindCreate',
      component: KindEdit
    },
    {
      path: '/kindMager/edit/:id/:type',
      name: 'kindEdit',
      component: KindEdit
    }
  ]
}
]
