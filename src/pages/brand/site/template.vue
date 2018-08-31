<template>
  <div class="template-container">
    <com-panel customClass="section1" :edit="editAble" v-model="section1Data.data.panel">
      <com-logo customClass="logo" :edit="editAble" v-model="section1Data.data.logo"></com-logo>
       <com-nav customClass="nav" :edit="editAble" v-model="section1Data.data.nav"></com-nav>
    </com-panel>
    <com-panel customClass="section2" :edit="editAble" v-model="section2Data.data.panel">
      <com-font customClass="font" :edit="editAble" v-model="section2Data.data.font.content"></com-font>
      <com-btn customClass="btn" :edit="editAble" v-model="section2Data.data.btn"></com-btn>
    </com-panel>
    <com-panel customClass="section3" :edit="editAble" v-model="section3Data.data.panel">
      <com-font :edit="editAble" v-model="section3Data.data.font.content"></com-font>
      <com-block1 :edit="editAble" v-model="section3Data.data.block1"></com-block1>
    </com-panel>
  </div>
</template>

<script>
import ComLogo from 'components/site/logo'
import ComNav from 'components/site/navigation'
import ComPanel from 'components/site/panel'
import ComFont from 'components/site/font'
import ComBtn from 'components/site/button'
import ComBlock1 from 'components/site/block1'

export default {
  components: {
    ComLogo, ComNav, ComPanel, ComFont, ComBtn, ComBlock1
  },
  data () {
    return {
      editAble: true,
      section1Data: {
        state: 'enable',
        data: {
          panel: {
            bgType: 'img',
            videoType: 'upload',
            img: 'mp-dev/5c/09/5c0910c30c7750c6bf8a5a0a3f9b1e85.png',
            color: 'rgba(0, 0, 0, 1)'
          },
          logo: {
            url: 'mp-dev/8e/22/8e2298ad578ed4a3c848653d0e1a4e46.png',
            link: ''
          },
          nav: [
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
          ]
        }
      },
      section2Data: {
        state: 'enable',
        data: {
          panel: {
            bgType: 'color',
            color: 'rgba(0, 0, 0, 1)'
          },
          font: {
            content: `<h1 style="text-align: center; line-height: 1.8;"><font color="#ffffff" style="font-size: 32px;">Adobe 峰会 | 数字营销大会</font></h1><div style="text-align: center; line-height: 1.8;"><font color="#ffffff"><span style="font-size: 16px;">2017 年 3 月 19–23 日，拉斯维加斯</span><br></font></div><div style="text-align: center; line-height: 1.8;"><font color="#ffffff"><span style="font-size: 16px;">参加最重要的数字营销专业人士活动，获得全球顶级数字营销专家的最新洞察。</span><br></font></div>`
          },
          btn: {
            bgColor: 'rgba(255, 255, 255, 1)',
            fontColor: 'rgba(51, 51, 51, 1)',
            text: '活动报名1',
            link: ''
          }
        }
      },
      section3Data: {
        state: 'enable',
        data: {
          panel: {
            bgType: 'color',
            color: 'rgba(255, 255, 255, 1)'
          },
          font: {
            content: `<div style="text-align: center;"><span style="background-color: transparent; font-size: 40px;">即刻打造自己的直播平台</span></div>`
          },
          block1: {
            type: 'top',
            list: [{
              content: `<div style="text-align: left; line-height: 2.5;"><span style="color: rgb(255, 255, 255); font-size: 24px;">&nbsp;&nbsp;</span><span style="font-size: 22px; color: rgb(255, 255, 255);">一天接入</span></div><div><div style="text-align: left; line-height: 1.5;"><font color="#ffffff"><span style="font-family: Consolas, &quot;Lucida Console&quot;, &quot;Courier New&quot;, monospace; white-space: pre-wrap; font-size: 12px;">  完善的SDK/API</span><br></font></div></div><div style="text-align: left; line-height: 1.5;"><font color="#ffffff"><span style="font-family: Consolas, &quot;Lucida Console&quot;, &quot;Courier New&quot;, monospace; font-size: 12px; white-space: pre-wrap;">  高完成度的Demo体验，组件化的解决方案</span><span style="font-family: Consolas, &quot;Lucida Console&quot;, &quot;Courier New&quot;, monospace; white-space: pre-wrap;"><br></span></font></div><div style="text-align: left; line-height: 1.5;"><font color="#ffffff"><span style="font-family: Consolas, &quot;Lucida Console&quot;, &quot;Courier New&quot;, monospace; font-size: 12px; white-space: pre-wrap;">  使用户无论从0到1搭建</span><span style="font-family: Consolas, &quot;Lucida Console&quot;, &quot;Courier New&quot;, monospace; font-size: 12px; white-space: pre-wrap;"><br></span></font></div><div style="text-align: left; line-height: 1.5;"><font face="Consolas, Lucida Console, Courier New, monospace" color="#ffffff"><span style="font-size: 12px; white-space: pre-wrap;">  还是接入已有产品，都同样方便快捷</span></font><br></div>`,
              img: 'mp-dev/76/d8/76d840cb274ed18cc68a8f60c9c325b3.png'
            },
            {
              content: `<div style="text-align: left; line-height: 2.5;"><span style="color: rgb(255, 255, 255); font-size: 24px;">&nbsp; </span><span style="color: rgb(255, 255, 255); font-size: 22px;">节省成本</span></div><div><div style="text-align: left; line-height: 1.5;"><font color="#ffffff"><span style="font-family: Consolas, &quot;Lucida Console&quot;, &quot;Courier New&quot;, monospace; white-space: pre-wrap; font-size: 12px;">  丰富完善的功能</span><br></font></div></div><div style="text-align: left; line-height: 1.5;"><font color="#ffffff"><span style="font-family: Consolas, &quot;Lucida Console&quot;, &quot;Courier New&quot;, monospace; font-size: 12px; white-space: pre-wrap;">  </span></font><font color="#ffffff" face="Consolas, Lucida Console, Courier New, monospace"><span style="font-size: 12px; white-space: pre-wrap;">全面的开发文档，快捷的接入方式</span></font></div><div style="text-align: left; line-height: 1.5;"><font color="#ffffff"><span style="font-family: Consolas, &quot;Lucida Console&quot;, &quot;Courier New&quot;, monospace; font-size: 12px; white-space: pre-wrap;">  </span></font><font color="#ffffff" face="Consolas, Lucida Console, Courier New, monospace"><span style="font-size: 12px; white-space: pre-wrap;">一站式的技术服务</span></font></div><div style="text-align: left; line-height: 1.5;"><font color="#ffffff" face="Consolas, Lucida Console, Courier New, monospace"><span style="font-size: 12px; white-space: pre-wrap;">  帮助减少企业90%的开发成本</span></font><br></div><div style="text-align: left; line-height: 1.5;"><font color="#ffffff" face="Consolas, Lucida Console, Courier New, monospace"><span style="font-size: 12px; white-space: pre-wrap;">  省钱又省力</span></font></div>`,
              img: 'mp-dev/40/04/4004ad110f3a85016ac62b387185f1eb.png'
            },
            {
              content: `<div style="text-align: left; line-height: 2.5;"><span style="color: rgb(255, 255, 255); font-size: 24px;">&nbsp;&nbsp;</span><span style="font-size: 22px; color: rgb(255, 255, 255);">方便快捷</span></div><div><div style="text-align: left; line-height: 1.5;"><font color="#ffffff"><span style="font-family: Consolas, &quot;Lucida Console&quot;, &quot;Courier New&quot;, monospace; white-space: pre-wrap; font-size: 12px;">  完善的SDK/API，方便快捷</span><br></font></div></div><div style="text-align: left; line-height: 1.5;"><font color="#ffffff"><span style="font-family: Consolas, &quot;Lucida Console&quot;, &quot;Courier New&quot;, monospace; font-size: 12px; white-space: pre-wrap;">  高完成度的Demo体验</span><span style="font-family: Consolas, &quot;Lucida Console&quot;, &quot;Courier New&quot;, monospace; white-space: pre-wrap;"><br></span></font></div><div style="text-align: left; line-height: 1.5;"><font color="#ffffff"><span style="font-family: Consolas, &quot;Lucida Console&quot;, &quot;Courier New&quot;, monospace; font-size: 12px; white-space: pre-wrap;">  使用户无论从0到1搭建，组件化的</span><span style="font-family: Consolas, &quot;Lucida Console&quot;, &quot;Courier New&quot;, monospace; font-size: 12px; white-space: pre-wrap;"><br></span></font></div><div style="text-align: left; line-height: 1.5;"><font face="Consolas, Lucida Console, Courier New, monospace" color="#ffffff"><span style="font-size: 12px; white-space: pre-wrap;">  解决方案还是接入已有产品</span></font><br></div>`,
              img: 'mp-dev/76/d8/76d840cb274ed18cc68a8f60c9c325b3.png'
            }]
          }
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
.template-container /deep/ {
  min-width: 1366px;
  .section1 {
    width: 100%;
    height: 580px;
    position: relative;
    overflow: hidden;
    .logo {
      width: 100px;
      height: 52px;
      margin-left: 10px;
      position: absolute;
      top: 0;
    }
    .nav {
      position: absolute;
      top: 0;
      right: 10px;
      height: 52px;
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
  .section2 {
    width: 100%;
    height: auto;
    .panel {
      padding: 50px 0;
      text-align: center;
    }
    .font-content {
      text-align: left;
      width: 580px;
      min-height: 100px;
    }
    .btn {
      display: block;
      margin-top: 30px;
      .btn-content {
        display: inline-block;
        position: relative;
      }
      .com-button {
        min-width: 180px;
        height: 45px;
        border-radius: 20px;
        font-size: 16px;
      }
    }
  }
  .section3 {
    width: 100%;
    height: auto;
    .panel {
      padding: 50px 0;
      text-align: center;
    }
    .font-content {
      text-align: left;
      width: 580px;
      min-height: 60px;
      margin-bottom: 40px;
    }
  }
}
</style>
