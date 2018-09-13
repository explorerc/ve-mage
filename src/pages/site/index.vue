<template>
  <div class="site-container">
    <div class="group">
      <h3>活动官网</h3>
      <div class="group-content">
        <span class="state">是否开启</span>
        <el-switch
          v-model="enable"
          @change="updateState"
          active-color="#13ce66"
          inactive-color="#ff4949">
        </el-switch>
      </div>
    </div>
    <div class="group">
      <h3 class="fwn">我的模版</h3>
      <div class="group-content" >
        <div class="template-block" v-if="this.data.tid">
          <img src="" alt="">
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
      <h3 class="fwn">模板库</h3>
      <div class="group-content fs0">
        <div class="template-block">
          <img src="" alt="">
          <div class="option-wrap">
            <div class="option-group">
              <a @click="useTemplate('template1')">使用</a>
              <a @click="showPreview('0478320')">预览</a>
            </div>
          </div>
        </div>
        <div class="template-block">
          <img src="" alt="">
          <div class="option-wrap">
            <div class="option-group">
              <a @click="useTemplate('template2')">使用</a>
              <a @click="showPreview('0478321')">预览</a>
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
      data: {}
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
  .group-content {
    padding: 25px 0;
    &:first-of-type {
      padding: 35px 0;
    }
    .state {
      padding: 0 20px;
    }
    .template-block {
      display: inline-block;
      width: 290px;
      height: 195px;
      border: 1px solid #dadada;
      margin-right: 25px;
      font-size: 14px;
      position: relative;
      img {
        width: 100%;
        height: 100%;
      }
      &:hover {
        .option-wrap {
          display: block;
        }
      }
      .option-wrap {
        background-color: rgba(0, 0, 0, 0.5);
        display: none;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        .option-group {
          position: absolute;
          right: 0;
          bottom: 0;
          a {
            background-color: white;
            padding: 10px 15px;
            border-right: 1px solid #dadada;
            float: left;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>
