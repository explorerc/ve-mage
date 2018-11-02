<template>
  <div class="com-import-box-wrap">
    <div class="com-modal"></div>
    <div class="com-import-box">
      <div class="header">
        <span class="title">批量导入</span>
        <button @click='close'><i class="iconfont icon-close"></i></button>
      </div>
      <div class="content" v-if='!importSuccess'>
        <div class="item clearfix">
          <p class='tips-box'>下载模版 <ve-tips :tip="'导入用户数据时，手机号码为必填项， 如果单行用户数据未输入手机号码， 该行数据将被忽略。'" :tipType="'html'" :type="'left'"></ve-tips></p>
        </div>
        <div class="item upload-box-item clearfix">
          <label class="label">上传封面:</label>
          <div class="upload-box" :class="{ 'error':fileEmpty }" @click='fileEmpty = false' >

            <com-upload
              accept="xlsx"
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
                <dd class='re-upload' @click='reUpload'>重新上传</dd>
                <dd>{{fileName}}</dd>
                <dd>检测到{{fileCount}}位用户</dd>
              </dl>
            </com-upload>
          </div>
        </div>
        <div class="item">
          <label class='label'>导入规则:</label>
          <el-radio v-model="radio" label="1">新建固定群组</el-radio>
          <el-radio v-model="radio" label="0">导入固定群组</el-radio>
        </div>
        <div class="tab-box">
          <div class="tab" v-if='radio === "1"'>
            <div class="item spe">
              <label class='label'>群组名称:</label>
              <com-input :value.sync="title" placeholder="输入固定群组名称" :max-length="10" class='inp' :class="{ 'error':titleEmpty }" @focus='titleEmpty = false'></com-input>
            </div>
            <div class="item spe">
              <label class='label'>群组描述:</label>
              <com-input type="textarea" :value.sync="describe" placeholder="输入群组描述" :max-length="30" class='inp inp-desc' :class="{ 'error':descEmpty }" @focus='descEmpty = false'></com-input>
            </div>
          </div>
          <div class="tab" v-else>
             <div class="item spe" @click='optSel = false'>
              <label class='label'>选择群组:</label>
              <el-select v-model="selval" placeholder="请选择" :class="{ 'error':optSel }" :disabled="groupId > 0">
                <el-option
                  v-for="item in groupData"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id">
                </el-option>
              </el-select>
            </div>
          </div>
        </div>
        <el-button round class='primary-button confirm' @click="addHandler">导入</el-button>
      </div>
      <div class="content import-success" v-else>
        <dl>
          <dt></dt>
          <dd>恭喜您，批量导入成功!</dd>
        </dl>
        <div class='tips'>
          <span>成功导入<i>{{importSuccessData.success}}</i>位</span>
          <span>错误用户<i>{{importSuccessData.error}}</i>位</span>
          <span>重复数据<i>{{importSuccessData.repeat.length}}</i><em>位</em></span>
        </div>
        <ul>
          <li v-for="item in importSuccessData.repeat" :key="item">{{item}}、</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import veTips from 'src/components/ve-msg-tips'
import ComUpload from 'src/components/common/upload/com'
import userManage from 'src/api/userManage-service'
export default {
  data () {
    return {
      title: '',
      describe: '',
      radio: '1',
      titleEmpty: false,
      descEmpty: false,
      fileEmpty: false,
      loading: false,
      optSel: false,
      importSuccess: false,
      importSuccessData: {
        success: 0,
        error: 0,
        repeat: [123, 123, 334334]
      },
      uploadStatus: 'beforeUpload',
      percentImg: 0,
      fileCount: 0,
      fileName: '',
      fileKey: '',
      errorTxt: '',
      groupData: [{
        id: '1',
        name: '黄金糕'
      }],
      selval: ''
    }
  },
  props: {
    groupId: {
      type: Number,
      default: 0
    }
  },
  mounted () {
    this.initGrouplist()
    if (this.groupId) {
      this.selval = this.groupId
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
      const obj = JSON.parse(data.data)
      if (obj.code === 200) {
        const fileObj = obj.data
        console.log(fileObj)
        this.fileCount = fileObj.num
        this.fileKey = fileObj.key
      } else {
        this.uploadStatus = 'beforeUpload'
        this.loading = false
        this.errorTxt = obj.msg
      }
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
    },
    addHandler () {
      if (this.verifyEmpty()) {
        const data = {
          type: this.radio,
          group_id: this.selval,
          key: this.fileKey,
          title: this.title,
          describe: this.describe
        }
        // console.log(data)
        this.groupImportData(data)
      }
    },
    verifyEmpty () {
      if (this.fileKey === '') {
        this.fileEmpty = true
        this.errorTxt = '请上传模版文件'
        return false
      }
      if (this.radio === '1') {
        if (!this.title.length) {
          this.titleEmpty = true
          return false
        }
        if (!this.describe.length) {
          this.descEmpty = true
          return false
        }
        return true
      } else {
        if (!this.selval) {
          this.optSel = true
          return false
        }
        this.title = ''
        this.desc = ''
        this.titleEmpty = false
        this.descEmpty = false
        return true
      }
    },
    groupImportData (res) {
      this.$post(userManage.POST_GROUP_IMPORT, res).then((res) => {
        console.log(res)
        this.importSuccess = true
        this.importSuccessData = {
          success: res.data.success,
          error: res.data.invalid,
          repeat: res.data.repeat
        }
      })
    },
    reUpload () {
      this.fileKey = ''
      this.uploadStatus = 'beforeUpload'
    },
    initGrouplist () {
      this.$get(userManage.GET_GROUP_LIST, {
        type: '2'
      }).then((res) => {
        console.log(res)
        this.groupData = this.reArrange(res.data.list)
      })
    },
    reArrange (array) {
      const arr = []
      array.forEach(item => {
        arr.push({
          id: item.group_id,
          name: item.title + `(${item.user_count})`
        })
      })
      return arr
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
    .el-select.error .el-input__inner {
      border-color: $color-error;
    }
    .confirm {
      position: absolute;
      bottom: 20px;
      right: 52px;
    }
  }
  .import-success {
    dl {
      text-align: center;
    }
    dt {
      width: 122px;
      height: 90px;
      margin: 0 auto;
      background: url('~assets/image/success@2x.png') no-repeat;
      background-size: contain;
      background-position: center;
    }
    dd {
      font-size: 24px;
      color: $color-font;
    }
    .tips {
      padding-top: 30px;
      padding-bottom: 10px;
      text-align: center;
      span {
        color: $color-font-sub;
        i {
          color: $color-font;
        }
        em {
          color: $color-error;
        }
      }
    }
    ul {
      background: rgba(245, 245, 245, 1);
      border-radius: 2px;
      padding: 10px;
      height: 220px;
      overflow: hidden;
      text-overflow: ellipsis;
      li {
        display: inline-block;
      }
    }
  }
  .com-input {
    width: 400px;
    &.error input,
    &.error textarea {
      border-color: $color-error;
    }
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
      &.error {
        border-color: $color-error;
      }
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
        dd.re-upload {
          position: absolute;
          top: 10px;
          right: 14px;
          font-size: 12px;
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
