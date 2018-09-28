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
  POST_DELASS: '/manage/role-manage/del-assistant',
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
  POST_UPDATE_ASS: '/manage/role-manage/update-assistant',
  POST_ADD_ASS: '/manage/role-manage/add-assistant',
  handleAss (isNew, data) {
    return utils.ajax({
      method: 'POST',
      url: isNew
        ? '/manage/role-manage/update-assistant'
        : '/manage/role-manage/add-assistant',
      params: data
    })
  },
  /**
   * 获取观看条件
   */
  GET_LIMIT: '/manage/view-limit/get-limit',
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
  SAVE_LIMIT: '/manage/view-limit/update-limit',
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
  /**
   * 更新/创建活动
   */
  POST_UPDATE_WEBINAR: '/manage/base-manage/update-activity',
  POST_CREATE_WEBINAR: '/manage/base-manage/add-activity',
  updateWebinfo (isNew, data) {
    return utils.ajax({
      method: 'POST',
      url: isNew
        ? '/manage/base-manage/add-activity'
        : '/manage/base-manage/update-activity',
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
  // 详情页面获取活动信息
  GET_DETAILS: '/manage/activity-detail/index',
  getDetails (id) {
    return utils.ajax({
      method: 'get',
      url: '/manage/activity-detail/index',
      params: {
        activityId: id
      }
    })
  },
  // 详情页面子模块开关 设置子模块开关
  POST_DETAIL_SWITCH: '/manage/submodule-manage/edit',
  detailSwitch (data) {
    return utils.ajax({
      method: 'post',
      url: '/manage/submodule-manage/edit',
      params: data
    })
  },
  // 查询子模块开关
  GET_QUERY_SWITCH: '/manage/submodule-manage/get',
  querySwitch (id) {
    return utils.ajax({
      method: 'get',
      url: '/manage/submodule-manage/get',
      params: {
        activityId: id
      }
    })
  },
  // 发布活动
  POST_PUBLISH_ACTIVITE: '/manage/base-manage/published',
  publishActive (id) {
    return utils.ajax({
      method: 'get',
      url: '/manage/base-manage/published',
      params: {
        activityId: id
      }
    })
  },
  // 下线活动
  POST_OFFLINE_ACTIVITE: '/manage/base-manage/down',
  offlineActive (id) {
    return utils.ajax({
      method: 'get',
      url: '/manage/base-manage/down',
      params: {
        activityId: id
      }
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
