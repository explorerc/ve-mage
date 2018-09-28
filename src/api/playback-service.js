export default {
  // 查询回放设置信息
  GET_PLAYBACK: '/manage/replay-manage/find-config',
  // 查询回放视频列表
  GET_PLAYBACK_LIST: '/manage/replay-manage/list',
  // 通过id删除知道回放视频
  POST_DELETE_PLAYBACK_BY_ID: '/manage/replay-manage/delete',
  // 修改标题
  POST_RETITLE_PLAYBACK: '/manage/replay-manage/update',
  // 创建回放
  POST_CREATE_PLAYBACK: '/manage/replay-manage/create',
  // 设置默认回放配置
  POST_SAVE_PLAYBACK_CONFIG: '/manage/replay-manage/save-config',
  // 取消默认回放
  POST_CANCEL_PLAYBACK_CONFIG: '/manage/replay-manage/cancel-default',
  // 重新生成回放
  POST_REMAKE_PLAYBACK: '/manage/replay-manage/recreate-replay',
  // 下载回放视频
  POST_DOWNLOAD_VIDEO: '/manage/replay-manage/download',
  // 获取pass sdk
  GET_PAAS_SDK_INFO: '/common/paas/create-access-token'
}
