<template>
  <div>
    <div class="v-footprints" ref="bscroll">
      <div class="v-footprint">
        <i class="iconfont icon-duigou1">
        </i>
        <i class="v-border"></i>
        <p class="v-time">
          2018-07-07 18:16:35
        </p>
        <p class="v-content">
          参加了活动 2018年云溪大会杭州分会场
          <button @click="showRecord()">
            查看详情
          </button>
        </p>
      </div>
      <div class="v-footprint">
        <i class="iconfont icon-duigou1">
        </i>
        <i class="v-border"></i>
        <p class="v-time">
          2018-07-07 18:16:35
        </p>
        <p class="v-content">
          参加了活动 2018年云溪大会杭州分会场
          <button @click="showRecord()">
            查看详情
          </button>
        </p>
      </div>
      <div class="v-footprint">
        <i class="iconfont icon-duigou1">
        </i>
        <i class="v-border"></i>
        <p class="v-time">
          2018-07-07 18:16:35
        </p>
        <p class="v-content">
          参加了活动 2018年云溪大会杭州分会场
          <button @click="showRecord()">
            查看详情
          </button>
        </p>
      </div>
      <div class="v-footprint">
        <i class="iconfont icon-duigou1">
        </i>
        <i class="v-border"></i>
        <p class="v-time">
          2018-07-07 18:16:35
        </p>
        <p class="v-content">
          参加了活动 2018年云溪大会杭州分会场
          <button @click="showRecord()">
            查看详情
          </button>
        </p>
      </div>
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
        <div class="v-steps">
          <div class="v-step">
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
          </div>
          <div class="v-step">
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
          </div>
          <div class="v-step">
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
          </div>
          <div class="v-step">
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
      searchParams: {
        business_consumer_uid: 0,
        type: 1,
        page: 1,
        page_size: 20
      },
      total: 0,
      recordBoxShow: false // 行为记录框显示隐藏
    }
  },
  created () {
    this.getDataList()
    this.initScroll()
  },
  methods: {
    showRecord () {
      this.recordBoxShow = true
    },
    recordBoxClick (e) {
      if (e.action === 'cancel') {
        this.recordBoxShow = false
      }
    },
    getDataList () {
      this.searchParams.business_consumer_uid = this.$route.params.id
      this.$config({handlers: true}).$get(userService.GET_BEHAVIOR_LIST, this.searchParams).then((res) => {
        this.dataList = res.data
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
    }
  }
}
</script>
