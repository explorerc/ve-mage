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
              <div class="upload-video-box" v-ComLoading="loading" com-loading-text="准备中..." @click="uploadVideo">
                <i class="iconfont icon-jiahao"></i>
                <span>上传视频</span>
                <div class="hide">
                  <input type="file" id="upload"/>
                  <input type="text" id='rename'>
                  <button id="confirmUpload" class="saveBtn"></button>  <!--上传成功后用于保存文件的按钮 -->
                </div>
              </div>
              <div class="upload-tips">
                <span>视频仅支持mp4格式，文件大小不超过200M</span>
                <span class="error" v-if="uploadErrorMsg">{{uploadErrorMsg}}</span>
              </div>
              <div style="width: 500px;margin-top: 10px;">
                <el-progress :text-inside="true" :stroke-width="18" :percentage="percentage"></el-progress>
              </div>
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
                :actionUrl="imageServer"
                inputName="resfile"
                :fileSize="1024"
                @selected="uploadSelected"
                @progress="uploadProgress"
                @over="uploadOver"
              >
                <div class="test-upload">我是插槽自定义区域</div>
              </com-upload>
            </div>
          </div>
        </div>
        <div class="from-row">
          <div class="from-title">视频预览：</div>
          <div class="from-content">
            <div class="play-box">
              <span v-if="!warm.videoSrc">暂无视频</span>
              <video v-else :src="warm.videoSrc" controls="controls"></video>
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
          id: 'lss_d7cb42d5'
        },
        loading: false,
        percentage: 0, // 上传进度
        uploadErrorMsg: '', // 上传错误信息
        imageServer: '/api/upload/do-upload',
        access_token: 'access:e909e583:957ff04333f9fda8'
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
      initVhallUpload () {
        this.$nextTick(() => {
          window.vhallCloudDemandSDK('#upload', {
            params: {
              confirmBtn: '#confirmUpload', // 保存按钮的ID
              name: '#rename', // 用于修改文件名称的input的ID
              sign: '9901efcad4bf31747434d0317f105cf0', // 生成的鉴权信息
              signed_at: '1534416582', // 鉴权信息生成的时间戳
              app_id: 'e909e583'
            },
            beforeUpload: () => {
              this.loading = true
              this.percentage = 0
            },
            progress: (percent) => {
              this.percentage = parseFloat(percent.replace('%', ''))
            },
            uploadSuccess () {
              document.getElementById('confirmUpload').click()
            },
            saveSuccess: (res) => {
              this.warm.videoSrc = res.record_id
              this.loading = false
            },
            error: (msg, file, e) => {
              this.loading = false
              this.uploadErrorMsg = msg
            }
          })
        })
      },
      uploadSelected (data) {
        console.log('选中文件', data)
      },
      uploadProgress (data) {
        console.log('上传进度:', data)
        console.log(data)
      },
      uploadLoad (data) {
        console.log('上传成功:', data)
      },
      uploadError (data) {
        console.log('上传失败:', data)
      },
      uploadOver () {
        console.log('上传完毕')
      },
      queryWarmInfo () {
        console.log('查询暖场信息')
      },
      uploadVideo () {
        document.getElementById('upload').click()
      },
      saveWarm () {
        alert(JSON.stringify(this.warm))
      }
    }
  }
</script>

<style lang="scss" scoped src="./css/live.scss">

</style>
