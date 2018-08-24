<template>
  <div class="clearfix set-live-watch-container">
    <p class="v-title">
      直播观看页
    </p>
    <com-tabs :value.sync="tabValue" >
      <com-tab label="品牌" :index="1">
        <div class="v-brand clearfix">
          <div class="v-set pull-left">
            <div class="input-form v-label clearfix" >
              <p class="v-info-label pull-left">
                背景图片：
              </p>
              <p class="v-info pull-left">
                为了保证显示效果，请上传不大于1920x1080大小的图片，支持jpg、jpeg、png格式，文件大小不超过2M
                <br/>
                背景图片，只对PC页面生效
              </p>
              <com-upload accept="png|jpg|jpeg|bmp|gif" actionUrl="/api/upload/do-upload" inputName="file" :fileSize="2048" @error="uploadError" @load="uploadBgSuccess">
                <div class="btn-upload">背景图片</div>
              </com-upload>
            </div>
            <div class="input-form v-label clearfix" >
              <p class="v-info-label pull-left">
                logo图片：
              </p>
              <p class="v-info pull-left">
                为了保证显示效果，请上传不大于140x50大小的图片，支持jpg、jpeg、png格式，文件大小不超过2M
                <br/>
                Logo图片只对PC页面生效
              </p>
              <com-upload accept="png|jpg|jpeg|bmp|gif" actionUrl="/api/upload/do-upload" inputName="file" :fileSize="2048" @error="uploadError" @load="uploadLogoSuccess">
                <div class="btn-upload">背景图片</div>
              </com-upload>
            </div>
            <a href="javascript:;" class="v-save" @click="brandClick()">
              保存
            </a>
          </div>
          <div class="v-show pull-left">
            <p>预览</p>
            <div class="v-pc" :style="{ backgroundImage: 'url(' + $imgHost + '/' + bgImgUrl + ')'}">
              <div class="v-content">
                <img :src="$imgHost + '/' + logoImgUrl" alt="logo">
              </div>
            </div>
          </div>
        </div>
      </com-tab>
      <com-tab label="分享" :index="2">
        <div class="v-share clearfix">
          <div class="v-set pull-left">
            <div class="input-form v-label clearfix" >
              <p class="v-info-label pull-left">
                分享图标：
              </p>
              <p class="v-info pull-left">
                为了保证显示效果，请上传不大于***X***大小的图片，支持jpg、jpeg、png格式，文件大小不超过2M
              </p>
              <com-upload accept="png|jpg|jpeg|bmp|gif" actionUrl="/api/upload/do-upload" inputName="file" :fileSize="2048" @error="uploadError" @load="uploadShareSuccess">
                <div class="btn-upload">修改</div>
              </com-upload>
            </div>
            <div class="input-form v-label clearfix" >
              <p class="v-info-label pull-left">
                分享标题：
              </p>
              <p class="v-info pull-left">
                <com-input :value.sync="shareTitle" placeholder="标题" :max-length="30" ></com-input>
              </p>
            </div>
            <div class="input-form v-label clearfix" >
              <p class="v-info-label pull-left">
                分享简介：
              </p>
              <p class="v-info pull-left">
                <el-input type="textarea" :rows="5" placeholder="请输入分享简介" v-model="shareIntroduction" :max-length="120">
                </el-input>
              </p>
            </div>
            <div class="input-form v-label clearfix" >
              <p class="v-info-label pull-left">
                应用页面：
              </p>
              <p class="v-info pull-left">
                <el-checkbox v-model="isShowWatch">直播观看页</el-checkbox>
                <el-checkbox v-model="isShowOfficialWebsite">活动官网</el-checkbox>
                <el-checkbox v-model="isShowGuided">直播引导页</el-checkbox>
              </p>
            </div>
            <a href="javascript:;" class="v-save" @click="shareClick()">
              保存
            </a>
          </div>
          <div class="v-show pull-left">
            <p>预览</p>
            <div class="v-title">
              分享给好友
            </div>
            <div class="clearfix">
              <img src="" alt="头像" class="v-avatar pull-left">
              <div class="pull-left v-share-friend clearfix">
                <div class="pull-left">
                  <p class="v-share-title">
                    {{shareTitle}}
                  </p>
                  <p class="v-introduction">
                    {{shareIntroduction}}
                  </p>
                </div>
                <div class="pull-left">
                  <img :src="$imgHost + '/' + shareImgUrl" alt="分享图标" class="v-show-img">
                </div>
              </div>
            </div>
            <div class="v-title">
              分享到朋友圈
            </div>
            <div class="v-share-friend-circle clearfix">
              <img src="" alt="头像" class="v-avatar">
              <span>微信昵称</span>
              <div class="v-content clearfix">
                <img :src="$imgHost + '/' + shareImgUrl" alt="分享图标" class="v-show-img pull-left">
                <p class="v-introduction pull-left">
                  {{shareIntroduction}}
                </p>
              </div>
            </div>
          </div>
        </div>
      </com-tab>
    </com-tabs>
  </div>
</template>
<script>
  // import account from 'src/api/account-manage'
  // import identifyingcodeManage from 'src/api/identifyingcode-manage'
  export default {
    data () {
      return {
        tabValue: 1, // 页签选择
        bgImgUrl: '', // 背景图片
        logoImgUrl: '', // logo图片
        shareImgUrl: '', // 分享图标
        shareTitle: '', // 分享标题
        shareIntroduction: '', // 分享简介
        isShowWatch: false, // 是否在直播观看页显示
        isShowOfficialWebsite: false, // 是否在活动官网显示
        isShowGuided: false// 是否在直播引导页显示
      }
    },
    components: {
    },
    created () {
    },
    mounted () {
    },
    watch: {
    },
    methods: {
      uploadBgSuccess (data) {
        const fildObj = JSON.parse(data.data)
        this.bgImgUrl = fildObj.data.name
      },
      uploadError (data) {
        console.log('上传失败:', data)
      },
      uploadLogoSuccess (data) {
        const fildObj = JSON.parse(data.data)
        this.logoImgUrl = fildObj.data.name
      },
      uploadShareSuccess (data) {
        const fildObj = JSON.parse(data.data)
        this.shareImgUrl = fildObj.data.name
      },
      brandClick () { // 品牌设置保存
        console.log('品牌设置保存')
      },
      shareClick () { // 分享设置保存
        console.log('分享设置保存')
      }
    }
  }
</script>
<style lang="scss" scoped>
.set-live-watch-container {
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
    .v-set {
      width: 600px;
      .v-info-label {
        width: 80px;
      }
      .v-info {
        width: 375px;
      }
    }
    .v-show {
      width: 630px;
      .v-pc {
        width: 620px;
        height: 340px;
        background-position: center;
        background-size: cover;
        padding: 25px 0;
        .v-content {
          width: 515px;
          height: 310px;
          margin: 0 auto;
          background-color: #999;
          position: relative;
          img {
            display: block;
            width: 140px;
            height: 50px;
            position: absolute;
            top: 15px;
            left: 15px;
          }
        }
      }
    }
    .v-share {
      .v-show {
        width: 360px;
        margin: 5px auto;
        .v-title {
          height: 35px;
          border: 1px solid #666;
          margin: 5px auto;
        }
        .v-avatar {
          display: inline-block;
          width: 35px;
          height: 35px;
          border: 1px solid #666;
        }
        .v-share-friend {
          width: 315px;
          height: 108px;
          border: 1px solid #666;
          margin-left: 10px;
          .v-show-img {
            display: inline-block;
            width: 80px;
            height: 80px;
            margin: 15px 0 0 35px;
          }
          .v-share-title,
          .v-introduction {
            width: 190px;
            word-break: break-all;
          }
        }
        .v-share-friend-circle {
          .v-avatar {
            display: inline-block;
            vertical-align: middle;
          }
          span {
            display: inline-block;
            vertical-align: middle;
          }
          .v-content {
            width: 315px;
            height: 77px;
            border: 1px solid #666;
            margin-left: 45px;
            .v-show-img {
              display: inline-block;
              width: 45px;
              height: 45px;
              margin: 15px 15px 0;
            }
            .v-introduction {
              width: 190px;
              word-break: break-all;
              margin-top: 10px;
            }
          }
        }
      }
    }
    .btn-upload {
      display: block;
      width: 175px;
      height: 35px;
      text-align: center;
      line-height: 35px;
      background-color: #666;
      color: #fff;
      margin-left: 80px;
    }
  }
}
</style>

