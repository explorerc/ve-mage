<template>
  <div class="content" v-ComLoading="loading" com-loading-text="拼命加载中">
    <div class="edit-wx-page live-mager" @mousedown="canPass = false">
      <div class="live-title">
        <span class="title">创建微信通知</span>
      </div>
      <div class='mager-box border-box'>
        <div class="from-box ">
          <div class="from-row">
            <div class="from-title"><i class="star">*</i>通知标题：</div>
            <div class="from-content">
              <com-input :value.sync="titleValue" placeholder="请输入标题" :max-length="15" class='msg-title' :error-tips="errorData.titleError" @focus="errorData.titleError=''"></com-input>
            </div>
          </div>
          <div class="from-row">
            <div class="from-title"><i class="star">*</i>微信内容：</div>
            <div class="from-content" @click="errorData.msgError=''">
              <com-input type="textarea" class="msg-content" :value.sync="wxContent" placeholder="请输入微信内容" :max-length="100" :error-tips="errorData.msgError" ></com-input>
            </div>
          </div>
          <div class="from-row" style='padding:4px 12px;'>
            <div class="from-title">收信人：</div>
            <div class="from-content">
              <el-button class='default-button select-receiver' @click='selectPersonShow=true'>选择收信人</el-button>
              <ve-tips tip="微信通知只能发送给关注该公众号或服务号的人群，已选收件人中没有关注微信的，将无法收到该通知。" :tipType="'html'"></ve-tips>
              <!-- 分组 -->
              <transition-group name="list"
                                class="edit-groups"
                                tag="div"
                                v-if="selectedGroupList.length">
                <span class="list-item"
                      v-for="(person,idx) in selectedGroupList"
                      :key="person.id">{{person.name}} ({{person.count}}人）
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
            <div class="from-content">
              <template>
                <el-radio v-model="sendSetting" label="SEND">立即发送</el-radio>
                <el-radio v-model="sendSetting" label="AWAIT">定时发送</el-radio>
              </template>
              <!-- <el-select v-model="sendValue" placeholder="请选择">
                <el-option v-for="item in sendOptions" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select> -->
            </div>
          </div>
          <div class="from-row" v-if='pickDate'>
            <div class="from-title">选择时间：</div>
            <div class="from-content">
              <el-date-picker v-model="date" :editable="false" format='yyyy-MM-dd HH:mm:ss' value-format="yyyy-MM-dd HH:mm:ss" type="datetime" placeholder="选择日期时间" :picker-options="pickerOptions">
              </el-date-picker>
            </div>
          </div>
          <!-- 模拟手机预览 -->
          <com-phone :titleValue='titleValue' :date='date' :wxContent='wxContent' :isWx="true"></com-phone>
        </div>
        <div class="btn-group">
          <el-button class='default-button' @click="testSend">测试发送</el-button>
          <el-button class='primary-button' @click="save" :disabled="saveDisabled">保存</el-button>
        </div>
      </div>
      <!-- 选择收件人 -->
      <choose-group :webinarType="'WECHAT'" :show="selectPersonShow" :groupList="groupList" :tagList='tagList' :checkedData="checkedData" @okSelectList="okSelectList" @close="close" @searchEnter="searchEnter" @selectedGroupListfn="selectedGroupListfn" @selectedTagListfn="selectedTagListfn"></choose-group>
      <!-- 测试发送弹窗 -->
      <com-test  :imgUrl="qrImgurl" v-if='testModal'  @closeTest='closeTest' :type="'Wechat'" :deliverd.sync='deliverd'></com-test>
    </div>
  </div>
</template>

<script>
import userManage from 'src/api/userManage-service'
import userService from 'src/api/user-service'
import chooseGroup from '../com-chooseGroup'
import ChatService from 'components/chat/ChatService.js'
import playbackService from 'src/api/playback-service'
import noticeService from 'src/api/notice-service'
import comTest from '../com-test'
import comPhone from '../com-phone'
import veTips from 'src/components/ve-msg-tips'
import ChatConfig from 'src/api/chat-config'
import { mapMutations, mapState } from 'vuex'
import * as types from 'src/store/mutation-types'
export default {
  data () {
    return {
      inviteId: this.$route.query.id, // 签名列表传过来的id
      activityId: this.$route.params.id,
      testModal: false,
      tabValue: 1,
      searchTitle: '',
      titleValue: '',
      groupIdx: 0,
      tagIdx: 0,
      tplOptions: [{
        value: 1,
        label: '活动邀请'
      }, {
        value: 2,
        label: '活动推荐'
      }],
      // sendOptions: [{
      //   value: 'AWAIT',
      //   label: '定时发送'
      // }, {
      //   value: 'SEND',
      //   label: '立即发送'
      // }, {
      //   value: 'DRAFT',
      //   label: '暂存为草稿'
      // }],
      // sendValue: '',
      sendSetting: 'SEND',
      wxContent: '',
      qrImgurl: '',
      pickDate: false,
      date: '',
      pickerOptions: {
        disabledDate (time) {
          return time.getTime() < Date.now() - 8.64e7
        }
      },
      loading: false,
      searchPerson: '',
      groupList: [],
      tagList: [],
      selectedGroupList: [],
      selectedTagList: [],
      selectedGroupListStr: '',
      selectedTagListStr: '',
      selectPersonShow: false,
      errorData: {
        titleError: '',
        msgError: '',
        tagError: ''
      },
      checkedData: [],
      isValided: false,
      canPass: true,
      sdkParam: {},
      saveDisabled: false,
      deliverd: false,
      groupIdStr: '',
      tagIdStr: ''
    }
  },
  created () {
    if (this.inviteId) {
      this.$config({ loading: true }).$get(noticeService.GET_QUERY_WECHAT, {
        inviteId: this.inviteId
      }).then((res) => {
        this.titleValue = res.data.title
        this.sendSetting = res.data.status
        this.date = res.data.sendTime ? res.data.sendTime.toString() : res.data.planTime.toString()
        this.wxContent = res.data.desc
        setTimeout(() => {
          this.reArrangeList(res.data.groupId.split(','), res.data.tagId.split(','))
        }, 500)
      })
    }
    this.queryGroupList()
    this.queryTaglist()
  },
  mounted () {
    if (!this.accountInfo.businessUserId) {
      this.storeJoininfo().then(() => {
        this.initSdk()
      })
    } else {
      this.initSdk()
    }
  },
  computed: {
    ...mapState('login', {
      accountInfo: state => state.accountInfo
    })
  },
  methods: {
    ...mapMutations('login', {
      setAccountInfo: types.ACCOUNT_INFO
    }),
    closeModal (e) {
      if (e.target.className === 'modal-cover') {
        this.testModal = false
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
      this.canPass = true
      let data = {
        inviteId: this.inviteId,
        activityId: this.$route.params.id,
        title: this.titleValue,
        groupId: this.groupIdStr, // 分组id
        tagId: this.tagIdStr,
        status: this.sendSetting.toLowerCase(),
        desc: this.wxContent,
        planTime: this.date
      }
      if (!this.formValid()) {
        return false
      }
      this.$nextTick((res) => {
        // 更新
        this.$post(noticeService.POST_SAVE_WECHAT, data).then((res) => {
          // console.log(res)
          this.$toast({
            content: '保存成功',
            position: 'center'
          })
          this.canPass = true
          // 跳转到列表页面
          this.$router.push({ name: 'promoteWechat', params: { id: this.activityId } })
        })
      })
    },
    testSend () {
      if (!this.formValid()) {
        return false
      }
      this.$nextTick((res) => {
        if (this.isValided) {
          this.testModal = true
          this.qrImgurl = `http://aliqr.e.vhall.com/qr.png?t=${encodeURIComponent(`http://${window.location.host}/api/expand/wechat-invite/test-send?content=${this.wxContent}&activityId=${this.activityId}`)}`
        }
      })
    },
    closeTest () {
      //
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
      this.selectPersonShow = false
    },
    /* 点击取消 */
    close () {
      this.selectPersonShow = false
    },
    /* 选中行 */
    // clickRow (idx) {
    //   this.groupList[idx].isChecked = !this.groupList[idx].isChecked
    // },
    /* 删除标签 */
    delPerson (idx) {
      const delIdx = this.groupList.indexOf(this.selectedGroupList[idx])
      this.groupList[delIdx].isChecked = false
    },
    /* 删除分组 */
    delGroupPerson (idx) {
      const delIdx = this.groupList.indexOf(this.selectedGroupList[idx])
      this.groupList[delIdx].isChecked = false
    },
    // 查询群组
    queryGroupList (keyword) {
      this.$get(userManage.GET_GROUP_LIST, {
        keyword: keyword,
        not_empty_field: 'wx_open_id'
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
    // 查询标签
    queryTaglist (keyword) {
      this.$get(userManage.GET_TAG_LIST, {
        keyword: keyword
      }).then((res) => {
        console.log(res.data.list)
        let temArray = []
        res.data.list.forEach((item) => {
          temArray.push({
            id: item.tag_id,
            name: item.tag_name,
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
              count: 0,
              id: item.id,
              isChecked: true,
              name: item.name
            })
          }
        })
      })
    },
    /* 验证 */
    formValid () {
      this.errorData.titleError = this.titleValue.length ? '' : '请输入通知标题'
      this.errorData.msgError = this.wxContent.length ? '' : '请输入微信内容'
      // this.errorData.tagError = this.msgTag.length ? '' : '请输入短信标签'
      if (this.titleValue.length && this.wxContent.length) {
        this.isValided = true
        return true
      } else {
        this.isValided = false
        return false
      }
    },
    listenMsg (msg) {
      console.log(msg)
    },
    initSdk () {
      /* 获取pass信息 */
      this.$get(playbackService.GET_PAAS_SDK_INFO).then((res) => {
        /* $nextTick保证dom被渲染之后进行paas插件初始化 */
        this.$nextTick(() => {
          this.sdkParam.sign = res.data.sign
          this.sdkParam.signed_at = res.data.signedAt
          this.sdkParam.app_id = res.data.appId
          this.sdkPlayParam = {
            app_id: res.data.appId,
            accountId: res.data.accountId,
            token: res.data.token,
            recordId: '',
            linkVideo: ''
          }
        })
      })
      this.initMsgServe()
    },
    async initMsgServe () {
      const roomInfo = await this.$get(playbackService.GET_REG_SDK_INFO, {
        thirdUserId: this.accountInfo.businessUserId,
        channel: this.accountInfo.channelRoom
      }).then(res => {
        return res.data
      })
      ChatService.OBJ.init({
        accountId: roomInfo.accountId,
        token: roomInfo.token,
        appId: roomInfo.appId,
        channelId: roomInfo.channelRoom
      })
      /* 监听微信测试发送成功消息 */
      ChatService.OBJ.regHandler(ChatConfig.wechat_msg, (msg) => {
        console.log(msg)
        this.deliverd = true
      })
    },
    async storeJoininfo () {
      await this.$get(userService.GET_ACCOUNT).then((res) => {
        this.setAccountInfo(res.data)
      })
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
        newValue === 'AWAIT' ? this.pickDate = true : this.pickDate = false
      }
    }
  },
  components: {
    comTest,
    comPhone,
    chooseGroup,
    veTips
  }
}
</script>
<style lang="scss" scoped src="../../css/live.scss">
</style>
<style lang="scss">
.edit-wx-page.live-mager .live-title {
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
.edit-wx-page.live-mager .from-title {
  line-height: 40px;
}
</style>
<style lang='scss' scoped>
@import '~assets/css/mixin.scss';

.edit-wx-page /deep/ {
  .com-input .limit.area {
    bottom: 7px;
    right: 7px;
  }
  // height: 730px;
  position: relative;
  .select-receiver {
    padding: 0;
    margin: 3px 0;
    width: 100px;
    height: 34px;
    line-height: 34px;
    border-radius: 20px;
    margin-right: 10px;
    border: 1px solid rgba(136, 136, 136, 1);
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
    width: 500px;
    margin-top: 15px;
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
  height: 90px;
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
  height: 600px;
}
</style>
