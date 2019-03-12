<template>
  <div class="block1-container" v-if="value.enable">
    <div ref="target" class="block1-content">
      <ul class="block1-group" :class="widthClass">
        <li class="block1-item" :class="item.type" v-for="(item,index) in value.list" :key="'block1_item'+index">
          <a :target="item.target" :href="item.hrefType === '_sub' ? `https:${PC_HOST}subscribe/${id}` : value.link | voidLink">
            <img v-if="item.img" class="img" :src="item.img.indexOf('mp')===0?host+item.img:item.img">
            <div class="block1-bg"></div>
            <div class="content"  v-html="item.content">
            </div>
            <!-- <com-font :class="{content:true,top:value.type==='top'}" :edit="edit" v-model="item.content"></com-font> -->
            <com-btn v-if="value.showBtn" :edit="false" v-model="item.btn"></com-btn>
          </a>
        </li>
      </ul>
    </div>
    <com-edit ref="editTarget" class="block1-edit">
      <div class="nav-blank-title">图组</div>
      <div class="add-nav-box">
        <span class='add-nav' @click="addBlock"><i class='iconfont icon-jiahao'></i>添加图组</span>
        <span class='tips' :class="{'error':outlen}">最多可添加{{max}}个图组</span>
      </div>
      <ul class="block1-edit-group">
        <li v-for="(item,index) in value.list" :key="'block1_edit_item'+index">
          <div class="block1-title" :class="{active:active===index}" @click="titleClick(index)">图组{{index+1}}<i @click.stop="removeClick(index)" class="del"></i><i class='el-submenu__icon-arrow el-icon-arrow-down arrow' ></i></div>
          <div class="block1-content" :class="{active:active===index}" >
            <label class='normal' style="padding-top:0;" v-show='value.showDir'>对齐方式</label>
            <div class='radio-box' v-show='value.showDir'>
              <!-- <el-radio v-model="item.type" label="top">图片上</el-radio> -->
              <!-- <el-radio v-model="item.type" label="bottom">图片下</el-radio> -->
              <el-radio v-model="item.type" label="right">图片右</el-radio>
              <el-radio v-model="item.type" label="left">图片左</el-radio>
            </div>
            <div class='img-upload-box'>
              <label class='normal'>上传图片</label>
              <ve-upload
              :title="item.imgDesc"
              accept="png|jpg|bmp|gif"
              :fileSize="2048"
              :errorMsg="item.uploadImgErrorMsg"
              :defaultImg="item.img.indexOf('mp')===0?host+item.img:item.img"
              @error="uploadError($event,index)"
              @success="uploadImgSuccess($event,index)">
              </ve-upload>
            </div>
            <!-- <span class="img-tips" v-html="item.imgDesc"></span> -->
            <label class='normal'>文字内容</label>
            <div>
               <com-editer class="font-editer" v-model="item.content" ></com-editer>
            </div>
            <div :class="{'hide':item.hideLink}">
              <label class='normal'>跳转链接</label>
              <div class="radio-box">
                <el-radio v-model="item.hrefType" label="_sub">活动引导页链接</el-radio>
                <el-radio v-model="item.hrefType" label="_define">自定义链接</el-radio>
              </div>
              <!-- <com-input placeholder="跳转链接" :value.sync="item.link"></com-input> -->
              <com-input placeholder="跳转链接" :value="`https:${PC_HOST}subscribe/${id}`" :disabled="true" v-if="item.hrefType === '_sub'"></com-input>
              <com-input placeholder="跳转链接" @focus="inpError = ''" @blur="inpBlur(item.link)" :error-tips="inpError" :value.sync="item.link" v-else></com-input>
              <label class='tips' :class="{'errorTips':inpError.length > 0 && item.hrefType === '_define'}">链接需要附带http头协议</label>
            </div>
            <div class='open-way clearfix' :class="{'hide':item.hideLink}">
              <label class='normal'>打开方式</label>
              <div class="radio-box">
                <el-radio v-model="item.target" label="_self">当前窗口</el-radio>
                <el-radio v-model="item.target" label="_blank">新窗口</el-radio>
              </div>
            </div>
            <div v-if='btn' class='clearfix show-btn'>
              <label class='normal'>是否显示按钮</label>
              <el-switch v-model="value.showBtn"></el-switch>
            </div>
            <div v-if="value.showBtn">
              <div class='button-item clearfix'>
                <label>按钮背景色</label>
                <el-color-picker show-alpha v-model="item.btn.bgColor"></el-color-picker>
              </div>
              <div class='button-item clearfix'>
                <label>按钮文字色</label>
                <el-color-picker show-alpha v-model="item.btn.fontColor"></el-color-picker>
              </div>
              <div class='button-item clearfix'>
                <com-input placeholder="按钮文字" v-model="item.btn.text"></com-input>
              </div>
               <div>
                <label class='normal'>跳转链接</label>
                <com-input placeholder="跳转链接" :value.sync="item.btn.link"></com-input>
                <label class='tips'>链接需要附带http头协议</label>
              </div>
              <div class='open-way clearfix'>
                <label class='normal'>按钮打开方式</label>
                <div class="radio-box">
                  <el-radio v-model="item.btn.target" label="_self">当前窗口</el-radio>
                  <el-radio v-model="item.btn.target" label="_blank">新窗口</el-radio>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </com-edit>
  </div>
</template>

<script>
import ComBtn from 'components/site/button'
import ComFont from 'components/site/font'
import ComEditer from 'src/components/ve-html5-editer'
import editMixin from './mixin'
import ComEdit from './edit'
import VeUpload from 'src/components/ve-upload-image'
export default {
  mixins: [editMixin],
  components: {
    ComEdit, ComEditer, ComBtn, ComFont, VeUpload
  },
  props: {
    min: {
      type: Number,
      default: 2
    },
    max: {
      type: Number,
      default: 4
    },
    btn: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      outlen: false,
      inpError: '',
      active: -1,
      newDesc: '',
      id: this.$route.params.id,
      PC_HOST: process.env.PC_HOST,
      uploadImgErrorMsg: '', // 上传图片错误提示
      host: process.env.IMGHOST + '/'
    }
  },
  mounted () {
    this.newDesc = this.value.list[0].imgDesc
  },
  methods: {
    inpBlur (val) {
      if (val.length <= 0) {
        this.inpError = '请输入跳转链接'
      } else {
        const reg = /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/ // eslint-disable-line
        reg.test(val) ? this.inpError = '' : this.inpError = '请输入有效的链接以http://或https://开头'
      }
    },
    addBlock () {
      let len = this.value.list.length
      if (len < this.max) {
        this.value.list.push({
          content: '',
          img: '',
          type: 'right',
          btn: {
            enable: true,
            text: '',
            bgColor: '',
            fontColor: '',
            target: '_self',
            hrefType: '_sub'
          },
          hrefType: '_sub',
          target: '_self',
          imgDesc: this.newDesc
        })
        this.active = len
      } else {
        this.outlen = true
      }
    },
    titleClick (index) {
      if (this.active !== index) {
        this.active = index
      } else {
        this.active = -1
      }
    },
    removeClick (index) {
      if (this.value.list.length > this.min) {
        this.outlen = false
        this.value.list.splice(index, 1)
      }
    },
    uploadLoad (data, index) {
      let ret = JSON.parse(data.data)
      if (ret.code === 200) {
        this.value.list[index].img = `${ret.data.name}`
      }
    },
    uploadImgSuccess (data, index) {
      // let ret = JSON.parse(data.data)
      this.value.list[index].img = `${data.name}`
      // let ret = JSON.parse(data.data)
      // if (ret.code === 200) {
      // if (this.value.bgType === 'img') {
      //   this.value.img = `${data.name}`
      // } else {
      //   this.value.video = `${data.name}`
      // }
      // this.analysisData(this.value)
      // }
    },
    uploadError (data, index) {
      console.log('上传失败:', data)
      // this.uploadImgErrorMsg = data.msg
      this.value.list[index].uploadImgErrorMsg = data.msg
    }
  },
  computed: {
    widthClass () {
      return `width${this.value.list.length}`
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/css/variable.scss';
.block1-container /deep/ {
  .img-tips {
    color: $color-gray;
    display: inline-block;
    width: 100%;
    text-align: left;
  }
  .img-upload-box {
    margin-bottom: 10px;
  }
  .nav-blank-title {
    text-align: center;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid rgba(226, 226, 226, 1);
    font-size: 18px;
    color: $color-font;
  }
  div.content a {
    color: $color-blue;
    text-decoration: underline;
  }
  position: relative;
  .block1-content {
    height: 100%;
    display: inline-block;
    position: relative;
    .block1-group {
      font-size: 0;
      .block1-item {
        cursor: pointer;
        display: inline-block;
        font-size: 14px;
        margin-right: 25px;
        position: relative;
        text-align: left;
        vertical-align: top;
        img {
          display: block;
        }
        .content {
          width: 100%;
          word-break: break-all;
        }
        &:last-child {
          margin-right: 0;
        }
        &.top {
          .content {
            text-align: justify;
            // position: absolute;
            // position: absolute;
            // left: 0;
            // top: 0;
          }
        }
        &.right {
          overflow: hidden;
          img {
            float: left;
          }
        }
        &.left {
          overflow: hidden;
          img {
            float: right;
          }
        }
      }
    }
    &.active {
      border-bottom: 1px solid #dadada;
      padding: 0 28px 10px 28px;
      height: auto;
      background: rgba(245, 245, 245, 1);
    }
    label {
      display: inline-block;
      color: $color-font-sub;
      padding-bottom: 10px;
      &.tips {
        color: $color-gray;
        position: relative;
        bottom: 13px;
        &.errorTips {
          position: relative;
          bottom: 0;
        }
      }
      &.el-radio {
        margin-right: 30px;
        margin-left: 4px;
        padding: 0;
      }
    }
    .com-input {
      width: 100%;
      margin-bottom: 20px;
    }
  }
  .block1-edit {
    // padding: 20px 5px;
    .add-btn {
      width: 100%;
      margin-bottom: 10px;
    }
    .block1-edit-group {
      border: 1px solid #dadada;
      border-bottom: 0;
      font-size: 14px;
      li {
        position: relative;
      }
      i.arrow {
        font-style: normal;
        top: 25px;
      }
      .del {
        width: 16px;
        height: 16px;
        position: absolute;
        right: 38px;
        top: 18px;
        background: url('~assets/image/site/del.png') no-repeat;
        background-size: contain;
        &:hover {
          background-image: url('~assets/image/site/del_hover.png');
        }
      }
      .radio-box {
        text-align: left;
        padding-top: 10px;
        padding-bottom: 10px;
      }
    }
    .block1-title {
      color: $color-font;
      cursor: pointer;
      width: 100%;
      height: 50px;
      line-height: 50px;
      text-align: left;
      padding: 0 28px;
      font-size: 14px;
      font-weight: 600;
      border-bottom: 1px solid #dadada;
      .icon-close {
        float: right;
        padding-right: 10px;
      }
      &.active {
        border-bottom: none;
        background-color: whitesmoke;
        i.arrow {
          -webkit-transform: rotateZ(180deg);
          transform: rotateZ(180deg);
        }
      }
    }
    .block1-content {
      display: none;
      overflow: hidden;
      transition: all 0.3s;
      &.active {
        border-bottom: 1px solid #dadada;
        padding: 0 28px 10px 28px;
        display: block;
      }
      .com-input {
        width: 100%;
        margin-bottom: 20px;
      }
    }
    .html-editer {
      min-width: auto;
    }
    .vue-html5-editor {
      width: 300px;
      li {
        padding: 0 6px;
      }
      li[title='列表'],
      li[title='图片'],
      li[title='全屏'] {
        display: none;
      }
      .content {
        background-color: #dadada;
      }
    }
    .ve-upload-box,
    .upload-file-box {
      width: 300px;
    }
  }

  /* new added */

  label.normal {
    display: block;
    text-align: left;
    padding-top: 20px;
  }
  label.tips {
    display: block;
    text-align: left;
  }
  .show-btn {
    .el-switch {
      float: left;
      position: relative;
      top: 20px;
      left: 10px;
    }
    label.normal {
      float: left;
    }
  }
  .add-nav-box {
    padding: 20px 28px 16px 28px;
    span.tips {
      display: block;
      text-align: left;
      padding-top: 8px;
      color: $color-gray;
      font-size: 14px;
      &.error {
        color:$color-error;
      }
    }
    .add-nav {
      display: block;
      width: 300px;
      margin: 0 auto;
      text-align: center;
      line-height: 40px;
      height: 40px;
      border-radius: 4px;
      border: 1px dashed rgba(151, 151, 151, 1);
      color: $color-font-sub;
      font-size: 14px;
      cursor: pointer;
      .iconfont {
        color: $color-font-sub;
        font-size: 17px;
        position: relative;
        top: 1px;
        right: 2px;
      }
      &:hover {
        color: $color-blue-hover;
        border-color: $color-blue-hover;
        .iconfont {
          color: $color-blue-hover;
        }
      }
    }
  }
  .open-way {
    .normal {
      padding: 0;
      padding-right: 10px;
    }
    .el-radio {
      float: left;
      position: relative;
      top: 3px;
    }
  }
  .button-item /deep/ {
    padding: 0 28px;
    padding-top: 20px;
    label {
      display: block;
      text-align: left;
      padding-bottom: 10px;
      padding-top: 10px;
    }
    .com-input {
      width: 100%;
    }
    .el-color-picker {
      display: block;
      float: left;
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
    .label-spe-button {
      float: left;
    }
    .el-radio {
      margin-top: 3px;
      padding: 0;
      margin-left: 30px;
      display: inline-block;
      float: left;
    }
    span.tips {
      text-align: left;
      display: block;
      padding-top: 8px;
      color: $color-gray;
      font-size: 14px;
    }
    .com-input {
      margin-top: 10px;
    }
  }
}
</style>
