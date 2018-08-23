import utils from 'src/utils'

const ActivityManger = {
  queryList (data) { /* 查询直播列表 */
    return utils.ajax({
      method: 'post',
      url: '/manage/base-manage/list-activity',
      params: data
    })
  },
  deleteById (id) { /* 通过id删除活动 */
    return utils.ajax({
      method: 'post',
      url: '/manage/base-manage/del-activity',
      params: {id: id}
    })
  },
  queryWarmInfoById (id) { /* 通过id获取暖场信息 */
    return utils.ajax({
      method: 'post',
      url: '/',
      params: {id: id}
    })
  },
  saveWarmInfo (data) { /* 保存暖场信息 */
    return utils.ajax({
      method: 'post',
      url: '/',
      params: data
    })
  },
  queryReminderInfoById (id) { /* 通过id获取活动提醒 */
    return utils.ajax({
      method: 'post',
      url: '/',
      params: {id: id}
    })
  },
  saveReminderInfo (data) { /* 保存活动提醒信息 */
    return utils.ajax({
      method: 'post',
      url: '/',
      params: data
    })
  },
  roleList (id) { /* 角色列表 */
    return utils.ajax({
      method: 'GET',
      url: '/manage/role-manage/list-role',
      params: {activityId: id}
    })
  },
  delAss (data) { /* 删除助理 */
    return utils.ajax({
      method: 'POST',
      url: '/manage/role-manage/del-assistant',
      params: data
    })
  },
  handleAss (isNew, data) { /* 编辑 添加助理 */
    return utils.ajax({
      method: 'POST',
      url: isNew ? '/manage/role-manage/update-assistant' : '/manage/role-manage/add-assistant',
      params: data
    })
  },
  getLimit (id) { /* 获取观看条件 */
    return utils.ajax({
      method: 'GET',
      url: '/manage/view-limit/get-limit',
      params: {activityId: id}
    })
  },
  saveLimit (data) { /* 保存观看条件 */
    return utils.ajax({
      method: 'POST',
      url: '/manage/view-limit/update-limit',
      params: data
    })
  },
  webinarInfo (id) { /* 获取互动信息 */
    return utils.ajax({
      method: 'GET',
      url: '/manage/base-manage/detail-activity',
      params: {id: id}
    })
  },
  updateWebinfo (isNew, data) { /* 更新/创建活动 */
    return utils.ajax({
      method: 'POST',
      url: isNew ? '/manage/base-manage/add-activity' : '/manage/base-manage/update-activity',
      params: data
    })
  },
  queryEmailList (data) { /* 获取邮件列表 */
    return utils.ajax({
      method: 'post',
      url: '/',
      params: data
    })
  },
  deleteEmailById (id) { /* 通过id删除邮件 */
    return utils.ajax({
      method: 'post',
      url: '/',
      params: {id: id}
    })
  },
  queryEmailInfoById (id) { /* 通过邮件id查询邮件详细 */
    return utils.ajax({
      method: 'post',
      url: '/',
      params: {id: id}
    })
  },
  sendEmailInfo (data) { /* 发送邮件 */
    return utils.ajax({
      method: 'post',
      url: '/',
      params: data
    })
  }
}
export default ActivityManger
