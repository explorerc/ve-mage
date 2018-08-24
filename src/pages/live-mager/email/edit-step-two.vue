<template>
  <div class="edit-step-box">
    <div class="mager-box">
      <div class="from-box">
        <div class="from-row">
          <div class="from-title">邮件标题：</div>
          <div class="from-content">
            <com-input
              placeholder="输入标题，可结合变量使用"
              customClass="input-email"
              :value.sync="email.title"
              :max-length="30"></com-input>
          </div>
        </div>
        <div class="from-row">
          <div class="from-title">发件人名称：</div>
          <div class="from-content">
            <com-input
              placeholder="输入发件人名称"
              customClass="input-email"
              :value.sync="email.senderName"
              :max-length="15"></com-input>
          </div>
        </div>
        <div class="from-row">
          <div class="from-title">邮件摘要：</div>
          <div class="from-content">
            <div>在收件箱列表中显示的邮件内容摘要</div>
            <com-input
              placeholder="输入发件人名称"
              type="textarea"
              autosize
              customClass="input-email"
              :value.sync="email.desc"
              :max-length="140"></com-input>
          </div>
        </div>
        <div class="from-row">
          <div class="from-title">收件人：</div>
          <div class="from-content">
            <div>
              <el-button class="fl" type="primary" plain @click="">选择分组</el-button>
              <span>总计256名收件人</span>
              <span class="msg-tip">添加分组后，如果分组内人员发生变化，请删除分组重新添加，以免出现漏发情况</span>
            </div>
            <div class="edit-groups">
              <div class="edit-groups-item">
                <span>分组1</span>
                <span>查看</span>
                <span>删除</span>
              </div>
              <div class="edit-groups-item">
                <span>分组2</span>
                <span>查看</span>
                <span>删除</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="step-btns">
      <el-button class="live-btn fl" type="primary" plain @click="prePage">上一步</el-button>
      <el-button class="live-btn fr" type="primary" plain @click="immediatelySend">立即发送</el-button>
      <el-button class="live-btn fr" type="primary" plain @click="timerSend">定时发送</el-button>
      <el-button class="live-btn fr" type="primary" plain @click="saveEmail">保存草稿</el-button>
    </div>
    <message-box
      v-if="timerSendShow"
      width="500px"
      header="邮件推送确认"
      confirmText='确认发送'
      customClass="msg-box"
      @handleClick="handleClickSendEmail">
      <div class="email-info">
        <div class="email-info-row">
          <span>邮件标题：</span>
          <span>00000</span>
        </div>
        <div class="email-info-row">
          <span>发件人：</span>
          <span>*****</span>
        </div>
        <div class="email-info-row">
          <span>收件人：</span>
          <span>6666666666666</span>
        </div>
        <div class="email-info-row">
          <span>邮件摘要：</span>
          <span>***********************************************************</span>
        </div>
      </div>
      <div slot="bottom">
        <div class="email-timer" v-if="isTimer">
          <el-date-picker
            v-model="email.timerSend"
            type="datetime"
            placeholder="选择日期时间"
            align="right"
            format="yyyy-MM-dd HH:mm">
          </el-date-picker>
        </div>
        <el-button class="live-btn fr" type="primary" plain @click="sendEmail">定时发送</el-button>
      </div>
    </message-box>
  </div>
</template>

<script>
  import LiveHttp from 'src/api/activity-manger'
  import editStepOne from './edit-step-one'
  import {mapState, mapMutations} from 'vuex'
  import * as types from '../../../store/mutation-types'

  export default {
    name: 'edit-step-two',
    data () {
      return {
        outValue: '',
        timerSendShow: false,
        isTimer: true,
        email: {
          activityId: '',
          emailInviteId: '',
          emailTemplateId: 1,
          title: '',
          content: '',
          desc: '',
          senderName: '',
          timerSend: ''
        }
      }
    },
    computed: mapState('liveMager', {
      emailInfo: state => state.emailInfo
    }),
    watch: {
      emailInfo: {
        handler (newVal) {
          this.email = {...this.email, ...newVal}
        },
        immediate: true
      }
    },
    created () {
      if (!this.email.emailInviteId) {
        this.prePage()
      }
    },
    methods: {
      ...mapMutations('liveMager', {
        storeEmailInfo: types.EMAIL_INFO
      }),
      saveEmail () {
        LiveHttp.saveEmailInfo(this.email).then((res) => {
          console.log(res)
          if (res.code === 200) {
            this.storeEmailInfo(this.email)
            this.$toast({
              header: `提示`,
              content: '保存草稿成功',
              autoClose: 2000,
              position: 'right-top'
            })
          }
        })
      },
      sendEmail () {
        this.timerSendShow = false
        if (this.isTimer) { // 发送定时邮件
          LiveHttp.sendTimerEmailInfo(this.email).then((res) => {
            console.log(res)
          })
        } else { // 保存并发送
          LiveHttp.saveAndsendEmail(this.email).then((res) => {
            console.log(res)
          })
        }
      },
      timerSend () {
        this.timerSendShow = true
        this.isTimer = true
      },
      immediatelySend () {
        this.email.timerSend = ''
        this.isTimer = false
        this.timerSendShow = true
      },
      handleClickSendEmail () {
        this.timerSendShow = false
      },
      prePage () {
        this.$parent.$data.currentComponent = editStepOne
      }
    }
  }
</script>
<style lang="scss" scoped src="../css/live.scss">
</style>
<style lang="scss" scoped>
  .edit-step-box {
    .msg-box {
      z-index: 1000;
    }
    .step-btns {
      margin-top: 20px;
    }
    .input-email {
      width: 400px;
    }
    .email-timer {
      display: inline-block;
    }
    .edit-groups {
      margin-top: 40px;
      .edit-groups-item {
        margin: 10px 0;
        line-height: 30px;
        span {
          display: inline-block;
          text-align: center;
          &:nth-child(1) {
            width: 200px;
            border: solid 1px #e5e5e5;
          }
          &:nth-child(2) {
            margin: 0 0 0 20px;
            padding: 0 5px;
            cursor: pointer;
          }
          &:nth-child(3) {
            padding: 0 5px;
            cursor: pointer;
          }
          &:nth-child(2):hover,
          &:nth-child(3):hover {
            color: #2878FF;
          }
        }
      }
    }
  }
</style>
