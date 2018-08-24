<template>
  <div class="content">
    <div class='preview'>
      <p>预约阶段</p>
      <div class="detail">
        <div class="block">
          <div class="title clearfix">
            <p>欢迎消息 <span>活动发布后 可以发送邀请消息</span></p>
            <el-button size="medium">添加短信</el-button>
            <el-button size="medium">添加微信</el-button>
          </div>
          <div class="item-box">
            <div class="item">
              <img src="asd/asdasd.png">
              <div class="txt">
                <span>[ 短信内容 ]</span>
                <p>您预约的活动将于1个小时后开始，请您提前准备！</p>
                <em>自动发送</em>
              </div>
              <div class="btn-group">
                <el-button type="small">测试发送</el-button>
                <el-button type="small">编辑</el-button>
                <el-button type="small">删除</el-button>
              </div>
            </div>

            <div class="item">
              <img src="asd/asdasd.png">
              <div class="txt">
                <span>[ 微信内容 ]</span>
                <p>您预约的活动将于1个小时后开始，请您提前准备！</p>
                <em>自动发送</em>
              </div>
              <div class="btn-group">
                <el-button type="small">测试发送</el-button>
                <el-button type="small">编辑</el-button>
                <el-button type="small">删除</el-button>
              </div>
            </div>

          </div>
        </div>
        <div class="block">
          <div class="title clearfix">
            <p>开播前1小时提醒 <span>提醒用户活动即将开始，做好参加准备</span></p>
            <el-button size="medium">添加短信</el-button>
            <el-button size="medium">添加微信</el-button>
            <!-- <el-button size="medium">编辑提醒时间</el-button> -->
            <el-select v-model="value" placeholder="编辑提醒时间" style='float:right;'>
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="item-box">
            <div class="item">
              <img src="asd/asdasd.png">
              <div class="txt">
                <span>[ 短信内容 ]</span>
                <p>您预约的活动将于1个小时后开始，请您提前准备！</p>
                <em>自动发送</em>
              </div>
              <div class="btn-group">
                <el-button type="small">测试发送</el-button>
                <el-button type="small">编辑</el-button>
                <el-button type="small">删除</el-button>
              </div>
            </div>
          </div>
        </div>
        <div class="block">
          <div class="title clearfix">
            <p>开播前15分钟提醒 <span>活动开始前15分钟，提醒用户活动即将开始，做好参加准备</span></p>
            <el-button size="medium">添加短信</el-button>
            <el-button size="medium">添加微信</el-button>
            <!-- <el-button size="medium">编辑提醒时间</el-button> -->
            <el-select v-model="value" placeholder="编辑提醒时间" style='float:right;'>
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
            <!-- <div class="seltime-modal" v-if='true'>
              <div class="title">修改时间：</div>
              <el-select v-model="value" placeholder="编辑提醒时间">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
              <el-button>放弃</el-button>
              <el-button>保存</el-button>
            </div> -->
          </div>
          <div class="item-box">
            <div class="item">
              <img src="asd/asdasd.png">
              <div class="txt">
                <span>[ 微信内容 ]</span>
                <p>您预约的活动将于1个小时后开始，请您提前准备！</p>
                <em>自动发送</em>
              </div>
              <div class="btn-group">
                <el-button type="small">测试发送</el-button>
                <el-button type="small">编辑</el-button>
                <el-button type="small">删除</el-button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p>直播阶段</p>
      <div class="detail">
        <div class="block">
          <div class="title clearfix">
            <p>订阅直播成功消息 <span>观众订阅企业活动信息成功后立即发送</span></p>
            <el-button size="medium">添加短信</el-button>
            <el-button size="medium">添加微信</el-button>
          </div>
          <div class="item-box">
            <div class="item">
              <img src="asd/asdasd.png">
              <div class="txt">
                <span>[ 短信内容 ]</span>
                <p>您预约的活动将于1个小时后开始，请您提前准备！</p>
                <em>自动发送</em>
              </div>
              <div class="btn-group">
                <el-button type="small">测试发送</el-button>
                <el-button type="small">编辑</el-button>
                <el-button type="small">删除</el-button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p>回放阶段</p>
      <div class="detail">
        <div class="block">
          <div class="title clearfix">
            <p>回访设置成功消息 <span>针对未参加活动的用户发送回放消息</span></p>
            <el-button size="medium">添加短信</el-button>
            <el-button size="medium">添加微信</el-button>
          </div>
          <div class="item-box">
            <div class="item">
              <img src="asd/asdasd.png">
              <div class="txt">
                <span>[ 短信内容 ]</span>
                <p>您预约的活动将于1个小时后开始，请您提前准备！</p>
                <em>自动发送</em>
              </div>
              <div class="btn-group">
                <el-button type="small">测试发送</el-button>
                <el-button type="small">编辑</el-button>
                <el-button type="small">删除</el-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <el-button>保存</el-button>
    <!-- 选择分组弹窗 -->
    <transition name='fade'>
      <div class="modal-cover" v-if='testModal' @click="closeModal">
        <div class='modal-box'>
          <h4>短信测试发送 <span class='close' @click='testModal = false'>×</span></h4>
          <div class='content-box'>
            <p>每天只允许发送5条测试短信</p>
            <div class="from-row">
              <div class="from-title">输入号码：</div>
              <div class="from-content">
                <com-input :value.sync="titleValue" placeholder="请输入手机号码"></com-input>
              </div>
            </div>
            <div class="from-row">
              <div class="from-title">短信内容：</div>
              <div class="from-content">
                <div class="content-detail">奥斯卡了解到卢卡斯角度看拉升阶段卢卡斯阶段</div>
              </div>
            </div>
          </div>
          <div class="btn-group">
            <el-button>编辑</el-button>
            <el-button>立即发送<span>(10)</span>条</el-button>
          </div>
        </div>
      </div>
    </transition>
    <com-dialog :visible.sync="delConfirm" header="提示" content="您确定要删除此条自动化短信通知？" center customClass='del-modal'>
      <div class="del-footer" slot="footer">
        <com-button>取消</com-button>
        <com-button type="primary" @click="del">确定</com-button>
      </div>
    </com-dialog>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        testModal: false,
        titleValue: '',
        delConfirm: false,
        options: [{
          value: 1,
          label: '开播前1小时'
        }, {
          value: 2,
          label: '开播前8小时'
        }, {
          value: 3,
          label: '开播前24小时'
        }],
        value: '开播前1小时'
      }
    },
    methods: {
      closeModal (e) {
        if (e.target.className === 'modal-cover') {
          this.testModal = false
        }
      },
      del () {

      }
    }

  }
</script>

<style lang='scss' scoped>
@import '~assets/css/variable';
.content {
  padding: 50px;
  .preview > p {
    margin-top: 50px;
    font-size: 20px;
  }
  .detail {
    text-align: left;
    .block > .title {
      line-height: 36px;
      margin: 20px 0px;
      position: relative;
      & > p {
        font-size: 18px;
        display: inline-block;
        float: left;
        span {
          font-size: 14px;
        }
      }
      button {
        margin: 0px 10px;
        float: right;
      }
    }
  }
  .item-box {
    margin: 10px 0px;
    .item {
      padding: 10px;
      width: 800px;
      height: 100px;
      border: 1px solid #ccc;
      border-radius: 5px;
      margin-bottom: 10px;
      img {
        width: 50px;
        height: 50px;
        margin: 13px;
        float: left;
      }
      .txt {
        float: left;
        p {
          display: inline-block;
        }
        em {
          display: block;
        }
      }
    }
    .btn-group {
      float: right;
    }
  }
  .seltime-modal {
    width: 300px;
    height: 200px;
    border: 1px solid #ccc;
    border-radius: 5px;
    position: absolute;
    top: 100%;
    right: 0px;
    z-index: 9;
    background: #fff;
    padding: 20px;
    .title {
      text-align: left;
    }
  }
}

.modal-cover {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba($color: #000000, $alpha: 0.5);
  z-index: 9;
}

.modal-box {
  width: 700px;
  height: 500px;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -250px;
  margin-left: -350px;
  background: white;
  border-radius: 10px;
  border: 1px solid #666;
  padding: 30px;
  text-align: center;
  .top {
    span {
      float: left;
    }
  }
  h4 {
    height: 40px;
    line-height: 40px;
    text-align: left;
    border-bottom: 1px solid #ccc;
    .close {
      float: right;
    }
  }
  .content-box {
    padding: 10px 0px;
  }
}

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
    .input-box {
      width: 400px;
    }
  }
  .content-detail {
    width: 300px;
    height: 200px;
    padding: 20px;
    text-align: left;
    border: 1px solid #ccc;
  }
}

.del-modal {
  .dialog-body {
    text-align: center;
  }
  .del-footer {
    padding-bottom: 20px;
  }
}
</style>
