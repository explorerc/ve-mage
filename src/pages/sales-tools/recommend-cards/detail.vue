<template>
  <div class='wrap-page'>
    <div class="page-title">
      <span class="title">{{cardId === 'new' ? '创建' :'编辑'}}卡片</span>
    </div>
    <div class="content from-box">
      <div class="from-row">
        <div class="from-title"><i class="star">*</i>卡片名称：</div>
        <div class="from-content">
          <com-input :value.sync="title" placeholder="请输入卡片名称" :max-length="15" :error-tips='titleError' @focus="titleError=''"></com-input>
        </div>
      </div>
      <div class="from-row">
        <div class="from-title"><i class="star">*</i>卡片图片：</div>
        <div class="from-content">
          <ve-upload title="图片小于2MB 支持jpg、gif、png、bmp格式，最佳尺寸600*600" accept="gif|png|jpg|jpeg|bmp" :defaultImg="defaultImg" :fileSize="2048" :errorMsg="uploadImgErrorMsg" @error="uploadError" @success="uploadImgSuccess"></ve-upload>
        </div>
      </div>
      <div class="from-row">
        <div class="from-title"><i class="star">*</i>卡片描述：</div>
        <div class="from-content">
              <com-input type="textarea"
                         class="msg-content"
                         :value.sync="desc"
                         placeholder="请输入卡片描述"
                         :max-length="100"
                         :error-tips='descError'></com-input>
        </div>
      </div>
      <div class="from-row">
        <div class="from-title">显示按钮：</div>
        <div class="from-content switch-box">
          <el-switch  class='switch' v-model="btnSwitch" inactive-color="#DEE1FF" :width="32" active-color="#FFD021" @change="switchChange()"></el-switch>
        </div>
      </div>
      <div class="from-row" v-if="btnSwitch">
        <div class="from-title"><i class="star">*</i>按钮文案：</div>
        <div class="from-content">
          <com-input :value.sync="btnTxt" placeholder="请输入按钮文案" :max-length="6"></com-input>
        </div>
      </div>
      <div class="from-row" v-if="btnSwitch">
        <div class="from-title"><i class="star">*</i>按钮链接：</div>
        <div class="from-content">
          <com-input :value.sync="btnLink" placeholder="请输入按钮链接"></com-input>
        </div>
      </div>
      <div class="from-row">
        <div class="from-title"></div>
        <div class="from-content btn-box">
          <el-button class='primary-button'>保存</el-button>
        </div>
      </div>
      <div class="overview">
        <dl>
          <dt>
            <div class="img" v-if="!poster.length">封面图</div>
            <img class="img" :src="`${imgHost}/${poster}`" v-else>
          </dt>
          <dd class='desc'>{{desc}}</dd>
          <dd v-if="btnSwitch"><router-link :to="btnLink" target="_blank"><el-button class='primary-button'>{{btnTxt}}</el-button></router-link></dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
  import VeUpload from 'src/components/ve-upload-image'
  export default {
    data () {
      return {
        title: '',
        titleError: '',
        img: '',
        desc: '',
        descError: '',
        btnSwitch: false,
        btnTxt: '',
        btnLink: '',
        poster: '',
        imgHost: process.env.IMGHOST + '/',
        uploadImgErrorMsg: '',
        cardId: this.$route.query.cardId
      }
    },
    methods: {
      uploadImgSuccess (data) {
        this.poster = data.name
      },
      uploadError (data) {
        console.log('上传失败:', data)
        this.uploadImgErrorMsg = data.msg
      },
      switchChange (res) {

      }
    },
    computed: {
      defaultImg () {
        return this.poster ? `${this.$imgHost}/${this.poster}` : ''
      }
    },
    components: {
      VeUpload
    }
  }
</script>

<style lang='scss' scope>
@import '~assets/css/mixin.scss';
@import './common.scss';
.from-row {
  display: flex;
  padding: 12px;
  .from-title {
    width: 180px;
    text-align: right;
    padding-right: 20px;
    color: #555;
    line-height: 40px;
    .star {
      position: relative;
      top: 3px;
      color: $color-red;
      padding-right: 5px;
    }
  }
  .error /deep/ {
    .el-input__inner {
      border: 1px solid $color-red;
    }
    .default-button {
      border: 1px solid $color-red;
    }
  }
  .from-content {
    position: relative;
    flex: 1;
    .error-msg {
      display: block;
      color: $color-red;
      margin-left: 10px;
    }
    .input-box {
      width: 400px;
    }
    .from-msg-tip {
      position: absolute;
      top: -2px;
      width: 100%;
      left: 200px;
    }
    &.switch-box {
      line-height: 40px;
    }
    .msg-content {
      width: 440px;
      height: 200px;
      .limit.area {
        right: 12px;
        bottom: 10px;
      }
    }
    &.btn-box {
      // text-align: center;
    }
  }
}
.content {
  position: relative;
  .overview {
    text-align: center;
    position: absolute;
    padding: 30px;
    top: 100px;
    right: 100px;
    width: 300px;
    height: 400px;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    .img {
      width: 200px;
      height: 200px;
      border: 1px solid #d9d9d9;
      border-radius: 4px;
      margin: 0 auto;
    }
    .desc {
      padding: 20px 0;
    }
  }
}
</style>
