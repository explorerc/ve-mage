let utils = {}

export default {
  // 保存微信邀请任务
  POST_SAVE_WECHAT: '/expand/wechat-invite/save',
  saveWechat (data) {
    return utils.ajax({
      method: 'post',
      url: '',
      params: data
    })
  },
  /**
  * 获取互动信息
  */
  GET_WEBINAR_INFO: '/manage/base-manage/detail-activity',
  webinarInfo (id) {
    return utils.ajax({
      method: 'GET',
      url: '/manage/base-manage/detail-activity',
      params: {
        id: id
      }
    })
  },
  /***
   * 查询观众组
   * @param data
   * @returns {*}
   */
  GET_PERSON_LIST: '/common/group/get-group',
  queryPersonList (data) {
    return utils.ajax({
      method: 'post',
      url: '/common/group/get-group',
      params: {
        inviteId: data
      }
    })
  },
  // 保存短信邀请任务
  POST_SAVE_MSG: '/expand/sms-invite/save',
  saveMsg (data) {
    return utils.ajax({
      method: 'post',
      url: '/expand/sms-invite/save',
      params: data
    })
  },
  // 查询微信邀请任务详情
  GET_QUERY_WECHAT: '/expand/wechat-invite/query',
  queryWechat (id) {
    return utils.ajax({
      method: 'post',
      url: '/expand/wechat-invite/query',
      params: {
        inviteId: id
      }
    })
  },
  // 查询短信邀请任务详情
  GET_QUERY_MSG: '/expand/sms-invite/query',
  queryMsg (id) {
    return utils.ajax({
      method: 'post',
      url: '/expand/sms-invite/query',
      params: {
        inviteId: id
      }
    })
  },
  // 微信邀请任务列表
  GET_WECHAT_LIST: '/expand/wechat-invite/list',
  queryWechatlist (data) {
    return utils.ajax({
      method: 'post',
      url: '/expand/wechat-invite/list',
      params: data
    })
  },
  // 短信邀请任务列表
  GET_MSG_LIST: '/expand/sms-invite/list',
  queryMsglist (data) {
    return utils.ajax({
      method: 'post',
      url: '/expand/sms-invite/list',
      params: data
    })
  },
  // 删除微信任务
  POST_DELETE_WECHAT: '/expand/wechat-invite/delete',
  deleteWechat (id) {
    return utils.ajax({
      method: 'post',
      url: '/expand/wechat-invite/delete',
      params: {
        inviteId: id
      }
    })
  },
  // 删除短信任务
  POST_DELETE_MSG: '/expand/sms-invite/delete',
  deleteMsg (id) {
    return utils.ajax({
      method: 'post',
      url: '/expand/sms-invite/delete',
      params: {
        inviteId: id
      }
    })
  },
  // 获取pass sdk
  GET_PAAS_SDK_INFO: '/common/paas/create-access-token',
  queryPassSdkInfo () {
    return utils.ajax({
      method: 'post',
      url: '/common/paas/create-access-token',
      params: {}
    })
  },
  // 短信立即发送
  POST_SEND_MSG: '/expand/sms-invite/send',
  sendMsg (id) {
    return utils.ajax({
      method: 'post',
      url: '/expand/sms-invite/send',
      params: {
        inviteId: id
      }
    })
  },
  // 短信测试发送
  POST_SEND_TEST_MSG: '/expand/sms-invite/test-send',
  sendTestmsg (data) {
    return utils.ajax({
      method: 'post',
      url: '/expand/sms-invite/test-send',
      params: data
    })
  },
  // 微信正式发送
  POST_SEND_WECHAT: '/expand/wechat-invite/send',
  sendWechat (id) {
    return utils.ajax({
      method: 'post',
      url: '/expand/wechat-invite/send',
      params: {
        inviteId: id
      }
    })
  },
  // 获取短信条数
  GET_MSG_LIMIT: '/common/message/limit-num',
  msgLimit (type) {
    return utils.ajax({
      method: 'post',
      url: '/common/message/limit-num',
      params: {
        type: type
      }
    })
  },
  // 自动化通知获取模板变量
  GET_AUTO_PARAMS: '/expand/notice/template-params',
  autoGetparams (id) {
    return utils.ajax({
      method: 'post',
      url: '/expand/notice/template-params',
      params: {
        activityId: id
      }
    })
  },
  // 自动化通知获取时间颗粒
  GET_AUTO_CONFIG: '/expand/notice/find-config',
  autoFindconfig (id) {
    return utils.ajax({
      method: 'post',
      url: '/expand/notice/find-config',
      params: {
        activityId: id
      }
    })
  },
  // 自动化通知保存时间颗粒
  POST_AUTO_SAVE_CONFIG: '/expand/notice/save-config',
  autoSaveconfig (data) {
    return utils.ajax({
      method: 'post',
      url: '/expand/notice/save-config',
      params: data
    })
  },
  // 自动化通知获取通知列表
  GET_AUTO_LIST: '/expand/notice/task-list',
  autoList (id) {
    return utils.ajax({
      method: 'post',
      url: '/expand/notice/task-list',
      params: {
        activityId: id
      }
    })
  },
  // 自动化通知修改通知
  POST_AUTO_SAVE_TASK: '/expand/notice/saveTask',
  autoSavetask (data) {
    return utils.ajax({
      method: 'post',
      url: '/expand/notice/saveTask',
      params: data
    })
  },
  // 自动化通知保存通知
  POST_AUTO_FIND_TASK: '/expand/notice/find-task',
  autoFindtask (id) {
    return utils.ajax({
      method: 'post',
      url: '/expand/notice/find-task',
      params: {
        noticeTaskId: id
      }
    })
  },
  // 自动化通知删除通知
  POST_DELETE_AUTO_TASK: '/expand/notice/delete-task',
  autoDeletetask (id) {
    return utils.ajax({
      method: 'post',
      url: '/expand/notice/delete-task',
      params: {
        noticeTaskId: id
      }
    })
  },
  // 自动化通知发送测试短信
  POST_AUTO_SEND_TEST: '/expand/notice/test-send',
  autoSendtest (data) {
    return utils.ajax({
      method: 'post',
      url: '/expand/notice/test-send',
      params: data
    })
  }
}
