<template>
  <div id="goods-info">
    <header>{{this.$route.params.type === 'create'?'新建':'编辑'}}订单信息
      <com-back></com-back>
    </header>
    <el-form :model="order" ref="order" :rules="rules" label-width="120px" class="demo-ruleForm">
      <el-form-item label="订单id：" prop="id" class="is-required" v-if="order.id">
        <div class="a_unit">
          <el-input v-model.number="order.id" disabled></el-input>
        </div>
      </el-form-item>
      <el-form-item label="用户id：" prop="userId">
        <div class="a_unit">
          <el-input v-model.number="order.userId" :disabled="!!order.id"
                    placeholder="请输入用户id"></el-input>
        </div>
      </el-form-item>
      <el-form-item label="商品id：" prop="goodId">
        <div class="a_unit">
          <el-input v-model.number="order.goodId" :disabled="!!order.id"
                    placeholder="请输入商品id"></el-input>
        </div>
      </el-form-item>
      <el-form-item label="商品数量：" prop="goodId">
        <div class="a_unit">
          <el-input v-model.number="order.number" min="0" max="100"
                    placeholder="请输入商品数量"></el-input>
        </div>
      </el-form-item>
      <el-form-item label="物流单号：" prop="logistics">
        <div class="a_unit">
          <el-input v-model.number="order.logistics"
                    placeholder="请输入物流单号"></el-input>
        </div>
      </el-form-item>
      <el-form-item label="订单状态：" prop="status">
        <el-select v-model="order.status" placeholder="请选择分类">
          <el-option
                  v-for="item in statusOption"
                  :key="item.value"
                  :label="item.name"
                  :value="item.value">
            <span style="float: left">{{ item.name }}</span>
            <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item class="btns_box">
        <el-button class="add-goods primary-button" type="primary" @click="onSubmit('order')" round>保存</el-button>
        <el-button @click="resetForm('order')" round>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import orderServer from 'src/api/orders'
  import EventBus from 'src/utils/eventBus'

  export default {
    name: 'info',
    watch: {
      order: {
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
        this.getOrderDetail()
        this.Breadcrumb = '编辑订单'
      } else {
        this.Breadcrumb = '新建订单'
      }
      this.$nextTick(() => {
        this.initReady = true
      })
    },
    mounted () {
      EventBus.$emit('breads', [{
        title: '销售管理'
      }, {
        title: '商品列表',
        url: '/orderMager/list'
      }, {
        title: this.Breadcrumb,
        url: `/orderMager/edit/${this.$route.params.type}`
      }])
    },
    computed: {
      defaultImg () {
        return this.poster ? `${this.$imgHost}/${this.poster}` : ''
      }
    },
    data () {
      return {
        timerVail: null,
        timer: null,
        tipsShow: true,
        Breadcrumb: '',
        isShowMsgB: false,
        errTitle: '',
        imgEmptyMsg: '',
        order: {
          id: this.$route.params.id,
          userId: '',
          goodId: null,
          number: '',
          logistics: '',
          status: null
        },
        statusOption: [
          {value: 0, name: '未付款'},
          {value: 1, name: '未发货'},
          {value: 2, name: '未收货'},
          {value: 4, name: '已完成'},
          {value: 3, name: '已关闭订单'}
        ],
        rules: {
          userId: [
            { required: true, message: '请输入用户id', trigger: 'blur' }
          ],
          goodId: [
            { required: true, message: '请输入商品', trigger: 'blur' }
          ],
          number: [
            { required: true, message: '请输入商品数量', trigger: 'blur' }
          ],
          status: [
            { required: true, message: '请输入订单状态', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      getOrderDetail () {
        this.$get(orderServer.GET_ORDER_ID, {id: this.order.id}).then(res => {
          this.order = {
            ...res.data
          }
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
                _url = orderServer.GET_ORDER_ADD
              } else {
                _url = orderServer.GET_ORDER_UPDATE
              }
              this.$get(_url, {...this.order})
                .then(res => {
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
        this.$router.go(-1)
      },
      uploadImgSuccess (data) {
        data.errMsg = ''
        this.goodsData.imgUrl[data.nowIndex].name = data.name
      },
      uploadError (data, item, index) {
        this.imgEmptyMsg = ''
        item.errMsg = data.msg
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
        .el-select {
          width: 94%;
        }
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
          width: 94%;
          .el-input {
            width: 100%;
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
