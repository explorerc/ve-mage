<template>
  <div class="edit-step-box">
    <header class="email-header">
      <div class="back-btn"
           @click="goBack">
        <i class="iconfont icon-jiantou"></i>
      </div>
      <span>步骤1 邮件内容</span>
    </header>
    <div class="border-box">
      <div class="edit-content clearfix">
        <div class="edit-content-box fl">
          <ve-html5-editer v-model="email.content"></ve-html5-editer>
        </div>
        <div class="edit-content-temp fr">
          <div class="temp-title">
            <span>选择模板</span>
            <button class="default-button fr"
                    @click="recoverDefault">恢复默认
            </button>
          </div>
          <div class="temp-boxs">
            <div v-for="(emailItem,idx) in emailList"
                 :class="{'temp-item':true,fl:true,active:emailItem.emailTemplateId==email.emailTemplateId}"
                 @click.stop="changeTemp(idx)">
              <div class="temp-item-box"
                   :style="{backgroundColor:emailItem.cover}"></div>
              <span class="temp-item-title">{{emailItem.title}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 发送测试邮件 -->
    <message-box v-show="testEmailShow"
                 header="邮件测试发送"
                 type="prompt"
                 width="450px"
                 @handleClick="emailHandleClick">
      <div class="email-box">
        <span class="test-tip">每天只允许发送5条测试邮件：</span>
        <com-input :value.sync="testEmailAddress"
                   :error-tips="emailError"
                   :maxLength="40"
                   @keyup.enter.native="sendTestEmail"
                   placeholder="输入邮件地址"/>
      </div>
      <div class="step-one-btns"
           slot="bottom">
        <span>邮件限额：{{testEmailCount}}</span>
        <button class="primary-button"
                @click="sendTestEmail">立即发送
        </button>
      </div>
    </message-box>
    <div class="email-bottom">
      <button class="default-button fl"
              @click="clickSendTestEmail">发送测试邮件
      </button>
      <button class="primary-button fr"
              @click="nextEmail">下一步
      </button>
      <button class="default-button margin-fl fr"
              @click="saveEmail">保存草稿
      </button>
    </div>
  </div>
</template>

<script>
  import activityService from 'src/api/activity-service'
  import VeHtml5Editer from 'src/components/ve-html5-editer'
  import {mapState, mapMutations} from 'vuex'
  import * as types from '../../../store/mutation-types'

  export default {
    name: 'edit-step-one',
    data () {
      return {
        testEmailShow: false,
        testEmailAddress: '',
        testEmailCount: 0,
        emailError: '',
        emailList: [],
        isHistory: false,
        email: {
          activityId: '',
          emailInviteId: '',
          emailTemplateId: 1,
          title: '',
          content: '',
          desc: '',
          senderName: ''
        },
        accountInfo: {},
        PC_HOST: location.protocol + process.env.PC_HOST
      }
    },
    components: {VeHtml5Editer},
    computed: mapState('liveMager', {
      emailInfo: state => state.emailInfo
    }),
    /* 路由守卫，在路由跳转前执行，此时组件实例还没被创建 */
    beforeRouteEnter (to, from, next) {
      next(vm => {
        if (from.name === 'emailEditTwo') {
          /* 表示第二步进入第一步 */
          vm.isHistory = true
        }
        vm.initPage()
      })
    },
    watch: {
      emailInfo: {
        handler (newVal) {
          this.email = {...this.email, ...newVal}
        },
        immediate: true
      },
      testEmailAddress () {
        this.emailError = ''
      }
    },
    created () {
      this.accountInfo = JSON.parse(sessionStorage.getItem('accountInfo'))
    },
    methods: {
      ...mapMutations('liveMager', {
        storeEmailInfo: types.EMAIL_INFO
      }),
      initPage () {
        if (this.isHistory) {
          this.email = this.emailInfo
          return
        }
        const queryId = this.$route.params.id
        if (!queryId) {
          this.$router.go(-1)
          return
        }
        const emailId = this.$route.query.email
        if (emailId) { // 编辑
          // 如果vuex可以取到值就return
          if (this.email.emailInviteId) {
            this.queryEmailTemp()
            return
          }
          this.email.emailInviteId = emailId
          this.queryEmailInfo()
        } else { // 新增
          this.email = {
            activityId: queryId,
            emailInviteId: '',
            emailTemplateId: 1,
            title: '',
            content: '',
            desc: '',
            senderName: ''
          }
          this.storeEmailInfo(this.email)
        }
        this.queryEmailTemp()
      },
      clickSendTestEmail () {
        this.testEmailShow = true
        this.$post(activityService.POST_TEST_EMAIL_INFO, {
          type: 'email'
        }).then((res) => {
          this.testEmailCount = res.data
        })
        // LiveHttp.queryTestEmailInfo({
        //   type: 'email'
        // }).then((res) => {
        //   this.testEmailCount = res.data
        // })
      },
      emailHandleClick (e) {
        if (e.action === 'cancel') {
          this.testEmailShow = false
        }
      },
      /* 查询邮件详情 */
      queryEmailInfo () {
        // 如果不是编辑页面就return
        if (!this.email.emailInviteId) return
        this.$get(activityService.GET_EMAIL_INFO, {
          emailInviteId: this.email.emailInviteId
        }).then((res) => {
          this.email = res.data
          this.storeEmailInfo(this.email)
        })
        // LiveHttp.queryEmailInfoById(this.email.emailInviteId).then((res) => {
        //   this.email = res.data
        //   this.storeEmailInfo(this.email)
        // })
      },
      queryEmailTemp () {
        this.$get(activityService.GET_EMAIL_TPL_LIST).then((res) => {
          if (!res.data.list) return
          this.emailList = res.data.list
          if (!this.email.emailInviteId) { // 如果不是编辑
            let shareId = this.accountInfo ? this.accountInfo.businessUserId : ''
            this.email.content = this.emailList[0].content.replace('$$activity$$', `${this.PC_HOST}subscribe/${this.email.activityId}?shareId=${shareId}`)
          }
        })
        // LiveHttp.queryEmailTemplateList().then((res) => {
        //   if (!res.data.list) return
        //   this.emailList = res.data.list
        //   if (!this.email.emailInviteId) { // 如果不是编辑
        //     this.email.content = this.emailList[0].content
        //   }
        // })
      },
      sendTestEmail () {
        if (!this.testEmailAddress) {
          this.emailError = '邮箱不能为空'
          return
        } else {
          const emailReg = new RegExp('^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$')
          if (!emailReg.test(this.testEmailAddress)) {
            this.emailError = '邮箱格式不正确'
            return
          }
        }
        if (!this.email.content) {
          this.$messageBox({
            header: '提示',
            content: '邮件内容不能为空',
            confirmText: '知道了',
            autoClose: 10
          })
          return
        }
        this.testEmailShow = false
        let shareId = this.accountInfo ? this.accountInfo.businessUserId : ''
        this.email.content = this.email.content.replace('$$activity$$', `${this.PC_HOST}subscribe/${this.email.activityId}?shareId=${shareId}`)
        this.$post(activityService.POST_SEND_TEST_EMAIL_INFO, {
          content: this.email.content,
          receiverEmail: this.testEmailAddress
        }).then((res) => {
          this.$toast({
            header: `提示`,
            content: '发送成功，请稍后查收邮件',
            autoClose: 2000,
            position: 'right-top'
          })
        })
        // LiveHttp.sendTestEmailInfo({
        //   content: this.email.content,
        //   receiverEmail: this.testEmailAddress
        // }).then((res) => {
        //   if (res.code === 200) {
        //     this.$toast({
        //       header: `提示`,
        //       content: '发送成功，请稍后查收邮件',
        //       autoClose: 2000,
        //       position: 'right-top'
        //     })
        //   }
        // })
      },
      /* 保存草稿 */
      saveEmail () {
        let shareId = this.accountInfo ? this.accountInfo.businessUserId : ''
        this.email.content = this.email.content.replace('$$activity$$', `${this.PC_HOST}subscribe/${this.email.activityId}?shareId=${shareId}`)
        this.$post(activityService.POST_SAVE_EMAIL_INFO, this.email).then((res) => {
          // 回写邮件id
          if (!this.email.emailInviteId) {
            this.$router.replace({query: {email: res.data.emailInviteId}})
          }
          this.email.emailInviteId = res.data.emailInviteId
          this.email.title = res.data.title
          // 把信息保存到vuex
          this.storeEmailInfo(this.email)
          this.$toast({
            header: `提示`,
            content: '保存草稿成功',
            autoClose: 2000,
            position: 'right-top'
          })
        })
        // LiveHttp.saveEmailInfo(this.email).then((res) => {
        //   // 回写邮件id
        //   this.email.emailInviteId = res.data.emailInviteId
        //   this.email.title = res.data.title
        //   // 把信息保存到vuex
        //   this.storeEmailInfo(this.email)
        //   this.$toast({
        //     header: `提示`,
        //     content: '保存草稿成功',
        //     autoClose: 2000,
        //     position: 'right-top'
        //   })
        // })
      },
      goBack () {
        this.$router.go(-1)
      },
      nextEmail () {
        this.storeEmailInfo(this.email)
        // 切换到下一步
        this.$router.push(`/liveMager/emailEditTwo/${this.email.activityId}?email=${this.email.emailInviteId}`)
      },
      /* 更换模板 */
      changeTemp (idx) {
        this.$messageBox({
          header: '',
          content: '更换邮件模板会导致已编辑的内容丢失',
          cancelText: '取消',
          confirmText: '确认替换',
          handleClick: (e) => {
            if (e.action === 'confirm') {
              this.email.emailTemplateId = this.emailList[idx].emailTemplateId
              let shareId = this.accountInfo ? this.accountInfo.businessUserId : ''
              this.email.content = this.emailList[idx].content.replace('$$activity$$', `${this.PC_HOST}subscribe/${this.email.activityId}?shareId=${shareId}`)
            }
          }
        })
      },
      /* 恢复默认模板 */
      recoverDefault () {
        this.$messageBox({
          header: '',
          width: '400px',
          content: '恢复默认模板会导致已编辑的内容丢失',
          cancelText: '取消',
          confirmText: '恢复默认',
          handleClick: (e) => {
            if (e.action === 'confirm') {
              for (let i = 0; i < this.emailList.length; i++) {
                const emailObj = this.emailList[i]
                if (emailObj.emailTemplateId === this.email.emailTemplateId) {
                  let shareId = this.accountInfo ? this.accountInfo.businessUserId : ''
                  this.email.content = emailObj.content.replace('$$activity$$', `${this.PC_HOST}subscribe/${this.email.activityId}?shareId=${shareId}`)
                  break
                }
              }
            }
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped src="../css/live.scss">
</style>
<style lang="scss" scoped>
  @import 'assets/css/mixin.scss';

  .edit-step-box {
    min-width: 1366px;
    background-color: #fff;
    color: #222;
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
    .email-bottom {
      height: 60px;
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
    .border-box /deep/ {
      height: calc(100vh - 120px);
      .html-editer {
        height: 100%;
        .vue-html5-editor .content {
          background-color: #f5f5f5;
        }
      }
    }
    .step-btns {
      margin: 30px 30px 100px 30px;
      .margin-fl {
        margin: 0 20px;
      }
    }
    .edit-content {
      height: 100%;
      margin: 0 0 20px 0;
      .edit-content-temp {
        height: calc(100% - 36px);
        width: 356px;
        margin-top: 36px;
        padding: 0 1.8%;
        box-sizing: border-box;
        overflow-y: scroll;
        .temp-title {
          span {
            line-height: 44px;
            color: #555;
          }
        }
        .temp-boxs {
          margin-top: 20px;
          .temp-item {
            width: 124px;
            margin: 10px 15px;
            text-align: center;
            &:nth-child(2n) {
              margin-right: 0;
            }
            &:nth-child(2n + 1) {
              margin-left: 0;
            }
            .temp-item-box {
              height: 196px;
              box-sizing: border-box;
              border: solid 1px #e5e5e5;
              border-radius: 4px;
              background-size: cover;
              &:hover {
                cursor: pointer;
                border-color: #4b5afe;
                transition: border-color 0.2s;
              }
            }
            .temp-item-title {
              display: block;
              padding-top: 5px;
              font-size: 14px;
              color: #555555;
            }
            &:nth-child(1) .temp-item-box {
              background-image: url('../../../assets/image/email-01.jpg');
            }
            &:nth-child(2) .temp-item-box {
              background-image: url('../../../assets/image/email-02.jpg');
            }
            &:nth-child(3) .temp-item-box {
              background-image: url('../../../assets/image/email-03.jpg');
            }
            &:nth-child(4) .temp-item-box {
              background-image: url('../../../assets/image/email-04.jpg');
            }
          }
          .active {
            .temp-item-box {
              border-color: #4b5afe;
            }
          }
        }
      }
      .edit-content-box /deep/ {
        width: calc(100% - 356px);
        height: 100%;
        .vue-html5-editor {
          height: 100%;
          border: none;
          border-right: solid 1px #e5e5e5;
          border-radius: 0;
          .content {
            height: calc(100% - 37px);
            max-height: calc(100% - 37px);
            padding: 0;
          }
        }
      }
    }
    .email-box {
      width: 100%;
      margin: 15px 10px;
      .test-tip {
        font-size: 14px;
        color: #4b5afe;
        line-height: 40px;
      }
      .com-input {
        width: 390px;
      }
    }
    .step-one-btns {
      margin: 40px 10px -10px 10px;
      span {
        float: left;
        line-height: 45px;
        font-size: 14px;
        color: #888;
      }
    }
  }
</style>
