<template>
  <div class="live-mager">
    <div class="live-title">
      <span>暖场设置</span>
      <el-button class="live-btn fr" type="primary" plain>返回</el-button>
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
              <div class="upload-video-box">
                <i class="iconfont icon-jiahao"></i>
                <span>上传视频</span>
              </div>
              <div class="upload-tips">
                <span>视频仅支持mp4格式，文件大小不超过200M</span>
                <span class="error">您上传的视频文件过大，请上传不超过200M的视频文件,请上传暖场视频</span>
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
              <!--<com-upload-->
                <!--accept="png|jpg|jpeg|gif"-->
                <!--actionUrl="/api/edu/database/doc-upload"-->
                <!--inputName="resfile"-->
                <!--:fileSize="300"-->
              <!--&gt;-->
                <!--<div>-->

                <!--</div>-->
              <!--</com-upload>-->
              <ve-upload/>
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
            <el-button class="live-btn" type="primary" plain>保存</el-button>
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
          playCover: ''
        }
      }
    },
    created () {
      console.log(this.$router)
      debugger
    },
    methods: {}
  }
</script>

<style lang="scss" scoped src="./css/live.scss">

</style>
