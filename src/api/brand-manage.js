import utils from 'src/utils'

const Brand = {
  updateSiteState (data) {
    return utils.ajax({
      method: 'post',
      url: '/manage/submodule-manage/edit',
      params: data
    })
  },
  updateSiteData (data) {
    return utils.ajax({
      method: 'post',
      url: '/manage/template-manage/edit',
      params: data
    })
  },
  updateSiteTDK (data) {
    return utils.ajax({
      method: 'post',
      url: '/manage/template-manage/set-tdk',
      params: data
    })
  },
  getSiteData (data) {
    return utils.ajax({
      url: '/manage/template-manage/get',
      params: data
    })
  }
}
export default Brand
