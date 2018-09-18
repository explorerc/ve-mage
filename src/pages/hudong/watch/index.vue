<template>
  <div class="watcher">
    <div class="master-box">
      <div class="master-header">
        <img class="header-logo" src="../../../assets/image/avatar@2x.png">
        <div class="header-info">
          <h3>Adobe2019技术峰会-设计专场</h3>
          <span>{{activityInfo.statusName}}</span>
          <span>房间号:{{activityInfo.id}}</span>
          <span>在线人数：{{activityInfo.countDown}}</span>
        </div>
        <div class="header-btns fr">
          <button class="default-button">活动官网</button>
          <button class="default-button">推荐关注</button>
          <button class="default-button">订阅</button>
        </div>
      </div>
      <div class="master-play-box clearfix">
        <div class="master-box-left">
          <play-video role="watcher" :play-type="playType" :startInit="startInit"></play-video>
        </div>
        <div class="master-box-right">
          <div class="master-content">
            <div class="content-box">
            </div>
            <div class="content-menu">
              <span>用户未登录</span>
              <span>个人中心</span>
              <span>我的奖品</span>
              <span>推荐商品</span>
              <div class="menu-bottom">
                <span>分享</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="activity-info">
      <div class="activity-menu">
        <span class="menu-item">直播简介</span>
      </div>
      <div class="activity-content">
        {{activityInfo.description}}
      </div>
    </div>
  </div>
</template>

<script>
  import LiveHttp from 'src/api/live'
  import PlayVideo from '../video/index' // 直播推流回放组件
  const playTypes = {
    'PREPARE': 'pre',
    'LIVING': 'live',
    'FINISH': 'end',
    'PLAYBACK': 'vod'
  }
  const playStatuTypes = {
    'PREPARE': '预告',
    'LIVING': '直播中',
    'FINISH': '结束',
    'PLAYBACK': '回放'
  }
  export default {
    name: 'watch',
    components: {PlayVideo},
    data () {
      return {
        activityId: '',
        playType: 'live', // 直播(live), 回放(vod), 暖场(warm), 结束(end)，预告(pre)
        startInit: false,
        activityInfo: {}
      }
    },
    created () {
      const queryId = this.$route.params.id
      if (!queryId) {
        this.$router.go(-1)
      }
      this.activityId = queryId
      this.initPage()
    },
    methods: {
      async initPage () {
        await this.initToken()
        /* 查询详情 */
        await LiveHttp.queryWatchActivityInfo(this.activityId).then(res => {
          this.activityInfo = res.data.activity
          this.activityInfo.statusName = playStatuTypes[this.activityInfo.status]
          this.playType = playTypes[this.activityInfo.status]
          this.startInit = true
          console.log(res)
        })
      },
      /* 初始化，获取权限 */
      initToken () {
        return LiveHttp.getLiveTtoken(this.activityId)
      }
    }
  }
</script>
<style scoped lang="scss" src="../css/watch.scss"></style>
