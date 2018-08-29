<template>
  <div class="logo-container" :class="customClass">
    <div ref="target" class="logo-content">
      <a target="_blank" :href=" link | voidLink "><img class="left" :src="url"></a>
    </div>
    <com-edit ref="editTarget">
<com-upload
      accept="png|jpg|jpeg|bmp|gif"
      uploadTxt="上传"
      actionUrl="/api/upload/do-upload"
      inputName="file"
      :fileSize="2048"
      :exParams="{}"
      @load="uploadLoad"
      >
      </com-upload>
      <com-input placeholder="跳转链接" v-model="link"></com-input>
    </com-edit>
  </div>
</template>

<script>
import editMixin from './mixin'
import ComEdit from './edit'
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
    edit: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      url: '//img.alicdn.com/tps/TB16hl5LpXXXXXRXVXXXXXXXXXX-198-46.png',
      link: ''
    }
  },
  methods: {
    uploadLoad (data) {
      let ret = JSON.parse(data.data)
      if (ret.code === 200) {
        this.url = `${ret.data.host}/${ret.data.name}`
      }
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
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
  }
}
</style>
