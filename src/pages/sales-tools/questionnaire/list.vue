<template>
  <div class="v-list">
    <div class="v-list-title">
      <span class="title">问卷列表</span>
    </div>
    <div class="v-tbns clearfix">
      <button class="v-add">
        新建问卷
      </button>
      <button class="v-view">
        查看数据
      </button>
    </div>
    <div class="v-table">
      <table>
        <thead>
          <tr>
            <td>
              问卷名称
            </td>
            <td>
              问卷数量
            </td>
            <td>
              修改时间
            </td>
            <td>
              操作
            </td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="itemData in tableData" :key="itemData.id">
            <td>
              {{itemData.name}}
            </td>
            <td>
              {{itemData.count}}
            </td>
            <td>
              {{itemData.date}}
            </td>
            <td>
              <a :href="'/salesTools/questionnaire/edit/'+itemData.id">编辑</a><span>|</span>
              <a href="">预览</a><span>|</span>
              <a href="" class="v-del">删除</a>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="pagination-box">
        <div class="page-pagination"
             v-if="total>pageSize">
          <ve-pagination :total="total"
                         :pageSize="pageSize"
                         :currentPage="searchParams.page"
                         @changePage="changePage" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import VePagination from 'src/components/ve-pagination'
export default {
  components: { VePagination },
  data () {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        count: 2,
        id: 1
      }, {
        date: '2016-05-03',
        name: '王小虎',
        count: 2,
        id: 2
      }, {
        date: '2016-05-04',
        name: '王小虎',
        count: 2,
        id: 3
      }, {
        date: '2016-05-05',
        name: '王小虎',
        count: 2,
        id: 4
      }, {
        date: '2016-05-06',
        name: '王小虎',
        count: 2,
        id: 5
      }],
      searchParams: {
        business_consumer_uid: 0,
        page: 1,
        page_size: 9
      },
      total: 2,
      pageSize: 6
    }
  },
  beforeDestroy () {
  },
  created () {
  },
  computed: {
  },
  methods: {
    getDataList () {

    },
    changePage (currentPage) {
      this.searchParams.page = currentPage
      this.getDataList()
    }
  }
}
</script>
<style lang='scss' scoped>
.v-list {
  overflow: hidden;
  padding-bottom: 30px;
  margin: 0 auto;
  color: #222;
  position: relative;
  /* 设备宽度大于 1600 */
  @media all and (min-width: 1600px) {
    width: 1366px;
  }
  /* 设备宽度小于 1600px */
  @media all and (max-width: 1600px) {
    width: 1019px;
  }
  .v-list-title {
    // border-bottom: 1px solid $color-bd;
    line-height: 60px;
    span.title {
      display: inline-block;
      font-size: 24px;
    }
  }
  .v-tbns {
    width: 100%;
    margin-bottom: 30px;
    button {
      float: right;
      width: 120px;
      height: 40px;
      border: 1px solid #4b5afe;
      line-height: 38px;
      border-radius: 20px;
      background-color: rgba(0, 0, 0, 0);
      font-size: 14px;
      color: #4b5afe;
      text-align: center;
      margin-top: 10px;
      &.v-add {
        border-color: #ffd021;
        background-color: #ffd021;
        color: #222;
        margin-left: 10px;
      }
      &:hover {
        background-color: #fdd43f;
        border-color: #fdd43f;
        color: #222;
      }
      &:active {
        background-color: #eec11a;
        border-color: #eec11a;
        color: #222;
      }
    }
  }
  .v-table {
    width: 100%;
    padding: 20px 20px 40px;
    border: 1px solid #e2e2e2;
    background-color: #fff;
    border-radius: 4px;
    overflow: hidden;
    table {
      width: 100%;
      border-radius: 4px 4px 0 0;
      overflow: hidden;
      thead {
        background-color: #f5f5f5;
        td {
          height: 60px;
          line-height: 61px;
          padding: 0 30px;
        }
      }
      tbody {
        tr {
          height: 50px;
          line-height: 50px;
          border-bottom: 1px solid #e2e2e2;
          td {
            padding: 0 30px;
            a {
              &:hover {
                color: #4b5afe;
                &.v-del {
                  color: #fc5659;
                }
              }
            }
            span {
              display: inline-block;
              padding: 0 2px;
            }
          }
          &:hover {
            background-color: #e9ebff;
          }
        }
      }
    }
  }
}
</style>
