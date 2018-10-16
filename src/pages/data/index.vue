<template>
  <div class="data-container">
    <div class="data-header">
      <p>松下新品ALPHA发布会</p>
      <p>开播时间 2018.09.12 14:30:05 直播时长 2小时23分</p>
      <div class="nav-menu-box">
        <nav-menu :menus="menuList"
                  :currentMenu="currentMenu"
                  @changeMenu="changeMenu"></nav-menu>
      </div>
    </div>
    <div class="data-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import NavMenu from './nav-menu'

  export default {
    name: 'data-main',
    components: {NavMenu},
    data () {
      return {
        activeId: '',
        currentMenu: 0,
        menuList: ['概览数据', '推广数据', '直播数据', '观众数据']
      }
    },
    created () {
      this.activeId = this.$route.params.id
      const linkName = this.$route.name
      if (linkName === 'preview') {
        this.currentMenu = 0
      } else if (linkName === 'spread') {
        this.currentMenu = 1
      } else if (linkName === 'live') {
        this.currentMenu = 2
      } else if (linkName === 'viewer') {
        this.currentMenu = 3
      }
    },
    methods: {
      changeMenu (idx) {
        if (idx === 0) {
          this.$router.push(`/data/preview/${this.activeId}`)
        } else if (idx === 1) {
          this.$router.push(`/data/spread/${this.activeId}`)
        } else if (idx === 2) {
          this.$router.push(`/data/live/${this.activeId}`)
        } else if (idx === 3) {
          this.$router.push(`/data/viewer/${this.activeId}`)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .data-container {
    margin: 20px;
    background-color: #fff;
    padding: 20px;
    border-radius: 4px;
    .data-header {
      .nav-menu-box {
        float: right;
        margin-top: -16px;
      }
    }
    .data-content{
      margin-top: 20px;
    }
  }
</style>
