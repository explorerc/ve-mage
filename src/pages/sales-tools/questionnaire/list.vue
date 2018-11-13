<template>
  <div class="v-list">
    <div class="v-list-title">
      <span class="title">问卷列表</span>
    </div>
    <div class="v-tbns">
      <button>
        查看数据
      </button>
      <button>
        新建问卷
      </button>
    </div>
  </div>
</template>
<script>
export default {
  components: {
  },
  data () {
    return {
    }
  },
  beforeDestroy () {
  },
  created () {
  },
  computed: {
    isBorder () {
      return !(this.dragData.length > 0)
    }
  },
  methods: {
  }
}
</script>
<style lang='scss' scoped>
.v-list {
  overflow: hidden;
  padding-bottom: 30px;
  margin: 0 auto;
  color: #222;
  position: relative;
  /* 设备宽度大于 1600 */
  @media all and (min-width: 1600px) {
    width: 1366px;
  }
  /* 设备宽度小于 1600px */
  @media all and (max-width: 1600px) {
    width: 1019px;
  }
  .v-list-title {
    // border-bottom: 1px solid $color-bd;
    line-height: 60px;
    span.title {
      display: inline-block;
      font-size: 24px;
    }
  }
  .v-tbns {
    width: 100%;
    text-align: right;
  }
}
</style>
