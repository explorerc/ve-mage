<template>
  <div class="clearfix login-container">
    <div class="v-left">
      <p class="v-logo">
        微吼知客
      </p>
      <div class="v-content">
        <p class="v-title">
          微吼知客
        </p>
        <p class="v-subtitle">
          提供专属直播间、加速企业营销、获客、变现
        </p>
      </div>
    </div>
    <div class="v-right">
      <div class="v-content">
        <p class="v-title">
          欢迎登录微吼直播
        </p>
        <ul class="v-tabs clearfix">
          <li v-on:click="changeFunction('账号登录')" :class="{active: isActive}">账号登录</li>
          <span>|</span>
          <li v-on:click="changeFunction('手机登录')" :class="{active: !isActive}">手机登录</li>
        </ul>
        <div class="v-account" v-show="isAccount">
          <com-input inputType="text" :isPassword="false" value="" :inputValue.sync="userName" placeholder="用户名/邮箱/手机号" :maxLength="30" @inputFocus="inputFocus()"></com-input>
          <com-input :inputType="type" :isPassword="true" :inputValue.sync="passWord" v-model="passWord" @changePassword="change($event)" placeholder="密码" :maxLength="30" @inputFocus="inputFocus()"></com-input>
          <div class="input-form v-label" style="margin-top:-28px;" :style="{opacity:accountOpacity}">
            <p class="v-error">{{accountError}}</p>
          </div>
          <div class="input-form v-forget" style="margin-top: 5px;">
            <a href="/forgot" class="fr clickTag">忘记密码</a>
            <template>
              <el-checkbox v-model="remember">自动登录</el-checkbox>
            </template>
                </div>
                <button class="primary-button" @click="accountSubmit">提交</button>
            </div>
            <div class="v-mobile" v-show="!isAccount">
                <com-input inputType="text" :isPassword="false" value="" :inputValue.sync="phone" placeholder="手机号"  @changeInput="checkPhone" :maxLength="11" @inputFocus="inputFocus()"></com-input>
                <div id="captcha"></div>
                <com-input inputType="text" :isPassword="false" value="" :inputValue.sync="code" placeholder="动态密码" :maxLength="6" @inputFocus="inputFocus()">
                  <a href="javascript:;" class="v-getcode" :class="{prohibit:isProhibit}" @click="getCode()">获取动态码<span v-show="isSend" class="fr">(<em>{{second}}</em>s)</span></a>
                </com-input>
                <div class="input-form v-label" style="margin-top:-28px;" :style="{opacity:mobileOpacity}">
					      	<p class="v-error">{{mobileError}}</p>
					      </div>
                <button class="primary-button" @click="phoneSubmit">提交</button>
            </div>
        </div>
        <div class="v-info">
          <a href="http://e.vhall.com/home/vhallapi/serviceterms">服务条款</a> | <a href="http://e.vhall.com/home/vhallapi/copyright">版权信息</a> | <a href="">京ICP备13004264号-4 京网文[2016] 2506-288号</a>
        </div>
    </div>
  </div>
</template>

<script>
  import MyInput from './login-input'
  import loginManage from 'src/api/login-manage'
  import identifyingcodeManage from 'src/api/identifyingcode-manage'
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
        key: '',
        isProhibit: true,
        isSend: false,
        second: 60,
        timerr: '',
        phoneKey: '',
        isImg: false,
        cap: null,
        accountOpacity: 0,
        mobileOpacity: 0,
        accountError: '',
        mobileError: '',
        remember: false,
        isActive: false
      }
    },
    components: {
      'com-input': MyInput
    },
    computed: mapState('login', {
      isLogin: state => state.isLogin
    }),
    created () {
      let data = {}
      identifyingcodeManage.getCodeId(data).then((res) => {
        if (res.code !== 200) {
          console.log(res.msg)
        } else {
          let _self = this
          this.key = res.data
          window.initNECaptcha({
            captchaId: _self.key,
            element: '#captcha',
            mode: 'float',
            width: 260,
            onReady: function (instance) {},
            onVerify: function (err, data) {
              if (data) {
                _self.phoneKey = data.validate
                _self.isImg = true
              }
              if (err) {
                console.log(err)
              }
            },
            onError: function () {}
          }, function onload (instance) {
            _self.cap = instance
          })
        }
      })
    },
    mounted () {},
    watch: {
      phoneStatus: function (val) {
        this.isGetCodePermission()
      },
      isImg: function (val) {
        this.isGetCodePermission()
      }
    },
    methods: {
      ...mapMutations('login', {
        setIsLogin: types.UPDATE_IS_LOGIN
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
        this.type = type
      },
      accountSubmit () {
        this.setIsLogin(1)
        this.checkAccountForm()
        if (this.accountError) {
          return false
        }
        let data = {
          'account': this.userName,
          'password': this.passWord,
          'remember': this.remember ? 1 : 0
        }
        loginManage.loginByAccount(data).then((res) => {
          if (res.code !== 200) {
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
            this.accountError = res.msg
            this.accountOpacity = 1
          } else {
            sessionStorage.setItem('isLogin', true)
            sessionStorage.setItem('userInfo', JSON.stringify(res.data))
            this.setIsLogin(1)
            this.$router.replace('/setAccount')
          }
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
        loginManage.loginByPhone(data).then((res) => {
          if (res.code !== 200) {
            this.isSend = false
            this.isProhibit = true
            this.second = 60
            this.isImg = false
            this.phoneKey = ''
            this.cap.refresh()
            this.mobileError = res.msg
            this.mobileOpacity = 1
          } else {
            sessionStorage.setItem('isLogin', true)
            sessionStorage.setItem('userInfo', JSON.stringify(res.data))
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
            this.$router.replace('/setAccount')
          }
        })
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
        identifyingcodeManage.getCode(data).then((res) => {
          if (res.code !== 200) {
            this.mobileError = res.msg
            this.mobileOpacity = 1
            clearInterval(this.timerr)
            this.isSend = false
            this.isProhibit = true
            this.second = 60
            this.isImg = false
            this.phoneKey = ''
            this.cap.refresh()
          } else {
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
        })
      },
      isGetCodePermission () {
        if (this.isImg && this.phoneStatus) {
          this.isProhibit = false
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
@import 'assets/css/mixin.scss';
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
    background: linear-gradient(
      222deg,
      rgba(255, 208, 33, 1) 0%,
      rgba(255, 194, 0, 1) 100%
    );
    position: relative;
    .v-logo {
      position: absolute;
      top: 20px;
      left: 50px;
      font-size: 36px;
      color: #222;
    }
    .v-content {
      width: 375px;
      margin: 260px auto;
      text-align: center;
      .v-title {
        font-size: 36px;
        color: #222;
      }
      .v-subtitle {
        font-size: 18px;
        color: #222;
        margin-top: 12px;
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
    }
    .primary-button {
      display: block;
      width: 100%;
      height: 44px;
      border-radius: 4px;
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
        background-color: #dedede;
        &:hover {
          background-color: #dedede;
        }
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

