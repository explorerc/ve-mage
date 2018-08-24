<template>
  <div class="edit-step-box">
    <div class="edit-content clearfix">
      <div class="edit-content-box fl">
        <ve-editer
          img-upload-url="/api/upload/do-upload"
          height="600"
          v-model="email.content"></ve-editer>
        <div style="width: 50%;margin: 0 auto;padding: 20px 0;">
          <div>为自己发送一封测试邮件</div>
          <div>
            <input placeholder="输入邮件地址"/>
            <el-button class="live-btn" type="primary" plain @click="">发送测试邮件</el-button>
          </div>
        </div>
      </div>
      <div class="edit-content-temp fr">
        <div class="temp-title">
          选择模板
          <el-button class="live-btn fr" type="primary" plain @click="recoverDefault">恢复默认</el-button>
        </div>
        <div class="temp-boxs">
          <div ref="defaultTem" class="temp-item fl" @click.stop="editerContent='<h1>默认</h1>'">
            默认
          </div>
          <div class="temp-item fl" @click.stop="changeTemp('<h1>2</h1>')">
            2
          </div>
          <div class="temp-item fl" @click.stop="changeTemp('<h1>3</h1>')">
            3
          </div>
          <div class="temp-item fl" @click.stop="changeTemp('<h1>4</h1>')">
            4
          </div>
          <div class="temp-item fl" @click.stop="changeTemp('<h1>5</h1>')">
            5
          </div>
        </div>
      </div>
    </div>
    <div class="step-btns">
      <el-button class="live-btn fl" type="primary" plain @click="goLiveManger">返回邮件管理</el-button>
      <el-button class="live-btn fr" type="primary" plain @click="nextEmail">下一步</el-button>
      <el-button class="live-btn fr" type="primary" plain @click="saveEmail">保存草稿</el-button>
    </div>
  </div>
</template>

<script>
  import LiveHttp from 'src/api/activity-manger'
  import VeEditer from 'src/components/ve-editer'
  import editStepTwo from './edit-step-two'
  import {mapState, mapMutations} from 'vuex'
  import * as types from '../../../store/mutation-types'

  export default {
    name: 'edit-step-one',
    data () {
      return {
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
    components: {VeEditer},
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
    mounted () {
      this.$refs.defaultTem.click()
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
        if (this.email.emailInviteId) return
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
        this.$parent.$data.currentComponent = editStepTwo
      },
      /* 更换模板 */
      changeTemp (content) {
        this.$messageBox({
          header: '',
          content: '更换邮件模板会导致已编辑的内容丢失',
          cancelText: '取消',
          confirmText: '确认替换',
          handleClick: (e) => {
            if (e.action === 'confirm') {
              this.content = content
            }
          }
        })
      },
      /* 恢复默认模板 */
      recoverDefault () {
        this.$messageBox({
          header: '',
          content: '恢复默认模板会导致已编辑的内容丢失',
          cancelText: '取消',
          confirmText: '恢复默认',
          handleClick: (e) => {
            if (e.action === 'confirm') {
              this.$refs.defaultTem.click()
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

<style lang="scss" scoped>
  .edit-step-box {
    height: 800px;
    .edit-content {
      margin: 20px 0;
      .edit-content-temp {
        width: 400px;
        margin-top: 20px;
        .temp-title {
          margin: 0 20px;
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
        }
      }
      .edit-content-box {
        width: calc(100% - 400px);
      }
    }
    .step-btns {
      margin-top: 20px;
    }
  }

</style>
