<template>
  <section>
    <canvas ref="cvs" class="cvs" width="400px" height="200px"></canvas>
    <!-- width="800px" height="400px" -->
    <div>
      <el-input clearable v-model="content"></el-input>
      <el-button @click="addBarrage">添加</el-button>
      <span>{{fps}}</span>
    </div>
    <div>
      <span>{{to}}</span>
      <el-button @click="countTO">to 100</el-button>
    </div>
  </section>
</template>

<script>
import Barrage from '../../components/barrage/Barrage.js'
import CountTo from '../../utils/countTo.js'
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
  },
  data () {
    return {
      to: 0,
      fps: 0
    }
  },
  methods: {
    countTO () {
      CountTo.start(0, 100, 10, 0.2, i => {
        console.log(i)
      })
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
