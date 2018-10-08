const config = {
  buildDetail: false,
  local: {
    BUILD_ENV: 'local',
    API_PATH: '/api',
    SUB_DIR: '',
    PUBLIC_PATH: '//localhost:2333/',
    IMGHOST: '//dev-zhike.oss-cn-beijing.aliyuncs.com',
    MOBILE_HOST: '//localhost:8866/m/',
    PC_HOST: '//localhost:6688/webinar/',
    proxyTable: {
      '/api': {
        target: 'http://dev-api-zhike.vhall.main',
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
    PUBLIC_PATH: '//dev-zhike.vhall.com/',
    MOBILE_HOST: '//dev-zhike.vhall.com/m/',
    PC_HOST: '//dev-zhike.vhall.com/webinar/'
  },
  test: {
    BUILD_ENV: 'test',
    API_PATH: '/api',
    SUB_DIR: 'static',
    IMGHOST: '//test-zhike.oss-cn-beijing.aliyuncs.com',
    PUBLIC_PATH: '//test-zhike.vhall.com/',
    MOBILE_HOST: '//test-zhike.vhall.com/m/',
    PC_HOST: '//test-zhike.vhall.com/webinar/'
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
