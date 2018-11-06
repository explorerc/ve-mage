<template>
  <div class="v-from">
    <span class="v-title">
      {{title}}：
    </span>
    <template v-if="isEdit">
      <el-select v-if="type === 'single'" v-model="inputValue" placeholder="请选择" @change="handleChange">
        <el-option
          v-for="item in selectValue"
          :key="item.value"
          :label="item.value"
          :value="item.value">
        </el-option>
      </el-select>
      <el-cascader v-else-if="type === 'double'"
      :options="selectValue"
    v-model="selectedOptions"
    @change="handleChange">
      </el-cascader>
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
      errorTips: '',
      selectedOptions: []
    }
  },
  props: {
    title: String,
    content: String,
    type: String,
    selectValue: Array // 下拉菜单选项
  },
  created () {
    this.inputValue = this.content
  },
  methods: {
    modify (val) {
      this.isEdit = true
    },
    handleChange (value) {
      debugger
      if (this.type === 'single') {
        this.$emit('saveInfo', this.inputValue)
      } else {
        this.$emit('saveInfo', this.selectedOptions)
      }
      this.isEdit = false
    }
  }
}
</script>
<style lang='scss' scoped>
.v-from /deep/ {
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
  .el-select .el-input__inner {
    border: 1px solid #dcdfe6;
  }
  .el-select,
  .el-cascader {
    width: 155px;
  }
}
</style>

