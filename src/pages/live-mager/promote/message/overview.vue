<template>
  <!-- <div class="content" v-ComLoading="loading" com-loading-text="拼命加载中">
    <div class="overview-wx-page live-mager">
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
            {{group}}
          </div>
        </div>
        <div class="from-row">
          <div class="from-title">发送状态：</div>
          <div class="from-content">
            <span v-if="status === 'SEND'">已发送</span>
            <span v-if="status === 'AWAIT'">已定时</span>
            <span v-if="status === 'DRAFT'">草稿</span>
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
          <div class="from-content">
            <el-button><router-link :to="{name:'promoteMsg',params:{id:activityId}}">返回</router-link></el-button>
            <el-button v-if="status !== 'SEND'">
              <router-link :to="{name:'msgEdit',params:{id:activityId},query:{id:id}}">编辑</router-link>
            </el-button>
            <el-button v-if="status === 'SEND'" disabled>已发送</el-button>
            <el-button @click='sendNow' v-else>立即发送</el-button>
          </div>
        </div>
      </div>
      <div class="overview-box">
        <div class="header">短信</div>
        <div class="msg-box">
          <div class="msg-title">
            <p class="tips"><span>[ {{msgTag}} ]</span>{{msgContent}}</p>
            <div class="footer">短信通知将于{{date}}发送</div>
          </div>
        </div>
      </div>
    </div>
  </div> -->
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
              {{group}}
              <el-button v-if="status === 'SEND'" class='send-detail default-button'>发送详情</el-button>
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
          <com-phone :titleValue='title'
                     :date='date'
                     :wxContent='msgContent'
                     :msgTag='msgTag'></com-phone>
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
  </div>
</template>

<script>
import { formatDate } from 'src/assets/js/date'
import noticeService from 'src/api/notice-service'
import activityService from 'src/api/activity-service'
import comPhone from '../com-phone'
export default {
  data () {
    return {
      activityId: this.$route.params.id,
      id: this.$route.query.id,
      webinarName: '',
      title: '',
      group: '',
      status: '',
      time: '',
      date: '',
      msgTag: '',
      loading: false,
      msgContent: '',
      type: ''// 活动状态
    }
  },
  created () {
    this.queryInfo()
    this.$config({ loading: true }).$get(noticeService.GET_QUERY_MSG, {
      inviteId: this.id
    }).then((res) => {
      this.group = res.data.groupId
      this.title = res.data.title
      this.status = res.data.status
      this.date = res.data.sendTime ? res.data.sendTime.toString() : res.data.planTime.toString()
      this.msgTag = res.data.signature
      this.msgContent = res.data.desc
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
    }
  },
  components: {
    comPhone
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
