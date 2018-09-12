<template>
  <div class="master-box">
    <div class="master-play-box clearfix">
      <div class="master-box-left">
        <play-video role="watcher" :play-type="playType" :startInit="startInit"></play-video>
      </div>
    </div>
  </div>
</template>

<script>
  import LiveHttp from 'src/api/live'
  import PlayVideo from '../video/index' // 直播推流回放组件

  export default {
    name: 'watch',
    components: {PlayVideo},
    data () {
      return {
        activityId: '',
        playType: 'live', // 直播(live), 回放(vod), 暖场(warm)
        startInit: false
      }
    },
    created () {
      const queryId = this.$route.params.id
      if (!queryId) {
        this.$router.go(-1)
      }
      this.activityId = queryId
      this.initToken()
    },
    methods: {
      /* 初始化，获取权限 */
      initToken () {
        LiveHttp.getLiveTtoken(this.activityId).then(res => {
          this.startInit = true
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .master-box {
    .master-play-box {
      position: relative;
      height: 800px;
      .master-box-left {
        margin-right: 400px;
        height: 100%;
      }
      .master-box-right {
        position: absolute;
        top: 0;
        right: 0;
        width: 400px;
        height: 500px;
        background-color: #8E9198;
      }
    }
  }
</style>
