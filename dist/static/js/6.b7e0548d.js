(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{192:function(s,t,a){},251:function(s,t,a){"use strict";var n=a(192);a.n(n).a},369:function(s,t,a){"use strict";a.r(t);var n=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"setpsd-container"},[a("p",[s._v("\n    感谢您选择微吼，在开始前请先设置登录密码\n  ")]),s._v(" "),a("com-input",{staticClass:"v-input",class:{warning:s.isWarning},attrs:{value:s.password,placeholder:"",type:"password",maxLength:30},on:{"update:value":function(t){s.password=t}}}),s._v(" "),a("p",{staticClass:"v-requirement"},[s._v("密码创建要求")]),s._v(" "),a("a",{staticClass:"v-confirm",attrs:{href:"javascript:;"},on:{click:function(t){s.setPassword()}}},[s._v("确定")]),s._v(" "),a("p",{staticClass:"v-explain"},[s._v("请勿将密码泄露给第三者，避免造成不必要的损失")])],1)};n._withStripped=!0;var i=a(54),e={data:()=>({password:"",isWarning:!1}),components:{},created(){},watch:{password:function(){""===this.password.trim()?this.isWarning=!0:this.isWarning=!1}},methods:{setPassword(){if(""===this.password.trim())this.isWarning=!0;else{let s={newPassword:this.password};i.a.setPassword(s).then(s=>{200!==s.code?alert(s.msg):(this.isWarning=!1,alert("密码设置成功"))})}}}},r=(a(251),a(1)),o=Object(r.a)(e,n,[],!1,null,"0f3e4c10",null);o.options.__file="src\\pages\\login\\set-password.vue";t.default=o.exports}}]);
//# sourceMappingURL=6.b7e0548d.js.map