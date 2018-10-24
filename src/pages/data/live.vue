<template>
  <div class="data-box spread">
    <p class="title">基础数据</p>
    <div class="item-container clearfix">
      <div class="item-box fl">
        <div class="box fl" style="width: 33.33333%;">
          <div class="item-title">
            <ve-title title="观看直播人数"></ve-title>
          </div>
          <div class="item-mid data-link" @click="goPage('/data/viewer')">{{basicCountData.live.nums}}</div>
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
          <div class="item-mid">{{basicCountData.playBack.nums}}</div>
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
          <span class="data-link" @click="goPreDataDetail">{{interactCountData.subscribe}}</span>
          <span>预约人数</span>
        </div>
      </div>
      <div class="item-box hd-data-item fr">
        <span class="hd-title">聊天</span>
        <div class="hd-data">
          <span class="data-link" @click="goChatDataDetail">{{interactCountData.nums}}</span>
          <span>聊天人数</span>
        </div>
        <div class="hd-data">
          <span class="data-link" @click="goChatDataDetail">{{interactCountData.msg}}</span>
          <span>消息数量</span>
        </div>
      </div>
      <div class="item-box hd-data-item fl">
        <span class="hd-title">分享</span>
        <div class="hd-data">
          <span>{{interactCountData.share.effective}}</span>
          <span>有效分享</span>
        </div>
        <div class="hd-data">
          <span>{{interactCountData.share.invite}}</span>
          <span>邀请人数</span>
        </div>
      </div>
      <div class="item-box hd-data-item fr">
        <span class="hd-title">抽奖</span>
        <div class="hd-data">
          <span class="data-link" @click="goPrizeDataDetail">{{interactCountData.prize.win}}</span>
          <span>中奖人数</span>
        </div>
        <div class="hd-data">
          <span class="data-link" @click="goPrizeDataDetail">{{interactCountData.prize.join}}</span>
          <span>参与人数</span>
        </div>
      </div>
      <div class="item-box hd-data-item fl">
        <span class="hd-title">调查问卷</span>
        <div class="hd-data">
          <span class="data-link" @click="goPagerDataDetail">{{interactCountData.pager.push}}</span>
          <span>推送次数</span>
        </div>
        <div class="hd-data">
          <span class="data-link" @click="goPagerDataDetail">{{interactCountData.pager.receive}}</span>
          <span>收到数据</span>
        </div>
      </div>
      <div class="item-box hd-data-item fr">
        <span class="hd-title">答题</span>
        <div class="hd-data">
          <span class="data-link" @click="goAnswerDataDetail">{{interactCountData.answer.push}}</span>
          <span>推送次数</span>
        </div>
        <div class="hd-data">
          <span class="data-link" @click="goAnswerDataDetail">{{interactCountData.answer.join}}</span>
          <span>参与答题人数</span>
        </div>
        <div class="hd-data">
          <span class="data-link" @click="goAnswerDataDetail">{{interactCountData.answer.win}}</span>
          <span>获得奖励人数</span>
        </div>
      </div>
      <div class="item-box hd-data-item fl">
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
      <div class="item-box hd-data-item fr">
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
      <div class="item-box hd-data-item fl" style="width: 66%;">
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
    </div>
    <div class="chart-box">
      <div class="chart-container">
        <div class="chart-box" style="width: 100%;">
          <p class="title">互动工具参与趋势图（PV、UV）</p>
          <div class="chart-item" id="chart04" style="height: 400px;"></div>
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
      <div class="msg-table-box">
        <button class="primary-button export-btn fr">导出</button>
        <div class="table-box">
          <el-table :data="chatDataList" style="width: 100%">
            <el-table-column label="序号">
              <template slot-scope="scope">
                {{scope.$index}}
              </template>
            </el-table-column>
            <el-table-column prop="userId" label="用户Id"></el-table-column>
            <el-table-column prop="name" label="姓名"></el-table-column>
            <el-table-column prop="phone" label="手机号"></el-table-column>
            <el-table-column prop="chatMsg" label="聊天内容"></el-table-column>
            <el-table-column prop="chatDate" label="聊天时间"></el-table-column>
          </el-table>
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
    <!-- 答题 -->
    <message-box
      v-show="answerDataDetail"
      width="60%"
      type="none"
      header="问卷数据详情"
      @handleClick="closeMesssageBox">
      <div class="msg-table-box" style="padding-top: 20px;">
        <div class="table-box">
          <el-table :data="answerDataList" style="width: 100%">
            <el-table-column label="序号">
              <template slot-scope="scope">
                {{scope.$index}}
              </template>
            </el-table-column>
            <el-table-column prop="title" label="题目"></el-table-column>
            <el-table-column prop="preMoney" label="预设奖金总额"></el-table-column>
            <el-table-column prop="preCount" label="预设获奖人数"></el-table-column>
            <el-table-column prop="joinCount" label="参与人数"></el-table-column>
            <el-table-column prop="correntCount" label="答对人数"></el-table-column>
            <el-table-column prop="costMoney" label="实际消耗金额"></el-table-column>
            <el-table-column prop="winCount" label="实际获奖人数"></el-table-column>
            <el-table-column prop="successRate" label="正确率"></el-table-column>
            <el-table-column label="详情数据">
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
            <el-table-column label="序号">
              <template slot-scope="scope">
                {{scope.$index}}
              </template>
            </el-table-column>
            <el-table-column prop="name" label="卡片名称"></el-table-column>
            <el-table-column prop="isLink" label="是否设置链接"></el-table-column>
            <el-table-column prop="pushCount" label="推送次数"></el-table-column>
            <el-table-column prop="browse" label="卡片浏览数"></el-table-column>
            <el-table-column prop="click" label="点击卡片次数"></el-table-column>
            <el-table-column label="详情数据">
              <template slot-scope="scope">
                <span class="data-link">下载</span>
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
      header="问卷数据详情"
      @handleClick="closeMesssageBox">
      <div class="msg-table-box" style="padding-top: 20px;">
        <div class="table-box">
          <el-table :data="redBagDataList" style="width: 100%">
            <el-table-column label="序号">
              <template slot-scope="scope">
                {{scope.$index}}
              </template>
            </el-table-column>
            <el-table-column prop="pushDate" label="推送时间"></el-table-column>
            <el-table-column prop="joinType" label="参与条件"></el-table-column>
            <el-table-column prop="totalMoney" label="红包总金额"></el-table-column>
            <el-table-column prop="totalCount" label="红包数量"></el-table-column>
            <el-table-column prop="online" label="在线人数"></el-table-column>
            <el-table-column prop="joinCount" label="参与人数"></el-table-column>
            <el-table-column prop="receiveCount" label="领取人数"></el-table-column>
            <el-table-column prop="receiveMoney" label="领取金额"></el-table-column>
            <el-table-column label="领取明细">
              <template slot-scope="scope">
                <span class="data-link">下载</span>
              </template>
            </el-table-column>
          </el-table>
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
  import VeTitle from './ve-title'
  import VeCircle from 'src/components/ve-circle'
  import NavMenu from './nav-menu'

  export default {
    name: 'live-data',
    components: {VeTitle, VeCircle, NavMenu},
    data () {
      return {
        basicCountData: {
          live: {
            nums: '',
            times: '',
            duration: 0
          },
          playBack: {
            nums: '',
            times: '',
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
        watcherLineData: {},
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
        redBagDataList: []
      }
    },
    mounted () {
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
