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
          <el-button @click='save'>保存</el-button>
        </div>
      </div>
    </div>
    <send-tpl
    :isDom="true"
    :type="tplData.type"
    :tpl="tplData.tpl"
    :tag="tplData.tag"
    :webinarName="tplData.webinarName"
    :hostName="tplData.hostName"
    :date="tplData.date"
    :triggerType="tplData.triggerType"
    :firstCount="tplData.firstCount"
    :secondCount="tplData.secondCount"
    ></send-tpl>
  </div>
</template>

<script>
// import http from 'src/api/activity-manger'
import noticeService from 'src/api/notice-service'
import sendTpl from './com-tpl'
export default {
  data () {
    return {
      activityId: this.$route.params.id,
      noticeId: this.$route.query.noticeId,
      date: '',
      titleValue: '',
      webinarName: '',
      tplOptions: [
      // {
      //   value: 1,
      //   label: '预约成功通知'
      // }, {
      //   value: 2,
      //   label: '报名成功通知'
      // }, {
      //   value: 3,
      //   label: '开播提醒通知1'
      // }, {
      //   value: 4,
      //   label: '开播提醒通知2'
      // }, {
      //   value: 5,
      //   label: '订阅成功提醒'
      // }, {
      //   value: 6,
      //   label: '回放设置成功提醒'
      // }
      ],
      tplValue: 1,
      tplData: {
        type: 'wx',
        tpl: 1,
        tag: '',
        webinarName: '',
        hostName: '',
        date: '',
        subscribeDate: '',
        triggerType: ''
      }
    }
  },
  created () {
    if (this.noticeId) {
      // 获取模版变量
      this.getParams()
      // 获取模版id
      this.getTpl()
    } else {
      this.tplData.triggerType = this.$route.query.timing
      // 获取模版变量
      this.getParams()
      this.pushOption(this.$route.query.timing)
    }
  },
  methods: {

    selChange (idx) {
      this.tplData.tpl = idx
    },
    save () {
      const data = {
        activityId: this.activityId,
        templateId: this.tplValue,
        triggerType: this.tplData.triggerType,
        type: 'WECHAT'
      }
      this.$post(noticeService.POST_AUTO_SAVE_TASK, data).then((res) => {
        this.$toast({
          content: '保存成功',
          position: 'center'
        })
        // 跳转到列表页面
        this.$router.push({ name: 'auto', params: { id: this.activityId } })
      })
      // http.autoSavetask(data).then((res) => {
      //   console.log(res)
      //   if (res.code === 200) {
      //     this.$toast({
      //       content: '保存成功',
      //       position: 'center'
      //     })
      //     // 跳转到列表页面
      //     this.$router.push({name: 'auto', params: {id: this.activityId}})
      //   }
      // }).catch((e) => {
      //   console.log(e)
      // })
    },
    getParams () {
      // 获取模版变量
      this.$get(noticeService.GET_AUTO_PARAMS, {
        activityId: this.activityId
      }).then((res) => {
        this.tplData.tag = res.data.tag
        this.tplData.webinarName = res.data.webinarName
        this.tplData.date = res.data.date
        this.tplData.hostName = res.data.hostName
        this.tplData.firstCount = res.data.firstCount
        this.tplData.secondCount = res.data.secondCount
      })
      // http.autoGetparams(this.activityId).then((res) => {
      // // console.log(res)
      //   if (res.code === 200) {
      //     this.tplData.tag = res.data.tag
      //     this.tplData.webinarName = res.data.webinarName
      //     this.tplData.date = res.data.date
      //     this.tplData.hostName = res.data.hostName
      //     this.tplData.firstCount = res.data.firstCount
      //     this.tplData.secondCount = res.data.secondCount
      //   }
      // }).catch((e) => {
      //   console.log(e)
      // })
    },
    getTpl () {
      // 获取模版id
      this.$get(noticeService.POST_AUTO_FIND_TASK, {
        noticeTaskId: this.noticeId
      }).then((res) => {
        this.tplData.tpl = res.data.templateId
        this.tplData.triggerType = res.data.triggerType
        this.pushOption(this.tplData.triggerType)
      })
      // http.autoFindtask(this.noticeId).then((res) => {
      //   if (res.code === 200) {
      //     this.tplData.tpl = res.data.templateId
      //     this.tplData.triggerType = res.data.triggerType
      //     this.pushOption(this.tplData.triggerType)
      //   }
      // }).catch((e) => {
      //   console.log(e)
      // })
    },
    pushOption (str) {
      switch (str) {
        case 'BEFORE_ORDER':
          this.tplValue = 1
          this.tplOptions.push(
            {
              value: 1,
              label: '预约成功通知'
            }
          )
          break
        case 'BEFORE_APPLY':
          this.tplValue = 2
          this.tplOptions.push(
            {
              value: 2,
              label: '报名成功通知'
            }
          )
          break
        case 'BEFORE_HOUR':
          this.tplValue = 3
          this.tplOptions.push(
            {
              value: 3,
              label: '开播提醒通知'
            }
          )
          break
        case 'BEFORE_MINUTE':
          this.tplValue = 3
          this.tplOptions.push(
            {
              value: 3,
              label: '开播提醒通知'
            }
          )
          break
        case 'SUBSCRIBE':
          this.tplValue = 4
          this.tplOptions.push(
            {
              value: 4,
              label: '订阅成功提醒'
            }
          )
          break
        case 'REPLAY':
          this.tplValue = 5
          this.tplOptions.push(
            {
              value: 5,
              label: '回放设置成功提醒'
            }
          )
          break
      }
    }
  },
  watch: {},
  components: {
    sendTpl
  }
}
</script>

<style lang='scss' scoped>
@import 'assets/css/variable.scss';
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
