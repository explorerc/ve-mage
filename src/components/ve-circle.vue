<template>
  <div class="chart-circle" :style="{width:d,height:d}">
    <div class="chart-avg" :style="{width:mid,height:mid}"></div>
    <div class="chart-value" :style="{width:wh,height:wh}"></div>
    <div class="chart-tips" v-if="tips">{{tips}}</div>
  </div>
</template>

<script>
  export default {
    name: 've-circle',
    props: {
      d: { // 直径
        type: String,
        required: true,
        default: '100px'
      },
      avg: {
        type: Number,
        default: 50
      },
      value: {
        type: Number,
        default: 0
      },
      maxValue: {
        type: Number,
        default: 100
      },
      tips: String
    },
    computed: {
      wh () {
        return (this.value / this.maxValue) * 100 + '%'
      },
      mid () {
        return (this.avg / this.maxValue) * 100 + '%'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .chart-circle {
    position: relative;
    margin: 4px auto;
    border-radius: 50%;
    border: solid 1px #e2e2e2;
    box-sizing: border-box;
    .chart-avg {
      display: block;
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      border: dashed 1px #FC5659;
      box-sizing: border-box;
      z-index: 1;
    }
    .chart-value {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      box-sizing: border-box;
      background-color: #2878FF;
      opacity: .5;
      z-index: 2;
    }
    .chart-tips {
      position: absolute;
      left: 40%;
      bottom: 10%;
      width: 200px;
      color: #fff;
      background-color: rgba(10, 10, 10, .8);
      padding: 4px 10px;
      border-radius: 4px;
      font-size: 12px;
      opacity: 0;
      transition: opacity .3s;
      box-shadow: 0 0 10px rgba(0, 0, 0, .5);
      z-index: 3;
    }
    &:hover {
      cursor: pointer;
      .chart-tips {
        opacity: 1;
      }
    }
  }
</style>
