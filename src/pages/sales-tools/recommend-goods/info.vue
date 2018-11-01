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
        <div class="upload_box">
          <ve-upload v-for="(ite,ind) in upload_list" title="图片小于2MB 支持jpg、png、bmp格式 最佳尺寸：600 x 600"
                     accept="png|jpg|jpeg|bmp" :defaultImg="defaultImg" :nowIndex="ind || 0"
                     :fileSize="2048" :errorMsg="uploadImgErrorMsg" @error="uploadError"
                     @success="uploadImgSuccess"></ve-upload>
          <el-button @click="add_upload" v-if="upload_list.length<4">+</el-button>
        </div>

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
  // import VeUpload from 'src/components/ve-upload-image'
  import VeUpload from 'src/components/ve-upload-group'

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
        upload_list: [{}],
        goodsData: {
          name: ''
        },
        uploadImgErrorMsg: ''
      }
    },
    methods: {
      add_upload () {
        this.upload_list.push({})
      },
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
    /deep/ {
      .upload_box {
        display: flex;
        .ve-upload-box {
          margin: auto 20px;
          display: inline-block;
          .com-upload {
            width: 100%;
            .upload-file-box {
              width: 100%;
              span {
                display: inline-block;
                margin: auto 20px;
              }
            }
          }
        }
      }
    }
  }
</style>
