<template>
  <div class="avatar-uploader">
    <el-upload
      action="https://jsonplaceholder.typicode.com/posts"
      accept="jpg/png"
      list-type="picture-card"
      :on-preview="handlePictureCardPreview"
      :before-upload="beforeUpload"
      :on-success="upLoadSuccess"
      :on-error="upLoadError"
      :data="{'user_id':16417756}"
      :limit="1">
      <div class="tip-box">
        <i class="el-icon-plus avatar-uploader-icon"></i>
        <span class="">分辨率最大1920x1080，支持jpg、jpeg、png格式，文件大小不超过2M</span>
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
    methods: {
      handlePictureCardPreview (file) {
        this.dialogImageUrl = file.url
        this.dialogVisible = true
      },
      beforeUpload (file) {
        console.log('beforeUpload')
        console.log(file)
        // const isJPG = file.type === 'image/jpeg'
        // const isLt2M = file.size / 1024 / 1024 < 2
        // if (!isJPG) {
        //   this.$message.error('上传头像图片只能是 JPG 格式!')
        // }
        // if (!isLt2M) {
        //   this.$message.error('上传头像图片大小不能超过 2MB!')
        // }
        // return isJPG && isLt2M
        return true
      },
      upLoadSuccess (response, file, fileList) {
        console.log('success')
        console.log(response)
        console.log(file)
      },
      upLoadError (file) {
        console.log('error')
        console.log(file)
      }
      // upLoadProgress (event, file, fileList) {
      //   console.log('upLoadProgress')
      //   console.log(event)
      //   console.log(file)
      //   console.log(fileList)
      // }
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
        margin: 10px;
      }
    }
  }
</style>
