<template>
  <div class="content">
    <div class="from-box">
      <div class="from-row">
        <div class="from-title">微信标题：</div>
        <div class="from-content">
          {{title}}
        </div>
      </div>
      <div class="from-row">
        <div class="from-title">收件人：</div>
        <div class="from-content">
          {{group}}
        </div>
      </div>
      <div class="from-row">
        <div class="from-title">发送状态：</div>
        <div class="from-content">
          <span v-if="status === 'SEND'">已发送</span>
          <span v-if="status === 'AWAIT'">已定时</span>
          <span v-if="status === 'DRAFT'">草稿</span>
        </div>
      </div>
      <div class="from-row">
        <div class="from-title">发送时间：</div>
        <div class="from-content">
          {{date}}
        </div>
      </div>
      <div class="from-row">
        <div class="from-title">发送状态：</div>
        <div class="from-content">
          <el-button><router-link :to="{name:'promoteWechat',params:{id:activityId}}">返回</router-link></el-button>
          <el-button><router-link :to="{name:'wechatEdit',params:{id:activityId},query:{id:id}}">编辑</router-link></el-button>
          <el-button>立即发送</el-button>
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
        <p>标题：<span>{{title}}</span></p>
        <p>时间：<span>{{time}}</span></p>
        <p>内容：<span>点击查看详情</span></p>
        <p>退订</p>
        <div class="footer">微信通知将于{{date}}发送</div>
      </div>
    </div>
  </div>
</template>

<script>
import queryHttp from 'src/api/activity-manger'
export default {
  data () {
    return {
      activityId: this.$route.params.id,
      id: this.$route.query.id,
      webinarName: '',
      title: '',
      group: '',
      status: '',
      time: '',
      tpl: '',
      date: ''
    }
  },
  created () {
    queryHttp.queryWechat(this.id).then((res) => {
      console.log(res)
      this.group = res.data.groupId
      this.title = res.data.title
      this.tpl = res.data.templateId
      this.status = res.data.status
      this.date = res.data.sendTime
    }).catch((e) => {
      console.log(e)
    })
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
