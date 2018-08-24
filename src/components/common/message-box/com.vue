<template>
  <transition name="fade" v-if="visible">
    <div class="ve-message-box__wrapper" :customClass="customClass">
      <div class="ve-message-box" :style="{width: width}">
        <div class="ve-message-box__header">
          <div class="ve-message-box__title" v-if="!this.$slots.header&&header">{{header}}</div>
          <slot name="header"></slot>
          <button type="button" @click.prevent="handleClick(action.cancel)">
            <i class="iconfont icon-close"></i>
          </button>
        </div>
        <div class="ve-message-box__content" v-if="(!this.$slots.default||this.$slots.default.length==0)&&content">
          {{content}}
        </div>
        <slot></slot>
        <div class="ve-message-box__btns">
          <div v-if="!this.$slots.bottom">
            <button type="button" class="button--primary" @click.prevent="handleClick(action.confirm)">
              <span>{{confirmText}}<span v-if="autoClose" class="auto-close">({{closeTime}}s)</span></span>
            </button>
            <button type="button" @click.prevent="handleClick(action.cancel)" v-if="cancelText">
              <span>{{cancelText}}</span>
            </button>
          </div>
          <slot name="bottom"></slot>
        </div>
      </div>
      <div class="ve-modal" @click.prevent="handleClick(action.cancel)"></div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'message-box',
    data () {
      return {
        visible: true,
        closeTime: 0,
        intervalTime: 0,
        action: {
          cancel: 'cancel',
          confirm: 'confirm'
        }
      }
    },
    props: {
      customClass: String,
      header: {
        type: String,
        default: '提示'
      },
      content: {
        type: String,
        default: ''
      },
      confirmText: {
        type: String,
        default: '确定'
      },
      cancelText: {
        type: String,
        default: ''
      },
      autoClose: {
        type: Number,
        default: 0
      },
      width: {
        type: String,
        default: '300px'
      }
    },
    watch: {
      autoClose: {
        handler (newVal) {
          if (!newVal) return
          this.closeTime = newVal
          clearInterval(this.intervalTime)
          this.intervalTime = setInterval(() => {
            if (!this.closeTime--) {
              clearInterval(this.intervalTime)
              this.$emit('handleClick', {
                action: 'cancel'
              })
            }
          }, 1000)
        },
        immediate: true
      }
    },
    destroyed () {
      clearInterval(this.intervalTime)
    },
    methods: {
      handleClick (action) {
        this.$emit('handleClick', {
          action: action
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s;
  }

  .fade-enter,
  .fade-leave-to {
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
        padding: 15px;
        padding-bottom: 10px;
        text-align: left;
        button {
          position: absolute;
          top: 15px;
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
      }
      .ve-message-box__btns {
        margin: 10px 0;
        .auto-close {
          padding-left: 6px;
        }
        button {
          display: inline-block;
          min-width: 80px;
          line-height: 1;
          white-space: nowrap;
          cursor: pointer;
          background: #fff;
          border: 1px solid #dcdfe6;
          color: #606266;
          -webkit-appearance: none;
          text-align: center;
          box-sizing: border-box;
          outline: none;
          margin: 0;
          transition: .1s;
          font-weight: 500;
          -moz-user-select: none;
          -webkit-user-select: none;
          -ms-user-select: none;
          padding: 12px 20px;
          font-size: 14px;
          border-radius: 4px;
          padding: 9px 15px;
          font-size: 12px;
          border-radius: 3px;
          margin: 0 20px;
        }
        .button--primary {
          color: #fff;
          background-color: #409eff;
          border-color: #409eff;
          &:hover {
            background: #66b1ff;
            border-color: #66b1ff;
            color: #fff;
          }
        }
      }
    }
  }
</style>
