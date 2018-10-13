<template>
  <div class="clearfix set-live-watch-container">
    <p class="v-title">
      直播观看页
    </p>
    <div class="v-content">
      <com-tabs :value.sync="tabValue">
        <com-tab label="品牌"
                 :index="1">
          <div class="v-brand clearfix">
            <div class="v-set pull-left">
              <div class="input-form v-label clearfix">
                <p class="v-info-label pull-left">
                  背景图片：
                </p>
                <ve-upload title="建议图片不小于1920*1080px<br/>支持jpg、jpeg、png格式，文件大小不超过2M"
                           accept="png|jpg|jpeg"
                           :defaultImg="defaultBgImg"
                           :fileSize="2048"
                           :errorMsg="uploadBgErrorMsg"
                           @error="uploadBgError"
                           @success="uploadBgSuccess"></ve-upload>
                <p class="v-notes">
                  注：背景图片，只对PC页面生效
                </p>
              </div>
              <div class="input-form v-label clearfix">
                <p class="v-info-label pull-left">
                  logo图片：
                </p>
                <ve-upload title="建议图片不小于140*50<br/>支持jpg、jpeg、png格式，文件大小不超过2M"
                           accept="png|jpg|jpeg"
                           :defaultImg="defaultLogoImg"
                           :fileSize="2048"
                           :errorMsg="uploadLogoErrorMsg"
                           @error="uploadLogoError"
                           @success="uploadLogoSuccess"></ve-upload>
                <p class="v-notes">
                  注：logo图片，只对PC页面生效
                </p>
              </div>
            </div>
            <div class="v-show pull-right">
              <div class="v-pc"
                   :style="{ backgroundImage: 'url(' + defaultBgImg + ')'}">
                <div class="clearfix"
                     style="padding-left: 30px;">
                  <template v-if="defaultLogoImg">
                    <img :src="defaultLogoImg"
                         alt="logo"
                         class="v-logo pull-left">
                  </template>
                  <div class="pull-left">
                    <p class="v-live-title">
                      {{activityTitle}}
                    </p>
                    <img src="../../assets/image/mac-icon@2x.png"
                         alt=""
                         class="v-pc-icon">
                  </div>
                </div>
                <div class="v-show-content">
                </div>
              </div>
              <p class="v-preview">品牌预览</p>
            </div>
          </div>
          <button @click='brandClick'
                  class='primary-button'>
            保存
          </button>
        </com-tab>
        <com-tab label="分享"
                 :index="2">
          <div class="v-share clearfix">
            <div class="v-set pull-left">
              <div class="input-form v-label clearfix">
                <p class="v-info-label pull-left">
                  分享图标：
                </p>
                <ve-upload title="建议图片不小于80*80px<br/>支持jpg、jpeg、png格式，文件大小不超过2M"
                           accept="png|jpg|jpeg"
                           :defaultImg="defaultShareImg"
                           :fileSize="2048"
                           :errorMsg="uploadShareErrorMsg"
                           @error="uploadShareError"
                           @success="uploadShareSuccess"></ve-upload>
              </div>
              <div class="input-form v-label clearfix">
                <p class="v-info-label pull-left">
                  <span class="v-red">*</span> 分享标题：
                </p>
                <div class="v-info pull-left">
                  <com-input :value.sync="shareTitle"
                             placeholder="标题"
                             :max-length="30"
                             :errorTips="errorTips"
                             @focus="shareTitleFocus"></com-input>
                  <p class="v-notes"
                     style="margin-top: 0;">
                    注：为了您的内容获得有效传播，建议标题长度不要超过
                    <span class="v-blue">14</span>个字
                  </p>
                </div>
              </div>
              <div class="input-form v-label clearfix v-shareIntroduction">
                <p class="v-info-label pull-left">
                  分享简介：
                </p>
                <p class="v-info pull-left">
                  <com-input type="textarea"
                             :value.sync="shareIntroduction"
                             placeholder="请输入分享简介"
                             :max-length="120"></com-input>
                </p>
              </div>
              <div class="input-form v-label clearfix">
                <p class="v-info-label pull-left">
                  应用页面：
                </p>
                <p class="v-info pull-left"
                   style="padding-top: 6px;">
                  <el-checkbox v-model="isShowWatch">直播观看页</el-checkbox>
                  <el-checkbox v-model="isShowOfficialWebsite">活动官网</el-checkbox>
                  <el-checkbox v-model="isShowGuided">直播引导页</el-checkbox>
                </p>
              </div>
            </div>
            <div class="v-show pull-left">
              <div class="clearfix">
                <div class="pull-left v-share-friend clearfix">
                  <p class="v-share-title">
                    {{shareTitle}}
                  </p>
                  <div class="v-show-content">
                    <div class="v-introduction">
                      {{shareIntroduction}}
                    </div>
                    <template v-if="defaultShareImg">
                      <img :src="defaultShareImg"
                           alt="分享图片"
                           class="v-show-img">
                    </template>
                  </div>
                </div>
                <img :src="avatarImg"
                     alt="头像"
                     class="v-avatar pull-left">
              </div>
              <p class="v-preview">预览</p>
              <!-- <div class="v-title">
                分享到朋友圈
              </div>
              <div class="v-share-friend-circle clearfix">
                <img src="" alt="头像" class="v-avatar">
                <span>微信昵称</span>
                <div class="v-content clearfix">
                  <img :src="defaultShareImg" alt="分享图标" class="v-show-img pull-left">
                  <p class="v-introduction pull-left">
                    {{shareIntroduction}}
                  </p>
                </div>
              </div> -->
            </div>
          </div>
          <button @click='shareClick'
                  class='primary-button v-share-button'>
            保存
          </button>
        </com-tab>
      </com-tabs>
    </div>
  </div>
</template>
<script>
import brandService from 'src/api/brand-service'
import VeUpload from 'src/components/ve-upload-image'
import userService from 'src/api/user-service'

export default {
  data () {
    return {
      activityId: 0,
      tabValue: 1, // 页签选择
      bgImgUrl: '', // 背景图片
      logoImgUrl: '', // logo图片
      shareImgUrl: '', // 分享图标
      shareTitle: '', // 分享标题
      shareIntroduction: '', // 分享简介
      isShowWatch: true, // 是否在直播观看页显示
      isShowOfficialWebsite: true, // 是否在活动官网显示
      isShowGuided: true, // 是否在直播引导页显示
      uploadBgErrorMsg: '', // 上传图片错误提示
      uploadLogoErrorMsg: '', // 上传图片错误提示
      uploadShareErrorMsg: '', // 上传图片错误提示
      avatar: '',
      canPass: true,
      activityTitle: '', // 活动标题
      errorTips: '' // 错误提示
    }
  },
  components: {
    VeUpload
  },
  created () {
    this.activityId = this.$route.params.id
    let data = {
      'activityId': this.activityId
    }
    if (!this.activityId) {
      this.$router.go(-1)
      return
    }
    let accountInfo = JSON.parse(sessionStorage.getItem('accountInfo'))
    if (accountInfo && accountInfo.userName) {
      this.name = accountInfo.name
      this.avatar = accountInfo.avatar
    } else {
      this.$get(userService.GET_ACCOUNT).then((res) => {
        this.name = res.data.name
        this.avatar = res.data.avatar
        sessionStorage.setItem('accountInfo', JSON.stringify(res.data))
      })
    }
    this.$get(brandService.GET_LIVE_SHARE, data).then(res => {
      if (res.data) {
        this.shareImgUrl = res.data.imgUrl ? res.data.imgUrl : ''
        this.shareTitle = res.data.title ? res.data.title : ''
        this.shareIntroduction = res.data.description ? res.data.description : ''
        this.isShowWatch = res.data.page.indexOf('live_route') > -1
        this.isShowOfficialWebsite = res.data.page.indexOf('officia_route') > -1
        this.isShowGuided = res.data.page.indexOf('guide_route') > -1
        this.tabValue = 1
        this.activityTitle = res.data.title ? res.data.title : ''
      }
    })
    this.$get(brandService.GET_LIVE_BRAND, data).then(res => {
      if (res.data) {
        this.bgImgUrl = res.data.backgroundUrl ? res.data.backgroundUrl : ''
        this.logoImgUrl = res.data.logoUrl ? res.data.logoUrl : ''
        this.tabValue = 1
      }
    })
  },
  computed: {
    defaultBgImg () {
      return this.bgImgUrl ? this.$imgHost + '/' + this.bgImgUrl : ''
    },
    defaultLogoImg () {
      return this.logoImgUrl ? this.$imgHost + '/' + this.logoImgUrl : ''
    },
    defaultShareImg () {
      return this.shareImgUrl ? this.$imgHost + '/' + this.shareImgUrl : ''
    },
    avatarImg: function () {
      return this.avatar ? this.$imgHost + '/' + this.avatar : ''
    }
  },
  mounted () {
  },
  watch: {
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
  methods: {
    uploadBgSuccess (data) {
      this.canPass = false
      this.bgImgUrl = data.name
    },
    uploadBgError (data) {
      debugger
      this.uploadBgErrorMsg = data.msg
      this.bgImgUrl = ''
    },
    uploadLogoSuccess (data) {
      this.canPass = false
      this.logoImgUrl = data.name
    },
    uploadLogoError (data) {
      this.uploadLogoErrorMsg = data.msg
      this.logoImgUrl = ''
    },
    uploadShareSuccess (data) {
      this.canPass = false
      this.shareImgUrl = data.name
    },
    uploadShareError (data) {
      this.uploadShareErrorMsg = data.msg
      this.shareImgUrl = ''
    },
    brandClick () { // 品牌设置保存
      let data = {
        'activityId': this.activityId,
        'backgroundUrl': this.bgImgUrl,
        'logoUrl': this.logoImgUrl
      }
      this.$config({handlers: true}).$post(brandService.POST_SET_LIVE_BRAND, data).then(res => {
        this.canPass = true
        this.$toast({
          content: '保存成功'
        })
      }).catch((err) => {
        this.$messageBox({
          header: '提示',
          content: err.msg,
          confirmText: '确定',
          handleClick: (e) => {
            if (e.action === 'cancel') {
            } else if (e.action === 'confirm') {
            }
          }
        })
      })
    },
    shareClick () { // 分享设置保存
      if (!this.shareTitle) {
        this.errorTips = '请填写标题'
        return false
      }
      let data = {
        'activityId': this.activityId,
        'title': this.shareTitle,
        'description': this.shareIntroduction,
        'imgUrl': this.shareImgUrl,
        'page': []
      }
      if (this.isShowWatch) {
        data.page.push('live_route')
      }
      if (this.isShowOfficialWebsite) {
        data.page.push('officia_route')
      }
      if (this.isShowGuided) {
        data.page.push('guide_route')
      }
      this.$config({handlers: true}).$post(brandService.POST_SET_LIVE_SHARE, data).then(res => {
        this.canPass = true
        this.$toast({
          content: '保存成功'
        })
      }).catch((err) => {
        this.$messageBox({
          header: '提示',
          content: err.msg,
          confirmText: '确定',
          handleClick: (e) => {
            if (e.action === 'cancel') {
            } else if (e.action === 'confirm') {
            }
          }
        })
      })
    },
    shareTitleFocus () {
      this.canPass = false
      this.errorTips = ''
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~assets/css/mixin.scss';
.set-live-watch-container /deep/ {
  /* 设备宽度大于 1600 */
  @media all and (min-width: 1600px) {
    width: 1366px;
  }
  /* 设备宽度小于 1600px */
  @media all and (max-width: 1600px) {
    width: 1019px;
  }
  margin: 0 auto;
  .v-title {
    line-height: 60px;
    margin: 30px 0;
    font-size: 24px;
    color: #222;
  }
  .v-content {
    margin-top: 26px;
    width: 100%;
    min-height: 835px;
    background-color: #fff;
    border: 1px solid #e2e2e2;
    border-radius: 4px;
    .tab-header-wrap {
      border-bottom: 1px solid #e2e2e2;
      .tab-item {
        height: 60px;
        line-height: 60px;
        border-radius: 1.5px;
        border-bottom: 2px solid rgba(0, 0, 0, 0);
        margin: 0 22px;
        font-size: 18px;
        color: #555;
        &.active {
          border-color: #4b5afe;
          color: #555;
        }
      }
    }
    .v-set {
      .input-form {
        position: relative;
        margin-bottom: 30px;
        .v-info-label {
          font-size: 14px;
          color: #555;
          width: 100px;
          padding-top: 6px;
          margin-right: 17px;
        }
        .v-notes {
          font-size: 12px;
          color: #888888;
          padding-left: 215px;
          margin: 10px auto 0;
        }
      }
    }
    .v-brand {
      width: 920px;
      margin: 60px auto 0;
      .input-form {
        .v-info-label {
          width: 70px;
        }
        .v-notes {
          font-size: 14px;
          color: #888888;
          padding-left: 87px;
          margin: 10px auto 0;
        }
      }
    }
    .ve-upload-box {
      width: 330px;
      .upload-file-box {
        width: 290px;
        span {
          line-height: 14px;
        }
      }
    }
    .primary-button {
      width: 200px;
      display: block;
      margin: 80px auto 40px;
    }
  }
  .pull-left {
    float: left;
  }
  .pull-right {
    float: right;
  }
  .v-show {
    width: 462px;
    height: 349px;
    padding-top: 32px;
    background: url('~assets/image/mac_bg@2x.png');
    background-position: center center;
    background-size: cover;
    position: relative;
    .v-logo {
      display: block;
      width: 27px;
      height: 13px;
      margin: 3px 6px 0 0;
    }
    .v-live-title {
      font-size: 16px;
      transform: scale(0.5);
      transform-origin: top left;
      color: #fff;
    }
    .v-pc-icon {
      display: block;
      width: 87px;
      margin-top: 7px;
    }
    .v-pc {
      width: 438px;
      height: 250px;
      background-position: center;
      background-size: cover;
      padding-top: 10px;
      margin-left: 12px;
      .v-show-content {
        width: 376px;
        height: 199px;
        margin: 6px auto 0;
        background: url('~assets/image/viewarea@2x.jpg');
        background-size: cover;
        position: relative;
      }
    }
    .v-preview {
      font-size: 18px;
      color: #555;
      padding: 83px 0 0 0px;
      text-align: center;
    }
  }
  .v-share {
    width: 850px;
    margin: 60px auto;
    .com-input {
      width: 440px;
    }
    .error-msg {
      font-size: 12px;
    }
    .el-textarea {
      width: 440px;
    }
    .v-notes {
      position: absolute;
      top: 42px;
      left: 0;
      margin: 0;
    }
    .v-shareIntroduction {
      textarea {
        padding-right: 45px;
        height: 110px;
      }
      .limit {
        right: 8px;
        bottom: 8px;
      }
    }
    .v-show {
      width: 250px;
      height: 499px;
      background: url('~assets/image/phone-wechat.png');
      background-size: cover;
      background-position: center center;
      margin-left: 33px;
      position: relative;
      .v-share-friend {
        width: 173px;
        height: 100px;
        border: 1px solid #dadada;
        border-radius: 3px 3px 1px 1px;
        background-color: #fff;
        margin: 65px 3px 0 25px;
        .v-share-title {
          text-align: left;
          width: 302px;
          font-size: 22px;
          min-height: 32px;
          transform: scale(0.5);
          -webkit-transform-origin: top left;
          margin: 5px 0 0 5px;
          word-break: break-all;
          line-height: 22px;
        }
        .v-show-content {
          position: relative;
          .v-show-img {
            display: inline-block;
            width: 30px;
            height: 30px;
            position: absolute;
            top: 0px;
            right: 5px;
          }
          .v-introduction {
            width: 228px;
            margin: -15px 0 0 6px;
            max-height: 63px;
            word-break: break-all;
            font-size: 16px;
            color: #555;
            transform: scale(0.5);
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-transform-origin: top left;
            -webkit-box-orient: vertical;
          }
        }
      }
      .v-avatar {
        display: inline-block;
        width: 22px;
        height: 22px;
        border: 1px solid #666;
        border-radius: 1px;
        margin: 65px 25px 0 0px;
      }
    }
    .v-preview {
      font-size: 18px;
      color: #555;
      text-align: center;
      position: absolute;
      bottom: -40px;
      left: 0;
      right: 0;
      padding: 0;
    }
  }
  .v-share-button {
    margin-top: 134px;
  }
  .btn-upload {
    display: block;
    width: 175px;
    height: 35px;
    text-align: center;
    line-height: 35px;
    background-color: #666;
    color: #fff;
    margin-left: 80px;
  }
  .v-red {
    color: #fc5659;
    padding: 4px 10px 0 0;
    vertical-align: middle;
  }
}
</style>

