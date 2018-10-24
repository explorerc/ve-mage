<template>
  <div class="data-box preview">
    <div class="item-container clearfix">
      <div class="item-box vhall-item fl">
        <div class="item-title">
          <ve-title width="200px" title="微吼指数" tip="本场活动的综合效果，最高分100"></ve-title>
        </div>
        <div class="item-mid">
          {{vhallRateData.value}}
          <span v-if="vhallRateData.value>80">优秀</span>
          <span v-else-if="vhallRateData.value>60">良好</span>
          <span v-else>一般</span>
        </div>
        <div class="item-bottom">
          <span>环比
            <i class="down" v-if="vhallRateData.ratio < 0">▼</i>
            <i class="up" v-else>▲</i>
            {{Math.abs(vhallRateData.ratio)}}%
          </span>
          <span>平均
            <i class="down" v-if="vhallRateData.average < 0">▼</i>
            <i class="up" v-else>▲</i>
            {{Math.abs(vhallRateData.average)}}%
          </span>
        </div>
      </div>
      <div class="item-box spread fl">
        <div class="box fl" style="width: 20%;">
          <div class="item-title">
            <ve-title width="300px" title="观众" tip="观众总数，用来衡量一场直播内容和吸引力的重要指标"></ve-title>
          </div>
          <ve-circle style="margin-top: 10px;" d="120px" :tips="'观众得分='+activityScoreData.viewer+'分（满分100分）'"
                     :value="activityScoreData.viewer"></ve-circle>
        </div>
        <div class="box fl" style="width: 20%;">
          <div class="item-title">
            <ve-title width="300px" title="观看时长"
                      tip="统计该场直播中所有观众的平均观看时长，反应观众在直播间内的平均停留时长。平均观看时长=所有观众观看时长之和/观众总数；注：观看时长包含直播和回放两部分。为了计算简便，系统假定回放"></ve-title>
          </div>
          <ve-circle style="margin-top: 10px;" d="120px" :tips="'观看得分='+activityScoreData.watchDuration+'分（满分100分）'"
                     :value="activityScoreData.watchDuration"></ve-circle>
        </div>
        <div class="box fl" style="width: 20%;">
          <div class="item-title">
            <ve-title width="300px" title="推广"
                      tip="衡量一场直播在前期宣传推广的触达效果。推广方式包括推广中心中的邮件、短信、微信三种方式。推广效果=最终成为观众人数/推广渠道触达人数"></ve-title>
          </div>
          <ve-circle style="margin-top: 10px;" d="120px" :tips="'推广得分='+activityScoreData.extension+'分（满分100分）'"
                     :value="activityScoreData.extension"></ve-circle>
        </div>
        <div class="box fl" style="width: 20%;">
          <div class="item-title">
            <ve-title width="300px" title="传播" tip="衡量一场直播中，观众的自传播效果。展现观众在直播中分享拉新的效果"></ve-title>
          </div>
          <ve-circle style="margin-top: 10px;" d="120px" :tips="'传播得分='+activityScoreData.spread+'分（满分100分）'"
                     :value="activityScoreData.spread"></ve-circle>
        </div>
        <div class="box fl" style="width: 20%;">
          <div class="item-title">
            <ve-title width="100px" title="互动" tip="根据直播中的互动行为，判断该场直播，观众主动参与互动的意向是否强烈。互动效果=观众的所有互动次数/观众总数"></ve-title>
          </div>
          <ve-circle style="margin-top: 10px;" d="120px" :tips="'互动得分='+activityScoreData.interact+'分（满分100分）'"
                     :value="activityScoreData.interact"></ve-circle>
        </div>
      </div>
      <div class="item-box fl">
        <div class="box fl" style="width: 25%;">
          <div class="item-title">
            <ve-title width="220px" title="触达用户" tip="使用推广工具（短信、微信、邮件）触达的用户数量"></ve-title>
          </div>
          <div class="item-mid">{{watcherCountData.watch.value}}</div>
          <div class="item-bottom">
            <span>环比
              <i class="down" v-if="watcherCountData.watch.ratio < 0">▼</i>
              <i class="up" v-else>▲</i>
              {{Math.abs(watcherCountData.watch.ratio)}}%
            </span>
            <span>平均
              <i class="down" v-if="watcherCountData.watch.average < 0">▼</i>
              <i class="up" v-else>▲</i>
              {{Math.abs(watcherCountData.watch.average)}}%
            </span>
          </div>
        </div>
        <div class="box fl" style="width: 25%;">
          <div class="item-title">
            <ve-title width="190px" title="观众总数" tip="观看了直播（包括回放）的人数"></ve-title>
          </div>
          <div class="item-mid">{{watcherCountData.viewer.value}}</div>
          <div class="item-bottom">
           <span>环比
              <i class="down" v-if="watcherCountData.viewer.ratio < 0">▼</i>
              <i class="up" v-else>▲</i>
              {{Math.abs(watcherCountData.viewer.ratio)}}%
            </span>
            <span>平均
              <i class="down" v-if="watcherCountData.viewer.average < 0">▼</i>
              <i class="up" v-else>▲</i>
              {{Math.abs(watcherCountData.viewer.average)}}%
            </span>
          </div>
        </div>
        <div class="box fl" style="width: 25%;">
          <div class="item-title">
            <ve-title width="170px" title="新用户" tip="第一次观看直播的用户数量"></ve-title>
          </div>
          <div class="item-mid">{{watcherCountData.newUser.value}}</div>
          <div class="item-bottom">
            <span>环比
              <i class="down" v-if="watcherCountData.newUser.ratio < 0">▼</i>
              <i class="up" v-else>▲</i>
              {{Math.abs(watcherCountData.newUser.ratio)}}%
            </span>
            <span>平均
              <i class="down" v-if="watcherCountData.newUser.average < 0">▼</i>
              <i class="up" v-else>▲</i>
              {{Math.abs(watcherCountData.newUser.average)}}%
            </span>
          </div>
        </div>
        <div class="box fl" style="width: 25%;">
          <div class="item-title">
            <ve-title width="140px" title="新增优质用户" tip="观看后变为优质用户的数量"></ve-title>
          </div>
          <div class="item-mid">{{watcherCountData.newGoodUser.value}}</div>
          <div class="item-bottom">
            <span>环比
              <i class="down" v-if="watcherCountData.newGoodUser.ratio < 0">▼</i>
              <i class="up" v-else>▲</i>
              {{Math.abs(watcherCountData.newGoodUser.ratio)}}%
            </span>
            <span>平均
              <i class="down" v-if="watcherCountData.newUser.average < 0">▼</i>
              <i class="up" v-else>▲</i>
              {{Math.abs(watcherCountData.newGoodUser.average)}}%
            </span>
          </div>
        </div>
      </div>
      <div class="item-box fl">
        <div class="box fl" style="width: 25%;">
          <div class="item-title">
            <ve-title width="160px" title="平均观看时长" tip="观众观看直播的平均时间"></ve-title>
          </div>
          <div class="item-mid">{{watchCoefficientData.watchTime.value}}</div>
          <div class="item-bottom">
           <span>环比
              <i class="down" v-if="watchCoefficientData.watchTime.ratio < 0">▼</i>
              <i class="up" v-else>▲</i>
              {{Math.abs(watchCoefficientData.watchTime.ratio)}}%
            </span>
            <span>平均
              <i class="down" v-if="watchCoefficientData.watchTime.average < 0">▼</i>
              <i class="up" v-else>▲</i>
              {{Math.abs(watchCoefficientData.watchTime.average)}}%
            </span>
          </div>
        </div>
        <div class="box fl" style="width: 25%;">
          <div class="item-title">
            <ve-title width="200px" title="推广效果" tip="根据活动的推广效果，评判您的推广途径是否有效"></ve-title>
          </div>
          <div class="item-mid">{{watchCoefficientData.extension.value}}</div>
          <div class="item-bottom">
           <span>环比
              <i class="down" v-if="watchCoefficientData.extension.ratio < 0">▼</i>
              <i class="up" v-else>▲</i>
              {{Math.abs(watchCoefficientData.extension.ratio)}}%
            </span>
            <span>平均
              <i class="down" v-if="watchCoefficientData.extension.average < 0">▼</i>
              <i class="up" v-else>▲</i>
              {{Math.abs(watchCoefficientData.extension.average)}}%
            </span>
          </div>
        </div>
        <div class="box fl" style="width: 25%;">
          <div class="item-title">
            <ve-title width="200px" title="传播K因子" tip="根据活动中观众分享活动的有效次数，评判活动的吸引力"></ve-title>
          </div>
          <div class="item-mid">k={{watchCoefficientData.spread.value}}</div>
          <div class="item-bottom">
           <span>环比
              <i class="down" v-if="watchCoefficientData.spread.ratio < 0">▼</i>
              <i class="up" v-else>▲</i>
              {{Math.abs(watchCoefficientData.spread.ratio)}}%
            </span>
            <span>平均
              <i class="down" v-if="watchCoefficientData.spread.average < 0">▼</i>
              <i class="up" v-else>▲</i>
              {{Math.abs(watchCoefficientData.spread.average)}}%
            </span>
          </div>
        </div>
        <div class="box fl" style="width: 25%;">
          <div class="item-title">
            <ve-title width="140px" title="互动系数" tip="评判直播中观众的互动活跃度"></ve-title>
          </div>
          <div class="item-mid">{{watchCoefficientData.interactint.value}}</div>
          <div class="item-bottom">
           <span>环比
              <i class="down" v-if="watchCoefficientData.interactint.ratio < 0">▼</i>
              <i class="up" v-else>▲</i>
              {{Math.abs(watchCoefficientData.interactint.ratio)}}%
            </span>
            <span>平均
              <i class="down" v-if="watchCoefficientData.interactint.average < 0">▼</i>
              <i class="up" v-else>▲</i>
              {{Math.abs(watchCoefficientData.interactint.average)}}%
            </span>
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

  export default {
    name: 'preview',
    components: {VeTitle, VeCircle},
    data () {
      return {
        activityId: '',
        vhallRateData: {},
        activityScoreData: {},
        watcherCountData: {},
        watchCoefficientData: {}
      }
    },
    created () {
      this.activityId = this.$route.params.id
      console.log(dataService)
      this.initPage()
    },
    methods: {
    }
  }
</script>
<style lang="scss" scoped src="./css/data.scss"></style>
<style lang="scss" scoped>
.preview {
  .item-container {
    .vhall-item /deep/ {
      height: 180px;
      width: 300px;
      .item-mid {
        height: 90px;
        line-height: 80px;
      }
      .ve-title {
        padding: 10px 0;
      }
    }
    .spread {
      margin-left: 20px;
      height: 180px;
      width: calc(100% - 320px);
    }
  }
}
</style>
