import utils from 'src/utils'

let token = ''
/* 直播互动 */
const LiveManage = {
  /* 获取第三方推流地址 */
  getPushUrl (activityId) {
    return utils.ajax({
      method: 'post',
      url: '/initiator/live/get-third-pub-info',
      params: {
        activityId: activityId
      },
      headers: {
        Authorization: token
      }
    })
  },
  /* 直播设置 */
  setLiveSetting (params) {
    return utils.ajax({
      method: 'post',
      url: '/initiator/live/set',
      params: params,
      headers: {
        Authorization: token
      }
    })
  },
  /* 增加在线人数 */
  addLivePersons (params) {
    return utils.ajax({
      method: 'post',
      url: '/initiator/live/increment-init-user-num',
      params: params,
      headers: {
        Authorization: token
      }
    })
  },
  /* 获取发起端token，每个活动的token不同 */
  getLiveTtoken (activityId) {
    return new Promise((resolve, reject) => {
      utils.ajax({
        method: 'get',
        url: '/initiator/live/get-token',
        params: {
          activityId: activityId
        }
      }).then(res => {
        token = res.data
        resolve(res)
      }).catch((e) => {
        reject(e)
      })
    })
  },
  /* paas token获取接口 */
  getPaasParam (activityId) {
    return utils.ajax({
      method: 'get',
      url: '/initiator/live/get-sdk-token',
      params: {
        activityId: activityId
      },
      headers: {
        Authorization: token
      }
    })
  },
  /* 获取设置信息 */
  querySettingInfo (activityId) {
    return utils.ajax({
      method: 'get',
      url: '/initiator/live/get-setting',
      params: {
        activityId: activityId
      },
      headers: {
        Authorization: token
      }
    })
  },
  /* 获取参会信息 */
  async queryRegActivity (activityId) {
    const promsObj = await new Promise((resolve, reject) => {
      utils.ajax({
        method: 'get',
        url: '/frontend/user/reg-activity',
        params: {
          activityId: activityId
        }
      }).then(res => {
        resolve(res)
      }).catch(error => {
        reject(error)
      })
    })
    return promsObj
  },
  /* 根据参会信息获取paas参数 */
  queryPaasParams (activityId, activityUserId) {
    return utils.ajax({
      method: 'get',
      url: '/frontend/live/sdk-token',
      params: {
        activityId: activityId,
        activityUserId: activityUserId
      }
    })
  },
  /* 开始直播 */
  startLive (activityId) {
    return utils.ajax({
      method: 'get',
      url: '/initiator/live/start-live',
      params: {
        activityId: activityId
      },
      headers: {
        Authorization: token
      }
    })
  },
  /* 结束直播 */
  stopLive (activityId) {
    return utils.ajax({
      method: 'get',
      url: '/initiator/live/stop-live',
      params: {
        activityId: activityId
      },
      headers: {
        Authorization: token
      }
    })
  },
  /* 查询活动信息 */
  queryActivityInfo (activityId) {
    return utils.ajax({
      method: 'get',
      url: '/initiator/live/info',
      params: {
        activityId: activityId
      },
      headers: {
        Authorization: token
      }
    })
  },
  /* 观看端--活动信息获取 */
  queryWatchActivityInfo (activityId) {
    return utils.ajax({
      method: 'get',
      url: '/frontend/live/info',
      params: {
        activityId: activityId
      }
    })
  }
}
export default LiveManage
