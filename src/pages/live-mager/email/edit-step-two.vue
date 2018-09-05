<template>
  <div class="edit-step-box">
    <header class="email-header">
      <div class="back-btn" @click="goBack">
        <i class="iconfont icon-jiantou"></i>
      </div>
      <span>步骤2 发送设置</span>
    </header>
    <div class="live-mager">
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
          <!--<div class="from-row">-->
          <!--<div class="from-title">邮件摘要：</div>-->
          <!--<div class="from-content">-->
          <!--<div style="line-height: 34px;">在收件箱列表中显示的邮件内容摘要</div>-->
          <!--<com-input-->
          <!--placeholder="输入发件人名称"-->
          <!--type="textarea"-->
          <!--autosize-->
          <!--class="input-email"-->
          <!--:error-tips="errorMsg.desc"-->
          <!--:value.sync="email.desc"-->
          <!--:max-length="140"></com-input>-->
          <!--</div>-->
          <!--</div>-->
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
          <div class="from-row">
            <div class="from-title">发送时间：</div>
            <div class="from-content">
              <div class="send-type-box">
                <el-radio v-model="sendType" label="AUTO">立即发送</el-radio>
                <el-radio v-model="sendType" label="ONCE">定时发送</el-radio>
              </div>
              <el-date-picker
                v-if="sendType=='ONCE'"
                v-model="email.planTime"
                type="datetime"
                placeholder="选择日期时间"
                align="right"
                format="yyyy-MM-dd HH:mm"
                value-format="yyyy-MM-dd HH:mm">
              </el-date-picker>
              <span class="error-msg" v-if="errorMsg.planTime">{{errorMsg.planTime}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="email-bottom">
      <!--<button class="primary-button fl" @click="prePage">上一步</button>-->
      <button class="primary-button fr" @click="send">发送</button>
      <!--<button class="primary-button margin-fl fr" @click="timerSend">定时发送</button>-->
      <button class="primary-button margin-fl fr" @click="saveEmail">保存草稿</button>
    </div>
    <!--<message-box-->
      <!--v-if="timerSendShow"-->
      <!--width="500px"-->
      <!--header="邮件推送确认"-->
      <!--confirmText='确认发送'-->
      <!--class="msg-box"-->
      <!--@handleClick="handleClickSendEmail">-->
      <!--<div class="email-info">-->
        <!--<div class="email-info-row">-->
          <!--<span>邮件标题：</span>-->
          <!--<span>00000</span>-->
        <!--</div>-->
        <!--<div class="email-info-row">-->
          <!--<span>发件人：</span>-->
          <!--<span>*****</span>-->
        <!--</div>-->
        <!--<div class="email-info-row">-->
          <!--<span>收件人：</span>-->
          <!--<span>6666666666666</span>-->
        <!--</div>-->
        <!--<div class="email-info-row">-->
          <!--<span>邮件摘要：</span>-->
          <!--<span>***********************************************************</span>-->
        <!--</div>-->
      <!--</div>-->
      <!--&lt;!&ndash;<div class="msg-box-bottom" slot="bottom">&ndash;&gt;-->
      <!--&lt;!&ndash;<div class="email-timer" v-if="isTimer">&ndash;&gt;-->
      <!--&lt;!&ndash;<el-date-picker&ndash;&gt;-->
      <!--&lt;!&ndash;v-model="email.planTime"&ndash;&gt;-->
      <!--&lt;!&ndash;type="datetime"&ndash;&gt;-->
      <!--&lt;!&ndash;placeholder="选择日期时间"&ndash;&gt;-->
      <!--&lt;!&ndash;align="right"&ndash;&gt;-->
      <!--&lt;!&ndash;format="yyyy-MM-dd HH:mm"&ndash;&gt;-->
      <!--&lt;!&ndash;value-format="yyyy-MM-dd HH:mm">&ndash;&gt;-->
      <!--&lt;!&ndash;</el-date-picker>&ndash;&gt;-->
      <!--&lt;!&ndash;<span class="error-msg" v-if="errorMsg.planTime">{{errorMsg.planTime}}</span>&ndash;&gt;-->
      <!--&lt;!&ndash;</div>&ndash;&gt;-->
      <!--&lt;!&ndash;<button class="primary-button fr" @click="sendEmail">{{isTimer?'定时发送':'立即发送'}}</button>&ndash;&gt;-->
      <!--&lt;!&ndash;</div>&ndash;&gt;-->
    <!--</message-box>-->
  </div>
</template>

<script>
  import LiveHttp from 'src/api/activity-manger'
  import {mapState, mapMutations} from 'vuex'
  import * as types from '../../../store/mutation-types'

  export default {
    name: 'edit-step-two',
    data () {
      return {
        outValue: '',
        // timerSendShow: false,
        isTimer: true,
        sendType: 'AUTO',
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
        } else {
          return
        }
        if (this.email.title) {
          this.errorMsg.title = ''
        } else {
          return
        }
        if (this.email.senderName) {
          this.errorMsg.senderName = ''
        } else {
          return
        }
        if (this.email.desc) {
          this.errorMsg.desc = ''
        } else {
          return
        }
        if (this.email.content) {
          this.errorMsg.content = ''
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
        // this.timerSendShow = false
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
      // timerSend () {
      //   this.timerSendShow = true
      //   this.isTimer = true
      // },
      send () {
        if (this.sendType === 'AUTO') {
          this.isTimer = false
          this.immediatelySend()
        } else if (this.sendType === 'ONCE') {
          this.isTimer = true
          this.sendEmail()
        }
      },
      immediatelySend () {
        this.email.planTime = ''
        this.isTimer = false
        // this.timerSendShow = true
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
      // handleClickSendEmail () {
      //   this.timerSendShow = false
      // },
      goBack () {
        this.$router.go(-1)
      }
    }
  }
</script>
<style lang="scss" scoped src="../css/live.scss">
</style>
<style lang="scss" scoped>
  .edit-step-box {
    background-color: #f5f5f5;
    .email-header {
      height: 60px;
      line-height: 60px;
      background-color: #FFD021;
      .icon-jiantou {
        font-size: 22px;
        vertical-align: -2px;
      }
      .back-btn {
        display: inline-block;
        padding: 0 15px;
        background-color: #FFDA51;
        line-height: 40px;
        border-radius: 4px;
        font-size: 18px;
        text-align: center;
        margin-left: 20px;
        margin-right: 10px;
        &:hover {
          cursor: pointer;
          opacity: .9;
          color: #4B5AFE;
        }
      }
    }
    .live-mager {
      padding-bottom: 0;
      height: calc(100vh - 120px);
      overflow: hidden;
      .border-box {
        margin-top: 50px;
        height: 2000px;
      }
    }
    .email-bottom {
      height: 60px;
      width: 100%;
      line-height: 60px;
      border-top: 1px solid #E2E2E2;
      box-sizing: border-box;
      box-shadow: 0 0 4px rgba(0, 0, 0, .1);
      padding: 0 20px;
      background-color: #fff;
      button {
        margin-top: 10px;
      }
      .margin-fl {
        margin-right: 10px;
      }
    }
    .send-type-box {
      height: 30px;
      margin-top: 13px;
    }
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
        color: #fc5659;
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
