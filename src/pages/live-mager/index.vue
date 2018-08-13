<template>
  <div class="live-mager">
    <div class="live-title">
      <span>直播列表</span>
    </div>
    <div class="mager-box">
      <div class="live-search">
        <el-select v-model="searchParams.status" placeholder="请选择">
          <el-option
            v-for="item in optionsStates"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <el-select v-model="searchParams.orderTime" placeholder="请选择">
          <el-option
            v-for="item in optionsOrder"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <ve-search v-model="searchParams.searchValue"/>
      </div>
      <live-table :tableList="tableList"/>
    </div>
  </div>
</template>

<script>
  import VeSearch from 'src/components/ve-search'
  import LiveTable from './live/live-table'

  export default {
    name: 'index',
    components: {LiveTable, VeSearch},
    data () {
      return {
        optionsStates: [
          {value: 0, label: '全部'},
          {value: 1, label: '预告'},
          {value: 2, label: '直播中'},
          {value: 3, label: '已结束'},
          {value: 4, label: '回放'}
        ],
        optionsOrder: [
          {value: 0, label: '按创建时间排序'},
          {value: 1, label: '按照时间直播时间排序'}
        ],
        searchParams: {
          status: 0,
          orderTime: 0,
          searchValue: ''
        },
        tableList: [
          {
            id: '1',
            title: 'title1',
            time: '2016-10-12',
            imgUrl: 'http://pic.qiantucdn.com/58pic/25/56/39/583981a13bc61_1024.jpg'
          },
          {
            id: '2',
            title: 'title2',
            time: '2016-10-12',
            imgUrl: 'http://pic.qiantucdn.com/58pic/25/56/39/583981a13bc61_1024.jpg'
          },
          {id: '3', title: 'title3', time: '2016-10-12', imgUrl: ''},
          {
            id: '4',
            title: 'title4',
            time: '2016-10-12',
            imgUrl: 'http://pic.qiantucdn.com/58pic/25/56/39/583981a13bc61_1024.jpg'
          },
          {id: '5', title: 'title5', time: '2016-10-12', imgUrl: ''},
          {id: '6', title: 'title6', time: '2016-10-12', imgUrl: ''},
          {id: '7', title: 'title7', time: '2016-10-12', imgUrl: ''},
          {id: '8', title: 'title8', time: '2016-10-12', imgUrl: ''},
          {id: '9', title: 'title9', time: '2016-10-12', imgUrl: ''}
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/css/variable";

  .live-mager {
    border: 1px solid $color-bd;
    background-color: $color-bg;
    border-radius: 5px;
    overflow: hidden;
    .live-title {
      line-height: 50px;
      border-bottom: 1px solid $color-bd;
      span {
        display: inline-block;
        margin-left: 20px;
      }
    }
    .mager-box {
      .live-search {
        margin: 20px 20px 10px 20px;
        .el-select:nth-child(2) {
          margin-left: 10px;
        }
      }
    }
  }
</style>
