<template>
  <div class="msg-tip-box" :class='type'>
    <i>？</i>
    <span v-if="tipType!=='html'">{{tip}}</span>
    <span v-else v-html="tip"></span>
  </div>
</template>

<script>
  export default {
    name: 've-msg-tips',
    data () {
      return {
      }
    },
    props: {
      tip: {
        type: String,
        default: ''
      },
      tipType: {
        type: String,
        default: 'text'
      },
      type: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style lang="scss" scoped>
.msg-tip-box {
  display: inline-block;
  position: relative;
  font-size: 12px;
  height: 20px;
  i {
    display: inline-block;
    width: 20px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    border: solid 1px rgba(85, 85, 85, 1);
    border-radius: 50%;
    color: #555;
    font-style: normal;
    &:hover {
      cursor: pointer;
      opacity: 0.8;
    }
  }
  span {
    position: relative;
    display: inline-block;
    max-width: 400px;
    transform: translateY(-50%);
    margin-top: 10px;
    left: 8px;
    padding: 10px;
    vertical-align: top;
    border-radius: 3px;
    color: #fff;
    opacity: 0;
    word-wrap: break-word;
    word-break: break-all;
    z-index: 10;
    background-color: rgba(49, 49, 49, 1);
    box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.4);
    line-height: 20px;
    &:after {
      display: block;
      position: absolute;
      content: '';
      height: 0px;
      width: 0px;
      top: 50%;
      left: -4px;
      -webkit-transform: translateY(-50%);
      transform: translateY(-50%);
      border-top: 4px solid transparent;
      border-right: 4px solid #313131;
      border-bottom: 5px solid transparent;
    }
  }
  i:hover + span {
    opacity: 0.8;
    transition: opacity 1s;
  }
  &.left {
    width: 20px;
    float: right;
    margin-left: 10px;
    span {
      left: -274px;
      width: 260px;
      margin-top: -9px;
      &:after {
        display: none;
      }
      &:before {
        display: block;
        position: absolute;
        content: '';
        height: 0px;
        width: 0px;
        top: 50%;
        right: -4px;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        border-top: 4px solid transparent;
        border-left: 4px solid #313131;
        border-bottom: 5px solid transparent;
      }
    }
  }
}
</style>
