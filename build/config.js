const config = {
  buildDetail: false,
  local: {
    BUILD_ENV: 'local',
    API_PATH: '/api',
    SUB_DIR: '',
    PUBLIC_PATH: '',
    proxyTable: {
      '/api': {
        target: 'http://t-api-class.e.vhall.com/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  },
  dev: {
    BUILD_ENV: 'dev',
    API_PATH: '//dev-api-class.e.vhall.com',
    SUB_DIR: 'static',
    PUBLIC_PATH: '//dev-static01-class.e.vhall.com/vhallclass/'
  },
  test: {
    BUILD_ENV: 'test',
    API_PATH: '//t-api-class.e.vhall.com',
    SUB_DIR: 'static',
    PUBLIC_PATH: '//t-static01-class.e.vhall.com/vhallclass/'
  },
  prod: {
    BUILD_ENV: 'prod',
    API_PATH: '//api-class.e.vhall.com',
    SUB_DIR: 'static',
    PUBLIC_PATH: '//static01-class.e.vhall.com/vhallclass/'
  }
}

module.exports = config;
