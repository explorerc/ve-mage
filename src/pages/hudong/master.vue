<template>
  <div class="master-box">
    <div class="master-play-box clearfix">
      <div class="master-box-left">
        <play-video :play-type="playType" :paasParams="paasParams"></play-video>
      </div>
      <div class="master-box-right">
        <setting v-if="settingShow" :paasParams="paasParams"></setting>
      </div>
    </div>
  </div>
</template>

<script>
  import LiveHttp from 'src/api/live'
  import Setting from './setting/settings' // 直播设置
  import PlayVideo from './video/index' // 直播推流回放组件

  export default {
    name: 'master',
    components: {Setting, PlayVideo},
    data () {
      return {
        activityId: '',
        settingShow: false,
        playType: 'warm', // 直播(live), 回放(vod), 暖场(warm)
        paasParams: {
          appId: '',
          roomId: '',
          inavId: '', // 互动id
          token: '',
          accountId: ''
        }
      }
    },
    created () {
      const queryId = this.$route.params.id
      if (!queryId) {
        this.$router.go(-1)
      }
      this.activityId = queryId
      // this.initPusherParams()
      this.initToken()
    },
    methods: {
      initToken () {
        LiveHttp.getLiveTtoken(this.activityId).then(res => {
          this.settingShow = true
          this.initPusherParams()
        })
      },
      /* 初始化插件 */
      initPusherParams () {
        LiveHttp.getPaasParam(this.activityId).then(res => {
          this.paasParams = {
            appId: res.data.appId,
            roomId: res.data.liveRoom,
            inavId: res.data.hdRoom, // 互动id
            token: res.data.token,
            accountId: res.data.accountId
          }
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .master-box {
    .master-play-box {
      position: relative;
      height: 800px;
      .master-box-left {
        margin-right: 400px;
        height: 100%;
      }
      .master-box-right {
        position: absolute;
        top: 0;
        right: 0;
        width: 400px;
        height: 500px;
        background-color: #8E9198;
      }
    }
  }
</style>
