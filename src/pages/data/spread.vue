<template>
  <div class="data-box spread">
    <p class="title">推广渠道</p>
    <div class="item-container clearfix">
      <div class="item-box fl">
        <div class="box fl" style="width: 33.3333%;">
          <div class="item-title">
            <ve-title width="180px" title="邮件发送数量" tip="使用邮件作为推广方式，发送的人数"></ve-title>
          </div>
          <div class="item-mid">18654</div>
        </div>
        <div class="box fl" style="width: 33.3333%;">
          <div class="item-title">
            <ve-title width="180px" title="微信发送数量" tip="使用微信作为推广方式，发送的人数"></ve-title>
          </div>
          <div class="item-mid">18654</div>
        </div>
        <div class="box fl" style="width: 33.3333%;">
          <div class="item-title">
            <ve-title width="180px" title="短信发送数量" tip="使用短信作为推广方式，发送的人数"></ve-title>
          </div>
          <div class="item-mid">18654</div>
        </div>
      </div>
    </div>
    <div class="chart-container">
      <div class="chart-box" style="width: 100%;">
        <p class="title">推广效果</p>
        <div class="chart-item" id="chart01" style="height: 300px;"></div>
      </div>
    </div>
    <div class="chart-container">
      <div class="chart-box">
        <p class="title">邮件活跃概况
          <span class="chart-menu">
             <nav-menu :menus="['天', '月']" :currentMenu="emailType" @changeMenu="changeEmailMenu"></nav-menu>
          </span>
        </p>
        <div class="chart-item" id="chart02" style="height: 280px;"></div>
      </div>
      <div class="chart-box">
        <p class="title">微信活跃概况
          <span class="chart-menu">
             <nav-menu :menus="['天', '月']" :currentMenu="weChatType" @changeMenu="changeWeChatMenu"></nav-menu>
          </span></p>
        <div class="chart-item" id="chart03" style="height: 280px;"></div>
      </div>
      <div class="chart-box">
        <p class="title">短信活跃概况
          <span class="chart-menu">
             <nav-menu :menus="['天', '月']" :currentMenu="smsType" @changeMenu="changeSmsMenu"></nav-menu>
          </span></p>
        <div class="chart-item" id="chart04" style="height: 280px;"></div>
      </div>
    </div>
    <p class="title">活动官网</p>
    <div class="item-container clearfix">
      <div class="item-box fl">
        <div class="box fl" style="width: 33.3333%;">
          <div class="item-title">
            <ve-title width="130px" title="页面访问人数" tip="访问活动官网的人数"></ve-title>
          </div>
          <div class="item-mid">18654</div>
        </div>
        <div class="box fl" style="width: 33.3333%;">
          <div class="item-title">
            <ve-title width="140px" title="页面访问次数" tip="访问活动官网的人次数"></ve-title>
          </div>
          <div class="item-mid">18654</div>
        </div>
        <div class="box fl" style="width: 33.3333%;">
          <div class="item-title">
            <ve-title width="170px" title="人均停留时长" tip="在活动官网的平均停留时间"></ve-title>
          </div>
          <div class="item-mid">00:01:13</div>
        </div>
      </div>
    </div>
    <div class="chart-container">
      <div class="chart-box" style="width: 100%;">
        <p class="title">页面访问趋势图
          <span class="chart-menu">
             <nav-menu :menus="['天', '月']" :currentMenu="webwiteType" @changeMenu="changeWebMenu"></nav-menu>
          </span></p>
        <div class="chart-item" id="chart05" style="height: 400px;"></div>
      </div>
    </div>
    <p class="title">直播引导页</p>
    <div class="item-container clearfix">
      <div class="item-box fl">
        <div class="box fl" style="width: 20%;">
          <div class="item-title">
            <ve-title width="130px" title="页面访问人数" tip="访问直播引导页的人数"></ve-title>
          </div>
          <div class="item-mid">18654</div>
        </div>
        <div class="box fl" style="width: 20%;">
          <div class="item-title">
            <ve-title width="130px" title="页面访问次数" tip="访问直播引导页的人次数"></ve-title>
          </div>
          <div class="item-mid">4234</div>
        </div>
        <div class="box fl" style="width: 20%;">
          <div class="item-title">
            <ve-title width="130px" title="预约人数" tip="直播开始前预约活动的人数"></ve-title>
          </div>
          <div class="item-mid">4234</div>
        </div>
        <div class="box fl" style="width: 20%;">
          <div class="item-title">
            <ve-title width="130px" title="实到人数" tip="预约活动的人数中实际参加活动的人数"></ve-title>
          </div>
          <div class="item-mid">4234</div>
        </div>
        <div class="box fl" style="width: 20%;">
          <div class="item-title">
            <ve-title width="130px" title="预约参会率" tip="本次直播的预约参会率"></ve-title>
          </div>
          <div class="item-mid">4234</div>
        </div>
      </div>
    </div>
    <div class="chart-container">
      <div class="chart-box" style="width: 100%;">
        <p class="title">页面访问
          <span class="chart-menu">
             <nav-menu :menus="['人数', '人次']" :currentMenu="pageLinkType" @changeMenu="changePageLinkMenu"></nav-menu>
          </span></p>
        <div class="chart-item" id="chart06" style="height: 400px;"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import VeTitle from './ve-title'
  import VeCircle from 'src/components/ve-circle'
  import dataService from 'src/api/data-service'
  import {barPile, lines} from 'src/utils/chart-tool'
  import NavMenu from './nav-menu'

  export default {
    name: 'spead',
    components: {VeTitle, VeCircle, NavMenu},
    data () {
      return {
        emailType: 0,
        weChatType: 0,
        smsType: 0,
        webwiteType: 0,
        pageLinkType: 0,
        ratioDataList: {},
        speadDatas: {},
        webwiteDatas: {},
        pageLinkDatas: {}
      }
    },
    created () {
      console.log(dataService)
      let res = {
        'code': 200,
        'msg': null,
        'data': {
          email: {
            days: {
              xAxis: ['2018-01-01', '2018-01-02', '2018-01-03', '2018-01-04', '2018-01-05'],
              nums: [10, 20, 30, 36, 40, 50],
              times: [9, 19, 30, 39, 30, 82]
            },
            months: {
              xAxis: ['2018-01', '2018-02', '2018-03', '2018-04', '2018-05'],
              nums: [18, 20, 20, 36, 40, 60],
              times: [10, 20, 30, 46, 40, 50]
            }
          },
          weChat: {
            days: {
              xAxis: ['2018-01-01', '2018-01-02', '2018-01-03', '2018-01-04', '2018-01-05'],
              nums: [40, 20, 40, 36, 40, 50],
              times: [10, 20, 30, 36, 62, 52]
            },
            months: {
              xAxis: ['2018-01', '2018-02', '2018-03', '2018-04', '2018-05'],
              nums: [10, 30, 30, 36, 40, 52],
              times: [10, 20, 38, 36, 42, 50]
            }
          },
          sms: {
            days: {
              xAxis: ['2018-01-01', '2018-01-02', '2018-01-03', '2018-01-04', '2018-01-05'],
              nums: [10, 40, 30, 36, 44, 50],
              times: [10, 26, 30, 86, 40, 50]
            },
            months: {
              xAxis: ['2018-01', '2018-02', '2018-03', '2018-04', '2018-05'],
              nums: [10, 20, 30, 36, 40, 90],
              times: [10, 20, 38, 36, 40, 200]
            }
          }
        }
      }
      let res1 = {
        code: 200,
        msg: null,
        data: {
          types: ['发送量', '点击链接', '观看直播'],
          list: [
            {
              type: 1,
              name: '邮件',
              data: [301, 101, 151, 211]
            },
            {
              type: 2,
              name: '微信',
              data: [201, 131, 91, 221]
            },
            {
              type: 3,
              name: '短信',
              data: [361, 161, 121, 231]
            }
          ]
        }
      }
      this.speadDatas = res1.data
      this.ratioDataList = res.data
      this.$nextTick(() => {
        this.renderChart()
      })
    },
    methods: {
      renderChart () {
        // 推广效果
        this.promotionEffect()
        // 活跃度系数
        this.initAcitviteRatio()
        // 活动官网--页面访问趋势图
        this.webwiteChart()
        // 直播引导页--页面访问趋势图
        this.pageLinkChart()
      },
      changeEmailMenu (val) {
        if (this.emailType === val) return
        this.emailType = val
        const typeAttr = this.emailType ? 'months' : 'days'
        lines('chart02', {
          xAxisData: this.ratioDataList.email[typeAttr].xAxis,
          datas: [
            {name: '活跃人数', data: this.ratioDataList.email[typeAttr].nums},
            {name: '活跃次数', data: this.ratioDataList.email[typeAttr].times}
          ]
        })
      },
      changeWeChatMenu (val) {
        if (this.weChatType === val) return
        this.weChatType = val
        const typeAttr = this.weChatType ? 'months' : 'days'
        lines('chart03', {
          xAxisData: this.ratioDataList.weChat[typeAttr].xAxis,
          datas: [
            {name: '活跃人数', data: this.ratioDataList.weChat[typeAttr].nums},
            {name: '活跃次数', data: this.ratioDataList.weChat[typeAttr].times}
          ]
        })
      },
      changeSmsMenu (val) {
        if (this.smsType === val) return
        this.smsType = val
        const typeAttr = this.smsType ? 'months' : 'days'
        lines('chart04', {
          xAxisData: this.ratioDataList.sms[typeAttr].xAxis,
          datas: [
            {name: '活跃人数', data: this.ratioDataList.sms[typeAttr].nums},
            {name: '活跃次数', data: this.ratioDataList.sms[typeAttr].times}
          ]
        })
      },
      changeWebMenu (val) {
        if (this.webwiteType === val) return
        this.webwiteType = val
        const typeAttr = this.webwiteType ? 'months' : 'days'
        lines('chart05', {
          xAxisData: this.webwiteDatas[typeAttr].xAxis,
          datas: [
            {name: 'UV', data: this.webwiteDatas[typeAttr].nums},
            {name: 'PV', data: this.webwiteDatas[typeAttr].times}
          ]
        })
      },
      changePageLinkMenu (val) {
        if (this.pageLinkType === val) return
        this.pageLinkType = val
        const typeAttr = this.pageLinkType ? 'uv' : 'pv'
        lines('chart06', {
          xAxisData: this.pageLinkDatas.xAxisData,
          datas: this.pageLinkDatas.lineObj[typeAttr]
        })
      },
      promotionEffect () {
        /* 绘制堆叠图 */
        barPile('chart01', {
          legendData: this.speadDatas.types,
          list: this.speadDatas.list
        })
      },
      initAcitviteRatio () {
        /* 邮件活跃 */
        lines('chart02', {
          xAxisData: this.ratioDataList.email.days.xAxis,
          datas: [
            {name: '活跃人数', data: this.ratioDataList.email.days.nums},
            {name: '活跃次数', data: this.ratioDataList.email.days.times}
          ]
        })
        /* 微信活跃 */
        lines('chart03', {
          xAxisData: this.ratioDataList.weChat.days.xAxis,
          datas: [
            {name: '活跃人数', data: this.ratioDataList.weChat.days.nums},
            {name: '活跃次数', data: this.ratioDataList.weChat.days.times}
          ]
        })
        /* 短信活跃 */
        lines('chart04', {
          xAxisData: this.ratioDataList.sms.days.xAxis,
          datas: [
            {name: '活跃人数', data: this.ratioDataList.sms.days.nums},
            {name: '活跃次数', data: this.ratioDataList.sms.days.times}
          ]
        })
      },
      webwiteChart () {
        let res = {
          'code': 200,
          'msg': null,
          'data': {
            days: {
              xAxis: ['2018-01-01', '2018-01-02', '2018-01-03', '2018-01-04', '2018-01-05'],
              nums: [10, 22, 33, 36, 46, 52],
              times: [6, 20, 30, 36, 40, 46]
            },
            months: {
              xAxis: ['2018-01', '2018-02', '2018-03', '2018-04', '2018-05'],
              nums: [6, 20, 30, 36, 40, 50],
              times: [10, 12, 32, 28, 36, 52]
            }
          }
        }
        this.webwiteDatas = res.data
        lines('chart05', {
          xAxisData: res.data.days.xAxis,
          datas: [
            {name: 'UV', data: res.data.days.nums},
            {name: 'PV', data: res.data.days.times}
          ]
        })
      },
      pageLinkChart () {
        let res = {
          'code': 200,
          'msg': null,
          'data': {
            xAxis: ['2018-01-01', '2018-01-02', '2018-01-03', '2018-01-04', '2018-01-05', '2018-01-06'],
            email: {
              nums: [12, 20, 30, 36, 40, 50],
              times: [11, 26, 36, 34, 46, 58]
            },
            sms: {
              nums: [8, 23, 33, 31, 30, 43],
              times: [10, 10, 20, 36, 40, 50]
            },
            weChat: {
              nums: [12, 23, 32, 33, 45, 59],
              times: [10, 30, 28, 36, 40, 40]
            },
            other: {
              nums: [4, 23, 36, 46, 33, 16],
              times: [7, 20, 30, 36, 10, 34]
            }
          }
        }
        let pageLinkDatas = {
          xAxisData: res.data.xAxis,
          lineObj: {
            uv: [],
            pv: []
          }
        }
        pageLinkDatas.lineObj.uv.push({name: '邮件', data: res.data.email.nums})
        pageLinkDatas.lineObj.pv.push({name: '邮件', data: res.data.email.times})
        pageLinkDatas.lineObj.uv.push({name: '短信', data: res.data.sms.nums})
        pageLinkDatas.lineObj.pv.push({name: '短信', data: res.data.sms.times})
        pageLinkDatas.lineObj.uv.push({name: '微信', data: res.data.weChat.nums})
        pageLinkDatas.lineObj.pv.push({name: '微信', data: res.data.weChat.times})
        pageLinkDatas.lineObj.uv.push({name: '其他', data: res.data.other.nums})
        pageLinkDatas.lineObj.pv.push({name: '其他', data: res.data.other.times})
        this.pageLinkDatas = pageLinkDatas
        lines('chart06', {
          xAxisData: this.pageLinkDatas.xAxisData,
          datas: this.pageLinkDatas.lineObj.pv
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
