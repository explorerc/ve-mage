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
      params: { id: id }
    })
  },
  queryWarmInfoById (id) { /* 通过id获取暖场信息 */
    return utils.ajax({
      method: 'post',
      url: '/',
      params: { id: id }
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
      params: { id: id }
    })
  },
  saveReminderInfo (data) { /* 保存活动提醒信息 */
    return utils.ajax({
      method: 'post',
      url: '/',
      params: data
    })
  },
  roleList (id) {
    return utils.ajax({
      method: 'GET',
      url: '/manage/role-manage/list-role',
      params: { activityId: id }
    })
  },
  delAss (data) {
    return utils.ajax({
      method: 'POST',
      url: '/manage/role-manage/del-assistant',
      params: data
    })
  },
  handleAss (isNew, data) {
    return utils.ajax({
      method: 'POST',
      url: isNew ? '/manage/role-manage/update-assistant' : '/manage/role-manage/add-assistant',
      params: data
    })
  }
}
export default ActivityManger
