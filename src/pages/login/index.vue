<template>
  <div class="clearfix login-container">
    <div class="v-right">
      <div class="v-content">
        <p class="v-title">
          欢迎登录净菜系统
        </p>
        <div class="v-account">
          <com-input inputType="text"
                     :isPassword="false"
                     value=""
                     :inputValue.sync="userName"
                     placeholder="用户名/手机号"
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
import mageService from 'src/api/mage-service'
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
      shenHeiShow: false,
      userDate: {
        img: '',
        title: '',
        subname: '',
        btnName: '',
        btnUrl: ''
      }
    }
  },
  components: {
    'com-input': MyInput
  },
  computed: {
    ...mapState('login', {
      isLogin: state => state.isLogin,
      accountInfo: state => state.accountInfo
    })
  },
  created () {
    this.$config({ handlers: true }).$get(mageService.GET_LOGIN_DATE).then((res) => {
      this.userDate.img = res.data.image
      this.userDate.title = res.data.title
      this.userDate.subname = res.data.description
      this.userDate.btnName = res.data.subname
      this.userDate.btnUrl = res.data.urlname
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
  },
  methods: {
    ...mapMutations('login', {
      setIsLogin: types.UPDATE_IS_LOGIN,
      setAccountInfo: types.ACCOUNT_INFO
    }),
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
      this.$config({ handlers: true }).$post(mageService.POST_LOGIN_ACCOUNT, data).then((res) => {
        sessionStorage.setItem('isLogin', true)
        this.$get(mageService.GET_ACCOUNT).then((res) => {
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
    sqHandler (e) {
      this.shenQingShow = false
      if (e.action === 'confirm') {
        this.$router.push('/register')
      }
    },
    checkPhone (param) {
      debugger
      let reg = /^1[3|4|5|6|7|8|9][0-9]\d{8}$/
      if (reg.test(parseInt(param))) {
        this.phoneStatus = true
      } else {
        this.phoneStatus = false
      }
    },
    checkAccountForm: function (e) {
      if (!this.userName) {
        this.accountError = '请输入用户名/手机号'
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
    },
    inputFocus: function () {
      this.accountError = ''
      this.accountOpacity = 0
      this.mobileError = ''
      this.mobileOpacity = 0
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
  background: url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1549172655619&di=bff423839d4c664c615602aeced719af&imgtype=0&src=http%3A%2F%2Fimages.missyuan.com%2Fattachments%2Fday_090219%2F20090219_cdd132fe98613ec7ce3dakDl9ubJl7Zw.jpg') no-repeat;
  background-position: center center;
  background-size: 100% 100%;
  .v-right {
    float: right;
    width: 100%;
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
      color: #999;
      margin-top: 15px;
      display: block;
    }
    .v-content {
      width: 400px;
      position: absolute;
      left: 50%;
      top: 0;
      bottom: 0;
      margin: auto 0 auto -170px;
      padding: 40px 20px 20px;
      max-height: 423px;
      text-align: left;
      font-size: 22px;
      background-color: rgba(255,249,228,0.7);
      border-radius: 4px;
    }
    .v-title {
      margin-bottom: 20px;
      font-size: 32px;
      color: #333333;
      text-align: center;
    }
    #captcha {
      height: 40px;
      margin-top: 10px;
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
        height: 30px;
        line-height: 30px;
        margin-top: 8px;
        font-size: 12px;
        color: #e62e2e;
      }
      &.v-forget {
        margin-top: 8px;
        margin-bottom: 35px;
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
      height: 36px;
      line-height: 36px;
      text-align: center;
      /*font-size: 13px;*/
      /*color: #fff;*/
      position: absolute;
      bottom: 20px;
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
}
</style>

