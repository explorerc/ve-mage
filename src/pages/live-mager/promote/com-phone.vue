<template>
<div class="overview-box">
  <div class="msg-box-overview" v-if='isWx'>
    <div class="detail">
      <!-- <div class="msg-title-overview">{{titleValue}}</div> -->
      <div class="msg-title-overview">预约成功通知</div>
      <p class="time" v-html="date.substr(0,10)"></p>
      <!-- <p class="tips">{{wxContent}}</p> -->
      <p class="tips">{{wxContent}}</p>
      <p>标题：<span>{{webinarName}}</span></p>
      <p style='padding-bottom:20px;'>时间：<span>{{webinarTime}}</span></p>
      <!-- <p style='padding-bottom:20px;'>内容：<span>{{wxContent}}</span></p> -->
      <div class="footer">详情</div>
    </div>
  </div>
  <div class="msg-box-overview msg-box-message" v-else>
    <div class="detail">
      <p class="">【{{msgTag}}】{{wxContent}}</p>
    </div>
    <div class="footer">{{date}} 发送</div>
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
    width: 250px;
    height: 517px;
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
    }
    p.time {
      color: $color-font-sub;
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
      top: 70px;
      left: 18px;
      background: #e2e2e2;
      transform: rotate(45deg);
    }
    .detail {
      background: rgba(226, 226, 226, 1);
      padding: 8px 16px;
      height: auto;
    }
    .footer {
      position: absolute;
      height: 40px;
      bottom: 65px;
      left: 13px;
      line-height: 40px;
      text-align: center;
      color: #4b5afe;
      border: none;
      background: #f0f1fe;
      margin: 0;
      padding: 0;
      width: 226px;
    }
  }
  .detail {
    overflow: hidden;
    width: 210px;
    height: 250px;
    background: rgba(255, 255, 255, 1);
    border-radius: 4px;
    position: absolute;
    top: 54px;
    left: 22px;
    padding: 18px 15px;
  }
}
</style>
