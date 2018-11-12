<template>
  <div class="v-questionaire">
    <div class="v-questionaire-title">
      <span class="title">新建问卷</span>
    </div>
    <div class="content from-box">
      <div class="tt">
        <div class="left">
          <div class="lc">
            <div class="v-selects">
              <p class="v-title">
                个人信息
              </p>
              <ul>
                <li :class="{disabled:!base.name}" @click="addQuestion('name')">姓名</li>
                <li :class="{disabled:!base.phone}" @click="addQuestion('phone')">手机号</li>
                <li :class="{disabled:!base.email}" @click="addQuestion('email')">邮箱</li>
                <li :class="{disabled:!base.sex}" @click="addQuestion('sex')">性别</li>
                <li :class="{disabled:!base.birth}" @click="addQuestion('birth')">生日</li>
                <li :class="{disabled:!base.area}" @click="addQuestion('area')">地域</li>
                <li :class="{disabled:!base.industry}" @click="addQuestion('industry')">行业</li>
                <li :class="{disabled:!base.position}" @click="addQuestion('position')">职位</li>
                <li :class="{disabled:!base.edu}" @click="addQuestion('edu')">教育水平</li>
              </ul>
            </div>
            <div class="v-selects">
              <p class="v-title">
                题型
              </p>
              <ul>
                <li @click="addQuestion('radio')">单选题</li>
                <li @click="addQuestion('checkbox')">多选题</li>
                <li @click="addQuestion('select')">下拉题</li>
                <li @click="addQuestion('text')">问答题</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="ru">
            <div class="v-form">
              <span class="v-title">
                <span class="v-red">
                  *
                </span>
                问卷头图
              </span>
              <ve-upload title="上传头图，推荐尺寸为800x180px，大小不超过2M"
                     accept="png|jpg|jpeg|bmp"
                     :fileSize="2048"></ve-upload>
            </div>
            <div class="v-form">
              <span class="v-title">
                <span class="v-red">
                  *
                </span>
                问卷标题
              </span>
              <com-input placeholder="问卷标题"
                     :max-length="30"
                     class="q-title"></com-input>
            </div>
            <div class="v-form">
              <span class="v-title">
                <span class="v-red">
                  *
                </span>
                问卷简介
              </span>
              <com-input placeholder="问卷简介"
                     :max-length="300"
                     class="q-title"
                     type="textarea"></com-input>
            </div>
          </div>
          <div class="rb">
            <div class="v-question-info" :class="{hasPhone:hasPhone}">
              <draggable v-model="dragData"
                         :options="{handle:'.sort'}">
                <com-question v-for="(item,index) in dragData"
                              :value.sync="item"
                              :edit="true"
                              :index="index+1"
                              :key="index"
                              :class="{isSingle:isSingle}"
                              :ref="`com${index}`"
                              @remove="removeQuestion($event)">
                </com-question>
              </draggable>
              <com-question v-if="phoneData.length"
                            :class="{isBorder:isBorder}"
                            class="v-phone"
                            :value.sync="phoneData[0]"
                            :edit="true"
                            :ref="`comPhone`"
                            :index="dragData.length+1"
                            :key="dragData.length+1" @remove="removeQuestion($event)">
              </com-question>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="v-control clearfix">
      <button class="v-save" @click="save">
        保存
      </button>
      <button class="v-view" @click="view">
        预览
      </button>
    </div>
    <message-box v-show="messageBoxViewShow"
                 @handleClick="messageBoxClick"
                 width="700px"
                 class="message-box v-view"
                 confirmText="确定"
                 type='prompt'
                 header='预览'>
                <div class="box">
                  <div class="text">预览</div>
                </div>
                <div class="v-hearder">
                  <img src="../../../assets/image/avatar@2x.png" alt="">
                  <p class="v-title">
                    产品调研
                  </p>
                  <p class="v-summary">
                   欢迎参加调查！答卷数据仅用于统计分析，请放心填写。题目选项无对错之分，按照实际情况选择即可。感谢您的帮助！
                  </p>
                </div>
                <div class="v-questions">
                  <com-question v-for="(item,index) in dragData"
                              :value.sync="item"
                              :edit="false"
                              :index="index+1"
                              :key="index"
                              :class="{isSingle:isSingle}"
                              :ref="`com${index}`"
                              @remove="removeQuestion($event)">
                  </com-question>
                  <com-question v-if="phoneData.length"
                                :class="{isBorder:isBorder}"
                                class="v-phone"
                                :value.sync="phoneData[0]"
                                :edit="false"
                                :ref="`comPhone`"
                                :index="dragData.length+1"
                                :isView="true"
                                :key="dragData.length+1" @remove="removeQuestion($event)">
                  </com-question>
                </div>
    </message-box>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import question from 'components/questionnaire/wrap'
import VeUpload from 'src/components/ve-upload-image'
import { types as QTypes } from 'components/questionnaire/types'
export default {
  components: {
    draggable,
    VeUpload,
    comQuestion: question
  },
  data () {
    return {
      base: {
        name: true,
        phone: true,
        email: true,
        sex: true,
        birth: true,
        area: true,
        industry: true,
        position: true,
        edu: true
      },
      dragData: [
      ],
      phoneData: [],
      messageBoxViewShow: false // 预览框显示隐藏
    }
  },
  beforeDestroy () {
  },
  created () {
  },
  computed: {
    isBorder () {
      return !(this.dragData.length > 0)
    },
    isSingle () {
      return (this.dragData.length === 1) && (this.phoneData.length === 0)
    },
    hasPhone () {
      return !(this.phoneData.length === 0)
    }
  },
  methods: {
    removeQuestion (options) {
      if (options.type === 'phone') {
        this.phoneData.splice(0, 1)
      } else {
        this.dragData.splice(options.index - 1, 1)
      }
      this.base[options.type] = true
    },
    addQuestion (type) {
      let obj = {}
      switch (type) {
        case 'name':
          obj = {
            title: '姓名',
            errorTip: '',
            type: QTypes.TEXT,
            required: false,
            detail: {
              format: 'input',
              max: 10
            },
            ext: {
              name: '姓名',
              key: 'name'
            }
          }
          this.dragData.push(obj)
          this.base.name = false
          break
        case 'phone':
          obj = {
            title: '手机号',
            errorTip: '',
            type: QTypes.TEXT,
            required: true,
            detail: {
              format: 'mobile',
              max: 11
            },
            verification: 'Y',
            ext: {
              name: '手机号',
              key: 'phone'
            }
          }
          this.phoneData.push(obj)
          this.base.phone = false
          break
        case 'email':
          obj = {
            title: '邮箱',
            errorTip: '',
            type: QTypes.TEXT,
            required: false,
            detail: {
              format: 'email',
              max: 30
            },
            ext: {
              name: '邮箱',
              key: 'email'
            }
          }
          this.dragData.push(obj)
          this.base.email = false
          break
        case 'sex':
          obj = {
            title: '性别',
            errorTip: '',
            type: QTypes.SELECT,
            required: true,
            detail: {
              list: [
                {
                  value: '男'
                },
                {
                  value: '女'
                }
              ]
            },
            ext: {
              fixedness: true,
              name: '性别',
              key: 'sex'
            }
          }
          this.dragData.push(obj)
          this.base.sex = false
          break
        case 'birth':
          obj = {
            title: '生日',
            errorTip: '',
            type: QTypes.DATE,
            required: true,
            detail: {
              format: 'yyyy-MM-dd'
            },
            ext: {
              name: '生日',
              key: 'birth'
            }
          }
          this.dragData.push(obj)
          this.base.birth = false
          break
        case 'area':
          obj = {
            title: '地域',
            errorTip: '',
            type: QTypes.AREA,
            required: true,
            detail: {
              level: 'address'
            },
            ext: {
              name: '地域',
              key: 'area'
            }
          }
          this.dragData.push(obj)
          this.base.area = false
          break
        case 'industry':
          obj = {
            title: '行业',
            errorTip: '',
            type: QTypes.SELECT,
            required: true,
            detail: {
              list: [
                {
                  value: 'IT/互联网'
                },
                {
                  value: '电子/通信/硬件'
                },
                {
                  value: '金融'
                },
                {
                  value: '交通/贸易/物流'
                },
                {
                  value: '消费品'
                },
                {
                  value: '机械/制造'
                },
                {
                  value: '能源/矿产环保'
                },
                {
                  value: '制药/医疗'
                },
                {
                  value: '专业服务'
                },
                {
                  value: '教育/培训'
                },
                {
                  value: '广告/媒体/娱乐/出版'
                },
                {
                  value: '房地产/建筑'
                },
                {
                  value: '服务业'
                },
                {
                  value: '政府/非盈利机构/其它'
                }
              ]
            },
            ext: {
              fixedness: true,
              name: '行业',
              key: 'industry'
            }
          }
          this.dragData.push(obj)
          this.base.industry = false
          break
        case 'position':
          obj = {
            title: '职位',
            type: QTypes.TEXT,
            required: true,
            detail: {
              format: 'input',
              max: 10
            },
            ext: {
              name: '职位',
              key: 'position'
            }
          }
          this.dragData.push(obj)
          this.base.position = false
          break
        case 'edu':
          obj = {
            title: '教育水平',
            errorTip: '',
            type: QTypes.SELECT,
            required: true,
            detail: {
              list: [
                {
                  value: '博士'
                },
                {
                  value: '硕士'
                },
                {
                  value: '本科'
                },
                {
                  value: '大专'
                },
                {
                  value: '高中'
                }
              ]
            },
            ext: {
              fixedness: true,
              name: '教育水平',
              key: 'edu'
            }
          }
          this.dragData.push(obj)
          this.base.edu = false
          break
        case 'radio':
          obj = {
            title: '单选题',
            errorTip: '',
            type: QTypes.RADIO,
            required: true,
            detail: {
              list: [
                {
                  value: '选项'
                }
              ]
            },
            ext: {
              name: '单选题',
              key: 'radio'
            }
          }
          this.dragData.push(obj)
          break
        case 'checkbox':
          obj = {
            title: '多选题',
            errorTip: '',
            type: QTypes.CHECKBOX,
            value: [],
            required: true,
            detail: {
              list: [
                {
                  value: '选项'
                }
              ]
            },
            ext: {
              name: '多选题',
              key: 'checkbox'
            }
          }
          this.dragData.push(obj)
          break
        case 'select':
          obj = {
            title: '下拉题',
            errorTip: '',
            type: QTypes.SELECT,
            required: true,
            detail: {
              list: [
                {
                  value: '选项'
                }
              ]
            },
            ext: {
              name: '下拉题',
              key: 'select'
            }
          }
          this.dragData.push(obj)
          break
        case 'text':
          obj = {
            title: '问答题',
            errorTip: '',
            type: QTypes.TEXT,
            style: '',
            required: false,
            detail: {
              format: 'textarea',
              max: 300
            },
            ext: {
              name: '问答题',
              key: 'text'
            }
          }
          this.dragData.push(obj)
          break
      }
    },
    save () {
      let data = []
      for (let i = 0; i < this.dragData.length; i++) {
        if (!this.$refs['com' + i][0].$children[1].validate()) {
          return false
        }
        data.push(this.dragData[i])
      }
      if (this.phoneData.length > 0) {
        if (!this.$refs['comPhone'].$children[1].validate()) {
          return false
        }
        data.push(this.phoneData[0])
      }
      if (data.length > 0) {
        console.log(data)
      }
    },
    view () {
      this.messageBoxViewShow = true
    },
    messageBoxClick (e) {
      if (e.action === 'cancel') {
        this.messageBoxViewShow = false
      }
    }
  }
}
</script>

<style lang='scss' scoped>
.v-questionaire {
  overflow: hidden;
  padding-bottom: 30px;
  margin: 0 auto;
  color: #222;
  position: relative;
  /* 设备宽度大于 1600 */
  @media all and (min-width: 1600px) {
    width: 1366px;
  }
  /* 设备宽度小于 1600px */
  @media all and (max-width: 1600px) {
    width: 1019px;
  }
  .v-control {
    position: fixed;
    bottom: 0;
    left: 220px;
    right: 0;
    height: 60px;
    line-height: 60px;
    background-color: #fff;
    button {
      float: right;
      width: 120px;
      height: 40px;
      border: 1px solid #4b5afe;
      line-height: 38px;
      border-radius: 20px;
      background-color: #fff;
      font-size: 14px;
      color: #4b5afe;
      text-align: center;
      margin-top: 10px;
      &.v-save {
        border-color: #ffd021;
        background-color: #ffd021;
        color: #222;
        margin: 10px 30px 0 10px;
      }
      &:hover {
        background-color: #fdd43f;
        border-color: #fdd43f;
        color: #222;
      }
      &:active {
        background-color: #eec11a;
        border-color: #eec11a;
        color: #222;
      }
    }
  }
  .v-questionaire-title {
    // border-bottom: 1px solid $color-bd;
    line-height: 60px;
    span.title {
      display: inline-block;
      font-size: 24px;
    }
  }
  .content {
    widows: 800px;
    min-height: 500px;
    margin-bottom: 80px;
    // overflow: hidden;
    position: relative;
    .tt {
      overflow-y: hidden;
      position: relative;
    }
    .left {
      position: absolute;
      top: 0;
      left: 0;
      width: 300px;
      bottom: 0;
      .lc {
        position: absolute;
        top: 0px;
        left: 0;
        right: 0;
        bottom: 0;
        border: 1px solid #e2e2e2;
        background-color: #fff;
        border-radius: 4px;
        padding: 32px 30px;
        // overflow: hidden;
        .v-selects {
          ul {
            margin-top: 10px;
            overflow: hidden;
          }
          li {
            width: 95px;
            height: 38px;
            margin-right: 32px;
            margin-bottom: 15px;
            float: left;
            line-height: 38px;
            text-align: center;
            border-radius: 4px;
            border: 1px solid #dadada;
            cursor: pointer;
            &:nth-child(2n) {
              margin-right: 0;
            }
          }
        }
      }
    }
    .right {
      float: left;
      padding-bottom: 2333px;
      margin-bottom: -2333px;
      width: 100%;
      padding-left: 320px;
      .ru {
        border: 1px solid #e2e2e2;
        background-color: #fff;
        border-radius: 4px;
        overflow: hidden;
        padding: 32px 56px 32px 30px;
        .v-form /deep/ {
          width: 100%;
          display: flex;
          margin-bottom: 20px;
          .v-title {
            vertical-align: top;
            display: inline-block;
            width: 95px;
            .v-red {
              color: #fc5659;
            }
          }
          .ve-upload-box,
          .com-input {
            display: inline-block;
            flex: 1;
            textarea {
              height: 70px;
              padding: 2px 60px 2px 10px;
              & + .limit {
                bottom: 10px;
                right: 8px;
              }
            }
          }
        }
      }
      .rb /deep/ {
        margin-top: 20px;
        .v-question-info {
          min-height: 85px;
          &.hasPhone {
            .single-select-wrap {
              border-radius: 0;
              &:first-child {
                border-radius: 4px 4px 0 0;
              }
              &:last-child {
                border-radius: 0;
              }
            }
          }
          .single-select-wrap {
            border-top: none;
            &:first-child {
              border-top: 1px solid #e2e2e2;
              border-radius: 4px 4px 0 0;
            }
            &:last-child {
              border-radius: 0 0 4px 4px;
            }
            &.isSingle {
              border-radius: 4px;
            }
            &.v-phone {
              border-top: none;
              &.isBorder {
                border-radius: 4px;
                border-top: 1px solid #e2e2e2;
              }
            }
          }
        }
      }
    }
  }
  .v-view /deep/ {
    color: #222;
    .ve-message-box {
      .ve-message-box__header {
        background-color: rgba(0, 0, 0, 0);
        .prompt-title {
          display: none;
        }
      }
      .ve-message-box__btns {
        display: none;
      }
    }
    .box {
      width: 145px;
      height: 85px;
      background-color: #ffd021;
      color: #fff;
      /* Rotate div */
      transform: rotate(-45deg);
      position: absolute;
      left: -50px;
      top: -50px;
    }
    .text {
      position: absolute;
      bottom: 9px;
      left: 33px;
      font-size: 16px;
    }
    .v-hearder {
      width: 620px;
      margin: 0 auto;
      padding: 20px 0 30px;
      border-bottom: 2px solid #ffd021;
      img {
        margin: 0 auto;
        display: block;
      }
      .v-title {
        max-width: 500px;
        word-break: break-all;
        text-align: center;
        font-size: 30px;
        margin: 50px auto 0;
      }
      .v-summary {
        max-width: 500px;
        word-break: break-all;
        text-align: center;
        font-size: 16px;
        margin: 18px auto 0;
      }
    }
    .v-questions {
      max-height: 360px;
      overflow: auto;
      .single-select-wrap {
        border: none;
        .question-content {
          padding: 15px 25px;
          .q-edit-content {
            width: 100%;
            .el-select {
              width: 100%;
            }
            .com-input {
              width: 100%;
            }
            .el-date-editor.el-input,
            .el-date-editor.el-input__inner {
              width: 100%;
            }
          }
        }
      }
    }
  }
}
</style>
