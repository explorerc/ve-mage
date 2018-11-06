<template>
  <div id="goods-info">
    <p>新建/编辑商品信息</p>
    <el-form :model="goodsData" ref="goodsData" :rules="rules" label-width="80px" class="demo-ruleForm">
      <el-form-item label="商品名称" prop="title">
        <el-input v-model="goodsData.title" :errorTips="errTitle" class="slot_inp_b">
          <template slot="append" class="slot"><span v-text="goodsData.title.gbLength()"></span> / 20</template>
        </el-input>
      </el-form-item>
      <el-form-item label="原始价格" prop="ysjg">
        <el-input v-model.number="goodsData.ysjg" min="0" max="999999"></el-input>
      </el-form-item>
      <el-form-item label="优惠价格" prop="cxjg">
        <el-input v-model.number="goodsData.cxjg" :disabled="!!!goodsData.ysjg"></el-input>
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
        <el-button size="small" type="primary" @click="onSubmit('goodsData')">保存</el-button>
        <el-button size="small">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import VeUpload from 'src/components/ve-upload-image'
  // import VeUpload from 'src/components/ve-upload-group'

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
      let valiName = (rule, value, callback) => {
        let timer
        if (timer) return
        timer = setTimeout(() => {
          clearTimeout(timer)
          timer = null
          if (value) {
            if (value.gbLength() < rule.min) {
              return callback(new Error('商品名称过短'))
            } else if (value.gbLength() >= rule.max) {
              for (let attr in this[rule.obj]) {
                if (attr === rule.field) {
                  this[rule.obj][attr] = this[rule.obj][attr].slice(0, rule.max)
                  return callback()
                }
              }
            } else {
              callback()
            }
          } else {
            return callback(new Error('商品名称不能为空'))
          }
        }, 500)
      }
      let valicxjg = (rule, value, callback) => {
        let maxV = this[rule.obj].ysjg
        if (value && value < 0) {
          return callback(new Error('商品促销价格不能小于0'))
        } else if (value && maxV && value > maxV) {
          return callback(new Error('商品促销价格不能大于原始价格'))
        } else if (value && !maxV) {
          return callback(new Error('请先填写原始价格'))
        } else {
          return callback()
        }
      }
      return {
        errTitle: '',
        upload_list: [{}],
        goodsData: {
          name: '',
          title: '',
          ysjg: '',
          cxjg: ''
        },
        uploadImgErrorMsg: '',
        rules: {
          title: [
            { validator: valiName, min: 3, max: 20, trigger: 'change', obj: 'goodsData' }
          ],
          ysjg: [
            { type: 'number', required: true, message: '请输入原始价格', trigger: 'blur' },
            { type: 'number', min: 0, max: 999999, message: '原始价格应大于0小于999999', trigger: 'blur' }
          ],
          cxjg: [
            { validator: valicxjg, type: 'number', min: 0, max: 999999, trigger: 'blur', obj: 'goodsData' }
          ]
        }
      }
    },
    methods: {
      add_upload () {
        this.upload_list.push({})
      },
      onSubmit (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!')
          } else {
            console.log('error submit!!')
            return false
          }
        })
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
      .el-form{

      }
      .slot_inp_b {
        .el-input__inner {
          padding-right: 60px;
        }
      }
      .el-input-group__append {
        width: 60px;
        transform: translateX(-61px);
        text-align: center;
        border: transparent;
        background-color: transparent;
        padding: 0;
      }
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
