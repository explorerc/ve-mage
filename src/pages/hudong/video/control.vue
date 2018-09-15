<template>
  <div class="control-box">
    <div class="progress-box">
      <el-slider v-model="progress" @change="changeVal"></el-slider>
    </div>
    <div class="time-box">
      <span>{{currentDate}}</span>/<span>{{allDate}}</span>
    </div>
    <div class="auto-box">
      <i v-if="!mute" @click="muteEvent" class="iconfont icon-mn_shengyin_fill"></i>
      <i v-if="mute" @click="muteEvent" class="iconfont icon-mn_shengyinwu_fill"></i>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'control',
    data () {
      return {
        mute: false, // 是否禁音
        current: 0,
        progress: 0
      }
    },
    computed: {
      allDate () {
        return this.formatDate(this.totalTime)
      },
      currentDate () {
        return this.formatDate(this.currentTime)
      },
      rate () {
        return parseInt(100 * this.currentTime / this.totalTime)
      }
    },
    props: {
      currentTime: {
        type: Number,
        default: 0
      },
      totalTime: {
        type: Number,
        default: 1000
      }
    },
    watch: {
      currentTime: {
        handler (newVal) {
          this.current = newVal
        },
        immediate: true
      },
      rate: {
        handler (newVal) {
          this.progress = newVal
        },
        immediate: true
      }
    },
    methods: {
      changeVal () {
        this.$emit('change', this.progress)
      },
      muteEvent () {
        this.mute = !this.mute
        this.$emit('mute', this.mute)
      },
      cutoutEvent () {
      },
      formatDate (cTime) {
        let h = ((cTime / 3600 >> 0) + '')
        let m = ((cTime / 60 % 60 >> 0) + '').padStart(2, 0)
        let s = ((cTime % 60 >> 0) + '').padStart(2, 0)
        return h > 0 ? `${h}:${m}:${s}` : `${m}:${s}`
      }
    }
  }
</script>

<style scoped lang="scss">
  .control-box {
    width: 100%;
    height: 50px;
    line-height: 50px;
    animation: control-animation-hide 1s linear;
    background-color: rgba(0, 0, 0, .5);
    padding: 0 80px;
    text-align: right;
    color: #fff;
    .time-box {
      display: inline-block;
      font-size: 14px;
      span:last-child {
        color: #ccc;
      }
    }
    .auto-box {
      display: inline-block;
    }
    .progress-box {
      display: inline-block;
      height: 100%;
      width: 500px;
      line-height: 0;
      vertical-align: middle;
      position: relative;
      top: 5px;
      margin-right: 10px;
    }
    .iconfont {
      vertical-align: middle;
      font-size: 20px;
      color: rgb(255, 208, 33);
      &:hover {
        cursor: pointer;
        opacity: .8;
      }
    }
  }
</style>
