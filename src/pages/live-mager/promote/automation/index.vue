<template>
  <div class="content live-mager auto-page">
    <div class="live-title">
      <span class="title">自动化通知</span>
      <el-switch v-model="isOpen"
                 inactive-color="#DEE1FF"
                 :width="32"
                 active-color="#FFD021"
                 @change='openSwitch'>
      </el-switch>
      <span class='tips'>开启自动化通知，自动通知您的观众，提升活动服务体验</span>
    </div>
    <div class='preview mager-box border-box clearfix'>
      <div class="time-line fl"></div>
      <div class="fl">
        <p class='step order'
           v-if="limit === 'NONE'? true : false">预约阶段</p>
        <p v-else
           class='step order'>活动报名阶段</p>
        <div class="detail">
          <div class="block"
               v-if="limit === 'NONE'? true : false">
            <div class="title clearfix">
              <p class='block-tips'>欢迎消息</p>
            </div>
            <div class="item-box">

              <div class="item message clearfix">
                <div class="img msg"></div>
                <div class="txt">
                  <com-tpl :isString="true"
                           :type="'SMS'"
                           :tpl="itemList['BEFORE_ORDER']['SMS']['templateId']"
                           :tag="tplData.tag"
                           :webinarName="tplData.webinarName"
                           :hostName="tplData.hostName"
                           :date="tplData.date"
                           :secondCount="tplData.secondCount"
                           :link="tplData.link"
                           :firstCount="tplData.firstCount"
                           :triggerType="'BEFORE_ORDER'"></com-tpl>
                  <em>{{itemList['BEFORE_ORDER']['SMS']['status']}}</em>
                </div>
                <div class="btn-group">
                  <el-switch v-model="itemList['BEFORE_ORDER']['SMS']['switch']"
                             inactive-color="#DEE1FF"
                             :width="32"
                             active-color="#FFD021"
                             @change="itemSwitch($event,'BEFORE_ORDER', 'SMS', itemList['BEFORE_ORDER']['SMS']['noticeTaskId'], itemList['BEFORE_ORDER']['SMS']['templateId'])">
                  </el-switch>
                  <el-button type="small default-button"
                             @click="testSend('BEFORE_ORDER', 'SMS',itemList['BEFORE_ORDER']['SMS']['noticeTaskId'])"
                             :disabled="!itemList['BEFORE_ORDER']['SMS']['switch']">测试发送</el-button>
                </div>
              </div>

              <div class="item message clearfix">
                <div class="img wechat"></div>
                <div class="txt">
                  <com-tpl :isString="true"
                           :type="'WECHAT'"
                           :tpl="itemList['BEFORE_ORDER']['WECHAT']['templateId']"
                           :tag="tplData.tag"
                           :webinarName="tplData.webinarName"
                           :hostName="tplData.hostName"
                           :date="tplData.date"
                           :link="tplData.link"
                           :secondCount="tplData.secondCount"
                           :firstCount="tplData.firstCount"
                           :triggerType="'BEFORE_ORDER'"></com-tpl>
                  <em>{{itemList['BEFORE_ORDER']['WECHAT']['status']}}</em>
                </div>
                <div class="btn-group">
                  <el-switch v-model="itemList['BEFORE_ORDER']['WECHAT']['switch']"
                             inactive-color="#DEE1FF"
                             :width="32"
                             active-color="#FFD021"
                             @change="itemSwitch($event,'BEFORE_ORDER', 'WECHAT',itemList['BEFORE_ORDER']['WECHAT']['noticeTaskId'], itemList['BEFORE_ORDER']['SMS']['templateId'])">
                  </el-switch>
                  <el-button type="small default-button"
                             @click="testSend('BEFORE_ORDER', 'WECHAT',itemList['BEFORE_ORDER']['WECHAT']['noticeTaskId'])"
                             :disabled="!itemList['BEFORE_ORDER']['WECHAT']['switch']">测试发送</el-button>
                </div>
              </div>

            </div>
          </div>

          <div class="block"
               v-else>
            <div class="title clearfix">
              <p class='block-tips'>欢迎消息</p>
            </div>
            <div class="item-box">

              <div class="item message clearfix">
                <div class="img msg"></div>
                <div class="txt">
                  <com-tpl :isString="true"
                           :type="'SMS'"
                           :tpl="itemList['BEFORE_APPLY']['SMS']['templateId']"
                           :tag="tplData.tag"
                           :webinarName="tplData.webinarName"
                           :hostName="tplData.hostName"
                           :date="tplData.date"
                           :link="tplData.link"
                           :secondCount="tplData.secondCount"
                           :firstCount="tplData.firstCount"
                           :triggerType="'BEFORE_APPLY'"></com-tpl>
                  <em>{{itemList['BEFORE_APPLY']['SMS']['status']}}</em>
                </div>
                <div class="btn-group">
                  <el-switch v-model="itemList['BEFORE_APPLY']['SMS']['switch']"
                             inactive-color="#DEE1FF"
                             :width="32"
                             active-color="#FFD021"
                             @change="itemSwitch($event,'BEFORE_APPLY', 'SMS',itemList['BEFORE_APPLY']['SMS']['noticeTaskId'], itemList['BEFORE_APPLY']['SMS']['templateId'])">
                  </el-switch>
                  <el-button type="small default-button"
                             @click="testSend('BEFORE_APPLY', 'SMS',itemList['BEFORE_APPLY']['SMS']['noticeTaskId'])"
                             :disabled="!itemList['BEFORE_APPLY']['SMS']['switch']">测试发送</el-button>
                </div>
              </div>

              <div class="item message clearfix">
                <div class="img wechat"></div>
                <div class="txt">
                  <com-tpl :isString="true"
                           :type="'WECHAT'"
                           :tpl="itemList['BEFORE_APPLY']['WECHAT']['templateId']"
                           :tag="tplData.tag"
                           :webinarName="tplData.webinarName"
                           :hostName="tplData.hostName"
                           :date="tplData.date"
                           :link="tplData.link"
                           :secondCount="tplData.secondCount"
                           :firstCount="tplData.firstCount"
                           :triggerType="'BEFORE_APPLY'"></com-tpl>
                  <em>{{itemList['BEFORE_APPLY']['WECHAT']['status']}}</em>
                </div>
                <div class="btn-group">
                  <el-switch v-model="itemList['BEFORE_APPLY']['WECHAT']['switch']"
                             inactive-color="#DEE1FF"
                             :width="32"
                             active-color="#FFD021"
                             @change="itemSwitch($event,'BEFORE_APPLY', 'WECHAT', itemList['BEFORE_APPLY']['WECHAT']['noticeTaskId'], itemList['BEFORE_APPLY']['WECHAT']['templateId'])">
                  </el-switch>
                  <el-button type="small default-button"
                             @click="testSend('BEFORE_APPLY', 'WECHAT', itemList['BEFORE_APPLY']['WECHAT']['noticeTaskId'])"
                             :disabled="!itemList['BEFORE_APPLY']['WECHAT']['switch']">测试发送</el-button>
                </div>
              </div>

            </div>
          </div>

          <div class="block">
            <div class="title clearfix">
              <p class='block-tips'>开播前{{hourValue}}小时 <span>提醒用户活动即将开始，做好参加准备</span></p>
              <el-button class='primary-button edit-time'
                         @click='firstSel = true'>编辑提醒时间</el-button>
              <div class="seltime-modal"
                   v-if='firstSel'>
                <div class="title">修改时间：<i class='close'
                     @click='resetCountDown("hour")'></i></div>
                <div class="content">
                  <el-select v-model="selhourValue"
                             placeholder="编辑提醒时间">
                    <el-option v-for="item in hourOptions"
                               :key="item.value"
                               :label="item.label"
                               :value="item.value">
                    </el-option>
                  </el-select>
                  <div class="btn-group">
                    <el-button class='primary-button'
                               @click='saveCountdown("hour")'>保存</el-button>
                    <span @click='resetCountDown("hour")'>取消</span>
                  </div>
                </div>
              </div>

            </div>
            <div class="item-box">

              <div class="item message clearfix">
                <div class="img msg"></div>
                <div class="txt">
                  <com-tpl :isString="true"
                           :type="'SMS'"
                           :tpl="itemList['BEFORE_HOUR']['SMS']['templateId']"
                           :tag="tplData.tag"
                           :webinarName="tplData.webinarName"
                           :hostName="tplData.hostName"
                           :date="tplData.date"
                           :link="tplData.link"
                           :secondCount="tplData.secondCount"
                           :firstCount="tplData.firstCount"
                           :triggerType="'BEFORE_HOUR'"></com-tpl>
                  <em>{{itemList['BEFORE_HOUR']['SMS']['status']}}</em>
                </div>
                <div class="btn-group">
                  <el-switch v-model="itemList['BEFORE_HOUR']['SMS']['switch']"
                             inactive-color="#DEE1FF"
                             :width="32"
                             active-color="#FFD021"
                             @change="itemSwitch($event,'BEFORE_HOUR', 'SMS', itemList['BEFORE_HOUR']['SMS']['noticeTaskId'], itemList['BEFORE_HOUR']['SMS']['templateId'])">
                  </el-switch>
                  <el-button type="small default-button"
                             @click="testSend('BEFORE_HOUR', 'SMS', itemList['BEFORE_HOUR']['SMS']['noticeTaskId'])"
                             :disabled="!itemList['BEFORE_HOUR']['SMS']['switch']">测试发送</el-button>
                </div>
              </div>

              <div class="item message clearfix">
                <div class="img wechat"></div>
                <div class="txt">
                  <com-tpl :isString="true"
                           :type="'WECHAT'"
                           :tpl="itemList['BEFORE_HOUR']['WECHAT']['templateId']"
                           :tag="tplData.tag"
                           :webinarName="tplData.webinarName"
                           :hostName="tplData.hostName"
                           :date="tplData.date"
                           :link="tplData.link"
                           :secondCount="tplData.secondCount"
                           :firstCount="tplData.firstCount"
                           :triggerType="'BEFORE_HOUR'"></com-tpl>
                  <em>{{itemList['BEFORE_HOUR']['WECHAT']['status']}}</em>
                </div>
                <div class="btn-group">
                  <el-switch v-model="itemList['BEFORE_HOUR']['WECHAT']['switch']"
                             inactive-color="#DEE1FF"
                             :width="32"
                             active-color="#FFD021"
                             @change="itemSwitch($event,'BEFORE_HOUR', 'WECHAT', itemList['BEFORE_HOUR']['WECHAT']['noticeTaskId'], itemList['BEFORE_HOUR']['WECHAT']['templateId'])">
                  </el-switch>
                  <el-button type="small default-button"
                             @click="testSend('BEFORE_HOUR', 'WECHAT', itemList['BEFORE_HOUR']['WECHAT']['noticeTaskId'])"
                             :disabled="!itemList['BEFORE_HOUR']['WECHAT']['switch']">测试发送</el-button>
                </div>
              </div>

            </div>
          </div>
          <div class="block">
            <div class="title clearfix">
              <p class='block-tips'>开播前{{minValue}}分钟 <span>活动开始前{{minValue}}分钟，提醒用户活动即将开始，做好参加准备</span></p>
              <el-button class='primary-button edit-time'
                         @click='secondSel = true'>编辑提醒时间</el-button>
              <div class="seltime-modal"
                   v-if='secondSel'>
                <div class="title">修改时间：<i class='close'
                     @click='resetCountDown("min")'></i></div>
                <div class="content">
                  <el-select v-model="selminValue"
                             placeholder="编辑提醒时间">
                    <el-option v-for="item in minOptions"
                               :key="item.value"
                               :label="item.label"
                               :value="item.value">
                    </el-option>
                  </el-select>
                  <div class="btn-group">
                    <el-button class='primary-button'
                               @click='saveCountdown("min")'>保存</el-button>
                    <span @click='resetCountDown("min")'>取消</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="item-box">

              <div class="item message clearfix">
                <div class="img msg"></div>
                <div class="txt">
                  <com-tpl :isString="true"
                           :type="'SMS'"
                           :tpl="itemList['BEFORE_MINUTE']['SMS']['templateId']"
                           :tag="tplData.tag"
                           :webinarName="tplData.webinarName"
                           :hostName="tplData.hostName"
                           :date="tplData.date"
                           :link="tplData.link"
                           :secondCount="tplData.secondCount"
                           :firstCount="tplData.firstCount"
                           :triggerType="'BEFORE_MINUTE'"></com-tpl>
                  <em>{{itemList['BEFORE_MINUTE']['SMS']['status']}}</em>
                </div>
                <div class="btn-group">
                  <el-switch v-model="itemList['BEFORE_MINUTE']['SMS']['switch']"
                             inactive-color="#DEE1FF"
                             :width="32"
                             active-color="#FFD021"
                             @change="itemSwitch($event,'BEFORE_MINUTE', 'SMS', itemList['BEFORE_MINUTE']['SMS']['noticeTaskId'], itemList['BEFORE_MINUTE']['SMS']['templateId'])">
                  </el-switch>
                  <el-button type="small default-button"
                             @click="testSend('BEFORE_MINUTE', 'SMS', itemList['BEFORE_MINUTE']['SMS']['noticeTaskId'])"
                             :disabled="!itemList['BEFORE_MINUTE']['SMS']['switch']">测试发送</el-button>
                </div>
              </div>

              <div class="item message clearfix">
                <div class="img wechat"></div>
                <div class="txt">
                  <com-tpl :isString="true"
                           :type="'WECHAT'"
                           :tpl="itemList['BEFORE_MINUTE']['WECHAT']['templateId']"
                           :tag="tplData.tag"
                           :webinarName="tplData.webinarName"
                           :hostName="tplData.hostName"
                           :date="tplData.date"
                           :link="tplData.link"
                           :secondCount="tplData.secondCount"
                           :firstCount="tplData.firstCount"
                           :triggerType="'BEFORE_MINUTE'"></com-tpl>
                  <em>{{itemList['BEFORE_MINUTE']['WECHAT']['status']}}</em>
                </div>
                <div class="btn-group">
                  <el-switch v-model="itemList['BEFORE_MINUTE']['WECHAT']['switch']"
                             inactive-color="#DEE1FF"
                             :width="32"
                             active-color="#FFD021"
                             @change="itemSwitch($event,'BEFORE_MINUTE', 'WECHAT', itemList['BEFORE_MINUTE']['WECHAT']['noticeTaskId'], itemList['BEFORE_MINUTE']['WECHAT']['templateId'])">
                  </el-switch>
                  <el-button type="small default-button"
                             @click="testSend('BEFORE_MINUTE', 'WECHAT', itemList['BEFORE_MINUTE']['WECHAT']['noticeTaskId'])"
                             :disabled="!itemList['BEFORE_MINUTE']['WECHAT']['switch']">测试发送</el-button>
                </div>
              </div>

            </div>
          </div>
        </div>
        <p class='step record'>回放阶段</p>
        <div class="detail">
          <div class="block">
            <div class="title clearfix">
              <p class='block-tips'>回放设置成功消息 <span>针对未参加活动的用户发送回放消息</span></p>
            </div>
            <div class="item-box">

              <div class="item message clearfix">
                <div class="img msg"></div>
                <div class="txt">
                  <com-tpl :isString="true"
                           :type="'SMS'"
                           :tpl="itemList['REPLAY']['SMS']['templateId']"
                           :tag="tplData.tag"
                           :webinarName="tplData.webinarName"
                           :hostName="tplData.hostName"
                           :date="tplData.date"
                           :link="tplData.link"
                           :secondCount="tplData.secondCount"
                           :firstCount="tplData.firstCount"
                           :triggerType="'REPLAY'"></com-tpl>
                  <em>{{itemList['REPLAY']['SMS']['status']}}</em>
                </div>
                <div class="btn-group">
                  <el-switch v-model="itemList['REPLAY']['SMS']['switch']"
                             inactive-color="#DEE1FF"
                             :width="32"
                             active-color="#FFD021"
                             @change="itemSwitch($event,'REPLAY', 'SMS', itemList['REPLAY']['SMS']['noticeTaskId'], itemList['REPLAY']['SMS']['templateId'])">
                  </el-switch>
                  <el-button type="small default-button"
                             @click="testSend('REPLAY', 'SMS', itemList['REPLAY']['SMS']['noticeTaskId'])"
                             :disabled="!itemList['REPLAY']['SMS']['switch']">测试发送</el-button>
                </div>
              </div>

              <div class="item message clearfix">
                <div class="img wechat"></div>
                <div class="txt">
                  <com-tpl :isString="true"
                           :type="'WECHAT'"
                           :tpl="itemList['REPLAY']['WECHAT']['templateId']"
                           :tag="tplData.tag"
                           :webinarName="tplData.webinarName"
                           :hostName="tplData.hostName"
                           :date="tplData.date"
                           :link="tplData.link"
                           :secondCount="tplData.secondCount"
                           :firstCount="tplData.firstCount"
                           :triggerType="'REPLAY'"></com-tpl>
                  <em>{{itemList['REPLAY']['WECHAT']['status']}}</em>
                </div>
                <div class="btn-group">
                  <el-switch v-model="itemList['REPLAY']['WECHAT']['switch']"
                             inactive-color="#DEE1FF"
                             :width="32"
                             active-color="#FFD021"
                             @change="itemSwitch($event,'REPLAY', 'WECHAT', itemList['REPLAY']['WECHAT']['noticeTaskId'], itemList['REPLAY']['WECHAT']['templateId'])">
                  </el-switch>
                  <el-button type="small default-button"
                             @click="testSend('REPLAY', 'WECHAT', itemList['REPLAY']['WECHAT']['noticeTaskId'])"
                             :disabled="!itemList['REPLAY']['WECHAT']['switch']">测试发送</el-button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 测试发送弹窗 -->
    <com-test v-if='testModal'
              :imgUrl="qrImgurl"
              @closeTest='closeTest()'
              :type="testType"
              :isAuto='true'
              :noticeId="noticeTaskId"></com-test>

    <!-- <com-dialog :visible.sync="delConfirm" header="提示" content="您确定要删除此条自动化短信通知？" center class='del-modal'>
      <div class="del-footer" slot="footer">
        <com-button @click='delConfirm = false'>取消</com-button>
        <com-button type="primary" @click="deleteTask">确定</com-button>
      </div>
    </com-dialog> -->
  </div>
</template>

<script>
import comTpl from './com-tpl'
import comTest from '../com-test'
import noticeService from 'src/api/notice-service'
import activityService from 'src/api/activity-service'
// import {getMsg} from './tpl'
export default {
  data () {
    return {
      activityId: this.$route.params.id,
      isOpen: false,
      limit: 'NONE',
      testModal: false,
      titleValue: '',
      firstSel: false,
      secondSel: false,
      PC_HOST: process.env.PC_HOST,
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
            'noticeTaskId': 0,
            'templateId': 1,
            'status': '未启用'
          },
          'WECHAT': {
            'switch': false,
            'noticeTaskId': 0,
            'templateId': 1,
            'status': '未启用'
          }
        },
        'BEFORE_APPLY': {
          'SMS': {
            'switch': false,
            'noticeTaskId': 0,
            'templateId': 2,
            'status': '未启用'
          },
          'WECHAT': {
            'switch': false,
            'noticeTaskId': 0,
            'templateId': 2,
            'status': '未启用'
          }
        },
        'BEFORE_HOUR': {
          'SMS': {
            'switch': false,
            'noticeTaskId': 0,
            'templateId': 3,
            'status': '未启用'
          },
          'WECHAT': {
            'switch': false,
            'noticeTaskId': 0,
            'templateId': 3,
            'status': '未启用'
          }
        },
        'BEFORE_MINUTE': {
          'SMS': {
            'switch': false,
            'noticeTaskId': 0,
            'templateId': 3,
            'status': '未启用'
          },
          'WECHAT': {
            'switch': false,
            'noticeTaskId': 0,
            'templateId': 3,
            'status': '未启用'
          }
        },
        'SUBSCRIBE': {
          'SMS': {
            'switch': false,
            'noticeTaskId': 0,
            'templateId': 4,
            'status': '未启用'
          },
          'WECHAT': {
            'switch': false,
            'noticeTaskId': 0,
            'templateId': 4,
            'status': '未启用'
          }
        },
        'REPLAY': {
          'SMS': {
            'switch': false,
            'noticeTaskId': 0,
            'templateId': 5,
            'status': '未启用'
          },
          'WECHAT': {
            'switch': false,
            'noticeTaskId': 0,
            'templateId': 5,
            'status': '未启用'
          }
        }
      }
    }
  },
  created () {
    this.getParams()
    this.getList()
    this.findCountdown()
    this.getSwitchinfo()
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
      this.$get(noticeService.GET_AUTO_PARAMS, {
        activityId: this.activityId
      }).then((res) => {
        this.hourValue = res.data.firstCount
        this.selhourValue = res.data.firstCount
        this.minValue = res.data.secondCount
        this.selminValue = res.data.secondCount
        this.limit = res.data.webinarLimit
        this.tplData.tag = res.data.tag
        this.tplData.webinarName = res.data.webinarName
        this.tplData.date = res.data.date
        this.tplData.hostName = res.data.hostName
        this.tplData.firstCount = res.data.firstCount * 1
        this.tplData.secondCount = res.data.secondCount * 1
        this.tplData.link = `https:${this.PC_HOST}subscribe/${this.activityId}`
      })
      // http.autoGetparams(this.activityId).then((res) => {
      //   console.log(res)
      //   if (res.code === 200) {
      //     this.hourValue = res.data.firstCount
      //     this.selhourValue = res.data.firstCount
      //     this.minValue = res.data.secondCount
      //     this.selminValue = res.data.secondCount
      //     this.limit = res.data.webinarLimit

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
    getList () {
      this.$get(noticeService.GET_AUTO_LIST, {
        activityId: this.activityId
      }).then((res) => {
        res.data.forEach(item => {
          switch (item.triggerType) {
            case 'BEFORE_ORDER':
              this.renderData['BEFORE_ORDER'].push(item)
              if (item.type === 'SMS') {
                this.itemList['BEFORE_ORDER']['SMS']['switch'] = true
                this.itemList['BEFORE_ORDER']['SMS']['noticeTaskId'] = item.noticeTaskId
                const status = this.getStatus(item.status)
                this.itemList['BEFORE_ORDER']['SMS']['status'] = status
              }
              if (item.type === 'WECHAT') {
                this.itemList['BEFORE_ORDER']['WECHAT']['switch'] = true
                this.itemList['BEFORE_ORDER']['WECHAT']['noticeTaskId'] = item.noticeTaskId
                const status = this.getStatus(item.status)
                this.itemList['BEFORE_ORDER']['WECHAT']['status'] = status
              }
              break
            case 'BEFORE_APPLY':
              this.renderData['BEFORE_APPLY'].push(item)
              if (item.type === 'SMS') {
                this.itemList['BEFORE_APPLY']['SMS']['switch'] = true
                this.itemList['BEFORE_APPLY']['SMS']['noticeTaskId'] = item.noticeTaskId
                const status = this.getStatus(item.status)
                this.itemList['BEFORE_APPLY']['SMS']['status'] = status
              }
              if (item.type === 'WECHAT') {
                this.itemList['BEFORE_APPLY']['WECHAT']['switch'] = true
                this.itemList['BEFORE_APPLY']['WECHAT']['noticeTaskId'] = item.noticeTaskId
                const status = this.getStatus(item.status)
                this.itemList['BEFORE_APPLY']['SMS']['status'] = status
              }
              break
            case 'BEFORE_HOUR':
              this.renderData['BEFORE_HOUR'].push(item)
              if (item.type === 'SMS') {
                this.itemList['BEFORE_HOUR']['SMS']['switch'] = true
                this.itemList['BEFORE_HOUR']['SMS']['noticeTaskId'] = item.noticeTaskId
                const status = this.getStatus(item.status)
                this.itemList['BEFORE_HOUR']['SMS']['status'] = status
              }
              if (item.type === 'WECHAT') {
                this.itemList['BEFORE_HOUR']['WECHAT']['switch'] = true
                this.itemList['BEFORE_HOUR']['WECHAT']['noticeTaskId'] = item.noticeTaskId
                const status = this.getStatus(item.status)
                this.itemList['BEFORE_HOUR']['WECHAT']['status'] = status
              }
              break
            case 'BEFORE_MINUTE':
              this.renderData['BEFORE_MINUTE'].push(item)
              if (item.type === 'SMS') {
                this.itemList['BEFORE_MINUTE']['SMS']['switch'] = true
                this.itemList['BEFORE_MINUTE']['SMS']['noticeTaskId'] = item.noticeTaskId
                const status = this.getStatus(item.status)
                this.itemList['BEFORE_MINUTE']['SMS']['status'] = status
              }
              if (item.type === 'WECHAT') {
                this.itemList['BEFORE_MINUTE']['WECHAT']['switch'] = true
                this.itemList['BEFORE_MINUTE']['WECHAT']['noticeTaskId'] = item.noticeTaskId
                const status = this.getStatus(item.status)
                this.itemList['BEFORE_MINUTE']['WECHAT']['status'] = status
              }
              break
            case 'SUBSCRIBE':
              this.renderData['SUBSCRIBE'].push(item)
              if (item.type === 'SMS') {
                this.itemList['SUBSCRIBE']['SMS']['switch'] = true
                this.itemList['SUBSCRIBE']['SMS']['noticeTaskId'] = item.noticeTaskId
                const status = this.getStatus(item.status)
                this.itemList['SUBSCRIBE']['SMS']['status'] = status
              }
              if (item.type === 'WECHAT') {
                this.itemList['SUBSCRIBE']['WECHAT']['switch'] = true
                this.itemList['SUBSCRIBE']['WECHAT']['noticeTaskId'] = item.noticeTaskId
                const status = this.getStatus(item.status)
                this.itemList['SUBSCRIBE']['WECHAT']['status'] = status
              }
              break
            case 'REPLAY':
              this.renderData['REPLAY'].push(item)
              if (item.type === 'SMS') {
                this.itemList['REPLAY']['SMS']['switch'] = true
                this.itemList['REPLAY']['SMS']['noticeTaskId'] = item.noticeTaskId
                const status = this.getStatus(item.status)
                this.itemList['REPLAY']['SMS']['status'] = status
              }
              if (item.type === 'WECHAT') {
                this.itemList['REPLAY']['WECHAT']['switch'] = true
                this.itemList['REPLAY']['WECHAT']['noticeTaskId'] = item.noticeTaskId
                const status = this.getStatus(item.status)
                this.itemList['REPLAY']['WECHAT']['status'] = status
              }
              break
          }
        })
      })
    },
    getStatus (status) {
      let str = ''
      switch (status) {
        case 'AWAIT':
          str = '等待发送'
          break
        case 'EXEC':
          str = '自动执行中'
          break
        case 'OVERDUE':
          str = '已过期'
          break
        case 'COMPLETE':
          str = '成功发送'
          break
        default:
          str = '未启用'
          break
      }
      return str
    },
    findCountdown () {
      this.$get(noticeService.GET_AUTO_CONFIG, {
        activityId: this.activityId
      }).then((res) => {
        this.hourValue = res.data.prehour
        this.minValue = res.data.preminute
      })
    },
    saveCountdown (type) {
      this.firstSel = false
      this.secondSel = false
      const data = {
        activityId: this.activityId,
        prehour: this.selhourValue,
        preminute: this.selminValue

      }
      this.$config({handlers: true}).$get(noticeService.POST_AUTO_SAVE_CONFIG, data).then((res) => {
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
      }).catch((res) => {
        if (res.code === 65902) {
          this.$messageBox({
            header: '提示',
            content: res.msg,
            autoClose: 10,
            confirmText: '知道了'
          })
        }
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
    openSwitch (type) {
      const data = {
        activityId: this.activityId,
        submodule: 'EXPAND_NOTICE',
        enabled: type ? 'Y' : 'N'
      }
      this.$config({handlers: true}).$post(activityService.POST_DETAIL_SWITCH, data).then((res) => {
        this.$toast({
          content: '设置成功'
        })
      }).catch((res) => {
        console.log(res)
        if (res.code === 60706) {
          this.isOpen = !type
          this.$messageBox({
            header: '提示',
            content: res.msg,
            autoClose: 10,
            confirmText: '知道了'
          })
        }
      })
      // http.detailSwitch(data).then((res) => {
      //   if (res.code === 200) {
      //     this.$toast({
      //       content: '设置成功'
      //     })
      //   }
      // })
    },
    getSwitchinfo () {
      this.$get(activityService.GET_QUERY_SWITCH, {
        activityId: this.activityId
      }).then((res) => {
        this.isOpen = res.data.EXPAND_NOTICE === 'Y'
      })
      // http.querySwitch(this.activityId).then((res) => {
      //   console.log(res)
      //   if (res.code === 200) {
      //     this.isOpen = res.data.EXPAND_NOTICE === 'Y'
      //   }
      // })
    },
    deleteTask (id, step, type, status) {
      this.$config({handlers: true}).$post(noticeService.POST_DELETE_AUTO_TASK, {
        noticeTaskId: id
      }).then((res) => {
        this.renderData[step].forEach((item, idx) => {
          if (item.noticeTaskId === id) {
            this.renderData[step].splice(idx, 1)
          }
        })
        this.$toast({
          content: '设置成功',
          position: 'center'
        })
        this.itemList[step][type]['switch'] = false
      }).catch((res) => {
        if (res.code === 65902) {
          this.$messageBox({
            header: '提示',
            content: res.msg,
            autoClose: 10,
            confirmText: '知道了'
          })
          this.itemList[step][type]['switch'] = !status
        }
      })
    },
    addTask (step, type, templateId, status) {
      const data = {
        activityId: this.activityId,
        templateId: templateId, // 写死
        triggerType: step,
        type: type
      }
      this.$config({handlers: true}).$post(noticeService.POST_AUTO_SAVE_TASK, data).then((res) => {
        this.$toast({
          content: '设置成功',
          position: 'center'
        })
        this.itemList[step][type]['noticeTaskId'] = res.data.noticeTaskId
        this.itemList[step][type]['switch'] = true
      }).catch((res) => {
        if (res.code === 65902) {
          this.$messageBox({
            header: '提示',
            content: res.msg,
            autoClose: 10,
            confirmText: '知道了'
          })
          this.itemList[step][type]['switch'] = !status
        }
      })
    },
    testSend (triggerType, type, idx) {
      this.qrImgurl = `http://aliqr.e.vhall.com/qr.png?t=${encodeURIComponent(`http://${window.location.host}/api/expand/notice/test-send-qr?noticeTaskId=${idx}`)}`
      this.$nextTick(() => {
        this.testType = type
        this.noticeTaskId = idx.toString()
        this.testModal = true
      })
    },
    itemSwitch (res, step, type, noticeTaskId, templateId) {
      console.log(res)
      if (res) {
        // 请求添加
        this.addTask(step, type, templateId, res)
      } else {
        // 请求删除
        this.deleteTask(noticeTaskId, step, type, res)
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
<style lang="scss">
.auto-page {
  .el-select {
    width: 360px;
  }
  .el-select .el-input__inner {
    border: 1px solid #e2d2d2;
  }
  .el-input.is-disabled .el-input__inner {
    background-color: #fff;
    color: #555;
  }
}
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
      bottom: 2px;
    }
  }
}

.content {
  .preview {
    padding: 40px 80px;
    .time-line {
      position: relative;
      width: 40px;
      height: 870px;
      margin-right: 15px;
      &:before {
        content: '';
        width: 1px;
        height: 100%;
        background: #e2e2e2;
        position: absolute;
        top: 0;
        left: 50%;
        margin-left: -0.5px;
      }
    }
  }
  .preview p.step {
    margin-top: 50px;
    font-size: 20px;
    position: relative;
    &:before {
      position: absolute;
      top: -7px;
      left: -55px;
      content: '';
      width: 40px;
      height: 40px;
      z-index: 9;
      background: url('~assets/image/auto_preview.svg') no-repeat center;
      background-size: contain;
      background-color: rgba(85, 85, 85, 1);
      border-radius: 100px;
      background-size: 26px 25px;
      background-position: 7px 7px;
    }
    &.live:before {
      background-image: url('~assets/image/auto_live.svg');
      background-size: 24px 23px;
      background-position: center;
    }
    &.record:before {
      background-image: url('~assets/image/auto_record.svg');
      background-size: 24px 23px;
      background-position: center;
    }
    &:nth-of-type(1) {
      margin-top: 0px;
    }
  }
  .detail {
    text-align: left;
    .block {
      width: 800px;
    }
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
      button.edit-time {
        margin: 0px 10px;
        float: right;
      }
    }
    .block-tips {
      color: $color-blue;
      span {
        color: $color-font-sub;
      }
      &:before {
        content: '';
        position: absolute;
        top: 9px;
        left: -43px;
        width: 16px;
        height: 16px;
        border-radius: 100px;
        background: $color-blue;
      }
    }
    .edit-time {
      width: 110px;
      padding: 0;
      height: 34px;
      line-height: 34px;
    }
  }
  .item-box {
    margin: 10px 0px;
    .item {
      padding: 10px;
      width: 800px;
      // height: 80px;
      background: rgba(245, 245, 245, 1);
      border-radius: 4px;
      margin-bottom: 5px;
      .img {
        width: 50px;
        height: 50px;
        margin: 5px;
        float: left;
        background: url('~assets/image/auto_wechat.png') no-repeat center;
        background-size: contain;
        &.msg {
          background-image: url('~assets/image/auto_msg.png');
        }
      }
    }
    .txt /deep/ {
      float: left;
      margin: 10px;
      p {
        display: inline-block;
      }
      p.is-string {
        width: 500px;
        // white-space: nowrap;
        // text-overflow: ellipsis;
        // overflow: hidden;
        color: $color-font;
      }
      em {
        display: block;
        color: $color-font-sub;
      }
    }
    .btn-group {
      float: right;
      margin: 10px 0;
      .default-button {
        width: 90px;
        padding: 0;
        height: 30px;
        line-height: 30px;
      }
      .el-switch {
        margin-right: 30px;
      }
    }
  }
  .seltime-modal {
    position: absolute;
    top: 100%;
    right: 0px;
    z-index: 9;
    width: 420px;
    height: 210px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.15);
    border-radius: 4px;
    .title {
      text-align: left;
      height: 40px;
      line-height: 40px;
      padding: 0px 18px;
      background-color: $color-default;
      position: relative;
      .close {
        cursor: pointer;
        width: 10px;
        height: 10px;
        background: url('~assets/image/close.svg') no-repeat;
        background-size: contain;
        position: absolute;
        top: 15px;
        right: 15px;
        &:hover {
          opacity: 0.8;
        }
      }
    }
    .content {
      padding: 30px 30px 20px 30px;
    }
    .btn-group {
      float: right;
      margin-top: 40px;
      span {
        cursor: pointer;
      }
    }
    .primary-button {
      padding: 0;
      width: 120px;
      height: 40px;
      line-height: 40px;
      margin-right: 20px;
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
