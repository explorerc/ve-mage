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
  // 保存短信邀请任务
  saveMsg (data) {
    return utils.ajax({
      method: 'post',
      url: '/expand/sms-invite/save',
      params: data
    })
  },
  // 查询微信邀请任务详情
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
  queryWechatlist (data) {
    return utils.ajax({
      method: 'post',
      url: '/expand/wechat-invite/list',
      params: data
    })
  },
  // 短信邀请任务列表
  queryMsglist (data) {
    return utils.ajax({
      method: 'post',
      url: '/expand/sms-invite/list',
      params: data
    })
  },
  // 删除微信任务
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
  deleteMsg (id) {
    return utils.ajax({
      method: 'post',
      url: '/expand/sms-invite/delete',
      params: {
        inviteId: id
      }
    })
  },
  queryPassSdkInfo () {
    return utils.ajax({
      method: 'post',
      url: '/common/paas/create-access-token',
      params: {}
    })
  },
  // 短信立即发送
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
  sendTestmsg (data) {
    return utils.ajax({
      method: 'post',
      url: '/expand/sms-invite/test-send',
      params: data
    })
  },
  // 微信正式发送
  sendWechat (id) {
    return utils.ajax({
      method: 'post',
      url: '/expand/wechat-invite/send',
      params: {
        inviteId: id
      }
    })
  },
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
  autoSaveconfig (data) {
    return utils.ajax({
      method: 'post',
      url: '/expand/notice/save-config',
      params: data
    })
  },
  // 自动化通知获取通知列表
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
  autoSavetask (data) {
    return utils.ajax({
      method: 'post',
      url: '/expand/notice/saveTask',
      params: data
    })
  },
  // 自动化通知保存通知
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
  autoSendtest (data) {
    return utils.ajax({
      method: 'post',
      url: '/expand/notice/test-send',
      params: data
    })
  }
}
