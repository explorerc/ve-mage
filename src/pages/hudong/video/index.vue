<template>
  <div class="play-container">
    <div class="play-video-box" :id="playBoxId" v-if="playType=='live'"></div>
    <div class="play-video-box" :id="playBoxId" v-else-if="playType=='vod'"></div>
    <div class="play-video-box" :id="playBoxId" v-else>
      <img v-if="imageSrc" :src="imageSrc">
    </div>
    <i class="iconfont icon-bofang" v-if="playBtnShow" @click="playVideo"></i>
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
        imageUrl: '', // 暖场视频图片
        recordId: '', // 暖场视频id
        playBtnShow: false,
        playBoxId: `play-vides-${Math.random()}`,
        sdkPlayParam: {
          appId: '',
          accountId: '',
          token: ''
        }
      }
    },
    props: {
      role: {
        type: String,
        default: 'watcher' // 发起端(master), 观看(watcher)
      },
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
    computed: {
      imageSrc () {
        return `${this.$imgHost}/${this.imageUrl}`
      }
    },
    watch: {
      paasParams () {
        this.initComponent()
      }
    },
    methods: {
      /* 初始组件 */
      initComponent () {
        debugger
        if (this.playType === 'live') { // 直播
          if (this.role === 'master') { // 主持人互动端
            this.initPusher()
          } else if (this.role === 'watcher') { // 观看端
            this.initPuller()
          }
        } else if (this.playType === 'warm') { // 暖场
          ActivityManger.queryPassSdkInfo().then((res) => {
            this.sdkPlayParam.appId = res.data.appId
            this.sdkPlayParam.accountId = res.data.accountId
            this.sdkPlayParam.token = res.data.token
          })
          this.queryWarmInfo()
        } else if (this.playType === 'vod') { // 回放
        }
      },
      playVideo () {
        if (this.playType === 'warm') { // 暖场
          this.playWarm()
        }
      },
      /* 播放暖场视频 */
      playWarm () {
        this.$nextTick(() => {
          if (!this.recordId) return
          window.Vhall.ready(() => {
            window.VhallPlayer.init({
              recordId: this.recordId,
              type: 'vod',
              videoNode: this.playBoxId,
              complete: () => {
                this.playBtnShow = false
                window.VhallPlayer.play()
              }
            })
          })
          /* 初始化配置 */
          window.Vhall.config({
            appId: this.sdkPlayParam.appId, // 应用 ID ,必填
            accountId: this.sdkPlayParam.accountId, // 第三方用户唯一标识,必填
            token: this.sdkPlayParam.token // token必填
          })
        })
      },
      queryWarmInfo () {
        ActivityManger.queryWarmInfoById(this.$route.params.id).then((res) => {
          this.imageUrl = res.data.imgUrl
          this.recordId = res.data.recordId
          this.playBtnShow = true
        })
      },
      /* 初始拉流播放插件 */
      initPuller () {
        this.$nextTick(() => {
          this.playComps = new LivePuller(this.paasParams.appId, this.paasParams.roomId, this.playBoxId, this.paasParams.token)
          this.playComps.initLivePlayer(true, () => {
            console.log('----------开始播放----------')
          })
          this.playComps.accountId = this.paasParams.accountId
        })
      },
      /* 初始互动播放插件 */
      initPusher () {
        this.$nextTick(() => {
          this.hostPusher = new HostPusher(this.paasParams.appId, this.paasParams.roomId, this.paasParams.inavId, this.paasParams.token, this.playBoxId)
          this.hostPusher.initHostPusher({
            conf: {
              videoSize: [800, 450, 800, 450]
            }
          }).then(() => {
            // 开启旁路推流
            this.hostPusher.stopBroadCast().then(() => {
              this.hostPusher.startBroadCast().then(() => {
                console.log('----------成开始推流----------')
              }).catch(error => {
                console.error(`旁路推流失败:${error}`)
              })
            }).catch(error => {
              console.error(`停止旁路推流失败:${error}`)
            })
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
    position: relative;
    height: 100%;
    .play-video-box {
      height: 100%;
      overflow: hidden;
      background-color: #313131;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .icon-bofang {
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 1000;
      color: red;
      font-size: 60px;
      &:hover {
        cursor: pointer;
        opacity: .8;
      }
    }
  }
</style>
