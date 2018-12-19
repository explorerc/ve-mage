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
.el-button.back-btn-all {
  /deep/ {
    float: right;
    // margin: 12px 0px 12px 10px;
    &:hover {
      color: #222 !important;
    }
    &:active {
      color: #222 !important;
    }
    height: 30px;
    line-height: 30px;
    position: absolute;
    top: 52%;
    right: 0%;
    transform: translateY(-50%);
  }
}
</style>
