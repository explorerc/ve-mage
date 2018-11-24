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
  props: {
    url: {
      type: String,
      default: ''
    }
  },
  created () {
  },
  methods: {
    back () {
      // window.history.go(-1)
      if (this.url.length) {
        this.$router.push(this.url)
      } else {
        window.history.go(-1)
      }
    }
  }
}
</script>

<style lang='scss' scoped>
@import 'assets/css/over-elementui.scss';
.back-btn-all {
  float: right;
  margin: 12px 0px 12px 10px;
  &:hover {
    color: #222 !important;
  }
  &:active {
    color: #222 !important;
  }
}
</style>
