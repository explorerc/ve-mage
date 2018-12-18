<template>
  <div class="data-box spread">
    <div class="data-pad">
      <p class="title">推广渠道</p>
      <div class="item-container clearfix">
        <div class="item-box fl">
          <div class="box fl" style="width: 33.3333%;">
            <div class="item-title">
              <ve-title width="180px" title="邮件发送数量" tip="使用邮件作为推广方式，发送的人数"></ve-title>
            </div>
            <div class="item-mid">{{spreadChannelData.email}}</div>
          </div>
          <div class="box fl" style="width: 33.3333%;">
            <div class="item-title">
              <ve-title width="180px" title="微信发送数量" tip="使用微信作为推广方式，发送的人数"></ve-title>
            </div>
            <div class="item-mid">{{spreadChannelData.weChat}}</div>
          </div>
          <div class="box fl" style="width: 33.3333%;">
            <div class="item-title">
              <ve-title width="180px" title="短信发送数量" tip="使用短信作为推广方式，发送的人数"></ve-title>
            </div>
            <div class="item-mid">{{spreadChannelData.sms}}</div>
          </div>
        </div>
      </div>
      <div class="chart-container">
        <div class="chart-box" style="width: 100%;">
          <p class="title">推广效果</p>
          <div class="chart-item" id="chart01" style="height: 260px;"></div>
        </div>
      </div>
      <div class="chart-container">
        <div class="chart-box">
          <p class="title">邮件活跃概况
            <!--<span class="chart-menu">-->
            <!--<nav-menu :menus="['天', '月']" :currentMenu="emailType" @changeMenu="changeEmailMenu"></nav-menu>-->
            <!--</span>-->
          </p>
          <div class="chart-item" id="chart02" style="height: 280px;"></div>
        </div>
        <div class="chart-box">
          <p class="title">微信活跃概况
            <!--<span class="chart-menu">-->
            <!--<nav-menu :menus="['天', '月']" :currentMenu="weChatType" @changeMenu="changeWeChatMenu"></nav-menu>-->
            <!--</span>-->
          </p>
          <div class="chart-item" id="chart03" style="height: 280px;"></div>
        </div>
        <div class="chart-box">
          <p class="title">短信活跃概况
            <!--<span class="chart-menu">-->
            <!--<nav-menu :menus="['天', '月']" :currentMenu="smsType" @changeMenu="changeSmsMenu"></nav-menu>-->
            <!--</span>-->
          </p>
          <div class="chart-item" id="chart04" style="height: 280px;"></div>
        </div>
      </div>
    </div>
    <div class="data-pad" style="margin-top: 20px;">
      <p class="title">活动官网</p>
      <div class="item-container clearfix">
        <div class="item-box fl">
          <div class="box fl" style="width: 33.3333%;">
            <div class="item-title">
              <ve-title width="130px" title="页面访问人数" tip="访问活动官网的人数"></ve-title>
            </div>
            <div class="item-mid">{{officialChannelData.nums}}</div>
          </div>
          <div class="box fl" style="width: 33.3333%;">
            <div class="item-title">
              <ve-title width="140px" title="页面访问次数" tip="访问活动官网的人次数"></ve-title>
            </div>
            <div class="item-mid">{{officialChannelData.times}}</div>
          </div>
          <div class="box fl" style="width: 33.3333%;">
            <div class="item-title">
              <ve-title width="170px" title="人均停留时长" tip="在活动官网的平均停留时间"></ve-title>
            </div>
            <div class="item-mid">{{officialChannelData.average|fmtTime}}</div>
          </div>
        </div>
      </div>
      <div class="chart-container">
        <div class="chart-box" style="width: 100%;">
          <p class="title">页面访问趋势图
            <!--<span class="chart-menu">-->
            <!--<nav-menu :menus="['天', '月']" :currentMenu="webwiteType" @changeMenu="changeWebMenu"></nav-menu>-->
            <!--</span>-->
          </p>
          <div class="chart-item" id="chart05" style="height: 400px;"></div>
        </div>
      </div>
      <p class="title">活动引导页</p>
      <div class="item-container clearfix">
        <div class="item-box fl">
          <div class="box fl" style="width: 20%;">
            <div class="item-title">
              <ve-title width="130px" title="页面访问人数" tip="访问活动引导页的人数"></ve-title>
            </div>
            <div class="item-mid">{{leadPageData.nums}}</div>
          </div>
          <div class="box fl" style="width: 20%;">
            <div class="item-title">
              <ve-title width="130px" title="页面访问次数" tip="访问活动引导页的人次数"></ve-title>
            </div>
            <div class="item-mid">{{leadPageData.times}}</div>
          </div>
          <div class="box fl" style="width: 20%;" v-if="leadPageData.isSubscribe!=='APPOINT'">
            <div class="item-title">
              <ve-title width="130px" title="预约人数" tip="直播开始前预约活动的人数"></ve-title>
            </div>
            <div class="item-mid data-link" @click="goPreDataDetail">{{leadPageData.subscribe}}</div>
          </div>
          <div class="box fl" style="width: 20%;" v-else>
            <div class="item-title">
              <ve-title width="130px" title="报名人数" tip="报名活动的总人数"></ve-title>
            </div>
            <div class="item-mid">{{leadPageData.signUp}}</div>
          </div>
          <div class="box fl" style="width: 20%;" v-if="leadPageData.isSubscribe!=='APPOINT'">
            <div class="item-title">
              <ve-title width="130px" title="实到人数" tip="预约活动的人数中实际参加活动的人数"></ve-title>
            </div>
            <div class="item-mid">{{leadPageData.actual}}</div>
          </div>
          <div class="box fl" style="width: 20%;" v-else>
            <div class="item-title">
              <ve-title width="130px" title="开播前报名人数" tip="在直播开始前进行报名的人数"></ve-title>
            </div>
            <div class="item-mid">{{leadPageData.beforeSignUp}}</div>
          </div>
          <div class="box fl" style="width: 20%;" v-if="leadPageData.isSubscribe!=='APPOINT'">
            <div class="item-title">
              <ve-title width="130px" title="预约参会率" tip="本次直播的预约参会率"></ve-title>
            </div>
            <div class="item-mid" v-if="leadPageData.subscribe">
              {{(leadPageData.actual*100/leadPageData.subscribe).toFixed(2)}}%
            </div>
            <div class="item-mid" v-else>0%</div>
          </div>
          <div class="box fl" style="width: 20%;" v-else>
            <div class="item-title">
              <ve-title width="130px" title="开播后报名人数" tip="在直播开始后进行报名的人数"></ve-title>
            </div>
            <div class="item-mid">{{leadPageData.afterSignUp}}</div>
          </div>
        </div>
      </div>
      <div class="chart-container">
        <div class="chart-box" style="width: 100%;">
          <p class="title">页面访问
            <span class="chart-menu">
             <nav-menu :menus="['人次','人数']" :currentMenu="pageLinkType" @changeMenu="changePageLinkMenu"></nav-menu>
          </span></p>
          <div class="chart-item" id="chart06" style="height: 400px;"></div>
        </div>
      </div>
    </div>
    <!-- 预约/报名数据 -->
    <message-box
      v-show="preDataDetail"
      width="60%"
      type="prompt"
      :header="header"
      @handleClick="closeMesssageBox">
      <div class="msg-table-box">
        <button class="primary-button export-btn fr" @click="exportDataList">导出</button>
        <div class="table-box">
          <el-table :data="preDataList" style="width: 100%">
            <el-table-column label="序号">
              <template slot-scope="scope">
                {{scope.$index}}
              </template>
            </el-table-column>
            <el-table-column prop="nickname" label="姓名"></el-table-column>
            <el-table-column prop="phone" label="手机号"></el-table-column>
            <el-table-column prop="guide_page_join_at" label="进入引导页时间（第一次）"></el-table-column>
            <el-table-column prop="guide_page_leave_at" label="离开引导页时间（最后一次）"></el-table-column>
            <el-table-column prop="appointment_time" label="预约时间"></el-table-column>
            <el-table-column prop="first_join_at" label="参会时间"></el-table-column>
          </el-table>
        </div>
      </div>
    </message-box>
  </div>
</template>

<script>
  import VeTitle from './ve-title'
  import VeCircle from 'src/components/ve-circle'
  import dataService from 'src/api/data-service'
  import { barPile, lines } from 'src/utils/chart-tool'
  import NavMenu from './nav-menu'
  import EventBus from 'src/utils/eventBus'

  export default {
    name: 'spead',
    components: { VeTitle, VeCircle, NavMenu },
    data () {
      return {
        preDataDetail: false,
        preDataList: [],
        header: '预约数据详情|报名数据详情',
        webwiteType: 0,
        pageLinkType: 0,
        pageLinkDatas: {},
        spreadChannelData: {},
        officialChannelData: {},
        leadPageData: {
          isSubscribe: 'NONE',
          nums: 0,
          times: 0,
          subscribe: 0,
          actual: 0,
          beforeSignUp: 0,
          afterSignUp: 0
        },
        activityId: 0,
        page: 1,
        pageSize: 10,
        total: 0
      }
    },
    created () {
      EventBus.$emit('breads', [{
        title: '活动管理'
      }, {
        title: '活动列表',
        url: '/liveMager/list'
      }, {
        title: '活动详情',
        url: `/liveMager/detail/${this.$route.params.id}`
      }, {
        title: '推广数据',
        url: `/data/spread/${this.$route.params.id}`
      }])
    },
    beforeDestroy () {
      window.callbackResize = null
      if (this.effectChart) { // 推广效果
        this.effectChart.dispose()
      }
      if (this.emailChart) { // 邮件活跃度
        this.emailChart.dispose()
      }
      if (this.weChatChart) { // 微信活跃度
        this.weChatChart.dispose()
      }
      if (this.smsChart) { // 短信活跃度
        this.smsChart.dispose()
      }
      if (this.webChart) { // 活动官网--页面访问趋势图
        this.webChart.dispose()
      }
      if (this.linkChart) { // 活动引导页--页面访问趋势图
        this.linkChart.dispose()
      }
    },
    mounted () {
      this.activityId = this.$route.params.id
      this.initPage()
      window.callbackResize = () => {
        // 重新绘制
        this.resizeRenderChart()
      }
    },
    methods: {
      resizeRenderChart () {
        if (this.effectChart) { // 推广效果
          this.effectChart.resize()
        }
        if (this.emailChart) { // 邮件活跃度
          this.emailChart.resize()
        }
        if (this.weChatChart) { // 微信活跃度
          this.weChatChart.resize()
        }
        if (this.smsChart) { // 短信活跃度
          this.smsChart.resize()
        }
        if (this.webChart) { // 活动官网--页面访问趋势图
          this.webChart.resize()
        }
        if (this.linkChart) { // 活动引导页--页面访问趋势图
          this.linkChart.resize()
        }
      },
      initPage () {
        // 推广渠道--统计数据
        this.spreadChannel()
        // 活动官网--统计数据
        this.officialChannel()
        // 活动引导页--统计数据
        this.leadPage()
        this.$nextTick(() => {
          this.renderChart()
        })
      },
      goPreDataDetail () { // 预约/报名数据
        this.$get(dataService.GET_SPREAD_USER_LIST, {
          activityId: this.activityId,
          page: this.page,
          pageSize: this.pageSize
        }).then((res) => {
          if (res.code === 200 && res.data.length !== 0) {
            this.preDataDetail = true
            this.preDataList = res.data.list
            this.total = res.data.total
            // 预约数据详情|报名数据详情
            this.header = res.data.viewCondition === 'APPOINT' ? '报名数据详情' : '预约数据详情'
          }
        })
      },
      exportDataList () {
        const url = process.env.API_PATH + dataService.GET_SPREAD_USER_LIST_EXPORT + '?activityId=' + this.activityId
        window.open(encodeURI(encodeURI(url)))
      },
      spreadChannel () {
        this.$get(dataService.GET_SPREAD_COUNT, {
          activityId: this.activityId
        }).then((res) => {
          if (res.code === 200 && res.data.length !== 0) {
            this.spreadChannelData = res.data
          }
        })
      },
      officialChannel () {
        this.$get(dataService.GET_SPREAD_TEMP, {
          activityId: this.activityId
        }).then((res) => {
          if (res.code === 200 && res.data.length !== 0) {
            this.officialChannelData = res.data
          }
        })
      },
      leadPage () {
        this.$get(dataService.GET_SPREAD_GUIDE_COUNT, {
          activityId: this.activityId
        }).then((res) => {
          if (res.code === 200 && res.data.length !== 0) {
            this.leadPageData = res.data
          }
        })
      },
      renderChart () {
        // 推广效果
        this.promotionEffect()
        // 活跃度系数
        this.initAcitviteRatio()
        // 活动官网--页面访问趋势图
        this.webwiteChart()
        // 活动引导页--页面访问趋势图
        this.pageLinkChart()
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
        this.$get(dataService.GET_SPREAD_RESULT, {
          activityId: this.activityId
        }).then((res) => {
          if (res.code === 200 && res.data.length !== 0) {
            this.speadDatas = res.data
            /* 绘制堆叠图 */
            this.effectChart = barPile('chart01', {
              legendData: this.speadDatas.types,
              list: this.speadDatas.list
            }, {
              left: 34,
              bottom: 30,
              top: 20,
              right: 20
            })
          }
        })
      },
      initAcitviteRatio () {
        this.$get(dataService.GET_SPREAD_ACTIVE, {
          activityId: this.activityId
        }).then((res) => {
          if (res.code === 200 && res.data.length !== 0) {
            let ratioDataList = res.data
            /* 邮件活跃 */
            this.emailChart = lines('chart02', {
              xAxisData: ratioDataList.email.xAxis || [],
              datas: [
                { name: '活跃人数', data: ratioDataList.email.nums }
              ]
            }, ['rgba(77,132,255,1)'])
            /* 微信活跃 */
            this.weChatChart = lines('chart03', {
              xAxisData: ratioDataList.weChat.xAxis || [],
              datas: [
                { name: '活跃人数', data: ratioDataList.weChat.nums }
              ]
            }, ['rgba(253,133,25,1)'])
            /* 短信活跃 */
            this.smsChart = lines('chart04', {
              xAxisData: ratioDataList.sms.xAxis || [],
              datas: [
                { name: '活跃人数', data: ratioDataList.sms.nums }
              ]
            }, ['rgba(82,219,237,1)'])
          }
        })
      },
      webwiteChart () {
        this.$get(dataService.GET_SPREAD_TREND, {
          activityId: this.activityId
        }).then((res) => {
          if (res.code === 200 && res.data.length !== 0) {
            // this.webwiteDatas = res.data
            this.webChart = lines('chart05', {
              xAxisData: res.data.xAxis || [],
              datas: [
                { name: 'UV', data: res.data.nums },
                { name: 'PV', data: res.data.times }
              ]
            }, null, {
              left: 0
            })
          }
        })
      },
      pageLinkChart () {
        this.$get(dataService.GET_SPREAD_GUIDE_TREND, {
          activityId: this.activityId
        }).then((res) => {
          if (res.code === 200 && res.data.length !== 0) {
            let pageLinkDatas = {
              xAxisData: res.data.xAxis || [],
              lineObj: {
                uv: [],
                pv: []
              }
            }
            pageLinkDatas.lineObj.uv.push({ name: '全部', data: res.data.all.nums })
            pageLinkDatas.lineObj.pv.push({ name: '全部', data: res.data.all.times })
            pageLinkDatas.lineObj.uv.push({ name: '邮件', data: res.data.email.nums })
            pageLinkDatas.lineObj.pv.push({ name: '邮件', data: res.data.email.times })
            pageLinkDatas.lineObj.uv.push({ name: '短信', data: res.data.sms.nums })
            pageLinkDatas.lineObj.pv.push({ name: '短信', data: res.data.sms.times })
            pageLinkDatas.lineObj.uv.push({ name: '微信', data: res.data.weChat.nums })
            pageLinkDatas.lineObj.pv.push({ name: '微信', data: res.data.weChat.times })
            pageLinkDatas.lineObj.uv.push({ name: '其他', data: res.data.other.nums })
            pageLinkDatas.lineObj.pv.push({ name: '其他', data: res.data.other.times })
            this.pageLinkDatas = pageLinkDatas
            this.linkChart = lines('chart06', {
              xAxisData: this.pageLinkDatas.xAxisData,
              datas: this.pageLinkDatas.lineObj.pv
            }, null, {
              left: 0
            })
          }
        })
      },
      closeMesssageBox () {
        this.preDataDetail = false
      }
    }
  }
</script>
<style lang="scss" scoped src="./css/data.scss"></style>
<style lang="scss" scoped>
  .spread {
    /deep/ {
      .ve-message-box__wrapper .ve-message-box .ve-message-box__btns {
        display: none;
      }
    }
  }
</style>
