<template>
  <div class="clearfix forgot-container">
    <p class="v-title">
      找回密码
    </p>
    <com-tabs :value.sync="activeName"
              class="v-forgot"
              disabled>
      <com-tab index="first">
        <div slot="label">
          验证身份
          <i class="iconfont icon-duigou1 v-icon1"
             v-if="isStepOneSuccess"></i>
          <span class="v-circle active"
                v-else>
            <i></i>
          </span>
          <span class="v-line"></span>
        </div>
        <div class="v-get-password">
          <com-input class="v-input"
                     :value.sync="userPhone"
                     placeholder="输入手机号"
                     @focus="passwordFocus('userPhone')"
                     :error-tips="errorTips.userPhone"></com-input>
          <div id="captcha"></div>
          <com-input class="v-input phone-code"
                     :value.sync="phoneCode"
                     placeholder="验证码"
                     @focus="passwordFocus('phoneCode')"
                     :error-tips="errorTips.phoneCode">
          </com-input>
          <a href="javascript:;"
             class="v-getcode"
             :class="{prohibit:isProhibit}"
             @click="getCode()">获取验证码
            <span v-show="isSend"
                  class="fr">(
              <em>{{second}}</em>s)</span>
          </a>
          <button class="primary-button"
                  @click="verifyUser">提交</button>
        </div>
      </com-tab>
      <com-tab index="second">
        <div slot="label">
          设置新密码
          <i class="iconfont icon-duigou1 v-icon2"
             v-if="isStepTwoSuccess"></i>
          <span class="v-circle"
                :class="{active: sedIsActive}"
                v-else>
            <i></i>
          </span>
        </div>
        <div class="v-get-password">
          <div class="v-psd">
            <com-input class="v-input"
                       :value.sync="password"
                       placeholder="请输入新密码"
                       :maxLength="30"
                       type="password"
                       @focus="passwordFocus('password')"
                       @change="passwordChange()"
                       @blur="passwordBlur()"
                       :error-tips="errorTips.password"></com-input>
            <div class="v-verification"
                 v-if="isPasswordShow">
              <ul>
                <p>密码至少包含：</p>
                <li>
                  <i class="iconfont icon-duigou1"
                     :class="{isActive: isContainEn}"></i> 1个英文字母
                </li>
                <li>
                  <i class="iconfont icon-duigou1"
                     :class="{isActive: isContainNum}"></i> 1个数字
                </li>
                <li>
                  <i class="iconfont icon-duigou1"
                     :class="{isActive: isContainCount}"></i> 6～30个字符
                </li>
              </ul>
            </div>
          </div>
          <div class="v-new-psd">
            <com-input class="v-input"
                       :value.sync="rePassword"
                       placeholder="请确认新密码"
                       :maxLength="30"
                       type="password"
                       @focus="passwordFocus('rePassword')"
                       @change="newPasswordChange()"
                       @blur="newPasswordBlur()"
                       :error-tips="errorTips.rePassword">
            </com-input>
            <div class="v-verification"
                 v-if="isNewPasswordShow">
              <ul>
                <p>确认密码需要：</p>
                <li>
                  <i class="iconfont icon-duigou1"
                     :class="{isActive: isSame}"></i> 与原密码一致
                </li>
              </ul>
            </div>
          </div>
          <button class="primary-button"
                  @click="undatePhone">提交</button>
        </div>
      </com-tab>
      <com-tab index="third">
        <div slot="label">
          设置完成
          <i class="iconfont icon-duigou1 v-icon2"
             v-if="isStepThreeSuccess"></i>
          <span class="v-circle"
                :class="{active: thdIsActive}"
                v-else>
            <i></i>
          </span>
        </div>
        <img src="../../assets/image/success@2x.png"
             alt=""
             class="v-success-img">
        <p class="v-success">
          新密码设置成功
        </p>
        <p class="v-tip">
          <span class="v-red">{{time}}s</span>后跳转到登录页面
        </p>
      </com-tab>
    </com-tabs>
  </div>
</template>
<script>
import userService from 'src/api/user-service'

export default {
  data () {
    return {
      tabValue: 1,
      outValue: '123',
      userPhone: '',
      phoneCode: '',
      token: '',
      activeName: 'first',
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
      password: '',
      rePassword: '',
      isValidPassword: false,
      sedIsActive: false,
      thdIsActive: false,
      time: 5,
      isContainEn: 0,
      isContainNum: 0,
      isContainCount: 0,
      isSame: 0,
      isPasswordShow: false,
      isNewPasswordShow: false,
      errorTips: {
        userPhone: '',
        phoneCode: '',
        password: '',
        rePassword: ''
      },
      isStepOneSuccess: false,
      isStepTwoSuccess: false,
      isStepThreeSuccess: false
    }
  },
  components: {
  },
  created () {
    this.$config({ handlers: true }).$get(userService.GET_CAPTCHA_ID).then((res) => {
      let _self = this
      this.key = res.data
      window.initNECaptcha({
        captchaId: _self.key,
        element: '#captcha',
        mode: 'float',
        width: 450,
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
    userPhone: function () {
      this.checkPhone(this.userPhone)
      this.isGetCodePermission(true)
    },
    phoneStatus: function (val) {
      this.isGetCodePermission(true)
    },
    isImg: function (val) {
      this.isGetCodePermission()
    }
  },
  methods: {
    setPassword () {
      console.log(1)
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
    getCode () {
      // 获取验证码
      if (this.isProhibit) {
        return false
      }
      let data = {
        'mobile': this.userPhone,
        'type': 'BUSINESS_USER_UPDATE_PASSWORD',
        captcha: this.phoneKey
      }
      this.$config({ handlers: true }).$get(userService.GET_CODE, data).then((res) => {
        this.errorTips.phoneCode = ''
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
          this.errorTips.phoneCode = '验证码输入过于频繁'
        } else {
          this.errorTips.phoneCode = err.msg
        }
        clearInterval(this.timerr)
        this.isSend = false
        this.isProhibit = true
        this.second = 60
        this.isImg = false
        this.phoneKey = ''
        this.cap.refresh()
      })
    },
    verifyUser () {
      if (!this.userPhone) {
        this.errorTips.userPhone = '请输入手机号'
        return false
      }
      if (!this.phoneStatus) {
        this.errorTips.userPhone = '手机号格式不正确'
        return false
      }
      if (!this.phoneCode) {
        this.errorTips.phoneCode = '请输入验证码'
        return false
      }
      let data = {
        mobile: this.userPhone,
        code: this.phoneCode,
        type: 'BUSINESS_USER_UPDATE_PASSWORD'
      }
      this.$config({ handlers: true }).$post(userService.POST_VERIFY_MOBILE, data).then((res) => {
        this.isStepOneSuccess = true
        this.sedIsActive = true
        this.activeName = 'second'
        this.token = res.data.codeToken
        this.phone = ''
        this.messageBoxExplain = '验证成功，请输入新的手机号'
        this.isOldphone = false
        this.step = 'newPhone'
        clearInterval(this.timerr)
        this.isSend = false
        this.isProhibit = true
        this.second = 60
        this.isImg = false
        this.phoneKey = ''
        this.cap.refresh()
      }).catch(err => {
        this.errorTips.phoneCode = err.msg
      })
    },
    undatePhone () {
      if (!this.validPassword()) {
        this.errorTips.password = '密码支持6~30位的大小写英文和数字，必须包含英文和数字'
        return false
      }
      if (!this.rePassword) {
        this.errorTips.rePassword = '请输入确认新密码'
        return false
      }
      if (this.password !== this.rePassword) {
        this.errorTips.rePassword = '两次密码输入不一致'
        return false
      }
      let data = {
        mobile: this.userPhone,
        codeToken: this.token,
        newPassword: this.password
      }
      this.$config({ handlers: true }).$post(userService.POST_BACK_PASSWORD, data).then((res) => {
        setInterval(() => {
          this.time--
          if (this.time <= 0) {
            this.$router.replace('/login')
          }
        }, 1000)
        this.thdIsActive = true
        this.isStepTwoSuccess = true
        this.isStepThreeSuccess = true
        this.activeName = 'third'
      }).catch(err => {
        this.errorTips.password = err.msg
      })
    },
    validPhone: function (phone) {
      let re = /^1[3|4|5|6|7|8|9][0-9]\d{8}$/
      return re.test(phone)
    },
    validPassword: function () {
      let re = /^(?!\d+$)(?![A-Za-z]+$)[a-zA-Z0-9]{6,30}$/
      return re.test(this.password)
    },
    passwordFocus (val) {
      switch (val) {
        case 'password': this.errorTips.password = ''
          this.isPasswordShow = true
          break
        case 'rePassword': this.errorTips.rePassword = ''
          this.isNewPasswordShow = true
          break
        case 'userPhone': this.errorTips.userPhone = ''
          break
        case 'phoneCode': this.errorTips.phoneCode = ''
          break
      }
    },
    passwordChange () {
      this.isContainCount = this.password.length >= 6 ? 1 : 0
      var regNum = /^(?=.*\d.*\b)/
      this.isContainNum = regNum.test(this.password) ? 1 : 0
      var regEn = /[_a-zA-Z]/
      this.isContainEn = regEn.test(this.password) ? 1 : 0
      if (this.password.length >= 6 && regNum.test(this.password) && regEn.test(this.password)) {
        this.isChecked = true
      } else {
        this.isChecked = false
      }
      if (this.password !== this.rePassword) {
        this.isSame = false
      }
    },
    newPasswordChange () {
      if (this.password === this.rePassword) {
        this.isSame = true
      } else {
        this.isSame = false
      }
    },
    passwordBlur () {
      this.isPasswordShow = false
    },
    newPasswordBlur () {
      this.isNewPasswordShow = false
    }
  }
}
</script>
<style lang="scss" scoped>
@import 'assets/css/mixin.scss';
.forgot-container /deep/ {
  text-align: center;
  display: block;
  width: 1200px;
  margin: 120px auto 0;
  padding: 0 55px;
  .v-title {
    font-size: 24px;
    color: #222;
  }
  .com-tabs {
    width: 1020px;
    height: 600px;
    background-color: #fff;
    border: 1px solid #e2e2e2;
    margin-top: 25px;
    .tab-header-wrap {
      width: 500px;
      margin: 0 auto;
    }
    li {
      margin-right: 165px;
      padding: 0;
      position: relative;
      color: #222;
      &:last-child {
        margin-right: 0;
      }
    }
    .tab-header {
      padding-top: 130px;
    }
    .v-line {
      display: block;
      width: 450px;
      height: 2px;
      background-color: #e2e2e2;
      position: absolute;
      top: -7px;
      left: 34px;
    }
    .v-icon1,
    .v-icon2,
    .v-icon3 {
      display: block;
      position: absolute;
      color: #4b5afe;
      top: -26px;
      left: 20px;
      z-index: 2;
    }
    .v-icon2 {
      left: 28px;
    }
    .v-circle {
      display: block;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      border: 2px solid #e2e2e2;
      background-color: #fff;
      position: relative;
      margin: -55px auto 0;
      z-index: 2;
      &.active {
        i {
          display: block;
        }
      }
      i {
        display: none;
        position: absolute;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: #4b5afe;
        top: 50%;
        left: 50%;
        margin-top: -4px;
        margin-left: -4px;
      }
    }
  }
  .v-get-password {
    display: block;
    width: 450px;
    margin: 50px auto 0;
    position: relative;
    .v-psd,
    .v-new-psd {
      position: relative;
      .v-verification {
        position: absolute;
        top: 0px;
        right: -140px;
        ul {
          width: 130px;
          height: 95px;
          background-color: #fff;
          box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.2);
          border-radius: 4px;
          padding: 8px 12px;
          font-size: 12px;
          color: #222;
          li {
            text-align: left;
            margin-bottom: 5px;
            margin-right: 0;
          }
          p {
            text-align: left;
            color: #555;
            margin-bottom: 5px;
          }
          i {
            color: #e9ebff;
            font-size: 12px;
            &.isActive {
              color: $color-blue;
            }
          }
        }
      }
    }
    .v-new-psd {
      .v-verification {
        ul {
          height: 60px;
        }
      }
    }
    .v-error {
      margin-top: 10px;
    }
    .v-label {
      margin-top: -12px;
      height: 18px;
      line-height: 18px;
    }
    .com-input {
      width: 300px;
      margin-bottom: 15px;
    }
    #captcha {
      width: 300px;
      margin-bottom: 15px;
    }
    .primary-button {
      display: block;
      width: 200px;
      height: 40px;
      margin: 40px auto 0;
    }
    .el-button {
      margin-top: 15px;
    }
    .com-input {
      &.v-input {
        width: 450px;
        margin-bottom: 30px;
        input {
          padding: 0 10px !important;
        }
      }
      &.phone-code .limit {
        display: none;
      }
    }
    .v-getcode {
      position: absolute;
      right: 3px;
      top: 128px;
      background-color: #ffd021;
      display: inline-block;
      width: 115px;
      height: 34px;
      line-height: 34px;
      text-align: center;
      font-size: 13px;
      color: #fff;
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
  }
  .v-forgot {
    .v-success-img {
      width: 122px;
      margin-top: 20px;
    }
    .v-success {
      font-size: 24px;
      color: #222;
    }
    .v-tip {
      font-size: 14px;
      color: #222;
      margin-top: 5px;
      .v-red {
        color: #fc5659;
      }
    }
  }
}
</style>

