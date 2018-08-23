<template>
  <div class="clearfix v-div">
    <p class="v-title">
      直播引导页
    </p>
    <div class="v-edit pull-left">
      <div class="input-form v-label clearfix" >
        <p class="v-info-label pull-left">
          观看条件：
        </p>
        <p class="v-info pull-left">
          {{viewCondition}}
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
        actionUrl="/api/upload/do-upload"
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
          <el-checkbox v-model="isShowCountDown">活动开始前显示直播倒计时</el-checkbox>
          <el-checkbox v-model="isShowIntroduction">显示直播简介</el-checkbox>
          <el-input type="textarea" :rows="5" placeholder="请输入内容" v-model="introduction">
          </el-input>
        </p>
      </div>
      <a href="jacascript:;" class="v-save">保存</a>
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
              <div v-if="isShowIntroduction" class="v-phone-introduction">
                <p>
                  {{introduction}}
                </p>
              </div>
              <div class="v-phone-operation">
                <div v-if="isShowCountDown" class="v-phone-countdown">
                  5天23小时44分钟12秒
                </div>
                <a href="javascript:;" class="v-phone-enroll">
                  报名
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
              <div v-if="isShowIntroduction" class="v-pc-introduction">
                <p>
                  {{introduction}}
                </p>
              </div>
              <div class="v-pc-operation">
                <div v-if="isShowCountDown" class="v-pc-countdown">
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
  // import account from 'src/api/account-manage'
  // import identifyingcodeManage from 'src/api/identifyingcode-manage'
  export default {
    data () {
      return {
        viewCondition: '活动报名', // 观看条件
        title: '标题', // 引导标题
        isShowCountDown: true, // 是否显示倒计时
        isShowIntroduction: true, // 是否显示简介
        introduction: '666', // 简介
        tabValue: 1, // 预览页签选择
        imgUrl: ''// 引导图片
      }
    },
    components: {
    },
    created () {
    },
    mounted () {
    },
    watch: {
      userPhone: function () {
        console.log(1)
      }
    },
    methods: {
      setPassword () {
        console.log(1)
      },
      uploadImgSuccess (data) {
        const fildObj = JSON.parse(data.data)
        console.log(fildObj)
        this.imgUrl = fildObj.data.name
      },
      uploadError (data) {
        console.log('上传失败:', data)
      }
    }
  }
</script>
<style lang="scss">
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
        .v-phone-introduction {
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
        .v-pc-introduction {
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
</style>

