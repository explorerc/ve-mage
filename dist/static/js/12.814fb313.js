(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{272:function(s,t,e){},406:function(s,t,e){"use strict";var i=e(272);e.n(i).a},601:function(s,t,e){"use strict";e.r(t);var i=e(50),o={data:function(){return{tabValue:1,outValue:"123",userPhone:"",phoneCode:"",token:"",activeName:"first",phoneStatus:!1,type:"password",key:"",isProhibit:!0,isSend:!1,second:60,timerr:"",phoneKey:"",isImg:!1,cap:null,password:"",rePassword:"",isValidPassword:!1,sedIsActive:!1,thdIsActive:!1,time:5,isContainEn:0,isContainNum:0,isContainCount:0,isShow:!1,errorTips:{userPhone:"",phoneCode:"",password:"",rePassword:""},isStepOneSuccess:!1,isStepTwoSuccess:!1,isStepThreeSuccess:!1}},components:{},created:function(){var s=this;this.$config({handlers:!0}).$get(i.a.GET_CAPTCHA_ID).then(function(t){var e=s;s.key=t.data,window.initNECaptcha({captchaId:e.key,element:"#captcha",mode:"float",width:450,onReady:function(s){},onVerify:function(s,t){t&&(e.phoneKey=t.validate,e.isImg=!0),s&&console.log(s)},onError:function(){}},function(s){e.cap=s})}).catch(function(s){console.log(s.msg)})},destroyed:function(){clearInterval(this.timerr)},mounted:function(){},watch:{userPhone:function(){this.checkPhone(this.userPhone),this.isGetCodePermission(!0)},phoneStatus:function(s){this.isGetCodePermission(!0)},isImg:function(s){this.isGetCodePermission()}},methods:{setPassword:function(){console.log(1)},isGetCodePermission:function(s){this.isImg&&this.phoneStatus?(this.isProhibit=!1,this.second>0&&(this.isSend=!1,this.isProhibit=!1,this.second=60,this.mobileOpacity=1,clearInterval(this.timerr),s&&(this.isImg=!1,this.phoneKey="",this.cap.refresh()))):this.isProhibit=!0},checkPhone:function(s){/^1[3|4|5|6|7|8|9][0-9]\d{8}$/.test(parseInt(s))?this.phoneStatus=!0:this.phoneStatus=!1},getCode:function(){var s=this;if(this.isProhibit)return!1;var t={mobile:this.userPhone,type:"BUSINESS_USER_UPDATE_PASSWORD",captcha:this.phoneKey};this.$config({handlers:!0}).$get(i.a.GET_CODE,t).then(function(t){s.errorTips.phoneCode="",s.isSend=!0,s.isProhibit=!0,clearInterval(s.timerr),s.timerr=setInterval(function(){s.second--,s.second<=0&&(clearInterval(s.timerr),s.isSend=!1,s.isProhibit=!0,s.second=60,s.isImg=!1,s.phoneKey="",s.cap.refresh())},1e3)}).catch(function(t){10050===t.code?s.errorTips.phoneCode="验证码输入过于频繁":s.errorTips.phoneCode=t.msg,clearInterval(s.timerr),s.isSend=!1,s.isProhibit=!0,s.second=60,s.isImg=!1,s.phoneKey="",s.cap.refresh()})},verifyUser:function(){var s=this;if(!this.userPhone)return this.errorTips.userPhone="请输入手机号",!1;if(!this.phoneStatus)return this.errorTips.userPhone="手机号格式不正确",!1;if(!this.phoneCode)return this.errorTips.phoneCode="请输入验证码",!1;var t={mobile:this.userPhone,code:this.phoneCode,type:"BUSINESS_USER_UPDATE_PASSWORD"};this.$config({handlers:!0}).$post(i.a.POST_VERIFY_MOBILE,t).then(function(t){s.isStepOneSuccess=!0,s.sedIsActive=!0,s.activeName="second",s.token=t.data.codeToken,s.phone="",s.messageBoxExplain="验证成功，请输入新的手机号",s.isOldphone=!1,s.step="newPhone",clearInterval(s.timerr),s.isSend=!1,s.isProhibit=!0,s.second=60,s.isImg=!1,s.phoneKey="",s.cap.refresh()}).catch(function(t){s.errorTips.phoneCode=t.msg})},undatePhone:function(){var s=this;if(!this.validPassword())return this.errorTips.password="密码支持6~30位的大小写英文和数字，必须包含英文和数字",!1;if(!this.rePassword)return this.errorTips.rePassword="请输入确认新密码",!1;if(this.password!==this.rePassword)return this.errorTips.rePassword="两次密码输入不一致",!1;var t={mobile:this.userPhone,codeToken:this.token,newPassword:this.password};this.$config({handlers:!0}).$post(i.a.POST_BACK_PASSWORD,t).then(function(t){setInterval(function(){s.time--,s.time<=0&&s.$router.replace("/login")},1e3),s.thdIsActive=!0,s.isStepTwoSuccess=!0,s.isStepThreeSuccess=!0,s.activeName="third"}).catch(function(t){s.errorTips.password=t.msg})},validPhone:function(s){return/^1[3|4|5|6|7|8|9][0-9]\d{8}$/.test(s)},validPassword:function(){return/^(?!\d+$)(?![A-Za-z]+$)[a-zA-Z0-9]{6,30}$/.test(this.password)},passwordFocus:function(s){switch(s){case"password":this.errorTips.password="",this.isShow=!0;break;case"rePassword":this.errorTips.rePassword="";break;case"userPhone":this.errorTips.userPhone="";break;case"phoneCode":this.errorTips.phoneCode=""}},passwordChange:function(){this.isContainCount=this.password.length>=6?1:0;var s=/^(?=.*\d.*\b)/;this.isContainNum=s.test(this.password)?1:0;var t=/[_a-zA-Z]/;this.isContainEn=t.test(this.password)?1:0,this.password.length>=6&&s.test(this.password)&&t.test(this.password)?this.isChecked=!0:this.isChecked=!1},passwordBlur:function(){this.isShow=!1}}},n=(e(406),e(1)),r=Object(n.a)(o,function(){var s=this,t=s.$createElement,i=s._self._c||t;return i("div",{staticClass:"clearfix forgot-container"},[i("p",{staticClass:"v-title"},[s._v("\n    找回密码\n  ")]),s._v(" "),i("com-tabs",{staticClass:"v-forgot",attrs:{value:s.activeName,disabled:""},on:{"update:value":function(t){s.activeName=t}}},[i("com-tab",{attrs:{index:"first"}},[i("div",{attrs:{slot:"label"},slot:"label"},[s._v("\n        验证身份\n        "),s.isStepOneSuccess?i("i",{staticClass:"iconfont icon-duigou1 v-icon1"}):i("span",{staticClass:"v-circle active"},[i("i")]),s._v(" "),i("span",{staticClass:"v-line"})]),s._v(" "),i("div",{staticClass:"v-get-password"},[i("com-input",{staticClass:"v-input",attrs:{value:s.userPhone,placeholder:"输入手机号","error-tips":s.errorTips.userPhone},on:{"update:value":function(t){s.userPhone=t},focus:function(t){s.passwordFocus("userPhone")}}}),s._v(" "),i("div",{attrs:{id:"captcha"}}),s._v(" "),i("com-input",{staticClass:"v-input phone-code",attrs:{value:s.phoneCode,placeholder:"验证码","error-tips":s.errorTips.phoneCode},on:{"update:value":function(t){s.phoneCode=t},focus:function(t){s.passwordFocus("phoneCode")}}}),s._v(" "),i("a",{staticClass:"v-getcode",class:{prohibit:s.isProhibit},attrs:{href:"javascript:;"},on:{click:function(t){s.getCode()}}},[s._v("获取验证码"),i("span",{directives:[{name:"show",rawName:"v-show",value:s.isSend,expression:"isSend"}],staticClass:"fr"},[s._v("("),i("em",[s._v(s._s(s.second))]),s._v("s)")])]),s._v(" "),i("button",{staticClass:"primary-button",on:{click:s.verifyUser}},[s._v("提交")])],1)]),s._v(" "),i("com-tab",{attrs:{index:"second"}},[i("div",{attrs:{slot:"label"},slot:"label"},[s._v("\n        设置新密码\n        "),s.isStepTwoSuccess?i("i",{staticClass:"iconfont icon-duigou1 v-icon2"}):i("span",{staticClass:"v-circle",class:{active:s.sedIsActive}},[i("i")])]),s._v(" "),i("div",{staticClass:"v-get-password"},[i("div",{staticClass:"v-psd"},[i("com-input",{staticClass:"v-input",attrs:{value:s.password,placeholder:"请输入新密码",maxLength:30,type:"password","error-tips":s.errorTips.password},on:{"update:value":function(t){s.password=t},focus:function(t){s.passwordFocus("password")},change:function(t){s.passwordChange()},blur:function(t){s.passwordBlur()}}}),s._v(" "),s.isShow?i("div",{staticClass:"v-verification"},[i("ul",[i("p",[s._v("密码至少包含：")]),s._v(" "),i("li",[i("i",{staticClass:"iconfont icon-duigou1",class:{isActive:s.isContainEn}}),s._v(" 1个英文字母\n              ")]),s._v(" "),i("li",[i("i",{staticClass:"iconfont icon-duigou1",class:{isActive:s.isContainNum}}),s._v(" 1个数字\n              ")]),s._v(" "),i("li",[i("i",{staticClass:"iconfont icon-duigou1",class:{isActive:s.isContainCount}}),s._v(" 6～30个字符\n              ")])])]):s._e()],1),s._v(" "),i("com-input",{staticClass:"v-input",attrs:{value:s.rePassword,placeholder:"请确认新密码",maxLength:30,type:"password","error-tips":s.errorTips.rePassword},on:{"update:value":function(t){s.rePassword=t},focus:function(t){s.passwordFocus("rePassword")}}}),s._v(" "),i("button",{staticClass:"primary-button",on:{click:s.undatePhone}},[s._v("提交")])],1)]),s._v(" "),i("com-tab",{attrs:{index:"third"}},[i("div",{attrs:{slot:"label"},slot:"label"},[s._v("\n        设置完成\n        "),s.isStepThreeSuccess?i("i",{staticClass:"iconfont icon-duigou1 v-icon2"}):i("span",{staticClass:"v-circle",class:{active:s.thdIsActive}},[i("i")])]),s._v(" "),i("img",{staticClass:"v-success-img",attrs:{src:e(347),alt:""}}),s._v(" "),i("p",{staticClass:"v-success"},[s._v("\n        新密码设置成功\n      ")]),s._v(" "),i("p",{staticClass:"v-tip"},[i("span",{staticClass:"v-red"},[s._v(s._s(s.time)+"s")]),s._v("后跳转到登录页面\n      ")])])],1)],1)},[],!1,null,"5617b292",null);r.options.__file="forgot.vue";t.default=r.exports}}]);