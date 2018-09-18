<template>
  <div class="site-container">
    <div class="group">
      <div class="title">活动官网 <el-switch
          v-model="enable"
          inactive-color="#DEE1FF"
          :width="32"
          active-color="#FFD021"
          @change="updateState"
        >
        </el-switch>
      </div>
    </div>
    <div class="group">
      <div class="fwn">我的模版</div>
      <div class="group-content" >
        <div class="template-block" style="" v-if="this.data.tid">
          <img :src="this[`t${data.tid}`]" >
          <div class="option-wrap">
            <div class="option-group">
              <a @click="goEdit">编辑</a>
              <a @click="goPreview">预览</a>
            </div>
          </div>
        </div>
        <div v-else>
          没有模板
        </div>
      </div>
    </div>
    <div class="group">
      <div class="fwn">模板库</div>
      <div class="group-content fs0">
        <div class="template-block">
          <img :src="t0478320" alt="">
          <div class="option-wrap">
            <div class="option-group">
              <a @click="useTemplate('template1')">使用模版</a>
              <a @click="showPreview('0478320')">预览</a>
            </div>
          </div>
        </div>
        <div class="template-block">
          <img :src="t0478321" >
          <div class="option-wrap">
            <div class="option-group">
              <a @click="useTemplate('template2')">使用模版</a>
              <a @click="showPreview('0478321')">预览</a>
            </div>
          </div>
        </div>
        <!-- <div class="template-block">
          <img :src="t0478322" >
          <div class="option-wrap">
            <div class="option-group">
              <a @click="useTemplate('template2')">使用模版</a>
              <a @click="showPreview('0478322')">预览</a>
            </div>
          </div>
        </div> -->
        <div class="template-block">
          <img :src="t0478323" >
          <div class="option-wrap">
            <div class="option-group">
              <a @click="useTemplate('template4')">使用模版</a>
              <a @click="showPreview('0478323')">预览</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import brandService from 'src/api/brand-manage'
import defaultData from './templateData'

export default {
  data () {
    return {
      enable: false,
      data: {},
      t0478320: require('assets/image/site_tp1.png'),
      t0478321: require('assets/image/site_tp2.png'),
      t0478322: require('assets/image/site_tp1.png'),
      t0478323: require('assets/image/site_tp4.png')
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      brandService.getSiteData({
        __loading: true,
        activityId: this.$route.params.id
      }).then(res => {
        if (res.data.enabled === 'Y') {
          this.enable = true
        }
        if (res.data.value) {
          this.data = JSON.parse(res.data.value)
        }
      })
    },
    goEdit () {
      let tid = this.data.tid
      if (tid) {
        this.$router.push(`/site/edit/${this.$route.params.id}`)
      }
    },
    goPreview () {
      let tid = this.data.tid
      if (tid) {
        this.$router.push(`/site/preview/${this.$route.params.id}`)
      }
    },
    updateState () {
      brandService.updateSiteState({
        __loading: true,
        activityId: this.$route.params.id,
        submodule: 'TEMPLATE',
        enabled: this.enable ? 'Y' : 'N'
      }).then(data => {
        this.$toast({
          content: '保存成功',
          autoClose: 2000
        })
      })
    },
    showPreview (tid) {
      this.$router.push(`/site/preview/${this.$route.params.id}?tid=${tid}`)
    },
    useTemplate (temp) {
      let temData = defaultData[temp]()
      brandService.updateSiteData({
        __loading: true,
        activityId: this.$route.params.id,
        template: JSON.stringify(temData)
      }).then(data => {
        this.data = temData
        this.$toast({
          content: '设置成功',
          autoClose: 2000
        })
      })
    }
  }
}
</script>

<style scoped lang="scss">
.site-container {
  padding-top: 56px;
  padding-left: 100px;
  .group {
    .title {
      font-size: 24px;
    }
    .fwn {
      font-size: 16px;
      padding-left: 8px;
      margin-top: 25px;
      margin-bottom: 17px;
      &::before {
        content: '';
        display: inline-block;
        width: 2px;
        height: 18px;
        background-color: #ffd021;
        vertical-align: middle;
        position: relative;
        left: -8px;
        top: -2px;
      }
    }
  }
  .group-content {
    &:first-of-type {
      padding: 35px 0;
    }
    .state {
      padding: 0 20px;
    }
    .template-block {
      display: inline-block;
      width: 225px;
      height: 280px;
      border: 1px solid #dadada;
      margin-right: 40px;
      font-size: 14px;
      position: relative;
      overflow: hidden;
      border-radius: 4px;
      img {
        width: 100%;
        height: 100%;
      }
      &:hover {
        border-color: transparent;
        .option-wrap {
          display: block;
        }
      }
      .option-wrap {
        background: rgba(34, 34, 34, 0.7);
        display: none;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 2px solid #ffd021;
        .option-group {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          a {
            width: 120px;
            height: 32px;
            line-height: 32px;
            text-align: center;
            display: inline-block;
            border-radius: 20px;
            border: 1px solid white;
            color: white;
            cursor: pointer;
            &:first-child {
              margin-bottom: 30px;
            }
            &:hover {
              border-color: #ffd021;
              color: #ffd021;
            }
          }
        }
      }
    }
  }
}
</style>
