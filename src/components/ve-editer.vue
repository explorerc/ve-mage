<template>
  <div id="quill-upload" >
    <!-- 图片上传组件辅助-->
    <el-upload
      class="avatar-uploader"
      :action="imgUploadUrl"
      name="file"
      :on-success="uploadSuccess"
      :on-error="uploadError"
      :before-upload="beforeUpload">
    </el-upload>
    <!--富文本编辑器组件-->
    <el-row v-loading="quillUpdateImg" :style="editHeight">
      <quill-editor
        ref="myQuillEditor"
        v-model="editerContent"
        :options="editorOption"
        @blur="onEditorBlur($event)"
        @focus="onEditorFocus($event)"
        @change="onEditorChange($event)"
        @ready="onEditorReady($event)"
      >
      </quill-editor>
    </el-row>
  </div>
</template>

<script>
  // import 'quill/dist/quill.core.css'
  // import 'quill/dist/quill.snow.css'
  // import 'quill/dist/quill.bubble.css'
  import {quillEditor} from 'vue-quill-editor'
  // 工具栏配置
  const toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'], // toggled buttons
    ['blockquote', 'code-block'],
    [{'header': 1}, {'header': 2}], // custom button values
    [{'list': 'ordered'}, {'list': 'bullet'}],
    [{'script': 'sub'}, {'script': 'super'}], // superscript/subscript
    [{'indent': '-1'}, {'indent': '+1'}], // outdent/indent
    [{'direction': 'rtl'}], // text direction
    // [{'size': ['small', false, 'large', 'huge']}],  // custom dropdown
    // [{'header': [1, 2, 3, 4, 5, 6, false]}],
    [{'color': []}, {'background': []}], // dropdown with defaults from theme
    [{'font': []}],
    [{'align': []}],
    ['link', 'image']
  ]
  export default {
    name: 've-editer',
    data () {
      return {
        quillUpdateImg: false,
        editerContent: '', // 富文本内容
        editorOption: {
          placeholder: '',
          theme: 'snow', // 'snow' or 'bubble'
          modules: {
            toolbar: {
              container: toolbarOptions, // 工具栏
              handlers: {
                'image': function (value) {
                  if (value) {
                    document.querySelector('#quill-upload input').click()
                  } else {
                    this.quill.format('image', false)
                  }
                }
              }
            }
          }
        }
      }
    },
    components: {quillEditor},
    props: {
      value: {
        default: ''
      },
      height: {
        type: String,
        default: '300px'
      },
      imgUploadUrl: {
        type: String,
        default: '/api/upload/image'
      },
      exclude: {
        type: Array,
        default: []
      }
    },
    computed: {
      editHeight () {
        return {height: this.height.indexOf('%') !== -1 ? this.height : (this.height - 21 + 'px')}
      }
    },
    watch: {
      value: {
        handler (newVal) {
          this.editerContent = newVal
        },
        immediate: true
      },
      editerContent (val) {
        this.$emit('input', val)
      }
    },
    methods: {
      onEditorBlur (e) { // 失去焦点事件
        this.$emit('blur', e)
      },
      onEditorFocus (e) { // 获得焦点事件
        this.$emit('focus', e)
      },
      onEditorChange (e) { // 内容改变事件
        // this.$emit('input', this.content)
        this.$emit('change', e)
      },
      onEditorReady (e) {
        this.$emit('ready', e)
      },
      beforeUpload () { // 上传图片之前
        this.quillUpdateImg = true
      },
      uploadSuccess (res) { // 上传图片成功// res为图片服务器返回的数据
        // 获取富文本组件实例
        let quill = this.$refs.myQuillEditor.quill
        // 如果上传成功
        if (res.code === 200 && res.data !== null) {
          // 获取光标所在位置
          let length = quill.getSelection().index
          // 插入图片  res.info为服务器返回的图片地址
          quill.insertEmbed(length, 'image', `${res.data.host}/${res.data.name}`)
          // 调整光标到最后
          quill.setSelection(length + 1)
        } else {
          this.$message.error('图片插入失败')
        }
        // loading动画消失
        this.quillUpdateImg = false
      },
      uploadError () { // 上传图片失败
        this.quillUpdateImg = false
        this.$message.error('图片插入失败')
      }
    }
  }
</script>

<style lang="scss">
@import '../../node_modules/quill/dist/quill.core.css';
@import '../../node_modules/quill/dist/quill.snow.css';
@import '../../node_modules/quill/dist/quill.bubble.css';

#quill-upload {
  // height: 300px;
  min-width: 688px;
  .avatar-uploader {
    display: none;
  }
  .el-row {
    height: 100%;
    .quill-editor {
      height: 100%;
    }
    .ql-toolbar {
      text-align: left;
    }
    .ql-toolbar.ql-snow .ql-formats {
      margin-right: 0px;
    }
  }
  .ql-toolbar.ql-snow + .ql-container.ql-snow {
    height: calc(100% - 42px);
  }
}
</style>
