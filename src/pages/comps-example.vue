<template>
  <div CLASS="container">
    <div style="margin-top: 10px;">
      <!--上传文件组件-->
      <ve-upload
        limit-type="jpg|jpeg|png"
        :img-upload-url="uploadUrl"
        :file-size="fileSize"
        tips="分辨率最大1920x1080，支持jpg、jpeg、png格式，文件大小不超过2M"
        @success="upLoadSuccess"
        @error="upLoadError"/>
    </div>
    <div style="margin-top: 10px;">
    </div>
  </div>
</template>

<script>
  import veUpload from 'src/components/ve-upload-image'

  export default {
    name: 'comps-example',
    data () {
      return {
        inputValue: '',
        fileSize: 2048, // 文件大小，单位k
        uploadUrl: 'https://jsonplaceholder.typicode.com/posts/',
        editerContent: ''
      }
    },
    components: {veUpload},
    methods: {
      upLoadSuccess (response, file) {
        console.log('success')
        console.log(response)
        console.log(file)
      },
      upLoadError (e) {
        console.log('error')
        console.log(e)
      },
      editerBlur (e) {
        console.log('编辑器失焦')
      },
      editerFocus (e) {
        console.log('编辑器聚焦')
      },
      editorChange (e) {
        console.log('编辑器内容改变事件:')
        console.log(e)
      },
      editorReady (e) {
        console.log('ready:编辑器准备完毕')
        console.log(e)
        this.editerContent = '<h1>Hello World!<h1>'
      }
    }
  }
</script>

<style lang="scss" scoped>
.container {
  padding: 10px;
}
</style>
