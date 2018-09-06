<template>
  <div class="content live-mager auto-page">
    <div class="live-title">
      <span class="title">自动化通知</span>
      <el-switch
        v-model="isOpen"
        inactive-color="#DEE1FF"
        active-color="#4B5AFE" @change='openSwitch'>
      </el-switch>
      <span class='tips'>开启自动化通知，自动通知您的观众，提升活动服务体验</span>
    </div>
    <div class='preview mager-box border-box'>
      <div class="time-line"></div>
      <p v-if="limit === 'NONE'? true : false">预约阶段</p>
      <p v-else>活动报名阶段</p>
      <div class="detail">
        <div class="block" v-if="limit === 'NONE'? true : false">
          <div class="title clearfix">
            <p>欢迎消息 <span>活动发布后 可以发送邀请消息</span></p>
            <!-- <el-button :disabled='btnStatus.BEFORE_ORDER.SMS' size="medium"><router-link :to="{ name:'autoEditmsg' ,query:{'timing':'BEFORE_ORDER'} }">添加短信</router-link></el-button>
            <el-button :disabled='btnStatus.BEFORE_ORDER.WECHAT' size="medium"><router-link :to="{ name:'autoEditwx' ,query:{'timing':'BEFORE_ORDER'} }">添加微信</router-link></el-button> -->
          </div>
          <div class="item-box">

            <div class="item message">
              <img src="asd/11.png">
              <div class="txt">
                <com-tpl
                :isString="true"
                :type="'SMS'"
                :tpl="1"
                :tag="tplData.tag"
                :webinarName="tplData.webinarName"
                :hostName="tplData.hostName"
                :date="tplData.date"
                :secondCount="tplData.secondCount"
                :firstCount="tplData.firstCount"
                :triggerType="'BEFORE_ORDER'"
                ></com-tpl>
                <em>自动发送</em>
              </div>
              <div class="btn-group">
                 <el-switch
                  v-model="itemList['BEFORE_ORDER']['SMS']['switch']"
                  inactive-color="#DEE1FF"
                  active-color="#4B5AFE" @change="itemSwitch($event,'BEFORE_ORDER', 'SMS', itemList['BEFORE_ORDER']['SMS']['noticeTaskId'])">
                </el-switch>
                <el-button type="small default-button" @click="testSend('BEFORE_ORDER', 'SMS',itemList['BEFORE_ORDER']['SMS']['noticeTaskId'])">测试发送</el-button>
              </div>
            </div>

            <div class="item message">
              <img src="asd/11.png">
              <div class="txt">
                <com-tpl
                :isString="true"
                :type="'WECHAT'"
                :tpl="1"
                :tag="tplData.tag"
                :webinarName="tplData.webinarName"
                :hostName="tplData.hostName"
                :date="tplData.date"
                :secondCount="tplData.secondCount"
                :firstCount="tplData.firstCount"
                :triggerType="'BEFORE_ORDER'"
                ></com-tpl>
                <em>自动发送</em>
              </div>
              <div class="btn-group">
                 <el-switch
                  v-model="itemList['BEFORE_ORDER']['WECHAT']['switch']"
                  inactive-color="#DEE1FF"
                  active-color="#4B5AFE" @change="itemSwitch($event,'BEFORE_ORDER', 'WECHAT',itemList['BEFORE_ORDER']['WECHAT']['noticeTaskId'])">
                </el-switch>
                <el-button type="small default-button" @click="testSend('BEFORE_ORDER', 'WECHAT',itemList['BEFORE_ORDER']['WECHAT']['noticeTaskId'])">测试发送</el-button>
              </div>
            </div>

          </div>
        </div>

        <div class="block" v-else>
          <div class="title clearfix">
            <p>欢迎消息 <span>活动发布后 可以发送邀请消息</span></p>
            <!-- <el-button :disabled='btnStatus.BEFORE_APPLY.SMS' size="medium"><router-link :to="{ name:'autoEditmsg' ,query:{'timing':'BEFORE_APPLY'} }">添加短信</router-link></el-button>
            <el-button :disabled='btnStatus.BEFORE_APPLY.WECHAT' size="medium"><router-link :to="{ name:'autoEditwx' ,query:{'timing':'BEFORE_APPLY'} }">添加微信</router-link></el-button> -->
          </div>
          <div class="item-box">

            <div class="item message">
              <img src="asd/11.png">
              <div class="txt">
                <com-tpl
                :isString="true"
                :type="'SMS'"
                :tpl="1"
                :tag="tplData.tag"
                :webinarName="tplData.webinarName"
                :hostName="tplData.hostName"
                :date="tplData.date"
                :secondCount="tplData.secondCount"
                :firstCount="tplData.firstCount"
                :triggerType="'BEFORE_APPLY'"
                ></com-tpl>
                <em>自动发送</em>
              </div>
              <div class="btn-group">
                 <el-switch
                  v-model="itemList['BEFORE_APPLY']['SMS']['switch']"
                  inactive-color="#DEE1FF"
                  active-color="#4B5AFE" @change="itemSwitch($event,'BEFORE_APPLY', 'SMS',itemList['BEFORE_APPLY']['SMS']['noticeTaskId'])">
                </el-switch>
                <el-button type="small default-button" @click="testSend('BEFORE_APPLY', 'SMS',itemList['BEFORE_APPLY']['SMS']['noticeTaskId'])">测试发送</el-button>
              </div>
            </div>

            <div class="item message">
              <img src="asd/11.png">
              <div class="txt">
                <com-tpl
                :isString="true"
                :type="'WECHAT'"
                :tpl="1"
                :tag="tplData.tag"
                :webinarName="tplData.webinarName"
                :hostName="tplData.hostName"
                :date="tplData.date"
                :secondCount="tplData.secondCount"
                :firstCount="tplData.firstCount"
                :triggerType="'BEFORE_APPLY'"
                ></com-tpl>
                <em>自动发送</em>
              </div>
              <div class="btn-group">
                 <el-switch
                  v-model="itemList['BEFORE_APPLY']['WECHAT']['switch']"
                  inactive-color="#DEE1FF"
                  active-color="#4B5AFE" @change="itemSwitch($event,'BEFORE_APPLY', 'WECHAT', itemList['BEFORE_APPLY']['WECHAT']['noticeTaskId'])">
                </el-switch>
                <el-button type="small default-button" @click="testSend('BEFORE_APPLY', 'WECHAT', itemList['BEFORE_APPLY']['WECHAT']['noticeTaskId'])">测试发送</el-button>
              </div>
            </div>

          </div>
        </div>

        <div class="block">
          <div class="title clearfix">
            <p>开播前{{hourValue}}小时提醒 <span>提醒用户活动即将开始，做好参加准备</span></p>
            <!-- <el-button :disabled='btnStatus.BEFORE_HOUR.SMS' size="medium"><router-link :to="{ name:'autoEditmsg' ,query:{'timing':'BEFORE_HOUR'} }">添加短信</router-link></el-button>
            <el-button :disabled='btnStatus.BEFORE_HOUR.WECHAT' size="medium"><router-link :to="{ name:'autoEditwx' ,query:{'timing':'BEFORE_HOUR'} }">添加微信</router-link></el-button> -->
            <el-button size="medium" @click='firstSel = true'>编辑提醒时间</el-button>
            <div class="seltime-modal" v-if='firstSel'>
              <div class="title">修改时间：</div>
              <el-select v-model="selhourValue" placeholder="编辑提醒时间" >
                <el-option v-for="item in hourOptions" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
              <el-button @click='resetCountDown("hour")'>放弃</el-button>
              <el-button @click='saveCountdown("hour")'>保存</el-button>
            </div>

          </div>
          <div class="item-box">

            <div class="item message">
              <img src="asd/11.png">
              <div class="txt">
                <com-tpl
                :isString="true"
                :type="'SMS'"
                :tpl="3"
                :tag="tplData.tag"
                :webinarName="tplData.webinarName"
                :hostName="tplData.hostName"
                :date="tplData.date"
                :secondCount="tplData.secondCount"
                :firstCount="tplData.firstCount"
                :triggerType="'BEFORE_HOUR'"
                ></com-tpl>
                <em>自动发送</em>
              </div>
              <div class="btn-group">
                 <el-switch
                  v-model="itemList['BEFORE_HOUR']['sms']"
                  inactive-color="#DEE1FF"
                  active-color="#4B5AFE" @change="itemSwitch($event,'BEFORE_HOUR', 'SMS', itemList['BEFORE_HOUR']['SMS']['noticeTaskId'])">
                </el-switch>
                <el-button type="small default-button" @click="testSend('BEFORE_HOUR', 'SMS', itemList['BEFORE_HOUR']['SMS']['noticeTaskId'])">测试发送</el-button>
              </div>
            </div>

            <div class="item message">
              <img src="asd/11.png">
              <div class="txt">
                <com-tpl
                :isString="true"
                :type="'WECHAT'"
                :tpl="3"
                :tag="tplData.tag"
                :webinarName="tplData.webinarName"
                :hostName="tplData.hostName"
                :date="tplData.date"
                :secondCount="tplData.secondCount"
                :firstCount="tplData.firstCount"
                :triggerType="'BEFORE_HOUR'"
                ></com-tpl>
                <em>自动发送</em>
              </div>
              <div class="btn-group">
                 <el-switch
                  v-model="itemList['BEFORE_HOUR']['wx']"
                  inactive-color="#DEE1FF"
                  active-color="#4B5AFE" @change="itemSwitch($event,'BEFORE_HOUR', 'WECHAT', itemList['BEFORE_HOUR']['WECHAT']['noticeTaskId'])">
                </el-switch>
                <el-button type="small default-button" @click="testSend('BEFORE_HOUR', 'WECHAT', itemList['BEFORE_HOUR']['WECHAT']['noticeTaskId'])">测试发送</el-button>
              </div>
            </div>

          </div>
        </div>
        <div class="block">
          <div class="title clearfix">
            <p>开播前{{minValue}}分钟提醒 <span>活动开始前{{minValue}}分钟，提醒用户活动即将开始，做好参加准备</span></p>
            <!-- <el-button :disabled='btnStatus.BEFORE_MINUTE.SMS' size="medium"><router-link :to="{ name:'autoEditmsg' ,query:{'timing':'BEFORE_MINUTE'} }">添加短信</router-link></el-button>
            <el-button :disabled='btnStatus.BEFORE_MINUTE.WECHAT' size="medium"><router-link :to="{ name:'autoEditwx' ,query:{'timing':'BEFORE_MINUTE'} }">添加微信</router-link></el-button> -->
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

            <div class="item message">
              <img src="asd/11.png">
              <div class="txt">
                <com-tpl
                :isString="true"
                :type="'SMS'"
                :tpl="3"
                :tag="tplData.tag"
                :webinarName="tplData.webinarName"
                :hostName="tplData.hostName"
                :date="tplData.date"
                :secondCount="tplData.secondCount"
                :firstCount="tplData.firstCount"
                :triggerType="'BEFORE_MINUTE'"
                ></com-tpl>
                <em>自动发送</em>
              </div>
              <div class="btn-group">
                 <el-switch
                  v-model="itemList['BEFORE_MINUTE']['SMS']['switch']"
                  inactive-color="#DEE1FF"
                  active-color="#4B5AFE" @change="itemSwitch($event,'BEFORE_MINUTE', 'SMS', itemList['BEFORE_MINUTE']['SMS']['noticeTaskId'])">
                </el-switch>
                <el-button type="small default-button" @click="testSend('BEFORE_MINUTE', 'SMS', itemList['BEFORE_MINUTE']['SMS']['noticeTaskId'])">测试发送</el-button>
              </div>
            </div>

            <div class="item message">
              <img src="asd/11.png">
              <div class="txt">
                <com-tpl
                :isString="true"
                :type="'WECHAT'"
                :tpl="3"
                :tag="tplData.tag"
                :webinarName="tplData.webinarName"
                :hostName="tplData.hostName"
                :date="tplData.date"
                :secondCount="tplData.secondCount"
                :firstCount="tplData.firstCount"
                :triggerType="'BEFORE_MINUTE'"
                ></com-tpl>
                <em>自动发送</em>
              </div>
              <div class="btn-group">
                 <el-switch
                  v-model="itemList['BEFORE_MINUTE']['WECHAT']['switch']"
                  inactive-color="#DEE1FF"
                  active-color="#4B5AFE" @change="itemSwitch($event,'BEFORE_MINUTE', 'WECHAT', itemList['BEFORE_MINUTE']['WECHAT']['noticeTaskId'])">
                </el-switch>
                <el-button type="small default-button" @click="testSend('BEFORE_MINUTE', 'WECHAT', itemList['BEFORE_MINUTE']['WECHAT']['noticeTaskId'])">测试发送</el-button>
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
            <!-- <el-button :disabled='btnStatus.SUBSCRIBE.SMS' size="medium"><router-link :to="{ name:'autoEditmsg' ,query:{'timing':'SUBSCRIBE'} }">添加短信</router-link></el-button>
            <el-button :disabled='btnStatus.SUBSCRIBE.WECHAT' size="medium"><router-link :to="{ name:'autoEditwx' ,query:{'timing':'SUBSCRIBE'} }">添加微信</router-link></el-button> -->
          </div>
          <div class="item-box">

            <div class="item message">
              <img src="asd/11.png">
              <div class="txt">
                <com-tpl
                :isString="true"
                :type="'SMS'"
                :tpl="4"
                :tag="tplData.tag"
                :webinarName="tplData.webinarName"
                :hostName="tplData.hostName"
                :date="tplData.date"
                :secondCount="tplData.secondCount"
                :firstCount="tplData.firstCount"
                :triggerType="'SUBSCRIBE'"
                ></com-tpl>
                <em>自动发送</em>
              </div>
              <div class="btn-group">
                 <el-switch
                  v-model="itemList['SUBSCRIBE']['SMS']['switch']"
                  inactive-color="#DEE1FF"
                  active-color="#4B5AFE" @change="itemSwitch($event,'SUBSCRIBE', 'SMS', itemList['SUBSCRIBE']['SMS']['noticeTaskId'])">
                </el-switch>
                <el-button type="small default-button" @click="testSend('SUBSCRIBE', 'SMS', itemList['SUBSCRIBE']['SMS']['noticeTaskId'])">测试发送</el-button>
              </div>
            </div>

            <div class="item message">
              <img src="asd/11.png">
              <div class="txt">
                <com-tpl
                :isString="true"
                :type="'WECHAT'"
                :tpl="4"
                :tag="tplData.tag"
                :webinarName="tplData.webinarName"
                :hostName="tplData.hostName"
                :date="tplData.date"
                :secondCount="tplData.secondCount"
                :firstCount="tplData.firstCount"
                :triggerType="'SUBSCRIBE'"
                ></com-tpl>
                <em>自动发送</em>
              </div>
              <div class="btn-group">
                 <el-switch
                  v-model="itemList['SUBSCRIBE']['WECHAT']['switch']"
                  inactive-color="#DEE1FF"
                  active-color="#4B5AFE" @change="itemSwitch($event,'SUBSCRIBE', 'WECHAT', itemList['SUBSCRIBE']['WECHAT']['noticeTaskId'])">
                </el-switch>
                <el-button type="small default-button" @click="testSend('SUBSCRIBE', 'WECHAT', itemList['SUBSCRIBE']['WECHAT']['noticeTaskId'])">测试发送</el-button>
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
            <!-- <el-button :disabled='btnStatus.REPLAY.SMS' size="medium"><router-link :to="{ name:'autoEditmsg' ,query:{'timing':'REPLAY'} }">添加短信</router-link></el-button>
            <el-button :disabled='btnStatus.REPLAY.WECHAT' size="medium"><router-link :to="{ name:'autoEditwx' ,query:{'timing':'REPLAY'} }">添加微信</router-link></el-button> -->
          </div>
          <div class="item-box">

            <div class="item message">
              <img src="asd/11.png">
              <div class="txt">
                <com-tpl
                :isString="true"
                :type="'SMS'"
                :tpl="5"
                :tag="tplData.tag"
                :webinarName="tplData.webinarName"
                :hostName="tplData.hostName"
                :date="tplData.date"
                :secondCount="tplData.secondCount"
                :firstCount="tplData.firstCount"
                :triggerType="'REPLAY'"
                ></com-tpl>
                <em>自动发送</em>
              </div>
              <div class="btn-group">
                 <el-switch
                  v-model="itemList['REPLAY']['SMS']['switch']"
                  inactive-color="#DEE1FF"
                  active-color="#4B5AFE" @change="itemSwitch($event,'REPLAY', 'SMS', itemList['REPLAY']['SMS']['noticeTaskId'])">
                </el-switch>
                <el-button type="small default-button" @click="testSend('REPLAY', 'SMS', itemList['REPLAY']['SMS']['noticeTaskId'])">测试发送</el-button>
              </div>
            </div>

            <div class="item message">
              <img src="asd/11.png">
              <div class="txt">
                <com-tpl
                :isString="true"
                :type="'WECHAT'"
                :tpl="5"
                :tag="tplData.tag"
                :webinarName="tplData.webinarName"
                :hostName="tplData.hostName"
                :date="tplData.date"
                :secondCount="tplData.secondCount"
                :firstCount="tplData.firstCount"
                :triggerType="'REPLAY'"
                ></com-tpl>
                <em>自动发送</em>
              </div>
              <div class="btn-group">
                 <el-switch
                  v-model="itemList['REPLAY']['WECHAT']['switch']"
                  inactive-color="#DEE1FF"
                  active-color="#4B5AFE" @change="itemSwitch($event,'REPLAY', 'WECHAT', itemList['REPLAY']['WECHAT']['noticeTaskId'])">
                </el-switch>
                <el-button type="small default-button" @click="testSend('REPLAY', 'WECHAT', itemList['REPLAY']['WECHAT']['noticeTaskId'])">测试发送</el-button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
    <!-- 测试发送弹窗 -->
    <com-test  v-if='testModal' :imgUrl="qrImgurl"  @closeTest='closeTest()' :type="testType"  :isAuto='true' :noticeId="noticeTaskId"></com-test>

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
      qrImgurl: '',
      noticeTaskId: '',
      itemList: {
        'BEFORE_ORDER': {
          'SMS': {
            'switch': false,
            'noticeTaskId': 0
          },
          'WECHAT': {
            'switch': false,
            'noticeTaskId': 0
          }
        },
        'BEFORE_APPLY': {
          'SMS': {
            'switch': false,
            'noticeTaskId': 0
          },
          'WECHAT': {
            'switch': false,
            'noticeTaskId': 0
          }
        },
        'BEFORE_HOUR': {
          'SMS': {
            'switch': false,
            'noticeTaskId': 0
          },
          'WECHAT': {
            'switch': false,
            'noticeTaskId': 0
          }
        },
        'BEFORE_MINUTE': {
          'SMS': {
            'switch': false,
            'noticeTaskId': 0
          },
          'WECHAT': {
            'switch': false,
            'noticeTaskId': 0
          }
        },
        'SUBSCRIBE': {
          'SMS': {
            'switch': false,
            'noticeTaskId': 0
          },
          'WECHAT': {
            'switch': false,
            'noticeTaskId': 0
          }
        },
        'REPLAY': {
          'SMS': {
            'switch': false,
            'noticeTaskId': 0
          },
          'WECHAT': {
            'switch': false,
            'noticeTaskId': 0
          }
        }
      }
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
    // del (id, type, msgType) {
    //   this.delConfirm = true
    //   this.delData = {
    //     id: id,
    //     type: type,
    //     msgType: msgType
    //   }
    // },
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
                  this.itemList['BEFORE_ORDER']['SMS']['switch'] = true
                  this.itemList['BEFORE_ORDER']['SMS']['noticeTaskId'] = item.noticeTaskId
                }
                if (item.type === 'WECHAT') {
                  this.itemList['BEFORE_ORDER']['WECHAT']['switch'] = true
                  this.itemList['BEFORE_ORDER']['WECHAT']['noticeTaskId'] = item.noticeTaskId
                }
                break
              case 'BEFORE_APPLY':
                this.renderData['BEFORE_APPLY'].push(item)
                if (item.type === 'SMS') {
                  this.itemList['BEFORE_APPLY']['SMS']['switch'] = true
                  this.itemList['BEFORE_ORDER']['SMS']['noticeTaskId'] = item.noticeTaskId
                }
                if (item.type === 'WECHAT') {
                  this.itemList['BEFORE_APPLY']['WECHAT']['switch'] = true
                  this.itemList['BEFORE_ORDER']['WECHAT']['noticeTaskId'] = item.noticeTaskId
                }
                break
              case 'BEFORE_HOUR':
                this.renderData['BEFORE_HOUR'].push(item)
                if (item.type === 'SMS') {
                  this.itemList['BEFORE_HOUR']['SMS']['switch'] = true
                  this.itemList['BEFORE_ORDER']['SMS']['noticeTaskId'] = item.noticeTaskId
                }
                if (item.type === 'WECHAT') {
                  this.itemList['BEFORE_HOUR']['WECHAT']['switch'] = true
                  this.itemList['BEFORE_ORDER']['WECHAT']['noticeTaskId'] = item.noticeTaskId
                }
                break
              case 'BEFORE_MINUTE':
                this.renderData['BEFORE_MINUTE'].push(item)
                if (item.type === 'SMS') {
                  this.itemList['BEFORE_MINUTE']['SMS']['switch'] = true
                  this.itemList['BEFORE_ORDER']['SMS']['noticeTaskId'] = item.noticeTaskId
                }
                if (item.type === 'WECHAT') {
                  this.itemList['BEFORE_MINUTE']['WECHAT']['switch'] = true
                  this.itemList['BEFORE_ORDER']['WECHAT']['noticeTaskId'] = item.noticeTaskId
                }
                break
              case 'SUBSCRIBE':
                this.renderData['SUBSCRIBE'].push(item)
                if (item.type === 'SMS') {
                  this.itemList['SUBSCRIBE']['SMS']['switch'] = true
                }
                if (item.type === 'WECHAT') {
                  this.itemList['SUBSCRIBE']['WECHAT']['switch'] = true
                }
                break
              case 'REPLAY':
                this.renderData['REPLAY'].push(item)
                if (item.type === 'SMS') {
                  this.itemList['REPLAY']['SMS']['switch'] = true
                }
                if (item.type === 'WECHAT') {
                  this.itemList['REPLAY']['WECHAT']['switch'] = true
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
    openSwitch () {

    },
    deleteTask (id, step, type) {
      http.autoDeletetask(id).then((res) => {
        if (res.code === 200) {
          this.renderData[step].forEach((item, idx) => {
            if (item.noticeTaskId === id) {
              this.renderData[step].splice(idx, 1)
            }
          })
          this.$toast({
            content: '删除成功',
            position: 'center'
          })
          this.itemList[step][type]['switch'] = false
        }
      }).catch((e) => {
        console.log(e)
      })
    },
    addTask (step, type) {
      const data = {
        activityId: this.activityId,
        templateId: 1, // 写死
        triggerType: step,
        type: type
      }
      http.autoSavetask(data).then((res) => {
        console.log(res)
        if (res.code === 200) {
          this.$toast({
            content: '设置成功',
            position: 'center'
          })
          this.itemList[step][type]['noticeTaskId'] = res.data.noticeTaskId
          this.itemList[step][type]['switch'] = true
        }
      }).catch((e) => {
        console.log(e)
      })
    },
    testSend (triggerType, type, idx) {
      this.qrImgurl = `http://aliqr.e.vhall.com/qr.png?t=${encodeURIComponent(`http://${window.location.host}/expand/notice/test-send-qr?noticeTaskId=${idx}`)}`
      this.$nextTick(() => {
        this.testType = type
        this.noticeTaskId = idx.toString()
        this.testModal = true
      })
    },
    itemSwitch (res, step, type, noticeTaskId) {
      console.log(res)
      if (res) {
        // 请求添加
        this.addTask(step, type)
      } else {
        // 请求删除
        this.deleteTask(noticeTaskId, step, type)
      }
      console.log(step)
      console.log(type)
    },
    closeTest () {
      this.testModal = false
    }
  },
  components: {
    comTpl,
    comTest
  }

}
</script>

<style lang="scss" scoped src="../../css/live.scss">
</style>
<style lang='scss' scoped>
@import '~assets/css/mixin.scss';
.auto-page {
  .live-title {
    border-bottom: none;

    span.tips {
      color: $color-font-sub;
    }
    .el-switch {
      position: relative;
      bottom: 4px;
    }
  }
}

.content {
  .preview {
    padding: 40px 80px;
  }
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
      height: 80px;
      background: rgba(245, 245, 245, 1);
      border-radius: 4px;
      margin-bottom: 5px;
      img {
        width: 50px;
        height: 50px;
        margin: 13px;
        float: left;
      }
    }
    .txt /deep/ {
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
    .btn-group {
      float: right;
      .default-button {
        width: 110px;
        padding: 0;
        height: 34px;
        line-height: 34px;
      }
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
