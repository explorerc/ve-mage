<template>
  <div class="live-mager edit-step-box">
    <div class="live-title">
      <span class="title">查看邮件</span>
      <com-back :class='"back-btn"'></com-back>
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
          <div class="from-content">{{email.senderName | isEmpty('-')}}</div>
        </div>
        <div class="from-row">
          <div class="from-title">收件人：</div>
          <div class="from-content receiver" >
            <template v-if="selectedGroupList.length || selectedTagList.length">
              <div >
                <span v-for='(item,idx) in selectedGroupList'>{{item.name}}<template v-if="idx + 1< selectedGroupList.length">、</template></span>
              </div>
              <div>
                <span v-for='(item,idx) in selectedTagList'>{{item.name}}<template v-if="idx + 1< selectedTagList.length">、</template></span>（合计{{email.expectNum}}人）
              </div>
              <el-button  class='send-detail default-button' @click='sendDetail = true' v-if="email.status=='SEND'">发送详情</el-button>
            </template>
            <template v-else>
              暂未选择
            </template>
            <!-- <div style="border: solid 1px #e5e5e5;">
              <div>邮件1</div>
              <div>邮件2</div>
              <div>邮件3</div>
              <div>邮件4</div>
              <div>邮件5</div>
              <div>邮件6</div>
            </div> -->
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
          <div class="from-content">{{email.sendTime | isEmpty('-')}}</div>
        </div>
        <div class="from-row">
          <!--<div class="from-title">邮件内容：</div>-->
          <!--<div class="from-content">-->
          <div class="email-info-box"
               v-html="email.content"></div>
          <!--</div>-->
        </div>
        <div class="step-btns" v-if="email.status!=='SEND'">
          <!--<button class="primary-button fr" @click="prePage">返回上级</button>-->
          <button class="default-button margin-fl"
                  @click="editEmail">编辑邮件</button>
          <button class="primary-button"
                  @click="sendEmail">立即发送</button>
        </div>
      </div>
    </div>
    <transition name='fade' mode='out-in' v-if="sendDetail">
      <com-detail _type="EMAIL"  @handleClick="handleClick"></com-detail>
    </transition>
  </div>
</template>

<script>
import userManage from 'src/api/userManage-service'
// import noticeService from 'src/api/notice-service'
import activityService from 'src/api/activity-service'
import { mapState, mapMutations } from 'vuex'
import * as types from '../../../store/mutation-types'
import comDetail from 'src/pages/live-mager/promote/com-detail'
import EventBus from 'src/utils/eventBus'

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
      },
      selectedGroupList: [],
      selectedTagList: [],
      groupList: [],
      tagList: [],
      sendDetail: false
    }
  },
  components: {
    comDetail
  },
  computed: mapState('liveMager', {
    emailInfo: state => state.emailInfo
  }),
  watch: {
    emailInfo: {
      handler (newVal) {
        this.email = { ...newVal }
      },
      immediate: true
    }
  },
  created () {
    // 如果vuex可以取到值就return
    // if (this.email.emailInviteId) {
    //   debugger
    //   const listStr = this.emailInfo.groupIds ? this.emailInfo.groupIds : ''
    //   const tagStr = this.emailInfo.tagIds ? this.emailInfo.tagIds : ''
    //   this.queryTagList().then(this.queryGroupList()).then(() => {
    //     setTimeout(() => {
    //       this.reArrangeList(listStr.split(','), tagStr.split(','))
    //     }, 500)
    //   })
    //   return false
    // }
    // debugger
    // 如果vuex不能取到值就查询接口
    const queryId = this.$route.params.id
    if (!queryId) {
      this.$router.go(-1)
      return
    }
    this.email.emailInviteId = this.$route.query.email
    this.queryTagList().then(this.queryGroupList()).then(this.queryEmailInfo())
  },
  mounted () {
    EventBus.$emit('breads', [{
      title: '活动管理'
    }, {
      title: '活动列表',
      url: '/liveMager/list'
    }, {
      title: '活动详情',
      url: `/liveMager/detail/${this.$route.params.id}`
    }, {
      title: '邮件邀约',
      url: `/liveMager/email/${this.$route.params.id}`
    }, {
      title: '预览'
    }])
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
        setTimeout(() => {
          this.reArrangeList(res.data.groupIds ? res.data.groupIds.split(',') : [], res.data.tagIds ? res.data.tagIds.split(',') : [])
        }, 500)
        this.storeEmailInfo(this.email)
      })
    },
    sendEmail () {
      if (this.checkEmail()) {
        this.$messageBox({
          header: '提示',
          content: '是否立即发送此邮件？',
          confirmText: '确定',
          cancelText: '取消',
          handleClick: (e) => {
            if (e.action === 'confirm') {
              this.$post(activityService.POST_SEND_EMAIL_INFO, {
                emailInviteId: this.email.emailInviteId
              }).then(() => {
                console.log('邮件发送成功')
              })
            }
          }
        })
      } else {
        this.$messageBox({
          header: '提示',
          content: '邮件未编辑完成，无法发送邮件！',
          confirmText: '立即编辑',
          cancelText: '取消',
          handleClick: (e) => {
            if (e.action === 'confirm') {
              this.editEmail()
            }
          }
        })
      }
    },
    checkEmail () {
      if (!this.email.content) return false
      if (!(this.email.groupIds || this.email.tagIds)) return false
      if (!this.email.senderName) return false
      if (this.email.status === 'AWAIT' && !this.email.planTime) return false
      return true
    },
    editEmail () {
      this.$router.push(`/liveMager/emailEditOne/${this.email.activityId}?email=${this.email.emailInviteId}`)
    },
    prePage () {
      this.$router.go(-1)
    },
    // 查询群组
    async queryGroupList (keyword) {
      await this.$get(userManage.GET_GROUP_LIST).then((res) => {
        let temArray = []
        res.data.list.forEach((item) => {
          temArray.push({
            id: item.group_id,
            name: item.title,
            count: item.user_count,
            isChecked: false
          })
        })
        this.groupList = temArray
      })
    },
    /* 查询标签 */
    async queryTagList () {
      await this.$get(userManage.GET_TAG_LIST).then((res) => {
        let temArray = []
        res.data.list.forEach(item => {
          temArray.push({
            name: item.tag_name,
            id: item.tag_id,
            count: item.user_count,
            isChecked: false
          })
        })
        this.tagList = temArray
      })
    },
    reArrangeList (group, tag) {
      this.email.expectNum = 0
      this.groupList.forEach((item, idx) => {
        group.forEach((ele, i) => {
          if (ele * 1 === item.id * 1) {
            // this.groupList[idx].isChecked = true
            this.email.expectNum = this.email.expectNum + parseInt(item.count)
            this.selectedGroupList.push({
              count: item.count,
              id: item.id,
              isChecked: true,
              name: item.name
            })
          }
        })
      })
      this.tagList.forEach((item, idx) => {
        tag.forEach((ele, i) => {
          if (ele * 1 === item.id * 1) {
            this.email.expectNum = this.email.expectNum + parseInt(item.count)
            // this.tagList[idx].isChecked = true
            this.selectedTagList.push({
              count: item.count,
              id: item.id,
              isChecked: true,
              name: item.name
            })
          }
        })
      })
      console.log(this.selectedGroupList)
      console.log(this.selectedTagList)
    },
    /* 点击取消 */
    handleClick (e) {
      if (e.action === 'cancel') {
        this.sendDetail = false
      }
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
  .receiver {
    position: relative;
    width: 710px;
    flex: inherit !important;
    .el-button {
      // position: absolute;
      // top: -10px;
      // margin-left: 10px;
    }
    div {
      display: inline-block;
      span {
        display: inline-block;
        padding: 0 5px 10px 5px;
        padding-bottom: 0px;
        margin-bottom: 10px;
      }
    }
  }
}
</style>
