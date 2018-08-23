<template>
  <div class="live-mager email-box">
    <div class="live-title">
      <span>邮件邀约</span>
    </div>
    <div class="email-table-box">
      <div class="email-setting">
        邮件邀约：
        <el-switch
          v-model="isInvite"
          active-color="#13ce66">
        </el-switch>
        <span class="msg-tip">开启后，将可以定制邀约邮件，邀请特定客户群参加直播活动</span>
        <el-button class="live-btn fr" type="primary" plain @click="addEmail">新建邮件</el-button>
      </div>
      <el-table
        :data="emailList"
        style="width: 100%">
        <el-table-column
          prop="title"
          label="邮件标题">
        </el-table-column>
        <el-table-column
          prop="sendTime"
          label="发送时间">
        </el-table-column>
        <el-table-column
          prop="sendCount"
          label="发送数量">
        </el-table-column>
        <el-table-column
          prop="state"
          label="状态">
        </el-table-column>
        <el-table-column
          label="操作">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click.stop="clickEmail(scope.$index,handleType.info)">查看</el-button>
            <el-button type="text" size="small" @click.stop="clickEmail(scope.$index,handleType.send)">立刻发送</el-button>
            <el-button type="text" size="small" @click.stop="clickEmail(scope.$index,handleType.edit)">编辑</el-button>
            <el-button type="text" size="small" @click.stop="clickEmail(scope.$index,handleType.delete)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination-box">
        <div class="page-pagination" v-if="emailList.length>pageSize">
          <ve-pagination
            :total="emailList.length"
            :pageSize="pageSize"
            @changePage="changePage"/>
        </div>
      </div>
    </div>
    <message-box
      v-if="sendShow"
      header="提示"
      content="活动删除后，所有数据将一并删除，并且不可恢复。确定要删除吗？"
      cancelText="取消"
      confirmText='删除'
      @handleClick="handleClickSendEmail">
      5666666666666666666
    </message-box>
  </div>
</template>

<script>
  import LiveHttp from 'src/api/activity-manger'
  import VePagination from 'src/components/ve-pagination'
  import MessageBox from 'src/components/common/message-box/com'

  const handleType = {
    info: 'queryInfoEmail',
    send: 'sendEmail',
    edit: 'editEmail',
    delete: 'deleteEmail'
  }
  export default {
    name: 'index',
    components: {VePagination, MessageBox},
    data () {
      return {
        isInvite: false,
        pageSize: 10,
        total: 0,
        currentPage: 1,
        liveId: '', // 活动id
        sendShow: false,
        currentEmailIdx: '',
        handleType: handleType,
        emailList: [
          {id: 0, title: '111', sendTime: '2019-10-22', sendCount: 10, state: '草稿'},
          {id: 1, title: '22', sendTime: '2019-10-22', sendCount: 10, state: '草稿'},
          {id: 2, title: '33', sendTime: '2019-10-22', sendCount: 10, state: '等待发送'},
          {id: 3, title: '4', sendTime: '2019-10-22', sendCount: 10, state: '草稿'},
          {id: 4, title: '55', sendTime: '2019-10-22', sendCount: 10, state: '已发送'},
          {id: 5, title: '66', sendTime: '2019-10-22', sendCount: 10, state: '等待发送'},
          {id: 6, title: '77', sendTime: '2019-10-22', sendCount: 10, state: '已发送'},
          {id: 7, title: '88', sendTime: '2019-10-22', sendCount: 10, state: '草稿'},
          {id: 7, title: '88', sendTime: '2019-10-22', sendCount: 10, state: '草稿'},
          {id: 7, title: '88', sendTime: '2019-10-22', sendCount: 10, state: '草稿'},
          {id: 7, title: '88', sendTime: '2019-10-22', sendCount: 10, state: '草稿'}
        ]
      }
    },
    created () {
      const queryId = this.$route.params.id
      if (!queryId) {
        this.$router.go(-1)
      }
      this.liveId = queryId
      this.queryEmailListById()
    },
    methods: {
      changePage (currentPage) {
        this.currentPage = currentPage
        this.queryEmailListById()
      },
      queryEmailListById () {
        LiveHttp.queryEmailList({
          id: this.liveId,
          pageSize: this.pageSize,
          page: this.currentPage
        }).then((res) => {
          console.log(res)
        }).catch((e) => {
          console.log('查询邮件列表失败')
          console.log(e)
        })
      },
      clickEmail (idx, type) {
        this.currentEmailIdx = idx
        if (type === this.handleType.info) { // 查看
          this.queryInfoEmail()
        } else if (type === this.handleType.edit) { // 编辑
          this.editEmail()
        } else if (type === this.handleType.send) { // 立即发送
          this.sendShow = true
        } else if (type === this.handleType.delete) { // 删除
          this.$messageBox({
            header: '',
            content: '删除邮件后，邮件内容将无法找回，确认删除？',
            cancelText: '取消',
            confirmText: '删除',
            handleClick: (e) => {
              debugger
              if (e.action === 'confirm') {
                this.delEmail()
              }
            }
          })
        }
      },
      queryInfoEmail () {
        const emaiId = this.emailList[this.currentEmailIdx].id
        LiveHttp.queryEmailInfoById(emaiId).then((res) => {
        }).catch((e) => {
          console.log('查询邮件信息失败')
          console.log(e)
        })
      },
      sendEmail () {
        const emaiId = this.emailList[this.currentEmailIdx].id
        LiveHttp.sendEmailInfo(emaiId).then((res) => {
          if (res.code === 200) {
            console.log('邮件发送成功')
          }
        }).catch((e) => {
          console.log('邮件发送失败')
          console.log(e)
        })
      },
      handleClickSendEmail (e) {
        console.log(e)
        this.sendShow = false
        if (e.action === 'confirm') {
          this.sendEmail()
        }
      },
      delEmail () {
        const emaiId = this.emailList[this.currentEmailIdx].id
        LiveHttp.deleteEmailById(emaiId).then((res) => {
          if (res.code === 200) {
            this.queryEmailListById()
          }
        }).catch((e) => {
          console.log('删除邮件失败')
          console.log(e)
        })
      },
      editEmail () {
        const emaiId = this.emailList[this.currentEmailIdx].id
        this.$router.push(`/liveMager/emailEdit/${this.liveId}?email=${emaiId}`)
      },
      addEmail () {
        this.$router.push(`/liveMager/emailEdit/${this.liveId}`)
      }
    }
  }
</script>
<style lang="scss" scoped src="../css/live.scss">
</style>
<style lang="scss" scoped>
  .email-table-box {
    margin: 20px;
    font-size: 14px;
  }

  .email-setting {
    margin-bottom: 30px;
    padding: 10px 0;
  }
</style>
<style lang="scss">
  /*.email-box {*/
  /*.el-table th.is-leaf {*/
  /*border: 1px solid #ebeef5;*/
  /*}*/
  /*}*/
</style>
