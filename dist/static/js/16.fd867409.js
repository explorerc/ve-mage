(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{523:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"edit-step-box",on:{keydown:function(e){t.canPass=!1}}},[i("header",{staticClass:"email-header"},[i("div",{staticClass:"back-btn-email",on:{click:t.goBack}},[i("i",{staticClass:"iconfont icon-jiantou"})]),t._v(" "),i("span",[t._v("步骤1 邮件内容")])]),t._v(" "),i("div",{staticClass:"border-box"},[i("div",{staticClass:"edit-content clearfix"},[i("div",{staticClass:"edit-content-box fl"},[i("ve-html5-editer",{model:{value:t.email.content,callback:function(e){t.$set(t.email,"content",e)},expression:"email.content"}})],1),t._v(" "),i("div",{staticClass:"edit-content-temp fr"},[i("div",{staticClass:"temp-title"},[i("span",[t._v("选择模板")]),t._v(" "),i("button",{staticClass:"default-button fr",on:{click:t.recoverDefault}},[t._v("恢复默认\n          ")])]),t._v(" "),i("div",{staticClass:"temp-boxs"},t._l(t.emailList,function(e,a){return i("div",{class:{"temp-item":!0,fl:!0,active:e.emailTemplateId==t.email.emailTemplateId},on:{click:function(e){e.stopPropagation(),t.changeTemp(a)}}},[i("div",{staticClass:"temp-item-box",style:{backgroundColor:e.cover}}),t._v(" "),i("span",{staticClass:"temp-item-title"},[t._v(t._s(e.title))])])}))])])]),t._v(" "),i("message-box",{directives:[{name:"show",rawName:"v-show",value:t.testEmailShow,expression:"testEmailShow"}],attrs:{header:"邮件测试发送",type:"prompt",width:"450px"},on:{handleClick:t.emailHandleClick}},[i("div",{staticClass:"email-box"},[i("span",{staticClass:"test-tip"},[t._v("每天只允许发送5条测试邮件：")]),t._v(" "),i("com-input",{attrs:{value:t.testEmailAddress,"error-tips":t.emailError,maxLength:40,placeholder:"输入邮件地址"},on:{"update:value":function(e){t.testEmailAddress=e}},nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.sendTestEmail(e):null}}})],1),t._v(" "),i("div",{staticClass:"step-one-btns",attrs:{slot:"bottom"},slot:"bottom"},[i("span",[t._v("邮件限额："+t._s(t.testEmailCount))]),t._v(" "),i("button",{staticClass:"primary-button",on:{click:t.sendTestEmail}},[t._v("立即发送\n      ")])])]),t._v(" "),i("div",{staticClass:"email-bottom"},[i("button",{staticClass:"default-button fl",on:{click:t.clickSendTestEmail}},[t._v("发送测试邮件\n    ")]),t._v(" "),i("button",{staticClass:"primary-button fr",on:{click:t.nextEmail}},[t._v("下一步\n    ")]),t._v(" "),i("button",{class:{"default-button":!0,"margin-fl":!0,fr:!0,disabled:t.isDisabled},on:{click:t.saveEmail}},[t._v("保存草稿\n\n    ")])])],1)};a._withStripped=!0;var s=i(30),n=i.n(s),l=i(529),o=i(543),c=i(97),m=i(15),r={name:"edit-step-one",data:function(){return{testEmailShow:!1,testEmailAddress:"",testEmailCount:0,emailError:"",emailList:[],isHistory:!1,email:{activityId:"",emailInviteId:"",emailTemplateId:1,title:"",content:"",desc:"",senderName:""},isDisabled:!1,canPass:!0,PC_HOST:location.protocol+"//test-zhike.vhall.com/webinar/"}},components:{VeHtml5Editer:o.a},computed:n()({},Object(c.c)("liveMager",{emailInfo:function(t){return t.emailInfo}})),beforeRouteEnter:function(t,e,i){i(function(t){"emailEditTwo"===e.name&&(t.isHistory=!0,t.queryEmailTemp()),t.initPage()})},beforeRouteLeave:function(t,e,i){if(this.canPass)return i(!0),!1;this.$messageBox({header:"提示",width:"400px",content:"是否放弃当前编辑？",cancelText:"否",confirmText:"是",handleClick:function(t){"confirm"===t.action?i(!0):i(!1)}})},watch:{emailInfo:{handler:function(t){this.email=n()({},this.email,t)},immediate:!0},testEmailAddress:function(){this.emailError=""}},created:function(){},methods:n()({},Object(c.b)("liveMager",{storeEmailInfo:m.d}),{initPage:function(){if(this.isHistory&&this.emailInfo.content)this.email=this.emailInfo;else{var t=this.$route.params.id;if(t){var e=this.$route.query.email;if(e){if(this.email.emailInviteId)return void this.queryEmailTemp();this.email.emailInviteId=e,this.queryEmailInfo()}else this.email={activityId:t,emailInviteId:"",emailTemplateId:1,title:"",content:"",desc:"",senderName:""},this.storeEmailInfo(this.email);this.queryEmailTemp()}else this.$router.go(-1)}},clickSendTestEmail:function(){var t=this;this.testEmailShow=!0,this.$post(l.a.POST_TEST_EMAIL_INFO,{type:"email"}).then(function(e){t.canPass=!0,t.testEmailCount=e.data})},emailHandleClick:function(t){"cancel"===t.action&&(this.testEmailShow=!1)},queryEmailInfo:function(){var t=this;this.email.emailInviteId&&this.$get(l.a.GET_EMAIL_INFO,{emailInviteId:this.email.emailInviteId}).then(function(e){t.email=e.data,t.storeEmailInfo(t.email)})},queryEmailTemp:function(){var t=this;this.$get(l.a.GET_EMAIL_TPL_LIST).then(function(e){e.data.list&&(t.emailList=e.data.list,t.email.emailInviteId||(t.email.content=t.emailList[0].content.replace("$$activity$$",t.PC_HOST+"subscribe/"+t.email.activityId+"?refer=0")))})},sendTestEmail:function(){var t=this;this.testEmailAddress?new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$").test(this.testEmailAddress)?this.email.content?(this.testEmailShow=!1,this.email.content=this.email.content.replace("$$activity$$",this.PC_HOST+"subscribe/"+this.email.activityId+"?refer=0"),this.$post(l.a.POST_SEND_TEST_EMAIL_INFO,{content:this.email.content,receiverEmail:this.testEmailAddress}).then(function(e){t.canPass=!0,t.$toast({content:"发送成功，请稍后查收邮件",position:"center"})})):this.$messageBox({header:"提示",content:"邮件内容不能为空",confirmText:"知道了",autoClose:10}):this.emailError="邮箱格式不正确":this.emailError="邮箱不能为空"},saveEmail:function(){var t=this;this.isDisabled=!0,this.canPass=!0,this.email.content=this.email.content.replace("$$activity$$",this.PC_HOST+"subscribe/"+this.email.activityId+"?refer=0"),this.$post(l.a.POST_SAVE_EMAIL_INFO,this.email).then(function(e){t.email.emailInviteId||t.$router.replace({query:{email:e.data.emailInviteId}}),t.email.emailInviteId=e.data.emailInviteId,t.email.title=e.data.title,t.storeEmailInfo(t.email),t.$toast({content:"保存草稿成功",position:"center"})});var e=setTimeout(function(){clearTimeout(e),t.isDisabled=!1},3e3)},goBack:function(){this.$router.go(-1)},nextEmail:function(){this.canPass=!0,this.storeEmailInfo(this.email),this.$router.push("/liveMager/emailEditTwo/"+this.email.activityId+"?email="+this.email.emailInviteId)},changeTemp:function(t){var e=this;this.$messageBox({header:"",width:"400px",content:"更换邮件模板会导致已编辑的内容丢失",cancelText:"取消",confirmText:"确认替换",handleClick:function(i){"confirm"===i.action&&(e.email.emailTemplateId=e.emailList[t].emailTemplateId,e.email.content=e.emailList[t].content.replace("$$activity$$",e.PC_HOST+"subscribe/"+e.email.activityId+"?refer=0"))}})},recoverDefault:function(){var t=this;this.$messageBox({header:"",width:"400px",content:"恢复默认模板会导致已编辑的内容丢失",cancelText:"取消",confirmText:"恢复默认",handleClick:function(e){if("confirm"===e.action)for(var i=0;i<t.emailList.length;i++){var a=t.emailList[i];if(a.emailTemplateId===t.email.emailTemplateId){t.email.content=a.content.replace("$$activity$$",t.PC_HOST+"subscribe/"+t.email.activityId+"?refer=0");break}}}})}})},d=(i(779),i(780),i(1)),u=Object(d.a)(r,a,[],!1,null,"f4e271ae",null);u.options.__file="src/pages/live-mager/email/edit-step-one.vue";e.default=u.exports},598:function(t,e,i){},599:function(t,e,i){},779:function(t,e,i){"use strict";var a=i(598);i.n(a).a},780:function(t,e,i){"use strict";var a=i(599);i.n(a).a}}]);
//# sourceMappingURL=16.fd867409.js.map