import utils from 'src/utils'

const ActivityManger = {
  queryList (data) {
    return utils.ajax({
      method: 'post',
      url: '/manage/base-manager/list-activity',
      params: data
    })
  },
  deleteById (id) {
    return utils.ajax({
      method: 'post',
      url: '/manage/base-manager/del-activity',
      params: {id: id}
    })
  }
}
export default ActivityManger
