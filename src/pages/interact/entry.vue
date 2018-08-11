<template>
  <div>
    <div id="entry" class="container">
      {{serverUrl}}<br>{{buildEnv}}
    </div>
    <div style="margin-top: 10px;">
      <!--上传文件组件-->
      <ve-upload
        limit-type="jpg|jpeg|png"
        :img-upload-url="uploadUrl"
        :file-size="fileSize"
        @success="upLoadSuccess"
        @error="upLoadError"/>
    </div>
    <div style="margin-top: 10px;">
      <!--富文本编辑器组件-->
      <ve-editer
        @blur="editerBlur"
        @focus="editerFocus"
        @change="editorChange"
        @ready="editorReady"
        :img-upload-url="uploadUrl"
        height="200"
        v-model="editerContent"></ve-editer>
    </div>
  </div>
</template>

<script>
  import testService from 'src/api/test'
  import veEditer from 'src/components/ve-editer'
  import veUpload from 'src/components/ve-upload'

  export default {
    data () {
      return {
        inputValue: '',
        fileSize: 2048, // 文件大小，单位k
        uploadUrl: 'https://jsonplaceholder.typicode.com/posts/',
        editerContent: '',
        serverUrl: process.env.API_PATH,
        buildEnv: process.env.BUILD_ENV
      }
    },
    components: {
      veEditer, veUpload
    },
    created () {
      testService
        .getCode({
          phone: 18513848725,
          captcha:
            '42TuGAgliNLndI-loStQLtehOfn_0tJa1TACs0-nk8_YXE.-CnEgbjVJdzc-VzF2cXAyM8MStg.Gn6N1hUZ5Qtoo2-PbvrU.rBpxt4N2peG0D_H0iLlyDf4zPZGXIghQLW-ing7zCJTw04PyyVPSYOpbSph2FIrrwbSi9-vomWAl2ShN0rteUNmTZd-s8GKaYICbKmL9nSBZslMScSnUUN0O5pjYBDdorUy.Ymu0EIVkTc1freLaVjDahN.MnFddXfHrTBhhqhQrpznwgWNiyqvt5NoFsbHUakOurLc.Db_ffjoT2GJZhENRxBSqINPJO8HQXCLfMhfr6TsK1SkZ4y.N6ztkdGwM_y8lB-_d479Pp0lZM.1lQ0pkSzPQsYu2mZTBbC0DkK8N1-wjHgKxdOHhZ5f9RaC9o-gTiJOVAQXqFTl6rL8J5XBUiplzt5AAFMfxgAVAeU_dVsYfqFF_oMu5Dm8JayN7PCjXmcU8XhwadYJqkD.sdeKPNSa3'
        })
        .then(res => {
          console.log(res)
        })
    },
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
