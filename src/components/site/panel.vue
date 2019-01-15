<template>
  <div class="panel-container" v-if="value.enable">
    <div ref="target" class="panel" >
      <div class="media-container" v-if="value.bgType==='video'" >
        <video  autoplay loop muted ></video>
      </div>
      <slot></slot>
    </div>
    <com-edit ref="editTarget">
      <div class="nav-blank-title">版块</div>
      <label class='label-spe' >版块背景</label>
      <com-tabs :value="value.bgType" :class='"custom"'>
       <com-tab index="color" >
         <div slot="label"><el-radio v-model="value.bgType" label="color">单色背景</el-radio></div>
         <div>
           <label class='normal'>背景颜色</label>
           <el-color-picker show-alpha v-model="value.color"></el-color-picker>
         </div>
       </com-tab>
       <com-tab index="img" >
          <div slot="label"><el-radio v-model="value.bgType" label="img">图片背景</el-radio></div>
          <div>
           <label class='normal'>上传图片</label>
            <!-- <com-upload
            accept="png|jpg|bmp"
            uploadTxt="上传"
            actionUrl="/api/upload/image"
            inputName="file"
            :fileSize="2048"
            :exParams="{}"
            @load="uploadLoad"
            >
            </com-upload> -->
            <ve-upload
            :title="value.imgDesc"
             accept="png|jpg|bmp|gif"
            :fileSize="2048"
            :defaultImg="value.img.indexOf('mp')===0?host+value.img:value.img"
            :errorMsg="uploadImgErrorMsg"
             @error="uploadError"
             @success="uploadImgSuccess">
             </ve-upload>
          </div>
       </com-tab>
       <com-tab index="video" v-if="!value.hideVideo">
          <label class='label-spe  label-spe-inner' >视频类型</label>
          <div slot="label"><el-radio v-model="value.bgType" label="video">视频背景</el-radio></div>
          <div>
            <com-tabs :value="value.videoType" :class='"inner-custom"' @change="">
              <com-tab index="upload" >
                <div slot="label"><el-radio v-model="value.videoType" label="upload">上传视频</el-radio></div>
                <div>
                  <label class='label-spe normal-inner'>上传视频</label>
                  <com-upload
                  accept="mp4"
                  uploadTxt="上传"
                  actionUrl="/api/upload/video"
                  inputName="file"
                  :fileSize="10240"
                  :exParams="{}"
                  @progress="progress"
                  @load="uploadLoad"
                  @success="uploadImgSuccess"
                  @error='uploadVideoError'
                  >
                  <div class='upload-video-box'>
                    <i class="upload-video-icon"></i>
                    <template v-if='isSet'>
                      <span class="desc">已设置</span>
                    </template>
                    <template v-else>
                      <span class='desc error' v-if='videoError.length'>{{videoError}}</span>
                      <span class='desc' v-else>{{videoDesc}}</span>
                      <span class="progress"><i  :style="{ 'width':pro }"></i></span>
                    </template>
                  </div>
                  </com-upload>
                </div>
              </com-tab>
              <com-tab index="url" >
                <div slot="label"><el-radio v-model="value.videoType" label="url">引用视频</el-radio></div>
                <div>
                  <label class='label-spe normal-inner'>引用视频</label>
                  <com-input :class='"video-inner"' placeholder="请输入视频URL" :value.sync="value.link"></com-input>
                  <label class="tips link">例如:https://cnstatic01.e.vhall.com/static/bg.mp4</label>
                </div>
              </com-tab>
           </com-tabs>
         </div>
       </com-tab>
      </com-tabs>
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
    ComEdit,
    VeUpload
  },
  data () {
    return {
      pro: '0%',
      uploadImgErrorMsg: '', // 上传图片错误提示
      videoError: '', // 上传视频错误u提示
      videoDesc: '视频仅支持mp4格式，文件大小不超过10M', // 视频描述
      isSet: false, // 是否已设置视频
      flag: true,
      host: process.env.IMGHOST + '/'
    }
  },
  mounted () {
    this.analysisData(this.value)
  },
  watch: {
    value: {
      handler (data) {
        if (data.bgType) {
          if (!this.value.color) {
            this.value.color = 'rgba(0, 0, 0, 1)'
          }
          this.$nextTick(() => {
            this.analysisData(this.value)
          })
        }
      },
      deep: true
    },
    color (value) {
      this.$refs.target.style.cssText = `background-color:${value}`
    },
    img (value) {
      this.$refs.target.style.cssText = `background-image:url(${value})`
    }
  },
  methods: {
    analysisData (data) {
      if (!this.$refs.target) return
      if (data.bgType === 'color') {
        this.$refs.target.style.cssText = `background-color:${data.color}`
      } else if ((data.bgType === 'img' && data.img) || data.delete) {
        this.$refs.target.style.cssText = `background-image:url(${data.img.indexOf('mp') === 0 ? this.host + data.img : data.img})`
      } else if (data.bgType === 'video' && data.video) {
        this.$refs.target.style.cssText = ''
        if (data.videoType === 'upload') {
          if (!(/^(http|https|<iframe):\/\//.test(data.video))) {
            this.$refs.target.querySelector('.media-container video').setAttribute('src', `${data.video.indexOf('mp') === 0 ? this.host + data.video : data.video}`)
          }
          if (data.video && this.flag) {
            this.isSet = true
          } else {
            this.isSet = false
          }
        } else {
          if (/^(http|https):\/\//.test(data.video)) {
            this.$refs.target.querySelector('.media-container video').setAttribute('src', `${data.video}`)
          }
        }
      }
    },
    progress (data) {
      this.pro = data.percent
      this.videoError = ''
      this.isSet = false
      this.flag = false
      if (this.pro.replace('%', '') * 1 >= 100) {
        this.videoDesc = data.name + ' 上传成功！'
      }
    },
    uploadLoad (data) {
      let ret = JSON.parse(data.data)
      if (ret.code === 200) {
        // if (this.value.bgType === 'img') {
        //   this.value.img = `${ret.data.name}`
        // } else {
        this.value.video = `${ret.data.name}`
        // }
        this.analysisData(this.value)
      }
    },
    uploadImgSuccess (data) {
      // let ret = JSON.parse(data.data)
      // if (ret.code === 200) {
      if (this.value.bgType === 'img') {
        this.value.img = `${data.name}`
      } else {
        this.value.video = `${data.name}`
      }
      if (data.isDelete) {
        // 删除
        this.value.delete = true
      }
      this.analysisData(this.value)
      // }
    },
    uploadError (data) {
      console.log('上传失败:', data)
      this.uploadImgErrorMsg = data.msg
    },
    uploadVideoError (res) {
      this.isSet = false
      switch (res.data[0]['state']) {
        case 'size-limit':
          this.videoError = '文件超出限制大小'
          break
        case 'type-limit':
          this.videoError = '视频仅支持MP4格式'
          break
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import 'assets/css/variable.scss';
.panel-container /deep/ {
  position: relative;
  .panel {
    height: 100%;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-origin: border-box;
    .media-container {
      height: 100%;
      overflow: hidden;
      video {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
      }
      iframe {
        video {
          object-fit: cover;
        }
      }
    }
  }
  .label-spe {
    padding: 20px 0px 0 28px;
    font-size: 14px;
    color: $color-font-sub;
    float: left;
  }
  .label-spe-inner {
    padding-left: 0;
  }
  label.tips.link {
    color: $color-gray;
    position: relative;
    top: 13px;
    font-size: 14px;
    word-break: keep-all;
  }
  .nav-blank-title {
    text-align: center;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid rgba(226, 226, 226, 1);
    font-size: 18px;
    color: $color-font;
  }
}
.custom /deep/ {
  .tab-content {
    text-align: left;
  }
  .tab-header-wrap {
    padding-top: 10px;
    text-align: left;
    .tab-item {
      display: block;
      height: 30px;
    }
    .el-radio__label {
      color: $color-font;
    }
  }
  .tab-container {
    padding: 0 28px;
    border-top: 1px solid rgba(226, 226, 226, 1);
    label.normal {
      padding: 20px 0 10px 0;
      display: block;
      font-size: 14px;
      color: $color-font-sub;
    }
    .el-color-picker__trigger {
      width: 90px;
      height: 30px;
      border-radius: 4px;
      padding: 0;
      overflow: hidden;
      border: none;
      .el-color-picker__icon {
        display: none;
      }
    }
  }
  .ve-upload-box,
  .upload-file-box {
    width: 300px;
  }
  .inner-custom {
    .tab-header-wrap {
      .tab-item {
        display: inline-block;
      }
    }
    .tab-container {
      border: none;
      padding: 0;
    }
    .normal-inner {
      padding: 0;
      padding-bottom: 15px;
    }
    .video-inner {
      display: block;
      width: 100%;
    }
  }
}
.upload-video-box {
  cursor: pointer;
  width: 300px;
  height: 140px;
  border: 1px dashed #e2e2e2;
  border-radius: 4px;
  background-color: #f7f7f7;
  text-align: center;
  overflow: hidden;
  position: relative;
  .upload-video-icon {
    display: block;
    width: 60px;
    height: 60px;
    margin: 15px auto 10px auto;
    background-size: cover;
    background-image: url('~assets/image/upload-video-icon@2x.png');
  }
  span.desc {
    font-size: 14px;
    line-height: 20px;
    color: #888;
    font-size: 14px;
    &.error {
      color: $color-error;
    }
  }
  span.progress {
    bottom: 0;
    left: 0;
    position: absolute;
    width: 100%;
    height: 10px;
    background: white;
    i {
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-color: $color-default;
    }
  }
}
</style>
