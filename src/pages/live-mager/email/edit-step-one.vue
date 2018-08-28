<template>
  <div class="edit-step-box">
    <div class="edit-content clearfix">
      <div class="edit-content-box fl">
        <ve-editer
          height="600"
          v-model="email.content"></ve-editer>
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
    <div ref="emailBox">
      <table class="email-box">
        <tr>
          <td>dddd</td>
          <td>dddd</td>
          <td>dddd</td>
        </tr>
        <tr>
          <td>dddd</td>
          <td>dddd</td>
          <td>dddd</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
  import LiveHttp from 'src/api/activity-manger'
  import VeEditer from 'src/components/ve-editer'
  // import editStepTwo from './edit-step-two'
  import {mapState, mapMutations} from 'vuex'
  import * as types from '../../../store/mutation-types'

  export default {
    name: 'edit-step-one',
    data () {
      return {
        testEmail: '',
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
      // this.$refs.defaultTem.click()
    },
    created () {
      // setTimeout(() => {
      //   let content = `<table width="100%" border="0" cellpadding="0" cellspacing="0"><tr><td colspan="2" style="text-align: center;"><img width="100" height="100" src="./comm/1.jpg"></td></tr><tr><td colspan="2" style="text-align: center;"><h3>在这里填写你的邮件标题</h3><p>在这里填写邮件副标题</p></td></tr><tr><td colspan="2" style="padding: 0 10px;text-align: center;"><hr style="height:2px;background-color: #cccccc;margin: 0;padding: 0;"/><hr style="background-color: #cccccc;"/><div style="height: 2px;background-color: #cccccc;"></div></td></tr><tr><td colspan="2" style="padding: 0 10px;" ><p style="font-size: 14px;">伙伴们好</p><p style="font-size: 14px;">我是微吼的产品经理Ace，你现在看到的是我们为你精心准备的邮件模板，在这个位置你可以编辑邀请函的正文，并使用我们的排版工具美化你的邮件版式，我们希望你可以通过丰富的模板获得更加优质良好的产品体验。</p><p style="font-size: 14px;">在邮件编辑中，你为文字添加超链接，可以尝试按照我们建议的图片尺寸添加你想要展现在邮件中的图片，让你的邮件内容更加生动，赋有阅读性。</p><p style="font-size: 14px;">在此邮件模板中，我们还为你准备了资料介绍区域和活动信息展示区域，希望我们的努力可以帮你节约时间，更有效率的完成你的工作。</p><br/><hr style="background-color: #e5e5e5;"/><br/></td></tr><tr><td colspan="2" style="text-align: center;"><h3>在这里填写你的邮件标题</h3></td></tr><tr><td style="text-align: left;padding: 0 10px;"><h4>主讲人姓名/关键信息</h4><p style="font-size: 14px;">备注区域，可以添加活动备注、活动地点、注意事项等…</p><p style="font-size: 14px;">简练且有效率的表达，可以让你的活动更吸引人</p></td><td style="padding: 0 10px;text-align: right;width: 150px;"><img width="90" height="90" src="./comm/2.jpg"></td></tr><tr style="background-color: #e5e5e5;"><td style="padding: 0 10px;text-align: left;border-radius: 5px;"><h5>此处可填写活动开始时间</h5><p style="font-size: 12px;">备注区域，可以添加活动备注、活动地点、注意事项等…</p></td><td style="padding: 0 10px;text-align: right;width: 150px;border-radius: 5px;"><a style="padding:8px 20px;font-size: 14px;border-radius: 4px;background-color:#ffffff;height: 30px;line-height: 30px;text-align: center;" href="www.baidu.com">进入活动</a></td></tr><tr><td style="padding: 0 10px;text-align: left;border-radius: 5px;"><p style="font-size: 20px;color: #66ff66;">活动信息</p><p style="font-size: 12px;margin-bottom: 10px;">主办方：在这里可以填写主办方的名称</p><p style="font-size: 14px;margin: 10px 0 0 0;">活动官网：https://www.naiveblue.com/</p><p style="font-size: 14px;margin: 0;">活动链接：https://www.naiveblue.com/</p></td><td style="padding: 0 10px;text-align: right;width: 150px;border-radius: 5px;"><img width="70" height="70" src="https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1179858620,4197545893&fm=173&app=25&f=JPEG?w=640&h=360&s=64D138D5183A279E9A14402303007044"></td></tr></table>`
      //   console.log(document.querySelector('.ql-editor'))
      //   document.querySelector('.ql-editor').innerHTML = content
      // }, 3000)
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
