<!--用户总览页面-->
<template>
  <div class='pond-page'>
    <div class="pond-title">
        <span class="title" >总览</span>
    </div>
    <div class="content from-box">
      <ol class="clearfix">
        <li>
          <p class="v-data">
            23837
          </p>
          <p class="v-title">
            用户总数
          </p>
        </li>
        <li>
          <p class="v-data">
            837
          </p>
          <p class="v-title">
            优质用户 (14%)
          </p>
        </li>
        <li>
          <p class="v-data">
            1250
          </p>
          <p class="v-title">
            高价值用户 (12%)
          </p>
        </li>
        <li>
          <p class="v-data">
            3246
          </p>
          <p class="v-title">
            潜力用户 (9%)
          </p>
        </li>
        <li>
          <p class="v-data">
            5983
          </p>
          <p class="v-title">
            一般用户 (15%)
          </p>
        </li>
        <li>
          <p class="v-data">
            10247
          </p>
          <p class="v-title">
            流失用户 (60%)
          </p>
        </li>
      </ol>
    </div>
    <div class="v-data-list clearfix">
      <p class="v-title">
        数据详情
      </p>
      <ol>
        <li class="clearfix">
          <div class="v-activity-content v-name">
            活动名称
          </div>
          <div class="v-activity-content v-time">
            时间
          </div>
          <div class="v-activity-content v-type">
            流失用户
          </div>
          <div class="v-activity-content v-operation">
            一般用户
          </div>
          <div class="v-activity-content v-operation">
            潜力用户
          </div>
          <div class="v-activity-content v-operation">
            高价值用户
          </div>
          <div class="v-activity-content v-operation">
            优质用户
          </div>
        </li>
        <li class="clearfix" v-for="itemData in tableList" :key="itemData.id">
          <div class="v-activity-content v-name">
            {{itemData.title}}
          </div>
          <div class="v-activity-content v-time">
            {{itemData.startTime}}
          </div>
          <div class="v-activity-content">
            {{itemData.status}}
          </div>
          <div class="v-activity-content">
            {{itemData.status}}
          </div>
          <div class="v-activity-content">
            {{itemData.status}}
          </div>
          <div class="v-activity-content">
            {{itemData.status}}
          </div>
          <div class="v-activity-content">
            {{itemData.status}}
          </div>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableList: [{
        title: '666',
        startTime: '2018-08-25',
        status: '265'
      }, {
        title: '666',
        startTime: '2018-08-25',
        status: '265'
      }, {
        title: '666',
        startTime: '2018-08-25',
        status: '265'
      }]
    }
  }
}
</script>

<style lang='scss' scoped>
.pond-page {
  border-radius: 5px;
  overflow: hidden;
  padding-bottom: 30px;
  margin: 0 auto;
  color: #222;
  /* 设备宽度大于 1600 */
  @media all and (min-width: 1600px) {
    width: 1366px;
  }
  /* 设备宽度小于 1600px */
  @media all and (max-width: 1600px) {
    width: 1019px;
  }
  .pond-title {
    // border-bottom: 1px solid $color-bd;
    line-height: 60px;
    span.title {
      display: inline-block;
      font-size: 24px;
    }
  }
  .content /deep/ {
    font-size: 14px;
    width: 100%;
    border: 1px solid #e2e2e2;
    background-color: #fff;
    border-radius: 4px;
    overflow: hidden;
    padding: 39px 30px;
    ol {
      width: 100%;
      height: 100%;
      li {
        width: 16.6%;
        height: 100%;
        float: left;
        .v-data {
          font-size: 24px;
        }
        .v-title {
          color: #888;
        }
      }
    }
  }
  .v-data-list {
    width: 100%;
    position: relative;
    margin: 0 auto;
    width: 100%;
    background-color: #fff;
    border: 1px solid #e2e2e2;
    border-radius: 4px;
    padding: 30px 32px;
    margin-top: 40px;
    .v-title {
      font-size: 20px;
      margin-bottom: 20px;
    }
    ol {
      width: 100%;
      li {
        width: 100%;
        height: 52px;
        line-height: 52px;
        background-color: #fff;
        border-bottom: 1px solid #e2e2e2;
        &:first-child {
          height: 61px;
          line-height: 61px;
          background-color: #f5f5f5;
          &:hover {
            background-color: #f5f5f5;
          }
        }
        &:hover {
          background-color: #f0f1fe;
        }
        .v-activity-content {
          float: left;
          text-align: left;
          padding: 0 20px;
          word-break: break-all;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          width: 12%;
        }
        .v-name {
          width: 26%;
        }
        .v-time {
          width: 14%;
        }
      }
    }
  }
}
</style>
