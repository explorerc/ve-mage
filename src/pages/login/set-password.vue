<template>
  <div class="setpsd-container">
    <message-box v-show="show" width="450px" @handleClick="messageBoxClick">
      <div slot="header" class="v-title">感谢您选择微吼，请先设置登录密码</div>
      <p class="v-info">
        请勿将密码泄露给第三者，避免造成不必要的损失
      </p>
      <com-input :value.sync="password" placeholder="请输入密码" class="v-input" :class="{warning:isWarning}" type="password" :maxLength="30" @focus="passwordFocus()"></com-input>
    </message-box>
  </div>
</template>
<script>
  import account from 'src/api/account-manage'
  export default {
    data () {
      return {
        password: '',
        isWarning: false,
        show: true
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
          if (this.password.trim() === '') {
            this.isWarning = true
          } else {
            let data = {
              'newPassword': this.password
            }
            account.setPassword(data).then((res) => {
              if (res.code !== 200) {
                alert(res.msg)
              } else {
                this.isWarning = false
                this.$router.replace('/setAccount')
              }
            })
          }
        }
      },
      passwordFocus () {
        alert(1)
      }
    }
  }
</script>
<style lang="scss" scoped>
.setpsd-container /deep/ {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  .ve-message-box {
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
