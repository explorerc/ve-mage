<template>
  <div class="v-frame">
    <p>
      感谢您选择微吼，在开始前请先设置登录密码
    </p>
    <com-input :value.sync="outValue" placeholder="" class="v-input" :class="{warning:isWarning}" type="password"></com-input>
    <p class="v-requirement">密码创建要求</p>
    <a href="javascript:;" class="v-confirm" @click="setPassword()">确定</a>
    <p class="v-explain">请勿将密码泄露给第三者，避免造成不必要的损失</p>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        outValue: '',
        isWarning: false
      }
    },
    components: {
    },
    created () {
    },
    watch: {
      outValue: function () {
        if (this.outValue.trim() === '') {
          this.isWarning = true
        } else {
          this.isWarning = false
        }
      }
    },
    methods: {
      setPassword () {
        if (this.outValue.trim() === '') {
          this.isWarning = true
        } else {
          this.isWarning = false
          this.$messageBox({
            header: '免费试用',
            content: '感谢您提供的重要信息，我们会立即安排专业人员跟您联系，为您提供试用账号。您也可以拨打我们的专属服务热线400-888-9970获取更多信息。',
            confirmText: '我知道了',
            autoClose: 60,
            handleClick: (e) => {
              console.log(e)
              if (e.action === 'cancel') {
                console.log('取消或者关闭按钮')
              } else if (e.action === 'confirm') {
                console.log('点击了确定按钮')
              }
            }
          })
        }
      }
    }
  }
</script>
<style lang="scss">
.v-frame {
  width: 640px;
  height: 440px;
  margin: 200px auto;
  border: 1px solid #333;
  text-align: center;
  padding-top: 85px;
  position: relative;
  .v-input {
    width: 385px;
    margin: 70px auto 0;
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
</style>
