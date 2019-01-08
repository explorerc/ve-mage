<!--新建/编辑活动-->
<template>
  <div>
    <div class='edit-page live-mager' v-if='!createdSuccess' @click="clooseTagClose($event)"  @keydown="canPaas = false">
      <div class="edit-title">
        <span class="title" v-if="activityId">编辑活动</span>
        <span class="title" v-else>新建活动</span>
        <com-back :url="`/liveMager/detail/${activityId}`" v-if="activityId" :class="'back-btn'"></com-back>
        <com-back :url="`/liveMager/list`" v-else :class="'back-btn'"></com-back>
      </div>
      <div class="tips">
        <i></i>注意：在预设直播时间或实际开播时间的48小时后，直播将视为过期。在有效期内，直播可反复发起。过期后将无法再发起直播。
      </div>
      <div class="content from-box">
        <div class="from-row">
          <div class="from-title"><i class="star">*</i>直播标题：</div>
          <div class="from-content">
            <com-input :value.sync="title" placeholder="请输入直播标题" :max-length="30" class='inp' :class="{ 'error':titleEmpty }" @focus='titleEmpty = false'></com-input>
            <span class="error-tips" v-if='titleEmpty'>直播标题不能为空</span>
          </div>
        </div>
        <div class="from-row" >
          <div class="from-title"><i class="star">*</i>直播时间：</div>
          <div class="from-content" :class="{ 'error':dateEmpty }">
            <el-date-picker @focus='dateFocus()' v-model="date"  @change="canPaas=false" type="datetime" :clearable='false' placeholder="选择日期时间" :editable="false" :picker-options="pickerOptions" format='yyyy-MM-dd HH:mm' value-format="yyyy-MM-dd HH:mm" :popper-class="'datePicker'" :default-value="defaultValue" >
            </el-date-picker>
            <span class='tips-time'>在预设直播时间或实际开播时间的48小时后，直播将视为过期。<br>在有效期内，直播可反复发起。过期后将无法再发起直播。</span>
            <span class="error-tips" v-if='dateEmpty'>请选择直播时间</span>
          </div>
        </div>
        <div class="from-row">
          <div class="from-title"><i class="star"></i>直播封面：</div>
          <div class="from-content">
            <ve-upload title="图片支持jpg、png、bmp格式，建议比例16:9，大小不超过2M 建议尺寸不超过1600*900" accept="png|jpg|jpeg|bmp" :defaultImg="defaultImg" :fileSize="2048" :errorMsg="uploadImgErrorMsg" @error="uploadError" @success="uploadImgSuccess"></ve-upload>
          </div>
        </div>
        <div class="from-row">
          <div class="from-title"><i class="star">*</i>直播标签：</div>
          <div class="from-content" >
            <el-button  round v-if='!tagArray.length' @click='showClooseTag' class='choose-tag'>选择标签</el-button>
            <ol class='tag-list clearfix' v-else>
              <li v-for="(item,idx) in tagArray" :key="idx" class="tag">{{item.name}} <span @click="handleDel(idx,'tagArray')"></span></li>
            <li v-if="tagArray.length<3" class="add-tag"  @click.stop='addShowClooseTag'><span></span></li>
            </ol>
            <!-- <el-button @click='showChooseTag=true,tagEmpty = false' round class="add-tag">+</el-button> -->
            <div class="tag-modal" v-show='showChooseTag' @click.stop="">
              <div class='title'>选择标签，最多可选择 3 个</div>
              <i class='el-submenu__icon-arrow el-icon-arrow-down arrow' @click="showChooseTag = false"></i>
              <el-checkbox-group v-model="tagGroup" size="mini" :max='3' @change='selectTag'>
                <div class='group-title'>行业标签</div>
                <el-checkbox-button v-for="tag in industryTag" :label="tag.id" :key="tag.id">{{tag.name}}</el-checkbox-button>
                <div class='group-title'>场景标签</div>
                <el-checkbox-button v-for="tag in sceneTag" :label="tag.id" :key="tag.id">{{tag.name}}</el-checkbox-button>
              </el-checkbox-group>
            </div>
            <!-- <transition name='fade' mode='out-in' v-if="showChooseTag">
              <com-choose  @handleClick="handleClick" @selectComConfirm='selectTagConfirm' :list="tagList" :checkedData='tagArray'  :max='3' @searchHandler='searchHandler' :name="'标签'"></com-choose>
            </transition> -->
            <span class="error-tips" v-if='tagEmpty'>请添加直播标签</span>
          </div>
        </div>
        <div class="from-row">
          <div class="from-title">直播介绍：</div>
          <div class="from-content editor-content" style='position:relative;' :class="{ 'error':outRange}">
            <ve-editer height="280" v-model="editorContent" ></ve-editer>
            <span class='content-count'><i class='count' ref="count">{{countCount}}</i>/1000</span>
            <span class="error-tips" v-if="outRange">直播简介不能超过1000个字符</span>
          </div>
        </div>
        <div class="from-row" v-if="validStatus === 'Y' || !activityId">
          <div class="from-title"></div>
          <div class="from-content">
            <!--<button @click='comfirm' class='create-btn' :disabled="outRange || saveStatus">-->
            <button @click='comfirm' class='create-btn'>
              <template v-if="activityId">保存</template>
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
              <span class='finish-button detail'  @click='toDetail'>更多活动设置</span>
              <span class='finish-button list' @click='toList'>返回活动列表</span>
            </dd>
          </dl>
      </div>
    </transition>
  </div>
</template>

<script>
import { formatDate } from 'src/assets/js/date'
import VeUpload from 'src/components/ve-upload-image'
import VeEditer from 'src/components/ve-html5-editer'
// import http from 'src/api/activity-manger'
import activityService from 'src/api/activity-service'
import comChoose from 'src/pages/users-manage/components/com-choose'
import EventBus from 'src/utils/eventBus'
export default {
  name: 'edit',
  data () {
    return {
      showChooseTag: false,
      isNew: true, // 是否是新建活动
      date: '',
      title: '',
      editorContent: '',
      outRange: false,
      saveStatus: false,
      titleEmpty: false,
      tagEmpty: false,
      dateEmpty: false,
      status: '',
      countCount: 0,
      tagList: [],
      industryTag: [],
      sceneTag: [],
      tagGroup: [],
      poster: '',
      tagArray: [],
      uploadImgErrorMsg: '', // 上传图片错误提示
      percentImg: 0, // 图片上传进度
      createdSuccess: false,
      maxLength: 1000,
      activityId: this.$route.params.id,
      imgHost: process.env.IMGHOST + '/',
      // imgHost: 'http://dev-zhike.oss-cn-beijing.aliyuncs.com/',
      pickerOptions: {
        disabledDate (time) {
          return time.getTime() < Date.now() - 8.64e7
        }
      },
      successTxt: '',
      canPaas: true,
      validStatus: '',
      defaultValue: formatDate(new Date(new Date().getTime() + 1800000), 'yyyy-MM-dd hh:mm')
    }
  },
  created () {
    let bread = []
    if (this.activityId) { // 编辑页面请求接口返回活动信息
      this.isNew = false
      this.queryInfo()
      bread = [{
        title: '活动管理'
      }, {
        title: '活动列表',
        url: '/liveMager/list'
      }, {
        title: '活动详情',
        url: `/liveMager/detail/${this.activityId}`
      }, {
        title: '编辑活动'
      }
      ]
    } else {
      bread = [{
        title: '活动管理'
      }, {
        title: '新建活动'
      }
      ]
    }
    this.queryTags()
    EventBus.$emit('breads', bread)
  },
  mounted () {
    // this.tagList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] // 标签来源于客户管理中的内容标签模块
  },
  watch: {
    editorContent (newValue, oldValue) {
      this.$nextTick(() => {
        this.countCount = document.querySelector('.vue-html5-editor .content').innerText.gbLength()
        if (this.countCount > this.maxLength) {
          this.outRange = true
          // this.editorContent = newValue.substring(0, newValue.gbIndex(this.maxLength) + 1)
          // document.getElementsByClassName('content')[1].selectStart = 5
        } else {
          this.outRange = false
        }
      })
    },
    countCount (newValue, oldValue) {
      if (this.countCount !== 0) {
        this.$refs.count.style.color = '#4b5afe'
      } else {
        this.$refs.count.style.color = '#999'
      }
    }
  },
  methods: {
    uploadImgSuccess (data) {
      this.poster = data.name
      this.canPaas = false
    },
    uploadError (data) {
      console.log('上传失败:', data)
      this.uploadImgErrorMsg = data.msg
    },
    uploadOver (e) {
      console.log(e)
    },
    queryInfo () {
      this.$get(activityService.GET_WEBINAR_INFO, {
        id: this.activityId
      }).then((res) => {
        this.date = res.data.startTime
        this.title = res.data.title
        this.poster = res.data.imgUrl
        this.editorContent = res.data.description
        this.tagArray = res.data.tags
        this.status = res.data.status
        this.validStatus = res.data.validStatus
        this.restoreTag(this.tagArray)
      })
    },
    queryTags (keyword) {
      this.$get(activityService.GET_TAG_LIST, {
        keyword: this.tagKeyword
      }).then((res) => {
        console.log(res.data)
        res.data.industry.forEach(item => {
          this.industryTag.push({
            name: item.name,
            id: item.id
          })
        })
        res.data.scene.forEach(item => {
          this.sceneTag.push({
            name: item.name,
            id: item.id
          })
        })
      })
    },
    restoreTag (arr) {
      arr.forEach((item) => {
        this.tagGroup.push(item.id)
      })
    },
    selectTag (res) {
      let tmpArr = []
      res.forEach((item, idx) => {
        this.industryTag.forEach((ele, i) => {
          if (item === ele.id) {
            tmpArr.push({
              id: ele.id,
              name: ele.name
            })
          }
        })
        this.sceneTag.forEach((ele, i) => {
          if (item === ele.id) {
            tmpArr.push({
              id: item,
              name: ele.name
            })
          }
        })
      })
      this.tagArray = tmpArr
    },
    comfirm () {
      this.saveStatus = true
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
      this.tagArray.length ? this.tagEmpty = false : this.tagEmpty = true
      this.tagGroup.length ? this.tagEmpty = false : this.tagEmpty = true
      this.date.length ? this.dateEmpty = false : this.dateEmpty = true
      this.$nextTick(() => {
        if (this.title.length && (this.tagArray.length || this.tagGroup.length) && this.date.length) {
          this.updateWebinfo(this.isNew, data)
        } else {
          this.saveStatus = false
        }
      })
    },
    updateWebinfo (isNew, data) { // 新建 创建活动
      if (isNew) {
        this.$config({ 'handlers': [2001] }).$post(activityService.POST_CREATE_WEBINAR, data).then((res) => {
          this.createdSuccess = true
          this.canPaas = true
          this.successTxt = '创建成功'
          res.data.id ? this.finishId = res.data.id : this.finishId = this.activityId
          this.saveStatus = false
        }).catch(res => {
          if (res.code === 2001) {
            this.$messageBox({
              header: '提示',
              content: '直播时间已过期，请重新选择!',
              autoClose: 10,
              confirmText: '知道了'
            })
          }
          this.saveStatus = false
        })
      } else {
        this.$config({ 'handlers': [2001] }).$post(activityService.POST_UPDATE_WEBINAR, data).then((res) => {
          this.createdSuccess = true
          this.canPaas = true
          this.successTxt = '更新成功'
          res.data.id ? this.finishId = res.data.id : this.finishId = this.activityId
          this.saveStatus = false
        }).catch(res => {
          if (res.code === 2001) {
            this.$messageBox({
              header: '提示',
              content: '直播时间已过期，请重新选择!',
              autoClose: 10,
              confirmText: '知道了'
            })
          }
          this.saveStatus = false
        })
      }
    },
    toDetail () {
      this.canPaas = true
      this.$router.push({
        path: `/liveMager/detail/${this.finishId}`
      })
    },
    toList () {
      this.canPaas = true
      this.$router.push({
        path: '/liveMager/list'
      })
    },
    /* 点击取消 */
    handleClick (e) {
      if (e.action === 'cancel') {
        this.showChooseTag = false
      }
    },
    // selectTagConfirm (res) {
    //   console.log(res)
    //   this.tagArray.name = res.name
    //   this.tagArray.id = res.id
    // // this.filterCondition.tags = res.id.toString()
    // },

    searchHandler (res) {
      console.log(res)
      this.tagKeyword = res
      this.queryTags()
    },
    handleDel (idx, type) {
      this.tagArray.splice(idx, 1)
      this.tagGroup.splice(idx, 1)
    },
    back () {
      window.history.go(-1)
    },
    resetData () {
      this.isNew = true
      this.dateEmpty = false
      this.outRange = false
      this.showChooseTag = false
      this.tagEmpty = false
      this.activityId = ''
      this.date = ''
      this.successTxt = ''
      this.titleEmpty = ''
      this.uploadImgErrorMsg = ''
      this.title = ''
      this.editorContent = ''
      this.poster = ''
      this.tagArray = []
      this.tagGroup = []
      this.activityId = ''
    },
    clooseTagClose (e) {
      this.showChooseTag = false
    },
    showClooseTag () {
      this.$nextTick(() => {
        this.showChooseTag = true
      })
    },
    addShowClooseTag () {
      this.canPaas = false
      this.showChooseTag = !this.showChooseTag
      this.$nextTick(() => {
        this.tagEmpty = false
      })
    },
    dateFocus () {
      this.dateEmpty = false
      this.date = this.defaultValue
    }
  },
  /* 路由守卫，离开当前页面之前被调用 */
  beforeRouteLeave (to, from, next) {
    if (this.canPaas) {
      next(true)
      if (!this.isNew) {
        this.resetData()
      }
      return false
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
          if (!this.isNew) {
            this.resetData()
          }
        } else {
          next(false)
        }
      }
    })
  },
  computed: {
    defaultImg () {
      return this.poster ? `${this.$imgHost}/${this.poster}` : ''
    }
  },
  components: {
    VeEditer,
    VeUpload,
    comChoose
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
    // .html-editer {
    //   max-width: 722px;
    // }
  }
  /* 设备宽度小于 1600px */
  @media all and (max-width: 1600px) {
    width: 1019px;
    .content .html-editer {
      max-width: 722px !important;
    }
  }
  .edit-title {
    margin-top: 30px;
    margin-bottom: 5px;
    position: relative;
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
    font-size: 14px;
    i {
      width: 14px;
      height: 14px;
      display: inline-block;
      background: url('~assets/image/excal.svg') no-repeat;
      position: relative;
      top: 3px;
      right: 4px;
      background-size: cover;
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
      /*&:disabled {*/
      /*opacity: 1;*/
      /*cursor: pointer;*/
      /*}*/
    }
    .add-tag {
      cursor: pointer;
      display: inline-block;
      border-radius: 100px;
      width: 19px;
      height: 19px;
      padding: 0;
      margin: 0;
      border: 1px solid rgba(136, 136, 136, 1);
      background: url('~assets/image/add_icon.svg') no-repeat;
      background-position: center;
      background-size: contain;
      position: relative;
      top: 4px;
      span {
        display: none;
      }
      &:hover {
        opacity: 0.8;
      }
    }
    .editor {
      width: 729px;
      height: 280px;
    }
    .content-count {
      position: absolute;
      bottom: 20px;
      right: 20px;
      color: #999;
      i {
        color: #999;
      }
    }
    .html-editer {
      max-width: 1072px;
    }
    .html-editer .content {
      width: 100%;
    }
    .from-content.editor-content:not(.error):hover .vue-html5-editor {
      border-color: $color-gray-hover;
    }
    .from-content.error {
      .vue-html5-editor {
        border-color: $color-error;
      }
      .content-count * {
        color: $color-error;
      }
    }
    .from-content .vue-html5-editor .content img {
      max-width: 100%;
    }
    .from-content .choose-tag {
      // position: relative;
      margin-top: 3px;
    }
  }
}
.finish-box {
  // position: absolute;
  // top: 50%;
  // left: 50%;
  // margin-left: -110px;
  // margin-right: -225px;/* 设备宽度大于 1600 */
  @media all and (min-width: 1600px) {
    width: 1366px;
  }

  /* 设备宽度小于 1600px */
  @media all and (max-width: 1600px) {
    width: 1019px;
  }
  margin: 60px auto;
  height: 550px;
  background: #fff;
  overflow: hidden;
  border-radius: 4px;
  border: 1px solid #e2e2e2;
  dl {
    text-align: center;
    margin: 160px auto;
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
.error-tips {
  color: $color-error;
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
    display: inline-block;
    padding: 6px 10px 6px 12px;
    background: rgba(240, 241, 254, 1);
    border-radius: 20px;
    border: 1px solid rgba(240, 241, 254, 1);
    margin-right: 10px;
    margin-bottom: 4px;
    &:hover {
      span {
        width: 14px;
      }
    }
    span {
      cursor: pointer;
      display: inline-block;
      position: relative;
      top: 2px;
      background: url('~assets/image/close1.svg') no-repeat;
      background-position: center;
      background-size: cover;
      width: 0;
      transition: width 0.2s;
      height: 14px;
      line-height: 26px;
      /*border-radius: 100px;*/
      /*border: 1px solid rgba(255, 2, 254, 1);*/
      &:hover {
        /*opacity: 0.8;*/
        background: url('~assets/image/close1_hover.svg') no-repeat;
        background-position: center;
        background-size: cover;
      }
    }
  }
}

.tag-modal {
  margin-top: 20px;
  width: 100%;
  height: 337px;
  background: #f7f7f7;
  padding: 10px 20px;
  border-radius: 5px;
  overflow-y: scroll;
  position: relative;
  border: 1px solid #e2e2e2;
  .arrow {
    position: absolute;
    top: 27px;
    right: 25px;
    font-size: 20px;
    cursor: pointer;
    transform: rotate(180deg);
  }
  .group-title {
    display: block;
    font-size: 14px;
    color: $color-font;
    padding: 10px;
  }
  .title {
    padding: 10px;
    font-size: 14px;
  }
  .el-checkbox-button /deep/ {
    margin: 5px;
    span.el-checkbox-button__inner {
      border-radius: 4px;
      overflow: hidden;
      border-left: 1px solid #dcdfe6;
    }
    &.is-checked span.el-checkbox-button__inner,
    &.is-focus span.el-checkbox-button__inner {
      border-left: 1px solid #4b5afe;
      background-color: #4b5afe;
      border: none;
      box-shadow: none;
      &:hover {
        color: #fff;
      }
    }
    .el-checkbox-button__inner:hover {
      color: #4b5afe;
    }
  }
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
