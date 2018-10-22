<!--用户分组-->
<template>
  <div class='pond-page'>
    <div class="pond-title">
        <span class="title" >用户池</span>
    </div>
    <div class="content from-box">12
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='scss' scoped>
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
    padding: 40px 80px;
    width: 100%;
    // height: 860px;
    background: rgba(255, 255, 255, 1);
    border-radius: 4px;
    border: 1px solid rgba(226, 226, 226, 1);
  }
}
</style>

