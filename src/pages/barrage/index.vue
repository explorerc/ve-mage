<template>
  <section>
    <canvas ref="cvs"
            class="cvs"
            width="800px"
            height="400px"></canvas>
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
    <svg width="400px"
         height="400px">
      <path ref="pathRef"
            fill="none"
            stroke="#CCC"
            stroke-width="10"
            stroke-linecap="round"></path>
    </svg>
    <div>
      <el-button @click="counttocount">点我变随机数</el-button>
      <el-button @click="stoptocount">停止</el-button>
      <span>{{count}}</span>
    </div>
  </section>
</template>

<script>
import Barrage from '../../components/barrage/Barrage.js'
// import Progress from '../../components/common/progress/Progress.js'
import CountTo from '../../utils/countTo'
export default {
  created () {
    this.barrageSystem = new Barrage()
    // let opt = {
    //   x: 100,
    //   y: 100,
    //   r: 50
    // }

    // this.c = new Progress(opt)
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
      count: 0
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
    counttocount () {
      CountTo.start(0, Math.random() * 10000, 10, 0.2, i => {
        this.count = i
      })
    },
    stoptocount () {
      CountTo.stop()
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
</style>
