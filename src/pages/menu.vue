<template>
  <section>
    <section class="edu-icon" >微吼营销</section>
    <el-menu
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
          <el-menu-item index="/brand/template">活动官网</el-menu-item>
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
  methods: {
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
i {
  color: #fff;
  margin-right: 2px;
  font-size: 12px;
}
.edu-icon {
  height: 75px;
  line-height: 70px;
  font-size: 24px;
  padding-left: 20px;
  a {
    color: inherit !important;
    text-decoration: none;
  }
}
.edu-menu /deep/ {
  width: 201px;
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
</style>
