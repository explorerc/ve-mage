<template>
  <div class="v-editor">
    <slot></slot>
    <span class="v-info-label" v-if="!isEdit" :title="displayValue">{{displayValue===''?'无':displayValue}}</span>
    <template v-else-if="type !== 'readOnly'">
      <el-cascader
        :options="selectValue"
        v-model="selectedOptions"
        :props="format"
        :value="selectChildId"
        >
      </el-cascader>
    </template>
    <template v-if="type !== 'readOnly'">
      <a href="javascript:;" v-if="!isEdit||clickType!=='save'" @click="modify(clickType)"><span v-if=" (value === '无' || value === '' ) && btnName ==='' ">完善</span><span v-else-if="value !== '' && value !== '' && btnName ==='' ">修改</span><span v-else-if="btnName !=='' ">{{btnName}}</span></a>
      <a href="javascript:;" v-if="isEdit && clickType==='save'" @click="save()">保存</a>
      <a href="javascript:;" v-if="isEdit && clickType==='save'" @click="cancle()" class="v-cancle">取消</a>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    displayValue: String, // 显示数据
    value: String, // 数值
    type: String, // 输入框样式只读（readOnly）、下拉（select）可编辑输入框（input）
    selectValue: Array, // 下拉菜单选项
    selectParentId: Number,
    selectChildId: Number,
    // 以下
    industryFirst: String, // 一级下拉初始值
    industrySecond: String, // 二级下拉初始值
    industryId: Number,
    clickType: String, // 点击按钮弹窗（popup）、保存（save）、链接（link）
    btnName: {
      type: String,
      default: ''
    }, // 修改按钮文案
    isEdit: Boolean
  },
  data () {
    return {
      format: {
        value: 'industryId',
        label: 'name',
        children: 'items'
      },
      selectedOptions: [],
      inputValue: '',
      sedSelectValue: {},
      selectedVal: '',
      selectedVals: {
        selectParentId: 0,
        initSelectParentId: 0,
        selectChildId: 0,
        initSelectChildId: 0,
        selectParentValue: '',
        initSelectParentValue: '',
        selectChildValue: '',
        initSelectChildValue: ''
      }
    }
  },
  created () {
    this.selectedVals.inputValueSedId = this.selectId
    this.selectedVals.inputValueSedId = this.industrySecondId
  },
  computed: {
  },
  methods: {
    modify (val) {
      this.selectedVals.initSelectParentId = this.selectParentId
      this.selectedVals.initSelectChildId = this.selectChildId
      this.selectedVals.initSelectParentValue = this.industryFirst
      this.selectedVals.initSelectChildValue = this.industrySecond
      this.inputValue = this.value === '无' ? '' : this.value
      this.$emit('clickIndustryModifyBtn', this.value)
    },
    save () {
      let childValue = ''
      let parents = []
      let parentValue = ''
      for (let i = 0; i < this.selectValue.length; i++) {
        if (this.selectValue[i].industryId === this.selectedOptions[0]) {
          parents = this.selectValue[i]
          parentValue = this.selectValue[i].name
        }
      }
      for (let j = 0; j < parents.items.length; j++) {
        if (parents.items[j].industryId === this.selectedOptions[1]) {
          childValue = parents.items[j].name
        }
      }
      this.selectedVals.selectParentValue = parentValue
      this.selectedVals.selectChildValue = childValue
      this.selectedVals.selectParentId = this.selectedOptions[0]
      this.selectedVals.selectChildId = this.selectedOptions[1]
      this.$emit('saveSelectInfo', this.selectedVals)
    },
    cancle () {
      this.$emit('cancelSelectInfo', this.selectedVals)
      // this.isEdit = false
    },
    inputBlur () {
      this.$emit('blur', this.value)
    }
  },
  watch: {
    selectParentId: function (newQuestion, oldQuestion) {
      this.selectedOptions[0] = this.selectParentId
      this.selectedOptions[1] = this.selectChildId
    },
    selectChildId: function () {
      this.selectedOptions[0] = this.selectParentId
      this.selectedOptions[1] = this.selectChildId
    }
  }
}
</script>

<style lang="scss" scoped>
.v-editor /deep/ {
  display: block;
  height: 42px;
  line-height: 42px;
  .v-info-label {
    display: inline-block;
    width: 145px;
    text-align: left;
    margin-right: 45px;
    overflow: hidden;
    vertical-align: middle;
    height: 42px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .com-input {
    .error-msg {
      top: 28px;
    }
  }
  .el-select {
    width: 111px;
  }
  a {
    font-size: 14px;
    color: #4b5afe;
    &.v-cancle {
      color: #555;
    }
    span {
      font-size: 14px;
      color: #4b5afe;
    }
  }
}
</style>
