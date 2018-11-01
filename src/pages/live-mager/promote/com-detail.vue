<template>
  <div class='detail-wrap'>
    <div class="com-modal"></div>
    <div class="com-detail-box">
      <div class="header">
        <span class="title">收信人详情</span>
        <button @click='close'><i class="iconfont icon-close"></i></button>
      </div>
      <div class="content">
        <el-table :data="dataList">
          <el-table-column
            type="index"
            width="100">
          </el-table-column>
          <el-table-column
            prop="nickname"
            label="用户昵称"
            width="220"
            show-overflow-tooltip>
          </el-table-column>
          <el-table-column
            prop="content"
            label="邮箱地址"
            width="220"
            show-overflow-tooltip>
          </el-table-column>
        </el-table>
      </div>
        <div class="pagination-box" >
          <div class="page-pagination">
              <ve-pagination
                :total="total"
                :pageSize="pageSize"
                :currentPage="currPage"
                @changePage="currentChange"/>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import VePagination from 'src/components/ve-pagination'
import activityService from 'src/api/activity-service'
export default {
  data () {
    return {
      dataList: [],
      total: 0,
      pageSize: 10,
      currPage: 0
    }
  },
  props: {
    _type: {
      type: String,
      default: ''
    }
  },
  mounted () {
    this.getList(1, this.$route.query.id, this._type)
  },
  methods: {
    close () {
      this.$emit('handleClick', {
        action: 'cancel'
      })
    },
    currentChange (res) {
      this.getList(res, this.$route.query.id, this._type)
    },
    getList (page, id, _type) {
      this.$get(activityService.GET_SEND_LIST, {
        taskId: id,
        type: _type,
        page: page,
        pagesize: this.pageSize
      }).then((res) => {
        this.dataList = res.data.list
        this.total = res.data.total
        this.currPage = res.data.currPage * 1
      })
    }
  },
  components: { VePagination }
}
</script>

<style lang='scss' scoped>
.com-modal {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.7;
  background: #000;
  z-index: 2001;
}
.com-detail-box /deep/ {
  z-index: 2002;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -240px;
  margin-left: -300px;
  width: 600px;
  height: 480px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  .header {
    height: 40px;
    line-height: 40px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    background-color: #ffd021;
    padding: 0 20px;
    padding-bottom: 10px;
    text-align: left;
    button {
      position: absolute;
      top: 15px;
      right: 15px;
      padding: 0;
      border: none;
      outline: none;
      background: transparent;
      font-size: 14px;
      cursor: pointer;
      &:hover {
        opacity: 0.8;
      }
    }
    .icon-close {
      position: relative;
      top: -3px;
    }
  }
  .content {
    padding: 30px;
  }
  .el-pagination {
    text-align: center;
  }
}
</style>
