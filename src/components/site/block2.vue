<template>
  <div class="block2-container" v-if="value.enable">
    <div ref="target" class="block2-content">
      <el-carousel trigger="click" :class="widthClass" :autoplay="autoplay" :height="height" :interval="value.loop">
        <el-carousel-item :class="item.type"  v-for="(item,index) in value.list" :key="'block2_item_'+index">
          <a target="_black" :href="item.hrefType === '_sub' ? `${PC_HOST}subscribe/${id}` : value.link | voidLink" >
            <div v-if="item.bgColor" class="left-area" :style="{backgroundColor:item.bgColor}"></div>
            <img v-if="item.img" class="img" :src="item.img.indexOf('mp')===0?host+item.img:item.img">
            <div class="content"  >
              <div v-html="item.content"></div>
              <com-btn v-if="value.showBtn" :edit="editAble" v-model="item.btn"></com-btn>
            </div>
          </a>
        </el-carousel-item>
      </el-carousel>
    </div>
    <com-edit ref="editTarget" class="block2-edit">
      <div class="nav-blank-title">轮播图</div>
      <div class="add-nav-box">
        <span class='add-nav' @click="addBlock"><i class='iconfont icon-jiahao'></i>添加栏目</span>
        <span class='tips'>最多可添加5个栏目</span>
      </div>
      <ul class="block2-edit-group">
        <li v-for="(item,index) in value.list" :key="'block2_edit_item'+index">
          <div class="block2-title" :class="{active:active===index}" @click="titleClick(index)">栏目{{index+1}} <i @click.stop="removeClick(index)" class="del"></i><i class='el-submenu__icon-arrow el-icon-arrow-down arrow' ></i></div>
          <div class="block2-content" :class="{active:active===index}">
            <label class='normal' style="padding-top:0;" v-show='false'>对齐方式</label>
            <div class='radio-box' v-show='false'>
              <el-radio v-model="item.type" label="top">图片上</el-radio>
              <el-radio v-model="item.type" label="bottom">图片下</el-radio>
              <el-radio v-model="item.type" label="right">图片右</el-radio>
              <el-radio v-model="item.type" label="bottom">图片左</el-radio>
            </div>
            <div>
              <div class='button-item clearfix'>
                <label class='normal'>栏目背景颜色</label>
                <el-color-picker show-alpha v-model="item.bgColor"></el-color-picker>
              </div>
              <div class="img-upload-box">
                <label class='normal'>上传图片</label>
                <ve-upload
                title="图片支持jpg、png、bmp格式 大小不超过2M"
                accept="png|jpg|bmp"
                :fileSize="2048"
                :errorMsg="uploadImgErrorMsg"
                :defaultImg="item.img.indexOf('mp')===0?host+item.img:item.img"
                @error="uploadError($event,index)"
                @success="uploadImgSuccess($event,index)">
                </ve-upload>
              </div>
            </div>
            <label class='normal'>文字内容</label>
            <div>
                <com-editer class="font-editer" v-model="item.content" ></com-editer>
            </div>
            <div v-if='item.showLink'>
              <label class='normal'>跳转链接</label>
              <div class="radio-box">
                <el-radio v-model="item.hrefType" label="_sub">活动引导页链接</el-radio>
                <el-radio v-model="item.hrefType" label="_define">自定义链接</el-radio>
              </div>
              <com-input placeholder="跳转链接" v-model="item.link"></com-input>
              <label class='tips'>链接需要附带http头协议</label>
            </div>
             <div class='clearfix show-btn'>
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
                <div class="radio-box">
                  <el-radio v-model="item.btn.hrefType" label="_sub">活动引导页链接</el-radio>
                  <el-radio v-model="item.btn.hrefType" label="_define">自定义链接</el-radio>
                </div>
                <com-input placeholder="跳转链接" :value="`${PC_HOST}subscribe/${id}`" :disabled="true" v-if="item.btn.hrefType === '_sub'"></com-input>
                <com-input placeholder="跳转链接" @focus="inpError = ''" @blur="inpBlur(item.btn.link)" :error-tips="inpError" :value.sync="item.btn.link" v-else></com-input>
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
import ComEditer from 'src/components/ve-html5-editer'
import ComFont from 'components/site/font'
import editMixin from './mixin'
import ComEdit from './edit'
import VeUpload from 'src/components/ve-upload-image'
export default {
  mixins: [editMixin],
  components: {
    ComEdit, ComEditer, ComFont, ComBtn, VeUpload
  },
  props: {
    editAble: {
      type: Boolean,
      default: false
    },
    min: {
      type: Number,
      default: 2
    },
    max: {
      type: Number,
      default: 6
    },
    height: {
      type: String,
      default: '150px'
    }
  },
  data () {
    return {
      inpError: '',
      active: -1,
      id: this.$route.params.id,
      PC_HOST: process.env.PC_HOST,
      host: process.env.IMGHOST + '/',
      uploadImgErrorMsg: '', // 上传图片错误提示
      autoplay: false
    }
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
        const obj = {
          bgColor: '',
          btn: {},
          content: '',
          img: '',
          link: '',
          type: 'top',
          target: '_self'
        }
        this.value.list.push(obj)
        this.active = len
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
        this.value.list.splice(index, 1)
      }
    },
    uploadLoad (data, index) {
      let ret = JSON.parse(data.data)
      if (ret.code === 200) {
        this.value.list[index].img = `${ret.data.name}`
      }
    },
    hideHandle () {
      this.autoplay = true
    },
    showHandle (rect) {
      this.autoplay = false
    },
    uploadImgSuccess (data, index) {
      this.value.list[index].img = `${data.name}`
      // let ret = JSON.parse(data.data)
      // // if (ret.code === 200) {
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
      this.uploadImgErrorMsg = data.msg
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
.block2-container /deep/ {
  .radio-box {
    padding-bottom: 10px;
  }
  .nav-blank-title {
    text-align: center;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid rgba(226, 226, 226, 1);
    font-size: 18px;
    color: $color-font;
  }
  position: relative;
  .block2-content {
    width: 100%;
    display: inline-block;
    position: relative;
    .block1-group {
      font-size: 0;
      .block2-item {
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
            position: absolute;
            left: 0;
            top: 0;
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
      overflow-y: scroll !important;
    }
    label {
      display: inline-block;
      color: $color-font-sub;
      padding-bottom: 10px;
      &.tips {
        color: $color-gray;
        position: relative;
        bottom: 13px;
      }
      &.el-radio {
        margin-left: 4px;
        padding: 0;
      }
    }
    .com-input {
      width: 100%;
      margin-bottom: 20px;
    }
  }
  .block2-edit {
    .add-btn {
      width: 100%;
      margin-bottom: 10px;
    }
    .block2-edit-group {
      border: 1px solid #dadada;
      border-bottom: 0;
      font-size: 14px;
    }
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
    .block2-title {
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
    .block2-content {
      display: none;
      overflow: hidden;
      transition: all 0.3s;
      &.active {
        border-bottom: 1px solid #dadada;
        display: block;
      }
      .com-input {
        width: 100%;
        margin-bottom: 20px;
      }
      .ve-upload-box,
      .upload-file-box {
        width: 300px;
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
  } /* new added */

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
      float: left;
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
