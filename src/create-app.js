import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

import App from './app.vue'
import createStore from './store'
import createRouter from './router'
import './utils/extend'

import 'assets/css/base.scss'
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

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(Notification)
Vue.use(Input)
Vue.use(MessageBox)
Vue.use(Share)
Vue.use(Upload)
Vue.use(Loading)
Vue.use(Dialog)
Vue.use(Button)
Vue.use(Tabs)

Vue.config.debug = process.env.NODE_ENV !== 'production'
Vue.config.devtools = process.env.NODE_ENV !== 'production'
Vue.config.productionTip = process.env.NODE_ENV !== 'production'
Vue.prototype.$imgHost = process.env.IMGHOST
Vue.filter('isEmpty', function (value, replaceStr) {
  replaceStr = replaceStr || '-'
  return value || replaceStr
})

export default () => {
  const router = createRouter()
  const store = createStore()

  const app = new Vue({
    router,
    store,
    render: h => h(App)
  })

  return {
    app,
    router,
    store
  }
}
