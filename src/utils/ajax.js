import axios from 'axios'
import qs from 'qs'

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
    if (config.method === 'post') {
      config.data = qs.stringify(config.params)
      delete config.params
    }
    // jwt
    // config.headers.Authorization = localStorage.token
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  res => {
    if (res.data.code !== 200) {
      // 错误处理
      return Promise.reject(res.data.message)
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
  }).catch((error) => {
    console.log('出错了', error)
    return new Promise(() => {})
  })
}
