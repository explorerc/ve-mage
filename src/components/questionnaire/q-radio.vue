<template>
  <div class="q-edit-content">
    <el-radio v-for="(item,index) in value.detail.list"
              class="q-select-item"
              :class="{display:!edit}"
              v-model="value.value"
              @change="change"
              :label="index"
              :key="index">
      <com-input v-if="edit"
                 v-model="item.value"
                 :max-length="30"></com-input>
      <div v-if="!edit"
           class="item-text"
           v-text="item.value"></div>
      <span class="remove"
            v-if="edit&&value.detail.list.length>1"
            @click="delItem(index)">删</span>
    </el-radio>
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
    delItem (index) {
      this.value.detail.list.splice(index, 1)
    },
    change () {
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
    .q-select-item {
      width: 100%;
      position: relative;
      margin-bottom: 15px;
      &.display {
        margin-bottom: 5px;
      }
    }
    .el-radio__input {
      display: inline-block;
      margin-top: 8px;
    }
    .el-radio__label {
      left: 20px;
      right: 28px;
      padding-left: 0;
      position: absolute;
      margin-right: 10px;
      .com-input {
        margin-right: 8px;
      }
    }
    .remove {
      cursor: pointer;
      font-size: 12px;
    }
    .item-text {
      display: inline-block;
      font-size: 12px;
      margin-top: 9px;
    }
  }
}
</style>
