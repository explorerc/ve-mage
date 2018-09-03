<template>
  <div class="live-mager">
    <div class="live-title">
      <span class="title">暖场设置</span>
      <el-switch
        v-model="isSwitch"
        inactive-color="#DEE1FF"
        active-color="#4B5AFE">
      </el-switch>
      <span class="msg-tip">关闭后，直播观看页将不显示开场内容</span>
      <button class="primary-button fr" @click="goBack">返回</button>
    </div>
    <div class="mager-box border-box">
      <div class="from-box">
        <div class="from-row">
          <div class="from-title"><i class="star">*</i>暖场视频：</div>
          <div class="from-content">
            <ve-upload-video
              title="视频仅支持mp4格式，文件大小不超过200M"
              accept="mp4"
              :fileSize="204800"
              :errorMsg="uploadVideoErrorMsg"
              :sdk="sdkParam"
              @success="uploadVideoSuccess"></ve-upload-video>
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
              <ve-upload-image
                title="图片支持jpg、png、bmp格式，建议比例16:9，大小不超过2M"
                accept="png|jpg|jpeg|bmp|gif"
                :defaultImg="defaultImg"
                :fileSize="2048"
                :errorMsg="uploadImgErrorMsg"
                @error="uploadError"
                @success="uploadImgSuccess"></ve-upload-image>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom-btn">
        <button class="primary-button" @click="saveWarm">保存</button>
        <button class="primary-button" @click="prePlayVideo">预览</button>
      </div>
    </div>

  </div>
</template>

<script>
  import VeUploadImage from 'src/components/ve-upload-image'
  import VeUploadVideo from 'src/components/ve-upload-video'
  import LiveHttp from 'src/api/activity-manger'

  export default {
    name: 'warm-field',
    components: {VeUploadImage, VeUploadVideo},
    data () {
      return {
        warm: {
          enabled: 'N',
          playMode: 'AUTO',
          playCover: '',
          recordId: '',
          activityId: ''
        },
        sdkParam: { // sdk上传插件初始化参数
          sing: '',
          signed_at: '',
          app_id: ''
        },
        sdkPlayParam: { // sdk播放器初始化参数
          app_id: '',
          accountId: '',
          token: '',
          recordId: '', // 回放视频id
          linkVideo: '' // 外链视频
        },
        isSwitch: false,
        loading: false,
        videoSize: '200', // 视频限制大小，单位兆
        percentVideo: 0, // 上传进度
        percentImg: 0, // 图片上传进度
        uploadErrorMsg: '', // 上传错误信息
        uploadImgErrorMsg: '', // 图片上传错误信息
        uploadVideoErrorMsg: '', // 视频上传错误信息
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
      const activityId = this.$route.params.id
      if (!activityId) {
        this.goBack()
        return
      }
      this.warm.activityId = activityId
      this.initPage()
    },
    methods: {
      goBack () {
        this.$router.go(-1)
      },
      deleteImage () {
        this.warm.playCover = ''
      },
      prePlayVideo () {
        // 播放器进行播放,预览
        this.$playVideo({
          ...this.sdkPlayParam
        })
      },
      initPage () {
        LiveHttp.queryWarmInfoById(this.$route.params.id).then((res) => {
          /* 查询详情 */
          if (res.code === 200 && res.data) {
            this.warm = {
              activityId: this.$route.params.id,
              enabled: res.data.enabled,
              playMode: res.data.playType,
              playCover: res.data.imgUrl,
              recordId: res.data.recordId
            }
            this.isSwitch = res.data.enabled === 'Y'
            this.sdkPlayParam.recordId = res.data.recordId
          }
        }).then(() => {
          /* 获取pass信息 */
          LiveHttp.queryPassSdkInfo().then((res) => {
            /* $nextTick保证dom被渲染之后进行paas插件初始化 */
            this.$nextTick(() => {
              // 初始化pass上传插件
              this.sdkParam = {
                sign: res.data.sign,
                signed_at: res.data.signedAt,
                app_id: res.data.appId
              }
              // 初始化pass播放参数
              this.sdkPlayParam.app_id = res.data.appId
              this.sdkPlayParam.accountId = res.data.accountId
              this.sdkPlayParam.token = res.data.token
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
          enabled: this.warm.enabled,
          filename: ''
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
      /* 上传图片成功 */
      uploadImgSuccess (data) {
        this.warm.playCover = data.name
      },
      /* 上传视频成功 */
      uploadVideoSuccess (recordId, fileName) {
        this.warm.recordId = recordId
        this.warm.recordId = fileName
      },
      uploadError (data) {
        console.log('上传失败:', data)
        this.uploadImgErrorMsg = '上传图片失败'
      }
    }
  }
</script>

<style lang="scss" scoped src="./css/live.scss">
</style>
<style lang="scss" scoped>
  .bottom-btn {
    text-align: center;
    button {
      width: 200px;
      margin: 60px auto 50px auto;
    }
  }
</style>
