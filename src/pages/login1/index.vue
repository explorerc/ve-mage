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
        <img src="../../assets/image/login@2x.png" alt="">
      </div>
      <div>
      </div>
    </div>
    <div class="v-right">
      <div class="v-content">
        <p class="v-title">
          欢迎登录微吼知客
        </p>
        <ul class="v-tabs clearfix">
          <li :class="{active: isActive}"
              @click="changeFunction('账号登录')"
          >账号登录
          </li>
          <span>|</span>
          <li :class="{active: !isActive}"
              @click="changeFunction('手机登录')"
          >
            手机登录
          </li>
        </ul>
        <div class="v-account"
             v-if="isActive">
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
               style="margin-top: -28px;">
            <!--:style="{opacity:accountOpacity}">-->
            <p class="v-error">{{errorInfo}}</p>
          </div>
          <div class="input-form v-forget"
               style="margin-top: 5px;"
          >
            <template>
              <el-checkbox v-model="remember">自动登录</el-checkbox>
            </template>
            <a href="/forgot" class="fr clickTag">忘记密码</a>
          </div>
          <button class="primary-button"
                  @click="accountSubmit"
          >
            提交
          </button>
        </div>
        <div class="v-mobile"
             v-else
        >
          <com-input inputType="text"
                     :isPassword="false"
                     value=""
                     :inputValue.sync="phone"
                     placeholder="手机号"
                     :maxLength="11"
                     @inputFocus="inputFocus()"
          >
          </com-input>
          <div id="captcha"></div>
          <com-input inputType="text"
                     :isPassword="false"
                     value=""
                     :inputValue.sync="code"
                     placeholder="验证码"
                     @inputFocus="inputFocus()"
                     @enterClick="phoneSubmit"
          >
            <a href="javacript:;"
               class="v-getcode"
               :class="{prohabit:isProhibit}"
               @click="getCode()"
            >
              获取验证码
              <span v-show="isSend" class="fr">(<em>{{second}}</em>s)</span>
            </a>
          </com-input>
          <div class="input-form v-label"
               style="margin-top: -28px;">
            <!--:style="{opacity:accountOpacity}">-->
            <p class="v-error">{{errorInfo}}</p>
          </div>
          <button class="primary-button"
                  @click="phoneSubmit"
          >
            提交
          </button>
        </div>
        <router-link class="v-register" to="/register">申请免费试用</router-link>
      </div>
      <div class="v-info">
        <a href="http://e.vhall.com/home/vhallapi/serviceterms">服务条款</a> | <a
        href="http://e.vhall.com/home/vhallapi/copyright">版权信息</a> | <a href="">京ICP备13004264号-4 京网文[2016] 2506-288号</a>
      </div>
    </div>
  </div>
</template>

<script>
  import MyInput from './login-input'
  import userService from 'src/api/user-service'

  export default {
    data () {
      return {
        isActive: false, // 默认是手机登录
        userName: '',
        passWord: '',
        errorInfo: '', // 错误消息,提示
        // accountOpacity: 0, // 错误消息颜色透明度
        // mobileError: '',
        // mobileOpacity: 0,
        type: 'password',
        remember: false, // 自动登录不选中
        phone: '', // 电话号码
        phoneStatus: false, // 电话号码格式判断
        code: '', // 手机短信验证码
        isProhibit: true, // 未点击验证时的样式
        isSend: false, // 未发生验证码
        second: 60, // 获取验证码倒计时
        key: '',
        timerr: '',
        isImg: false,
        cap: '',
        phoneKey: '', // 接受点击验证时，返回的值
        isPhonekey: true // 处理易盾显示问题
      }
    },
    components: {
      'com-input': MyInput
    },
    methods: {
      changeFunction (item) {
        this.errorInfo = '' // 清空错误信息提醒
        if (item === '账号登录') {
          this.isActive = true
        } else {
          this.isActive = false
        }
      },
      /* 获得焦点的时候，清空错误提示信息 */
      inputFocus () {
        this.errorInfo = ''
      },
      change (type) {
        // this.type = type // 控制密码是否可见
      },
      /* 账户登录提交 */
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
          if (!this.isActive) {
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

          this.accountError = err.msg
          this.accountOpacity = 1
        })
      },
      /* 手机验证码登录 */
      phoneSubmit () {
        this.checkMobileForm()
      },
      /* 检查电话号的格式 */
      checkPhone (phone) {
        let reg = /^1[3|4|5|6|7|8|9]\d{9}$/
        if (reg.test(parseInt(phone))) {
          this.phoneStatus = true
        } else {
          this.phoneStatus = false
        }
      },
      /* 检查账户的内容 */
      checkAccountForm (e) {
        // 用户没有输入用户名
        if (!this.userName) {
          this.errorInfo = '请输入用户名/手机号/邮箱'
          return false
        }
        // 用户没有输入密码
        if (!this.passWord) {
          this.errorInfo = '请输入密码'
          return false
        }
        // 当密码和用户名都有时
        this.errorInfo = ''
      },
      /* 检测用户是否有输入电话号码和验证码 */
      checkMobileForm () {
        if (!this.phone) {
          this.errorInfo = '请输入手机号'
          return false
        }
        if (!this.code) {
          this.errorInfo = '请输入验证码'
          return false
        }
        this.errorInfo = ''
      },
      /* 获取验证码 */
      getCode () {
      },
      isGetCodePermission (val) {
        if (this.isImg && this.phoneStatus) {
          this.isProhibit = false
          if (this.second > 0) {
            this.isSend = false
            this.isProhibit = false
            this.second = 60
            clearInterval(this.timerr)
            if (val) {
              this.isImg = false
              this.phoneKey = ''
              this.cap.refresh()
            }
          }
        }
      }
    },
    created () {
      this.$config({handlers: true}).$get(userService.GET_CAPTCHA_ID).then((res) => {
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
    watch: {
      phoneStatus: function (val) {
        this.isGetCodePermission(true)
      },
      isImg: function () {
        this.isGetCodePermission()
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '~assets/css/mixin.scss';

  * {
    margin: 0;
    padding: 0;
  }

  .login-container /deep/ {
    height: 100%;
    width: 100%;
    min-width: 1200px;
    min-height: 660px;
    overflow: auto;
    overflow-y: hidden;
    .v-left {
      float: left;
      height: 100%;
      width: 50%;
      background: url('~assets/image/login_bg.png') no-repeat;
      background-position: center center;
      position: relative;
      background-size: cover;
      .v-logo {
        position: absolute;
        top: 20px;
        left: 50px;
        font-size: 36px;
      }
      .v-content {
        width: 600px;
        text-align: center;
        position: absolute;
        top: 20%;
        left: 50%;
        margin-left: -300px;
        overflow: hidden;
        .v-title {
          font-size: 36px;
          color: #222222;
        }
        .v-subtitle {
          margin-top: 12px;
          font-size: 18px;
          color: #222222;
        }
        img {
          width: 490px;
          display: inline-block;
          margin: 55px 0 0px -25px;
        }
      }
    }
    .v-right {
      float: right;
      width: 50%;
      height: 100%;
      position: relative;
      .v-content {
        /*border: 1px solid red;*/
        width: 340px; /*让内容换行显示*/
        position: absolute;
        left: 50%;
        /*下面四句样式一起使用，可实现盒子水平居中*/
        top: 0;
        bottom: 0;
        margin: auto 0 auto -170px;
        max-height: 475px;
        .v-title {
          font-size: 32px;
          color: #222;
        }
        .v-tabs {
          margin-top: 45px;
          color: #333;
          span {
            float: left;
            margin-right: 10px;
            margin-left: 10px;
            font-size: 20px;
            line-height: 29px;
          }
          li {
            float: left;
            cursor: pointer;
            font-size: 22px;
            &.active {
              color: #FFD021;
            }

          }
        }
        .v-account {
          .v-forget {
            margin: 5px 0 50px;
            font-size: 13px;
            color: #999;
            .clickTag {
              color: #999;
            }
          }
          /*.yidun_intellisense--light {*/
            /*display: none !important;*/
          /*}*/
        }
        .v-label {
          .v-error {
            height: 40px;
            line-height: 40px;
            margin-top: 8px;
            color: #e63e63;
            font-size: 12px;
          }
        }
        .primary-button {
          display: block;
          width: 100%;
          height: 44px;
          border-radius: 4px;
        }
        .input-form {
          position: relative;
        }
        .v-getcode {
          background-color: #FFD021;
          display: block;
          height: 34px;
          width: 115px;
          line-height: 34px;
          text-align: center;
          font-size: 13px;
          color: #fff;
          position: absolute;
          bottom: 22px;
          right: 0;
          border-radius: 2px;
          text-decoration: none;
          &.prohabit {
            background-color: #e2e2e2;
            opacity: 0.8;
          }
        }
        .v-register {
          font-size: 16px;
          color: #666;
          display: block;
          margin-top: 15px;
        }

      }
      .v-info {
        width: 100%;
        position: absolute;
        bottom: 15px;
        text-align: center;
      }
      .el-checkbox__label {
        color: #999 !important;
      }
    }
  }
</style>
