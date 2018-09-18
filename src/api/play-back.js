import utils from 'src/utils'

const PlayBack = {
  /**
   *  查询回放设置信息
   */
  queryPlayBack (data) {
    return utils.ajax({
      method: 'post',
      url: '/manage/replay-manage/find-config',
      params: data
    })
  },
  /**
   *  查询回放视频列表
   */
  queryPlayBackList (data) {
    return utils.ajax({
      method: 'post',
      url: '/manage/replay-manage/list',
      params: data
    })
  },
  /**
   *  通过id删除知道回放视频
   */
  deletePlayBackById (id) {
    return utils.ajax({
      method: 'post',
      url: '/manage/replay-manage/delete',
      params: {
        replayId: id
      }
    })
  },
  /**
   *  修改标题
   */
  retitlePlayBack (id, title) {
    return utils.ajax({
      method: 'post',
      url: '/manage/replay-manage/update',
      params: {
        replayId: id,
        title: title
      }
    })
  },
  /**
   *  创建回放
   */
  createPlayBack (data) {
    return utils.ajax({
      method: 'post',
      url: '/manage/replay-manage/create',
      params: data
    })
  },
  /**
   *  设置默认回放配置
   */
  savePlayBackConfig (data) {
    return utils.ajax({
      method: 'post',
      url: '/manage/replay-manage/save-config',
      params: data
    })
  },
  /**
   *  取消默认回放
   */
  cancelPlayBackConfig (activityId) {
    return utils.ajax({
      method: 'post',
      url: '/manage/replay-manage/cancel-default',
      params: {
        activityId: activityId
      }
    })
  },
  /**
   * 重新生成回放
   */
  resetMakePlayBack (replayId) {
    return utils.ajax({
      method: 'post',
      url: '/manage/replay-manage/recreate-replay',
      params: {
        replayId: replayId
      }
    })
  },
  /**
   *  下载回放视频
   */
  downloadVideo (id) {
    return utils.ajax({
      method: 'post',
      url: '/manage/replay-manage/download',
      params: {
        replayId: id
      }
    })
  }
}
export default PlayBack
