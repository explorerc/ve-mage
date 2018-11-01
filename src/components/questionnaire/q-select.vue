<template>
  <div class="q-edit-content"
       :class="{display:!edit}">
    <div v-if="edit"
         v-for="(item,index) in value.detail.list"
         class="q-select-item"
         :label="index">
      <span class="select-icon">√</span>
      <div class="select-input">
        <com-input v-model="item.value"
                   :disabled="value.ext.fixedness"
                   :max-length="value.ext.fixedness?0:30"></com-input>
        <span class="remove"
              v-if="value.detail.list.length>1&&!value.ext.fixedness"
              @click="delItem(index)">删</span>
      </div>
    </div>
    <el-select v-if="!edit"
               v-model="value.value"
               placeholder="请选择">
      <el-option v-for="item in value.detail.list"
                 :label="item.value"
                 :value="item.id">
      </el-option>
    </el-select>
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
      this.value.detail.list.splice(index, 1)
    }
  }
}
</script>

<style scoped lang="scss">
.q-edit-content {
  margin-bottom: 30px;
  &.display {
    margin-bottom: 0;
  }
  /deep/ {
    .q-select-item {
      width: 100%;
      position: relative;
      margin-bottom: 15px;
      .select-icon {
        display: inline-block;
        margin-top: 8px;
      }
      .select-input {
        left: 20px;
        right: 38px;
        padding-left: 0;
        position: absolute;
        top: 0;
        white-space: nowrap;
        .com-input {
          margin-right: 8px;
        }
      }
      .remove {
        cursor: pointer;
        font-size: 12px;
      }
    }
  }
}
</style>
