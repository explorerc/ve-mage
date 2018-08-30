<template>
  <div class="html-editer">
    <editor
      :content="content"
      :height="editHeight"
      :z-index="1000"
      :show-module-name="showModuleName"
      ref="editor"
      @change="updateData"></editor>
  </div>
</template>

<script>
  import VueHtml5Editor from 'vue-html5-editor'

  const editor = new VueHtml5Editor({
    showModuleName: true,
    image: {
      sizeLimit: 512 * 1024,
      compress: true,
      width: 500,
      height: 500,
      quality: 80
    },
    visibleModules: [
      'text',
      'color',
      'font',
      'align',
      'list',
      'link',
      'unlink',
      'tabulation',
      'hr',
      'eraser',
      'undo',
      'full-screen',
      'image'
    ],
    language: 'zh-cn',
    i18n: {
      'zh-cn': {
        'align': '对齐方式',
        'image': '图片',
        'list': '列表',
        'link': '链接',
        'unlink': '去除链接',
        'table': '表格',
        'font': '文字',
        'full screen': '全屏',
        'text': '排版',
        'eraser': '格式清除',
        'info': '关于',
        'color': '颜色',
        'please enter a url': '请输入地址',
        'create link': '创建链接',
        'bold': '加粗',
        'italic': '倾斜',
        'underline': '下划线',
        'strike through': '删除线',
        'subscript': '上标',
        'superscript': '下标',
        'heading': '标题',
        'font name': '字体',
        'font size': '文字大小',
        'left justify': '左对齐',
        'center justify': '居中',
        'right justify': '右对齐',
        'ordered list': '有序列表',
        'unordered list': '无序列表',
        'fore color': '前景色',
        'background color': '背景色',
        'row count': '行数',
        'column count': '列数',
        'save': '确定',
        'upload': '上传',
        'progress': '进度',
        'unknown': '未知',
        'please wait': '请稍等',
        'error': '错误',
        'abort': '中断',
        'reset': '重置'
      }
    }
  })

  export default {
    name: 've-html5-editer',
    components: {editor},
    data () {
      return {
        showModuleName: false,
        content: ''
      }
    },
    props: {
      value: {
        default: ''
      },
      height: {
        type: String,
        default: '300'
      },
      imgUploadUrl: {
        type: String,
        default: '/api/upload/do-upload'
      }
    },
    computed: {
      editHeight () {
        return this.height.indexOf('%') !== -1 ? this.height : (this.height - 21)
      }
    },
    watch: {
      value: {
        handler (newVal) {
          this.content = newVal
        },
        immediate: true
      }
    },
    methods: {
      updateData (res) {
        this.$emit('input', res)
        this.$emit('change', res)
      }
    }
  }
</script>

<style lang="scss">
  .html-editer {
    min-width: 480px;
    .content{
      max-height: 600px;
    }
  }
</style>
