(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{1047:function(t,i,s){"use strict";s.r(i);var e=s(97),a=s.n(e),n=s(136),o=s.n(n),l=s(30),c=s.n(l),r=s(488),u=s(486),d=s(95),m=s(15),v={DRAFT:"草稿",SEND:"已发送",AWAIT:"等待发送"},f={name:"info",data:function(){return{email:{activityId:0,emailInviteId:0,title:"",content:"",desc:"",planTime:"",sendTime:"",senderName:"",sendCount:0,status:"",statusName:""},selectedGroupList:[],selectedTagList:[],groupList:[],tagList:[],sendDetail:!1}},components:{comDetail:s(668).a},computed:Object(d.c)("liveMager",{emailInfo:function(t){return t.emailInfo}}),watch:{emailInfo:{handler:function(t){this.email=c()({},t)},immediate:!0}},created:function(){var t=this;if(this.email.emailInviteId){var i=this.emailInfo.groupIds?this.emailInfo.groupIds:"",s=this.emailInfo.tagIds?this.emailInfo.tagIds:"";return this.queryTagList().then(this.queryGroupList()).then(function(){setTimeout(function(){t.reArrangeList(i.split(","),s.split(","))},500)}),!1}this.$route.params.id?(this.email.emailInviteId=this.$route.query.email,this.queryTagList().then(this.queryGroupList()).then(this.queryEmailInfo())):this.$router.go(-1)},methods:c()({},Object(d.b)("liveMager",{storeEmailInfo:m.d}),{queryEmailInfo:function(){var t=this;this.email.emailInviteId&&this.$get(u.a.GET_EMAIL_INFO,{emailInviteId:this.email.emailInviteId}).then(function(i){i.data.statusName=v[i.data.status],t.email=i.data,setTimeout(function(){t.reArrangeList(i.data.groupIds.split(","),i.data.tagIds.split(","))},500),t.storeEmailInfo(t.email)})},sendEmail:function(){this.$post(u.a.POST_SEND_EMAIL_INFO,{emailInviteId:this.email.emailInviteId}).then(function(t){console.log("邮件发送成功"),console.log(t)})},editEmail:function(){this.$router.push("/liveMager/emailEditOne/"+this.email.activityId+"?email="+this.email.emailInviteId)},prePage:function(){this.$router.go(-1)},queryGroupList:function(t){var i=this;return o()(a.a.mark(function t(){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.$get(r.a.GET_GROUP_LIST,{type:"2"}).then(function(t){var s=[];t.data.list.forEach(function(t){s.push({id:t.group_id,name:t.title,count:t.user_count,isChecked:!1})}),i.groupList=s});case 2:case"end":return t.stop()}},t,i)}))()},queryTagList:function(){var t=this;return o()(a.a.mark(function i(){return a.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,t.$get(r.a.GET_TAG_LIST).then(function(i){var s=[];i.data.list.forEach(function(t){s.push({name:t.tag_name,id:t.tag_id,isChecked:!1})}),t.tagList=s});case 2:case"end":return i.stop()}},i,t)}))()},reArrangeList:function(t,i){var s=this;this.groupList.forEach(function(i,e){t.forEach(function(t,e){1*t==1*i.id&&s.selectedGroupList.push({count:i.count,id:i.id,isChecked:!0,name:i.name})})}),this.tagList.forEach(function(t,e){i.forEach(function(i,e){1*i==1*t.id&&s.selectedTagList.push({id:t.id,isChecked:!0,name:t.name})})}),console.log(this.selectedGroupList),console.log(this.selectedTagList)},handleClick:function(t){"cancel"===t.action&&(this.sendDetail=!1)}})},_=(s(779),s(781),s(2)),h=Object(_.a)(f,function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"live-mager edit-step-box"},[t._m(0),t._v(" "),s("div",{staticClass:"tip-box"},[t._v("\n    通过邮件邀约，定制邀约邮件，邀请特定客户群参加直播活动\n  ")]),t._v(" "),s("div",{staticClass:"mager-box border-box"},[s("div",{staticClass:"from-box"},[s("div",{staticClass:"from-row"},[s("div",{staticClass:"from-title"},[t._v("邮件标题：")]),t._v(" "),s("div",{staticClass:"from-content"},[t._v(t._s(t.email.title))])]),t._v(" "),s("div",{staticClass:"from-row"},[s("div",{staticClass:"from-title"},[t._v("发件人：")]),t._v(" "),s("div",{staticClass:"from-content"},[t._v(t._s(t.email.senderName))])]),t._v(" "),s("div",{staticClass:"from-row"},[s("div",{staticClass:"from-title"},[t._v("收件人：")]),t._v(" "),s("div",{staticClass:"from-content receiver"},[t.selectedGroupList.length||t.selectedTagList.length?[s("div",t._l(t.selectedGroupList,function(i,e){return s("span",[t._v(t._s(i.name)+"("+t._s(i.count)+")"),e+1<t.selectedGroupList.length?[t._v("、")]:t._e()],2)})),t._v(" "),s("div",[t._l(t.selectedTagList,function(i,e){return s("span",[t._v(t._s(i.name)),e+1<t.selectedTagList.length?[t._v("、")]:t._e()],2)}),t._v("（合计"+t._s(t.email.sendCount)+"人）\n            ")],2),t._v(" "),s("el-button",{staticClass:"send-detail default-button",on:{click:function(i){t.sendDetail=!0}}},[t._v("发送详情")])]:[t._v("\n            暂未选择\n          ")]],2)]),t._v(" "),s("div",{staticClass:"from-row"},[s("div",{staticClass:"from-title"},[t._v("发件状态：")]),t._v(" "),s("div",{staticClass:"from-content"},["DRAFT"==t.email.status?s("span",{staticClass:"cg-status"},[s("i",{staticClass:"iconfont icon-shijian"}),t._v(t._s(t.email.statusName))]):t._e(),t._v(" "),"SEND"==t.email.status?s("span",{staticClass:"fs-status"},[s("i",{staticClass:"iconfont icon-shijian"}),t._v(t._s(t.email.statusName))]):t._e(),t._v(" "),"AWAIT"==t.email.status?s("span",{staticClass:"dd-status"},[s("i",{staticClass:"iconfont icon-shijian"}),t._v(t._s(t.email.statusName))]):t._e()])]),t._v(" "),s("div",{staticClass:"from-row"},[s("div",{staticClass:"from-title"},[t._v("发件时间：")]),t._v(" "),s("div",{staticClass:"from-content"},[t._v(t._s(t.email.sendTime))])]),t._v(" "),s("div",{staticClass:"from-row"},[s("div",{staticClass:"from-title"},[t._v("邮件摘要：")]),t._v(" "),s("div",{staticClass:"from-content"},[s("div",[t._v(t._s(t.email.desc))])])]),t._v(" "),s("div",{staticClass:"from-row"},[s("div",{staticClass:"email-info-box",domProps:{innerHTML:t._s(t.email.content)}})]),t._v(" "),s("div",{staticClass:"step-btns"},["SEND"!==t.email.status?s("button",{staticClass:"default-button margin-fl",on:{click:t.editEmail}},[t._v("编辑邮件")]):t._e(),t._v(" "),"AWAIT"==t.email.status?s("button",{staticClass:"primary-button",on:{click:t.sendEmail}},[t._v("立即发送")]):t._e()])])]),t._v(" "),t.sendDetail?s("transition",{attrs:{name:"fade",mode:"out-in"}},[s("com-detail",{attrs:{_type:"EMAIL"},on:{handleClick:t.handleClick}})],1):t._e()],1)},[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"live-title"},[i("span",{staticClass:"title"},[this._v("查看邮件")])])}],!1,null,"12920a68",null);h.options.__file="info.vue";i.default=h.exports},560:function(t,i,s){},561:function(t,i,s){},779:function(t,i,s){"use strict";var e=s(560);s.n(e).a},781:function(t,i,s){"use strict";var e=s(561);s.n(e).a}}]);