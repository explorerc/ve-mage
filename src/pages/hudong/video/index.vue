<template>
  <div class="play-container">
    <div class="play-video-box" :id="playBoxId" v-if="playType=='live'"></div>
    <div class="play-video-box" :id="playBoxId" v-else-if="playType=='vod'">
      <div v-html="this.outLineLink" style="width:100%;height: 100%;"></div>
    </div>
    <div class="play-video-box" :id="playBoxId" v-else-if="playType=='end'">
      <span class="end-box">直播已结束</span>
    </div>
    <div class="play-video-box" :id="playBoxId" v-else>
      <img v-if="imageSrc" :src="imageSrc">
    </div>
    <i class="iconfont icon-bofang" v-if="playBtnShow" @click="playVideo"></i>
    <div class="control-video-box" v-if="playType=='vod'||playType=='warm'">
      <video-control
        :currentTime="currentTime"
        :totalTime="totalTime"
        @mute="mutoAuto"
        @change="changeProgress"></video-control>
    </div>
  </div>
</template>

<script>
  import LiveHttp from 'src/api/live'
  import ActivityManger from 'src/api/activity-manger'
  import LivePuller from 'src/components/common/video/pull/LivePuller'
  import HostPusher from 'src/components/common/video/push/HostPusher'
  import VideoControl from './control'

  export default {
    name: 'index',
    components: { VideoControl },
    data () {
      return {
        playComps: {},
        playBtnShow: false,
        imageUrl: '',
        recordId: '', // 视频id
        outLineLink: '', // 外链
        playBoxId: `play-vides-${Math.random()}`,
        activityId: '',
        currentTime: 1000,
        totalTime: 3601,
        setIntervalHandler: 0,
        sdkPlayParam: {
          appId: '',
          accountId: '',
          token: ''
        },
        paasParams: {
          appId: '',
          roomId: '',
          inavId: '',
          token: '',
          accountId: ''
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
        default: '' // 直播(live), 回放(vod), 暖场(warm), 结束(end)
      },
      startInit: {
        type: Boolean,
        required: true,
        default: false
      }
    },
    computed: {
      imageSrc () {
        return `${this.$imgHost}/${this.imageUrl}`
      }
    },
    watch: {
      startInit (newVal) {
        if (newVal) {
          this.initComponent()
        } else {
          this.stopPlay()
        }
      }
    },
    beforeDestroy () {
      console.log('--video-com--beforeDestroy')
      clearInterval(this.setIntervalHandler)
      // 发起端直播
      if (this.hostPusher) this.hostPusher.destroy()
      // 观看端直播
      if (this.playComps) this.playComps.destroy()
      // 回放和暖场视频
      if (window.VhallPlayer) window.VhallPlayer.destroy()
    },
    created () {
      const queryId = this.$route.params.id
      if (!queryId) {
        this.$router.go(-1)
      }
      this.activityId = queryId
    },
    methods: {
      /* 初始组件 */
      initComponent () {
        if (this.playType === 'live') { // 直播
          this.initLivePlay()
        } else if (this.playType === 'warm') { // 暖场
          this.queryWarmInfo()
        } else if (this.playType === 'vod') { // 回放
          this.initPlayBack()
        } else if (this.playType === 'end') { // 结束
          this.playEnd()
        }
      },
      playEnd () {
      },
      playVideo () {
        if (this.playType === 'warm') { // 暖场
          this.playBackVideo()
        }
      },
      /* 初始化直播 */
      initLivePlay () {
        LiveHttp.getPaasParam(this.activityId).then(res => {
          this.paasParams = {
            appId: res.data.appId,
            roomId: res.data.liveRoom,
            inavId: res.data.hdRoom, // 互动id
            token: res.data.token,
            accountId: res.data.accountId
          }
          if (this.role === 'master') { // 主持人互动端
            this.initPusher()
          } else if (this.role === 'watcher') { // 观看端
            this.initPuller()
          }
        })
      },
      initPlayBack () {
        ActivityManger.queryPlayBackInfoById(this.activityId).then(res => {
          if (!(res.code === 200 && res.data)) return
          this.imageUrl = res.data.cover
          if (res.data.replay.type === 'LINK') { // 外链
            this.outLineLink = res.data.replay.link
          } else if (res.data.replay.type === 'VIDEO' || res.data.replay.type === 'SLICE') { // 回放视频
            this.recordId = res.data.replay.video
            this.totalTime = res.data.replay.duration
            this.playBackVideo()
          }
        })
      },
      /* 播放暖场视频 */
      playBackVideo () {
        LiveHttp.queryRegActivity(this.activityId).then(res => {
          LiveHttp.queryPaasParams(this.activityId, res.data.activityUserId).then((res) => {
            const appId = res.data.appId
            const accountId = res.data.accountId
            const token = res.data.token
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
                    this.dealWithVideo()
                  }
                })
              })
              /* 初始化配置 */
              window.Vhall.config({
                appId: appId, // 应用 ID ,必填
                accountId: accountId, // 第三方用户唯一标识,必填
                token: token // token必填
              })
            })
          })
        })
      },
      dealWithVideo () {
        clearInterval(this.setIntervalHandler)
        this.setIntervalHandler = setInterval(() => {
          this.currentTime = window.VhallPlayer.getCurrentTime()
          if (this.totalTime === this.currentTime) {
            clearInterval(this.setIntervalHandler)
          }
        }, 1000)
      },
      queryWarmInfo () {
        ActivityManger.queryWarmInfoById(this.activityId).then((res) => {
          this.imageUrl = res.data.imgUrl
          this.recordId = res.data.recordId
          this.totalTime = parseInt(res.data.record.duration)
          this.playBtnShow = true
          this.playBackVideo()
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
            this.pullBroadCast()
          }).catch(error => {
            console.log(error)
          })
          this.hostPusher.accountId = this.paasParams.accountId
        })
      },
      pullBroadCast () {
        this.hostPusher.stopBroadCast().then(() => {
          this.hostPusher.startBroadCast().then(() => {
            this.$emit('startPull')
            console.log('----------旁路推流成功----------')
          }).catch(error => {
            console.error(`旁路推流失败:${error}`)
            // 旁路推流失败,延迟递归继续旁路推流
            let st = setTimeout(() => {
              clearTimeout(st)
              this.pullBroadCast()
            }, 500)
          })
        }).catch(error => {
          console.error(`停止旁路推流失败:${error}`)
        })
      },
      stopPlay () {
        if (this.playType === 'live') { // 直播
          this.hostPusher.stop()
        }
      },
      /* 开启，禁止声音 */
      mutoAuto (e) {
        if (this.playType === 'live') { // 直播
          if (this.role === 'master') { // 主持人互动端
            this.hostPusher.mute(e)
          } else if (this.role === 'watcher') { // 观看端
            this.playComps.volume = e ? 0 : 50
          }
        } else if (this.playType === 'warm') { // 暖场
        } else if (this.playType === 'vod') { // 回放
        }
      },
      changeProgress (e) {
        console.log(e)
      }
    }
  }
</script>

<style scoped lang="scss">
.play-container {
  position: relative;
  height: 100%;
  overflow: hidden;
  .play-video-box {
    height: 100%;
    overflow: hidden;
    background-color: #313131;
    img {
      width: 100%;
      height: 100%;
    }
    .end-box {
      display: block;
      color: red;
      line-height: 500px;
      text-align: center;
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
      opacity: 0.8;
    }
  }
  .control-video-box {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 50px;
    //animation: control-animation-hide 1s linear;
  }
  /*&:hover {*/
  /*.control-box {*/
  /*//animation: control-animation-show .5s linear both;*/
  /*}*/
  /*}*/
  @keyframes control-animation-show {
    from {
      bottom: -50px;
    }
    to {
      bottom: 0;
    }
  }
  @keyframes control-animation-hide {
    from {
      bottom: 0;
    }
    to {
      bottom: -50px;
    }
  }
}
</style>
