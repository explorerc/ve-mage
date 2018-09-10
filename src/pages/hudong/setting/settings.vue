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
      <transition name="left-right">
        <div class="person-count-setting" v-if="setting.isPersonCount">
          <p>当前真实人数：56 人</p>
          <p>调整后显示人数：156 人</p>
          <p>在
            <el-select v-model="addPersonTime" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            内增加
            <com-input value="30"></com-input>
            人
          </p>
          <p class="btn-box">
            <button class="primary-button">确定</button>
            <button class="default-button">取消</button>
          </p>
        </div>
      </transition>
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
        },
        options: [
          {value: 10, label: '10秒'},
          {value: 30, label: '30秒'},
          {value: 60, label: '1分钟'},
          {value: 180, label: '3分钟'},
          {value: 300, label: '5分钟'},
          {value: 600, label: '10分钟'},
          {value: 900, label: '15分钟'},
          {value: 1800, label: '30分钟'},
          {value: 2700, label: '45分钟'},
          {value: 3600, label: '60分钟'},
          {value: 5400, label: '90分钟'},
          {value: 7200, label: '120分钟'},
          {value: 9000, label: '150分钟'},
          {value: 10800, label: '180分钟'}
        ],
        addPersonTime: 30
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
    width: 100%;
    max-width: 500px;
    height: calc(100% - 20px);
    padding: 20px 0 0;
    border: solid 1px $color-bd;
    margin: 20px auto;
    font-size: 14px;
    background-color: $color-bg-sub;
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
    overflow: hidden;
    .form-row {
      display: flex;
      line-height: 40px;
      padding: 10px 20px;
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
  .person-count-setting {
    position: relative;
    padding: 20px;
    border-top: solid 1px $color-bd;
    border-bottom: solid 1px $color-bd;
    background-color: #fff;
    &:after{
      display: block;
      position: absolute;
      content: '';
      top: -8px;
      right: 34px;
      height: 14px;
      width: 14px;
      border-top: solid 1px $color-bd;
      border-right: solid 1px $color-bd;
      transform: rotate(-45deg);
      background-color: #fff;
    }
    p {
      line-height: 40px;
      .com-input /deep/ {
        width: 60px;
        margin: 0 10px;
        input {
          height: 30px;
          line-height: 30px;
        }
      }
      .el-select{
        width: 100px;
      }
    }
    .btn-box {
      text-align: center;
      margin: 20px 0 10px 0;
      button {
        margin: 0 10px;
      }
    }
  }
</style>
