<template>
  <div class="q-edit-content">
    <com-input v-if="!edit"
               @focus="focus"
               @blur="check"
               :type="value.detail.format"
               :max-length="value.detail.max?value.detail.max:0"
               v-model="value.value"
               :errorTips="errorTip"></com-input>
    <com-input v-if="!edit&&value.verification==='Y'"
               @focus="focus"
               @blur="check"
               :max-length="6"
               v-model="value.value"
               :errorTips="errorTip"></com-input>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      default () {
        return {}
      }
    },
    edit: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      errorTip: ''
    }
  },
  methods: {
    focus () {
      this.errorTip = ''
    },
    check () {
      if (this.value.required && !this.value.value) {
        this.errorTip = '此项为必填项'
        return false
      } else if (this.value.detail.format === 'email' && this.value.value) {
        var re = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/
        if (!re.test(this.value.value)) {
          this.errorTip = '请输入正确的邮箱格式'
        }
        return false
      } else if (this.value.detail.format === 'mobile' && this.value.value) {
        if (this.value.value.length < 11) {
          this.errorTip = '请输入正确的手机号'
        }
        return false
      }
      return true
    }
  }
}
</script>

<style scoped lang="scss">
.q-edit-content {
  width: 90%;
  /deep/ {
    .error-msg {
      font-size: 12px;
    }
  }
}
</style>
