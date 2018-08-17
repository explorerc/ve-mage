<template>
  <div>
    <div class="v-info">
      <p class="v-title">
        基本信息
      </p>
      <com-editor :value.sync="account" type="readOnly"><span class="v-explain">账号</span></com-editor>
      <com-editor :value.sync="accountName" type="input" @saveInfo="save(accountName)" clickType="save" :maxLength="40"><span class="v-explain">账户名</span></com-editor>
      <div class="v-editor">
        <span class="v-explain">账户头像</span>
        <com-upload
          accept="png|jpg|jpeg|bmp|gif"
          actionUrl="/api/edu/database/doc-upload"
          inputName="resfile"
          :fileSize="5000"
          @selected="uploadSelected"
        >
        <div class="test-upload">+++</div>
        </com-upload>
      </div>
      <com-editor :value.sync="accountPhone" type="input" @clickSaveBtn="clickSave(accountPhone,'popup','mobliePhone')" clickType="popup"><span class="v-explain">注册手机</span></com-editor>
      <com-editor :value.sync="accountPassword" type="input" @clickSaveBtn="clickSave(accountPassword,'popup','password')" clickType="popup"><span class="v-explain">登录密码</span></com-editor>
      <com-editor :value.sync="companyName"  type="readOnly"><span class="v-explain">公司名称</span></com-editor>
      <com-editor :value.sync="state" type="input" @clickSaveBtn="clickSave(state,'popup','state')" clickType="popup" btnName="查看"><span class="v-explain">认证状态</span></com-editor>
      <com-editor :value.sync="selectIndustry" type="select" :selectValue="industry"  @saveInfo="save(selectIndustry)" clickType="save"><span class="v-explain">所属行业</span></com-editor>
      <com-editor :value.sync="companyWebsite" type="input" @saveInfo="save(companyWebsite)" clickType="save" :max-length="40"><span class="v-explain">公司网址</span></com-editor>
    </div>
    <div class="v-info">
      <p class="v-title">
        指定联系人
      </p>
      <com-editor :value.sync="userName" type="input" @saveInfo="save(userName)" clickType="save" :max-length="20"><span class="v-explain">姓名</span></com-editor>
      <com-editor :value.sync="userPost" type="input" @saveInfo="save" clickType="save" :max-length="20"><span class="v-explain">职务</span></com-editor>
      <com-editor :value.sync="userPhone" type="input" @clickSaveBtn="clickSave(userPhone,'popup','mobliePhone')" clickType="popup" :max-length="11"><span class="v-explain">手机</span></com-editor>
      <com-editor :value.sync="officeNo" type="input" @saveInfo="save(officeNo)" clickType="save" :max-length="12"><span class="v-explain">办公电话</span></com-editor>
      <com-editor :value.sync="userEmail" type="input" @saveInfo="save(userEmail)" clickType="save"><span class="v-explain">邮箱</span></com-editor>
      <com-editor :value.sync="userWechat" type="input" @clickSaveBtn="saveInfo(userWechat)" clickType="save" :max-length="40"><span class="v-explain">微信</span></com-editor>
      <com-editor :value.sync="userQQ" type="input" @clickSaveBtn="saveInfo(userQQ)" clickType="save" :max-length="20"><span class="v-explain">QQ</span></com-editor>
      <com-editor :value.sync="userRemarks" type="input" @saveInfo="save(userRemarks)" clickType="save" :max-length="60"><span class="v-explain">备注</span></com-editor>
    </div>
    <message-box v-show="messageBoxShow" @handleClick="messageBoxClick" width="480px" class="message-box" :confirmText="confirmText">
      <div slot="header">{{messageBoxTitle}}</div>
      <template v-if="messageBoxType === 'changeMobile' && (step === 'initialPhone' ||  step === 'newPhone')">
        <p class="v-explain">
          {{messageBoxExplain}}
        </p>
        <p class="v-subtitle">
          安全验证
        </p>
        <com-input :value.sync="phone" :placeholder="phonePlaceholder" class="v-input" type="input" :max-length="11"></com-input>
        <div id="captcha"></div>
        <com-input :value.sync="phoneCode" placeholder="输入验证码" class="v-input phone-code" type="input" :max-length="6"></com-input>
        <a href="javascript:;" class="phone-code-btn" :class="{prohibit:isProhibit}" @click="getCode()">获取动态码<span v-show="isSend" class="fr">(<em>{{second}}</em>s)</span></a>
      </template>
      <template v-if="messageBoxType === 'changeMobile' && step === 'phoneSuccess'">
        <p class="v-explain">
          修改成功
        </p>
        <p class="v-success">
          您的注册手机更换为
        </p>
        <p class="v-mobile">
          13810878976
        </p>
      </template>
      <template v-else-if="messageBoxType === 'changePassword'">
        <com-input :value.sync="oldPassword" placeholder="请输入旧密码" class="v-input" type="input" :max-length="30"></com-input>
        <com-input :value.sync="newPassword" placeholder="请输入新密码" class="v-input" type="input" :max-length="30"></com-input>
        <p class="v-passordExplain">
          支持6~30位的大小写英文和数字
        </p>
        <com-input :value.sync="reNewPassword" placeholder="请再次输入新密码" class="v-input" type="input" :max-length="30"></com-input>
        <p class="v-passordExplain">
          支持6~30位的大小写英文和数字
        </p>
      </template>
      <template v-else-if="messageBoxType === 'seeState'">
        <p class="v-state-info">
          <span class="v-label">公司名称</span><span class="v-information">微吼时代科技有限公司</span>
        </p>
        <p class="v-state-info">
          <span class="v-label">营业执照编号</span><span class="v-information">XXXXXXXXXX</span>
        </p>
        <p class="v-state-info">
          <span class="v-label">营业执照编号</span>
        <img src="" alt="123">
        </p>
      </template>
    </message-box>
  </div>
</template>
<script>
  import Editor from './info-editor'
  export default {
    data () {
      return {
        account: '',
        accountName: '',
        selectIndustry: '',
        accountPhone: '1521111111',
        accountPassword: '666',
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
        phonePlaceholder: '',
        messageBoxType: 'changeMobile', // 弹窗类型 更换手机（changeMobile）、修改密码（changePassword）、查看认证信息（seeState）
        step: 'initialPhone', // 更改手机步骤验证原有手机（initialPhone）、验证新手机（newPhone）、更换成功（phoneSuccess）
        key: 'b7982ef659d64141b7120a6af27e19a0',
        isProhibit: true,
        isSend: false,
        second: 60,
        timerr: '',
        phoneKey: '',
        isImg: false,
        cap: null,
        phone: '',
        phoneStatus: false,
        phoneCode: '', // 原有手机验证码
        oldPassword: '',
        newPassword: '',
        reNewPassword: ''
      }
    },
    components: {
      'com-editor': Editor
    },
    created () {
    },
    watch: {
      value: function () {
      },
      phone: function () {
        this.checkPhone(this.phone)
      },
      phoneStatus: function (val) {
        this.isGetCodePermission()
      },
      isImg: function (val) {
        this.isGetCodePermission()
      }
    },
    methods: {
      uploadSelected () {
        console.log('图片上传完成')
      },
      save (val, saveType) {
        // 修改选项后点击保存、
        console.log(this.$store)
        if (saveType === 'save') {
          console.log('save' + saveType)
        } else if (saveType === 'popup') {
          console.log('save' + saveType)
        } else if (saveType === 'link') {
          console.log('save' + saveType)
        }
      },
      seeState () {

      },
      modifyPassword () {
        console.log('修改密码')
      },
      modifyAccountPhone () {
        console.log('修改注册手机')
      },
      modifyUserPhone () {
        console.log('修改用户手机')
      },
      clickSave (val, type, boxType) {
        console.log(val + '...' + type)
        if (type === 'popup') {
          this.messageBoxShow = true
        }
        switch (boxType) {
          case 'mobliePhone' : this.messageBoxType = 'changeMobile'
            this.phone = val
            this.messageBoxExplain = '为了保证您的账号安全，更换手机前请先进行安全验证'
            this.phonePlaceholder = '输入原有注册手机号'
            // step: 'initialPhone',  更改手机步骤验证原有手机（initialPhone）、验证新手机（newPhone）、更换成功（phoneSuccess）
            this.step = 'initialPhone'
            let _self = this
            window.initNECaptcha({
              captchaId: _self.key,
              element: '#captcha',
              mode: 'float',
              width: 435,
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
              onError: function () {
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
            this.confirmText = '提交'
            this.messageBoxTitle = '修改密码'
            break
          case 'state':this.messageBoxType = 'seeState'
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
              this.phone = ''
              this.messageBoxExplain = '验证成功，请输入新的手机号'
              this.phonePlaceholder = '输入新手机号'
              this.step = 'newPhone'
              clearInterval(this.timerr)
              this.isSend = false
              this.isProhibit = true
              this.second = 60
              this.isImg = false
              this.phoneKey = ''
              this.cap.refresh()
            } else if (this.step === 'newPhone') {
              alert(2)
              this.phone = ''
              this.step = 'phoneSuccess'
            } else if (this.step === 'phoneSuccess') {
              alert(3)
              this.messageBoxExplain = '为了保证您的账号安全，更换手机前请先进行安全验证'
              this.phonePlaceholder = '输入原有注册手机号'
              this.step = 'initialPhone'
            }
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
    }
  }
</script>
<style lang="scss">
.v-info {
  width: 1170px;
  margin: 35px auto 0;
  border: 1px solid #333;
  padding: 10px;
  .v-editor {
    display: block;
    margin-bottom: 20px;
    height: 42px;
    line-height: 42px;
    .v-explain {
      display: inline-block;
      width: 65px;
    }
    .v-indo-label {
      display: inline-block;
      width: 155px;
      text-align: left;
      margin-right: 45px;
      overflow: hidden;
      vertical-align: middle;
    }
  }
  .v-title {
    text-align: left;
    font-size: 14px;
    color: #333;
  }
}
#captcha {
  margin-bottom: 10px;
}
.com-input {
  &.v-input {
    width: 435px;
    margin-bottom: 10px;
    input {
      width: 435px;
      height: 40px;
      line-height: 40px;
    }
    &.phone-code {
      width: 300px;
      input {
        width: 300px;
      }
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
  text-align: center;
  color: #333;
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
</style>
