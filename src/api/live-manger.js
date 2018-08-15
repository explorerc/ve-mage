import utils from 'src/utils'

const LiveManger = {
  queryList (data) {
    return utils.ajax({
      method: 'post',
      url: '/activityManager/base-manager/list-activity',
      params: data
    })
  }
}
export default LiveManger
