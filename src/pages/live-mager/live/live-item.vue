<template>
  <div class="live-item">
    {{liveData.id}}
  </div>
</template>

<script>
  export default {
    name: 'live-item',
    props: {
      liveData: {
        type: Object,
        default: {
          id: 0,
          title: '-',
          time: '0000-00-00 00-00'
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/css/mixin";
  .live-item {
    width: 300px;
    height: 200px;
    border-radius: 2px;
    @include border-shadow;
    &:hover{
      transition: box-shadow .3s;
      box-shadow:none;
      cursor: pointer;
    }
  }
</style>
