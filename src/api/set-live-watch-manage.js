import utils from 'src/utils'

const LiveWatchManage = {
  getLiveShare (data) { // 获取分享设置
    return utils.ajax({
      method: 'post',
      url: '/manage/share-manage/get',
      params: data
    })
  },
  setLiveShare (data) { // 编辑引导页信息
    return utils.ajax({
      method: 'post',
      url: '/manage/share-manage/edit',
      params: data
    })
  },
  getLiveBrand (data) { // 获取品牌信息
    return utils.ajax({
      method: 'post',
      url: '/manage/brand-manage/get',
      params: data
    })
  },
  setLiveBrand (data) { // 编辑品牌信息
    return utils.ajax({
      method: 'post',
      url: '/manage/brand-manage/edit',
      params: data
    })
  }
}
export default LiveWatchManage
