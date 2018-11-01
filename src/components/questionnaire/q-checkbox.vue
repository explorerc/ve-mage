<template>
  <div class="q-edit-content">
    <el-checkbox-group v-model="value.value">
      <el-checkbox v-for="(item,index) in value.detail.list"
                   class="q-select-item"
                   :class="{display:!edit}"
                   :label="index">
        <com-input v-if="edit"
                   v-model="item.value"
                   :max-length="30"></com-input>
        <div v-if="!edit"
             class="item-text"
             v-text="item.value"></div>
        <span class="remove"
              v-if="edit&&value.detail.list.length>1"
              @click="delItem(index)">删</span>
      </el-checkbox>
    </el-checkbox-group>
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
  methods: {
    delItem (index) {
      this.value.list.detail.splice(index, 1)
    }
  }
}
</script>

<style scoped lang="scss">
.q-edit-content {
  /deep/ {
    .q-select-item {
      width: 100%;
      position: relative;
      margin-bottom: 15px;
      &.display {
        margin-bottom: 5px;
      }
      .el-checkbox__input {
        display: inline-block;
        margin-top: 8px;
      }
      .el-checkbox__label {
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
        margin-top: 5px;
      }
    }
  }
}
</style>
