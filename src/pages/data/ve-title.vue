<template>
  <div class="ve-title">
    {{title}}
    <div class="ve-tip-box" v-if="tip">
      <i>?</i>
      <span class="tip" :style="{width:width}">
        <span>{{tip}}</span>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 've-title',
    props: {
      tip: String,
      title: String,
      width: {
        type: String,
        default: 'auto'
      }
    }
  }
</script>

<style lang="scss"  scoped>
  .ve-title{
    position: relative;
    display: inline-block;
    user-select: none;
    font-size: 14px;
    color: #222 !important;
    .ve-tip-box{
      position: relative;
      display: inline-block;
      top: -1px;
      width: 20px;
      height: 100%;
      z-index: 10;
      text-align: left;
      i{
        display: inline-block;
        width: 14px;
        height: 14px;
        line-height: 14px;
        text-align: center;
        border: solid 1px rgba(85,85,85,1);;
        border-radius: 50%;
        color: #555;
        font-style: normal;
        font-size: 12px;
        &:hover{
          cursor: pointer;
          opacity: .8;
        }
      }
      span.tip{
        position: absolute;
        display: inline-block;
        max-width: 400px;
        top: 50%;
        left: 26px;
        transform: translateY(-50%);
        padding: 6px 10px 4px 10px;
        border-radius: 3px;
        color: #fff;
        opacity: 0;
        word-wrap:break-word;
        word-break:break-all;
        z-index: 10;
        background-color: rgba(49,49,49,1);
        box-shadow:0px 2px 6px 0px rgba(0,0,0,0.4);
        line-height: 20px;
        font-size: 10px;
        &:after{
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
        z-index: 100;
      }
      i:hover + span{
        opacity: .9;
        transition: opacity 1s;
      }
    }
  }
</style>
