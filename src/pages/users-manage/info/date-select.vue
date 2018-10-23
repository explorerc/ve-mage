<template>
  <div class="v-from">
    <span class="v-title">
      {{title}}：
    </span>
    <template v-if="isEdit">
      <el-date-picker
      v-model="inputValue"
      type="date"
      placeholder="选择日期"
      @blur="inputBlur()">
    </el-date-picker>
    </template>
    <template v-else>
      <span class="v-content">
        {{content === '' ? '无' : content}}
        <i class="iconfont icon-duigou1" @click="modify(content)"></i>
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
    content: String
  },
  methods: {
    modify (val) {
      this.inputValue = val
      this.isEdit = true
    },
    inputBlur () {
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
    display: inline-block;
    vertical-align: top;
  }
  .v-content {
    color: #222;
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
  .el-date-editor.el-input,
  .el-date-editor.el-input__inner {
    width: 155px;
  }
}
</style>

