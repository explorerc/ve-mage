<template>
  <div class="live-mager">
    <div class="live-title">
      <span>直播列表</span>
    </div>
    <div class="mager-box">
      <div class="live-search">
        <el-select v-model="searchParams.status" @change="changeSearch" placeholder="请选择">
          <el-option
            v-for="item in optionsStates"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <el-select v-model="searchParams.orderTime" @change="changeSearch" placeholder="请选择">
          <el-option
            v-for="item in optionsOrder"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <div class="search-box">
          <com-input
            type="search"
            :value.sync="searchParams.searchValue"
            @keyup.native.enter="searchEnter"
            placeholder="输入直播名称"></com-input>
        </div>
      </div>
      <live-table :tableList="tableList" @handleClick="handleClick"/>
      <div class="page-pagination">
        <ve-pagination
          :total="total"
          :pageSize="pageSize"
          @changePage="changePage"/>
      </div>
    </div>
  </div>
</template>

<script>
  import LiveTable from './live/live-table'
  import VePagination from 'src/components/ve-pagination'

  export default {
    name: 'index',
    components: {LiveTable, VePagination},
    data () {
      return {
        show: false,
        pageSize: 8,
        total: 10,
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
          searchValue: '',
          page: 0
        },
        shareLink: {
          liveLink: '',
          weibo: '',
          wxchart: '',
          qq: ''
        },
        tableList: []
      }
    },
    created () {
      this.queryList()
      this.shareLink = {
        liveLink: 'www.baidu.com',
        weibo: 'https://www.baidu.com',
        wxchart: 'http://aliqr.e.vhall.com/qr.png?t=https%3A%2F%2Ft.e.vhall.com%2F458577184%3FshareId%3Du-16420545-3',
        qq: 'https://www.baidu.com'
      }
    },
    methods: {
      closeShare () {
        this.show = false
      },
      handleClick (event) {
        console.log(event)
        if (event.type === 'delete') { // 编辑删除
          this.$messageBox({
            header: '删除活动',
            content: '活动删除后，所有数据将一并删除，并且不可恢复。确定要删除吗？',
            cancelText: '暂不删除',
            confirmText: '仍要删除',
            handleClick: (e) => {
              console.log(e)
              if (e.action === 'cancel') {
                console.log('取消或者关闭按钮')
              } else if (e.action === 'confirm') {
                console.log('点击了确定按钮')
              }
            }
          })
        } else if (event.type === 'share') { // 分享观看页
          this.$share(this.shareLink)
        }
      },
      changePage (currentPage) {
        this.searchParams.page = currentPage
        console.log(`点击了第${currentPage}页`)
      },
      changeSearch () {
        console.log(`this.searchParams:${JSON.stringify(this.searchParams)}`)
      },
      searchEnter () {
        console.log('回车键')
        console.log(`this.searchParams=${JSON.stringify(this.searchParams)}`)
        this.queryList()
      },
      queryList () {
        this.tableList = [
          {
            id: Math.random(),
            title: 'title1',
            time: '2016-10-12',
            type: 'live',
            imgUrl: 'http://pic.qiantucdn.com/58pic/25/56/39/583981a13bc61_1024.jpg'
          },
          {
            id: '2',
            title: 'title2',
            time: '2016-10-12',
            type: 'live',
            imgUrl: 'http://pic.qiantucdn.com/58pic/25/56/39/583981a13bc61_1024.jpg'
          },
          {
            id: '4',
            title: 'title4',
            time: '2016-10-12',
            type: 'playBack',
            imgUrl: 'http://pic.qiantucdn.com/58pic/25/56/39/583981a13bc61_1024.jpg'
          },
          {id: '5', title: 'title5', time: '2016-10-12', type: 'liveEnd', imgUrl: ''},
          {id: '6', title: 'title6', time: '2016-10-12', type: 'playBack', imgUrl: ''},
          {id: '7', title: 'title7', time: '2016-10-12', type: 'playBack', imgUrl: ''},
          {id: '8', title: 'title8', time: '2016-10-12', type: 'preview', imgUrl: ''},
          {id: '9', title: 'title9', time: '2016-10-12', type: 'playBack', imgUrl: ''}
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
        .search-box {
          float: right;
        }
      }
      .page-pagination {
        float: right;
        margin: 10px 10px 20px 0;
      }
    }
  }
</style>
