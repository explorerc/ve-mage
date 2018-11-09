<template>
  <div id="goods-info">
    <header>新建/编辑商品信息</header>
    <el-form :model="goodsData" ref="goodsData" :rules="rules" label-width="80px" class="demo-ruleForm">
      <el-form-item label="商品名称" prop="title">
        <el-input v-model="goodsData.title" class="slot_inp_b" placeholder="请输入商品名称（不少于3个字）">
          <template slot="append" class="slot"><span v-text="goodsData.title.gbLength()" style="color: #2878FF"></span>
            / 20
          </template>
        </el-input>
      </el-form-item>
      <el-form-item label="原始价格" prop="ysjg">
        <div class="a_unit">
          <el-input v-model.number="goodsData.ysjg" min="0" max="999999" placeholder="请输入价格"></el-input>
          <span>元</span>
        </div>

      </el-form-item>
      <el-form-item label="优惠价格" prop="cxjg">
        <div class="a_unit">
          <el-input v-model.number="goodsData.cxjg" :disabled="!!!goodsData.ysjg" placeholder="请输入价格"></el-input>
          <span>元</span>
        </div>
      </el-form-item>
      <el-form-item label="商品图片" prop="upload_list">
        <div class="upload_box">
          <i></i>
          <ve-upload v-for="(ite,ind) in goodsData.upload_list" :key="ind"
                     title="图片小于2MB &nbsp;&nbsp;(jpg、png、bmp)&nbsp;&nbsp; 最佳尺寸：600 x 600"
                     accept="png|jpg|jpeg|bmp" :defaultImg="defaultImg" :nowIndex="ind || 0"
                     :fileSize="2048" :errorMsg="uploadImgErrorMsg" @error="uploadError"
                     @success="uploadImgSuccess"></ve-upload>
          <span class="el-icon-circle-plus-outline" @click="add_upload" v-if="goodsData.upload_list.length<4"></span>
        </div>
      </el-form-item>
      <el-form-item label="商品链接" prop="url">
        <el-input class="inupt_text" v-model="goodsData.url" type="url" placeholder="请输入商品链接"></el-input>
      </el-form-item>
      <el-form-item label="商品描述">
        <com-input class="inupt_textarea" :max-length=140 type="textarea" v-model.trim="goodsData.name"
                   placeholder="请输入商品描述"></com-input>
      </el-form-item>

      <el-form-item label="淘口令">
        <el-input class="inupt_textarea" :max-length=100 type="textarea" :rows=5 :cols=4 v-model.trim="goodsData.name"
                  placeholder="请输入淘口令"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="add-goods primary-button" type="primary" @click="onSubmit('goodsData')" round>保存</el-button>
        <el-button @click="resetForm('goodsData')" round>取消</el-button>
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
                  this[rule.obj][attr] = this[rule.obj][attr].slice(0, rule.max * 2)
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
  @import '~assets/css/mixin.scss';

  #goods-info {
    padding: 50px 100px;
    font-family: PingFangSC-Regular;
    /deep/ {
      header {
        height: 26px;
        font-size: 24px;
        font-weight: 400;
        color: rgba(34, 34, 34, 1);
        line-height: 26px;
        margin-bottom: 25px;
      }
      .el-form {
        padding: 40px 80px;
        border: 1px solid #eee;
        background-color: white;
        .el-form-item:nth-of-type(1) {
          .el-form-item__content {
            width: 460px;
          }
        }
        .el-form-item:nth-of-type(2), .el-form-item:nth-of-type(3) {
          width: 400px;
        }
        /*.el-form-item:last-of-type {*/
        /*text-align: center;*/
        /*}*/
        .inupt_textarea {
          width: 760px;
          height: 120px;
          .limit.area {
            right: 12px;
            bottom: 10px;
          }
        }
        .inupt_text {
          width: 440px;
        }
        .a_unit {
          overflow: hidden;
          width: 250px;
          .el-input {
            width: 200px;
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
        position: relative;
        > i {
          width: 32px;
          height: 35px;
          display: inline-block;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 100;
          background-image: url("~assets/image/index-img.png");
          background-size: cover;
        }
        .ve-upload-box {
          width: 140px;
          height: 140px;
          margin: auto 20px auto 0;
          display: inline-block;
          .upload-img-box {
            width: 140px;
            height: 140px;
          }
          .com-upload {
            width: 100%;
            .upload-file-box {
              width: 100%;
              .upload-icon {
                margin: 10px auto 5px auto;
              }
              span {
                display: inline-block;
                /*margin: auto 5px;*/
                color: #cccccc;
                font-size: 12px;
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
