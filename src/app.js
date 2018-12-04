import Vue from 'vue'
import App from './app.vue'
import store from './store'
import router from './router'
import './utils/extend'
import 'assets/css/index.scss'
import 'assets/fonts/iconfont.scss'
import './components/common'
import Ajax from './utils/_ajax'
Vue.use(Ajax)

console.log(process.env.NODE_ENV)
Vue.config.debug = process.env.NODE_ENV !== 'production'
Vue.config.devtools = process.env.NODE_ENV !== 'production'
Vue.config.productionTip = process.env.NODE_ENV !== 'production'
Vue.prototype.$imgHost = process.env.IMGHOST
Vue.prototype.$staticHost = process.env.PUBLIC_PATH
Vue.filter('isEmpty', function (value, replaceStr) {
  replaceStr = replaceStr || '--'
  return value || replaceStr
})
Vue.filter('fmtTime', value => {
  let h = (((value / 3600) >> 0) + '').padStart(2, 0)
  let m = (((value / 60) % 60 >> 0) + '').padStart(2, 0)
  let s = ((value % 60 >> 0) + '').padStart(2, 0)
  return `${h}:${m}:${s}`
})

new Vue({
  el: '#root',
  router,
  store,
  render: h => h(App)
})

let ready = window.Vhall.ready
let readyStatus = false
let callback = []
window.Vhall.ready = fn => {
  if (readyStatus) {
    fn()
  } else {
    callback.push(fn)
  }
}

ready(() => {
  for (let i = 0, item;
    (item = callback[i++]);) {
    item()
  }
  callback = []
  readyStatus = true
})

let config = window.Vhall.config
let exec = false
window.Vhall.config = options => {
  if (exec) return
  exec = true
  config(options)
}
window.callbackResize = null
let timeout = null
window.onresize = function callbackResizeFn () {
  if (timeout) return
  if (window.callbackResize) {
    timeout = setTimeout(() => {
      clearTimeout(timeout)
      timeout = null
      window.callbackResize()
    }, 500)
  }
}
