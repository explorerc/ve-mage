<template>
  <div class="msg-tip-box">
    <i>?</i>
    <span>{{tip}}</span>
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
      }
    }
  }
</script>

<style lang="scss" scoped>
  .msg-tip-box{
    display: inline-block;
    position: relative;
    font-size: 12px;
    height: 20px;
    i{
      display: inline-block;
      width: 20px;
      height: 20px;
      line-height: 20px;
      text-align: center;
      border: solid 1px #e5e5e5;
      border-radius: 50%;
    &:hover{
       cursor: pointer;
       opacity: .8;
     }
    }
    span{
      position: relative;
      display: inline-block;
      max-width: 400px;
      transform: translateY(-50%);
      margin-top: 10px;
      padding: 5px;
      vertical-align: top;
      border-radius: 3px;
      background-color: rgba(0,0,0,.8);
      color: #fff;
      opacity: 0;
      word-wrap:break-word;
      word-break:break-all;
      z-index: 10;
    }
    i:hover + span{
      opacity: 1;
      transition: opacity 1s;
    }
  }
</style>
