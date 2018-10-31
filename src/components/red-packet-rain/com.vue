<template>
  <div class="red-packet-rain">
    <div class="debug">
      当前渲染红包数：{{this.packets}}<br>
      FPS：{{this.fps}}
    </div>
    <canvas id="canvas"></canvas>
  </div>
</template>

<script>
import RedPacketRain from './index'
export default {
  data () {
    return {
      rpr: null,
      packets: 0,
      fps: 60
    }
  },
  mounted () {
    this.rpr = new RedPacketRain({
      el: document.querySelector('#canvas'),
      pack: {
        url1: require('assets/image/packet1.png'),
        url2: require('assets/image/packet2.png'),
        w: 160,
        h: 100
      },
      timeUpdate: ({ counts, fps }) => {
        this.packets = counts
        this.fps = fps
      }
    })
    this.rpr.start()
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
.red-packet-rain {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  z-index: 1000;
  cursor: pointer;
  /deep/ {
    .debug {
      position: absolute;
      top: 0;
      left: 0;
      color: lawngreen;
      font-size: 20px;
    }
  }
}
</style>
