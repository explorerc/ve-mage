<template>
  <div class="data-container">
    <div class="data-header">
      <p>{{activityInfo.title}}</p>
      <p>
        <span>开播时间 {{activityInfo.startTime}}</span>
        <span>直播时长 2小时23分</span>
      </p>
      <div class="nav-menu-box">
        <nav-menu :menus="menuList"
                  :currentMenu="selectMenu"
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
  import activityService from 'src/api/activity-service'
  import { mapMutations, mapState } from 'vuex'
  import * as types from '../../store/mutation-types'

  export default {
    name: 'data-main',
    components: { NavMenu },
    data () {
      return {
        activeId: '',
        currentMenu: 0,
        activityInfo: {},
        menuList: ['概览数据', '推广数据', '直播数据', '观众画像']
      }
    },
    computed: {
      ...mapState('dataCenter', {
        selectMenu: state => state.selectMenu
      })
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
      } else if (linkName === 'viewer' || linkName === 'viewerList') {
        this.currentMenu = 3
      }
      this.storeSelectMenu(this.currentMenu)
      this.getDetails()
    },
    methods: {
      ...mapMutations('dataCenter', {
        storeSelectMenu: types.DATA_SELECT_MENU
      }),
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
        this.storeSelectMenu(this.currentMenu)
      },
      getDetails () {
        this.$get(activityService.GET_DETAILS, {
          activityId: this.activeId
        }).then((res) => {
          console.log(res)
          this.activityInfo = res.data.activity
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .data-container {
    margin: 40px auto;
    width: 1366px;
    min-width: 1019px;
    color: #222;
    /* 设备宽度大于 1600 */
    @media all and (min-width: 1600px) {
      width: 1366px;
    }

    /* 设备宽度小于 1600px */
    @media all and (max-width: 1600px) {
      width: 1019px;
    }

    .data-header {
      .nav-menu-box {
        float: right;
        margin-top: -16px;
      }
    }
    .data-content {
      margin-top: 20px;
    }
  }
</style>
