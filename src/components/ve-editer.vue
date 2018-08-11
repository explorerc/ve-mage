<template>
  <div id="quill-upload" :style="editHeight">
    <!-- 图片上传组件辅助-->
    <el-upload
      class="avatar-uploader"
      :action="serverUrl"
      name="img"
      :show-file-list="false"
      :on-success="uploadSuccess"
      :on-error="uploadError"
      :before-upload="beforeUpload">
    </el-upload>
    <!--富文本编辑器组件-->
    <el-row v-loading="quillUpdateImg">
      <quill-editor
        v-model="detailContent"
        ref="myQuillEditor"
        :options="editorOption"
        @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
        @change="onEditorChange($event)"
        @ready="onEditorReady($event)"
      >
      </quill-editor>
    </el-row>
  </div>
</template>

<script>
  import 'quill/dist/quill.core.css'
  import 'quill/dist/quill.snow.css'
  import 'quill/dist/quill.bubble.css'
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
        serverUrl: '',
        detailContent: '', // 富文本内容
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
      height: {
        type: String,
        default: '300px'
      }
    },
    computed: {
      editHeight () {
        return {height: this.height.indexOf('%') !== -1 ? this.height : (this.height + 'px')}
      }
    },
    methods: {
      onEditorBlur () { // 失去焦点事件
      },
      onEditorFocus () { // 获得焦点事件
      },
      onEditorChange () { // 内容改变事件
      },
      onEditorReady () {
      },
      uploadSuccess () { // 上传图片成功
      },
      uploadError () { // 上传图片失败
      },
      beforeUpload () { // 上传图片之前
      }
    }
  }
</script>

<style lang="scss">
  #quill-upload {
    height: 300px;
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
  }
</style>
