(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{271:function(t,i,s){},272:function(t,i,s){},384:function(t,i,s){"use strict";var a=s(271);s.n(a).a},385:function(t,i,s){"use strict";var a=s(272);s.n(a).a},499:function(t,i,s){"use strict";s.r(i);var a=s(10),e=s.n(a),n=s(217),l=s(48),o=s(15),v={DRAFT:"草稿",SEND:"已发送",AWAIT:"等待发送"},c={name:"info",data:function(){return{email:{activityId:0,emailInviteId:0,title:"",content:"",desc:"",planTime:"",sendTime:"",senderName:"",sendCount:0,status:"",statusName:""}}},computed:Object(l.c)("liveMager",{emailInfo:function(t){return t.emailInfo}}),watch:{emailInfo:{handler:function(t){this.email=e()({},t)},immediate:!0}},created:function(){this.email.emailInviteId||(this.$route.params.id?(this.email.emailInviteId=this.$route.query.email,this.queryEmailInfo()):this.$router.go(-1))},methods:e()({},Object(l.b)("liveMager",{storeEmailInfo:o.a}),{queryEmailInfo:function(){var t=this;this.email.emailInviteId&&this.$get(n.a.GET_EMAIL_INFO,{emailInviteId:this.email.emailInviteId}).then(function(i){i.data.statusName=v[i.data.status],t.email=i.data,t.storeEmailInfo(t.email)})},sendEmail:function(){this.$post(n.a.POST_SEND_EMAIL_INFO,{emailInviteId:this.email.emailInviteId}).then(function(t){console.log("邮件发送成功"),console.log(t)})},editEmail:function(){this.$router.push("/liveMager/emailEditOne/"+this.email.activityId+"?email="+this.email.emailInviteId)},prePage:function(){this.$router.go(-1)}})},m=(s(384),s(385),s(1)),r=Object(m.a)(c,function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"live-mager edit-step-box"},[t._m(0),t._v(" "),s("div",{staticClass:"tip-box"},[t._v("\n    通过邮件邀约，定制邀约邮件，邀请特定客户群参加直播活动\n  ")]),t._v(" "),s("div",{staticClass:"mager-box border-box"},[s("div",{staticClass:"from-box"},[s("div",{staticClass:"from-row"},[s("div",{staticClass:"from-title"},[t._v("邮件标题：")]),t._v(" "),s("div",{staticClass:"from-content"},[t._v(t._s(t.email.title))])]),t._v(" "),s("div",{staticClass:"from-row"},[s("div",{staticClass:"from-title"},[t._v("发件人：")]),t._v(" "),s("div",{staticClass:"from-content"},[t._v(t._s(t.email.senderName))])]),t._v(" "),t._m(1),t._v(" "),s("div",{staticClass:"from-row"},[s("div",{staticClass:"from-title"},[t._v("发件状态：")]),t._v(" "),s("div",{staticClass:"from-content"},["DRAFT"==t.email.status?s("span",{staticClass:"cg-status"},[s("i",{staticClass:"iconfont icon-shijian"}),t._v(t._s(t.email.statusName))]):t._e(),t._v(" "),"SEND"==t.email.status?s("span",{staticClass:"fs-status"},[s("i",{staticClass:"iconfont icon-shijian"}),t._v(t._s(t.email.statusName))]):t._e(),t._v(" "),"AWAIT"==t.email.status?s("span",{staticClass:"dd-status"},[s("i",{staticClass:"iconfont icon-shijian"}),t._v(t._s(t.email.statusName))]):t._e()])]),t._v(" "),s("div",{staticClass:"from-row"},[s("div",{staticClass:"from-title"},[t._v("发件时间：")]),t._v(" "),s("div",{staticClass:"from-content"},[t._v(t._s(t.email.sendTime))])]),t._v(" "),s("div",{staticClass:"from-row"},[s("div",{staticClass:"from-title"},[t._v("邮件摘要：")]),t._v(" "),s("div",{staticClass:"from-content"},[s("div",[t._v(t._s(t.email.desc))])])]),t._v(" "),s("div",{staticClass:"from-row"},[s("div",{staticClass:"email-info-box",domProps:{innerHTML:t._s(t.email.content)}})]),t._v(" "),s("div",{staticClass:"step-btns"},["SEND"!==t.email.status?s("button",{staticClass:"default-button margin-fl",on:{click:t.editEmail}},[t._v("编辑邮件")]):t._e(),t._v(" "),"AWAIT"==t.email.status?s("button",{staticClass:"primary-button",on:{click:t.sendEmail}},[t._v("立即发送")]):t._e()])])])])},[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"live-title"},[i("span",{staticClass:"title"},[this._v("查看邮件")])])},function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"from-row"},[s("div",{staticClass:"from-title"},[t._v("收件人：")]),t._v(" "),s("div",{staticClass:"from-content"},[s("div",[t._v("分组1、分组2、分组3（合计56人）")]),t._v(" "),s("div",{staticStyle:{border:"solid 1px #e5e5e5"}},[s("div",[t._v("邮件1")]),t._v(" "),s("div",[t._v("邮件2")]),t._v(" "),s("div",[t._v("邮件3")]),t._v(" "),s("div",[t._v("邮件4")]),t._v(" "),s("div",[t._v("邮件5")]),t._v(" "),s("div",[t._v("邮件6")])])])])}],!1,null,"9304b032",null);r.options.__file="info.vue";i.default=r.exports}}]);