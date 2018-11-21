<template>
  <div class="btn-container">
    <div ref="target" class="btn-content">
      <a :target="value.target" :href="value.link | voidLink"><com-button v-if="value.enable" :styles="styles">{{value.text}}</com-button></a>
    </div>
    <com-edit ref="editTarget">
      <div class="nav-blank-title">按钮</div>
      <div class='button-item'>
        <label class="">按钮名称</label>
        <com-input placeholder="输入按钮名称" v-model="value.text"></com-input>
      </div>
      <div class='button-item clearfix'>
        <label>背景色</label>
        <el-color-picker show-alpha v-model="value.bgColor"></el-color-picker>
      </div>
      <div class='button-item clearfix'>
        <label>文字色</label>
        <el-color-picker show-alpha v-model="value.fontColor"></el-color-picker>
      </div>
      <div class='button-item'>
        <label class="">跳转链接</label>
        <com-input placeholder="跳转链接" :value.sync="value.link"></com-input>
        <span class='tips'>链接需要附带http头协议</span>
      </div>
      <div class='button-item clearfix spe'>
        <label class="label-spe-button" style="padding-top:0px;padding-right:10px;">打开方式</label>
        <el-radio v-model="value.target" label="_self">当前窗口</el-radio>
        <el-radio v-model="value.target" label="_blank">新窗口</el-radio>
      </div>
    </com-edit>
  </div>
</template>

<script>
import editMixin from './mixin'
import ComEdit from './edit'

export default {
  mixins: [editMixin],
  data () {
    return {

    }
  },
  components: {
    ComEdit
  },
  mounted () {

  },
  computed: {
    styles () {
      return {
        'background-color': this.value.bgColor,
        'color': this.value.fontColor
      }
    }
  }

}
</script>

<style scoped lang="scss">
@import 'assets/css/variable.scss';
.btn-container {
  display: block;
  position: relative;
  font-size: 14px;
  text-align: center;
  .nav-blank-title {
    text-align: center;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid rgba(226, 226, 226, 1);
    font-size: 18px;
    color: $color-font;
  }
  button {
    border: 0;
  }
  .button-item /deep/ {
    padding: 0 28px;
    padding-top: 20px;
    label {
      display: block;
      text-align: left;
      padding-bottom: 10px;
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
  }
  .spe {
    padding-top: 30px;
  }
  .com-button {
    width: 100%;
    height: 100%;
  }
}
</style>
