<template>
  <div id="goods-info">
    <header>{{this.$route.params.type === 'create'?'新建':'编辑'}}商品信息
      <com-back :class='"back-btn"'></com-back>
    </header>
    <el-form :model="goodsData" ref="goodsData" :rules="rules" label-width="120px" class="demo-ruleForm">
      <el-form-item label="商品名称：" prop="title">
        <el-input v-model="goodsData.title" class="slot_inp_b" placeholder="请输入商品名称（不少于3个字）">
          <template slot="append" class="slot"><span v-text="goodsData.title.gbLength()" style="color: #2878FF"></span>
            / 20
          </template>
        </el-input>
      </el-form-item>
      <el-form-item label="原始价格：" prop="price">
        <div class="a_unit">
          <el-input v-model.number="goodsData.price" min="0" max="999999" placeholder="请输入价格"></el-input>
          <span>元</span>
        </div>
      </el-form-item>
      <el-form-item label="优惠价格：" prop="preferential">
        <div class="a_unit">
          <el-input v-model.number="goodsData.preferential" :disabled="!!!goodsData.price"
                    placeholder="请输入价格"></el-input>
          <span>元</span>
        </div>
      </el-form-item>
      <el-form-item label="商品图片：" prop="imageList">
        <div class="upload_box">
          <template v-for="(ite,ind) in goodsData.imageList">
            <ve-upload :key="ind"
                       title="图片小于2MB &nbsp;&nbsp;(jpg、png、bmp)&nbsp;&nbsp; 最佳尺寸：600 x 600"
                       accept="png|jpg|jpeg|bmp|gif" :defaultImg="defaultImg" :nowIndex="ind|| 0"
                       :fileSize="2048"
                       :errorMsg="ite.errMsg"
                       @error="uploadError($event, ite)" :initImg="ite.name"
                       @success="uploadImgSuccess"></ve-upload>
          </template>
          <!--:errorMsg="ind=== 0?uploadImgErrorMsg0:ind=== 1?uploadImgErrorMsg1:ind=== 2?uploadImgErrorMsg2:ind=== 3?uploadImgErrorMsg3:''"-->
        </div>
      </el-form-item>
      <el-form-item label="商品链接：" prop="url" class="url">
        <el-input class="inupt_text" v-model="goodsData.url" type="url" placeholder="请输入商品链接"></el-input>
      </el-form-item>
      <el-form-item label="商品描述：" >
        <com-input class="inupt_textarea" :max-length=140 type="textarea" v-model.trim="goodsData.describe"
                   placeholder="请输入商品描述"></com-input>
      </el-form-item>

      <el-form-item label="淘口令：" class="textarea-box">
        <com-input class="inupt_textarea" :max-length=100 type="textarea" :rows=5 :cols=4 v-model.trim="goodsData.tao"
                   placeholder="请输入淘口令"></com-input>
      </el-form-item>
      <el-form-item class="btns_box">
        <el-button class="add-goods primary-button" type="primary" @click="onSubmit('goodsData')" round>保存</el-button>
        <el-button @click="resetForm('goodsData')" round>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import VeUpload from 'src/components/ve-upload-goods'
  import goodsServer from 'src/api/salesGoods-service'
  import EventBus from 'src/utils/eventBus'

  export default {
    name: 'info',
    created () {
      if (this.$route.params.type === 'update') {
        this.getGoodsDetail()
        this.Breadcrumb = '编辑商品'
      } else {
        this.Breadcrumb = '新建商品'
      }
    },
    mounted () {
      EventBus.$emit('breads', [{
        title: '活动管理'
      }, {
        title: '活动列表',
        url: '/liveMager/list'
      }, {
        title: '活动详情',
        url: `/liveMager/detail/${this.$route.params.id}`
      }, {
        title: '商品列表',
        url: `/salesTools/recommendGoodsList/${this.$route.params.id}`
      }, {
        title: this.Breadcrumb,
        url: `/salesTools/recommendGoodsList/${this.$route.params.id}/${this.$route.params.type}`
      }])
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
        if (this.timerVail) return
        this.timerVail = setTimeout(() => {
          clearTimeout(this.timerVail)
          this.timerVail = null
          if (value) {
            if (value.gbLength() < rule.min) {
              return callback(new Error('商品名称过短'))
            } else if (value.gbLength() > rule.max) {
              for (let attr in this[rule.obj]) {
                if (attr === rule.field) {
                  this[rule.obj][attr] = value.slice(0, value.gbIndex(rule.max) + 1)
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
      let price = (rule, value, callback) => {
        if (typeof value === 'number' && (value || value === 0)) {
          if (value < 0 || value >= 999999) {
            return callback(new Error('原始价格应大于0小于999999'))
          } else if (String(value).indexOf('.') > -1 && String(value).slice(String(value).indexOf('.') + 1).length > 2) {
            return callback(new Error('价格最多为小数点后两位'))
          } else {
            return callback()
          }
        } else {
          return callback(new Error('请输入原始价格'))
        }
      }
      let preferential = (rule, value, callback) => {
        // if (String(value).slice(String(value).indexOf('.') + 1).length > 2) {
        //   value = String(value).slice(0, String(value).indexOf('.') + 3)
        // }
        if (value) {
          if (typeof value === 'number') {
            let maxV = this[rule.obj].price
            if (value && value < 0) {
              return callback(new Error('优惠价格不能小于0'))
            } else if (value && maxV && value >= maxV) {
              return callback(new Error('优惠价格需小于原始价格'))
            } else if (String(value).indexOf('.') > -1 && String(value).slice(String(value).indexOf('.') + 1).length > 2) {
              return callback(new Error('优惠价格最多为小数点后两位'))
            } else if (value && !maxV) {
              return callback(new Error('请先填写原始价格'))
            } else {
              return callback()
            }
          } else {
            return callback(new Error('请输入优惠价格'))
          }
        } else {
          return callback()
        }
      }
      let valiUpload = (rule, value, callback) => {
        let num = 0
        this[rule.obj].imageList.map((item) => {
          if (item.name) {
            num += 1
          }
        })
        if (num > 0) {
          if (value[0].name) {
            return callback()
          } else {
            return callback(new Error('请上传封面图'))
          }
        } else {
          return callback(new Error('请上传图片'))
        }
      }
      return {
        Breadcrumb: '',
        isShowMsgB: true,
        errTitle: '',
        goodsData: {
          title: '', // 标题
          price: '', // 价格
          preferential: '', // 优惠价格
          url: '', // 商品链接
          imageList: [{ errMsg: '' }, { errMsg: '' }, { errMsg: '' }, { errMsg: '' }],
          describe: '', // 商品描述
          tao: ''
        },
        timerVail: null,
        timer: null,
        rules: {
          title: [
            { required: true, validator: valiName, min: 3, max: 20, trigger: 'change', obj: 'goodsData' }
          ],
          price: [
            { validator: price, type: 'number', min: 0, max: 999999, trigger: 'blur', obj: 'goodsData' }
          ],
          preferential: [
            { validator: preferential, type: 'number', min: 0, max: 999999, trigger: 'blur', obj: 'goodsData' }
          ],
          url: [
            { required: true, type: 'url', message: '请输入有效的链接以http://或https://开头', trigger: 'blur', minlength: 0, maxlength: 300 },
            { min: 0, max: 300, type: 'url', message: '商品链接应大于0小于300', trigger: 'blur' }
          ],
          imageList: [
            { required: true, validator: valiUpload, trigger: 'blur', obj: 'goodsData' }
          ]
        }
      }
    },
    methods: {
      add_upload () {
        this.goodsData.imageList.push({ errMsg: '' })
      },
      getGoodsDetail () {
        this.$post(goodsServer.GOODS_DETAIL, { goods_id: this.$route.params.id })
          .then(res => {
            res.data.image = JSON.parse(res.data.image)
            let imgLen = res.data.image.length
            for (let i = 0; i < 4 - imgLen; i++) {
              res.data.image.push({ errMsg: '' })
            }
            res.data.price = Number.parseInt(res.data.price)
            res.data.preferential = Number.parseInt(res.data.preferential);

            ({
              title: this.goodsData.title,
              price: this.goodsData.price,
              preferential: this.goodsData.preferential,
              image: this.goodsData.imageList,
              describe: this.goodsData.describe,
              url: this.goodsData.url,
              tao: this.goodsData.tao
            } = res.data)
          })
      },
      onSubmit (formName) {
        if (this.timer) return
        this.timer = setTimeout(() => {
          clearTimeout(this.timer)
          this.timer = null
          this.$refs[formName].validate((valid) => {
            if (valid) {
              let _url
              if (this.$route.params.type === 'create') {
                this.goodsData.activity_id = this.$route.params.id // 活动id
                _url = goodsServer.CREATE_GOODS
              } else {
                this.goodsData.goods_id = this.$route.params.id
                _url = goodsServer.UPDATE_GOODS
              }
              let imgList = this.goodsData.imageList.filter((ite, ind) => {
                if (ite.name) {
                  return ite
                }
              })
              this.goodsData.image = JSON.stringify(imgList)
              this.$post(_url, this.goodsData)
                .then(res => {
                  this.$toast({
                    content: '操作成功!',
                    position: 'center'
                  })
                  this.$router.go(-1)
                  this.isShowMsgB = false
                })
                .catch(err => {
                  console.log(err)
                })
            } else {
              console.log('error submit!!')
              return false
            }
          })
        }, 100)
      },
      resetForm (formName) {
        this.$messageBox({
          header: '',
          content: '是否放弃当前编辑内容',
          cancelText: '暂不', // 不传递cancelText将只有一个确定按钮
          confirmText: '确定',
          handleClick: (e) => {
            if (e.action === 'cancel') {
            } else if (e.action === 'confirm') {
              this.$refs[formName].resetFields()
              this.isShowMsgB = false
              this.$router.go(-1)
            }
          }
        })
      },
      uploadImgSuccess (data) {
        this.goodsData.imageList[data.nowIndex].name = data.name
      },
      uploadError (data, item) {
        item.errMsg = data.msg
        // this.goodsData.imageList[data.nowIndex].errMsg = data.msg
      }
    },
    beforeRouteLeave (to, from, next) {
      if (this.isShowMsgB) {
        this.$messageBox({
          header: '提示',
          width: '400px',
          content: '是否放弃当前编辑？',
          cancelText: '否',
          confirmText: '是',
          handleClick: (e) => {
            if (e.action === 'confirm') {
              next(true)
            } else {
              next(false)
            }
          }
        })
      } else {
        next(true)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '~assets/css/mixin.scss';

  .back-btn {
    margin: 0;
    position: relative;
    bottom: 10px;
  }

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
        .el-form-item:nth-of-type(2),
        .el-form-item:nth-of-type(3) {
          width: 400px;
        }
        /*.el-form-item:last-of-type {*/
        /*text-align: center;*/
        /*}*/
        .inupt_textarea {
          width: 100%;
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
        .el-input__inner, .el-input.el-input__inner, .el-input__inner {
          border-color: #CECECE !important;
        }
        .el-input__inner:hover, .el-input.is-active .el-input__inner, .el-input__inner:focus {
          border-color: #888888 !important;
        }
        .el-form-item.url{
          margin-bottom: 24px;
        }
        .el-form-item.textarea-box{
          transform: translateY(-15px);
        }
        .el-form-item:last-child {
          text-align: center;
        }
      }
      .upload_box {
        height: 141px;
        position: relative;
        &::before {
          content: '';
          width: 32px;
          height: 35px;
          display: inline-block;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 100;
          background-image: url('~assets/image/index01.svg');
          background-size: cover;
        }
        .ve-upload-box {
          width: 140px;
          height: 140px;
          margin: auto 10px auto 0;
          display: inline-block;
          .upload-img-box {
            width: 140px;
            height: 140px;
          }
          .over-upload {
            width: 140px;
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
          color: #999999;
        }
      }
    }
  }
</style>
