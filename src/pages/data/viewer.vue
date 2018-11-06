<template>
  <div class="data-box viewer">
    <div class="data-pad">
      <p class="title">基础数据</p>
      <div class="item-container clearfix">
        <!--<div class="item-box fl">-->
        <!--<div class="box fl" style="width: 100%;">-->
        <!--<div class="item-title">-->
        <!--<ve-title title="观众总数"></ve-title>-->
        <!--</div>-->
        <!--<div class="item-mid data-link" @click="goPage('all')">{{basicUserData.viewerCount}}</div>-->
        <!--</div>-->
        <!--</div>-->
        <div class="item-box fl">
          <div class="box fl" style="width: 33.3333%;">
            <div class="item-title">
              <ve-title title="观众总数"></ve-title>
            </div>
            <div class="item-mid data-link" @click="goPage('all')">{{basicUserData.viewerCount}}</div>
          </div>
          <div class="box fl" style="width: 33.3333%;">
            <div class="item-title">
              <ve-title title="老用户"></ve-title>
            </div>
            <div class="item-mid data-link" @click="goPage('old')">{{basicUserData.oldUser}}</div>
          </div>
          <div class="box fl" style="width: 33.3333%;">
            <div class="item-title">
              <ve-title title="新用户"></ve-title>
            </div>
            <div class="item-mid data-link" @click="goPage('new')">{{basicUserData.newUser}}</div>
          </div>
        </div>
        <div class="item-box fl">
          <div class="box fl" style="width: 20%;">
            <div class="item-title">
              <ve-title title="优质用户"></ve-title>
            </div>
            <div class="item-mid data-link" @click="goPage('high')">{{basicUserData.highUser}}</div>
          </div>
          <div class="box fl" style="width: 20%;">
            <div class="item-title">
              <ve-title width="180px" title="高价值用户"></ve-title>
            </div>
            <div class="item-mid data-link" @click="goPage('vip')">{{basicUserData.vipUser}}</div>
          </div>
          <div class="box fl" style="width: 20%;">
            <div class="item-title">
              <ve-title width="180px" title="一般用户"></ve-title>
            </div>
            <div class="item-mid data-link" @click="goPage('ord')">{{basicUserData.ordinaryUser}}</div>
          </div>
          <div class="box fl" style="width: 20%;">
            <div class="item-title">
              <ve-title width="180px" title="潜在用户"></ve-title>
            </div>
            <div class="item-mid data-link" @click="goPage('potent')">{{basicUserData.potentialUser}}</div>
          </div>
          <div class="box fl" style="width: 20%;">
            <div class="item-title">
              <ve-title width="180px" title="流失用户"></ve-title>
            </div>
            <div class="item-mid data-link" @click="goPage('loss')">{{basicUserData.lossUser}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="data-pad">
      <div class="chart-box">
        <p class="title">观众比例</p>
        <div class="chart-container">
          <div class="chart-box" style="width: 50%;">
            <p class="title">新老观众占比</p>
            <div class="chart-item" id="chart01" style="height: 360px;"></div>
          </div>
          <div class="chart-box" style="width: 50%;">
            <p class="title">各级别用户占比</p>
            <div class="chart-item" id="chart02" style="height: 360px;"></div>
          </div>
        </div>
        <div class="chart-container">
          <div class="chart-box" style="width: 50%;">
            <p class="title">设备占比</p>
            <div class="chart-item" id="chart03" style="height: 360px;"></div>
          </div>
          <div class="chart-box" style="width: 50%;">
            <p class="title">操作系统占比</p>
            <div class="chart-item" id="chart04" style="height: 360px;"></div>
          </div>
        </div>
        <div class="chart-container">
          <div class="chart-box" style="width: 50%;">
            <p class="title">浏览器占比</p>
            <div class="chart-item" id="chart05" style="height: 360px;"></div>
          </div>
          <div class="chart-box" style="width: 50%;">
            <p class="title">性别占比</p>
            <div class="chart-item" id="chart06" style="height: 360px;"></div>
          </div>
        </div>
        <div class="chart-container">
          <div class="chart-box" style="width: 100%;">
            <p class="title" style="text-align: left;">地域</p>
            <div class="chart-item" id="chart07" style="height: 500px;"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import VeTitle from './ve-title'
  import VeCircle from 'src/components/ve-circle'
  import dataService from 'src/api/data-service'
  import { pie, barRadius } from 'src/utils/chart-tool'
  import NavMenu from './nav-menu'
  import { mapMutations } from 'vuex'
  import * as types from '../../store/mutation-types'

  export default {
    name: 'viewer',
    components: { VeTitle, VeCircle, NavMenu },
    data () {
      return {
        basicUserData: {
          viewerCount: 0,
          oldUser: 0,
          newUser: 0,
          highUser: 0,
          vipUser: 0,
          ordinaryUser: 0,
          potentialUser: 0,
          lossUser: 0
        }
      }
    },
    beforeDestroy () {
      window.callbackResize = null
      if (this.basicChart) { // 各级用户占比
        this.basicChart.dispose()
      }
      if (this.areaChart) { // 地域
        this.areaChart.dispose()
      }
      if (this.newOldUserChart) { // 新老观众占比
        this.newOldUserChart.dispose()
      }
      if (this.deviceChart) { // 设备占比
        this.deviceChart.dispose()
      }
      if (this.systemChart) { // 操作系统占比
        this.systemChart.dispose()
      }
      if (this.browserChart) { // 浏览器占比
        this.browserChart.dispose()
      }
      if (this.genderChart) { // 性别占比
        this.genderChart.dispose()
      }
    },
    created () {
      this.storeSelectMenu(3)
      this.activityId = this.$route.params.id
      this.initPage()
      window.callbackResize = () => {
        // 重新绘制
        this.resizeRenderChart()
      }
    },
    methods: {
      ...mapMutations('dataCenter', {
        storeSelectMenu: types.DATA_SELECT_MENU
      }),
      resizeRenderChart () {
        if (this.basicChart) { // 各级用户占比
          this.basicChart.resize()
        }
        if (this.areaChart) { // 地域
          this.areaChart.resize()
        }
        if (this.newOldUserChart) { // 新老观众占比
          this.newOldUserChart.resize()
        }
        if (this.deviceChart) { // 设备占比
          this.deviceChart.resize()
        }
        if (this.systemChart) { // 操作系统占比
          this.systemChart.resize()
        }
        if (this.browserChart) { // 浏览器占比
          this.browserChart.resize()
        }
        if (this.genderChart) { // 性别占比
          this.genderChart.resize()
        }
      },
      goPage (type) {
        this.$router.push(`/data/viewerList/${this.$route.params.id}?type=${type}`)
      },
      async initPage () {
        // 地域
        this.areaCountChart()
        // 基础数据
        await this.basicCount()
        // 观众比例
        this.viewerRate()
      },
      viewerRate () {
        return this.$get(dataService.GET_VIEWER_ROAT, {
          activityId: this.activityId
        }).then((res) => {
          if (res.code === 200 && res.data.length !== 0) {
            this.$nextTick(() => {
              // 新老观众占比
              this.newOldUserChart = pie('chart01', res.data.viewer)
              // 设备占比
              this.deviceChart = pie('chart03', res.data.device)
              // 操作系统占比
              this.systemChart = pie('chart04', res.data.system)
              // 浏览器占比
              this.browserChart = pie('chart05', res.data.browser)
              // 性别占比
              this.genderChart = pie('chart06', res.data.gender)
            })
          }
        })
      },
      basicCount () {
        return this.$get(dataService.GET_VIEWER_BASE, {
          activityId: this.activityId
        }).then((res) => {
          let serveData = [
            // { name: '观众总数', value: 0 },
            // { name: '老用户', value: 0 },
            // { name: '新用户', value: 0 },
            { name: '优质用户', value: 0 },
            { name: '高价值用户', value: 0 },
            { name: '一般用户', value: 0 },
            { name: '潜在用户', value: 0 },
            { name: '流失用户', value: 0 }
          ]
          if (res.code === 200 && res.data.length !== 0) {
            this.basicUserData = res.data
            serveData = [
              // { name: '观众总数', value: this.basicUserData.viewerCount },
              // { name: '老用户', value: this.basicUserData.oldUser },
              // { name: '新用户', value: this.basicUserData.newUser },
              { name: '优质用户', value: this.basicUserData.highUser },
              { name: '高价值用户', value: this.basicUserData.vipUser },
              { name: '一般用户', value: this.basicUserData.ordinaryUser },
              { name: '潜在用户', value: this.basicUserData.potentialUser },
              { name: '流失用户', value: this.basicUserData.lossUser }
            ]
          }
          // 各级别用户占比
          this.$nextTick(() => {
            this.basicChart = pie('chart02', serveData)
          })
        })
      },
      areaCountChart () {
        this.$get(dataService.GET_VIEWER_REGION, {
          activityId: this.activityId
        }).then((res) => {
          let listData = [{ name: '', value: 0 }]
          if (res.code === 200 && res.data.length !== 0) {
            listData = res.data.list
          }
          this.$nextTick(() => {
            this.areaChart = barRadius('chart07', listData)
          })
        })
      }
    }
  }
</script>
<style lang="scss" scoped src="./css/data.scss"></style>
<style lang="scss" scoped>
  .viewer {
    .data-pad {
      padding-bottom: 10px;
    }
    .item-container {
      border: none;
      .item-box:first-child {
        border-bottom: solid 1px #e2e2e2;
      }
    }
    .chart-container {
      .chart-box {
        .title {
          text-align: center;
        }
      }
    }
  }
</style>
