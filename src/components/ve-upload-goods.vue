<template>
  <div class="ve-upload-box" v-ComLoading="loading">
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
        <span @click.stop="overPlus">
          <i class="iconfont icon-fangda"></i>
          放大
        </span>
      </div>
    </div>
    <div class="big-img" v-if="isShowBigImg">
      <span @click="isShowBigImg = false" class="el-icon-circle-close"></span>
      <!--:style="{backgroundImage:'url('+imgHost+'/'+fileSrc+')'+'?x-oss-process=image/resize,m_pad,h_500,w_500'}"-->
      <div>
        <img :src="`${imgHost}/${fileSrc}?x-oss-process=image/resize,m_pad,h_500,w_500`" alt="">
      </div>
    </div>
    <com-upload
      :accept="accept"
      actionUrl="/api/upload/image"
      inputName="file"
      :fileSize="fileSize"
      @error="uploadError"
      @selected="selected"
      @progress="uploadProgress"
      @load="uploadImgSuccess">
      <div class="upload-file-box" ref="uploadFile" title="点击上传" v-show="!(fileSrc||(!fileSrc && coverImg))">
        <i class="upload-icon"></i>
        <span v-if="!errorTxt" v-html="tipTxt"></span>
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
        isShowBigImg: false,
        imgHost: '',
        fileSrc: '',
        coverImg: '',
        tipTxt: '',
        percentImg: 0,
        errorTxt: '',
        loading: false
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
      },
      nowIndex: {
        type: Number,
        default: 0
      },
      initImg: {
        type: String,
        default: ''
      }
    },
    watch: {
      errorMsg (value) {
        this.errorTxt = value
        if (value.length) {
          this.fileSrc = ''
          this.coverImg = ''
        }
      },
      defaultImg: {
        handler (val) {
          this.coverImg = val
          if (!val) {
            this.fileSrc = ''
          }
        },
        immediate: true
      },
      title: {
        handler (val) {
          this.tipTxt = val
        },
        immediate: true
      },
      initImg: {
        handler (val) {
          this.imgHost = this.$imgHost
          this.fileSrc = val
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
          host: '',
          nowIndex: this.nowIndex,
          isDelete: true
        })
      },
      overUpload () {
        this.$refs.uploadFile.click()
      },
      overPlus () {
        this.isShowBigImg = true
      },
      selected () {
        this.loading = true
      },
      uploadProgress (data) {
        this.loading = false
        this.percentImg = parseFloat(parseFloat(data.percent.replace('%', '')).toFixed(2))
        if (this.percentImg === 100) {
          this.percentImg = 0
        }
      },
      uploadImgSuccess (data) {
        const fildObj = JSON.parse(data.data).data
        if (fildObj.host) this.imgHost = fildObj.host
        if (fildObj.name) this.fileSrc = fildObj.name
        fildObj.nowIndex = this.nowIndex
        this.$emit('success', fildObj)
      },
      uploadError (data) {
        this.loading = false
        const state = data.data[0].state
        let msg = ''
        if (state === 'size-limit') {
          msg = '上传图片过大'
        } else if (state === 'type-limit') {
          msg = '不支持该格式，请重新上传'
        } else {
          msg = '图片上传失败'
        }
        this.fileSrc = ''
        this.coverImg = ''
        this.$emit('error', {
          type: state,
          msg: msg,
          nowIndex: this.nowIndex
        })
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
    height: 40px;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 3;
    top: 0;
    span {
      display: inline-block;
      width: 25%;
      text-align: center;
      color: #fff;
      /*margin-top: 50px;*/
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
    overflow: hidden;
    cursor: pointer;
    .temp-img {
      width: 100%;
      height: 100%;
      background-position: center center;
      background-size: cover;
    }
    &:hover .over-upload {
      transition: top 0.3s;
      top: -30%;
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
        color: #fc5659 !important;
      }
    }
    .upload-icon {
      display: block;
      width: 60px;
      height: 60px;
      margin: 20px auto 0px auto;
      background-image: url('../assets/image/upload-image-icon@2x.png');
      background-size: cover;
    }
  }
  .big-img {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    span {
      color: white;
      font-size: 50px;
      position: absolute;
      top: 100px;
      right: 100px;
      cursor: pointer;
    }
    div {
      width: 500px;
      height: 500px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-size: cover;
    }
  }
}
</style>
