<template>
  <div class="data-box spread">
    <div class="data-pad">
      <p class="title">观看数据</p>
      <div class="item-container clearfix">
        <div class="item-box fl">
          <div class="box fl" style="width: 33.33333%;">
            <div class="item-title">
              <ve-title title="观看直播人数"></ve-title>
            </div>
            <div class="item-mid data-link" @click="goPage('/data/viewerList',basicCountData.live.nums)">
              {{basicCountData.live.nums}}
            </div>
          </div>
          <div class="box fl" style="width: 33.33333%;">
            <div class="item-title">
              <ve-title title="观看直播人次（次）"></ve-title>
            </div>
            <div class="item-mid">{{basicCountData.live.times}}</div>
          </div>
          <div class="box fl" style="width: 33.33333%;">
            <div class="item-title">
              <ve-title title="人均观看直播时长"></ve-title>
            </div>
            <div class="item-mid">{{basicCountData.live.duration|fmtTime}}</div>
          </div>
        </div>
        <div class="item-box fl">
          <div class="box fl" style="width: 33.33333%;">
            <div class="item-title">
              <ve-title title="观看回放人数"></ve-title>
            </div>
            <div class="item-mid data-link" @click="goPage('/data/viewerList',basicCountData.playBack.nums)">
              {{basicCountData.playBack.nums}}
            </div>
          </div>
          <div class="box fl" style="width: 33.33333%;">
            <div class="item-title">
              <ve-title title="观看回放人次（次）"></ve-title>
            </div>
            <div class="item-mid">{{basicCountData.playBack.times}}</div>
          </div>
          <div class="box fl" style="width: 33.33333%;">
            <div class="item-title">
              <ve-title title="人均观看回放时长"></ve-title>
            </div>
            <div class="item-mid">{{basicCountData.playBack.duration|fmtTime}}</div>
          </div>
        </div>
      </div>
      <div class="chart-box">
        <div class="chart-container">
          <div class="chart-box" style="width: 100%;">
            <p class="title">
              <ve-title width="200px" title="观众访问趋势图" tip="查看直播和回放过程中，观众人数随时间变化的趋势图"></ve-title>
              <span class="chart-menu">
             <nav-menu :menus="['直播', '回放']" :currentMenu="watchType" @changeMenu="changeMenu"></nav-menu>
          </span></p>
            <div class="chart-item" id="chart01" style="height: 360px;"></div>
          </div>
        </div>
        <div class="chart-container">
          <div class="chart-box" style="width: 50%;">
            <p class="title">
              <ve-title width="200px" title="观看时长与观众分布图" tip="查看直播过程中，不同观看时段的观众数量"></ve-title>
            </p>
            <div class="chart-item" id="chart02" style="height: 360px;"></div>
          </div>
          <div class="chart-box" style="width: 50%;">
            <p class="title">
              <ve-title width="200px" title="观看回放规律图" tip="查看直播结束后一个月内，每天的观看回放时间点与观众人数的规律变化图"></ve-title>
            </p>
            <div class="chart-item" id="chart03" style="height: 360px;"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="data-pad">
      <p class="title">互动数据</p>
      <div class="item-container clearfix">
        <div class="item-box hd-data-item fl live-item live-item01">
          <span class="hd-title">聊天</span>
          <div class="hd-data" style="width: 50%;">
            <span class="data-link" @click="goChatDataDetail">{{interactCountData.chat.nums}}</span>
            <span>聊天人数</span>
          </div>
          <div class="hd-data" style="width: 50%;">
            <span class="data-link" @click="goChatDataDetail">{{interactCountData.chat.msg}}</span>
            <span>消息数量</span>
          </div>
        </div>
        <div class="item-box hd-data-item fr live-item live-item02">
          <span class="hd-title">分享</span>
          <div class="hd-data" style="width: 50%;">
            <span>{{interactCountData.share.effective}}</span>
            <span>有效分享</span>
          </div>
          <div class="hd-data" style="width: 50%;">
            <span>{{interactCountData.share.invite}}</span>
            <span>邀请人数</span>
          </div>
        </div>
        <div class="item-box hd-data-item fl live-item live-item03">
          <span class="hd-title">调查问卷</span>
          <div class="hd-data" style="width: 50%;">
            <span class="data-link" @click="goPagerDataDetail">{{interactCountData.pager.push}}</span>
            <span>推送次数</span>
          </div>
          <div class="hd-data" style="width: 50%;">
            <span class="data-link" @click="goPagerDataDetail">{{interactCountData.pager.receive}}</span>
            <span>收到数据</span>
          </div>
        </div>
        <div class="item-box hd-data-item fr live-item live-item04">
          <span class="hd-title">红包雨</span>
          <div class="hd-data">
            <span class="data-link" @click="goRedBagDataDetail">{{interactCountData.redBag.join}}</span>
            <span>参与人数</span>
          </div>
          <div class="hd-data">
            <span class="data-link" @click="goRedBagDataDetail">{{interactCountData.redBag.receive}}</span>
            <span>领取人数</span>
          </div>
          <div class="hd-data">
            <span class="data-link" @click="goRedBagDataDetail">￥{{interactCountData.redBag.money}}</span>
            <span>领取金额</span>
          </div>
        </div>
        <div class="item-box hd-data-item fl live-item live-item05" style="width: 100%;">
          <span class="hd-title">商品推荐</span>
          <div class="hd-data" style="width: 25%;">
            <span class="data-link" @click="goGoodsDataDetail">{{interactCountData.goods.shelf}}/{{interactCountData.goods.total}}</span>
            <span>商品上架数</span>
          </div>
          <div class="hd-data" style="width: 25%;">
            <span class="data-link" @click="goGoodsDataDetail">{{interactCountData.goods.push}}</span>
            <span>推送次数</span>
          </div>
          <div class="hd-data" style="width: 25%;">
            <span class="data-link" @click="goGoodsDataDetail">{{interactCountData.goods.browse}}</span>
            <span>浏览次数</span>
          </div>
          <div class="hd-data" style="width: 25%;">
            <span class="data-link" @click="goGoodsDataDetail">{{interactCountData.goods.click}}</span>
            <span>点击购买次数</span>
          </div>
        </div>
        <div class="item-box hd-data-item fl live-item live-item06">
          <span class="hd-title">推荐卡片</span>
          <div class="hd-data">
            <span class="data-link" @click="goCardDataDetail">{{interactCountData.card.push}}</span>
            <span>推送次数</span>
          </div>
          <div class="hd-data">
            <span class="data-link" @click="goCardDataDetail">{{interactCountData.card.browse}}</span>
            <span>浏览次数</span>
          </div>
          <div class="hd-data">
            <span class="data-link" @click="goCardDataDetail">{{interactCountData.card.click}}</span>
            <span>点击次数</span>
          </div>
        </div>
      </div>
      <div class="chart-box">
        <div class="chart-container">
          <div class="chart-box" style="width: 100%;">
            <p class="title">
              <ve-title width="200px" title="互动工具参与趋势图" tip="查看直播中主持人使用互动工具的情况以及观众的参与情况"></ve-title>
            </p>
            <div class="chart-item" id="chart04" style="height: 400px;"></div>
          </div>
        </div>
      </div>
    </div>
    <!-- 预约 -->
    <message-box
      v-show="preDataDetail"
      width="60%"
      type="none"
      header="预约数据详情"
      @handleClick="closeMesssageBox">
      <div class="msg-table-box">
        <button class="primary-button export-btn fr">导出</button>
        <div class="table-box">
          <el-table :data="preDataList" style="width: 100%">
            <el-table-column label="序号">
              <template slot-scope="scope">
                {{scope.$index}}
              </template>
            </el-table-column>
            <el-table-column prop="userId" label="用户Id"></el-table-column>
            <el-table-column prop="name" label="姓名"></el-table-column>
            <el-table-column prop="phone" label="手机号"></el-table-column>
            <el-table-column prop="enterDate" label="进入引导页时间（第一次）"></el-table-column>
            <el-table-column prop="leaveDate" label="离开引导页时间（最后一次）"></el-table-column>
            <el-table-column prop="preDate" label="预约时间"></el-table-column>
            <el-table-column prop="joinDate" label="参会时间"></el-table-column>
          </el-table>
        </div>
      </div>
    </message-box>
    <!-- 聊天 -->
    <message-box
      v-show="chatDataDetail"
      width="60%"
      type="none"
      header="聊天数据详情"
      @handleClick="closeMesssageBox">
      <div class="msg-table-box" v-ComLoading="loading">
        <button class="primary-button export-btn fr" @click="exportFile('chart')">导出</button>
        <div class="table-box">
          <el-table :data="chatDataList" style="width: 100%">
            <el-table-column label="序号">
              <template slot-scope="scope">
                {{ (page-1)*pageSize + scope.$index + 1}}
              </template>
            </el-table-column>
            <el-table-column prop="nickname" label="姓名"></el-table-column>
            <el-table-column prop="phone" label="手机号"></el-table-column>
            <el-table-column prop="message" label="聊天内容"></el-table-column>
            <el-table-column prop="time" label="聊天时间"></el-table-column>
          </el-table>
        </div>
        <div class="page-pagination" v-if="total>pageSize">
          <ve-pagination :total="total"
                         :pageSize="pageSize"
                         @changePage="changePage"/>
        </div>
      </div>
    </message-box>
    <!-- 抽奖 -->
    <message-box
      v-show="prizeDataDetail"
      width="60%"
      type="none"
      header="聊天数据详情"
      @handleClick="closeMesssageBox">
      <div class="msg-table-box" style="padding-top: 20px;">
        <div class="table-box">
          <el-table :data="prizeDataList" style="width: 100%">
            <el-table-column label="序号">
              <template slot-scope="scope">
                {{scope.$index}}
              </template>
            </el-table-column>
            <el-table-column prop="openDate" label="开奖时间"></el-table-column>
            <el-table-column prop="joinType" label="参与条件"></el-table-column>
            <el-table-column prop="phone" label="奖品名称"></el-table-column>
            <el-table-column prop="count" label="奖品数量"></el-table-column>
            <el-table-column prop="online" label="在线人数"></el-table-column>
            <el-table-column prop="joinCount" label="参与人数"></el-table-column>
            <el-table-column label="中奖名单">
              <template slot-scope="scope">
                <span class="data-link">下载</span>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </message-box>
    <!-- 问卷 -->
    <message-box
      v-show="pagerDataDetail"
      width="60%"
      type="none"
      header="问卷数据详情"
      @handleClick="closeMesssageBox">
      <div class="msg-table-box" style="padding-top: 20px;">
        <div class="table-box">
          <el-table :data="pagerDataList" style="width: 100%">
            <el-table-column label="序号">
              <template slot-scope="scope">
                {{scope.$index}}
              </template>
            </el-table-column>
            <el-table-column prop="name" label="问卷名称"></el-table-column>
            <el-table-column prop="pushDate" label="推送时间"></el-table-column>
            <el-table-column prop="count" label="题目数量"></el-table-column>
            <el-table-column prop="receive" label="收到数据"></el-table-column>
            <el-table-column label="问卷结果">
              <template slot-scope="scope">
                <span class="data-link">下载</span>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </message-box>
    <!-- 推荐卡片 -->
    <message-box
      v-show="cardDataDetail"
      width="60%"
      type="none"
      header="问卷数据详情"
      @handleClick="closeMesssageBox">
      <div class="msg-table-box" style="padding-top: 20px;">
        <div class="table-box">
          <el-table :data="cardDataList" style="width: 100%">
            <el-table-column label="序号" type="index">
            </el-table-column>
            <el-table-column prop="title" label="卡片名称"></el-table-column>
            <el-table-column label="是否设置链接">
              <template slot-scope="scope">
                {{scope.row.btn_display === 'Y' ? '是' :'否'}}
              </template>
            </el-table-column>
            <el-table-column prop="push_num" label="推送次数"></el-table-column>
            <el-table-column prop="view_num" label="卡片浏览数"></el-table-column>
            <el-table-column prop="visit_person_num" label="点击卡片次数"></el-table-column>
            <el-table-column label="详情数据">
              <template slot-scope="scope">
                <span class="data-link"><router-link
                  :to="`/api/manage/recommend-card/visit-list?recommend_card_id=${scope.row.recommend_card_id}`"
                  target="_blank">下载</router-link></span>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </message-box>
    <!-- 红包 -->
    <message-box
      v-show="redBagDataDetail"
      width="60%"
      type="none"
      header="红包-数据详情"
      @handleClick="closeMesssageBox">
      <div class="msg-table-box" style="padding-top: 20px;">
        <div class="table-box">
          <el-table :data="redBagDataList" style="width: 100%">
            <el-table-column width="50" label="序号">
              <template slot-scope="scope">
                {{ (page-1)*pageSize + scope.$index + 1}}
              </template>
            </el-table-column>
            <el-table-column prop="start_time" label="推送时间" width="140"></el-table-column>
            <el-table-column label="参与条件">
              <template slot-scope="scope">
                <span v-if="scope.row.condition==0">无限制参与</span>
                <span v-else-if="scope.row.condition==1">分享参与</span>
                <span v-else-if="scope.row.condition==2">口令参与</span>
                <span v-else-if="scope.row.condition==3">填写问卷参与</span>
              </template>
            </el-table-column>
            <el-table-column prop="amount" label="红包总金额"></el-table-column>
            <el-table-column prop="number" label="红包数量"></el-table-column>
            <el-table-column prop="online_user_count" label="在线人数"></el-table-column>
            <el-table-column prop="joined_user_count" label="参与人数"></el-table-column>
            <el-table-column prop="get_user_count" label="领取人数"></el-table-column>
            <el-table-column prop="get_amount" label="领取金额"></el-table-column>
            <el-table-column label="领取明细" width="80">
              <template slot-scope="scope">
                <span class="data-link" @click="downLoadExport(scope.row.red_packet_id)">下载</span>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div class="page-pagination" v-if="total>pageSize">
          <ve-pagination :total="total"
                         :pageSize="pageSize"
                         @changePage="changePage"/>
        </div>
      </div>
    </message-box>
    <!-- 商品推荐 -->
    <message-box
      v-show="goodsDataDetail"
      width="60%"
      type="none"
      header="问卷数据详情"
      @handleClick="closeMesssageBox">
      <div class="msg-table-box" style="padding-top: 20px;">
        <div class="table-box">
          <el-table :data="goodsDataList" style="width: 100%">
            <el-table-column label="序号">
              <template slot-scope="scope">
                {{scope.$index}}
              </template>
            </el-table-column>
            <el-table-column prop="name" label="商品名称"></el-table-column>
            <el-table-column prop="push" label="推送次数"></el-table-column>
            <el-table-column prop="browse" label="商品详情浏览次数"></el-table-column>
            <el-table-column prop="click" label="点击购买次数"></el-table-column>
            <el-table-column label="详情数据">
              <template slot-scope="scope">
                <span class="data-link">下载</span>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </message-box>
  </div>
</template>

<script>
  import VePagination from 'src/components/ve-pagination'
  import VeTitle from './ve-title'
  import VeCircle from 'src/components/ve-circle'
  import dataService from 'src/api/data-service'
  import cardService from 'src/api/salesCards-service.js'
  import {lines, bars, barAndLine, scatter} from 'src/utils/chart-tool'
  import NavMenu from './nav-menu'
  import {mapMutations} from 'vuex'
  import * as types from '../../store/mutation-types'

  export default {
    name: 'live-data',
    components: {VeTitle, VeCircle, NavMenu, VePagination},
    data () {
      return {
        activityId: this.$route.params.id,
        loading: false,
        basicCountData: {
          live: {
            nums: 0,
            times: 0,
            duration: 0
          },
          playBack: {
            nums: 0,
            times: 0,
            duration: 0
          }
        },
        interactCountData: {
          signUp: 0,
          subscribe: 0,
          chat: {
            nums: 0,
            msg: 0
          },
          share: {
            invite: 0,
            effective: 0
          },
          prize: {
            join: 0,
            win: 0
          },
          pager: {
            push: 0,
            receive: 0
          },
          answer: {
            push: 0,
            join: 0,
            win: 0
          },
          card: {
            push: 0,
            browse: 0,
            click: 0
          },
          goods: {
            shelf: 0,
            total: 0,
            push: 0,
            browse: 0,
            click: 0
          },
          redBag: {
            join: 0,
            receive: 0,
            money: 0
          }
        },
        watchType: 0,
        watcherLineData: {
          live: {
            xAxis: [],
            pv: [],
            uv: [],
            ip: []
          },
          playback: {
            xAxis: [],
            pv: [],
            uv: [],
            ip: []
          }
        },
        preDataDetail: false, // 预约
        chatDataDetail: false, // 聊天
        prizeDataDetail: false, // 抽奖
        pagerDataDetail: false, // 问卷
        answerDataDetail: false, // 答案
        cardDataDetail: false, // 推荐卡片
        goodsDataDetail: false, // 商品推荐
        redBagDataDetail: false, // 红包
        preDataList: [],
        chatDataList: [],
        prizeDataList: [],
        pagerDataList: [],
        answerDataList: [],
        cardDataList: [],
        goodsDataList: [],
        redBagDataList: [],
        page: 1,
        pageSize: 20,
        total: 0
      }
    },
    beforeDestroy () {
      window.callbackResize = null
      if (this.watcherChart) { // 观众趋势图
        this.watcherChart.dispose()
      }
      if (this.timeLongChart) { // 观众时长分布图
        this.timeLongChart.dispose()
      }
      if (this.playBackTimeChart) { // 观看回放时段
        this.playBackTimeChart.dispose()
      }
      if (this.hdChart) { // 互动工具参与趋势图（PV、UV）
        this.hdChart.dispose()
      }
    },
    mounted () {
      this.activityId = this.$route.params.id
      this.$nextTick(() => {
        this.initPage()
      })
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
        if (this.watcherChart) { // 观众趋势图
          this.watcherChart.resize()
        }
        if (this.timeLongChart) { // 观众时长分布图
          this.timeLongChart.resize()
        }
        if (this.playBackTimeChart) { // 观看回放时段
          this.playBackTimeChart.resize()
        }
        if (this.hdChart) { // 互动工具参与趋势图（PV、UV）
          this.hdChart.resize()
        }
      },
      goPage (url, limit) {
        if (limit !== 0) {
          this.$router.push(`${url}/${this.$route.params.id}`)
          this.storeSelectMenu(3)
        }
      },
      initPage () {
        // 基础数据
        this.basicCount()
        // 观众趋势图（PV、UV）
        this.watcherCountData()
        // 直播观众时长分布图
        this.liveTimeLengthChart()
        // 观看回放时段
        this.playBackTimeScatter()
        // 互动数据
        this.interactCount()
        // 互动工具参与趋势图（PV、UV）
        this.hdTrendChart()
      },
      exportFile (type) {
        let url = ''
        if (type === 'chart') { /* 聊天信息导出 */
          url = process.env.API_PATH + dataService.GET_LIVE_CHAT_LIST_EXPORT + '?activityId=' + this.activityId
        }
        window.open(encodeURI(encodeURI(url)))
      },
      changePage (idx) {
        this.page = idx
        // preDataDetail: false, // 预约
        //   chatDataDetail: false, // 聊天
        //   prizeDataDetail: false, // 抽奖
        //   pagerDataDetail: false, // 问卷
        //   answerDataDetail: false, // 答案
        //   cardDataDetail: false, // 推荐卡片
        //   goodsDataDetail: false, // 商品推荐
        //   redBagDataDetail: false, // 红包
        if (this.chatDataDetail) { // 聊天分页
          this.goChatDataDetail()
        } else if (this.redBagDataDetail) { // 红包分页
          this.goRedBagDataList()
        }
      },
      interactCount () {
        this.$get(dataService.GET_LIVE_VIEWER_HD, {
          activityId: this.activityId
        }).then((res) => {
          if (res.code === 200 && res.data.length !== 0) {
            this.interactCountData = res.data
          }
        })
      },
      watcherCountData () {
        this.$get(dataService.GET_LIVE_VIEWER, {
          activityId: this.activityId
        }).then((res) => {
          if (res.code === 200 && res.data.length !== 0) {
            this.watcherLineData = res.data
            this.$nextTick(() => {
              // 观众趋势图（PV、UV）
              this.watcherChart = lines('chart01', {
                xAxisData: this.watcherLineData.live.xAxis,
                datas: [
                  {name: '浏览次数', data: this.watcherLineData.live.pv},
                  {name: '独立访客', data: this.watcherLineData.live.uv},
                  {name: 'IP', data: this.watcherLineData.live.ip}
                ]
              })
            })
          }
        })
      },
      basicCount () {
        this.$get(dataService.GET_LIVE_COUNT, {
          activityId: this.activityId
        }).then((res) => {
          if (res.code === 200 && res.data.length !== 0) {
            this.basicCountData = res.data
          }
        })
      },
      goChatDataDetail () {
        this.chatDataDetail = true
        this.loading = true
        this.$get(dataService.GET_LIVE_CHAT_LIST, {
          activityId: this.activityId,
          page: this.page,
          pageSize: this.pageSize
        }).then((res) => {
          this.loading = false
          if (res.code === 200 && res.data.length !== 0) {
            this.chatDataList = res.data.list
            this.total = res.data.total
          }
        }).catch(() => {
          this.loading = false
        })
      },
      goPagerDataDetail () {
        this.pagerDataDetail = true
        this.pagerDataList = [
          {'pageId': 10000, 'name': '张三', 'count': 50, 'receive': 10, 'pushDate': '2018-10-17 10:10'},
          {'pageId': 10001, 'name': '李四', 'count': 60, 'receive': 20, 'pushDate': '2018-10-17 10:10'}
        ]
      },
      goCardDataDetail () {
        this.cardDataDetail = true
        this.cardDataList = [
          // {'cardId': 10000, 'name': '卡片名称', 'isLine': 'Y', 'pushCount': 271, 'browse': 1, 'click': 100},
          // {'cardId': 10000, 'name': '卡片名称', 'isLine': 'Y', 'pushCount': 271, 'browse': 1, 'click': 100}
        ]
        // 请求卡片接口
        this.$get(cardService.GET_CARDS_LIST, {
          activity_id: this.activityId
        }).then((res) => {
          console.log(res)
          this.cardDataList = res.data.list
        })
      },
      downLoadExport (id) {
        let url = process.env.API_PATH + dataService.GET_LIVE_RED_BAG_LIST_EXOPORT + '?red_packet_id=' + id
        window.open(encodeURI(encodeURI(url)))
      },
      goRedBagDataDetail () {
        this.redBagDataDetail = true
        this.page = 0
        this.pageSize = 20
        this.total = 0
        this.goRedBagDataList()
      },
      goRedBagDataList () {
        this.$get(dataService.GET_LIVE_RED_BAG_LIST, {
          activity_id: this.activityId,
          page: this.page,
          page_size: this.pageSize
        }).then((res) => {
          this.loading = false
          if (res.code === 200) {
            this.total = res.data.count
            this.redBagDataList = res.data.list
          }
        })
      },
      goGoodsDataDetail () {
        this.goodsDataDetail = true
        this.goodsDataList = [
          {'goodsId': 10000, 'name': 'Kyrie4 运动篮球鞋', 'push': 50, 'browse': 56975, 'click': 46859},
          {'goodsId': 10000, 'name': 'Kyrie4 运动篮球鞋2', 'push': 50, 'browse': 56975, 'click': 46859}
        ]
      },
      changeMenu (val) {
        if (this.watchType === val) return
        this.watchType = val
        const typeAttr = this.watchType ? 'playback' : 'live'
        if (!this.watcherLineData[typeAttr]) return
        this.watcherChart = lines('chart01', {
          xAxisData: this.watcherLineData[typeAttr].xAxis,
          datas: [
            {name: '浏览次数', data: this.watcherLineData[typeAttr].pv},
            {name: '独立访问', data: this.watcherLineData[typeAttr].uv},
            {name: 'IP', data: this.watcherLineData[typeAttr].ip}
          ]
        })
      },
      liveTimeLengthChart () {
        this.$get(dataService.GET_LIVE_DURATION, {
          activityId: this.activityId
        }).then((res) => {
          if (res.code === 200 && res.data.length !== 0) {
            if (!res.data.list) return
            // 直播观众时长分布图
            this.timeLongChart = bars('chart02', res.data.list, {
              left: 48,
              right: 20,
              top: 20,
              bottom: 20
            })
          }
        })
      },
      playBackTimeScatter () {
        this.$get(dataService.GET_LIVE_VIEW_RECORD, {
          activityId: this.activityId
        }).then((res) => {
          let serveDatas = null
          if (res.code === 200 && res.data.length !== 0) {
            if (!res.data.list) return
            let xAxis = []
            let sDatas = []
            res.data.list.forEach(item => {
              xAxis.push(item.time)
              sDatas.push([item.time, item.week, item.value])
            })
            serveDatas = {
              yAxis: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
              xAxis: Array.from(new Set(xAxis)),
              data: sDatas
            }
          } else {
            serveDatas = {
              yAxis: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
              xAxis: Array.from(new Set([0])),
              data: [[0, 0, 0]]
            }
          }
          this.playBackTimeChart = scatter('chart03', serveDatas, {
            left: 70,
            right: 10,
            top: 20,
            bottom: 20
          })
        })
      },
      hdTrendChart () {
        this.$get(dataService.GET_LIVE_TOOL, {
          activityId: this.activityId
        }).then((res) => {
          let chartDatas = null
          if (res.code === 200 && res.data.length !== 0) {
            res.data.xAxis = res.data.xAxis || ['']
            res.data.interact = res.data.interact || [
              {
                'name': '红包',
                'dataList': [0]
              }, {
                'name': '抽奖',
                'dataList': [0]
              }, {
                'name': '答题',
                'dataList': [0]
              }, {
                'name': '商品推荐',
                'dataList': [0]
              }
            ]
            let serveDatas = res.data.interact.map(item => {
              item['type'] = 'bar'
              item.data = item.dataList
              delete item.dataList
              return item
            })
            serveDatas.push({
              name: res.data.viewer.name,
              type: 'line',
              data: res.data.viewer.dataList || [0]
            })
            chartDatas = {
              xAxis: res.data.xAxis,
              list: serveDatas
            }
          } else {
            chartDatas = {
              xAxis: [''],
              list: [
                {
                  name: '观众人数',
                  type: 'line',
                  data: [0]
                }
              ]
            }
          }
          // 互动工具参与趋势图（PV、UV）
          this.hdChart = barAndLine('chart04', chartDatas, {
            left: 48,
            top: 20,
            bottom: 20
          })
        })
      },
      closeMesssageBox () {
        this.preDataDetail = false
        this.chatDataDetail = false
        this.prizeDataDetail = false
        this.pagerDataDetail = false
        this.answerDataDetail = false
        this.cardDataDetail = false
        this.redBagDataDetail = false
        this.goodsDataDetail = false
        this.$nextTick(() => {
          this.preDataList = []
          this.chatDataList = []
          this.prizeDataList = []
          this.pagerDataList = []
          this.answerDataList = []
          this.cardDataList = []
          this.goodsDataList = []
          this.redBagDataList = []
          this.page = 1
          this.pageSize = 10
          this.total = 0
        })
      }
    }
  }
</script>
<style lang="scss" scoped src="./css/data.scss"></style>
<style lang="scss" scoped>
  .spread {
    .page-pagination {
      position: relative;
      top: 10px;
    }
    .item-container {
      border: none;
      margin-bottom: 20px;
      .item-box {
        height: 110px;
        .hd-title {
          margin-top: 20px;
        }
      }
    }
  }
</style>
