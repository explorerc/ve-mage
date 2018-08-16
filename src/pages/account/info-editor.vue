<template>
  <div class="v-editor">
    <slot></slot>
    <span class="v-indo-label" v-if="!isEdit">{{value===''?'无':value}}</span>
    <template v-else-if="type !== 'readOnly'">
      <el-select v-if="type === 'select'" v-model="inputValue" :value.sync="inputValue" placeholder="请选择">
        <el-option
          v-for="item in selectValue"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <com-input v-else="type === 'input'" :value.sync="inputValue" placeholder="" class="v-input" type="input" :max-length="maxLength"></com-input>
    </template>
    <template v-if="type !== 'readOnly'">
      <a href="javascript:;" v-if="!isEdit||clickType!=='save'" @click="modify(clickType)"><span v-if="value === '' && btnName ==='' ">完善</span><span v-else-if="value !== '' && btnName ==='' ">修改</span><span v-else-if="btnName !=='' ">{{btnName}}</span></a>
      <a href="javascript:;" v-if="isEdit && clickType==='save'" @click="save()">保存</a>
      <a href="javascript:;" v-if="isEdit && clickType==='save'" @click="cancle">取消</a>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    value: String, // 数值
    type: String, // 输入框样式只读（readOnly）、下拉（select）可编辑输入框（input）
    selectValue: Array, // 下拉菜单选项
    clickType: String, // 点击按钮弹窗（popup）、保存（save）、链接（link）
    btnName: {
      type: String,
      default: ''
    }, // 修改按钮文案
    maxLength: Number
  },
  data () {
    return {
      inputValue: '',
      isEdit: false
    }
  },
  created () {
    this.inputValue = this.value
  },
  methods: {
    modify (val) {
      if (val === 'save') {
        this.isEdit = true
      } else {
        this.$emit('clickSaveBtn', this.value)
      }
    },
    save () {
      this.$emit('saveInfo', this.value)
      this.isEdit = false
    },
    cancle () {
      this.isEdit = false
    }
  },
  watch: {
    inputValue: {
      handler (n) {
        this.$emit('update:value', n)
      },
      immediate: true
    }
  }
}
</script>

<style lang="scss" scoped>
.v-editor {
  display: block;
  margin-bottom: 20px;
  height: 42px;
  line-height: 42px;
  .v-indo-label {
    display: inline-block;
    width: 145px;
    text-align: left;
    margin-right: 45px;
    overflow: hidden;
    vertical-align: middle;
  }
  .el-select {
    width: 200px;
  }
}
</style>
