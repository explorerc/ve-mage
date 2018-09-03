<template>
  <div class="clearfix register-container">
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
                免费试用
            </p>
            <com-input inputType="text" :isPassword="false" value="" :inputValue.sync="userName" placeholder="输入您的姓名" :maxLength="20" @inputFocus="inputFocus()"></com-input>
            <com-input inputType="text" :isPassword="false" value="" :inputValue.sync="userPosition" placeholder="输入您的职务" :maxLength="20" @inputFocus="inputFocus()"></com-input>
            <com-input inputType="text" :isPassword="false" value="" :inputValue.sync="userCompany" placeholder="输入公司名称" :maxLength="40" @inputFocus="inputFocus()"></com-input>
            <com-input inputType="text" :isPassword="false" value="" :inputValue.sync="userPhone" @changeInput="checkPhone" placeholder="输入手机号" :maxLength="11" @inputFocus="inputFocus()"></com-input>
            <div id="captcha"></div>
            <com-input inputType="text" :isPassword="false" value="" :inputValue.sync="code" placeholder="动态密码" :maxLength="6" @inputFocus="inputFocus()">
              <a href="javascript:;" class="v-getcode" :class="{prohibit:isProhibit}" @click="getCode()">获取动态码<span v-show="isSend" class="fr">(<em>{{second}}</em>s)</span></a>
            </com-input>
            <div class="input-form v-label" style="margin-top:-28px;" :style="{opacity:opacity}">
					  	<p class="v-error">{{error}}</p>
					  </div>
            <button class="primary-button" @click="submit">提交</button>
        </div>
    </div>
  </div>
</template>
<script>
  import MyInput from './login-input'
  import loginManage from 'src/api/login-manage'
  import identifyingcodeManage from 'src/api/identifyingcode-manage'
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
        error: ''
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
        }
      })
    },
    mounted () {
    },
    watch: {
      outValue: function () {
        console.log(1)
      },
      phoneStatus: function (val) {
        this.isGetCodePermission()
      },
      isImg: function (val) {
        this.isGetCodePermission()
      }
    },
    methods: {
      setPassword () {
        console.log(1)
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
        identifyingcodeManage.getCode(data).then((res) => {
          if (res.code !== 200) {
            this.error = res.msg
            this.opacity = 1
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
        loginManage.register(data).then((res) => {
          if (res.code !== 200) {
            this.error = res.msg
            this.opacity = 1
          } else {
            this.$messageBox({
              header: '免费试用',
              content: '感谢您提供的重要信息，我们会立即安排专业人员跟您联系，为您提供试用账号。您也可以拨打我们的专属服务热线400-888-9970获取更多信息。',
              confirmText: '我知道了',
              autoClose: 60, // 60秒
              handleClick: (e) => {
                if (e.action === 'cancel') {
                  console.log('取消或者关闭按钮')
                } else if (e.action === 'confirm') {
                  console.log('点击了确定按钮')
                }
              }
            })
          }
        })
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
        background-color: #dedede;
        &:hover {
          background-color: #dedede;
        }
      }
    }
    .v-submit {
      display: block;
      width: 100%;
      height: 44px;
      background-color: #ffd021;
      color: #222;
      font-size: 16px;
      border-radius: 4px;
      text-align: center;
      line-height: 44px;
      &:hover {
        background-color: #ffd437;
      }
      &:active {
        background-color: #e8bd20;
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

