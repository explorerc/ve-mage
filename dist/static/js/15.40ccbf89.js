(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{172:function(a,e,t){"use strict";var i=t(5);const s={queryList:a=>i.a.ajax({method:"post",url:"/manage/base-manage/list-activity",params:a}),deleteById:a=>i.a.ajax({method:"post",url:"/manage/base-manage/del-activity",params:{id:a}}),queryWarmInfoById:a=>i.a.ajax({method:"post",url:"/manage/warm-up-manage/get",params:{activityId:a}}),saveAndEditWarmInfo:a=>i.a.ajax({method:"post",url:"/manage/warm-up-manage/edit",params:a}),queryReminderInfoById:a=>i.a.ajax({method:"post",url:"/",params:{id:a}}),saveReminderInfo:a=>i.a.ajax({method:"post",url:"/",params:a}),roleList:a=>i.a.ajax({method:"GET",url:"/manage/role-manage/list-role",params:{activityId:a}}),delAss:a=>i.a.ajax({method:"POST",url:"/manage/role-manage/del-assistant",params:a}),handleAss:(a,e)=>i.a.ajax({method:"POST",url:a?"/manage/role-manage/update-assistant":"/manage/role-manage/add-assistant",params:e}),getLimit:a=>i.a.ajax({method:"GET",url:"/manage/view-limit/get-limit",params:{activityId:a}}),saveLimit:a=>i.a.ajax({method:"POST",url:"/manage/view-limit/update-limit",params:a}),webinarInfo:a=>i.a.ajax({method:"GET",url:"/manage/base-manage/detail-activity",params:{id:a}}),updateWebinfo:(a,e)=>i.a.ajax({method:"POST",url:a?"/manage/base-manage/add-activity":"/manage/base-manage/update-activity",params:e}),queryEmailList:a=>i.a.ajax({method:"post",url:"/expand/email-invite/list",params:a}),deleteEmailById:a=>i.a.ajax({method:"post",url:"/expand/email-invite/delete",params:{emailInviteId:a}}),queryEmailInfoById:a=>i.a.ajax({method:"post",url:"/expand/email-invite/query",params:{emailInviteId:a}}),queryEmailTemplateList:()=>i.a.ajax({method:"post",url:"/expand/email-invite/templates",params:{}}),sendEmailInfo:a=>i.a.ajax({method:"post",url:"/expand/email-invite/send",params:a}),sendTimerEmailInfo:a=>i.a.ajax({method:"post",url:"/expand/email-invite/save-and-plansend",params:a}),sendTestEmailInfo:a=>i.a.ajax({method:"post",url:"/expand/email-invite/test-send",params:a}),saveAndsendEmail:a=>i.a.ajax({method:"post",url:"/expand/email-invite/save-and-send",params:a}),saveEmailInfo:a=>i.a.ajax({method:"post",url:"/expand/email-invite/save-draft",params:a}),saveWechat:a=>i.a.ajax({method:"post",url:"/expand/wechat-invite/save",params:a}),saveMsg:a=>i.a.ajax({method:"post",url:"/expand/sms-invite/save",params:a}),queryWechat:a=>i.a.ajax({method:"post",url:"/expand/wechat-invite/query",params:{inviteId:a}}),queryMsg:a=>i.a.ajax({method:"post",url:"/expand/sms-invite/query",params:{inviteId:a}}),queryWechatlist:a=>i.a.ajax({method:"post",url:"/expand/wechat-invite/list",params:a}),queryMsglist:a=>i.a.ajax({method:"post",url:"/expand/sms-invite/list",params:a}),deleteWechat:a=>i.a.ajax({method:"post",url:"/expand/wechat-invite/delete",params:{inviteId:a}}),deleteMsg:a=>i.a.ajax({method:"post",url:"/expand/sms-invite/delete",params:{inviteId:a}}),queryPassSdkInfo:()=>i.a.ajax({method:"post",url:"/common/pass-sdk/create-access-token",params:{}})};e.a=s},211:function(a,e,t){},212:function(a,e,t){},296:function(a,e,t){"use strict";var i=t(211);t.n(i).a},298:function(a,e,t){"use strict";var i=t(212);t.n(i).a},360:function(a,e,t){"use strict";t.r(e);var i=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"live-mager edit-step-box"},[t("div",{staticClass:"mager-box"},[t("div",{staticClass:"from-box"},[t("div",{staticClass:"from-row"},[t("div",{staticClass:"from-title"},[a._v("邮件标题：")]),a._v(" "),t("div",{staticClass:"from-content"},[a._v(a._s(a.email.title))])]),a._v(" "),t("div",{staticClass:"from-row"},[t("div",{staticClass:"from-title"},[a._v("发件人：")]),a._v(" "),t("div",{staticClass:"from-content"},[a._v(a._s(a.email.senderName))])]),a._v(" "),t("div",{staticClass:"from-row"},[t("div",{staticClass:"from-title"},[a._v("发件状态：")]),a._v(" "),t("div",{staticClass:"from-content"},[a._v(a._s(a.email.statusName))])]),a._v(" "),t("div",{staticClass:"from-row"},[t("div",{staticClass:"from-title"},[a._v("发件时间：")]),a._v(" "),t("div",{staticClass:"from-content"},[a._v(a._s(a.email.sendTime))])]),a._v(" "),t("div",{staticClass:"from-row"},[t("div",{staticClass:"from-title"},[a._v("邮件摘要：")]),a._v(" "),t("div",{staticClass:"from-content"},[t("div",[a._v(a._s(a.email.desc))])])]),a._v(" "),t("div",{staticClass:"from-row"},[t("div",{staticClass:"from-title"},[a._v("邮件内容：")]),a._v(" "),t("div",{staticClass:"from-content"},[t("div",{domProps:{innerHTML:a._s(a.email.content)}})])]),a._v(" "),a._m(0),a._v(" "),t("div",{staticClass:"step-btns"},["AWAIT"==a.email.status?t("el-button",{staticClass:"live-btn fr",attrs:{type:"primary",plain:""},on:{click:a.sendEmail}},[a._v("立即发送")]):a._e(),a._v(" "),"SEND"!==a.email.status?t("el-button",{staticClass:"live-btn fr",attrs:{type:"primary",plain:""},on:{click:a.editEmail}},[a._v("编辑邮件")]):a._e(),a._v(" "),t("el-button",{staticClass:"live-btn fr",attrs:{type:"primary",plain:""},on:{click:a.prePage}},[a._v("返回上级")])],1)])])])};i._withStripped=!0;var s=t(11),m=t.n(s),l=t(172),n=t(18),r=t(8);const d={DRAFT:"草稿",SEND:"已发送",AWAIT:"等待发送"};var o={name:"info",data:()=>({email:{activityId:0,emailInviteId:0,title:"",content:"",desc:"",planTime:"",sendTime:"",senderName:"",sendCount:0,status:"",statusName:""}}),computed:Object(n.mapState)("liveMager",{emailInfo:a=>a.emailInfo}),watch:{emailInfo:{handler(a){this.email=m()({},a)},immediate:!0}},created(){if(this.email.emailInviteId)return;this.$route.params.id?(this.email.emailInviteId=this.$route.query.email,this.queryEmailInfo()):this.$router.go(-1)},methods:m()({},Object(n.mapMutations)("liveMager",{storeEmailInfo:r.a}),{queryEmailInfo(){this.email.emailInviteId&&l.a.queryEmailInfoById(this.email.emailInviteId).then(a=>{a.data.statusName=d[a.data.status],this.email=a.data,this.storeEmailInfo(this.email)})},sendEmail(){l.a.sendEmailInfo({emailInviteId:this.email.emailInviteId}).then(a=>{console.log("邮件发送成功"),console.log(a)}).catch(a=>{console.log("邮件发送失败"),console.log(a)})},editEmail(){this.$router.push(`/liveMager/emailEdit/${this.email.activityId}?email=${this.email.emailInviteId}`)},prePage(){this.$router.go(-1)}})},v=(t(296),t(298),t(1)),p=Object(v.a)(o,i,[function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"from-row"},[t("div",{staticClass:"from-title"},[a._v("收件人：")]),a._v(" "),t("div",{staticClass:"from-content"},[t("div",[a._v("分组1、分组2、分组3（合计56人）")]),a._v(" "),t("div",{staticStyle:{border:"solid 1px #e5e5e5"}},[t("div",[a._v("邮件1")]),a._v(" "),t("div",[a._v("邮件2")]),a._v(" "),t("div",[a._v("邮件3")]),a._v(" "),t("div",[a._v("邮件4")]),a._v(" "),t("div",[a._v("邮件5")]),a._v(" "),t("div",[a._v("邮件6")])])])])}],!1,null,"306415dd",null);p.options.__file="src\\pages\\live-mager\\email\\info.vue";e.default=p.exports}}]);
//# sourceMappingURL=15.40ccbf89.js.map