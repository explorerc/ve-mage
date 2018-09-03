<template>
  <div class="ve-upload-box">
    <div class="upload-img-box" v-if="fileSrc||(!fileSrc && coverImg)">
      <transition name="fade">
        <div class="temp-img" v-if="fileSrc"
             :style="{backgroundImage:'url('+imgHost+'/'+fileSrc+')'}"></div>
        <div class="temp-img" v-if="!fileSrc && coverImg"
             :style="{backgroundImage:'url('+coverImg+')'}"></div>
      </transition>
      <div class="over-upload">
        <span @click.stop="deleteImage">
          <i class="iconfont icon-icon-shanchu"></i>
          删除
        </span>
        <span @click.stop="overUpload">
          <i class="iconfont icon-yulanxuanzhuan"></i>
          重置
        </span>
      </div>
    </div>
    <com-upload
      :accept="accept"
      actionUrl="/api/upload/image"
      inputName="file"
      :fileSize="fileSize"
      @error="uploadError"
      @progress="uploadProgress"
      @load="uploadImgSuccess">
      <div class="upload-file-box" ref="uploadFile" title="点击上传" v-show="!(fileSrc||(!fileSrc && coverImg))">
        <i class="upload-icon"></i>
        <span v-if="!errorTxt">{{tipTxt}}</span>
        <span class="error-msg" v-else>{{errorTxt}}</span>
        <!--<el-progress v-if="percentImg" type="circle" :percentage="percentImg"></el-progress>-->
        <!--<i class="iconfont icon-jiahao"></i>-->
        <!--<span>{{tipTxt}}</span>-->
        <!--<div v-if="fileSrc||coverImg" class="upload-file-botton" @click.stop="deleteImage">删除</div>-->
        <!--<transition name="fade">-->
        <!--<div class="temp-img" v-if="fileSrc"-->
        <!--:style="{backgroundImage:'url('+imgHost+'/'+fileSrc+')'}"></div>-->
        <!--<div class="temp-img" v-if="!fileSrc && coverImg"-->
        <!--:style="{backgroundImage:'url('+coverImg+')'}"></div>-->
        <!--</transition>-->
      </div>
    </com-upload>
  </div>
</template>

<script>
  import ComUpload from 'src/components/common/upload/com'

  export default {
    name: 've-upload-image',
    components: { ComUpload },
    data () {
      return {
        imgHost: '',
        fileSrc: '',
        coverImg: '',
        tipTxt: '',
        percentImg: 0,
        errorTxt: ''
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
      },
      errorMsg: {
        type: String,
        default: ''
      }
    },
    watch: {
      errorMsg (value) {
        this.errorTxt = value
      },
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
        this.errorTxt = ''
        this.$emit('success', {
          name: '',
          host: ''
        })
      },
      overUpload () {
        this.$refs.uploadFile.click()
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
  transition: all 0.3s ease;
}

.fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.ve-upload-box {
  position: relative;
  width: 440px;
  height: 140px;
  border: 1px dashed #e2e2e2;
  border-radius: 4px;
  background-color: #f7f7f7;
  text-align: center;
  overflow: hidden;
  .upload-img-box {
    height: 100%;
    width: 249px;
    margin: 0 auto;
    background-color: #666666;
    overflow: hidden;
    cursor: pointer;
    .temp-img {
      width: 100%;
      height: 100%;
      background-position: center center;
      background-size: cover;
    }
    &:hover .over-upload {
      transition: top 0.3s, opacity 0.5s;
      top: -100%;
      opacity: 1;
    }
  }
  .upload-file-box {
    width: 400px;
    padding-bottom: 40px;
    cursor: pointer;
    span {
      font-size: 14px;
      line-height: 20px;
      color: #888;
      &.error-msg {
        color: #fc5659;
      }
    }
    .upload-icon {
      display: block;
      width: 55px;
      height: 43px;
      margin: 30px auto 10px auto;
      background-image: url('../assets/image/upload-icon.png');
    }
  }
  .over-upload {
    display: block;
    position: relative;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 3;
    top: 0;
    opacity: 0;
    span {
      display: inline-block;
      width: 34%;
      text-align: center;
      color: #fff;
      margin-top: 50px;
      .iconfont {
        display: block;
      }
      &:hover {
        color: #ccc;
      }
    }
  }
}

/*
  .upload-file-box {
    position: relative;
    display: inline-block;
    width: 90%;
    height: 100%;
    cursor: pointer;
    color: #999;
    text-align: center;
    overflow: hidden;
    .icon-jiahao {
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
  }*/
</style>
