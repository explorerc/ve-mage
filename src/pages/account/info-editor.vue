<template>
  <div class="v-editor"
       :class="classVal">
    <slot></slot>
    <span class="v-info-label"
          v-if="!isEdit"
          :title="value">{{value===''?'无':value}}</span>
    <template v-else-if="type !== 'readOnly'">
      <el-select v-if="type === 'select'"
                 v-model="inputValue"
                 :value.sync="inputValue"
                 @change="indexSelect"
                 placeholder="请选择">
        <el-option v-for="item in selectValue"
                   :key="item.value"
                   :label="item.label"
                   :value="item.value">
        </el-option>
      </el-select>
      <el-select v-if="type === 'select'"
                 v-model="inputValueSed"
                 :value.sync="inputValueSed"
                 placeholder="请选择">
        <el-option v-for="item in sedSelectValue"
                   :key="item.value"
                   :label="item.label"
                   :value="item.value">
        </el-option>
      </el-select>
      <com-input v-else-if="type === 'input'"
                 :value.sync="inputValue"
                 placeholder=""
                 class="v-input"
                 type="input"
                 :max-length="maxLength"
                 @blur="inputBlur()"
                 :error-tips="errorTips"></com-input>
    </template>
    <template v-if="type !== 'readOnly'">
      <a href="javascript:;"
         v-if="!isEdit||clickType!=='save'"
         @click="modify(clickType)"><span v-if=" (value === '无' || value === '' ) && btnName ==='' ">完善</span><span v-else-if="value !== '' && value !== '' && btnName ==='' ">修改</span><span v-else-if="btnName !=='' ">{{btnName}}</span></a>
      <a href="javascript:;"
         v-if="isEdit && clickType==='save'"
         @click.prevent="save()">保存</a>
      <a href="javascript:;"
         v-if="isEdit && clickType==='save'"
         @click="cancle"
         class="v-cancle">取消</a>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    value: String, // 数值
    type: String, // 输入框样式只读（readOnly）、下拉（select）可编辑输入框（input）
    selectValue: Array, // 下拉菜单选项
    industryFirst: String, // 一级下拉初始值
    industrySecond: String, // 二级下拉初始值
    clickType: String, // 点击按钮弹窗（popup）、保存（save）、链接（link）
    btnName: {
      type: String,
      default: ''
    }, // 修改按钮文案
    maxLength: Number,
    errorTips: String,
    isEdit: Boolean,
    classVal: String
  },
  data () {
    return {
      inputValue: '',
      inputValueSed: '',
      initData: '',
      sedSelectValue: {}
    }
  },
  created () {
  },
  methods: {
    modify (val) {
      this.initData = this.value
      this.inputValue = this.value === '无' ? '' : this.value
      this.$emit('clickSaveBtn', this.value)
    },
    save () {
      this.$emit('saveInfo', this.initData, this.value)
    },
    cancle () {
      this.$emit('cancel', this.initData)
      // this.isEdit = false
    },
    inputBlur () {
      this.$emit('blur', this.value)
    },
    indexSelect () {
      for (let i = 0; i < this.selectValue.length; i++) {
        if (this.selectValue[i].value === this.inputValue) {
          this.sedSelectValue = this.selectValue[i].childList
          this.inputValueSed = ''
        }
      }
    }
  },
  watch: {
    industryFirst: {
      handler (n) {
        this.inputValue = this.industryFirst
      },
      immediate: true
    },
    industrySecond: {
      handler (n) {
        this.inputValueSed = this.industrySecond
      },
      immediate: true
    },
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
      top: 38px;
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
