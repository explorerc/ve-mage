<template>
  <div class="template-container">
    <div class="header">
      <div v-if="!ptid" class="title">{{title}}-<span>{{publishState}}</span></div>
      <a @click="goBack" class="back">返回</a>
      <el-select v-model="cType" class="type-select"  @change="changeType">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
         >
        </el-option>
      </el-select>
      <div class="preview-group" v-if="isPreview&&!ptid">
        <a @click="platform='PC'">电脑版</a>
        <a @click="platform='H5'">手机版</a>
        <a >分享</a>
      </div>
      <a @click="doReset" class="reset" v-if="!isPreview&&!ptid&&cType==='tp'">重置</a>
      <a @click="doSave" class="save" v-if="!isPreview&&!ptid">保存</a>
    </div>
    <div class="template-content" v-show="cType==='tp'" >
      <component v-if="platform==='PC'" :editAble="!isPreview" v-model="data" v-bind:is="com"></component>
      <div v-if="platform==='H5'" class="h5-wrap">
        <iframe :src="`${this.mobileHost}site/${this.tid}`" frameborder="0" class="h5-preview"></iframe>
      </div>
    </div>
    <div class="template-content" v-show="cType==='tdk'" >
      <div class="content from-box">
        <div class="from-row">
          <div class="from-title"><i class="star">*</i>直播标题：</div>
          <div class="from-content">
            <com-input :value.sync="title" placeholder="请输入直播标题" :max-length="60" class='inp' :class="{ 'error':titleEmpty }" @focus='titleEmpty = false'></com-input>
            <span class="error-tips" v-if='titleEmpty'>直播标题不能为空</span>
          </div>
        </div>
        <div class="from-row">
          <div class="from-title"><i class="star"></i>直播封面：</div>
          <div class="from-content">
            <ve-upload title="图片支持jpg、png、bmp格式，建议比例16:9，大小不超过2M" accept="png|jpg|jpeg|bmp|gif" :defaultImg="defaultImg" :fileSize="2048" :errorMsg="uploadImgErrorMsg" @error="uploadError" @success="uploadImgSuccess"></ve-upload>
          </div>
        </div>
        <div class="from-row">
          <div class="from-title"><i class="star">*</i>直播介绍：</div>
          <div class="from-content editor-content" style='position:relative;' :class="{ 'error':outRange, 'error':descEmpty }">
            <textarea></textarea>
            <span class='content-count'><i class='count'>{{countCount}}</i>/1000</span>
            <span class="error-tips" v-if="outRange">直播简介不能超过1000个字符</span>
            <span class="error-tips" v-if="descEmpty">直播简介不能为空</span>
          </div>
        </div>
      </div>
    </div>
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
      outRange: false,
      titleEmpty: false,
      descEmpty: false,
      countCount: 0,
      uploadImgErrorMsg: '',
      options: [
        {
          label: '内容主题',
          value: 'tp'
        },
        {
          label: '推广信息',
          value: 'tdk'
        }
      ],
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
        link: location.href
      },
      data: {},
      ptid: this.$route.query.tid,
      tid: this.$route.params.id,
      title: '',
      mobileHost: process.env.MOBILE_HOST,
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
    uploadImgSuccess (data) {
      this.poster = data.name
    },
    uploadError (data) {
      console.log('上传失败:', data)
    },
    init () {
      if (this.ptid) {
        this.com = `t${this.ptid}`
      } else {
        activityService.webinarInfo(this.tid).then(res => {
          ({ title: this.title, published: this.published } = res.data)
          this.share.title = res.data.title
          this.share.des = ''
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
    doSave (callback) {
      brandService.updateSiteData({
        __loading: true,
        activityId: this.tid,
        template: JSON.stringify(this.data)
      }).then(data => {
        this.$toast({
          content: '保存成功',
          autoClose: 500
        })
        setTimeout(() => {
          this.changed = false
        }, 500)
        setTimeout(() => {
          callback && callback()
        }, 500)
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
            brandService.updateSiteData({
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
      console.log(value)
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
      return this.poster ? `${this.$imgHost}/${this.poster}` : ''
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
    .type-select {
      position: absolute;
      top: 0;
      left: 110px;
      height: 100%;
      width: 150px;
      text-align: center;
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
    .reset {
      position: absolute;
      top: 0;
      right: 110px;
      height: 100%;
      width: 110px;
      text-align: center;
      border-left: 1px solid #999;
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
