(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{175:function(t,e,s){},176:function(t,e,s){"use strict";var i=s(5);const o={getCodeId:t=>i.a.ajax({method:"post",url:"/common/sms/get-captchaid",params:t}),getCode:t=>i.a.ajax({method:"post",url:"/common/sms/send-code",params:t})};e.a=o},180:function(t,e,s){"use strict";var i=s(5);const o={register:t=>i.a.ajax({method:"post",url:"/user/business-user/reg",params:t}),loginByPhone:t=>i.a.ajax({method:"post",url:"/user/business-user/mobile-login",params:t}),loginByAccount:t=>i.a.ajax({method:"post",url:"/user/business-user/account-login",params:t}),logOff:t=>i.a.ajax({method:"post",url:"/user/business-user/signout",params:t})};e.a=o},189:function(t,e,s){"use strict";var i=s(175);s.n(i).a},193:function(t,e,s){},234:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"input-form",staticStyle:{"margin-top":"5px"}},[s("div",{staticClass:"mu-text-field has-label",class:t.focusState},[s("div",{staticClass:"mu-text-field-content"},[s("div",{staticClass:"mu-text-field-label",class:t.float},[t._v(t._s(t.placeholder))]),t._v(" "),"checkbox"===t.inputType?s("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],ref:"myinput",staticClass:"mu-text-field-input",attrs:{autocomplete:"off",maxlength:t.maxLength,type:"checkbox"},domProps:{checked:Array.isArray(t.value)?t._i(t.value,null)>-1:t.value},on:{blur:function(e){t.onBlur(t.value)},focus:function(e){t.onFocus(t.value)},change:[function(e){var s=t.value,i=e.target,o=!!i.checked;if(Array.isArray(s)){var a=t._i(s,null);i.checked?a<0&&(t.value=s.concat([null])):a>-1&&(t.value=s.slice(0,a).concat(s.slice(a+1)))}else t.value=o},t.getVal]}}):"radio"===t.inputType?s("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],ref:"myinput",staticClass:"mu-text-field-input",attrs:{autocomplete:"off",maxlength:t.maxLength,type:"radio"},domProps:{checked:t._q(t.value,null)},on:{blur:function(e){t.onBlur(t.value)},focus:function(e){t.onFocus(t.value)},change:[function(e){t.value=null},t.getVal]}}):s("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],ref:"myinput",staticClass:"mu-text-field-input",attrs:{autocomplete:"off",maxlength:t.maxLength,type:t.inputType},domProps:{value:t.value},on:{blur:function(e){t.onBlur(t.value)},focus:function(e){t.onFocus(t.value)},change:t.getVal,input:function(e){e.target.composing||(t.value=e.target.value)}}}),t._v(" "),s("i",{directives:[{name:"show",rawName:"v-show",value:t.isPassword,expression:"isPassword"}],staticClass:"v-showpsd",on:{click:function(e){t.isShow()}}}),t._v(" "),t._m(0)])]),t._v(" "),t._t("default")],2)};i._withStripped=!0;var o={props:{inputType:String,isPassword:Boolean,inputValue:String,placeholder:String,code:String,maxLength:Number},data:()=>({value:"",focusState:"",float:"float"}),methods:{onFocus(t){this.focusState="focus-state",this.float="",this.$emit("inputFocus",t)},onBlur(t){this.float=""===t?"float":"",this.focusState=""},isShow(){let t="text"===this.inputType?"password":"text";this.$emit("changePassword",t)},getVal(t){this.$emit("update:inputValue",t.target.value)}},watch:{value:function(t){this.$emit("changeInput",t),this.onFocus(t)}}},a=(s(189),s(1)),n=Object(a.a)(o,i,[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("hr",{staticClass:"mu-text-field-line"}),this._v(" "),e("hr",{staticClass:"mu-text-field-focus-line"})])}],!1,null,"251908ec",null);n.options.__file="src\\pages\\login\\login-input.vue";e.a=n.exports},253:function(t,e,s){"use strict";var i=s(193);s.n(i).a},367:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"clearfix register-container"},[t._m(0),t._v(" "),s("div",{staticClass:"v-right"},[s("div",{staticClass:"v-content"},[s("p",{staticClass:"v-title"},[t._v("\n                免费试用\n            ")]),t._v(" "),s("com-input",{attrs:{inputType:"text",isPassword:!1,value:"",inputValue:t.userName,placeholder:"输入您的姓名",maxLength:20},on:{"update:inputValue":function(e){t.userName=e},inputFocus:function(e){t.inputFocus()}}}),t._v(" "),s("com-input",{attrs:{inputType:"text",isPassword:!1,value:"",inputValue:t.userPosition,placeholder:"输入您的职务",maxLength:20},on:{"update:inputValue":function(e){t.userPosition=e},inputFocus:function(e){t.inputFocus()}}}),t._v(" "),s("com-input",{attrs:{inputType:"text",isPassword:!1,value:"",inputValue:t.userCompany,placeholder:"输入公司名称",maxLength:40},on:{"update:inputValue":function(e){t.userCompany=e},inputFocus:function(e){t.inputFocus()}}}),t._v(" "),s("com-input",{attrs:{inputType:"text",isPassword:!1,value:"",inputValue:t.userPhone,placeholder:"输入手机号",maxLength:11},on:{"update:inputValue":function(e){t.userPhone=e},changeInput:t.checkPhone,inputFocus:function(e){t.inputFocus()}}}),t._v(" "),s("div",{attrs:{id:"captcha"}}),t._v(" "),s("com-input",{attrs:{inputType:"text",isPassword:!1,value:"",inputValue:t.code,placeholder:"动态密码",maxLength:6},on:{"update:inputValue":function(e){t.code=e},inputFocus:function(e){t.inputFocus()}}},[s("a",{staticClass:"v-getcode",class:{prohibit:t.isProhibit},attrs:{href:"javascript:;"},on:{click:function(e){t.getCode()}}},[t._v("获取动态码"),s("span",{directives:[{name:"show",rawName:"v-show",value:t.isSend,expression:"isSend"}],staticClass:"fr"},[t._v("("),s("em",[t._v(t._s(t.second))]),t._v("s)")])])]),t._v(" "),s("div",{staticClass:"input-form v-label",staticStyle:{"margin-top":"-28px"},style:{opacity:t.opacity}},[s("p",{staticClass:"v-error"},[t._v(t._s(t.error))])]),t._v(" "),s("el-button",{on:{click:t.submit}},[t._v("wo")])],1)])])};i._withStripped=!0;var o=s(234),a=s(180),n=s(176),u={data:()=>({userName:"",userPosition:"",userCompany:"",userPhone:"",code:"",phoneStatus:!1,type:"password",key:"",isProhibit:!0,isSend:!1,second:60,timerr:"",phoneKey:"",isImg:!1,cap:null,opacity:0,error:""}),components:{"com-input":o.a},created(){n.a.getCodeId({}).then(t=>{if(200!==t.code)console.log(t.msg);else{let e=this;this.key=t.data,window.initNECaptcha({captchaId:e.key,element:"#captcha",mode:"float",width:260,onReady:function(t){},onVerify:function(t,s){s&&(e.phoneKey=s.validate,e.isImg=!0),t&&console.log(t)},onError:function(){}},function(t){e.cap=t})}})},mounted(){},watch:{outValue:function(){console.log(1)},phoneStatus:function(t){this.isGetCodePermission()},isImg:function(t){this.isGetCodePermission()}},methods:{setPassword(){console.log(1)},isGetCodePermission(){this.isImg&&this.phoneStatus?this.isProhibit=!1:this.isProhibit=!0},checkPhone(t){/^1[3|4|5|6|7|8|9][0-9]\d{8}$/.test(parseInt(t))?this.phoneStatus=!0:this.phoneStatus=!1},getCode(){if(this.isProhibit)return!1;let t={mobile:this.userPhone,type:"BUSINESS_USER_REG",captcha:this.phoneKey};n.a.getCode(t).then(t=>{200!==t.code?(this.error=t.msg,this.opacity=1,clearInterval(this.timerr),this.isSend=!1,this.isProhibit=!0,this.second=60,this.isImg=!1,this.phoneKey="",this.cap.refresh()):(this.isSend=!0,this.isProhibit=!0,clearInterval(this.timerr),this.timerr=setInterval(()=>{this.second--,this.second<=0&&(clearInterval(this.timerr),this.isSend=!1,this.isProhibit=!0,this.second=60,this.isImg=!1,this.phoneKey="",this.cap.refresh())},1e3))})},submit(){if(this.checkForm(),this.error)return!1;let t={mobile:this.userPhone,name:this.userName,position:this.userPosition,company:this.userCompany,code:this.code};a.a.register(t).then(t=>{200!==t.code?(this.error=t.msg,this.opacity=1):this.$messageBox({header:"免费试用",content:"感谢您提供的重要信息，我们会立即安排专业人员跟您联系，为您提供试用账号。您也可以拨打我们的专属服务热线400-888-9970获取更多信息。",confirmText:"我知道了",autoClose:60,handleClick:t=>{"cancel"===t.action?console.log("取消或者关闭按钮"):"confirm"===t.action&&console.log("点击了确定按钮")}})})},checkForm:function(t){return this.userName?this.userPosition?this.userCompany?this.userPhone?this.validPhone(this.userPhone)?this.code?(this.error="",void(this.opacity=0)):(this.error="请输入验证码",this.opacity=1,!1):(this.error="请输入正确的手机号",this.opacity=1,!1):(this.error="请输入手机号",this.opacity=1,!1):(this.error="请输入公司名称",this.opacity=1,!1):(this.error="请输入您的职务",this.opacity=1,!1):(this.error="请输入名称",this.opacity=1,!1)},validPhone:function(t){return/^1[3|4|5|6|7|8|9][0-9]\d{8}$/.test(t)},inputFocus:function(){this.error="",this.opacity=0}}},r=(s(253),s(1)),c=Object(r.a)(u,i,[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"v-left"},[e("img",{staticClass:"v-logo",attrs:{src:"",alt:""}})])}],!1,null,"65639d8d",null);c.options.__file="src\\pages\\login\\register.vue";e.default=c.exports}}]);
//# sourceMappingURL=7.572ab859.js.map