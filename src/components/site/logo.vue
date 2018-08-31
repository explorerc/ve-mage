<template>
  <div class="logo-container" :class="customClass">
    <div ref="target" class="logo-content">
      <a target="_blank" :href=" value.link | voidLink "><img class="left" :src="url"></a>
    </div>
    <com-edit ref="editTarget">
<com-upload
      accept="png|jpg|jpeg|bmp|gif"
      uploadTxt="上传"
      actionUrl="/api/upload/image"
      inputName="file"
      :fileSize="2048"
      :exParams="{}"
      @load="uploadLoad"
      >
      </com-upload>
      <com-input placeholder="跳转链接" v-model="value.link"></com-input>
    </com-edit>
  </div>
</template>

<script>
import editMixin from './mixin'
import ComEdit from './edit'
const host = 'http://dev-zhike.oss-cn-beijing.aliyuncs.com/'
export default {
  mixins: [editMixin],
  components: {
    ComEdit
  },
  props: {
    customClass: {
      type: String,
      default: ''
    },
    value: {
      type: Object,
      default () {
        return {
          url: '',
          link: ''
        }
      }
    }
  },
  data () {
    return {

    }
  },
  methods: {
    uploadLoad (data) {
      let ret = JSON.parse(data.data)
      if (ret.code === 200) {
        this.value.url = `${ret.data.name}`
      }
    }
  },
  computed: {
    url () {
      return host + this.value.url
    }
  }
}
</script>

<style lang="scss" scoped>
.logo-container /deep/ {
  display: inline-block;
  width: 100%;
  height: 100%;
  position: relative;
  .logo-content {
    width: 100%;
    height: 100%;
    display: inline-block;
    max-height: 100%;
    img {
      width: 100%;
      max-width: 100%;
      max-height: 100%;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
  }
}
</style>
