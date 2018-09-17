<template>
  <div class="template1-container" :class="{isEdit:editAble}">
    <com-panel class="section1" :edit="editAble" v-model="data.section1Data.panel">
      <com-logo class="logo" :edit="editAble" v-model="data.section1Data.logo"></com-logo>
      <com-nav class="nav" :edit="editAble" v-model="data.section1Data.nav"></com-nav>
    </com-panel>
    <div class="section2" :edit="editAble" >
      <com-block2 :edit="editAble" :max="3" v-model="data.section2Data.block2"></com-block2>
    </div>
    <com-panel class="section3" :edit="editAble" v-model="data.section3Data.panel">
      <com-font :edit="editAble" v-model="data.section3Data.font"></com-font>
      <com-block1 :edit="editAble" :max="3" v-model="data.section3Data.block1"></com-block1>
    </com-panel>
    <com-panel class="section4" :edit="editAble" v-model="data.section4Data.panel">
      <com-font :edit="editAble" v-model="data.section4Data.font"></com-font>
      <com-block1 :edit="editAble" v-model="data.section4Data.block1"></com-block1>
    </com-panel>
    <com-panel class="section5" :edit="editAble" v-model="data.section5Data.panel">
      <com-font :edit="editAble" v-model="data.section5Data.font"></com-font>
      <com-block1 :edit="editAble" :max="3" v-model="data.section5Data.block1"></com-block1>
    </com-panel>
    <com-panel class="section6" :edit="editAble" v-model="data.section6Data.panel">
      <com-share :edit="editAble" :share="shareData" v-model="data.section6Data.share"></com-share>
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
    height: 820px;
    .block2-content {
      height: 590px;
      .el-carousel {
        height: 100%;
        .el-carousel__container {
          height: 100% !important;
        }
      }
    }
  }
  .section3 {
    width: 100%;
    height: auto;
    text-align: center;
    .panel {
      padding-bottom: 80px;
    }
    .font-container {
      margin-top: 100px;
      text-align: left;
      width: 650px;
      min-height: 85px;
    }
    .block1-group {
      &.width3 {
        .block1-item {
          width: 346px;
          img {
            height: 192px;
          }
        }
      }
      .block1-item {
        width: 540px;
        margin-right: 40px;
        img {
          width: 100%;
          height: 300px;
        }
      }
    }
  }
  .section4 {
    width: 100%;
    height: auto;
    text-align: center;
    .panel {
      padding-bottom: 20px;
    }
    .font-container {
      margin-top: 50px;
      text-align: left;
      width: 650px;
      min-height: 85px;
    }
    .block1-group {
      &.width3 {
        .block1-item {
          width: 340px;
          height: 245px;
          img {
            height: 100%;
          }
        }
      }
      .block1-item {
        width: 540px;
        height: 350px;
        margin-right: 40px;
        img {
          width: 100%;
          height: 100%;
        }
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
      &.width3 {
        .block1-item {
          width: 346px;
          img {
            height: 200px;
          }
        }
      }
      .block1-item {
        width: 540px;
        margin-right: 40px;
        img {
          width: 100%;
          height: 310px;
        }
      }
    }
  }
  .section6 {
    width: 100%;
    height: 270px;
    .panel {
      padding-top: 50px;
      text-align: center;
    }
    .share-group {
      li {
        margin-right: 50px;
        .share-item {
          font-size: 18px;
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
}
</style>
