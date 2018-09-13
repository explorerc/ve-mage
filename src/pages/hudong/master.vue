<template>
  <div class="master-box">
    <div class="master-play-box clearfix">
      <div class="master-box-left">
        <play-video role="master" :play-type="playType" :startInit="startInit"></play-video>
      </div>
      <div class="master-box-right">
        <div class="master-header">
          <button class="primary-button" @click="starAndEndtLive">{{startInit?'结束直播':'开始直播'}}</button>
        </div>
        <div class="master-content">
          <div class="content-box">
            <transition name="left-right">
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
  // {value: '', label: '全部'},
  // {value: 'PREPARE', label: '预告'},
  // {value: 'LIVING', label: '直播中'},
  // {value: 'FINISH', label: '已结束'},
  // {value: 'PLAYBACK', label: '回放'}
  export default {
    name: 'master',
    components: {Setting, PlayVideo},
    data () {
      return {
        activityId: '',
        settingShow: false,
        startInit: false,
        playType: 'live', // 直播(live), 回放(vod), 暖场(warm)
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
      this.initPage()
    },
    methods: {
      async initPage () {
        await this.initToken()
        /* 查询详情 */
        await LiveHttp.queryActivityInfo(this.activityId).then(res => {
          this.startInit = res.data.activity.status === 'FINISH'
        })
      },
      clickSetting () {
        this.settingShow = true
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
      starAndEndtLive () {
        this.startInit = !this.startInit
        if (this.startInit) {
          LiveHttp.startLive(this.activityId).then(res => {
            if (res.code === 200) {
              this.$toast({
                header: `提示`,
                content: '成功开始直播',
                autoClose: 1000,
                position: 'top-center'
              })
            }
          })
        } else {
          LiveHttp.stopLive(this.activityId).then(res => {
            if (res.code === 200) {
              this.$toast({
                header: `提示`,
                content: '成功结束直播',
                autoClose: 1000,
                position: 'top-center'
              })
            }
          })
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "assets/css/mixin.scss";

  .master-box {
    .master-play-box {
      position: relative;
      height: 800px;
      .master-box-left {
        margin-right: 450px;
        height: 100%;
      }
      .master-box-right {
        position: absolute;
        top: 0;
        right: 0;
        width: 450px;
        height: 900px;
        background-color: #fff;
        .master-header {
          height: 80px;
        }
        .master-content {
          display: flex;
          height: calc(100% - 80px);
          border-top: solid 1px $color-bd;
          border-bottom: solid 1px $color-bd;
          box-sizing: border-box;
          .content-menu {
            position: relative;
            height: 100%;
            width: 80px;
            text-align: center;
            background-color: #fff;
            span {
              display: block;
              font-size: 12px;
              padding: 8px 0;
              border-bottom: solid 1px $color-bd;
              &:hover {
                cursor: pointer;
                color: $color-default-hover;
              }
            }
            .menu-bottom {
              position: absolute;
              bottom: 0;
              left: 0;
              width: 100%;
              border-top: solid 1px $color-bd;
              span:last-child {
                border: none;
              }
            }
          }
          .content-box {
            height: 100%;
            flex: 1;
            border-left: solid 1px $color-bd;
            border-right: solid 1px $color-bd;
            box-sizing: border-box;
          }
        }
      }
    }
  }
</style>
