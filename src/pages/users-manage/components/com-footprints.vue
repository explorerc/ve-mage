<template>
  <div style="height: 100%;">
    <div class="v-footprints bscroll" ref="bscroll">
      <ol class="bscroll-container">
        <li class="v-footprint" v-for="itemData in dataList" :key="itemData.behavior_id">
          <i class="iconfont icon-duigou1">
          </i>
          <i class="v-border"></i>
          <p class="v-time">
            {{itemData.generated_at}}
          </p>
          <p class="v-content">
            {{itemData.event==='JOIN_ACTIVITY'?'参加活动':'首次访问'}}活动 {{itemData.data.activity_name?itemData.data.activity_name:''}}
            <button @click="showRecord(itemData.behavior_id)">
              查看详情
            </button>
          </p>
        </li>
        <li class="v-footprint">
          <i class="iconfont icon-duigou1">
          </i>
          <i class="v-border"></i>
          <p class="v-time">
            2018-07-07 18:16:35
          </p>
          <p class="v-content">
            参加了活动 2018年云溪大会杭州分会场
            <button @click="showRecord(66)">
              查看详情
            </button>
          </p>
        </li>
      </ol>
    </div>
    <message-box v-show="recordBoxShow"
                 @handleClick="recordBoxClick"
                 width="450px"
                 class="message-box v-record"
                 confirmText="确定"
                 type='prompt'
                 header='行为记录'>
      <div>
        <p class="v-explain">
          百度人工智能大会发布芯片
        </p>
        <p class="v-time">
          2018-07-07 09:30:00
        </p>
        <div class="v-steps-content">
          <div class="v-steps bscroll" ref="infoscroll">
            <ol class="bscroll-container">
              <li class="v-step" v-for="itemData in dataInfoList" :key="itemData.behavior_id">
                <div class="v-content">
                  <i class="iconfont icon-duigou1">
                  </i>
                  <i class="v-border"></i>
                  <p class="v-content-time">
                    {{itemData.generated_at}}
                  </p>
                  <p class="v-content-title">
                    {{event(itemData.event,itemData.data)}}
                  </p>
                </div>
              </li>
              <li class="v-step">
                <div class="v-content">
                  <i class="iconfont icon-duigou1">
                  </i>
                  <i class="v-border"></i>
                  <p class="v-content-time">
                    2017-07-07 09:30:05
                  </p>
                  <p class="v-content-title">
                    进入活动官网
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </message-box>
  </div>
</template>
<script>
import userService from 'src/api/user-service'
import BScroll from 'better-scroll'
export default {
  data () {
    return {
      dataList: {},
      dataInfoList: {},
      searchParams: {
        business_consumer_uid: 0,
        type: 1,
        page: 1,
        page_size: 20
      },
      searchInfoParams: {
        business_consumer_uid: 0,
        type: 2,
        page: 1,
        page_size: 20
      },
      total: 0,
      infoTotal: 0,
      recordBoxShow: false // 行为记录框显示隐藏
    }
  },
  created () {
    this.getDataList()
    this.initScroll()
  },
  methods: {
    showRecord (activityId) {
      this.recordBoxShow = true
      this.getDataInfoList(activityId)
      this.initInfoScroll()
    },
    recordBoxClick (e) {
      if (e.action === 'cancel') {
        this.recordBoxShow = false
      }
    },
    getDataList () {
      this.searchParams.business_consumer_uid = this.$route.params.id
      this.$config({ handlers: true }).$get(userService.GET_BEHAVIOR_LIST, this.searchParams).then((res) => {
        res.data.list.forEach(element => {
          this.dataList.push(element)
        })
        this.total = res.data.total
        this.searchParams.page = parseInt(res.data.currPage) + 1
        this.searchParams.total = res.data.total
      }).catch(err => {
        this.$messageBox({
          header: '提示',
          content: err.msg,
          confirmText: '确定',
          handleClick: (e) => {
            if (e.action === 'cancel') {
            } else if (e.action === 'confirm') {
            }
          }
        })
      })
    },
    initScroll () {
      let _this = this
      this.$nextTick(() => {
        let bscrollDom = this.$refs.bscroll
        this.aBScroll = new BScroll(bscrollDom, {
          'scrollbar': true,
          'click': true,
          'mouseWheel': true,
          'probeType ': 3,
          'pullup': true
          // 当 probeType 为 1 的时候，会非实时（屏幕滑动超过一定时间后）派发scroll 事件；当 probeType 为 2 的时候，会在屏幕滑动的过程中实时的派发 scroll 事件；当 probeType 为 3 的时候，不仅在屏幕滑动的过程中，而且在 momentum 滚动动画运行过程中实时派发 scroll 事件。
        })
        this.aBScroll.on('scrollEnd', () => {
          // 滚动到底部
          if (this.aBScroll.y <= (this.aBScroll.maxScrollY)) {
            if (_this.searchParams.page <= _this.searchParams.total) {
              _this.getDataList()
            }
          }
        })
      })
    },
    getDataInfoList (activityId) {
      this.searchInfoParams.business_consumer_uid = this.$route.params.id
      this.searchInfoParams.activity_id = activityId
      this.$config({ handlers: true }).$get(userService.GET_BEHAVIOR_LIST, this.searchInfoParams).then((res) => {
        res.data.list.forEach(element => {
          this.dataInfoList.push(element)
        })
        this.infoTotal = res.data.total
        this.searchInfoParams.page = parseInt(res.data.currPage) + 1
        this.searchInfoParams.total = res.data.total
      }).catch(err => {
        this.$messageBox({
          header: '提示',
          content: err.msg,
          confirmText: '确定',
          handleClick: (e) => {
            if (e.action === 'cancel') {
            } else if (e.action === 'confirm') {
            }
          }
        })
      })
    },
    initInfoScroll () {
      let _this = this
      this.$nextTick(() => {
        let bscrollDom = this.$refs.infoscroll
        this.infoscroll = new BScroll(bscrollDom, {
          'scrollbar': true,
          'click': true,
          'mouseWheel': true,
          'probeType ': 3,
          'pullup': true
          // 当 probeType 为 1 的时候，会非实时（屏幕滑动超过一定时间后）派发scroll 事件；当 probeType 为 2 的时候，会在屏幕滑动的过程中实时的派发 scroll 事件；当 probeType 为 3 的时候，不仅在屏幕滑动的过程中，而且在 momentum 滚动动画运行过程中实时派发 scroll 事件。
        })
        this.infoscroll.on('scrollEnd', () => {
          // 滚动到底部
          if (this.infoscroll.y <= (this.infoscroll.maxScrollY)) {
            if (_this.searchInfoParams.page <= _this.searchInfoParams.total) {
              _this.getDataInfoList()
            }
          }
        })
      })
    },
    event (type, data) {
      let strType = ''
      switch (type) {
        case 'JOIN_ACTIVITY_WEBSITE':
          strType = '进入活动官网'
          break
        case 'LEAVE_ACTIVITY_WEBSITE':
          strType = '离开活动官网'
          break
        case 'JOIN_ACTIVITY_GUIDE':
          strType = '进入活动引导页'
          break
        case 'LEAVE_ACTIVITY_GUIDE':
          strType = '离开活动引导页'
          break
        case 'ORDER_ACTIVITY':
          strType = '预约活动'
          break
        case 'APPLY_ACTIVITY':
          strType = '报名活动'
          break
        case 'JOIN_ACTIVITY':
          strType = '进入活动'
          break
        case 'FIRST_CHAT':
          strType = '开始聊天'
          break
        case 'FIRST_SHARE':
          strType = '第一次分享'
          break
        case 'COMMIT_SURVEY':
          strType = '提交调查问卷'
          break
        case 'SHARE_COUNT':
          strType = `分享次数，共进行了${data.count}次分享`
          break
        case 'STAY_ACTIVITY_WEBSITE_TIME':
          strType = `活动官网停留时间，在活动官网浏览了${data.time}分钟`
          break
        case 'STAY_ACTIVITY_TIME':
          strType = `活动停留时间，观看了${data.time}分钟`
          break
        case 'SEND_CHAT_COUNT':
          strType = `聊天条数，共发送了${data.count}条聊天内容`
          break
        case 'INVITE_COUNT':
          strType = `邀请好友数，共邀请了${data.count}个好友`
          break
        case 'CONCERN_WX':
          strType = `关注微信公众号，关注了${data.wx_name}`
          break
        case 'EMAIL_SUBSCRIBE':
          strType = `邮件订阅，关注了${data.wx_name}`
          break
      }
      return strType
    }
  }
}
</script>
<style lang='scss' scoped>
.v-record /deep/ {
  .ve-message-box__container {
    max-height: 562px;
    .v-steps-content {
      height: 450px;
      .v-steps {
        position: relative;
        width: 100%;
        overflow: hidden;
        height: calc(100%);
      }
    }
  }
}
</style>
