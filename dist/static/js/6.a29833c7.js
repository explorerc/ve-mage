(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{255:function(t,i,e){},375:function(t,i,e){"use strict";var s=e(255);e.n(s).a},580:function(t,i,e){"use strict";e.r(i);var s=e(74),n=e.n(s),o=e(11),c=e.n(o),a=e(351),r=e(246),u=e(240),h=e(51),l=e(16),p={data:function(){return{isAccount:!1,userName:"",passWord:"",phone:"",phoneStatus:!1,code:"",type:"password",key:"",isProhibit:!0,isSend:!1,second:60,timerr:"",phoneKey:"",isImg:!1,cap:null,accountOpacity:0,mobileOpacity:0,accountError:"",mobileError:"",remember:!1,isActive:!1}},components:{"com-input":a.a},computed:Object(h.c)("login",{isLogin:function(t){return t.isLogin}}),created:function(){var t=this;u.a.getCodeId({}).then(function(i){if(200!==i.code)console.log(i.msg);else{var e=t;t.key=i.data,window.initNECaptcha({captchaId:e.key,element:"#captcha",mode:"float",width:260,onReady:function(t){},onVerify:function(t,i){i&&(e.phoneKey=i.validate,e.isImg=!0),t&&console.log(t)},onError:function(){}},function(t){e.cap=t})}})},mounted:function(){},watch:{phoneStatus:function(t){this.isGetCodePermission()},isImg:function(t){this.isGetCodePermission()}},methods:c()({},Object(h.b)("login",{setIsLogin:l.c}),{changeFunction:function(t){"账号登录"===t?(this.isAccount=!0,this.isActive=!0):(this.isAccount=!1,this.isActive=!1)},change:function(t){this.type=t},accountSubmit:function(){var t=this;if(this.checkAccountForm(),this.accountError)return!1;var i={account:this.userName,password:this.passWord,remember:this.remember?1:0};r.a.loginByAccount(i).then(function(i){200!==i.code?(t.isSend=!0,t.isProhibit=!0,clearInterval(t.timerr),t.timerr=setInterval(function(){t.second--,t.second<=0&&(clearInterval(t.timerr),t.isSend=!1,t.isProhibit=!0,t.second=60,t.isImg=!1,t.phoneKey="",t.cap.refresh())},1e3),t.accountError=i.msg,t.accountOpacity=1):(sessionStorage.setItem("isLogin",!0),sessionStorage.setItem("accountInfo",n()(i.data)),t.setIsLogin(1),t.$router.replace("/setAccount"))})},phoneSubmit:function(){var t=this;if(this.checkMobileForm(),this.mobileError)return!1;var i={mobile:this.phone,code:this.code,remember:0};r.a.loginByPhone(i).then(function(i){200!==i.code?(t.isSend=!1,t.isProhibit=!0,t.second=60,t.isImg=!1,t.phoneKey="",t.cap.refresh(),t.mobileError=i.msg,t.mobileOpacity=1):(sessionStorage.setItem("isLogin",!0),t.setIsLogin(1),t.isSend=!0,t.isProhibit=!0,clearInterval(t.timerr),t.timerr=setInterval(function(){t.second--,t.second<=0&&(clearInterval(t.timerr),t.isSend=!1,t.isProhibit=!0,t.second=60,t.isImg=!1,t.phoneKey="",t.cap.refresh())},1e3),t.$router.replace("/setAccount"))})},getCode:function(){var t=this;if(this.isProhibit)return!1;var i={mobile:this.phone,type:"BUSINESS_USER_LOGIN",captcha:this.phoneKey};u.a.getCode(i).then(function(i){200!==i.code?(t.mobileError=i.msg,t.mobileOpacity=1,clearInterval(t.timerr),t.isSend=!1,t.isProhibit=!0,t.second=60,t.isImg=!1,t.phoneKey="",t.cap.refresh()):(t.isSend=!0,t.isProhibit=!0,clearInterval(t.timerr),t.timerr=setInterval(function(){t.second--,t.second<=0&&(clearInterval(t.timerr),t.isSend=!1,t.isProhibit=!0,t.second=60,t.isImg=!1,t.phoneKey="",t.cap.refresh())},1e3))})},isGetCodePermission:function(){this.isImg&&this.phoneStatus?this.isProhibit=!1:this.isProhibit=!0},checkPhone:function(t){/^1[3|4|5|6|7|8|9][0-9]\d{8}$/.test(parseInt(t))?this.phoneStatus=!0:this.phoneStatus=!1},checkAccountForm:function(t){return this.userName?this.passWord?(this.accountError="",void(this.accountOpacity=0)):(this.accountError="请输入密码",this.accountOpacity=1,!1):(this.accountError="请输入用户名/手机号/邮箱",this.accountOpacity=1,!1)},checkMobileForm:function(t){return this.phone?this.validPhone(this.phone)?this.code?(this.mobileError="",void(this.mobileOpacity=0)):(this.mobileError="请输入验证码",this.mobileOpacity=1,!1):(this.mobileError="请输入正确的手机号",this.mobileOpacity=1,!1):(this.mobileError="请输入手机号",this.mobileOpacity=1,!1)},inputFocus:function(){this.accountError="",this.accountOpacity=0,this.mobileError="",this.mobileOpacity=0},validEmail:function(t){return/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(t)},validPhone:function(t){return/^1[3|4|5|6|7|8|9][0-9]\d{8}$/.test(t)}})},v=(e(375),e(1)),m=Object(v.a)(p,function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"clearfix login-container"},[t._m(0),t._v(" "),e("div",{staticClass:"v-right"},[e("div",{staticClass:"v-content"},[e("p",{staticClass:"v-title"},[t._v("\n          欢迎登录微吼直播\n        ")]),t._v(" "),e("ul",{staticClass:"v-tabs clearfix"},[e("li",{class:{active:t.isActive},on:{click:function(i){t.changeFunction("账号登录")}}},[t._v("账号登录")]),t._v(" "),e("span",[t._v("|")]),t._v(" "),e("li",{class:{active:!t.isActive},on:{click:function(i){t.changeFunction("手机登录")}}},[t._v("手机登录")])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.isAccount,expression:"isAccount"}],staticClass:"v-account"},[e("com-input",{attrs:{inputType:"text",isPassword:!1,value:"",inputValue:t.userName,placeholder:"用户名/邮箱/手机号",maxLength:30},on:{"update:inputValue":function(i){t.userName=i},inputFocus:function(i){t.inputFocus()}}}),t._v(" "),e("com-input",{attrs:{inputType:t.type,isPassword:!0,inputValue:t.passWord,placeholder:"密码",maxLength:30},on:{"update:inputValue":function(i){t.passWord=i},changePassword:function(i){t.change(i)},inputFocus:function(i){t.inputFocus()}},model:{value:t.passWord,callback:function(i){t.passWord=i},expression:"passWord"}}),t._v(" "),e("div",{staticClass:"input-form v-label",staticStyle:{"margin-top":"-28px"},style:{opacity:t.accountOpacity}},[e("p",{staticClass:"v-error"},[t._v(t._s(t.accountError))])]),t._v(" "),e("div",{staticClass:"input-form v-forget",staticStyle:{"margin-top":"5px"}},[e("a",{staticClass:"fr clickTag",attrs:{href:"/forgot"}},[t._v("忘记密码")]),t._v(" "),[e("el-checkbox",{model:{value:t.remember,callback:function(i){t.remember=i},expression:"remember"}},[t._v("自动登录")])]],2),t._v(" "),e("button",{staticClass:"primary-button",on:{click:t.accountSubmit}},[t._v("提交")])],1),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.isAccount,expression:"!isAccount"}],staticClass:"v-mobile"},[e("com-input",{attrs:{inputType:"text",isPassword:!1,value:"",inputValue:t.phone,placeholder:"手机号",maxLength:11},on:{"update:inputValue":function(i){t.phone=i},changeInput:t.checkPhone,inputFocus:function(i){t.inputFocus()}}}),t._v(" "),e("div",{attrs:{id:"captcha"}}),t._v(" "),e("com-input",{attrs:{inputType:"text",isPassword:!1,value:"",inputValue:t.code,placeholder:"动态密码",maxLength:6},on:{"update:inputValue":function(i){t.code=i},inputFocus:function(i){t.inputFocus()}}},[e("a",{staticClass:"v-getcode",class:{prohibit:t.isProhibit},attrs:{href:"javascript:;"},on:{click:function(i){t.getCode()}}},[t._v("获取动态码"),e("span",{directives:[{name:"show",rawName:"v-show",value:t.isSend,expression:"isSend"}],staticClass:"fr"},[t._v("("),e("em",[t._v(t._s(t.second))]),t._v("s)")])])]),t._v(" "),e("div",{staticClass:"input-form v-label",staticStyle:{"margin-top":"-28px"},style:{opacity:t.mobileOpacity}},[e("p",{staticClass:"v-error"},[t._v(t._s(t.mobileError))])]),t._v(" "),e("button",{staticClass:"primary-button",on:{click:t.phoneSubmit}},[t._v("提交")])],1)]),t._v(" "),t._m(1)])])},[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"v-left"},[i("p",{staticClass:"v-logo"},[this._v("\n        微吼知客\n      ")]),this._v(" "),i("div",{staticClass:"v-content"},[i("p",{staticClass:"v-title"},[this._v("\n          微吼知客\n        ")]),this._v(" "),i("p",{staticClass:"v-subtitle"},[this._v("\n          提供专属直播间、加速企业营销、获客、变现\n        ")])])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"v-info"},[i("a",{attrs:{href:"http://e.vhall.com/home/vhallapi/serviceterms"}},[this._v("服务条款")]),this._v(" | "),i("a",{attrs:{href:"http://e.vhall.com/home/vhallapi/copyright"}},[this._v("版权信息")]),this._v(" | "),i("a",{attrs:{href:""}},[this._v("京ICP备13004264号-4 京网文[2016] 2506-288号")])])}],!1,null,"dd2b2a24",null);m.options.__file="index.vue";i.default=m.exports}}]);