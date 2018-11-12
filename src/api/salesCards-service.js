export default {
  // 新建推荐卡片
  POST_CREATE_CARD: '/manage/recommend-card/create',
  // 更新推荐卡片
  POST_UPDATE_CARD: '/manage/recommend-card/update',
  // 卡片列表
  GET_CARDS_LIST: '/manage/recommend-card/list',
  // 卡片详情
  GET_CARDS_DETAIL: '/manage/recommend-card/query',
  // 删除卡片
  POST_DELETE_CARD: '/manage/recommend-card/delete',
  // 下载卡片
  POST_DOWNLOAD_CARD: '/manage/recommend-card/visit-list', // recommend_card_id
  // 推送卡片
  POST_PUSH_CARD: '/initiator/recommend-card/push', // recommend_card_id
  // 点击访问推荐卡片
  GET_CLICK_CARD: '/frontend/recommend-card/visit' // recommend_card_id
}
