<template>
  <transition name="fade" v-if="visible">
    <div class="ve-message-box__wrapper">
      <div class="ve-message-box">
        <div class="ve-message-box__header">
          <div class="ve-message-box__title">邀请</div>
          <slot name="header"></slot>
          <button type="button" @click.prevent="close()">
            <i class="iconfont icon-close"></i>
          </button>
        </div>
        <div class="ve-message-box__content">
          <p>分享链接给朋友</p>
          <p>
            <input v-model="link" ref="linkInput">
            <button type="button" class="copy-link" @click="copyLink">复制</button>
          </p>
          <p>
            <button type="button" class="share-btn weibo" @click.stop="openLink(shareLink.weibo)">
              <i class="iconfont icon-weibo"></i>
            </button>
            <button type="button" class="share-btn wxchart" @click.stop="shareWx">
              <i class="iconfont icon-weixin"></i>
            </button>
            <button type="button" class="share-btn qq" @click.stop="openLink(shareLink.qq)">
              <i class="iconfont icon-10"></i>
            </button>
          </p>
          <transition name="fade">
            <img v-if="qrCode" :src="qrCode" alt="二维码" style="display: block;margin: 10px auto;">
          </transition>
        </div>
      </div>
      <div class="ve-modal" @click.prevent="close()"></div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'Share',
    data () {
      return {
        visible: true,
        link: '',
        qrCode: ''
      }
    },
    props: {
      shareLink: {
        type: Object,
        default: {
          liveLink: '',
          weibo: '',
          wxchart: '',
          qq: ''
        }
      }
    },
    watch: {
      shareLink: {
        handler (newVal) {
          this.link = newVal.liveLink
        },
        immediate: true,
        deep: true
      }
    },
    methods: {
      close () {
        this.$emit('close')
      },
      copyLink () {
        this.$refs.linkInput.select()
        if (document.execCommand('copy')) {
          document.execCommand('copy')
          this.$refs.linkInput.blur()
        }
      },
      shareWx () {
        this.qrCode = this.shareLink.wxchart
      },
      openLink (url) {
        window.open(url)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  .ve-message-box__wrapper {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 3000;
    .ve-modal {
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      opacity: .5;
      background: #000;
    }
    .ve-message-box {
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 410px;
      padding-bottom: 10px;
      background-color: #fff;
      border-radius: 4px;
      border: 1px solid #ebeef5;
      font-size: 16px;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
      overflow: hidden;
      z-index: 3001;
      .ve-message-box__header {
        position: relative;
        background-color: #edecec;
        text-align: center;
        line-height: 40px;
        button {
          position: absolute;
          top: 12px;
          right: 15px;
          padding: 0;
          border: none;
          outline: none;
          background: transparent;
          font-size: 14px;
          cursor: pointer;
          &:hover {
            color: #409eff;
          }
        }
      }
      .ve-message-box__content {
        font-size: 14px;
        padding: 20px;
        text-align: left;
        p {
          padding: 5px 0;
          input {
            -webkit-appearance: none;
            background-color: #fff;
            border: 1px solid #dcdfe6;
            box-sizing: border-box;
            color: #606266;
            display: inline-block;
            font-size: inherit;
            height: 32px;
            line-height: 32px;
            outline: none;
            padding: 0 8px;
            transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
            width: 310px;
          }
          .copy-link {
            height: 32px;
            line-height: 32px;
            border: none;
            outline: none;
            font-size: 14px;
            cursor: pointer;
            padding: 0 10px;
            background-color: #fc5659;
            color: #fff;
            border-radius: 4px;
            margin-left: 5px;
            box-sizing: border-box;
            &:hover {
              opacity: .8;
            }
          }
          .share-btn {
            width: 32px;
            height: 32px;
            border-radius: 50%;
            border: none;
            outline: none;
            color: #fff;
            cursor: pointer;
            &:hover {
              opacity: .8;
              transition: opacity .3s;
            }
            &.weibo {
              background-color: #ff3333;
            }
            &.wxchart {
              background-color: #61E92C;
              margin: 0 4px;
            }
            &.qq {
              background-color: #5095FF;
            }
          }
        }
      }
    }
  }
</style>
