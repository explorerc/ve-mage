<template>
  <div class="live-mager">
    <div class="live-title">
      <span>活动回放</span>
      <span class="msg-tip">所有回放的设置都在本页配置，发起页前端不再有任何回放的设置项。</span>
    </div>
    <!-- 重命名 -->
    <message-box
      v-show="renameShow"
      header=""
      cancelText="取消"
      confirmText='确定'
      @handleClick="renameHandleClick">
      <div class="prop-input">
        输入新的视频标题：
        <com-input :value.sync="newTitle"/>
      </div>
    </message-box>
    <!-- 添加视频 -->
    <message-box
      v-show="addVideoShow"
      width="646px"
      header="添加视频"
      cancelText="取消"
      confirmText='确定'
      @handleClick="addVideohandleClick">
      <div class="mager-box message-box-content">
        <div class="from-box">
          <div class="from-row">
            <div class="from-title">视频类型：</div>
            <div class="from-content">
              <el-radio v-model="playBackMode" label="0">上传视频</el-radio>
              <el-radio v-model="playBackMode" label="1">链接引用</el-radio>
            </div>
          </div>
          <div class="from-row" v-if="playBackMode==0">
            <div class="from-title">上传视频：</div>
            <div class="from-content">
              <ve-upload-video
                title="视频仅支持mp4格式，文件大小不超过200M"
                accept="mp4"
                :fileSize="204800"
                :sdk="sdkUploadParam"
                @success="uploadVideoSuccess"></ve-upload-video>
            </div>
          </div>
          <div class="from-row" v-else>
            <div class="from-title">视频链接：</div>
            <div class="from-content">
              <com-input class="out-line-input" :value.sync="outLineLink"
                         placeholder="请输入链接"></com-input>
            </div>
          </div>
          <div class="from-row">
            <div class="from-title">视频标题：</div>
            <div class="from-content">
              <com-input :value.sync="newTitle"/>
            </div>
          </div>
        </div>
      </div>
    </message-box>
    <!-- 回放设置 -->
    <message-box
      v-show="playBackShow"
      width="600px"
      header="设置默认回放"
      cancelText="取消"
      confirmText='确定'
      @handleClick="savePlayBackConfig">
      <div class="mager-box message-box-content">
        <div class="from-box">
          <div class="from-row">
            <div class="from-title">回放封面：</div>
            <div class="from-content">
              <div class="from-content">
                <ve-upload
                  title="点击上传封面"
                  accept="png|jpg|jpeg"
                  :defaultImg="defaultImg"
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
            <div class="from-title">下线设置：</div>
            <div class="from-content">
              <el-radio v-model="outLineMode" label="0">与活动同步下线</el-radio>
              <el-radio v-model="outLineMode" label="1">指定下线时间</el-radio>
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
        </div>
      </div>
    </message-box>
    <transition name="fade">
      <div class="video-modal-box" v-if="prePlayShow">
        <div class="video-modal" @click="prePlayShow=false"></div>
        <div class="video-content">
          <div class="iframe-box" v-if="playBack.outLineLink">
            <div v-html="playBack.outLineLink" style="width:100%;height: 100%;"></div>
          </div>
          <span v-else-if="!recordId||playMsg">{{playMsg||'暂无视频'}}</span>
          <div id="myVideo" v-else style="width:100%; height:100%;"></div>
        </div>
      </div>
    </transition>
    <div class="list-box">
      <div>
        <nav class="table-nav">
          <span :class="{active:navIdx===0}" @click="changeNav(0)">回放片段</span>
          <span :class="{active:navIdx===1}" @click="changeNav(1)">视频</span>
        </nav>
        <ve-msg-tips tip='您可以根据需要从回放片段或视频中设置默认回放'></ve-msg-tips>
        <button class="primary-button fr" plain @click="addVideoShow=true">添加视频</button>
      </div>
      <el-table
        :data="playBackList"
        style="width: 100%">
        <el-table-column
          label="缩略图">
          <template slot-scope="scope">
            <img class="play-back-img" :src="playBackList[scope.$index].pic">
          </template>
        </el-table-column>
        <el-table-column
          prop="title"
          label="片段名">
        </el-table-column>
        <el-table-column
          prop="duration"
          label="时长">
        </el-table-column>
        <el-table-column
          prop="generateTime"
          label="生成时间">
        </el-table-column>
        <el-table-column
          label="操作">
          <template slot-scope="scope">
            <el-button
              type="text" size="small"
              v-if="playBackList[scope.$index].replayId == playBack.replayId"
              @click.stop="">默认回放
            </el-button>
            <el-button
              type="text" size="small"
              v-else
              @click.stop="playBackSetting(scope.$index)">设为默认回放
            </el-button>
            <div class="more">
              <span>更多</span>
              <div class="more-menu">
                <span @click="handlerMore(scope.$index, 0)" :class="{disabled:playBackList[scope.$index].type=='LINK'}">下载</span>
                <span @click="handlerMore(scope.$index, 1)">预览</span>
                <span @click="handlerMore(scope.$index, 2)">重命名</span>
                <span @click="handlerMore(scope.$index, 3)">删除</span>
              </div>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  import VeUpload from 'src/components/ve-upload-image'
  import VeUploadVideo from 'src/components/ve-upload-video'
  import veMsgTips from 'src/components/ve-msg-tips'
  import PlayBackHttp from 'src/api/play-back'
  import LiveHttp from 'src/api/activity-manger'

  const outLineMode = {
    'FOREVER': 'NEVER',
    'TIMING': 'PLAN'
  }
  export default {
    name: 'play-back',
    components: {VeUpload, veMsgTips, VeUploadVideo},
    data () {
      return {
        navIdx: 0,
        addVideoShow: false,
        renameShow: false,
        playBackShow: false,
        newTitle: '',
        selectRowIdx: 0,
        sdkUploadParam: { // sdk上传插件初始化参数
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
        playBack: {
          isSwitch: true,
          replayId: '',
          outLineMode: '',
          outLineTime: '',
          playBackCover: '',
          recordId: '',
          outLineLink: ''
        },
        playBackList: [],
        options: [
          {value: '0', label: '默认回放'},
          {value: '1', label: '上传视频'},
          {value: '2', label: '外部链接'}
        ],
        recordId: '',
        activityId: '',
        page: 1,
        pageSize: 5,
        total: 0,
        outLineLink: '',
        outLineMode: '0',
        playBackMode: '0',
        uploadImgErrorMsg: '',
        uploadErrorMsg: '',
        playMsg: '',
        prePlayShow: false
      }
    },
    computed: {
      defaultImg () {
        if (!this.playBack.playBackCover) {
          return ''
        }
        return `${this.$imgHost}/${this.playBack.playBackCover}`
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
    created () {
      this.activityId = this.$route.params.id
      this.initPage()
    },
    methods: {
      initPage () {
        PlayBackHttp.queryPlayBack({
          activityId: this.activityId
        }).then((res) => {
          this.playBack = {
            replayId: res.data.replayId,
            outLineMode: res.data.offlineType,
            outLineTime: res.data.offlineTime,
            playBackCover: res.data.cover,
            outLineLink: ''
          }
          this.outLineMode = res.data.offlineType === outLineMode.TIMING ? '1' : '0'
        }).then(() => {
          this.queryPlayBackList()
          /* 获取pass信息 */
          LiveHttp.queryPassSdkInfo().then((res) => {
            // this.vhallParams = res.data
            /* $nextTick保证dom被渲染之后进行paas插件初始化 */
            this.$nextTick(() => {
              // 初始化pass上传插件
              // this.initVhallUpload()
              this.sdkUploadParam = {
                sign: res.data.sign,
                signed_at: res.data.signedAt,
                app_id: res.data.appId
              }
              this.sdkPlayParam = {
                app_id: res.data.appId,
                accountId: res.data.accountId,
                token: res.data.token,
                recordId: '',
                linkVideo: ''
              }
            })
          })
        })
      },
      queryPlayBackList () {
        PlayBackHttp.queryPlayBackList({
          activityId: this.activityId,
          page: this.page,
          pageSize: this.pageSize,
          type: this.navIdx === 0 ? 'SLICE' : ''
        }).then((res) => {
          this.playBackList = res.data.list
          this.total = res.data.total
        })
      },
      changeNav (idx) {
        this.page = 0
        this.total = 0
        this.navIdx = idx
        this.queryPlayBackList()
      },
      playBackSetting (idx) {
        this.playBackShow = true
        this.selectRowIdx = idx
      },
      /* 更多 */
      handlerMore (idx, type) {
        this.selectRowIdx = idx
        const playBack = this.playBackList[this.selectRowIdx]
        if (type === 0) { // 下载
          this.downLoadVideo()
        } else if (type === 1) { // 预览
          if (playBack.type === 'LINK') { /* 外链 */
            this.sdkPlayParam.outLineLink = playBack.link
            this.sdkPlayParam.recordId = ''
          } else {
            this.sdkPlayParam.recordId = playBack.video
            this.sdkPlayParam.outLineLink = ''
          }
          // 播放器进行播放
          this.$playVideo({
            ...this.sdkPlayParam
          })
        } else if (type === 2) { // 重命名
          this.newTitle = playBack.title
          this.renameShow = true
        } else if (type === 3) { // 删除
          this.delPlayBack()
        }
      },
      /* 下载 */
      downLoadVideo () {
        const playBack = this.playBackList[this.selectRowIdx]
        if (playBack.downloadUrl) {
          let dl = document.createElement('a')
          dl.href = playBack.downloadUrl
          dl.click()
          return
        }
        PlayBackHttp.downloadVideo(playBack.replayId).then((res) => {
          console.log(res)
        })
      },
      /* 添加视频 */
      addVideohandleClick (e) {
        if (e.action === 'confirm') {
          if (this.playBackMode === '0') {
            this.outLineLink = ''
          } else if (this.playBackMode === '1') {
            this.recordId = ''
            if (!this.preViewOutLine()) return
          }
          PlayBackHttp.createPlayBack({
            activityId: this.activityId,
            title: this.newTitle,
            type: this.playBackMode !== '0' ? 'LINK' : 'VIDEO',
            link: this.outLineLink,
            video: this.recordId
          }).then((res) => {
            if (res.code === 200) {
              this.navIdx = 1
              this.queryPlayBackList()
            }
          })
        }
        this.addVideoShow = false
      },
      /* 重命名 */
      renameHandleClick (e) {
        this.renameShow = false
        if (e.action === 'confirm') {
          this.updataTitle()
        }
      },
      /* 设置默认回放 */
      savePlayBackConfig (e) {
        if (e.action === 'confirm') {
          if (this.outLineMode === '0') {
            this.playBack.outLineTime = ''
          }
          PlayBackHttp.savePlayBackConfig({
            replayId: this.playBackList[this.selectRowIdx].replayId,
            cover: this.playBack.playBackCover,
            offlineType: this.outLineMode === '0' ? 'NEVER' : 'PLAN',
            offlineTime: this.playBack.outLineTime
          }).then((res) => {
            console.log(res)
          })
        }
        this.playBackShow = false
      },
      updataTitle () {
        let playBack = this.playBackList[this.selectRowIdx]
        PlayBackHttp.retitlePlayBack(playBack.replayId, this.newTitle).then((res) => {
          if (res.code === 200) {
            playBack.title = this.newTitle
          }
        })
      },
      delPlayBack () {
        const delId = this.playBackList[this.selectRowIdx].replayId
        PlayBackHttp.deletePlayBackById(delId).then((res) => {
          if (res.code === 200) {
            this.$toast({
              header: `提示`,
              content: '删除成功！',
              autoClose: 2000,
              position: 'right-top'
            })
            this.queryPlayBackList()
          }
        })
      },
      preViewOutLine () {
        const reg = /^<embed|<iframe.*(embed>|iframe>)$/
        if (reg.test(this.outLineLink)) {
          this.playBack.outLineLink = this.outLineLink
        } else {
          this.$toast({
            header: `提示`,
            content: '格式不正确',
            autoClose: 20000,
            position: 'top-center'
          })
          return false
        }
        return true
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
      uploadVideoSuccess (recordId) {
        this.recordId = recordId
      },
      videosSuccess () {
        // if (!this.recordId) return
        // window.Vhall.ready(() => {
        //   window.VhallPlayer.init({
        //     recordId: this.recordId, // 回放Id，点播必填，直播不写
        //     type: 'vod', // 播放类型,必填，live 直播, vod 为点播
        //     videoNode: 'myVideo', // 推流视频回显节点id，必填
        //     complete: function () {
        //       window.VhallPlayer.play()
        //     },
        //     fail: (msg) => {
        //       this.playMsg = `${msg}...,稍后刷新页面即可看到预览视频`
        //     }
        //   })
        // })
        // /* 初始化配置 */
        // window.Vhall.config({
        //   appId: this.vhallParams.appId, // 应用 ID ,必填
        //   accountId: this.vhallParams.accountId, // 第三方用户唯一标识,必填
        //   token: this.vhallParams.token // token必填
        // })
      }
    }
  }
</script>
<style lang="scss" scoped src="../css/live.scss">
</style>
<style lang="scss">
  .list-box .el-table .cell {
    overflow: visible;
  }
</style>
<style lang="scss" scoped>
  @import '~assets/css/variable';

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
        min-height: 266.6px;
        line-height: 266px;
        vertical-align: top;
        background-color: #666666;
        color: #fff;
        .iframe-box {
          height: 100%;
          width: 100%;
        }
      }
    }
  }

  .list-box {
    margin: 10px 0;
  }

  .step-btns {
    margin-left: 150px;
  }

  .play-back-img {
    width: 200px;
    height: 130px;
  }

  .table-nav {
    display: inline-block;
    margin: 10px 0;
    font-size: 0;
    border: solid 1px #e5e5e5;
    span {
      display: inline-block;
      width: 120px;
      line-height: 34px;
      text-align: center;
      font-size: 14px;
      &.active {
        background-color: $color-bg-btn;
      }
      &:hover {
        cursor: pointer;
        opacity: 0.8;
      }
    }
  }

  .more {
    display: inline-block;
    position: relative;
    padding: 0 5px;
    font-size: 12px;
    color: #409eff;
    cursor: pointer;
    text-align: center;
    &:hover .more-menu {
      display: block;
    }
    .more-menu {
      display: none;
      position: absolute;
      top: -30px;
      left: 34px;
      width: 50px;
      z-index: 9999999;
      color: #666;
      border: solid 1px #e5e5e5;
      span {
        display: block;
        padding: 0;
        &:hover {
          color: #409eff;
        }
      }
    }
  }

  .prop-input {
    text-align: left;
    margin: 20px;
    font-size: 14px;
    .com-input {
      width: 258px;
      margin: 5px 0;
    }
  }

  .message-box-content {
    text-align: left;
    .from-title {
      width: 100px !important;
    }
    .upload-tips {
      width: 273px !important;
    }
  }

  .video-modal-box {
    .video-modal {
      display: block;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 10;
    }
    .video-content {
      position: absolute;
      width: 800px;
      height: 450px;
      line-height: 450px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      vertical-align: top;
      background-color: #333333;
      color: #fff;
      text-align: center;
      z-index: 11;
      .iframe-box {
        height: 100%;
        width: 100%;
      }
    }
  }
</style>
