<template>
  <div class="industry-wrap">
    <el-select v-model="value"
               @change="change"
               placeholder="请选择">
      <el-option v-for="item in industries"
                 :key="item.value"
                 :label="item.label"
                 :value="item.value">
      </el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      industries: [
        {
          value: 'IT/互联网',
          label: 'IT/互联网'
        }, {
          value: '电子/通信/硬件',
          label: '电子/通信/硬件'
        }, {
          value: '金融',
          label: '金融'
        }, {
          value: '交通/贸易/物流',
          label: '交通/贸易/物流'
        }, {
          value: '消费品',
          label: '消费品'
        }, {
          value: '机械/制造',
          label: '机械/制造'
        }, {
          value: '能源/矿产环保',
          label: '能源/矿产环保'
        }, {
          value: '制药/医疗',
          label: '制药/医疗'
        }, {
          value: '专业服务',
          label: '专业服务'
        }, {
          value: '教育/培训',
          label: '教育/培训'
        }, {
          value: '广告/媒体/娱乐/出版',
          label: '广告/媒体/娱乐/出版'
        }, {
          value: '房地产/建筑',
          label: '房地产/建筑'
        }, {
          value: '服务业',
          label: '服务业'
        }, {
          value: '政府/非盈利机构/其它',
          label: '政府/非盈利机构/其它'
        }
      ]
    }
  },
  methods: {
    change (e) {
      this.$emit('change', e)
    }
  }
}
</script>

<style scoped lang="scss">
.industry-wrap {
}
</style>
