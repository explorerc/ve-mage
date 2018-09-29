<template>
  <div class="ve-upload-box" v-ComLoading="loading" com-loading-text="上传准备中...">
    <transition name="fade">
      <div class="ve-upload-video" v-if="fileName">
        <span :class='{"mp4-video-icon":true,"mp4-eror":errorTxt}'>.Mp4</span>
        <span class="file-name">{{fileName}}</span>
        <span class="error-msg" v-if="errorTxt">{{errorTxt}}</span>
        <span class="file-size"
              v-else-if="!isConvert&&percentVideo!=100&&percentVideo!=0">{{(fileRealSize*percentVideo/100).toFixed(2)}}M/{{fileRealSize}}M</span>
        <span class="file-size"
              v-else-if="!isConvert&&(percentVideo==100||percentVideo==0)">{{fileRealSize}}M</span>
        <span class="file-convert" v-else="isConvert">上传成功，转码中…</span>
        <div class="percent-box" v-if="percentVideo">
          <span :style="{width:percentVideo+'%'}"></span>
        </div>
        <span v-if="!isConvert&&fileName" class="upload-video upload-pre-view" @click="preViewVideo">预览</span>
        <span class="upload-video upload-delete" @click="deleteVideo">删除</span>
      </div>
      <div v-else class="upload-file-box" id="uploadFile_video" title="点击上传" @click="clickUploadVideo">
        <i class="upload-video-icon"></i>
        <span v-if="!errorTxt">{{tipTxt}}</span>
        <span class="error-msg" v-else>{{errorTxt}}</span>
      </div>
    </transition>
    <div class="hide">
      <input type="file" :id="uploadId"/>
      <input type="text" id='rename'>
      <button id="confirmUpload" class="saveBtn"></button>
    </div>
  </div>
</template>

<script>
  import ComUpload from 'src/components/common/upload/com'

  export default {
    name: 've-upload-video',
    components: {ComUpload},
    data () {
      return {
        tipTxt: '',
        percentVideo: 0,
        errorTxt: '',
        fileName: '',
        record_id: '',
        fileRealSize: 0,
        isConvert: true,
        loading: false,
        uploadId: 'upload_video_' + Math.random()
      }
    },
    props: {
      accept: {
        type: String,
        default: 'mp4|avi|3gp|mov|mkv|flv|rm|rmvb'
      },
      fileSize: {
        type: Number,
        default: 1024
      },
      title: {
        type: String,
        default: '上传文件'
      },
      errorMsg: {
        type: String,
        default: ''
      },
      sdk: {
        sign: '',
        signed_at: '',
        app_id: '',
        fileName: '',
        fileSize: '',
        recordId: '',
        transcode_status: 0
      }
    },
    watch: {
      errorMsg (value) {
        this.errorTxt = value
      },
      title: {
        handler (val) {
          this.tipTxt = val
        },
        immediate: true
      },
      sdk: {
        handler (newVal) {
          if (!newVal.sign) return
          this.fileName = newVal.fileName
          this.fileRealSize = (newVal.fileSize / 1024).toFixed(2)
          this.isConvert = !newVal.transcode_status
          this.initPage()
        },
        deep: true
      }
    },
    methods: {
      clickUploadVideo () {
        document.getElementById(this.uploadId).click()
      },
      deleteVideo () {
        this.$emit('handleClick', {
          type: 'delete',
          detail: '删除'
        })
      },
      preViewVideo () {
        this.$emit('handleClick', {
          type: 'pre-view',
          detail: '预览'
        })
      },
      initPage () {
        this.percentVideo = 0
        this.errorTxt = ''
        this.$nextTick(() => {
          window.vhallCloudDemandSDK(`#${this.uploadId}`, {
            params: {
              confirmBtn: '#confirmUpload',
              name: '#rename',
              sign: this.sdk.sign,
              signed_at: this.sdk.signed_at,
              app_id: this.sdk.app_id
            },
            beforeUpload: (file) => {
              this.fileName = file.name
              this.fileRealSize = file.size / 1024 / 1024
              if (file.type !== 'video/mp4') {
                this.errorTxt = '不支持该视频格式，请上传' + this.accept + '格式视频'
                this.$emit('error', this.errorTxt, file)
                return false
              } else if (this.fileRealSize > this.fileSize / 1024) {
                this.errorTxt = '您上传的视频文件过大，请上传不超过200M的视频文件'
                this.$emit('error', this.errorTxt, file)
                return false
              }
              this.loading = true
              this.errorTxt = ''
              this.percentVideo = 0
              this.isConvert = false
              this.fileRealSize = this.fileRealSize.toFixed(2)
              return true
            },
            progress: (percent) => {
              this.loading = false
              const temPercent = parseFloat(percent.replace('%', ''))
              if (this.percentVideo >= temPercent) return
              this.percentVideo = temPercent
            },
            uploadSuccess () {
              document.getElementById('confirmUpload').click()
            },
            saveSuccess: (res) => {
              this.record_id = res.record_id
              this.isConvert = true
              this.$emit('success', this.record_id, this.fileName, this.fileRealSize * 1024)
            },
            error: (msg, file, e) => {
              this.loading = false
              this.errorTxt = msg
              this.$emit('error', msg, file)
            }
          })
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .fade-enter-active {
    transition: all 0.3s ease;
  }

  .fade-leave-active {
    transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

  .ve-upload-box {
    position: relative;
    width: 440px;
    height: 140px;
    border: 1px dashed #e2e2e2;
    border-radius: 4px;
    background-color: #f7f7f7;
    text-align: center;
    overflow: hidden;
    .hide {
      display: none;
    }
    .error-msg {
      display: block;
      color: #fc5659 !important;
      line-height: 24px;
    }
    .upload-file-box {
      width: 440px;
      padding-bottom: 40px;
      cursor: pointer;
      span {
        font-size: 14px;
        line-height: 20px;
        color: #888;
      }
      .upload-video-icon {
        display: block;
        width: 60px;
        height: 60px;
        margin: 15px auto 10px auto;
        background-image: url('../assets/image/upload-video-icon@2x.png');
        background-size: cover;
      }
    }
    .ve-upload-video {
      position: relative;
      width: 100%;
      height: 100%;
      font-size: 14px;
      .mp4-video-icon {
        display: block;
        width: 60px;
        height: 60px;
        margin: 18px auto 6px auto;
        background-image: url('../assets/image/mp4_icon@2x.png');
        background-size: cover;
        color: #fff;
        line-height: 74px;
      }
      .upload-video {
        position: absolute;
        top: 0;
        font-size: 12px;
        color: #555;
        &:hover {
          cursor: pointer;
          color: #ffd021;
        }
      }
      .upload-delete {
        right: 15px;
      }
      .upload-pre-view {
        display: block;
        right: 50px;
        padding-right: 10px;
        &:before {
          display: block;
          content: '';
          position: absolute;
          top: 3px;
          right: -1px;
          width: 1px;
          height: 12px;
          background-color: #e2e2e2;
        }
      }
      .mp4-eror {
        background-image: url('../assets/image/mp4_error_icon@2x.png');
      }
      .file-name {
        color: #222;
      }
      .file-size {
        display: block;
        color: #888;
        line-height: 24px;
      }
      .file-convert {
        display: block;
        color: #4b5afe;
        line-height: 24px;
      }
      .percent-box {
        position: absolute;
        height: 4px;
        width: 100%;
        bottom: 18px;
        left: 0;
        background-color: #e2e2e2;
        span {
          display: block;
          font-size: 0;
          width: 20px;
          height: 100%;
          background-color: #ffd021;
          transition: width 0.2s;
        }
      }
    }
  }
</style>
