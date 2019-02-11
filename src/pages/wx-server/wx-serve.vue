<template>
  <div class="wx-box">
    <span class="title">微信服务号</span>
    <div class="wx-setting-content">
      <div class="setting-box">
        <img src="../../assets/image/wx-phone@2x.png">
        <p>开启微信服务号，可以让观众在活动报名时关注微信服务号，观众关注后可在活动开始前收到开播提醒。<br>主办方还可以针对关注服务号的观众，推送微信模板消息。</p>
        <div class="switch-box">
          <el-switch
            v-model="wxSwitch"
            @change='changeSwitch'
            :width="32"
            inactive-color="#DEE1FF"
            active-color="#FFD021">
          </el-switch>
          <span class="switch-title">开启微信服务号</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapMutations, mapState} from 'vuex'
  import * as types from 'src/store/mutation-types'
  import userService from 'src/api/mage-service'
  import EventBus from 'src/utils/eventBus'

  export default {
    name: 'wx-serve',
    data () {
      return {
        wxSwitch: true
      }
    },
    computed: {
      ...mapState('login', {
        accountInfo: state => state.accountInfo
      })
    },
    created () {
      this.wxSwitch = this.accountInfo.openWechatSubscribe === 'Y'
      EventBus.$emit('breads', [{
        title: '账户管理'
      }, {
        title: '微信服务号'
      }])
    },
    methods: {
      ...mapMutations('login', {
        storeAccountInfo: types.ACCOUNT_INFO
      }),
      changeSwitch () {
        let wxSubscribe = this.wxSwitch ? 'Y' : 'N'
        this.$get(userService.GET_WX_SUBSCRIBE, {
          openWechatSubscribe: wxSubscribe
        }).then((res) => {
          if (res.code === 200) {
            this.storeAccountInfo({
              ...this.accountInfo,
              openWechatSubscribe: wxSubscribe
            })
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
.wx-box {
  width: 1366px;
  min-width: 1019px;
  margin: 0 auto;
  padding-bottom: 30px;
  color: #222;
  /* 设备宽度大于 1600 */
  @media all and (min-width: 1600px) {
    width: 1366px;
  }

  /* 设备宽度小于 1600px */
  @media all and (max-width: 1600px) {
    width: 1019px;
  }
  .title {
    display: block;
    margin-top: 50px;
    margin-bottom: 30px;
    font-size: 24px;
  }
  .wx-setting-content {
    height: 557px;
    background-color: #fff;
    border-radius: 5px;
    border: solid 1px #e2e2e2;
    .setting-box {
      width: 60%;
      max-width: 720px;
      margin: 0 auto;
      padding-top: 100px;
      text-align: center;
      color: #555;
      font-size: 14px;
      img {
        display: block;
        width: 150px;
        margin: 0 auto 30px auto;
      }
      .switch-box {
        user-select: none;
        margin-top: 40px;
        text-align: center;
        .switch-title {
          display: block;
          margin-top: 10px;
          margin-left: 10px;
          vertical-align: middle;
          color: #222;
        }
      }
    }
  }
}
</style>
