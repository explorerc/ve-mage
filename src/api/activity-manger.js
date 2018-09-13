import utils from 'src/utils'

const ActivityManger = {
  /**
   *  查询直播列表
   */
  queryList (data) {
    return utils.ajax({
      method: 'post',
      url: '/manage/base-manage/list-activity',
      params: data
    })
  },
  /**
   *  通过id删除活动
   */
  deleteById (id) {
    return utils.ajax({
      method: 'post',
      url: '/manage/base-manage/del-activity',
      params: {
        id: id
      }
    })
  },
  /**
   *  通过id获取暖场信息
   */
  queryWarmInfoById (id) {
    return utils.ajax({
      method: 'post',
      url: '/manage/warm-up-manage/get',
      params: {
        activityId: id
      }
    })
  },
  /**
   *  保存或者编辑暖场信息
   */
  saveAndEditWarmInfo (data) {
    return utils.ajax({
      method: 'post',
      url: '/manage/warm-up-manage/edit',
      params: data
    })
  },
  /**
   *  通过id获取活动提醒
   */
  queryReminderInfoById (id) {
    return utils.ajax({
      method: 'post',
      url: '/',
      params: {
        id: id
      }
    })
  },
  /**
   *  保存活动提醒信息
   */
  saveReminderInfo (data) {
    return utils.ajax({
      method: 'post',
      url: '/',
      params: data
    })
  },
  /**
   *  角色列表
   */
  roleList (id) {
    return utils.ajax({
      method: 'GET',
      url: '/manage/role-manage/list-role',
      params: {
        activityId: id
      }
    })
  },
  /**
   * 删除助理
   */
  delAss (data) {
    return utils.ajax({
      method: 'POST',
      url: '/manage/role-manage/del-assistant',
      params: data
    })
  },
  /**
   *  编辑 添加助理
   */
  handleAss (isNew, data) {
    return utils.ajax({
      method: 'POST',
      url: isNew ? '/manage/role-manage/update-assistant' : '/manage/role-manage/add-assistant',
      params: data
    })
  },
  /**
   * 获取观看条件
   */
  getLimit (id) {
    return utils.ajax({
      method: 'GET',
      url: '/manage/view-limit/get-limit',
      params: {
        activityId: id
      }
    })
  },
  /**
   * 保存观看条件
   */
  saveLimit (data) {
    return utils.ajax({
      method: 'POST',
      url: '/manage/view-limit/update-limit',
      params: data
    })
  },
  /**
   * 获取互动信息
   */
  webinarInfo (id) {
    return utils.ajax({
      method: 'GET',
      url: '/manage/base-manage/detail-activity',
      params: {
        id: id
      }
    })
  },
  /**
   * 更新/创建活动
   */
  updateWebinfo (isNew, data) {
    return utils.ajax({
      method: 'POST',
      url: isNew ? '/manage/base-manage/add-activity' : '/manage/base-manage/update-activity',
      params: data
    })
  },
  /**
   *  获取邮件列表
   */
  queryEmailList (data) {
    return utils.ajax({
      method: 'post',
      url: '/expand/email-invite/list',
      params: data
    })
  },
  /**
   *  通过id删除邮件
   */
  deleteEmailById (id) {
    return utils.ajax({
      method: 'post',
      url: '/expand/email-invite/delete',
      params: {
        emailInviteId: id
      }
    })
  },
  /**
   *  通过邮件id查询邮件详细
   */
  queryEmailInfoById (id) {
    return utils.ajax({
      method: 'post',
      url: '/expand/email-invite/query',
      params: {
        emailInviteId: id
      }
    })
  },
  /**
   *  获取邮件模板
   */
  queryEmailTemplateList () {
    return utils.ajax({
      method: 'post',
      url: '/expand/email-invite/templates',
      params: {}
    })
  },
  /**
   *  发送邮件
   */
  sendEmailInfo (data) {
    return utils.ajax({
      method: 'post',
      url: '/expand/email-invite/send',
      params: data
    })
  },
  /**
   *  发送定时邮件
   */
  sendTimerEmailInfo (data) {
    return utils.ajax({
      method: 'post',
      url: '/expand/email-invite/save-and-plansend',
      params: data
    })
  },
  /**
   *  发送测试邮件
   */
  sendTestEmailInfo (data) {
    return utils.ajax({
      method: 'post',
      url: '/expand/email-invite/test-send',
      params: data
    })
  },
  /**
   *  发送邮件
   */
  saveAndsendEmail (data) {
    return utils.ajax({
      method: 'post',
      url: '/expand/email-invite/save-and-send',
      params: data
    })
  },
  /**
   *  保存草稿
   */
  saveEmailInfo (data) {
    return utils.ajax({
      method: 'post',
      url: '/expand/email-invite/save-draft',
      params: data
    })
  },
  // 保存微信邀请任务
  saveWechat (data) {
    return utils.ajax({
      method: 'post',
      url: '/expand/wechat-invite/save',
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
  // 微信测试发送
  // sendTestWechat (data) {
  //   return utils.ajax({
  //     method: 'post',
  //     url: '/expand/wechat-invite/test-send',
  //     params: data
  //   })
  // },
  // 获取微信测试限制数量
  // wxLimit () {
  //   return utils.ajax({
  //     method: 'post',
  //     url: '/expand/wechat-invite/limit-num',
  //     params: ''
  //   })
  // },
  // 获取短信测试限制数量
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
  },
  /***
   * 查询观众组
   * @param data
   * @returns {*}
   */
  queryPersonList (data) {
    return utils.ajax({
      method: 'post',
      url: '/common/group/get-group',
      params: {
        inviteId: data
      }
    })
  },
  /***
   * 查询测试邮件限额
   * @param data
   * @returns {*}
   */
  queryTestEmailInfo (data) {
    return utils.ajax({
      method: 'post',
      url: '/common/message/limit-num',
      params: data
    })
  },
  /***
   * 查询默认回放信息
   * @param data
   * @returns {*}
   */
  queryPlayBackInfoById (activityId) {
    return utils.ajax({
      method: 'post',
      url: '/frontend/replay/default-replay',
      params: {
        activityId: activityId
      }
    })
  }
}
export default ActivityManger
