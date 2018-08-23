<!--新建/编辑活动-->
<template>
  <div>
    <p>直播标题：
      <com-input :value.sync="title" placeholder="请输入直播标题" :max-length="60"></com-input>
    </p>
    <p>直播时间：
      <el-date-picker v-model="date" type="datetime" placeholder="选择日期时间" :picker-options="pickerOptions" format='yyyy-MM-dd HH:mm:ss' value-format="yyyy-MM-dd HH:mm:ss">
      </el-date-picker>
    </p>
    <p>直播封面：
      <com-upload accept="png|jpg|jpeg" actionUrl="/api/upload/do-upload" inputName="file" :fileSize="2048" @error="uploadError" @progress="uploadProgress" @load="uploadImgSuccess">
        <div class="upload-file-box" title="点击上传">
          <el-progress v-if="percentImg" type="circle" :percentage="percentImg"></el-progress>
          <i class="iconfont icon-jiahao"></i>
          <span>分辨率最大1920x1080，支持jpg、jpeg、png格式，文件大小不超过2M</span>
          <div v-if="poster" class="upload-file-botton">编辑</div>
          <div class="temp-img" v-if="poster" :style="{backgroundImage:'url('+imgHost+'/'+poster+')'}"></div>
        </div>
      </com-upload>
    </p>
    <p>直播标签：
      <ol class='tag-list clearfix'>
        <li v-for="item in tagGroup">{{item}}</li>
      </ol>
      <el-button @click='tagModal=true'>添加标签</el-button>
      <div class="tag-modal" v-show='tagModal'>
        <el-checkbox-group v-model="tagGroup" size="mini" :max='6'>
          <el-checkbox-button v-for="tag in tagList" :label="tag" :key="tag">{{tag}}</el-checkbox-button>
        </el-checkbox-group>
        <el-button @click="">确定</el-button>
      </div>
    </p>
    <p class='clearfix'>直播介绍：
      <ve-editer :height="'200'" @ready="editorReady" v-model='editorContent' @change='editorChange'></ve-editer>
    </p>
    <p><button @click='comfirm'>创建</button></p>
    <transition name='fade'>
      <div class="modal-cover" v-if='createdSuccess' @click="closeModal">
        <div class='created-modal'>
          <p>直播已创建成功，您可以</p>
          <div class="btm">
            <span><a>完善直播设置体验更多有趣的营销玩法</a></span>
            <span><a>进行直播测试对直播进行预演</a></span>
          </div>
          <p><a href="/liveMager">返回直播列表</a></p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  import veEditer from 'components/ve-editer'
  import http from 'src/api/activity-manger'
  export default {
    name: 'edit',
    data () {
      return {
        tagModal: false,
        isNew: true, // 是否是新建活动
        date: new Date(),
        title: '',
        editorContent: '',
        tagList: [],
        tagGroup: [],
        poster: '',
        percentImg: 0, // 图片上传进度
        createdSuccess: false,
        activityId: this.$route.params.id,
        imgHost: 'http://dev-zhike.oss-cn-beijing.aliyuncs.com/',
        pickerOptions: {
          disabledDate (time) {
            return time.getTime() < Date.now() - 8.64e7
          }
        }
      }
    },
    created () {
      this.tagList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] // 标签来源于客户管理中的内容标签模块
      if (this.activityId) { // 编辑页面请求接口返回活动信息
        this.isNew = false
        this.queryInfo()
      }
    },
    methods: {
      editorChange (res) {
        // console.log(`长度${res.text.length}`)
      },
      editorReady () {
      },
      closeModal (e) {
        if (e.target.className === 'modal-cover') {
          this.createdSuccess = false
        }
      },
      uploadProgress (data) {
        // console.log('上传进度:', data)
        // console.log(data)
        this.percentImg = parseFloat(parseFloat(data.percent.replace('%', '')).toFixed(2))
        if (this.percentImg === 100) {
          this.percentImg = 0
        }
      },
      uploadImgSuccess (data) {
        const fildObj = JSON.parse(data.data)
        this.poster = fildObj.data.name
      },
      uploadError (data) {
        console.log('上传失败:', data)
      },
      uploadOver (e) {
        console.log(e)
      },
      queryInfo () {
        http.webinarInfo(this.activityId).then((res) => {
          if (res.code === 200) {
            this.date = res.data.startTime
            this.title = res.data.title
            this.poster = res.data.imgUrl
            this.editorContent = res.data.description
            this.tagGroup = res.data.tags
          }
        }).catch(() => {})
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
        console.log(data)
        this.updateWebinfo(this.isNew, data)
      },
      updateWebinfo (isNew, data) { // 新建 创建活动
        http.updateWebinfo(isNew, data).then((res) => {
          if (res.code === 200) {
            this.createdSuccess = true
          }
        }).catch((error) => {
          console.log(error)
        })
      }
    },
    components: {
      veEditer
    }
  }
</script>

<style lang='scss' scoped>
@import '~assets/css/variable';
.modal-cover {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba($color: #000000, $alpha: 0.5);
}

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
    padding: 5px 20px;
    border-radius: 5px;
    float: left;
    border: 1px solid #ccc;
    position: relative;
    &:before {
      content: '×';
      width: 20px;
      height: 20px;
      text-align: center;
      line-height: 20px;
      position: absolute;
      border: 1px solid #ccc;
      border-radius: 100px;
      top: -10px;
      right: -10px;
    }
  }
}

.tag-modal {
  width: 200px;
  height: 200px;
  background: pink;
}
</style>
