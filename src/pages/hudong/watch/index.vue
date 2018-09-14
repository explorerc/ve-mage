<template>
  <div class="master-box">

    <div class="master-play-box clearfix">
      <div class="master-box-left">
        <div class="play-header">当前画面为摄像头回显画面，您还未开始直播，如需开播，请点击【开始直播】</div>
        <play-video role="watcher" :play-type="playType" :startInit="startInit"></play-video>
      </div>
      <div class="master-box-right">
        <div class="master-header">
        </div>
        <div class="master-content">
          <div class="content-box">
          </div>
          <div class="content-menu">
            <span>聊天</span>
            <span>数据</span>
            <div class="menu-bottom">
              <span>分享</span>
            </div>
          </div>
        </div>
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
          this.playType = playTypes[this.activityInfo.status]
          this.startInit = true
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
