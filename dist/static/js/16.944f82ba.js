(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{532:function(t,e,i){},533:function(t,e,i){},705:function(t,e,i){"use strict";var a=i(532);i.n(a).a},706:function(t,e,i){"use strict";var a=i(533);i.n(a).a},884:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"edit-step-box",on:{keydown:function(e){t.canPass=!1}}},[i("header",{staticClass:"email-header"},[i("div",{staticClass:"back-btn",on:{click:t.goBack}},[i("i",{staticClass:"iconfont icon-jiantou"})]),t._v(" "),i("span",[t._v("步骤1 邮件内容")])]),t._v(" "),i("div",{staticClass:"border-box"},[i("div",{staticClass:"edit-content clearfix"},[i("div",{staticClass:"edit-content-box fl"},[i("ve-html5-editer",{model:{value:t.email.content,callback:function(e){t.$set(t.email,"content",e)},expression:"email.content"}})],1),t._v(" "),i("div",{staticClass:"edit-content-temp fr"},[i("div",{staticClass:"temp-title"},[i("span",[t._v("选择模板")]),t._v(" "),i("button",{staticClass:"default-button fr",on:{click:t.recoverDefault}},[t._v("恢复默认\n          ")])]),t._v(" "),i("div",{staticClass:"temp-boxs"},t._l(t.emailList,function(e,a){return i("div",{class:{"temp-item":!0,fl:!0,active:e.emailTemplateId==t.email.emailTemplateId},on:{click:function(e){e.stopPropagation(),t.changeTemp(a)}}},[i("div",{staticClass:"temp-item-box",style:{backgroundColor:e.cover}}),t._v(" "),i("span",{staticClass:"temp-item-title"},[t._v(t._s(e.title))])])}))])])]),t._v(" "),i("message-box",{directives:[{name:"show",rawName:"v-show",value:t.testEmailShow,expression:"testEmailShow"}],attrs:{header:"邮件测试发送",type:"prompt",width:"450px"},on:{handleClick:t.emailHandleClick}},[i("div",{staticClass:"email-box"},[i("span",{staticClass:"test-tip"},[t._v("每天只允许发送5条测试邮件：")]),t._v(" "),i("com-input",{attrs:{value:t.testEmailAddress,"error-tips":t.emailError,maxLength:40,placeholder:"输入邮件地址"},on:{"update:value":function(e){t.testEmailAddress=e}},nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.sendTestEmail(e):null}}})],1),t._v(" "),i("div",{staticClass:"step-one-btns",attrs:{slot:"bottom"},slot:"bottom"},[i("span",[t._v("邮件限额："+t._s(t.testEmailCount))]),t._v(" "),i("button",{staticClass:"primary-button",on:{click:t.sendTestEmail}},[t._v("立即发送\n      ")])])]),t._v(" "),i("div",{staticClass:"email-bottom"},[i("button",{staticClass:"default-button fl",on:{click:t.clickSendTestEmail}},[t._v("发送测试邮件\n    ")]),t._v(" "),i("button",{staticClass:"primary-button fr",on:{click:t.nextEmail}},[t._v("下一步\n    ")]),t._v(" "),i("button",{class:{"default-button":!0,"margin-fl":!0,fr:!0,disabled:t.isDisabled},on:{click:t.saveEmail}},[t._v("保存草稿\n\n    ")])])],1)};a._withStripped=!0;var n=i(30),s=i.n(n),o=i(469),l=i(481),c=i(95),r=i(15),m={name:"edit-step-one",data:function(){return{testEmailShow:!1,testEmailAddress:"",testEmailCount:0,emailError:"",emailList:[],isHistory:!1,email:{activityId:"",emailInviteId:"",emailTemplateId:1,title:"",content:"",desc:"",senderName:""},isDisabled:!1,accountInfo:{},canPass:!0,PC_HOST:location.protocol+"//test-zhike.vhall.com/webinar/"}},components:{VeHtml5Editer:l.a},computed:s()({},Object(c.c)("login",{isLogin:function(t){return t.isLogin},accountInfo:function(t){return t.accountInfo}}),Object(c.c)("liveMager",{emailInfo:function(t){return t.emailInfo}})),beforeRouteEnter:function(t,e,i){i(function(t){"emailEditTwo"===e.name&&(t.isHistory=!0,t.queryEmailTemp()),t.initPage()})},beforeRouteLeave:function(t,e,i){if(this.canPass)return i(!0),!1;this.$messageBox({header:"提示",width:"400px",content:"是否放弃当前编辑？",cancelText:"否",confirmText:"是",handleClick:function(t){"confirm"===t.action?i(!0):i(!1)}})},watch:{emailInfo:{handler:function(t){this.email=s()({},this.email,t)},immediate:!0},testEmailAddress:function(){this.emailError=""}},created:function(){},methods:s()({},Object(c.b)("login",{setAccountInfo:r.a}),Object(c.b)("liveMager",{storeEmailInfo:r.d}),{initPage:function(){if(this.isHistory&&this.emailInfo.content)this.email=this.emailInfo;else{var t=this.$route.params.id;if(t){var e=this.$route.query.email;if(e){if(this.email.emailInviteId)return void this.queryEmailTemp();this.email.emailInviteId=e,this.queryEmailInfo()}else this.email={activityId:t,emailInviteId:"",emailTemplateId:1,title:"",content:"",desc:"",senderName:""},this.storeEmailInfo(this.email);this.queryEmailTemp()}else this.$router.go(-1)}},clickSendTestEmail:function(){var t=this;this.testEmailShow=!0,this.$post(o.a.POST_TEST_EMAIL_INFO,{type:"email"}).then(function(e){t.canPass=!0,t.testEmailCount=e.data})},emailHandleClick:function(t){"cancel"===t.action&&(this.testEmailShow=!1)},queryEmailInfo:function(){var t=this;this.email.emailInviteId&&this.$get(o.a.GET_EMAIL_INFO,{emailInviteId:this.email.emailInviteId}).then(function(e){t.email=e.data,t.storeEmailInfo(t.email)})},queryEmailTemp:function(){var t=this;this.$get(o.a.GET_EMAIL_TPL_LIST).then(function(e){if(e.data.list&&(t.emailList=e.data.list,!t.email.emailInviteId)){var i=t.accountInfo?t.accountInfo.businessUserId:"";t.email.content=t.emailList[0].content.replace("$$activity$$",t.PC_HOST+"subscribe/"+t.email.activityId+"?refer=0&shareId="+i)}})},sendTestEmail:function(){var t=this;if(this.testEmailAddress)if(new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$").test(this.testEmailAddress))if(this.email.content){this.testEmailShow=!1;var e=this.accountInfo?this.accountInfo.businessUserId:"";this.email.content=this.email.content.replace("$$activity$$",this.PC_HOST+"subscribe/"+this.email.activityId+"?refer=0&shareId="+e),this.$post(o.a.POST_SEND_TEST_EMAIL_INFO,{content:this.email.content,receiverEmail:this.testEmailAddress}).then(function(e){t.canPass=!0,t.$toast({content:"发送成功，请稍后查收邮件",position:"center"})})}else this.$messageBox({header:"提示",content:"邮件内容不能为空",confirmText:"知道了",autoClose:10});else this.emailError="邮箱格式不正确";else this.emailError="邮箱不能为空"},saveEmail:function(){var t=this;this.isDisabled=!0,this.canPass=!0;var e=this.accountInfo?this.accountInfo.businessUserId:"";this.email.content=this.email.content.replace("$$activity$$",this.PC_HOST+"subscribe/"+this.email.activityId+"?refer=0&shareId="+e),this.$post(o.a.POST_SAVE_EMAIL_INFO,this.email).then(function(e){t.email.emailInviteId||t.$router.replace({query:{email:e.data.emailInviteId}}),t.email.emailInviteId=e.data.emailInviteId,t.email.title=e.data.title,t.storeEmailInfo(t.email),t.$toast({content:"保存草稿成功",position:"center"})});var i=setTimeout(function(){clearTimeout(i),t.isDisabled=!1},3e3)},goBack:function(){this.$router.go(-1)},nextEmail:function(){this.canPass=!0,this.storeEmailInfo(this.email),this.$router.push("/liveMager/emailEditTwo/"+this.email.activityId+"?email="+this.email.emailInviteId)},changeTemp:function(t){var e=this;this.$messageBox({header:"",content:"更换邮件模板会导致已编辑的内容丢失",cancelText:"取消",confirmText:"确认替换",handleClick:function(i){if("confirm"===i.action){e.email.emailTemplateId=e.emailList[t].emailTemplateId;var a=e.accountInfo?e.accountInfo.businessUserId:"";e.email.content=e.emailList[t].content.replace("$$activity$$",e.PC_HOST+"subscribe/"+e.email.activityId+"?refer=0&shareId="+a)}}})},recoverDefault:function(){var t=this;this.$messageBox({header:"",width:"400px",content:"恢复默认模板会导致已编辑的内容丢失",cancelText:"取消",confirmText:"恢复默认",handleClick:function(e){if("confirm"===e.action)for(var i=0;i<t.emailList.length;i++){var a=t.emailList[i];if(a.emailTemplateId===t.email.emailTemplateId){var n=t.accountInfo?t.accountInfo.businessUserId:"";t.email.content=a.content.replace("$$activity$$",t.PC_HOST+"subscribe/"+t.email.activityId+"?refer=0&shareId="+n);break}}}})}})},d=(i(705),i(706),i(2)),u=Object(d.a)(m,a,[],!1,null,"f4e271ae",null);u.options.__file="src/pages/live-mager/email/edit-step-one.vue";e.default=u.exports}}]);
//# sourceMappingURL=16.944f82ba.js.map