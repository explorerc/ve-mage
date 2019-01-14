<template>
  <div class="edit-step-box" @keydown="canPass = false">
    <header class="email-header">
      <div class="back-btn"
           @click="goBack">
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
              <com-input placeholder="输入标题，可结合变量使用"
                         class="input-email"
                         :error-tips="errorMsg.title"
                         :value.sync="email.title"
                         :max-length="30"></com-input>
            </div>
          </div>
          <div class="from-row">
            <div class="from-title"><i class="star">*</i>发件人：</div>
            <div class="from-content">
              <com-input placeholder="输入发件人名称"
                         class="input-email"
                         :error-tips="errorMsg.senderName"
                         :value.sync="email.senderName"
                         :max-length="15"></com-input>
            </div>
          </div>
          <div class="from-row">
            <div class="from-title"><i class="star">*</i>收件人：</div>
            <div class="from-content">
              <div :class="{error:errorMsg.groupIds}">
                <button class="default-button fl"
                        @click="chooseGroup">选择分组
                </button>
                <span class="send-span">发送限额：{{totalCountStr ? totalCountStr : 0}}/{{countBalance}}</span>
                <ve-msg-tips :class='"msg-tips"' tip-type="html"
                             tip="1.每天最多可发送5000封邮件 <br/> 2.发送限额：当前已选中人数/剩余可发送数量<br/>3.在邮件发送前，如果分组内人员发生变化，收件人也会随之改变"></ve-msg-tips>
                <span class="error-msg"
                      v-if="errorMsg.groupIds">{{errorMsg.groupIds}}</span>
              </div>
              <!-- 分组 -->
              <transition-group name="list"
                                class="edit-groups"
                                tag="div"
                                v-if="selectedGroupList.length">
                <span class="list-item"
                      v-for="(person,idx) in selectedGroupList"
                      :key="person.id">{{person.name}}
                  <i class="iconfont icon-shanchu"
                     @click="delGroupPerson(idx)"></i>
                </span>
              </transition-group>
              <!-- 标签 -->
              <transition-group name="list"
                                class="edit-groups sec"
                                tag="div"
                                v-if="selectedTagList.length">
                <span class="list-item"
                      v-for="(tag,idx) in selectedTagList"
                      :key="tag.id">{{tag.name}}
                  <i class="iconfont icon-shanchu"
                     @click="delTagPerson(idx)"></i>
                </span>
              </transition-group>
            </div>
          </div>
          <div class="from-row">
            <div class="from-title"><i class="star">*</i>发送时间：</div>
            <div :class="{'from-content':true,error:errorMsg.planTime}">
              <div class="send-type-box">
                <el-radio v-model="sendType"
                          label="AUTO">立即发送
                </el-radio>
                <el-radio v-model="sendType"
                          label="ONCE">定时发送
                </el-radio>
              </div>
              <el-date-picker v-if="sendType=='ONCE'"
                              v-model="email.planTime"
                              type="datetime"
                              placeholder="选择日期时间"
                              align="center"
                              :default-value="defaultValue"
                              :picker-options="pickerOptions"
                              format="yyyy-MM-dd HH:mm"
                              value-format="yyyy-MM-dd HH:mm"
                              @focus='dateFocus()'>
              </el-date-picker>
              <span class="error-msg"
                    v-if="errorMsg.planTime">{{errorMsg.planTime}}</span>
            </div>
          </div>
        </div>
      </div>
      <!-- 选择收件人 -->
      <choose-group :webinarType="'EMAIL'" :show="selectPersonShow" :groupList="groupList" :tagList='tagList'
                    :checkedData="checkedData" @okSelectList="okSelectList" @close="close" @searchEnter="searchEnter"
                    @selectedGroupListfn="selectedGroupListfn" @selectedTagListfn="selectedTagListfn"
                    @totalCount="totalCount"></choose-group>
    </div>
    <div class="email-bottom">
      <button :class="{'primary-button':true, fr:true,disabled:disabledBtn}"
              @click="send" v-html="sendType === 'AUTO'? '立即发送':'确定'">
      </button>
      <button class="default-button margin-fl fr"
              @click="saveEmail">保存草稿
      </button>
      <button class="default-button margin-fl fr" @click="goBack">上一步</button>
    </div>
  </div>
</template>

<script>
  import userManage from 'src/api/userManage-service'
  // import noticeService from 'src/api/notice-service'
  import VeMsgTips from 'src/components/ve-msg-tips'
  import chooseGroup from '../promote/com-chooseGroup'
  import activityService from 'src/api/activity-service'
  import {mapState, mapMutations} from 'vuex'
  import * as types from '../../../store/mutation-types'

  export default {
    name: 'edit-step-two',
    components: {VeMsgTips, chooseGroup},
    data () {
      return {
        outValue: '',
        isTimer: true,
        selectPersonShow: false,
        sendType: 'AUTO',
        searchPerson: '',
        personList: [],
        selectedPersonList: [],
        selectedPersonListStr: '',
        selectedCount: 0,
        disabledBtn: false,
        canPass: true,
        errorMsg: {
          title: '',
          content: '',
          desc: '',
          senderName: '',
          planTime: '',
          groupIds: ''
        },
        defaultValue: new Date(),
        pickerOptions: {
          disabledDate (time) {
            return time.getTime() < Date.now() - 8.64e7
          }
        },
        email: {
          activityId: '',
          emailInviteId: '',
          emailTemplateId: 1,
          title: '',
          content: '',
          senderName: '',
          planTime: '',
          groupIds: '',
          tagIdStr: ''
        },
        PC_HOST: location.protocol + process.env.PC_HOST,
        groupList: [],
        tagList: [],
        checkedData: [],
        selectedGroupList: [],
        selectedTagList: [],
        selectedGroupListStr: '',
        selectedTagListStr: '',
        groupIdStr: '',
        tagIdStr: '',
        totalCountStr: '',
        countBalance: 0,
        clicked: false
      }
    },
    computed: mapState('liveMager', {
      emailInfo: state => state.emailInfo
    }),
    watch: {
      emailInfo: {
        handler (newVal) {
          this.email = {...this.email, ...newVal}
          this.sendType = this.email.planTime ? 'ONCE' : 'AUTO'
        },
        immediate: true
      },
      email: {
        handler () {
          this.clearError()
        },
        deep: true
      },
      sendType (newVal) {
        this.errorMsg.planTime = ''
        this.email.planTime = ''
        if (newVal === 'ONCE') {
          this.defaultValue = new Date(new Date().getTime() + 30 * 60 * 1000)
        }
      }
    },
    created () {
      const emailId = this.$route.query.email
      if (!this.email.content) {
        if (!emailId) {
          this.$router.go(-1)
          return
        } else {
          this.queryEmailInfo(emailId)
        }
      } else {
        this.totalCountStr = this.emailInfo.expectNum
      }
      this.email.activityId = this.$route.params.id
      this.getLimit()
      this.initData()
      // this.queryTagList()
      // this.$nextTick((res) => {
      //   this.queryGroupList()
      // })
      // this.$nextTick((res) => {
      //   this.reArrangeList(this.emailInfo.groupIds ? this.emailInfo.groupIds.split(',') : [], this.emailInfo.tagIds ? this.emailInfo.tagIds.split(',') : [])
      // })
    },
    methods: {
      ...mapMutations('liveMager', {
        storeEmailInfo: types.EMAIL_INFO
      }),
      async initData () {
        await this.queryTagList()
        await this.queryGroupList()
        await this.reArrangeList(this.emailInfo.groupIds ? this.emailInfo.groupIds.split(',') : [], this.emailInfo.tagIds ? this.emailInfo.tagIds.split(',') : [])
      },
      chooseGroup () {
        this.selectPersonShow = true
        this.clicked = true
      },
      /* 清除错误信息 */
      clearError () {
        if (this.email.title) {
          this.errorMsg.title = ''
        } else {
          return
        }
        if (this.email.planTime) {
          this.errorMsg.planTime = ''
        } else {
          return
        }
        if (this.email.senderName) {
          this.errorMsg.senderName = ''
        } else {
          return
        }
        if (this.email.groupIds) {
          this.errorMsg.groupIds = ''
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
      /* 查询邮件详情 */
      queryEmailInfo (emailId) {
        // 如果不是编辑页面就return
        if (!emailId) return
        this.$get(activityService.GET_EMAIL_INFO, {
          emailInviteId: emailId
        }).then((res) => {
          this.email = res.data
          this.storeEmailInfo(this.email)
          this.totalCountStr = this.emailInfo.expectNum
        })
      },
      /* enter搜索 */
      // searchEnter () {
      //   this.queryPersonList()
      // },
      /* 点击确定 */
      okSelectList () {
        this.selectPersonShow = false
        this.email.change = 1
        if (this.email.groupIds) {
          this.errorMsg.groupIds = ''
        }
      },
      /* 点击取消 */
      handleSelectPerson (e) {
        if (e.action === 'cancel') {
          this.selectPersonShow = false
        }
      },
      saveEmail () {
        if (this.totalCountStr > this.countBalance) {
          this.$toast({
            content: '收件人数量超出限额'
          })
          return false
        }
        this.canPass = true
        this.email.content = this.email.content.replace('$$activity$$', `${this.PC_HOST}watch/${this.email.activityId}`)
        this.$post(activityService.POST_SAVE_EMAIL_INFO, this.email).then((res) => {
          // this.email = {...this.email, ...res.data}
          // this.storeEmailInfo(this.email)
          // this.$router.replace(`/liveMager/emailEditTwo/${this.email.activityId}?email=${this.email.emailInviteId}`)
          // this.$toast({
          //   content: '保存草稿成功',
          //   position: 'center'
          // })
          this.$router.push(`/liveMager/email/${this.email.activityId}`)
        })
      },
      sendEmail () {
        this.canPass = true
        if (this.isTimer && !this.email.planTime) {
          this.errorMsg.planTime = '定时时间不能为空'
          this.disabledBtn = false
          return
        }
        if (!this.checkParams(this.isTimer)) {
          this.disabledBtn = false
          return
        }
        this.email.content = this.email.content.replace('$$activity$$', `${this.PC_HOST}watch/${this.email.activityId}`)
        if (this.isTimer) { // 发送定时邮件
          this.$config({handlers: true}).$post(activityService.POST_SEND_TIMER_EMAIL_INFO, this.email).then((res) => {
            this.$router.push(`/liveMager/email/${this.email.activityId}`)
            this.disabledBtn = false
          }).catch((e) => {
            let st = setTimeout(() => {
              clearTimeout(st)
              this.disabledBtn = false
            }, 2000)
          })
        } else { // 保存并发送
          this.$post(activityService.POST_SAVE_SEND_EMAIL, this.email).then((res) => {
            this.$router.push(`/liveMager/email/${this.email.activityId}`)
            this.disabledBtn = false
          })
        }
      },
      send () {
        if (this.totalCountStr > this.countBalance) {
          this.$toast({
            content: '收件人数量超出限额'
          })
          return false
        }
        this.canPass = true
        this.disabledBtn = true
        this.$nextTick(() => {
          if (this.sendType === 'AUTO') {
            this.isTimer = false
            this.immediatelySend()
          } else if (this.sendType === 'ONCE') {
            this.isTimer = true
            this.sendEmail()
          }
        })
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
        } else if (!this.email.groupIds && !this.email.tagIds) {
          this.errorMsg.groupIds = '请选择收件人'
          return false
        }
        return true
      },
      goBack () {
        this.storeEmailInfo(this.email)
        this.$router.go(-1)
      },
      /* enter搜索 */
      searchEnter (key, flag) {
        if (flag === 'group') {
          this.queryGroupList(key)
        } else {
          this.queryTagList(key)
        }
      },
      /* 点击取消 */
      close () {
        this.selectPersonShow = false
      },
      /* 删除分组 */
      delGroupPerson (idx) {
        const delIdx = this.groupList.indexOf(this.selectedGroupList[idx])
        this.groupList[delIdx].isChecked = false
        this.email.change = 1
      },
      // 标签
      delTagPerson (idx) {
        const delIdx = this.tagList.indexOf(this.selectedTagList[idx])
        this.tagList[delIdx].isChecked = false
        this.email.change = 1
      },
      // 查询群组
      queryGroupList (keyword) {
        return this.$get(userManage.GET_GROUP_LIST, {
          keyword: keyword,
          not_empty_field: 'email'
        }).then((res) => {
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
          this.email.groupList = this.groupList
        })
      },
      /* 查询标签 */
      queryTagList (key) {
        return this.$get(userManage.GET_TAG_LIST, {
          keyword: key
        }).then((res) => {
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
          this.email.tagList = this.tagList
        })
      },
      selectedGroupListfn (arr, str, idStr) {
        this.selectedGroupListStr = str.substring(0, str.length - 1)
        this.selectedGroupList = arr
        this.email.groupIds = idStr // 分组id
      },
      selectedTagListfn (arr, str, idStr) {
        this.selectedTagListStr = str.substring(0, str.length - 1)
        this.selectedTagList = arr
        this.email.tagIds = idStr // 标签id
      },
      totalCount (res) {
        if (this.clicked) {
          this.totalCountStr = res
        }
      },
      reArrangeList (group, tag) {
        this.groupList.forEach((item, idx) => {
          group.forEach((ele, i) => {
            if (ele * 1 === item.id) {
              this.groupList[idx].isChecked = true
              this.selectedGroupList.push({
                count: item.count,
                id: item.id,
                isChecked: true,
                name: item.name
              })
            }
          })
        })
        this.email.selectedGroupList = this.selectedGroupList
        this.tagList.forEach((item, idx) => {
          tag.forEach((ele, i) => {
            if (ele * 1 === item.id) {
              this.tagList[idx].isChecked = true
              this.selectedTagList.push({
                count: item.count,
                id: item.id,
                isChecked: true,
                name: item.name
              })
            }
          })
        })
        this.email.selectedTagList = this.selectedTagList
      },
      // 获取限额
      getLimit () {
        this.$get(activityService.GET_SEND_LIMIT, {
          activityId: this.email.activityId,
          type: 'EMAIL'
        }).then((res) => {
          console.log(res)
          this.countBalance = res.data.balance
        })
      },
      dateFocus () {
        this.email.planTime = this.defaultValue
      }
    },
    /* 路由守卫，离开当前页面之前被调用 */
    beforeRouteLeave (to, from, next) {
      if (this.canPass) {
        next(true)
        return false
      }
      this.$messageBox({
        header: '提示',
        width: '400px',
        content: '是否放弃当前编辑？',
        cancelText: '否',
        confirmText: '是',
        handleClick: (e) => {
          if (e.action === 'confirm') {
            next(true)
          } else {
            next(false)
          }
        }
      })
    }
  }
</script>
<style lang="scss" scoped src="../css/live.scss"></style>
<style lang="scss" scoped>
.edit-step-box {
  .msg-tips {
    top: 4px;
  }
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
      width: 120px;
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
    margin-top: 30px;
    // width: 500px;
    display: inline-block;
    &:nth-of-type(1) {
      margin-top: 0px;
    }
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
