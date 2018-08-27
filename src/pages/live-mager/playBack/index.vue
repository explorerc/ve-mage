<template>
  <div class="live-mager">
    <div class="live-title">
      <span>回放设置</span>
      <span class="msg-tip">所有回放的设置都在本页配置，发起页前端不再有任何回放的设置项。</span>
    </div>
    <div class="mager-box">
      <div class="from-box">
        <div class="from-row">
          <div class="from-title">回放设置：</div>
          <div class="from-content">
            <el-checkbox v-model="playBack.isSwitch">开启</el-checkbox>
            <span class="msg-tip">功能已开启，直播结束后观众可观看回放</span>
          </div>
        </div>
        <div class="from-row">
          <div class="from-title">回放下线设置：</div>
          <div class="from-content">
            <el-radio v-model="playBack.playMode" label="1">永不下线，长期有效</el-radio>
            <el-radio v-model="playBack.playMode" label="2">定时下线(下线后回放将不能观看)</el-radio>
            <div>
              设置下线时间
            </div>
          </div>
        </div>
        <div class="from-row">
          <div class="from-title">邮件摘要：</div>
          <div class="from-content">
          </div>
        </div>
        <div class="from-row">
          <div class="from-title">收件人：</div>
          <div class="from-content">
          </div>
        </div>
      </div>
    </div>
    <div class="step-btns">
      <el-button class="live-btn fl" type="primary" plain @click="">保存</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'play-back',
    data () {
      return {
        playBack: {
          isSwitch: true,
          playMode: false
        }
      }
    },
    methods: {}
  }
</script>
<style lang="scss" scoped src="../css/live.scss">
</style>
<style lang="scss" scoped>
</style>
