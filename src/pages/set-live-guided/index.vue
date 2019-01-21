<template>
  <div class="clearfix set-live-guided-container">
    <p class="v-title">
      直播引导页
      <com-back></com-back>
    </p>
    <div class="v-content">
      <div class="v-set clearfix">
        <div class="v-edit pull-left">
          <div class="input-form v-label clearfix">
            <p class="v-info-label pull-left">
              观看条件：
            </p>
            <p class="v-info pull-left"
               style="margin-top: 6px;">
              {{viewCondition === 'APPOINT'? '报名':'无限制'}}
            </p>
          </div>
          <div class="input-form v-label clearfix">
            <p class="v-info-label pull-left">
              引导标题：
            </p>
            <p class="v-info pull-left"
               @click="canPass = false">
              <com-input :value.sync="title"
                         placeholder="标题"
                         :max-length="20"></com-input>
            </p>
          </div>
          <div class="input-form v-label clearfix">
            <p class="v-info-label pull-left">
              引导图片：
            </p>
            <ve-upload title="建议图片不小于900*1080px<br/>支持jpg、jpeg、png格式，文件大小不超过2M"
                       accept="png|jpg|jpeg"
                       :defaultImg="defaultImg"
                       :fileSize="2048"
                       :errorMsg="uploadImgErrorMsg"
                       @error="uploadError"
                       @success="uploadImgSuccess"></ve-upload>
          </div>
          <div class="input-form v-label clearfix">
            <p class="v-info-label pull-left">
              辅助信息：
            </p>
            <p class="v-info pull-left"
               style="width: 332px; margin-top: 10px;"
               @click='canPass = false'>
              <el-radio v-model="showType"
                        label='DESCRIPTION'>显示直播简介</el-radio>
              <el-radio v-model="showType"
                        label='COUNTDOWN'>显示直播倒计时</el-radio>
              <com-input type="textarea"
                         :value.sync="description"
                         v-if="showType!=='COUNTDOWN'"
                         placeholder="请输入简介"
                         :max-length="50"></com-input>
            </p>
          </div>
        </div>
        <div class="v-show pull-right">
          <com-tabs :value.sync="tabValue">
            <com-tab label="电脑预览"
                     :index="1"
                     class="clearfix">
              <div class="v-pc  pull-right clearfix">
                <div class="v-img pull-left">
                  <template v-if="defaultImg">
                    <!--<img :src="$imgHost + '/' + imgUrl"-->
                    <!--alt="">-->
                    <div class="img-bg" :style="{backgroundImage:`url(${$imgHost}/${imgUrl})`}"></div>
                  </template>
                  <template v-else>
                    <div class="img-bg"></div>
                    <!--<img src="../../assets/image/guid.jpg"-->
                    <!--alt="">-->
                  </template>
                </div>
                <div class="v-pc-info pull-left">
                  <p class="v-pc-title">
                    {{title}}
                  </p>
                  <div v-if="showType === 'DESCRIPTION'"
                       class="v-pc-description">
                    <p>
                      {{description}}
                    </p>
                  </div>
                  <div class="v-pc-operation"
                       v-else>
                    <p class="v-count-title">
                      距离直播开始还有
                    </p>
                    <div class="v-cutdown-content">
                      <span class="v-red">XX</span>天
                      <span class="v-red">XX</span>小时
                      <span class="v-red">XX</span>分钟
                      <span class="v-red">XX</span>秒
                    </div>
                  </div>
                  <span href="javascript:;"
                        class="v-pc-enroll">
                    {{viewCondition === 'APPOINT'? '报名':'预约'}}
                  </span>
                </div>
              </div>
            </com-tab>
            <com-tab label="手机预览"
                     :index="2"
                     class="clearfix">
              <div class="v-phone pull-right">
                <div class="v-img">
                  <template v-if="defaultImg">
                    <div class="img-bg" :style="{backgroundImage:`url(${$imgHost}/${imgUrl})`}"></div>
                    <!--<img :src="$imgHost + '/' + imgUrl"-->
                         <!--alt="">-->
                  </template>
                  <template v-else>
                    <div class="img-bg"></div>
                    <!--<img src="../../assets/image/guid.jpg"-->
                         <!--alt="">-->
                  </template>
                </div>
                <div class="v-phone-info">
                  <p class="v-phone-title">
                    {{title}}
                  </p>
                  <div class="v-phone-operation">
                    <div v-if="showType === 'DESCRIPTION'"
                         class="v-phone-description">
                      <p class="v-description">
                        {{description}}
                      </p>
                    </div>
                    <div v-if="showType === 'COUNTDOWN'"
                         class="v-phone-countdown">
                      <p class="v-count-title">
                        距离直播开始还有
                      </p>
                      <div class="v-cutdown-content">
                        <span class="v-red">XX</span>天
                        <span class="v-red">XX</span>小时
                        <span class="v-red">XX</span>分钟
                        <span class="v-red">XX</span>秒
                      </div>
                    </div>
                    <span href="javascript:;"
                          class="v-phone-enroll">
                      {{viewCondition === 'APPOINT'? '报名':'预约'}}
                    </span>
                  </div>
                </div>
              </div>
            </com-tab>
          </com-tabs>
        </div>
      </div>
      <button @click='save'
              class='primary-button v-share-button'>
        保存
      </button>
    </div>
  </div>
</template>
<script>
import brandService from 'src/api/brand-service'
import VeUpload from 'src/components/ve-upload-image'
import activityService from 'src/api/activity-service'
import EventBus from 'src/utils/eventBus'

export default {
  data () {
    return {
      activityId: 0,
      viewCondition: '', // 观看条件
      title: '', // 引导标题
      showType: '', // 显示倒计时|显示简介
      description: '', // 简介
      tabValue: 1, // 预览页签选择
      imgUrl: '', // 引导图片
      uploadImgErrorMsg: '',
      canPass: true,
      published: '' // 直播状态
    }
  },
  components: {
    VeUpload
  },
  computed: {
    defaultImg () {
      return this.imgUrl ? this.$imgHost + '/' + this.imgUrl : ''
    }
  },
  created () {
    this.activityId = this.$route.params.id
    EventBus.$emit('breads', [{
      title: '活动管理'
    }, {
      title: '活动列表',
      url: '/liveMager/list'
    }, {
      title: '活动详情',
      url: `/liveMager/detail/${this.activityId}`
    }, {
      title: '直播引导页'
    }])
    let data = {
      'activityId': this.activityId
    }
    if (!this.activityId) {
      this.$router.go(-1)
      return
    }
    this.$get(activityService.GET_WEBINAR_INFO, {
      id: this.activityId
    }).then((res) => {
      this.published = res.data.published
    })
    this.$get(brandService.GET_LIVE_GUIDE, data).then(res => {
      if (res.data) {
        this.viewCondition = res.data.viewCondition ? res.data.viewCondition : ''
        this.title = res.data.title ? res.data.title : ''
        this.showType = res.data.showType ? res.data.showType : ''
        this.description = res.data.description ? res.data.description : '' // 60max
        this.imgUrl = res.data.imgUrl ? res.data.imgUrl : ''
        this.tabValue = 1
      }
    })
  },
  mounted () {
  },
  watch: {
  },
  /* 路由守卫，离开当前页面之前被调用 */
  beforeRouteLeave (to, from, next) {
    if (this.canPass) {
      next(true)
      return
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
  methods: {
    uploadImgSuccess (data) {
      this.canPass = false
      this.imgUrl = data.name
    },
    uploadError (data) {
      this.uploadImgErrorMsg = data.msg
      this.imgUrl = ''
    },
    save () {
      let data = {
        'activityId': this.activityId,
        'title': this.title,
        'showType': this.showType,
        'imgUrl': this.imgUrl,
        'description': this.description
      }
      this.$config({ handlers: true }).$post(brandService.POST_SET_LIVE_GUIDE, data).then(res => {
        this.canPass = true
        // this.$toast({
        //   content: '保存成功',
        //   position: 'center'
        // })
        this.$router.push(`/liveMager/detail/${this.activityId}`)
      }).catch((err) => {
        this.$messageBox({
          header: '提示',
          content: err.msg,
          confirmText: '确定',
          handleClick: (e) => {
            if (e.action === 'cancel') {
            } else if (e.action === 'confirm') {
            }
          }
        })
      })
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~assets/css/mixin.scss';
.set-live-guided-container /deep/ {
  /* 设备宽度大于 1600 */
  @media all and (min-width: 1600px) {
    width: 1366px;
  }
  /* 设备宽度小于 1600px */
  @media all and (max-width: 1600px) {
    width: 1019px;
  }
  margin: 0 auto;
  .pull-left {
    float: left;
  }
  .pull-right {
    float: right;
  }
  .v-title {
    position: relative;
    line-height: 60px;
    margin: 32px 0 7px;
    font-size: 24px;
    color: #222;
  }
  .v-content {
    /*margin-top: 26px;*/
    width: 100%;
    min-height: 835px;
    background-color: #fff;
    border: 1px solid #e2e2e2;
    border-radius: 4px;
    .v-set {
      width: 920px;
      margin: 60px auto 0;
    }
  }
  .v-edit {
    .input-form {
      position: relative;
      margin-bottom: 30px;
      .v-info-label {
        font-size: 14px;
        color: #555;
        width: 70px;
        padding-top: 6px;
        margin-right: 17px;
      }
      .v-notes {
        font-size: 14px;
        color: #888888;
        padding-left: 87px;
        margin: 10px auto 0;
      }
      .v-info {
        font-size: 14px;
        color: #555;
        width: 330px;
        .com-input {
          width: 100%;
        }
        .area.com-input {
          margin-top: 10px;
          height: 140px;
        }
        .limit {
          right: 8px;
          bottom: 8px;
        }
      }
      .ve-upload-box {
        width: 330px;
        .upload-file-box {
          width: 290px;
          span {
            line-height: 14px;
          }
        }
      }
    }
    .v-save {
      display: block;
      width: 155px;
      height: 45px;
      text-align: center;
      line-height: 45px;
      text-decoration: none;
      color: #fff;
      background-color: #666;
      margin-left: 80px;
    }
  }
  .primary-button {
    margin: 50px auto;
    display: block;
    width: 200px;
  }
  .v-show {
    width: 462px;
    .com-tabs {
      height: 554px;
    }
    .v-phone {
      width: 250px;
      height: 499px;
      background: url('~assets/image/phone-wechat.png');
      background-size: cover;
      background-position: center center;
      position: relative;
      margin-right: 75px;
      .v-img {
        width: 229px;
        height: 193px;
        margin-left: 11px;
        margin-top: 45px;
        border-radius: 5px 5px 0 0;
        overflow: hidden;
        .img-bg {
          width: 100%;
          height: 100%;
          /*border-radius: 4px;*/
          background-size: cover;
          background-position: center center;
          background-repeat: no-repeat;
          background-image: url('../../assets/image/guid.jpg');
        }
        img {
          width: 100%;
          height: 100%;
        }
      }
      .v-phone-info {
        width: 229px;
        height: 217px;
        margin-left: 11px;
        background-color: #fff;
        border-radius: 0 0 10px 10px;
        padding-top: 20px;
        .v-phone-title {
          color: #222;
          font-size: 16px;
          text-align: center;
          word-break: break-all;
        }
        .v-phone-operation {
          height: 96px;
          border-radius: 0 0 5px 5px;
        }
        .v-phone-description {
          color: #555;
          word-break: break-all;
          width: 210px;
          font-size: 12px;
          text-align: center;
          margin: 15px auto 23px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        .v-phone-countdown {
          height: 30px;
          text-align: center;
          font-size: 20px;
          transform: scale(0.5);
          -webkit-transform-origin: top left;
          .v-count-title {
            color: #555;
            width: 165px;
            margin: 5px 0 0 149px;
          }
          .v-cutdown-content {
            width: 285px;
            margin: 10px 0 0 98px;
            .v-red {
              color: #fc5659;
              font-size: 26px;
            }
          }
        }
        .v-phone-enroll {
          display: block;
          width: 130px;
          height: 28px;
          line-height: 28px;
          background-color: #ffd021;
          border-radius: 50px;
          margin: 10px auto;
          text-decoration: none;
          text-align: center;
          color: #222;
          font-size: 14px;
        }
      }
    }
    .v-pc {
      width: 462px;
      height: 349px;
      background: url('~assets/image/mac_bg@2x.png');
      background-position: center center;
      background-size: cover;
      position: relative;
      padding: 32px 0 0 12px;
      .v-img {
        width: 207px;
        height: 250px;
        border-radius: 1px 0 0 1px;
        overflow: hidden;
        .img-bg {
          width: 100%;
          height: 100%;
          // border-radius: 7px 0 0 7px;
          background-size: cover;
          background-position: center center;
          background-repeat: no-repeat;
          background-image: url('../../assets/image/guid.jpg');
        }
        img {
          width: 100%;
          height: 100%;
        }
      }
      .v-pc-info {
        width: 50%;
        height: 259px;
        border-radius: 0 7px 7px 0;
        overflow: hidden;
        background-color: #fff;
        .v-pc-title {
          color: #222;
          font-size: 13px;
          text-align: center;
          margin-top: 55px;
        }
        .v-pc-description {
          color: #555;
          font-size: 12px;
          text-align: center;
          padding-top: 10px;
          width: 195px;
          word-break: break-all;
          margin: 0 auto;
        }
        .v-pc-operation {
          font-size: 12px;
          text-align: center;
          .v-count-title {
            margin: 8px 0;
          }
          .v-red {
            font-size: 18px;
            color: #fc5659;
          }
        }
        .v-pc-countdown {
          width: 200px;
          height: 50px;
          border: 1px solid #666;
          margin: 5px auto;
        }
        .v-pc-enroll {
          display: block;
          width: 130px;
          height: 28px;
          line-height: 28px;
          background-color: #ffd021;
          border-radius: 50px;
          margin: 30px auto 0;
          text-decoration: none;
          text-align: center;
          font-size: 14px;
        }
      }
    }
  }
}
</style>

