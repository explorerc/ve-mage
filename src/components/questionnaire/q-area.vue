<template>
  <div class="q-edit-content">
    <div class="q-edit-select">
      <el-select v-model="value.province"
                 @change="change"
                 placeholder="省/自治区/直辖市">
        <el-option v-for="(item,index) in provinces"
                   :label="item.value"
                   :value="item.id"
                   :key="index">
        </el-option>
      </el-select>
    </div>
    <div class="q-edit-select">
      <el-select v-model="value.city"
                 @change="change"
                 placeholder="市">
        <el-option v-for="(item,index) in cities"
                   :label="item.value"
                   :value="item.id"
                   :key="index">
        </el-option>
      </el-select>

    </div>
    <div class="q-edit-select">
      <el-select v-model="value.county"
                 @change="change"
                 placeholder="区/县">
        <el-option v-for="(item,index) in counties"
                   :label="item.value"
                   :value="item.id"
                   :key="index">
        </el-option>
      </el-select>
      <span @click="setLevel('county')"
            class="remove">显</span>
    </div>
    <div class="q-edit-select">
      <com-input placeholder="详细地址"
                 :disabled="true"></com-input>
      <span @click="setLevel('address')"
            class="remove">显</span>
    </div>
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
      province: '',
      city: '',
      county: '',
      provinces: [],
      cities: [],
      counties: [],
      errorTip: ''
    }
  },
  methods: {
    setLevel (level) {
      this.value.detail.level = level
    },
    change () {
      this.errorTip = ''
    },
    check () {
      if (this.value.required && !this.value.valu) {
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
  margin-bottom: 30px;
  .q-edit-select {
    display: block;
    width: 100%;
    margin-bottom: 10px;
    .el-select {
      width: 93%;
    }
    .com-input {
      width: 93%;
    }
    .remove {
      cursor: pointer;
      font-size: 12px;
      margin-left: 10px;
    }
  }

  &.display {
    margin-bottom: 0;
  }
  /deep/ {
    .error-msg {
      position: absolute;
      color: #fc5659;
      padding-left: 10px;
      line-height: 20px;
      font-size: 12px;
    }
    .q-select-item {
    }
  }
}
</style>
