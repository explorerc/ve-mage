<template>
  <div class="clearfix v-div">
    <div class="v-left">
        <img src="" alt="" class="v-logo">
    </div>
    <div class="v-right">
        <div class="v-content">
            <p class="v-title">
                免费试用
            </p>
            <com-input inputType="text" :isPassword="false" value="" :inputValue.sync="userName" placeholder="先生/女士" :maxLength="20" @inputFocus="inputFocus()"></com-input>
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
            <el-button @click="submit">wo</el-button>
        </div>
    </div>
  </div>
</template>
<script>
  import MyInput from './login-input'
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
        key: 'b7982ef659d64141b7120a6af27e19a0',
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
      let _self = this
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
      },
      submit () {
        this.checkForm()
        console.log(this.userName)
        console.log(this.userPosition)
        console.log(this.userCompany)
        console.log(this.userPhone)
        console.log(this.code)
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
<style lang="scss">
@import '~assets/css/base';
html,
body,
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
}
</style>

