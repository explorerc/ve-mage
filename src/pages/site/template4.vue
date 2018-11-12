<template>
  <div class="template1-container" :class="{isEdit:editAble}">
    <com-panel class="section1" :edit="editAble" v-model="data.section1Data.panel">
      <com-logo class="logo" :edit="editAble" v-model="data.section1Data.logo"></com-logo>
      <com-nav class="nav" :edit="editAble" v-model="data.section1Data.nav"></com-nav>
    </com-panel>
    <div class="section2" :edit="editAble" >
      <com-block2 :edit="editAble" :max="5" v-model="data.section2Data.block2">
      </com-block2>
    </div>
    <div class="section3" >
      <com-panel :edit="editAble" v-model="data.section3Data.panel">
      </com-panel>
      <com-block1 :edit="editAble" :max="3" v-model="data.section3Data.block1"></com-block1>
    </div>
    <com-panel class="section4" :edit="editAble" v-model="data.section4Data.panel">
      <div class="bg"></div>
      <com-font :edit="editAble" v-model="data.section4Data.font"></com-font>
      <com-video :edit="editAble" v-model="data.section4Data.video"></com-video>
    </com-panel>
    <com-panel class="section5" :edit="editAble" v-model="data.section5Data.panel">
      <com-font :edit="editAble" v-model="data.section5Data.font"></com-font>
      <com-block1 :edit="editAble" :btn="true" :max="4" v-model="data.section5Data.block1"></com-block1>
    </com-panel>
    <com-panel class="section6" :edit="editAble" v-model="data.section6Data.panel">
      <com-font :edit="editAble" v-model="data.section6Data.font"></com-font>
      <com-block1 :edit="editAble" :max="8" v-model="data.section6Data.block1"></com-block1>
    </com-panel>
    <com-panel class="section7" :edit="editAble" v-model="data.section7Data.panel">
      <com-font :edit="editAble" v-model="data.section7Data.font"></com-font>
        <com-btn class="btn" :edit="editAble" v-model="data.section7Data.btn"></com-btn>
    </com-panel>
    <div class="support">微吼直播提供技术支持</div>
  </div>
</template>

<script>
import ComLogo from 'components/site/logo'
import ComNav from 'components/site/navigation'
import ComPanel from 'components/site/panel'
import ComFont from 'components/site/font'
import ComBtn from 'components/site/button'
import ComBlock1 from 'components/site/block1'
import ComBlock2 from 'components/site/block2'
import ComShare from 'components/site/share'
import ComVideo from 'components/site/video'

import defaultData from './templateData'

export default {
  components: {
    ComLogo, ComNav, ComPanel, ComFont, ComBtn, ComBlock1, ComShare, ComBlock2, ComVideo
  },
  data () {
    return {
      data: defaultData.template4()
    }
  },
  props: {
    value: {
      type: Object,
      default () {
        return {}
      }
    },
    editAble: {
      type: Boolean,
      default: false
    },
    shareData: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  created () {
    if (this.value.tid) {
      this.data = this.value
    }
  }
}
</script>

<style scoped lang="scss">
.template1-container.isEdit {
  .section1 {
    position: relative;
  }
}
.template1-container /deep/ {
  min-width: 1366px;
  .edit {
    position: absolute;
    top: 0;
    right: 0;
    width: auto;
    height: 16px;
    display: none;
    z-index: 5;
    font-size: 0;
    i {
      cursor: pointer;
      display: inline-block;
      background-color: red;
      padding: 2px;
      font-size: 16px;
      &:first-child {
        margin-right: 1px;
      }
    }
  }
  .support {
    height: 50px;
    line-height: 50px;
    text-align: center;
    color: rgba(85, 85, 85, 1);
    font-size: 14px;
  }
  .section1 {
    width: 100%;
    height: 60px;
    z-index: 1;
    overflow: hidden;
    .logo {
      width: 100px;
      height: 100%;
      margin-left: 10px;
      position: absolute;
      top: 0;
    }
    .nav {
      position: absolute;
      top: 0;
      right: 10px;
      height: 100%;
      .nav-group {
        font-size: 0;
        line-height: 58px;
        .nav-item {
          padding: 0 27px;
          height: 30px;
          line-height: 30px;
          display: inline-block;
          color: white;
          font-size: 16px;
          vertical-align: middle;
          a {
            padding-bottom: 9px;
            min-width: 64px;
            display: inline-block;
            text-align: center;
            &:hover {
              border-bottom: 3px solid #2066e4;
            }
          }
        }
      }
    }
  }
  .section2 {
    width: 100%;
    .block2-content {
      height: 660px;
      .el-carousel {
        height: 100%;
        .el-carousel__container {
          height: 100% !important;
          .el-carousel__item {
            &.top {
              .content {
                position: absolute;
                top: 200px;
                left: 170px;
                .btn-container {
                  width: 200px;
                  height: 40px;
                  padding: 0;
                  font-size: 16px;
                  border: 1px solid rgba(255, 255, 255, 1);
                  background-color: transparent;
                  margin-top: 40px;
                  .com-button {
                    padding: 0;
                    line-height: 36px;
                  }
                }
              }
            }
          }
          .left-area {
            width: 400px;
            height: 100%;
            position: absolute;
          }
          img {
            width: 100%;
            height: auto;
          }
        }
      }
    }
  }
  .section3 {
    width: 100%;
    height: auto;
    text-align: center;
    padding-top: 100px;
    padding-bottom: 100px;
    position: relative;
    .panel-container {
      position: absolute;
      top: 160px;
      right: 0;
      display: none;
      width: 92px;
      height: 240px;
      z-index: 5;
    }
    .block1-group {
      position: relative;
      .block1-item {
        max-width: 1280px;
        &.left {
          .content {
            padding-right: 510px;
          }
        }
        img {
          width: 395px;
          height: 320px;
        }
      }
    }
  }
  .section4 {
    width: 100%;
    height: 820px;
    text-align: center;
    overflow: hidden;
    .bg {
      position: absolute;
      width: 939px;
      left: 32%;
      height: 2000px;
      top: -538px;
      background-color: white;
      transform: rotateZ(-38deg);
    }
    .panel {
      padding-bottom: 0;
    }
    .font-container {
      margin-top: 60px;
      text-align: left;
      width: 650px;
      min-height: 90px;
    }
    .video-container {
      margin-top: 10px;
      width: 1100px;
      height: 610px;
      margin: auto;
      .video-content {
        height: 100%;
      }
    }
  }
  .section5 {
    width: 100%;
    height: auto;
    text-align: center;
    .panel {
      padding-bottom: 40px;
    }
    .font-container {
      margin-top: 100px;
      text-align: left;
      width: 650px;
      min-height: 85px;
    }
    .block1-group {
      .block1-item {
        width: 370px;
        height: 270px;
        margin-right: 0;
        img {
          width: 100%;
          height: 100%;
        }
        .block1-bg {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.3);
          padding: 20px;
          &::before {
            content: '';
            display: block;
            position: absolute;
            bottom: 20px;
            top: 20px;
            left: 20px;
            right: 20px;
            border: 1px solid white;
          }
        }
        .content {
          padding: 20px;
          word-break: break-all;
        }
        .btn-container {
          width: 100px;
          height: 34px;
          font-size: 14px;
          position: absolute;
          bottom: 65px;
          left: 83px;
        }
      }
    }
  }
  .section6 {
    width: 100%;
    height: auto;
    text-align: center;
    .panel {
      padding-bottom: 40px;
    }
    .font-container {
      margin-top: 100px;
      text-align: left;
      width: 650px;
      min-height: 95px;
    }
    .block1-group {
      width: 1124px;
      .block1-item {
        width: 100px;
        height: 100px;
        margin-right: 90px;
        margin-bottom: 30px;
        &:nth-of-type(6) {
          margin-right: 0;
        }
        img {
          width: 100px;
          display: block;
          margin: auto;
        }
      }
    }
  }
  .section7 {
    width: 100%;
    height: 330px;
    .panel {
      text-align: center;
    }
    .font-content {
      margin-top: 70px;
      text-align: left;
      width: 650px;
      min-height: 100px;
    }
    .font-editer {
      height: 400px;
      background-color: #dadada;
    }
    .btn {
      display: block;
      margin-top: 24px;
      .btn-content {
        display: inline-block;
        position: relative;
      }
      .com-button {
        min-width: 200px;
        height: 40px;
        font-size: 16px;
        border: 1px solid white;
      }
    }
  }
}
</style>
