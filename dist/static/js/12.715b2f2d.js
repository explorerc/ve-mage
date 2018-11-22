(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{1071:function(s,t,i){"use strict";i.r(t);var e=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"clearfix forgot-container"},[e("p",{staticClass:"v-title"},[s._v("\n    找回密码\n  ")]),s._v(" "),e("com-tabs",{staticClass:"v-forgot",attrs:{value:s.activeName,disabled:""},on:{"update:value":function(t){s.activeName=t}}},[e("com-tab",{attrs:{index:"first"}},[e("div",{attrs:{slot:"label"},slot:"label"},[s._v("\n        验证身份\n        "),s.isStepOneSuccess?e("i",{staticClass:"iconfont icon-duigou1 v-icon1"}):e("span",{staticClass:"v-circle active"},[e("i")]),s._v(" "),e("span",{staticClass:"v-line"})]),s._v(" "),e("div",{staticClass:"v-get-password"},[e("com-input",{staticClass:"v-input",attrs:{value:s.userPhone,placeholder:"输入手机号","error-tips":s.errorTips.userPhone},on:{"update:value":function(t){s.userPhone=t},focus:function(t){s.passwordFocus("userPhone")}}}),s._v(" "),e("div",{attrs:{id:"captcha"}}),s._v(" "),e("com-input",{staticClass:"v-input phone-code",attrs:{value:s.phoneCode,placeholder:"验证码","error-tips":s.errorTips.phoneCode},on:{"update:value":function(t){s.phoneCode=t},focus:function(t){s.passwordFocus("phoneCode")}}}),s._v(" "),e("a",{staticClass:"v-getcode",class:{prohibit:s.isProhibit},attrs:{href:"javascript:;"},on:{click:function(t){s.getCode()}}},[s._v("获取验证码\n          "),e("span",{directives:[{name:"show",rawName:"v-show",value:s.isSend,expression:"isSend"}],staticClass:"fr"},[s._v("(\n            "),e("em",[s._v(s._s(s.second))]),s._v("s)")])]),s._v(" "),e("button",{staticClass:"primary-button",on:{click:s.verifyUser}},[s._v("提交")])],1)]),s._v(" "),e("com-tab",{attrs:{index:"second"}},[e("div",{attrs:{slot:"label"},slot:"label"},[s._v("\n        设置新密码\n        "),s.isStepTwoSuccess?e("i",{staticClass:"iconfont icon-duigou1 v-icon2"}):e("span",{staticClass:"v-circle",class:{active:s.sedIsActive}},[e("i")])]),s._v(" "),e("div",{staticClass:"v-get-password"},[e("div",{staticClass:"v-psd"},[e("com-input",{staticClass:"v-input",attrs:{value:s.password,placeholder:"请输入新密码",maxLength:30,type:"password","error-tips":s.errorTips.password},on:{"update:value":function(t){s.password=t},focus:function(t){s.passwordFocus("password")},change:function(t){s.passwordChange()},blur:function(t){s.passwordBlur()}}}),s._v(" "),s.isPasswordShow?e("div",{staticClass:"v-verification"},[e("ul",[e("p",[s._v("密码至少包含：")]),s._v(" "),e("li",[e("i",{staticClass:"iconfont icon-duigou1",class:{isActive:s.isContainEn}}),s._v(" 1个英文字母\n              ")]),s._v(" "),e("li",[e("i",{staticClass:"iconfont icon-duigou1",class:{isActive:s.isContainNum}}),s._v(" 1个数字\n              ")]),s._v(" "),e("li",[e("i",{staticClass:"iconfont icon-duigou1",class:{isActive:s.isContainCount}}),s._v(" 6～30个字符\n              ")])])]):s._e()],1),s._v(" "),e("div",{staticClass:"v-new-psd"},[e("com-input",{staticClass:"v-input",attrs:{value:s.rePassword,placeholder:"请确认新密码",maxLength:30,type:"password","error-tips":s.errorTips.rePassword},on:{"update:value":function(t){s.rePassword=t},focus:function(t){s.passwordFocus("rePassword")},change:function(t){s.newPasswordChange()},blur:function(t){s.newPasswordBlur()}}}),s._v(" "),s.isNewPasswordShow?e("div",{staticClass:"v-verification"},[e("ul",[e("p",[s._v("确认密码需要：")]),s._v(" "),e("li",[e("i",{staticClass:"iconfont icon-duigou1",class:{isActive:s.isSame}}),s._v(" 与原密码一致\n              ")])])]):s._e()],1),s._v(" "),e("button",{staticClass:"primary-button",on:{click:s.undatePhone}},[s._v("提交")])])]),s._v(" "),e("com-tab",{attrs:{index:"third"}},[e("div",{attrs:{slot:"label"},slot:"label"},[s._v("\n        设置完成\n        "),s.isStepThreeSuccess?e("i",{staticClass:"iconfont icon-duigou1 v-icon2"}):e("span",{staticClass:"v-circle",class:{active:s.thdIsActive}},[e("i")])]),s._v(" "),e("img",{staticClass:"v-success-img",attrs:{src:i(674),alt:""}}),s._v(" "),e("p",{staticClass:"v-success"},[s._v("\n        新密码设置成功\n      ")]),s._v(" "),e("p",{staticClass:"v-tip"},[e("span",{staticClass:"v-red"},[s._v(s._s(s.time)+"s")]),s._v("后跳转到登录页面\n      ")])])],1)],1)};e._withStripped=!0;var o=i(96),n={data:function(){return{tabValue:1,outValue:"123",userPhone:"",phoneCode:"",token:"",activeName:"first",phoneStatus:!1,type:"password",key:"",isProhibit:!0,isSend:!1,second:60,timerr:"",phoneKey:"",isImg:!1,cap:null,password:"",rePassword:"",isValidPassword:!1,sedIsActive:!1,thdIsActive:!1,time:5,isContainEn:0,isContainNum:0,isContainCount:0,isSame:0,isPasswordShow:!1,isNewPasswordShow:!1,errorTips:{userPhone:"",phoneCode:"",password:"",rePassword:""},isStepOneSuccess:!1,isStepTwoSuccess:!1,isStepThreeSuccess:!1}},components:{},created:function(){var s=this;this.$config({handlers:!0}).$get(o.a.GET_CAPTCHA_ID).then(function(t){var i=s;s.key=t.data,window.initNECaptcha({captchaId:i.key,element:"#captcha",width:450,onReady:function(s){},onVerify:function(s,t){t&&(i.phoneKey=t.validate,i.isImg=!0),s&&console.log(s)},onError:function(){}},function(s){i.cap=s})}).catch(function(s){console.log(s.msg)})},destroyed:function(){clearInterval(this.timerr)},mounted:function(){},watch:{userPhone:function(){this.checkPhone(this.userPhone),this.isGetCodePermission(!0)},phoneStatus:function(s){this.isGetCodePermission(!0)},isImg:function(s){this.isGetCodePermission()}},methods:{setPassword:function(){console.log(1)},isGetCodePermission:function(s){this.isImg&&this.phoneStatus?(this.isProhibit=!1,this.second>0&&(this.isSend=!1,this.isProhibit=!1,this.second=60,this.mobileOpacity=1,clearInterval(this.timerr),s&&(this.isImg=!1,this.phoneKey="",this.cap.refresh()))):this.isProhibit=!0},checkPhone:function(s){/^1[3|4|5|6|7|8|9][0-9]\d{8}$/.test(parseInt(s))?this.phoneStatus=!0:this.phoneStatus=!1},getCode:function(){var s=this;if(this.isProhibit)return!1;var t={mobile:this.userPhone,type:"BUSINESS_USER_UPDATE_PASSWORD",captcha:this.phoneKey};this.$config({handlers:!0}).$get(o.a.GET_CODE,t).then(function(t){s.errorTips.phoneCode="",s.isSend=!0,s.isProhibit=!0,clearInterval(s.timerr),s.timerr=setInterval(function(){s.second--,s.second<=0&&(clearInterval(s.timerr),s.isSend=!1,s.isProhibit=!0,s.second=60,s.isImg=!1,s.phoneKey="",s.cap.refresh())},1e3)}).catch(function(t){10050===t.code?s.errorTips.phoneCode="验证码输入过于频繁":s.errorTips.phoneCode=t.msg,clearInterval(s.timerr),s.isSend=!1,s.isProhibit=!0,s.second=60,s.isImg=!1,s.phoneKey="",s.cap.refresh()})},verifyUser:function(){var s=this;if(!this.userPhone)return this.errorTips.userPhone="请输入手机号",!1;if(!this.phoneStatus)return this.errorTips.userPhone="手机号格式不正确",!1;if(!this.phoneCode)return this.errorTips.phoneCode="请输入验证码",!1;var t={mobile:this.userPhone,code:this.phoneCode,type:"BUSINESS_USER_UPDATE_PASSWORD"};this.$config({handlers:!0}).$post(o.a.POST_VERIFY_MOBILE,t).then(function(t){s.isStepOneSuccess=!0,s.sedIsActive=!0,s.activeName="second",s.token=t.data.codeToken,s.phone="",s.messageBoxExplain="验证成功，请输入新的手机号",s.isOldphone=!1,s.step="newPhone",clearInterval(s.timerr),s.isSend=!1,s.isProhibit=!0,s.second=60,s.isImg=!1,s.phoneKey="",s.cap.refresh()}).catch(function(t){s.errorTips.phoneCode=t.msg})},undatePhone:function(){var s=this;if(!this.validPassword())return this.errorTips.password="密码支持6~30位的大小写英文和数字，必须包含英文和数字",!1;if(!this.rePassword)return this.errorTips.rePassword="请输入确认新密码",!1;if(this.password!==this.rePassword)return this.errorTips.rePassword="两次密码输入不一致",!1;var t={mobile:this.userPhone,codeToken:this.token,newPassword:this.password};this.$config({handlers:!0}).$post(o.a.POST_BACK_PASSWORD,t).then(function(t){setInterval(function(){s.time--,s.time<=0&&s.$router.replace("/login")},1e3),s.thdIsActive=!0,s.isStepTwoSuccess=!0,s.isStepThreeSuccess=!0,s.activeName="third"}).catch(function(t){s.errorTips.password=t.msg})},validPhone:function(s){return/^1[3|4|5|6|7|8|9][0-9]\d{8}$/.test(s)},validPassword:function(){return/^(?!\d+$)(?![A-Za-z]+$)[a-zA-Z0-9]{6,30}$/.test(this.password)},passwordFocus:function(s){switch(s){case"password":this.errorTips.password="",this.isPasswordShow=!0;break;case"rePassword":this.errorTips.rePassword="",this.isNewPasswordShow=!0;break;case"userPhone":this.errorTips.userPhone="";break;case"phoneCode":this.errorTips.phoneCode=""}},passwordChange:function(){this.isContainCount=this.password.length>=6?1:0;var s=/^(?=.*\d.*\b)/;this.isContainNum=s.test(this.password)?1:0;var t=/[_a-zA-Z]/;this.isContainEn=t.test(this.password)?1:0,this.password.length>=6&&s.test(this.password)&&t.test(this.password)?this.isChecked=!0:this.isChecked=!1,this.password!==this.rePassword&&(this.isSame=!1)},newPasswordChange:function(){this.password===this.rePassword?this.isSame=!0:this.isSame=!1},passwordBlur:function(){this.isPasswordShow=!1},newPasswordBlur:function(){this.isNewPasswordShow=!1}}},a=(i(751),i(1)),r=Object(a.a)(n,e,[],!1,null,"2f345e8d",null);r.options.__file="src/pages/login/forgot.vue";t.default=r.exports},544:function(s,t,i){},751:function(s,t,i){"use strict";var e=i(544);i.n(e).a}}]);
//# sourceMappingURL=12.715b2f2d.js.map