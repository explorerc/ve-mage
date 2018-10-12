<template>
  <div class="template-container">
    <div class="header">
      <div v-if="!ptid"
           class="title">{{title}}-
        <span>{{publishState}}</span>
      </div>
      <div class="back-btn" @click="goBack">
        <i class="iconfont icon-jiantou"></i>
      </div>
      <el-select v-if="!isPreview&&!ptid" v-model="cType"
                 class="type-select"
                 @change="changeType">
        <el-option v-for="item in options"
                   :key="item.value"
                   :label="item.label"
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
              <img :src="`http://aliqr.e.vhall.com/qr.png?t=${this.mobileHost}site/${this.tid}`">
            </div>
              <div class="bottom">
                <div class="label">页面地址:</div>
                <com-input class="page-url"
                           :value="`${this.protocol+this.pcHOST}site/${this.tid}`"
                           disabled></com-input>
                <com-button @click="copyLink">复制</com-button>
              </div>
            </div>
          </div>
        </div>
        <a @click="doReset"
           class="reset"
           v-if="!isPreview&&!ptid&&cType==='tp'">重置</a>
        <a @click="doSave"
           class="save"
           v-if="!isPreview&&!ptid&&cType==='tp'">下一步</a>
        <a @click="doSaveTDK"
           class="save"
           v-if="!isPreview&&!ptid&&cType==='tdk'">保存</a>
      </div>
      <div class="template-content"
           v-show="cType==='tp'">
        <component v-if="platform==='PC'"
                   :editAble="!isPreview"
                   v-model="data"
                   v-bind:is="com"></component>
        <div v-if="platform==='H5'"
             class="h5-wrap">
          <iframe :src="`${this.mobileHost}site/${this.tid}`"
                  frameborder="0"
                  class="h5-preview"></iframe>
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
                         style="height: 100px;"></com-input>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
      0: '',
      uploadErrorMsg: '',
      options: [
        {
          label: '步骤1 内容主题',
          value: 'tp'
        },
        {
          label: '步骤2 推广信息',
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
        link: `${location.protocol + process.env.PC_HOST}site/${this.$route.params.id}`
      },
      data: {},
      ptid: this.$route.query.tid,
      tid: this.$route.params.id,
      title: '',
      mobileHost: process.env.MOBILE_HOST,
      pcHOST: process.env.PC_HOST,
      published: 'N',
      platform: 'PC',
      changed: undefined
    }
  },
  mounted () {
    if (this.$route.path.indexOf('edit') === -1) {
      this.isPreview = true
    }
    this.init()
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
    },
    uploadError (data) {
      console.log('上传失败:', data)
      this.uploadErrorMsg = data.msg
    },
    init () {
      if (this.ptid) {
        this.com = `t${this.ptid}`
      } else {
        this.$get(activityService.GET_WEBINAR_INFO, {id: this.tid}).then(res => {
          ({title: this.title, published: this.published} = res.data)
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
        this.$config({loading: true}).$get(brandService.GET_SITE_DATA, {
          activityId: this.tid
        }).then(res => {
          let data = JSON.parse(res.data.value)
          this.com = `t${data.tid}`
          data.editAble = true
          this.data = data
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
      if (this.data && this.changed) {
        this.$messageBox({
          header: '提示',
          width: '200',
          content: '是否保存当前编辑内容并返回',
          cancelText: '不保存', // 不传递cancelText将只有一个确定按钮
          confirmText: '保存',
          handleClick: (e) => {
            if (e.action === 'cancel') {
              this.$router.replace(`/liveMager/site/${this.tid}`)
            } else if (e.action === 'confirm') {
              this.doSave(() => {
                this.$router.replace(`/liveMager/site/${this.tid}`)
              })
            }
          }
        })
      } else {
        this.$router.replace(`/liveMager/site/${this.tid}`)
      }
    },
    showShare () {

    },
    doSaveTDK () {
      if (!this.siteTitleError && !this.keyWordsError) {
        this.keyWords = this.keyWords.trim().replace(/(\s)(\1)+/g, ($0, $1) => {
          return $1
        })
        this.$config({loading: true}).$post(brandService.POST_UPDATE_SITE_TDK, {
          activityId: this.tid,
          title: this.siteTitle,
          keyword: this.keyWords,
          description: this.siteDes,
          icon: this.icon
        }).then(res => {
          this.$toast({
            content: '保存成功',
            autoClose: 500
          })
        })
      }
    },
    doSave (callback) {
      this.$config({loading: true}).$post(brandService.POST_UPDATE_SITE, {
        activityId: this.tid,
        template: JSON.stringify(this.data)
      }).then(res => {
        this.$toast({
          content: '保存成功',
          autoClose: 500
        })

        // // 添加 下拉选项标记
        // this.options[0]['label'] = '内容主题(已完成)'
        // this.options[1]['label'] = '推广信息(编辑中)'
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
            this.$config({loading: true}).$post(brandService.POST_UPDATE_SITE, {
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
                autoClose: 2000
              })
            })
          }
        }
      })
    },
    changeType (value) {
      if (value === 'tdk') {
        this.$nextTick(() => {
          this.$refs.siteRef.$el.querySelector('input').focus()
        })
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
    z-index: 10;
    background-color: white;
    .title {
      font-size: 16px;
      background: $color-default;
      span {
        font-size: 16px;
      }
    }

    .back-btn {
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
        color: #4b5afe;
      }
    }
    .type-select {
      position: absolute;
      top: 0;
      left: 80px;
      height: 100%;
      width: 154px;
      text-align: center;
      cursor: pointer;
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
    }
    .preview-group {
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      border-left: 1px solid #999;

      .share-box {
        width: 446px;
        height: 290px;
        position: absolute;
        right: 0;
        top: 54px;
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
          height: 250px;
          text-align: left;
          font-size: 14px;
          line-height: normal;
          .left {
            float: left;
            width: 240px;
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
              background-size: 48px 48px;
              text-align: center;
              line-height: 130px;
              cursor: pointer;
            }
            .share-sina {
              background-image: url('~assets/image/sina.png');
            }
            .share-qq {
              background-image: url('~assets/image/qq.png');
            }
            .share-qq-space {
              background-image: url('~assets/image/qq_space.png');
            }
          }
          .right {
            margin-left: 240px;
            margin-bottom: 20px;
            span {
              display: inline-block;
              margin-bottom: 10px;
            }
            img {
              display: block;
              width: 100px;
              height: 100px;
            }
          }
          .bottom {
            text-align: left;
            .label {
              margin-bottom: 10px;
            }
            .page-url {
              width: 290px;
              margin-right: 10px;
            }
          }
        }
      }
      a {
        padding: 0 18px;
        height: 100%;
        float: left;
        cursor: pointer;
        border-right: 1px solid #999;
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
}
</style>
