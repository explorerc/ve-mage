<template>
  <div class="template-container">
    <div class="header">
      <div v-if="!ptid" class="title">{{title}}-<span>{{publishState}}</span></div>
      <router-link class="back" :to="`/brand/site/${tid}`">返回</router-link>
      <div class="preview-group" v-if="isPreview&&!ptid">
        <a @click="platform='PC'">电脑版</a>
        <a @click="platform='H5'">手机版</a>
        <a @click="showShare=true">分享</a>
      </div>
      <div class="share-wrap" v-if="showShare">
        <div class="share-group">
          <i class="iconfont icon-close" @click="showShare=false"></i>
          <div class="fl left">
            <span class="label">分享到</span>
            <ul>
              <li><div class="fl icon sina" @click="doSina"></div></li>
              <li><div class="fl icon qq-space" @click="doQQSpace"></div></li>
              <li><div class="fl icon qq" @click="doQQ"></div></li>
            </ul>
          </div>
          <div class="fl">
            <span class="label">微信扫码分享</span>
            <img :src="`http://aliqr.e.vhall.com/qr.png?t=${this.shareData.link}`" >
          </div>
        </div>
        <div>
            <span class="label">页面地址</span>
            <com-input type="password" class="copy-txt" :value="shareData.link"></com-input><com-button class="copy-link" @click="shareData.link.copyClipboard()">复制</com-button>
          </div>
      </div>
      <a @click="doSave" class="save" v-if="!isPreview&&!ptid">保存</a>
    </div>
    <component v-if="platform==='PC'" class="template-content" :edit-able="!isPreview&&!ptid" :share-data="shareData" v-model="data" v-bind:is="com"></component>
    <div v-if="platform==='H5'" class="template-content">手机端预览</div>
  </div>
</template>

<script>
import brandService from 'src/api/brand-manage'
import activityService from 'src/api/activity-manger'
import shareService from 'src/api/set-live-watch-manage'

import temp1 from './template1.vue'
import temp2 from './template2.vue'

export default {
  components: {
    't0478320': temp1,
    't0478321': temp2
  },
  data () {
    return {
      com: '',
      isPreview: false,
      data: {},
      ptid: this.$route.query.tid,
      tid: this.$route.params.id,
      title: '',
      published: 'N',
      platform: 'PC',
      shareData: {
        des: ''
      },
      host: process.env.IMGHOST + '/',
      showShare: false
    }
  },
  mounted () {
    if (this.$route.path.indexOf('edit') === -1) {
      this.isPreview = true
    }
    this.init()
  },
  methods: {
    doSina () {
      window.open(`
      http://v.t.sina.com.cn/share/share.php?
      url=${encodeURIComponent(this.shareData.link)}
      &title=${encodeURIComponent(this.shareData.des)}
      &pic=${encodeURIComponent(this.shareData.imgUrl)}
      &appkey=&searchPic=false
      `)
    },
    doQQSpace () {
      window.open(`
      http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?desc=${encodeURIComponent(this.shareData.des)}&url=${encodeURIComponent(this.shareData.link)}&src%3Dsharemodclk131212&pics=${encodeURIComponent(this.shareData.imgUrl)}
      `)
    },
    doQQ () {
      window.open(`
      http://connect.qq.com/widget/shareqq/index.html?url=${encodeURIComponent(this.shareData.link)}&title=${encodeURIComponent(this.shareData.title)}&desc=${encodeURIComponent(this.shareData.des)}&pics=${encodeURIComponent(this.shareData.imgUrl)}
      `)
    },
    init () {
      if (this.ptid) {
        activityService.webinarInfo(this.tid).then(res => {
          ({
            title: this.title,
            published: this.published,
            published: this.published,
            imgUrl: this.shareData.imgUrl,
            title: this.shareData.title
          } = res.data)
          this.shareData.imgUrl = this.host + this.shareData.imgUrl
          this.shareData.link = location.href
          shareService.getLiveShare({activityId: this.tid}).then(share => {
            if (share.data && share.data.page.indexOf('officia_route') !== -1) {
              ({
                title: this.shareData.title,
                imgUrl: this.shareData.imgUrl,
                description: this.shareData.des
              } = share.data)
              this.shareData.imgUrl = this.host + this.shareData.imgUrl
            }
            this.com = `t${this.ptid}`
          })
        })
      } else {
        activityService.webinarInfo(this.tid).then(res => {
          ({
            title: this.title,
            published: this.published,
            published: this.published,
            imgUrl: this.shareData.imgUrl,
            title: this.shareData.title
          } = res.data)
          this.shareData.imgUrl = this.host + this.shareData.imgUrl
          this.shareData.link = location.href
          shareService.getLiveShare({activityId: this.tid}).then(share => {
            if (share.data && share.data.page.indexOf('officia_route') !== -1) {
              ({
                title: this.shareData.title,
                imgUrl: this.shareData.imgUrl,
                description: this.shareData.des
              } = share.data)
              this.shareData.imgUrl = this.host + this.shareData.imgUrl
            }
          })
        })
        brandService.getSiteData({
          __loading: true,
          activityId: this.tid
        }).then(res => {
          let data = JSON.parse(res.data.value)
          this.com = `t${data.tid}`
          if (this.isPreview) {
            data.editAble = false
          } else {
            data.editAble = true
          }
          this.data = data
        })
      }
    },
    doSave () {
      brandService.updateSiteData({
        __loading: true,
        activityId: this.tid,
        template: JSON.stringify(this.data)
      }).then(data => {
        this.$toast({
          content: '保存成功',
          autoClose: 2000
        })
      })
    }
  },
  computed: {
    publishState () {
      return this.published === 'N' ? '未发布' : '已发布'
    }
  }
}
</script>

<style scoped lang="scss">
.template-container {
  .header {
    height: 54px;
    line-height: 54px;
    text-align: center;
    border-bottom: 1px solid #999;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 10;
    background-color: white;
    .title {
      font-size: 18px;
      span {
        font-size: 14px;
      }
    }
    .back {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 110px;
      text-align: center;
      border-left: 1px solid #999;
      border-right: 1px solid #999;
      cursor: pointer;
    }
    .save {
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      width: 110px;
      text-align: center;
      border-left: 1px solid #999;
      border-right: 1px solid #999;
      cursor: pointer;
    }
    .preview-group {
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      border-left: 1px solid #999;
      a {
        padding: 0 18px;
        height: 100%;
        float: left;
        cursor: pointer;
        border-right: 1px solid #999;
      }
    }
    .share-wrap {
      position: relative;
      background-color: white;
      width: 446px;
      height: 326px;
      float: right;
      text-align: left;
      padding: 45px 25px 25px;
      line-height: initial;
      .share-group {
        overflow: hidden;
        .icon-close {
          cursor: pointer;
          position: absolute;
          right: 14px;
          top: 14px;
          font-size: 20px;
        }
        .left {
          width: 60%;
          .label {
            padding-bottom: 40px;
          }
        }
        .icon {
          width: 60px;
          height: 60px;
          background-image: url(../../../assets/image/shareIcon.png);
          background-repeat: no-repeat;
          background-size: 460px;
          cursor: pointer;
          &.sina {
            background-position: 3px 0px;
            &:hover {
              background-position: 3px -80px;
            }
          }
          &.qq-space {
            background-position: -78px 0px;
            &:hover {
              background-position: -78px -80px;
            }
          }
          &.qq {
            background-position: -159px 0px;
            &:hover {
              background-position: -159px -80px;
            }
          }
        }
      }
      .label {
        display: block;
        padding-bottom: 10px;
      }
      .copy-txt {
        width: 280px;
      }
      .copy-link {
        margin-left: 10px;
      }
    }
  }
  .template-content {
    margin-top: 54px;
  }
}
</style>
