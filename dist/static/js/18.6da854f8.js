(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{528:function(t,i,s){},529:function(t,i,s){},684:function(t,i,s){"use strict";var a=s(528);s.n(a).a},685:function(t,i,s){"use strict";var a=s(529);s.n(a).a},829:function(t,i,s){"use strict";s.r(i);var a=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"live-mager edit-step-box"},[t._m(0),t._v(" "),s("div",{staticClass:"tip-box"},[t._v("\n    通过邮件邀约，定制邀约邮件，邀请特定客户群参加直播活动\n  ")]),t._v(" "),s("div",{staticClass:"mager-box border-box"},[s("div",{staticClass:"from-box"},[s("div",{staticClass:"from-row"},[s("div",{staticClass:"from-title"},[t._v("邮件标题：")]),t._v(" "),s("div",{staticClass:"from-content"},[t._v(t._s(t.email.title))])]),t._v(" "),s("div",{staticClass:"from-row"},[s("div",{staticClass:"from-title"},[t._v("发件人：")]),t._v(" "),s("div",{staticClass:"from-content"},[t._v(t._s(t.email.senderName))])]),t._v(" "),t._m(1),t._v(" "),s("div",{staticClass:"from-row"},[s("div",{staticClass:"from-title"},[t._v("发件状态：")]),t._v(" "),s("div",{staticClass:"from-content"},["DRAFT"==t.email.status?s("span",{staticClass:"cg-status"},[s("i",{staticClass:"iconfont icon-shijian"}),t._v(t._s(t.email.statusName))]):t._e(),t._v(" "),"SEND"==t.email.status?s("span",{staticClass:"fs-status"},[s("i",{staticClass:"iconfont icon-shijian"}),t._v(t._s(t.email.statusName))]):t._e(),t._v(" "),"AWAIT"==t.email.status?s("span",{staticClass:"dd-status"},[s("i",{staticClass:"iconfont icon-shijian"}),t._v(t._s(t.email.statusName))]):t._e()])]),t._v(" "),s("div",{staticClass:"from-row"},[s("div",{staticClass:"from-title"},[t._v("发件时间：")]),t._v(" "),s("div",{staticClass:"from-content"},[t._v(t._s(t.email.sendTime))])]),t._v(" "),s("div",{staticClass:"from-row"},[s("div",{staticClass:"from-title"},[t._v("邮件摘要：")]),t._v(" "),s("div",{staticClass:"from-content"},[s("div",[t._v(t._s(t.email.desc))])])]),t._v(" "),s("div",{staticClass:"from-row"},[s("div",{staticClass:"email-info-box",domProps:{innerHTML:t._s(t.email.content)}})]),t._v(" "),s("div",{staticClass:"step-btns"},["SEND"!==t.email.status?s("button",{staticClass:"default-button margin-fl",on:{click:t.editEmail}},[t._v("编辑邮件")]):t._e(),t._v(" "),"AWAIT"==t.email.status?s("button",{staticClass:"primary-button",on:{click:t.sendEmail}},[t._v("立即发送")]):t._e()])])])])};a._withStripped=!0;var e=s(30),n=s.n(e),o=s(470),l=s(467),r=s(466),c=s(95),v=s(15),d={DRAFT:"草稿",SEND:"已发送",AWAIT:"等待发送"},m={name:"info",data:function(){return{email:{activityId:0,emailInviteId:0,title:"",content:"",desc:"",planTime:"",sendTime:"",senderName:"",sendCount:0,status:"",statusName:"",groupList:[],tagList:[],selectedGroupList:[],selectedTagList:[]}}},computed:Object(c.c)("liveMager",{emailInfo:function(t){return t.emailInfo}}),watch:{emailInfo:{handler:function(t){this.email=n()({},t)},immediate:!0}},created:function(){if(this.email.emailInviteId)return this.groupList=this.emailInfo.groupList,this.groupList=this.emailInfo.tagList,this.reArrangeList(this.emailInfo.groupIds.split(","),this.emailInfo.tagIds.split(",")),!1;this.$route.params.id?(this.email.emailInviteId=this.$route.query.email,this.queryGroupList(),this.queryTagList(),this.queryEmailInfo()):this.$router.go(-1)},methods:n()({},Object(c.b)("liveMager",{storeEmailInfo:v.d}),{queryEmailInfo:function(){var t=this;this.email.emailInviteId&&this.$get(r.a.GET_EMAIL_INFO,{emailInviteId:this.email.emailInviteId}).then(function(i){i.data.statusName=d[i.data.status],t.email=i.data,setTimeout(function(){t.reArrangeList(i.data.groupIds.split(","),i.data.tagIds.split(","))}),t.storeEmailInfo(t.email)})},sendEmail:function(){this.$post(r.a.POST_SEND_EMAIL_INFO,{emailInviteId:this.email.emailInviteId}).then(function(t){console.log("邮件发送成功"),console.log(t)})},editEmail:function(){this.$router.push("/liveMager/emailEditOne/"+this.email.activityId+"?email="+this.email.emailInviteId)},prePage:function(){this.$router.go(-1)},queryGroupList:function(t){var i=this;this.$get(o.a.GET_GROUP_LIST,{type:"2"}).then(function(t){var s=[];t.data.list.forEach(function(t){s.push({id:t.group_id,name:t.title,count:t.user_count,isChecked:!1})}),i.groupList=s})},queryTagList:function(){var t=this;this.$get(l.a.GET_PERSON_LIST,{activityId:this.$route.params.id}).then(function(i){var s=[];i.data.forEach(function(t){s.push({id:t.id,name:t.name,isChecked:!1})}),t.tagList=s})},reArrangeList:function(t,i){var s=this;this.groupList.forEach(function(i,a){t.forEach(function(t,e){1*t===i.id&&(s.groupList[a].isChecked=!0,s.selectedGroupList.push({count:0,id:i.id,isChecked:!0,name:i.name}))})}),this.tagList.forEach(function(t,a){i.forEach(function(i,e){1*i===t.id&&(s.tagList[a].isChecked=!0,s.selectedTagList.push({count:0,id:t.id,isChecked:!0,name:t.name}))})})}})},u=(s(684),s(685),s(2)),_=Object(u.a)(m,a,[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"live-title"},[i("span",{staticClass:"title"},[this._v("查看邮件")])])},function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"from-row"},[s("div",{staticClass:"from-title"},[t._v("收件人：")]),t._v(" "),s("div",{staticClass:"from-content"},[s("div",[t._v("分组1、分组2、分组3（合计56人）")]),t._v(" "),s("div",{staticStyle:{border:"solid 1px #e5e5e5"}},[s("div",[t._v("邮件1")]),t._v(" "),s("div",[t._v("邮件2")]),t._v(" "),s("div",[t._v("邮件3")]),t._v(" "),s("div",[t._v("邮件4")]),t._v(" "),s("div",[t._v("邮件5")]),t._v(" "),s("div",[t._v("邮件6")])])])])}],!1,null,"306415dd",null);_.options.__file="src/pages/live-mager/email/info.vue";i.default=_.exports}}]);
//# sourceMappingURL=18.6da854f8.js.map