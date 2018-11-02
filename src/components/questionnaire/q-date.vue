<template>
  <div class="q-edit-content">
    <el-date-picker v-if="!edit"
                    v-model="value.value"
                    type="date"
                    @blur="check"
                    @focus="focus"
                    placeholder="选择日期">
    </el-date-picker>
    <div v-if="!edit&&errorTip"
         class="error-msg">{{errorTip}}
    </div>
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
      }
      return true
    }
  }
}
</script>

<style scoped lang="scss">
.q-edit-content {
  /deep/ {
    .error-msg {
      position: absolute;
      color: #fc5659;
      padding-left: 10px;
      line-height: 20px;
      font-size: 12px;
    }
  }
}
</style>
