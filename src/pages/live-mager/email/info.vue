<template>
  <div class="live-mager edit-step-box">
    <div class="live-title">
      <span class="title">查看邮件</span>
    </div>
    <div class="tip-box">
      通过邮件邀约，定制邀约邮件，邀请特定客户群参加直播活动
    </div>
    <div class="mager-box border-box">
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
        <div class="from-row">
          <div class="from-title">发件状态：</div>
          <div class="from-content">
            <span v-if="email.status=='DRAFT'"
                  class="cg-status"><i class="iconfont icon-shijian"></i>{{email.statusName}}</span>
            <span v-if="email.status=='SEND'"
                  class="fs-status"><i class="iconfont icon-shijian"></i>{{email.statusName}}</span>
            <span v-if="email.status=='AWAIT'"
                  class="dd-status"><i class="iconfont icon-shijian"></i>{{email.statusName}}</span>
          </div>
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
          <!--<div class="from-title">邮件内容：</div>-->
          <!--<div class="from-content">-->
          <div class="email-info-box"
               v-html="email.content"></div>
          <!--</div>-->
        </div>
        <div class="step-btns">
          <!--<button class="primary-button fr" @click="prePage">返回上级</button>-->
          <button v-if="email.status!=='SEND'"
                  class="default-button margin-fl"
                  @click="editEmail">编辑邮件</button>
          <button v-if="email.status=='AWAIT'"
                  class="primary-button"
                  @click="sendEmail">立即发送</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import activityService from 'src/api/activity-service'
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
      this.$get(activityService.GET_EMAIL_INFO, {
        emailInviteId: this.email.emailInviteId
      }).then((res) => {
        res.data.statusName = statusType[res.data.status]
        this.email = res.data
        this.storeEmailInfo(this.email)
      })
      // LiveHttp.queryEmailInfoById(this.email.emailInviteId).then((res) => {
      //   res.data.statusName = statusType[res.data.status]
      //   this.email = res.data
      //   this.storeEmailInfo(this.email)
      // })
    },
    sendEmail () {
      this.$post(activityService.POST_SEND_EMAIL_INFO, {
        emailInviteId: this.email.emailInviteId
      }).then((res) => {
        console.log('邮件发送成功')
        console.log(res)
      })
      // LiveHttp.sendEmailInfo({
      //   emailInviteId: this.email.emailInviteId
      // }).then((res) => {
      //   console.log('邮件发送成功')
      //   console.log(res)
      // }).catch((e) => {
      //   console.log('邮件发送失败')
      //   console.log(e)
      // })
    },
    editEmail () {
      this.$router.push(`/liveMager/emailEditOne/${this.email.activityId}?email=${this.email.emailInviteId}`)
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
  .live-mager .mager-box {
    margin-top: 0;
  }
  .step-btns {
    margin-top: 20px;
    text-align: center;
    .margin-fl {
      margin: 0 10px;
    }
  }
  .tip-box {
    margin-bottom: 20px;
  }
  .cg-status {
    color: #1bcab7;
    i {
      margin-right: 10px;
    }
  }
  .fs-status {
    color: #4b5afe;
    i {
      margin-right: 10px;
    }
  }
  .dd-status {
    color: #ff8b0e;
    i {
      margin-right: 10px;
    }
  }
  .email-info-box {
    position: relative;
    width: 750px;
    margin: 20px auto;
    border: solid 1px #e2e2e2;
    border-radius: 4px;
    padding: 20px;
    overflow: hidden;
    &:before {
      display: block;
      content: '';
      position: absolute;
      height: 74px;
      width: 74px;
      top: -37px;
      left: -37px;
      transform: rotate(45deg);
      background-color: #ffd021;
    }
    &:after {
      display: block;
      content: '预览';
      position: absolute;
      height: 20px;
      width: 30px;
      top: 8px;
      left: 3px;
      transform: rotate(-45deg);
      background-color: #ffd021;
    }
  }
}
</style>
