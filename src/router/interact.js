// const entry=() => import(/* webpackChunkName: "todo-view" */ '../views/todo/todo.vue')
const Entry = () => import('src/pages/interact/entry')
const Barrage = () => import('src/pages/barrage/index')

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
    path: '/barrage',
    name: 'Barrage',
    component: Barrage
  }
]
