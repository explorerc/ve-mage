<template>
  <div class="template-container">
    <div class="header">
      <div v-if="!ptid" class="title">{{title}}-<span>{{publishState}}</span></div>
      <router-link class="back" :to="`/liveMager/site/${tid}`">返回</router-link>
      <div class="preview-group" v-if="isPreview&&!ptid">
        <a @click="platform='PC'">电脑版</a>
        <a @click="platform='H5'">手机版</a>
        <a >分享</a>
      </div>
      <a @click="doSave" class="save" v-if="!isPreview&&!ptid">保存</a>
    </div>
    <component v-if="platform==='PC'" class="template-content" :editAble="!isPreview" v-model="data" v-bind:is="com"></component>
    <div v-if="platform==='H5'" class="template-content h5-wrap">
      <iframe src="http://localhost:8866/site/47" frameborder="0" class="h5-preview"></iframe>
    </div>
  </div>
</template>

<script>
import brandService from 'src/api/brand-manage'
import activityService from 'src/api/activity-manger'
import liveWatchManage from 'src/api/set-live-watch-manage'
import temp1 from './template1.vue'
import temp2 from './template2.vue'
import temp3 from './template3.vue'
import temp4 from './template4.vue'

export default {
  components: {
    't0478320': temp1,
    't0478321': temp2,
    't0478322': temp3,
    't0478323': temp4
  },
  data () {
    return {
      com: '',
      isPreview: false,
      share: {
        des: '',
        title: '',
        imgUrl: '',
        link: 'http://www.baidu.com'
      },
      data: {},
      ptid: this.$route.query.tid,
      tid: this.$route.params.id,
      title: '',
      published: 'N',
      platform: 'PC'
    }
  },
  mounted () {
    if (this.$route.path.indexOf('edit') === -1) {
      this.isPreview = true
    }
    this.init()
  },
  methods: {
    init () {
      if (this.ptid) {
        this.com = `t${this.ptid}`
      } else {
        activityService.webinarInfo(this.tid).then(res => {
          ({ title: this.title, published: this.published } = res.data)
          this.share.title = res.data.title
          this.share.des = res.data.description
          this.share.imgUrl = res.data.imgUrl
          liveWatchManage.getLiveShare({
            activityId: this.tid
          }).then((res) => {
            if (res.data && res.data['officia_route']) {
              this.share.title = res.data.title
              this.share.des = res.data.description
              this.share.imgUrl = res.data.imgUrl
            }
          })
        })
        brandService.getSiteData({
          __loading: true,
          activityId: this.tid
        }).then(res => {
          let data = JSON.parse(res.data.value)
          this.com = `t${data.tid}`
          data.editAble = true
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
  min-width: 1280px;
  overflow: auto;
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
  }
  .template-content {
    margin-top: 54px;
    &.h5-wrap {
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
