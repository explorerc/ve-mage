import axios from 'axios'
import qs from 'qs'
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
  console.log(_options)
  return axios(_options).then((res) => {
    return res.data
  }).catch((data) => {
    Loading(false)
    console.log('出错了', data)
    MessageBox({
      header: '提示',
      content: data.msg
    })
    switch (data.code) {
      case 10030:
        console.log(this)
        break
    }
    return new Promise(() => {})
  })
}

export default (Vue) => {
  Vue.prototype.$http = function (options) {
    console.log('jinru....', this)
    options.url = options.abPath || BASE_URL + options.url
    let _options = Object.assign({}, defaultOptions, options)
    console.log(_options)
    return axios(_options).then((res) => {
      return res.data
    }).catch((data) => {
      Loading(false)
      console.log('出错了', data)
      MessageBox({
        header: '提示',
        content: data.msg
      })
      switch (data.code) {
        case 10030:
          console.log('跳转到登录页')
          console.log('跳转。。。', this)
          break
      }
      return new Promise(() => {})
    })
  }
}
