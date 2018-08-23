<template>
  <div class="live-mager email-box">
    <div class="live-title">
      <span>邮件编辑</span>
    </div>
  </div>
</template>

<script>
  import LiveHttp from 'src/api/activity-manger'
  export default {
    name: 'edit',
    data () {
      return {
      }
    },
    created () {
      const queryId = this.$route.params.id
      if (!queryId) {
        this.$router.go(-1)
      }
      this.liveId = queryId
    },
    methods: {
      changePage (currentPage) {
        this.currentPage = currentPage
        this.queryEmailListById()
      },
      queryEmailListById () {
        LiveHttp.queryEmailListById({
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
      queryInfoEmail (idx) {
        const emaiId = this.emailList[idx].id
        LiveHttp.queryEmailInfoById(emaiId).then((res) => {
        }).catch((e) => {
          console.log('查询邮件信息失败')
          console.log(e)
        })
      },
      editEmail (idx) {
        const emaiId = this.emailList[idx].id
        console.log(emaiId)
      },
      sendEmail (idx) {
        const emaiId = this.emailList[idx].id
        LiveHttp.sendEmailInfo(emaiId).then((res) => {
          if (res.code === 200) {
            console.log('邮件发送成功')
          }
        }).catch((e) => {
          console.log('邮件发送失败')
          console.log(e)
        })
      },
      delEmail (idx) {
        const emaiId = this.emailList[idx].id
        LiveHttp.deleteEmailById(emaiId).then((res) => {
          if (res.code === 200) {
            this.queryEmailListById()
          }
        }).catch((e) => {
          console.log('删除邮件失败')
          console.log(e)
        })
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
