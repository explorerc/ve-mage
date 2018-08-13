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
    data () {
      return {
        tableList: [
          {id: '1', title: 'title1', time: '2016-10-12'},
          {id: '2', title: 'title2', time: '2016-10-12'},
          {id: '3', title: 'title3', time: '2016-10-12'},
          {id: '4', title: 'title4', time: '2016-10-12'},
          {id: '5', title: 'title5', time: '2016-10-12'},
          {id: '6', title: 'title6', time: '2016-10-12'},
          {id: '7', title: 'title7', time: '2016-10-12'},
          {id: '8', title: 'title8', time: '2016-10-12'},
          {id: '9', title: 'title9', time: '2016-10-12'}
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
   .live-list{
      .live-item{
        float: left;
        margin: 10px;
        width: calc((100% - 80px)/4);
      }
   }
</style>
