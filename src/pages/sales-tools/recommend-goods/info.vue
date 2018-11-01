<template>
  <div id="goods-info">
    <p>新建/编辑商品信息</p>
    <el-form ref="goodsData" :model="goodsData" label-width="80px">
      <el-form-item label="商品名称">
        <el-input v-model="goodsData.name"></el-input>
      </el-form-item>
      <el-form-item label="优惠价格">
        <el-input v-model="goodsData.name"></el-input>
      </el-form-item>
      <el-form-item label="原始价格">
        <el-input v-model="goodsData.name"></el-input>
      </el-form-item>
      <el-form-item label="商品图片">
        <el-input v-model="goodsData.name"></el-input>
      </el-form-item>
      <el-form-item label="商品描述">
        <ve-upload title="图片小于2MB 支持jpg、png、bmp格式 最佳尺寸：600 x 600" accept="png|jpg|jpeg|bmp" :defaultImg="defaultImg"
                   :fileSize="2048" :errorMsg="uploadImgErrorMsg" @error="uploadError"
                   @success="uploadImgSuccess"></ve-upload>
      </el-form-item>
      <el-form-item label="商品链接">
        <el-input v-model="goodsData.name" type="url"></el-input>
      </el-form-item>
      <el-form-item label="淘口令">
        <el-input v-model="goodsData.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button size="small" type="primary" @click="onSubmit">保存</el-button>
        <el-button size="small">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import VeUpload from 'src/components/ve-upload-image'

  export default {
    name: 'info',
    created () {

    },
    components: {
      VeUpload
    },
    computed: {
      defaultImg () {
        return this.poster ? `${this.$imgHost}/${this.poster}` : ''
      }
    },
    data () {
      return {
        goodsData: {
          name: ''
        },
        uploadImgErrorMsg: ''
      }
    },
    methods: {
      onSubmit () {
      },
      uploadImgSuccess (data) {
        console.log(data)
      },
      uploadError (data) {
        console.log(data)
      }
    }
  }
</script>

<style lang="scss" scoped>
  #goods-info {
    padding: 40px 100px;
  }
</style>
