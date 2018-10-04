<template>
  <transition name='fade'>
    <div class="modal-cover"
         @click="closeModal">
      <div class='modal-box phone'
           v-if="type === 'SMS'">
        <h4>短信测试发送 <span class='close'
                @click='closeModal'></span></h4>
        <div class='content-box from-box'>
          <p class='color-blue'><i></i>每天只允许发送5条测试消息</p>
          <div>
            <com-input placeholder="请输入手机号码"
                       :value.sync='sendPhone'
                       :error-tips="phoneError"
                       @focus="phoneError = ''"></com-input>
          </div>
        </div>
        <div class="btn-group">
          <p>短信限额：<span class='limit-count'>{{limitCount}}</span></p>
          <el-button class='primary-button fr'
                     @click='sendTest' :disabled="limitCount <= 0">立即发送</el-button>
        </div>
      </div>
      <div class='modal-box '
           v-else>
        <h4>微信测试发送 <span class='close'
                @click='closeModal'></span></h4>
        <div class='content-box'>
          <p class='color-blue'><i></i>每天只允许发送5条测试消息</p>
          <div class="from-row">
            <img :src="imgUrl" class='qrcode'>
            </div>
            <p>扫描二维码，授权后即可收到测试消息</p>
            <p>微信限额：<span class='limit-count'>{{limitCount}}</span></p>
          </div>
        </div>
      </div>
  </transition>
</template>
<script>
import noticeService from 'src/api/notice-service'
export default {
  name: 'com-test',
  data () {
    return {
      sendPhone: '',
      limitCount: '',
      phoneError: ''
    }
  },
  props: {
    msgContent: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    },
    imgUrl: {
      type: String,
      default: ''
    },
    noticeId: {
      type: String,
      default: ''
    },
    isAuto: {
      type: Boolean,
      default: false
    },
    wechatSuccess: {
      type: Boolean,
      default: false
    }
  },
  created () {
    this.getCount()
  },
  methods: {
    closeModal (e) {
      if (e.target.className === 'modal-cover' || e.target.className === 'close') {
        // this.groudModal = false
        // this.groupIdx = 0
        // this.tagIdx = 0
        this.$emit('closeTest')
      }
    },
    sendTest () {
      // 为空
      if (!this.sendPhone.length) {
        this.phoneError = '请输入手机号码'
      } else {
        // 校验
        if (this.validPhone(this.sendPhone)) {
          if (this.isAuto) {
            this.sendAuto()
          } else {
            this.sendTestmsg()
          }
        } else {
          this.phoneError = '手机号码不符合规范'
        }
      }
    },
    getCount () {
      this.$get(noticeService.GET_MSG_LIMIT, {
        type: 'sms'
      }).then((res) => {
        this.limitCount = res.data
      })
      // createHttp.msgLimit('sms').then((res) => {
      //   if (res.code === 200) {
      //     this.limitCount = res.data
      //   }
      // }).catch((e) => { console.log(e) })
    },
    sendTestmsg () {
      const data = {
        content: this.msgContent,
        receiverMobile: this.sendPhone
      }
      this.$post(noticeService.POST_SEND_TEST_MSG, data).then((res) => {
        this.limitCount -= 1
        this.$toast({
          content: '发送成功',
          position: 'center'
        })
      })
    },
    sendAuto () {
      const data = {
        noticeTaskId: this.noticeId,
        mobile: this.sendPhone
      }
      this.$post(noticeService.POST_AUTO_SEND_TEST, data).then((res) => {
        this.limitCount -= 1
        this.$toast({
          content: '发送成功',
          position: 'center'
        })
      })
    },
    validPhone (phone) {
      var re = /^1[3|4|5|6|7|8|9][0-9]\d{8}$/
      return re.test(phone)
    }
  },
  watch: {
    wechatSuccess (newVal) {
      console.log(newVal)
      this.limitCount -= 1
      this.$toast({
        content: '信息已发送',
        position: 'center'
      })
    }
  }
}
</script>

<style lang='scss'>
@import '~assets/css/mixin.scss';
.modal-cover {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba($color: #000000, $alpha: 0.5);
  z-index: 9;
}

.modal-box {
  overflow: hidden;
  width: 450px;
  height: 314px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -225px;
  margin-left: -157px;
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
    color: $color-font;
    font-size: 16px;
    padding: 0 18px;
    background: $color-default;
    .close {
      cursor: pointer;
      width: 10px;
      height: 10px;
      background: url('~assets/image/close.svg') no-repeat;
      background-size: contain;
      position: absolute;
      top: 15px;
      right: 15px;
      &:hover {
        opacity: 0.8;
      }
    }
  }
  .content-box {
    padding: 10px 0px;
    * {
      color: $color-font-sub;
    }
    p {
      margin: 10px 0px;
    }
    .qrcode {
      width: 110px;
      height: 110px;
      display: block;
      margin: 20px auto;
      border: 1px solid rgba(226, 226, 226, 1);
    }
    .limit-count {
      color: $color-blue;
    }
    .color-blue {
      color: $color-blue;
      i {
        display: inline-block;
        width: 20px;
        height: 20px;
        background: url('~assets/image/quesmark-blue.svg') no-repeat center;
        background-size: contain;
        margin-right: 10px;
        position: relative;
        top: 4px;
      }
    }
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
  &.phone {
    height: 274px;
    margin-top: -147px;
    text-align: left;
    .content-box {
      padding: 30px;
      .color-blue i {
        top: 4px;
      }
    }
    .com-input {
      width: 390px;
    }
    .btn-group {
      padding: 0px 30px;
      p {
        display: inline-block;
        height: 40px;
        line-height: 40px;
      }
      .limit-count {
        color: $color-blue;
      }
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
</style>
