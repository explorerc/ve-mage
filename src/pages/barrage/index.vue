<template>
  <section>
    <canvas ref="cvs"
            class="cvs"
            width="800px"
            height="500px"></canvas>
    <!-- width="800px" height="400px" -->
    <div>
      <el-input clearable></el-input>
      <el-button @click="start">添加</el-button>
      <span>{{fps}}</span>
    </div>
    <div>
      <span>{{to}}</span>
      <!-- <el-button @click="countTO">to 100</el-button> -->
    </div>
  </section>
</template>

<script>
import Barrage from '../../components/barrage/Barrage.js'
// import CountTo from '../../utils/countTo.js'
export default {
  created () {
    this.barrageSystem = new Barrage()
  },
  mounted () {
  },
  data () {
    return {
      to: 0,
      fps: 0
    }
  },
  methods: {
    start () {
      let c = this.$refs.cvs
      this.barrageSystem.registRenderer('normal', c, {})
      // debugger
      this.addBarrage()

      this.barrageSystem.start()
    },
    addBarrage () {
      setInterval(() => {
        this.barrageSystem.add(Math.random())
      }, 50)
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
