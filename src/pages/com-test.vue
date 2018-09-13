<template>
  <div>
    <router-link to="/entry">bbbbb</router-link>
    <com-dialog
    :visible.sync="show1"
    header="提示"

    center
    :beforeClose="beforeClose"
    @close="close"
    @closed="closed"
    >
    <div v-if="at===1">
      <com-input type="input"></com-input>
    </div>
    <div v-else-if="at===2">
      <com-input type="password"></com-input>
    </div>
      <div class="test-footer" slot="footer">
        <com-button>取消</com-button>
        <com-button type="primary" :loading="true" @click="ttt">确定</com-button>
      </div>
    </com-dialog>
    <button @click="testCom">test1</button>
    <button @click="testCom1">test11</button>
   <div class="test-wrap" v-ComLoading="show1" com-loading-text="拼命加载中">
    <button @click="testFun">test2</button>
   </div>
    <com-notification v-show="show" :header="header" :content="content">
        <div slot="header">我是header</div>
        <p>我是content</p>
    </com-notification>
    <div class="test-wrap">
      <com-input :value.sync="outValue" placeholder="请输入公司名称" type="textarea" autosize :maxLength="50"></com-input>
    </div>
    <div class="test-wrap">
      <com-upload
      accept="png|jpg|jpeg|bmp|gif|mp4"
      uploadTxt="xxx"
      actionUrl="/api/upload/image"
      inputName="file"
      :fileSize="fileSize"
      :exParams="exParams"

      @selected="uploadSelected"
      @progress="uploadProgress"
      @load="uploadLoad"
      @error="uploadError"
      @over="uploadOver"
      >
      <div class="test-upload">我是自定义区域</div>
      </com-upload>
    </div>
    <div class="test-wrap" style="width:600px;height:400px;">
      <com-tabs :value.sync="tabValue">
       <com-tab label="用户管理" :index="1" >
       <div ><com-input :value.sync="outValue"></com-input><span>{{outValue}}</span></div></com-tab>
       <com-tab label="配置管理" :index="2" >配置管理的内容详情</com-tab>
       <com-tab label="xxxx" :index="3" >sdasdasdds</com-tab>
      </com-tabs>
    </div>
  </div>
</template>

<script>
// import testService from 'src/api/test'
import { Toast } from 'components/common/notification'

export default {
  data () {
    return {
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

<style>
.test-wrap {
  padding: 20px;
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
