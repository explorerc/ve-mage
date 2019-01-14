<template>
<div class="overview-box">
  <div class="msg-box-overview" v-if='isWx'>
    <div class="detail">
      <div class="msg-title-overview">预约成功通知</div>
      <p class='time'><span>{{webinarTime.substr(0,10)}}</span></p>
      <p class='content'><span><em>【{{webinarName}}】</em>{{wxContent}}</span></p>
      <div class="footer">详情</div>
    </div>
  </div>
  <div class="msg-box-overview msg-box-message" v-else>
    <div class="detail msg">
      <p class="">{{wxContent}}<br><em v-show='msgTag.length'>【{{msgTag}}】</em></p>
    </div>
    <!--<div class="footer">{{date}} 发送</div>-->
  </div>
  <div class="header">{{ isWx ?  '微信预览' :'短信预览' }}</div>
</div>
</template>

<script>
import noticeService from 'src/api/notice-service'
export default {
  data () {
    return {
      activityId: this.$route.params.id,
      webinarTime: '',
      webinarName: ''
    }
  },
  created () {
    this.$get(noticeService.GET_WEBINAR_INFO, {
      id: this.activityId
    }).then((res) => {
      this.webinarName = res.data.title
      this.webinarTime = res.data.startTime
      this.$emit('webinarStatus', res.data.status)
    })
  },
  props: {
    isWx: {
      type: Boolean,
      default: true
    },
    titleValue: {
      type: String,
      default: '-----'
    },
    date: {
      type: String,
      default: '-----'
    },
    wxContent: {
      type: String,
      default: '-----'
    },
    msgTag: {
      type: String,
      default: '-----'
    }
  }
}
</script>

<style lang='scss' scope>
@import '~assets/css/mixin.scss';
.overview-box {
  position: absolute;
  top: 136px;
  right: 100px;
  /* 设备宽度小于 1600px */
  @media all and (max-width: 1600px) {
    right: 40px;
  }
  .header {
    font-size: 18px;
    color: $color-font-sub;
    text-align: center;
    margin-bottom: 20px;
    margin-top: 20px;
  }
  .footer {
    background: #fff;
    color: #000000;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 180px;
    height: 30px;
    line-height: 30px;
    margin: 0 15px;
    border-top: 1px solid #ccc;
    font-size: 12px;
    background-image: url('~assets/image/arrow-right.svg');
    background-repeat: no-repeat;
    background-position: center right;
    background-size: 10px 10px;
  }
  .msg-box-overview {
    word-break: break-all;
    width: 252px;
    height: 500px;
    background: url('~assets/image/phone-wechat.png') no-repeat;
    background-size: contain;
    position: relative;
    * {
      font-size: 12px;
    }
    .msg-title-overview {
      text-align: left;
      font-size: 14px;
      color: $color-font;
      span {
        display: block;
        text-align: left;
        font-size: 14px;
      }
    }
    p {
      text-align: left;
      margin: 10px 0px;
      color: $color-font-sub;
      span {
        color: $color-font;
      }
      em {
        position: relative;
        right: 6px;
      }
    }
    p.time {
      color: #888;
      position: static;
    }
  }
  .msg-box-message {
    background-image: url('~assets/image/phone-msg.png');
    position: relative;
    &:before {
      content: '';
      width: 10px;
      height: 10px;
      position: absolute;
      top: 127px;
      left: 18px;
      background: rgba(239, 239, 239, 1);
      transform: rotate(45deg);
    }
    .detail {
      background: rgba(239, 239, 239, 1);
      padding: 8px 16px;
      height: auto;
    }
    .footer {
      position: absolute;
      height: 40px;
      bottom: 45px;
      border-radius: 0 0 8px 8px;
      left: 13px;
      line-height: 40px;
      text-align: center;
      color: #4b5afe;
      border: none;
      background: #f0f1fe;
      margin: 0;
      padding: 0;
      width: 228px;
    }
  }
  .detail {
    overflow: hidden;
    width: 210px;
    background: rgba(255, 255, 255, 1);
    border-radius: 4px;
    position: absolute;
    top: 104px;
    left: 22px;
    padding: 18px 15px;
    &.msg {
      top: 114px;
    }
  }
  .content {
    padding-bottom: 20px;
    line-height: 18px;
  }
}
</style>
