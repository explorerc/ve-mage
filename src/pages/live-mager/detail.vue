<!-- 活动详情页面-->
<template>
  <div>
    <div class="desc">
      <div class="left">
        <p>{{desc.title}} <span class="state" :class="desc.stateClass">{{desc.state}}</span> </p>
        <p>开播时间:{{desc.startTime}}</p>
        <p>互动标签:<span class="tag" v-for="item in desc.tagList">{{item}}</span></p>
      </div>
      <div class="right">
        <span><a href="">活动官网</a></span>
        <span><a href="">直播观看页</a></span>
        <span @click='update'>发布/下线活动</span>
        <span><a href="">进入直播间</a></span>
      </div>
    </div>
    <div class="process clearfix">
      <div>
        <span>准备</span>
        <ol>
          <li v-for='item in cardData.prepare' :key='item.title' v-show="item.checked">{{item.title}}</li>
        </ol>
      </div>
      <div>
        <span>营销</span>
        <ol>
          <li v-for='item in cardData.marketing' :key='item.title' v-show="item.checked">{{item.title}}</li>
        </ol>
      </div>
      <div>
        <span>形象</span>
        <ol>
          <li v-for='item in cardData.promote' :key='item.title' v-show="item.checked">{{item.title}}</li>
        </ol>
      </div>
      <div>
        <span>直播</span>
        <ol>
          <!-- <li v-for='item in cardData.webinar' :key='item.title' v-show="item.checked">{{item.title}}</li> -->
          <li>直播监控</li>
          <li>聊天审核</li>
        </ol>
      </div>
      <div>
        <span>回放</span>
        <ol>
          <!-- <li v-for='item in cardData.record' :key='item.title' v-show="item.checked">{{item.title}}</li> -->
          <li>设置回放</li>
        </ol>
      </div>
      <div>
        <span>数据</span>
        <ol>
          <!-- <li v-for='item in processData.data' :key='item.title' v-show="item.checked">{{item.title}}</li> -->
          <li>数据报表</li>
          <li>详细数据导出</li>
        </ol>
        </ol>
      </div>
    </div>
    <div class="fun-card">
      <div class="item prepare">
        <span>准备</span>
        <div class="card-list clearfix">
          <process-card @update:checked='switchBack' v-for="(item,index) in cardData.prepare" :prop-switch='item.switch' :prop-idx='index' :key='item.title' :prop-checked.sync='item.checked' :prop-title='item.title' :prop-desc='item.desc' :prop-part='"prepare"'
            :prop-img='item.img'></process-card>
        </div>
      </div>
      <div class="item marketing">
        <span>营销</span>
        <div class="card-list clearfix">
          <process-card @update:checked='switchBack' v-for="(item,index) in cardData.marketing" :prop-switch='item.switch' :prop-idx='index' :key='item.title' :prop-checked.sync='item.checked' :prop-title='item.title' :prop-desc='item.desc' :prop-part='"marketing"'
            :prop-img='item.img'></process-card>
        </div>
      </div>
      <div class="item promote">
        <span>形象</span>
        <div class="card-list clearfix">
          <process-card @update:checked='switchBack' v-for="(item,index) in cardData.promote" :prop-switch='item.switch' :prop-idx='index' :key='item.title' :prop-checked.sync='item.checked' :prop-title='item.title' :prop-desc='item.desc' :prop-part='"promote"'
            :prop-img='item.img'></process-card>
        </div>
      </div>
      <div class="item setting">
        <span>高级设置</span>
        <div class="card-list clearfix">
          <!-- <process-card @update:checked='switchBack' v-for="(item,index) in cardData['setting']" :prop-idx='index' :key='item.title' :prop-checked.sync='item.checked' :prop-title='item.title' :prop-desc='item.desc' :prop-part='"setting"' :prop-img='item.img'></process-card> -->
        </div>
      </div>
    </div>
    <message-box v-if="msgShow" header="提示" content="活动删除后，所有数据将一并删除，并且不可恢复。确定要删除吗？" cancelText="取消" confirmText='删除' @handleClick="btnClick">
    </message-box>
  </div>
</template>

<script>
  import processCard from 'components/process-card'
  export default {
    data () {
      return {
        desc: {
          title: '',
          id: '',
          tagList: [],
          startTime: '',
          state: '',
          stateClass: ''
        },
        cardData: {},
        msgShow: false
      }
    },
    created () {
      // 假数据
      this.desc.title = '2018GIMIC互联网大会'
      this.desc.id = '123456'
      this.desc.tagList = ['科技', '发布会', '标签三']
      this.desc.startTime = '2018-07-09 09:30:00'
      this.desc.state = 1
      switch (this.desc.state) {
        case (1):
          this.desc.state = '直播'
          this.desc.stateClass = 'live'
          break
        case (2):
          this.desc.state = '回放'
          this.desc.stateClass = 'record'
          break
        case (3):
          this.desc.state = '结束'
          this.desc.stateClass = 'ended'
          break
        case (4):
          this.desc.state = '预约'
          this.desc.stateClass = 'preview'
          break
      }
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
    methods: {
      update () {
        // debugger // eslint-disable-line
        this.msgShow = true
      },
      btnClick () {
        console.log(666)
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
      }
    },
    components: {
      processCard

    }

  }
</script>

<style lang='scss' scoped>
@import '~assets/css/variable';
@import '~assets/css/base';
.state {
  padding: 3px;
  border: 1px solid #ccc;
  display: inline-block;
}

.live {
  color: red;
  border-color: red;
}

.preview {
  color: blue;
  border-color: blue;
}

.record {
  color: green;
  border-color: green;
}

.tag {
  padding: 3px;
  border: 1px solid #ccc;
  display: inline-block;
  margin: 0 3px;
}

.right {
  span {
    cursor: pointer;
    padding: 5px 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
}

.process {
  & > div {
    margin: 10px 40px;
    float: left;
  }
}

.fun-card {
  .item > span {
    display: block;
    border-bottom: 1px solid #ccc;
    height: 40px;
    line-height: 40px;
  }
}
</style>
