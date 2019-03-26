const config = {
  buildDetail: false,
  local: {
        BUILD_ENV: 'local',
        API_PATH: '/api',
        SUB_DIR: 'static',
        PUBLIC_PATH: '/',
        // IMGHOST: '//test-zhike.oss-cn-beijing.aliyuncs.com',
        // MOBILE_HOST: '//172.16.11.28:8866/m/',
        MOBILE_HOST: 'http://localhost:80/m/',
        proxyTable: {
            '/api': {
                target: 'http://localhost/',
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
    // MOBILE_HOST: '//dev-zhike.vhall.com/m/',
    PC_HOST: '//dev-zhike.vhall.com/webinar/',
    MOBILE_HOST: 'http://locahost:80'
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
    API_PATH: '/api',
    SUB_DIR: 'static',
    IMGHOST: '//static.vhallyun.com',
    PUBLIC_PATH: '//zhike.vhall.com/',
    MOBILE_HOST: '//zhike.vhall.com/m/',
    PC_HOST: '//zhike.vhall.com/webinar/'
  }
}
module.exports = config
