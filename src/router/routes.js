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
}
]
