<template>
  <div class="live-mager play-back">
    <div class="live-title"
         style="margin-top: 30px;">
      <span class="title">活动回放</span>
      <!--<span class="msg-tip">所有回放的设置都在本页配置，发起页前端不再有任何回放的设置项。</span>-->
      <button class="primary-button fr"
              style="margin-top: 10px;"
              @click="addVideoClickShow">添加视频
      </button>
    </div>
    <transition name="fade">
      <div class="video-modal-box"
           v-if="prePlayShow">
        <div class="video-modal"
             @click="prePlayShow=false"></div>
        <div class="video-content">
          <div class="iframe-box"
               v-if="playBack.outLineLink">
            <div v-html="playBack.outLineLink"
                 style="width:100%;height: 100%;"></div>
          </div>
          <span v-else-if="!recordId||playMsg">{{playMsg||'暂无视频'}}</span>
          <div id="myVideo"
               v-else
               style="width:100%; height:100%;"></div>
        </div>
      </div>
    </transition>
    <div class="list-box">
      <div class="list-header">
        <nav class="table-nav">
          <span :class="{active:navIdx===0}"
                @click="changeNav(0)">回放片段</span>
          <span :class="{active:navIdx===1}"
                @click="changeNav(1)">视频</span>
        </nav>
        <ve-msg-tips tip='您可以根据需要从回放片段或视频中设置默认回放'></ve-msg-tips>
      </div>
      <div class="table-list-box">
        <el-table :data="playBackList"
                  style="width: 100%">
          <!--<el-table-column-->
          <!--label="缩略图">-->
          <!--<div slot-scope="scope" class="play-back-cover">-->
          <!--<span class="play-back-default" v-if="playBackList[scope.$index].replayId == playBack.replayId">回放</span>-->
          <!--<img class="play-back-img" :src="playBackList[scope.$index].pic">-->
          <!--</div>-->
          <!--</el-table-column>-->
          <el-table-column prop="title"
                           label="片段名">
          </el-table-column>
          <el-table-column prop="duration"
                           label="时长">
            <template slot-scope="scope">
              {{scope.row.duration | formatTime}}
            </template>
          </el-table-column>
          <el-table-column label="生成时间">
            <template slot-scope="scope">
              {{scope.row.generateTime | isEmpty}}
            </template>
          </el-table-column>
          <el-table-column label="回放状态">
            <template slot-scope="scope">
              <span class="status-success"
                    v-if="scope.row.status=='SUCCESS'">生成成功</span>
              <span class="status-error"
                    v-else-if="scope.row.status=='FAIL'">生成失败</span>
              <span class="status-default"
                    v-else>生成中</span>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <div v-if="scope.row.status=='FAIL'">
                <el-button type="text"
                           size="small"
                           @click.stop="resetMakePlayBack(scope.$index)">重新生成回放
                </el-button>
              </div>
              <div v-else-if="scope.row.status!=='PROCESS'">
                <el-button type="text"
                           size="small"
                           v-if="playBackList[scope.$index].replayId == playBack.replayId"
                           @click.stop="cancelPlayBack(scope.$index)">取消默认回放
                </el-button>
                <el-button type="text"
                           size="small"
                           v-else
                           @click.stop="playBackSetting(scope.$index)">设为默认回放
                </el-button>
                <el-button type="text"
                           size="small"
                           style="color: blue;"
                           @click.stop="handlerMore(scope.$index, 1)">预览
                </el-button>
                <div class="more">
                  <span>更多</span>
                  <div class="more-menu">
                    <span @click="handlerMore(scope.$index, 0)"
                          :class="{disabled:playBackList[scope.$index].type=='LINK'}">下载</span>
                    <!--<span @click="handlerMore(scope.$index, 1)">预览</span>-->
                    <span @click="handlerMore(scope.$index, 2)">重命名</span>
                    <span @click="handlerMore(scope.$index, 3)">删除</span>
                  </div>
                </div>
              </div>
              <span v-else>--</span>
            </template>
          </el-table-column>
        </el-table>
        <div class="pagination-box"
             v-if="total>pageSize">
          <div class="page-pagination">
            <ve-pagination :total="total"
                           :pageSize="pageSize"
                           :currentPage="page"
                           @changePage="changePage"/>
          </div>
        </div>
      </div>
    </div>
    <!-- 重命名 -->
    <message-box v-show="renameShow"
                 header=""
                 width="340px"
                 cancelText="取消"
                 confirmText='确定'
                 @handleClick="renameHandleClick">
      <div class="prop-input">
        输入新的视频标题：
        <com-input placeholder="请输入标题"
                   :error-tips="newTitleError"
                   :value.sync="newTitle"/>
      </div>
    </message-box>
    <!-- 添加视频 -->
    <message-box v-show="addVideoShow"
                 width="646px"
                 header="添加视频"
                 type="prompt"
                 cancelText="取消"
                 confirmText='确定'
                 @handleClick="addVideohandleClick">
      <div class="mager-box message-box-content">
        <div class="from-box">
          <div class="from-row">
            <div class="from-title"><i class="star">*</i>视频类型：</div>
            <div class="from-content">
              <el-radio v-model="playBackMode"
                        label="0">上传视频
              </el-radio>
              <el-radio v-model="playBackMode"
                        label="1">链接引用
              </el-radio>
              <div class="from-msg-tip">
                <ve-msg-tips
                  tip='您可以直接引用视频网站上的资源，将播放地址复制到输入框。比如爱奇艺或腾讯视频“分享”中的“通用代码”，示例如下：<iframe frameborder="0" width="640" height="498" src="https://v.qq.com/iframe/player.html?vid=zxxx7hcc6iu&tiny=0&auto=0" allowfullscreen></iframe>'></ve-msg-tips>
              </div>
            </div>
          </div>
          <div class="from-row"
               v-if="playBackMode==0">
            <div class="from-title"><i class="star">*</i>上传视频：</div>
            <div class="from-content">
              <ve-upload-video title="视频仅支持mp4格式，文件大小不超过4G"
                               accept="mp4"
                               :fileSize="4096000"
                               :errorMsg="recordIdError"
                               :sdk="sdkParam"
                               @handleClick="handleVideoClick"
                               @error="errorUploadVideo"
                               @success="uploadVideoSuccess"></ve-upload-video>
            </div>
          </div>
          <div class="from-row input-box"
               v-else>
            <div class="from-title"><i class="star">*</i>视频链接：</div>
            <div class="from-content">
              <div class="black-box">
                <com-input class="out-line-input"
                           :error-tips="outLineError"
                           :value.sync="outLineLink"
                           placeholder="请输入链接"></com-input>
              </div>
            </div>
          </div>
          <div class="from-row input-box">
            <div class="from-title"><i class="star">*</i>视频标题：</div>
            <div class="from-content">
              <div class="black-box">
                <com-input placeholder="请输入标题"
                           :error-tips="newTitleError"
                           :max-length="30"
                           :value.sync="newTitle"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </message-box>
    <!-- 回放设置 -->
    <message-box v-show="playBackShow"
                 width="646px"
                 type="prompt"
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
                <ve-upload-image title="图片支持jpg、png、bmp格式，建议比例16:9，大小不超过2M"
                                 accept="png|jpg|jpeg"
                                 :defaultImg="defaultImg"
                                 :fileSize="2048"
                                 :errorMsg="uploadImgErrorMsg"
                                 @error="uploadError"
                                 @success="uploadImgSuccess"></ve-upload-image>
              </div>
            </div>
          </div>
          <div class="from-row">
            <div class="from-title"><i class="star">*</i>下线设置：</div>
            <div class="from-content">
              <el-radio v-model="outLineMode"
                        label="0">与活动同步下线
              </el-radio>
              <el-radio v-model="outLineMode"
                        label="1">指定下线时间
              </el-radio>
            </div>
          </div>
          <transition name="left-right">
            <div class="from-row input-box"
                 v-if="outLineMode==1">
              <div class="from-title"><i class="star">*</i>下线时间：</div>
              <div class="from-content">
                <div class="black-box">
                  <el-date-picker v-model="playBack.outLineTime"
                                  type="datetime"
                                  placeholder="选择日期时间"
                                  align="right"
                                  :editable="false"
                                  format="yyyy-MM-dd HH:mm"
                                  value-format="yyyy-MM-dd HH:mm">
                  </el-date-picker>
                  <span class="status-error"
                        v-if="outLineError">{{outLineError}}</span>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </message-box>
  </div>
</template>

<script>
  import VeUploadImage from 'src/components/ve-upload-image'
  import VeUploadVideo from 'src/components/ve-upload-video'
  import VePagination from 'src/components/ve-pagination'
  import veMsgTips from 'src/components/ve-msg-tips'
  import playbackService from 'src/api/playback-service'
  import ChatConfig from 'src/api/chat-config'
  import ChatService from 'components/chat/ChatService.js'

  const outLineMode = {
    'FOREVER': 'NEVER',
    'TIMING': 'PLAN'
  }
  export default {
    name: 'play-back',
    components: { VeUploadImage, veMsgTips, VeUploadVideo, VePagination },
    data () {
      return {
        navIdx: 0,
        addVideoShow: false,
        renameShow: false,
        playBackShow: false,
        newTitle: '',
        selectRowIdx: 0,
        sdkParam: { // sdk上传插件初始化参数
          sign: '',
          signed_at: '',
          app_id: '',
          fileName: '',
          fileSize: ''
        },
        sdkPlayParam: { // sdk播放器初始化参数
          app_id: '',
          accountId: '',
          token: '',
          recordId: '', // 回放视频id
          linkVideo: '' // 外链视频
        },
        tempPlayBackCover: '',
        playBack: {
          isSwitch: true,
          replayId: '',
          outLineMode: '',
          outLineTime: '',
          playBackCover: '',
          recordId: '',
          outLineLink: ''
        },
        outLineError: '',
        recordIdError: '',
        newTitleError: '',
        playBackList: [],
        isLoadingList: false,
        options: [
          { value: '0', label: '默认回放' },
          { value: '1', label: '上传视频' },
          { value: '2', label: '外部链接' }
        ],
        recordId: '',
        activityId: '',
        page: 1,
        pageSize: 25,
        total: 0,
        outLineLink: '',
        outLineMode: '0',
        playBackMode: '0',
        uploadErrorMsg: '',
        uploadImgErrorMsg: '',
        playMsg: '',
        prePlayShow: false
      }
    },
    filters: {
      formatTime: function (value) {
        if (value) {
          let h = ((value / 3600 >> 0) + '').padStart(2, 0)
          let m = ((value / 60 % 60 >> 0) + '').padStart(2, 0)
          let s = ((value % 60 >> 0) + '').padStart(2, 0)
          return `${h}:${m}:${s}`
        }
        return value || '--'
      }
    },
    computed: {
      defaultImg () {
        if (!this.tempPlayBackCover) {
          return ''
        }
        return `${this.$imgHost}/${this.tempPlayBackCover}`
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
      },
      'playBack.outLineTime' (newVal) {
        this.outLineError = newVal ? '' : this.outLineError
      },
      outLineLink (newVal) {
        this.outLineError = newVal ? '' : this.outLineError
      },
      recordId (newVal) {
        this.recordIdError = newVal ? '' : this.recordIdError
      },
      newTitle (newVal) {
        this.newTitleError = newVal ? '' : this.newTitleError
      }
    },
    created () {
      this.activityId = this.$route.params.id
      this.initPage()
    },
    methods: {
      initPage () {
        this.$get(playbackService.GET_PLAYBACK, {
          activityId: this.activityId
        }).then((res) => {
          this.playBack = {
            replayId: res.data.replayId,
            outLineMode: res.data.offlineType,
            outLineTime: res.data.offlineTime,
            playBackCover: res.data.cover,
            outLineLink: ''
          }
          this.tempPlayBackCover = res.data.cover
          this.outLineMode = res.data.offlineType === outLineMode.TIMING ? '1' : '0'
        }).then(() => {
          this.queryPlayBackList()
          /* 获取pass信息 */
          this.$get(playbackService.GET_PAAS_SDK_INFO).then((res) => {
            // this.vhallParams = res.data
            /* $nextTick保证dom被渲染之后进行paas插件初始化 */
            this.$nextTick(() => {
              // 初始化pass上传插件
              // this.initVhallUpload()
              this.sdkParam.sign = res.data.sign
              this.sdkParam.signed_at = res.data.signedAt
              this.sdkParam.app_id = res.data.appId
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
        this.initMsgServe()
      },
      async initMsgServe () {
        const loginInfo = JSON.parse(sessionStorage.getItem('accountInfo'))
        const roomInfo = await this.$get(playbackService.GET_REG_SDK_INFO, {
          thirdUserId: loginInfo.businessUserId,
          channel: loginInfo.channelRoom
        }).then(res => {
          return res.data
        })
        ChatService.OBJ.init({
          accountId: roomInfo.accountId,
          token: roomInfo.token,
          appId: roomInfo.appId,
          channelId: roomInfo.channelRoom
        })
        /* 监听下载消息 */
        ChatService.OBJ.regHandler(ChatConfig.download, (msg) => {
          this.downLoadVideo()
        })
      },
      changePage (currentPage) {
        this.page = currentPage
        this.queryPlayBackList()
      },
      queryPlayBackList () {
        if (this.isLoadingList) return
        this.isLoadingList = true
        this.$config({ handlers: true }).$get(playbackService.GET_PLAYBACK_LIST, {
          activityId: this.activityId,
          page: this.page,
          pageSize: this.pageSize,
          type: this.navIdx === 0 ? 'SLICE' : ''
        }).then((res) => {
          this.isLoadingList = false
          this.playBackList = res.data.list
          this.total = res.data.total
        }).catch(() => {
          this.isLoadingList = false
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
        this.tempPlayBackCover = this.playBack.playBackCover
      },
      /* 取消默认回放 */
      cancelPlayBack (idx) {
        this.$post(playbackService.POST_CANCEL_PLAYBACK_CONFIG, {
          activityId: this.activityId
        }).then((res) => {
          this.playBack.replayId = ''
        })
      },
      /* 重新生成回放 */
      resetMakePlayBack (idx) {
        this.selectRowIdx = idx
        const playBack = this.playBackList[this.selectRowIdx]
        this.$post(playbackService.POST_REMAKE_PLAYBACK, {
          replayId: playBack.replayId
        }).then((res) => {
          playBack.status = 'PROCESS'
          this.$toast({
            header: `提示`,
            content: '成功生成回放',
            autoClose: 2000,
            position: 'top-center'
          })
        })
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
        this.$config({ handlers: true }).$post(playbackService.POST_DOWNLOAD_VIDEO, {
          replayId: playBack.replayId
        }).then((res) => {
          if (res.data.downloadUrl) {
            let dl = document.createElement('a')
            dl.href = res.data.downloadUrl
            dl.click()
          }
        }).catch(e => {
          let errorMsg = e.msg || '网络异常'
          this.$messageBox({
            header: '提示',
            content: errorMsg,
            autoClose: 5,
            confirmText: '知道了'
          })
        })
      },
      addVideoClickShow () {
        this.recordId = ''
        this.outLineLink = ''
        this.newTitle = ''
        this.recordIdError = ''
        this.outLineError = ''
        this.newTitleError = ''
        this.addVideoShow = true
      },
      /* 添加视频 */
      addVideohandleClick (e) {
        if (e.action === 'confirm') {
          if (this.playBackMode === '0') {
            this.outLineLink = ''
            this.outLineError = ''
            if (!this.recordId) {
              this.recordIdError = '视频不能为空'
              return
            }
          } else if (this.playBackMode === '1') {
            this.recordId = ''
            this.recordIdError = ''
            if (!this.preViewOutLine()) return
          }
          if (!this.newTitle) {
            this.newTitleError = '视频标题不能为空'
            return
          }
          this.$post(playbackService.POST_CREATE_PLAYBACK, {
            activityId: this.activityId,
            title: this.newTitle,
            type: this.playBackMode !== '0' ? 'LINK' : 'VIDEO',
            link: this.outLineLink,
            video: this.recordId
          }).then((res) => {
            this.navIdx = 1
            this.queryPlayBackList()
          })
        } else {
          this.sdkParam.fileName = ''
          this.recordIdError = ''
          this.outLineError = ''
          this.newTitleError = ''
        }
        this.addVideoShow = false
      },
      /* 重命名 */
      renameHandleClick (e) {
        if (e.action === 'confirm') {
          if (!this.newTitle) {
            this.newTitleError = '标题不能为空'
            return
          }
          this.updataTitle()
        }
        this.renameShow = false
      },
      /* 设置默认回放 */
      savePlayBackConfig (e) {
        if (e.action === 'confirm') {
          if (this.outLineMode === '0') {
            this.playBack.outLineTime = ''
          } else {
            if (!this.playBack.outLineTime) {
              this.outLineError = '请填写下线时间'
              return
            }
          }
          this.playBack.playBackCover = this.tempPlayBackCover
          const replayId = this.playBackList[this.selectRowIdx].replayId
          this.$post(playbackService.POST_SAVE_PLAYBACK_CONFIG, {
            replayId: replayId,
            cover: this.playBack.playBackCover,
            offlineType: this.outLineMode === '0' ? 'NEVER' : 'PLAN',
            offlineTime: this.playBack.outLineTime
          }).then((res) => {
            this.playBack.replayId = replayId
          })
        } else {
          this.tempPlayBackCover = ''
          this.uploadImgErrorMsg = ''
          this.outLineError = ''
        }
        this.playBackShow = false
      },
      updataTitle () {
        let playBack = this.playBackList[this.selectRowIdx]
        this.$post(playbackService.POST_RETITLE_PLAYBACK, {
          replayId: playBack.replayId,
          title: this.newTitle
        }).then((res) => {
          playBack.title = this.newTitle
        })
      },
      delPlayBack () {
        this.$messageBox({
          header: '删除此视频',
          width: '400px',
          content: '您是否确定要删除此视频？',
          cancelText: '取消',
          confirmText: '删除',
          type: 'error',
          handleClick: (e) => {
            if (e.action === 'confirm') {
              const delId = this.playBackList[this.selectRowIdx].replayId
              this.$post(playbackService.POST_DELETE_PLAYBACK_BY_ID, {
                replayId: delId
              }).then((res) => {
                this.$toast({
                  header: `提示`,
                  content: '删除成功！',
                  autoClose: 2000,
                  position: 'right-top'
                })
                this.queryPlayBackList()
              })
            }
          }
        })
      },
      preViewOutLine () {
        if (!this.outLineLink) {
          this.outLineError = '视频链接不能为空'
          return false
        }
        const reg = /^<embed|<iframe.*(embed>|iframe>)$/
        if (reg.test(this.outLineLink)) {
          this.playBack.outLineLink = this.outLineLink
        } else {
          this.outLineError = '格式不正确'
          return false
        }
        return true
      },
      uploadImgSuccess (data) {
        this.tempPlayBackCover = data.name
      },
      uploadError (data) {
        this.uploadImgErrorMsg = data.msg
      },
      uploadVideo () {
        document.getElementById('upload').click()
      },
      errorUploadVideo (msg, file) {
        this.sdkParam.fileName = file.name
        this.recordIdError = msg
      },
      uploadVideoSuccess (recordId, fileName) {
        this.recordId = recordId
        this.sdkParam.fileName = fileName
      },
      /* 预览，删除触发 */
      handleVideoClick (e) {
        if (e.type === 'pre-view') { // 预览
          this.$playVideo({
            ...this.sdkPlayParam
          })
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
                this.recordId = ''
                this.sdkParam.fileName = ''
                this.sdkParam.fileSize = ''
              }
            }
          })
        }
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
  @import 'assets/css/variable.scss';

  .status-default {
    color: $color-blue;
  }

  .status-success {
    color: $color-success;
  }

  .status-error {
    color: $color-error;
  }

  .black-box {
    height: 60px;
    .el-date-editor {
      width: 100%;
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
    background-color: #fff;
    border-radius: 4px;
    .list-header {
      border-bottom: solid 1px $color-bd;
    }
  }

  .step-btns {
    margin-left: 150px;
  }

  .play-back-img {
    width: 104px;
    height: 58px;
  }

  .table-nav {
    display: inline-block;
    margin: 0 20px;
    font-size: 0;
    span {
      position: relative;
      display: inline-block;
      line-height: 34px;
      text-align: center;
      font-size: 14px;
      padding: 10px 8px 8px 8px;
      margin: 0 5px -1px 5px;
      &:after {
        display: block;
        position: absolute;
        content: '';
        bottom: 0;
        left: 0;
        width: 0;
        height: 2px;
        background-color: $color-blue;
        border-radius: 1px;
        transition: width 0.3s;
      }
      &.active {
        &:after {
          width: 100%;
          box-shadow: 0 0 1px $color-blue;
        }
      }
      &:hover {
        cursor: pointer;
        color: $color-blue;
      }
    }
  }

  .more {
    display: inline-block;
    position: relative;
    padding: 10px 5px;
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
      top: 36px;
      left: -22px;
      width: 80px;
      z-index: 9999999;
      color: #666;
      border: solid 1px #e5e5e5;
      background-color: #fff;
      border-radius: 4px;
      padding: 5px 0;
      span {
        display: block;
        padding: 5px 0;
        &:hover {
          color: #409eff;
          background-color: #f0f1fe;
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
      width: 102px !important;
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

  .play-back /deep/ {
    .ve-message-box__wrapper .ve-message-box {
      overflow: visible;
    }
  }
</style>

