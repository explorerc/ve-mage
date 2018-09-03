<template>
  <div class="content" v-ComLoading="loading" com-loading-text="拼命加载中">
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
        <div class="from-title">发送状态：</div>
        <div class="from-content">
          <el-button><router-link :to="{name:'promoteWechat',params:{id:activityId}}">返回</router-link></el-button>
          <el-button  v-if="status !== 'SEND'">
            <router-link :to="{name:'wechatEdit',params:{id:activityId},query:{id:id}}">编辑</router-link>
          </el-button>
          <el-button v-if="status === 'SEND'" disabled>已发送</el-button>
          <el-button @click='sendNow' v-else>立即发送</el-button>
        </div>
      </div>
    </div>
    <div class="overview-box">
      <div class="header">微吼服务号</div>
      <div class="msg-box">
        <div class="msg-title">
          个人信息通知<span>8月10日</span>
        </div>
        <p class="tips">您关注的<span> {{webinarName}} </span>即将开始，赶快参加吧！</p>
        <p>标题：<span>{{webinarName}}</span></p>
        <p>时间：<span>{{webinarTime}}</span></p>
        <p>内容：<span>点击查看详情</span></p>
        <p>退订</p>
        <div class="footer">微信通知将于{{date}}发送</div>
      </div>
    </div>
  </div>
</template>

<script>
import { formatDate } from 'src/assets/js/date'
import queryHttp from 'src/api/activity-manger'
export default {
  data () {
    return {
      activityId: this.$route.params.id,
      id: this.$route.query.id,
      webinarName: '',
      webinarTime: '',
      title: '',
      group: '',
      status: '',
      time: '',
      tpl: '',
      date: '',
      loading: true
    }
  },
  created () {
    queryHttp.queryWechat(this.id).then((res) => {
      console.log(res)
      if (res.code === 200) {
        this.group = res.data.groupId
        this.title = res.data.title
        this.tpl = res.data.templateId
        this.status = res.data.status
        this.date = res.data.sendTime
        this.loading = false
      }
    }).catch((e) => {
      console.log(e)
      this.loading = false
    })
    queryHttp.webinarInfo(this.activityId).then((res) => {
      if (res.code === 200) {
        this.webinarName = res.data.title
        this.webinarTime = res.data.startTime
        this.loading = false
      }
    }).catch((e) => {
      this.loading = false
    })
  },
  methods: {
    sendNow () {
      queryHttp.sendWechat(this.id).then((res) => {
        console.log(res)
        if (res.code === 200) {
          this.$toast({
            content: '发送成功',
            position: 'center'
          })
          this.status = 'SEND'
          this.date = formatDate(new Date(), 'yyyy-MM-dd hh:mm:ss')
        }
      }).catch((e) => {
        console.log(e)
      })
    }
  }
}
</script>

<style lang='scss' scoped>
@import '~assets/css/variable';
.from-box {
  margin: 20px;
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

.overview-box {
  width: 375px;
  height: 500px;
  border: 1px solid #ccc;
  position: absolute;
  top: 100px;
  right: 100px;
  .header,
  .footer {
    text-align: center;
    height: 50px;
    line-height: 50px;
    background: #000000;
    color: #fff;
  }
  .footer {
    background: #fff;
    color: #000000;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    border-top: 1px solid #ccc;
  }
  .msg-box {
    width: 300px;
    height: 400px;
    border: 1px solid #ccc;
    padding: 20px;
    margin: 20px auto;
    position: relative;
    .msg-title {
      text-align: left;
      font-size: 20px;
      span {
        display: block;
        text-align: left;
        font-size: 14px;
      }
    }
    p {
      text-align: left;
      margin: 10px 0px;
    }
    p.detal {
      span {
        color: #ccc;
        display: inline-block;
        text-align: left;
      }
    }
  }
}
</style>
