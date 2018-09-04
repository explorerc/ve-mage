<template>
  <section class="menu-container" >
    <section class="menu-icon">
      <span class="menu-logo" :class="{hide:close}">微吼知客</span>
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
      ref="eduMenu"
      router
      class="edu-menu"
      @open="handleOpen"
      @close="handleClose"
      background-color="#212221"
      text-color="#fff"
      active-text-color="#fff" >
      <el-submenu index="1">
        <template slot="title">
          <i class="iconfont icon-kechengguanli"></i>
          <span>活动管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/liveMager">活动列表</el-menu-item>
          <el-menu-item index="/liveMager/create">新建活动</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="iconfont icon-kechengguanli"></i>
          <span>品牌管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/brand/site">活动官网</el-menu-item>
          <el-menu-item index="">直播引导页</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="iconfont icon-ziliaoguanli"></i>
          <span>账户管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/setAccount">账户信息</el-menu-item>
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
      for (let index of this.$refs.eduMenu.openedMenus) {
        setTimeout(() => {
          this.$refs.eduMenu.close(index)
        }, 0)
      }
    }
  }
}
</script>

<style scoped lang="scss">
.menu-container /deep/ {
  .menu-icon {
    height: 70px;
    line-height: 70px;
    font-size: 0;
    background-color: #ffd021;
    color: #1a1a1a;
    .menu-logo {
      font-size: 24px;
      padding: 0 35px 0 38px;
    }
    .menu-anchor {
      font-size: 24px;
      position: relative;
      display: inline-block;
      &.close {
        left: 34px;
        top: 6px;
      }
    }
    .fence {
      position: absolute;
      top: -16px;
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
        top: 0;
        left: 0;
        transform-style: preserve-3d;
        transition: all 0.2s;
        &:nth-child(1) {
          transition-delay: 0s;
        }
        &:nth-child(2) {
          top: 7px;
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

  .edu-menu {
    &.el-menu--collapse {
      width: 96px;
    }
    .el-submenu__title {
      font-size: 12px;
      height: 34px;
      line-height: 34px;
    }
    .el-menu-item {
      height: 34px;
      line-height: 34px;
      // padding-left: 53px !important;
      a {
        color: inherit !important;
        text-decoration: none;
      }
      &.is-active {
        background-color: #2f302f !important;
        border-left: 4px solid #52cc90;
        padding-left: 36px !important;
      }
    }
    .el-submenu__icon-arrow {
      margin-top: -6px;
    }
    .el-menu-item {
      font-size: 12px;
    }
    .el-menu-item-group__title {
      display: none;
    }
  }
}
</style>
