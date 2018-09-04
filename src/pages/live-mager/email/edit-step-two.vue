<template>
  <div class="edit-step-box">
    <div class="mager-box border-box">
      <div class="from-box">
        <div class="from-row">
          <div class="from-title"><i class="star">*</i>邮件标题：</div>
          <div class="from-content">
            <com-input
              placeholder="输入标题，可结合变量使用"
              class="input-email"
              :error-tips="errorMsg.title"
              :value.sync="email.title"
              :max-length="30"></com-input>
          </div>
        </div>
        <div class="from-row">
          <div class="from-title"><i class="star">*</i>发件人名称：</div>
          <div class="from-content">
            <com-input
              placeholder="输入发件人名称"
              class="input-email"
              :error-tips="errorMsg.senderName"
              :value.sync="email.senderName"
              :max-length="15"></com-input>
          </div>
        </div>
        <div class="from-row">
          <div class="from-title">邮件摘要：</div>
          <div class="from-content">
            <div style="line-height: 34px;">在收件箱列表中显示的邮件内容摘要</div>
            <com-input
              placeholder="输入发件人名称"
              type="textarea"
              autosize
              class="input-email"
              :error-tips="errorMsg.desc"
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
      <div class="step-btns">
        <button class="primary-button fl" @click="prePage">上一步</button>
        <button class="primary-button fr" @click="immediatelySend">立即发送</button>
        <button class="primary-button margin-fl fr" @click="timerSend">定时发送</button>
        <button class="primary-button fr" @click="saveEmail">保存草稿</button>
      </div>
    </div>
    <message-box
      v-if="timerSendShow"
      width="500px"
      header="邮件推送确认"
      confirmText='确认发送'
      class="msg-box"
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
      <div class="msg-box-bottom" slot="bottom">
        <div class="email-timer" v-if="isTimer">
          <el-date-picker
            v-model="email.planTime"
            type="datetime"
            placeholder="选择日期时间"
            align="right"
            format="yyyy-MM-dd HH:mm"
            value-format="yyyy-MM-dd HH:mm">
          </el-date-picker>
          <span class="error-msg" v-if="errorMsg.planTime">{{errorMsg.planTime}}</span>
        </div>
        <button class="primary-button fr" @click="sendEmail">{{isTimer?'定时发送':'立即发送'}}</button>
      </div>
    </message-box>
  </div>
</template>

<script>
  import LiveHttp from 'src/api/activity-manger'
  // import editStepOne from './edit-step-one'
  import {mapState, mapMutations} from 'vuex'
  import * as types from '../../../store/mutation-types'

  export default {
    name: 'edit-step-two',
    data () {
      return {
        outValue: '',
        timerSendShow: false,
        isTimer: true,
        errorMsg: {
          title: '',
          content: '',
          desc: '',
          senderName: '',
          planTime: ''
        },
        email: {
          activityId: '',
          emailInviteId: '',
          emailTemplateId: 1,
          title: '',
          content: '',
          desc: '',
          senderName: '',
          planTime: ''
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
      },
      email: {
        handler () {
          this.clearError()
        },
        deep: true
      }
    },
    methods: {
      ...mapMutations('liveMager', {
        storeEmailInfo: types.EMAIL_INFO
      }),
      /* 清除错误信息 */
      clearError () {
        if (this.email.planTime) {
          this.errorMsg.planTime = ''
        } else if (this.email.title) {
          this.errorMsg.title = ''
        } else if (this.email.content) {
          this.errorMsg.content = ''
        } else if (this.email.desc) {
          this.errorMsg.desc = ''
        } else if (this.email.senderName) {
          this.errorMsg.senderName = ''
        }
      },
      saveEmail () {
        LiveHttp.saveEmailInfo(this.email).then((res) => {
          if (res.code === 200) {
            this.email = {...this.email, ...res.data}
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
        if (this.isTimer && !this.email.planTime) {
          this.errorMsg.planTime = '定时时间不能为空'
          return
        }
        this.timerSendShow = false
        if (!this.checkParams(this.isTimer)) return
        if (this.isTimer) { // 发送定时邮件
          LiveHttp.sendTimerEmailInfo(this.email).then((res) => {
            this.$router.go(-1)
          })
        } else { // 保存并发送
          LiveHttp.saveAndsendEmail(this.email).then((res) => {
            this.$router.go(-1)
          })
        }
      },
      timerSend () {
        this.timerSendShow = true
        this.isTimer = true
      },
      immediatelySend () {
        this.email.planTime = ''
        this.isTimer = false
        this.timerSendShow = true
      },
      checkParams (isTimer) {
        this.errorMsg = {
          title: '',
          content: '',
          desc: '',
          senderName: '',
          planTime: ''
        }
        if (!this.email.title) {
          this.errorMsg.title = '标题不能为空'
          return false
        } else if (!this.email.senderName) {
          this.errorMsg.senderName = '发件人不能为空'
          return false
        } else if (!this.email.content) {
          this.errorMsg.content = '邮件内容不能为空'
          return false
        } else if (!this.email.desc) {
          this.errorMsg.desc = '邮件摘要不能为空'
          return false
        }
        return true
      },
      handleClickSendEmail () {
        this.timerSendShow = false
      },
      prePage () {
        // this.$parent.$data.currentComponent = editStepOne
        this.$emit('changeView', 0)
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
      margin: 30px 30px 100px 30px;
      .margin-fl {
        margin: 0 20px;
      }
    }
    .input-email {
      width: 400px;
    }
    .msg-box-bottom {
      height: 40px;
      .email-timer {
        display: inline-block;
        margin-right: 23px;
      }
      .error-msg {
        display: block;
        position: absolute;
        color: #FC5659;
        font-size: 14px;
      }
    }
    .from-title {
      line-height: 40px;
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
            color: #2878ff;
          }
        }
      }
    }
  }
</style>
