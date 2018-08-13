<!--新建/编辑活动-->
<template>
  <div>
    <p>直播标题：<input type="text" placeholder="请输入直播标题"></p>
    <p>直播时间：
      <el-date-picker v-model="date" type="datetime" placeholder="选择日期时间" default-time="12:00:00">
      </el-date-picker>
    </p>
    <p>直播封面：
      <ve-upload :limitType="uploadData.type" :fileSize="uploadData.size" :tips="uploadData.uploadTips" @success="uploadSuccess" @error="uploadError"></ve-upload>
    </p>
    <!-- :imgUploadUrl="" -->
    <p class='clearfix'>直播介绍：
      <ve-editer :height="editorData.height" @ready="editorReady" v-model='editorData.editorContent' @change='editorChange'></ve-editer>
    </p>
    <p><button>创建</button></p>
  </div>
</template>

<script>
  import veUpload from '../../components/ve-upload'
  import veEditer from '../../components/ve-editer'
  export default {
    name: 'edit',
    data () {
      return {
        date: new Date(),
        uploadData: {
          size: 2048,
          type: 'jpg、jpeg、png',
          uploadTips: '分辨率最大1920x1080，支持jpg、jpeg、png格式，文件大小不超过2M'
        },
        editorData: {
          height: '400',
          editorContent: ''
        },
        id: this.$route.params.id
      }
    },
    created () {

    },
    methods: {
      uploadSuccess (res) {
        console.log(res)
      },
      uploadError (res) {
        console.log(res)
      },
      editorChange (res) {
        console.log(`长度${res.text.length}`)
      },
      editorReady () {
        if (this.id) {
          // 编辑页面请求接口返回活动信息
          this.editorData.editorContent = '默认数据'
        }
      }
    },
    components: {
      veUpload,
      veEditer
    }
  }
</script>

<style lang='scss' scoped>
@import '~assets/css/variable';
@import '~assets/css/base';
</style>
