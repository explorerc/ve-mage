<template>
  <div
  class="com-upload"
  :class="customClass"
  @click="fileSelect"
  >
    <slot></slot>
    <button v-if="!this.$slots.default" class="upload-btn">
      <i class="iconfont icon-upload"></i><span class="upload-btn-text">{{uploadTxt}}</span>
    </button>
    <input
    ref="upload"
    type="file"
    class="com-upload-file"
    :multiple="multiple"
    @change="startUpload"
    :accept="acceptStr"
    >
  </div>
</template>

<script>
const MIME_TYPES = {
  'jpeg': 'image/jpeg',
  'jpg': 'image/jpeg',
  'png': 'image/png',
  'bmp': 'image/bmp',
  'gif': 'image/gif',
  'doc': 'application/msword',
  'docx': 'application/msword',
  'xls': 'application/vnd.ms-excel',
  'xlsx': 'application/vnd.ms-excel',
  'pdf': 'application/pdf',
  'ppt': 'application/mspowerpoint'
}
export default {
  name: 'ComUpload',
  props: {
    customClass: String,
    accept: {
      type: String,
      default: ''
    },
    actionUrl: {
      type: String,
      required: true
    },
    inputName: {
      type: String,
      default: 'file'
    },
    exParams: {
      type: Object,
      default () {
        return {}
      }
    },
    uploadTxt: {
      type: String,
      default: 'Upload'
    },
    timeout: {
      type: Number,
      default: 30000
    },
    credentials: {
      type: Boolean,
      default: false
    },
    multiple: {
      type: Boolean,
      default: false
    },
    count: {
      type: Number,
      default: 0
    },
    fileSize: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      current: '',
      total: 0,
      queue: [],
      list: []
    }
  },
  methods: {
    fileSelect () {
      this.$refs.upload.value = ''
      this.$refs.upload.click()
    },
    startUpload (e) {
      this.current = ''
      this.total = 0
      this.list = []
      this.queue = []
      let fileSize = this.fileSize * 1000
      Array.prototype.forEach.call(this.$refs.upload.files, (item, index) => {
        this.total += item.size
        this.list.push({
          name: item.name,
          size: item.size
        })
        this.queue.push(item)
      })
      if (this.multiple && this.cofileCountunt > 0 && this.queue.length > this.fileCount) {
        this.$emit('error', {code: 501})
        return
      }
      if (this.total > fileSize) {
        this.$emit('error', {code: 502})
        return
      }
      this.$emit('selected', this.list)
      if (this.queue.length > 0) {
        this.doWork()
      }
    },
    doWork () {
      const file = this.queue.shift()
      if (file) {
        this.current = file.name
        const body = new FormData()
        body.append(`${this.inputName}`, file)
        for (let [key, value] of Object.entries(this.exParams)) {
          body.append(key, value)
        }
        this.doUpload(body)
      } else {
        this.current = ''
        this.$emit('over')
      }
    },
    doUpload (formData) {
      const xhr = new XMLHttpRequest()
      xhr.open('post', this.actionUrl)
      // xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
      xhr.timeout = this.timeout
      if (this.credentials) {
        xhr.withCredentials = true
      }
      xhr.upload.onprogress = (e) => {
        if (e.lengthComputable) {
          this.$emit('progress', {name: this.current, percent: `${e.loaded / e.total * 100}%`})
        }
      }
      xhr.onload = (e) => {
        this.$emit('load', {name: this.current, data: xhr.responseText})
        this.doWork()
      }
      xhr.onerror = (e) => {
        this.$emit('error', {name: this.current, code: 503, error: e})
      }
      xhr.send(formData)
    }
  },
  computed: {
    acceptStr () {
      let str = ''
      const arr = this.accept.split('|')
      if (arr.length > 0) {
        arr.forEach((item) => {
          str += `${MIME_TYPES[item]},`
        })
      } else {
        str = '*'
      }
      return str
    }
  }
}
</script>

<style lang="scss" scoped>
.com-upload /deep/ {
  position: relative;
  display: inline-block;
  .upload-btn {
    line-height: 1.5;
    display: inline-block;
    font-weight: 400;
    text-align: center;
    cursor: pointer;
    background-image: none;
    border: 1px solid transparent;
    white-space: nowrap;
    padding: 0 15px;
    font-size: 14px;
    border-radius: 4px;
    height: 32px;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    position: relative;
    color: rgba(0, 0, 0, 0.65);
    background-color: #fff;
    border-color: #d9d9d9;
    .upload-btn-text {
      margin-left: 8px;
    }
    &:hover {
      color: #40a9ff;
      border-color: #40a9ff;
    }
  }
  .com-upload-file {
    display: none;
  }
}
</style>
