<!-- 活动详情页面-->
<template>
  <div class='detail-wrap'>
    <div class="desc clearfix">
      <div class="left">
        <img v-if="poster" :src="`${imgHost + poster}`">
        <img v-else src="https://cnstatic01.e.vhall.com/static/img/v35-webinar.png">
        <span class="state" :class="stateClass">{{state}}</span>
      </div>
      <div class="middle">
        <p class='title'>{{title}} <span class='id-tag'>ID:{{activityId}} <i></i></span></p>
        <p class='desc-label'>互动标签: <span class="tag" v-for="item in tagList">{{item}}</span></p>
        <p class='desc-label'>开播时间: {{startTime}}</p>
        <ol class='clearfix'>
        <!-- <span><a :href="this.state == 1 ? `baidu.com/${this.id}` : `xinlang.com/${this.id}`">活动官网</a></span>
        <span><a :href="this.state == 1 ? `baidu.com/${this.id}` : `xinlang.com/${this.id}`">直播观看页</a></span> -->
          <li class='icon'><i></i><router-link :to="this.state == 1 ? `baidu.com/${this.activityId}` : `xinlang.com/${this.activityId}`"></router-link>活动页面</li>
          <li class='icon copy'><i></i>复制链接</li>
          <li class='icon offline' @click='update'><i></i>{{state == 1 ? '发布活动' : '下线活动'}}</li>
        </ol>
      </div>
      <div class="right">
        <p class="title">距离直播开始还有</p>
        <div class="count-box">
          <com-countdown :endTime.sync="countdownTime">
            <ol class='clearfix' @timeOut='timeOut' slot='slot1' slot-scope="scoped">
              <li>{{scoped.day}}<span>天</span></li>
              <li>{{scoped.hour}}<span>时</span></li>
              <li>{{scoped.minute}}<span>分</span></li>
              <li>{{scoped.second}}<span>秒</span></li>
            </ol>
          </com-countdown>
        </div>
        <el-button class='primary-button' @click='turnOn'>正式直播</el-button>
      </div>
    </div>
    <div class="block process clearfix">
      <div class="top clearfix">
        <ul>
          <li class='step'>
            <dl>
              <dt></dt>
              <dd>准备</dd>
            </dl>
          </li>
          <li class='step prompt'>
            <dl>
              <dt></dt>
              <dd>推广</dd>
            </dl>
          </li>
          <li class='step brand'>
            <dl>
              <dt></dt>
              <dd>品牌</dd>
            </dl>
          </li>
          <li class='step live active'>
            <dl>
              <dt></dt>
              <dd>直播</dd>
            </dl>
          </li>
          <li class='step disable record'>
            <dl>
              <dt></dt>
              <dd>回放</dd>
            </dl>
          </li>
          <li class='step disable statics'>
            <dl>
              <dt></dt>
              <dd>数据</dd>
            </dl>
          </li>
        </ul>
      </div>
      <div class="bottom clearfix">
        <div>
          <!-- <span>准备</span> -->
          <ol>
            <li v-for='item in cardData.prepare' :key='item.title' v-show="item.checked">{{item.title}}</li>
          </ol>
        </div>
        <div>
          <!-- <span>营销</span> -->
          <ol>
            <li v-for='item in cardData.marketing' :key='item.title' v-show="item.checked">{{item.title}}</li>
          </ol>
        </div>
        <div>
          <!-- <span>形象</span> -->
          <ol>
            <li v-for='item in cardData.promote' :key='item.title' v-show="item.checked">{{item.title}}</li>
          </ol>
        </div>
        <div>
          <!-- <span>直播</span> -->
          <ol>
            <!-- <li v-for='item in cardData.webinar' :key='item.title' v-show="item.checked">{{item.title}}</li> -->
            <li>直播监控</li>
            <li>聊天审核</li>
          </ol>
        </div>
        <div>
          <!-- <span>回放</span> -->
          <ol>
            <!-- <li v-for='item in cardData.record' :key='item.title' v-show="item.checked">{{item.title}}</li> -->
            <li>设置回放</li>
          </ol>
        </div>
        <div>
          <!-- <span>数据</span> -->
          <ol>
            <!-- <li v-for='item in processData.data' :key='item.title' v-show="item.checked">{{item.title}}</li> -->
            <li>数据报表</li>
            <li>详细数据导出</li>
          </ol>
          </ol>
        </div>
      </div>
    </div>
    <div class="fun-card">
      <p class='block-separte'>准备</p>
      <div class="item prepare">
        <div class="card-list clearfix">
          <process-card @update:checked='switchBack' v-for="(item,index) in cardData.prepare" :prop-switch='item.switch' :prop-idx='index' :key='item.title' :prop-checked.sync='item.checked' :prop-title='item.title' :prop-desc='item.desc' :prop-part='"prepare"'
            :prop-img='item.img'></process-card>
        </div>
      </div>
      <div class="item marketing">
        <p class='block-separte'>营销</p>
        <div class="card-list clearfix">
          <process-card @update:checked='switchBack' v-for="(item,index) in cardData.marketing" :prop-switch='item.switch' :prop-idx='index' :key='item.title' :prop-checked.sync='item.checked' :prop-title='item.title' :prop-desc='item.desc' :prop-part='"marketing"'
            :prop-img='item.img'></process-card>
        </div>
      </div>
      <div class="item promote">
        <p class='block-separte'>形象</p>
        <div class="card-list clearfix">
          <process-card @update:checked='switchBack' v-for="(item,index) in cardData.promote" :prop-switch='item.switch' :prop-idx='index' :key='item.title' :prop-checked.sync='item.checked' :prop-title='item.title' :prop-desc='item.desc' :prop-part='"promote"'
            :prop-img='item.img'></process-card>
        </div>
      </div>
      <div class="item setting">
        <p class='block-separte'>高级设置</p>
        <div class="card-list clearfix">
          <!-- <process-card @update:checked='switchBack' v-for="(item,index) in cardData['setting']" :prop-idx='index' :key='item.title' :prop-checked.sync='item.checked' :prop-title='item.title' :prop-desc='item.desc' :prop-part='"setting"' :prop-img='item.img'></process-card> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import http from 'src/api/activity-manger'
  import processCard from 'components/process-card'
  import messageBox from 'components/common/message-box'
  import comCountdown from 'components/com-countDown'
  export default {
    data () {
      return {
        title: '',
        id: '',
        poster: '',
        tagList: [],
        startTime: '',
        stateClass: '',
        state: '',
        cardData: {},
        msgShow: false,
        activityId: this.$route.params.id,
        imgHost: 'http://dev-zhike.oss-cn-beijing.aliyuncs.com/',
        countdownTime: '' // 倒计时 秒
      }
    },
    created () {
      // 假数据
      // this.title = '2018GIMIC互联网大会'
      // this.id = this.$route.params.id
      // this.tagList = ['科技', '发布会', '标签三']
      // this.startTime = '2018-07-09 09:30:00'
      // this.state = 1
      // this.state = 1

      // 假数据 返回的card 数据
      this.cardData = {
        'prepare': [{
          title: '基本信息',
          img: '',
          switch: false,
          checked: true,
          desc: [
            '基本信息内容1',
            '基本信息内容2'
          ]
        },
        {
          title: '观看限制',
          img: '',
          switch: false,
          checked: true,
          desc: [
            '观看限制内容1',
            '观看限制内容2'
          ]
        },
        {
          title: '角色设置',
          img: '',
          checked: true,
          switch: false,
          desc: [
            '角色设置内容1',
            '角色设置内容2'
          ]
        },
        {
          title: '暖场设置',
          img: '',
          switch: true,
          checked: true,
          desc: [
            '暖场设置内容1',
            '暖场设置内容2'
          ]
        },
        {
          title: '预约报名',
          img: '',
          switch: false,
          checked: true,
          desc: [
            '预约报名内容1',
            '预约报名内容2'
          ]
        },
        {
          title: '通知提醒',
          img: '',
          switch: true,
          checked: true,
          desc: [
            '通知提醒内容1',
            '通知提醒内容2'
          ]
        }
        ],
        'marketing': [{
          title: '幸运大转盘',
          img: '',
          checked: true,
          desc: [
            '幸运大转盘内容1',
            '幸运大转盘内容2'
          ]
        },
        {
          title: '红包雨',
          img: '',
          checked: true,
          desc: [
            '红包雨内容1'
          ]
        },
        {
          title: '瓜分大奖',
          img: '',
          checked: true,
          desc: [
            '瓜分大奖内容1',
            '瓜分大奖内容2'
          ]
        },
        {
          title: '暖场设置',
          img: '',
          checked: true,
          desc: [
            '暖场设置内容1',
            '暖场设置内容2'
          ]
        },
        {
          title: '观看奖励',
          img: '',
          checked: true,
          desc: [
            '观看奖励内容1',
            '观看奖励内容2'
          ]
        },
        {
          title: '有奖答题',
          img: '',
          checked: true,
          desc: [
            '有奖答题内容1',
            '有奖答题内容2'
          ]
        }
        ],
        'promote': [{
          title: '活动官网',
          img: '',
          checked: true,
          switch: false,
          desc: [
            '活动官网内容1',
            '活动官网内容2'
          ]
        },
        {
          title: '直播观看页',
          img: '',
          checked: true,
          desc: [
            '直播观看页内容1'
          ]
        },
        {
          title: '广告设置',
          img: '',
          checked: true,
          desc: [
            '广告设置内容1',
            '广告设置内容2'
          ]
        },
        {
          title: '播放器',
          img: '',
          checked: true,
          desc: [
            '播放器内容1',
            '播放器内容2'
          ]
        },
        {
          title: '分享设置',
          img: '',
          checked: true,
          desc: [
            '分享设置内容1',
            '分享设置内容2'
          ]
        }
        ],
        'setting': [{
          title: '网页嵌入',
          img: '',
          checked: true,
          desc: [
            '网页嵌入内容1',
            '网页嵌入内容2'
          ]
        },
        {
          title: '直播工具配置',
          img: '',
          checked: true,
          desc: [
            '直播工具配置内容1'
          ]
        },
        {
          title: '角色设置',
          img: '',
          checked: true,
          desc: [
            '角色设置内容1',
            '角色设置内容2'
          ]
        }
        ]
      }
    },
    mounted () {
      this.getDetails()
    },
    methods: {
      update () {
        // debugger // eslint-disable-line
        if (this.state === '预约') {
          this.$messageBox({
            header: '提示',
            width: '200',
            content: '活动发布后，活动官网、直播观看页和所有的营销工具页都将同时正式发布',
            cancelText: '暂不发布', // 不传递cancelText将只有一个确定按钮
            confirmText: '立即发布',
            handleClick: (e) => {
              console.log(e)
              if (e.action === 'cancel') {
              } else if (e.action === 'confirm') {
                // this.state = 0
              }
            }
          })
        } else {
          this.$messageBox({
            header: '提示',
            width: '200',
            content: '活动下线后，活动官网、直播观看页和所有的营销工具页都将同时下线',
            cancelText: '暂不下线', // 不传递cancelText将只有一个确定按钮
            confirmText: '立即下线',
            handleClick: (e) => {
              console.log(e)
              if (e.action === 'cancel') {
              } else if (e.action === 'confirm') {
                // this.state = 1
              }
            }
          })
        }
      },
      turnOn () {
        this.$messageBox({
          header: '提示',
          width: '200',
          content: '进入直播后，您的活动官网和观看引导页将正式对外发布，是否继续执行？',
          cancelText: '暂不开播', // 不传递cancelText将只有一个确定按钮
          confirmText: '确认开播',
          handleClick: (e) => {
            console.log(e)
            if (e.action === 'cancel') {
            } else if (e.action === 'confirm') {
              // this.state = 0
            }
          }
        })
      },
      switchBack (res) {
        //  debugger // eslint-disable-line
        console.log(res)
        if (res.type) {
          // 添加显示相关项目
          // debugger // eslint-disable-line
          this.cardData[res.part][res.idx]['checked'] = true
        } else {
          // 隐藏相关项目
          this.cardData[res.part][res.idx]['checked'] = false
        }
      },
      getDetails () {
        http.getDetails(this.activityId).then((res) => {
          // console.log(res)
          // this.countdownTime = res.data.activity.countDown.toString()
          this.title = res.data.activity.title
          // this.tagList = res.data.activity.countDown
          this.startTime = res.data.activity.startTime
          this.poster = res.data.activity.imgUrl
          switch (res.data.activity.status) {
            case ('LIVING'):
              this.state = '直播'
              this.stateClass = 'live'
              break
            case ('PLAYBACK'):
              this.state = '回放'
              this.stateClass = 'record'
              break
            case ('FINISH'):
              this.state = '结束'
              this.stateClass = 'ended'
              break
            case ('PREPARE'):
              this.state = '预约'
              this.stateClass = 'preview'
              break
          }
        }).catch((e) => {
          console.log(e)
        })
      },
      timeOut () {
        console.log('倒计时结束')
      }
    },
    components: {
      processCard,
      messageBox,
      comCountdown
    }

  }
</script>

<style lang='scss' scoped>
@import 'assets/css/variable.scss';
@import '~assets/css/mixin.scss';

.detail-wrap {
  border-radius: 5px;
  overflow: hidden;
  padding-bottom: 30px;
  margin: 0 auto;
  width: 1366px;
  min-width: 1019px;
  color: #222;
  transition: width 0.2s;

  /* 设备宽度大于 1600 */
  @media all and (min-width: 1600px) {
    width: 1366px;
  }

  /* 设备宽度小于 1600px */
  @media all and (max-width: 1600px) {
    width: 1019px;
    .right:before {
      left: -26px;
    }
    .process .top li {
      width: 140px;
      margin: 0 14px;
    }
    .process .top dt {
      width: 80px;
      height: 80px;
    }
    .process .top li.active dt:after {
      content: '';
      width: 90px;
      height: 90px;
      margin-top: -46px;
      margin-left: -46px;
    }
    .process .top dt:before {
      width: 70px;
      right: -80px;
    }
    .process .bottom > div ol > li {
      width: 140px;
    }
    .process .bottom > div {
      margin: 10px 14px;
    }
    .middle {
      width: 375px;
      ol {
        margin-top: 20px;
      }
    }
  }
}
.block {
  background: rgba(255, 255, 255, 1);
  border-radius: 4px;
  border: 1px solid rgba(226, 226, 226, 1);
  margin-top: 50px;
}
.process {
  padding: 30px 0;
  .top {
    li {
      text-align: center;
      float: left;
      width: 160px;
      margin: 0 33px;
    }
    dt {
      width: 90px;
      height: 90px;
      margin: 0 auto;
      border-radius: 500px;
      background: $color-default;
      position: relative;
      background-image: url('~assets/image/auto_wechat.png');
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
      &:before {
        content: '';
        width: 95px;
        height: 2px;
        background: $color-default;
        position: absolute;
        top: 50%;
        margin-top: -1px;
        right: -116px;
      }
    }
    dd {
      padding-top: 10px;
      font-size: 22px;
      color: $color-font;
    }
    li {
      &.disable {
        dt {
          background-color: rgba(211, 215, 255, 1);
          &:before {
            content: '';
            background: rgba(211, 215, 255, 1);
          }
        }
      }
      &.active dt:after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -53px;
        margin-left: -53px;
        width: 104px;
        height: 104px;
        border: 1px solid $color-default;
        border-radius: 500px;
      }
      &:last-child {
        dt:before {
          content: '';
          display: none;
        }
      }
      &.prompt dt {
        background-image: url('~assets/image/auto_wechat.png');
      }
      &.brand dt {
        background-image: url('~assets/image/auto_wechat.png');
      }
      &.live dt {
        background-image: url('~assets/image/auto_wechat.png');
      }
      &.record dt {
        background-image: url('~assets/image/auto_wechat.png');
      }
      &.statics dt {
        background-image: url('~assets/image/auto_wechat.png');
      }
    }
  }
  .bottom > div {
    margin: 10px 33px;
    float: left;
    ol > li {
      width: 160px;
      height: 36px;
      text-align: center;
      line-height: 36px;
      margin-top: 14px;
      background: rgba(239, 239, 239, 0.7);
      border-radius: 18px;
      border: 1px solid rgba(177, 177, 177, 1);
    }
  }
}
.desc {
  padding-top: 20px;
}
.left {
  float: left;
  margin-right: 20px;
  position: relative;
  img {
    display: inline-block;
    width: 300px;
    height: 169px;
    border-radius: 5px;
  }
  .state {
    position: absolute;
    top: 10px;
    left: 10px;
    width: 40px;
    text-align: center;
    line-height: 20px;
    height: 20px;
    background: rgba(0, 0, 0, 0.6);
    border-radius: 10px;
    font-size: 12px;
    color: #fff;
  }

  // .live {
  //   color: red;
  //   border-color: red;
  // }

  // .preview {
  //   color: blue;
  //   border-color: blue;
  // }

  // .record {
  //   color: green;
  //   border-color: green;
  // }
}
.middle {
  float: left;
  width: 640px;
  p {
    padding-bottom: 10px;
  }
  .title {
    font-size: 22px;
    color: $color-font;
    margin-right: 8px;
    .id-tag {
      padding: 2px 12px;
      color: $color-font-sub;
      font-size: 14px;
      background: rgba(239, 239, 239, 1);
      border-radius: 10px;
      i {
        cursor: pointer;
        display: inline-block;
        width: 10px;
        height: 10px;
        background: url('~assets/image/icon_activity.png') no-repeat center;
      }
    }
  }
  .desc-label {
    color: $color-font-sub;
    font-size: 14px;
    .tag {
      font-size: 12px;
      padding: 2px 10px;
      background: rgba(240, 241, 254, 1);
      border-radius: 12px;
      border: 1px solid rgba(219, 222, 253, 1);
      display: inline-block;
      margin: 0 3px;
    }
  }
  ol {
    margin-top: 30px;
    li {
      cursor: pointer;
      color: $color-font-sub;
      font-size: 14px;
      position: relative;
      float: left;
      margin-right: 40px;
      height: 20px;
      line-height: 20px;
      padding-left: 29px;
      &::before {
        content: '';
        width: 1px;
        height: 16px;
        background: rgba(216, 216, 216, 1);
        position: absolute;
        top: 0;
        right: -16px;
      }
      i {
        width: 20px;
        height: 20px;
        display: inline-block;
        background: url('~assets/image/icon_activity.png') no-repeat center;
        background-size: contain;
        position: absolute;
        left: 0;
      }
      &.copy i {
        background-image: url('~assets/image/icon_activity.png');
      }
      &.offline {
        &::before {
          content: '';
          display: none;
        }
        i {
          background-image: url('~assets/image/icon_activity.png');
        }
      }
    }
  }
}
.left {
  float: left;
}
.right {
  float: right;
  text-align: center;
  position: relative;
  &:before {
    content: '';
    width: 1px;
    height: 100%;
    position: absolute;
    top: 0px;
    left: -107px;
    background: rgba(226, 226, 226, 1);
    border-radius: 1px;
  }
  .count-box {
    margin: 13px 0 36px 0;
    li {
      float: left;
      width: 56px;
      height: 46px;
      line-height: 46px;
      text-align: center;
      background: rgba(38, 38, 38, 1);
      border-radius: 4px;
      color: #fff;
      font-size: 34px;
      font-family: unset;
      margin: 0px 6px;
      span {
        font-size: 12px;
      }
    }
  }
  .el-button {
    padding: 0px;
    width: 200px;
    height: 40px;
    line-height: 40px;
    text-align: center;
  }
}
.fun-card {
}
.block-separte {
  margin-top: 40px;
  margin-bottom: 10px;
  font-size: 18px;
  color: $color-font;
  padding-left: 20px;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 2px;
    left: 0px;
    width: 4px;
    height: 20px;
    background: rgba(255, 208, 33, 1);
  }
}
</style>
