<template>
  <div class="block1-container" :class="customClass">
    <div ref="target" class="block1-content">
      <ul class="block1-group" :class="widthClass">
        <li class="block1-item" v-for="(item,index) in value" :key="index">
          <div class="content" v-html="item.content">
          </div>
          <img class="img" :src="host+item.img">
        </li>
      </ul>
    </div>
    <com-edit ref="editTarget" customClass="block1-edit">
      <com-button class="add-btn" @click="addBlock">添加导航</com-button>
      <ul class="block1-edit-group">
        <li v-for="(item,index) in value" :key="'a'+index">
          <div class="block1-title" @click="titleClick(index)">{{`图块${index+1}`}}<i @click.stop="removeClick(index)"class="iconfont icon-close"></i></div>
          <div class="block1-content" :class="{active:active===index}">
            <div>
              <com-upload
      accept="png|jpg|jpeg|bmp|gif"
      uploadTxt="上传"
      actionUrl="/api/upload/do-upload"
      inputName="file"
      :fileSize="2048"
      :exParams="{}"
      @load="uploadLoad($event,index)"
      >
      </com-upload>
            </div>
            <div>
               <com-editer customClass="font-editer" v-model="item.content" ></com-editer>
            </div>
          </div>
        </li>
      </ul>
    </com-edit>
  </div>
</template>

<script>
import ComEditer from 'src/components/ve-html5-editer'
import editMixin from './mixin'
import ComEdit from './edit'
export default {
  mixins: [editMixin],
  components: {
    ComEdit, ComEditer
  },
  props: {
    edit: {
      type: Boolean,
      default: false
    },
    customClass: {
      type: String,
      default: ''
    },
    value: {
      type: Array,
      default: []
    }
  },
  data () {
    return {
      active: -1,
      host: 'http://dev-zhike.oss-cn-beijing.aliyuncs.com/'
    }
  },
  methods: {
    addBlock () {
      let len = this.value.length
      if (len < 8) {
        this.value.push({
          text: `导航${len + 1}`,
          type: '_blank',
          link: ''
        })
        this.active = len
      }
    },
    titleClick (index) {
      if (this.active !== index) {
        this.active = index
      } else {
        this.active = -1
      }
    },
    removeClick (index) {
      if (this.value.length > 2) {
        this.value.splice(index, 1)
      }
    },
    uploadLoad (data, index) {
      let ret = JSON.parse(data.data)
      if (ret.code === 200) {
        this.value[index].img = `${ret.data.name}`
      }
    }
  },
  computed: {
    widthClass () {
      return `width${this.value.length}`
    }
  }
}
</script>

<style lang="scss" scoped>
.block1-container /deep/ {
  position: relative;
  .block1-content {
    height: 100%;
    .block1-group {
      font-size: 0;
      &.width2 {
        .block1-item {
          width: 490px;
        }
      }
      &.width3 {
        .block1-item {
          width: 340px;
        }
      }
      .block1-item {
        display: inline-block;
        font-size: 14px;
        margin-right: 15px;
        position: relative;
        .content {
          position: absolute;
        }
        .img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .block1-edit {
    padding: 20px 5px;
    .add-btn {
      width: 100%;
      margin-bottom: 10px;
    }
    .block1-edit-group {
      border: 1px solid #dadada;
      border-bottom: 0;
      font-size: 14px;
    }
    .block1-title {
      cursor: pointer;
      width: 100%;
      height: 35px;
      line-height: 35px;
      text-align: center;
      font-size: 14px;
      border-bottom: 1px solid #dadada;
      .icon-close {
        float: right;
        padding-right: 10px;
      }
    }
    .block1-content {
      height: 0;
      overflow: hidden;
      transition: all 0.3s;
      &.active {
        border-bottom: 1px solid #dadada;
        padding: 20px 10px;
        height: auto;
      }
      .com-input {
        width: 100%;
        margin-bottom: 20px;
      }
    }
    .html-editer {
      min-width: auto;
    }
    .vue-html5-editor {
      li {
        padding: 0 6px;
      }
      li[title='列表'],
      li[title='图片'],
      li[title='全屏'] {
        display: none;
      }
      .content {
        background-color: #dadada;
      }
    }
  }
}
</style>
