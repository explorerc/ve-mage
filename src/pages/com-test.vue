<template>
  <div>
   <div class="test-wrap">
      <button @click="testCom">test1</button>
    <button @click="testFun">test2</button>
   </div>
    <com-notification v-show="show" :header="header" :content="content">
        <div slot="header">我是header</div>
        <p>我是content</p>
    </com-notification>
    <div class="test-wrap">
      <com-input :value.sync="outValue" placeholder="请输入公司名称" type="password" ></com-input>
    </div>
    <div class="test-wrap">
      <com-upload
      accept="png|jpg|jpeg|bmp|gif"
      uploadTxt="xxx"
      actionUrl="/api/edu/database/doc-upload"
      inputName="resfile"
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
  </div>
</template>

<script>
import testService from 'src/api/test'
import {Toast} from 'components/common/notification'

export default {
  data () {
    return {
      show: false,
      header: 'Notification Title',
      content: 'I will never close automatically. I will be close automatically. I will never close automatically.',
      id: 1,
      outValue: 'asd',
      exParams: {
        joinID: '123123'
      },
      fileSize: 10000
    }
  },
  created () {
    // this.$loading({target: '.test-wrap'})
    testService.login({
      username: 18513848725,
      password: 'm123123',
      type: 1,
      remeber: 1
    }).then((res) => {
      console.log('登陆成功')
    })
  },
  methods: {
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
      this.show = !this.show
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
