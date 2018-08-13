// const entry=() => import(/* webpackChunkName: "todo-view" */ '../views/todo/todo.vue')
const Entry = () =>
  import('src/pages/interact/entry/entry')
const Test = () =>
  import('src/pages/com-test')
const LiveMager = () => import('src/pages/live-mager')

export default [
  {
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
  }
]
