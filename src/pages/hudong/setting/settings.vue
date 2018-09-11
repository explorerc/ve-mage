<template>
  <div class="setting-box setting-box-select">
    <div class="form-list">
      <div class="form-row">
        <div class="form-title">推流方式</div>
        <div class="form-content">
          <div class="nav-menu fr">
            <span :class="{active:setting.pushStreamType==0}" @click="changeNav(0)">浏览器发起</span>
            <span :class="{active:setting.pushStreamType==1}" @click="changeNav(1)">第三方推流</span>
          </div>
        </div>
      </div>
      <div class="form-row" v-if="!setting.pushStreamType">
        <div class="form-title">媒体设备</div>
        <div class="form-content">
          <button class="default-button fr" @click="selectDevice">选择设备</button>
        </div>
      </div>
      <div class="form-row" v-else>
        <div class="form-title">推流设置</div>
        <div class="form-content">
          <button class="default-button fr" @click="pushStreamSet">推流设置</button>
        </div>
      </div>
      <div class="form-row">
        <div class="form-title">观众聊天禁言</div>
        <div class="form-content">
          <el-switch
            class="fr"
            v-model="setting.isChart">
          </el-switch>
        </div>
      </div>
      <div class="form-row">
        <div class="form-title">观众端显示在线人数</div>
        <div class="form-content">
          <el-switch
            class="fr"
            v-model="setting.isPersonCount">
          </el-switch>
        </div>
      </div>
      <transition name="left-right">
        <div class="person-count-setting" v-if="setting.isPersonCount">
          <p>当前真实人数：{{initOnlineNum}} 人</p>
          <p>调整后显示人数：{{afterPersonCount}} 人</p>
          <p>在
            <el-select v-model="addPersonTime" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            内增加
            <com-input :value.sync="addPersonCount" :error-tips="countError"></com-input>
            人
          </p>
          <p class="btn-box">
            <button class="primary-button" @click="settingOk">{{addPersoning?'正在执行...':'确定'}}</button>
            <button class="default-button" @click="cancelAddPersonCount">取消</button>
          </p>
        </div>
      </transition>
    </div>
    <!-- 媒体设置 -->
    <message-box
      v-if="deviceShow"
      type="prompt"
      header="媒体设置"
      confirmText="确定"
      width="442px"
      @handleClick="deviceMsgClick">
      <div class="form-list form-message-box device-box">
        <div class="video-box" id="videoBoxId"></div>
        <div class="form-row">
          <div class="form-title fzr">摄像头</div>
          <div class="form-content">
            <el-select v-model="camera" placeholder="请选择">
              <el-option
                v-for="item in cameraDevices"
                :key="item.deviceId"
                :label="item.label"
                :value="item.deviceId">
              </el-option>
            </el-select>
          </div>
        </div>
        <div class="form-row">
          <div class="form-title fzr">麦克风</div>
          <div class="form-content">
            <el-select v-model="mic" placeholder="请选择">
              <el-option
                v-for="item in micDevices"
                :key="item.deviceId"
                :label="item.label"
                :value="item.deviceId">
              </el-option>
            </el-select>
          </div>
        </div>
        <p class="update-device fzr" @click="getDevice">刷新设备</p>
      </div>
    </message-box>
    <!-- 推流设置 -->
    <message-box
      v-if="pushStreamShow"
      type="prompt"
      header="推流设置"
      confirmText="确定"
      width="660px"
      @handleClick="handleMsgClick">
      <div class="form-list form-message-box">
        <h3 style="text-align: center;">正在使用第三方推流工具发起直播</h3>
        <div class="form-row">
          <div class="form-title fzr">RTMP URL</div>
          <div class="form-content">
            <com-input :value.sync="rtmpUrl"></com-input>
            <button class="default-button" @click="copyInput(0)">复制</button>
          </div>
        </div>
        <div class="form-row">
          <div class="form-title fzr">串流码/播放路径</div>
          <div class="form-content">
            <com-input :value.sync="streamPlayUrl"></com-input>
            <button class="default-button" @click="copyInput(1)">复制</button>
          </div>
        </div>
        <div class="form-row">
          <div class="form-title fzr">使用场景：</div>
          <div class="form-content">
            大会直播、活动拍摄等使用OBS、VMIX等第三方推流软件进行直播的场景
          </div>
        </div>
        <div class="form-row">
          <div class="form-title fzr">使用步骤：</div>
          <div class="form-content">
            <p>1.在第三方推流工具中添加RTMP URL与串流码。</p>
            <p style="line-height: 10px;">2.使用第三方推流工具进行推流。</p>
            <p>3.在右上角点击开始直播按钮。</p>
          </div>
        </div>
      </div>
    </message-box>
  </div>
</template>

<script>
  import HostPusher from 'src/components/common/video/push/HostPusher'
  import CountTo from 'src/utils/countTo'
  import LiveHttp from 'src/api/live'

  const storageKey = {
    'CAMERA': 'SELECT_CAMERA',
    'MIC': 'SELECT_MIC'
  }
  export default {
    name: 'settings',
    data () {
      return {
        pushStreamShow: false,
        deviceShow: false,
        addPersonCount: '30',
        addCount: 0,
        rtmpUrl: '',
        streamPlayUrl: '',
        activityId: '',
        addPersoning: false,
        initOnlineNum: 0, // 当前在线人数
        countError: '', // 错误信息
        setting: {
          isChart: false, // 是否聊天禁言
          isPersonCount: false, // 是否在线人数
          pushStreamType: 0 // 推流方式
        },
        cameraDevices: [], // 相机设备
        micDevices: [], // 麦克风设备
        camera: '',
        mic: '',
        options: [
          { value: 10, label: '10秒' },
          { value: 30, label: '30秒' },
          { value: 60, label: '1分钟' },
          { value: 180, label: '3分钟' },
          { value: 300, label: '5分钟' },
          { value: 600, label: '10分钟' },
          { value: 900, label: '15分钟' },
          { value: 1800, label: '30分钟' },
          { value: 2700, label: '45分钟' },
          { value: 3600, label: '60分钟' },
          { value: 5400, label: '90分钟' },
          { value: 7200, label: '120分钟' },
          { value: 9000, label: '150分钟' },
          { value: 10800, label: '180分钟' }
        ],
        addPersonTime: 30
      }
    },
    props: {
      paasParams: {
        type: Object,
        required: true,
        default: {
          appId: '',
          roomId: '',
          inavId: '', // 互动id
          token: '',
          accountId: ''
        }
      }
    },
    computed: {
      /* 调整后显示人数 */
      afterPersonCount () {
        this.countError = ''
        if (!this.addPersonCount) return this.addCount + parseInt(this.initOnlineNum)
        return parseInt(this.addPersonCount) + parseInt(this.initOnlineNum)
      }
    },
    watch: {
      setting: {
        handler () {
          this.liveSetting()
        },
        deep: true
      },
      paasParams () {
        this.querySettingInfo()
      }
    },
    created () {
      const queryId = this.$route.params.id
      if (!queryId) {
        this.$router.go(-1)
      }
      this.activityId = queryId
    },
    methods: {
      /* 点击确定按钮 */
      settingOk () {
        if (this.addPersoning) return
        if (!this.addPersonCount) {
          this.countError = '不能为空'
          return
        } else if (!/^[0-9]+$/.test(this.addPersonCount)) {
          this.countError = '格式不正确'
          return
        }
        this.$emit('settingOk', {
          cameraDevices: this.camera,
          micDevices: this.mic,
          addPersonCount: this.addPersonCount,
          addPersonTime: this.addPersonTime,
          ...this.setting
        })
        this.addLivePersonCount()
      },
      /* 查询设置信息 */
      querySettingInfo () {
        LiveHttp.querySettingInfo(this.activityId).then(res => {
          this.setting = {
            isChart: res.data.gag === 'Y',
            isPersonCount: res.data.showOnlineNum === 'Y', // 是否在线人数
            pushStreamType: res.data.pushType === 'THIRD' // 推流方式
          }
          this.initOnlineNum = res.data.initOnlineNum
        })
      },
      /* 点击选择设备 */
      selectDevice () {
        this.deviceShow = true
        this.initPusher()
      },
      pushStreamSet () {
        this.pushStreamShow = true
        LiveHttp.getPushUrl(this.activityId).then(res => {
          if (res.code === 200 && res.data) {
            this.rtmpUrl = res.data.push_address
            this.streamPlayUrl = res.data.stream_number
          }
        })
      },
      /* 直播设置 */
      liveSetting () {
        LiveHttp.setLiveSetting({
          activityId: this.activityId,
          gag: this.setting.isChart ? 'Y' : 'N',
          pushType: this.setting.pushStreamType ? 'THIRD' : 'BROESER',
          showOnlineNum: this.setting.isPersonCount ? 'Y' : 'N'
        })
      },
      /* 增加在线人数 */
      addLivePersonCount () {
        this.addPersoning = true
        this.addCount = parseInt(this.addPersonCount)
        this.addPersonCount = ''
        CountTo.start(0, this.addCount, this.addPersonTime, 0.1, (count) => {
          LiveHttp.addLivePersons({
            activityId: this.activityId,
            num: count
          }).catch(() => {
            CountTo.stop()
          })
          if (this.addCount === count) {
            this.addPersoning = false
          }
        })
      },
      cancelAddPersonCount () {
        this.addPersoning = false
        CountTo.stop()
      },
      /* 初始化插件 */
      initPusher () {
        this.$nextTick(() => {
          this.hostPusher = new HostPusher(
            this.paasParams.appId,
            this.paasParams.roomId,
            this.paasParams.inavId,
            this.paasParams.token, 'videoBoxId')
          this.hostPusher.initHostPusher().then(() => {
            this.getDevice()
          }).catch(error => {
            console.log(error)
          })
          this.hostPusher.accountId = this.paasParams.accountId
        })
      },
      /* 获取设备 */
      getDevice () {
        this.hostPusher.getDevices().then(res => {
          this.cameraDevices = res.cameras
          this.micDevices = res.mics
          this.camera = sessionStorage.getItem(storageKey.CAMERA) || this.cameraDevices[0].deviceId
          this.mic = sessionStorage.getItem(storageKey.MIC) || this.micDevices[0].deviceId
        }).catch(e => {
          console.log(e)
        })
      },
      /* 切换菜单 */
      changeNav (idx) {
        this.setting.pushStreamType = idx
      },
      handleMsgClick () {
        this.pushStreamShow = false
      },
      deviceMsgClick (e) {
        this.deviceShow = false
        if (e.action === 'confirm') {
          sessionStorage.setItem(storageKey.CAMERA, this.camera)
          sessionStorage.setItem(storageKey.MIC, this.mic)
          this.hostPusher.changeSetting({
            video: this.camera,
            audio: this.mic
          })
        }
      },
      /* 复制 */
      copyInput (type) {
        const copyStr = type ? this.streamPlayUrl : this.rtmpUrl
        copyStr.copyClipboard(() => {
          this.$toast({
            header: `提示`,
            content: '复制成功',
            autoClose: 1000,
            position: 'top-center'
          })
        })
      }
    }
  }
</script>
<style lang="scss">
.setting-box-select {
  .el-select {
    .el-input__inner {
      border: solid 1px #e5e5e5;
    }
  }
  .ve-message-box__wrapper .ve-message-box .ve-message-box__btns {
    text-align: center;
  }
}
</style>
<style lang="scss" scoped>
@import 'assets/css/mixin.scss';

.setting-box {
  width: 100%;
  max-width: 500px;
  height: calc(100% - 20px);
  padding: 20px 0 0;
  border: solid 1px $color-bd;
  margin: 20px 0;
  font-size: 14px;
  background-color: $color-bg-sub;
}

.nav-menu {
  font-size: 0;
  border: solid 1px $color-bd;
  border-radius: 4px;
  height: 40px;
  line-height: 38px;
  span {
    display: inline-block;
    width: 84px;
    font-size: 14px;
    text-align: center;
    transition: background-color 0.2s;
    &.active {
      background-color: $color-default-active;
    }
    &:hover {
      cursor: pointer;
      opacity: 0.9;
    }
  }
}

.form-list {
  overflow: hidden;
  .form-row {
    display: flex;
    line-height: 40px;
    padding: 10px 20px;
    .form-title {
      width: 140px;
      padding-right: 10px;
    }
    .form-content /deep/ {
      flex: 1;
      .el-switch {
        line-height: 40px;
        height: 40px;
      }
    }
  }
}

.person-count-setting {
  position: relative;
  padding: 20px;
  border-top: solid 1px $color-bd;
  border-bottom: solid 1px $color-bd;
  background-color: #fff;
  &:after {
    display: block;
    position: absolute;
    content: '';
    top: -8px;
    right: 34px;
    height: 14px;
    width: 14px;
    border-top: solid 1px $color-bd;
    border-right: solid 1px $color-bd;
    transform: rotate(-45deg);
    background-color: #fff;
  }
  p {
    line-height: 40px;
    .com-input /deep/ {
      width: 80px;
      margin: 0 10px;
    }
    .el-select {
      width: 100px;
    }
  }
  .btn-box {
    text-align: center;
    margin: 20px 0 10px 0;
    button {
      margin: 0 10px;
    }
  }
}

.form-message-box {
  margin-top: 20px;
  .form-row {
    padding: 10px 0;
    .form-title {
      width: 120px;
    }
    .com-input {
      width: 310px;
    }
    .default-button {
      margin-left: 10px;
    }
  }
}

.device-box /deep/ {
  margin-top: 10px;
  .form-row {
    .form-title {
      width: 54px;
      text-align: left;
    }
    .el-select {
      width: 348px;
    }
  }
  .video-box {
    position: relative;
    width: 400px;
    height: 300px;
    overflow: hidden;
    margin: 0 auto 10px auto;
    background-color: rgba(0, 0, 0, 0.8);
  }
  .update-device {
    text-align: right;
    color: $color-blue;
    &:hover {
      cursor: pointer;
      color: $color-blue-hover;
    }
  }
}
</style>
