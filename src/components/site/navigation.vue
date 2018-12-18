<template>
  <div class="navigation-container" v-if="value.enable">
    <div ref="target" class="navigation-content">
      <ul class="nav-group">
        <li class="nav-item" v-for="(item,index) in value.data.list" :key="index">
          <a :style="{color:value.data.fontColor}" :target="item.type" :href="item.link | voidLink">{{item.text}}</a>
        </li>
      </ul>
    </div>
    <com-edit ref="editTarget" class="nav-edit">
      <div class="nav-blank-title">导航</div>
      <!-- <com-button class="add-btn" @click="addNav">添加导航</com-button> -->
      <div class="add-nav-box">
        <span class='add-nav' @click="addNav"><i class='iconfont icon-jiahao'></i>添加栏目</span>
        <span class='tips'>最多可添加8个栏目</span>
      </div>
      <ul class="nav-edit-group">
        <li v-for="(item,index) in value.data.list" :key="'a'+index">
          <div class="nav-title" :class="{active:active===index}" @click="titleClick(index)">{{item.text}}<i @click.stop="removeClick(index)"class="del"></i><i class='el-submenu__icon-arrow el-icon-arrow-down arrow' ></i></div>
          <div class="nav-content" :class="{active:active===index}">
            <div>
              <label>栏目名称</label>
              <com-input placeholder="输入栏目名称" :value.sync="item.text" :max-length="8" :error-tips="item.text.length <= 0 ? '请输入栏目名称' : ''"></com-input>
            </div>
            <div>
              <label>跳转链接</label>
              <com-input placeholder="输入跳转链接" @focus="inpError = ''" @blur="inpBlur(item.link)" :error-tips="inpError" :value.sync="item.link"></com-input>
              <label class='tips ' :class="{'errorTips':inpError.length > 0}">链接需要附带http头协议</label>
            </div>
            <div>
              <span style="margin-right:20px;margin-left:5px;">打开方式</span>
              <el-radio v-model="item.type" label="_blank">新窗口</el-radio>
              <el-radio v-model="item.type" label="_self">当前窗口</el-radio>
            </div>
          </div>
        </li>
      </ul>
      <div class='color-box'>
        文字色
        <el-color-picker show-alpha v-model="value.data.fontColor"></el-color-picker>
      </div>
    </com-edit>
  </div>
</template>

<script>
import editMixin from './mixin'
import ComEdit from './edit'
export default {
  mixins: [editMixin],
  components: {
    ComEdit
  },
  data () {
    return {
      active: -1,
      inpError: ''
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
    addNav () {
      let len = this.value.data.list.length
      if (len < 8) {
        this.value.data.list.push({
          text: `导航${len + 1}`,
          type: '_blank',
          link: ''
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
      if (this.value.data.list.length > 1) {
        this.value.data.list.splice(index, 1)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/css/variable.scss';
.navigation-container /deep/ {
  .navigation-content {
    height: 100%;
    li {
      cursor: pointer;
    }
  }
  .nav-edit {
    .nav-blank-title {
      text-align: center;
      height: 50px;
      line-height: 50px;
      border-bottom: 1px solid rgba(226, 226, 226, 1);
      font-size: 18px;
      color: $color-font;
    }
    .edit-content {
      // padding: 25px;
    }
    .add-btn {
      width: 100%;
      margin-bottom: 10px;
    }
    .add-nav-box {
      padding: 20px 28px 16px 28px;
      span.tips {
        display: inline-block;
        padding-top: 8px;
        color: $color-gray;
        font-size: 14px;
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
    .nav-edit-group {
      border: 1px solid #dadada;
      border-bottom: 0;
      font-size: 14px;
      li {
        position: relative;
      }
      i.arrow {
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
    }
    .nav-title {
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
    .nav-content {
      height: 0;
      overflow: hidden;
      transition: all 0.3s;
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
      }
      .com-input {
        width: 100%;
        margin-bottom: 20px;
      }
    }
    .color-box {
      height: 50px;
      line-height: 50px;
      padding: 0px 28px;
      color: $color-font;
      font-weight: 600;
      font-size: 14px;
      position: relative;
      .el-color-picker {
        top: 10px;
        right: 18px;
        position: absolute;
      }
      .el-color-picker__trigger {
        height: 30px;
        width: 240px;
      }
    }
  }
}
</style>
