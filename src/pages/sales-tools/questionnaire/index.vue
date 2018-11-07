<template>
  <div class="v-questionaire">
    <div class="v-questionaire-title">
      <span class="title">新建问卷</span>
    </div>
    <div class="content from-box">
      <div class="tt">
        <div class="right">
          <div class="lc">
            <div>
              66666
            </div>
          </div>
        </div>
        <div class="left">
          <div class="ru">
            5555
          </div>
          <div class="rb">
            <div>
              77777
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      info: {
      }
    }
  },
  beforeDestroy () {
  },
  created () {
  },
  methods: {
  }
}
</script>

<style lang='scss' scoped>
.v-questionaire {
  overflow: hidden;
  padding-bottom: 30px;
  margin: 0 auto;
  color: #222;
  /* 设备宽度大于 1600 */
  @media all and (min-width: 1600px) {
    width: 1366px;
  }
  /* 设备宽度小于 1600px */
  @media all and (max-width: 1600px) {
    width: 1019px;
  }
  .v-questionaire-title {
    // border-bottom: 1px solid $color-bd;
    line-height: 60px;
    span.title {
      display: inline-block;
      font-size: 24px;
    }
  }
  .content {
    widows: 800px;
    min-height: 500px;
    // overflow: hidden;
    position: relative;
    .tt {
      overflow-y: hidden;
      position: relative;
    }
    .left {
      float: left;
      padding-bottom: 2333px;
      margin-bottom: -2333px;
      width: 100%;
      padding-right: 320px;
      .ru {
        border: 1px solid #e2e2e2;
        height: 130px;
        background-color: #fff;
        border-radius: 4px;
        overflow: hidden;
        padding: 32px 30px;
      }
      .rb {
        margin-top: 20px;
        border: 1px solid #e2e2e2;
        padding: 0 25px;
        border-radius: 4px;
        background-color: #fff;
        padding: 32px 30px;
      }
    }
    .right {
      position: absolute;
      top: 0;
      right: 0;
      width: 300px;
      bottom: 0;
      .lc {
        position: absolute;
        top: 0px;
        left: 0;
        right: 0;
        bottom: 0;
        border: 1px solid #e2e2e2;
        background-color: #fff;
        border-radius: 4px;
        padding: 32px 30px;
        // overflow: hidden;
      }
    }
  }
}
</style>
