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
            <div class="from-title"><i class="star">*</i>发件人：</div>
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
            <div class="from-title"><i class="star">*</i>收件人：</div>
            <div class="from-content">
              <div>
                <button class="default-button fl" @click="selectPersonShow=true">选择分组</button>
                <span class="send-span">发送限额：0/400</span>
                <ve-msg-tips tip-type="html"
                             tip="1.每天最多可发送10000封邮件 <br/> 2.发送限额：当前已选中人数/剩余可发送数量<br/>3.在邮件发送前，如果分组内人员发生变化，收件人也会随之改变"></ve-msg-tips>
              </div>
              <transition-group name="list" class="edit-groups" tag="div" v-if="selectedPersonList.length">
                <span class="list-item" v-for="(person,idx) in selectedPersonList" :key="person.id">{{person.name}} ({{person.count}}人）
                  <i class="iconfont icon-shanchu" @click="delPerson(idx)"></i>
                </span>
              </transition-group>
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
      <!-- 选择收件人 -->
      <message-box
        v-if="selectPersonShow"
        width="740px"
        type="prompt"
        header="选择观众组"
        confirmText='确认'
        class="select-person"
        @handleClick="handleSelectPerson">
        <div class="select-person-box">
          <div class="select-nav fl">
            <div class="select-item active">
              <i class="iconfont icon-fenzu"></i>
              <span>分组</span>
            </div>
            <div class="select-item">
              <i class="iconfont icon-biaoqian"></i>
              <span>标签</span>
            </div>
          </div>
          <div class="select-content fl">
            <div class="search-person-box">
              <com-input type="search"
                         class="search-com"
                         :value.sync="searchPerson"
                         @keyup.native.enter="searchEnter"
                         placeholder="输入直播名称"></com-input>
            </div>
            <div class="select-person-box">
              <ul>
                <li
                  v-for="(person,idx) in personList"
                  @click.stop="clickRow(idx)"
                  :class="{active:person.isChecked}"
                  :key="person.id">
                  {{person.name}} ({{person.count}}人）
                  <com-checkbox v-model="person.isChecked" class="fr" small></com-checkbox>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div slot="bottom" class="select-bottom">
          <span class="select-all fl">已选择{{selectedCount}}人：</span>
          <div class="select-list fl" :title="selectedPersonListStr">
            {{selectedPersonListStr}}
          </div>
          <button class="primary-button" @click="okSelectList">确定</button>
        </div>
      </message-box>
    </div>
    <div class="email-bottom">
      <button class="primary-button fr" @click="send">发送</button>
      <button class="primary-button margin-fl fr" @click="saveEmail">保存草稿</button>
    </div>
  </div>
</template>

<script>
  import VeMsgTips from 'src/components/ve-msg-tips'
  import LiveHttp from 'src/api/activity-manger'
  import { mapState, mapMutations } from 'vuex'
  import * as types from '../../../store/mutation-types'

  export default {
    name: 'edit-step-two',
    components: { VeMsgTips },
    data () {
      return {
        outValue: '',
        isTimer: true,
        selectPersonShow: false,
        sendType: 'AUTO',
        searchPerson: '',
        personList: [{ id: '', name: '', count: 0, isChecked: false }],
        selectedPersonList: [{ id: '', name: '', count: 0, isChecked: false }],
        selectedPersonListStr: '',
        selectedCount: 0,
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
          this.email = { ...this.email, ...newVal }
        },
        immediate: true
      },
      email: {
        handler () {
          this.clearError()
        },
        deep: true
      },
      personList: {
        handler (newArray) {
          let temArray = []
          let listStr = ''
          newArray.forEach((item, idx) => {
            if (!item.isChecked) return
            temArray.push(item)
            this.selectedCount += item.count
            listStr += `${item.name} (${item.count}人）、`
          })
          this.selectedPersonListStr = listStr.substring(0, listStr.length - 1)
          this.selectedPersonList = temArray
        },
        deep: true
      }
    },
    created () {
      this.queryPersonList()
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
      /* enter搜索 */
      searchEnter () {
        this.queryPersonList()
      },
      /* 点击确定 */
      okSelectList () {
        this.selectPersonShow = false
      },
      /* 点击取消 */
      handleSelectPerson (e) {
        if (e.action === 'cancel') {
          this.selectPersonShow = false
        }
      },
      /* 选中行 */
      clickRow (idx) {
        this.personList[idx].isChecked = !this.personList[idx].isChecked
      },
      /* 删除已经选中的分组 */
      delPerson (idx) {
        const delIdx = this.personList.indexOf(this.selectedPersonList[idx])
        this.personList[delIdx].isChecked = false
      },
      /* 查询人员 */
      queryPersonList () {
        LiveHttp.queryPersonList({
          activityId: this.$route.params.id,
          name: this.searchPerson
        }).then((res) => {
          let temArray = []
          res.data.forEach((item) => {
            temArray.push({
              id: item.id,
              name: item.name,
              count: 0,
              isChecked: false
            })
          })
          this.personList = temArray
        })
      },
      saveEmail () {
        LiveHttp.saveEmailInfo(this.email).then((res) => {
          if (res.code === 200) {
            this.email = { ...this.email, ...res.data }
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
        if (!this.checkParams(this.isTimer)) return
        if (this.isTimer) { // 发送定时邮件
          LiveHttp.sendTimerEmailInfo(this.email).then((res) => {
            this.$router.push(`/liveMager/email/${this.email.activityId}`)
          })
        } else { // 保存并发送
          LiveHttp.saveAndsendEmail(this.email).then((res) => {
            this.$router.push(`/liveMager/email/${this.email.activityId}`)
          })
        }
      },
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
        this.sendEmail()
      },
      checkParams () {
        this.errorMsg = {
          title: '',
          content: '',
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
        }
        return true
      },
      goBack () {
        this.$router.go(-1)
      }
    }
  }
</script>
<style lang="scss" scoped src="../css/live.scss"></style>
<style lang="scss" scoped>
  .edit-step-box {
    background-color: #f5f5f5;
    .send-span {
      display: inline-block;
      height: 40px;
      line-height: 40px;
      margin: 0 15px;
      color: #888;
    }
    .email-header {
      height: 60px;
      line-height: 60px;
      background-color: #ffd021;
      .icon-jiantou {
        font-size: 22px;
        vertical-align: -2px;
      }
      .back-btn {
        display: inline-block;
        padding: 0 15px;
        background-color: #ffda51;
        line-height: 40px;
        border-radius: 4px;
        font-size: 18px;
        text-align: center;
        margin-left: 20px;
        margin-right: 10px;
        &:hover {
          cursor: pointer;
          opacity: 0.9;
          color: #4b5afe;
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
      border-top: 1px solid #e2e2e2;
      box-sizing: border-box;
      box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
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
      margin-top: 15px;
      width: 500px;
      span {
        display: inline-block;
        background-color: #f0f1fe;
        border-radius: 17px;
        padding: 8px 10px;
        margin-right: 10px;
        margin-bottom: 10px;
        i {
          color: #4b5afe;
          &:hover {
            cursor: pointer;
            opacity: 0.8;
          }
        }
      }
    }
  }
</style>
