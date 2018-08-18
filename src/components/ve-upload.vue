<template>
  <com-upload
    :accept="accept"
    actionUrl="/api/upload/do-upload"
    inputName="file"
    :fileSize="fileSize"
    @error="uploadError"
    @progress="uploadProgress"
    @load="uploadImgSuccess">
    <div class="upload-file-box" title="点击上传">
      <el-progress v-if="percentImg" type="circle" :percentage="percentImg"></el-progress>
      <i class="iconfont icon-jiahao"></i>
      <span>{{tipTxt}}</span>
      <div v-if="fileSrc||coverImg" class="upload-file-botton" @click.stop="deleteImage">删除</div>
      <transition name="fade">
        <div class="temp-img" v-if="fileSrc"
             :style="{backgroundImage:'url('+imgHost+'/'+fileSrc+')'}"></div>
        <div class="temp-img" v-if="!fileSrc && coverImg"
             :style="{backgroundImage:'url('+coverImg+')'}"></div>
      </transition>
    </div>
  </com-upload>
</template>

<script>
  import ComUpload from 'src/components/common/upload/com'

  export default {
    name: 've-upload',
    components: {ComUpload},
    data () {
      return {
        imgHost: '',
        fileSrc: '',
        coverImg: '',
        tipTxt: '',
        percentImg: 0
      }
    },
    props: {
      accept: {
        type: String,
        default: 'png|jpg|jpeg|bmp|gif|doc|mp4'
      },
      fileSize: {
        type: Number,
        default: 1024
      },
      defaultImg: {
        type: String,
        default: ''
      },
      title: {
        type: String,
        default: '上传文件'
      }
    },
    watch: {
      defaultImg: {
        handler (val) {
          this.coverImg = val
        },
        immediate: true
      },
      title: {
        handler (val) {
          this.tipTxt = val
        },
        immediate: true
      }
    },
    methods: {
      deleteImage () {
        this.coverImg = ''
        this.fileSrc = ''
        this.$emit('success', {
          name: '',
          host: ''
        })
      },
      uploadProgress (data) {
        this.percentImg = parseFloat(parseFloat(data.percent.replace('%', '')).toFixed(2))
        if (this.percentImg === 100) {
          this.percentImg = 0
        }
      },
      uploadImgSuccess (data) {
        const fildObj = JSON.parse(data.data).data
        if (fildObj.host) this.imgHost = fildObj.host
        if (fildObj.name) this.fileSrc = fildObj.name
        this.$emit('success', fildObj)
      },
      uploadError (data) {
        this.fileSrc = ''
        this.$emit('error', data)
      }
    }
  }
</script>

<style lang="scss" lang="scss">
  .fade-enter-active {
    transition: all .3s ease;
  }

  .fade-leave-active {
    transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .fade-enter, .fade-leave-to {
    transform: translateY(100%);
    opacity: 0;
  }

  .upload-file-box {
    position: relative;
    display: inline-block;
    width: 150px;
    height: 150px;
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    color: #999;
    text-align: center;
    overflow: hidden;
    .iconfont {
      display: inline-block;
      margin-top: 44px;
      font-size: 30px;
    }
    span {
      display: block;
    }
    .upload-file-botton {
      position: absolute;
      bottom: -30px;
      left: 0;
      height: 30px;
      width: 100%;
      line-height: 30px;
      background-color: rgba(0, 0, 0, 0.5);
      color: #fff;
      transition: bottom .5s;
      z-index: 10;
    }
    &:hover {
      transition: border .3s;
      opacity: .8;
      border-style: solid;
      .upload-file-botton {
        bottom: 0;
      }
    }
  }

  .upload-file-box {
    .temp-img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center center;
    }
    .el-progress--circle {
      margin-top: 12px;
    }
  }
</style>
