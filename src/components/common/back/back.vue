<template>
  <el-button class='default-button back-btn-all' @click='back'>返回</el-button>
</template>
<script>
export default {
  name: 'ComBack',
  data () {
    return {
    }
  },
  created () {
  },
  methods: {
    back () {
      window.history.go(-1)
    }
  }
}
</script>

<style lang='scss' scoped>
.back-btn-all {
  float: right;
  margin: 12px 0px 12px 10px;
}
</style>
