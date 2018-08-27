<template>
  <div class="live-mager">
    <div class="live-title">
      <span>回放设置</span>
      <span class="msg-tip">所有回放的设置都在本页配置，发起页前端不再有任何回放的设置项。</span>
    </div>
    <div class="mager-box">
      <div class="from-box">
        <div class="from-row">
          <div class="from-title">回放设置：</div>
          <div class="from-content">
            <el-checkbox v-model="playBack.isSwitch">开启</el-checkbox>
            <span class="msg-tip">功能已开启，直播结束后观众可观看回放</span>
          </div>
        </div>
        <div class="from-row">
          <div class="from-title">回放下线设置：</div>
          <div class="from-content">
            <el-radio v-model="outLineMode" label="0">永不下线，长期有效</el-radio>
            <el-radio v-model="outLineMode" label="1">定时下线(下线后回放将不能观看)</el-radio>
            <transition name="left-right">
              <div class="black-box" v-if="outLineMode==1">
                设置下线时间
                <el-date-picker
                  v-model="playBack.outLineTime"
                  type="datetime"
                  placeholder="选择日期时间"
                  align="right"
                  format="yyyy-MM-dd HH:mm"
                  value-format="yyyy-MM-dd HH:mm">
                </el-date-picker>
              </div>
            </transition>
          </div>
        </div>
        <div class="from-row">
          <div class="from-title">回放封面：</div>
          <div class="from-content">
            <div class="from-content">
              <ve-upload
                title="点击上传封面"
                accept="png|jpg|jpeg"
                defaultImg=""
                :fileSize="1024"
                @error="uploadError"
                @success="uploadImgSuccess"></ve-upload>
              <div class="upload-tips">
                <span>为了保证显示效果，请上传不大于1280x720大小的图片，支持jpg、jpeg、png格式，文件大小不超过2M</span>
                <span class="error" v-if="uploadImgErrorMsg">{{uploadImgErrorMsg}}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="from-row">
          <div class="from-title">回放内容：</div>
          <div class="from-content">
            <el-select v-model="playBackMode" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <ve-msg-tips tip='当回放内容选择“外部链接”时，现在该提示符，鼠标移动到提示符上时会显示如下文案：为了达到最好的播放效果，推荐您先将视频上传到视频网站，再将播放地址复制到输入框。比如爱奇艺或腾讯视频“分享”中的“通用代码”，示例如下：&lt;iframe frameborder="0" width="640" height="498" src="https://v.qq.com/iframe/player.html?vid=zxxx7hcc6iu&tiny=0&auto=0" allowfullscreen&gt;&lt;/iframe&gt;'></ve-msg-tips>
            <div class="black-box">
              <transition name="left-right">
                <div class="upload-video" v-if="playBackMode==1">
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
              </transition>
              <transition name="left-right">
                <div class="play-content" v-if="playBackMode==2">
                  <div class="out-line">
                    <span>输入链接</span>
                    <com-input customClass="out-line-input" :value.sync="outLineLink"
                               placeholder="请输入链接"></com-input>
                    <el-button class="live-btn" type="primary" plain @click="preViewOutLine">确定</el-button>
                  </div>
                  <div class="out-line">
                    <span>链接预览</span>
                    <div class="play-box">
                      <span v-if="!playBack.outLineLink">暂无预览</span>
                      <div class="iframe-box" v-if="playBack.outLineLink" v-html="playBack.outLineLink"></div>
                    </div>
                  </div>
                </div>
              </transition>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="step-btns">
      <el-button class="live-btn fl" type="primary" plain @click="">保存</el-button>
    </div>
  </div>
</template>

<script>
  import VeUpload from 'src/components/ve-upload'
  import veMsgTips from 'src/components/ve-msg-tips'

  const outLineMode = {
    'FOREVER': 'forever',
    'TIMING': 'timing'
  }
  export default {
    name: 'play-back',
    components: {VeUpload, veMsgTips},
    data () {
      return {
        vhallParams: {
          sign: '41256133923f50e3ae298e5f89b784b5', // 生成的鉴权信息
          signed_at: '1534486369', // 鉴权信息生成的时间戳
          app_id: 'e909e583',
          access_token: 'access:e909e583:85615832f2d648f7',
          recordId: '',
          accountId: 'v770'
        },
        playBack: {
          isSwitch: true,
          outLineMode: '',
          outLineTime: '',
          playBackCover: '',
          recordId: '',
          outLineLink: ''
        },
        options: [
          {value: '0', label: '默认回放'},
          {value: '1', label: '上传视频'},
          {value: '2', label: '外部链接'}
        ],
        outLineLink: '',
        outLineMode: '0',
        playBackMode: '0',
        loading: false,
        uploadImgErrorMsg: '',
        uploadErrorMsg: '',
        percentVideo: ''
      }
    },
    watch: {
      outLineMode (newVal) {
        if (newVal !== '1') { // 永不下线
          this.playBack.outLineMode = outLineMode.FOREVER
          this.playBack.outLineTime = ''
        } else { // 定时下线
          this.playBack.outLineMode = outLineMode.TIMING
        }
      }
    },
    methods: {
      preViewOutLine () {
        const reg = /^<embed|<iframe.*(embed>|iframe>)$/
        if (reg.test(this.outLineLink)) {
          this.playBack.outLineLink = '<embed src="http://player.video.iqiyi.com/aea7e1cbc3ff0e7cdafefaae05d72e11/0/0/v_19rqzip0sw.swf-albumId=1278839100-tvId=1278839100-isPurchase=0-cnId=6" allowFullScreen="true" quality="high" width="480" height="350" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash"></embed>'
        } else {
          this.$toast({
            header: `提示`,
            content: '格式不正确',
            autoClose: 2000,
            position: 'top-center'
          })
        }
      },
      uploadImgSuccess (data) {
        this.playBack.playBackCover = data.name
      },
      uploadError (data) {
        console.log('上传失败:', data)
        this.uploadImgErrorMsg = '上传图片失败'
      },
      uploadVideo () {
        document.getElementById('upload').click()
      },
      initVhallUpload () {
        window.vhallCloudDemandSDK('#upload', {
          params: {
            confirmBtn: '#confirmUpload', // 保存按钮的ID
            name: '#rename', // 用于修改文件名称的input的ID
            sign: this.vhallParams.sign, // 生成的鉴权信息
            signed_at: this.vhallParams.signed_at, // 鉴权信息生成的时间戳
            app_id: this.vhallParams.app_id
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
            this.recordId.record_id = res.record_id
          },
          error: (msg, file, e) => {
            this.loading = false
            this.uploadErrorMsg = msg
          }
        })
      }
    }
  }
</script>
<style lang="scss" scoped src="../css/live.scss">
</style>
<style lang="scss" scoped>
  .msg-tip-box {
    display: inline-block;
    position: relative;
    font-size: 12px;
    height: 20px;
    i {
      display: inline-block;
      width: 20px;
      height: 20px;
      line-height: 20px;
      text-align: center;
      border: solid 1px #e5e5e5;
      border-radius: 50%;
      &:hover {
        cursor: pointer;
        opacity: .8;
      }
    }
    span {
      display: inline-block;
      max-width: 400px;
      border: solid 1px #e5e5e5;
      padding: 5px;
      background-color: rgba(0, 0, 0, .8);
      color: #fff;
      vertical-align: top;
      opacity: 0;
      word-wrap: break-word;
      word-break: break-all;
      transform: translateY(-50%);
      margin-top: 15px;
    }
    i:hover + span {
      opacity: 1;
      transition: opacity 1s;
    }
  }
  .black-box {
    margin-top: 20px;
    .el-date-editor {
      margin-left: 10px;
    }
    .play-content {
      .out-line {
        margin: 10px 0;
        span {
          display: inline-block;
          margin-right: 20px;
        }
        .out-line-input {
          width: 400px;
        }
      }
      .play-box {
        display: inline-block;
        width: 474px;
        height: 266.6px;
        line-height: 266px;
        vertical-align: top;
        background-color: #666666;
        color: #fff;
        .iframe-box {
          height: 100%;
        }
      }
    }
  }
</style>
