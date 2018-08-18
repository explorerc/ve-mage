<template>
  <div class="clearfix v-div">
    <img src="" alt="logo">
    <p class="v-title">
      找回密码
    </p>
    <com-tabs :value.sync="tabValue" :disabled="true">
       <com-tab label="验证用户身份" :index="1">
          <div class="v-get-password">
            <com-input inputType="text" value="" :inputValue.sync="userPhone" @changeInput="checkPhone" placeholder="输入手机号" :maxLength="11" @inputFocus="inputFocus()"></com-input>
            <div id="captcha"></div>
            <com-input inputType="text" value="" :inputValue.sync="code" placeholder="动态密码" :maxLength="6" @inputFocus="inputFocus()">
            </com-input>
            <a href="javascript:;" class="phone-code-btn" :class="{prohibit:isProhibit}" @click="getCode()">获取动态码<span v-show="isSend" class="fr">(<em>{{second}}</em>s)</span></a>
            <div class="input-form v-label" :style="{opacity:opacity}">
		      		<p class="v-error">{{error}}</p>
		      	</div>
            <el-button @click="submit">wo</el-button>
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
        code: '',
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
          'type': 'BUSINESS_USER_REG'
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
        account.register(data).then((res) => {
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
      width: 435px;
      margin-bottom: 10px;
      input {
        width: 435px;
        height: 40px;
        line-height: 40px;
      }
      &.phone-code {
        width: 300px;
        input {
          width: 300px;
        }
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
}
</style>

