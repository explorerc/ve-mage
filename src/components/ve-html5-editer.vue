<template>
  <div class="html-editer">
    <editor :content="content"
            :height="editHeight"
            :z-index="1000"
            :show-module-name="showModuleName"
            ref="editor"
            @change="updateData"></editor>
    <!-- 编辑图片尺寸 -->
    <message-box v-show="imgEditShow"
                 width="450px"
                 type="prompt"
                 header="设置图片大小"
                 confirmText='确定'
                 @handleClick="editImgHandle">
      <div class="img-emit-box">
        <div class="fl">
          <span>高：</span>
          <com-input ref="refWidthInput" placeholder="输入图片高度" type="mobile" @keyup.enter.native="changeImg" @change="changeHeight"
                     :value.sync="imgHeight"></com-input>
        </div>
        <div class="fr">
          <span>宽：</span>
          <com-input placeholder="输入图片宽度" type="mobile" @keyup.enter.native="changeImg" @change="changeWidth"
                     :value.sync="imgWidth"></com-input>
        </div>
      </div>
    </message-box>
  </div>
</template>


<script>
  import VueHtml5Editor from 'vue-html5-editor'

  const colorTemplate = `<div>
    <div>
        <label>
            <input type="radio" value="foreColor" v-model="command">&nbsp;
            {{$parent.locale["fore color"]}}
        </label>
        <label>
            <input type="radio" value="backColor" v-model="command">&nbsp;
            {{$parent.locale["background color"]}}
        </label>
    </div>
    <div>
        <div v-for="color in colors" :style="{'background-color':color}" class="color-card"
             @click="changeColor(color)">
        </div>
        <div style="clear: both"></div>
    </div>
</div>`
  const fontTemplate = `<div class="dashboard-font" style="line-height: 36px;">
    <div>
        <label>
            {{$parent.locale["font name"]}}:
        </label>
        <button v-for="name in nameList" type="button" @click="setFontName(name)">{{name}}</button>
    </div>
    <div>
        <label>
            {{$parent.locale["font size"]}}:
        </label>
        <button v-for="size in fontSizeList" type="button" @click="setFontSize(size)">{{size}}</button>
    </div>
    <div>
        <label>
            {{$parent.locale["line height"]}}:
        </label>
        <button v-for="lh in lineHeightList" type="button" @click="setLineHeight(lh)">
            {{lh}}
        </button>
    </div>
</div>`
  const editor = new VueHtml5Editor({
    showModuleName: true,
    icons: {
      text: 'fa iconfont icon-qianbi',
      color: 'fa iconfont icon-huabi',
      font: 'fa iconfont icon-zifu',
      align: 'fa iconfont icon-paiban',
      list: 'fa iconfont icon-pailie',
      link: 'fa iconfont icon-lianjie',
      unlink: 'fa iconfont icon-duankailianjie',
      tabulation: 'fa iconfont icon-biaoge',
      image: 'fa iconfont icon-tupian',
      hr: 'fa iconfont icon-xiahuaxian',
      eraser: 'fa iconfont icon-xiangpi',
      undo: 'fa iconfont icon-xuanzhuan',
      'full-screen': 'fa iconfont icon-maodian',
      info: 'fa iconfont icon-biaoji'
    },
    modules: [
      {
        // custom module with dashboard.html
        name: 'colorEx',
        icon: 'fa iconfont icon-huabi',
        i18n: 'color',
        dashboard: {
          template: colorTemplate,
          data () {
            return {
              // foreColor,backColor
              command: 'foreColor',
              colors: [
                '#ffffff', '#000000', '#555555', '#000033', '#000066', '#000099', '#003300', '#003333', '#003366',
                '#003399', '#006600', '#006633', '#009900', '#330000', '#330033', '#330066',
                '#333300', '#333366', '#660000', '#660033', '#663300', '#666600', '#666633',
                '#666666', '#666699', '#990000', '#990033', '#9900CC', '#996600', '#FFCC00',
                '#FFCCCC', '#FFCC99', '#FFFF00', '#FF9900', '#CCFFCC', '#CCFFFF', '#CCFF99', '#009DB5'
              ]
            }
          },
          methods: {
            changeColor (color) {
              this.$parent.execCommand(this.command, color)
            }
          }
        }
      },
      {
        // custom module with dashboard.html
        name: 'fontEx',
        icon: 'fa iconfont icon-zifu',
        i18n: 'font',
        dashboard: {
          template: fontTemplate,
          data () {
            return {
              nameList: [
                'Arial',
                'sans-serif',
                '微软雅黑体',
                '黑体',
                '新宋体',
                '仿宋',
                '楷体',
                '仿宋_GB2312',
                '楷体_GB2312',
                '隶书',
                '幼圆',
                '华文细黑',
                '华文楷体',
                '华文仿宋',
                '方正舒体',
                '方正姚体',
                '华文彩云', '华文琥珀', '华文隶书', '华文行楷', '华文新魏'
              ],
              lineHeightList: [
                '1.0', '1.2', '1.5', '1.8', '2.0', '2.5', '3.0'
              ],
              fontSizeList: [
                '12px', '14px', '16px', '18px', '20px', '22px', '24px', '26px', '28px', '30px', '32px', '34px', '36px', '38px', '40px', '42px', '44px', '46px', '50px', '56px', '60px', '66px', '70px', '76px', '80px', '86px', '100px'
              ]
            }
          },
          methods: {
            setFontName (name) {
              this.$parent.execCommand('fontName', name)
            },
            setFontSize (size) {
              this.$parent.execCommand('fontSize', size)
            },
            setHeading (heading) {
              this.$parent.execCommand('formatBlock', `h${heading}`)
            },
            setLineHeight (lh) {
              this.$parent.execCommand('lineHeight', lh)
            }
          },
          created () {
            const config = this.$options.module.config
            // font name
            if (!config) {
              return
            }
            if (Array.isArray(config.fontNames)) {
              this.nameList = config.fontNames
            }
          }
        }
      }
    ],
    image: {
      sizeLimit: 512 * 1024,
      compress: null,
      uploadHandler (responseText) {
        var json = JSON.parse(responseText)
        if (json.code !== 200) {
          console.error(json.msg)
        } else {
          if (json.data.host.indexOf('http') !== 0) {
            return 'https:' + json.data.host + '/' + json.data.name
          }
          return json.data.host + '/' + json.data.name
        }
      },
      upload: {
        url: '/api/upload/image',
        headers: {},
        params: {},
        fieldName: 'file'
      }
    },
    visibleModules: [
      'text',
      'colorEx',
      'fontEx',
      'align',
      'list',
      'link',
      'unlink',
      // 'tabulation',
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
        imgEditShow: false,
        showModuleName: false,
        content: '',
        imgWidth: '0',
        imgHeight: '0',
        whRatio: 1
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
        default: '/api/upload/image'
      },
      pullMsg: {
        type: Boolean,
        default: false
      },
      imgEdit: {
        type: Boolean,
        default: false
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
      },
      pullMsg () {
        let content = this.$refs.editor.$el.querySelectorAll('.content')[0].innerHTML
        this.updateData(content)
      }
    },
    mounted () {
      if (!this.imgEdit) return
      this.$refs.editor.$el.addEventListener('dblclick', (e) => {
        let imgDom = e.target
        if (imgDom.nodeName.toLowerCase() === 'img') {
          let w = imgDom.width
          let h = imgDom.height
          this.imgHeight = h.toString()
          this.imgWidth = w.toString()
          this.whRatio = w / h
          this.tempImgDom = imgDom
          this.imgEditShow = true
        }
      })
    },
    methods: {
      changeWidth () {
        if (this.imgWidth) {
          this.imgHeight = (parseInt(this.imgWidth) / this.whRatio).toFixed()
        }
      },
      changeHeight () {
        if (this.imgHeight) {
          this.imgWidth = (parseInt(this.imgHeight) * this.whRatio).toFixed()
        }
      },
      updateData (res) {
        this.$emit('input', res)
        this.$emit('change', res)
      },
      editImgHandle (e) {
        this.imgEditShow = false
        if (e.action === 'confirm') {
          this.changeImg()
        }
      },
      changeImg () {
        this.imgEditShow = false
        this.tempImgDom.width = this.imgWidth
        this.tempImgDom.height = this.imgHeight
        let content = this.$refs.editor.$el.querySelectorAll('.content')[0].innerHTML
        this.updateData(content)
      }
    }
  }
</script>

<style lang="scss">
  .html-editer {
    min-width: 480px;
    .toolbar .dashboard input {
      padding: 0 12px !important;
      vertical-align: 1px;
      height: 30px !important;
    }
    i {
      font-style: italic;
      &.icon-close1 {
        font-style: normal;
      }
    }
    .content {
      max-height: 560px;
    }
    a {
      text-decoration: underline;
      &:hover {
        color: #5d6afe;
      }
      &:active {
        color: #4350e4;
      }
    }
    .iconfont {
      font-size: 18px;
      width: auto !important;
      height: auto !important;
    }
    .img-emit-box {
      padding: 20px 0;
      overflow: hidden;
      div {
        width: calc(50% - 10px);
        .com-input {
          width: 160px;
          input {
            width: 100%;
            height: 32px;
            margin: 5px 0;
            padding: 0 10px;
            outline: none;
            border: solid 1px #e2e2e2;
            border-radius: 4px;
          }
        }
      }
    }
  }
</style>
