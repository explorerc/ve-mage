<template>
  <div class="content" @click.stop='closeAlltool'>
    <div class="form-row">
      <el-button>
        <router-link :to="{name:'wechatCreate', params:{id:queryData.activityId}}">新建</router-link>
      </el-button>
      <div class="content">
        <el-table :data="tableData" stripe style="width: 100%">
          <el-table-column prop='title' label="微信通知标题" width="200">
          </el-table-column>
          <el-table-column prop="templateId" label="发送数量" width="200">
          </el-table-column>
          <el-table-column prop="sendTime" label="发送时间" width="200">
          </el-table-column>
          <el-table-column label="观众分组" width="200" prop='groupId'>
          </el-table-column>
          <el-table-column label="状态" width="200" prop="status">
            <template slot-scope="scope">
              <span v-if="scope.row.status === 'AWAIT'">等待发送</span>
              <span v-if="scope.row.status === 'SEND'">已发送</span>
              <span v-if="scope.row.status === 'DRAFT'">草稿</span>
            </template>
            </el-table-column>
          <el-table-column
            label="操作">
            <template slot-scope="scope">
              <div class="tool-box">
                <span><router-link :to="{ name:'wechatOverview', query:{ id : scope.row.inviteId}}">查看</router-link></span>
                <span @click="del(scope.row.inviteId,scope.$index)">删除</span>
                <!-- <span class='more' @click="showMore(scope.$index,tableData)">更多</span>
                <div class="tool" v-if='moreIdx == scope.$index ? true : false'>
                  <span @click="switchAutosend(scope.$index,tableData)">{{scope.row.autoSend === true ? '开启' : '关闭'}}自动发送</span>
                  <span @click="del(scope.$index,tableData)">删除</span>
                </div> -->
              </div>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <div class="form-row">
      <div class="block">
        <el-pagination
          layout="prev, pager, next"
          :total="total"
          :current-page='currPage'
          :page-count='totalPage' @current-change='currentChange'>
        </el-pagination>
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
  import createHttp from 'src/api/activity-manger'
  export default {
    data () {
      return {
        tableData: [{
          activityId: 82,
          createTime: '2018-08-27 12:34:23',
          groupId: '1',
          inviteId: 3,
          sendTime: '2018-08-27 03:37:56',
          status: 'SEND',
          templateId: 1,
          title: '23123'
        }
        ],
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
        delIdx: ''
      }
    },
    created () {
      this.queryList()
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
          createHttp.deleteWechat(this.delId).then((res) => {
            this.tableData.splice(this.delIdx, 1)
            this.$toast({
              content: '删除成功',
              position: 'center'
            })
            this.delConfirm = false
          }).catch((e) => {
            console.log(e)
          })
        }
        this.delConfirm = false
      },
      showMore (idx, data) {
        this.moreIdx = idx
      },
      closeAlltool (e) {
        if (e.target.className.search('more') === -1 || e.target.className.search('more') === -1) {
          this.tableData.forEach(item => {
            item.toolShow = false
          })
        }
      },
      queryList () {
        createHttp.queryWechatlist(this.queryData).then((res) => {
          console.log(res)
          this.tableData = res.data.list
          this.currPage = parseInt(res.data.currPage)
          this.totalPage = parseInt(res.data.totalPage)
          this.total = parseInt(res.data.total)
        }).catch((e) => {
          console.log(e)
        })
      },
      currentChange (e) {
        this.queryData.page = e
        this.queryList()
      }
    }
  }
</script>

<style lang='scss' scoped>
@import '~assets/css/variable';
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
</style>
