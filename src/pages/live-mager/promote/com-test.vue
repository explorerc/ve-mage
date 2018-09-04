<template>
  <transition name='fade'>
      <div class="modal-cover" @click="closeModal" >
        <div class='modal-box' v-if="type === 'SMS'">
          <h4>短信测试发送 <span class='close' @click='closeModal'>×</span></h4>
          <div class='content-box from-box'>
            <p>每天只允许发送5条测试短信</p>
            <div class="from-row">
              <div class="from-title">输入号码：</div>
              <div class="from-content">
                <com-input placeholder="请输入手机号码" :value.sync='sendPhone'></com-input>
              </div>
            </div>
          </div>
          <div class="btn-group">
            <el-button @click='sendTest'>立即发送<span>({{limitCount}})</span>条</el-button>
          </div>
        </div>
        <div class='modal-box' v-else>
          <h4>微信测试发送 <span class='close' @click='closeModal'>×</span></h4>
          <div class='content-box'>
            <p>每天只允许发送5条测试消息</p>
            <div class="from-row">
              <img :src="imgUrl" class='qrcode'>
            </div>
            <p>扫描二维码，授权后，即可收到测试消息</p>
            <p>当前可发送(<span>{{limitCount}}</span>条)</p>
          </div>
        </div>
      </div>
  </transition>
</template>
<script>
import createHttp from 'src/api/activity-manger'
export default {
  name: 'com-test',
  data () {
    return {
      sendPhone: ''
    }
  },
  props: {
    limitCount: {
      type: String,
      default: ''
    },
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
      type: Number,
      default: 0
    }
  },
  methods: {
    closeModal (e) {
      if (e.target.className === 'modal-cover') {
        // this.groudModal = false
        // this.groupIdx = 0
        // this.tagIdx = 0
        this.$emit('closeTest')
      }
    },
    sendTest () {
      const data = {
        content: this.msgContent,
        receiverMobile: this.sendPhone
      }
      createHttp.sendTestmsg(data).then((res) => {
        console.log(res)
        if (res.code === 200) {
          this.limitCount -= 1
          this.$toast({
            content: '发送成功',
            position: 'center'
          })
        }
      }).catch((e) => {
        console.log(e)
        this.$toast({
          content: '发送失败',
          position: 'center'
        })
      })
    }
  }
}
</script>

<style lang='scss'>
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
</style>
