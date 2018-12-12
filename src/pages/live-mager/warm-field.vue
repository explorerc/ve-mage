<template>
  <div class="live-mager">
    <div class="live-title">
      <span class="title">暖场设置</span>
      <el-switch v-model="isSwitch"
        inactive-color="#DEE1FF"
        :width="32"
        active-color="#FFD021" @change='openSwitch'>
      </el-switch>
      <com-back></com-back>
      <!--<span class="msg-tip">关闭后，直播观看页将不显示开场内容</span>-->
      <!--<button class="primary-button fr" @click="goBack">返回</button>-->
    </div>
    <div class="mager-box border-box">
      <div class="from-box">
        <div class="from-row">
          <div class="from-title"><i class="star">*</i>暖场视频：</div>
          <div class="from-content">
            <ve-upload-video title="视频仅支持mp4格式，文件大小不超过200M"
                             accept="mp4"
                             :fileSize="204800"
                             :errorMsg="uploadVideoErrorMsg"
                             :sdk="sdkParam"
                             @error="errorUploadVideo"
                             @progress="uploadProgress"
                             @handleClick="handleVideoClick"
                             @success="uploadVideoSuccess"></ve-upload-video>
          </div>
        </div>
        <div class="from-row">
          <div class="from-title"><i class="star">*</i>播放模式：</div>
          <div class="from-content">
            <el-radio v-model="warm.playMode"
                      label="AUTO">自动循环
            </el-radio>
            <el-radio v-model="warm.playMode"
                      label="ONCE">单次播放
            </el-radio>
          </div>
        </div>
        <div class="from-row">
          <div class="from-title">视频封面：</div>
          <div class="from-content">
            <div class="from-content">
              <ve-upload-image title="图片支持jpg、png、bmp格式，建议比例16:9，大小不超过2M"
                               accept="png|jpg|jpeg|bmp"
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
        <button :class="{'primary-button':true,disabled:isDisabled}"
                @click="saveWarm">保存
        </button>
      </div>
    </div>

  </div>
</template>

<script>
import VeUploadImage from 'src/components/ve-upload-image'
import VeUploadVideo from 'src/components/ve-upload-video'
import activityService from 'src/api/activity-service'
import EventBus from 'src/utils/eventBus'

export default {
  name: 'warm-field',
  components: { VeUploadImage, VeUploadVideo },
  data () {
    return {
      warm: {
        enabled: 'N',
        playMode: 'AUTO',
        playCover: '',
        recordId: '',
        activityId: '',
        filename: '',
        fileSize: ''
      },
      sdkParam: { // sdk上传插件初始化参数
        sign: '',
        signed_at: '',
        app_id: '',
        fileName: '',
        fileSize: '',
        transcode_status: 0
      },
      sdkPlayParam: { // sdk播放器初始化参数
        app_id: '',
        accountId: '',
        token: '',
        recordId: '', // 回放视频id
        linkVideo: '' // 外链视频
      },
      isSwitch: false,
      isSwitchDisabled: false,
      loading: false,
      isDisabled: false,
      percentVideo: 0, // 上传进度
      percentImg: 0, // 图片上传进度
      uploadErrorMsg: '', // 上传错误信息
      uploadImgErrorMsg: '', // 图片上传错误信息
      uploadVideoErrorMsg: '', // 视频上传错误信息
      playMsg: '',
      canPass: true,
      progress: 0
    }
  },
  computed: {
    defaultImg () {
      return this.warm.playCover ? `${this.$imgHost}/${this.warm.playCover}` : ''
    }
  },
  /* 路由守卫，离开当前页面之前被调用 */
  beforeRouteLeave (to, from, next) {
    if (this.canPass) {
      next(true)
      return
    }
    this.$messageBox({
      header: '提示',
      width: '400px',
      content: '是否放弃当前编辑？',
      cancelText: '否',
      confirmText: '是',
      handleClick: (e) => {
        if (e.action === 'confirm') {
          next(true)
        } else {
          next(false)
        }
      }
    })
  },
  watch: {
    isSwitch (newVal) {
      this.warm.enabled = newVal ? 'Y' : 'N'
    },
    'warm.playMode' () {
      this.canPass = false
    }
  },
  created () {
    const activityId = this.$route.params.id
    EventBus.$emit('breads', [{
      title: '活动管理'
    }, {
      title: '活动列表',
      url: '/liveMager/list'
    }, {
      title: '活动详情',
      url: `/liveMager/detail/${activityId}`
    }, {
      title: '暖场设置'
    }])
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
    /* 播放器进行播放,预览 */
    prePlayVideo () {
      this.$playVideo({
        ...this.sdkPlayParam
      })
    },
    initPage () {
      this.$get(activityService.GET_WRAM_INFO, {
        activityId: this.$route.params.id
      }).then((res) => {
        /* 查询详情 */
        if (res.data) {
          this.warm = {
            activityId: this.$route.params.id,
            enabled: res.data.enabled,
            playMode: res.data.playType || this.warm.playMode,
            playCover: res.data.imgUrl,
            recordId: res.data.recordId,
            filename: res.data.filename,
            fileSize: res.data.fileSize || 0
          }
          this.isSwitch = res.data.enabled === 'Y'
          /* sdk参数赋值 */
          this.sdkPlayParam.recordId = res.data.recordId
          this.sdkParam.fileName = res.data.filename
          this.sdkParam.fileSize = res.data.fileSize || 0
          this.sdkParam.transcode_status = (res.data.record && res.data.record.list.length > 0) ? res.data.record.list[0].transcode_status : 0
        }
      }).then(() => {
        this.$get(activityService.GET_PAAS_SDK_INFO).then((res) => {
          /* $nextTick保证dom被渲染之后进行paas插件初始化 */
          this.$nextTick(() => {
            // 初始化pass上传插件
            this.sdkParam.sign = res.data.sign
            this.sdkParam.signed_at = res.data.signedAt
            this.sdkParam.app_id = res.data.appId
            // 初始化pass播放参数
            this.sdkPlayParam.app_id = res.data.appId
            this.sdkPlayParam.accountId = res.data.accountId
            this.sdkPlayParam.token = res.data.token
          })
        })
      })
      // LiveHttp.queryWarmInfoById(this.$route.params.id).then((res) => {
      //   /* 查询详情 */
      //   if (res.code === 200 && res.data) {
      //     this.warm = {
      //       activityId: this.$route.params.id,
      //       enabled: res.data.enabled,
      //       playMode: res.data.playType || this.warm.playMode,
      //       playCover: res.data.imgUrl,
      //       recordId: res.data.recordId,
      //       filename: res.data.filename
      //     }
      //     this.isSwitch = res.data.enabled === 'Y'
      //     /* sdk参数赋值 */
      //     this.sdkPlayParam.recordId = res.data.recordId
      //     this.sdkParam.fileName = res.data.filename
      //     this.sdkParam.fileSize = res.data.record ? res.data.record.storage : 0
      //     this.sdkParam.transcode_status = res.data.record.list[0].transcode_status
      //   }
      //   this.isSwitch = res.data.enabled === 'Y'
      //   /* sdk参数赋值 */
      //   this.sdkPlayParam.recordId = res.data.recordId
      //   this.sdkParam.fileName = res.data.filename
      //   this.sdkParam.fileSize = res.data.record ? res.data.record.storage : 0
      //   this.sdkParam.transcode_status = res.data.record.list[0].transcode_status
      // }).then(() => {
      //   this.$get(activityService.GET_PAAS_SDK_INFO).then((res) => {
      //     /* $nextTick保证dom被渲染之后进行paas插件初始化 */
      //     this.$nextTick(() => {
      //       // 初始化pass上传插件
      //       this.sdkParam.sign = res.data.sign
      //       this.sdkParam.signed_at = res.data.signedAt
      //       this.sdkParam.app_id = res.data.appId
      //       // 初始化pass播放参数
      //       this.sdkPlayParam.app_id = res.data.appId
      //       this.sdkPlayParam.accountId = res.data.accountId
      //       this.sdkPlayParam.token = res.data.token
      //     })
      //   })
      // })
    },
    uploadProgress (progress) {
      this.progress = progress
    },
    uploadVideo () {
      document.getElementById('upload').click()
    },
    checkoutParams () {
      if (this.progress !== 0 && this.progress !== 100) {
        this.$toast({
          content: '请等待视频上传完成后保存',
          position: 'center'
        })
        let st = setTimeout(() => {
          clearTimeout(st)
          this.isDisabled = false
        }, 3000)
        return false
      }
      if (!this.warm.recordId) {
        this.$toast({
          content: '请上传暖场视频',
          position: 'center'
        })
        let st = setTimeout(() => {
          clearTimeout(st)
          this.isDisabled = false
        }, 3000)
        return false
      }
      return true
    },
    /* 保存暖场信息 */
    saveWarm () {
      this.isDisabled = true
      if (!this.checkoutParams()) return
      this.$post(activityService.POST_SAVE_WRAM_INFO, {
        activityId: this.warm.activityId,
        recordId: this.warm.recordId,
        playType: this.warm.playMode,
        imgUrl: this.warm.playCover,
        enabled: this.warm.enabled,
        filename: this.warm.filename,
        fileSize: parseInt(this.warm.fileSize)
      }).then((res) => {
        this.canPass = true
        // this.$toast({
        //   content: '保存成功',
        //   position: 'center'
        // })
        // let st = setTimeout(() => {
        //   clearTimeout(st)
        //   this.isDisabled = false
        // }, 3000)
        this.$router.push(`/liveMager/detail/${this.$route.params.id}`)
      }).catch(() => {
        this.isDisabled = false
      })
      // LiveHttp.saveAndEditWarmInfo({
      //   activityId: this.warm.activityId,
      //   recordId: this.warm.recordId,
      //   playType: this.warm.playMode,
      //   imgUrl: this.warm.playCover,
      //   enabled: this.warm.enabled,
      //   filename: this.warm.filename
      // }).then((res) => {
      //   if (res.code === 200) {
      //     this.$toast({
      //       header: `提示`,
      //       content: '保存成功',
      //       autoClose: 2000,
      //       position: 'right-top'
      //     })
      //   }
      // })
    },
    /* 上传图片成功 */
    uploadImgSuccess (data) {
      this.canPass = false
      this.warm.playCover = data.name
    },
    /* 上传视频成功 */
    uploadVideoSuccess (recordId, fileName, fileSize) {
      this.canPass = false
      this.warm.recordId = recordId
      this.warm.filename = fileName
      this.warm.fileSize = fileSize
      this.sdkParam.fileName = fileName
      this.sdkParam.fileSize = fileSize
      this.sdkPlayParam.recordId = recordId
    },
    /* 预览，删除触发 */
    handleVideoClick (e) {
      if (e.type === 'pre-view') { // 预览
        this.prePlayVideo()
      } else if (e.type === 'delete') { // 删除
        this.$messageBox({
          header: '删除此视频',
          width: '400px',
          content: '您是否确定要删除此视频？',
          cancelText: '取消',
          confirmText: '删除',
          type: 'error',
          handleClick: (e) => {
            if (e.action === 'confirm') {
              this.canPass = false
              this.uploadVideoErrorMsg = ''
              this.warm.recordId = ''
              this.warm.filename = ''
              this.sdkPlayParam.recordId = ''
              this.sdkParam.fileName = ''
              this.sdkParam.fileSize = ''
              this.sdkParam.transcode_status = 0
              this.progress = 0
            }
          }
        })
      }
    },
    errorUploadVideo (msg, file) {
      this.sdkParam.fileName = file.name
      this.uploadVideoErrorMsg = msg
    },
    uploadError (data) {
      this.uploadImgErrorMsg = data.msg
      this.warm.playCover = ''
    },
    openSwitch (type) {
      const data = {
        activityId: this.$route.params.id,
        submodule: 'WARMUP',
        enabled: type ? 'Y' : 'N'
      }
      this.isSwitchDisabled = true
      this.$config({ handlers: true }).$post(activityService.POST_DETAIL_SWITCH, data).then((res) => {
        // this.$toast({
        //   content: '设置成功',
        //   position: 'center'
        // })
        let st = setTimeout(() => {
          clearTimeout(st)
          this.isSwitchDisabled = false
        }, 3000)
      }).catch((res) => {
        let st = setTimeout(() => {
          clearTimeout(st)
          this.isSwitchDisabled = false
        }, 3000)
        if (res.code === 60706) {
          this.isSwitch = !type
          this.$messageBox({
            header: '提示',
            content: res.msg,
            autoClose: 10,
            confirmText: '知道了'
          })
        }
      })
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
.el-switch {
  position: relative;
  bottom: 4px;
}
</style>
