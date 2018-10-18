<template>
  <div class="preview">
    <div class="item-container clearfix">
      <div class="item-box vhall-item fl">
        <div class="item-title">
          <ve-title width="200px" title="微吼指数" tip="本场活动的综合效果，最高分100"></ve-title>
        </div>
        <div class="item-mid">
          88
          <span>良好</span>
        </div>
        <div class="item-bottom">
          <span>环比<i class="down">▼</i>42.23%</span>
          <span>平均<i class="up">▲</i>42.23%</span>
        </div>
      </div>
      <div class="item-box spread fl">
        <div class="box fl" style="width: 20%;">
          <div class="item-title">
            <ve-title width="300px" title="观众" tip="观众总数，用来衡量一场直播内容和吸引力的重要指标"></ve-title>
          </div>
          <ve-circle style="margin-top: 8px;" d="70px" :value="80"></ve-circle>
        </div>
        <div class="box fl" style="width: 20%;">
          <div class="item-title">
            <ve-title width="300px" title="观看时长"
                      tip="统计该场直播中所有观众的平均观看时长，反应观众在直播间内的平均停留时长。平均观看时长=所有观众观看时长之和/观众总数；注：观看时长包含直播和回放两部分。为了计算简便，系统假定回放"></ve-title>
          </div>
          <ve-circle style="margin-top: 8px;" d="70px" :value="50"></ve-circle>
        </div>
        <div class="box fl" style="width: 20%;">
          <div class="item-title">
            <ve-title width="300px" title="推广"
                      tip="衡量一场直播在前期宣传推广的触达效果。推广方式包括推广中心中的邮件、短信、微信三种方式。推广效果=最终成为观众人数/推广渠道触达人数"></ve-title>
          </div>
          <ve-circle style="margin-top: 8px;" d="70px" :value="30"></ve-circle>
        </div>
        <div class="box fl" style="width: 20%;">
          <div class="item-title">
            <ve-title width="300px" title="传播" tip="衡量一场直播中，观众的自传播效果。展现观众在直播中分享拉新的效果"></ve-title>
          </div>
          <ve-circle style="margin-top: 8px;" d="70px" :value="60"></ve-circle>
        </div>
        <div class="box fl" style="width: 20%;">
          <div class="item-title">
            <ve-title width="100px" title="互动" tip="根据直播中的互动行为，判断该场直播，观众主动参与互动的意向是否强烈。互动效果=观众的所有互动次数/观众总数"></ve-title>
          </div>
          <ve-circle style="margin-top: 8px;" d="70px" :value="90"></ve-circle>
        </div>
      </div>
      <div class="item-box fl">
        <div class="box fl" style="width: 25%;">
          <div class="item-title">
            <ve-title width="220px" title="触达用户" tip="使用推广工具（短信、微信、邮件）触达的用户数量"></ve-title>
          </div>
          <div class="item-mid">
            18654
            <span>良好</span>
          </div>
          <div class="item-bottom">
            <span>环比<i class="down">▼</i>42.23%</span>
            <span>平均<i class="up">▲</i>42.23%</span>
          </div>
        </div>
        <div class="box fl" style="width: 25%;">
          <div class="item-title">
            <ve-title width="190px" title="观众总数" tip="观看了直播（包括回放）的人数"></ve-title>
          </div>
          <div class="item-mid">
            18654
            <span>良好</span>
          </div>
          <div class="item-bottom">
            <span>环比<i class="down">▼</i>42.23%</span>
            <span>平均<i class="up">▲</i>42.23%</span>
          </div>
        </div>
        <div class="box fl" style="width: 25%;">
          <div class="item-title">
            <ve-title width="170px" title="新用户" tip="第一次观看直播的用户数量"></ve-title>
          </div>
          <div class="item-mid">
            18654
            <span>良好</span>
          </div>
          <div class="item-bottom">
            <span>环比<i class="down">▼</i>42.23%</span>
            <span>平均<i class="up">▲</i>42.23%</span>
          </div>
        </div>
        <div class="box fl" style="width: 25%;">
          <div class="item-title">
            <ve-title width="140px" title="新增优质用户" tip="观看后变为优质用户的数量"></ve-title>
          </div>
          <div class="item-mid">
            18654
            <span>良好</span>
          </div>
          <div class="item-bottom">
            <span>环比<i class="down">▼</i>42.23%</span>
            <span>平均<i class="up">▲</i>42.23%</span>
          </div>
        </div>
      </div>
      <div class="item-box fl">
        <div class="box fl" style="width: 25%;">
          <div class="item-title">
            <ve-title width="160px" title="平均观看时长" tip="观众观看直播的平均时间"></ve-title>
          </div>
          <div class="item-mid">
            18654
            <span>良好</span>
          </div>
          <div class="item-bottom">
            <span>环比<i class="down">▼</i>42.23%</span>
            <span>平均<i class="up">▲</i>42.23%</span>
          </div>
        </div>
        <div class="box fl" style="width: 25%;">
          <div class="item-title">
            <ve-title width="200px" title="推广效果" tip="根据活动的推广效果，评判您的推广途径是否有效"></ve-title>
          </div>
          <div class="item-mid">
            18654
            <span>良好</span>
          </div>
          <div class="item-bottom">
            <span>环比<i class="down">▼</i>42.23%</span>
            <span>平均<i class="up">▲</i>42.23%</span>
          </div>
        </div>
        <div class="box fl" style="width: 25%;">
          <div class="item-title">
            <ve-title width="200px" title="传播K因子" tip="根据活动中观众分享活动的有效次数，评判活动的吸引力"></ve-title>
          </div>
          <div class="item-mid">
            18654
            <span>良好</span>
          </div>
          <div class="item-bottom">
            <span>环比<i class="down">▼</i>42.23%</span>
            <span>平均<i class="up">▲</i>42.23%</span>
          </div>
        </div>
        <div class="box fl" style="width: 25%;">
          <div class="item-title">
            <ve-title width="140px" title="互动系数" tip="评判直播中观众的互动活跃度"></ve-title>
          </div>
          <div class="item-mid">
            18654
            <span>良好</span>
          </div>
          <div class="item-bottom">
            <span>环比<i class="down">▼</i>42.23%</span>
            <span>平均<i class="up">▲</i>42.23%</span>
          </div>
        </div>
      </div>
    </div>
    <div class="chart-box">
      <p class="title">用户旅途</p>
      <div id="myChart" style="height: 500px;margin-bottom: 50px;"></div>
    </div>
  </div>
</template>

<script>
  import VeTitle from './ve-title'
  import VeCircle from 'src/components/ve-circle'
  import dataService from 'src/api/data-service'

  let echarts = require('echarts/lib/echarts')
  require('echarts/lib/chart/sankey')
  require('echarts/lib/component/tooltip')
  export default {
    name: 'preview',
    components: {VeTitle, VeCircle},
    created () {
      console.log(dataService)
      this.$nextTick(() => {
        this.renderChart()
      })
    },
    methods: {
      renderChart () {
        let res = {
          code: 200,
          msg: null,
          data: {
            sourceList: [
              {source: 1, sourceName: '邮件', value: 1000},
              {source: 2, sourceName: '短信', value: 500},
              {source: 3, sourceName: '活动官网', value: 10000}
            ],
            sourceLinks: [
              {source: 1, sourceName: '邮件', target: 3, targetName: '活动官网', value: 1000},
              {source: 2, sourceName: '短信', target: 3, targetName: '活动官网', value: 500}
            ]
          }
        }
        console.log(res)
        let keyDatas = []
        let links = []
        res.data.sourceList.forEach((item) => {
          keyDatas.push({
            name: item.source + '',
            showName: item.sourceName,
            value: item.value
          })
        })
        res.data.sourceLinks.forEach((item) => {
          links.push({
            source: item.source + '',
            sourceName: item.sourceName,
            target: item.target + '',
            targetName: item.targetName,
            value: item.value
          })
        })
        let option = {
          tooltip: {
            trigger: 'item',
            formatter: (item) => {
              if (item.data.sourceName) {
                return `${item.data.sourceName}→${item.data.targetName} (${item.data.value})`
              }
              return ''
            }
          },
          series: {
            type: 'sankey',
            layout: 'none',
            left: 0,
            right: '60',
            label: {
              normal: {
                show: true,
                formatter: (item) => {
                  return `${item.data.showName}\n(${item.data.value})`
                },
                textStyle: {
                  fontSize: 14
                }
              }
            },
            data: keyDatas,
            links: links
          }
        }
        let myChart = echarts.init(document.getElementById('myChart'))
        myChart.setOption(option)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "assets/css/mixin.scss";

  .chart-box {
    .title {
      font-size: 16px;
      margin: 20px 0 10px 0;
    }
  }

  .item-container {
    .item-box {
      border: solid 1px $color-bd;
      border-radius: 4px;
      padding: 10px;
      box-sizing: border-box;
      height: 124px;
      width: 100%;
      margin: 10px 0;
      font-size: 14px;
      .item-title {
        display: block;
        text-align: center;
        font-size: 18px;
      }
      .item-mid {
        height: 60px;
        line-height: 60px;
        font-size: 30px;
        font-weight: 600;
        text-align: center;
        span {
          display: inline-block;
          border: solid 1px $color-bd;
          font-size: 14px;
          line-height: 24px;
          padding: 0 10px;
          border-radius: 4px;
          vertical-align: 5px;
          font-weight: 400;
        }
      }
      .item-bottom {
        text-align: center;
        span {
          padding: 0 5px;
          .down {
            color: $color-red;
          }
          .up {
            color: green;
          }
        }
      }
    }
  }

  .preview {
    .item-container {
      .vhall-item {
        width: 300px;
      }
      .spread {
        margin-left: 20px;
        width: calc(100% - 320px);
      }
    }
  }

</style>
