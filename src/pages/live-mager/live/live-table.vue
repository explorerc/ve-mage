<template>
  <div class="live-list">
    <div v-for="itemData in tableList" :key="itemData.id">
      <live-item :liveData="itemData" @handleClick="handleClick"/>
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
    margin: 10px;
    .live-item {
      float: left;
      margin: 10px;
      width: calc((100% - 80px) / 4);
    }

  }
</style>
