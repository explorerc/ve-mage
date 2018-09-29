<template>
  <div class="content" v-ComLoading="loading" com-loading-text="拼命加载中">
    <div class="overview-wx-page live-mager">
      <div class="live-title">
        <span class="title">微信通知</span>
      </div>
      <div class='mager-box border-box'>
        <div class="from-box">
          <div class="from-row">
            <div class="from-title">微信标题：</div>
            <div class="from-content">
              {{title}}
            </div>
          </div>
          <div class="from-row">
            <div class="from-title">收件人：</div>
            <div class="from-content">
              {{group}}
              <el-button class='send-detail default-button'>发送详情</el-button>
            </div>
          </div>
          <div class="from-row">
            <div class="from-title">发送状态：</div>
            <div class="from-content">
              <span v-if="status === 'SEND'" class='SEND'><i></i>已发送</span>
              <span v-if="status === 'AWAIT'" class='AWAIT'><i></i>已定时</span>
              <span v-if="status === 'DRAFT'" class='DRAFT'><i></i>草稿</span>
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
          <com-phone :titleValue='title' :date='date' :wxContent='wxContent' ></com-phone>
        </div>
        <div class="btn-group">
          <!-- <router-link><router-link :to="{name:'promoteWechat',params:{id:activityId}}">返回</router-link></router-link> -->
          <el-button class='default-button'  v-if="status !== 'SEND'">
            <router-link :to="{name:'wechatEdit',params:{id:activityId},query:{id:id}}">编辑微信</router-link>
          </el-button>
          <el-button class='primary-button' v-if="status === 'SEND'" disabled>已发送</el-button>
          <el-button class='primary-button' @click='sendNow' v-else>正式发送</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {formatDate} from 'src/assets/js/date'
// import queryHttp from 'src/api/activity-manger'
import noticeService from 'src/api/notice-service'
import comPhone from '../com-phone'
export default {
  data () {
    return {
      activityId: this.$route.params.id,
      id: this.$route.query.id,
      title: '',
      group: '',
      status: '',
      time: '',
      tpl: '',
      date: '',
      loading: false,
      wxContent: ''
    }
  },
  created () {
    this.$config({loading: true}).$get(noticeService.GET_QUERY_WECHAT, {
      inviteId: this.id
    }).then((res) => {
      this.group = res.data.groupId
      this.title = res.data.title
      this.tpl = res.data.templateId
      this.status = res.data.status
      this.date = res.data.sendTime ? res.data.sendTime : res.data.planTime
      this.wxContent = res.data.desc
    })
  },
  methods: {
    sendNow () {
      this.$post(noticeService.POST_SEND_WECHAT, {
        inviteId: this.id
      }).then((res) => {
        this.$toast({
          content: '发送成功',
          position: 'center'
        })
        this.status = 'SEND'
        this.date = formatDate(new Date(), 'yyyy-MM-dd hh:mm:ss')
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
