<template>
  <div class="live-mager edit-step-box">
    <div class="mager-box">
      <div class="from-box">
        <div class="from-row">
          <div class="from-title">邮件标题：</div>
          <div class="from-content">{{email.title}}</div>
        </div>
        <div class="from-row">
          <div class="from-title">发件人：</div>
          <div class="from-content">{{email.senderName}}</div>
        </div>
        <div class="from-row">
          <div class="from-title">发件状态：</div>
          <div class="from-content">{{email.statusName}}</div>
        </div>
        <div class="from-row">
          <div class="from-title">发件时间：</div>
          <div class="from-content">{{email.sendTime}}</div>
        </div>
        <div class="from-row">
          <div class="from-title">邮件摘要：</div>
          <div class="from-content">
            <div>{{email.desc}}</div>
          </div>
        </div>
        <div class="from-row">
          <div class="from-title">邮件内容：</div>
          <div class="from-content">
            <div v-html="email.content"></div>
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
          <el-button v-if="email.status=='AWAIT'" class="live-btn fr" type="primary" plain @click="sendEmail">立即发送</el-button>
          <el-button v-if="email.status!=='SEND'" class="live-btn fr" type="primary" plain @click="editEmail">编辑邮件</el-button>
          <el-button class="live-btn fr" type="primary" plain @click="prePage">返回上级</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import LiveHttp from 'src/api/activity-manger'
  import {mapState, mapMutations} from 'vuex'
  import * as types from '../../../store/mutation-types'

  const statusType = {
    DRAFT: '草稿',
    SEND: '已发送',
    AWAIT: '等待发送'
  }
  export default {
    name: 'info',
    data () {
      return {
        email: {
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
      }
    },
    computed: mapState('liveMager', {
      emailInfo: state => state.emailInfo
    }),
    watch: {
      emailInfo: {
        handler (newVal) {
          this.email = {...newVal}
        },
        immediate: true
      }
    },
    created () {
      // 如果vuex可以取到值就return
      if (this.email.emailInviteId) return
      // 如果vuex不能取到值就查询接口
      const queryId = this.$route.params.id
      if (!queryId) {
        this.$router.go(-1)
        return
      }
      this.email.emailInviteId = this.$route.query.email
      this.queryEmailInfo()
    },
    methods: {
      ...mapMutations('liveMager', {
        storeEmailInfo: types.EMAIL_INFO
      }),
      queryEmailInfo () {
        // 如果不是编辑页面就return
        if (!this.email.emailInviteId) return
        LiveHttp.queryEmailInfoById(this.email.emailInviteId).then((res) => {
          res.data.statusName = statusType[res.data.status]
          this.email = res.data
          this.storeEmailInfo(this.email)
        })
      },
      sendEmail () {
        LiveHttp.sendEmailInfo({
          emailInviteId: this.email.emailInviteId
        }).then((res) => {
          console.log('邮件发送成功')
          console.log(res)
        }).catch((e) => {
          console.log('邮件发送失败')
          console.log(e)
        })
      },
      editEmail () {
        this.$router.push(`/liveMager/emailEdit/${this.email.activityId}?email=${this.email.emailInviteId}`)
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
