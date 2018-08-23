// const entry=() => import(/* webpackChunkName: "todo-view" */ '../views/todo/todo.vue')
const Entry = () => import('src/pages/interact/entry')
const Test = () => import('src/pages/com-test')
/* 直播列表 */
const LiveMager = () => import('src/pages/live-mager')
const Login = () => import('src/pages/login')
const SetPassword = () => import('src/pages/login/set-password')
const Register = () => import('src/pages/login/register')
const Barrage = () => import('src/pages/barrage/index')
/* 创建活动 */
const edit = () => import('src/pages/live-mager/edit')
/* 活动详情 */
const detail = () => import('src/pages/live-mager/detail/detail')
/* 角色设置 */
const role = () => import('src/pages/live-mager/prepare/role')
/* 暖场视频 */
const WarmField = () => import('src/pages/live-mager/warm-field')
/* 参会提醒 */
const Reminder = () => import('src/pages/live-mager/reminder')
const Forgot = () => import('src/pages/login/forgot')
const SetAccount = () => import('src/pages/account')
/* 观看条件-邀请 */
const limitInvite = () => import('src/pages/live-mager/prepare/limit/invite')
/* 观看条件-报名 */
const limitApply = () => import('src/pages/live-mager/prepare/limit/apply')

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
    noAuth: true
  }
},
{
  path: '/setPassword',
  name: 'setPassword',
  component: SetPassword,
  meta: {
    noAuth: true
  }
},
{
  path: '/register',
  name: 'register',
  component: Register,
  meta: {
    noAuth: true
  }
},
{
  path: '/barrage',
  name: 'Barrage',
  component: Barrage
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
  path: '/liveMager/prepare/limit-invite/:id',
  name: 'limit',
  component: limitInvite,
  meta: {
    noAuth: true
  }
},
{
  path: '/liveMager/prepare/limit-apply/:id',
  name: 'limit',
  component: limitApply,
  meta: {
    noAuth: true
  }
}
]
