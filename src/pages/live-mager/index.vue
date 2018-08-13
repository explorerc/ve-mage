<template>
  <div class="live-mager">
    <div class="live-title">
      <span>直播列表</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'index'
  }
</script>

<style lang="scss" scoped>
  @import "~assets/css/variable";
  .live-mager{
    background-color: $color-bg;
    border-radius: 5px;
    overflow: hidden;
    .live-title{
      line-height: 50px;
      border-bottom: 1px solid $color-bd;
      span{
        display: inline-block;
        margin-left: 20px;
      }
    }
  }
</style>
