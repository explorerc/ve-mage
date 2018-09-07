const config = {
  buildDetail: true,
  local: {
    BUILD_ENV: 'local',
    API_PATH: '/api',
    SUB_DIR: '',
    PUBLIC_PATH: '/',
    IMGHOST: 'http://dev-zhike.oss-cn-beijing.aliyuncs.com',
    compress: true,
    host: 'localhost',
    autoOpen: true,
    port: 2333,
    proxyTable: {
      '/api': {
        target: 'http://dev-api-zhike.vhall.domain',
        changeOrigin: true,
        headers: {},
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
    PUBLIC_PATH: '//dev-zhike.vhall.domain/',
    IMGHOST: 'http://dev-zhike.oss-cn-beijing.aliyuncs.com'
  },
  test: {
    BUILD_ENV: 'test',
    API_PATH: '/api',
    SUB_DIR: 'static',
    PUBLIC_PATH: '//t-static01-class.e.vhall.com/vhallclass/',
    IMGHOST: 'http://dev-zhike.oss-cn-beijing.aliyuncs.com'
  },
  prod: {
    BUILD_ENV: 'prod',
    API_PATH: '/api',
    SUB_DIR: 'static',
    PUBLIC_PATH: '//static01-class.e.vhall.com/vhallclass/',
    IMGHOST: 'http://dev-zhike.oss-cn-beijing.aliyuncs.com'
  }
}
module.exports = config
