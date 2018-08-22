// const entry=() => import(/* webpackChunkName: "todo-view" */ '../views/todo/todo.vue')
const Entry = () =>
  import('src/pages/interact/entry')
const Test = () =>
  import('src/pages/com-test')
/* 直播列表 */
const LiveMager = () =>
  import('src/pages/live-mager')
const Login = () =>
  import('src/pages/login')
const SetPassword = () =>
  import('src/pages/login/set-password')
const Register = () =>
  import('src/pages/login/register')
const Barrage = () =>
  import('src/pages/barrage/index')
const edit = () =>
  import('src/pages/live-mager/edit')
const detail = () =>
  import('src/pages/live-mager/detail/detail')
const role = () =>
  import('src/pages/live-mager/prepare/role')
/* 暖场视频 */
const WarmField = () =>
  import('src/pages/live-mager/warm-field')
/* 参会提醒 */
const Reminder = () =>
  import('src/pages/live-mager/reminder')
const Forgot = () =>
  import('src/pages/login/forgot')
const SetAccount = () =>
  import('src/pages/account')
const limit = () =>
  import('src/pages/live-mager/prepare/limit/index')

export default [{
  path: '/',
  redirect: '/entry'
},
{
  path: '/entry',
  name: 'Entry',
  component: Entry
},
{
  path: '/test',
  name: 'Test',
  component: Test
},
{
  path: '/liveMager',
  name: 'liveMager',
  component: LiveMager
},
{
  path: '/login',
  name: 'login',
  component: Login,
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
  path: '/register',
  name: 'register',
  component: Register,
  meta: {
    noAuth: true,
    noLogin: true
  }
},
{
  path: '/barrage',
  name: 'Barrage',
  component: Barrage,
  meta: {
    noAuth: true,
    noLogin: true
  }
},
{
  path: '/liveMager/create',
  name: 'create',
  component: edit
},
{
  path: '/liveMager/edit/:id',
  name: 'edit',
  component: edit
},
{
  path: '/liveMager/detail/:id',
  name: 'detail',
  component: detail
},
{
  path: '/liveMager/prepare/role/:id',
  name: 'role',
  component: role
},
{
  path: '/liveMager/warmField/:id',
  name: 'warmField',
  component: WarmField
},
{
  path: '/liveMager/reminder/:id',
  name: 'reminder',
  component: Reminder
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
  path: '/setAccount',
  name: 'setAccount',
  component: SetAccount
},
{
  path: '/liveMager/prepare/limit/:id',
  name: 'limit',
  component: limit,
  meta: {
    noAuth: true
  }
}
]
