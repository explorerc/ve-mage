<!--新建/编辑活动-->
<template>
  <div>
    <div class='edit-page live-mager' v-if='!createdSuccess'>
      <div class="edit-title">
        <span class="title" v-if="activityId">编辑活动</span>
        <span class="title" v-else>新建活动</span>
      </div>
      <div class="tips">
        <i></i>注意：活动在直播有效期内可发起直播，过期后将无法发起直播
      </div>
      <div class="content from-box">
        <div class="from-row">
          <div class="from-title"><i class="star">*</i>直播标题：</div>
          <div class="from-content">
            <com-input :value.sync="title" placeholder="请输入直播标题" :max-length="60" class='inp' :class="{ 'error':titleEmpty }" @focus='titleEmpty = false'></com-input>
            <span class="error-tips" v-if='titleEmpty'>直播标题不能为空</span>
          </div>
        </div>
        <div class="from-row" >
          <div class="from-title"><i class="star">*</i>直播时间：</div>
          <div class="from-content" :class="{ 'error':dateEmpty }">
            <el-date-picker @focus='dateEmpty=false' v-model="date" type="datetime" placeholder="选择日期时间" :picker-options="pickerOptions" format='yyyy-MM-dd HH:mm:ss' value-format="yyyy-MM-dd HH:mm:ss" :popper-class="'datePicker'">
            </el-date-picker>
            <span class='tips-time'>直播有效期为直播时间后的48小时之内（或开始直播后的48小时之内）</span>
            <span class="error-tips" v-if='dateEmpty'>请选择直播时间</span>
          </div>
        </div>
        <div class="from-row">
          <div class="from-title"><i class="star"></i>直播封面：</div>
          <div class="from-content">
            <ve-upload title="图片支持jpg、png、bmp格式，建议比例16:9，大小不超过2M" accept="png|jpg|jpeg|bmp" :defaultImg="defaultImg" :fileSize="2048" :errorMsg="uploadImgErrorMsg" @error="uploadError" @success="uploadImgSuccess"></ve-upload>
          </div>
        </div>
        <div class="from-row">
          <div class="from-title"><i class="star">*</i>直播标签：</div>
          <div class="from-content">
            <ol class='tag-list clearfix'>
              <li v-for="item in tagGroup">{{item}}</li>
            </ol>
            <el-button @click='tagModal=true,tagEmpty = false' round class="add-tag">+</el-button>
            <div class="tag-modal" v-show='tagModal'>
              <el-checkbox-group v-model="tagGroup" size="mini" :max='6'>
                <el-checkbox-button v-for="tag in tagList" :label="tag" :key="tag">{{tag}}</el-checkbox-button>
              </el-checkbox-group>
            </div>
            <span class="error-tips" v-if='tagEmpty'>请添加直播标签</span>
          </div>
        </div>
        <div class="from-row">
          <div class="from-title"><i class="star">*</i>直播介绍：</div>
          <div class="from-content editor-content" style='position:relative;' :class="{ 'error':outRange, 'error':descEmpty }">
            <ve-editer height="280" v-model="editorContent" ></ve-editer>
            <span class='content-count'><i class='count'>{{countCount}}</i>/1000</span>
            <span class="error-tips" v-if="outRange">直播简介不能超过1000个字符</span>
            <span class="error-tips" v-if="descEmpty">直播简介不能为空</span>
          </div>
        </div>
        <div class="from-row">
          <div class="from-title"></div>
          <div class="from-content">
            <button @click='comfirm' class='create-btn' :disabled="outRange">
              <template v-if="activityId">更新</template>
              <template v-else>创建</template>
            </button>
          </div>
        </div>
      </div>
    </div>
    <transition name='fade'>
      <div class="finish-box" v-if='createdSuccess'>
          <dl>
            <dt></dt>
            <dd>直播已{{successTxt}}，您可以</dd>
            <dd>
              <router-link  class='finish-button detail' :to="{ name:'detail',params:{id:finishId} }">活动详情</router-link>
              <router-link class='finish-button list' :to="{name:'liveMager'}">活动列表</router-link>
            </dd>
          </dl>
      </div>
    </transition>
  </div>
</template>

<script>
  import VeUpload from 'src/components/ve-upload-image'
  import VeEditer from 'src/components/ve-html5-editer'
  // import http from 'src/api/activity-manger'
  import activityService from 'src/api/activity-service'
  export default {
    name: 'edit',
    data () {
      return {
        tagModal: false,
        isNew: true, // 是否是新建活动
        date: '',
        title: '',
        editorContent: '',
        outRange: false,
        titleEmpty: false,
        descEmpty: false,
        tagEmpty: false,
        dateEmpty: false,
        countCount: 0,
        tagList: [],
        tagGroup: [],
        poster: '',
        uploadImgErrorMsg: '', // 上传图片错误提示
        percentImg: 0, // 图片上传进度
        createdSuccess: false,
        activityId: this.$route.params.id,
        imgHost: process.env.IMGHOST + '/',
        // imgHost: 'http://dev-zhike.oss-cn-beijing.aliyuncs.com/',
        pickerOptions: {
          disabledDate (time) {
            return time.getTime() < Date.now() - 8.64e7
          }
        },
        successTxt: ''
      }
    },
    created () {
      this.tagList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] // 标签来源于客户管理中的内容标签模块
      if (this.activityId) { // 编辑页面请求接口返回活动信息
        this.isNew = false
        this.queryInfo()
      }
    },
    watch: {
      editorContent (newValue, oldValue) {
        this.$nextTick(() => {
          this.countCount = document.querySelector('.vue-html5-editor .content').innerText.length
          this.descEmpty = false
          if (this.countCount > 1000) {
            this.outRange = true
          } else {
            this.outRange = false
          }
        })
      }
    },
    methods: {
      // change (res) {
      //   console.log('change')
      //   // this.editorContent = res
      // },
      // closeModal (e) {
      //   if (e.target.className === 'modal-cover') {
      //     this.createdSuccess = false
      //   }
      // },
      // uploadProgress (data) {
      //   this.percentImg = parseFloat(parseFloat(data.percent.replace('%', '')).toFixed(2))
      //   if (this.percentImg === 100) {
      //     this.percentImg = 0
      //   }
      // },
      uploadImgSuccess (data) {
        this.poster = data.name
      },
      uploadError (data) {
        console.log('上传失败:', data)
        this.uploadImgErrorMsg = data.msg
      },
      uploadOver (e) {
        console.log(e)
      },
      queryInfo () {
        this.$config({loading: true}).$get(activityService.GET_WEBINAR_INFO, {
          id: this.activityId
        }).then((res) => {
          this.date = res.data.startTime
          this.title = res.data.title
          this.poster = res.data.imgUrl
          this.editorContent = res.data.description
          this.tagGroup = res.data.tags
        })
        // http.webinarInfo(this.activityId).then((res) => {
        //   if (res.code === 200) {
        //     this.date = res.data.startTime
        //     this.title = res.data.title
        //     this.poster = res.data.imgUrl
        //     this.editorContent = res.data.description
        //     this.tagGroup = res.data.tags
        //   }
        // }).catch(() => {})
      },
      comfirm () {
        // 提交数据
        let data = {
          id: this.activityId,
          startTime: this.date,
          title: this.title,
          imgUrl: this.poster,
          description: this.editorContent,
          tags: this.tagGroup
        }
        // console.log(data)
        this.title.length ? this.titleEmpty = false : this.titleEmpty = true
        this.tagGroup.length ? this.tagEmpty = false : this.tagEmpty = true
        this.editorContent.length ? this.descEmpty = false : this.descEmpty = true
        this.date.length ? this.dateEmpty = false : this.dateEmpty = true
        this.$nextTick(() => {
          if (this.title.length && this.tagGroup.length && this.editorContent.length && this.date.length) {
            this.updateWebinfo(this.isNew, data)
          }
        })
      },
      updateWebinfo (isNew, data) { // 新建 创建活动
        if (isNew) {
          this.$post(activityService.POST_CREATE_WEBINAR, data).then((res) => {
            this.createdSuccess = true
            this.successTxt = '创建成功'
            res.data.id ? this.finishId = res.data.id : this.finishId = this.activityId
          })
        } else {
          this.$post(activityService.POST_UPDATE_WEBINAR, data).then((res) => {
            this.createdSuccess = true
            this.successTxt = '更新成功'
            res.data.id ? this.finishId = res.data.id : this.finishId = this.activityId
          })
        }
        // http.updateWebinfo(isNew, data).then((res) => {
        //   if (res.code === 200) {
        //     this.createdSuccess = true
        //     isNew ? this.successTxt = '创建成功' : this.successTxt = '更新成功'
        //     res.data.id ? this.finishId = res.data.id : this.finishId = this.activityId
        //   }
        // }).catch((error) => {
        //   console.log(error)
        // })
      }
    },
    computed: {
      defaultImg () {
        return this.poster ? `${this.$imgHost}/${this.poster}` : ''
      }
    },
    components: {
      VeEditer,
      VeUpload
    }
  }
</script>

<style lang='scss' scoped>
@import 'assets/css/variable.scss';
@import 'assets/css/mixin.scss';

.edit-page {
  border-radius: 5px;
  overflow: hidden;
  padding-bottom: 30px;
  margin: 0 auto;
  color: #222;
  /* 设备宽度大于 1600 */
  @media all and (min-width: 1600px) {
    width: 1366px;
  }
  /* 设备宽度小于 1600px */
  @media all and (max-width: 1600px) {
    width: 1019px;
  }
  .edit-title {
    // border-bottom: 1px solid $color-bd;
    line-height: 60px;
    span.title {
      display: inline-block;
      font-size: 24px;
    }
  }
  .tips {
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    background: rgba(233, 235, 255, 1);
    border-radius: 4px;
    border: 1px solid rgba(129, 140, 254, 1);
    margin-bottom: 20px;
    i {
      width: 20px;
      height: 20px;
      display: inline-block;
      background: url('~assets/image/excal.svg') no-repeat;
      position: relative;
      top: 4px;
      right: 4px;
    }
  }
  .content /deep/ {
    & > p {
      margin: 15px 0;
    }
    font-size: 14px;
    padding: 40px 80px;
    width: 100%;
    // height: 860px;
    background: rgba(255, 255, 255, 1);
    border-radius: 4px;
    border: 1px solid rgba(226, 226, 226, 1);
    .star {
      position: relative;
      top: 3px;
      color: #fc5659;
      padding-right: 5px;
    }
    .inp {
      width: 440px;
      height: 40px;
      line-height: 40px;
      input {
        padding-left: 10px;
      }
    }
    .error input {
      border-color: $color-error;
    }
    .el-date-editor.el-input,
    .el-date-editor.el-input__inner {
      width: 440px;
    }
    .tips-time {
      display: block;
      color: #888;
      padding-top: 3px;
    }
    .create-btn {
      display: block;
      margin: 0 auto;
      @include primary-button;
      width: 200px;
    }
    .add-tag {
      margin: 11px 0;
      padding: 0px;
      width: 18px;
      height: 18px;
      line-height: 17px;
      text-align: center;
      border-radius: 20px;
      border: 1px solid rgba(226, 226, 226, 1);
    }
    .editor {
      width: 729px;
      height: 280px;
    }
    .content-count {
      position: absolute;
      bottom: 20px;
      right: 20px;
    }
    .html-editer .content {
      width: 727px;
    }
    .from-content.editor-content:not(.error):hover .vue-html5-editor {
      border-color: $color-blue-hover;
    }
    .from-content.error {
      .vue-html5-editor {
        border-color: $color-error;
      }
      .content-count * {
        color: $color-error;
      }
    }
    .error-tips {
      color: $color-error;
      display: block;
      position: absolute;
      font-size: 12px;
    }
  }
}
.finish-box {
  // position: absolute;
  // top: 50%;
  // left: 50%;
  // margin-left: -110px;
  // margin-right: -225px;
  margin: 200px auto;
  width: 450px;
  height: 220px;
  dl {
    text-align: center;

    margin: 0 auto;
  }
  dt {
    width: 122px;
    height: 90px;
    background: url('~assets/image/success@2x.png') no-repeat;
    background-size: contain;
    margin: 0 auto;
  }
  dd:nth-of-type(1) {
    padding: 20px 0 35px 0;
  }
  .finish-button {
    display: inline-block;
    padding: 0px;
    width: 200px;
  }
  .detail {
    @include primary-button;
    margin-right: 8px;
  }
  .list {
    @include default-button;
    margin-left: 8px;
  }
}
// .modal-cover {
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background: rgba($color: #000000, $alpha: 0.5);
//   z-index: 9999;
// }
.created-modal {
  width: 400px;
  height: 300px;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -150px;
  margin-left: -200px;
  background: white;
  border-radius: 10px;
  border: 1px solid #666;
  padding: 30px;
  text-align: center;
  .btm {
    padding: 20px 0;
  }
  span {
    cursor: pointer;
    display: inline-block;
    width: 150px;
  }
}

.upload-file-box {
  position: relative;
  display: inline-block;
  width: 150px;
  height: 150px;
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  color: #999;
  text-align: center;
  overflow: hidden;
  .iconfont {
    display: inline-block;
    margin-top: 4px;
    font-size: 30px;
  }
  span {
    display: block;
  }
  .upload-file-botton {
    position: absolute;
    bottom: -30px;
    left: 0;
    height: 30px;
    width: 100%;
    line-height: 30px;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    transition: bottom 0.5s;
    z-index: 10;
  }
  &:hover {
    transition: border 0.3s;
    opacity: 0.8;
    border-style: solid;
    .upload-file-botton {
      bottom: 0;
    }
  }
  .temp-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center center;
  }
  .el-progress--circle {
    margin-top: 12px;
  }
}

.tag-list {
  li {
    padding: 5px 30px;
    background: rgba(240, 241, 254, 1);
    border-radius: 20px;
    border: 1px solid rgba(240, 241, 254, 1);
    border: 1px solid #ccc;
    position: relative;
    display: inline-block;
    margin-right: 10px;
    &:before {
      content: '×';
      cursor: pointer;
      width: 15px;
      height: 15px;
      text-align: center;
      line-height: 16px;
      position: absolute;
      border: 1px solid #ccc;
      border-radius: 100px;
      font-size: 12px;
      top: 5px;
      right: 5px;
      background: #4b5afe;
      color: #fff;
    }
  }
}

.tag-modal {
  width: 200px;
  height: 200px;
  background: pink;
}
.from-box {
  // margin: 20px;
  .from-row {
    display: flex;
    padding: 15px 10px;
    .from-title {
      width: 110px;
      text-align: right;
      padding-right: 15px;
      line-height: 40px;
      .star {
        position: relative;
        top: 3px;
        color: $color-red;
        padding-right: 5px;
      }
    }
    .from-content {
      flex: 1;
      .input-box {
        width: 400px;
      }
    }
  }
}
</style>
