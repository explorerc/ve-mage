(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{247:function(s,i,t){},361:function(s,i,t){"use strict";var n=t(247);t.n(n).a},500:function(s,i,t){"use strict";t.r(i);var n=function(){var s=this,i=s.$createElement,t=s._self._c||i;return t("div",{staticClass:"setpsd-container"},[t("message-box",{directives:[{name:"show",rawName:"v-show",value:s.show,expression:"show"}],attrs:{width:"450px"},on:{handleClick:s.messageBoxClick}},[t("div",{staticClass:"v-title",attrs:{slot:"header"},slot:"header"},[s._v("感谢您选择微吼，请先设置登录密码")]),s._v(" "),t("p",{staticClass:"v-info"},[s._v("\n      请勿将密码泄露给第三者，避免造成不必要的损失\n    ")]),s._v(" "),t("div",{staticClass:"v-psd"},[t("com-input",{staticClass:"v-input",class:{warning:s.isWarning},attrs:{value:s.password,placeholder:"请输入密码",type:"password",maxLength:30,"error-tips":s.errorTips},on:{"update:value":function(i){s.password=i},focus:function(i){s.passwordFocus()},change:function(i){s.passwordChange()},blur:function(i){s.passwordBlur()}}}),s._v(" "),s.isShow?t("div",{staticClass:"v-verification"},[t("ul",[t("p",[s._v("密码至少包含：")]),s._v(" "),t("li",[t("i",{staticClass:"iconfont icon-duigou1",class:{isActive:s.isContainEn}}),s._v(" 1个英文字母\n          ")]),s._v(" "),t("li",[t("i",{staticClass:"iconfont icon-duigou1",class:{isActive:s.isContainNum}}),s._v(" 1个数字\n          ")]),s._v(" "),t("li",[t("i",{staticClass:"iconfont icon-duigou1",class:{isActive:s.isContainCount}}),s._v(" 6～30个字符\n          ")])])]):s._e()],1)])],1)};n._withStripped=!0;var o=t(49),a=t.n(o),e=t(50),r={data:function(){return{password:"",isWarning:!1,show:!0,isContainEn:0,isContainNum:0,isContainCount:0,isShow:!1,isChecked:!1,errorTips:""}},components:{},created:function(){},watch:{password:function(){""===this.password.trim()?this.isWarning=!0:this.isWarning=!1}},methods:{messageBoxClick:function(s){var i=this;if("confirm"===s.action){if(!this.isChecked)return this.errorTips="密码支持6~30位的大小写英文和数字，必须包含英文和数字",!1;var t={newPassword:this.password};this.$config({handlers:!0}).$post(e.a.POST_SET_PASSWORD,t).then(function(s){i.isWarning=!1;var t=JSON.parse(sessionStorage.getItem("accountInfo"));t&&(t.hasPassword=!0,sessionStorage.setItem("accountInfo",a()(t))),i.$router.replace("/liveMager/list")}).catch(function(s){i.errorTips=s.msg})}},passwordFocus:function(){this.errorTips="",this.isShow=!0},passwordChange:function(){this.isContainCount=this.password.length>=6?1:0;var s=/^(?=.*\d.*\b)/;this.isContainNum=s.test(this.password)?1:0;var i=/[_a-zA-Z]/;this.isContainEn=i.test(this.password)?1:0,this.password.length>=6&&s.test(this.password)&&i.test(this.password)?this.isChecked=!0:this.isChecked=!1},passwordBlur:function(){this.isShow=!1}}},c=(t(361),t(1)),h=Object(c.a)(r,n,[],!1,null,"0f3e4c10",null);h.options.__file="src/pages/login/set-password.vue";i.default=h.exports}}]);
//# sourceMappingURL=7.8e04cc81.js.map