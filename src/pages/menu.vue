<template>
  <section class="menu-container" :class="{close:close}">
    <section class="menu-logo">
      <span class="menu-title" :class="{close:close}">净菜销售</span>
      <span class="menu-anchor" :class="{close:close}">
        <!-- <i class="iconfont icon-nav-open"></i> -->
        <div class="fence" :class="{closed:!menuState,close:close}" @click="toggleMenu">
          <div class="horizontal"></div>
          <div class="horizontal"></div>
          <div class="horizontal"></div>
          <div class="vertical"></div>
          <div class="vertical"></div>
          <div class="vertical"></div>
        </div>
      </span>
    </section>
    <el-menu
      :collapse="close"
      :default-active="$route.path"
      ref="markMenu"
      router
      class="mark-menu"
      @open="handleOpen"
      @close="handleClose"
      background-color="#212221"
      text-color="#fff"
      active-text-color="#fff" >
      <!-- <el-submenu index="1">
        <template slot="title">
          <i class="menu-icon icon_console"></i>
          <span>控制台</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="">点点滴滴</el-menu-item>
        </el-menu-item-group>
      </el-submenu> -->
      <el-submenu index="1">
        <template slot="title">
          <i class="menu-icon icon_activity"></i>
          <span>活动管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/liveMager/list">活动列表</el-menu-item>
          <el-menu-item index="/liveMager/create">新建活动</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <!-- <el-submenu index="3">
        <template slot="title">
          <i class="menu-icon icon_marketing"></i>
          <span>营销管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/site">活动官网</el-menu-item>
          <el-menu-item index="">直播引导页</el-menu-item>
        </el-menu-item-group>
      </el-submenu> -->
      <!-- <el-submenu index="4">
        <template slot="title">
          <i class="menu-icon icon_spread"></i>
          <span>推广中心</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/setAccount">账户信息</el-menu-item>
        </el-menu-item-group>
      </el-submenu> -->
      <!-- <el-submenu index="5">
        <template slot="title">
          <i class="menu-icon icon_crm"></i>
          <span>客户管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/setAccount">账户信息</el-menu-item>
        </el-menu-item-group>
      </el-submenu> -->
      <!-- <el-submenu index="6">
        <template slot="title">
          <i class="menu-icon icon_data"></i>
          <span>数据中心</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/setAccount">账户信息</el-menu-item>
        </el-menu-item-group>
      </el-submenu> -->
     <!-- <el-submenu index="2">
        <template slot="title">
          <i class="menu-icon icon_marketing"></i>
          <span>营销管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/4">用户总览</el-menu-item>
          <el-menu-item index="/5">用户池</el-menu-item>
          <el-menu-item index="/6">用户群组</el-menu-item>
        </el-menu-item-group>
      </el-submenu>-->
      <el-submenu index="3">
        <template slot="title">
          <i class="menu-icon icon_crm"></i>
          <span>用户管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/userManage/overview">用户总览</el-menu-item>
          <el-menu-item index="/userManage/pond">用户池</el-menu-item>
          <el-menu-item index="/userManage/userGroupsIndex">用户群组</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <!-- <el-submenu index="4">
        <template slot="title">
          <i class="menu-icon icon_data"></i>
          <span>数据中心</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/7">用户总览</el-menu-item>
          <el-menu-item index="/8">用户池</el-menu-item>
          <el-menu-item index="/9">用户群组</el-menu-item>
        </el-menu-item-group>
      </el-submenu> -->
       <el-submenu index="5">
        <template slot="title">
          <i class="menu-icon icon_account"></i>
          <span>账户管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/setAccount">账号设置</el-menu-item>
          <el-menu-item index="/assetMager/assetList">资产管理</el-menu-item>
          <el-menu-item index="/wxserver/wxserve">微信服务号</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </section>
</template>
<script>
export default {
  props: {
    close: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      menuState: true
    }
  },
  methods: {
    toggleMenu () {
      if (this.toggleMenu.holding) return
      this.toggleMenu.holding = true
      this.$emit('update:close', !this.close)
      setTimeout(() => {
        this.menuState = !this.menuState
        this.toggleMenu.holding = false
      }, 600)
    },
    handleOpen (key, keyPath) {
      // console.log(key, keyPath);
    },
    handleClose (key, keyPath) {
      // console.log(key, keyPath);
    },
    goWelcome () {
      for (let index of this.$refs.markMenu.openedMenus) {
        setTimeout(() => {
          this.$refs.markMenu.close(index)
        }, 0)
      }
    }
  }
}
</script>

<style scoped lang="scss">
.menu-container /deep/ {
  .menu-logo {
    height: 70px;
    line-height: 70px;
    font-size: 0;
    background-color: #ffd021;
    color: #1a1a1a;
    .menu-title {
      font-size: 24px;
      width: 172px;
      text-align: center;
      display: inline-block;
      vertical-align: middle;
      overflow: hidden;
      height: 100%;
      &.close {
        width: 0;
        padding: 0;
      }
    }
    .menu-anchor {
      font-size: 24px;
      position: relative;
      display: inline-block;
      &.close {
        left: 30px;
        top: 6px;
      }
    }
    .fence {
      position: absolute;
      top: -8px;
      width: 20px;
      height: 20px;
      line-height: 0;
      cursor: pointer;
      .horizontal {
        position: absolute;
        display: inline-block;
        width: 22px;
        height: 2px;
        background-color: #1a1a1a;
        top: -1px;
        left: 0;
        transform-style: preserve-3d;
        transition: all 0.2s;
        &:nth-child(1) {
          transition-delay: 0s;
        }
        &:nth-child(2) {
          top: 6px;
          transition-delay: 0.1s;
        }
        &:nth-child(3) {
          top: 14px;
          transition-delay: 0.2s;
        }
      }
      .vertical {
        position: absolute;
        display: inline-block;
        width: 2px;
        height: 22px;
        background-color: #1a1a1a;
        top: -3px;
        left: 0;
        transform-style: preserve-3d;
        transition: all 0.2s;
        transform: rotateX(-90deg);
        &:nth-child(4) {
          transition-delay: 0.3s;
        }
        &:nth-child(5) {
          left: 10px;
          transition-delay: 0.4s;
        }
        &:nth-child(6) {
          left: 20px;
          transition-delay: 0.5s;
        }
      }
      &.close {
        top: -12px;
        .horizontal {
          transform: rotateY(-90deg);
        }
        .vertical {
          transform: rotateX(0);
        }
      }
      &.closed {
        .horizontal {
          &:nth-child(1) {
            transition-delay: 0.3s;
          }
          &:nth-child(2) {
            transition-delay: 0.4s;
          }
          &:nth-child(3) {
            transition-delay: 0.5s;
          }
        }
        .vertical {
          &:nth-child(4) {
            transition-delay: 0s;
          }
          &:nth-child(5) {
            transition-delay: 0.1s;
          }
          &:nth-child(6) {
            transition-delay: 0.2s;
          }
        }
      }
    }
    a {
      color: inherit !important;
      text-decoration: none;
    }
  }

  .mark-menu {
    li {
      cursor: pointer;
    }
    padding-top: 10px;
    border-right: 0;
    &.el-menu--collapse {
      width: 100%;
    }
    .is-active {
      .el-submenu__title {
        color: #ffd021 !important;
        .icon_console {
          background-image: url(../assets/image/icon_console_hover.png);
        }
        .icon_activity {
          background-image: url(../assets/image/icon_activity_hover.png);
        }
        .icon_marketing {
          background-image: url(../assets/image/icon_marketing_hover.png);
        }
        .icon_spread {
          background-image: url(../assets/image/icon_spread_hover.png);
        }
        .icon_crm {
          background-image: url(../assets/image/icon_crm_hover.png);
        }
        .icon_data {
          background-image: url(../assets/image/icon_data_hover.png);
        }
        .icon_account {
          background-image: url(../assets/image/icon_account_hover.png);
        }
      }
      .el-menu-item.is-active {
        color: #ffd021 !important;
      }
      .el-submenu__icon-arrow {
        color: #ffd021 !important;
      }
    }
    .el-submenu__title {
      font-size: 16px;
      height: 56px;
      line-height: 56px;
      padding: 0 30px !important;
      i {
        color: #f7f7f7;
      }
      .menu-icon {
        display: inline-block;
        width: 22px;
        height: 22px;
        background-repeat: no-repeat;
        background-size: cover;
        margin-top: -1px;
        margin-right: 8px;
      }
      .icon_console {
        background-image: url(../assets/image/icon_console.png);
      }
      .icon_activity {
        background-image: url(../assets/image/icon_activity.png);
      }
      .icon_marketing {
        background-image: url(../assets/image/icon_marketing.png);
      }
      .icon_spread {
        background-image: url(../assets/image/icon_spread.png);
      }
      .icon_crm {
        background-image: url(../assets/image/icon_crm.png);
      }
      .icon_data {
        background-image: url(../assets/image/icon_data.png);
      }
      .icon_account {
        background-image: url(../assets/image/icon_account.png);
      }
    }
    .el-menu-item {
      position: relative;
      height: 55px;
      line-height: 55px;
      padding-left: 64px !important;
      a {
        color: inherit !important;
        text-decoration: none;
      }
      &:before{
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 4px;
        height: 100%;
      }
      &.is-active {
        background-color: #2f302f !important;
        /*border-left: 4px solid #ffd021;*/
        padding-left: 64px !important;
        &:before{
          background-color: #ffd021;
        }
      }
    }
    .el-submenu__icon-arrow {
      margin-top: -6px;
      right: 32px;
    }
    .el-menu-item {
      font-size: 16px;
    }
    .el-menu-item-group__title {
      display: none;
    }
  }
}
</style>
