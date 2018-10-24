<template>
  <div class="data-box spread">
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
        <div class="chart-item" id="chart01" style="height: 300px;"></div>
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
          <div class="item-mid">{{leadPageData.nums}}</div>
        </div>
        <div class="box fl" style="width: 20%;">
          <div class="item-title">
            <ve-title width="130px" title="页面访问次数" tip="访问直播引导页的人次数"></ve-title>
          </div>
          <div class="item-mid">{{leadPageData.times}}</div>
        </div>
        <div class="box fl" style="width: 20%;">
          <div class="item-title">
            <ve-title width="130px" title="预约人数" tip="直播开始前预约活动的人数"></ve-title>
          </div>
          <div class="item-mid">{{leadPageData.subscribe}}</div>
        </div>
        <div class="box fl" style="width: 20%;">
          <div class="item-title">
            <ve-title width="130px" title="实到人数" tip="预约活动的人数中实际参加活动的人数"></ve-title>
          </div>
          <div class="item-mid">{{leadPageData.actual}}</div>
        </div>
        <div class="box fl" style="width: 20%;">
          <div class="item-title">
            <ve-title width="130px" title="预约参会率" tip="本次直播的预约参会率"></ve-title>
          </div>
          <div class="item-mid">{{(leadPageData.actual*100/leadPageData.subscribe).toFixed(2)}}%</div>
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
  import NavMenu from './nav-menu'

  export default {
    name: 'spead',
    components: {VeTitle, VeCircle, NavMenu},
    data () {
      return {
        // emailType: 0,
        // weChatType: 0,
        // smsType: 0,
        webwiteType: 0,
        pageLinkType: 0,
        // ratioDataList: {},
        // speadDatas: {},
        // webwiteDatas: {},
        pageLinkDatas: {},
        spreadChannelData: {},
        officialChannelData: {},
        leadPageData: {}
      }
    },
    mounted () {
      console.log(dataService)
      this.initPage()
    },
    methods: {
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
