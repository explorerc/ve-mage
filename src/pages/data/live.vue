<template>
  <div class="data-box spread">
    <p class="title">基础数据</p>
    <div class="item-container clearfix">
      <div class="item-box fl">
        <div class="box fl" style="width: 33.33333%;">
          <div class="item-title">
            <ve-title title="观看直播人数"></ve-title>
          </div>
          <div class="item-mid">2561</div>
        </div>
        <div class="box fl" style="width: 33.33333%;">
          <div class="item-title">
            <ve-title title="观看直播人次（次）"></ve-title>
          </div>
          <div class="item-mid">2561</div>
        </div>
        <div class="box fl" style="width: 33.33333%;">
          <div class="item-title">
            <ve-title title="人均观看直播时长"></ve-title>
          </div>
          <div class="item-mid">00:10:10</div>
        </div>
      </div>
      <div class="item-box fl">
        <div class="box fl" style="width: 33.33333%;">
          <div class="item-title">
            <ve-title title="观看回放人数"></ve-title>
          </div>
          <div class="item-mid">2561</div>
        </div>
        <div class="box fl" style="width: 33.33333%;">
          <div class="item-title">
            <ve-title title="观看回放人次（次）"></ve-title>
          </div>
          <div class="item-mid">2561</div>
        </div>
        <div class="box fl" style="width: 33.33333%;">
          <div class="item-title">
            <ve-title title="人均观看回放时长"></ve-title>
          </div>
          <div class="item-mid">00:09:10</div>
        </div>
      </div>
    </div>
    <div class="chart-box">
      <div class="chart-container">
        <div class="chart-box" style="width: 100%;">
          <p class="title">观众趋势图（PV、UV）
            <span class="chart-menu">
             <nav-menu :menus="['小时', '天']" :currentMenu="watchType" @changeMenu="changeMenu"></nav-menu>
          </span></p>
          <div class="chart-item" id="chart01" style="height: 360px;"></div>
        </div>
      </div>
      <div class="chart-container">
        <div class="chart-box" style="width: 50%;">
          <p class="title">直播观众时长分布图</p>
          <div class="chart-item" id="chart02" style="height: 360px;"></div>
        </div>
        <div class="chart-box" style="width: 50%;">
          <p class="title">观看回放时段</p>
          <div class="chart-item" id="chart03" style="height: 360px;"></div>
        </div>
      </div>
    </div>
    <p class="title">互动数据</p>
    <div class="item-container clearfix">
      <div class="item-box hd-data-item fl">
        <span class="hd-title">预约</span>
        <div class="hd-data">
          <span>6023</span>
          <span>预约人数</span>
        </div>
      </div>
      <div class="item-box hd-data-item fr">
        <span class="hd-title">聊天</span>
        <div class="hd-data">
          <span>6023</span>
          <span>聊天人数</span>
        </div>
        <div class="hd-data">
          <span>6023</span>
          <span>消息数量</span>
        </div>
      </div>
      <div class="item-box hd-data-item fl">
        <span class="hd-title">分享</span>
        <div class="hd-data">
          <span>6023</span>
          <span>有效分享</span>
        </div>
        <div class="hd-data">
          <span>6023</span>
          <span>邀请人数</span>
        </div>
      </div>
      <div class="item-box hd-data-item fr">
        <span class="hd-title">抽奖</span>
        <div class="hd-data">
          <span>6023</span>
          <span>中奖人数</span>
        </div>
        <div class="hd-data">
          <span>6023</span>
          <span>参与人数</span>
        </div>
      </div>
      <div class="item-box hd-data-item fl">
        <span class="hd-title">调查问卷</span>
        <div class="hd-data">
          <span>6023</span>
          <span>推送次数</span>
        </div>
        <div class="hd-data">
          <span>6023</span>
          <span>收到数据</span>
        </div>
      </div>
      <div class="item-box hd-data-item fr">
        <span class="hd-title">答题</span>
        <div class="hd-data">
          <span>6023</span>
          <span>推送次数</span>
        </div>
        <div class="hd-data">
          <span>6023</span>
          <span>参与答题人数</span>
        </div>
        <div class="hd-data">
          <span>6023</span>
          <span>获得奖励人数</span>
        </div>
      </div>
      <div class="item-box hd-data-item fl">
        <span class="hd-title">推荐卡片</span>
        <div class="hd-data">
          <span>6023</span>
          <span>推送次数</span>
        </div>
        <div class="hd-data">
          <span>6023</span>
          <span>浏览次数</span>
        </div>
        <div class="hd-data">
          <span>6023</span>
          <span>点击次数</span>
        </div>
      </div>
      <div class="item-box hd-data-item fr">
        <span class="hd-title">红包雨</span>
        <div class="hd-data">
          <span>6023</span>
          <span>参与人数</span>
        </div>
        <div class="hd-data">
          <span>8</span>
          <span>领取人数</span>
        </div>
        <div class="hd-data">
          <span>￥6023</span>
          <span>领取金额</span>
        </div>
      </div>
      <div class="item-box hd-data-item fl" style="width: 66%;">
        <span class="hd-title">商品推荐</span>
        <div class="hd-data" style="width: 25%;">
          <span>7/20</span>
          <span>商品上架数</span>
        </div>
        <div class="hd-data" style="width: 25%;">
          <span>8</span>
          <span>推送次数</span>
        </div>
        <div class="hd-data" style="width: 25%;">
          <span>8</span>
          <span>浏览次数</span>
        </div>
        <div class="hd-data" style="width: 25%;">
          <span>6023</span>
          <span>点击购买次数</span>
        </div>
      </div>
    </div>
    <div class="chart-box">
      <div class="chart-container">
        <div class="chart-box" style="width: 100%;">
          <p class="title">互动工具参与趋势图（PV、UV）</p>
          <div class="chart-item" id="chart04" style="height: 360px;"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import VeTitle from './ve-title'
  import VeCircle from 'src/components/ve-circle'
  import dataService from 'src/api/data-service'
  // import {pie, barRadius} from 'src/utils/chart-tool'
  import NavMenu from './nav-menu'

  export default {
    name: 'live-data',
    components: {VeTitle, VeCircle, NavMenu},
    data () {
      return {
        watchType: 0
      }
    },
    created () {
      console.log(dataService)
      this.initPage()
      this.$nextTick(() => {
        this.renderChart()
      })
    },
    methods: {
      initPage () {
      },
      changeMenu (val) {
        if (this.watchType === val) return
        this.watchType = val
      },
      renderChart () {
      }
    }
  }
</script>
<style lang="scss" scoped src="./css/data.scss"></style>
<style lang="scss" scoped>
  .spread {
    .item-container {
      .item-box {
        height: 94px;
      }
    }
  }
</style>
