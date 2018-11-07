<template>
  <div id="goods-info">
    <header>新建/编辑商品信息</header>
    <el-form :model="goodsData" ref="goodsData" :rules="rules" label-width="80px" class="demo-ruleForm">
      <el-form-item label="商品名称" prop="title">
        <el-input v-model="goodsData.title" class="slot_inp_b">
          <template slot="append" class="slot"><span v-text="goodsData.title.gbLength()" style="color: #2878FF"></span> / 20</template>
        </el-input>
      </el-form-item>
      <el-form-item label="原始价格" prop="ysjg">
        <div class="a_unit">
          <el-input v-model.number="goodsData.ysjg" min="0" max="999999"></el-input>
          <span>元</span>
        </div>

      </el-form-item>
      <el-form-item label="促销价格" prop="cxjg">
        <div class="a_unit">
          <el-input v-model.number="goodsData.cxjg" :disabled="!!!goodsData.ysjg"></el-input>
          <span>元</span>
        </div>

      </el-form-item>
      <el-form-item label="商品图片" prop="upload_list">
        <div class="upload_box">
          <ve-upload v-for="(ite,ind) in goodsData.upload_list" title="图片小于2MB 支持jpg、png、bmp格式 最佳尺寸：600 x 600"
                     accept="png|jpg|jpeg|bmp" :defaultImg="defaultImg" :nowIndex="ind || 0"
                     :fileSize="2048" :errorMsg="uploadImgErrorMsg" @error="uploadError"
                     @success="uploadImgSuccess"></ve-upload>
          <span class="el-icon-circle-plus-outline" @click="add_upload" v-if="goodsData.upload_list.length<4"></span>
        </div>
      </el-form-item>
      <el-form-item label="商品描述">
        <com-input class="inupt_textarea" :max-length=140 type="textarea" v-model.trim="goodsData.name"
                   placeholder="请输入群组名称"></com-input>
      </el-form-item>
      <el-form-item label="商品链接" prop="url">
        <el-input class="inupt_text" v-model="goodsData.url" type="url"></el-input>
      </el-form-item>
      <el-form-item label="淘口令">
        <com-input class="inupt_text" :max-length=100 type="text" v-model.trim="goodsData.name"
                   placeholder="请输入群组名称"></com-input>
      </el-form-item>
      <el-form-item>
        <el-button size="small" type="primary" @click="onSubmit('goodsData')">保存</el-button>
        <el-button size="small" @click="resetForm('goodsData')">取消</el-button>
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
      let valiUpload = (rule, value, callback) => {
        let num = 0
        this[rule.obj].upload_list.map((item) => {
          if (item.name && item.host) {
            num += 1
          }
        })
        if (num > 0) {
          return callback()
        } else {
          return callback(new Error('请上传图片'))
        }
      }
      return {
        errTitle: '',
        upload_list: [{}],
        goodsData: {
          name: '',
          title: '',
          ysjg: '',
          cxjg: '',
          url: '',
          upload_list: [{}]
        },
        uploadImgErrorMsg: '',
        rules: {
          title: [
            { required: true, validator: valiName, min: 3, max: 20, trigger: 'change,blur', obj: 'goodsData' }
          ],
          ysjg: [
            { required: true, type: 'number', message: '请输入原始价格', trigger: 'blur' },
            { type: 'number', min: 0, max: 999999, message: '原始价格应大于0小于999999', trigger: 'blur' }
          ],
          cxjg: [
            { validator: valicxjg, type: 'number', min: 0, max: 999999, trigger: 'blur', obj: 'goodsData' }
          ],
          url: [
            { required: true, type: 'url', message: '请输入商品链接', trigger: 'blur' },
            { min: 0, max: 300, type: 'url', message: '商品链接应大于0小于300', trigger: 'blur' }
          ],
          upload_list: [
            { required: true, validator: valiUpload, trigger: 'blur', obj: 'goodsData' }
          ]
        }
      }
    },
    methods: {
      add_upload () {
        this.goodsData.upload_list.push({})
      },
      onSubmit (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log(this.goodsData)
            alert('submit!')
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      resetForm (formName) {
        this.$refs[formName].resetFields()
      },
      uploadImgSuccess (data) {
        console.log(data)
        this.goodsData.upload_list[data.nowIndex] = {
          name: data.name,
          host: data.host
        }
        console.log(this.goodsData)
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
      header{
        padding: 30px 0;
        line-height: 30px;
      }
      .el-form {
        .el-form-item:nth-of-type(1) {
          .el-form-item__content {
            width: 560px;
          }
        }
        .el-form-item:nth-of-type(2), .el-form-item:nth-of-type(3) {
          width: 400px;
        }
        .inupt_textarea {
          width: 500px;
          height: 100px;
          .limit.area {
            right: 12px;
            bottom: 10px;
          }
        }
        .inupt_text {
          width: 500px;
        }
        .a_unit {
          overflow: hidden;
          width: 200px;
          .el-input {
            width: 150px;
            float: left;
          }
          span {
            display: inline-block;
            width: 40px;
            float: right;
            text-align: left;
          }
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
      }
      .upload_box {
        .ve-upload-box {
          width: 21%;
          margin: auto 20px auto 0;
          display: inline-block;
          .com-upload {
            width: 100%;
            .upload-file-box {
              width: 100%;
              span {
                display: inline-block;
                margin: auto 20px;
                color: #cccccc;
              }
            }
          }
        }
        > span {
          font-size: 30px;
          transform: translateY(-60px);
          color: #999999
        }
      }
    }
  }
</style>
