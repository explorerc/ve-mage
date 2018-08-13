<template>
  <div class="live-list">
    <div v-for="itemData in tableList" :key="itemData.id">
      <live-item :liveData="itemData"/>
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
    }
  }
</script>

<style lang="scss" scoped>
  .live-list {
    margin: 10px;
    overflow: hidden;
    .live-item {
      float: left;
      margin: 10px;
      width: calc((100% - 80px) / 4);
    }

  }
</style>
