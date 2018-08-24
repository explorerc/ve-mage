<template>
  <div class="edit-step-box">
    <div class="mager-box">
      <div class="from-box">
        <div class="from-row">
          <div class="from-title">邮件标题：</div>
          <div class="from-content">
            <com-input
              placeholder="输入标题，可结合变量使用"
              customClass="input-email"
              :value.sync="email.title"
              :max-length="30"></com-input>
          </div>
        </div>
        <div class="from-row">
          <div class="from-title">发件人名称：</div>
          <div class="from-content">
            <com-input
              placeholder="输入发件人名称"
              customClass="input-email"
              :value.sync="email.sendPersonName"
              :max-length="15"></com-input>
          </div>
        </div>
        <div class="from-row">
          <div class="from-title">邮件摘要：</div>
          <div class="from-content">
            <div>在收件箱列表中显示的邮件内容摘要</div>
            <com-input
              placeholder="输入发件人名称"
              type="textarea"
              autosize
              customClass="input-email"
              :value.sync="email.desc"
              :max-length="140"></com-input>
          </div>
        </div>
        <div class="from-row">
          <div class="from-title">收件人：</div>
          <div class="from-content">
            <div>
              <el-button class="fl" type="primary" plain @click="">选择分组</el-button>
              <span>总计256名收件人</span>
              <span class="msg-tip">添加分组后，如果分组内人员发生变化，请删除分组重新添加，以免出现漏发情况</span>
            </div>
            <div class="edit-groups">
              <div class="edit-groups-item">
                <span>分组1</span>
                <span>查看</span>
                <span>删除</span>
              </div>
              <div class="edit-groups-item">
                <span>分组2</span>
                <span>查看</span>
                <span>删除</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="step-btns">
      <el-button class="live-btn fl" type="primary" plain @click="prePage">上一步</el-button>
      <el-button class="live-btn fr" type="primary" plain @click="">立即发送</el-button>
      <el-button class="live-btn fr" type="primary" plain @click="">定时发送</el-button>
      <el-button class="live-btn fr" type="primary" plain @click="saveEmail">保存草稿</el-button>
    </div>
  </div>
</template>

<script>
  import editStepOne from './edit-step-one'

  export default {
    name: 'edit-step-two',
    data () {
      return {
        outValue: '',
        email: {
          title: '',
          sendPersonName: '',
          desc: ''
        }
      }
    },
    methods: {
      saveEmail () {
      },
      prePage () {
        this.$parent.$data.currentComponent = editStepOne
      }
    }
  }
</script>
<style lang="scss" scoped src="../css/live.scss">
</style>
<style lang="scss" scoped>
  .edit-step-box {
    .step-btns {
      margin-top: 20px;
    }
    .input-email {
      width: 400px;
    }
    .edit-groups{
      margin-top: 40px;
      .edit-groups-item{
        margin: 10px 0;
        line-height: 30px;
        span{
          display: inline-block;
          text-align: center;
          &:nth-child(1){
            width: 200px;
            border: solid 1px #e5e5e5;
          }
          &:nth-child(2){
            margin: 0 0 0 20px;
            padding: 0 5px;
            cursor: pointer;
          }
          &:nth-child(3){
            padding: 0 5px;
            cursor: pointer;
          }
          &:nth-child(2):hover,
          &:nth-child(3):hover{
            color: #2878FF;
          }
        }
      }
    }
  }
</style>
