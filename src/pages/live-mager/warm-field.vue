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
            <el-checkbox v-model="warm.isSwitch">开启</el-checkbox>
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
              <!--<div style="width: 500px;margin-top: 10px;">-->
              <!--<el-progress :text-inside="true" :stroke-width="18" :percentage="percentVideo"></el-progress>-->
              <!--</div>-->
            </div>
          </div>
        </div>
        <div class="from-row">
          <div class="from-title"><i class="star">*</i>播放模式：</div>
          <div class="from-content">
            <el-radio v-model="warm.playMode" label="1">自定循环</el-radio>
            <el-radio v-model="warm.playMode" label="2">单次播放</el-radio>
          </div>
        </div>
        <div class="from-row">
          <div class="from-title">视频封面：</div>
          <div class="from-content">
            <div class="from-content">
              <com-upload
                accept="png|jpg|jpeg|bmp|gif"
                actionUrl="/api/upload/do-upload"
                inputName="file"
                :fileSize="1024"
                @error="uploadError"
                @progress="uploadProgress"
                @load="uploadImgSuccess">
                <div class="upload-file-box" title="点击上传">
                  <el-progress v-if="percentImg" type="circle" :percentage="percentImg"></el-progress>
                  <i class="iconfont icon-jiahao"></i>
                  <span>上传封面</span>
                  <div v-if="warm.playCover" class="upload-file-botton" @click.stop="deleteImage">删除</div>
                  <div class="temp-img" v-if="warm.playCover"
                       :style="{backgroundImage:'url('+imgHost+'/'+warm.playCover+')'}"></div>
                </div>
              </com-upload>
            </div>
          </div>
        </div>
        <div class="from-row">
          <div class="from-title">视频预览：</div>
          <div class="from-content">
            <div class="play-box">
              <span v-if="!vhallParams.recordId">暂无视频</span>
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
  import ComUpload from 'src/components/common/upload/com'
  import VeUpload from 'src/components/ve-upload'

  export default {
    name: 'warm-field',
    components: {ComUpload, VeUpload},
    data () {
      return {
        warm: {
          isSwitch: false,
          videoSrc: '',
          playMode: '1',
          playCover: '',
          record_id: '',
          id: 'lss_fcf39dc5'
        },
        vhallParams: {
          sign: '41256133923f50e3ae298e5f89b784b5', // 生成的鉴权信息
          signed_at: '1534486369', // 鉴权信息生成的时间戳
          app_id: 'e909e583',
          access_token: 'access:e909e583:85615832f2d648f7',
          recordId: '',
          accountId: 'v770'
        },
        imgHost: '', // 图片地址
        loading: false,
        percentVideo: 0, // 上传进度
        percentImg: 0, // 图片上传进度
        uploadErrorMsg: '' // 上传错误信息
      }
    },
    watch: {
      vhallParams: {
        handler (newVal) {
          if (newVal.recordId) {
            this.$nextTick(() => {
              this.videosSuccess()
            })
          }
        },
        immediate: true,
        deep: true
      }
    },
    created () {
      if (!this.$route.params.id) {
        this.goBack()
        return
      }
      this.queryWarmInfo()
      this.warm.id = this.$route.params.id
      this.initVhallUpload()
    },
    methods: {
      goBack () {
        this.$router.go(-1)
      },
      deleteImage () {
        console.log('delete')
        this.warm.playCover = ''
      },
      queryWarmInfo () {
        console.log('查询暖场信息')
      },
      uploadVideo () {
        document.getElementById('upload').click()
      },
      saveWarm () {
        alert(JSON.stringify(this.warm))
      },
      uploadProgress (data) {
        console.log('上传进度:', data)
        console.log(data)
        this.percentImg = parseFloat(parseFloat(data.percent.replace('%', '')).toFixed(2))
        if (this.percentImg === 100) {
          this.percentImg = 0
        }
      },
      uploadImgSuccess (data) {
        console.log('上传成功:', data)
        const fildObj = JSON.parse(data.data)
        this.warm.playCover = fildObj.data.name
        this.imgHost = fildObj.data.host
      },
      uploadError (data) {
        console.log('上传失败:', data)
      },
      initVhallUpload () {
        this.$nextTick(() => {
          window.vhallCloudDemandSDK('#upload', {
            params: {
              confirmBtn: '#confirmUpload', // 保存按钮的ID
              name: '#rename', // 用于修改文件名称的input的ID
              sign: this.vhallParams.sign, // 生成的鉴权信息
              signed_at: this.vhallParams.signed_at, // 鉴权信息生成的时间戳
              app_id: this.vhallParams.app_id
            },
            beforeUpload: () => {
              this.loading = true
              this.percentVideo = 0
            },
            progress: (percent) => {
              this.percentVideo = parseFloat(percent.replace('%', ''))
            },
            uploadSuccess () {
              document.getElementById('confirmUpload').click()
            },
            saveSuccess: (res) => {
              this.warm.record_id = res.record_id
              this.vhallParams.recordId = this.warm.record_id
              this.loading = false
            },
            error: (msg, file, e) => {
              this.loading = false
              this.uploadErrorMsg = msg
            }
          })
        })
      },
      videosSuccess () {
        window.Vhall.ready(() => {
          window.VhallPlayer.init({
            recordId: this.vhallParams.recordId, // 回放Id，点播必填，直播不写
            type: 'vod', // 播放类型,必填，live 直播, vod 为点播
            videoNode: 'myVideo', // 推流视频回显节点id，必填
            complete: function () {
              window.VhallPlayer.play()
            }
          })
        })
        /* 初始化配置 */
        window.Vhall.config({
          appId: this.vhallParams.app_id, // 应用 ID ,必填
          accountId: this.vhallParams.accountId, // 第三方用户唯一标识,必填
          token: this.vhallParams.access_token // token必填
        })
      }
    }
  }
</script>

<style lang="scss" scoped src="./css/live.scss">
</style>
