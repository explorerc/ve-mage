<template>
  <div class="v-from">
    <span class="v-title">
      {{title}}：
    </span>
    <template v-if="isEdit">
      <el-cascader
      :options="areas"
    v-model="selectedOptions"
    @change="handleChange">
      </el-cascader>
    </template>
    <template v-else>
      <span class="v-content">
        {{content === '' ? '无' : content}}
        <i class="iconfont icon-bianji" @click="modify(content)"></i>
      </span>
    </template>
  </div>
</template>
<script>
import { questionnaireCitys } from '../../../assets/js/citys.js'
import { questionnaireProvinces } from '../../../assets/js/provinces.js'
export default {
  data () {
    return {
      isEdit: false,
      inputValue: '',
      errorTips: '',
      selectedOptions: [],
      areas: []
    }
  },
  props: {
    title: String,
    content: String,
    selectValue: Array
  },
  mounted () {
    this.inputValue = this.content
    let _citys = questionnaireCitys
    let _provinces = questionnaireProvinces
    this.areas = []
    _provinces.forEach((item) => {
      let area = { value: item.id, label: item.name, children: [] }
      let temp = _citys.find((item) => item.pid === area.value)
      let _province = { value: temp.id, label: temp.name, pid: temp.pid }
      area.children.push(_province)
      this.areas.push(area)
    })
    // console.log(this.areas)
    // console.log(this.selectValue)
  },
  methods: {
    modify (val) {
      this.isEdit = true
    },
    handleChange (value) {
      debugger
      this.$emit('saveInfo', this.selectedOptions)
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

