<template>
  <div class="account-container">
    <p class="v-account-title">
      账号设置
    </p>
    <div class="v-info">
      <p class="v-title">
        基本信息
      </p>
      <!-- <a href="javascript:;" @click="logOff()">退出登录</a> -->
      <div class="v-editor v-avatar-img" style="height: 125px;">
        <ve-upload-tx accept="png|jpg|jpeg|bmp|gif"  :defaultImg="defaultImg" :fileSize="1024" @success="uploadImgSuccess"/>
      </div>
      <com-editor :value.sync="account" type="readOnly"><span class="v-explain">账号：</span></com-editor>
      <com-editor :value.sync="companyName"  type="readOnly"><span class="v-explain">公司名称：</span></com-editor>
      <com-editor :value.sync="accountName" type="input" @saveInfo="save(accountName,'name','company')" clickType="save" :maxLength="40" @cancel="cancel($event,'accountName')"><span class="v-explain">账户名称：</span></com-editor>
      <com-editor :value.sync="state" type="input" @clickSaveBtn="clickSave(state,'popup','state')" clickType="popup" btnName="查看"><span class="v-explain">认证状态：</span></com-editor>
      <com-editor :value.sync="accountPhone" type="input" @clickSaveBtn="clickSave(accountPhone,'popup','mobliePhone')" clickType="popup"><span class="v-explain">注册手机：</span></com-editor>
      <com-editor :value.sync="selectIndustry" type="select" :selectValue="industry"  @saveInfo="save(selectIndustry,'industry','company')" clickType="save"><span class="v-explain">所属行业：</span></com-editor>
      <com-editor :value.sync="accountPassword" type="input" @clickSaveBtn="clickSave(accountPassword,'popup','password')" clickType="popup"><span class="v-explain">登录密码：</span></com-editor>
      <com-editor :value.sync="companyWebsite" type="input" @saveInfo="save(companyWebsite,'website','company')" clickType="save" :max-length="40"  @cancel="cancel($event,'companyWebsite')"><span class="v-explain">公司网址：</span></com-editor>
    </div>
    <div class="v-info">
      <p class="v-title">
        指定联系人
      </p>
      <com-editor :value.sync="userName" type="input" @saveInfo="save(userName,'name','user')" clickType="save" :max-length="20"  @cancel="cancel($event,'userName')"><span class="v-explain">姓名：</span></com-editor>
      <com-editor :value.sync="userPost" type="input" @saveInfo="save(userPost,'position','user')" clickType="save" :max-length="20" @cancel="cancel($event,'userPost')"><span class="v-explain">职务：</span></com-editor>
      <com-editor :value.sync="userPhone" type="input" @saveInfo="save(userPhone,'mobile','user')" clickType="save" :max-length="11" @cancel="cancel($event,'userPhone')"><span class="v-explain">手机：</span></com-editor>
      <com-editor :value.sync="officeNo" type="input" @saveInfo="save(officeNo,'tel','user')" clickType="save" :max-length="12"  @cancel="cancel($event,'officeNo')"><span class="v-explain">办公电话：</span></com-editor>
      <com-editor :value.sync="userEmail" type="input" @saveInfo="save(userEmail,'email','user')" clickType="save" @cancel="cancel($event,'userEmail')"><span class="v-explain">邮箱：</span></com-editor>
      <com-editor :value.sync="userWechat" type="input" @saveInfo="save(userWechat,'wechat','user')" clickType="save" :max-length="40" @cancel="cancel($event,'userWechat')"><span class="v-explain">微信：</span></com-editor>
      <com-editor :value.sync="userQQ" type="input" @saveInfo="save(userQQ,'qq','user')" clickType="save" :max-length="20" @cancel="cancel($event,'userQQ')"><span class="v-explain">QQ：</span></com-editor>
      <com-editor :value.sync="userRemarks" type="input" @saveInfo="save(userRemarks,'remark','user')" clickType="save" :max-length="60" @cancel="cancel($event,'userRemarks')"><span class="v-explain">备注：</span></com-editor>
    </div>
    <message-box v-show="messageBoxShow" @handleClick="messageBoxClick" width="450px" class="message-box" :confirmText="confirmText" type='prompt' :header='messageBoxTitle' :class="[messageBoxType === 'seeState' ? 'v-state' : '']">
      <div v-if="messageBoxType === 'changeMobile' && (step === 'initialPhone' ||  step === 'newPhone')">
        <p class="v-explain" :style="{color:fontColor}">
          <i class="iconfont icon-duihao" v-if="step === 'newPhone'"></i> {{messageBoxExplain}}
        </p>
        <com-input v-if="isOldphone" :value.sync="phone" :placeholder="'输入原有注册手机号'" class="v-input" type="input" :max-length="11"></com-input>
        <com-input v-if="!isOldphone" :value.sync="newPhone" :placeholder="'输入新手机号'" class="v-input" type="input" :max-length="11"></com-input>
        <div id="captcha"></div>
        <com-input :value.sync="phoneCode" placeholder="输入验证码" class="v-input phone-code" type="input" :max-length="6"></com-input>
        <a href="javascript:;" class="phone-code-btn" :class="{prohibit:isProhibit}" @click="getCode()">获取动态码<span v-show="isSend" class="fr">(<em>{{second}}</em>s)</span></a>
      </div>
      <div v-if="messageBoxType === 'changeMobile' && step === 'phoneSuccess'">
        <img src="../../assets/image/success@2x.png" alt="成功" class="v-success-img">
        <p class="v-success-explain">
          修改成功
        </p>
        <p class="v-success">
          您的注册手机更换为：{{newPhone}}
        </p>
      </div>
      <div v-else-if="messageBoxType === 'changePassword'">
        <com-input :value.sync="oldPassword" placeholder="请输入旧密码" class="v-input" type="password" :max-length="30"></com-input>
        <com-input :value.sync="newPassword" placeholder="请输入新密码" class="v-input" type="password" :max-length="30"></com-input>
        <p class="v-passordExplain">
          支持6~30位的大小写英文和数字
        </p>
        <com-input :value.sync="reNewPassword" placeholder="请再次输入新密码" class="v-input" type="password" :max-length="30"></com-input>
        <p class="v-passordExplain">
          支持6~30位的大小写英文和数字
        </p>
      </div>
      <div v-else-if="messageBoxType === 'seeState'">
        <p class="v-state-info">
          <span class="v-label">公司名称：</span><span class="v-information">{{companyName}}</span>
        </p>
        <p class="v-state-info">
          <span class="v-label">营业执照编号：</span><span class="v-information">{{licenseCode}}</span>
        </p>
        <p class="v-state-info">
          <span class="v-label">营业执照照片：</span>
          <img :src="licensePic" alt="成功" class="v-state-img">
        </p>
      </div>
    </message-box>
  </div>
</template>
<script>
  import Editor from './info-editor'
  import account from 'src/api/account-manage'
  import loginManage from 'src/api/login-manage'
  import identifyingcodeManage from 'src/api/identifyingcode-manage'
  import VeUploadTx from 'src/components/ve-upload-tx'
  import { mapMutations, mapState } from 'vuex'
  import * as types from 'src/store/mutation-types'
  export default {
    data () {
      return {
        account: '',
        accountName: '',
        selectIndustry: '',
        accountPhone: '',
        accountPassword: '',
        companyName: '',
        state: '',
        industry: [{
          value: '黄金糕',
          label: '黄金糕'
        }, {
          value: '双皮奶',
          label: '双皮奶'
        }, {
          value: '蚵仔煎',
          label: '蚵仔煎'
        }, {
          value: '龙须面',
          label: '龙须面'
        }, {
          value: '北京烤鸭',
          label: '北京烤鸭'
        }],
        companyWebsite: '',
        userName: '',
        userPost: '',
        userPhone: '',
        officeNo: '',
        userEmail: '',
        userWechat: '',
        userQQ: '',
        userRemarks: '',
        confirmText: '',
        messageBoxShow: false, // 是否显示弹窗
        messageBoxTitle: '更换手机', // 弹窗标题
        messageBoxExplain: '',
        messageBoxType: 'changeMobile', // 弹窗类型 更换手机（changeMobile）、修改密码（changePassword）、查看认证信息（seeState）
        step: 'initialPhone', // 更改手机步骤验证原有手机（initialPhone）、验证新手机（newPhone）、更换成功（phoneSuccess）
        key: '',
        isProhibit: true,
        isSend: false,
        second: 60,
        timerr: '',
        phoneKey: '',
        isImg: false,
        cap: null,
        phone: '',
        isOldphone: true,
        newPhone: '',
        token: '',
        codeToken: '',
        phoneStatus: false,
        phoneCode: '', // 原有手机验证码
        oldPassword: '',
        newPassword: '',
        reNewPassword: '',
        licenseCode: '', // 营业执照编号
        licensePic: '', // 营业执照照片
        avatar: '', // 账户头像
        fontColor: '#555'

      }
    },
    mounted () {
      this.getAccount()
      account.getUserInfo({}).then((res) => {
        if (res.code !== 200) {
          console.log(res.msg)
        } else {
          let resData = res.data
          this.userName = resData.name ? resData.name : '无'
          this.userPost = resData.position ? resData.position : '无'
          this.userPhone = resData.mobile ? resData.mobile : '无'
          this.officeNo = resData.tel ? resData.tel : '无'
          this.userEmail = resData.email ? resData.email : '无'
          this.userWechat = resData.wechat ? resData.wechat : '无'
          this.userQQ = resData.qq ? resData.qq : '无'
          this.userRemarks = resData.remark ? resData.remark : '无'
        }
      })
      identifyingcodeManage.getCodeId({}).then((res) => {
        if (res.code !== 200) {
          console.log(res.msg)
        } else {
          this.key = res.data
        }
      })
    },
    computed: {
      ...mapState('login', {
        isLogin: state => state.isLogin
      }),
      defaultImg () {
        return this.avatar ? this.$imgHost + '/' + this.avatar : ''
      },
      licensePic () {
        return this.licensePic ? this.$imgHost + '/' + this.licensePic : ''
      }
    },
    components: {
      'com-editor': Editor,
      've-upload-tx': VeUploadTx
    },
    created () {
    },
    watch: {
      phone: function () {
        this.checkPhone(this.phone)
      },
      newPhone: function () {
        this.checkPhone(this.newPhone)
      },
      phoneStatus: function (val) {
        this.isGetCodePermission()
      },
      isImg: function (val) {
        this.isGetCodePermission()
      }
    },
    methods: {
      ...mapMutations('login', {
        setIsLogin: types.UPDATE_IS_LOGIN
      }),
      logOff () {
        loginManage.logOff({}).then((res) => {
          if (res.code !== 200) {
            console.log(res.msg)
          } else {
            sessionStorage.removeItem('isLogin')
            sessionStorage.removeItem('userInfo')
            this.setIsLogin(0)
            console.log('账号退出成功')
          }
        })
      },
      getAccount () {
        account.getAccount({}).then((res) => {
          if (res.code !== 200) {
            console.log(res.msg)
          } else {
            let resData = res.data ? res.data : ''
            this.account = resData.userName ? resData.userName : '无'
            this.accountName = resData.name ? resData.userName : '无'
            this.avatar = resData.avatar ? resData.avatar : '无'
            this.accountPhone = resData.mobile ? resData.mobile : '无'
            this.accountPassword = resData.hasPassword ? '已设置' : '未设置'
            this.companyName = resData.company ? resData.company : '无'
            this.state = resData.verify === 'AWAIT' ? '未认证' : '已认证'
            this.selectIndustry = resData.industry ? resData.industry : '无'
            this.companyWebsite = res.website ? resData.website : '无'
            this.licenseCode = res.licenseCode ? resData.licenseCode : '无'
            this.licensePic = res.licensePic ? resData.licensePic : '无'
            sessionStorage.setItem('userInfo', JSON.stringify(res.data))
          }
        })
      },
      uploadImgSuccess (data) {
        let companyData = {
          avatar: ''
        }
        if (data.host && data.name) {
          companyData = {
            avatar: data.name
          }
        }
        account.setCompanyInfo(companyData).then((res) => {
          if (res.code !== 200) {
            alert(res.msg)
          } else {
            this.getAccount()
            alert('更新成功')
          }
        })
      },
      uploadError (data) {
        console.log('上传失败:', data)
      },
      save (val, type, saveType) {
        // 修改选项后点击保存、
        let valType = type
        let data = {
        }
        data[valType] = val
        if (saveType === 'company') {
          account.setCompanyInfo(data).then((res) => {
            if (res.code !== 200) {
              alert(res.msg)
            } else {
              this.getAccount()
              alert('更新成功')
            }
          })
        } else if (saveType === 'user') {
          account.setUserInfo(data).then((res) => {
            if (res.code !== 200) {
              alert(res.msg)
            } else {
              alert('更新成功')
            }
          })
        }
      },
      cancel: function (val, type) {
        switch (type) {
          case 'accountName' : this.accountName = val
            break
          case 'companyWebsite' : this.companyWebsite = val
            break
          case 'userName' : this.userName = val
            break
          case 'userPost' : this.userPost = val
            break
          case 'userPhone' : this.userPhone = val
            break
          case 'officeNo' : this.officeNo = val
            break
          case 'userEmail' : this.userEmail = val
            break
          case 'userWechat' : this.userWechat = val
            break
          case 'userQQ' : this.userQQ = val
            break
          case 'userRemarks' : this.userRemarks = val
            break
        }
      },
      clickSave (val, type, boxType) {
        console.log(val + '...' + type)
        if (type === 'popup') {
          this.messageBoxShow = true
        }
        switch (boxType) {
          case 'mobliePhone' : this.messageBoxType = 'changeMobile'
            this.fontColor = '#555'
            this.phone = val
            this.messageBoxExplain = '为了保证您的账号安全，更换手机前请先进行安全验证'
            this.isOldphone = true
            // step: 'initialPhone',  更改手机步骤验证原有手机（initialPhone）、验证新手机（newPhone）、更换成功（phoneSuccess）
            this.step = 'initialPhone'
            let _self = this
            window.initNECaptcha({
              captchaId: _self.key,
              element: '#captcha',
              mode: 'float',
              width: 390,
              onReady: function (instance) {
              },
              onVerify: function (err, data) {
                if (data) {
                  _self.phoneKey = data.validate
                  _self.isImg = true
                }
                if (err) {
                  console.log(err)
                }
              },
              onError: function (err) {
                console.log(err)
              }
            }, function onload (instance) {
              _self.cap = instance
            })
            this.confirmText = '提交'
            this.messageBoxTitle = '更换手机'
            clearInterval(this.timerr)
            this.isSend = false
            this.isProhibit = true
            this.second = 60
            this.isImg = false
            this.phoneKey = ''
            break
          case 'password' : this.messageBoxType = 'changePassword'
            this.fontColor = '#555'
            this.oldPassword = ''
            this.newPassword = ''
            this.reNewPassword = ''
            this.confirmText = '提交'
            this.messageBoxTitle = '修改密码'
            break
          case 'state':this.messageBoxType = 'seeState'
            this.fontColor = '#555'
            this.confirmText = '确定'
            this.messageBoxTitle = '认证信息'
            break
        }
      },
      messageBoxClick (e) {
        if (e.action === 'cancel') {
          console.log('取消或者关闭按钮')
          this.messageBoxShow = false
        } else if (e.action === 'confirm') {
          if (this.messageBoxType === 'changeMobile') {
            if (this.step === 'initialPhone') {
              let data = {
                mobile: this.phone,
                code: this.phoneCode,
                type: 'BUSINESS_USER_VERIFY_MOBILE'
              }
              account.verifyMobile(data).then((res) => {
                if (res.code !== 200) {
                  console.log(res.msg)
                } else {
                  this.token = res.data.codeToken
                  this.phone = ''
                  this.fontColor = '#4B5AFE'
                  this.messageBoxExplain = '验证成功，请输入新的手机号'
                  this.phoneCode = ''
                  this.isOldphone = false
                  this.step = 'newPhone'
                  clearInterval(this.timerr)
                  this.isSend = false
                  this.isProhibit = true
                  this.second = 60
                  this.isImg = false
                  this.phoneKey = ''
                  this.cap.refresh()
                }
              })
            } else if (this.step === 'newPhone') {
              let data = {
                mobile: this.newPhone,
                codeToken: this.token,
                code: this.phoneCode
              }
              account.updateMobile(data).then((res) => {
                if (res.code !== 200) {
                  console.log(res.msg)
                } else {
                  this.phone = ''
                  this.step = 'phoneSuccess'
                  this.confirmText = '完成'
                }
              })
            } else if (this.step === 'phoneSuccess') {
              this.messageBoxExplain = '修改成功'
              this.step = 'initialPhone'
              this.phoneCode = ''
              this.messageBoxShow = false
            }
          } else if (this.messageBoxType === 'changePassword') {
            if (this.newPassword !== this.reNewPassword) {
              alert('新密码与重新输入密码错误')
              return false
            }
            let data = {
              'mobile': this.accountPhone,
              'newPassword': this.newPassword,
              'oldPassword': this.oldPassword
            }
            account.changePassword(data).then((res) => {
              if (res.code !== 200) {
                alert(res.msg)
              } else {
                alert('success')
                this.oldPassword = ''
                this.newPassword = ''
                this.reNewPassword = ''
              }
            })
            this.messageBoxShow = false
          } else if (this.messageBoxType === 'seeState') {
            this.messageBoxShow = false
          }
        }
      },
      isGetCodePermission () {
        console.log('isImg:' + this.isImg)
        console.log('phoneStatus:' + this.phoneStatus)
        if (this.isImg && this.phoneStatus) {
          this.isProhibit = false
        } else {
          this.isProhibit = true
        }
      },
      checkPhone (param) {
        let reg = /^1[3|4|5|6|7|8|9][0-9]\d{8}$/
        if (reg.test(parseInt(param))) {
          this.phoneStatus = true
        } else {
          this.phoneStatus = false
        }
      },
      getCode () {
        // 获取验证码
        if (this.isProhibit) {
          return false
        }
        let data = {}
        if (this.isOldphone) {
          data = {
            'mobile': this.phone,
            'type': 'BUSINESS_USER_VERIFY_MOBILE',
            captcha: this.phoneKey
          }
        } else {
          data = {
            'mobile': this.newPhone,
            'type': 'BUSINESS_USER_UPDATE_MOBILE',
            captcha: this.phoneKey
          }
        }
        identifyingcodeManage.getCode(data).then((res) => {
          if (res.code !== 200) {
            this.error = res.msg
            this.opacity = 1
            clearInterval(this.timerr)
            this.isSend = false
            this.isProhibit = true
            this.second = 60
            this.isImg = false
            this.phoneKey = ''
            this.cap.refresh()
          } else {
            this.isSend = true
            this.isProhibit = true
            clearInterval(this.timerr)
            this.timerr = setInterval(() => {
              this.second--
              if (this.second <= 0) {
                clearInterval(this.timerr)
                this.isSend = false
                this.isProhibit = true
                this.second = 60
                this.isImg = false
                this.phoneKey = ''
                this.cap.refresh()
              }
            }, 1000)
          }
        })
      }
    }
  }
</script>
<style lang="scss" scoped>
.account-container /deep/ {
  /* 设备宽度大于 1600 */
  @media all and (min-width: 1600px) {
    width: 1366px;
  }
  /* 设备宽度小于 1600px */
  @media all and (max-width: 1600px) {
    width: 1019px;
  }
  margin: 0 auto;
  .v-account-title {
    font-size: 24px;
    color: #222;
  }
  .v-info {
    width: 1020px;
    margin: 35px auto 0;
    border: 1px solid #e2e2e2;
    text-align: center;
    border-radius: 4px;
    background-color: #fff;
    padding-bottom: 40px;
    .v-title {
      font-size: 18px;
      color: #222;
      width: 100%;
      border-bottom: 1px solid #e2e2e2;
      line-height: 60px;
      padding: 0 30px;
      margin-bottom: 50px;
    }
    .ve-upload-tx {
      margin: 0 auto;
    }
    .v-editor {
      display: inline-block;
      width: 375px;
      height: 42px;
      line-height: 42px;
      text-align: left;
      &.v-avatar-img {
        display: block;
        text-align: center;
        margin: 0 auto;
      }
      .v-explain {
        font-size: 14px;
        color: #555;
        display: inline-block;
        width: 70px;
        text-align: left;
      }
      .ve-upload-box {
        width: 100px;
        height: 100px;
      }
      .com-input {
        width: 214px;
        margin-right: 15px;
        input {
          width: 214px;
          height: 40px;
          line-height: 40px;
        }
      }
      .v-info-label {
        font-size: 14px;
        color: #222;
        display: inline-block;
        width: 214px;
        text-align: left;
        margin-right: 15px;
        overflow: hidden;
        vertical-align: middle;
      }
      .test-upload {
        width: 65px;
        height: 65px;
        border: 1px solid #333;
      }
    }
    .v-title {
      text-align: left;
      font-size: 14px;
      color: #333;
    }
  }
  #captcha {
    width: 390px;
    margin-bottom: 30px;
  }
  .message-box {
    &.v-state {
      .ve-message-box__btns {
        display: none;
      }
    }
    .ve-message-box {
      overflow: visible;
    }
    .v-success-img {
      display: block;
      width: 122px;
      margin: 45px auto 15px;
    }
    .v-success-explain {
      font-size: 24px;
      color: #222;
      text-align: center;
      margin-bottom: 8px;
    }
    .v-success {
      font-size: 14px;
      color: #222;
      text-align: center;
      margin-bottom: 20px;
    }
    .com-input {
      &.v-input {
        width: 390px;
        margin-bottom: 30px;
        input {
          width: 390px;
          height: 40px;
          line-height: 40px;
        }
      }
    }
    .phone-code-btn {
      background-color: #ffd021;
      display: block;
      width: 115px;
      height: 34px;
      line-height: 34px;
      text-align: center;
      font-size: 13px;
      color: #fff;
      position: absolute;
      bottom: 22px;
      right: 0;
      border-radius: 2px;
      text-decoration: none;
      position: absolute;
      top: 226px;
      right: 43px;
      &.prohibit {
        background-color: #dedede;
        &:hover {
          background-color: #dedede;
        }
      }
      .fr {
        margin-left: 6px;
        float: none;
      }
    }
    &.ve-message-box__wrapper {
      .ve-message-box .ve-message-box__btns {
        margin-top: -10px;
      }
    }
  }
  .phone-code-btn {
    display: inline-block;
    width: 130px;
    height: 40px;
    line-height: 40px;
    margin-left: 5px;
  }
  .v-explain {
    font-size: 14px;
    width: 410px;
    margin: 0 auto 14px;
    text-align: left;
    color: #555;
  }
  .v-subtitle {
    text-align: left;
    margin: 135px auto 10px;
    padding: 0 23px;
  }
  .v-passordExplain {
    text-align: left;
    margin: -5px auto 10px;
    padding: 0 23px;
  }
  .v-verSuccess {
    display: inline-block;
    width: 14px;
    height: 14px;
    margin-right: 10px;
  }
  .v-state-info {
    font-size: 14px;
    color: #555;
    margin-bottom: 20px;
    .v-label {
      width: 98px;
      display: inline-block;
    }
    .v-information {
      color: #222;
    }
    .v-state-img {
      display: inline-block;
      width: 120px;
      height: 80px;
      border: 1px solid #e2e2e2;
      border-radius: 4px;
    }
  }
}
</style>
