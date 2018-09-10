<template>
  <div class="setting-box">
    <div class="form-list">
      <div class="form-row">
        <div class="form-title">推流方式</div>
        <div class="form-content">
          <div class="nav-menu fr">
            <span :class="{active:setting.pushStreamType==0}" @click="changeNav(0)">浏览器发起</span>
            <span :class="{active:setting.pushStreamType==1}" @click="changeNav(1)">第三方推流</span>
          </div>
        </div>
      </div>
      <div class="form-row">
        <div class="form-title">媒体设备</div>
        <div class="form-content">
          <button class="default-button fr">选择设备</button>
        </div>
      </div>
      <div class="form-row">
        <div class="form-title">观众聊天禁言</div>
        <div class="form-content">
          <el-switch
            class="fr"
            v-model="setting.isChart">
          </el-switch>
        </div>
      </div>
      <div class="form-row">
        <div class="form-title">观众端显示在线人数</div>
        <div class="form-content">
          <el-switch
            class="fr"
            v-model="setting.isPersonCount">
          </el-switch>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'settings',
    data () {
      return {
        setting: {
          isChart: false, // 是否聊天禁言
          isPersonCount: false, // 是否在线人数
          pushStreamType: 0 // 推流方式
        }
      }
    },
    methods: {
      changeNav (idx) {
        this.setting.pushStreamType = idx
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "assets/css/mixin.scss";

  .setting-box {
    width: 360px;
    padding: 20px 20px 0 20px;
    border: solid 1px $color-bd;
    margin: 20px auto;
    font-size: 14px;
  }

  .nav-menu {
    font-size: 0;
    border: solid 1px $color-bd;
    border-radius: 4px;
    height: 40px;
    line-height: 38px;
    span {
      display: inline-block;
      width: 84px;
      font-size: 14px;
      text-align: center;
      transition: background-color .2s;
      &.active {
        background-color: $color-default-active;
      }
      &:hover {
        cursor: pointer;
        opacity: .9;
      }
    }
  }

  .form-list {
    .form-row {
      display: flex;
      line-height: 40px;
      padding: 10px 0;
      .form-title {
        width: 140px;
      }
      .form-content /deep/ {
        flex: 1;
        .el-switch {
          line-height: 40px;
          height: 40px;
        }
      }
    }
  }
</style>
