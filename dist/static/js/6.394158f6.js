(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{470:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"clearfix login-container"},[t.defaultImg?s("div",{staticClass:"v-left"},[s("div",{staticClass:"v-content v-user",style:"background-image:url("+t.defaultImg+")"},[s("div",{staticClass:"v-center"},[s("p",{staticClass:"v-title"},[t._v("\n          "+t._s(this.userDate.title)+"\n        ")]),t._v(" "),s("p",{staticClass:"v-subtitle"},[t._v("\n          "+t._s(this.userDate.subname)+"\n        ")]),t._v(" "),""!==t.userDate.btnName?s("a",{staticClass:"v-user-btn",attrs:{href:this.userDate.btnUrl,target:"_blank"}},[t._v(t._s(this.userDate.btnName))]):t._e()])])]):s("div",{staticClass:"v-left v-bg"},[s("img",{staticClass:"v-logo",attrs:{src:i(713)}}),t._v(" "),t._m(0)]),t._v(" "),s("div",{staticClass:"v-right"},[s("div",{staticClass:"v-content"},[s("p",{staticClass:"v-title"},[t._v("\n        欢迎登录微吼知客\n      ")]),t._v(" "),s("ul",{staticClass:"v-tabs clearfix"},[s("li",{class:{active:t.isActive},on:{click:function(e){t.changeFunction("账号登录")}}},[t._v("账号登录\n        ")]),t._v(" "),s("span",[t._v("|")]),t._v(" "),s("li",{class:{active:!t.isActive},on:{click:function(e){t.changeFunction("手机登录")}}},[t._v("手机登录\n        ")])]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.isAccount,expression:"isAccount"}],staticClass:"v-account"},[s("com-input",{attrs:{inputType:"text",isPassword:!1,value:"",inputValue:t.userName,placeholder:"用户名/邮箱/手机号",maxLength:30},on:{"update:inputValue":function(e){t.userName=e},inputFocus:function(e){t.inputFocus()}}}),t._v(" "),s("com-input",{attrs:{inputType:t.type,isPassword:!0,inputValue:t.passWord,placeholder:"密码",maxLength:30},on:{"update:inputValue":function(e){t.passWord=e},changePassword:function(e){t.change(e)},inputFocus:function(e){t.inputFocus()},enterClick:t.accountSubmit},model:{value:t.passWord,callback:function(e){t.passWord=e},expression:"passWord"}}),t._v(" "),s("div",{staticClass:"input-form v-label",staticStyle:{"margin-top":"-28px"},style:{opacity:t.accountOpacity}},[s("p",{staticClass:"v-error"},[t._v(t._s(t.accountError))])]),t._v(" "),s("div",{staticClass:"input-form v-forget",staticStyle:{"margin-top":"5px"}},[s("a",{staticClass:"fr clickTag",attrs:{href:"/forgot"}},[t._v("忘记密码")]),t._v(" "),[s("el-checkbox",{model:{value:t.remember,callback:function(e){t.remember=e},expression:"remember"}},[t._v("自动登录")])]],2),t._v(" "),s("button",{staticClass:"primary-button",on:{click:t.accountSubmit}},[t._v("提交\n        ")]),t._v(" "),s("router-link",{staticClass:"v-register",attrs:{to:"/register"}},[t._v("申请免费试用")])],1),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:!t.isAccount,expression:"!isAccount"}],staticClass:"v-mobile"},[s("com-input",{attrs:{inputType:"text",isPassword:!1,value:"",inputValue:t.phone,placeholder:"手机号",maxLength:11},on:{"update:inputValue":function(e){t.phone=e},changeInput:t.checkPhone,inputFocus:function(e){t.inputFocus()}}}),t._v(" "),s("div",{attrs:{id:"captcha"}}),t._v(" "),s("com-input",{attrs:{inputType:"text",isPassword:!1,value:"",inputValue:t.code,placeholder:"验证码",maxLength:6},on:{"update:inputValue":function(e){t.code=e},inputFocus:function(e){t.inputFocus()},enterClick:t.phoneSubmit}},[s("a",{staticClass:"v-getcode",class:{prohibit:t.isProhibit},attrs:{href:"javascript:;"},on:{click:function(e){t.getCode()}}},[t._v("获取验证码"),s("span",{directives:[{name:"show",rawName:"v-show",value:t.isSend,expression:"isSend"}],staticClass:"fr"},[t._v("("),s("em",[t._v(t._s(t.second))]),t._v("s)")])])]),t._v(" "),s("div",{staticClass:"input-form v-label",staticStyle:{"margin-top":"-28px"},style:{opacity:t.mobileOpacity}},[s("p",{staticClass:"v-error"},[t._v(t._s(t.mobileError))])]),t._v(" "),s("button",{staticClass:"primary-button",on:{click:t.phoneSubmit}},[t._v("提交\n        ")]),t._v(" "),s("router-link",{staticClass:"v-register",attrs:{to:"/register"}},[t._v("申请免费试用")])],1)]),t._v(" "),t._m(1)]),t._v(" "),t.shenQingShow?s("message-box",{attrs:{header:"提示",confirmText:"现在申请",cancelText:"知道了"},on:{handleClick:t.sqHandler}},[s("div",{staticStyle:{padding:"20px 0"}},[s("span",{staticStyle:{display:"block"}},[t._v("您尚未开通产品试用资格")]),t._v(" "),s("span",{staticStyle:{display:"block"}},[t._v("请在线申请试用或联系客服400-888-9970")])])]):t._e(),t._v(" "),t.shenHeiShow?s("message-box",{attrs:{header:"提示",cancelText:"知道了"},on:{handleClick:function(e){t.shenHeiShow=!1}}},[s("div",{staticStyle:{padding:"20px 0"}},[s("span",{staticStyle:{display:"block"}},[t._v("您的申请正在审核中，请耐心等待")]),t._v(" "),s("span",{staticStyle:{display:"block"}},[t._v("如有问题请拨打400-888-9970客服热线")])])]):t._e()],1)},n=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"v-content"},[e("p",{staticClass:"v-title"},[this._v("\n        智能营销平台\n      ")]),this._v(" "),e("p",{staticClass:"v-subtitle"},[this._v("\n        全渠道精准引流 直播实时互动 用户智能化管理 数据驱动增长\n      ")]),this._v(" "),e("img",{attrs:{src:i(714),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"v-info"},[e("a",{attrs:{href:"http://e.vhall.com/home/vhallapi/serviceterms"}},[this._v("服务条款")]),this._v(" | "),e("a",{attrs:{href:"http://e.vhall.com/home/vhallapi/copyright"}},[this._v("版权信息")]),this._v(" | "),e("a",{attrs:{href:""}},[this._v("京ICP备13004264号-4 京网文[2016] 2506-288号")])])}];s._withStripped=!0;var o=i(26),a=i.n(o),c=i(725),r=i(94),h=i(93),u=i(15),l={data:function(){return{isAccount:!1,userName:"",passWord:"",phone:"",phoneStatus:!1,code:"",type:"password",key:"",isProhibit:!0,isSend:!1,second:60,timerr:"",phoneKey:"",isImg:!1,cap:null,accountOpacity:0,mobileOpacity:0,accountError:"",mobileError:"",remember:!1,isActive:!1,isGoMaster:!1,shenQingShow:!1,shenHeiShow:!1,userDate:{img:"",title:"",subname:"",btnName:"",btnUrl:""}}},components:{"com-input":c.a},computed:a()({},Object(h.c)("login",{isLogin:function(t){return t.isLogin},accountInfo:function(t){return t.accountInfo}}),{defaultImg:function(){return this.userDate.img?"https://www.vhall.com"+this.userDate.img:""}}),created:function(){var t=this;this.$config({handlers:!0}).$get(r.a.GET_CAPTCHA_ID).then(function(e){var i=t;t.key=e.data,window.initNECaptcha({captchaId:i.key,element:"#captcha",width:260,onReady:function(t){},onVerify:function(t,e){e&&(i.phoneKey=e.validate,i.isImg=!0),t&&console.log(t)},onError:function(){}},function(t){i.cap=t})}).catch(function(t){console.log(t.msg)}),this.$config({handlers:!0}).$get(r.a.GET_LOGIN_DATE).then(function(e){t.userDate.img=e.data.image,t.userDate.title=e.data.title,t.userDate.subname=e.data.description,t.userDate.btnName=e.data.subname,t.userDate.btnUrl=e.data.urlname}).catch(function(t){console.log(t.msg)})},destroyed:function(){clearInterval(this.timerr)},mounted:function(){},watch:{phoneStatus:function(t){this.isGetCodePermission(!0)},isImg:function(t){this.isGetCodePermission()}},methods:a()({},Object(h.b)("login",{setIsLogin:u.f,setAccountInfo:u.a}),{changeFunction:function(t){"账号登录"===t?(this.isAccount=!0,this.isActive=!0):(this.isAccount=!1,this.isActive=!1)},change:function(t){this.type=t},accountSubmit:function(){var t=this;if(this.checkAccountForm(),this.accountError)return!1;var e={account:this.userName,password:this.passWord,remember:this.remember?1:0};this.$config({handlers:!0}).$post(r.a.POST_LOGIN_ACCOUNT,e).then(function(e){sessionStorage.setItem("isLogin",!0),t.$get(r.a.GET_ACCOUNT).then(function(e){t.setAccountInfo(e.data)}),t.setIsLogin(1),sessionStorage.getItem("isGoMaster")?t.$router.go(-1):(sessionStorage.removeItem("isGoMaster"),t.$router.replace("/liveMager/list"))}).catch(function(e){10013===e.code?t.shenQingShow=!0:10014===e.code?t.shenHeiShow=!0:t.accountError=e.msg,t.isAccount||(t.isSend=!0,t.isProhibit=!0,clearInterval(t.timerr),t.timerr=setInterval(function(){t.second--,t.second<=0&&(clearInterval(t.timerr),t.isSend=!1,t.isProhibit=!0,t.second=60,t.isImg=!1,t.phoneKey="",t.cap.refresh())},1e3)),t.accountOpacity=1})},phoneSubmit:function(){var t=this;if(this.checkMobileForm(),this.mobileError)return!1;var e={mobile:this.phone,code:this.code,remember:0};this.$config({handlers:!0}).$post(r.a.POST_LOGIN_PHONE,e).then(function(e){sessionStorage.setItem("isLogin",!0),t.$get(r.a.GET_ACCOUNT).then(function(e){t.setAccountInfo(e.data)}),t.setIsLogin(1),t.isSend=!0,t.isProhibit=!0,clearInterval(t.timerr),t.timerr=setInterval(function(){t.second--,t.second<=0&&(clearInterval(t.timerr),t.isSend=!1,t.isProhibit=!0,t.second=60,t.isImg=!1,t.phoneKey="",t.cap.refresh())},1e3),sessionStorage.getItem("isGoMaster")?t.$router.go(-1):(sessionStorage.removeItem("isGoMaster"),t.$router.replace("/liveMager/list"))}).catch(function(e){10013===e.code?t.shenQingShow=!0:10014===e.code?t.shenHeiShow=!0:t.mobileError=e.msg,t.isSend=!1,t.isProhibit=!0,t.second=60,t.isImg=!1,t.phoneKey="",t.cap.refresh(),t.mobileOpacity=1})},sqHandler:function(t){this.shenQingShow=!1,"confirm"===t.action&&this.$router.push("/register")},getCode:function(){var t=this;if(this.isProhibit)return!1;var e={mobile:this.phone,type:"BUSINESS_USER_LOGIN",captcha:this.phoneKey};this.$config({handlers:!0}).$get(r.a.GET_CODE,e).then(function(e){t.isSend=!0,t.isProhibit=!0,clearInterval(t.timerr),t.timerr=setInterval(function(){t.second--,t.second<=0&&(clearInterval(t.timerr),t.isSend=!1,t.isProhibit=!0,t.second=60,t.isImg=!1,t.phoneKey="",t.cap.refresh())},1e3)}).catch(function(e){10050===e.code?t.mobileError="验证码输入过于频繁":10013===e.code?t.shenQingShow=!0:10014===e.code?t.shenHeiShow=!0:t.mobileError=e.msg,t.mobileOpacity=1,clearInterval(t.timerr),t.isSend=!1,t.isProhibit=!0,t.second=60,t.isImg=!1,t.phoneKey="",t.cap.refresh()})},isGetCodePermission:function(t){this.isImg&&this.phoneStatus?(this.isProhibit=!1,this.second>0&&(this.isSend=!1,this.isProhibit=!1,this.second=60,this.mobileOpacity=1,clearInterval(this.timerr),t&&(this.isImg=!1,this.phoneKey="",this.cap.refresh()))):this.isProhibit=!0},checkPhone:function(t){/^1[3|4|5|6|7|8|9][0-9]\d{8}$/.test(parseInt(t))?this.phoneStatus=!0:this.phoneStatus=!1},checkAccountForm:function(t){return this.userName?this.passWord?(this.accountError="",void(this.accountOpacity=0)):(this.accountError="请输入密码",this.accountOpacity=1,!1):(this.accountError="请输入用户名/手机号/邮箱",this.accountOpacity=1,!1)},checkMobileForm:function(t){return this.phone?this.validPhone(this.phone)?this.code?(this.mobileError="",void(this.mobileOpacity=0)):(this.mobileError="请输入验证码",this.mobileOpacity=1,!1):(this.mobileError="请输入正确的手机号",this.mobileOpacity=1,!1):(this.mobileError="请输入手机号",this.mobileOpacity=1,!1)},inputFocus:function(){this.accountError="",this.accountOpacity=0,this.mobileError="",this.mobileOpacity=0},validEmail:function(t){return/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(t)},validPhone:function(t){return/^1[3|4|5|6|7|8|9][0-9]\d{8}$/.test(t)}})},p=(i(751),i(1)),v=Object(p.a)(l,s,n,!1,null,"247e7dd8",null);v.options.__file="src/pages/login/index.vue";e.default=v.exports},566:function(t,e,i){},751:function(t,e,i){"use strict";var s=i(566);i.n(s).a}}]);
//# sourceMappingURL=6.394158f6.js.map