<template>
  <div class="content"
       v-ComLoading="loading"
       com-loading-text="拼命加载中">
    <div class="overview-wx-page live-mager">
      <div class="live-title">
        <span class="title">短信通知</span>
      </div>
      <div class='mager-box border-box'>
        <div class="from-box">
          <div class="from-row">
            <div class="from-title">短信标题：</div>
            <div class="from-content">
              {{title}}
            </div>
          </div>
          <div class="from-row">
            <div class="from-title">收件人：</div>
            <div class="from-content">
              <template v-for="(item,idx) in selectedGroupList">{{item.name}}({{item.count}})<template v-if="idx + 1< selectedGroupList.length">、</template></template><br>
              <template v-for="(item,idx) in selectedTagList">{{item.name}}({{item.count}})<template v-if="idx + 1< selectedTagList.length">、</template></template>
              <el-button v-if="status === 'SEND'" class='send-detail default-button' @click='sendDetail = true'>发送详情</el-button>
            </div>
          </div>
          <div class="from-row">
            <div class="from-title">发送状态：</div>
            <div class="from-content">
              <span v-if="status === 'SEND'"
                    class='SEND'><i></i>已发送</span>
              <span v-if="status === 'AWAIT'"
                    class='AWAIT'><i></i>已定时</span>
              <span v-if="status === 'DRAFT'"
                    class='DRAFT'><i></i>草稿</span>
            </div>
          </div>
          <div class="from-row">
            <div class="from-title">发送时间：</div>
            <div class="from-content">
              {{date}}
            </div>
          </div>
          <div class="from-row">
            <div class="from-title"></div>
          </div>
          <!-- 模拟手机预览 -->
          <com-phone :titleValue='title' :date='date' :wxContent='msgContent' :msgTag='msgTag' :isWx="false"></com-phone>
        </div>
        <div class="btn-group">
          <!-- <router-link><router-link :to="{name:'promoteMsg',params:{id:activityId}}">返回</router-link></router-link> -->
          <router-link  v-if="status !== 'SEND' && type === 'PREPARE'" :to="{name:'msgEdit',params:{id:activityId},query:{id:id}}"><el-button class='default-button'
                    >编辑短信</el-button></router-link>
          <el-button class='primary-button'
                     v-if="status === 'SEND'"
                     disabled>已发送</el-button>
          <el-button class='primary-button'
                     @click='sendNow'
                     v-else>正式发送</el-button>
        </div>
      </div>
    </div>
    <transition name='fade' mode='out-in' v-if="sendDetail">
      <com-detail _type="SMS"  @handleClick="handleClick"></com-detail>
    </transition>
  </div>
</template>

<script>
import { formatDate } from 'src/assets/js/date'
import noticeService from 'src/api/notice-service'
import activityService from 'src/api/activity-service'
import userManage from 'src/api/userManage-service'
import comPhone from '../com-phone'
import comDetail from '../com-detail'
export default {
  data () {
    return {
      activityId: this.$route.params.id,
      id: this.$route.query.id,
      webinarName: '',
      title: '',
      group: '',
      tag: '',
      status: '',
      time: '',
      date: '',
      msgTag: '',
      loading: false,
      msgContent: '',
      type: '', // 活动状态
      selectedGroupList: [],
      selectedTagList: [],
      groupList: [],
      tagList: [],
      sendDetail: false
    }
  },
  created () {
    this.queryInfo()
    this.queryTagList().then(this.queryGroupList()).then(() => {
      this.$config({ loading: true }).$get(noticeService.GET_QUERY_MSG, {
        inviteId: this.id
      }).then((res) => {
        this.group = res.data.groupId
        this.tag = res.data.tagId
        this.title = res.data.title
        this.status = res.data.status
        this.date = res.data.sendTime ? res.data.sendTime.toString() : res.data.planTime.toString()
        this.msgTag = res.data.signature
        this.msgContent = res.data.desc
        // this.reArrangeList(res.data.groupId.split(','), res.data.tagId.split(','))
        this.reArrangeList(res.data.groupId.split(','), 'group')
        this.reArrangeList(res.data.tagId.split(','), 'tag')
      })
    })
  },
  methods: {
    sendNow () {
      this.$post(noticeService.POST_SEND_MSG, {
        inviteId: this.id
      }).then((res) => {
        this.$toast({
          content: '发送成功'
        })
        this.status = 'SEND'
        this.date = formatDate(new Date(), 'yyyy-MM-dd hh:mm:ss')
      })
    },
    queryInfo () {
      this.$config({ loading: true }).$get(activityService.GET_WEBINAR_INFO, {
        id: this.$route.params.id
      }).then((res) => {
        this.type = res.data.status
      })
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
    async queryTagList (key) {
      await this.$get(userManage.GET_TAG_LIST, {
        activityId: this.$route.params.id
      }).then((res) => {
        let temArray = []
        res.data.list.forEach((item) => {
          temArray.push({
            name: item.tag_name,
            id: item.tag_id,
            isChecked: false
          })
        })
        this.tagList = temArray
      })
    },
    reArrangeList (arr, type) {
      if (type === 'group') {
        this.groupList.forEach((item, idx) => {
          arr.forEach((ele, i) => {
            if (ele * 1 === item.id) {
              this.selectedGroupList.push({
                name: item.name,
                count: item.count
              })
            }
          })
        })
      } else {
        console.log(arr)
        console.log(this.tagList)
        this.tagList.forEach((item, idx) => {
          console.log(item)
          arr.forEach((ele, i) => {
            console.log(ele + ' ' + i)
            if (ele * 1 === item.id) {
              this.selectedTagList.push({
                name: item.name,
                count: item.count
              })
            }
          })
        })
      }
    },
    // reArrangeList (arr, tag) {
    //   this.groupList.forEach((item, idx) => {
    //     group.forEach((ele, i) => {
    //       if (ele * 1 === item.id) {
    //         this.selectedGroupList.push({
    //           name: item.name,
    //           count: item.count
    //         })
    //       }
    //     })
    //   })
    //   this.tagList.forEach((item, idx) => {
    //     tag.forEach((ele, i) => {
    //       if (ele * 1 === item.id) {
    //         this.selectedTagList.push({
    //           name: item.name
    //         })
    //       }
    //     })
    //   })
    // },
    /* 点击取消 */
    handleClick (e) {
      if (e.action === 'cancel') {
        this.sendDetail = false
      }
    }
  },
  components: {
    comPhone, comDetail
  }
}
</script>

<style lang="scss" scoped src="../../css/live.scss">
</style>
<style lang='scss' scoped>
@import '~assets/css/mixin.scss';
.overview-wx-page {
  position: relative;

  .mager-box {
    height: 730px;
  }
  .from-title {
    color: $color-font-sub;
    line-height: 40px;
  }
  .from-content {
    color: $color-font;
    line-height: 40px;
    .send-detail {
      padding: 0px;
      width: 100px;
      height: 40px;
      line-height: 40px;
      margin-left: 10px;
    }
    .SEND {
      color: #4b5afe;
      i {
        display: inline-block;
        width: 16px;
        height: 16px;
        background: url('~assets/image/icon_send.svg') no-repeat;
        background-size: contain;
        position: relative;
        top: 3px;
        margin-right: 5px;
      }
    }
    .AWAIT {
      color: #975bd5;
      i {
        display: inline-block;
        width: 16px;
        height: 16px;
        background: url('~assets/image/icon_time.svg') no-repeat;
        background-size: contain;
        position: relative;
        top: 3px;
        margin-right: 5px;
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
}
.from-box {
  margin: 20px;
  height: 600px;
  .from-row {
    display: flex;
    padding: 10px;
    .from-title {
      width: 180px;
      text-align: right;
      padding-right: 20px;
      .star {
        position: relative;
        top: 3px;
        color: $color-error;
        padding-right: 5px;
      }
    }
    .from-content {
      flex: 1;
      .input-box {
        width: 400px;
      }
    }
  }
}
</style>
