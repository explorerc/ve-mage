<template>
  <div class="live-mager email-box">
    <div class="live-title">
      <span class="title">邮件邀约</span>
      <button class="primary-button fr" @click="addEmail">新建邮件</button>
      <span class="send-box fr">发送限额：2399/10000</span>
    </div>
    <div class="email-table-box" v-ComLoading="loading">
      <div class="tip-box">
        通过邮件邀约，定制邀约邮件，邀请特定客户群参加直播活动
      </div>
      <div class="table-list-box">
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
            prop="statusName"
            label="状态">
            <template slot-scope="scope">
              <span v-if="scope.row.status=='DRAFT'" class="cg-status">{{scope.row.statusName}}</span>
              <span v-if="scope.row.status=='SEND'" class="fs-status">{{scope.row.statusName}}</span>
              <span v-if="scope.row.status=='AWAIT'" class="dd-status">{{scope.row.statusName}}</span>
              <!--DRAFT: '草稿',-->
              <!--SEND: '已发送',-->
              <!--AWAIT: '等待发送'-->
              <!--v-if="scope.row.status=='DRAFT'"-->
            </template>
          </el-table-column>
          <el-table-column
            label="操作">
            <template slot-scope="scope">
              <!--<el-button-->
              <!--type="text" size="small"-->
              <!--@click.stop="clickEmail(scope.$index,handleType.info)">查看</el-button>-->
              <!--<el-button-->
              <!--type="text" size="small"-->
              <!--v-if="emailList[scope.$index].status==='DRAFT'"-->
              <!--@click.stop="clickEmail(scope.$index,handleType.send)" disabled>立刻发送</el-button>-->
              <!--<el-button-->
              <!--type="text" size="small"-->
              <!--v-else-if="emailList[scope.$index].status!=='SEND'"-->
              <!--@click.stop="clickEmail(scope.$index,handleType.send)">立刻发送</el-button>-->
              <!--<el-button-->
              <!--type="text" size="small"-->
              <!--v-if="emailList[scope.$index].status!=='SEND'"-->
              <!--@click.stop="clickEmail(scope.$index,handleType.edit)">编辑</el-button>-->
              <!--<el-button-->
              <!--type="text" size="small"-->
              <!--v-if="emailList[scope.$index].status!=='SEND'"-->
              <!--@click.stop="clickEmail(scope.$index,handleType.delete)">删除</el-button>-->
              <div class="table-handler">
                <span @click.stop="clickEmail(scope.$index,handleType.info)">查看</span>
                <span
                  v-if="emailList[scope.$index].status!=='SEND'"
                  @click.stop="clickEmail(scope.$index,handleType.delete)">删除</span>
              </div>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="pagination-box">
        <div class="page-pagination">
          <ve-pagination
            :total="total"
            :pageSize="pageSize"
            @changePage="changePage"/>
        </div>
      </div>
    </div>
    <!--<message-box-->
      <!--v-if="sendShow"-->
      <!--width="500px"-->
      <!--header="邮件推送确认"-->
      <!--confirmText='确认发送'-->
      <!--@handleClick="handleClickSendEmail">-->
      <!--<div class="email-info">-->
        <!--<div class="email-info-row">-->
          <!--<span>邮件标题：</span>-->
          <!--<span>{{currentEmail.title}}</span>-->
        <!--</div>-->
        <!--<div class="email-info-row">-->
          <!--<span>发件人：</span>-->
          <!--<span>*****</span>-->
        <!--</div>-->
        <!--<div class="email-info-row">-->
          <!--<span>收件人：</span>-->
          <!--<span>666</span>-->
        <!--</div>-->
        <!--<div class="email-info-row">-->
          <!--<span>邮件摘要：</span>-->
          <!--<span>***********************************************************</span>-->
        <!--</div>-->
      <!--</div>-->
    <!--</message-box>-->
  </div>
</template>

<script>
  import LiveHttp from 'src/api/activity-manger'
  import VePagination from 'src/components/ve-pagination'
  import { mapMutations } from 'vuex'
  import * as types from '../../../store/mutation-types'

  const handleType = {
    info: 'queryInfoEmail',
    send: 'sendEmail',
    edit: 'editEmail',
    delete: 'deleteEmail'
  }
  const statusType = {
    DRAFT: '草稿',
    SEND: '已发送',
    AWAIT: '等待发送'
  }
  export default {
    name: 'index',
    components: { VePagination },
    data () {
      return {
        pageSize: 10,
        total: 0,
        currentPage: 1,
        activeId: '', // 活动id
        sendShow: false,
        currentEmailIdx: '',
        handleType: handleType,
        loading: false,
        emailList: [
          {
            activityId: 0,
            emailInviteId: 0,
            title: '',
            content: '',
            desc: '',
            planTime: '',
            sendTime: '',
            senderName: '',
            sendCount: 0,
            status: '',
            statusName: ''
          }
        ]
      }
    },
    computed: {
      currentEmail () {
        return this.emailList[this.currentEmailIdx]
      }
    },
    created () {
      const queryId = this.$route.params.id
      if (!queryId) {
        this.$router.go(-1)
      }
      this.activeId = queryId
      this.queryEmailListById()
    },
    methods: {
      ...mapMutations('liveMager', {
        storeEmailInfo: types.EMAIL_INFO
      }),
      changePage (currentPage) {
        this.currentPage = currentPage
        this.queryEmailListById()
      },
      queryEmailListById () {
        this.loading = true
        LiveHttp.queryEmailList({
          activityId: this.activeId,
          pageSize: this.pageSize,
          page: this.currentPage
        }).then((res) => {
          this.loading = false
          if (res.code === 200) {
            res.data.list.map((dataItem) => {
              dataItem.statusName = statusType[dataItem.status]
              dataItem.sendTime = dataItem.sendTime || '--'
              dataItem.title = dataItem.title || '--'
              return dataItem
            })
            this.total = res.data.total
            this.emailList = res.data.list
          }
        }).catch(() => {
          this.loading = false
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
            width: '400px',
            handleClick: (e) => {
              if (e.action === 'confirm') {
                this.delEmail()
              }
            }
          })
        }
      },
      queryInfoEmail () {
        const email = this.emailList[this.currentEmailIdx]
        this.storeEmailInfo(email)
        this.$router.push(`/liveMager/emailInfo/${this.activeId}?email=${email.emailInviteId}`)
      },
      sendEmail () {
        LiveHttp.sendEmailInfo({
          emailInviteId: this.emailList[this.currentEmailIdx].emailInviteId
        }).then((res) => {
          console.log('邮件发送成功')
          console.log(res)
        }).catch((e) => {
          console.log('邮件发送失败')
          console.log(e)
        })
      },
      handleClickSendEmail (e) {
        this.sendShow = false
        if (e.action === 'confirm') {
          this.sendEmail()
        }
      },
      delEmail () {
        const emaiId = this.emailList[this.currentEmailIdx].emailInviteId
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
        const email = this.emailList[this.currentEmailIdx]
        this.storeEmailInfo(email)
        this.$router.push(`/liveMager/emailEdit/${this.activeId}?email=${email.emailInviteId}`)
      },
      addEmail () {
        this.$router.push(`/liveMager/emailEditOne/${this.activeId}`)
      }
    }
  }
</script>
<style lang="scss" scoped src="../css/live.scss"></style>
<style lang="scss" scoped>
.email-table-box {
  font-size: 14px;
}

.send-box {
  display: inline-block;
  color: #888;
  font-size: 14px;
  line-height: 44px;
  margin-right: 20px;
}

.cg-status {
  color: #1bcab7;
}

.fs-status {
  color: #4b5afe;
}

.dd-status {
  color: #ff8b0e;
}
</style>

