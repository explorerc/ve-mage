<template>
  <div class="live-mager edit-step-box">
    <div class="mager-box">
      <div class="from-box">
        <div class="from-row">
          <div class="from-title">邮件标题：</div>
          <div class="from-content">
            Adobe活动邀请函
          </div>
        </div>
        <div class="from-row">
          <div class="from-title">发件人：</div>
          <div class="from-content">
            微吼营销服务器
          </div>
        </div>
        <div class="from-row">
          <div class="from-title">发件状态：</div>
          <div class="from-content">
            XXXXXXX
          </div>
        </div>
        <div class="from-row">
          <div class="from-title">发件时间：</div>
          <div class="from-content">
            已发送/已定时/草稿
          </div>
        </div>
        <div class="from-row">
          <div class="from-title">邮件摘要：</div>
          <div class="from-content">
            <div>Adobe活动邀请函Adobe活动邀请函Adobe活动邀请函Adobe活动 邀请函Adobe活动邀请函</div>
          </div>
        </div>
        <div class="from-row">
          <div class="from-title">邮件内容：</div>
          <div class="from-content">
            <div>Adobe活动邀请函Adobe活动邀请函Adobe活动邀请函Adobe活动 邀请函Adobe活动邀请函</div>
          </div>
        </div>
        <div class="from-row">
          <div class="from-title">收件人：</div>
          <div class="from-content">
            <div>分组1、分组2、分组3（合计56人）</div>
            <div style="border: solid 1px #e5e5e5;">
              <div>邮件1</div>
              <div>邮件2</div>
              <div>邮件3</div>
              <div>邮件4</div>
              <div>邮件5</div>
              <div>邮件6</div>
            </div>
          </div>
        </div>
        <div class="step-btns">
          <el-button class="live-btn fr" type="primary" plain @click="sendEmail">立即发送</el-button>
          <el-button class="live-btn fr" type="primary" plain @click="editEmail">编辑邮件</el-button>
          <el-button class="live-btn fr" type="primary" plain @click="prePage">返回上级</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import LiveHttp from 'src/api/activity-manger'

  export default {
    name: 'info',
    data () {
      return {
        email: {
          title: '',
          sendPersonName: '',
          desc: '',
          activeId: '',
          emailId: ''
        }
      }
    },
    created () {
      const queryId = this.$route.params.id
      if (!queryId) {
        this.$router.go(-1)
      }
      this.activeId = queryId
      this.emailId = this.$route.query.email
    },
    methods: {
      sendEmail () {
        LiveHttp.sendEmailInfo({}).then((res) => {
          if (res.code === 200) {
            console.log('保存草稿成功')
            this.prePage()
          }
        })
      },
      editEmail () {
        this.$router.push(`/liveMager/emailEdit/${this.activeId}?email=${this.emailId}`)
      },
      prePage () {
        this.$router.go(-1)
      }
    }
  }
</script>
<style lang="scss" scoped src="../css/live.scss">
</style>
<style lang="scss" scoped>
  .edit-step-box {
    .step-btns {
      margin-top: 20px;
    }
  }
</style>
