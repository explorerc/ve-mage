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
  </section>
</template>

<script>
import Barrage from '../../components/barrage/Barrage.js'
export default {
  created () {
    this.barrageSystem = new Barrage()
  },
  data () {
    return {
      content: '',
      barrageSystem: null,
      fps: 0,
      intervalId: 0
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
