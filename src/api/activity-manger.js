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
      params: {id: id}
    })
  },
  /**
   *  通过id获取暖场信息
   */
  queryWarmInfoById (id) {
    return utils.ajax({
      method: 'post',
      url: '/',
      params: {id: id}
    })
  },
  /**
   *  保存暖场信息
   */
  saveWarmInfo (data) {
    return utils.ajax({
      method: 'post',
      url: '/',
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
      params: {id: id}
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
      params: {activityId: id}
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
      params: {activityId: id}
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
      params: {id: id}
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
      params: {emailInviteId: id}
    })
  },
  /**
   *  通过邮件id查询邮件详细
   */
  queryEmailInfoById (id) {
    return utils.ajax({
      method: 'post',
      url: '/expand/email-invite/query',
      params: {emailInviteId: id}
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
  }
}
export default ActivityManger
