export default {
  // 保存微信邀请任务
  POST_SAVE_WECHAT: '/expand/wechat-invite/save',
  /**
  * 获取互动信息
  */
  GET_WEBINAR_INFO: '/manage/base-manage/detail-activity',
  /***
   * 查询观众组
   * @param data
   * @returns {*}
   */
  GET_PERSON_LIST: '/common/group/get-group',
  // 保存短信邀请任务
  POST_SAVE_MSG: '/expand/sms-invite/save',
  // 查询微信邀请任务详情
  GET_QUERY_WECHAT: '/expand/wechat-invite/query',
  // 查询短信邀请任务详情
  GET_QUERY_MSG: '/expand/sms-invite/query',
  // 微信邀请任务列表
  GET_WECHAT_LIST: '/expand/wechat-invite/list',
  // 短信邀请任务列表
  GET_MSG_LIST: '/expand/sms-invite/list',
  // 删除微信任务
  POST_DELETE_WECHAT: '/expand/wechat-invite/delete',
  // 删除短信任务
  POST_DELETE_MSG: '/expand/sms-invite/delete',
  // 获取pass sdk
  GET_PAAS_SDK_INFO: '/common/paas/create-access-token',
  // 短信立即发送
  POST_SEND_MSG: '/expand/sms-invite/send',
  // 短信测试发送
  POST_SEND_TEST_MSG: '/expand/sms-invite/test-send',
  // 微信正式发送
  POST_SEND_WECHAT: '/expand/wechat-invite/send',
  // 获取短信条数
  GET_MSG_LIMIT: '/common/message/limit-num',
  // 自动化通知获取模板变量
  GET_AUTO_PARAMS: '/expand/notice/template-params',
  // 自动化通知获取时间颗粒
  GET_AUTO_CONFIG: '/expand/notice/find-config',
  // 自动化通知保存时间颗粒
  POST_AUTO_SAVE_CONFIG: '/expand/notice/save-config',
  // 自动化通知获取通知列表
  GET_AUTO_LIST: '/expand/notice/task-list',
  // 自动化通知修改通知
  POST_AUTO_SAVE_TASK: '/expand/notice/saveTask',
  // 自动化通知保存通知
  POST_AUTO_FIND_TASK: '/expand/notice/find-task',
  // 自动化通知删除通知
  POST_DELETE_AUTO_TASK: '/expand/notice/delete-task',
  // 自动化通知发送测试短信
  POST_AUTO_SEND_TEST: '/expand/notice/test-send'
}
