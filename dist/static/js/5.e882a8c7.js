(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{175:function(t,e,i){},176:function(t,e,i){"use strict";var s=i(5);const o={getCodeId:t=>s.a.ajax({method:"post",url:"/common/sms/get-captchaid",params:t}),getCode:t=>s.a.ajax({method:"post",url:"/common/sms/send-code",params:t})};e.a=o},180:function(t,e,i){"use strict";var s=i(5);const o={register:t=>s.a.ajax({method:"post",url:"/user/business-user/reg",params:t}),loginByPhone:t=>s.a.ajax({method:"post",url:"/user/business-user/mobile-login",params:t}),loginByAccount:t=>s.a.ajax({method:"post",url:"/user/business-user/account-login",params:t}),logOff:t=>s.a.ajax({method:"post",url:"/user/business-user/signout",params:t})};e.a=o},189:function(t,e,i){"use strict";var s=i(175);i.n(s).a},191:function(t,e,i){},234:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"input-form",staticStyle:{"margin-top":"5px"}},[i("div",{staticClass:"mu-text-field has-label",class:t.focusState},[i("div",{staticClass:"mu-text-field-content"},[i("div",{staticClass:"mu-text-field-label",class:t.float},[t._v(t._s(t.placeholder))]),t._v(" "),"checkbox"===t.inputType?i("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],ref:"myinput",staticClass:"mu-text-field-input",attrs:{autocomplete:"off",maxlength:t.maxLength,type:"checkbox"},domProps:{checked:Array.isArray(t.value)?t._i(t.value,null)>-1:t.value},on:{blur:function(e){t.onBlur(t.value)},focus:function(e){t.onFocus(t.value)},change:[function(e){var i=t.value,s=e.target,o=!!s.checked;if(Array.isArray(i)){var a=t._i(i,null);s.checked?a<0&&(t.value=i.concat([null])):a>-1&&(t.value=i.slice(0,a).concat(i.slice(a+1)))}else t.value=o},t.getVal]}}):"radio"===t.inputType?i("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],ref:"myinput",staticClass:"mu-text-field-input",attrs:{autocomplete:"off",maxlength:t.maxLength,type:"radio"},domProps:{checked:t._q(t.value,null)},on:{blur:function(e){t.onBlur(t.value)},focus:function(e){t.onFocus(t.value)},change:[function(e){t.value=null},t.getVal]}}):i("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],ref:"myinput",staticClass:"mu-text-field-input",attrs:{autocomplete:"off",maxlength:t.maxLength,type:t.inputType},domProps:{value:t.value},on:{blur:function(e){t.onBlur(t.value)},focus:function(e){t.onFocus(t.value)},change:t.getVal,input:function(e){e.target.composing||(t.value=e.target.value)}}}),t._v(" "),i("i",{directives:[{name:"show",rawName:"v-show",value:t.isPassword,expression:"isPassword"}],staticClass:"v-showpsd",on:{click:function(e){t.isShow()}}}),t._v(" "),t._m(0)])]),t._v(" "),t._t("default")],2)};s._withStripped=!0;var o={props:{inputType:String,isPassword:Boolean,inputValue:String,placeholder:String,code:String,maxLength:Number},data:()=>({value:"",focusState:"",float:"float"}),methods:{onFocus(t){this.focusState="focus-state",this.float="",this.$emit("inputFocus",t)},onBlur(t){this.float=""===t?"float":"",this.focusState=""},isShow(){let t="text"===this.inputType?"password":"text";this.$emit("changePassword",t)},getVal(t){this.$emit("update:inputValue",t.target.value)}},watch:{value:function(t){this.$emit("changeInput",t),this.onFocus(t)}}},a=(i(189),i(1)),n=Object(a.a)(o,s,[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("hr",{staticClass:"mu-text-field-line"}),this._v(" "),e("hr",{staticClass:"mu-text-field-focus-line"})])}],!1,null,"251908ec",null);n.options.__file="src\\pages\\login\\login-input.vue";e.a=n.exports},249:function(t,e,i){"use strict";var s=i(191);i.n(s).a},374:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"clearfix login-container"},[t._m(0),t._v(" "),i("div",{staticClass:"v-right"},[i("div",{staticClass:"v-content"},[i("p",{staticClass:"v-title"},[t._v("\n          欢迎登录微吼直播\n        ")]),t._v(" "),i("ul",{staticClass:"v-tabs clearfix"},t._l(t.items,function(e,s){return i("li",{key:s,on:{click:function(i){t.changeFunction(e)}}},[t._v(t._s(e))])})),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.isAccount,expression:"isAccount"}],staticClass:"v-account"},[t._v("\n          我是账号登录\n          "),i("com-input",{attrs:{inputType:"text",isPassword:!1,value:"",inputValue:t.userName,placeholder:"用户名/邮箱/手机号",maxLength:30},on:{"update:inputValue":function(e){t.userName=e},inputFocus:function(e){t.inputFocus()}}}),t._v(" "),i("com-input",{attrs:{inputType:t.type,isPassword:!0,inputValue:t.passWord,placeholder:"密码",maxLength:30},on:{"update:inputValue":function(e){t.passWord=e},changePassword:function(e){t.change(e)},inputFocus:function(e){t.inputFocus()}},model:{value:t.passWord,callback:function(e){t.passWord=e},expression:"passWord"}}),t._v(" "),i("div",{staticClass:"input-form v-label",staticStyle:{"margin-top":"-28px"},style:{opacity:t.accountOpacity}},[i("p",{staticClass:"v-error"},[t._v(t._s(t.accountError))])]),t._v(" "),i("div",{staticClass:"input-form v-forget",staticStyle:{"margin-top":"5px"}},[i("a",{staticClass:"fr clickTag",attrs:{href:"/forgot"}},[t._v("忘记密码")]),t._v(" "),[i("el-checkbox",{model:{value:t.remember,callback:function(e){t.remember=e},expression:"remember"}},[t._v("自动登录")])]],2),t._v(" "),i("el-button",{on:{click:t.accountSubmit}},[t._v("wo")])],1),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.isAccount,expression:"!isAccount"}],staticClass:"v-mobile"},[i("com-input",{attrs:{inputType:"text",isPassword:!1,value:"",inputValue:t.phone,placeholder:"手机号",maxLength:11},on:{"update:inputValue":function(e){t.phone=e},changeInput:t.checkPhone,inputFocus:function(e){t.inputFocus()}}}),t._v(" "),i("div",{attrs:{id:"captcha"}}),t._v(" "),i("com-input",{attrs:{inputType:"text",isPassword:!1,value:"",inputValue:t.code,placeholder:"动态密码",maxLength:6},on:{"update:inputValue":function(e){t.code=e},inputFocus:function(e){t.inputFocus()}}},[i("a",{staticClass:"v-getcode",class:{prohibit:t.isProhibit},attrs:{href:"javascript:;"},on:{click:function(e){t.getCode()}}},[t._v("获取动态码"),i("span",{directives:[{name:"show",rawName:"v-show",value:t.isSend,expression:"isSend"}],staticClass:"fr"},[t._v("("),i("em",[t._v(t._s(t.second))]),t._v("s)")])])]),t._v(" "),i("div",{staticClass:"input-form v-label",staticStyle:{"margin-top":"-28px"},style:{opacity:t.mobileOpacity}},[i("p",{staticClass:"v-error"},[t._v(t._s(t.mobileError))])]),t._v(" "),i("el-button",{on:{click:t.phoneSubmit}},[t._v("wo")])],1)])])])};s._withStripped=!0;var o=i(57),a=i.n(o),n=i(11),c=i.n(n),r=i(234),u=i(180),l=i(176),h=i(18),p=i(8),m={data:()=>({items:["account","mobile"],isAccount:!1,userName:"",passWord:"",phone:"",phoneStatus:!1,code:"",type:"password",key:"",isProhibit:!0,isSend:!1,second:60,timerr:"",phoneKey:"",isImg:!1,cap:null,accountOpacity:0,mobileOpacity:0,accountError:"",mobileError:"",remember:!1}),components:{"com-input":r.a},computed:Object(h.mapState)("login",{isLogin:t=>t.isLogin}),created(){l.a.getCodeId({}).then(t=>{if(200!==t.code)console.log(t.msg);else{let e=this;this.key=t.data,window.initNECaptcha({captchaId:e.key,element:"#captcha",mode:"float",width:260,onReady:function(t){},onVerify:function(t,i){i&&(e.phoneKey=i.validate,e.isImg=!0),t&&console.log(t)},onError:function(){}},function(t){e.cap=t})}})},mounted(){},watch:{phoneStatus:function(t){this.isGetCodePermission()},isImg:function(t){this.isGetCodePermission()}},methods:c()({},Object(h.mapMutations)("login",{setIsLogin:p.c}),{changeFunction(t){this.isAccount="account"===t},change(t){this.type=t},accountSubmit(){if(this.setIsLogin(1),this.checkAccountForm(),this.accountError)return!1;let t={account:this.userName,password:this.passWord,remember:this.remember?1:0};u.a.loginByAccount(t).then(t=>{200!==t.code?(this.isSend=!0,this.isProhibit=!0,clearInterval(this.timerr),this.timerr=setInterval(()=>{this.second--,this.second<=0&&(clearInterval(this.timerr),this.isSend=!1,this.isProhibit=!0,this.second=60,this.isImg=!1,this.phoneKey="",this.cap.refresh())},1e3),this.accountError=t.msg,this.accountOpacity=1):(sessionStorage.setItem("isLogin",!0),sessionStorage.setItem("userInfo",a()(t.data)),this.setIsLogin(1),console.log("账号登录成功"))})},phoneSubmit(){if(this.checkMobileForm(),this.mobileError)return!1;let t={mobile:this.phone,code:this.code,remember:0};u.a.loginByPhone(t).then(t=>{200!==t.code?(this.isSend=!1,this.isProhibit=!0,this.second=60,this.isImg=!1,this.phoneKey="",this.cap.refresh(),this.mobileError=t.msg,this.mobileOpacity=1):(sessionStorage.setItem("isLogin",!0),sessionStorage.setItem("userInfo",a()(t.data)),this.setIsLogin(1),console.log("动态码登录成功"),this.isSend=!0,this.isProhibit=!0,clearInterval(this.timerr),this.timerr=setInterval(()=>{this.second--,this.second<=0&&(clearInterval(this.timerr),this.isSend=!1,this.isProhibit=!0,this.second=60,this.isImg=!1,this.phoneKey="",this.cap.refresh())},1e3))})},getCode(){if(this.isProhibit)return!1;let t={mobile:this.phone,type:"BUSINESS_USER_LOGIN",captcha:this.phoneKey};l.a.getCode(t).then(t=>{200!==t.code?(this.mobileError=t.msg,this.mobileOpacity=1,clearInterval(this.timerr),this.isSend=!1,this.isProhibit=!0,this.second=60,this.isImg=!1,this.phoneKey="",this.cap.refresh()):(this.isSend=!0,this.isProhibit=!0,clearInterval(this.timerr),this.timerr=setInterval(()=>{this.second--,this.second<=0&&(clearInterval(this.timerr),this.isSend=!1,this.isProhibit=!0,this.second=60,this.isImg=!1,this.phoneKey="",this.cap.refresh())},1e3))})},isGetCodePermission(){this.isImg&&this.phoneStatus?this.isProhibit=!1:this.isProhibit=!0},checkPhone(t){/^1[3|4|5|6|7|8|9][0-9]\d{8}$/.test(parseInt(t))?this.phoneStatus=!0:this.phoneStatus=!1},checkAccountForm:function(t){return this.userName?this.passWord?(this.accountError="",void(this.accountOpacity=0)):(this.accountError="请输入密码",this.accountOpacity=1,!1):(this.accountError="请输入用户名/手机号/邮箱",this.accountOpacity=1,!1)},checkMobileForm:function(t){return this.phone?this.validPhone(this.phone)?this.code?(this.mobileError="",void(this.mobileOpacity=0)):(this.mobileError="请输入验证码",this.mobileOpacity=1,!1):(this.mobileError="请输入正确的手机号",this.mobileOpacity=1,!1):(this.mobileError="请输入手机号",this.mobileOpacity=1,!1)},inputFocus:function(){this.accountError="",this.accountOpacity=0,this.mobileError="",this.mobileOpacity=0},validEmail:function(t){return/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(t)},validPhone:function(t){return/^1[3|4|5|6|7|8|9][0-9]\d{8}$/.test(t)}})},d=(i(249),i(1)),v=Object(d.a)(m,s,[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"v-left"},[e("img",{staticClass:"v-logo",attrs:{src:"",alt:""}})])}],!1,null,"247e7dd8",null);v.options.__file="src\\pages\\login\\index.vue";e.default=v.exports}}]);
//# sourceMappingURL=5.e882a8c7.js.map