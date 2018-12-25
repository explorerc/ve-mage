<template>
  <div class="live-mager">
    <div class="live-title">
      <span class="title">活动官网</span>
      <el-switch v-model="enable"
                 inactive-color="#DEE1FF"
                 :width="32"
                 :disabled="switchDisabled"
                 active-color="#FFD021"
                 @change="confirmState">
      </el-switch>
      <com-back></com-back>
      <!-- <span>开启后，将可以定制您自己的活动官网，方便汇聚活动信息聚集人气</span> -->
    </div>
    <div class="mager-box border-box">
      <div class="from-box">
        <div class="switch-cover "
             :class='{"close":!enable}'>
          <div class="group">
            <div class="fwn">我的模板</div>
            <div class="group-content">
              <div class="template-block clearfix"
                   style=""
                   v-if="this.data.tid">
                <img :src="this[`t${data.tid}`]">
                <div class="option-wrap">
                  <div class="option-group">
                    <a @click="goEdit">编辑</a>
                    <a @click="goPreview">预览</a>
                  </div>
                </div>
                <span class='tpl-name'
                      v-html="this.data.tplName"></span>
              </div>
              <div v-else
                   class='empty'>
                <div class="img"></div>
                <div class="txt">您还没有创建官网样式，请从模板库中选择并创建个性化官网</div>
              </div>
            </div>
          </div>
          <div class="group">
            <div class="fwn fwn2">模板库</div>
            <div class="group-content fs0">
              <div class="template-block clearfix">
                <img :src="t0478320"
                     alt="">
                <div class="option-wrap">
                  <div class="option-group">
                    <a @click="useTemplate('template1')">使用模板</a>
                    <a @click="showPreview('0478320')">预览</a>
                  </div>
                </div>
                <span class='tpl-name'
                      v-html="tplData['template1']()['tplName']"></span>
              </div>
              <div class="template-block clearfix">
                <img :src="t0478321">
                <div class="option-wrap">
                  <div class="option-group">
                    <a @click="useTemplate('template2')">使用模板</a>
                    <a @click="showPreview('0478321')">预览</a>
                  </div>
                </div>
                <span class='tpl-name'
                      v-html="tplData['template2']()['tplName']"></span>
              </div>
              <div class="template-block clearfix">
                <img :src="t0478322">
                <div class="option-wrap">
                  <div class="option-group">
                    <a @click="useTemplate('template3')">使用模板</a>
                    <a @click="showPreview('0478322')">预览</a>
                  </div>
                </div>
                <span class='tpl-name'
                      v-html="tplData['template3']()['tplName']"></span>
              </div>
              <div class="template-block clearfix">
                <img :src="t0478323">
                <div class="option-wrap">
                  <div class="option-group">
                    <a @click="useTemplate('template4')">使用模板</a>
                    <a @click="showPreview('0478323')">预览</a>
                  </div>
                </div>
                <span class='tpl-name'
                      v-html="tplData['template4']()['tplName']"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import brandService from 'src/api/brand-service'
import defaultData from './templateData'
import activityService from 'src/api/activity-service'
import EventBus from 'src/utils/eventBus'

export default {
  data () {
    return {
      enable: false,
      isPublish: false,
      switchDisabled: false,
      data: {},
      tplData: defaultData,
      t0478320: require('assets/image/site_tp2.png'),
      t0478321: require('assets/image/site_tp1.png'),
      t0478322: require('assets/image/site_tp3.png'),
      t0478323: require('assets/image/site_tp4.png')
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
      title: '活动官网'
    }])
  },
  mounted () {
    this.init()
    console.log()
  },
  methods: {
    init () {
      this.$get(brandService.GET_SITE_DATA, {
        activityId: this.$route.params.id
      }).then(res => {
        if (res.data.enabled === 'Y') {
          this.enable = true
        }
        if (res.data.value) {
          this.data = JSON.parse(res.data.value)
        }
      })
      this.$get(activityService.GET_WEBINAR_INFO, {
        id: this.$route.params.id
      }).then((res) => {
        this.isPublish = res.data.published === 'Y'
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
    confirmState (res) {
      // this.switchDisabled = true
      if (this.isPublish && !res) {
        this.$messageBox({
          header: '提示',
          width: '200',
          content: '活动官网已经发布，请确认是否关闭？',
          cancelText: '暂不关闭', // 不传递cancelText将只有一个确定按钮
          confirmText: '确认关闭',
          handleClick: (e) => {
            console.log(e)
            if (e.action === 'cancel') {
              this.enable = true
            } else if (e.action === 'confirm') {
              this.updateState()
            }
          }
        })
      } else {
        this.updateState()
      }
    },
    updateState () {
      this.$config({ handlers: [60706, 60701] }).$post(brandService.POST_UPDATE_SITE_STATE, {
        activityId: this.$route.params.id,
        submodule: 'TEMPLATE',
        enabled: this.enable ? 'Y' : 'N'
      }).then(res => {
        // this.$toast({
        //   content: '保存成功',
        //   autoClose: 500,
        //   position: 'center'
        // })

        let st = setTimeout(() => {
          clearTimeout(st)
          this.switchDisabled = false
        }, 2000)
      }).catch((res) => {
        if (res.code === 60706) {
          this.$messageBox({
            header: '提示',
            content: res.msg,
            autoClose: 10,
            confirmText: '知道了'
          })
          this.enable = !this.enable
          this.switchDisabled = false
        } else if (res.code === 60701) {
          this.$messageBox({
            header: '提示',
            content: res.msg,
            autoClose: 10,
            confirmText: '知道了'
          })
          this.enable = !this.enable
          this.switchDisabled = false
        }
      })
    },
    showPreview (tid) {
      this.$router.push(`/site/preview/${this.$route.params.id}?tid=${tid}`)
    },
    useTemplate (temp) {
      let temData = defaultData[temp]()
      this.$config({ loading: true }).$post(brandService.POST_UPDATE_SITE, {
        activityId: this.$route.params.id,
        template: JSON.stringify(temData)
      }).then(res => {
        this.data = temData
        this.$toast({
          content: '设置成功',
          autoClose: 1000
        })
      })
    }
  }
}
</script>

<style scoped lang="scss">
@import 'assets/css/mixin.scss';
.live-mager {
  border-radius: 5px;
  overflow: hidden;
  padding-bottom: 30px;
  margin: 0 auto;
  width: 1366px;
  min-width: 1019px;
  color: #222;
  .el-switch {
    position: relative;
    bottom: 4px;
  }
  // transition: width .2s;

  /* 设备宽度大于 1600 */
  @media all and (min-width: 1600px) {
    width: 1366px;
  }

  /* 设备宽度小于 1600px */
  @media all and (max-width: 1600px) {
    width: 1019px;
  }

  .live-title {
    position: relative;
    line-height: 60px;
    margin: 30px 0 5px 0;
    span.title {
      display: inline-block;
      font-size: 24px;
      padding-right: 10px;
    }

    .live-btn {
      position: relative;
      top: 5px;
    }
    .el-button.back-btn-all {
      top: 52%;
    }
  }

  .border-box {
    border: solid 1px $color-bd;
    background-color: #fff;
    border-radius: 4px;
    margin-top: -2px;
  }
}
.live-mager {
  .switch-cover {
    position: relative;
    z-index: 199;
    &.close::before {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background: rgba($color: #fff, $alpha: 0.7);
      z-index: 199;
      cursor: not-allowed;
    }
  }
  .group {
    padding: 0 50px;
    .title {
      font-size: 24px;
      & > span {
        display: inline-block;
        position: relative;
        left: 10px;
        top: -3px;
        border: solid 1px #e2e2e2;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        padding: 5px 10px;
        margin-right: 10px;
        line-height: 18px;
        font-size: 12px;
      }
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
    .fwn2 {
      margin-top: 10px;
    }
  }
  .group-content {
    padding-bottom: 15px;
    &:first-of-type {
      padding: 35px 0;
    }
    .state {
      padding: 0 20px;
    }
    .template-block {
      display: inline-block;
      width: 227px;
      height: 282px;
      border: 1px solid #dadada;
      margin-right: 40px;
      font-size: 14px;
      position: relative;
      // overflow: hidden;
      border-radius: 4px;
      img {
        width: 100%;
        height: 100%;
        border-radius: 4px;
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
        border-radius: 4px;
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
      .tpl-name {
        display: inline-block;
        padding-top: 10px;
        width: 100%;
        text-align: center;
        color: #888;
      }
    }
    .empty {
      display: inline-block;
      width: 225px;
      height: 280px;
      text-align: center;
      padding: 20px;
      border: 1px dashed #dadada;
      margin-bottom: 15px;
      border-radius: 4px;
      .img {
        width: 150px;
        height: 150px;
        background: url('~assets/image/site/site_empty.png') no-repeat center;
        background-size: contain;
        margin: 0 auto;
      }
      .txt {
        padding-top: 20px;
        font-size: 12px;
        color: #555;
      }
    }
  }
}
</style>
