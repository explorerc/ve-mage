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
              <dd>品牌</dd>
            </dl>
          </li>
          <li class='step brand'>
            <dl>
              <dt></dt>
              <dd>推广</dd>
            </dl>
          </li>
          <!-- <li class='step live active'>
            <dl>
              <dt></dt>
              <dd>直播</dd>
            </dl>
          </li> -->
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
            <li v-show="dataPrepare[0].switch">基本信息</li>
            <li v-show="dataPrepare[1].switch">活动报名</li>
            <li v-show="dataPrepare[2].switch">暖场设置</li>
          </ol>
        </div>
        <div>
          <!-- <span>品牌</span> -->
          <ol>
            <li v-show="dataBrand[0].switch">活动官网</li>
            <li v-show="dataBrand[1].switch">直播引导页</li>
            <li v-show="dataBrand[2].switch">观看页</li>
          </ol>
        </div>
        <div>
          <!-- <span>推广</span> -->
          <ol>
            <li v-show="dataPromote[0].switch">自动化通知</li>
            <li v-show="dataPromote[1].switch">邮箱</li>
            <li v-show="dataPromote[2].switch">短信</li>
            <li v-show="dataPromote[3].switch">微信</li>
          </ol>
        </div>
        <!-- <div>
          <span>直播</span>
          <ol>
            <li>直播监控</li>
            <li>聊天审核</li>
          </ol>
        </div> -->
        <div>
          <!-- <span>回放</span> -->
          <ol>
            <li v-show="dataRecord[0].switch">设置回放</li>
          </ol>
        </div>
        <div>
          <!-- <span>数据</span> -->
          <ol>
            <li>数据报表</li>
            <li>详细数据导出</li>
          </ol>
          </ol>
        </div>
      </div>
    </div>
    <div class="fun-card">
        <div class="item prepare">
        <p class='block-separte'>准备</p>
          <!-- <div class="card-list clearfix">
            <process-card @update:checked='switchBack' v-for="(item,index) in cardData.prepare" :prop-link="item.link" :prop-switch='item.switch' :prop-idx='index' :key='item.title' :prop-checked.sync='item.checked' :prop-title='item.title' :prop-desc='item.desc' :prop-part='"prepare"'
              :prop-img='item.img'></process-card>
          </div> -->
          <div class="card-list clearfix">
            <div class='item'>
              <!-- 基本信息 -->
              <router-link :to="`/liveMager/edit/${activityId}`" >
                <div class="card">
                  <div class='pic'>
                    <!-- <img :src="propImg"> -->
                  </div>
                  <div class='desc'>
                    <span>基本信息</span>
                    <span class='des'>编辑活动基本信息</span>
                  </div>
                </div>
                <div class="btm">
                  <el-switch class='switch' v-model="dataPrepare[0].switch" inactive-color="#DEE1FF" :width="32" active-color="#FFD021"></el-switch>
                  <!-- <span class='set'>设置</span> -->
                </div>
              </router-link>
            </div>
            <div class='item'>
              <!-- 活动报名 -->
              <router-link :to="`/liveMager/prepare/limit-apply/${activityId}`" >
                <div class="card">
                  <div class='pic'>
                    <!-- <img :src="propImg"> -->
                  </div>
                  <div class='desc'>
                    <span>活动报名</span>
                    <span class='des'>
                      <!-- 未设置未开启 -->
                      <template v-if="!dataPrepare[1].isSet && !dataPrepare[1].switch">开启后收集目标观众信息</template>
                      <!-- 未设置已开启 -->
                      <template v-if="dataPrepare[1].isSet && !dataPrepare[1].switch">暂未设置</template>
                      <!-- 已设置已开启 -->
                      <template v-if="dataPrepare[1].isSet && dataPrepare[1].switch">已设置活动报名</template>
                      <!-- 已设置未开启 -->
                      <template v-if="dataPrepare[1].isSet && !dataPrepare[1].switch">已设置活动报名</template>
                    </span>
                  </div>
                </div>
                <div class="btm">
                  <el-switch class='switch' v-model="dataPrepare[1].switch" inactive-color="#DEE1FF" :width="32" active-color="#FFD021"></el-switch>
                  <!-- <span class='set'>设置</span> -->
                </div>
              </router-link>
            </div>
            <div class='item'>
              <!-- 暖场设置 -->
              <router-link :to="`/liveMager/warmField/${activityId}`" >
                <div class="card">
                  <div class='pic'>
                    <!-- <img :src="propImg"> -->
                  </div>
                  <div class='desc'>
                    <span>暖场设置</span>
                    <span class='des'>
                      <!-- 未设置未开启 -->
                      <template v-if="!dataPrepare[2].isSet && !dataPrepare[2].switch">为活动设置暖场视频</template>
                      <!-- 未设置已开启 -->
                      <template v-if="dataPrepare[2].isSet && !dataPrepare[2].switch">暂未设置</template>
                      <!-- 已设置已开启 -->
                      <template v-if="dataPrepare[2].isSet && dataPrepare[2].switch">{{dataPrepare[2].desc}}</template>
                      <!-- 已设置未开启 -->
                      <template v-if="dataPrepare[2].isSet && !dataPrepare[2].switch">{{dataPrepare[2].desc}}</template>
                    </span>
                  </div>
                </div>
                <div class="btm">
                  <el-switch class='switch' v-model="dataPrepare[2].switch" inactive-color="#DEE1FF" :width="32" active-color="#FFD021"></el-switch>
                  <!-- <span class='set'>设置</span> -->
                </div>
              </router-link>
            </div>
          </div>
        </div>
      <div class="item marketing">
        <p class='block-separte'>推广</p>
        <div class="card-list clearfix">
         
            <div class='item'>
              <!-- 自动化通知 -->
              <router-link :to="`/liveMager/edit/${activityId}`" >
                <div class="card">
                  <div class='pic'>
                    <!-- <img :src="propImg"> -->
                  </div>
                  <div class='desc'>
                    <span>自动化通知</span>
                    <span class='des'>
                      <!-- 未设置未开启 -->
                      <template v-if="!dataPromote[0].isSet && !dataPromote[0].switch">设置自动化活动通知提醒</template>
                      <!-- 未设置已开启 -->
                      <template v-if="dataPromote[0].isSet && !dataPromote[0].switch">暂未设置</template>
                      <!-- 已设置已开启 -->
                      <template v-if="dataPromote[0].isSet && dataPromote[0].switch">{{dataPromote[0].desc}}</template>
                      <!-- 已设置未开启 -->
                      <template v-if="dataPromote[0].isSet && !dataPromote[0].switch">{{dataPromote[0].desc}}</template>
                    </span>
                  </div>
                </div>
                <div class="btm">
                  <el-switch class='switch' v-model="dataPromote[0].switch" inactive-color="#DEE1FF" :width="32" active-color="#FFD021"></el-switch>
                  <!-- <span class='set'>设置</span> -->
                </div>
              </router-link>
            </div>
            
            <div class='item'>
              <!-- 邮箱 -->
              <router-link :to="`/liveMager/edit/${activityId}`" >
                <div class="card">
                  <div class='pic'>
                    <!-- <img :src="propImg"> -->
                  </div>
                  <div class='desc'>
                    <span>邮箱</span>
                    <span class='des'>
                      <!-- 已设置 -->
                      <template v-if="dataPromote[1].isSet">已设置邮件邀约</template>
                      <!-- 未设置 -->
                      <template v-else>通过邮件进行活动推广</template>
                    </span>
                  </div>
                </div>
                <div class="btm">
                </div>
              </router-link>
            </div>

            <div class='item'>
              <!-- 短信 -->
              <router-link :to="`/liveMager/edit/${activityId}`" >
                <div class="card">
                  <div class='pic'>
                    <!-- <img :src="propImg"> -->
                  </div>
                  <div class='desc'>
                    <span>短信</span>
                    <span class='des'>
                      <!-- 已设置 -->
                      <template v-if="dataPromote[2].isSet">已设置短信通知</template>
                      <!-- 未设置 -->
                      <template v-else>通过短信进行活动推广</template>
                    </span>
                  </div>
                </div>
                <div class="btm">
                </div>
              </router-link>
            </div>

            <div class='item'>
              <!-- 微信 -->
              <router-link :to="`/liveMager/edit/${activityId}`" >
                <div class="card">
                  <div class='pic'>
                    <!-- <img :src="propImg"> -->
                  </div>
                  <div class='desc'>
                    <span>微信</span>
                    <span class='des'>
                      <!-- 已设置 -->
                      <template v-if="dataPromote[3].isSet">已设置微信通知</template>
                      <!-- 未设置 -->
                      <template v-else>通过微信进行活动推广</template>
                    </span>
                  </div>
                </div>
                <div class="btm">
                </div>
              </router-link>
            </div>

        </div>
      </div>
      <div class="item promote">
        <p class='block-separte'>品牌</p>
        <div class="card-list clearfix">
            
           <div class='item'>
              <!-- 活动官网 -->
              <router-link :to="`/liveMager/edit/${activityId}`" >
                <div class="card">
                  <div class='pic'>
                    <!-- <img :src="propImg"> -->
                  </div>
                  <div class='desc'>
                    <span>活动官网</span>
                    <span class='des'>
                      <!-- 已设置 -->
                      <template v-if="dataBrand[0].isSet">{{dataBrand[2].desc ==='N' ? '未发布' : '已发布'}}</template>
                      <!-- 未设置 -->
                      <template v-else>最精简的活动品牌页</template>
                    </span>
                  </div>
                </div>
                <div class="btm">
                </div>
              </router-link>
            </div>

             <div class='item'>
              <!-- 直播引导页 -->
              <router-link :to="`/liveMager/edit/${activityId}`" >
                <div class="card">
                  <div class='pic'>
                    <!-- <img :src="propImg"> -->
                  </div>
                  <div class='desc'>
                    <span>直播引导页</span>
                    <span class='des'>
                      <!-- 已设置 -->
                      <template v-if="dataBrand[1].isSet">{{dataBrand[2].desc ==='N' ? '未发布' : '已发布'}}</template>
                      <!-- 未设置 -->
                      <template v-else>最精简的活动品牌页</template>
                    </span>
                  </div>
                </div>
                <div class="btm">
                </div>
              </router-link>
            </div>

             <div class='item'>
              <!-- 观看页 -->
              <router-link :to="`/liveMager/edit/${activityId}`" >
                <div class="card">
                  <div class='pic'>
                    <!-- <img :src="propImg"> -->
                  </div>
                  <div class='desc'>
                    <span>观看页</span>
                    <span class='des'>
                      <!-- 已设置 -->
                      <template v-if="dataBrand[2].isSet">{{dataBrand[2].desc ==='N' ? '未发布' : '已发布'}}</template>
                      <!-- 未设置 -->
                      <template v-else>订制直播观看页面</template>
                    </span>
                  </div>
                </div>
                <div class="btm">
                </div>
              </router-link>
            </div>

        </div>
      </div>
      <div class="item setting">
        <p class='block-separte'>回放</p>
        <div class="card-list clearfix">
          <div class='item'>
              <!-- 观看页 -->
              <router-link :to="`/liveMager/edit/${activityId}`" >
                <div class="card">
                  <div class='pic'>
                    <!-- <img :src="propImg"> -->
                  </div>
                  <div class='desc'>
                    <span>观看页</span>
                    <span class='des'>
                      <!-- 已设置 -->
                      <template v-if="dataRecord[0].isSet">已设置默认回放</template>
                      <!-- 未设置 -->
                      <template v-else>设置活动后的回放视频</template>
                    </span>
                  </div>
                </div>
                <div class="btm">
                </div>
              </router-link>
            </div>
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
        countdownTime: '', // 倒计时 秒
        dataPrepare: [],
        dataBrand: [],
        dataPromote: [],
        dataRecord: []
      }
    },
    created () {
      this.cardData = {
        'prepare': [
          {
            title: '基本信息',
            desc: '',
            link: '/liveMager/edit/',
            switch: true
          },
          {
            title: '活动报名',
            desc: '已设置',
            link: '/liveMager/prepare/limit-apply/',
            switch: true
          },
          {
            title: '暖场设置',
            desc: '"asdasdasd.mp4"',
            link: '/liveMager/warmField/',
            switch: true
          }
        ],
        'brand': [
          {
            title: '活动官网',
            desc: '已发布',
            link: '',
            switch: true
          },
          {
            title: '直播引导页',
            desc: '已发布',
            link: '/setLiveGuided/',
            switch: true
          },
          {
            title: '观看页',
            desc: '"定制直播观看页面"',
            link: '/master/',
            switch: true
          }
        ],
        'promote': [
          {
            title: '自动化通知',
            desc: '',
            link: '/liveMager/promote/auto/preview/',
            switch: true
          },
          {
            title: '邮箱',
            desc: '""',
            link: '/liveMager/email/',
            switch: true
          },
          {
            title: '短信',
            desc: '""',
            link: '/liveMager/promote/msg/list/',
            switch: true
          },
          {
            title: '微信',
            desc: '""',
            link: '/liveMager/promote/wechat/list/',
            switch: true
          }
        ],
        'record': [
          {
            title: '回放',
            desc: '已设置',
            link: '/liveMager/playBack/',
            switch: true
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
              this.$router.push({
                path: `/master/${this.activityId}`
              })
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
          this.countdownTime = res.data.activity.countDown.toString()
          this.title = res.data.activity.title
          // this.tagList = res.data.activity.countDown
          this.startTime = res.data.activity.startTime
          this.poster = res.data.activity.imgUrl
          this.dataPrepare = res.data.prepare
          this.dataBrand = res.data.brand
          this.dataPromote = res.data.promote
          this.dataRecord = res.data.record
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
      // margin: 0 14px;
      margin:0 31px;
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
      width: 100px;
      right: -110px;
    }
    .process .bottom > div ol > li {
      width: 140px;
    }
    .process .bottom > div {
      // margin: 10px 14px;
      margin:10px 31px;
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
      // margin: 0 33px;
      margin:0 55px;
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
        // width: 95px;
        width:130px;
        height: 2px;
        background: $color-default;
        position: absolute;
        top: 50%;
        margin-top: -1px;
        // right: -116px;
        right:-152px;
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
    // margin: 10px 33px;
    margin:10px 55px;
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
.card-list .item {
  float: left;
  width: 442px;
  height: 140px;
  background: rgba(255, 255, 255, 1);
  border-radius: 4px;
  border: 1px solid rgba(226, 226, 226, 1);
  padding: 14px 12px;
  margin: 10px 0;
  margin-right: 20px;
  &:nth-child(3n + 3) {
    margin-right: 0px;
  }
}

/* 设备宽度大于 1600 */

@media all and (min-width: 1600px) {
}

/* 设备宽度小于 1600px */

@media all and (max-width: 1600px) {
  .card-list .item {
    width: 326px;
  }
}

.card {
  width: 100%;
  height: 80px;
  .pic {
    float: left;
    width: 70px;
    height: 70px;
    margin: 4px;
    background: url('~assets/image/auto_wechat.png') no-repeat center;
    background-size: contain;
    margin-right: 20px;
  }
  .desc {
    float: left;
    font-size: 18px;
    color: $color-font;
    padding: 10px 0;
    span {
      display: block;
      font-size: 16px;
    }
    span.des {
      padding-top: 5px;
      font-size: 12px;
      color: $color-font-sub;
    }
  }
}

.btm {
  width: 100%;
  height: 40px;
  .switch {
    float: right;
    margin: 10px 0px;
  }
  .more {
    position: relative;
  }
  .show-more {
    position: absolute;
    top: 100%;
    right: 0;
  }
}
</style>
