(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{286:function(t,i,s){},287:function(t,i,s){},434:function(t,i,s){"use strict";var a=s(286);s.n(a).a},436:function(t,i,s){"use strict";var a=s(287);s.n(a).a},593:function(t,i,s){"use strict";s.r(i);var a=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"live-mager edit-step-box"},[t._m(0),t._v(" "),s("div",{staticClass:"tip-box"},[t._v("\n    通过邮件邀约，定制邀约邮件，邀请特定客户群参加直播活动\n  ")]),t._v(" "),s("div",{staticClass:"mager-box border-box"},[s("div",{staticClass:"from-box"},[s("div",{staticClass:"from-row"},[s("div",{staticClass:"from-title"},[t._v("邮件标题：")]),t._v(" "),s("div",{staticClass:"from-content"},[t._v(t._s(t.email.title))])]),t._v(" "),s("div",{staticClass:"from-row"},[s("div",{staticClass:"from-title"},[t._v("发件人：")]),t._v(" "),s("div",{staticClass:"from-content"},[t._v(t._s(t.email.senderName))])]),t._v(" "),t._m(1),t._v(" "),s("div",{staticClass:"from-row"},[s("div",{staticClass:"from-title"},[t._v("发件状态：")]),t._v(" "),s("div",{staticClass:"from-content"},["DRAFT"==t.email.status?s("span",{staticClass:"cg-status"},[s("i",{staticClass:"iconfont icon-shijian"}),t._v(t._s(t.email.statusName))]):t._e(),t._v(" "),"SEND"==t.email.status?s("span",{staticClass:"fs-status"},[s("i",{staticClass:"iconfont icon-shijian"}),t._v(t._s(t.email.statusName))]):t._e(),t._v(" "),"AWAIT"==t.email.status?s("span",{staticClass:"dd-status"},[s("i",{staticClass:"iconfont icon-shijian"}),t._v(t._s(t.email.statusName))]):t._e()])]),t._v(" "),s("div",{staticClass:"from-row"},[s("div",{staticClass:"from-title"},[t._v("发件时间：")]),t._v(" "),s("div",{staticClass:"from-content"},[t._v(t._s(t.email.sendTime))])]),t._v(" "),s("div",{staticClass:"from-row"},[s("div",{staticClass:"from-title"},[t._v("邮件摘要：")]),t._v(" "),s("div",{staticClass:"from-content"},[s("div",[t._v(t._s(t.email.desc))])])]),t._v(" "),s("div",{staticClass:"from-row"},[s("div",{staticClass:"email-info-box",domProps:{innerHTML:t._s(t.email.content)}})]),t._v(" "),s("div",{staticClass:"step-btns"},["SEND"!==t.email.status?s("button",{staticClass:"default-button margin-fl",on:{click:t.editEmail}},[t._v("编辑邮件")]):t._e(),t._v(" "),"AWAIT"==t.email.status?s("button",{staticClass:"primary-button",on:{click:t.sendEmail}},[t._v("立即发送")]):t._e()])])])])};a._withStripped=!0;var e=s(10),n=s.n(e),l=s(233),o=s(48),v=s(15),c={DRAFT:"草稿",SEND:"已发送",AWAIT:"等待发送"},m={name:"info",data:function(){return{email:{activityId:0,emailInviteId:0,title:"",content:"",desc:"",planTime:"",sendTime:"",senderName:"",sendCount:0,status:"",statusName:""}}},computed:Object(o.c)("liveMager",{emailInfo:function(t){return t.emailInfo}}),watch:{emailInfo:{handler:function(t){this.email=n()({},t)},immediate:!0}},created:function(){this.email.emailInviteId||(this.$route.params.id?(this.email.emailInviteId=this.$route.query.email,this.queryEmailInfo()):this.$router.go(-1))},methods:n()({},Object(o.b)("liveMager",{storeEmailInfo:v.a}),{queryEmailInfo:function(){var t=this;this.email.emailInviteId&&this.$get(l.a.GET_EMAIL_INFO,{emailInviteId:this.email.emailInviteId}).then(function(i){i.data.statusName=c[i.data.status],t.email=i.data,t.storeEmailInfo(t.email)})},sendEmail:function(){this.$post(l.a.POST_SEND_EMAIL_INFO,{emailInviteId:this.email.emailInviteId}).then(function(t){console.log("邮件发送成功"),console.log(t)})},editEmail:function(){this.$router.push("/liveMager/emailEditOne/"+this.email.activityId+"?email="+this.email.emailInviteId)},prePage:function(){this.$router.go(-1)}})},r=(s(434),s(436),s(1)),d=Object(r.a)(m,a,[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"live-title"},[i("span",{staticClass:"title"},[this._v("查看邮件")])])},function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"from-row"},[s("div",{staticClass:"from-title"},[t._v("收件人：")]),t._v(" "),s("div",{staticClass:"from-content"},[s("div",[t._v("分组1、分组2、分组3（合计56人）")]),t._v(" "),s("div",{staticStyle:{border:"solid 1px #e5e5e5"}},[s("div",[t._v("邮件1")]),t._v(" "),s("div",[t._v("邮件2")]),t._v(" "),s("div",[t._v("邮件3")]),t._v(" "),s("div",[t._v("邮件4")]),t._v(" "),s("div",[t._v("邮件5")]),t._v(" "),s("div",[t._v("邮件6")])])])])}],!1,null,"306415dd",null);d.options.__file="src/pages/live-mager/email/info.vue";i.default=d.exports}}]);
//# sourceMappingURL=18.c8f2ef3d.js.map