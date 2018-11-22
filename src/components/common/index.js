import Notification from './notification'
import Input from './input'
import MessageBox from './message-box'
import Share from './share'
import Upload from './upload'
import Loading from './loading'
import Dialog from './dialog'
import Button from './button'
import Tabs from './tabs'
import PlayVideo from './play-video'
import Checkbox from './checkbox'
import Drag from './drag'
import comBack from './back'
const components = [
  Notification,
  Input,
  MessageBox,
  Share,
  Upload,
  Loading,
  Dialog,
  Button,
  Tabs,
  PlayVideo,
  Checkbox,
  Drag,
  comBack
]

const installUse = function (Vue = {}) {
  components.forEach(component => {
    Vue.use(component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  installUse(window.Vue)
}
