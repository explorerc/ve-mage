<template>
  <div class="template-container">
    <div class="header">
      <div v-if="!ptid"
           class="title">{{title}}-
        <span>{{publishState}}</span>
      </div>
      <div class="back-btn-site" @click="goBack">
        <i class="iconfont icon-jiantou"></i>
      </div>
      <el-select v-if="!isPreview&&!ptid" v-model="cType"
                 class="type-select"
                 @change="changeType">
        <el-option v-for="item in options"
                   :key="item.value"
                   :label="item.label + item.status"
                   :value="item.value">
        </el-option>
      </el-select>
      <div class="preview-group"
           v-if="isPreview&&!ptid">
        <a @click="platform='PC'">电脑版</a>
        <a @click="platform='H5'">手机版</a>
        <a @click="editShare=true">分享</a>
        <div v-show="editShare"
             class="share-box">
          <div class="share-box-title">
            <i class="iconfont icon-close"
               @click="editShare=false"></i>
          </div>
          <div class="share-content">
            <div class="left">
              <span>分享到:</span>
              <div>
                <div class="icon share-sina"
                     @click="doSina">微博</div>
                <div class="icon share-qq"
                     @click="doQQ">QQ</div>
                <div class="icon share-qq-space"
                     @click="doQQSpace">QQ空间</div>
              </div>
            </div>
            <div class="right">
              <span>微信扫码分享：</span>
              <div class="img-bg">
                <img :src="`http://aliqr.e.vhall.com/qr.png?t=${this.mobileHost}site/${this.tid}`">
              </div>

            </div>
              <div class="bottom">
                <div class="label">观看地址</div>
                <com-input class="page-url"
                           :value="`${this.protocol+this.pcHOST}site/${this.tid}`"
                           disabled></com-input>
                <com-button @click="copyLink">复制</com-button>
              </div>
            </div>
          </div>
        </div>
        <!-- <a @click="doReset"
           class="reset"
           v-if="!isPreview&&!ptid&&cType==='tp'">重置</a>
        <a @click="doSave"
           class="save"
           v-if="!isPreview&&!ptid&&cType==='tp'">下一步</a>
        <a @click="doSaveTDK"
           class="save"
           v-if="!isPreview&&!ptid&&cType==='tdk'">保存</a> -->
    </div>
    <div class="template-content"
          v-show="cType==='tp'">
      <component v-if="platform==='PC'"
                  :editAble="!isPreview"
                  v-model="data"
                  v-bind:is="com"
                  :shareData='share'></component>
      <div v-if="platform==='H5'"
            class="h5-wrap">
            <div class="qrcode-box">
            <img :src="qrcodeImg" class='qrcode' >
            <p>请扫码预览</p>
            </div>
        <!-- <iframe :src="`${this.mobileHost}site/${this.tid}`"
                frameborder="0"
                class="h5-preview"></iframe> -->
      </div>
    </div>
    <div class="template-content"
          v-show="cType==='tdk'">
      <div class="content from-box">
        <div class="from-row">
          <div class="from-title">
            <i class="star">*</i>官网标题:</div>
          <div class="from-content">
            <com-input ref="siteRef"
                        :value.sync="siteTitle"
                        placeholder="请输入官网标题"
                        :max-length="30"
                        class='inp'
                        :errorTips="siteTitleError"
                        @change="canPaas=false"
                        @focus='siteTitleError = ""'
                        @blur="()=>{
            if(this.siteTitle.length===0){
              this.siteTitleError='必须填写官网标题'
            }
            }"></com-input>
          </div>
        </div>
        <div class="from-row">
          <div class="from-title">
            <i class="star">*</i>推广关键字:</div>
          <div class="from-content">
            <com-input :value.sync="keyWords"
                        placeholder="请输入推广关键字,以空格分割"
                        :max-length="30"
                        class='inp'
                        :errorTips="keyWordsError"
                        @change="canPaas=false"
                        @focus='keyWordsError = ""'
                        @blur="()=>{
            if(this.keyWords.trim().length===0){
              this.keyWordsError='必须填写推广关键字'
            }
            }"></com-input>
          </div>
        </div>
        <div class="from-row">
          <div class="from-title">收藏图标:</div>
          <div class="from-content">
            <ve-upload title="图片支持jpg、png、bmp格式，建议比例48*48，大小不超过500k"
                        accept="png|jpg|bmp"
                        :defaultImg="defaultImg"
                        :fileSize="500"
                        :errorMsg="uploadErrorMsg"
                        @error="uploadError"
                        @success="uploadImgSuccess"></ve-upload>
          </div>
        </div>
        <div class="from-row">
          <div class="from-title">网页描述:</div>
          <div class="from-content editor-content"
                style='position:relative;'>
            <com-input type="textarea"
                        :value.sync="siteDes"
                        :rows="5"
                        placeholder="请输入网页描述信息"
                        :max-length="60"
                        class='inp'
                        @change="canPaas=false"
                        style="height: 100px;"></com-input>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom-fix" v-if='editStatus'>
      <div class="btn-group">
        <button @click="doReset" class='default-button' v-if="!isPreview&&!ptid&&cType==='tp'">重置</button>
        <button @click="doSave" class='primary-button' v-if="!isPreview&&!ptid&&cType==='tp'">下一步</button>
        <button @click="doSaveTDK" class='primary-button' v-if="!isPreview&&!ptid&&cType==='tdk'">保存</button>
      </div>
    </div>
  </div>
</template>

<script>
import eventBus from 'src/utils/eventBus.js'
import activityService from 'src/api/activity-service'
import brandService from 'src/api/brand-service'
import temp1 from './template1.vue'
import temp2 from './template2.vue'
import temp3 from './template3.vue'
import temp4 from './template4.vue'
import temp1Data from './temp1'
import temp2Data from './temp2'
import temp3Data from './temp3'
import temp4Data from './temp4'
import VeUpload from 'src/components/ve-upload-image'

export default {
  components: {
    't0478320': temp1,
    't0478321': temp2,
    't0478322': temp3,
    't0478323': temp4,
    VeUpload
  },
  data () {
    return {
      protocol: location.protocol,
      editShare: false,
      siteTitle: '',
      siteTitleError: '',
      keyWords: '',
      keyWordsError: '',
      siteDes: '',
      icon: '',
      editStatus: false,
      0: '',
      uploadErrorMsg: '',
      options: [
        {
          label: '步骤1 内容主题 ',
          status: '(编辑中)',
          value: 'tp'
        },
        {
          label: '步骤2 推广信息 ',
          status: '(未设置)',
          value: 'tdk'
        }
      ],
      host: process.env.IMGHOST + '/',
      cType: 'tp',
      t0478320: temp1Data,
      t0478321: temp2Data,
      t0478322: temp3Data,
      t0478323: temp4Data,
      com: '',
      isPreview: false,
      share: {
        des: '',
        title: '',
        imgUrl: '',
        link: `${location.protocol + process.env.PC_HOST}subscribe/${this.$route.params.id}`
      },
      data: {},
      ptid: this.$route.query.tid,
      tid: this.$route.params.id,
      title: '',
      mobileHost: process.env.MOBILE_HOST,
      pcHOST: process.env.PC_HOST,
      published: 'N',
      platform: 'PC',
      changed: undefined,
      hasData: false,
      isFirst: false,
      qrcodeImg: '',
      canPaas: true
    }
  },
  /* 路由守卫，离开当前页面之前被调用 */
  beforeRouteLeave (to, from, next) {
    if (this.canPaas) {
      next(true)
      return false
    }
    if (!this.isPreview) {
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
    } else {
      next(true)
    }
  },
  mounted () {
    this.qrcodeImg = `http://aliqr.e.vhall.com/qr.png?t=${encodeURIComponent(`http:${this.mobileHost}site/${this.tid}`)}`
    if (this.$route.path.indexOf('edit') === -1) {
      this.isPreview = true
    }
    this.init()
    setTimeout(() => {
      if (document.getElementsByClassName('isEdit').length) {
        this.editStatus = true
      }
    }, 1000)
  },
  methods: {
    copyLink () {
      this.$toast({
        content: '复制成功'
      })
      this.share.link.copyClipboard()
    },
    uploadImgSuccess (data) {
      this.icon = data.name
      this.canPaas = false
    },
    uploadError (data) {
      console.log('上传失败:', data)
      this.uploadErrorMsg = data.msg
    },
    init () {
      if (this.ptid) {
        this.com = `t${this.ptid}`
      } else {
        this.$get(activityService.GET_WEBINAR_INFO, { id: this.tid }).then(res => {
          ({ title: this.title, published: this.published } = res.data)
          this.share.title = res.data.title
          this.share.des = ''
          this.share.imgUrl = res.data.imgUrl ? this.host + res.data.imgUrl : ''
          this.$get(brandService.GET_LIVE_SHARE, {
            activityId: this.tid
          }).then(res => {
            if (res.data && res.data.page.indexOf('officia_route') !== -1) {
              this.share.title = res.data.title
              this.share.des = res.data.description
              this.share.imgUrl = this.host + res.data.imgUrl
            }
          })
        })
        this.$config({ loading: true }).$get(brandService.GET_SITE_DATA, {
          activityId: this.tid
        }).then(res => {
          let data = JSON.parse(res.data.value)
          this.com = `t${data.tid}`
          data.editAble = true
          this.data = data
          if (res.data.title) {
            this.hasData = true
            this.options[1].status = '(已设置)'
          } else {
            this.hasData = false
          }
          this.siteTitle = res.data.title || ''
          this.keyWords = res.data.keyword || ''
          this.siteDes = res.data.description || ''
          this.icon = res.data.icon || ''
          // 添加 下拉选项标记
          // if (this.siteTitle.length) {
          //   this.options[1]['label'] = '推广信息(已完成)'
          // }
          setTimeout(() => {
            this.changed = false
          }, 500)
        })
      }
    },
    goBack () {
      this.isFirst = false
      if (this.cType === 'tp') {
        this.isFirst = true
      } else {
        this.isFirst = false
      }
      if (this.data && this.changed) {
        this.$messageBox({
          header: '提示',
          width: '200',
          content: '是否保存当前编辑内容并返回',
          cancelText: '不保存', // 不传递cancelText将只有一个确定按钮
          confirmText: '保存',
          handleClick: (e) => {
            if (e.action === 'cancel') {
              if (this.isFirst) {
                this.$router.replace(`/liveMager/site/${this.tid}`)
              } else {
                this.cType = 'tdk'
              }
            } else if (e.action === 'confirm') {
              this.doSave(() => {
                if (this.isFirst) {
                  this.$router.replace(`/liveMager/site/${this.tid}`)
                } else {
                  this.cType = 'tdk'
                }
              })
            }
          }
        })
      } else {
        if (this.isFirst) {
          this.$router.replace(`/liveMager/site/${this.tid}`)
        } else {
          this.cType = 'tp'
          this.options[0].status = '(编辑中)'
        }
      }
    },
    showShare () {

    },
    doSaveTDK () {
      if (!this.siteTitleError && !this.keyWordsError) {
        this.keyWords = this.keyWords.trim().replace(/(\s)(\1)+/g, ($0, $1) => {
          return $1
        })
        this.$post(brandService.POST_UPDATE_SITE_TDK, {
          activityId: this.tid,
          title: this.siteTitle,
          keyword: this.keyWords,
          description: this.siteDes,
          icon: this.icon
        }).then(res => {
          this.canPaas = true
          /* this.options[1].status = '(已设置)'
          this.hasData = true
          this.$toast({
            content: '保存成功',
            autoClose: 3000,
            position: 'center'
          }) */
          this.$router.push(`/liveMager/detail/${this.tid}`)
        })
      }
    },
    doSave (callback) {
      this.options[0].status = '(已设置)'
      this.options[1].status = '(编辑中)'
      this.$config({ loading: true }).$post(brandService.POST_UPDATE_SITE, {
        activityId: this.tid,
        template: JSON.stringify(this.data)
      }).then(res => {
        // this.$toast({
        //   content: '保存成功',
        //   autoClose: 2000,
        //   position: 'center'
        // })
        setTimeout(() => {
          this.changed = false
        }, 500)
        if (typeof callback === 'function') {
          setTimeout(() => {
            callback()
          }, 500)
        } else {
          this.cType = 'tdk'
          this.$nextTick(() => {
            this.$refs.siteRef.$el.querySelector('input').focus()
          })
        }
      })
    },
    doReset () {
      this.$messageBox({
        header: '提示',
        width: '200',
        content: '重置模板将导致您编辑的数据被清除是否确认重置模板?',
        cancelText: '取消', // 不传递cancelText将只有一个确定按钮
        confirmText: '确定',
        handleClick: (e) => {
          if (e.action === 'cancel') {
          } else if (e.action === 'confirm') {
            let resetData = this[`t${this.data.tid}`]()
            this.$config({ loading: true }).$post(brandService.POST_UPDATE_SITE, {
              activityId: this.tid,
              template: JSON.stringify(resetData)
            }).then(res => {
              for (const key of Object.keys(resetData)) {
                this.data[key] = resetData[key]
              }
              setTimeout(() => {
                this.changed = false
              }, 500)
              this.$toast({
                content: '重置成功',
                autoClose: 2000,
                position: 'center'
              })
              eventBus.$emit('reset')
            })
          }
        }
      })
    },
    changeType (value) {
      if (value === 'tdk') {
        this.options[0].status = '(已设置)'
        this.options[1].status = '(编辑中)'
        this.$nextTick(() => {
          this.$refs.siteRef.$el.querySelector('input').focus()
        })
      } else {
        this.options[0].status = '(编辑中)'
        this.options[1].status = this.hasData ? '(已设置)' : '(未设置)'
      }
    },
    doSina () {
      window.open(`
      http://v.t.sina.com.cn/share/share.php?
      url=${encodeURIComponent(this.share.link)}
      &title=${encodeURIComponent(this.share.des)}
      &pic=${encodeURIComponent(this.share.imgUrl)}
      &appkey=&searchPic=false
      `)
    },
    doQQSpace () {
      window.open(`
      http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?desc=${encodeURIComponent(this.share.des)}&url=${encodeURIComponent(this.share.link)}&src%3Dsharemodclk131212&pics=${encodeURIComponent(this.share.imgUrl)}
      `)
    },
    doQQ () {
      window.open(`
      http://connect.qq.com/widget/shareqq/index.html?url=${encodeURIComponent(this.share.link)}&title=${encodeURIComponent(this.share.title)}&desc=${encodeURIComponent(this.share.des)}&pics=${encodeURIComponent(this.share.imgUrl)}
      `)
    }
  },
  watch: {
    data: {
      handler (newValue, old) {
        if (this.changed !== undefined) {
          this.changed = true
        }
      },
      deep: true
    }
    // keyWords: {
    //   handler (newVal) {
    //     if (this.changed !== undefined) {
    //       this.changed = true
    //     }
    //   }
    // }
  },
  computed: {
    publishState () {
      return this.published === 'N' ? '未发布' : '已发布'
    },
    defaultImg () {
      return this.icon ? `${this.$imgHost}/${this.icon}` : ''
    }
  }
}
</script>

<style scoped lang="scss">
@import 'assets/css/variable.scss';
@import 'assets/css/mixin.scss';

.el-select /deep/ {
  input {
    color: $color-font;
    font-size: 16px;
  }
  .el-input {
    .el-select__caret {
      color: $color-font;
    }
  }
}

.from-box {
  // margin: 20px;
  .from-row {
    display: flex;
    padding: 15px 10px;
    .from-title {
      width: 150px;
      text-align: right;
      padding-right: 15px;
      line-height: 40px;
      .star {
        position: relative;
        top: 3px;
        color: $color-red;
        padding-right: 5px;
      }
    }
    .from-content {
      flex: 1;
      .input-box {
        width: 400px;
      }
    }
  }
  .inp {
    width: 440px;
    height: 40px;
    line-height: 40px;
    input {
      padding-left: 10px;
    }
  }
}

.template-container {
  min-width: 1280px;
  overflow: auto;
  .header {
    height: 60px;
    line-height: 60px;
    text-align: center;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 99999;
    background-color: $color-default;
    .title {
      font-size: 16px;
      background: $color-default;
      span {
        font-size: 16px;
      }
    }

    .back-btn-site {
      position: absolute;
      display: inline-block;
      top: 50%;
      left: 20px;
      margin-top: -20px;
      padding: 0 15px;
      background-color: #ffda51;
      line-height: 40px;
      border-radius: 4px;
      font-size: 18px;
      text-align: center;
      .iconfont {
        font-size: 22px;
        vertical-align: -2px;
      }
      &:hover {
        cursor: pointer;
        opacity: 0.9;
        // color: #4b5afe;
        background-color: #ffda51;
      }
    }
    .type-select /deep/ {
      position: absolute;
      top: 0;
      left: 80px;
      height: 100%;
      width: 220px;
      text-align: center;
      cursor: pointer;
      background: none;
      .el-input__inner {
        border: none !important;
        background-color: transparent !important;
        padding-left: 6px;
      }
    }
    .save {
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      width: 110px;
      text-align: center;
      cursor: pointer;
      font-size: 14px;
      &:hover {
        background-color: #ffda51;
      }
    }
    .reset {
      position: absolute;
      top: 0;
      right: 110px;
      height: 100%;
      width: 110px;
      text-align: center;
      cursor: pointer;
      font-size: 14px;
      &:hover {
        background-color: #ffda51;
      }
    }
    .preview-group {
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      // border-left: 1px solid #999;

      .share-box {
        /*width: 446px;*/
        /*height: 290px;*/
        position: absolute;
        right: 0;
        top: 60px;
        background-color: white;
        border: 1px solid #999;
        border-top: 0;
        .share-box-title {
          height: 40px;
          .icon-close {
            cursor: pointer;
            float: right;
            margin-right: 15px;
          }
        }
        .share-content {
          padding: 0 25px 25px;
          /*height: 250px;*/
          /*width: 520px;*/
          text-align: left;
          font-size: 14px;
          line-height: normal;
          .left {
            float: left;
            /*width: 302px;*/
            span {
              display: inline-block;
              margin-bottom: 10px;
            }
            .icon {
              display: inline-block;
              width: 56px;
              height: 56px;
              background-repeat: no-repeat;
              background-position: center center;
              background-size: 50px 50px;
              text-align: center;
              line-height: 130px;
              cursor: pointer;
            }
            .share-sina {
              background-image: url('~assets/image/sina.png');
              margin-right: 30px;
            }
            .share-qq {
              background-image: url('~assets/image/qq.png');
              margin-right: 30px;
            }
            .share-qq-space {
              background-image: url('~assets/image/qq_space.png');
              margin-right: 50px;
            }
          }
          .right {
            margin-left: 286px;
            margin-bottom: 20px;
            span {
              display: inline-block;
              margin-bottom: 10px;
            }
            .img-bg {
              width: 160px;
              height: 160px;
              padding: 8px;
              background-color: #F5F5F5;
            }
            img {
              display: block;
              width: 144px;
              height: 144px;
            }
          }
          .bottom {
            text-align: left;
            font-size: 0;
            .label {
              display: inline-block;
              margin-bottom: 10px;
              margin-right: 10px;
              font-size: 14px;
            }
            .page-url {
              width: 310px;
              font-size: 14px;
              /deep/ {
                input {
                  height: 38px;
                  border-right: none;
                  background-color: transparent;
                  padding-right: 20px;
                  border-radius: 4px 0 0 4px;
                  border-right: none;
                }
              }

            }
            .com-button {
              border: none;
              background-color: #FFD021;
              opacity: 1;
              color: #222;
              z-index: 2;
              border-radius: 0 4px 4px 0;
              font-size: 14px;
              &:hover {
                background-color: #FDD43F;
              }
              &:active {
                background-color: #EEC11A;
              }
            }
          }
        }
      }
      a {
        padding: 0 18px;
        height: 100%;
        float: left;
        cursor: pointer;
        font-size: 14px;
        // border-right: 1px solid #999;
      }
    }
  }
  .template-content {
    margin-top: 60px;
    .content {
      margin: auto;
      margin-top: 100px;
      width: 800px;
    }
    .h5-wrap {
      width: 416px;
      height: 817px;
      background-image: url('~assets/image/phone-msg.png');
      background-size: 100% 100%;
      margin: auto;
      margin-top: 64px;
      padding-top: 76px;
      padding-left: 3px;
      .qrcode-box {
        width: 200px;
        margin: 210px auto;
        text-align: center;
        p {
          color: #888;
        }
      }
    }
    .h5-preview {
      width: 375px;
      height: 667px;
      display: block;
      margin: auto;
      border: 0;
      border-radius: 4px;
    }
  }
  .bottom-fix {
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
    height: 60px;
    line-height: 60px;
    border-top: 1px solid #e2e2e2;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
    padding: 0 20px;
    background-color: #fff;
    .btn-group {
      float: right;
      button{
        vertical-align: middle;
      }
    }
  }
}
.editor-content /deep/ {
  .com-input {
    span {
      right: 10px !important;
      bottom: 6px !important;
    }
  }
}
/deep/ {
  .ve-upload-box {
    height: 160px;
  }
}
</style>
