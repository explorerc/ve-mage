<template>
  <div class='wrap-page card-page' @keydown="canPaas = false">
    <div class="page-title">
      <span class="title">{{cardId === 'new' ? '创建' :'编辑'}}卡片</span>
      <com-back :class='"back-btn"'></com-back>
    </div>
    <div class="tips-title">
      <i></i>注意：在推荐卡片中嵌入链接可能会导致观众跳转分流，请合理使用
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
          <ve-upload title="gif、jpg、png、bmp<br>大小不超过2M" accept="gif|png|jpg|bmp" :defaultImg="defaultImg" :fileSize="2048" :errorMsg="uploadImgErrorMsg" @error="uploadError" @success="uploadImgSuccess"></ve-upload>
        </div>
      </div>
      <div class="from-row">
        <div class="from-title">卡片描述：</div>
        <div class="from-content">
          <com-input type="textarea" class="msg-content" :value.sync="desc" placeholder="请输入卡片描述" :max-length="140"></com-input>
        </div>
      </div>
      <div class="from-row" style="padding:0 12px;">
        <div class="from-title">显示按钮：</div>
        <div class="from-content switch-box">
          <el-switch class='switch' v-model="btnSwitch" inactive-color="#DEE1FF" :width="32" active-color="#FFD021" @change="switchChange()"></el-switch>
        </div>
      </div>
      <div class="from-row" v-if="btnSwitch">
        <div class="from-title"><i class="star">*</i>按钮文案：</div>
        <div class="from-content">
          <com-input :value.sync="btnTxt" placeholder="请输入按钮文案" :max-length="6" :error-tips="btnTxtError" @focus="btnTxtError = ''"></com-input>
        </div>
      </div>
      <div class="from-row" v-if="btnSwitch">
        <div class="from-title"><i class="star">*</i>按钮链接：</div>
        <div class="from-content">
          <com-input :value.sync="btnLink" placeholder="请输入按钮链接" :error-tips="btnLinkError" @focus="btnLinkError = ''" :max-length="300"></com-input>
          <span class="tips" v-if="btnLinkError.length <= 0">链接需要附带http://或https://头协议</span>
        </div>
      </div>
      <div class="from-row">
        <div class="from-title"></div>
        <div class="from-content btn-box">
          <el-button class='primary-button save-btn' @click='save'>保存</el-button>
          <el-button class='default-button save-btn' @click='cancel'>取消</el-button>
        </div>
      </div>
      <div class="overview">
        <dl>
          <dt>
              <div class="img img-empty" v-if="!poster.length"></div>
            <div class="img cov_img" :style="{backgroundImage:`url(${$imgHost}/${poster})`}" v-else></div>
              <!--<img :src="`${imgHost}/${poster}?x-oss-process=image/resize,m_fill,h_200,w_240`">-->
            </dt>
          <dd class='desc' v-if="desc.length>0">{{desc}}</dd>
          <dd class='desc' v-else>此处是卡片描述，最多可添加140个字</dd>
          <dd class='btn-dd' v-if="btnSwitch">
            <router-link :to="btnLink" target="_blank">
              <el-button class='primary-button btn'>{{btnTxt.length>0 ? btnTxt:'按钮'}}</el-button>
            </router-link>
          </dd>
        </dl>
        <div class="tips">
          <p class="title">卡片预览</p>
          <!-- <p class="txt">功能说明：<br></p> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import VeUpload from 'src/components/ve-upload-image'
  import cardService from 'src/api/salesCards-service.js'
  import EventBus from 'src/utils/eventBus'
  export default {
    data () {
      return {
        activityId: this.$route.params.id,
        title: '',
        titleError: '',
        img: '',
        desc: '',
        btnSwitch: true,
        btnTxt: '',
        btnTxtError: '',
        btnLink: '',
        btnLinkError: '',
        poster: '',
        imgHost: process.env.IMGHOST + '/',
        uploadImgErrorMsg: '',
        cardId: this.$route.query.cardId,
        saveData: '',
        canSave: false,
        canPaas: true
      }
    },
    created () {
      EventBus.$emit('breads', [{
        title: '活动管理'
      }, {
        title: '活动列表',
        url: '/liveMager/list'
      }, {
        title: '活动详情',
        url: `/liveMager/detail/${this.$route.params.id}`
      }, {
        title: '推荐卡片',
        url: `/salesTools/recommendCards/${this.$route.params.id}`
      }, {
        title: this.cardId !== 'new' ? '编辑卡片' : '新建卡片'
      }])
    },
    mounted () {
      if (this.cardId !== 'new') {
        this.getDetail(this.cardId)
      }
    },
    methods: {
      save () {
        this.verify()
        if (!this.canSave) {
          return false
        }
        this.saveData = {
          activity_id: this.activityId,
          recommend_card_id: this.cardId === 'new' ? '' : this.cardId,
          title: this.title,
          pic: this.poster,
          desc: this.desc,
          btn_display: this.btnSwitch ? 'Y' : 'N',
          btn_text: this.btnTxt,
          btn_link: this.btnLink
        }
        if (this.cardId === 'new') { // 新建
          this.saveCard()
        } else { // 编辑
          this.updateCard()
        }
      },
      cancel () {
        window.history.go(-1)
      },
      uploadImgSuccess (data) {
        this.poster = data.name
      },
      uploadError (data) {
        console.log('上传失败:', data)
        this.uploadImgErrorMsg = data.msg
      },
      switchChange (res) {

      },
      saveCard () {
        this.$post(cardService.POST_CREATE_CARD, this.saveData).then((res) => {
          // this.$toast({
          //   content: '保存成功',
          //   position: 'center'
          // })
          this.canPaas = true
          this.$router.push(`/salesTools/recommendCards/${this.activityId}`)
        })
      },
      updateCard () {
        this.$post(cardService.POST_UPDATE_CARD, this.saveData).then((res) => {
          this.$toast({
            content: '更新成功',
            position: 'center'
          })
          this.canPaas = true
          setTimeout(() => {
            this.$router.push(`/salesTools/recommendCards/${this.activityId}`)
          }, 500)
        })
      },
      verify () {
        // const reg = new RegExp(/(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/) // eslint-disable-line
        const reg = /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/ // eslint-disable-line
        this.title.length ? this.titleError = '' : this.titleError = '请输入卡片名称'
        this.poster.length ? this.uploadImgErrorMsg = '' : this.uploadImgErrorMsg = '请上传卡片图片'
        if (this.btnSwitch) {
          this.btnTxt.length ? this.btnTxtError = '' : this.btnTxtError = '请输入按钮文案'
          reg.test(this.btnLink) ? this.btnLinkError = '' : this.btnLinkError = '请输入有效的链接以http://或https://开头'
        } else {
          this.canSave = false
        }
        if (this.title.length && this.poster.length) {
          if (this.btnSwitch) {
            if (this.btnTxt.length && !this.btnLinkError.length) {
              this.canSave = true
            } else {
              this.canSave = false
            }
          } else {
            this.canSave = true
          }
        } else {
          this.canSave = false
        }
      },
      getDetail (id) {
        this.$config({
          loading: true
        }).$get(cardService.GET_CARDS_DETAIL, {
          recommend_card_id: id
        }).then((res) => {
          this.title = res.data.title
          this.poster = res.data.pic
          this.btnSwitch = res.data.btn_display === 'Y'
          this.btnTxt = res.data.btn_text
          this.btnLink = res.data.btn_link
          this.desc = res.data.desc
        })
      }
    },
    /* 路由守卫，离开当前页面之前被调用 */
    beforeRouteLeave (to, from, next) {
      if (this.canPaas) {
        next(true)
        return false
      }
      this.$messageBox({
        header: '提示',
        width: '400px',
        content: '是否放弃当前编辑？',
        cancelText: '否',
        confirmText: '是',
        handleClick: (e) => {
          if (e.action === 'confirm') {
            next(true)
          } else {
            next(false)
          }
        }
      })
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
.card-page {
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
      .tips {
        display: block;
        padding-top: 5px;
        color: #555;
      }
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
        // .el-switch__core {
        //   height: 26px;
        //   border-radius: 38px;
        //   .el-switch__button {
        //     width: 22px;
        //     height: 22px;
        //   }
        // }
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
        text-align: center;
      }
      .ve-upload-box {
        width: 140px;
        .upload-img-box {
          width: 100%;
          .temp-img {
            background-size: 100%;
            background-repeat: no-repeat;
          }
        }
        .upload-file-box {
          width: 100%;
        }
      }
      .com-input {
        width: 440px;
        textarea::-webkit-input-placeholder {
          color: #888888;
          font-size: 14px;
        }
      }
    }
  }
  .content {
    position: relative;
    .overview {
      position: absolute;
      top: 40px;
      right: 123px;
      width: 280px;
      .img-empty {
        background: url('~assets/image/cards-group.jpg') no-repeat center;
        background-size: 140px 100px;
      }
    }
    .overview dl {
      text-align: center;
      padding: 20px;
      width: 100%;
      border: 1px solid #d9d9d9;
      border-radius: 4px;
      .img {
        width: 240px;
        height: 200px;
        border: 1px dashed #d9d9d9;
        border-radius: 4px;
        margin: 0 auto;
      }
      .cov_img {
        background: no-repeat center;
        background-size: cover;
      }
      .desc {
        padding: 20px 0;
        color: #888;
        word-break: break-all;
      }
      a:hover .btn {
        color: $color-font;
      }
      .btn {
        padding: 0;
        width: 180px;
        height: 32px;
        line-height: 32px;
        text-align: center;
      }
      .btn-dd {
        margin-top: 20px;
      }
    }
    .overview .tips {
      width: 100%;
      .title {
        color: $color-font;
        font-size: 18px;
        text-align: center;
        padding: 20px 0 10px 0;
      }
      .txt {
        color: #888;
        font-size: 14px;
        text-align: justify;
        line-height: 24px;
        padding: 0 10px;
      }
    }
    .btn-box {
      // text-align: center;
    }
    .save-btn {
      padding: 0;
      width: 160px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      &:hover span {
        color: $color-font;
      }
    }
  }
  .tips-title {
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    background: rgba(233, 235, 255, 1);
    border-radius: 4px;
    border: 1px solid rgba(129, 140, 254, 1);
    margin-bottom: 20px;
    i {
      width: 20px;
      height: 20px;
      display: inline-block;
      background: url('~assets/image/excal.svg') no-repeat;
      position: relative;
      top: 4px;
      right: 4px;
    }
  }
}
</style>
