<template>
  <div class="live-list">
    <div class="live-item-box" v-for="itemData in tableList" :key="itemData.id">
      <live-item height="300" :liveData="itemData" @handleClick="handleClick"/>
    </div>
    <div class="none-data" v-if="!(tableList&&tableList.length>0)">暂无数据</div>
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
  margin-top: 20px;
  .none-data{
    text-align: center;
    line-height: 60px;
    font-size: 20px;
    color: #888;
  }
  .live-item-box{
    float: left;
    margin-left: 22px;
    margin-top: 22px;
    width: 325px;
    /* 设备宽度大于 1920px */
    @media all and (min-width:1600px) {
      &:nth-child(4n+1){
        margin-left: 0;
      }
    }
    /* 设备宽度小于 1920px */
    @media all and (max-width:1600px) {
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
