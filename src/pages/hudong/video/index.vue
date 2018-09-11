<template>
  <div class="play-container">
    <div class="play-video-box" :id="playBoxId" v-if="playType=='live'"></div>
    <div class="play-video-box" :id="playBoxId" v-else></div>
  </div>
</template>

<script>
  import ActivityManger from 'src/api/activity-manger'
  import LivePuller from 'src/components/common/video/pull/LivePuller'
  import HostPusher from 'src/components/common/video/push/HostPusher'

  export default {
    name: 'index',
    data () {
      return {
        playComps: {},
        playBoxId: `play-vides-${Math.random()}`
      }
    },
    props: {
      playType: {
        type: String,
        required: true,
        default: 'live' // 直播(live), 回放(vod), 暖场(warm)
      },
      paasParams: {
        type: Object,
        required: true,
        default: {
          appId: '',
          roomId: '',
          inavId: '',
          token: '',
          accountId: ''
        }
      }
    },
    watch: {
      paasParams () {
        this.initComponent()
      }
    },
    methods: {
      initComponent () {
        if (this.playType === 'live') { // 直播
          this.playComps = new LivePuller(this.paasParams.appId, this.paasParams.roomId, this.playBoxId, this.paasParams.token)
          this.initPusher()
        } else if (this.playType === 'warm') { // 暖场
          this.queryWarmInfo()
        }
      },
      queryWarmInfo () {
        ActivityManger.queryWarmInfoById(this.$route.params.id).then((res) => {
          console.log(res)
        })
      },
      /* 初始化插件 */
      initPusher () {
        this.$nextTick(() => {
          this.hostPusher = new HostPusher(
            this.paasParams.appId,
            this.paasParams.roomId,
            this.paasParams.inavId,
            this.paasParams.token, this.playBoxId)
          this.hostPusher.initHostPusher().then(() => {
            this.getDevice()
          }).catch(error => {
            console.log(error)
          })
          this.hostPusher.accountId = this.paasParams.accountId
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .play-container {
    height: 100%;
    .play-video-box {
      height: 100%;
      background-color: #313131;
    }
  }
</style>
