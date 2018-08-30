<template>
  <div class="content">
    <p>编辑微信通知2</p>
    <div class="from-box">
      <div class="from-row">
        <div class="from-title">微信模板：</div>
        <div class="from-content">
          <el-select v-model="tplValue" placeholder="请选择" @change='selChange'>
            <el-option v-for="item in tplOptions" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </div>
      </div>
      <div class="from-row">
        <div class="from-title">接收人：</div>
        <div class="from-content">
          <p>预约用户/邀请观看用户/活动报名用户（547人） <span class='show-group'> 查看观众组</span></p>
        </div>
      </div>
      <div class="from-row">
        <div class="from-title">发送规则：</div>
        <div class="from-content">
          <p>自动化发送</p>
        </div>
      </div>
      <div class="from-row">
        <div class="from-title"></div>
        <div class="from-content">
          <el-button>测试</el-button>
          <el-button>保存</el-button>
        </div>
      </div>
    </div>
    <send-tpl
    :type="tplData.type"
    :tpl="tplData.tpl"
    :tag="tplData.tag"
    :webinarName="tplData.webinarName"
    :hostName="tplData.hostName"
    :date="tplData.date"
    :firstCount="tplData.firstCount"
    :secondCount="tplData.secondCount"
    ></send-tpl>
  </div>
</template>

<script>
import sendTpl from './send-tpl'
export default {
  data () {
    return {
      date: '2018-12-10 10:00:00',
      titleValue: '',
      webinarName: '活动名字啊啊啊',
      tplOptions: [{
        value: 1,
        label: '预约成功通知'
      }, {
        value: 2,
        label: '报名成功通知'
      }, {
        value: 3,
        label: '开播提醒通知1'
      }, {
        value: 4,
        label: '开播提醒通知2'
      }, {
        value: 5,
        label: '订阅成功提醒'
      }, {
        value: 6,
        label: '回放设置成功提醒'
      }],
      tplValue: 1,
      tplData: {
        type: 'wx',
        tpl: 1,
        tag: '',
        webinarName: '',
        hostName: '',
        date: '',
        firstCount: '',
        secondCount: '',
        subscribeDate: ''
      }
    }
  },
  created () {
    this.tplData = {
      type: 'wx',
      tpl: 1,
      tag: '',
      webinarName: '',
      hostName: '',
      date: '',
      firstCount: '',
      secondCount: '',
      subscribeDate: ''
    }
  },
  methods: {
    selChange (idx) {
      this.tplData.tpl = idx
    }
  },
  watch: {},
  components: {
    sendTpl
  }
}
</script>

<style lang='scss' scoped>
@import '~assets/css/variable';
.from-box {
  margin: 20px;
  .from-row {
    display: flex;
    padding: 10px;
    .from-title {
      width: 180px;
      text-align: right;
      padding-right: 20px;
      .star {
        position: relative;
        top: 3px;
        color: $color-error;
        padding-right: 5px;
      }
    }
    .from-content {
      flex: 1;
      .input-box {
        width: 400px;
      }
    }
  }
}

.show-group {
  cursor: pointer;
}

.overview-box {
  width: 375px;
  height: 500px;
  border: 1px solid #ccc;
  position: absolute;
  top: 100px;
  right: 100px;
  .header,
  .footer {
    text-align: center;
    height: 50px;
    line-height: 50px;
    background: #000000;
    color: #fff;
  }
  .footer {
    background: #fff;
    color: #000000;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    border-top: 1px solid #ccc;
  }
  .msg-box {
    width: 300px;
    height: 400px;
    border: 1px solid #ccc;
    padding: 20px;
    margin: 20px auto;
    position: relative;
    .msg-title {
      text-align: left;
      font-size: 20px;
      span {
        display: block;
        text-align: left;
        font-size: 14px;
      }
    }
    p {
      text-align: left;
      margin: 10px 0px;
    }
    p.detal {
      span {
        color: #ccc;
        display: inline-block;
        text-align: left;
      }
    }
  }
}
</style>
