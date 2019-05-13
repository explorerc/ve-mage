<template>
  <div id="goods-info">
    <header>编辑粉丝信息
      <com-back></com-back>
    </header>
    <el-form :model="userData" ref="userData" :rules="rules" label-width="120px" class="demo-ruleForm">
      <el-form-item label="用户ID：" prop="id">
        <el-input v-model="userData.id" disabled="disabled"></el-input>
      </el-form-item>
      <el-form-item label="粉丝名称：" prop="name">
        <div class="a_unit">
          <el-input v-model.number="userData.name" placeholder="请输入粉丝方式"></el-input>
        </div>
      </el-form-item>
      <el-form-item label="openID：" prop="openId">
        <el-input v-model="userData.openId" disabled="disabled"></el-input>
      </el-form-item>
      <el-form-item label="粉丝昵称：" prop="nickname" class="">
        <div class="a_unit">
          <el-input v-model.number="userData.nickname"  placeholder="请输入粉丝昵称"></el-input>
        </div>
      </el-form-item>
      <el-form-item label="地址：" prop="address">
        <div class="a_unit">
          <el-input v-model.number="userData.address" placeholder="请输入地址"></el-input>
        </div>
      </el-form-item>
      <el-form-item label="电话：" prop="tel">
        <div class="a_unit">
          <el-input v-model.number="userData.tel" placeholder="请输入联系方式"></el-input>
        </div>
      </el-form-item>
      <el-form-item label="postCode：" prop="postCode" disabled>
        <div class="a_unit">
          <el-input v-model.number="userData.postCode" disabled="true"></el-input>
        </div>
      </el-form-item>
      <el-form-item label="生日：" prop="birth" disabled>
        <div class="a_unit">
          <el-date-picker
            v-model="userData.birth"
            type="date"
            placeholder="选择日期">
          </el-date-picker>
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
  import userServer from 'src/api/user-service'
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
      this.getUserDetail()
      this.Breadcrumb = '编辑粉丝'
      this.$nextTick(() => {
        this.initReady = true
      })
    },
    mounted () {
      EventBus.$emit('breads', [{
        title: '用户管理'
      }, {
        title: '粉丝列表',
        url: '/goodMager/list'
      }, {
        title: '编辑粉丝'
      }])
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
        userData: {
          id: this.$route.params.id,
          name: '',
          tel: '',
          address: '',
          postId: '',
          postCode: '',
          nickname: null,
          birth: null
        },
        rules: {
          name: [
            { required: true, message: '请输粉丝名称', trigger: 'blur', obj: 'userData' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur', obj: 'userData' }
          ],
          tel: [
            { max: 11, min: 6, message: '请输入正确的联系方式', trigger: 'blur', obj: 'userData' }
          ]
        }
      }
    },
    methods: {
      getUserDetail () {
        let data = {
          id: this.userData.id
        }
        this.$get(userServer.GET_GOOD_BYID, data).then(res => {
          if (res.code === 200) {
            this.userData = {...res.data}
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
              let _url = userServer.GET_USER_UPDATE
              this.$post(_url, this.userData)
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
        .el-form-item {
          .el-form-item__content {
            width: 460px;
          }
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
          width: 100%;
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
