<template>
  <div class="live-mager">
    <div class="live-title">
      <span>活动提醒</span>
    </div>
    <div class="mager-box">
      <div class="from-box">
        <div class="from-row">
          <div class="from-title">活动提醒：</div>
          <div class="from-content">
            <el-checkbox v-model="reminder.isSwitch">开启</el-checkbox>
            <span class="msg-tip">开启后，可以对观众进行活动提醒，每场活动最多只能选择发送2次</span>
          </div>
        </div>
        <div class="from-row">
          <div class="from-title"><i class="star">*</i>活动名称：</div>
          <div class="from-content">
            <div class="input-box">
              <el-input type="textarea" :rows="2" v-model="reminder.name"/>
            </div>
          </div>
        </div>
        <div class="from-row">
          <div class="from-title">短信签名：</div>
          <div class="from-content">
            <div class="input-box">
              <el-input type="textarea" :rows="2" v-model="reminder.message"/>
            </div>
          </div>
        </div>
        <div class="from-row">
          <div class="from-title">通知方式：</div>
          <div class="from-content">
            <el-checkbox-group v-model="reminder.reminderType">
              <el-checkbox v-for="remind in reminderTypes" :label="remind.label" :key="remind.value">{{remind.label}}
              </el-checkbox>
            </el-checkbox-group>
          </div>
        </div>
        <div class="from-row">
          <div class="from-title">通知时间：</div>
          <div class="from-content">
            <el-checkbox-group v-model="reminder.reminderTime">
              <el-checkbox v-for="remind in reminderTimes" :label="remind.label" :key="remind.value">{{remind.label}}
              </el-checkbox>
            </el-checkbox-group>
          </div>
        </div>
        <div class="from-row">
          <div class="from-title">通知范围：</div>
          <div class="from-content">
            <el-select v-model="reminder.reminderRand" disabled placeholder="请选择">
              <el-option
                v-for="item in randOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
        </div>
        <div class="from-row">
          <div class="from-title"></div>
          <div class="from-content">
            <el-button class="live-btn" type="primary" plain @click="saveRemider">保存</el-button>
          </div>
        </div>
      </div>
      <div class="from-left">
        <div class="phone-menu">
          预览
          <nav>
            <span>短信</span>
            <span>微信</span>
          </nav>
        </div>
        <div class="phone-box">
          <div class="phone"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import ComUpload from 'src/components/common/upload/com'
  import VeUpload from 'src/components/ve-upload-image'
  import LiveHttp from 'src/api/activity-manger'
  // 参会提醒
  export default {
    name: 'reminder',
    components: { ComUpload, VeUpload },
    data () {
      return {
        reminderTypes: [
          { value: '0', label: '短信通知' },
          { value: '1', label: '微信通知' }
        ],
        reminderTimes: [
          { value: '0', label: '提前1天' },
          { value: '1', label: '提前1小时' },
          { value: '2', label: '提前10分钟' },
          { value: '3', label: '活动开始时' }
        ],
        randOptions: [
          { value: '0', label: '预约用户' },
          { value: '1', label: '报名用户' },
          { value: '2', label: '邀请用户' }
        ],
        reminder: {
          isSwitch: false,
          reminderType: [],
          reminderTime: [],
          reminderRand: '0',
          message: '',
          name: ''
        }
      }
    },
    created () {
      if (!this.$route.params.id) {
        this.goBack()
        return
      }
      this.queryReminInfo()
    },
    methods: {
      goBack () {
        this.$router.go(-1)
      },
      queryReminInfo () {
        LiveHttp.queryReminderInfoById(this.$route.params.id)
      },
      saveRemider () {
        LiveHttp.saveReminderInfo(this.reminder)
      }
    }
  }
</script>

<style lang="scss" scoped src="./css/live.scss">
</style>
<style lang="scss" scoped>
.mager-box {
  display: flex;
  margin-right: 20px;
  .from-box {
    flex: 1;
  }
  .from-left {
    .phone-menu {
      margin: 20px 0;
      line-height: 30px;
      nav {
        float: right;
        font-size: 0;
        span {
          display: inline-block;
          border: solid 1px #666;
          width: 80px;
          text-align: center;
          font-size: 14px;
          cursor: pointer;
          &:first-child {
            margin-right: -1px;
          }
          &:hover {
            color: #00ff00;
          }
        }
      }
    }
    .phone-box {
      width: 350px;
      display: inline-block;
      width: 350px;
      height: 760px;
      background: url(../../assets/image/phone.png) no-repeat;
      background-size: cover;
      padding: 100px 12px;
      .phone {
        height: 100%;
        background-color: #fff;
        box-sizing: border-box;
      }
    }
  }
}
</style>
