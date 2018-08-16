<!--新建/编辑活动-->
<template>
  <div>
    <p>直播标题：<com-input :value.sync="title" placeholder="请输入直播标题" :max-length="60" ></com-input></p>
    <p>直播时间：
      <el-date-picker v-model="date" type="datetime" placeholder="选择日期时间" :picker-options="pickerOptions">
      </el-date-picker>
    </p>
    <p>直播封面：
      <com-upload
      accept="png|jpg|jpeg"
      actionUrl="/api/edu/database/doc-upload"
      inputName="resfile"
      :fileSize="uploadData.fileSize"
      @load="uploadLoad"
      @error="uploadError"
      @over="uploadOver"
      >
      <div class="upload-section">分辨率最大1920x1080，支持jpg、jpeg、png格式，文件大小不超过2M</div>
      </com-upload>
    </p>
    <p class='clearfix'>直播介绍：
      <ve-editer :height="editorData.height" @ready="editorReady" v-model='editorData.editorContent' @change='editorChange'></ve-editer>
    </p>
    <p><button @click='comfirm'>创建</button></p>
    <transition name='fade'>
      <div class="modal-cover" v-show='createdSuccess' @click="closeModal">
        <div class='created-modal'>
          <p>直播已创建成功，您可以</p>
          <div class="btm">
            <span><a>完善直播设置体验更多有趣的营销玩法</a></span>
            <span><a>进行直播测试对直播进行预演</a></span>
          </div>
          <p><a href="">返回直播列表</a></p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  import veEditer from 'components/ve-editer'
  export default {
    name: 'edit',
    data () {
      return {
        date: new Date(),
        title: '',
        editorData: {
          height: '200',
          editorContent: ''
        },
        id: this.$route.params.id,
        pickerOptions: {
          disabledDate (time) {
            return time.getTime() < Date.now() - 8.64e7
          }
        },
        createdSuccess: false,
        uploadData: {
        }
      }
    },
    created () {
      if (this.id) { // 编辑页面请求接口返回活动信息
        this.title = `${this.id}的标题`
        this.date = '2018-07-25 10:00'
      }
      this.uploadData = {
        fileSize: 2048
      }
    },
    methods: {
      editorChange (res) {
        console.log(`长度${res.text.length}`)
      },
      editorReady () {
        if (this.id) {
          // 编辑页面请求接口返回活动信息
          this.editorData.editorContent = '默认数据'
        }
      },
      comfirm () {
        // 提交数据
        let data = {
          date: this.date,
          title: this.title,
          img: '',
          desc: this.editorData.editorContent
        }
        console.log(data)
        this.createdSuccess = true
      },
      closeModal (e) {
        if (e.target.className !== 'created-modal') {
          this.createdSuccess = false
        }
      },
      uploadLoad (e) {
        console.log(e)
      },
      uploadError (e) {
        console.log(e)
        if (e.code === 503 && e.data[0].state === 'type-limit') {
          console.log('上传文件类型不匹配')
        } else {
          console.log('上传文件大小超出限制')
        }
      },
      uploadOver (e) {
        console.log(e)
      }
    },
    components: {
      veEditer
    }
  }
</script>

<style lang='scss' scoped>
@import '~assets/css/variable';
@import '~assets/css/base';
.modal-cover {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba($color: #000000, $alpha: 0.5);
}

.created-modal {
  width: 400px;
  height: 300px;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -150px;
  margin-left: -200px;
  background: white;
  border-radius: 10px;
  border: 1px solid #666;
  padding: 30px;
  text-align: center;
  .btm {
    padding: 20px 0;
  }
  span {
    cursor: pointer;
    display: inline-block;
    width: 150px;
  }
}
.upload-section {
  width: 150px;
  height: 150px;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  padding: 10px;
}
</style>
