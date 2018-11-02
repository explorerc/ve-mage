const ActivityManger = {
  /**
   *  查询直播列表
   */
  GET_ACTIVITY_LIST: '/manage/base-manage/list-activity',
  /**
   *  通过id删除活动
   */
  POST_DEL_ACTIVITY: '/manage/base-manage/del-activity',
  /**
   *  通过id获取暖场信息
   */
  GET_WRAM_INFO: '/manage/warm-up-manage/get',
  /**
   *  保存或者编辑暖场信息
   */
  POST_SAVE_WRAM_INFO: '/manage/warm-up-manage/edit',
  /**
   *  通过id获取活动提醒
   */
  GET_REMINDER_INFO: '',
  /**
   *  保存活动提醒信息
   */
  POST_REMINDER_INFO: '',
  /**
   *  角色列表
   */
  GET_ROLE_LIST: '/manage/role-manage/list-role',
  /**
   * 删除助理
   */
  POST_DELASS: '/manage/role-manage/del-assistant',
  /**
   *  编辑 添加助理
   */
  POST_UPDATE_ASS: '/manage/role-manage/update-assistant',
  POST_ADD_ASS: '/manage/role-manage/add-assistant',
  /**
   * 获取观看条件
   */
  GET_LIMIT: '/manage/view-limit/get-limit',
  /**
   * 保存观看条件
   */
  SAVE_LIMIT: '/manage/view-limit/update-limit',
  /**
   * 获取互动信息
   */
  GET_WEBINAR_INFO: '/manage/base-manage/detail-activity',
  /**
   * 更新/创建活动
   */
  POST_UPDATE_WEBINAR: '/manage/base-manage/update-activity',
  POST_CREATE_WEBINAR: '/manage/base-manage/add-activity',
  /**
   *  获取邮件列表
   */
  GET_EMAIL_LIST: '/expand/email-invite/list',
  /**
   *  通过id删除邮件
   */
  POST_DEL_EMAIL: '/expand/email-invite/delete',
  /**
   *  通过邮件id查询邮件详细
   */
  GET_EMAIL_INFO: '/expand/email-invite/query',
  /**
   *  获取邮件模板
   */
  GET_EMAIL_TPL_LIST: '/expand/email-invite/templates',
  // 获取pass sdk
  GET_PAAS_SDK_INFO: '/common/paas/create-access-token',
  /**
   *  发送邮件
   */
  POST_SEND_EMAIL_INFO: '/expand/email-invite/send',
  /**
   *  发送定时邮件
   */
  POST_SEND_TIMER_EMAIL_INFO: '/expand/email-invite/save-and-plansend',
  /**
   *  发送测试邮件
   */
  POST_SEND_TEST_EMAIL_INFO: '/expand/email-invite/test-send',
  /**
   *  发送邮件
   */
  POST_SAVE_SEND_EMAIL: '/expand/email-invite/save-and-send',
  /**
   *  保存草稿
   */
  POST_SAVE_EMAIL_INFO: '/expand/email-invite/save-draft',
  // 详情页面获取活动信息
  GET_DETAILS: '/manage/activity-detail/index',
  // 详情页面子模块开关 设置子模块开关
  POST_DETAIL_SWITCH: '/manage/submodule-manage/edit',
  // 查询子模块开关
  GET_QUERY_SWITCH: '/manage/submodule-manage/get',
  // 发布活动
  POST_PUBLISH_ACTIVITE: '/manage/base-manage/published',
  // 下线活动
  POST_OFFLINE_ACTIVITE: '/manage/base-manage/down',
  /***
   * 查询观众组
   * @param data
   * @returns {*}
   */
  GET_PERSON_LIST: '/common/group/get-group',
  /***
   * 查询测试邮件限额
   * @param data
   * @returns {*}
   */
  POST_TEST_EMAIL_INFO: '/common/message/limit-num',
  /***
   * 查询默认回放信息
   * @param data
   * @returns {*}
   */
  GET_PLAYBACK_INFO: '/frontend/replay/default-replay',
  // 获取主持人在线状态
  GET_HOSTING: '/manage/role-manage/check-host-online',
  // 获取标签列表
  GET_TAG_LIST: '/manage/tags/list-tags',
  /* 查询发送详情 */
  GET_SEND_LIST: '/expand/sms-invite/invite-list'
}
export default ActivityManger
