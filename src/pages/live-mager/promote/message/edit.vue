<template>
  <div class="content"
       v-ComLoading="loading"
       com-loading-text="拼命加载中">
    <div class="edit-msg-page live-mager"
         @keydown="canPass = false">
      <div class="live-title">
        <span class="title" v-if="inviteId">编辑短信邀约</span>
        <span class="title" v-else>创建短信邀约</span>
        <com-back :class='"back-btn"'></com-back>
      </div>
      <div class='mager-box border-box'>
        <div class="from-box">
          <div class="from-row">
            <div class="from-title"><i class="star">*</i>邀约标题：</div>
            <div class="from-content">
              <com-input :value.sync="titleValue"
                         placeholder="请输入标题"
                         :max-length="15"
                         :error-tips='errorData.titleError'
                         @focus="errorData.titleError=''"></com-input>
            </div>
          </div>
          <div class="from-row">
            <div class="from-title"><i class="star">*</i>接收人：</div>
            <div class="from-content">
              <el-button class='default-button select-receiver'
                         @click='chooseReceiver'>选择收信人</el-button>
                         <span class="send-span">发送限额：{{sendBalance}}/{{countBalance}}</span>
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
              <div class="error-msg-bottom" v-if="errorData.sendPersonError">{{errorData.sendPersonError}}</div>
            </div>
          </div>
          <div class="from-row">
            <div class="from-title"><i class="star">*</i>短信内容：</div>
            <div class="from-content"
                 @click="errorData.msgError=''">
              <com-input type="textarea"
                         class="msg-content"
                         :value.sync="msgContent"
                         placeholder="请输入短信内容"
                         :max-length="100"
                         :error-tips='errorData.msgError'></com-input>
                         <div class="href-box" :class="{'siteClose':!siteOpen}">
                          <span class='add-href' @click='addHref(`https:${PC_HOST}site/${activitId}?refer=2`)'>添加活动官网链接</span><span class='add-href' @click='addHref(`https:${PC_HOST}subscribe/${activitId}?refer=2`)'>添加活动引导页链接</span>
                         </div>
            </div>
          </div>
          <div class="from-row">
            <div class="from-title"><i class="star">*</i>短信签名：</div>
            <div class="from-content">
              <com-input :value.sync="msgTag"
                         placeholder="请输入签名"
                         :max-length="10"
                         :error-tips="errorData.tagError"
                         @focus="errorData.tagError=''"></com-input>
            </div>
          </div>
          <div class="from-row">
            <div class="from-title"><i class="star">*</i>发送时间：</div>
            <div class="from-content">
              <template>
                <el-radio v-model="sendSetting"
                          label="SEND">立即发送</el-radio>
                <el-radio v-model="sendSetting"
                          label="AWAIT">定时发送</el-radio>
              </template>
              <!-- <div class="from-title">发送设置：</div>
            <div class="from-content">
              <el-select v-model="sendSetting" placeholder="请选择">
                <el-option v-for="item in sendOptions" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </div> -->
            </div>
          </div>
          <div class="from-row"
               v-if='pickDate'>
            <div class="from-title"><i class="star">*</i>选择时间：</div>
            <div class="from-content">
              <el-date-picker v-model="date"
                              :editable="false"
                              format='yyyy-MM-dd HH:mm'
                              value-format="yyyy-MM-dd HH:mm"
                              type="datetime"
                              placeholder="选择日期时间"
                              :default-value="defaultValue"
                              :picker-options="pickerOptions"
                              @focus='dateFocus()'>
              </el-date-picker>
              <div class="error-msg-bottom" v-if="errorData.awaitTimeError">{{errorData.awaitTimeError}}</div>
            </div>
          </div>
          <!-- <div class="from-row">
            <div class="from-title"></div>
            <div class="from-content btn-group">
              <el-button class='default-button' @click="test">测试发送</el-button>
              <el-button class='primary-button' @click="save">保存</el-button>
            </div>
          </div> -->
          <!-- 模拟手机预览 -->
          <com-phone :date='date'
                     :wxContent='msgContent'
                     :msgTag='msgTag'
                     :isWx='false'></com-phone>
        </div>
        <div class="btn-group">
          <el-button class='default-button'
                     @click="test">测试发送</el-button>
          <el-button class='primary-button'
                     @click="save" :disabled='saveDisabled' v-html="sendSetting === 'SEND'? '立即发送' : '确定'"></el-button>
        </div>
      </div>
      <!-- 选择收件人 -->
      <choose-group :webinarType="'SMS'" :show="selectPersonShow" :groupList="groupList" :tagList='tagList' :checkedData="checkedData" @okSelectList="okSelectList" @close="close" @searchEnter="searchEnter" @selectedGroupListfn="selectedGroupListfn" @selectedTagListfn="selectedTagListfn" @totalCount="totalCount"></choose-group>
    </div>
    <!-- 测试发送弹窗 -->
    <com-test v-if='testModal'
              :msgContent='msgContent'
              @closeTest='closeTest'
              :msgTag="msgTag"
              :type="'SMS'"></com-test>
  </div>
</template>

<script>
import { formatDate } from 'src/assets/js/date'
import brandService from 'src/api/brand-service'
import userManage from 'src/api/userManage-service'
import noticeService from 'src/api/notice-service'
import activityService from 'src/api/activity-service'
import chooseGroup from '../com-chooseGroup'
import comTest from '../com-test'
import comPhone from '../com-phone'
import EventBus from 'src/utils/eventBus'
export default {
  data () {
    return {
      inviteId: this.$route.query.id, // 签名列表传过来的id
      activitId: this.$route.params.id,
      webinarName: '活动名字啊啊啊',
      testModal: false,
      tabValue: 1,
      searchTitle: '',
      titleValue: '',
      groupIdx: 0,
      tagIdx: 0,
      PC_HOST: process.env.PC_HOST,
      tplOptions: [{
        value: 1,
        label: '活动邀请'
      }, {
        value: 2,
        label: '活动推荐'
      }],
      sendOptions: [{
        value: 'AWAIT',
        label: '定时发送'
      }, {
        value: 'SEND',
        label: '立即发送'
      }, {
        value: 'DRAFT',
        label: '暂存为草稿'
      }],
      // tplValue: '',
      sendSetting: 'SEND',
      pickDate: false,
      msgTag: '',
      msgContent: '',
      date: '',
      pickerOptions: {
        disabledDate (time) {
          return time.getTime() < Date.now() - 8.64e7
        }
      },
      defaultValue: formatDate(new Date(new Date().getTime() + 1800000), 'yyyy-MM-dd hh:mm'),
      loading: false,
      searchPerson: '',
      groupList: [],
      tagList: [],
      selectedTagList: [],
      selectedGroupList: [],
      selectedGroupListStr: '',
      selectedTagListStr: '',
      selectPersonShow: false,
      checkedData: [],
      errorData: {
        titleError: '',
        msgError: '',
        tagError: '',
        sendPersonError: '',
        awaitTimeError: ''
      },
      isValided: false,
      canPass: true,
      saveDisabled: false,
      groupIdStr: '',
      tagIdStr: '',
      changed: 0,
      countBalance: 0,
      sendBalance: 0,
      clicked: false,
      siteOpen: false
    }
  },
  created () {
    this.getLimit()
    this.queryGroupList()
    this.queryTagList()
    this.initSite()
    EventBus.$emit('breads', [{
      title: '活动管理'
    }, {
      title: '活动列表',
      url: '/liveMager/list'
    }, {
      title: '活动详情',
      url: `/liveMager/detail/${this.activitId}`
    }, {
      title: '短信邀约',
      url: `/liveMager/promote/msg/list/${this.activitId}`
    }, {
      title: this.inviteId ? '编辑短信邀约' : '新建短信邀约'
    }])
    if (this.inviteId) {
      this.$get(noticeService.GET_QUERY_MSG, {
        inviteId: this.inviteId
      }).then((res) => {
        this.titleValue = res.data.title
        this.sendSetting = res.data.status
        this.date = res.data.sendTime ? res.data.sendTime.toString() : res.data.planTime.toString()
        this.msgContent = res.data.desc
        this.msgTag = res.data.signature
        this.sendBalance = res.data.expectNum
        setTimeout(() => {
          this.reArrangeList(res.data.groupId.split(','), res.data.tagId.split(','))
        }, 500)
      })
    }
  },
  methods: {
    closeModal (e) {
      if (e.target.className === 'modal-cover') {
        this.groupIdx = 0
        this.tagIdx = 0
      }
    },
    chooseGroup (idx) {
      this.groupIdx = idx
    },
    chooseTag (idx) {
      this.tagIdx = idx
    },
    save () {
      this.saveDisabled = true
      setTimeout((res) => {
        this.saveDisabled = false
      }, 3000)
      this.canPass = true
      let data = {
        change: this.changed,
        inviteId: this.inviteId,
        activityId: this.$route.params.id,
        title: this.titleValue,
        groupId: this.groupIdStr, // 分组id
        tagId: this.tagIdStr,
        status: this.sendSetting.toLowerCase(),
        planTime: this.date,
        desc: this.msgContent,
        signature: this.msgTag
      }
      if (!this.formValid()) {
        this.saveDisabled = false
        return false
      }
      // 更新
      this.$config({handlers: true}).$post(noticeService.POST_SAVE_MSG, data).then((res) => {
        // console.log(res)
        this.$toast({
          content: this.sendSetting === 'SEND' ? '发送成功' : '保存成功'
        })
        // 跳转到列表页面
        this.canPass = true
        this.$router.push({ name: 'promoteMsg', params: { id: this.activitId } })
      }).catch((res) => {
        this.$messageBox({
          header: '提示',
          content: res.msg,
          autoClose: 10,
          confirmText: '知道了'
        })
      })
    },
    test () {
      if (!this.formValid()) {
        return false
      }
      this.$nextTick((res) => {
        if (this.isValided) {
          this.testModal = true
        }
      })
    },
    closeTest () {
      this.testModal = false
    },
    /* enter搜索 */
    searchEnter (key, flag) {
      if (flag === 'group') {
        this.queryGroupList(key)
      } else {
        this.queryTagList(key)
      }
    },
    /* 点击确定 */
    okSelectList () {
      this.changed = 1
      this.selectPersonShow = false
    },
    /* 点击取消 */
    close () {
      this.selectPersonShow = false
    },
    /* 删除分组 */
    delGroupPerson (idx) {
      const delIdx = this.groupList.indexOf(this.selectedGroupList[idx])
      this.groupList[delIdx].isChecked = false
      this.changed = 1
    },
    // 标签
    delTagPerson (idx) {
      const delIdx = this.tagList.indexOf(this.selectedTagList[idx])
      this.tagList[delIdx].isChecked = false
      this.changed = 1
    },
    // 查询群组
    queryGroupList (keyword) {
      this.$get(userManage.GET_GROUP_LIST, {
        keyword: keyword,
        not_empty_field: 'phone'
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
      })
    },
    /* 查询标签 */
    queryTagList (keyword) {
      this.$get(userManage.GET_TAG_LIST, {
        keyword: keyword
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
      })
    },
    selectedGroupListfn (arr, str, idStr) {
      this.selectedGroupListStr = str.substring(0, str.length - 1)
      this.selectedGroupList = arr
      this.groupIdStr = idStr
      this.errorData.sendPersonError = ''
    },
    selectedTagListfn (arr, str, idStr) {
      this.selectedTagListStr = str.substring(0, str.length - 1)
      this.selectedTagList = arr
      this.tagIdStr = idStr
    },
    reArrangeList (group, tag) {
      this.groupList.forEach((item, idx) => {
        group.forEach((ele, i) => {
          if (ele * 1 === item.id) {
            this.groupList[idx].isChecked = true
            this.selectedGroupList.push({
              count: 0,
              id: item.id,
              isChecked: true,
              name: item.name
            })
          }
        })
      })
      this.tagList.forEach((item, idx) => {
        tag.forEach((ele, i) => {
          if (ele * 1 === item.id) {
            this.tagList[idx].isChecked = true
            this.selectedTagList.push({
              id: item.id,
              isChecked: true,
              name: item.name
            })
          }
        })
      })
    },
    // 获取限额
    getLimit () {
      this.$get(activityService.GET_SEND_LIMIT, {
        activityId: this.activitId,
        type: 'SMS'
      }).then((res) => {
        console.log(res)
        this.countBalance = res.data.balance
      })
    },
    totalCount (res) {
      if (this.clicked) {
        this.sendBalance = res
      }
    },
    chooseReceiver () {
      this.selectPersonShow = true
      this.clicked = true
    },
    /* 验证 */
    formValid () {
      this.errorData.titleError = this.titleValue.length ? '' : '请输入通知标题'
      this.errorData.msgError = this.msgContent.length ? '' : '请输入短信内容'
      this.errorData.tagError = this.msgTag.length ? '' : '请输入短信标签'
      this.errorData.sendPersonError = this.groupIdStr ? '' : '请选择收信人'
      if (this.sendSetting.toLowerCase() === 'await' && !this.date) {
        this.errorData.awaitTimeError = '请选择定时发送时间'
      }
      if (this.errorData.sendPersonError) {
        this.isValided = false
        return false
      } else if (this.sendSetting.toLowerCase() === 'await' && !this.date && this.errorData.awaitTimeError) {
        this.isValided = false
        return false
      } else if (this.titleValue.length && this.msgTag.length && this.msgContent.length) {
        this.isValided = true
        return true
      } else {
        this.isValided = false
        return false
      }
    },
    addHref (url) {
      this.$post(noticeService.GET_SHOR_URL, {
        url: url
      }).then((res) => {
        console.log(res)
        this.msgContent += ' ' + res.data.shortUrl + ' '
      })
    },
    initSite () {
      this.$get(brandService.GET_SITE_DATA, {
        activityId: this.$route.params.id
      }).then(res => {
        if (res.data.enabled === 'Y') {
          this.siteOpen = true
        } else {
          this.siteOpen = false
        }
      })
    },
    dateFocus () {
      this.date = this.defaultValue
      this.errorData.awaitTimeError = ''
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
  },
  watch: {
    sendSetting: {
      handler (newValue) {
        this.canPass = true
        if (newValue === 'AWAIT') {
          this.pickDate = true
        } else {
          this.pickDate = false
          this.errorData.awaitTimeError = ''
        }
      }
    }
    // groupList: {
    //   handler (newArray) {
    //     let temArray = []
    //     let listStr = ''
    //     newArray.forEach((item, idx) => {
    //       if (!item.isChecked) return
    //       temArray.push(item)
    //       this.selectedCount += item.count
    //       listStr += `${item.name} (${item.count}人）、`
    //     })
    //     this.selectedGroupListStr = listStr.substring(0, listStr.length - 1)
    //     this.selectedGroupList = temArray
    //   },
    //   deep: true
    // },
    // tagList: {
    //   handler (newArray) {
    //     let temArray = []
    //     let listStr = ''
    //     newArray.forEach((item, idx) => {
    //       if (!item.isChecked) return
    //       temArray.push(item)
    //       this.selectedCount += item.count
    //       listStr += `${item.name}、`
    //     })
    //     this.selectedTagListStr = listStr.substring(0, listStr.length - 1)
    //     this.selectedTagList = temArray
    //   },
    //   deep: true
    // }
  },
  components: {
    comTest,
    comPhone,
    chooseGroup
  }
}
</script>


<style lang="scss" scoped src="../../css/live.scss">
</style>
<style lang="scss">
.edit-msg-page.live-mager .live-title {
  border-bottom: none;
}
.apply-page .el-select .el-input__inner {
  border: 1px solid #e2d2d2;
}
.el-input.is-disabled .el-input__inner {
  background-color: #fff;
  color: #555;
}

.spe.moblie .el-select .el-input__inner {
  padding-left: 25px;
}
.edit-msg-page.live-mager .from-title {
  line-height: 40px;
}
</style>
<style lang='scss' scoped>
@import '~assets/css/mixin.scss';

.edit-msg-page /deep/ {
  .com-input .limit.area {
    bottom: 37px;
    right: 7px;
  }
  .error-msg-bottom {
    position: absolute;
    bottom: -16px;
    left: 10px;
    color: #fc5659;
  }
  .href-box {
    position: absolute;
    bottom: 4px;
    left: 1px;
  }
  .add-href {
    display: inline-block;
    width: 219px;
    height: 30px;
    line-height: 30px;
    cursor: pointer;
    background: rgba(249, 249, 249, 1);
    border-radius: 0px 0px 4px 4px;
    border: 1px solid rgba(226, 226, 226, 1);
    border-right: none;
    border-bottom: none;
    &:nth-of-type(1) {
      border-left: none;
    }
    text-align: center;
    &:hover {
      color: #4b5afe;
    }
  }
  .href-box.siteClose {
    .add-href {
      &:nth-of-type(1) {
        display: none;
      }
      &:nth-of-type(2) {
        width: 438px;
        border-left: none;
      }
    }
  }
  // min-height: 730px;
  position: relative;
  .select-receiver {
    padding: 0;
    margin: 3px 0;
    margin-right: 10px;
    width: 100px;
    height: 34px;
    line-height: 34px;
    border-radius: 20px;
  }
  .el-radio {
    padding: 12px 0;
    color: $color-font;
  }
  .from-title {
    color: $color-font-sub;
  }
  .btn-group {
    padding: 0;
    button {
      width: 140px;
      height: 40px;
      line-height: 40px;
    }
  }
  .mager-box {
    min-height: 730px;
  }
  .form-box {
    position: relative;
  }
  .tips-box {
    position: relative;
    display: inline-block;
    margin-left: 12px;
  }
  .tips {
    display: inline-block;
    width: 20px;
    height: 20px;
    background: url('~assets/image/quesmark.svg') no-repeat center;
    background-size: contain;
    position: relative;
    top: 5px;
  }
  .tips-txt {
    position: absolute;
    padding: 14px;
    color: #fff;
    width: 282px;
    background: rgba(34, 34, 34, 0.8);
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.15);
    border-radius: 4px;
    line-height: 22px;
    top: -38px;
    right: -290px;
    z-index: 9;
  }
  .group-list {
    li {
      padding: 0 10px;
      width: 300px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      border: 1px solid #ccc;
      border-radius: 5px;
      margin: 5px 0px;
      span {
        cursor: pointer;
        float: right;
      }
    }
  }
  .btn-group {
    display: block;
    margin: 0 auto;
    width: 295px;
    button {
      padding: 0px;
      width: 140px;
      height: 40px;
      line-height: 40px;
    }
  }

  .edit-groups {
    margin-top: 15px;
    width: 500px;
    &.sec {
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

.modal-cover {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba($color: #000000, $alpha: 0.5);
  z-index: 9;
}
.msg-content,
.msg-title {
  width: 440px;
}
.msg-content {
  height: 180px;
}
.modal-box {
  width: 700px;
  height: 500px;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -250px;
  margin-left: -350px;
  background: white;
  border-radius: 10px;
  border: 1px solid #666;
  padding: 30px;
  text-align: center;
  .top {
    span {
      float: left;
    }
    span.search {
      float: right;
    }
  }
  h4 {
    height: 40px;
    line-height: 40px;
    text-align: left;
    border-bottom: 1px solid #ccc;
    .close {
      float: right;
    }
  }
  .content-box {
    padding: 10px 0px;
  }
  .btm {
    span {
      float: left;
    }
    button {
      float: right;
    }
    i {
      display: inline-block;
      padding: 5px 10px;
      border: 1px solid #ccc;
      margin: 0 3px;
    }
  }
}
.modal-box .list {
  & > li {
    height: 50px;
    line-height: 50px;
    text-align: left;
    .choose {
      cursor: pointer;
      float: right;
    }
  }
}
.modal-box .right {
  width: 500px;
}
.qrcode {
  display: block;
  margin: 20px auto;
  width: 200px;
  height: 200px;
  border: 1px solid #ccc;
}
.live-mager .mager-box .from-box {
  margin: 40px 0 0 0;
  min-height: 600px;
}
</style>


