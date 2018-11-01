<template>
  <div>
    <!-- <com-red></com-red> -->
    <!-- <button @click="addData">add data</button>
    <button @click="delData">del data</button> -->
    <div class="test-wrap">
      <!-- <com-drag class="test-drag"
                drag-target=".sort"
                :custom-data="dragData"> -->
      <com-q v-for="(item,index) in dragData"
             :value.sync="item"
             :edit="true"
             :index="index+1"></com-q>
      <!-- <com-q></com-q>
      <com-q></com-q>
      <com-q></com-q>
      <com-q></com-q>
      <com-q></com-q> -->
      <!-- </com-drag> -->
      <!-- <com-drag class="test-drag"
                drag-target=".sort"
                :custom-data="dragData">
        <com-qu class="question-item"
                v-for="(item,index) in dragData"
                :key="`qu${index}`"
                :index="index+1"
                :value.sync="item"
                @del="remove"></com-qu>
      </com-drag> -->
    </div>
    <div class="test-wrap1">
      <!-- <com-drag class="test-drag"
                drag-target=".sort"
                :custom-data="dragData"> -->
      <com-q v-for="(item,index) in dragData"
             :value.sync="item"
             :index="index+1"></com-q>
      <!-- <com-q></com-q>
      <com-q></com-q>
      <com-q></com-q>
      <com-q></com-q>
      <com-q></com-q> -->
      <!-- </com-drag> -->
      <!-- <com-drag class="test-drag"
                drag-target=".sort"
                :custom-data="dragData">
        <com-qu class="question-item"
                v-for="(item,index) in dragData"
                :key="`qu${index}`"
                :index="index+1"
                :value.sync="item"
                @del="remove"></com-qu>
      </com-drag> -->
    </div>
    <!-- <router-link to="/entry">bbbbb</router-link>
    <com-dialog :visible.sync="show1"
                header="提示"
                center
                :beforeClose="beforeClose"
                @close="close"
                @closed="closed">
      <div v-if="at===1">
        <com-input type="input"></com-input>
      </div>
      <div v-else-if="at===2">
        <com-input type="password"></com-input>
      </div>
      <div class="test-footer"
           slot="footer">
        <com-button>取消</com-button>
        <com-button type="primary"
                    :loading="true"
                    @click="ttt">确定</com-button>
      </div>
    </com-dialog>
    <button @click="testCom">test1</button>
    <button @click="testCom1">test11</button>
    <div class="test-wrap"
         v-ComLoading="show1"
         com-loading-text="拼命加载中">
      <button @click="testFun">test2</button>
    </div>
    <com-notification v-show="show"
                      :header="header"
                      :content="content">
      <div slot="header">我是header</div>
      <p>我是content</p>
    </com-notification>
    <div class="test-wrap">
      <com-input :value.sync="outValue"
                 placeholder="请输入公司名称"
                 type="textarea"
                 autosize
                 :maxLength="50"></com-input>
    </div>
    <div class="test-wrap">
      <com-upload accept="png|jpg|jpeg|bmp|gif|mp4"
                  uploadTxt="xxx"
                  actionUrl="/api/upload/image"
                  inputName="file"
                  :fileSize="fileSize"
                  :exParams="exParams"
                  @selected="uploadSelected"
                  @progress="uploadProgress"
                  @load="uploadLoad"
                  @error="uploadError"
                  @over="uploadOver">
        <div class="test-upload">我是自定义区域</div>
      </com-upload>
    </div>
    <div class="test-wrap"
         style="width:600px;height:400px;">
      <com-tabs :value.sync="tabValue">
        <com-tab label="用户管理"
                 :index="1">
          <div>
            <com-input :value.sync="outValue"></com-input>
            <span>{{outValue}}</span>
          </div>
        </com-tab>
        <com-tab label="配置管理"
                 :index="2">配置管理的内容详情</com-tab>
        <com-tab label="xxxx"
                 :index="3">sdasdasdds</com-tab>
      </com-tabs>
    </div> -->

  </div>
</template>

<script>
// import testService from 'src/api/test'
import { types as QTypes } from 'components/questionnaire/types'
import red from 'components/red-packet-rain/com'
import { Toast } from 'components/common/notification'
import qq from 'components/questionnaire/wrap'

export default {
  components: {
    comRed: red,
    comQ: qq
  },
  data () {
    return {
      tIndex: 0,
      dragData: [
        {
          title: '单选题',
          errorTip: '',
          type: QTypes.RADIO,
          required: false,
          detail: {
            list: [
              {
                value: '选项'
              }
            ]
          },
          ext: {
            name: '单选题'
          }
        },
        {
          title: '多选题',
          errorTip: '',
          type: QTypes.CHECKBOX,
          value: [],
          required: false,
          detail: {
            list: [
              {
                value: '选项'
              }
            ]
          },
          ext: {
            name: '多选题'
          }
        },
        {
          title: '下拉题',
          errorTip: '',
          type: QTypes.SELECT,
          required: false,
          detail: {
            list: [
              {
                value: '选项'
              }
            ]
          },
          ext: {
            name: '下拉题'
          }
        },
        {
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
            name: '问答题'
          }
        },
        {
          title: '姓名',
          errorTip: '',
          type: QTypes.TEXT,
          required: false,
          detail: {
            format: 'text',
            max: 10
          },
          ext: {
            name: '姓名'
          }
        },
        {
          title: '手机号',
          errorTip: '',
          type: QTypes.TEXT,
          required: false,
          detail: {
            format: 'mobile'
          },
          verification: 'Y',
          ext: {
            name: '手机号'
          }
        },
        {
          title: '邮箱',
          errorTip: '',
          type: QTypes.TEXT,
          required: false,
          detail: {
            format: 'email',
            max: 30
          },
          ext: {
            name: '邮箱'
          }
        },
        {
          title: '性别',
          errorTip: '',
          type: QTypes.SELECT,
          required: true,
          detail: [
            {
              value: '男'
            },
            {
              value: '女'
            }
          ],
          ext: {
            fixedness: true,
            name: '性别'
          }
        },
        {
          title: '生日',
          errorTip: '',
          type: QTypes.DATE,
          required: true,
          ext: {
            name: '生日'
          }
        },
        // {
        //   title: '地域',
        //   errorTip: '',
        //   type: QTypes.AREA,
        //   required: true,
        //   ext: {
        //     name: '地域'
        //   }
        // },
        // {
        //   title: '行业',
        //   errorTip: '',
        //   type: QTypes.INDUSTRY,
        //   required: true,
        //   ext: {
        //     name: '行业'
        //   }
        // },
        {
          title: '职位',
          type: QTypes.TEXT,
          required: true,
          detail: {
            format: 'text',
            max: 10
          },
          ext: {
            name: '职位'
          }
        },
        {
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
            name: '教育水平'
          }
        }
      ],
      at: 1,
      tabValue: 1,
      tabValue1: '1',
      dialogVisible: true,
      show1: false,
      show: false,
      header: 'Notification Title',
      content: 'I will never close automatically. I will be close automatically. I will never close automatically.',
      id: 1,
      outValue: 'asd',
      exParams: {
        joinID: '123123'
      },
      fileSize: 200000
    }
  },
  created () {
    // this.$loading({target: '.test-wrap'})
    // testService.login({
    //   username: 18513848725,
    //   password: 'm123123',
    //   type: 1,
    //   remeber: 1
    // }).then((res) => {
    //   console.log('登陆成功')
    // })
  },
  methods: {
    remove (index) {

    },
    addData () {
      this.dragData.push({
        value: `aaa${this.tIndex}`,
        index: this.tIndex
      })
      this.tIndex++
    },
    delData () {
      this.dragData.pop()
    },
    beforeClose (aa) {
      console.log('xxxxxxxxxxxxxx')
      aa()
    },
    close () {
      console.log('close')
    },
    closed () {
      console.log('closed')
    },
    ttt () {
      alert(11)
    },
    uploadSelected (data) {
      console.log('选中文件', data)
    },
    uploadProgress (data) {
      console.log('上传进度:', data)
    },
    uploadLoad (data) {
      console.log('上传成功:', data)
    },
    uploadError (data) {
      console.log('上传失败:', data)
    },
    uploadOver () {
      console.log('上传完毕')
    },
    testCom () {
      this.show1 = true
      this.at = 1
    },
    testCom1 () {
      this.show1 = true
      this.at = 2
    },
    testFun () {
      Toast({
        header: `Notification Title${this.id++}`,
        content: 'I will never close automatically. I will be close automatically. I will never close automatically.',
        close: () => {
          console.log('close')
        },
        closed: () => {
          console.log('closed')
        }
      })
    }
  }
}
</script>

<style lang="scss">
.test-drag {
  margin: 20px 0 0 100px;
  width: 600px;
  height: 600px;
  overflow: auto;
  .custom-item {
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    border: 1px solid #dadada;
    border-bottom: 0;
    cursor: pointer;
  }
  .com-drag > div:nth-last-child(1) {
    border-bottom: 1px solid #dadada;
  }
}
.test-wrap {
  width: 600px;
  position: absolute;
  top: 10px;
  left: 20px;
  bottom: 10px;
  overflow: auto;
}
.test-wrap1 {
  width: 600px;
  position: absolute;
  top: 10px;
  left: 640px;
  bottom: 10px;
  overflow: auto;
}
.test-footer {
  padding: 10px 0;
}
.test-upload {
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1px solid #dadada;
}
</style>
