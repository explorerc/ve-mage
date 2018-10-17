<template>
  <div class="template1-container" :class="{isEdit:editAble}">
    <com-panel class="section1" :edit="editAble" v-model="data.section1Data.panel">
      <com-logo class="logo" :edit="editAble" v-model="data.section1Data.logo"></com-logo>
      <com-nav class="nav" :edit="editAble" v-model="data.section1Data.nav"></com-nav>
    </com-panel>
    <!-- <com-panel class="section2" :edit="editAble" v-model="data.section2Data.panel">
      <div class="mask">
        <com-font :edit="editAble" v-model="data.section2Data.font"></com-font>
        <com-btn class="btn" :edit="editAble" v-model="data.section2Data.btn"></com-btn>
      </div>
    </com-panel> -->
    <div class="section2" :edit="editAble" >
      <com-panel :edit="editAble" v-model="data.section2Data.panel">
      </com-panel>
      <com-block1 :edit="editAble" :max="1" v-model="data.section2Data.block1"></com-block1>
    </div>
    <!-- <com-panel class="section3" :edit="editAble" v-model="data.section3Data.panel">
      <com-font :edit="editAble" v-model="data.section3Data.font"></com-font>
      <com-block1 :edit="editAble" :max="3" v-model="data.section3Data.block1"></com-block1>
    </com-panel> -->

    <div class="section3" :edit="editAble" v-model="data.section3Data.panel">
      <com-block1 :edit="editAble" :max="5" v-model="data.section3Data.block1"></com-block1>
    </div>

    <div class="section4" :edit="editAble" v-model="data.section4Data.panel">
      <com-font :edit="editAble" v-model="data.section4Data.font"></com-font>
      <div class="video-list clearfix">
        <div class="video-item" v-for="(item, idx) in data.section4Data.list" :key='idx'>
          <com-video :edit="editAble" v-model="item.video"></com-video>
          <com-font :edit="editAble" v-model="item.video.font"></com-font>
        </div>
      </div>
    </div>
    <!-- <com-panel class="section4" :edit="editAble" v-model="data.section4Data.panel">
      <com-font :edit="editAble" v-model="data.section4Data.font"></com-font>
      <com-block1 :edit="editAble" v-model="data.section4Data.block1"></com-block1>
    </com-panel> -->

    <com-panel class="section5" :edit="editAble" v-model="data.section5Data.panel">
      <com-font :edit="editAble" v-model="data.section5Data.font"></com-font>
        <com-btn class="btn" :edit="editAble" v-model="data.section5Data.btn"></com-btn>
    </com-panel>
    <!-- <com-panel class="section5" :edit="editAble" v-model="data.section5Data.panel">
      <com-font :edit="editAble" v-model="data.section5Data.font"></com-font>
      <com-block1 :edit="editAble" :max="3" v-model="data.section5Data.block1"></com-block1>
    </com-panel> -->
    <!-- <com-panel class="section6" :edit="editAble" v-model="data.section6Data.panel">
      <com-share :edit="editAble" :share="shareData" v-model="data.section6Data.share"></com-share>
    </com-panel> -->
    <com-panel class="section8" :edit="editAble" v-model="data.section8Data.panel">
      <com-font :edit="editAble" v-model="data.section8Data.font"></com-font>
      <com-block1 :edit="editAble" :max="10" v-model="data.section8Data.block1"></com-block1>
    </com-panel>
    <com-panel class="section6" :edit="editAble" v-model="data.section6Data.panel">
      <com-font :edit="editAble" v-model="data.section6Data.font"></com-font>
      <com-block1 :edit="editAble" :max="10" v-model="data.section6Data.block1"></com-block1>
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
      data: defaultData.template3()
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
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.1);
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
          border-left: 1px solid #e2e2e2;
          a {
            padding-bottom: 9px;
            min-width: 64px;
            display: inline-block;
            text-align: center;
            &:hover {
              border-bottom: 3px solid #ffd021;
            }
          }
        }
      }
    }
  }
  .section2 {
    width: 100%;
    height: auto;
    text-align: center;
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
            padding-top: 120px;
          }
        }
        img {
          width: 385px;
          height: 487px;
        }
      }
    }
    .btn-container {
      width: 200px;
      height: 40px;
      border-radius: 4px;
      margin-top: 50px;
      .btn-content {
        width: 100%;
        height: 100%;
      }
    }
  }
  .section3 {
    width: 100%;
    height: auto;
    text-align: center;
    .panel {
      padding-bottom: 40px;
    }
    .font-container {
      margin-top: 50px;
      text-align: left;
      width: 650px;
      min-height: 82px;
    }
    .block1-group {
      width: 1280px;
      padding-top: 50px;
      margin: auto;
      .block1-item {
        display: block;
        margin: auto;
        margin-bottom: 80px;
        &:last-child {
          margin-bottom: 0;
        }
        &.left {
          img {
            margin-right: 0;
            margin-left: 80px;
          }
        }
        .content {
          width: auto;
        }
        img {
          width: 500px;
          height: 500px;
          margin-right: 80px;
        }
      }
    }
  }
  .section4 {
    width: 100%;
    height: 820px;
    text-align: center;
    overflow: hidden;
    position: relative;
    padding-top: 100px;
    .font-container {
      margin-top: 13px;
      text-align: center;
      width: 100%;
      min-height: 90px;
    }
    .video-list {
      width: 1280px;
      margin: 0 auto;
      .video-item {
        width: 400px;
        height: 254px;
        float: left;
        margin-right: 40px;
        &:last-child {
          margin-right: 0px;
        }
      }
    }
    .video-container {
      margin-top: 10px;
      width: 100%;
      height: 100%;
      margin: auto;
      .video-content {
        height: 100%;
      }
    }
  }
  .section5 {
    width: 100%;
    height: 330px;
    .panel {
      text-align: center;
      background: RGBA(0, 157, 181, 1);
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
        width: 120px;
        height: 120px;
        margin-right: 90px;
        margin-bottom: 30px;
        &:nth-of-type(5) {
          margin-right: 0;
        }
        img {
          width: 120px;
          display: block;
          margin: auto;
        }
      }
    }
  }
  .section7 {
    width: 100%;
    height: 300px;
    .panel {
      text-align: center;
    }
    .font-content {
      margin-top: 70px;
      text-align: left;
      width: 650px;
      min-height: 100px;
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
        border-radius: 20px;
        font-size: 16px;
      }
    }
  }
  .section8 {
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
        width: 200px;
        height: 200px;
        margin-right: 90px;
        margin-bottom: 100px;
        &:nth-of-type(4) {
          margin-right: 0;
        }
        img {
          width: 100%;
          height: 100%;
          display: block;
          margin: auto;
          border-radius: 500px;
        }
        .content {
          text-align: center;
          padding-top: 20px;
        }
      }
    }
  }
}
</style>
