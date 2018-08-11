<template>
  <div class="avatar-uploader">
    <el-upload
      :action="imgUploadUrl"
      list-type="picture-card"
      :on-preview="handlePictureCardPreview"
      :before-upload="beforeUpload"
      :on-success="upLoadSuccess"
      :on-error="upLoadError"
      :limit="1">
      <div class="tip-box">
        <i class="el-icon-plus avatar-uploader-icon"></i>
        <span>{{tips}}</span>
      </div>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: 've-upload',
    data () {
      return {
        value: '',
        dialogImageUrl: '',
        dialogVisible: false,
        fileList: []
      }
    },
    props: {
      limitType: {
        type: String,
        default: ''
      },
      fileSize: {
        type: Number,
        default: 0
      },
      imgUploadUrl: {
        type: String,
        default: ''
      },
      tips: {
        type: String,
        default: ''
      }
    },
    computed: {
      url () {
        console.log('computed=' + this.imgUploadUrl)
        return this.imgUploadUrl
      }
    },
    methods: {
      handlePictureCardPreview (file) {
        this.dialogImageUrl = file.url
        this.dialogVisible = true
      },
      beforeUpload (file) {
        const suffix = file.name.split('.')
        const nameSuffix = suffix[suffix.length - 1].toLowerCase()
        if (this.limitType && this.limitType.toLowerCase().indexOf(nameSuffix) === -1) {
          this.$message.error(`上传文件只能是${this.limitType}格式!`)
          return false
        }
        if (!this.fileSize) return true
        const isLt = file.size / 1024 > this.fileSize
        if (isLt) {
          const size = this.fileSize / 1024
          this.$message.error(`上传文件大小不能超过 ${size}MB!`)
          return false
        }
        return true
      },
      upLoadSuccess (response, file) {
        this.$emit('success', response, file)
      },
      upLoadError (e) {
        this.$message.error(`上传失败!`)
        e.detail = '上传失败!'
        this.$emit('error', e)
      }
    }
  }
</script>

<style lang="scss">
  .avatar-uploader {
    .el-upload {
      position: relative;
      border: 1px dashed #d9d9d9;
      border-radius: 6px;
      cursor: pointer;
      overflow: hidden;
      transition: border .3s;
    }
    .el-upload:hover {
      border-color: #409EFF;
    }
    .avatar-uploader-icon {
      font-size: 28px;
      color: #8c939d;
      text-align: center;
    }
    .tip-box {
      width: 100%;
      height: 100%;
      text-align: center;
      font-size: 12px;
      color: #666;
      line-height: 1.5;
      .el-icon-plus {
        margin: 20px auto 0 auto;
      }
      span {
        display: inline-block;
        margin: 8px;
      }
    }
  }
</style>
