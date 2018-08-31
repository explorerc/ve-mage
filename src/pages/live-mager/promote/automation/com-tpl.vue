<template>
  <div class="content">
    <div class='msgContent' v-if="type === 'msg'">
      <div v-if="tpl === 1" class=''>
        <div class="overview-box">
          <div class="header">短信</div>
          <div class="msg-box">
            【{{tag}}】您已预约成功<span class='webinar-name'>{{webinarName}}</span>，活动时间为<span class='date'>{{date}}</span>，请按时参加活动。查看详情{{link}}
          </div>
        </div>
      </div>
      <div v-if="tpl === 2" class=''>
        <div class="overview-box">
          <div class="header">短信</div>
          <div class="msg-box">
            【{{tag}}】您已报名成功<span class='webinar-name'>{{webinarName}}</span>，活动时间为<span class='date'>{{date}}</span>，请按时参加活动。查看详情{{link}}
          </div>
        </div>
      </div>
      <div v-if="tpl === 3" class=''>
        <div class="overview-box">
          <div class="header">短信</div>
          <div class="msg-box">
            【{{tag}}】您预约的<span class='webinar-name'> {{webinarName}} </span> 还有 {{countDown}} 就要开播了，快来观看吧,进入直播{{link}}
          </div>
        </div>
      </div>
      <div v-if="tpl === 4" class=''>
        <div class="overview-box">
          <div class="header">短信</div>
          <div class="msg-box">
            【{{tag}}】您已成功订阅<span class='host-name'> {{hostName}} </span>举办的活动，有关活动的最新资讯我们将第一时间给您推送。
          </div>
        </div>
      </div>
      <div v-if="tpl === 5" class=''>
        <div class="overview-box">
          <div class="header">短信</div>
          <div class="msg-box">
            【{{tag}}】您关注的<span class='webinar-name'> {{webinarName}} </span>已设置回放，您可以点击链接回顾活动全程。查看详情{{link}}
          </div>
        </div>
      </div>
    </div>
    <div class='wxContent' v-if="type === 'wx'">
      <div v-if="tpl === 1" class=''>
        <div class="overview-box">
          <div class="header">微信</div>
          <div class="msg-box">
            <p class='title'>您已预约成功，我们将及时提醒您参加活动。</p>
            <p>活动主题：<span class='webinar-name'> {{webinarName}} </span></p>
            <p>活动时间：<span class='date'>{{date}}</span></p>
            <p>查看活动详情</p>
          </div>
        </div>
      </div>
      <div v-if="tpl === 2" class=''>
        <div class="overview-box">
          <div class="header">微信</div>
          <div class="msg-box">
            <p class='title'>您已报名成功，我们将及时提醒您参加活动。</p>
            <p>活动主题：<span class='webinar-name'>{{webinarName}}</span></p>
            <p>活动时间：<span class='date'>{{date}}</span></p>
            <p>进入直播</p>
          </div>
        </div>
      </div>
      <div v-if="tpl === 3" class=''>
        <div class="overview-box">
          <div class="header">微信</div>
          <div class="msg-box">
            <p class='title'>您预约的活动还有 {{countDown}} 就要开始了，准备观看吧</p>
            <p>活动主题：<span class='webinar-name'>{{webinarName}}</span></p>
            <p>活动时间：<span class='date'>{{date}}</span></p>
            <p>查看活动详情</p>
          </div>
        </div>
      </div>
      <div v-if="tpl === 4" class=''>
        <div class="overview-box">
          <div class="header">微信</div>
          <div class="msg-box">
            <p class='title'>活动订阅成功</p>
            <p>会员昵称：昵称</p>
            <p>关注时间：2018-08-31</p>
            <p>已订阅<span> {{hostName}} </span>举办的活动，有关活动最新资讯我们将第一时间给您推送</p>
          </div>
        </div>
      </div>
      <div v-if="tpl === 5" class=''>
        <div class="overview-box">
          <div class="header">微信</div>
          <div class="msg-box">
            <p class='title'>您关注的活动已经设置回放</p>
            <p>活动主题：<span class='webinar-name'>{{webinarName}}</span></p>
            <p>活动时间：<span class='date'>{{date}}</span></p>
            <p>查看活动详情</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'send-tpl',
    data () {
      return {
        countDown: ''
      }
    },
    props: {
      type: { // 类型 msg wx
        type: String,
        default: 'wx'
      },
      tpl: { // 模板类型
        type: Number,
        default: 1
      },
      tag: { // 签名
        type: String,
        default: '公司签名'
      },
      webinarName: { // 活动名称
        type: String,
        default: '活动名称'
      },
      hostName: { // 活动名称
        type: String,
        default: '账户名称'
      },
      date: { // 活动时间
        type: String,
        default: '2018-08-30 15:43:00'
      },
      // firstCount: { // 距离开始时间 小时
      //   type: String,
      //   default: '1'
      // },
      // secondCount: { // 距离开始时间 分钟
      //   type: String,
      //   default: '15'
      // },
      link: { // 短链接
        type: String,
        default: '15'
      }
    },
    created () {
      if (this.$route.query.hour) {
        this.countDown = `${this.$route.query.hour}小时`
      }
      if (this.$route.query.minute) {
        this.countDown = `${this.$route.query.minute}分钟`
      }
    }
  }
</script>

<style lang='scss'>
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
    .title {
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
    span.webinar-name {
      color: red;
    }
    span.host-name {
      color: red;
    }
    span.date {
      color: blue;
    }
  }
}
</style>
