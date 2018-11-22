<template>
  <div class="video-container"
       v-if="value.enable">
    <div ref="target"
         class="video-content">
      <div v-if="value.videoType==='upload'"
           :id="videoId"
           class="video-wrap"></div>
      <div v-if="value.videoType==='url'"
           v-html="value.url"
           class="iframe-wrap"></div>
    </div>
    <com-edit ref="editTarget" class="video-edit-content">
      <div class="nav-blank-title">视频</div>
      <label class='label-spe  label-spe-inner'>视频类型</label>
      <com-tabs :value="value.videoType" @change="checkInit">
        <com-tab index="upload">
          <div slot="label">
            <el-radio v-model="value.videoType" label="upload">上传视频</el-radio>
          </div>
          <div class="upload-field">
            <div class='upload-video-box' @click="doUpload">
              <i class="upload-video-icon"></i>
              <span class='desc' :class='{"error":msgError}'>{{uploadErrorMsg}}</span>
              <span v-if="percentVideo" class="progress"><i  :style="{ 'width':`${percentVideo}%` }"></i></span>
            </div>
            <div class="hide">
              <input type="file" ref="upload" :id="uploadId"/>
              <input type="text" :id='nameId'>
              <button ref="confirmUpload" :id="confirmId" class="saveBtn"></button>
            </div>
          </div>
        </com-tab>
        <com-tab index="url">
          <div slot="label">
            <el-radio v-model="value.videoType" label="url">引用视频</el-radio>
          </div>
          <div>
            <com-input class="link-input" :rows="6" type="textarea" placeholder="请输入嵌入视频url: <iframe src='https://cnstatic01.e.vhall.com/static/bg.mp4' frameborder=0 'allowfullscreen'></iframe>" v-model="value.url"></com-input>
          </div>
        </com-tab>
      </com-tabs>
    </com-edit>
  </div>
</template>

<script>
import eventBus from 'src/utils/eventBus.js'
import editMixin from './mixin'
import ComEdit from './edit'
import activityService from 'src/api/activity-service'
export default {
  mixins: [editMixin],
  components: {
    ComEdit
  },
  data () {
    return {
      uploadId: `vid_upload_${Math.floor(Math.random() * 10000)}`,
      videoId: `vid_${Math.floor(Math.random() * 10000)}`,
      confirmId: `vid_confirm_${Math.floor(Math.random() * 10000)}`,
      nameId: `vid_name_${Math.floor(Math.random() * 10000)}`,
      vhallParams: {},
      percentVideo: 0,
      uploadErrorMsg: '视频仅支持mp4格式，文件大小不超过200M',
      msgError: false
    }
  },
  methods: {
    doUpload () {
      this.$refs.upload.click()
    },
    init () {
      /* $nextTick保证dom被渲染之后进行paas插件初始化 */
      this.$nextTick(() => {
      // 初始化pass上传插件
        this.initVhallUpload()
        if (this.value.videoType === 'upload' && this.value.recordId) {
          this.$nextTick(() => {
            this.initVideo()
          })
        }
      })
    },
    initVhallUpload () {
      window.vhallCloudDemandSDK(`#${this.uploadId}`, {
        params: {
          confirmBtn: `#${this.confirmId}`, // 保存按钮的ID
          name: `#${this.nameId}`,
          sign: this.vhallParams.sign,
          signed_at: this.vhallParams.signedAt,
          app_id: this.vhallParams.appId
        },
        beforeUpload: (file) => {
          this.msgError = false
          this.uploadErrorMsg = '准备上传...'
          if (file.type !== 'video/mp4') {
            this.uploadErrorMsg = '不支持该视频格式，请上传mp4格式视频'
            this.msgError = true
            return false
          } else if (file.size / 1024 / 1024 > this.videoSize) {
            this.uploadErrorMsg = '视频太大，请不要大于200M'
            this.msgError = true
            return false
          }
          this.percentVideo = 0
          return true
        },
        progress: (percent) => {
          this.uploadErrorMsg = '上传中...'
          this.percentVideo = parseFloat(percent.replace('%', ''))
        },
        uploadSuccess: () => {
          this.uploadErrorMsg = '上传成功!'
          this.$refs.confirmUpload.click()
        },
        saveSuccess: (res) => {
          this.value.recordId = res.record_id
          setTimeout(() => {
            this.initVideo()
          }, 20000)
        },
        error: (msg, file, e) => {
          this.uploadErrorMsg = msg
          this.msgError = true
        }
      })
    },
    checkInit (type) {
      if (type === 'upload' && this.value.recordId) {
        this.initVideo()
      }
    },
    initVideo () {
      window.Vhall.ready(() => {
        window.VhallPlayer.init({
          recordId: this.value.recordId, // 回放Id，点播必填，直播不写
          type: 'vod', // 播放类型,必填，live 直播, vod 为点播
          videoNode: this.videoId, // 推流视频回显节点id，必填
          complete: function () {
            // window.VhallPlayer.play()
          },
          fail: (msg) => {
            this.uploadErrorMsg = `${msg}...,稍后刷新页面即可看到预览视频`
          }
        })
      })
      /* 初始化配置 */
      window.Vhall.config({
        appId: this.vhallParams.appId, // 应用 ID ,必填
        accountId: this.vhallParams.accountId, // 第三方用户唯一标识,必填
        token: this.vhallParams.token // token必填
      })
    }
  },
  mounted () {
    this.$get(activityService.GET_PAAS_SDK_INFO).then((res) => {
      this.vhallParams = res.data
      this.init()
    })
    eventBus.$on('reset', () => {
      this.init()
    })
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/css/variable.scss';
.video-container /deep/ {
  position: relative;
  .video-content {
    position: relative;
    .video-wrap {
      height: 100%;
    }
    .iframe-wrap {
      height: 100%;
    }
    iframe {
      width: 100%;
      height: 100%;
    }
  }
  .video-edit-content {
    .nav-blank-title {
      text-align: center;
      height: 50px;
      line-height: 50px;
      border-bottom: 1px solid rgba(226, 226, 226, 1);
      font-size: 18px;
      color: $color-font;
    }
    .upload-field {
    }
    .link-input {
      width: 300px;
      margin: 0 auto;
    }
    .label-spe {
      padding: 10px 0px 0px 25px;
      font-size: 14px;
      color: $color-font-sub;
      float: left;
    }
    .com-input textarea {
      width: 300px;
      margin: 0 auto;
    }
  }
  .video-js .vjs-big-play-button {
    width: 54px;
    height: 54px;
    border-radius: 500px;
    top: 50%;
    left: 50%;
    margin-top: -27px;
    margin-left: -27px;
    line-height: 51px;
  }
}
.upload-video-box {
  cursor: pointer;
  width: 300px;
  margin: 0 auto;
  height: 140px;
  border: 1px dashed #e2e2e2;
  border-radius: 4px;
  background-color: #f7f7f7;
  text-align: center;
  overflow: hidden;
  position: relative;
  .upload-video-icon {
    display: block;
    width: 60px;
    height: 60px;
    margin: 15px auto 10px auto;
    background-size: cover;
    background-image: url('~assets/image/upload-video-icon@2x.png');
  }
  span.desc {
    font-size: 14px;
    line-height: 20px;
    color: #888;
    font-size: 14px;
    width: 200px;
    white-space: normal;
    display: inline-block;
    &.error {
      color: $color-error;
    }
  }
  span.progress {
    bottom: 0;
    left: 0;
    position: absolute;
    width: 100%;
    height: 10px;
    background: white;
    i {
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-color: $color-default;
    }
  }
}
</style>
