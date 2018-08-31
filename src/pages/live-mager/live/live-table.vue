<template>
  <div class="live-list">
    <div class="live-item-box" v-for="itemData in tableList" :key="itemData.id">
      <live-item height="300" :liveData="itemData" @handleClick="handleClick"/>
    </div>
  </div>
</template>

<script>
  import LiveItem from './live-item'
  export default {
    name: 'live-table',
    components: {LiveItem},
    props: {
      tableList: {
        type: Array,
        default: []
      }
    },
    data () {
      return {}
    },
    methods: {
      handleClick (item) {
        this.$emit('handleClick', item)
      }
    }
  }
</script>

<style lang="scss" scoped>
.live-list {
  .live-item-box{
    float: left;
    margin-left: 22px;
    margin-top: 22px;
    width: 325px;
    /* 设备宽度大于 1920px */
    @media all and (min-width:1920px) {
      &:nth-child(4n+1){
        margin-left: 0;
      }
    }
    /* 设备宽度小于 1920px */
    @media all and (max-width:1900px) {
      &:nth-child(3n+1){
        margin-left: 0;
      }
    }
    .live-item {
      width: 100%;
      box-sizing: border-box;
    }
  }
}
</style>
