export default {
  POST_REGISTER: '/user/business-user/reg',
  POST_LOGIN_PHONE: '/user/business-user/mobile-login',
  POST_LOGIN_ACCOUNT: '/user/business-user/account-login',
  POST_LOGOUT: '/user/business-user/signout',
  GET_ACCOUNT: '/user/business-user/info',
  POST_CHANGE_PASSWORD: '/user/business-user/update-password',
  POST_SET_PASSWORD: '/user/business-user/first-set-password',
  POST_SET_COMPANY: '/user/business-user/update',
  POST_SET_USER: '/user/business-user/update-linkman',
  GET_USERINFO: '/user/business-user/linkman-info',
  POST_VERIFY_MOBILE: '/common/message/verify-code',
  POST_UPDATE_MOBILE: '/user/business-user/update-mobile',
  POST_BACK_PASSWORD: '/user/business-user/update-password-by-code-token',
  GET_INDUSTRIES: '/common/user/industry-list',
  GET_CODE: '/common/message/send-code',
  GET_CAPTCHA_ID: '/common/message/get-captchaid',
  GET_CUSTOMER_OVERVIEW: '/user/customer/overview', // 用户总览
  GET_CUSTOMER_DETAIL: '/user/customer/detail', // 用户详情
  GET_SURVER_LIST: '/user/customer/survey-list', // 用户详情报名/问卷列表
  GET_BEHAVIOR_LIST: '/user/customer/behavior-list', // 用户详情足迹/行为列表
  POST_CUSTOMER_UPDATE: '/user/customer/update' // 用户详情足迹/行为列表
}
