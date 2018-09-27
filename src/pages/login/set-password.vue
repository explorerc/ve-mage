<template>
  <div class="setpsd-container">
    <message-box v-show="show"
                 width="450px"
                 @handleClick="messageBoxClick">
      <div slot="header"
           class="v-title">感谢您选择微吼，请先设置登录密码</div>
      <p class="v-info">
        请勿将密码泄露给第三者，避免造成不必要的损失
      </p>
      <div class="v-psd">
        <com-input :value.sync="password"
                   placeholder="请输入密码"
                   class="v-input"
                   :class="{warning:isWarning}"
                   type="password"
                   :maxLength="30"
                   @focus="passwordFocus()"
                   @change="passwordChange()"
                   @blur="passwordBlur()"
                   :error-tips="errorTips"></com-input>
        <div class="v-verification"
             v-if="isShow">
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
    </message-box>
  </div>
</template>
<script>
import userService from 'src/api/user-service'
export default {
  data () {
    return {
      password: '',
      isWarning: false,
      show: true,
      isContainEn: 0,
      isContainNum: 0,
      isContainCount: 0,
      isShow: false,
      isChecked: false,
      errorTips: ''
    }
  },
  components: {
  },
  created () {
  },
  watch: {
    password: function () {
      if (this.password.trim() === '') {
        this.isWarning = true
      } else {
        this.isWarning = false
      }
    }
  },
  methods: {
    messageBoxClick (e) {
      if (e.action === 'confirm') {
        if (!this.isChecked) {
          this.errorTips = '密码支持6~30位的大小写英文和数字，必须包含英文和数字'
          return false
        }
        let data = {
          'newPassword': this.password
        }
        this.$config({ handlers: true }).$post(userService.POST_SET_PASSWORD, data).then((res) => {
          this.isWarning = false
          let accountInfo = JSON.parse(sessionStorage.getItem('accountInfo'))
          if (accountInfo) {
            accountInfo.hasPassword = true
            sessionStorage.setItem('accountInfo', JSON.stringify(accountInfo))
          }
          this.$router.replace('/setAccount')
        }).catch((err) => {
          this.errorTips = err.msg
        })
      }
    },
    passwordFocus () {
      this.errorTips = ''
      this.isShow = true
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
@import 'assets/css/variable.scss';
.setpsd-container /deep/ {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  .ve-message-box {
    overflow: visible;
    &:before {
      height: 0;
    }
    .ve-message-box__container {
      padding: 10px 30px 20px;
    }
    .icon-close {
      display: none;
    }
    .ve-message-box__btns {
      margin-top: 40px;
    }
    .v-psd {
      position: relative;
      .v-verification {
        position: absolute;
        top: 70px;
        left: 0;
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
            margin-bottom: 5px;
          }
          p {
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
    .v-title {
      font-size: 20px;
      color: #222;
      margin-top: 15px;
    }
    .v-info {
      font-size: 14px;
      color: #555;
    }
    .v-input {
      width: 390px;
      margin: 20px auto 0;
      &.warning {
        input {
          border-color: red;
        }
      }
    }
    .v-requirement {
      width: 385px;
      text-align: left;
      margin: 5px auto;
    }
    .v-confirm {
      display: block;
      width: 385px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      background-color: #333;
      color: #fff;
      text-decoration: none;
      margin: 50px auto;
    }
    .v-explain {
      margin: 35px auto 0;
    }
  }
}
</style>
