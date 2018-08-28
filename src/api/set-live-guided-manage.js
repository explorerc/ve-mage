import utils from 'src/utils'

const LiveGuidedManage = {
  getLiveGuided (data) { // 获取引导页信息
    return utils.ajax({
      method: 'post',
      url: '/manage/guide-manage/get',
      params: data
    })
  },
  setLiveGuided (data) { // 编辑引导页信息
    return utils.ajax({
      method: 'post',
      url: '/manage/guide-manage/edit',
      params: data
    })
  }
}
export default LiveGuidedManage
