<template>
  <div class="v-frame">
    <p>
      感谢您选择微吼，在开始前请先设置登录密码
    </p>
    <com-input :value.sync="outValue" placeholder="" class="v-input" :class="{warning:isWarning}"></com-input>
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
        if (this.outValue.trim() !== '') {
          this.setPassword()
        }
      }
    },
    methods: {
      setPassword () {
        if (this.outValue.trim() === '') {
          this.isWarning = true
        } else {
          this.isWarning = false
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
