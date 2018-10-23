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
          <div class="chart-item" id="chart04" style="height: 400px;"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import VeTitle from './ve-title'
  import VeCircle from 'src/components/ve-circle'
  import dataService from 'src/api/data-service'
  import { lines, bars, barAndLine, scatter, random } from 'src/utils/chart-tool'
  import NavMenu from './nav-menu'

  export default {
    name: 'live-data',
    components: { VeTitle, VeCircle, NavMenu },
    data () {
      return {
        watchType: 0,
        watcherLineData: {}
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
        let res = {
          'code': 200,
          'msg': null,
          'data': {
            'days': {
              xAxis: ['2018-01-01', '2018-01-02', '2018-01-03', '2018-01-04', '2018-01-05'],
              pv: [random(20, 100), random(20, 100), random(20, 100), 36, 40, 50],
              uv: [random(20, 100), 20, random(20, 100), 36, 40, 50],
              ip: [random(20, 100), 20, random(20, 100), 36, 40, 50]
            },
            'hours': {
              xAxis: ['12:00', '13:00', '14:00', '15:00', '16:00'],
              pv: [random(20, 100), 20, random(20, 100), 36, 40, 50],
              uv: [random(20, 100), 20, random(20, 100), 36, 40, 50],
              ip: [random(20, 100), 20, random(20, 100), 36, 40, 50]
            }
          }
        }
        this.watcherLineData = res.data
      },
      changeMenu (val) {
        if (this.watchType === val) return
        this.watchType = val
        const typeAttr = this.watchType ? 'days' : 'hours'
        lines('chart01', {
          xAxisData: this.watcherLineData[typeAttr].xAxis,
          datas: [
            { name: '浏览次数', data: this.watcherLineData[typeAttr].pv },
            { name: '独立访问', data: this.watcherLineData[typeAttr].uv },
            { name: 'IP', data: this.watcherLineData[typeAttr].ip }
          ]
        })
      },
      renderChart () {
        // 观众趋势图（PV、UV）
        lines('chart01', {
          xAxisData: this.watcherLineData.hours.xAxis,
          datas: [
            { name: '浏览次数', data: this.watcherLineData.hours.pv },
            { name: '独立访问', data: this.watcherLineData.hours.uv },
            { name: 'IP', data: this.watcherLineData.hours.ip }
          ]
        })
        // 直播观众时长分布图
        this.liveTimeLengthChart()
        // 观看回放时段
        this.playBackTimeScatter()
        // 互动工具参与趋势图（PV、UV）
        this.hdTrendChart()
      },
      liveTimeLengthChart () {
        let res = {
          'code': 200,
          'msg': null,
          'data': {
            'list': [
              {
                'name': '1%-10%',
                'value': Math.round(Math.random() * 100)
              }, {
                'name': '10%-20%',
                'value': Math.round(Math.random() * 100)
              }, {
                'name': '2%-30%',
                'value': Math.round(Math.random() * 100)
              }, {
                'name': '30%-50%',
                'value': Math.round(Math.random() * 100)
              }, {
                'name': '50%-70%',
                'value': Math.round(Math.random() * 100)
              }, {
                'name': '70%以上',
                'value': Math.round(Math.random() * 100)
              }
            ]
          }
        }
        // 直播观众时长分布图
        bars('chart02', res.data.list, {
          left: 48,
          right: 20,
          top: 20,
          bottom: 20
        })
      },
      playBackTimeScatter () {
        let res = {
          'code': 200,
          'msg': null,
          'data': {
            'list': [
              { week: random(0, 6), time: '零点', value: random(1, 100) },
              { week: random(0, 6), time: '1点', value: random(1, 100) },
              { week: random(0, 6), time: '2点', value: random(1, 100) },
              { week: random(0, 6), time: '3点', value: random(1, 100) },
              { week: random(0, 6), time: '4点', value: random(1, 100) },
              { week: random(0, 6), time: 5, value: random(1, 100) },
              { week: random(0, 6), time: 6, value: random(1, 10) },
              { week: random(0, 6), time: 7, value: random(1, 10) },
              { week: random(0, 6), time: 8, value: random(1, 100) },
              { week: random(0, 6), time: 9, value: random(1, 100) },
              { week: random(0, 6), time: 10, value: random(1, 10) },
              { week: random(0, 6), time: 11, value: random(1, 10) },
              { week: random(0, 6), time: 12, value: random(1, 100) },
              { week: random(0, 6), time: 13, value: random(1, 10) },
              { week: random(0, 6), time: 14, value: random(1, 100) },
              { week: random(0, 6), time: 15, value: random(1, 100) },
              { week: random(0, 6), time: 16, value: random(1, 100) },
              { week: random(0, 6), time: 17, value: random(1, 100) },
              { week: random(0, 6), time: 18, value: random(1, 10) },
              { week: random(0, 6), time: 19, value: random(1, 10) },
              { week: random(0, 6), time: 20, value: random(1, 100) },
              { week: random(0, 6), time: 21, value: random(1, 10) },
              { week: random(0, 6), time: 22, value: random(1, 100) },
              { week: random(0, 6), time: 23, value: random(1, 10) }
            ]
          }
        }
        let xAxis = []
        let sDatas = []
        res.data.list.forEach(item => {
          xAxis.push(item.time)
          sDatas.push([item.time, item.week, item.value])
        })
        let serveDatas = {
          yAxis: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
          xAxis: Array.from(new Set(xAxis)),
          data: sDatas
        }
        scatter('chart03', serveDatas, {
          left: 70,
          right: 50,
          top: 20,
          bottom: 20
        })
      },
      hdTrendChart () {
        let res = {
          'code': 200,
          'msg': null,
          'data': {
            'xAxis': ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15'],
            'viewer': {
              'name': '观众人数',
              'dataList': [random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random()]
            },
            'interact': [
              {
                'name': '红包',
                'dataList': [random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random()]
              }, {
                'name': '抽奖',
                'dataList': [random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random()]
              }, {
                'name': '答题',
                'dataList': [random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random()]
              }, {
                'name': '商品推荐',
                'dataList': [random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random()]
              }
            ]
          }
        }
        let serveDatas = res.data.interact.map(item => {
          item['type'] = 'bar'
          item.data = item.dataList
          delete item.dataList
          return item
        })
        serveDatas.push({
          name: res.data.viewer.name,
          type: 'line',
          data: res.data.viewer.dataList
        })
        const chartDatas = {
          xAxis: res.data.xAxis,
          list: serveDatas
        }
        // 互动工具参与趋势图（PV、UV）
        barAndLine('chart04', chartDatas, {
          left: 48,
          top: 20,
          bottom: 20
        })
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
