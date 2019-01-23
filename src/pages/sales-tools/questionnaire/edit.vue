<template>
  <div class="v-questionaire">
    <div class="v-questionaire-title">
      <span class="title">{{questionId?'编辑问卷':'新建问卷'}}</span>
      <com-back :url="`/salesTools/questionnaire/list/${activityId}`"></com-back>
      <!-- <button class="v-back"
              @click="back">返回</button> -->
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
                <li :class="{disabled:!base.name}"
                    @click="addQuestion('name')"><i class="iconfont icon-xingming"></i>姓<span></span>名
                </li>
                <li :class="{disabled:!base.phone}"
                    @click="addQuestion('phone')"><i class="iconfont icon-shoujihao"></i>手机号
                </li>
                <li :class="{disabled:!base.email}"
                    @click="addQuestion('email')"><i class="iconfont icon-youjian"></i>邮<span></span>箱
                </li>
                <li :class="{disabled:!base.sex}"
                    @click="addQuestion('sex')"><i class="iconfont icon-xingbie"></i>性<span></span>别
                </li>
                <li :class="{disabled:!base.birth}"
                    @click="addQuestion('birth')"><i class="iconfont icon-shengri"></i>生<span></span>日
                </li>
                <li :class="{disabled:!base.area}"
                    @click="addQuestion('area')"><i class="iconfont icon-diyu"></i>地<span></span>域
                </li>
                <li :class="{disabled:!base.industry}"
                    @click="addQuestion('industry')"><i class="iconfont icon-hangye"></i>行<span></span>业
                </li>
                <li :class="{disabled:!base.position}"
                    @click="addQuestion('position')"><i class="iconfont icon-zhiye"></i>职<span></span>位
                </li>
                <li :class="{disabled:!base.edu}"
                    @click="addQuestion('edu')"><i class="iconfont icon-jiaoyushuiping"></i>教育水平
                </li>
              </ul>
            </div>
            <div class="v-selects">
              <p class="v-title" style="margin-top:20px;">
                题型
              </p>
              <ul>
                <li @click="addQuestion('radio')"><i class="iconfont icon-danxuan"></i>单选题</li>
                <li @click="addQuestion('checkbox')"><i class="iconfont icon-duoxuan"></i>多选题</li>
                <li @click="addQuestion('select')"><i class="iconfont icon-xiala"></i>下拉题</li>
                <li @click="addQuestion('text')"><i class="iconfont icon-wenda"></i>问答题</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="right"
             ref="contentBox">
          <div class="ru">
            <div class="v-form">
              <span class="v-title">
                问卷头图
              </span>
              <ve-upload title="头图图片支持jpg、png、bmp格式，推荐尺寸为：700*140<br>大小不超过2M"
                         accept="png|jpg|jpeg|bmp"
                         :fileSize="2048"
                         :defaultImg="defaultImg"
                         :errorMsg="error.uploadErrorMsg"
                         @error="uploadError($event)"
                         @success="uploadImgSuccess($event)">
              </ve-upload>
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
                         class="q-title"
                         :value.sync="title"
                         :errorTips="error.titleError"
                         @change="canPaas=false"
                         @focus="focus('titleError')"></com-input>
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
                         type="textarea"
                         :value.sync="description"
                         @change="canPaas=false"
                         :errorTips="error.descriptionError"
                         @focus="focus('descriptionError')"></com-input>
            </div>
          </div>
          <div class="rb">
            <div class="v-question-info"
                 :class="{hasPhone:hasPhone}">
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
                            :key="dragData.length+1"
                            @remove="removePhone($event)">
              </com-question>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="v-control clearfix">
      <button :class="{'v-save':true,disabled:isSaveDisabled}"
              @click="save">
        保存
      </button>
      <button class="v-view"
              @click="view">
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
      <div class="text">预览</div>
      <div class="v-content">
        <div class="v-hearder">
          <div v-if="defaultImg" class="v-question-img" :style="{'background-image': `url(${defaultImg})`}"></div>
          <div v-else class="v-question-img"></div>
          <p class="v-title">
            {{this.title}}
          </p>
          <p class="v-summary">
            {{this.description}}
          </p>
        </div>
        <questions :dragData="dragData"
                   :phoneData="phoneData"
                   :isView="true"></questions>
        <button class="primary-button questions-btn" @click="showToast">提交</button>
      </div>
    </message-box>
  </div>
</template>

<script>
  import EventBus from 'src/utils/eventBus'
  import draggable from 'vuedraggable'
  import question from 'components/questionnaire/wrap'
  import questions from '../questionnaire/components/questions'
  import VeUpload from 'src/components/ve-upload-image'
  import {types as QTypes} from 'components/questionnaire/types'
  import questionService from 'src/api/questionnaire-service'
  import {focusInput} from 'src/utils/dom-tool'
  // import func from './vue-temp/vue-editor-bridge'
  export default {
    components: {
      draggable,
      VeUpload,
      comQuestion: question,
      questions
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
        isSaveDisabled: false,
        questionId: this.$route.params.id,
        activityId: this.$route.params.activityId,
        title: '调查问卷',
        description: '请您仔细填写下面的信息！',
        imgUrl: '',
        error: {
          titleError: '',
          descriptionError: '',
          uploadErrorMsg: ''
        },
        dragData: [],
        phoneData: [],
        saveResult: true,
        canPaas: true,
        messageBoxViewShow: false // 预览框显示隐藏
      }
    },
    beforeDestroy () {
    },
    watch: {
      phoneData: {
        handler () {
          if (this.initReady) {
            this.canPaas = false
          }
        },
        deep: true
      },
      imgUrl: {
        handler () {
          if (this.imgUrl) {
            this.error.uploadErrorMsg = ''
          }
        }
      }
    },
    /* 路由守卫，离开当前页面之前被调用 */
    beforeRouteLeave (to, from, next) {
      if (this.canPaas) {
        next(true)
        return false
      }
      this.$messageBox({
        header: '提示',
        width: '400px',
        content: '是否放弃当前编辑？',
        cancelText: '否',
        confirmText: '是',
        handleClick: (e) => {
          if (e.action === 'confirm') {
            next(true)
          } else {
            next(false)
          }
        }
      })
    },
    created () {
      EventBus.$emit('breads', [{
        title: '活动管理'
      }, {
        title: '活动列表',
        url: '/liveMager/list'
      }, {
        title: '活动详情',
        url: `/liveMager/detail/${this.activityId}`
      }, {
        title: '问卷列表',
        url: `/salesTools/questionnaire/list/${this.activityId}`
      }, {
        title: '编辑问卷'
      }])
    },
    mounted () {
      if (this.questionId && this.activityId) {
        this.getQuestions()
      } else {
        let obj = {
          title: '手机号',
          errorTip: '',
          style: 'text',
          type: QTypes.TEXT,
          required: 'Y',
          placeholder: '请输入手机号',
          detail: {
            format: 'phone',
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
        this.$nextTick(() => {
          this.canPaas = true
          this.initReady = true
        })
      }
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
      },
      defaultImg () {
        return this.imgUrl ? this.$imgHost + '/' + this.imgUrl : ''
      }
    },
    methods: {
      showToast () {
        this.$toast({
          content: '预览中无法提交问卷数据',
          position: 'center'
        })
      },
      getQuestions () {
        this.$get(questionService.GET_QUESTION, {
          activityId: this.activityId,
          naireId: this.questionId
        }).then((res) => {
          this.title = res.data.title
          this.description = res.data.description
          this.imgUrl = res.data.imgUrl
          let data = res.data
          data.detail.forEach(item => {
            item.ext = JSON.parse(item.ext)
            item._required = item.required === 'Y'
            ;((item) => {
              setTimeout(() => {
                if (item.ext.key === 'phone') {
                  this.phoneData.push(item)
                } else {
                  this.dragData.push(item)
                }
                this.base[item.ext.key] = false
              }, 0)
            })(item)
          })
        })
      },
      // back () {
      //   // window.history.go(-1)
      //   this.$router.push(`/salesTools/questionnaire/list/${this.activityId}`)
      // },
      removeQuestion (options) {
        if (options.type === 'phone') {
          this.phoneData.splice(0, 1)
        } else {
          this.dragData.splice(options.index - 1, 1)
        }
        this.base[options.type] = true
      },
      removePhone (options) {
        this.$messageBox({
          header: '删除活动',
          content: '删除此模块将会导致无法验证用户手机号码，确认是否删除？',
          cancelText: '暂不删除', // 不传递cancelText将只有一个确定按钮
          confirmText: '仍要删除',
          type: 'error', // 错误类型
          width: '500px', // 消息框宽度
          handleClick: (e) => {
            console.log(e)
            if (e.action === 'cancel') {
              // console.log('取消或者关闭按钮')
            } else if (e.action === 'confirm') {
              this.removeQuestion(options)
            }
          }
        })
      },
      addQuestion (type) {
        this.canPaas = false
        if ((this.dragData.length + this.phoneData.length) >= 100) {
          this.$toast({
            content: '场问卷最多能设置100个题目'
          })
          return false
        }
        let obj = {}
        switch (type) {
          case 'name':
            obj = {
              title: '姓名',
              errorTip: '',
              style: 'text',
              type: QTypes.TEXT,
              required: 'N',
              placeholder: '请输入姓名',
              detail: {
                max: ''
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
              style: 'text',
              type: QTypes.TEXT,
              required: 'Y',
              placeholder: '请输入手机号',
              detail: {
                format: 'phone',
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
              style: 'text',
              type: QTypes.TEXT,
              required: 'N',
              placeholder: '请输入邮箱',
              detail: {
                format: 'email',
                max: ''
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
              required: 'N',
              placeholder: '请选择性别',
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
              required: 'N',
              placeholder: '请输入生日',
              detail: {
                format: 'Y-m-d'
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
              required: 'N',
              placeholder: '请输入地域',
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
              required: 'N',
              placeholder: '请选择行业',
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
              style: 'text',
              type: QTypes.TEXT,
              required: 'N',
              placeholder: '请输入职位',
              detail: {
                max: ''
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
              required: 'N',
              placeholder: '请选择教育水平',
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
              required: 'N',
              detail: {
                list: [
                  {
                    value: '选项'
                  },
                  {
                    value: '选项'
                  },
                  {
                    value: '选项'
                  },
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
              required: 'N',
              detail: {
                list: [
                  {
                    value: '选项'
                  },
                  {
                    value: '选项'
                  },
                  {
                    value: '选项'
                  },
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
              required: 'N',
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
              style: 'textarea',
              type: QTypes.TEXT,
              required: 'N',
              placeholder: '请输入答案',
              detail: {
                max: ''
              },
              ext: {
                name: '问答题',
                key: 'text'
              }
            }
            this.dragData.push(obj)
            break
        }
        this.$refs.contentBox.scrollTop = this.$refs.contentBox.scrollHeight
      },
      save () {
        let data = []
        let result = true
        if (!this.title) {
          result = false
          this.error.titleError = '请填写问卷标题'
        } else if (!this.description) {
          result = false
          this.error.descriptionError = '请填写问卷简介'
        } else {
          for (let i = 0; i < this.dragData.length; i++) {
            if (result && !this.$refs['com' + i][0].validate()) {
              result = false
            }
            data.push(this.dragData[i])
          }
          if (this.phoneData.length > 0) {
            if (result && !this.$refs['comPhone'].$children[1].validate()) {
              result = false
            }
            data.push(this.phoneData[0])
          }
        }
        if (result) {
          result = document.querySelectorAll('.error').length <= 0
        }
        if (result && this.saveResult) {
          let _data = {
            activityId: this.activityId,
            title: this.title,
            description: this.description,
            imgUrl: this.imgUrl,
            detail: data
          }
          _data.detail.forEach(item => {
            item.ext = JSON.stringify(item.ext)
          })
          _data.detail = JSON.stringify(_data.detail)
          this.saveResult = false
          if (this.questionId) {
            _data.naireId = this.questionId
            this.isSaveDisabled = true
            this.$config({handlers: true}).$post(questionService.POST_QUESTION_UPDATE, _data).then((res) => {
              this.isSaveDisabled = false
              this.canPaas = true
              this.$router.replace('/salesTools/questionnaire/list/' + this.activityId)
            }).catch((res) => {
              this.isSaveDisabled = false
              this.canPaas = true
              this.saveResult = true
              this.$messageBox({
                header: '提示',
                content: res.msg,
                autoClose: 10,
                confirmText: '知道了',
                handleClick: (e) => {
                  console.log(e)
                  if (e.action === 'cancel') {
                    this.$router.go(0)
                  } else if (e.action === 'confirm') {
                    this.$router.go(0)
                  }
                }
              })
            })
          } else {
            this.isSaveDisabled = true
            this.$config({handlers: true}).$post(questionService.POST_QUESTION_CREAT, _data).then((res) => {
              this.isSaveDisabled = false
              this.canPaas = true
              this.$router.replace('/salesTools/questionnaire/list/' + this.activityId)
            }).catch((res) => {
              this.isSaveDisabled = false
              this.saveResult = true
              this.$messageBox({
                header: '提示',
                content: res.msg,
                autoClose: 10,
                confirmText: '知道了',
                handleClick: (e) => {
                  console.log(e)
                  if (e.action === 'cancel') {
                    this.$router.go(0)
                  } else if (e.action === 'confirm') {
                    this.$router.go(0)
                  }
                }
              })
            })
          }
        } else {
          this.isSaveDisabled = true
          this.$nextTick(() => {
            focusInput('.error', '.right')
            let st = setTimeout(() => {
              clearTimeout(st)
              this.isSaveDisabled = false
            }, 2000)
          })
        }
      },
      focus (type) {
        this.error[type] = ''
      },
      view () {
        this.messageBoxViewShow = true
      },
      messageBoxClick (e) {
        if (e.action === 'cancel') {
          this.messageBoxViewShow = false
        }
      },
      uploadImgSuccess (data) {
        this.imgUrl = data.name
        this.canPaas = false
      },
      uploadError (data) {
        this.error.uploadErrorMsg = data.msg
      }
    }
  }
</script>

<style lang='scss' scoped>
  @import '~assets/css/mixin.scss';
  .v-questionaire {
    overflow: hidden;
    padding-bottom: 30px;
    margin: 30px auto;
    color: #222;
    position: relative;
    height: 100%;
    /deep/ {
      .iconfont {
        font-size: 18px;
        display: inline-block;
        margin-top: -2px !important;
      }
      .icon-shanchuxuanxiang {
        font-size: 20px;
      }
      .com-input input {
        color: #222;
      }

    }
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
        &:hover {
          background-color: #4B5AFE;
          border-color: #4B5AFE;
          color: #fff;
        }
        &:active {
          background-color: #4350E4;
          border-color: #4350E4;
          color: #fff;
        }
      }
    }
    .v-questionaire-title {
      position: relative;
      // border-bottom: 1px solid $color-bd;
      margin-bottom: 5px;
      line-height: 60px;
      span.title {
        display: inline-block;
        font-size: 24px;
      }
      .back-btn-all {
        /*border-radius: 20px;*/
        /*padding: 0px;*/
        /*width: 90px;*/
      }
      // button {
      //   float: right;
      //   width: 120px;
      //   height: 40px;
      //   border: 1px solid #4b5afe;
      //   line-height: 38px;
      //   border-radius: 20px;
      //   background-color: #fff;
      //   font-size: 14px;
      //   color: #4b5afe;
      //   text-align: center;
      //   margin-top: 10px;
      //   &.v-save {
      //     border-color: #ffd021;
      //     background-color: #ffd021;
      //     color: #222;
      //     margin: 10px 30px 0 10px;
      //   }
      //   // &.v-back {
      //   //   cursor: pointer;
      //   //   width: auto;
      //   //   background-color: transparent;
      //   //   height: 40px;
      //   //   line-height: 38px;
      //   //   border-radius: 20px;
      //   //   border: none;
      //   //   padding: 0 30px;
      //   //   font-size: 14px;
      //   //   color: #888888;
      //   //   border: 1px solid #888888;
      //   // }
      //   &:hover {
      //     background-color: #fdd43f;
      //     border-color: #fdd43f;
      //     color: #222;
      //   }
      //   &:active {
      //     background-color: #eec11a;
      //     border-color: #eec11a;
      //     color: #222;
      //   }
      // }
    }
    .content {
      position: absolute;
      top: 70px;
      left: 0;
      right: 0;
      bottom: 80px;
      overflow: hidden;
      .tt {
        height: 100%;
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
          padding: 32px 34px;
          // overflow: hidden;
          .v-selects {
            .v-title {
              color: #222;
              font-size: 20px;
            }
            ul {
              margin-top: 25px;
              overflow: hidden;
            }
            li {
              width: 110px;
              height: 34px;
              margin-right: 10px;
              margin-bottom: 15px;
              float: left;
              line-height: 33px;
              text-align: left;
              padding-left: 15px;
              border-radius: 4px;
              border: 1px solid rgba(214, 214, 214, 1);
              cursor: pointer;
              &:hover {
                border-color: #4b5afe;
                background-color: #e9ebff;
                color: #4b5afe;
              }
              &:nth-child(2n) {
                margin-right: 0;
              }
              i {
                display: inline-block;
                margin-right: 5px;
              }
              span {
                display: inline-block;
                width: 17px;
                height: 1px;
              }
            }
          }
        }
      }
      .right {
        // float: left;
        // padding-bottom: 2333px;
        // margin-bottom: -2333px;
        // width: 100%;
        // padding-left: 320px;
        position: absolute;
        left: 320px;
        right: 0;
        bottom: 0;
        top: 0;
        overflow: auto;
        /*border: 1px solid #e2e2e2;*/
        .ru {
          border: 1px solid #e2e2e2;
          /*border-top: none;*/
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
              font-size: 14px;
              .v-red {
                color: #fc5659;
                position: relative;
                top: 2px;
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
            .ve-upload-box .upload-file-box {
              width: 379px;
              .upload-icon {
                margin-top: 14px;
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
        padding-bottom: 20px;
        .ve-message-box__header {
          background-color: rgba(0, 0, 0, 0);
          .prompt-title {
            display: none;
          }
        }
        .ve-message-box__container {
          padding-bottom: 0;
          .single-select-wrap {
            .question-content {
              padding-bottom: 0;
            }
          }
        }
        .ve-message-box__btns {
          display: none;
        }
        .el-radio__input {
          margin-top: 8px;
        }
        .el-checkbox__input {
          margin-top: 7px;
        }
        .q-select-item.display {
          margin-bottom: 0;
          height: 30px;
        }
      }
      // .box {
      //   width: 145px;
      //   height: 85px;
      //   background-color: #ffd021;
      //   color: #fff;
      //   /* Rotate div */
      //   transform: rotate(-45deg);
      //   position: absolute;
      //   left: -50px;
      //   top: -50px;
      //   z-index: 1;
      // }
      .text {
        position: absolute;
        top: 20px;
        left: 20px;
        font-size: 18px;
      }
      .v-content {
        overflow: auto;
        max-height: 520px;
      }
      .v-hearder {
        width: 620px;
        margin: 0 auto;
        padding: 20px 0 30px;
        border-bottom: 2px solid #ffd021;
        // img {
        //   margin: 0 auto;
        //   display: block;
        //   max-width: 700px;
        //   max-height: 140px;
        // }
        .v-question-img {
          margin: 0 auto;
          display: block;
          width: 620px;
          height: 124px;
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
          background-image: url("../../../assets/image/question-header.jpg");
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
  .questions-btn{
    display: block;
    width:220px;
    height:40px;
    margin: 50px auto 20px auto;
  }
</style>
