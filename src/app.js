import Vue from 'vue'
import App from './app.vue'
import store from './store'
import router from './router'
import './utils/extend'
import 'assets/css/index.scss'
import 'assets/fonts/iconfont.scss'

import Notification from './components/common/notification'
import Input from './components/common/input'
import MessageBox from './components/common/message-box'
import Share from './components/common/share'
import Upload from './components/common/upload'
import Loading from './components/common/loading'
import Dialog from './components/common/dialog'
import Button from './components/common/button'
import Tabs from './components/common/tabs'
import PlayVideo from './components/common/play-video'
import Checkbox from './components/common/checkbox'
import Ajax from './utils/_ajax'

Vue.use(Notification)
Vue.use(Input)
Vue.use(MessageBox)
Vue.use(Share)
Vue.use(Upload)
Vue.use(Loading)
Vue.use(Dialog)
Vue.use(Button)
Vue.use(Tabs)
Vue.use(PlayVideo)
Vue.use(Checkbox)
Vue.use(Ajax)

console.log(process.env.NODE_ENV)
Vue.config.debug = process.env.NODE_ENV !== 'production'
Vue.config.devtools = process.env.NODE_ENV !== 'production'
Vue.config.productionTip = process.env.NODE_ENV !== 'production'
Vue.prototype.$imgHost = process.env.IMGHOST
Vue.filter('isEmpty', function (value, replaceStr) {
  replaceStr = replaceStr || '--'
  return value || replaceStr
})
Vue.filter('fmtTime', (value) => {
  let h = ((value / 3600 >> 0) + '').padStart(2, 0)
  let m = ((value / 60 % 60 >> 0) + '').padStart(2, 0)
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
  for (let i = 0, item; (item = callback[i++]);) {
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
