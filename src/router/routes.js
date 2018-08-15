// const entry=() => import(/* webpackChunkName: "todo-view" */ '../views/todo/todo.vue')
const Entry = () =>
  import('src/pages/interact/entry')
const Test = () =>
  import('src/pages/com-test')
const LiveMager = () => import('src/pages/live-mager')

const edit = () => import('src/pages/live-mager/edit')
const detail = () => import('src/pages/live-mager/detail')

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
  },
  {
    path: '/liveMager/edit',
    name: 'liveMager3',
    component: edit
  },
  {
    path: '/liveMager/edit/:id',
    name: 'liveMager1',
    component: edit
  },
  {
    path: '/liveMager/detail/:id',
    name: 'liveMager2',
    component: detail
  }
]
