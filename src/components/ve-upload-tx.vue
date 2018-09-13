<template>
  <div class="ve-upload-tx" @click.stop="overUpload">
    <div class="upload-img-box" v-if="fileSrc||(!fileSrc && coverImg)">
      <transition name="fade">
        <div class="temp-img" v-if="fileSrc"
             :style="{backgroundImage:'url('+imgHost+'/'+fileSrc+')'}"></div>
        <div class="temp-img" v-if="!fileSrc && coverImg"
             :style="{backgroundImage:'url('+coverImg+')'}"></div>
      </transition>
      <div class="over-upload">
        <span @click.stop="overUpload">
          编辑
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
      </div>
    </com-upload>
  </div>
</template>

<script>
  import ComUpload from 'src/components/common/upload/com'

  export default {
    name: 've-upload-tx',
    components: { ComUpload },
    data () {
      return {
        imgHost: '',
        fileSrc: '',
        coverImg: '',
        percentImg: 0
      }
    },
    props: {
      accept: {
        type: String,
        default: 'png|jpg|jpeg|bmp|gif'
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
      defaultImg: {
        handler (val) {
          this.coverImg = val
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
.ve-upload-tx {
  position: relative;
  width: 100px;
  height: 100px;
  border: 1px solid #e2e2e2;
  border-radius: 50%;
  text-align: center;
  overflow: hidden;
  box-sizing: border-box;
  background-image: url("../assets/image/avatar@2x.png");
  background-position: center center;
  background-size: cover;
  cursor: pointer;
  .upload-img-box {
    height: 100%;
    width: 100%;
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
      line-height: 100px;
      &:hover {
        color: #ccc;
      }
    }
  }
}
</style>
