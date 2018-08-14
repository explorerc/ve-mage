<template>
  <div class="clearfix v-div">
    <div class="v-left">
        <img src="" alt="" class="v-logo">
    </div>
    <div class="v-right">
        <div class="v-content">
            <p class="v-title">
                欢迎登陆微吼直播
            </p>
            <ul class="v-tabs clearfix">
                <li v-for="(item, index) in items" v-bind:key="index" v-on:click="changeFunction(item)">{{item}}</li>
            </ul>
            <div class="v-account" v-show="isAccount">
                我是账号登录
                <com-input inputType="text" :isPassword="false" value="" :inputValue.sync="userName" placeholder="用户名/邮箱/手机号" :maxLength="30"></com-input>
                <com-input :inputType="type" :isPassword="true" :inputValue.sync="passWord" v-model="passWord" @changePassword="change($event)" placeholder="密码" :maxLength="30"></com-input>
                <el-button @click="accountSubmit">wo</el-button>
            </div>
            <div class="v-mobile" v-show="!isAccount">
                <com-input inputType="text" :isPassword="false" value="" :inputValue.sync="phone" placeholder="手机号"  @changePhone="checkPhone" :maxLength="11"></com-input>
                <div id="captcha"></div>
                <com-input inputType="text" :isPassword="false" value="" :inputValue.sync="code" placeholder="动态密码" :maxLength="6">
                  <a href="javascript:;" class="v-getcode" :class="{prohibit:isProhibit}" @click="getCode()">获取动态码<span v-show="isSend" class="fr">(<em>{{second}}</em>s)</span></a>
                </com-input>
                <el-button @click="phoneSubmit">wo</el-button>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
  import MyInput from './login-input'
  export default {
    data () {
      return {
        items: ['account', 'mobile'],
        isAccount: true,
        userName: '',
        passWord: '',
        phone: '',
        phoneStatus: false,
        code: '',
        type: 'password',
        key: 'b7982ef659d64141b7120a6af27e19a0',
        isProhibit: true,
        isSend: false,
        second: 60,
        timerr: '',
        phoneKey: '',
        isImg: false,
        cap: null
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
      phoneStatus: function (val) {
        this.isGetCodePermission()
      },
      isImg: function (val) {
        this.isGetCodePermission()
      }
    },
    methods: {
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
        console.log(this.userName)
        console.log(this.passWord)
      },
      phoneSubmit () {
        console.log(this.phone)
        console.log(this.code)
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
  width: 100%;
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

