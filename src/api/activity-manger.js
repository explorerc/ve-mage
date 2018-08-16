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
      params: {id: id}
    })
  }
}
export default ActivityManger
