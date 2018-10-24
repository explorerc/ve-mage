<template>
  <div class="ve-upload-box" v-ComLoading="loading">
    <div class="upload-img-box" v-if="fileSrc||(!fileSrc && coverImg)">
      <transition name="fade">
        <div>
          <span :class='{"csv-icon":true,"mp4-eror":errorTxt}'>.Csv</span>
          <span class="file-name">{{fileName}}</span>
          <p>{{percentImg}}%</p>
          <div class="percent-box">
            <span :style="{width:percentImg+'%'}"></span>
          </div>
          <span v-if="showHandler" class="upload-video upload-delete" @click="deleteImage">取消</span>
          <span v-if="!showHandler" class="upload-video upload-delete" @click="overUpload">重新上传</span>
        </div>

        <!-- <div class="temp-img" v-if="fileSrc"
              :style="{backgroundImage:'url('+imgHost+'/'+fileSrc+')'}"></div>
         <div class="temp-img" v-if="!fileSrc && coverImg"
              :style="{backgroundImage:'url('+coverImg+')'}"></div>-->

      </transition>
      <!-- <div class="over-upload">
       <span @click.stop="deleteImage">
         <i class="iconfont icon-icon-shanchu"></i>
         删除
       </span>
         <span @click.stop="overUpload">
         <i class="iconfont icon-yulanxuanzhuan"></i>
         重置
       </span>
       </div>-->
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
    name: 've-upload-group',
    components: { ComUpload },
    data () {
      return {
        fileName: '', // 文件名称
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
        default: 'csv'
      },
      fileSize: {
        type: Number,
        default: 1024
      },
      defaultFile: {
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
        if (value.length) {
          this.fileSrc = ''
          this.coverImg = ''
        }
      },
      defaultFile: {
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
      }
    },
    computed: {
      showHandler () {
        console.log(this.percentImg)
        if (this.percentImg === 0 || this.percentImg === 100) {
          return false
        } else {
          return true
        }
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
      selected () {
        console.log('selected')
        this.loading = true
      },
      uploadProgress (data) {
        console.log(data)
        this.loading = false
        // this.percentImg = parseFloat(parseFloat(data.percent.replace('%', '')).toFixed(2))

        // if (this.percentImg === 100) {
        //   this.percentImg = 0
        // }
        this.percentImg = 80
        console.log(this.percentImg)
      },
      uploadImgSuccess (data) {
        console.log(data)
        const fildObj = JSON.parse(data.data).data
        if (fildObj.host) this.imgHost = fildObj.host
        if (fildObj.name) this.fileSrc = fildObj.name
        this.fileName = data.name
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
          msg: msg
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
    height: 170px;
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
      width: 100%;
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
        top: -100%;
      }
      .csv-icon {
        display: block;
        width: 55px;
        height: 60px;
        margin: 18px auto 6px auto;
        background: url('../assets/image/upload_csv_icon@2x.png') center;
        background-size: cover;
        color: #fff;
        line-height: 80px;
      }
      .file-name {
        color: #222;
        overflow: hidden;
        width: 90%;
        height: 30px;
        display: block;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin: 0 auto;
      }
      .upload-video {
        position: absolute;
        top: 0;
        font-size: 12px;
        color: #555;
        &:hover {
          cursor: pointer;
          color: #ffd021;
        }
      }
      .upload-delete {
        right: 15px;
      }
      .percent-box {
        width: 100%;
        height: 5px;
        background-color: #ebeef5;
        position: absolute;
        bottom: 0;
        left: 0;
        span {
          height: 5px;
          display: block;
          background-color: #ffd021;
        }
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
        background-image: url('../assets/image/upload_group_icon.png');
        background-size: cover;
      }
    }
  }
</style>
