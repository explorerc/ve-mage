import utils from 'src/utils'

const ActivityManger = {
  queryList (data) {
    return utils.ajax({
      method: 'post',
      url: '/manage/base-manage/list-activity',
      params: data
    })
  },
  deleteById (id) {
    return utils.ajax({
      method: 'post',
      url: '/manage/base-manage/del-activity',
      params: { id: id }
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
