<template>
  <div class="industry-wrap">
    <el-select v-model="value"
               @change="change"
               @blur="blur"
               placeholder="请选择">
      <el-option v-for="item in educations"
                 :key="item.value"
                 :label="item.label"
                 :value="item.value">
      </el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: '',
      educations: [
        {
          value: '博士',
          label: '博士'
        }, {
          value: '硕士',
          label: '硕士'
        }, {
          value: '本科',
          label: '本科'
        }, {
          value: '大专',
          label: '大专'
        }, {
          value: '高中',
          label: '高中'
        }
      ]
    }
  },
  methods: {
    change (e) {
      this.$emit('input', e)
      this.$emit('change', e)
    },
    blur () {
      this.$emit('saveInfo', this.value)
    }
  }
}
</script>

<style scoped lang="scss">
.industry-wrap {
}
</style>
