<template>
  <div class="logo-container" v-if="value.enable">
    <div ref="target" class="logo-content">
      <a target="_blank" :href=" value.link | voidLink "><img class="left" :src="url"></a>
    </div>
    <com-edit ref="editTarget">
      <div class="nav-blank-title">LOGO</div>
<!-- <com-upload
      accept="png|jpg|jpeg|bmp|gif"
      uploadTxt="上传"
      actionUrl="/api/upload/image"
      inputName="file"
      :fileSize="2048"
      :exParams="{}"
      @load="uploadLoad"
      >
      </com-upload> -->
      <div class='img-upload-box'>
        <label class='normal'>上传图片</label>
        <ve-upload
        title="图片支持jpg、png、bmp格式 大小不超过2M"
        accept="png|jpg|bmp"
        :fileSize="2048"
        :errorMsg="uploadImgErrorMsg"
          @error="uploadError"
          @success="uploadImgSuccess">
        </ve-upload>
      </div>
      <div class='href-box'>
          <label class='normal'>跳转链接</label>
          <com-input placeholder="跳转链接" v-model="value.link"></com-input>
          <label class='tips'>链接需要附带http头协议</label>
      </div>
    </com-edit>
  </div>
</template>

<script>
import editMixin from './mixin'
import ComEdit from './edit'
import VeUpload from 'src/components/ve-upload-image'
export default {
  mixins: [editMixin],
  components: {
    ComEdit, VeUpload
  },
  data () {
    return {
      uploadImgErrorMsg: '',
      host: process.env.IMGHOST + '/'
    }
  },
  methods: {
    // uploadLoad (data) {
    //   let ret = JSON.parse(data.data)
    //   if (ret.code === 200) {
    //     this.value.url = `${ret.data.name}`
    //   }
    // },
    uploadImgSuccess (data) {
      // let ret = JSON.parse(data.data)
      // if (ret.code === 200) {
      this.value.url = `${data.name}`
      // }
    },
    uploadError (data) {
      console.log('上传失败:', data)
      this.uploadImgErrorMsg = data.msg
    }
  },
  computed: {
    url () {
      if (this.value.url.indexOf('mp') === 0) {
        return this.host + this.value.url
      } else {
        return this.value.url
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/css/variable.scss';
.logo-container /deep/ {
  display: inline-block;
  width: 100%;
  height: 100%;
  position: relative;
  .logo-content {
    width: 100%;
    height: 100%;
    display: inline-block;
    max-height: 100%;
    img {
      width: 100%;
      max-width: 100%;
      max-height: 100%;
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
    }
  }
  .img-upload-box,
  .href-box {
    padding: 0 28px;
  }
  .ve-upload-box {
    width: 300px;
    margin: 0 auto;
    .upload-file-box {
      width: 100%;
    }
  }
  label {
    display: inline-block;
    color: $color-font-sub;
    padding-bottom: 10px;
    font-size: 14px;
    &.tips {
      color: $color-gray;
      padding-top: 5px;
    }
    &.normal {
      padding: 20px 0 10px 0;
      display: block;
      color: $color-font-sub;
    }
  }
  .com-input {
    width: 100%;
  }
}
</style>
