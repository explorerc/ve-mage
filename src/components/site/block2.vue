<template>
  <div class="block2-container" v-if="value.enable">
    <div ref="target" class="block2-content">
      <el-carousel trigger="click" :class="widthClass" :autoplay="autoplay" :height="height" :interval="value.loop">
        <el-carousel-item :class="item.type"  v-for="(item,index) in value.list" :key="'block2_item_'+index">
          <a target="_black" :href="item.link | voidLink" >
            <div v-if="item.bgColor" class="left-area" :style="{backgroundColor:item.bgColor}"></div>
            <img v-if="item.img" class="img" :src="item.img.indexOf('mp')===0?host+item.img:item.img">
            <div class="content"  >
              <div v-html="item.content"></div>
              <com-btn v-if="value.showBtn" :edit="value.enable" v-model="item.btn"></com-btn>
            </div>
          </a>
        </el-carousel-item>
      </el-carousel>
    </div>
    <com-edit ref="editTarget" class="block2-edit">
      <div class="add-nav-box">
        <span class='add-nav' @click="addBlock"><i class='iconfont icon-jiahao'></i>添加栏目</span>
        <span class='tips'>最多可添加8个栏目</span>
      </div>
      <div>
         <el-checkbox v-model="value.showBtn">是否显示按钮</el-checkbox>
      </div>
      <ul class="block2-edit-group">
        <li v-for="(item,index) in value.list" :key="'block2_edit_item'+index">
          <div class="block2-title" @click="titleClick(index)">{{`栏目${index+1}`}}<i @click.stop="removeClick(index)"class="iconfont icon-close"></i></div>
          <div class="block2-content" :class="{active:active===index}">
            <div>
              <el-radio v-model="item.type" label="top">图片上</el-radio>
              <el-radio v-model="item.type" label="bottom">图片下</el-radio>
              <el-radio v-model="item.type" label="right">图片右</el-radio>
              <el-radio v-model="item.type" label="bottom">图片左</el-radio>
            </div>
            <div>
              <div>
                栏目颜色
                <el-color-picker show-alpha v-model="item.bgColor"></el-color-picker>
              </div>
              <com-upload
              accept="png|jpg|jpeg|bmp|gif"
              uploadTxt="上传"
              actionUrl="/api/upload/image"
              inputName="file"
              :fileSize="2048000"
              :exParams="{}"
              @load="uploadLoad($event,index)"
              >
              </com-upload>
            </div>
            <div>
                <com-editer class="font-editer" v-model="item.content" ></com-editer>
            </div>
            <div>
                <com-input placeholder="跳转链接" v-model="item.link"></com-input>
            </div>
            <div v-if="value.showBtn">
              <div>
                按钮背景色
                <el-color-picker show-alpha v-model="item.btn.bgColor"></el-color-picker>
              </div>
              <div>
                按钮文字色
                <el-color-picker show-alpha v-model="item.btn.fontColor"></el-color-picker>
              </div>
              <div>
                <com-input placeholder="按钮文字" v-model="item.btn.text"></com-input>
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
export default {
  mixins: [editMixin],
  components: {
    ComEdit, ComEditer, ComFont, ComBtn
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
    height: {
      type: String,
      default: '150px'
    }
  },
  data () {
    return {
      active: -1,
      host: process.env.IMGHOST + '/',
      autoplay: true
    }
  },
  methods: {
    addBlock () {
      let len = this.value.data.length
      if (len < 8) {
        this.value.data.push({
          content: ``,
          img: ''
        })
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
      if (this.value.data.length > 2) {
        this.value.data.splice(index, 1)
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
  position: relative;
  .block2-content {
    width: 100%;
    display: inline-block;
    position: relative;
    .block2-item {
      width: 100%;
      height: 100%;
      background-size: 100% 100%;
      background-origin: border-box;
      background-repeat: no-repeat;
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
    .block2-title {
      cursor: pointer;
      width: 100%;
      height: 35px;
      line-height: 35px;
      text-align: center;
      font-size: 14px;
      border-bottom: 1px solid #dadada;
      .icon-close {
        float: right;
        padding-right: 10px;
      }
    }
    .block2-content {
      display: none;
      overflow: hidden;
      transition: all 0.3s;
      &.active {
        border-bottom: 1px solid #dadada;
        padding: 20px 10px;
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
