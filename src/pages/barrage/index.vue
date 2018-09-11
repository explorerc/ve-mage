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
      <el-button @click="getSetting">获取推流配置</el-button>
      <el-button @click="hideCamera">隐藏摄像头</el-button>
    </div>
    <div>
      <div id="my-pusher2"></div>
    </div>
    <div>
      <div id="my-puller"></div>
    </div>
    <svg width="400px" height="400px">
      <path ref="pathRef" fill="none" stroke="#CCC" stroke-width="10" stroke-linecap="round"></path>
    </svg>
  </section>
</template>

<script>
import Barrage from '../../components/barrage/Barrage.js'
// import Progress from '../../components/common/progress/Progress.js'
import HostPusher from '../../components/common/video/push/HostPusher'
// import LivePuller from '../../components/common/video/pull/LivePuller'
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
    let token = 'access:499279ae:885ba973a5d6ad10'
    this.hostPusher = new HostPusher(appId, roomId, inavId, token, rootEleId)
    this.hostPusher.initHostPusher()
    this.hostPusher.accountId = 'master'

    this.hostPusher2 = new HostPusher(appId, roomId, inavId, token, 'my-pusher2')
    this.hostPusher.initHostPusher()
    this.hostPusher.accountId = 'master2'

    // appId, roomId, rootEleId, token
    // rootEleId = 'my-puller'
    // this.puller = new LivePuller(appId, roomId, rootEleId, token)
    // this.puller.initLivePlayer(true)
    // this.puller.accountId = 'xiao2'
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
      cTime: '00:00', // 已播放时间
      dTime: '00:00', // 总播放时间
      play: false, // 播放暂停按钮
      audioHttp: 'http://up.mcyt.net/?down/46426.mp3' // 音频链接
    }
  },
  methods: {
    // 点击进度条事件
    playMusic (e) {
      const music = this.$refs.player // 音频所在对象
      const barWidth = e.pageX / this.$refs.runfatbar.offsetWidth // 计算点击位置相对父元素总宽的比例
      this.$refs.runbar.style.width = `${barWidth * 100}%` // 进度条应所在的比例总宽
      music.currentTime = music.duration * barWidth // 计算点击时应播放所在的时间
      music.play() // 播放音频
      this.play = true // 更改播放暂停按钮为播放
    },

    // 点击播放暂停按钮时间
    audioState () {
      this.play = !this.play // 更改播放暂停按钮状态
      const music = this.$refs.player // 音频所在对象
      if (this.play) {
        music.play() // 播放音乐
      } else {
        music.pause() // 暂停音乐
      }
    },

    // 切换歌曲按钮
    switchAudio (value) {
      if (value === 'top') {
        this.audioHttp = 'http://mp3.henduoge.com/mp3/2018-04-19/1524135488.mp3'
      } else if (value === 'bottom') {
        this.audioHttp = 'http://mp3.henduoge.com/mp3/2018-04-20/1524234022.mp3'
      }
      this.play = false // 播放按钮为暂停
      this.$refs.runbar.style.width = 0 // 清空颜色进度条
      this.$refs.yuanright.style.display = 'none' // 清空圆形颜色进度条
      this.$refs.yuanleft.style.display = 'none' // 清空圆形颜色进度条
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

.my-puller {
  width: 200px;
  height: 150px;
}
</style>
