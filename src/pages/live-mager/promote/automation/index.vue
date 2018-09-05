<template>
  <div class="content">
    <p>自动化通知：<el-switch v-model="isOpen"></el-switch> 开启自动化通知，自动通知您的观众，提升活动服务体验</p>
    <div class='preview'>
      <p v-if="limit === 'NONE'? true : false">预约阶段</p>
      <p v-else>活动报名阶段</p>
      <div class="detail">
        <div class="block" v-if="limit === 'NONE'? true : false">
          <div class="title clearfix">
            <p>欢迎消息 <span>活动发布后 可以发送邀请消息</span></p>
            <el-button :disabled='btnStatus.BEFORE_ORDER.SMS' size="medium"><router-link :to="{ name:'autoEditmsg' ,query:{'timing':'BEFORE_ORDER'} }">添加短信</router-link></el-button>
            <el-button :disabled='btnStatus.BEFORE_ORDER.WECHAT' size="medium"><router-link :to="{ name:'autoEditwx' ,query:{'timing':'BEFORE_ORDER'} }">添加微信</router-link></el-button>
          </div>
          <div class="item-box">

            <div class="item" v-for="item in renderData.BEFORE_ORDER">
              <img src="asd/asdasd.png" v-if="item.type === 'SMS'">
              <img src="asd/11.png" v-else>
              <div class="txt">
                <com-tpl
                :isString="true"
                :type="item.type"
                :tpl="item.templateId"
                :tag="tplData.tag"
                :webinarName="tplData.webinarName"
                :hostName="tplData.hostName"
                :date="tplData.date"
                :secondCount="tplData.secondCount"
                ></com-tpl>
                <em>自动发送</em>
              </div>
              <div class="btn-group">
                <el-button type="small" @click="testSend(item.type, item.noticeTaskId)">测试发送</el-button>
                <el-button type="small"><router-link :to="{ name:item.type === 'SMS' ? 'autoEditmsg' : 'autoEditwx' ,query:{'noticeId':item.noticeTaskId,'timing':'BEFORE_ORDER'} }">编辑</router-link></el-button>
                <el-button type="small" @click='del(item.noticeTaskId, "BEFORE_ORDER", item.type)'>删除</el-button>
              </div>
            </div>

          </div>
        </div>

        <div class="block" v-else>
          <div class="title clearfix">
            <p>欢迎消息 <span>活动发布后 可以发送邀请消息</span></p>
            <el-button :disabled='btnStatus.BEFORE_APPLY.SMS' size="medium"><router-link :to="{ name:'autoEditmsg' ,query:{'timing':'BEFORE_APPLY'} }">添加短信</router-link></el-button>
            <el-button :disabled='btnStatus.BEFORE_APPLY.WECHAT' size="medium"><router-link :to="{ name:'autoEditwx' ,query:{'timing':'BEFORE_APPLY'} }">添加微信</router-link></el-button>
          </div>
          <div class="item-box">

            <div class="item" v-for="item in renderData.BEFORE_APPLY">
              <img src="asd/asdasd.png" v-if="item.type === 'SMS'">
              <img src="asd/11.png" v-else>
              <div class="txt">
                <com-tpl
                :isString="true"
                :type="item.type"
                :tpl="item.templateId"
                :tag="tplData.tag"
                :webinarName="tplData.webinarName"
                :hostName="tplData.hostName"
                :date="tplData.date"
                :secondCount="tplData.secondCount"
                ></com-tpl>
                <em>自动发送</em>
              </div>
              <div class="btn-group">
                <el-button type="small" @click="testSend(item.type, item.noticeTaskId)">测试发送</el-button>
                <el-button type="small"><router-link :to="{ name:item.type === 'SMS' ? 'autoEditmsg' : 'autoEditwx' ,query:{'noticeId':item.noticeTaskId,'timing':'BEFORE_APPLY'} }">编辑</router-link></el-button>
                <el-button type="small" @click='del(item.noticeTaskId, "BEFORE_APPLY", item.type)'>删除</el-button>
              </div>
            </div>

          </div>
        </div>

        <div class="block">
          <div class="title clearfix">
            <p>开播前{{hourValue}}小时提醒 <span>提醒用户活动即将开始，做好参加准备</span></p>
            <el-button :disabled='btnStatus.BEFORE_HOUR.SMS' size="medium"><router-link :to="{ name:'autoEditmsg' ,query:{'timing':'BEFORE_HOUR'} }">添加短信</router-link></el-button>
            <el-button :disabled='btnStatus.BEFORE_HOUR.WECHAT' size="medium"><router-link :to="{ name:'autoEditwx' ,query:{'timing':'BEFORE_HOUR'} }">添加微信</router-link></el-button>
            <el-button size="medium" @click='firstSel = true'>编辑提醒时间</el-button>
            <div class="seltime-modal" v-if='firstSel'>
              <div class="title">修改时间：</div>
              <el-select v-model="selhourValue" placeholder="编辑提醒时间" >
                <el-option v-for="item in hourOptions" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
              <el-button @click='resetCountDown('hour')'>放弃</el-button>
              <el-button @click='saveCountdown("hour")'>保存</el-button>
            </div>
          </div>
          <div class="item-box">

            <div class="item" v-for="item in renderData.BEFORE_HOUR">
              <img src="asd/asdasd.png" v-if="item.type === 'SMS'">
              <img src="asd/11.png" v-else>
              <div class="txt">
                <com-tpl
                :isString="true"
                :type="item.type"
                :tpl="item.templateId"
                :tag="tplData.tag"
                :webinarName="tplData.webinarName"
                :hostName="tplData.hostName"
                :date="tplData.date"
                :triggerType="'BEFORE_HOUR'"
                :firstCount="tplData.firstCount"
                :secondCount="tplData.secondCount"
                ></com-tpl>
                <em>自动发送</em>
              </div>
              <div class="btn-group">
                <el-button type="small" @click="testSend(item.type, item.noticeTaskId)">测试发送</el-button>
                <el-button type="small"><router-link :to="{ name:item.type === 'SMS' ? 'autoEditmsg' : 'autoEditwx' ,query:{'noticeId':item.noticeTaskId,'timing':'BEFORE_HOUR'} }">编辑</router-link></el-button>
                <el-button type="small" @click='del(item.noticeTaskId, "BEFORE_HOUR", item.type)'>删除</el-button>
              </div>
            </div>

          </div>
        </div>
        <div class="block">
          <div class="title clearfix">
            <p>开播前{{minValue}}分钟提醒 <span>活动开始前{{minValue}}分钟，提醒用户活动即将开始，做好参加准备</span></p>
            <el-button :disabled='btnStatus.BEFORE_MINUTE.SMS' size="medium"><router-link :to="{ name:'autoEditmsg' ,query:{'timing':'BEFORE_MINUTE'} }">添加短信</router-link></el-button>
            <el-button :disabled='btnStatus.BEFORE_MINUTE.WECHAT' size="medium"><router-link :to="{ name:'autoEditwx' ,query:{'timing':'BEFORE_MINUTE'} }">添加微信</router-link></el-button>
            <el-button size="medium" @click='secondSel = true'>编辑提醒时间</el-button>
            <div class="seltime-modal" v-if='secondSel'>
              <div class="title">修改时间：</div>
              <el-select v-model="selminValue" placeholder="编辑提醒时间" >
                <el-option v-for="item in minOptions" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
              <el-button @click='resetCountDown("min")'>放弃</el-button>
              <el-button @click='saveCountdown("min")'>保存</el-button>
            </div>
          </div>
          <div class="item-box">

            <div class="item" v-for="item in renderData.BEFORE_MINUTE">
              <img src="asd/asdasd.png" v-if="item.type === 'SMS'">
              <img src="asd/11.png" v-else>
              <div class="txt">
                <com-tpl
                :isString="true"
                :type="item.type"
                :tpl="item.templateId"
                :tag="tplData.tag"
                :webinarName="tplData.webinarName"
                :hostName="tplData.hostName"
                :date="tplData.date"
                :triggerType="'BEFORE_MINUTE'"
                :firstCount="tplData.firstCount"
                :secondCount="tplData.secondCount"
                ></com-tpl>
                <em>自动发送</em>
              </div>
              <div class="btn-group">
                <el-button type="small" @click="testSend(item.type, item.noticeTaskId)">测试发送</el-button>
                <el-button type="small"><router-link :to="{ name:item.type === 'SMS' ? 'autoEditmsg' : 'autoEditwx' ,query:{'noticeId':item.noticeTaskId,'timing':'BEFORE_MINUTE'} }">编辑</router-link></el-button>
                <el-button type="small" @click='del(item.noticeTaskId, "BEFORE_MINUTE", item.type)'>删除</el-button>
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
            <el-button :disabled='btnStatus.SUBSCRIBE.SMS' size="medium"><router-link :to="{ name:'autoEditmsg' ,query:{'timing':'SUBSCRIBE'} }">添加短信</router-link></el-button>
            <el-button :disabled='btnStatus.SUBSCRIBE.WECHAT' size="medium"><router-link :to="{ name:'autoEditwx' ,query:{'timing':'SUBSCRIBE'} }">添加微信</router-link></el-button>
          </div>
          <div class="item-box">

            <div class="item" v-for="item in renderData.SUBSCRIBE">
              <img src="asd/asdasd.png" v-if="item.type === 'SMS'">
              <img src="asd/11.png" v-else>
              <div class="txt">
                <com-tpl
                :isString="true"
                :type="item.type"
                :tpl="item.templateId"
                :tag="tplData.tag"
                :webinarName="tplData.webinarName"
                :hostName="tplData.hostName"
                :date="tplData.date"
                :triggerType="'SUBSCRIBE'"
                :firstCount="tplData.firstCount"
                :secondCount="tplData.secondCount"
                ></com-tpl>
                <em>自动发送</em>
              </div>
              <div class="btn-group">
                <el-button type="small" @click="testSend(item.type, item.noticeTaskId)">测试发送</el-button>
                <el-button type="small"><router-link :to="{ name:item.type === 'SMS' ? 'autoEditmsg' : 'autoEditwx' ,query:{'noticeId':item.noticeTaskId,'timing':'SUBSCRIBE'} }">编辑</router-link></el-button>
                <el-button type="small" @click='del(item.noticeTaskId, "SUBSCRIBE", item.type)'>删除</el-button>
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
            <el-button :disabled='btnStatus.REPLAY.SMS' size="medium"><router-link :to="{ name:'autoEditmsg' ,query:{'timing':'REPLAY'} }">添加短信</router-link></el-button>
            <el-button :disabled='btnStatus.REPLAY.WECHAT' size="medium"><router-link :to="{ name:'autoEditwx' ,query:{'timing':'REPLAY'} }">添加微信</router-link></el-button>
          </div>
          <div class="item-box">

            <div class="item" v-for="item in renderData.REPLAY">
              <img src="asd/asdasd.png" v-if="item.type === 'SMS'">
              <img src="asd/11.png" v-else>
              <div class="txt">
                <com-tpl
                :isString="true"
                :type="item.type"
                :tpl="item.templateId"
                :tag="tplData.tag"
                :webinarName="tplData.webinarName"
                :hostName="tplData.hostName"
                :date="tplData.date"
                :triggerType="'REPLAY'"
                :firstCount="tplData.firstCount"
                :secondCount="tplData.secondCount"
                ></com-tpl>
                <em>自动发送</em>
              </div>
              <div class="btn-group">
                <el-button type="small" @click="testSend(item.type, item.noticeTaskId)">测试发送</el-button>
                <el-button type="small"><router-link :to="{ name:item.type === 'SMS' ? 'autoEditmsg' : 'autoEditwx' ,query:{'noticeId':item.noticeTaskId,'timing':'REPLAY'} }">编辑</router-link></el-button>
                <el-button type="small" @click='del(item.noticeTaskId, "REPLAY", item.type)'>删除</el-button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
    <!-- 测试发送弹窗 -->
    <com-test :limitCount='limitCount' v-if='testModal' :imgUrl="qrImgurl"  @closeTest='closeTest' :type="testType" ></com-test>

    <com-dialog :visible.sync="delConfirm" header="提示" content="您确定要删除此条自动化短信通知？" center class='del-modal'>
      <div class="del-footer" slot="footer">
        <com-button @click='delConfirm = false'>取消</com-button>
        <com-button type="primary" @click="deleteTask">确定</com-button>
      </div>
    </com-dialog>
  </div>
</template>

<script>
import comTpl from './com-tpl'
import comTest from '../com-test'
import http from 'src/api/activity-manger'
// import {getMsg} from './tpl'
export default {
  data () {
    return {
      activityId: this.$route.params.id,
      isOpen: true,
      limit: 'NONE',
      testModal: false,
      titleValue: '',
      delConfirm: false,
      firstSel: false,
      secondSel: false,
      hourOptions: [{
        value: 1,
        label: '开播前1小时'
      }, {
        value: 2,
        label: '开播前2小时'
      }, {
        value: 6,
        label: '开播前6小时'
      }, {
        value: 12,
        label: '开播前12小时'
      }, {
        value: 24,
        label: '开播前24小时'
      }],
      hourValue: 0,
      selhourValue: 0,
      minOptions: [{
        value: 5,
        label: '开播前5分钟'
      }, {
        value: 15,
        label: '开播前15分钟'
      }, {
        value: 30,
        label: '开播前30分钟'
      }, {
        value: 45,
        label: '开播前45分钟'
      }],
      minValue: 0,
      selminValue: 0,
      renderData: {
        'BEFORE_ORDER': [],
        'BEFORE_APPLY': [],
        'BEFORE_HOUR': [],
        'BEFORE_MINUTE': [],
        'SUBSCRIBE': [],
        'REPLAY': []
      },
      delData: {},
      btnStatus: {
        'BEFORE_ORDER': {
          'SMS': false,
          'WECHAT': false
        },
        'BEFORE_APPLY': {
          'SMS': false,
          'WECHAT': false
        },
        'BEFORE_HOUR': {
          'SMS': false,
          'WECHAT': false
        },
        'BEFORE_MINUTE': {
          'SMS': false,
          'WECHAT': false
        },
        'SUBSCRIBE': {
          'SMS': false,
          'WECHAT': false
        },
        'REPLAY': {
          'SMS': false,
          'WECHAT': false
        }
      },
      tplData: {
        type: 'wx',
        tag: '',
        webinarName: '',
        hostName: '',
        date: '',
        subscribeDate: '',
        triggerType: ''
      },
      testWechat: false,
      testMsg: false,
      testType: '',
      limitCount: '0',
      qrImgurl: ''
    }
  },
  created () {
    this.getParams()
    this.getList()
    this.findCountdown()
  },
  methods: {
    closeModal (e) {
      if (e.target.className === 'modal-cover') {
        this.testModal = false
      }
    },
    del (id, type, msgType) {
      this.delConfirm = true
      this.delData = {
        id: id,
        type: type,
        msgType: msgType
      }
    },
    getParams () {
      http.autoGetparams(this.activityId).then((res) => {
        console.log(res)
        if (res.code === 200) {
          this.hourValue = res.data.firstCount
          this.selhourValue = res.data.firstCount
          this.minValue = res.data.secondCount
          this.selminValue = res.data.secondCount
          this.limit = res.data.webinarLimit

          this.tplData.tag = res.data.tag
          this.tplData.webinarName = res.data.webinarName
          this.tplData.date = res.data.date
          this.tplData.hostName = res.data.hostName
          this.tplData.firstCount = res.data.firstCount
          this.tplData.secondCount = res.data.secondCount
        }
      }).catch((e) => {
        console.log(e)
      })
    },
    getList () {
      http.autoList(this.activityId).then((res) => {
        console.log(res)
        if (res.code === 200) {
          res.data.forEach(item => {
            switch (item.triggerType) {
              case 'BEFORE_ORDER':
                this.renderData['BEFORE_ORDER'].push(item)
                if (item.type === 'SMS') {
                  this.btnStatus['BEFORE_ORDER']['SMS'] = true
                }
                if (item.type === 'WECHAT') {
                  this.btnStatus['BEFORE_ORDER']['WECHAT'] = true
                }
                break
              case 'BEFORE_APPLY':
                this.renderData['BEFORE_APPLY'].push(item)
                if (item.type === 'SMS') {
                  this.btnStatus['BEFORE_APPLY']['SMS'] = true
                }
                if (item.type === 'WECHAT') {
                  this.btnStatus['BEFORE_APPLY']['WECHAT'] = true
                }
                break
              case 'BEFORE_HOUR':
                this.renderData['BEFORE_HOUR'].push(item)
                if (item.type === 'SMS') {
                  this.btnStatus['BEFORE_HOUR']['SMS'] = true
                }
                if (item.type === 'WECHAT') {
                  this.btnStatus['BEFORE_HOUR']['WECHAT'] = true
                }
                break
              case 'BEFORE_MINUTE':
                this.renderData['BEFORE_MINUTE'].push(item)
                if (item.type === 'SMS') {
                  this.btnStatus['BEFORE_MINUTE']['SMS'] = true
                }
                if (item.type === 'WECHAT') {
                  this.btnStatus['BEFORE_MINUTE']['WECHAT'] = true
                }
                break
              case 'SUBSCRIBE':
                this.renderData['SUBSCRIBE'].push(item)
                if (item.type === 'SMS') {
                  this.btnStatus['SUBSCRIBE']['SMS'] = true
                }
                if (item.type === 'WECHAT') {
                  this.btnStatus['SUBSCRIBE']['WECHAT'] = true
                }
                break
              case 'REPLAY':
                this.renderData['REPLAY'].push(item)
                if (item.type === 'SMS') {
                  this.btnStatus['REPLAY']['SMS'] = true
                }
                if (item.type === 'WECHAT') {
                  this.btnStatus['REPLAY']['WECHAT'] = true
                }
                break
            }
          })
        }
      }).catch((e) => {
        console.log(e)
      })
    },
    findCountdown () {
      http.autoFindconfig(this.activityId).then((res) => {
        console.log(res)
        if (res.code === 200) {
          this.hourValue = res.data.prehour
          this.minValue = res.data.preminute
        }
      }).catch((e) => {
        console.log(e)
      })
    },
    saveCountdown (type) {
      this.firstSel = false
      this.secondSel = false
      const data = {
        activityId: this.activityId,
        prehour: this.hourValue,
        preminute: this.minValue

      }
      http.autoSaveconfig(data).then((res) => {
        console.log(res)
        if (res.code === 200) {
          this.$toast({
            content: '设置成功',
            position: 'center'
          })
          if (type === 'hour') {
            this.hourValue = this.selhourValue
            this.tplData.firstCount = this.selhourValue
          } else {
            this.minValue = this.selminValue
            this.tplData.secondCount = this.selminValue
          }
        }
      }).catch((e) => {
        console.log(e)
      })
    },
    resetCountDown (type) {
      if (type === 'hour') {
        this.firstSel = false
        this.selhourValue = this.hourValue
      } else {
        this.secondSel = false
        this.selminValue = this.minValue
      }
    },
    deleteTask () {
      const id = this.delData.id
      const type = this.delData.type
      const msgType = this.delData.msgType
      http.autoDeletetask(id).then((res) => {
        if (res.code === 200) {
          this.renderData[type].forEach((item, idx) => {
            if (item.noticeTaskId === id) {
              this.renderData[type].splice(idx, 1)
            }
          })
          this.$toast({
            content: '删除成功',
            position: 'center'
          })
          this.delConfirm = false
          this.btnStatus[type][msgType] = false
        }
      }).catch((e) => {
        console.log(e)
      })
    },
    testSend (res, idx) {
      this.testModal = true
      this.qrImgurl = `http://aliqr.e.vhall.com/qr.png?t=${encodeURIComponent(`http://${window.location.host}/expand/notice/test-send-qr?noticeTaskId=${idx}`)}`
      this.$nextTick(() => {
        this.testType = res
        this.getLimit(res.toLowerCase())
      })
    },
    closeTest () {
      // debugger
      this.testModal = false
    },
    getLimit (type) {
      http.msgLimit(type).then((res) => {
        if (res.code === 200) {
          this.limitCount = res.data.toString()
        }
      }).catch((e) => { console.log(e) })
    }
  },
  components: {
    comTpl,
    comTest
  }

}
</script>

<style lang='scss'>
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
        p.is-string {
          width: 400px;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
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
