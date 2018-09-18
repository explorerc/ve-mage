<template>
  <div class="account-container">
    <p class="v-account-title">
      账号设置
    </p>
    <div class="v-info">
      <p class="v-title">
        基本信息
      </p>
      <div class="v-editor v-avatar-img" style="height: 125px;">
        <ve-upload-tx accept="png|jpg|jpeg|bmp|gif"  :defaultImg="defaultImg" :fileSize="2048" @success="uploadImgSuccess" @error="uploadError"/>
      </div>
      <com-editor :value.sync="account" type="readOnly"><span class="v-explain">账号：</span></com-editor>
      <com-editor :value.sync="companyName"  type="readOnly"><span class="v-explain">公司名称：</span></com-editor>
      <com-editor :value.sync="accountName" type="input" @saveInfo="save($event,accountName,'name','company')" clickType="save" :maxLength="40" @cancel="cancel($event,'accountName')" :isEdit="changeState.accountName" @clickSaveBtn="clickChangeState('accountName')"><span class="v-explain">账户名称：</span></com-editor>
      <com-editor :value.sync="state" type="input" @clickSaveBtn="clickSave(state,'popup','state')" clickType="popup" btnName="查看"><span class="v-explain">认证状态：</span></com-editor>
      <com-editor :value.sync="accountPhone" type="input" @clickSaveBtn="clickSave(accountPhone,'popup','mobliePhone')" clickType="popup"><span class="v-explain">注册手机：</span></com-editor>
      <con-select :value.sync="displayValue" :displayValue="displayValue" type="select" :selectValue="industry" :selectParentId="selectParentId" :selectChildId="selectChildId" clickType="save" :isEdit="changeState.industry" @cancelSelectInfo="cancelSelectInfo($event,'industry')" @clickIndustryModifyBtn="clickIndustryModifyBtn('industry')"  @saveSelectInfo="saveSelectInfo($event,displayValue,'industry','company')"><span class="v-explain">所属行业：</span></con-select>
      <com-editor :value.sync="accountPassword" type="input" @clickSaveBtn="clickSave(accountPassword,'popup','password')" clickType="popup"><span class="v-explain">登录密码：</span></com-editor>
      <com-editor :value.sync="companyWebsite" type="input" @saveInfo="save($event,companyWebsite,'website','company')" clickType="save" :max-length="40"  @cancel="cancel($event,'website')" :errorTips="errorTips.website" :isEdit="changeState.website" @clickSaveBtn="clickChangeState('website')"><span class="v-explain">公司网址：</span></com-editor>
    </div>
    <div class="v-info">
      <p class="v-title">
        指定联系人
      </p>
      <com-editor :value.sync="userName" type="input" @saveInfo="save($event,userName,'name','user')" clickType="save" :max-length="20"  @cancel="cancel($event,'name')" :isEdit="changeState.name" @clickSaveBtn="clickChangeState('name')"><span class="v-explain">姓名：</span></com-editor>
      <com-editor :value.sync="userPost" type="input" @saveInfo="save($event,userPost,'position','user')" clickType="save" :max-length="20" @cancel="cancel($event,'position')" :isEdit="changeState.position" @clickSaveBtn="clickChangeState('position')"><span class="v-explain">职务：</span></com-editor>
      <com-editor :value.sync="userPhone" type="input" @saveInfo="save($event,userPhone,'mobile','user')" clickType="save" :max-length="11" @cancel="cancel($event,'mobile')" :errorTips="errorTips.mobile" :isEdit="changeState.mobile" @clickSaveBtn="clickChangeState('mobile')"><span class="v-explain">手机：</span></com-editor>
      <com-editor :value.sync="officeNo" type="input" @saveInfo="save($event,officeNo,'tel','user')" clickType="save" :max-length="12"  @cancel="cancel($event,'tel')" :errorTips="errorTips.tel" :isEdit="changeState.tel" @clickSaveBtn="clickChangeState('tel')"><span class="v-explain">办公电话：</span></com-editor>
      <com-editor :value.sync="userEmail" type="input" @saveInfo="save($event,userEmail,'email','user')" clickType="save" @cancel="cancel($event,'email')" :errorTips="errorTips.email" :isEdit="changeState.email" @clickSaveBtn="clickChangeState('email')"><span class="v-explain">邮箱：</span></com-editor>
      <com-editor :value.sync="userWechat" type="input" @saveInfo="save($event,userWechat,'wechat','user')" clickType="save" :max-length="40" @cancel="cancel($event,'wechat')" :isEdit="changeState.wechat" @clickSaveBtn="clickChangeState('wechat')"><span class="v-explain">微信：</span></com-editor>
      <com-editor :value.sync="userQQ" type="input" @saveInfo="save($event,userQQ,'qq','user')" clickType="save" :max-length="20" @cancel="cancel($event,'qq')" :errorTips="errorTips.qq" :isEdit="changeState.qq" @clickSaveBtn="clickChangeState('qq')"><span class="v-explain">QQ：</span></com-editor>
      <com-editor :value.sync="userRemarks" type="input" @saveInfo="save($event,userRemarks,'remark','user')" clickType="save" :max-length="40" @cancel="cancel($event,'remark')" :isEdit="changeState.remark" @clickSaveBtn="clickChangeState('remark')"><span class="v-explain">备注：</span></com-editor>
    </div>
    <message-box v-show="messageBoxShow" @handleClick="messageBoxClick" width="450px" class="message-box" :confirmText="confirmText" type='prompt' :header='messageBoxTitle' :class="[messageBoxType === 'seeState' ? 'v-state' : '']">
      <div v-if="messageBoxType === 'changeMobile' && (step === 'initialPhone' ||  step === 'newPhone')">
        <p class="v-explain" :style="{color:fontColor}">
          <i class="iconfont icon-duihao" v-if="step === 'newPhone'"></i> {{messageBoxExplain}}
        </p>
        <com-input v-if="isOldphone" :value.sync="phone" :placeholder="'输入原有注册手机号'" class="v-input" type="input" :max-length="11" :errorTips="errorTips.oldPhone" @focus="phoneFocus('oldphone')"></com-input>
        <com-input v-if="!isOldphone" :value.sync="saveNewPhone" :placeholder="'输入新手机号'" class="v-input" type="input" :max-length="11" :errorTips="errorTips.newPhone" @focus="phoneFocus('newphone')"></com-input>
        <div id="captcha"  :class="{isCaptchaShow: (messageBoxType === 'changeMobile' && (step === 'initialPhone' ||  step === 'newPhone'))}"></div>
        <com-input :value.sync="phoneCode" placeholder="输入验证码" class="v-input phone-code" type="input" :max-length="6" @focus="codeFocus"></com-input>
        <p class="v-error" v-if="phoneCodeError">{{phoneCodeTip}}</p>
        <a href="javascript:;" class="phone-code-btn" :class="{prohibit:isProhibit}" @click="getCode()">获取验证码<span v-show="isSend" class="fr">(<em>{{second}}</em>s)</span></a>
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
        <com-input :value.sync="oldPassword" placeholder="请输入旧密码" class="v-input" type="password" :max-length="30" :errorTips="errorTips.oldPassword" @focus="passwordFocus('oldPassword')"></com-input>
        <div class="v-psd">
          <com-input :value.sync="newPassword" placeholder="请输入新密码" class="v-input" type="password" :max-length="30"  @focus="passwordFocus('newPassword')" @change="passwordChange()" @blur="passwordBlur()" :errorTips="errorTips.newPassword"></com-input>
          <div class="v-verification" v-if="isShow">
            <ul>
              <p>密码至少包含：</p>
              <li>
                <i class="iconfont icon-duigou1" :class="{isActive: isContainEn}"></i> 1个英文字母
              </li>
              <li>
                <i class="iconfont icon-duigou1" :class="{isActive: isContainNum}"></i> 1个数字
              </li>
              <li>
                <i class="iconfont icon-duigou1" :class="{isActive: isContainCount}"></i> 6～30个字符
              </li>
            </ul>
          </div>
        </div>
        <com-input :value.sync="reNewPassword" placeholder="请再次输入新密码" class="v-input" type="password" :max-length="30" :errorTips="errorTips.rePassword" @focus="passwordFocus('reNewPassword')"></com-input>
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
          <img :src="licensePicUrl" alt="成功" class="v-state-img">
        </p>
      </div>
    </message-box>
  </div>
</template>
<script>
  import Editor from './info-editor'
  import SelectEditor from './info-select'
  import account from 'src/api/account-manage'
  import identifyingcodeManage from 'src/api/identifyingcode-manage'
  import VeUploadTx from 'src/components/ve-upload-tx'
  import { mapMutations, mapState } from 'vuex'
  import * as types from 'src/store/mutation-types'
  import EventBus from 'src/utils/eventBus'
  export default {
    data () {
      return {
        account: '',
        accountName: '',
        displayValue: '',
        industryId: 0,
        selectParentId: 0,
        selectChildId: 0,
        industryFirst: '',
        industrySecond: '',
        accountPhone: '',
        accountPassword: '',
        companyName: '',
        state: '',
        industry: [],
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
        saveNewPhone: '',
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
        fontColor: '#555',
        errorTips: {
          oldPassword: '',
          newPassword: '',
          rePassword: '',
          website: '',
          mobile: '',
          tel: '',
          email: '',
          qq: '',
          newPhone: '',
          oldPhone: ''
        },
        changeState: {
          accountName: false,
          industry: false,
          website: false,
          name: false,
          position: false,
          mobile: false,
          tel: false,
          email: false,
          wechat: false,
          qq: false,
          remark: false
        },
        isShow: false,
        isContainEn: 0,
        isContainNum: 0,
        isContainCount: 0,
        phoneCodeError: false, // 验证码错误是否显示
        phoneCodeTip: '' // 验证码错误提示
      }
    },
    mounted () {
      // sessionStorage.clear()
      this.getAccount()
      let contactInfo = JSON.parse(sessionStorage.getItem('contactInfo'))
      if (contactInfo) {
        this.userName = contactInfo.name ? contactInfo.name : '无'
        this.userPost = contactInfo.position ? contactInfo.position : '无'
        this.userPhone = contactInfo.mobile ? contactInfo.mobile : '无'
        this.officeNo = contactInfo.tel ? contactInfo.tel : '无'
        this.userEmail = contactInfo.email ? contactInfo.email : '无'
        this.userWechat = contactInfo.wechat ? contactInfo.wechat : '无'
        this.userQQ = contactInfo.qq ? contactInfo.qq : '无'
        this.userRemarks = contactInfo.remark ? contactInfo.remark : '无'
      } else {
        account.getUserInfo({}).then((res) => {
          if (res.code !== 200) {
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
            sessionStorage.setItem('contactInfo', JSON.stringify(res.data))
          }
        })
      }
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
      licensePicUrl () {
        return this.licensePic === '无' ? this.$imgHost + '/' + this.licensePic : ''
      }
    },
    components: {
      'com-editor': Editor,
      'con-select': SelectEditor,
      've-upload-tx': VeUploadTx
    },
    created () {
    },
    destroyed () {
      clearInterval(this.timerr)
    },
    watch: {
      phone: function () {
        this.checkPhone(this.phone)
      },
      newPhone: function () {
        this.checkPhone(this.newPhone)
      },
      saveNewPhone: function () {
        this.checkPhone(this.saveNewPhone)
      },
      phoneStatus: function (val) {
        this.isGetCodePermission(true)
      },
      isImg: function (val) {
        this.isGetCodePermission()
      }
    },
    methods: {
      ...mapMutations('login', {
        setIsLogin: types.UPDATE_IS_LOGIN
      }),
      getAccount () {
        let accountInfo = JSON.parse(sessionStorage.getItem('accountInfo'))
        if (accountInfo && accountInfo.userName) {
          this.account = accountInfo.userName ? accountInfo.userName : '无'
          this.accountName = accountInfo.name ? accountInfo.name : '无'
          this.avatar = accountInfo.avatar ? accountInfo.avatar : '无'
          this.accountPhone = accountInfo.mobile ? accountInfo.mobile : '无'
          this.accountPassword = accountInfo.hasPassword ? '已设置' : '未设置'
          this.companyName = accountInfo.company ? accountInfo.company : '无'
          this.state = accountInfo.verify === 'AWAIT' ? '未认证' : '已认证'
          this.displayValue = accountInfo.industryFirst ? accountInfo.industryFirst + '/' + accountInfo.industrySecond : '无'
          this.industryFirst = accountInfo.industryFirst ? accountInfo.industryFirst : ''
          this.industrySecond = accountInfo.industrySecond ? accountInfo.industrySecond : ''
          this.selectChildId = accountInfo.industryId ? parseInt(accountInfo.industryId) : 0
          this.companyWebsite = accountInfo.website ? accountInfo.website : '无'
          this.licenseCode = accountInfo.licenseCode ? accountInfo.licenseCode : '无'
          this.licensePic = accountInfo.licensePic ? accountInfo.licensePic : '无'
        } else {
          account.getAccount({}).then((res) => {
            if (res.code !== 200) {
            } else {
              let resData = res.data ? res.data : ''
              this.account = resData.userName ? resData.userName : '无'
              this.accountName = resData.name ? resData.name : '无'
              this.avatar = resData.avatar ? resData.avatar : '无'
              this.accountPhone = resData.mobile ? resData.mobile : '无'
              this.accountPassword = resData.hasPassword ? '已设置' : '未设置'
              this.companyName = resData.company ? resData.company : '无'
              this.state = resData.verify === 'AWAIT' ? '未认证' : '已认证'
              this.displayValue = resData.industryFirst ? resData.industryFirst + '/' + resData.industrySecond : '无'
              this.industryFirst = resData.industryFirst ? resData.industryFirst : ''
              this.industrySecond = resData.industrySecond ? resData.industrySecond : ''
              this.selectChildId = resData.industryId ? parseInt(resData.industryId) : 0
              this.companyWebsite = resData.website ? resData.website : '无'
              this.licenseCode = resData.licenseCode ? resData.licenseCode : '无'
              this.licensePic = resData.licensePic ? resData.licensePic : '无'
              sessionStorage.setItem('accountInfo', JSON.stringify(res.data))
            }
          })
        }
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
          } else {
            let accountInfo = JSON.parse(sessionStorage.getItem('accountInfo'))
            if (accountInfo) {
              accountInfo.avatar = data.name
              sessionStorage.setItem('accountInfo', JSON.stringify(accountInfo))
            }
            // sessionStorage.setItem('accountInfo', JSON.stringify(res.data))
            EventBus.$emit('avatarChange', data.name)
            // this.getAccount()
          }
        })
      },
      uploadError (data) {
        console.log('上传失败:', data)
      },
      saveSelectInfo (initVal, val, type, saveType) {
        let data = {
        }
        if (type === 'industry') {
          data.industryId = parseInt(initVal.selectChildId)
        }
        this.displayValue = initVal.selectParentValue + '/' + initVal.selectChildValue
        if (saveType === 'company') {
          account.setCompanyInfo(data).then((res) => {
            if (res.code !== 200) {
            } else {
              this.changeState[type] = false
              let accountInfo = JSON.parse(sessionStorage.getItem('accountInfo'))
              accountInfo.selectChildId = parseInt(initVal.selectChildId)
              accountInfo.selectParentId = initVal.selectParentId
              accountInfo.industrySecond = initVal.selectChildValue
              accountInfo.industryFirst = initVal.selectParentValue
              this.selectChildId = parseInt(initVal.selectChildId)
              sessionStorage.setItem('accountInfo', JSON.stringify(accountInfo))
              // this.getAccount()
            }
          })
        }
      },
      save (initVal, val, type, saveType) {
        // 修改选项后点击保存、
        if (type === 'mobile') {
          let reg = /^1[3|4|5|6|7|8|9][0-9]\d{8}$/
          if (!reg.test(parseInt(val))) {
            this.errorTips[type] = '手机格式不正确'
            // this.userPhone = initVal
            this.changeState[type] = true
            return false
          } else {
            this.changeState[type] = false
            this.errorTips[type] = ''
          }
        } else if (type === 'tel') {
          let reg = /^\d{8,12}$/
          if (!reg.test(parseInt(val))) {
            this.errorTips[type] = '办公电话格式不正确'
            // this.officeNo = initVal
            this.changeState[type] = true
            return false
          } else {
            this.changeState[type] = false
            this.errorTips[type] = ''
          }
        } else if (type === 'email') {
          let reg = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/
          if (!reg.test(val)) {
            this.errorTips[type] = '邮箱格式不正确'
            // this.userEmail = initVal
            this.changeState[type] = true
            return false
          } else {
            this.changeState[type] = false
            this.errorTips[type] = ''
          }
        } else if (type === 'qq') {
          let reg = /^\d{1,20}$/
          if (!reg.test(parseInt(val))) {
            this.errorTips[type] = 'QQ格式不正确'
            // this.userQQ = initVal
            this.changeState[type] = true
            return false
          } else {
            this.changeState[type] = false
            this.errorTips[type] = ''
          }
        } else if (type === 'website') {
          let reg = /^(http(s)?):\/\/([\w-]+(\.[\w-]+)*\/)*[\w-]+(\.[\w-]+)*\/?(\?([\w-.,@?^=%&:/~+#]*)+)?/
          if (!reg.test(val)) {
            this.errorTips[type] = '公司网址格式不正确'
            // this.companyWebsite = initVal
            this.changeState[type] = true
            return false
          } else {
            this.changeState[type] = false
            this.errorTips[type] = ''
          }
        }
        let valType = type
        let data = {
        }
        if (type === 'name' && saveType === 'company') {
          this.changeState['accountName'] = false
        } else {
          this.changeState[type] = false
        }
        data[valType] = val
        if (saveType === 'company') {
          account.setCompanyInfo(data).then((res) => {
            if (res.code !== 200) {
            } else {
              let accountInfo = JSON.parse(sessionStorage.getItem('accountInfo'))
              accountInfo[valType] = val
              account.getAccount({}).then((res) => {
                if (res.code !== 200) {
                } else {
                  sessionStorage.setItem('accountInfo', JSON.stringify(accountInfo))
                }
              })
              // sessionStorage.setItem('accountInfo', JSON.stringify(accountInfo))
              // this.getAccount()
            }
          })
        } else if (saveType === 'user') {
          account.setUserInfo(data).then((res) => {
            if (res.code !== 200) {
            } else {
              let contactInfo = JSON.parse(sessionStorage.getItem('contactInfo'))
              if (contactInfo) {
                contactInfo[valType] = val
                sessionStorage.setItem('contactInfo', JSON.stringify(contactInfo))
              }
            }
          })
        }
      },
      cancelSelectInfo (initVal, type) {
        this.changeState[type] = false
        switch (type) {
          case 'industry': this.selectChildId = initVal.initSelectChildId
        }
      },
      cancel: function (val, type) {
        this.changeState[type] = false
        switch (type) {
          case 'accountName' : this.accountName = val
            break
          case 'website' : this.companyWebsite = val
            this.errorTips.website = ''
            break
          case 'name' : this.userName = val
            break
          case 'position' : this.userPost = val
            break
          case 'mobile' : this.userPhone = val
            this.errorTips.mobile = ''
            break
          case 'tel' : this.officeNo = val
            this.errorTips.tel = ''
            break
          case 'email' : this.userEmail = val
            this.errorTips.email = ''
            break
          case 'wechat' : this.userWechat = val
            break
          case 'qq' : this.userQQ = val
            this.errorTips.qq = ''
            break
          case 'remark' : this.userRemarks = val
            break
        }
      },
      clickIndustryModifyBtn (type) {
        let data = {
          type: 'BUSINESS'
        }
        account.getIndustryList(data).then((res) => {
          if (res.code !== 200) {
          } else {
            for (let i = 0; i < this.industry.length; i++) {
              for (let j = 0; j < this.industry[i].items.length; j++) {
                if (this.industry[i].items[j].industryId === this.selectChildId) {
                  this.selectParentId = this.industry[i].items[j].industryPid
                  this.industry = res.data
                  this.changeState[type] = true
                }
              }
            }
          }
        })
      },
      clickChangeState (type) {
        this.changeState[type] = true
      },
      clickSave (val, type, boxType) {
        this.isEdit = true
        if (type === 'popup') {
          this.messageBoxShow = true
          this.errorTips.oldPhone = ''
          this.errorTips.newPhone = ''
          this.phoneCodeError = false
          this.errorTips.oldPassword = ''
          this.errorTips.newPassword = ''
          this.errorTips.rePassword = ''
        }
        switch (boxType) {
          case 'mobliePhone' : this.messageBoxType = 'changeMobile'
            this.fontColor = '#555'
            this.phone = val
            this.messageBoxExplain = '为了保证您的账号安全，更换手机前请先进行安全验证'
            this.isOldphone = true
            this.phoneCode = ''
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
          this.messageBoxShow = false
        } else if (e.action === 'confirm') {
          if (this.messageBoxType === 'changeMobile') {
            if (this.step === 'initialPhone') {
              if (!this.phone) {
                this.errorTips.oldPhone = '请输入手机号'
                return false
              }
              let reg = /^1[3|4|5|6|7|8|9][0-9]\d{8}$/
              if (!reg.test(parseInt(this.phone))) {
                this.errorTips.oldPhone = '手机格式不正确'
                return false
              }
              if (!this.phoneCode) {
                this.phoneCodeError = true
                this.phoneCodeTip = '请输入验证码'
                return false
              }
              let data = {
                mobile: this.phone,
                code: this.phoneCode,
                type: 'BUSINESS_USER_VERIFY_MOBILE'
              }
              account.verifyMobile(data).then((res) => {
                if (res.code !== 200) {
                  this.phoneCodeError = true
                  this.phoneCodeTip = res.msg
                } else {
                  this.phoneCodeError = false
                  this.phoneCodeTip = res.msg
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
              if (!this.saveNewPhone) {
                this.errorTips.newPhone = '请输入新手机号'
                return false
              }
              let reg = /^1[3|4|5|6|7|8|9][0-9]\d{8}$/
              if (!reg.test(parseInt(this.saveNewPhone))) {
                this.errorTips.newPhone = '新手机号格式不正确'
                return false
              }
              if (!this.phoneCode) {
                this.phoneCodeError = true
                this.phoneCodeTip = '请输入验证码'
                return false
              }
              let data = {
                mobile: this.saveNewPhone,
                codeToken: this.token,
                code: this.phoneCode
              }
              account.updateMobile(data).then((res) => {
                if (res.code !== 200) {
                  this.phoneCodeError = true
                  this.phoneCodeTip = res.msg
                } else {
                  this.phone = ''
                  this.step = 'phoneSuccess'
                  this.confirmText = '完成'
                  this.accountPhone = this.saveNewPhone
                  let accountInfo = JSON.parse(sessionStorage.getItem('accountInfo'))
                  if (accountInfo) {
                    accountInfo.accountPhone = this.saveNewPhone
                    sessionStorage.setItem('accountInfo', JSON.stringify(accountInfo))
                  }
                  this.newPhone = this.saveNewPhone
                  this.saveNewPhone = ''
                }
              })
            } else if (this.step === 'phoneSuccess') {
              this.messageBoxExplain = '修改成功'
              this.step = 'initialPhone'
              this.phoneCode = ''
              this.messageBoxShow = false
            }
          } else if (this.messageBoxType === 'changePassword') {
            if (!this.oldPassword) {
              this.errorTips.oldPassword = '请输入旧密码'
              return false
            }
            if (!this.newPassword) {
              this.errorTips.newPassword = '请输入新密码'
              return false
            }
            let re = /^(?!\d+$)(?![A-Za-z]+$)[a-zA-Z0-9]{6,30}$/
            if (!re.test(this.newPassword)) {
              this.errorTips.newPassword = '密码支持6~30位的大小写英文和数字，必须包含英文和数字'
              return false
            }
            if (!this.reNewPassword) {
              this.errorTips.rePassword = '请输入确认新密码'
              return false
            }
            if (this.newPassword !== this.reNewPassword) {
              this.errorTips.rePassword = '重新输入密码与新密码不一致'
              return false
            }
            let data = {
              'mobile': this.accountPhone,
              'newPassword': this.newPassword,
              'oldPassword': this.oldPassword
            }
            account.changePassword(data).then((res) => {
              if (res.code === 10010) {
                this.errorTips.oldPassword = '旧密码输入不正确'
                return false
              }
              this.$messageBox({
                header: '提示',
                content: '修改成功',
                confirmText: '确定',
                autoClose: 3, // 60秒
                width: '500px', // 消息框宽度
                handleClick: (e) => {
                  if (e.action === 'cancel') {
                  } else if (e.action === 'confirm') {
                  }
                }
              })
              this.oldPassword = ''
              this.newPassword = ''
              this.reNewPassword = ''
              this.messageBoxShow = false
            })
          } else if (this.messageBoxType === 'seeState') {
            this.messageBoxShow = false
          }
        }
      },
      isGetCodePermission (val) {
        // if (this.isImg && this.phoneStatus && !this.isSend) {
        if (this.isImg && this.phoneStatus) {
          this.isProhibit = false
          if (this.second > 0) {
            this.isSend = false
            this.isProhibit = false
            this.second = 60
            this.mobileOpacity = 1
            clearInterval(this.timerr)
            if (val) {
              this.isImg = false
              this.phoneKey = ''
              this.cap.refresh()
            }
          }
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
            'mobile': this.saveNewPhone,
            'type': 'BUSINESS_USER_UPDATE_MOBILE',
            captcha: this.phoneKey
          }
        }
        identifyingcodeManage.getCode(data).then((res) => {
          if (res.code === 10001) {
            this.phoneCodeError = true
            this.phoneCodeTip = res.msg
            this.opacity = 1
            clearInterval(this.timerr)
            this.isSend = false
            this.isProhibit = true
            this.second = 60
            this.isImg = false
            this.phoneKey = ''
            this.cap.refresh()
          } else if (res.code === 10050) {
            this.phoneCodeError = true
            this.phoneCodeTip = '验证码输入过于频繁'
          } else if (res.code !== 200) {
            this.phoneCodeError = true
            this.phoneCodeTip = res.msg
            this.opacity = 1
            clearInterval(this.timerr)
            this.isSend = false
            this.isProhibit = true
            this.second = 60
            this.isImg = false
            this.phoneKey = ''
            this.cap.refresh()
          } else {
            this.phoneCodeError = false
            this.phoneCodeTip = res.msg
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
      },
      codeFocus () {
        this.phoneCodeError = false
        this.phoneCodeTip = ''
      },
      passwordFocus (val) {
        this.errorTips.newPassword = ''
        switch (val) {
          case 'oldPassword': this.errorTips.oldPassword = ''
            break
          case 'newPassword': this.errorTips.newPassword = ''
            this.isShow = true
            break
          case 'reNewPassword': this.errorTips.rePassword = ''
            break
        }
      },
      phoneFocus (val) {
        switch (val) {
          case 'oldphone': this.errorTips.oldPhone = ''
            break
          case 'newphone': this.errorTips.newPhone = ''
            break
        }
      },
      passwordChange () {
        this.isContainCount = this.newPassword.length >= 6 ? 1 : 0
        var regNum = /^(?=.*\d.*\b)/
        this.isContainNum = regNum.test(this.newPassword) ? 1 : 0
        var regEn = /[_a-zA-Z]/
        this.isContainEn = regEn.test(this.newPassword) ? 1 : 0
        if (this.newPassword.length >= 6 && regNum.test(this.newPassword) && regEn.test(this.newPassword)) {
          this.isChecked = true
        } else {
          this.isChecked = false
        }
      },
      passwordBlur () {
        this.isShow = false
      }
    }
  }
</script>
<style lang="scss" scoped>
@import 'assets/css/variable.scss';
.account-container /deep/ {
  /* 设备宽度大于 1600 */
  @media all and (min-width: 1600px) {
    width: 1366px;
    .v-info .v-editor {
      width: 453px;
    }
  }
  /* 设备宽度小于 1600px */
  @media all and (max-width: 1600px) {
    width: 1019px;
    .v-info .v-editor {
      width: 375px;
    }
  }
  margin: 0 auto;
  .v-account-title {
    line-height: 60px;
    font-size: 24px;
    color: #222;
  }
  .v-info {
    width: 100%;
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
  .yidun.yidun--light {
    display: none;
  }
  #captcha {
    width: 390px;
    margin-bottom: 30px;
    .yidun.yidun--light {
      display: block;
    }
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
    .v-psd {
      position: relative;
      .v-verification {
        position: absolute;
        top: 40px;
        left: 0;
        z-index: 2;
        ul {
          width: 130px;
          height: 95px;
          background-color: #fff;
          box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.2);
          border-radius: 4px;
          padding: 8px 12px;
          font-size: 12px;
          color: #222;
          li {
            margin-bottom: 5px;
          }
          p {
            color: #555;
            margin-bottom: 5px;
          }
          i {
            color: #e9ebff;
            font-size: 12px;
            &.isActive {
              color: $color-blue;
            }
          }
        }
      }
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
    .v-error {
      position: absolute;
      top: 266px;
      left: 20px;
      color: #fc5659;
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
