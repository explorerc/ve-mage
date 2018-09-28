const config = {
  buildDetail: false,
  local: {
    BUILD_ENV: 'local',
    API_PATH: '/api',
    SUB_DIR: '',
    PUBLIC_PATH: '//localhost:2333/',
    IMGHOST: '//dev-zhike.oss-cn-beijing.aliyuncs.com',
    MOBILE_HOST: '//localhost:8866/',
    PC_HOST: '//localhost:6688/',
    proxyTable: {
      '/api': {
        target: 'http://dev-api-zhike.vhall.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  },
  dev: {
    BUILD_ENV: 'dev',
    API_PATH: '/api',
    SUB_DIR: 'static',
    IMGHOST: '//dev-zhike.oss-cn-beijing.aliyuncs.com',
    PUBLIC_PATH: '//dev-zhike.vhall.com/'
    //PUBLIC_PATH: '//127.0.0.1:8088/'
  },
  test: {
    BUILD_ENV: 'test',
    API_PATH: '/api',
    SUB_DIR: 'static',
    IMGHOST: '//test-zhike.oss-cn-beijing.aliyuncs.com',
    PUBLIC_PATH: '//test-zhike.vhall.com/'，
    MOBILE_HOST: '//test-zhike.vhall.com/m/',
    PC_HOST: '//test-zhike.vhall.com/watch/',
  },
  prod: {
    BUILD_ENV: 'prod',
    API_PATH: '//api-class.e.vhall.com',
    SUB_DIR: 'static',
    IMGHOST: '//dev-zhike.oss-cn-beijing.aliyuncs.com',
    PUBLIC_PATH: '//static01-class.e.vhall.com/vhallclass/'
  }
}
module.exports = config
