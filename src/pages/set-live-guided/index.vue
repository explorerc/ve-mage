<template>
  <div class="clearfix set-live-guided-container">
    <p class="v-title">
      直播引导页
    </p>
    <div class="v-edit pull-left">
      <div class="input-form v-label clearfix" >
        <p class="v-info-label pull-left">
          观看条件：
        </p>
        <p class="v-info pull-left">
          {{viewCondition === 'APPOINT'? '报名':'预约'}}
        </p>
      </div>
      <div class="input-form v-label clearfix" >
        <p class="v-info-label pull-left">
          引导标题：
        </p>
        <p class="v-info pull-left">
          <com-input :value.sync="title" placeholder="标题" :max-length="15" ></com-input>
        </p>
      </div>
      <div class="input-form v-label clearfix" >
        <p class="v-info-label pull-left">
          引导图片：
        </p>
        <p class="v-info pull-left">
          为了保证显示效果，请上传不大于1920x1080大小的图片，支持jpg、jpeg、png格式，文件大小不超过2M
        <com-upload
        accept="png|jpg|jpeg|bmp|gif"
        actionUrl="/api/upload/image"
        inputName="file"
        :fileSize="2048"
        @error="uploadError"
        @load="uploadImgSuccess"
        >
        <div class="test-upload">上传引导图</div>
        </com-upload>
        </p>
      </div>
      <div class="input-form v-label clearfix" >
        <p class="v-info-label pull-left">
          辅助信息：
        </p>
        <p class="v-info pull-left">
          <el-radio v-model="showType" label='COUNTDOWN'>活动开始前显示直播倒计时</el-radio>
          <el-radio v-model="showType" label='DESCRIPTION'>显示直播简介</el-radio>
          <el-input type="textarea" :rows="5" placeholder="请输入内容" v-model="description">
          </el-input>
        </p>
      </div>
      <a href="javascript:;" class="v-save" @click="save()">保存</a>
    </div>
    <div class="v-show pull-left">
      <p class="v-sub-title">
        预览
      </p>
      <com-tabs :value.sync="tabValue" >
        <com-tab label="手机" :index="1">
          <div class="v-phone">
            <div class="v-img">
              <img :src="$imgHost + '/' + imgUrl" alt="">
            </div>
            <div class="v-phone-info">
              <p class="v-phone-title">
                {{title}}
              </p>
              <div v-if="showType === 'DESCRIPTION'" class="v-phone-description">
                <p>
                  {{description}}
                </p>
              </div>
              <div class="v-phone-operation">
                <div v-if="showType === 'COUNTDOWN'" class="v-phone-countdown">
                  5天23小时44分钟12秒
                </div>
                <a href="javascript:;" class="v-phone-enroll">
                  {{viewCondition === 'APPOINT'? '报名':'预约'}}
                </a>
              </div>
            </div>
          </div>
        </com-tab>
        <com-tab label="电脑" :index="2">
          <div class="v-pc clearfix">
            <div class="v-img pull-left">
              <img :src="$imgHost + '/' + imgUrl" alt="">
            </div>
            <div class="v-pc-info pull-left">
              <p class="v-pc-title">
                {{title}}
              </p>
              <div v-if="showType === 'DESCRIPTION'" class="v-pc-description">
                <p>
                  {{description}}
                </p>
              </div>
              <div class="v-pc-operation">
                <div v-if="showType === 'COUNTDOWN'" class="v-pc-countdown">
                  5天23小时44分钟12秒
                </div>
                <a href="javascript:;" class="v-pc-enroll">
                  报名
                </a>
              </div>
            </div>
          </div>
        </com-tab>
      </com-tabs>
    </div>
  </div>
</template>
<script>
  import liveGuidedManage from 'src/api/set-live-guided-manage'
  export default {
    data () {
      return {
        activityId: 0,
        viewCondition: '', // 观看条件
        title: '标题', // 引导标题
        showType: '', // 显示倒计时|显示简介
        description: '', // 简介
        tabValue: 1, // 预览页签选择
        imgUrl: ''// 引导图片
      }
    },
    components: {
    },
    created () {
      this.activityId = this.$route.params.id
      let data = {
        'activityId': this.activityId
      }
      if (!this.activityId) {
        this.$router.go(-1)
        return
      }
      liveGuidedManage.getLiveGuided(data).then((res) => {
        if (res.code !== 200) {
          console.log(res.msg)
        } else {
          debugger
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
    methods: {
      uploadImgSuccess (data) {
        const fildObj = JSON.parse(data.data)
        console.log(fildObj)
        this.imgUrl = fildObj.data.name
      },
      uploadError (data) {
        console.log('上传失败:', data)
      },
      save () {
        let data = {
          'activityId': this.activityId,
          'title': this.title,
          'showType': this.showType,
          'imgUrl': this.imgUrl,
          'description': this.description
        }
        liveGuidedManage.setLiveGuided(data).then((res) => {
          if (res.code !== 200) {
            console.log(res.msg)
          } else {
            alert('保存成功')
          }
        })
      }
    }
  }
</script>
<style lang="scss" scoped>
.set-live-guided-container {
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
  .v-div {
    padding: 30px;
    .v-title {
      font-size: 18px;
      width: 100%;
      border-bottom: 1px solid #666;
    }
    .v-edit {
      width: 665px;
      .v-info-label {
        width: 80px;
        height: 100%;
      }
      .v-info {
        max-width: 450px;
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
    .v-show {
      width: 690px;
      .v-phone {
        border: 1px solid #666;
        width: 333px;
        height: 620px;
        .v-img {
          width: 100%;
          height: 333px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .v-phone-info {
          .v-phone-title {
            font-size: 12px;
            text-align: left;
            border-bottom: 1px solid #666;
          }
          .v-phone-description {
            font-size: 12px;
            text-align: center;
            border-bottom: 1px solid #666;
            height: 100px;
          }
          .v-phone-countdown {
            width: 255px;
            height: 50px;
            border: 1px solid #666;
            margin: 5px auto;
          }
          .v-phone-enroll {
            display: block;
            width: 255px;
            height: 35px;
            border: 1px solid #666;
            margin: 10px auto;
            text-decoration: none;
            text-align: center;
            line-height: 35px;
          }
        }
      }
      .v-pc {
        width: 650px;
        height: 365px;
        border: 1px solid #666;
        .v-img {
          width: 420px;
          height: 236px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .v-pc-info {
          width: 228px;
          text-align: center;
          .v-pc-title {
            font-size: 12px;
            text-align: left;
            border-bottom: 1px solid #666;
          }
          .v-pc-description {
            font-size: 12px;
            text-align: center;
            border-bottom: 1px solid #666;
            height: 100px;
          }
          .v-pc-countdown {
            width: 200px;
            height: 50px;
            border: 1px solid #666;
            margin: 5px auto;
          }
          .v-pc-enroll {
            display: block;
            width: 200px;
            height: 35px;
            border: 1px solid #666;
            margin: 10px auto;
            text-decoration: none;
            text-align: center;
            line-height: 35px;
          }
        }
      }
    }
  }
}
</style>

