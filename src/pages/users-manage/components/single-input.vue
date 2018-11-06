<template>
  <div class="v-from">
    <span class="v-title">
      {{title}}：
    </span>
    <template v-if="isEdit">
      <com-input :value.sync="inputValue"
                 :placeholder="`请输入${title}`"
                 class="v-input"
                 type="input"
                 @blur="inputBlur()"
                 :error-tips="errorTips"
                 :max-length="maxLength"></com-input>
    </template>
    <template v-else>
      <span class="v-content">
        {{content === '' ? '-' : content}}
        <i class="iconfont icon-bianji" @click="modify(content)"></i>
      </span>
    </template>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isEdit: false,
      inputValue: '',
      errorTips: ''
    }
  },
  props: {
    title: String,
    content: String,
    maxLength: Number
  },
  methods: {
    modify (val) {
      this.inputValue = val
      this.isEdit = true
    },
    inputBlur () {
      this.$emit('saveInfo', this.inputValue)
      this.isEdit = false
    }
  }
}
</script>
<style lang='scss' scoped>
.v-from {
  min-height: 40px;
  font-size: 14px;
  .v-title {
    color: #888;
    line-height: 20px;
    display: inline-block;
    vertical-align: top;
  }
  .v-content {
    color: #222;
    word-break: break-all;
    max-width: 165px;
    line-height: 20px;
    display: inline-block;
    vertical-align: top;
    &:hover {
      .iconfont {
        opacity: 1;
      }
    }
    .iconfont {
      opacity: 0;
    }
  }
  .com-input {
    width: 155px;
  }
}
</style>

