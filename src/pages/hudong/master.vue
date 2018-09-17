<template>
  <div class="master-box">
    <div class="master-play-box clearfix">
      <div class="master-box-left">
        <div class="play-header">当前画面为摄像头回显画面，您还未开始直播，如需开播，请点击【开始直播】</div>
        <div class="play-video-box">
          <play-video
            role="master"
            :play-type="playType"
            :startInit="startInit"
            @startPull="startPull"></play-video>
        </div>
      </div>
      <div class="master-box-right">
        <div class="master-header">
          <div class="header-item">
            <button class="primary-button" v-if="liveBtnShow" @click="starAndEndtLive(true)">开始直播</button>
            <button class="primary-button" v-else @click="starAndEndtLive(false)">结束直播</button>
            <span>{{liveStartTime}}</span>
          </div>
          <div class="header-item">
            <div>在线人数</div>
            <span>142</span>
          </div>
          <div class="header-item">
            <div>网络状况</div>
            <span>网络信号</span>
          </div>
        </div>
        <div class="master-content">
          <div class="content-box">
            <transition name="fade" mode="out-in">
              <setting v-if="settingShow" :paasParams="paasParams"></setting>
            </transition>
          </div>
          <div class="content-menu">
            <span>聊天</span>
            <span>成员</span>
            <span>数据</span>
            <span>商品展示</span>
            <div class="menu-bottom">
              <span>分享</span>
              <span @click="clickSetting">设置</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import LiveHttp from 'src/api/live'
  import Setting from './setting/settings' // 直播设置
  import PlayVideo from './video/index' // 直播推流回放组件
  // {'PREPARE': '预告'},
  // {'LIVING': '直播中'},
  // {'FINISH': '已结束'},
  // {'PLAYBACK': '回放'}
  const playStatus = {
    'PREPARE': 'PREPARE',
    'LIVING': 'LIVING',
    'FINISH': 'FINISH',
    'PLAYBACK': 'PLAYBACK'
  }
  export default {
    name: 'master',
    components: { Setting, PlayVideo },
    data () {
      return {
        activityId: '',
        settingShow: false,
        startInit: false,
        playType: 'live', // 直播(live), 回放(vod), 暖场(warm)
        livingTime: 0,
        setIntervalHandler: 0,
        activityInfo: {
          status: ''
        },
        paasParams: {
          appId: '',
          roomId: '',
          inavId: '', // 互动id
          token: '',
          accountId: ''
        }
      }
    },
    computed: {
      liveBtnShow () {
        const status = this.activityInfo.status
        if (status === playStatus.PREPARE || status === playStatus.FINISH || status === playStatus.PLAYBACK) {
          return true
        }
        return false
      },
      liveStartTime () {
        return this.formatDate(this.livingTime)
      }
    },
    beforeDestroy () {
      console.log('beforeDestroy')
      clearInterval(this.setIntervalHandler)
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
        await LiveHttp.queryActivityInfo(this.activityId).then(res => {
          this.livingTime = 0
          this.activityInfo = res.data.activity
          if (this.activityInfo.status === playStatus.LIVING) {
            this.startInit = true
          } else {
            this.startInit = false
          }
        })
      },
      clickSetting () {
        this.settingShow = true
      },
      /* 开始推流  */
      startPull () {
        clearInterval(this.setIntervalHandler)
        this.setIntervalHandler = setInterval(() => {
          this.livingTime++
        }, 1000)
      },
      /* 初始化，获取权限 */
      initToken () {
        return LiveHttp.getLiveTtoken(this.activityId).then(res => {
          if (this.playType === 'live') {
            this.initPusherParams()
          }
        })
      },
      /* 初始化推拉流直播插件参数 */
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
      },
      /* 开始结束直播 */
      starAndEndtLive (type) {
        if (!this.startInit) {
          LiveHttp.startLive(this.activityId).then(res => {
            if (res.code === 200) {
              this.activityInfo.status = playStatus.LIVING
              this.startInit = type
              this.$toast({
                header: `提示`,
                content: '成功开始直播',
                autoClose: 1000,
                position: 'top-center'
              })
            }
          })
        } else {
          clearInterval(this.setIntervalHandler)
          LiveHttp.stopLive(this.activityId).then(res => {
            if (res.code === 200) {
              this.activityInfo.status = playStatus.FINISH
              this.startInit = type
              this.$toast({
                header: `提示`,
                content: '成功结束直播',
                autoClose: 1000,
                position: 'top-center'
              })
            }
          })
        }
      },
      formatDate (cTime) {
        let h = ((cTime / 3600 >> 0) + '').padStart(2, 0)
        let m = ((cTime / 60 % 60 >> 0) + '').padStart(2, 0)
        let s = ((cTime % 60 >> 0) + '').padStart(2, 0)
        return h > 0 ? `${h}:${m}:${s}` : `${m}:${s}`
      }
    }
  }
</script>

<style scoped lang="scss" src="./css/watch.scss"></style>
