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
    <component :platform="platform" class="template-content" :editAble="!isPreview" v-model="data" v-bind:is="com"></component>
  </div>
</template>

<script>
import brandService from 'src/api/brand-manage'
import activityService from 'src/api/activity-manger'

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
  }
}
</style>
