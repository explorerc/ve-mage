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
    name: 'liveMager',
    component: edit
  },
  {
    path: '/liveMager/edit/:id',
    name: 'liveMager',
    component: edit
  },
  {
    path: '/liveMager/detail',
    name: 'liveMager',
    component: detail
  },
  {
    path: '/liveMager/detail/:id',
    name: 'liveMager',
    component: detail
  }
]
