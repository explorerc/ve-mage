<template>
  <div class="data-container">
    <div class="data-header">
      <p class="title">{{activityInfo.title}}</p>
      <p class="detail">
        <span>开播时间：{{activityInfo.realStartTime||'0000-00-00'}}</span>
        <span>直播时长：{{activityInfo.liveTime|fmtTime}}</span>
      </p>
      <div class="nav-menu-box" v-if="selectMenu!==false">
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
  import dataService from 'src/api/data-service'
  import { mapMutations, mapState } from 'vuex'
  import * as types from '../../store/mutation-types'

  export default {
    name: 'data-main',
    components: { NavMenu },
    data () {
      return {
        activeId: '',
        currentMenu: 0,
        activityInfo: {
          title: '',
          realStartTime: '',
          liveTime: 0,
          status: ''
        },
        menuList: ['概览数据', '推广数据', '直播数据', '观众画像']
      }
    },
    filters: {
      fmtTime (value) {
        let h = ((value / 3600 >> 0) + '').padStart(2, 0)
        let m = ((value / 60 % 60 >> 0) + '').padStart(2, 0)
        let s = ((value % 60 >> 0) + '').padStart(2, 0)
        return `${h}:${m}:${s}`
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
        this.currentMenu = idx
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
        this.$get(dataService.GET_ACTIVITY_INFO, {
          activityId: this.activeId
        }).then((res) => {
          this.activityInfo = res.data
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .data-container {
    margin: 40px auto;
    max-width: 1366px;
    min-width: 1109px;
    color: #222;
    /* 设备宽度大于 1600 */
    @media all and (min-width: 1600px) {
      width: 1366px;
    }
    .data-header {
      .nav-menu-box {
        float: right;
        margin-top: -16px;
      }
      .title {
        font-size: 24px;
        line-height: 40px;
      }
      .detail {
        font-size: 14px;
        span {
          &:last-child {
            margin-left: 10px;
          }
        }
      }
    }
    .data-content {
      margin-top: 20px;
    }
  }
</style>
