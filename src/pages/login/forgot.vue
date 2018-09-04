<template>
  <div class="clearfix forgot-container">
    <p class="v-title">
      找回密码
    </p>
    <com-tabs :value.sync="activeName" customClass="v-forgot" disabled>
      <com-tab index="first">
        <div slot="label">
          验证身份
          <span class="v-circle active"><i></i></span>
          <span class="v-line"></span>
        </div>
        <div class="v-get-password">
          <com-input class="v-input" :value.sync="userPhone" placeholder="输入手机号" @inputFocus="inputFocus()" :class="{warning:isWarning}"></com-input>
          <div id="captcha"></div>
          <com-input class="v-input phone-code" :value.sync="phoneCode" placeholder="动态密码" @inputFocus="inputFocus()" :class="{warning:isWarning}">
          </com-input>
          <a href="javascript:;" class="v-getcode" :class="{prohibit:isProhibit}" @click="getCode()">获取动态码<span v-show="isSend" class="fr">(<em>{{second}}</em>s)</span></a>
          <button class="primary-button" @click="verifyUser">提交</button>
        </div>
      </com-tab>
      <com-tab index="second">
        <div slot="label">
          设置新密码
          <span class="v-circle" :class="{active: sedIsActive}"><i></i></span>
        </div>
        <div class="v-get-password">
          <div class="v-psd">
            <com-input class="v-input" :value.sync="password" placeholder="请输入新密码" :maxLength="30" type="password" @focus="passwordFocus('password')" @change="passwordChange()" @blur="passwordBlur()"  :error-tips="errorTips"></com-input>
            <div class="v-verification" v-if="isShow">
              <ul>
                <p>密码至少包含：</p>
                <li>
                  <i class="iconfont icon-duigou1" :class="{isActive: isContainEn}"></i> 1个英文字母
                </li>
                <li>
                  <i class="iconfont icon-duigou1" :class="{isActive: isContainNum}"></i> 1个数字
                </li>
                <li>
                  <i class="iconfont icon-duigou1" :class="{isActive: isContainCount}"></i> 6～30个字符
                </li>
              </ul>
            </div>
          </div>
          <com-input class="v-input" :value.sync="rePassword" placeholder="请确认新密码" :maxLength="30" type="password" @focus="passwordFocus('rePassword')" :error-tips="errorTips">
          </com-input>
          <button class="primary-button" @click="undatePhone">提交</button>
        </div>
      </com-tab>
      <com-tab index="third">
        <div slot="label">
          设置完成
          <span class="v-circle" :class="{active: thdIsActive}"><i></i></span>
        </div>
        <img src="../../assets/image/success@2x.png" alt="" class="v-success-img">
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
  import account from 'src/api/account-manage'
  import identifyingcodeManage from 'src/api/identifyingcode-manage'
  export default {
    data () {
      return {
        tabValue: 1,
        outValue: '123',
        userPhone: '',
        phoneCode: '',
        token: '',
        activeName: 'first',
        isWarning: false,
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
        isShow: false,
        errorTips: ''
      }
    },
    components: {
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
        }
      })
    },
    mounted () {
    },
    watch: {
      userPhone: function () {
        this.checkPhone(this.userPhone)
        this.isGetCodePermission()
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
          'type': 'BUSINESS_USER_UPDATE_PASSWORD',
          captcha: this.phoneKey
        }
        identifyingcodeManage.getCode(data).then((res) => {
          if (res.code !== 200) {
            // this.error = res.msg
            // this.opacity = 1
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
      verifyUser () {
        if (!this.phoneStatus) {
          return false
        }
        let data = {
          mobile: this.userPhone,
          code: this.phoneCode,
          type: 'BUSINESS_USER_UPDATE_PASSWORD'
        }
        account.verifyMobile(data).then((res) => {
          if (res.code !== 200) {
            // this.error = res.msg
            // this.opacity = 1
          } else {
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
          }
        })
      },
      undatePhone () {
        if (this.password !== this.rePassword) {
          // this.error = '两次密码输入不一致'
          // this.opacity = 1
        } else if (!this.validPassword()) {
          // this.error = '密码不符合规则'
          // this.opacity = 1
        } else {
          let data = {
            mobile: this.userPhone,
            codeToken: this.token,
            newPassword: this.password
          }
          account.updateMobileByToken(data).then((res) => {
            if (res.code !== 200) {
              // this.error = res.msg
              // this.opacity = 1
            } else {
              setInterval(() => {
                this.time--
                if (this.time <= 0) {
                  // this.$router.replace('/login')
                }
              }, 1000)
              this.thdIsActive = true
              this.activeName = 'third'
            }
          })
        }
      },
      validPhone: function (phone) {
        var re = /^1[3|4|5|6|7|8|9][0-9]\d{8}$/
        return re.test(phone)
      },
      validPassword: function () {
        var re = /^(?!\d+$)(?![A-Za-z]+$)[a-zA-Z0-9]{6,30}$/
        return re.test(this.password) && re.test(this.rePassword)
      },
      passwordFocus (val) {
        switch (val) {
          case 'password' : this.errorTips = ''
            this.isShow = true
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
      },
      passwordBlur () {
        this.isShow = false
      }
    }
  }
</script>
<style lang="scss" scoped>
@import '~assets/css/mixin.scss';
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
      &:last-child {
        margin-right: 0;
      }
    }
    .tab-header {
      padding-top: 130px;
    }
    .v-line {
      display: block;
      width: 445px;
      height: 2px;
      background-color: #e2e2e2;
      position: absolute;
      top: -7px;
      left: 25px;
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
    .v-psd {
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

