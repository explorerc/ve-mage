<template>
  <div class="q-edit-content">
    <div class="q-edit-select">
      <el-select v-model="provinceValue"
                 @change="changeProvince"
                 :disabled="edit"
                 @focus="focusProvince"
                 placeholder="请选择省/自治区/直辖市">
        <el-option v-for="(item,index) in provinces"
                   :label="item.label"
                   :value="item.value"
                   :key="index">
        </el-option>
      </el-select>
    </div>
    <div class="q-edit-select">
      <el-select v-model="cityValue"
                 @change="changeCity"
                 :disabled="edit"
                 @focus="focusCity"
                 placeholder="请选择所在城市">
        <el-option v-for="(item,index) in cities"
                   :label="item.label"
                   :value="item.value"
                   :key="index">
        </el-option>
      </el-select>

    </div>
    <div v-if="edit||(!edit&&(this.value.detail.level === 'county' || this.value.detail.level === 'address'))"
         class="q-edit-select"
         :class="{'v-disabled': conntyDisabled}">
      <el-select v-model="countyValue"
                 :disabled="edit"
                 @focus="focusCounty"
                 placeholder="请选择区/县">
        <el-option v-for="(item,index) in counties"
                   :label="item.label"
                   :value="item.value"
                   :key="index">
        </el-option>
      </el-select>
      <span v-if="edit"
            @click="setLevel('county')"
            class="remove">{{getCountyState}}</span>
    </div>
    <div v-if="edit||(!edit&&this.value.detail.level === 'address')"
         class="q-edit-select"
         :class="{'v-disabled': addressDisabled}">
      <com-input placeholder="请输入详细地址"
                 :disabled="edit"
                 v-model="value.address"
                 @focus="focusAddress"
                 :max-length="50"></com-input>
      <span v-if="edit"
            @click="setLevel('address')"
            class="remove">{{getAddressState}}</span>
    </div>
    <div v-if="!edit&&errorTip"
         class="error-msg">{{errorTip}}
    </div>
  </div>
</template>

<script>
import questionService from 'src/api/questionnaire-service'

// import province from 'components/province.json'
// import city from 'components/city.json'
// import county from 'components/county.json'
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
      area: {},
      province: '',
      city: '',
      county: '',
      provinces: [],
      cities: [],
      counties: [],
      errorTip: '',
      provinceValue: '',
      cityValue: '',
      countyValue: '',
      conntyDisabled: false,
      addressDisabled: false
    }
  },
  mounted () {
    this.$get(questionService.GET_AREA_JSON).then((res) => {
      this.area = res
      this.provinces = this.area.provinces
    })
  },
  methods: {
    setLevel (level) {
      if (level === 'address' && this.value.detail.level === level) {
        this.value.detail.level = 'county'
      } else if (level === 'county' && (this.value.detail.level === level || this.value.detail.level === 'address')) {
        this.value.detail.level = 'city'
      } else {
        this.value.detail.level = level
      }
    },
    changeProvince (value) {
      this.cities = this.area.cities[value]
      this.cityValue = ''
      this.countyValue = ''
    },
    focusProvince () {
      this.errorTip = ''
    },
    blurProvince () {
      setTimeout(() => {
        if (this.value.required && !this.value.province) {
          this.errorTip = '此项为必填项'
        }
      }, 300)
    },
    changeCity (value) {
      this.counties = this.area.counties[value]
      this.countyValue = ''
    },
    focusCity () {
      this.errorTip = ''
    },
    blurCity () {
      setTimeout(() => {
        if (this.value.required && !this.value.city) {
          this.errorTip = '此项为必填项'
        }
      }, 300)
    },
    focusCounty () {
      this.errorTip = ''
    },
    blurCounty () {
      setTimeout(() => {
        if (this.value.required && !this.value.county) {
          this.errorTip = '此项为必填项'
        }
      }, 300)
    },
    focusAddress () {
      this.errorTip = ''
    },
    blurAddress () {
      if (this.value.required && !this.value.address) {
        this.errorTip = '此项为必填项'
      }
    },
    validate () {
      let result = true
      if (!this.value.title) {
        result = false
        this.value.error = true
        this.value.title = '请设置问卷内容'
      }

      return result
    },
    check () {
      let value = []
      if (this.value.required && (!this.value.province || !this.value.city)) {
        this.errorTip = '此项为必填项'
        return false
      }
      value.push(this.value.province)
      value.push(this.value.city)
      if (this.value.required && (this.value.detail.level === 'county' || this.value.detail.level === 'address') && !this.value.county) {
        this.errorTip = '此项为必填项'
        return false
      }
      this.value.county && value.push(this.value.county)
      if (this.value.required && this.value.detail.level === 'address' && !this.value.address) {
        this.errorTip = '此项为必填项'
        return false
      }
      this.value.address && value.push(this.value.address)
      return { id: this.value.id, value: value.join('|') }
    }
  },
  computed: {
    getCountyState () {
      if (this.value.detail.level === 'county' || this.value.detail.level === 'address') {
        this.conntyDisabled = false
        return '隐藏'
      } else {
        this.conntyDisabled = true
        return '开启'
      }
    },
    getAddressState () {
      if (this.value.detail.level === 'address') {
        this.addressDisabled = false
        return '隐藏'
      } else {
        this.addressDisabled = true
        return '开启'
      }
    }
  }
}
</script>

<style scoped lang="scss">
.q-edit-content {
  /deep/ {
    /*margin-bottom: 20px;*/
    .q-edit-select {
      display: block;
      width: 100%;
      margin-bottom: 14px;
      &:last-child {
        margin-bottom: 0;
      }
      &.v-disabled {
        .com-input {
          input {
            background-color: #f5f5f5;
            color: #bbb;
            border-color: #f5f5f5;
          }
        }
        .el-input__inner {
          background-color: #f5f5f5;
          color: #bbb;
          border-color: #f5f5f5;
        }
      }
      .el-select {
        width: 93%;
        .el-input__inner {
          padding-left: 10px !important;
        }
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

    .error-msg {
      position: absolute;
      color: #fc5659;
      padding-left: 10px;
      line-height: 20px;
      font-size: 12px;
    }
    .q-select-item {
      height: 40px;
    }
    .el-input__inner {
      height: 40px;
    }
  }
}
</style>
