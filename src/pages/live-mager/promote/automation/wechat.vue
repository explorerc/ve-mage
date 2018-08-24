<template>
  <div class="content">
    <p>编辑微信通知2</p>
    <div class="from-box">
      <div class="from-row">
        <div class="from-title">微信模板：</div>
        <div class="from-content">
          <el-select v-model="tplValue" placeholder="请选择">
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
    <div class="overview-box">
      <div class="header">微吼服务号</div>
      <div class="msg-box">
        <div class="msg-title">
          个人信息通知<span>8月10日</span>
        </div>
        <p class="tips">您关注的<span>{{webinarName}}</span>即将开始，赶快参加吧！</p>
        <p>标题：<span>{{titleValue}}</span></p>
        <p>时间：<span>{{date}}</span></p>
        <p>内容：<span>点击查看详情</span></p>
        <p>退订</p>
        <div class="footer">详情</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        webinarName: '活动名字啊啊啊',
        tplOptions: [{
          value: 1,
          label: '活动邀请'
        }, {
          value: 2,
          label: '活动推荐'
        }],
        tplValue: ''
      }
    },
    created () {},
    methods: {},
    watch: {}
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
