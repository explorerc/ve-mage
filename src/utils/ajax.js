import axios from 'axios'
import qs from 'qs'
// import EventBus from 'src/utils/eventBus'
import {
  Loading
} from 'components/common/loading'
import {
  MessageBox
} from 'components/common/message-box'

const BASE_URL = process.env.API_PATH

const defaultOptions = {
  timeout: 10000,
  responseType: 'json',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
  }
}

axios.interceptors.request.use(
  config => {
    if (config.params.__loading) {
      Loading(true)
      delete config.params.__loading
    }
    if (config.method === 'post') {
      config.data = qs.stringify(config.params)
      delete config.params
    }

    // jwt
    // config.headers.Authorization = localStorage.token
    return config
  },
  error => {
    Loading(false)
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  res => {
    Loading(false)
    if (res.data.code !== 200) {
      // 错误处理
      return Promise.reject(res.data)
    }
    return res
  }, error => {
    return Promise.reject(error)
  }
)

export const ajax = (options) => {
  options.url = options.abPath || BASE_URL + options.url
  let _options = Object.assign({}, defaultOptions, options)
  return axios(_options).then((res) => {
    return res.data
  }).catch((data) => {
    Loading(false)
    if (options.headers && options.headers.noAlert) {
      return Promise.resolve(data)
    }
    let errorMsg = data.msg || '网络异常'
    MessageBox({
      header: '提示',
      content: errorMsg,
      autoClose: 10,
      confirmText: '知道了'
    })
    return Promise.resolve(data)
  })
}
