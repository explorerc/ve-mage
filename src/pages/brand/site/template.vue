<template>
  <div class="template-container">
    <com-block customClass="header">
      <com-logo customClass="logo"></com-logo>
       <com-nav
        customClass="nav"
        :list="navList"
      ></com-nav>
    </com-block>
    <com-block customClass="section1" :datas="section1Data">
      <com-font></com-font>
    </com-block>
    <!-- <div class="img-group">
      <img src="https://img.alicdn.com/tfs/TB1uf5JjhrI8KJjy0FpXXb5hVXa-1920-640.png" alt="">
    </div>  -->
  </div>
</template>

<script>
import ComLogo from 'components/site/logo'
import ComNav from 'components/site/navigation'
import ComBlock from 'components/site/block'
import ComFont from 'components/site/font'

export default {
  components: {
    ComLogo, ComNav, ComBlock, ComFont
  },
  data () {
    return {
      navList: [
        {
          text: '最新活动',
          type: '_blank'
        },
        {
          text: '产品',
          type: '_blank'
        },
        {
          text: '解决方案',
          type: '_blank'
        },
        {
          text: '数据智能',
          type: '_self'
        },
        {
          text: '云市场',
          type: '_self'
        },
        {
          text: '支持与服务',
          type: '_blank'
        }
      ],
      section1Data: {
        bgType: 'color',
        color: 'rgba(0, 0, 0, 1)'
      }
    }
  }
}
</script>

<style scoped lang="scss">
.template-container /deep/ {
  .header {
    width: 100%;
    height: 52px;
    position: relative;
    .logo {
      width: 100px;
      margin-left: 10px;
    }
    .nav {
      position: absolute;
      top: 0;
      right: 10px;
      height: 100%;
      .nav-group {
        font-size: 0;
        .nav-item {
          padding: 0 15px;
          height: 100%;
          line-height: 52px;
          color: white;
          font-size: 14px;
          display: inline-block;
          transition: all 0.3s;
          &:hover {
            color: #00a2ca;
          }
        }
      }
    }
  }
  .section1 {
    width: 100%;
    height: 590px;
  }
}
</style>
