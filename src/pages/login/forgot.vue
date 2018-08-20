<template>
  <div class="clearfix v-div">
    <img src="" alt="logo">
    <p class="v-title">
      找回密码
    </p>
    <com-tabs :value.sync="tabValue" :disabled="true">
       <com-tab label="验证用户身份" :index="1">
          <div class="v-get-password">
            <com-input class="v-input" :value.sync="userPhone" placeholder="输入手机号" :maxLength="11" @inputFocus="inputFocus()" :class="{warning:isWarning}"></com-input>
            <div id="captcha"></div>
            <com-input class="v-input phone-code" :value.sync="phoneCode" placeholder="动态密码" :maxLength="6" @inputFocus="inputFocus()" :class="{warning:isWarning}">
            </com-input>
            <a href="javascript:;" class="v-getcode" :class="{prohibit:isProhibit}" @click="getCode()">获取动态码<span v-show="isSend" class="fr">(<em>{{second}}</em>s)</span></a>
            <div class="input-form v-label" :style="{opacity:opacity}">
		      		<p class="v-error">{{error}}</p>
		      	</div>
            <el-button @click="verifyUser">wo</el-button>
          </div>
       </com-tab>
       <com-tab label="设置新密码" :index="2"><com-input :value.sync="outValue"></com-input></com-tab>
       <com-tab label="完成" :index="3"><span>{{outValue}}</span></com-tab>
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
        opacity: 0,
        error: ''
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
          setTimeout(() => {
            console.log('sssssssssssssssss')
            window.initNECaptcha({
              captchaId: _self.key,
              element: '#captcha',
              mode: 'float',
              width: 300,
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
          }, 5000)
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
          'type': 'BUSINESS_USER_UPDADE_PASSWORD',
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
      verifyUser () {
        if (!this.phoneStatus) {
          return false
        }
        let data = {
          mobile: this.userPhone,
          code: this.phoneCode,
          type: 'BUSINESS_USER_UPDADE_PASSWORD'
        }
        account.verifyMobile(data).then((res) => {
          if (res.code !== 200) {
            this.error = res.msg
            this.opacity = 1
          } else {
            this.tabValue = 2
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
.v-div {
  display: block;
  width: 1200px;
  margin: 85px auto 0;
  padding: 35px 55px;
  .v-get-password {
    display: block;
    width: 500px;
    margin: 30px auto 0;
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
  }
}
.v-get-password {
  margin-top: 200px;
  .el-button {
    margin-top: 15px;
  }
  .com-input {
    &.v-input {
      width: 300px;
      margin-bottom: 10px;
      input {
        width: 300px;
        height: 40px;
        line-height: 40px;
      }
      &.phone-code {
        width: 180px;
        input {
          width: 180px;
        }
      }
    }
  }
  .v-getcode {
    background-color: #fc5659;
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
  }
}
</style>

