(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{264:function(t,i,e){},390:function(t,i,e){"use strict";var s=e(264);e.n(s).a},604:function(t,i,e){"use strict";e.r(i);var s=e(365),n=e(50),o={data:function(){return{userName:"",userPosition:"",userCompany:"",userPhone:"",code:"",phoneStatus:!1,type:"password",key:"",isProhibit:!0,isSend:!1,second:60,timerr:"",phoneKey:"",isImg:!1,cap:null,opacity:0,error:"",show:!1,closeTime:0}},components:{"com-input":s.a},created:function(){var t=this;this.$config({handlers:!0}).$get(n.a.GET_CAPTCHA_ID).then(function(i){var e=t;t.key=i.data,window.initNECaptcha({captchaId:e.key,element:"#captcha",mode:"float",width:260,onReady:function(t){},onVerify:function(t,i){i&&(e.phoneKey=i.validate,e.isImg=!0),t&&console.log(t)},onError:function(){}},function(t){e.cap=t})}).catch(function(t){console.log(t.msg)})},destroyed:function(){clearInterval(this.timerr)},mounted:function(){},watch:{outValue:function(){console.log(1)},phoneStatus:function(t){this.isGetCodePermission(!0)},isImg:function(t){this.isGetCodePermission()}},methods:{isGetCodePermission:function(t){this.isImg&&this.phoneStatus?(this.isProhibit=!1,this.second>0&&(this.isSend=!1,this.isProhibit=!1,this.second=60,this.mobileOpacity=1,clearInterval(this.timerr),t&&(this.isImg=!1,this.phoneKey="",this.cap.refresh()))):this.isProhibit=!0},checkPhone:function(t){/^1[3|4|5|6|7|8|9][0-9]\d{8}$/.test(parseInt(t))?this.phoneStatus=!0:this.phoneStatus=!1},getCode:function(){var t=this;if(this.isProhibit)return!1;var i={mobile:this.userPhone,type:"BUSINESS_USER_REG",captcha:this.phoneKey};this.$config({handlers:!0}).$get(n.a.GET_CODE,i).then(function(i){t.isSend=!0,t.isProhibit=!0,clearInterval(t.timerr),t.timerr=setInterval(function(){t.second--,t.second<=0&&(clearInterval(t.timerr),t.isSend=!1,t.isProhibit=!0,t.second=60,t.isImg=!1,t.phoneKey="",t.cap.refresh())},1e3)}).catch(function(i){10050===i.code?t.error="验证码输入过于频繁":t.error=i.msg,t.opacity=1,clearInterval(t.timerr),t.isSend=!1,t.isProhibit=!0,t.second=60,t.isImg=!1,t.phoneKey="",t.cap.refresh()})},submit:function(){var t=this;if(this.checkForm(),this.error)return!1;var i={mobile:this.userPhone,name:this.userName,position:this.userPosition,company:this.userCompany,code:this.code};this.$config({handlers:!0}).$post(n.a.POST_REGISTER,i).then(function(i){t.closeTime=60,t.show=!0}).catch(function(i){clearInterval(t.timerr),t.isSend=!1,t.isProhibit=!0,t.second=60,t.isImg=!1,t.phoneKey="",t.cap.refresh(),t.error=i.msg,t.opacity=1})},messageBoxClick:function(t){"cancel"===t.action?(console.log("取消或者关闭按钮"),this.show=!1,this.closeTime=0):"confirm"===t.action&&(this.closeTime=0,this.show=!1)},checkForm:function(t){return this.userName?this.userPosition?this.userCompany?this.userPhone?this.validPhone(this.userPhone)?this.code?(this.error="",void(this.opacity=0)):(this.error="请输入验证码",this.opacity=1,!1):(this.error="请输入正确的手机号",this.opacity=1,!1):(this.error="请输入手机号",this.opacity=1,!1):(this.error="请输入公司名称",this.opacity=1,!1):(this.error="请输入您的职务",this.opacity=1,!1):(this.error="请输入名称",this.opacity=1,!1)},validPhone:function(t){return/^1[3|4|5|6|7|8|9][0-9]\d{8}$/.test(t)},inputFocus:function(){this.error="",this.opacity=0}}},a=(e(390),e(1)),r=Object(a.a)(o,function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"clearfix register-container"},[t._m(0),t._v(" "),e("div",{staticClass:"v-right"},[e("div",{staticClass:"v-content"},[e("p",{staticClass:"v-title"},[t._v("\n        免费试用\n      ")]),t._v(" "),e("com-input",{attrs:{inputType:"text",isPassword:!1,value:"",inputValue:t.userName,placeholder:"输入您的姓名",maxLength:20},on:{"update:inputValue":function(i){t.userName=i},inputFocus:function(i){t.inputFocus()}}}),t._v(" "),e("com-input",{attrs:{inputType:"text",isPassword:!1,value:"",inputValue:t.userPosition,placeholder:"输入您的职务",maxLength:20},on:{"update:inputValue":function(i){t.userPosition=i},inputFocus:function(i){t.inputFocus()}}}),t._v(" "),e("com-input",{attrs:{inputType:"text",isPassword:!1,value:"",inputValue:t.userCompany,placeholder:"输入公司名称",maxLength:40},on:{"update:inputValue":function(i){t.userCompany=i},inputFocus:function(i){t.inputFocus()}}}),t._v(" "),e("com-input",{attrs:{inputType:"text",isPassword:!1,value:"",inputValue:t.userPhone,placeholder:"输入手机号",maxLength:11},on:{"update:inputValue":function(i){t.userPhone=i},changeInput:t.checkPhone,inputFocus:function(i){t.inputFocus()}}}),t._v(" "),e("div",{attrs:{id:"captcha"}}),t._v(" "),e("com-input",{attrs:{inputType:"text",isPassword:!1,value:"",inputValue:t.code,placeholder:"验证码",maxLength:6},on:{"update:inputValue":function(i){t.code=i},inputFocus:function(i){t.inputFocus()}}},[e("a",{staticClass:"v-getcode",class:{prohibit:t.isProhibit},attrs:{href:"javascript:;"},on:{click:function(i){t.getCode()}}},[t._v("获取验证码"),e("span",{directives:[{name:"show",rawName:"v-show",value:t.isSend,expression:"isSend"}],staticClass:"fr"},[t._v("("),e("em",[t._v(t._s(t.second))]),t._v("s)")])])]),t._v(" "),e("div",{staticClass:"input-form v-label",staticStyle:{"margin-top":"-28px"},style:{opacity:t.opacity}},[e("p",{staticClass:"v-error"},[t._v(t._s(t.error))])]),t._v(" "),e("button",{staticClass:"primary-button",on:{click:t.submit}},[t._v("提交")])],1),t._v(" "),t._m(1)]),t._v(" "),e("message-box",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],attrs:{autoClose:t.closeTime,customClass:"v-try-box",confirmText:"我知道了",width:"570px"},on:{handleClick:t.messageBoxClick}},[e("div",{attrs:{slot:"header"},slot:"header"},[t._v("免费试用")]),t._v(" "),e("p",[t._v("\n      感谢您提供的重要信息，我们会立即安排专业人员跟您联系，为您提供试用账号。您也可以拨打我们的专属服务热线获取更多信息。\n    ")]),t._v(" "),e("p",{staticClass:"v-tel"},[t._v("\n      400-888-9970\n    ")])])],1)},[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"v-left"},[i("p",{staticClass:"v-logo"},[this._v("\n      微吼知客\n    ")]),this._v(" "),i("div",{staticClass:"v-content"},[i("p",{staticClass:"v-title"},[this._v("\n        微吼知客\n      ")]),this._v(" "),i("p",{staticClass:"v-subtitle"},[this._v("\n        提供专属直播间、加速企业营销、获客、变现\n      ")])])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"v-info"},[i("a",{attrs:{href:"http://e.vhall.com/home/vhallapi/serviceterms"}},[this._v("服务条款")]),this._v(" | "),i("a",{attrs:{href:"http://e.vhall.com/home/vhallapi/copyright"}},[this._v("版权信息")]),this._v(" | "),i("a",{attrs:{href:""}},[this._v("京ICP备13004264号-4 京网文[2016] 2506-288号")])])}],!1,null,"57f2da88",null);r.options.__file="register.vue";i.default=r.exports}}]);