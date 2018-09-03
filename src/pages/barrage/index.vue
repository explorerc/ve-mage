<template>
  <section>
    <canvas ref="cvs"
            class="cvs"
            width="400px"
            height="200px"></canvas>
    <!-- width="800px" height="400px" -->
    <div>
      <el-input clearable
                v-model="content"></el-input>
      <el-button @click="addBarrage">添加</el-button>
      <span>{{fps}}</span>
    </div>
    <div>
      <el-button @click="registBarrage">注册普通</el-button>
      <el-button @click="startBarrage">开始</el-button>
      <el-button @click="stopBarrage">停止</el-button>
      <el-button @click="pauseBarrage">暂停</el-button>
      <el-button @click="resumeBarrage">恢复</el-button>
      <el-button @click="destroyBarrage">销毁</el-button>
    </div>
    <div>
      <div id="my-pusher"></div>
      <el-button @click="getDevices">获取设备</el-button>
      <el-button @click="broadcast">推旁路</el-button>
      <el-button @click="stopBroadcast">取消旁路推流</el-button>
    </div>
    <svg width="400px"
         height="400px">
      <path ref="pathRef"
            fill="none"
            stroke="#CCC"
            stroke-width="10"
            stroke-linecap="round"></path>
    </svg>
  </section>
</template>

<script>
import Barrage from '../../components/barrage/Barrage.js'
// import Progress from '../../components/common/progress/Progress.js'
import HostPusher from '../../components/common/video/push/HostPusher'
export default {
  created () {
    this.barrageSystem = new Barrage()
    // let opt = {
    //   x: 100,
    //   y: 100,
    //   r: 50
    // }
    // this.c = new Progress(opt)

    let appId = '499279ae'
    let roomId = 'lss_5b3c9d9d'
    let inavId = 'inav_47d93f42'
    let rootEleId = 'my-pusher'
    let token = 'access:499279ae:4173778b9f647d98'
    this.hostPusher = new HostPusher(appId, roomId, inavId, token, rootEleId)
    this.hostPusher.initHostPusher()
    this.hostPusher.accountId = 'master'
  },
  mounted () {
    // let pathRef = this.$refs.pathRef
    // this.c.progress = 0.5
    // pathRef.setAttribute('d', this.c.progress)

    // let p = 0
    // setInterval(() => {
    //   p += 0.01
    //   p = p >= 1 ? 0 : p
    //   this.c.progress = p
    //   pathRef.setAttribute('d', this.c.progress)
    // }, 100)
  },
  data () {
    return {
      content: '',
      barrageSystem: null,
      fps: 0,
      intervalId: 0,
      c: null,
      hostPusher: null
    }
  },
  methods: {
    startBarrage () {
      this.barrageSystem.start()
    },
    stopBarrage () {
      this.barrageSystem.stop()
      clearInterval(this.intervalId)
    },
    registBarrage () {
      // console.log(this.$refs.cvs);
      this.barrageSystem.registRenderer('normal', this.$refs.cvs, {})
    },
    addBarrage () {
      let color = ['#ffffff', '#ff0000', '#00ff00', '#0000ff']
      this.intervalId = setInterval(() => {
        this.barrageSystem.add(Math.random().toFixed(2), 'normal', { 'fillStyle': color[Math.random() * color.length >> 0] })
        this.barrageSystem.add(Math.random().toFixed(2), 'normal')
        // this.barrageSystem.add(Math.random().toFixed(2), "normal")
        // this.barrageSystem.add(Math.random().toFixed(2), "normal")
        // this.barrageSystem.add(Math.random().toFixed(2), "normal")
        // this.barrageSystem.add(Math.random().toFixed(2), "normal")
        // this.barrageSystem.add(Math.random().toFixed(2), "normal")
        // this.barrageSystem.add(Math.random().toFixed(2), "normal")
        this.fps = this.barrageSystem.fps
      }, 50)
      // this.barrageSystem.add(this.content, 'normal')
    },
    pauseBarrage () {
      this.barrageSystem.pause()
    },
    resumeBarrage () {
      this.barrageSystem.resume()
    },
    destroyBarrage () {
      this.barrageSystem.destroy()
    },
    getDevices () {
      this.hostPusher.getDevices()
    },
    broadcast () {
      this.hostPusher.startBroadCast()
    },
    stopBroadcast () {
      this.hostPusher.stopBroadCast()
    }
  }
}
</script>

<style>
.cvs {
  /* width: 800px;
  height: 400px; */
  background-color: pink;
}

.my-pusher {
  width: 200px;
  height: 150px;
}
</style>
