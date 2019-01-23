/* 定义消息类型 */
export default {
  onLineNum: 'INCREMENT_ONLINE', // 人数通知
  announcement: 'ANNOUNCEMENT', // 公告
  kick: 'KICK', // 踢出
  gag: 'GAG', // 禁言
  gagAll: 'GAG_ALL', // 全体禁言
  beginLive: 'BEGIN_LIVE', // 开始直播
  endLive: 'FINISH_LIVE', // 结束直播
  download: 'DOWNLOAD', // 回放下载
  wechat_msg: 'WECHAT_INVITE_TEST', // 微信测试发送成功
  MARKET_TOOL: 'MARKET_TOOL', // 营销工具 消息 具体详细类型由里面的type区分
  charge: 'RECHARGE_SUCCESS', // 支付
  userImport: 'USER_IMPORT' // 批量导入用户数据
}
