(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{274:function(t,e,i){},275:function(t,e,i){},412:function(t,e,i){"use strict";var a=i(274);i.n(a).a},414:function(t,e,i){"use strict";var a=i(275);i.n(a).a},582:function(t,e,i){"use strict";i.r(e);var a=i(11),n=i.n(a),s=i(234),l=i(238),o=i(51),m=i(16),c={name:"edit-step-one",data:function(){return{testEmailShow:!1,testEmailAddress:"",testEmailCount:0,emailError:"",emailList:[],email:{activityId:"",emailInviteId:"",emailTemplateId:1,title:"",content:"",desc:"",senderName:""}}},components:{VeHtml5Editer:l.a},computed:Object(o.c)("liveMager",{emailInfo:function(t){return t.emailInfo}}),watch:{emailInfo:{handler:function(t){this.email=n()({},this.email,t)},immediate:!0},testEmailAddress:function(){this.emailError=""}},created:function(){var t=this.$route.params.id;if(t){var e=this.$route.query.email;if(e){if(this.email.emailInviteId)return void this.queryEmailTemp();this.email.emailInviteId=e,this.queryEmailInfo()}else this.email={activityId:t,emailInviteId:"",emailTemplateId:1,title:"",content:"",desc:"",senderName:""},this.storeEmailInfo(this.email);this.queryEmailTemp()}else this.$router.go(-1)},methods:n()({},Object(o.b)("liveMager",{storeEmailInfo:m.a}),{clickSendTestEmail:function(){var t=this;this.testEmailShow=!0,s.a.queryTestEmailInfo({type:"email"}).then(function(e){t.testEmailCount=e.data})},emailHandleClick:function(t){"cancel"===t.action&&(this.testEmailShow=!1)},queryEmailInfo:function(){var t=this;this.email.emailInviteId&&s.a.queryEmailInfoById(this.email.emailInviteId).then(function(e){t.email=e.data,t.storeEmailInfo(t.email)})},queryEmailTemp:function(){var t=this;s.a.queryEmailTemplateList().then(function(e){e.data.list&&(t.emailList=e.data.list,t.email.emailInviteId||(t.email.content=t.emailList[0].content))})},sendTestEmail:function(){var t=this;this.testEmailAddress?new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$").test(this.testEmailAddress)?this.email.content?(this.testEmailShow=!1,this.email.content=this.email.content.replace("$$activity$$",location.protocol+"//"+location.host+"/watcher/"+this.email.activityId),s.a.sendTestEmailInfo({content:this.email.content,receiverEmail:this.testEmailAddress}).then(function(e){200===e.code&&t.$toast({header:"提示",content:"发送成功，请稍后查收邮件",autoClose:2e3,position:"right-top"})})):this.$messageBox({header:"提示",content:"邮件内容不能为空",confirmText:"知道了",autoClose:10}):this.emailError="邮箱格式不正确":this.emailError="邮箱不能为空"},saveEmail:function(){var t=this;this.email.content=this.email.content.replace("$$activity$$",location.protocol+"//"+location.host+"/watcher/"+this.email.activityId),s.a.saveEmailInfo(this.email).then(function(e){t.email.emailInviteId=e.data.emailInviteId,t.email.title=e.data.title,t.storeEmailInfo(t.email),t.$toast({header:"提示",content:"保存草稿成功",autoClose:2e3,position:"right-top"})})},goBack:function(){this.$router.go(-1)},nextEmail:function(){this.storeEmailInfo(this.email),this.$router.push("/liveMager/emailEditTwo/"+this.email.activityId+"?email="+this.email.emailInviteId)},changeTemp:function(t){var e=this;this.$messageBox({header:"",content:"更换邮件模板会导致已编辑的内容丢失",cancelText:"取消",confirmText:"确认替换",handleClick:function(i){"confirm"===i.action&&(e.email.emailTemplateId=e.emailList[t].emailTemplateId,e.email.content=e.emailList[t].content)}})},recoverDefault:function(){var t=this;this.$messageBox({header:"",width:"400px",content:"恢复默认模板会导致已编辑的内容丢失",cancelText:"取消",confirmText:"恢复默认",handleClick:function(e){if("confirm"===e.action)for(var i=0;i<t.emailList.length;i++){var a=t.emailList[i];if(a.emailTemplateId===t.email.emailTemplateId){t.email.content=a.content;break}}}})}})},r=(i(412),i(414),i(1)),d=Object(r.a)(c,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"edit-step-box"},[i("header",{staticClass:"email-header"},[i("div",{staticClass:"back-btn",on:{click:t.goBack}},[i("i",{staticClass:"iconfont icon-jiantou"})]),t._v(" "),i("span",[t._v("步骤1 邮件内容")])]),t._v(" "),i("div",{staticClass:"border-box"},[i("div",{staticClass:"edit-content clearfix"},[i("div",{staticClass:"edit-content-box fl"},[i("ve-html5-editer",{model:{value:t.email.content,callback:function(e){t.$set(t.email,"content",e)},expression:"email.content"}})],1),t._v(" "),i("div",{staticClass:"edit-content-temp fr"},[i("div",{staticClass:"temp-title"},[i("span",[t._v("选择模板")]),t._v(" "),i("button",{staticClass:"default-button fr",on:{click:t.recoverDefault}},[t._v("恢复默认")])]),t._v(" "),i("div",{staticClass:"temp-boxs"},t._l(t.emailList,function(e,a){return i("div",{class:{"temp-item":!0,fl:!0,active:e.emailTemplateId==t.email.emailTemplateId},on:{click:function(e){e.stopPropagation(),t.changeTemp(a)}}},[i("div",{staticClass:"temp-item-box",style:{backgroundColor:e.cover}}),t._v(" "),i("span",{staticClass:"temp-item-title"},[t._v(t._s(e.title))])])}))])])]),t._v(" "),i("message-box",{directives:[{name:"show",rawName:"v-show",value:t.testEmailShow,expression:"testEmailShow"}],attrs:{header:"邮件测试发送",type:"prompt",width:"450px"},on:{handleClick:t.emailHandleClick}},[i("div",{staticClass:"email-box"},[i("span",{staticClass:"test-tip"},[t._v("每天只允许发送5条测试短信：")]),t._v(" "),i("com-input",{attrs:{value:t.testEmailAddress,"error-tips":t.emailError,placeholder:"输入邮件地址"},on:{"update:value":function(e){t.testEmailAddress=e}}})],1),t._v(" "),i("div",{staticClass:"step-one-btns",attrs:{slot:"bottom"},slot:"bottom"},[i("span",[t._v("邮件限额："+t._s(t.testEmailCount))]),t._v(" "),i("button",{staticClass:"primary-button",on:{click:t.sendTestEmail}},[t._v("立即发送")])])]),t._v(" "),i("div",{staticClass:"email-bottom"},[i("button",{staticClass:"default-button fl",on:{click:t.clickSendTestEmail}},[t._v("发送测试邮件")]),t._v(" "),i("button",{staticClass:"primary-button fr",on:{click:t.nextEmail}},[t._v("下一步")]),t._v(" "),i("button",{staticClass:"default-button margin-fl fr",on:{click:t.saveEmail}},[t._v("保存草稿")])])],1)},[],!1,null,"22fe63c5",null);d.options.__file="edit-step-one.vue";e.default=d.exports}}]);