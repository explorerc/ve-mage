<template>
  <div class="content" @click.stop='closeAlltool' v-ComLoading="loading" com-loading-text="拼命加载中">
    <div class="form-row live-mager wechat-list-page">
      <div class="live-title">
        <span class="title">短信邀约</span>
        <com-back  :url="`/liveMager/detail/${queryData.activityId}`"></com-back>
        <div class="right-box" v-if="tableData.length">
          <router-link :to="{ name:'msgCreate',params:{id:queryData.activityId} }"><button class="default-button btn fr" >新建短信邀约</button></router-link>
        </div>
      </div>
      <div class="content table">
        <template v-if="tableData.length">
          <el-table :data="tableData" stripe style="width: 100%">
            <el-table-column prop='title' label="短信标题" width="300">
            </el-table-column>
            <el-table-column prop="time" label="发送时间" width="180">
            </el-table-column>
            <el-table-column prop="sendCount" label="发送数量" width="150">
            </el-table-column>
            <!-- <el-table-column label="观众分组" width="200" prop='groupId'>
            </el-table-column> -->
            <el-table-column label="状态" width="180" prop="status">
              <template slot-scope="scope">
              <span v-if="scope.row.status === 'AWAIT'" class='await'>等待发送</span>
              <span v-if="scope.row.status === 'SEND'" class='send'>已发送</span>
              <span v-if="scope.row.status === 'DRAFT'" class='draft'>草稿</span>
              </template>
            </el-table-column>
            <el-table-column
              label="操作">
              <template slot-scope="scope">
                <div class="tool-box">
                  <span><router-link :to="{ name:'msgOverview', query:{ id : scope.row.inviteId}}">查看</router-link></span>
                  <span v-if='type === "PREPARE" && scope.row.status !== "SEND"' @click="del(scope.row.inviteId,scope.$index)">删除</span>
                  <!-- <span class='more' @click="showMore(scope.$index,tableData)">更多</span>
                                <div class="tool" v-if='moreIdx == scope.$index ? true : false'>
                                  <span @click="switchAutosend(scope.$index,tableData)">{{scope.row.autoSend === true ? '开启' : '关闭'}}自动发送</span>
                                  <span @click="del(scope.$index,tableData)">删除</span>
                                </div> -->
                </div>
              </template>
            </el-table-column>
          </el-table>
          <div class="form-row">
              <div class="pagination-box">
                <div class="page-pagination">
                    <ve-pagination
                      :total="total"
                      :pageSize="queryData.pageSize"
                      :currentPage="currPage"
                      @changePage="currentChange"/>
                </div>
              </div>
          </div>
        </template>
        <template v-else>
          <div class="empty">
            <div class="img"></div>
            <div class="txt">您还没有添加短信邀约，快去添加吧</div>
            <router-link :to="{ name:'msgCreate',params:{id:queryData.activityId} }"><el-button class='primary-button'>新建短信邀约</el-button></router-link>
          </div>
        </template>
      </div>
    </div>
    <!-- 删除确认 -->
    <message-box v-if="delConfirm"
      header="提示"
      content="删除短信后，短信内容将无法找回，确认删除？"
      cancelText="取消"
      confirmText='确认删除'
      @handleClick="confirmDel">
    </message-box>
  </div>
</template>

<script>
import noticeService from 'src/api/notice-service'
// import createHttp from 'src/api/activity-manger'
import VePagination from 'src/components/ve-pagination'
import activityService from 'src/api/activity-service'
import EventBus from 'src/utils/eventBus'
export default {
  data () {
    return {
      tableData: [{
        activityId: 82,
        createTime: '2018-08-27 12:34:23',
        groupId: '1',
        inviteId: 3,
        planTime: '2018-08-27 03:37:56',
        status: 'SEND',
        templateId: 1,
        title: '23123'
      }],
      queryData: {
        activityId: this.$route.params.id,
        page: 1,
        pageSize: 10
      },
      switchVal: true,
      total: 1,
      currPage: 1,
      totalPage: 1,
      moreIdx: NaN,
      delConfirm: false,
      delId: '',
      delIdx: '',
      type: '',
      loading: false
    }
  },
  created () {
    this.queryList()
    this.queryInfo()
    EventBus.$emit('breads', [{
      title: '活动管理'
    }, {
      title: '活动列表',
      url: '/liveMager/list'
    }, {
      title: '活动详情',
      url: `/liveMager/detail/${this.$route.params.id}`
    }, {
      title: '短信邀约'
    }])
  },
  methods: {
    switchAutosend (idx, data) {
      data[idx]['autoSend'] === false ? data[idx]['autoSend'] = true : data[idx]['autoSend'] = false
    },
    del (id, idx) {
      this.delConfirm = true
      this.delId = id
      this.delIdx = idx
    },
    confirmDel (e) {
      if (e.action === 'confirm') {
        this.$post(noticeService.POST_DELETE_MSG, {
          inviteId: this.delId
        }).then((res) => {
          this.tableData.splice(this.delIdx, 1)
          this.$toast({
            content: '删除成功'
          })
          this.delConfirm = false
        })
        // createHttp.deleteMsg(this.delId).then((res) => {
        //   this.tableData.splice(this.delIdx, 1)
        //   this.$toast({
        //     content: '删除成功',
        //     position: 'center'
        //   })
        //   this.delConfirm = false
        // }).catch((e) => {
        //   console.log(e)
        // })
      }
      this.delConfirm = false
    },
    showMore (idx, data) {
      this.tableData.forEach(item => {
        item.toolShow = false
      })
      data[idx]['toolShow'] === false ? data[idx]['toolShow'] = true : data[idx]['toolShow'] = false
    },
    closeAlltool (e) {
      // console.log(e.target.className)
      if (e.target.className.search('more') === -1 || e.target.className.search('more') === -1) {
        // console.log('in')
        this.tableData.forEach(item => {
          item.toolShow = false
        })
      }
    },
    queryList () {
      this.$get(noticeService.GET_MSG_LIST, this.queryData).then((res) => {
        console.log(res)
        this.tableData = res.data.list
        this.currPage = parseInt(res.data.currPage)
        this.totalPage = parseInt(res.data.totalPage)
        this.total = parseInt(res.data.total)
        this.tableData.forEach(item => {
          if (item.status === 'SEND') {
            item.time = item.sendTime
          } else if (item.status === 'AWAIT') {
            item.time = item.planTime
          }
        })
      })
      // createHttp.queryMsglist(this.queryData).then((res) => {
      //   console.log(res)
      //   this.tableData = res.data.list
      //   this.currPage = parseInt(res.data.currPage)
      //   this.totalPage = parseInt(res.data.totalPage)
      //   this.total = parseInt(res.data.total)
      //   this.loading = false
      // }).catch((e) => {
      //   console.log(e)
      //   this.loading = false
      // })
    },
    queryInfo () {
      this.$get(activityService.GET_WEBINAR_INFO, {
        id: this.$route.params.id
      }).then((res) => {
        this.type = res.data.status
      })
    },
    currentChange (e) {
      this.queryData.page = e
      this.queryList()
    }
  },
  components: {
    VePagination
  }
}
</script>
<style lang="scss" scoped src="../../css/live.scss">
</style>
<style lang="scss">
.wechat-list-page.live-mager .live-title {
  border-bottom: none;
}
.wechat-list-page.live-mager .el-table th {
  padding: 0;
  height: 60px;
  line-height: 60px;
  * {
    color: #222;
    font-weight: normal;
  }
}
.wechat-list-page.live-mager .page-pagination {
  float: inherit;
}
</style>
<style lang='scss' scoped>
@import '~assets/css/mixin.scss';
.live-title {
  position: relative;
  .right-box {
    float: right;
    height: 60px;
    .btn {
      height: 30px;
      line-height: 30px;
      position: absolute;
      top: 50%;
      right: 80px;
      transform: translateY(-50%);
      padding: 0 20px;
    }
  }
}
.from-row {
  display: flex;
  padding: 10px;
  .from-title {
    width: 180px;
    text-align: right;
    padding-right: 20px;
    .star {
      position: relative;
      top: 3px;
      color: $color-error;
      padding-right: 5px;
    }
  }
  .from-content {
    flex: 1;
    .input-box {
      width: 400px;
    }
  }
}

.tool-box {
  position: relative;
  & > span {
    padding: 10px;
    cursor: pointer;
  }
}

.tool {
  // position: absolute;
  width: 200px;
  height: 100px;
  border: 1px solid #ccc;
  // top: 100%;
  background: #fff;
  span {
    border-top: 1px solid #ccc;
    display: block;
    height: 50px;
    line-height: 50px;
    text-align: center;
    cursor: pointer;
    &:first-child {
      border: none;
    }
  }
}
.wechat-list-page {
  .table {
    padding: 30px;
    background: #fff;
    * {
      color: $color-font;
    }
    .tool-box {
      position: relative;
      &:before {
        content: '';
        width: 1px;
        height: 13px;
        background: #e2e2e2;
        position: absolute;
        top: 5px;
        left: 48px;
      }
    }
    span.await {
      color: $color-default;
    }
    span.draft {
      color: $color-error;
    }
    span.send {
      color: $color-blue;
    }
    .empty {
      text-align: center;
      margin: 100px 0;
      .txt {
        padding-top: 40px;
        font-size: 14px;
        color: $color-font-sub;
      }
      .img {
        width: 150px;
        height: 150px;
        margin: 0 auto;
        background: url('~assets/image/msg_empty.png') no-repeat center;
        background-size: contain;
      }
      .el-button {
        padding: 0;
        width: 220px;
        height: 40px;
        text-align: center;
        line-height: 40px;
        margin-top: 30px;
      }
    }
  }
  .pagination-box {
    text-align: center;
    .el-pagination {
      margin-top: 54px;
    }
  }
}
</style>
