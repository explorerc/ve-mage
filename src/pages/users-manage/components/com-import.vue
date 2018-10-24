<template>
  <div class="com-import-box-wrap">
    <div class="com-modal"></div>
    <div class="com-import-box">
      <div class="header">
        <span class="title">批量导入</span>
        <button @click='close'><i class="iconfont icon-close"></i></button>
      </div>
      <div class="content">
        <div class="item clearfix">
          <p class='tips-box'>下载模版 <ve-tips :tip="'导入用户数据时，手机号码为必填项， 如果单行用户数据未输入手机号码， 该行数据将被忽略。'" :tipType="'html'" :type="'left'"></ve-tips></p>
        </div>
        <div class="item upload-box-item clearfix">
          <label class="label">上传封面:</label>
          <div class="upload-box">

            <com-upload
              :accept="'csv'"
              :fileSize="1024"
              actionUrl="/api/common/group/import"
              inputName="file"
              @error="uploadError"
              @selected="selected"
              @progress="uploadProgress"
              @load="uploadSuccess">
              <dl class='dl'  ref="uploadFile" title="点击上传" v-if='uploadStatus === "beforeUpload"'>
                <dt></dt>
                <dd v-if="!errorTxt" >请使用csv模版上传</dd>
                <dd class="error-msg" v-else>{{errorTxt}}</dd>
              </dl>
              <dl class='uploading' v-if='uploadStatus === "uploading"'>
                <dt></dt>
                <dd>{{percentImg}}</dd>
                <dd>{{fileName}}</dd>
                <dd class='progress'><i :style="{'width':percentImg}"></i></dd>
              </dl>
              <dl class='uploading' v-if='uploadStatus === "finishUpload"'>
                <dt></dt>
                <dd>{{fileName}}</dd>
                <dd>检测到38位用户</dd>
              </dl>
            </com-upload>
          </div>
        </div>
        <div class="item">
          <label class='label'>导入规则:</label>
          <el-radio v-model="radio" label="1">新建固定群组</el-radio>
          <el-radio v-model="radio" label="2">导入固定群组</el-radio>
        </div>
        <div class="tab-box">
          <div class="tab" v-if='radio === "1"'>
            <div class="item spe">
              <label class='label'>群组名称:</label>
              <com-input :value.sync="name" placeholder="输入固定群组名称" :max-length="10" class='inp' :class="{ 'error':titleEmpty }" @focus='titleEmpty = false'></com-input>
            </div>
            <div class="item spe">
              <label class='label'>群组描述:</label>
              <com-input type="textarea" :value.sync="desc" placeholder="输入群组描述" :max-length="10" class='inp inp-desc' :class="{ 'error':descEmpty }" @focus='descEmpty = false'></com-input>
            </div>
          </div>
          <div class="tab" v-else>
             <div class="item spe">
              <label class='label'>选择群组:</label>
              <el-select v-model="selval" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
          </div>
        </div>
        <el-button round class='primary-button confirm'>导入</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import veTips from 'src/components/ve-msg-tips'
import ComUpload from 'src/components/common/upload/com'
export default {
  data () {
    return {
      name: '',
      desc: '',
      radio: '1',
      titleEmpty: false,
      descEmpty: false,
      loading: false,
      uploadStatus: 'beforeUpload',
      percentImg: 0,
      fileName: '',
      errorTxt: '',
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      selval: ''
    }
  },
  methods: {
    close () {
      this.$emit('handleClick', {
        action: 'cancel'
      })
    },
    overUpload () {
      this.$refs.uploadFile.click()
    },
    selected (file) {
      console.log('selected')
      this.fileName = file.data[0].name
      this.loading = true
    },
    uploadProgress (data) {
      this.loading = false
      this.uploadStatus = 'uploading'
      this.percentImg = parseFloat(parseFloat(data.percent.replace('%', '')).toFixed(2))
      if (this.percentImg === 100) {
        this.percentImg = 0
      }
    },
    uploadSuccess (data) {
      this.uploadStatus = 'finishUpload'
      const fildObj = JSON.parse(data.data).data
      console.log(fildObj)
    },
    uploadError (data) {
      this.uploadStatus = 'beforeUpload'
      this.loading = false
      const state = data.data[0].state
      console.log(state)
      if (state === 'size-limit') {
        this.errorTxt = '上传图片过大'
      } else if (state === 'type-limit') {
        this.errorTxt = '不支持该格式，请重新上传'
      } else {
        this.errorTxt = '图片上传失败'
      }
    }
  },
  components: {
    veTips, ComUpload
  }
}
</script>

<style lang='scss' scoped>
@import '~assets/css/mixin.scss';
.com-modal {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.7;
  background: #000;
  z-index: 2001;
}
.com-import-box /deep/ {
  z-index: 2002;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -256px;
  margin-left: -286.5px;
  width: 573px;
  height: 512px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  .header {
    height: 40px;
    line-height: 40px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    background-color: #ffd021;
    padding: 0 20px;
    padding-bottom: 10px;
    text-align: left;
    button {
      position: absolute;
      top: 15px;
      right: 15px;
      padding: 0;
      border: none;
      outline: none;
      background: transparent;
      font-size: 14px;
      cursor: pointer;
      &:hover {
        opacity: 0.8;
      }
    }
    .icon-close {
      position: relative;
      top: -3px;
    }
  }
  .content {
    padding: 35px 40px;
    font-size: 14px;
    .label {
      color: $color-font-sub;
      width: 80px;
      padding-right: 15px;
    }
    .el-select .el-input__inner {
      border: 1px solid #e2e2e2;
      width: 400px;
    }
    .confirm {
      position: absolute;
      bottom: 20px;
      right: 52px;
    }
  }
  .com-input {
    width: 400px;
  }
  textarea {
    height: 68px;
  }
  .inp-desc {
    .limit.area {
      bottom: 9px;
      right: 5px;
    }
  }
  .item {
    margin-bottom: 20px;
    &.spe .label {
      float: left;
      height: 40px;
      line-height: 40px;
    }
    &.upload-box-item {
      .label {
        float: left;
      }
    }
    .tips-box {
      float: right;
      padding-right: 16px;
    }
    .upload-box {
      float: left;
      width: 400px;
      height: 140px;
      background: rgba(247, 247, 247, 1);
      border-radius: 4px;
      border: 1px dashed rgba(226, 226, 226, 1);
      cursor: pointer;
      position: relative;
      dl {
        width: 240px;
        height: 100px;
        margin: 20px auto;
        text-align: center;
        dt {
          width: 61px;
          height: 61px;
          margin: 0 auto;
          background: url('~assets/image/csv.jpg') no-repeat;
          background-position: center;
          background-size: contain;
        }
        dd {
          padding-top: 5px;
          color: $color-gray;
        }
        .progress {
          padding: 0;
          position: absolute;
          width: 100%;
          bottom: 0;
          left: 0;
          height: 4px;
          background: rgba(226, 226, 226, 1);
          i {
            position: absolute;
            top: 0;
            left: 0;
            border-radius: 2px;
            height: 100%;
            background: rgba(255, 208, 33, 1);
          }
        }
      }
      .com-upload {
        width: 100%;
        height: 100%;
        .error-msg {
          color: $color-error;
        }
      }
    }
  }
}
</style>
