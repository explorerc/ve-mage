<template>
  <div class="clearfix register-container">
    <div class="v-left" v-if="defaultImg">
      <div class="v-content v-user" :style="`background-image:url(${defaultImg})`">
        <div class="v-center">
          <p class="v-title">
            {{this.userDate.title}}
          </p>
          <p class="v-subtitle">
            {{this.userDate.subname}}
          </p>
          <a :href="this.userDate.btnUrl" class="v-user-btn" target="_blank" v-if="userDate.btnName!==''">{{this.userDate.btnName}}</a>
        </div>
      </div>
    </div>
    <div class="v-left v-bg" v-else>
      <img  class="v-logo" src="../../assets/image/logo.png">
      <div class="v-content">
        <p class="v-title">
          智能营销平台
        </p>
        <p class="v-subtitle">
          全渠道精准引流 直播实时互动 用户智能化管理 数据驱动增长
        </p>
        <img src="../../assets/image/login@2x.png" alt="">
      </div>
    </div>
    <div class="v-right">
      <div class="v-content">
        <p class="v-title">
          免费试用
        </p>
        <com-input inputType="text"
                   :isPassword="false"
                   value=""
                   :inputValue.sync="userName"
                   placeholder="输入您的姓名"
                   :maxLength="20"
                   @inputFocus="inputFocus()"></com-input>
        <com-input inputType="text"
                   :isPassword="false"
                   value=""
                   :inputValue.sync="userPosition"
                   placeholder="输入您的职务"
                   :maxLength="20"
                   @inputFocus="inputFocus()"></com-input>
        <com-input inputType="text"
                   :isPassword="false"
                   value=""
                   :inputValue.sync="userCompany"
                   placeholder="输入公司名称"
                   :maxLength="40"
                   @inputFocus="inputFocus()"></com-input>
        <com-input inputType="text"
                   :isPassword="false"
                   value=""
                   :inputValue.sync="userPhone"
                   @changeInput="checkPhone"
                   placeholder="输入手机号"
                   :maxLength="11"
                   @inputFocus="inputFocus()"></com-input>
        <div id="captcha"></div>
        <com-input inputType="text"
                   :isPassword="false"
                   value=""
                   :inputValue.sync="code"
                   placeholder="验证码"
                   :maxLength="6"
                   @inputFocus="inputFocus()">
          <a href="javascript:;"
             class="v-getcode"
             :class="{prohibit:isProhibit}"
             @click="getCode()">获取验证码<span v-show="isSend"
                  class="fr">(<em>{{second}}</em>s)</span></a>
        </com-input>
        <div class="input-form v-label"
             style="margin-top:-28px;"
             :style="{opacity:opacity}">
          <p class="v-error">{{error}}</p>
        </div>
        <button class="primary-button"
                @click="submit">提交</button>
        <router-link class="v-login" to="/login">企业登录</router-link>
      </div>
      <div class="v-info">
        <a href="http://e.vhall.com/home/vhallapi/serviceterms">服务条款</a> <em>|</em> <a href="http://e.vhall.com/home/vhallapi/copyright">版权信息</a> <em>|</em> <a href="">京ICP备13004264号-4 京网文[2016] 2506-288号</a>
      </div>
    </div>
    <message-box v-show="show"
                 :autoClose="closeTime"
                 customClass="v-try-box"
                 confirmText="我知道了"
                 @handleClick="messageBoxClick"
                 width="570px">
      <div slot="header">免费试用</div>
      <p>
        感谢您提供的重要信息，我们会立即安排专业人员跟您联系，为您提供试用账号。您也可以拨打我们的专属服务热线获取更多信息。
      </p>
      <p class="v-tel">
        400-888-9970
      </p>
    </message-box>
  </div>
</template>
<script>
import MyInput from './login-input'
import userService from 'src/api/user-service'

export default {
  data () {
    return {
      userName: '',
      userPosition: '',
      userCompany: '',
      userPhone: '',
      code: '',
      phoneStatus: false,
      type: 'password',
      key: '',
      isProhibit: true,
      isSend: false,
      second: 60,
      timerr: '',
      phoneKey: '',
      isImg: false,
      cap: null,
      opacity: 0,
      error: '',
      show: false,
      closeTime: 0,
      userDate: {
        img: '',
        title: '',
        subname: '',
        btnName: '',
        btnUrl: ''
      }
    }
  },
  components: {
    'com-input': MyInput
  },
  computed: {
    defaultImg () {
      return this.userDate.img ? 'http://local.vhall.com' + this.userDate.img : ''
    }
  },
  created () {
    this.$config({ handlers: true }).$get(userService.GET_CAPTCHA_ID).then((res) => {
      let _self = this
      this.key = res.data
      window.initNECaptcha({
        captchaId: _self.key,
        element: '#captcha',
        width: 260,
        onReady: function (instance) {
        },
        onVerify: function (err, data) {
          if (data) {
            _self.phoneKey = data.validate
            _self.isImg = true
          }
          if (err) {
            console.log(err)
          }
        },
        onError: function () {
        }
      }, function onload (instance) {
        _self.cap = instance
      })
    }).catch(err => {
      console.log(err.msg)
    })

    this.$config({ handlers: true }).$get(userService.GET_LOGIN_DATE).then((res) => {
      this.userDate.img = res.data.image
      this.userDate.title = res.data.title
      this.userDate.subname = res.data.description
      this.userDate.btnName = res.data.subname
      this.userDate.btnUrl = res.data.urlname
    }).catch(err => {
      console.log(err.msg)
    })
  },
  destroyed () {
    clearInterval(this.timerr)
  },
  mounted () {
  },
  watch: {
    outValue: function () {
      console.log(1)
    },
    phoneStatus: function (val) {
      this.isGetCodePermission(true)
    },
    isImg: function (val) {
      this.isGetCodePermission()
    }
  },
  methods: {
    isGetCodePermission (val) {
      if (this.isImg && this.phoneStatus) {
        this.isProhibit = false
        if (this.second > 0) {
          this.isSend = false
          this.isProhibit = false
          this.second = 60
          this.mobileOpacity = 1
          clearInterval(this.timerr)
          if (val) {
            this.isImg = false
            this.phoneKey = ''
            this.cap.refresh()
          }
        }
      } else {
        this.isProhibit = true
      }
    },
    checkPhone (param) {
      let reg = /^1[3|4|5|6|7|8|9][0-9]\d{8}$/
      if (reg.test(parseInt(param))) {
        this.phoneStatus = true
      } else {
        this.phoneStatus = false
      }
    },
    getCode () {
      // 获取验证码
      if (this.isProhibit) {
        return false
      }
      let data = {
        'mobile': this.userPhone,
        'type': 'BUSINESS_USER_REG',
        captcha: this.phoneKey
      }
      this.$config({ handlers: true }).$get(userService.GET_CODE, data).then((res) => {
        this.isSend = true
        this.isProhibit = true
        clearInterval(this.timerr)
        this.timerr = setInterval(() => {
          this.second--
          if (this.second <= 0) {
            clearInterval(this.timerr)
            this.isSend = false
            this.isProhibit = true
            this.second = 60
            this.isImg = false
            this.phoneKey = ''
            this.cap.refresh()
          }
        }, 1000)
      }).catch(err => {
        if (err.code === 10050) {
          this.error = '验证码输入过于频繁'
        } else {
          this.error = err.msg
        }
        this.opacity = 1
        clearInterval(this.timerr)
        this.isSend = false
        this.isProhibit = true
        this.second = 60
        this.isImg = false
        this.phoneKey = ''
        this.cap.refresh()
      })
    },
    submit () {
      this.checkForm()
      if (this.error) {
        return false
      }
      let data = {
        'mobile': this.userPhone,
        'name': this.userName,
        'position': this.userPosition,
        'company': this.userCompany,
        'code': this.code
      }
      this.$config({ handlers: true }).$post(userService.POST_REGISTER, data).then((res) => {
        this.closeTime = 60
        this.show = true
      }).catch((err) => {
        clearInterval(this.timerr)
        this.isSend = false
        this.isProhibit = true
        this.second = 60
        this.isImg = false
        this.phoneKey = ''
        this.cap.refresh()
        this.error = err.msg
        this.opacity = 1
      })
    },
    messageBoxClick (e) {
      if (e.action === 'cancel') {
        console.log('取消或者关闭按钮')
        this.show = false
        this.closeTime = 0
      } else if (e.action === 'confirm') {
        this.closeTime = 0
        this.show = false
      }
    },
    checkForm: function (e) {
      if (!this.userName) {
        this.error = '请输入名称'
        this.opacity = 1
        return false
      }
      if (!this.userPosition) {
        this.error = '请输入您的职务'
        this.opacity = 1
        return false
      }
      if (!this.userCompany) {
        this.error = '请输入公司名称'
        this.opacity = 1
        return false
      }
      if (!this.userPhone) {
        this.error = '请输入手机号'
        this.opacity = 1
        return false
      } else if (!this.validPhone(this.userPhone)) {
        this.error = '请输入正确的手机号'
        this.opacity = 1
        return false
      }
      if (!this.code) {
        this.error = '请输入验证码'
        this.opacity = 1
        return false
      }
      this.error = ''
      this.opacity = 0
    },
    validPhone: function (phone) {
      var re = /^1[3|4|5|6|7|8|9][0-9]\d{8}$/
      return re.test(phone)
    },
    inputFocus: function () {
      this.error = ''
      this.opacity = 0
    }
  }
}
</script>
<style lang="scss" scoped>
@import 'assets/css/mixin.scss';
.register-container /deep/ {
  height: 100%;
  min-height: 660px;
  width: 100%;
  min-width: 1200px;
  overflow: auto;
  overflow-y: hidden;
  .v-left {
    float: left;
    width: 50%;
    height: 100%;
    position: relative;
    &.v-bg {
      background: url('~assets/image/login_bg.png') no-repeat;
      background-position: center center;
      background-size: cover;
    }
    .v-logo {
      position: absolute;
      top: 20px;
      left: 50px;
      font-size: 36px;
      color: #222;
    }
    .v-content {
      width: 100%;
      text-align: center;
      position: absolute;
      top: 20%;
      left: 0%;
      transform: translate(0%, 0%);
      .v-title {
        font-size: 36px;
        color: #222;
      }
      .v-subtitle {
        font-size: 18px;
        color: #222;
        margin-top: 12px;
      }
      img {
        width: 62%;
        margin: 30px 0 0 0;
      }
      &.v-user {
        width: 100%;
        height: 100%;
        position: relative;
        top: 0;
        background-position: center;
        background-size: cover;
        .v-center {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          left: 100px;
          text-align: left;
        }
        .v-title {
          font-size: 42px;
          color: #fff;
          text-shadow: 5px 2px 10px rgba(0, 0, 0, 0.2);
        }
        .v-subtitle {
          font-size: 20px;
          color: #fff;
          margin-top: 12px;
          text-shadow: 5px 2px 10px rgba(0, 0, 0, 0.2);
        }
        .v-user-btn {
          display: block;
          text-align: center;
          margin: 30px 0 0;
          width: 120px;
          height: 36px;
          line-height: 34px;
          background-color: rgba(0, 0, 0, 0);
          border: 1px solid #fff;
          border-radius: 4px;
          color: #fff;
          &:hover {
            background-color: #fff;
            color: #000;
          }
        }
      }
    }
  }
  .v-right {
    float: right;
    width: 50%;
    height: 100%;
    position: relative;
    .v-content {
      width: 340px;
      position: absolute;
      left: 50%;
      top: 0;
      bottom: 0;
      margin: auto 0 auto -170px;
      max-height: 595px;
      text-align: left;
      font-size: 22px;
      .v-title {
        font-size: 32px;
        color: #333;
      }
    }
    .yidun.yidun--light {
      width: 100% !important;
      margin-top: 38px !important;
      .yidun_control {
        background-color: #fff !important;
        border: 1px solid #c4c4c4 !important;
      }
    }
    .input-form {
      position: relative;
      .v-error {
        display: block;
        height: 40px;
        line-height: 40px;
        margin-top: 8px;
        font-size: 12px;
        color: #e62e2e;
      }
    }
    .v-getcode {
      background-color: #ffd021;
      display: block;
      width: 115px;
      height: 34px;
      line-height: 34px;
      text-align: center;
      font-size: 13px;
      color: #fff;
      position: absolute;
      bottom: 22px;
      right: 0;
      border-radius: 2px;
      text-decoration: none;
      &.prohibit {
        background-color: #e2e2e2;
        opacity: 0.8;
        &:hover {
          background-color: #e2e2e2;
          opacity: 0.8;
        }
      }
      &:hover {
        background-color: #fdd43f;
      }
      &:active {
        background-color: #eec11a;
      }
      .fr {
        margin-left: 6px;
        float: none;
      }
    }
    .primary-button {
      display: block;
      width: 100%;
      height: 44px;
      border-radius: 4px;
    }
    .v-login {
      font-size: 16px;
      color: #666;
      margin-top: 15px;
      display: block;
    }
    .v-info {
      width: 100%;
      position: absolute;
      bottom: 15px;
      text-align: center;
      color: #999;
      font-size: 14px;
      font-family: 'PingFang SC', 'Helvetica Neue', Helvetica,
        'Hiragino Sans GB', 'Microsoft YaHei', '\5FAE\8F6F\96C5\9ED1', Arial,
        sans-serif;
      em {
        position: relative;
        bottom: 1px;
      }
      a {
        color: #999;
        font-size: 14px;
      }
    }
  }
  .ve-message-box__wrapper {
    .ve-message-box {
      width: 570px;
      height: 280px;
      &::before {
        background-color: #fff;
      }
      div {
        font-size: 20px;
        color: #222;
        &.ve-message-box__btns {
          margin-top: 44px;
        }
        &.ve-message-box__container {
          padding: 25px 30px 20px 30px;
        }
      }
      p {
        font-size: 14px;
        color: #222;
        margin-top: 20px;
        &.v-tel {
          font-size: 18px;
          color: #222;
        }
      }
      :before {
        background-color: #fff;
      }
    }
  }
}
@media screen and (max-width: 1200px) {
  .register-container {
    min-width: auto;
  }
  .register-container .v-left {
    display: none;
  }
  .register-container .v-right {
    width: 100%;
  }
}
</style>

