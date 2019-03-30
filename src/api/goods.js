export default {
  // 获取所有产品信息
  GET_GOODS_INFO: '/goods/getAll',
  // 分页
  GET_GOODS_PAGE: '/goods/page',
  // GET_GOODS_INFO: '/goods',
  GET_GOOD_BYID: '/goods/id', // 根据id获取商品信息
  // 新建推荐商品
  CREATE_GOODS: '/goods/add',
  // 编辑推荐商品
  UPDATE_GOODS: '/goods/update',
  // 删除商品
  GOODS_DELETE: '/manage/goods/delete',
  // 商品详情
  GOODS_DETAIL: '/manage/goods/detail',
  // 上下架
  GOODS_SHELF: '/manage/goods/added',
  // 商品排序
  SORT_GOODS: '/manage/goods/sort',
  // 详情页面获取活动信息
  GET_DETAILS: '/manage/activity-detail/index'
}
