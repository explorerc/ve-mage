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
      @blur="inputBlur()"
      format='yyyy-MM-dd'>
    </el-date-picker>
    </template>
    <template v-else>
      <span class="v-content">
        {{(this.content === null || !this.content || this.content === "0") ? '-' : format(content)}}
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
    content: String
  },
  mounted () {
    this.inputValue = (this.content === null || !this.content || this.content === '0') ? '-' : this.content
  },
  methods: {
    modify (val) {
      this.inputValue = val
      this.isEdit = true
    },
    inputBlur () {
      if (this.inputValue === null || !this.inputValue || this.inputValue === '0') {
        this.isEdit = false
      } else {
        this.$emit('saveInfo', this.format(this.inputValue))
        this.isEdit = false
      }
    },
    format (date) {
      if (date === null || !date || date === '0') {
        return false
      }
      date = new Date(date)
      return date.getFullYear() + '-' + this.appendZero(date.getMonth() + 1) + '-' + this.appendZero(date.getDate())
    },
    appendZero (obj) {
      if (obj < 10) return '0' + '' + obj
      else return obj
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

