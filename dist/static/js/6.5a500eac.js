(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{511:function(t,i,e){"use strict";e.r(i);var s=[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"v-left"},[i("img",{staticClass:"v-logo",attrs:{src:e(722)}}),this._v(" "),i("div",{staticClass:"v-content"},[i("p",{staticClass:"v-title"},[this._v("\n        智能营销平台\n      ")]),this._v(" "),i("p",{staticClass:"v-subtitle"},[this._v("\n        全渠道精准引流 直播实时互动 用户智能化管理 数据驱动增长\n      ")]),this._v(" "),i("img",{attrs:{src:e(723),alt:""}})])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"v-info"},[i("a",{attrs:{href:"http://e.vhall.com/home/vhallapi/serviceterms"}},[this._v("服务条款")]),this._v(" | "),i("a",{attrs:{href:"http://e.vhall.com/home/vhallapi/copyright"}},[this._v("版权信息")]),this._v(" | "),i("a",{attrs:{href:""}},[this._v("京ICP备13004264号-4 京网文[2016] 2506-288号")])])}],n=e(30),o=e.n(n),c=e(735),a=e(98),r=e(97),h=e(15),u={data:function(){return{isAccount:!1,userName:"",passWord:"",phone:"",phoneStatus:!1,code:"",type:"password",key:"",isProhibit:!0,isSend:!1,second:60,timerr:"",phoneKey:"",isImg:!1,cap:null,accountOpacity:0,mobileOpacity:0,accountError:"",mobileError:"",remember:!1,isActive:!1,isGoMaster:!1,shenQingShow:!1,shenHeiShow:!1}},components:{"com-input":c.a},computed:Object(r.c)("login",{isLogin:function(t){return t.isLogin},accountInfo:function(t){return t.accountInfo}}),created:function(){var t=this;this.$config({handlers:!0}).$get(a.a.GET_CAPTCHA_ID).then(function(i){var e=t;t.key=i.data,window.initNECaptcha({captchaId:e.key,element:"#captcha",width:260,onReady:function(t){},onVerify:function(t,i){i&&(e.phoneKey=i.validate,e.isImg=!0),t&&console.log(t)},onError:function(){}},function(t){e.cap=t})}).catch(function(t){console.log(t.msg)})},destroyed:function(){clearInterval(this.timerr)},mounted:function(){},watch:{phoneStatus:function(t){this.isGetCodePermission(!0)},isImg:function(t){this.isGetCodePermission()}},methods:o()({},Object(r.b)("login",{setIsLogin:h.f,setAccountInfo:h.a}),{changeFunction:function(t){"账号登录"===t?(this.isAccount=!0,this.isActive=!0):(this.isAccount=!1,this.isActive=!1)},change:function(t){this.type=t},accountSubmit:function(){var t=this;if(this.checkAccountForm(),this.accountError)return!1;var i={account:this.userName,password:this.passWord,remember:this.remember?1:0};this.$config({handlers:!0}).$post(a.a.POST_LOGIN_ACCOUNT,i).then(function(i){sessionStorage.setItem("isLogin",!0),t.$get(a.a.GET_ACCOUNT).then(function(i){t.setAccountInfo(i.data)}),t.setIsLogin(1),sessionStorage.getItem("isGoMaster")?t.$router.go(-1):(sessionStorage.removeItem("isGoMaster"),t.$router.replace("/liveMager/list"))}).catch(function(i){10013===i.code?t.shenQingShow=!0:10014===i.code?t.shenHeiShow=!0:t.accountError=i.msg,t.isAccount||(t.isSend=!0,t.isProhibit=!0,clearInterval(t.timerr),t.timerr=setInterval(function(){t.second--,t.second<=0&&(clearInterval(t.timerr),t.isSend=!1,t.isProhibit=!0,t.second=60,t.isImg=!1,t.phoneKey="",t.cap.refresh())},1e3)),t.accountOpacity=1})},phoneSubmit:function(){var t=this;if(this.checkMobileForm(),this.mobileError)return!1;var i={mobile:this.phone,code:this.code,remember:0};this.$config({handlers:!0}).$post(a.a.POST_LOGIN_PHONE,i).then(function(i){sessionStorage.setItem("isLogin",!0),t.$get(a.a.GET_ACCOUNT).then(function(i){t.setAccountInfo(i.data)}),t.setIsLogin(1),t.isSend=!0,t.isProhibit=!0,clearInterval(t.timerr),t.timerr=setInterval(function(){t.second--,t.second<=0&&(clearInterval(t.timerr),t.isSend=!1,t.isProhibit=!0,t.second=60,t.isImg=!1,t.phoneKey="",t.cap.refresh())},1e3),sessionStorage.getItem("isGoMaster")?t.$router.go(-1):(sessionStorage.removeItem("isGoMaster"),t.$router.replace("/liveMager/list"))}).catch(function(i){10013===i.code?t.shenQingShow=!0:10014===i.code?t.shenHeiShow=!0:t.mobileError=i.msg,t.isSend=!1,t.isProhibit=!0,t.second=60,t.isImg=!1,t.phoneKey="",t.cap.refresh(),t.mobileOpacity=1})},sqHandler:function(t){this.shenQingShow=!1,"confirm"===t.action&&this.$router.push("/register")},getCode:function(){var t=this;if(this.isProhibit)return!1;var i={mobile:this.phone,type:"BUSINESS_USER_LOGIN",captcha:this.phoneKey};this.$config({handlers:!0}).$get(a.a.GET_CODE,i).then(function(i){t.isSend=!0,t.isProhibit=!0,clearInterval(t.timerr),t.timerr=setInterval(function(){t.second--,t.second<=0&&(clearInterval(t.timerr),t.isSend=!1,t.isProhibit=!0,t.second=60,t.isImg=!1,t.phoneKey="",t.cap.refresh())},1e3)}).catch(function(i){10050===i.code?t.mobileError="验证码输入过于频繁":10013===i.code?t.shenQingShow=!0:10014===i.code?t.shenHeiShow=!0:t.mobileError=i.msg,t.mobileOpacity=1,clearInterval(t.timerr),t.isSend=!1,t.isProhibit=!0,t.second=60,t.isImg=!1,t.phoneKey="",t.cap.refresh()})},isGetCodePermission:function(t){this.isImg&&this.phoneStatus?(this.isProhibit=!1,this.second>0&&(this.isSend=!1,this.isProhibit=!1,this.second=60,this.mobileOpacity=1,clearInterval(this.timerr),t&&(this.isImg=!1,this.phoneKey="",this.cap.refresh()))):this.isProhibit=!0},checkPhone:function(t){/^1[3|4|5|6|7|8|9][0-9]\d{8}$/.test(parseInt(t))?this.phoneStatus=!0:this.phoneStatus=!1},checkAccountForm:function(t){return this.userName?this.passWord?(this.accountError="",void(this.accountOpacity=0)):(this.accountError="请输入密码",this.accountOpacity=1,!1):(this.accountError="请输入用户名/手机号/邮箱",this.accountOpacity=1,!1)},checkMobileForm:function(t){return this.phone?this.validPhone(this.phone)?this.code?(this.mobileError="",void(this.mobileOpacity=0)):(this.mobileError="请输入验证码",this.mobileOpacity=1,!1):(this.mobileError="请输入正确的手机号",this.mobileOpacity=1,!1):(this.mobileError="请输入手机号",this.mobileOpacity=1,!1)},inputFocus:function(){this.accountError="",this.accountOpacity=0,this.mobileError="",this.mobileOpacity=0},validEmail:function(t){return/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(t)},validPhone:function(t){return/^1[3|4|5|6|7|8|9][0-9]\d{8}$/.test(t)}})},l=(e(760),e(1)),p=Object(l.a)(u,function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"clearfix login-container"},[t._m(0),t._v(" "),e("div",{staticClass:"v-right"},[e("div",{staticClass:"v-content"},[e("p",{staticClass:"v-title"},[t._v("\n        欢迎登录微吼知客\n      ")]),t._v(" "),e("ul",{staticClass:"v-tabs clearfix"},[e("li",{class:{active:t.isActive},on:{click:function(i){t.changeFunction("账号登录")}}},[t._v("账号登录\n        ")]),t._v(" "),e("span",[t._v("|")]),t._v(" "),e("li",{class:{active:!t.isActive},on:{click:function(i){t.changeFunction("手机登录")}}},[t._v("手机登录\n        ")])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.isAccount,expression:"isAccount"}],staticClass:"v-account"},[e("com-input",{attrs:{inputType:"text",isPassword:!1,value:"",inputValue:t.userName,placeholder:"用户名/邮箱/手机号",maxLength:30},on:{"update:inputValue":function(i){t.userName=i},inputFocus:function(i){t.inputFocus()}}}),t._v(" "),e("com-input",{attrs:{inputType:t.type,isPassword:!0,inputValue:t.passWord,placeholder:"密码",maxLength:30},on:{"update:inputValue":function(i){t.passWord=i},changePassword:function(i){t.change(i)},inputFocus:function(i){t.inputFocus()},enterClick:t.accountSubmit},model:{value:t.passWord,callback:function(i){t.passWord=i},expression:"passWord"}}),t._v(" "),e("div",{staticClass:"input-form v-label",staticStyle:{"margin-top":"-28px"},style:{opacity:t.accountOpacity}},[e("p",{staticClass:"v-error"},[t._v(t._s(t.accountError))])]),t._v(" "),e("div",{staticClass:"input-form v-forget",staticStyle:{"margin-top":"5px"}},[e("a",{staticClass:"fr clickTag",attrs:{href:"/forgot"}},[t._v("忘记密码")]),t._v(" "),[e("el-checkbox",{model:{value:t.remember,callback:function(i){t.remember=i},expression:"remember"}},[t._v("自动登录")])]],2),t._v(" "),e("button",{staticClass:"primary-button",on:{click:t.accountSubmit}},[t._v("提交\n        ")]),t._v(" "),e("router-link",{staticClass:"v-register",attrs:{to:"/register"}},[t._v("申请免费试用")])],1),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.isAccount,expression:"!isAccount"}],staticClass:"v-mobile"},[e("com-input",{attrs:{inputType:"text",isPassword:!1,value:"",inputValue:t.phone,placeholder:"手机号",maxLength:11},on:{"update:inputValue":function(i){t.phone=i},changeInput:t.checkPhone,inputFocus:function(i){t.inputFocus()}}}),t._v(" "),e("div",{attrs:{id:"captcha"}}),t._v(" "),e("com-input",{attrs:{inputType:"text",isPassword:!1,value:"",inputValue:t.code,placeholder:"验证码",maxLength:6},on:{"update:inputValue":function(i){t.code=i},inputFocus:function(i){t.inputFocus()},enterClick:t.phoneSubmit}},[e("a",{staticClass:"v-getcode",class:{prohibit:t.isProhibit},attrs:{href:"javascript:;"},on:{click:function(i){t.getCode()}}},[t._v("获取验证码"),e("span",{directives:[{name:"show",rawName:"v-show",value:t.isSend,expression:"isSend"}],staticClass:"fr"},[t._v("("),e("em",[t._v(t._s(t.second))]),t._v("s)")])])]),t._v(" "),e("div",{staticClass:"input-form v-label",staticStyle:{"margin-top":"-28px"},style:{opacity:t.mobileOpacity}},[e("p",{staticClass:"v-error"},[t._v(t._s(t.mobileError))])]),t._v(" "),e("button",{staticClass:"primary-button",on:{click:t.phoneSubmit}},[t._v("提交\n        ")]),t._v(" "),e("router-link",{staticClass:"v-register",attrs:{to:"/register"}},[t._v("申请免费试用")])],1)]),t._v(" "),t._m(1)]),t._v(" "),t.shenQingShow?e("message-box",{attrs:{header:"提示",confirmText:"现在申请",cancelText:"知道了"},on:{handleClick:t.sqHandler}},[e("div",{staticStyle:{"text-align":"center",padding:"20px 0"}},[e("span",{staticStyle:{display:"block"}},[t._v("您尚未开通产品试用资格")]),t._v(" "),e("span",{staticStyle:{display:"block"}},[t._v("请在线申请试用或联系客服400-888-9970")])])]):t._e(),t._v(" "),t.shenHeiShow?e("message-box",{attrs:{header:"提示",cancelText:"知道了"},on:{handleClick:function(i){t.shenHeiShow=!1}}},[e("div",{staticStyle:{"text-align":"center",padding:"20px 0"}},[e("span",{staticStyle:{display:"block"}},[t._v("您的申请正在审核中，请耐心等待")]),t._v(" "),e("span",{staticStyle:{display:"block"}},[t._v("如有问题请拨打400-888-9970客服热线")])])]):t._e()],1)},s,!1,null,"3fcaf25a",null);p.options.__file="index.vue";i.default=p.exports},578:function(t,i,e){},760:function(t,i,e){"use strict";var s=e(578);e.n(s).a}}]);