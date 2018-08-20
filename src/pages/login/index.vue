<template>
  <div class="clearfix v-div">
    <div class="v-left">
      <img src="" alt="" class="v-logo">
    </div>
    <div class="v-right">
      <div class="v-content">
        <p class="v-title">
          欢迎登录微吼直播
        </p>
        <ul class="v-tabs clearfix">
          <li v-for="(item, index) in items" v-bind:key="index" v-on:click="changeFunction(item)">{{item}}</li>
        </ul>
        <div class="v-account" v-show="isAccount">
          我是账号登录
          <com-input inputType="text" :isPassword="false" value="" :inputValue.sync="userName" placeholder="用户名/邮箱/手机号" :maxLength="30" @inputFocus="inputFocus()"></com-input>
          <com-input :inputType="type" :isPassword="true" :inputValue.sync="passWord" v-model="passWord" @changePassword="change($event)" placeholder="密码" :maxLength="30" @inputFocus="inputFocus()"></com-input>
          <div class="input-form v-label" style="margin-top:-28px;" :style="{opacity:accountOpacity}">
            <p class="v-error">{{accountError}}</p>
          </div>
          <div class="input-form v-forget" style="margin-top: 5px;">
            <a href="/pw" class="fr clickTag">忘记密码</a>
            <template>
                        <el-checkbox v-model="remember">自动登录</el-checkbox>
</template>
                </div>
                <el-button @click="accountSubmit">wo</el-button>
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
                <el-button @click="phoneSubmit">wo</el-button>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
  import MyInput from './login-input'
  import loginManage from 'src/api/login-manage'
  import identifyingcodeManage from 'src/api/identifyingcode-manage'
  import {mapMutations} from 'vuex'
  export default {
    data () {
      return {
        items: ['account', 'mobile'],
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
        remember: false
      }
    },
    components: {
      'com-input': MyInput
    },
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
      ...mapMutations({
        setIsLogin: `updateIsLogin`
      }),
      changeFunction (item) {
        if (item === 'account') {
          this.isAccount = true
        } else {
          this.isAccount = false
        }
      },
      change (type) {
        this.type = type
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
            this.setIsLogin(1)
            console.log('账号登录成功')
          }
        })
      },
      phoneSubmit () {
        this.setIsLogin(1)
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
            // console.log(this.$store.state)
            // this.setIsLogin(1)
            console.log('动态码登录成功')
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

<style lang="scss">
@import '~assets/css/base';
#app,
.v-div {
  height: 100%;
  min-height: 660px;
}

#app,
.v-div {
  width: 100%;
  min-width: 1200px;
  overflow: auto;
  overflow-y: hidden;
}

.v-left {
  float: left;
  width: 50%;
  height: 100%;
  background: linear-gradient(-30deg, #e62e2e 4%, #ff6c3b 100%);
  position: relative;
  .v-logo {
    width: 94px;
    position: absolute;
    top: 20px;
    left: 20px;
  }
  .v-title {
    font-size: 32px;
    color: #333333;
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
    max-height: 475px;
    text-align: left;
    font-size: 22px;
  }
  .v-tabs {
    li {
      float: left;
      font-size: 26px;
      color: #333333;
      margin-right: 5px;
      border-right: 1px solid #000;
      padding-right: 5px;
      &:last-child {
        border: none;
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
      font-size: 13px;
      .clickTag {
        font-size: 13px;
        color: #999;
        vertical-align: middle;
      }
      .fr {
        float: right;
      }
    }
  }
  .v-getcode {
    background-color: #fc5659;
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
  }
  .el-button {
    margin-top: 10px;
  }
}
</style>

