<template>
  <div class="clearfix login-container">
    <div class="v-left">
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
          欢迎登录微吼知客
        </p>
        <ul class="v-tabs clearfix">
          <li v-on:click="changeFunction('账号登录')"
              :class="{active: isActive}">账号登录
          </li>
          <span>|</span>
          <li v-on:click="changeFunction('手机登录')"
              :class="{active: !isActive}">手机登录
          </li>
        </ul>
        <div class="v-account"
             v-show="isAccount">
          <com-input inputType="text"
                     :isPassword="false"
                     value=""
                     :inputValue.sync="userName"
                     placeholder="用户名/邮箱/手机号"
                     :maxLength="30"
                     @inputFocus="inputFocus()"></com-input>
          <com-input :inputType="type"
                     :isPassword="true"
                     :inputValue.sync="passWord"
                     v-model="passWord"
                     @changePassword="change($event)"
                     placeholder="密码"
                     :maxLength="30"
                     @inputFocus="inputFocus()"
                     @enterClick="accountSubmit"></com-input>
          <div class="input-form v-label"
               style="margin-top:-28px;"
               :style="{opacity:accountOpacity}">
            <p class="v-error">{{accountError}}</p>
          </div>
          <div class="input-form v-forget"
               style="margin-top: 5px;">
            <a href="/forgot"
               class="fr clickTag">忘记密码</a>
            <template>
              <el-checkbox v-model="remember">自动登录</el-checkbox>
            </template>
          </div>
          <button class="primary-button"
                  @click="accountSubmit">提交
          </button>
          <router-link class="v-register" to="/register">申请免费试用</router-link>
        </div>
        <div class="v-mobile"
             v-show="!isAccount">
          <com-input inputType="text"
                     :isPassword="false"
                     value=""
                     :inputValue.sync="phone"
                     placeholder="手机号"
                     @changeInput="checkPhone"
                     :maxLength="11"
                     @inputFocus="inputFocus()"></com-input>
          <div id="captcha"></div>
          <com-input inputType="text"
                     :isPassword="false"
                     value=""
                     :inputValue.sync="code"
                     placeholder="验证码"
                     :maxLength="6"
                     @inputFocus="inputFocus()"
                     @enterClick="phoneSubmit">
            <a href="javascript:;"
               class="v-getcode"
               :class="{prohibit:isProhibit}"
               @click="getCode()">获取验证码<span v-show="isSend"
                    class="fr">(<em>{{second}}</em>s)</span></a>
          </com-input>
          <div class="input-form v-label"
               style="margin-top:-28px;"
               :style="{opacity:mobileOpacity}">
            <p class="v-error">{{mobileError}}</p>
          </div>
          <button class="primary-button"
                  @click="phoneSubmit">提交
          </button>
          <router-link class="v-register" to="/register">申请免费试用</router-link>
        </div>
      </div>
      <div class="v-info">
        <a href="http://e.vhall.com/home/vhallapi/serviceterms">服务条款</a> | <a href="http://e.vhall.com/home/vhallapi/copyright">版权信息</a> | <a href="">京ICP备13004264号-4 京网文[2016] 2506-288号</a>
      </div>
    </div>
    <message-box v-if="shenQingShow"
                 header='提示'
                 confirmText='现在申请'
                 cancelText='知道了'
                 @handleClick="sqHandler">
      <div style="padding: 20px 0;">
        <span style="display: block;">您尚未开通产品试用资格</span>
        <span style="display: block;">请在线申请试用或联系客服400-888-9970</span>
      </div>
    </message-box>
    <message-box v-if="shenHeiShow"
                 header='提示'
                 cancelText='知道了'
                 @handleClick="shenHeiShow=false">
      <div style="padding: 20px 0;">
        <span style="display: block;">您的申请正在审核中，请耐心等待</span>
        <span style="display: block;">如有问题请拨打400-888-9970客服热线</span>
      </div>
    </message-box>
  </div>
</template>

<script>
import MyInput from './login-input'
import userService from 'src/api/user-service'
import { mapMutations, mapState } from 'vuex'
import * as types from 'src/store/mutation-types'

export default {
  data () {
    return {
      isAccount: false,
      userName: '',
      passWord: '',
      phone: '',
      phoneStatus: false,
      code: '',
      type: 'password',
      key: '', // ?
      isProhibit: true,
      isSend: false,
      second: 60,
      timerr: '', // ?
      phoneKey: '',
      isImg: false,
      cap: null,
      accountOpacity: 0, // ??
      mobileOpacity: 0,
      accountError: '',
      mobileError: '',
      remember: false,
      isActive: false,
      isGoMaster: false,
      shenQingShow: false,
      shenHeiShow: false
    }
  },
  components: {
    'com-input': MyInput
  },
  computed: mapState('login', {
    isLogin: state => state.isLogin,
    accountInfo: state => state.accountInfo
  }),
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
  },
  destroyed () {
    clearInterval(this.timerr)
  },
  mounted () {
  },
  watch: {
    phoneStatus: function (val) {
      this.isGetCodePermission(true)
    },
    isImg: function (val) {
      this.isGetCodePermission()
    }
  },
  methods: {
    ...mapMutations('login', {
      setIsLogin: types.UPDATE_IS_LOGIN,
      setAccountInfo: types.ACCOUNT_INFO
    }),
    changeFunction (item) {
      if (item === '账号登录') {
        this.isAccount = true
        this.isActive = true
      } else {
        this.isAccount = false
        this.isActive = false
      }
    },
    change (type) {
      this.type = type // ?
    },
    accountSubmit () {
      this.checkAccountForm()
      if (this.accountError) {
        return false
      }
      let data = {
        'account': this.userName,
        'password': this.passWord,
        'remember': this.remember ? 1 : 0
      }
      this.$config({ handlers: true }).$post(userService.POST_LOGIN_ACCOUNT, data).then((res) => {
        sessionStorage.setItem('isLogin', true)
        this.$get(userService.GET_ACCOUNT).then((res) => {
          this.setAccountInfo(res.data)
        })
        this.setIsLogin(1)
        let isGoMaster = sessionStorage.getItem('isGoMaster')
        if (isGoMaster) {
          this.$router.go(-1)
        } else {
          sessionStorage.removeItem('isGoMaster')
          this.$router.replace('/liveMager/list')
        }
      }).catch((err) => {
        if (err.code === 10013) { // 未注册
          this.shenQingShow = true
        } else if (err.code === 10014) { // 注册未通过审核
          this.shenHeiShow = true
        } else {
          this.accountError = err.msg
        }
        if (!this.isAccount) {
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
        }
        this.accountOpacity = 1
      })
    },
    phoneSubmit () {
      this.checkMobileForm()
      if (this.mobileError) {
        return false
      }
      let data = {
        'mobile': this.phone,
        'code': this.code,
        'remember': 0
      }
      this.$config({ handlers: true }).$post(userService.POST_LOGIN_PHONE, data).then((res) => {
        sessionStorage.setItem('isLogin', true)
        this.$get(userService.GET_ACCOUNT).then((res) => {
          this.setAccountInfo(res.data)
        })
        this.setIsLogin(1)
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
        let isGoMaster = sessionStorage.getItem('isGoMaster')
        if (isGoMaster) {
          this.$router.go(-1)
        } else {
          sessionStorage.removeItem('isGoMaster')
          this.$router.replace('/liveMager/list')
        }
      }).catch((err) => {
        if (err.code === 10013) { // 未注册
          this.shenQingShow = true
        } else if (err.code === 10014) { // 注册未通过审核
          this.shenHeiShow = true
        } else {
          this.mobileError = err.msg
        }
        this.isSend = false
        this.isProhibit = true
        this.second = 60
        this.isImg = false
        this.phoneKey = ''
        this.cap.refresh()
        this.mobileOpacity = 1
      })
    },
    sqHandler (e) {
      this.shenQingShow = false
      if (e.action === 'confirm') {
        this.$router.push('/register')
      }
    },
    getCode () {
      // 获取验证码
      if (this.isProhibit) {
        return false
      }

      let data = {
        'mobile': this.phone,
        'type': 'BUSINESS_USER_LOGIN',
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
          this.mobileError = '验证码输入过于频繁'
        } else if (err.code === 10013) { // 未注册
          this.shenQingShow = true
        } else if (err.code === 10014) { // 注册未通过审核
          this.shenHeiShow = true
        } else {
          this.mobileError = err.msg
        }
        this.mobileOpacity = 1
        clearInterval(this.timerr)
        this.isSend = false
        this.isProhibit = true
        this.second = 60
        this.isImg = false
        this.phoneKey = ''
        this.cap.refresh()
      })
    },
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
    checkAccountForm: function (e) {
      if (!this.userName) {
        this.accountError = '请输入用户名/手机号/邮箱'
        this.accountOpacity = 1
        return false
      }
      if (!this.passWord) {
        this.accountError = '请输入密码'
        this.accountOpacity = 1
        return false
      }
      this.accountError = ''
      this.accountOpacity = 0

      // else if (!this.validEmail(this.email)) {
      //   this.errors.push('Valid email required.')
      // }
    },
    checkMobileForm: function (e) {
      if (!this.phone) {
        this.mobileError = '请输入手机号'
        this.mobileOpacity = 1
        return false
      } else if (!this.validPhone(this.phone)) {
        this.mobileError = '请输入正确的手机号'
        this.mobileOpacity = 1
        return false
      }
      if (!this.code) {
        this.mobileError = '请输入验证码'
        this.mobileOpacity = 1
        return false
      }
      this.mobileError = ''
      this.mobileOpacity = 0
    },
    inputFocus: function () {
      this.accountError = ''
      this.accountOpacity = 0
      this.mobileError = ''
      this.mobileOpacity = 0
    },
    validEmail: function (email) {
      var re = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
      return re.test(email)
    },
    validPhone: function (phone) {
      var re = /^1[3|4|5|6|7|8|9][0-9]\d{8}$/
      return re.test(phone)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/css/mixin.scss';

.login-container /deep/ {
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
    background: url('~assets/image/login_bg.png') no-repeat;
    background-position: center center;
    background-size: cover;
    position: relative;
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
    }
  }
  .v-right {
    float: right;
    width: 50%;
    height: 100%;
    position: relative;
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
    .primary-button {
      display: block;
      width: 100%;
      height: 44px;
      border-radius: 4px;
    }
    .v-register {
      font-size: 16px;
      color: #666;
      margin-top: 15px;
      display: block;
    }
    .v-content {
      width: 340px;
      position: absolute;
      left: 50%;
      top: 0;
      bottom: 0;
      margin: auto 0 auto -170px;
      max-height: 475px;
      text-align: left;
      font-size: 22px;
    }
    .v-title {
      font-size: 32px;
      color: #333333;
    }
    .v-tabs {
      margin-top: 45px;
      span {
        float: left;
        color: #333333;
        font-size: 20px;
        line-height: 29px;
      }
      li {
        float: left;
        font-size: 22px;
        color: #333333;
        margin-right: 10px;
        cursor: pointer;
        &:last-child {
          margin-left: 10px;
        }
        &.active {
          color: #ffd021;
        }
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
      &.v-forget {
        margin-top: 8px;
        margin-bottom: 50px;
        font-size: 13px;
        .clickTag {
          font-size: 13px;
          color: #999;
          vertical-align: middle;
        }
      }
    }
    .v-getcode {
      background-color: #ffd021;
      display: block;
      width: 125px;
      height: 34px;
      line-height: 34px;
      text-align: center;
      /*font-size: 13px;*/
      /*color: #fff;*/
      position: absolute;
      bottom: 22px;
      right: 0;
      border-radius: 2px;
      text-decoration: none;
      color: #222;
      font-size: 14px;
      &.prohibit {
        background-color: #e2e2e2;
        opacity: 0.8;
        &:hover {
          background-color: #e2e2e2;
          opacity: 0.8;
        }
      }
      &:hover {
        background-color: #FDD43F;
      }
      &:active {
        background-color: #EEC11A;
      }
      .fr {
        margin-left: 6px;
        float: none;
      }
    }
    .el-button {
      margin-top: 10px;
    }
    .el-checkbox__inner:hover,
    .el-checkbox__input.is-focus .el-checkbox__inner {
      border-color: #ffd021;
    }
    .el-checkbox__input.is-checked .el-checkbox__inner,
    .el-checkbox__input.is-indeterminate .el-checkbox__inner {
      background-color: #ffd021;
      border-color: #ffd021;
    }
    .el-checkbox__label {
      color: #999 !important;
    }
  }
}

@media screen and (max-width: 1200px) {
  .login-container {
    min-width: auto;
  }
  .login-container .v-left {
    display: none;
  }
  .login-container .v-right {
    width: 100%;
  }
}
</style>

