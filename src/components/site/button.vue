<template>
  <div class="btn-container">
    <div ref="target" class="btn-content">
      <a :target="value.target" :href="value.hrefType === '_sub' ? `${PC_HOST}subscribe/${id}` : value.link | voidLink"><com-button v-if="value.enable" :styles="styles">{{value.text}}</com-button></a>
    </div>
    <com-edit ref="editTarget">
      <div class="nav-blank-title">按钮</div>
      <div class='button-item'>
        <label class="">按钮名称</label>
        <com-input placeholder="输入按钮名称" v-model="value.text" :max-length='8'></com-input>
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
        <div class="radio-box">
          <el-radio v-model="value.hrefType" label="_sub">活动引导页链接</el-radio>
          <el-radio v-model="value.hrefType" label="_define">自定义链接</el-radio>
        </div>
        <com-input placeholder="跳转链接" :value="`${this.PC_HOST}subscribe/497371374`" :disabled="true" v-if="value.hrefType === '_sub'"></com-input>
        <com-input placeholder="跳转链接" @focus="inpError = ''" @blur="inpBlur(value.link)" :error-tips="inpError" :value.sync="value.link" v-else></com-input>
        <span class='tips' :class="{'errorTips':inpError.length > 0 && value.hrefType === '_define'}">链接需要附带http头协议</span>
      </div>
      <div class='button-item clearfix spe'>
        <label class="label-spe-button" style="padding-top:0px;padding-right:10px;">打开方式</label>
        <div class="radio-box">
          <el-radio v-model="value.target" label="_self">当前窗口</el-radio>
          <el-radio v-model="value.target" label="_blank">新窗口</el-radio>
        </div>
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
      inpError: '',
      id: this.$route.params.id,
      PC_HOST: process.env.PC_HOST
    }
  },
  components: {
    ComEdit
  },
  mounted () {

  },
  methods: {
    inpBlur (val) {
      if (val.length <= 0) {
        this.inpError = '请输入跳转链接'
      } else {
        const reg = /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/ // eslint-disable-line
        reg.test(val) ? this.inpError = '' : this.inpError = '请输入有效的链接以http://或https://开头'
      }
    }
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
  .btn-content {
    height: 100%;
  }
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
      &.errorTips {
        position: relative;
        top: 12px;
      }
    }

    .radio-box {
      .el-radio {
        margin: 0;
        margin: 8px 28px 17px 0;
      }
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
