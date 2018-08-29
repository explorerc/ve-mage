<template>
  <div class="block-container" :class="customClass">
    <div ref="target" class="block" >
        <slot></slot>
    </div>
    <com-edit ref="editTarget">
      <com-tabs :value="bgType">
       <com-tab index="color" >
         <div slot="label"><el-radio v-model="bgType" label="color">显示颜色</el-radio></div>
         <div>
           <el-color-picker show-alpha v-model="color"></el-color-picker>
         </div>
       </com-tab>
       <com-tab index="img" >
          <div slot="label"><el-radio v-model="bgType" label="img">显示图片</el-radio></div>
         <div>
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
         </div>
       </com-tab>
      </com-tabs>
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
    datas: {
      type: Object,
      default () {
        return {}
      }
    },
    edit: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      bgType: 'color',
      color: 'rgba(0, 0, 0, 1)',
      img: ''
    }
  },
  mounted () {
    this.analysisData({bgType: this.bgType, color: this.color, img: this.img})
  },
  watch: {
    datas: {
      handler (data) {
        console.log(data)
        if (data.bgType) {
          ({bgType: this.bgType, color: this.color, img: this.img} = data)
          if (!this.color) {
            this.color = 'rgba(0, 0, 0, 1)'
          }
        }
      },
      immediate: true
    },
    color (value) {
      this.$refs.target.style.cssText = `background-color:${value}`
    },
    img (value) {
      this.$refs.target.style.cssText = `background-image:url(${value})`
    }
  },
  methods: {
    analysisData (data) {
      if (data.bgType === 'img') {
        this.$refs.target.style.cssText = `background-image:url(${data.img})`
      } else {
        this.$refs.target.style.cssText = `background-color:${data.color}`
      }
    },
    uploadLoad (data) {
      let ret = JSON.parse(data.data)
      if (ret.code === 200) {
        this.img = `${ret.data.host}/${ret.data.name}`
      }
    }
  }
}
</script>

<style scoped lang="scss">
.block-container /deep/ {
  position: relative;
  .block {
    height: 100%;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    .edit {
      position: absolute;
      top: 0;
      right: 0;
      width: 16px;
      height: 16px;
      background-color: red;
      display: none;
      cursor: pointer;
    }
  }
}
</style>
