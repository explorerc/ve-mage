<template>
  <div class="exit-email-box">
    <div>
      <div class="content">
        <span>
           <i class="iconfont icon-duihao1"></i>
        </span>
        <span>退订成功，欢迎您再次订阅！</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'exit-email'
  }
</script>
<style lang="scss" scoped>
  .exit-email-box {
    height: 100vh;
    background-color: #f5f5f5;
    div{
      position: relative;
      top: 50px;
      height: calc(100vh - 100px);
      margin: 0 10%;
      background-color: #fff;
      border: solid 1px #E2E2E2;
      border-radius: 4px;
      span{
        &:first-child{
          display: block;
          height: 50px;
          width: 50px;
          margin: 0 auto;
          line-height: 50px;
          border-radius: 50%;
          background-color: #4B5AFE;
          color: #fff;
          text-align: center;
          .icon-duihao1{
            font-size: 30px;
          }
        }
        &:last-child{
          display: block;
          line-height: 60px;
          font-size: 24px;
          text-align: center;
          color: #222;
        }
      }
      .content{
        position: absolute;
        top: 30%;
        left: 50%;
        width: 314px;
        height: 90px;
        margin-left: -157px;
        border:none;
      }
    }
  }
</style>
