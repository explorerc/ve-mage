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

<style lang="scss" scoped>
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
      width: 60px;
      height: 60px;
      margin: 20px auto 10px auto;
      background-image: url('./static/image/upload-image-icon@2x.png');
      background-size: cover;
    }
  }
}
</style>
