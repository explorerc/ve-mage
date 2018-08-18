<template>
  <div class="live-mager">
    <div class="live-title">
      <span>活动提醒</span>
    </div>
    <div class="mager-box">
      <div class="from-box">
        <div class="from-row">
          <div class="from-title">活动提醒：</div>
          <div class="from-content">
            <el-checkbox v-model="remind.isSwitch">开启</el-checkbox>
            <span class="msg-tip">开启后，可以对观众进行活动提醒，每场活动最多只能选择发送2次</span>
          </div>
        </div>
        <div class="from-row">
          <div class="from-title"><i class="star">*</i>活动名称：</div>
          <div class="from-content">
            <el-input/>
          </div>
        </div>
        <div class="from-row">
          <div class="from-title"><i class="star">*</i>短信签名：</div>
          <div class="from-content">
            <el-input/>
          </div>
        </div>
        <div class="from-row">
          <div class="from-title"><i class="star">*</i>通知方式：</div>
          <div class="from-content">
            <el-radio v-model="remind.playMode" label="1">短信通知</el-radio>
            <el-radio v-model="remind.playMode" label="2">微信通知</el-radio>
          </div>
        </div>
        <div class="from-row">
          <div class="from-title"><i class="star">*</i>通知时间：</div>
          <div class="from-content">
            <el-radio v-model="remind.playMode" label="1">提前1天</el-radio>
            <el-radio v-model="remind.playMode" label="2">提前1小时</el-radio>
            <el-radio v-model="remind.playMode" label="2">提前10分钟</el-radio>
            <el-radio v-model="remind.playMode" label="2">活动开始时</el-radio>
          </div>
        </div>
        <div class="from-row">
          <div class="from-title"><i class="star">*</i>通知范围：</div>
          <div class="from-content">
            预约用户/报名用户/邀请用户
          </div>
        </div>
        <div class="from-row">
          <div class="from-title"></div>
          <div class="from-content">
            <el-button class="live-btn" type="primary" plain @click="saveWarm">保存</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import ComUpload from 'src/components/common/upload/com'
  import VeUpload from 'src/components/ve-upload'
  import LiveHttp from 'src/api/activity-manger'
  // 参会提醒
  export default {
    name: 'reminder',
    components: {ComUpload, VeUpload},
    data () {
      return {
        remind: {}
      }
    },
    created () {
      if (!this.$route.params.id) {
        this.goBack()
      }
    },
    methods: {
      goBack () {
        this.$router.go(-1)
      },
      saveRemider () {
        LiveHttp.queryWarmInfoById()
      }
    }
  }
</script>

<style lang="scss" scoped src="./css/live.scss">
</style>
