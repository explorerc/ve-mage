<template>
  <div style="height: 100%;">
    <div class="v-footprints bscroll"
         ref="bscroll"
         @scroll="scrollEvent($event)">
      <ol class="bscroll-container">
        <li class="v-footprint"
            v-for="itemData in dataList"
            :key="itemData.behavior_id">
          <i class="iconfont icon-dian">
          </i>
          <i class="v-border"></i>
          <p class="v-time">
            {{itemData.generated_at}}
          </p>
          <p class="v-content">
            {{itemData.event==='JOIN_ACTIVITY'?'参加':'首次访问'}}活动
            {{itemData.data.activity_title?itemData.data.activity_title:''}}
            <button @click="showRecord(itemData.activity_id,itemData.data.activity_title,itemData.generated_at)"
                    v-if="itemData.event!='FIRST_VISIT'">
              查看详情
            </button>
          </p>
        </li>
        <!-- <li class="v-footprint">
          <i class="iconfont icon-dian">
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
        </li> -->
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
          {{showActivity.name}}
        </p>
        <p class="v-time">
          {{showActivity.time}}
        </p>
        <div class="v-steps-content">
          <div class="v-steps bscroll"
               ref="infoscroll">
            <ol class="bscroll-container">
              <li class="v-step"
                  v-for="itemData in dataInfoList"
                  :key="itemData.behavior_id">
                <div class="v-content">
                  <i class="iconfont icon-dian">
                  </i>
                  <i class="v-border"></i>
                  <p class="v-content-time">
                    {{itemData.generated_at}}
                  </p>
                  <p class="v-content-title">
                    {{event(itemData)}}
                  </p>
                </div>
              </li>
              <!-- <li class="v-step">
                <div class="v-content">
                  <i class="iconfont icon-dian">
                  </i>
                  <i class="v-border"></i>
                  <p class="v-content-time">
                    2017-07-07 09:30:05
                  </p>
                  <p class="v-content-title">
                    进入活动官网
                  </p>
                </div>
              </li> -->
            </ol>
          </div>
        </div>
      </div>
    </message-box>
  </div>
</template>
<script>
  import userService from 'src/api/mage-service'
  import BScroll from 'better-scroll'

  export default {
    data () {
      return {
        scrollEvent: null,
        dataList: [],
        dataInfoList: [],
        searchParams: {
          business_consumer_uid: 0,
          type: 1,
          page: 1,
          page_size: 20,
          totalPage: 0
        },
        searchInfoParams: {
          business_consumer_uid: 0,
          type: 2,
          page: 1,
          page_size: 20,
          totalPage: 0
        },
        showActivity: {
          name: '',
          time: ''
        },
        total: 0,
        infoTotal: 0,
        recordBoxShow: false // 行为记录框显示隐藏
      }
    },
    mounted () {
      this.getDataList()
      // this.initScroll()
    },
    created () {
      this.scrollEvent = this.debounce(e => {
        if (this.$refs.bscroll.offsetHeight + this.$refs.bscroll.scrollTop > this.$refs.bscroll.scrollHeight - 100) {
          if (this.searchParams.page < this.searchParams.totalPage) {
            this.searchParams.page = parseInt(this.searchParams.page) + 1
            this.getDataList()
          }
        }
      }, 50)
    },
    methods: {
      debounce (func, wait, immediate) {
        var timeout
        return function () {
          var context = this
          var args = arguments
          var later = function () {
            timeout = null
            if (!immediate) func.apply(context, args)
          }
          var callNow = immediate && !timeout
          clearTimeout(timeout)
          timeout = setTimeout(later, wait)
          if (callNow) func.apply(context, args)
        }
      },
      showRecord (activityId, name, time) {
        this.recordBoxShow = true
        this.showActivity.name = name
        this.showActivity.time = time
        this.searchInfoParams.page = 1
        this.searchInfoParams.activity_id = activityId
        this.getDataInfoList(false)
      },
      recordBoxClick (e) {
        if (e.action === 'cancel') {
          this.recordBoxShow = false
        }
      },
      getDataList () {
        this.searchParams.business_consumer_uid = this.$route.params.id
        this.$config({handlers: true}).$get(userService.GET_BEHAVIOR_LIST, this.searchParams).then((res) => {
          if (res.data && res.data.list) {
            res.data.list.forEach(element => {
              this.dataList.push(element)
            })
            this.total = res.data.total
            this.searchParams.page = parseInt(res.data.page) + 1
            this.searchParams.totalPage = Math.ceil(res.data.total / res.data.page_size)
          }
        }).catch(err => {
          if (err.code !== 201) {
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
          }
        })
      },
      // initScroll () {
      //   let _this = this
      //   this.$nextTick(() => {
      //     let bscrollDom = this.$refs.bscroll
      //     this.aBScroll = new BScroll(bscrollDom, {
      //       'scrollbar': true,
      //       'click': true,
      //       'mouseWheel': true,
      //       'probeType ': 3,
      //       'pullup': true
      //       // 当 probeType 为 1 的时候，会非实时（屏幕滑动超过一定时间后）派发scroll 事件；当 probeType 为 2 的时候，会在屏幕滑动的过程中实时的派发 scroll 事件；当 probeType 为 3 的时候，不仅在屏幕滑动的过程中，而且在 momentum 滚动动画运行过程中实时派发 scroll 事件。
      //     })
      //     this.aBScroll.on('scrollEnd', () => {
      //       // 滚动到底部
      //       if (this.aBScroll.y <= (this.aBScroll.maxScrollY)) {
      //         if (_this.searchParams.page <= _this.searchParams.total) {
      //           this.getDataList()
      //         }
      //       }
      //     })
      //   })
      // },
      getDataInfoList (isAdd) {
        this.searchInfoParams.business_consumer_uid = this.$route.params.id
        if (!isAdd) {
          this.dataInfoList = []
        }
        this.$config({handlers: true}).$get(userService.GET_BEHAVIOR_LIST, this.searchInfoParams).then((res) => {
          this.dataInfoList = res.data.list
          this.infoTotal = res.data.total
          this.searchInfoParams.total = res.data.total
          this.searchInfoParams.totalPage = Math.ceil(res.data.total / res.data.page_size)
          this.initInfoScroll()
        }).catch(err => {
          if (err.code !== 201) {
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
          }
        })
      },
      initInfoScroll () {
        if (this.infoscroll) return
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
            // console.log(this.infoscroll.y + ',' + this.infoscroll.maxScrollY)
            if (this.infoscroll.y === (this.infoscroll.maxScrollY)) {
              if (_this.searchInfoParams.page < _this.searchInfoParams.totalPage) {
                _this.searchInfoParams.page = parseInt(_this.searchInfoParams.page) + 1
                _this.getDataInfoList(true)
              }
            }
          })
        })
      },
      event (item) {
        let type = item.event
        let data = item.data
        let strType = ''
        switch (type) {
          case 'JOIN_ACTIVITY_WEBSITE':
            strType = '进入了活动官网'
            break
          case 'LEAVE_ACTIVITY_WEBSITE':
            strType = '离开了活动官网'
            break
          case 'JOIN_ACTIVITY_GUIDE':
            strType = '进入了活动引导页'
            break
          case 'LEAVE_ACTIVITY_GUIDE':
            strType = '离开了活动引导页'
            break
          case 'ORDER_ACTIVITY':
            strType = '预约活动'
            break
          case 'APPLY_ACTIVITY':
            strType = '报名活动'
            break
          case 'JOIN_ACTIVITY':
            if (data.service_names === '1') {
              strType = '进入了直播'
            } else if (data.service_names === '2') {
              strType = '进入了回放'
            } else {
              strType = '进入了活动'
            }
            break
          case 'FIRST_CHAT':
            strType = '开始了聊天'
            break
          case 'FIRST_SHARE':
            strType = '进行第一次分享'
            break
          case 'COMMIT_SURVEY':
            strType = '提交调查问卷'
            break
          case 'SHARE_COUNT':
            strType = `共进行了${data.count}次分享`
            break
          case 'STAY_ACTIVITY_WEBSITE_TIME':
            strType = `在活动官网浏览了${(data.time / 60).toFixed(2)}分钟`
            break
          case 'STAY_ACTIVITY_TIME':
            strType = `观看了${(data.time / 60).toFixed(2)}分钟直播`
            break
          case 'STAY_VOD_ACTIVITY_TIME':
            strType = `观看了${(data.time / 60).toFixed(2)}分钟回放`
            break
          case 'SEND_CHAT_COUNT':
            strType = `共发送了${data.count}条聊天内容`
            break
          case 'INVITE_COUNT':
            strType = `共邀请了${data.count}个好友`
            break
          case 'CONCERN_WX':
            strType = `关注了${data.wx_name}`
            break
          case 'EMAIL_SUBSCRIBE':
            strType = `关注了${data.business_name}`
            break
        }
        return strType
      }
    }
  }
</script>
<style lang='scss' scoped>
  .v-footprints {
    .v-footprint {
      .iconfont {
        color: #779FFF;
      }
    }
  }

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
          .iconfont {
            color: #779fff;
          }
        }
      }
    }
  }
</style>
