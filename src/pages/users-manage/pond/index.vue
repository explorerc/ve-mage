<!--用户池页面-->
<template>
  <div class='pond-page'>
    <div class="pond-title">
        <span class="title" >用户池</span>
    </div>
    <div class="content from-box">
      <div class="handle-bar">
        <div class="left">
          <el-button round>选择</el-button>
          <el-button round>批量操作</el-button>
          <el-button round>批量导入</el-button>
        </div>
        <div class="right">
          <com-input :value.sync="filterVal" placeholder="请输入标题"   @focus=""></com-input>精准搜索<i class='el-submenu__icon-arrow el-icon-arrow-down'></i>
        </div>
      </div>
      <div class="handle-filter"></div>
      <div class="users-list"></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      filterVal: ''
    }
  }
}
</script>

<style lang='scss' scoped>
@import '~assets/css/mixin.scss';
.pond-page {
  border-radius: 5px;
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
  .pond-title {
    // border-bottom: 1px solid $color-bd;
    line-height: 60px;
    span.title {
      display: inline-block;
      font-size: 24px;
    }
  }
  .content /deep/ {
    font-size: 14px;
    width: 100%;
    // padding: 40px 80px;
    // background: rgba(255, 255, 255, 1);
    // border-radius: 4px;
    // border: 1px solid rgba(226, 226, 226, 1);
  }
}
</style>
