<template>
  <div class="v-from">
    <span class="v-title">
      {{title}}:
    </span>
    <template v-if="isEdit">
      <component v-model="inputValue"
                 class="v-input"
                 @change="inputBlur()"
                v-bind:is="selectType"></component>
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
import comIndustry from '../../../components/com-industry'
import comEducation from '../../../components/com-education'
export default {
  components: {
    comIndustry,
    comEducation
  },
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
    maxLength: Number,
    selectType: String
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
  .v-input {
    display: inline-block;
    width: 155px;
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

