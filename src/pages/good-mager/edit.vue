<template>
  <div id="goods-info">
    <header>{{this.$route.params.type === 'create'?'新建':'编辑'}}商品信息
      <com-back></com-back>
    </header>
    <el-form :model="goodsData" ref="goodsData" :rules="rules" label-width="120px" class="demo-ruleForm">
      <el-form-item label="商品名称：" prop="name">
        <el-input v-model="goodsData.name" class="slot_inp_b" placeholder="请输入商品名称（不少于3个字）">
          <template slot="append" class="slot">
            <span v-text="goodsData.name.gbLength()" style="color: #4b5afe" v-if="goodsData.name.gbLength()>0"></span><span v-text="goodsData.name.gbLength()" style="color: #999" v-if="goodsData.name.gbLength()==0">
            </span>/20</template>
        </el-input>
      </el-form-item>
      <el-form-item label="原始价格：" prop="price" class="is-required">
        <div class="a_unit">
          <el-input v-model.number="goodsData.price" min="0" max="999999" placeholder="请输入价格"></el-input>
          <span>元</span>
        </div>
      </el-form-item>
      <el-form-item label="优惠价格：" prop="disprice">
        <div class="a_unit">
          <el-input v-model.number="goodsData.preferential" :disabled="!!!goodsData.price"
                    placeholder="请输入价格"></el-input>
          <span>元</span>
        </div>
      </el-form-item>
      <el-form-item label="商品图片：" prop="imgUrl" style="margin-bottom:15px;" class="image-list">
        <div class="upload_box">
          <template v-for="(ite,ind) in goodsData.imgUrl">
            <div style="display: inline-block">
              <ve-upload :key="ind"
                         title="图片支持jpg、png、bmp&nbsp;&nbsp;不超过2MB <br> 最佳尺寸：600 x 800"
                         accept="png|jpg|jpeg|bmp|gif" :defaultImg="defaultImg" :nowIndex="ind|| 0"
                         :fileSize="2048"
                         @error="uploadError($event, ite)" :initImg="ite.name"
                         @success="uploadImgSuccess(ite)"></ve-upload>
              <span v-if="ite.errMsg && !imgEmptyMsg" class="error-msg img-error error12">{{ite.errMsg}}</span>
              <span v-if="ind===0" class="error-msg img-error">{{imgEmptyMsg}}</span>
            </div>
            <!--<ve-upload :key="ind"-->
                       <!--title="图片支持jpg、png、bmp&nbsp;&nbsp;小于不超过2MB &nbsp;&nbsp; 最佳尺寸：600 x 800"-->
                       <!--accept="png|jpg|jpeg|bmp|gif" :defaultImg="defaultImg" :nowIndex="ind|| 0"-->
                       <!--:fileSize="2048"-->
                       <!--:errorMsg="ite.errMsg"-->
                       <!--@error="uploadError($event, ite)" :initImg="ite.name"-->
                       <!--@success="uploadImgSuccess"></ve-upload>-->
          </template>
          <!--:errorMsg="ind=== 0?uploadImgErrorMsg0:ind=== 1?uploadImgErrorMsg1:ind=== 2?uploadImgErrorMsg2:ind=== 3?uploadImgErrorMsg3:''"-->
        </div>
      </el-form-item>
      <el-form-item label="现有库存：" prop="inventory" class="is-required">
        <div class="a_unit">
          <el-input v-model.number="goodsData.inventory" min="0" max="999999" placeholder="请输库存"></el-input>
          <span>件</span>
        </div>
      </el-form-item>

      <el-form-item label="商品描述：">
        <com-input class="inupt_textarea" :max-length=140 type="textarea" v-model.trim="goodsData.describe"
                   placeholder="请输入商品描述"></com-input>
      </el-form-item>
      <el-form-item label="是否上架：" prop="inventory" class="is-required">
        <div class="">
          <el-radio v-model="goodsData.added" label="1" :class="[goodsData.added===0]">上架</el-radio>
          <el-radio v-model="goodsData.added" label="0">下架</el-radio>
        </div>
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
  import goodsServer from 'src/api/goods'
  import EventBus from 'src/utils/eventBus'

  export default {
    name: 'info',
    watch: {
      goodsData: {
        handler () {
          if (this.initReady) {
            this.isShowMsgB = true
          }
        },
        deep: true
      }
    },
    created () {
      if (this.$route.params.type === 'update') {
        this.getGoodsDetail()
        this.Breadcrumb = '编辑商品'
      } else {
        this.Breadcrumb = '新建商品'
      }
      this.$nextTick(() => {
        this.initReady = true
      })
    },
    mounted () {
      EventBus.$emit('breads', [{
        title: '商品管理'
      }, {
        title: '商品列表',
        url: '/goodMager/list'
      }, {
        title: this.Breadcrumb,
        url: `/goodMager/edit/${this.$route.params.type}`
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
        console.log(value)
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
        this[rule.obj].imgUrl.map((item) => {
          if (item.name) {
            num += 1
          }
        })
        if (num > 0) {
          if (value[0].name) {
            return callback()
          } else {
            this.imgEmptyMsg = '请上传封面图'
            return callback(new Error('请上传封面图'))
          }
        } else {
          this.imgEmptyMsg = '请上传图片'
          return callback(new Error('请上传图片'))
        }
      }
      let inventory = (rule, value, callback) => {
        if (typeof value === 'number' && (value || value === 0)) {
          if (value < 0 || value >= 999999) {
            return callback(new Error('现有库存应大于0小于999999'))
          } else if (String(value).indexOf('.') > -1 && String(value).slice(String(value).indexOf('.') + 1).length >= 1) {
            return callback(new Error('库存量应为整数'))
          } else {
            return callback()
          }
        } else {
          return callback(new Error('请输入现有库存'))
        }
      }
      return {
        timerVail: null,
        timer: null,
        tipsShow: true,
        Breadcrumb: '',
        isShowMsgB: false,
        errTitle: '',
        imgEmptyMsg: '',
        goodId: this.$route.params.id,
        goodsData: {
          name: '',
          price: '',
          imgUrl: [{errMsg: ''}],
          disprice: '',
          describe: '',
          inventory: null,
          added: '1'
        },
        rules: {
          name: [
            {required: true, validator: valiName, min: 3, max: 20, trigger: 'change', obj: 'goodsData'}
          ],
          price: [
            {validator: price, type: 'number', min: 0, max: 999999, trigger: 'change', obj: 'goodsData'}
          ],
          preferential: [
            {validator: preferential, type: 'number', min: 0, max: 999999, trigger: 'change', obj: 'goodsData'}
          ],
          inventory: [
            {validator: inventory, type: 'number', min: 0, max: 999999, trigger: 'change', obj: 'goodsData'}
          ],
          imgUrl: [
            {required: true, validator: valiUpload, trigger: 'blur', obj: 'goodsData'}
          ]
        }
      }
    },
    methods: {
      getGoodsDetail () {
        let data = {
          goodId: this.goodId
        }
        this.$get(goodsServer.GET_GOOD_BYID, data).then(res => {
          if (res.code === 200) {
            this.goodsData = res.data
          }
        })
        console.log(this.goodId)
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
                _url = goodsServer.CREATE_GOODS
              } else {
                this.goodsData.goods_id = this.$route.params.id
                _url = goodsServer.UPDATE_GOODS
              }
              let imgList = this.goodsData.imgUrl.filter((ite, ind) => {
                if (ite.name) {
                  return ite
                }
              })
              this.goodsData.image = JSON.stringify(imgList)
              console.log(_url)
              // this.$post(_url, this.goodsData)
              //   .then(res => {
              //     // this.$toast({
              //     //   content: '操作成功!'
              //     // })
              //     this.$router.go(-1)
              //     this.isShowMsgB = false
              //   })
              //   .catch(err => {
              //     console.log(err)
              //   })
            } else {
              console.log('error submit!!')
              return false
            }
          })
        }, 100)
      },
      resetForm (formName) {
        this.$router.go(-1)
      },
      uploadImgSuccess (data) {
        data.errMsg = ''
        this.goodsData.imgUrl[data.nowIndex].name = data.name
      },
      uploadError (data, item, index) {
        this.imgEmptyMsg = ''
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
<style lang="scss">
  .el-form-item__error {
    top: 90%;
  }
</style>
<style lang="scss" scoped>
  @import '~assets/css/mixin.scss';

  #goods-info {
    padding: 50px 100px;
    font-family: PingFangSC-Regular;
    /deep/ {
      .el-form-item .tips {
        display: block;
        color: #888;
        height: 20px;
        line-height: 20px;
        font-size: 14px;
      }
      header {
        height: 26px;
        font-size: 24px;
        font-weight: 400;
        color: rgba(34, 34, 34, 1);
        line-height: 26px;
        margin-bottom: 25px;
        position: relative;
      }
      .el-form {
        padding: 40px 80px;
        border: 1px solid #eee;
        background-color: white;
        .el-form-item {
          margin-bottom: 27px;
          &.image-list {
            .el-form-item__error {
              display: none;
              top: calc(100% - 17px);
            }
            div {
              position: relative;
            }
            .error-msg {
              color: #f56c6c;
              position: absolute;
              top: 83%;
            }
          }

        }
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
            padding-left: 10px;
            border-radius: 4px;
          }
        }
        .el-input__inner {
          padding-left: 10px;
        }
        .el-input-group__append {
          width: 60px;
          transform: translateX(-61px);
          text-align: center;
          border: transparent;
          background-color: transparent;
          padding: 0;
        }
        .el-input__inner,
        .el-input.el-input__inner,
        .el-input__inner {
          border-color: #cecece !important;
        }
        .el-input__inner:hover,
        .el-input.is-active .el-input__inner,
        .el-input__inner:focus {
          border-color: #888888 !important;
        }
        .el-form-item.url {
          margin-bottom: 30px;
        }
        .el-form-item.textarea-box {
          transform: translateY(-8px);
        }
        .el-form-item:last-child {
          text-align: center;
        }
        .is-error input {
          border-color: #FC5659 !important;
        }
      }
      .upload_box {
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
            height: 140px;
            .upload-file-box {
              position: relative;
              width: 100%;
              .upload-icon {
                margin: 10px auto 0px auto;
              }
              .error-msg {
                /*position: absolute;*/
                /*top: 0;*/
                /*left: 0;*/
              }
              span {
                display: inline-block;
                /*margin: auto 5px;*/
                /*color: #cccccc;*/
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
      .btns_box {
        margin-bottom: 10px;
        margin-top: -6px;
        .add-goods {

        }
        .el-button.is-round {
          width: 140px;
          height: 40px !important;
        }
      }
      .el-form-item__error {
        font-size: 14px;
      }

    }
  }
</style>
