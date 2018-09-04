<template>
  <div class="edit-step-box">
    <div class="mager-box border-box">
      <div class="edit-content clearfix">
        <div class="edit-content-box fl">
          <ve-html5-editer
            v-model="email.content"></ve-html5-editer>
          <div style="width: 50%;margin: 0 auto;padding: 20px 0;">
            <div>为自己发送一封测试邮件</div>
            <div>
              <input v-model="testEmail" placeholder="输入邮件地址"/>
              <el-button class="live-btn" type="primary" plain @click="sendTestEmail">发送测试邮件</el-button>
            </div>
          </div>
        </div>
        <div class="edit-content-temp fr">
          <div class="temp-title">
            选择模板
            <el-button class="live-btn fr" type="primary" plain @click="recoverDefault">恢复默认</el-button>
          </div>
          <div class="temp-boxs">
            <div v-for="(emailItem,idx) in emailList"
                 :class="{'temp-item':true,fl:true,active:emailItem.emailTemplateId==email.emailTemplateId}"
                 @click.stop="changeTemp(idx)">
              {{emailItem.title}}
            </div>
          </div>
        </div>
      </div>
      <div class="step-btns">
        <button class="primary-button fl" @click="goLiveManger">返回邮件管理</button>
        <el-button class="primary-button fr" @click="nextEmail">下一步</el-button>
        <el-button class="primary-button margin-fl fr" @click="saveEmail">保存草稿</el-button>
      </div>
    </div>
  </div>
</template>

<script>
  import LiveHttp from 'src/api/activity-manger'
  import VeHtml5Editer from 'src/components/ve-html5-editer'
  import { mapState, mapMutations } from 'vuex'
  import * as types from '../../../store/mutation-types'

  export default {
    name: 'edit-step-one',
    data () {
      return {
        testEmail: '',
        emailList: [],
        email: {
          activityId: '',
          emailInviteId: '',
          emailTemplateId: 1,
          title: '',
          content: '',
          desc: '',
          senderName: ''
        }
      }
    },
    components: { VeHtml5Editer },
    computed: mapState('liveMager', {
      emailInfo: state => state.emailInfo
    }),
    watch: {
      emailInfo: {
        handler (newVal) {
          this.email = { ...this.email, ...newVal }
        },
        immediate: true
      }
    },
    created () {
      // 如果vuex不能取到值就查询接口
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
    methods: {
      ...mapMutations('liveMager', {
        storeEmailInfo: types.EMAIL_INFO
      }),
      /* 查询邮件详情 */
      queryEmailInfo () {
        // 如果不是编辑页面就return
        if (!this.email.emailInviteId) return
        LiveHttp.queryEmailInfoById(this.email.emailInviteId).then((res) => {
          this.email = res.data
          this.storeEmailInfo(this.email)
        })
      },
      queryEmailTemp () {
        LiveHttp.queryEmailTemplateList().then((res) => {
          this.emailList = res.data.list
          if (!this.email.emailInviteId) { // 如果不是编辑
            this.email.content = this.emailList[0].content
          }
        })
      },
      sendTestEmail () {
        if (!this.testEmail) {
          this.$messageBox({
            header: '提示',
            content: '邮箱不能为空',
            confirmText: '知道了',
            autoClose: 10
          })
          return
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
        LiveHttp.sendTestEmailInfo({
          content: this.email.content,
          receiverEmail: this.testEmail
        }).then((res) => {
          if (res.code === 200) {
            this.$toast({
              header: `提示`,
              content: '发送成功，请稍后查收邮件',
              autoClose: 2000,
              position: 'right-top'
            })
          }
        })
      },
      /* 保存草稿 */
      saveEmail () {
        LiveHttp.saveEmailInfo(this.email).then((res) => {
          // 回写邮件id
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
      },
      nextEmail () {
        this.storeEmailInfo(this.email)
        // 切换到下一步
        this.$emit('changeView', 1)
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
              this.email.content = this.emailList[idx].content
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
                  this.email.content = emailObj.content
                  break
                }
              }
            }
          }
        })
      },
      /* 到邮件管理列表 */
      goLiveManger () {
        this.$router.push(`/liveMager/email/${this.email.activityId}`)
      }
    }
  }
</script>

<style lang="scss" scoped src="../css/live.scss">
</style>
<style lang="scss" scoped>
  @import "~assets/css/mixin.scss";

  .edit-step-box {
    height: 800px;
    background-color: #fff;
    .step-btns {
      margin: 30px 30px 100px 30px;
      .margin-fl {
        margin: 0 20px;
      }
    }
    .edit-content {
      margin: 20px 0;
      .edit-content-temp {
        width: 400px;
        margin-top: 20px;
        .temp-title {
          margin: 0 0 0 20px;
        }
        .temp-boxs {
          margin: 20px;
          .temp-item {
            width: 160px;
            height: 180px;
            line-height: 180px;
            margin: 10px;
            text-align: center;
            box-sizing: border-box;
            border: solid 1px #e5e5e5;
          }
          .active {
            border-color: red;
          }
        }
      }
      .edit-content-box {
        width: calc(100% - 430px);
        margin-left: 30px;
      }
    }
  }
</style>
