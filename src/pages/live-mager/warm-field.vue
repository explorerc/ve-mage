<template>
  <div class="live-mager">
    <div class="live-title">
      <span>暖场设置</span>
      <el-button class="live-btn fr" type="primary" plain @click="goBack">返回</el-button>
    </div>
    <div class="mager-box">
      <div class="from-box">
        <div class="from-row">
          <div class="from-title">暖场开关：</div>
          <div class="from-content">
            <el-checkbox v-model="isSwitch">开启</el-checkbox>
            <span class="msg-tip">关闭后，直播观看页将不显示开场内容</span>
          </div>
        </div>
        <div class="from-row">
          <div class="from-title"><i class="star">*</i>暖场视频：</div>
          <div class="from-content">
            <div class="upload-video">
              <div class="upload-file-box" title="点击上传" v-ComLoading="loading" com-loading-text="准备中..."
                   @click="uploadVideo">
                <el-progress v-if="percentVideo" type="circle" :percentage="percentVideo"></el-progress>
                <i class="iconfont icon-jiahao"></i>
                <span>上传视频</span>
                <div class="hide">
                  <input type="file" id="upload"/>
                  <input type="text" id='rename'>
                  <button id="confirmUpload" class="saveBtn"></button>
                </div>
              </div>
              <div class="upload-tips">
                <span>视频仅支持mp4格式，文件大小不超过200M</span>
                <span class="error" v-if="uploadErrorMsg">{{uploadErrorMsg}}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="from-row">
          <div class="from-title"><i class="star">*</i>播放模式：</div>
          <div class="from-content">
            <el-radio v-model="warm.playMode" label="AUTO">自动循环</el-radio>
            <el-radio v-model="warm.playMode" label="ONCE">单次播放</el-radio>
          </div>
        </div>
        <div class="from-row">
          <div class="from-title">视频封面：</div>
          <div class="from-content">
            <div class="from-content">
              <ve-upload
                title="图片支持jpg、png、bmp格式，建议比例16:9，大小不超过2M"
                accept="png|jpg|jpeg|bmp|gif"
                :defaultImg="defaultImg"
                :fileSize="2048"
                :errorMsg="uploadImgErrorMsg"
                @error="uploadError"
                @success="uploadImgSuccess"></ve-upload>
              <!--<div class="upload-tips">-->
                <!--<span>建议尺寸XXXXXX，图片支持jpg、png、jpeg、bmp，图片大小不超过1M</span>-->
                <!--<span class="error" v-if="uploadImgErrorMsg">{{uploadImgErrorMsg}}</span>-->
              <!--</div>-->
            </div>
          </div>
        </div>
        <div class="from-row">
          <div class="from-title">视频预览：</div>
          <div class="from-content">
            <div class="play-box">
              <span v-if="!warm.recordId||playMsg">{{playMsg||'暂无视频'}}</span>
              <div id="myVideo" v-else style="width:100%; height:100%;"></div>
            </div>
          </div>
        </div>
        <div class="from-row">
          <div class="from-title"></div>
          <div class="from-content">
            <el-button class="live-btn" type="primary" plain @click="saveWarm">保存</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import VeUpload from 'src/components/ve-upload'
  import LiveHttp from 'src/api/activity-manger'

  export default {
    name: 'warm-field',
    components: { VeUpload },
    data () {
      return {
        warm: {
          enabled: 'N',
          playMode: 'AUTO',
          playCover: '',
          recordId: '',
          activityId: ''
        },
        vhallParams: {
          sign: '',
          appId: '',
          accountId: '',
          token: '',
          signedAt: ''
        },
        isSwitch: false,
        loading: false,
        videoSize: '200', // 视频限制大小，单位兆
        percentVideo: 0, // 上传进度
        percentImg: 0, // 图片上传进度
        uploadErrorMsg: '', // 上传错误信息
        uploadImgErrorMsg: '', // 图片上传错误信息
        playMsg: ''
      }
    },
    computed: {
      defaultImg () {
        return this.warm.playCover ? `${this.$imgHost}/${this.warm.playCover}` : ''
      }
    },
    watch: {
      isSwitch (newVal) {
        this.warm.enabled = newVal ? 'Y' : 'N'
      }
    },
    created () {
      if (!this.$route.params.id) {
        this.goBack()
        return
      }
      this.initPage()
    },
    methods: {
      goBack () {
        this.$router.go(-1)
      },
      deleteImage () {
        this.warm.playCover = ''
      },
      initPage () {
        LiveHttp.queryWarmInfoById(this.$route.params.id).then((res) => {
          /* 查询详情 */
          this.warm = {
            activityId: this.$route.params.id,
            enabled: res.data.enabled,
            playMode: res.data.playType,
            playCover: res.data.imgUrl,
            recordId: res.data.recordId
          }
          this.isSwitch = res.data.enabled === 'Y'
          this.vhallParams.recordId = res.data.recordId
        }).then(() => {
          /* 获取pass信息 */
          LiveHttp.queryPassSdkInfo().then((res) => {
            this.vhallParams = res.data
            /* $nextTick保证dom被渲染之后进行paas插件初始化 */
            this.$nextTick(() => {
              // 初始化pass上传插件
              this.initVhallUpload()
              // 初始化pass播放插件
              this.videosSuccess()
            })
          })
        })
      },
      uploadVideo () {
        document.getElementById('upload').click()
      },
      saveWarm () {
        LiveHttp.saveAndEditWarmInfo({
          activityId: this.warm.activityId,
          recordId: this.warm.recordId,
          playType: this.warm.playMode,
          imgUrl: this.warm.playCover,
          enabled: this.warm.enabled
        }).then((res) => {
          if (res.code === 200) {
            this.$toast({
              header: `提示`,
              content: '保存成功',
              autoClose: 2000,
              position: 'right-top'
            })
          }
        })
      },
      uploadImgSuccess (data) {
        this.warm.playCover = data.name
      },
      uploadError (data) {
        console.log('上传失败:', data)
        this.uploadImgErrorMsg = '上传图片失败'
      },
      initVhallUpload () {
        this.$nextTick(() => {
          window.vhallCloudDemandSDK('#upload', {
            params: {
              confirmBtn: '#confirmUpload', // 保存按钮的ID
              name: '#rename',
              sign: this.vhallParams.sign,
              signed_at: this.vhallParams.signedAt,
              app_id: this.vhallParams.appId
            },
            beforeUpload: (file) => {
              if (file.type !== 'video/mp4') {
                this.uploadErrorMsg = '不支持该视频格式，请上传mp4格式视频'
                return false
              } else if (file.size / 1024 / 1024 > this.videoSize) {
                this.uploadErrorMsg = '视频太大，请不要大于200M'
                return false
              }
              this.uploadErrorMsg = ''
              this.loading = true
              this.percentVideo = 0
              return true
            },
            progress: (percent) => {
              this.loading = false
              this.percentVideo = parseFloat(percent.replace('%', ''))
              if (this.percentVideo === 100) {
                this.percentVideo = 0
              }
            },
            uploadSuccess () {
              document.getElementById('confirmUpload').click()
            },
            saveSuccess: (res) => {
              this.warm.recordId = res.record_id
              this.$nextTick(() => {
                this.videosSuccess()
              })
            },
            error: (msg, file, e) => {
              this.loading = false
              this.uploadErrorMsg = msg
            }
          })
        })
      },
      videosSuccess () {
        if (!this.warm.recordId) return
        window.Vhall.ready(() => {
          window.VhallPlayer.init({
            recordId: this.warm.recordId, // 回放Id，点播必填，直播不写
            type: 'vod', // 播放类型,必填，live 直播, vod 为点播
            videoNode: 'myVideo', // 推流视频回显节点id，必填
            complete: function () {
              window.VhallPlayer.play()
            },
            fail: (msg) => {
              console.log(msg)
              this.playMsg = `${msg}...,稍后刷新页面即可看到预览视频`
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
    }
  }
</script>

<style lang="scss" scoped src="./css/live.scss">
</style>

