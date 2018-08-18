// const entry=() => import(/* webpackChunkName: "todo-view" */ '../views/todo/todo.vue')
const Entry = () =>
  import('src/pages/interact/entry')
const Test = () =>
  import('src/pages/com-test')
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
const WarmField = () =>
  import('src/pages/live-mager/warm-field')
const Forgot = () =>
  import('src/pages/login/forgot')
const SetAccount = () =>
  import('src/pages/account')

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
  component: Login
},
{
  path: '/setPassword',
  name: 'setPassword',
  component: SetPassword
},
{
  path: '/register',
  name: 'register',
  component: Register
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
  path: '/forgot',
  name: 'forgot',
  component: Forgot
},
{
  path: '/setAccount',
  name: 'setAccount',
  component: SetAccount
}
]
