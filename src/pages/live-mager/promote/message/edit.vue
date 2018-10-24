<template>
  <div class="content"
       v-ComLoading="loading"
       com-loading-text="拼命加载中">
    <div class="edit-msg-page live-mager"
         @mousedown="canPass = false">
      <div class="live-title">
        <span class="title">创建短信通知</span>
      </div>
      <div class='mager-box border-box'>
        <div class="from-box">
          <div class="from-row">
            <div class="from-title"><i class="star">*</i>通知标题：</div>
            <div class="from-content">
              <com-input :value.sync="titleValue"
                         placeholder="请输入标题"
                         :max-length="15"
                         :error-tips='errorData.titleError'
                         @focus="errorData.titleError=''"></com-input>
            </div>
          </div>
          <div class="from-row">
            <div class="from-title">接收人：</div>
            <div class="from-content">
              <el-button class='default-button select-receiver'
                         @click='selectPersonShow=true'>选择收信人</el-button>
              <transition-group name="list"
                                class="edit-groups"
                                tag="div"
                                v-if="selectedPersonList.length">
                <span class="list-item"
                      v-for="(person,idx) in selectedPersonList"
                      :key="person.id">{{person.name}} ({{person.count}}人）
                  <i class="iconfont icon-shanchu"
                     @click="delPerson(idx)"></i>
                </span>
              </transition-group>
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
            <div class="from-title">选择时间：</div>
            <div class="from-content">
              <el-date-picker v-model="date"
                              :editable="false"
                              format='yyyy-MM-dd HH:mm:ss'
                              value-format="yyyy-MM-dd HH:mm:ss"
                              type="datetime"
                              placeholder="选择日期时间"
                              :picker-options="pickerOptions">
              </el-date-picker>
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
                     @click="save" :disabled='saveDisabled'>保存</el-button>
        </div>
      </div>
      <!-- 选择收件人 -->
      <message-box v-if="selectPersonShow"
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
                <li v-for="(person,idx) in personList"
                    @click.stop="clickRow(idx)"
                    :class="{active:person.isChecked}"
                    :key="person.id">
                  {{person.name}} ({{person.count}}人）
                  <com-checkbox v-model="person.isChecked"
                                class="fr"
                                small></com-checkbox>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div slot="bottom"
             class="select-bottom">
          <span class="select-all fl">已选择{{selectedCount}}人：</span>
          <div class="select-list fl"
               :title="selectedPersonListStr">
            {{selectedPersonListStr}}
          </div>
          <button class="primary-button"
                  @click="okSelectList">确定</button>
        </div>
      </message-box>
    </div>
    <!-- 测试发送弹窗 -->
    <com-test v-if='testModal'
              :msgContent='msgContent'
              @closeTest='closeTest'
              :msgTag="msgTag"
              :type="'SMS'"></com-test>
  </div>
  </div>
</template>

<script>
// import createHttp from 'src/api/activity-manger'
import noticeService from 'src/api/notice-service'
import comTest from '../com-test'
import comPhone from '../com-phone'
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
      loading: false,
      searchPerson: '',
      personList: [{ id: '', name: '', count: 0, isChecked: false }],
      selectedPersonList: [{ id: '', name: '', count: 0, isChecked: false }],
      selectedPersonListStr: '',
      selectPersonShow: false,
      selectedCount: 0,
      errorData: {
        titleError: '',
        msgError: '',
        tagError: ''
      },
      isValided: false,
      canPass: true,
      saveDisabled: false
    }
  },
  created () {
    this.queryPersonList()
    if (this.inviteId) {
      this.$get(noticeService.GET_QUERY_MSG, {
        inviteId: this.inviteId
      }).then((res) => {
        this.titleValue = res.data.title
        this.sendSetting = res.data.status
        this.date = res.data.sendTime ? res.data.sendTime.toString() : res.data.planTime.toString()
        this.msgContent = res.data.desc
        this.msgTag = res.data.signature
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
      this.canPass = true
      let data = {
        inviteId: this.inviteId,
        activityId: this.$route.params.id,
        title: this.titleValue,
        groupId: '1', // 分组id
        status: this.sendSetting.toLowerCase(),
        planTime: this.date,
        desc: this.msgContent,
        signature: this.msgTag
      }
      if (!this.formValid()) {
        return false
      }
      // 更新
      this.$post(noticeService.POST_SAVE_MSG, data).then((res) => {
        // console.log(res)
        this.$toast({
          content: '保存成功',
          position: 'center'
        })
        // 跳转到列表页面
        this.canPass = true
        this.$router.push({ name: 'promoteMsg', params: { id: this.activitId } })
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
      // debugger
      this.testModal = false
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
    /* 删除标签 */
    delPerson (idx) {
      const delIdx = this.personList.indexOf(this.selectedPersonList[idx])
      this.personList[delIdx].isChecked = false
    },
    /* 查询人员 */
    queryPersonList () {
      this.$get(noticeService.GET_PERSON_LIST, {
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
    /* 验证 */
    formValid () {
      this.errorData.titleError = this.titleValue.length ? '' : '请输入通知标题'
      this.errorData.msgError = this.msgContent.length ? '' : '请输入短信内容'
      this.errorData.tagError = this.msgTag.length ? '' : '请输入短信标签'
      if (this.titleValue.length && this.msgTag.length && this.msgContent.length) {
        this.isValided = true
        return true
      } else {
        this.isValided = false
        return false
      }
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
  components: {
    comTest,
    comPhone
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
    bottom: 7px;
    right: 7px;
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


