(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{521:function(t,i,e){"use strict";e.r(i);var s=e(99),a=e.n(s),n=e(138),o=e.n(n),l=e(30),c=e.n(l),r=e(532),u=e(529),d=e(97),m=e(15),v=e(717),_=e(63),f={DRAFT:"草稿",SEND:"已发送",AWAIT:"等待发送"},h={name:"info",data:function(){return{email:{activityId:0,emailInviteId:0,title:"",content:"",desc:"",planTime:"",sendTime:"",senderName:"",sendCount:0,status:"",statusName:""},selectedGroupList:[],selectedTagList:[],groupList:[],tagList:[],sendDetail:!1}},components:{comDetail:v.a},computed:Object(d.c)("liveMager",{emailInfo:function(t){return t.emailInfo}}),watch:{emailInfo:{handler:function(t){this.email=c()({},t)},immediate:!0}},created:function(){_.a.$emit("breads",[{title:"活动管理"},{title:"活动列表",url:"/liveMager/list"},{title:"活动详情",url:"/liveMager/detail/"+this.email.activityId},{title:"邮件邀约",url:"/liveMager/email/"+this.email.activityId},{title:"预览"}]),this.$route.params.id?(this.email.emailInviteId=this.$route.query.email,this.queryTagList().then(this.queryGroupList()).then(this.queryEmailInfo())):this.$router.go(-1)},methods:c()({},Object(d.b)("liveMager",{storeEmailInfo:m.d}),{queryEmailInfo:function(){var t=this;this.email.emailInviteId&&this.$get(u.a.GET_EMAIL_INFO,{emailInviteId:this.email.emailInviteId}).then(function(i){i.data.statusName=f[i.data.status],t.email=i.data,setTimeout(function(){t.reArrangeList(i.data.groupIds.split(","),i.data.tagIds.split(","))},500),t.storeEmailInfo(t.email)})},sendEmail:function(){this.$post(u.a.POST_SEND_EMAIL_INFO,{emailInviteId:this.email.emailInviteId}).then(function(t){console.log("邮件发送成功"),console.log(t)})},editEmail:function(){this.$router.push("/liveMager/emailEditOne/"+this.email.activityId+"?email="+this.email.emailInviteId)},prePage:function(){this.$router.go(-1)},queryGroupList:function(t){var i=this;return o()(a.a.mark(function t(){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.$get(r.a.GET_GROUP_LIST).then(function(t){var e=[];t.data.list.forEach(function(t){e.push({id:t.group_id,name:t.title,count:t.user_count,isChecked:!1})}),i.groupList=e});case 2:case"end":return t.stop()}},t,i)}))()},queryTagList:function(){var t=this;return o()(a.a.mark(function i(){return a.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,t.$get(r.a.GET_TAG_LIST).then(function(i){var e=[];i.data.list.forEach(function(t){e.push({name:t.tag_name,id:t.tag_id,count:t.user_count,isChecked:!1})}),t.tagList=e});case 2:case"end":return i.stop()}},i,t)}))()},reArrangeList:function(t,i){var e=this;this.groupList.forEach(function(i,s){t.forEach(function(t,s){1*t==1*i.id&&e.selectedGroupList.push({count:i.count,id:i.id,isChecked:!0,name:i.name})})}),this.tagList.forEach(function(t,s){i.forEach(function(i,s){1*i==1*t.id&&e.selectedTagList.push({count:t.count,id:t.id,isChecked:!0,name:t.name})})}),console.log(this.selectedGroupList),console.log(this.selectedTagList)},handleClick:function(t){"cancel"===t.action&&(this.sendDetail=!1)}})},p=(e(787),e(788),e(1)),g=Object(p.a)(h,function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"live-mager edit-step-box"},[e("div",{staticClass:"live-title"},[e("span",{staticClass:"title"},[t._v("查看邮件")]),t._v(" "),e("com-back",{class:"back-btn"})],1),t._v(" "),e("div",{staticClass:"tip-box"},[t._v("\n    通过邮件邀约，定制邀约邮件，邀请特定客户群参加直播活动\n  ")]),t._v(" "),e("div",{staticClass:"mager-box border-box"},[e("div",{staticClass:"from-box"},[e("div",{staticClass:"from-row"},[e("div",{staticClass:"from-title"},[t._v("邮件标题：")]),t._v(" "),e("div",{staticClass:"from-content"},[t._v(t._s(t.email.title))])]),t._v(" "),e("div",{staticClass:"from-row"},[e("div",{staticClass:"from-title"},[t._v("发件人：")]),t._v(" "),e("div",{staticClass:"from-content"},[t._v(t._s(t.email.senderName))])]),t._v(" "),e("div",{staticClass:"from-row"},[e("div",{staticClass:"from-title"},[t._v("收件人：")]),t._v(" "),e("div",{staticClass:"from-content receiver"},[t.selectedGroupList.length||t.selectedTagList.length?[e("div",t._l(t.selectedGroupList,function(i,s){return e("span",[t._v(t._s(i.name)),s+1<t.selectedGroupList.length?[t._v("、")]:t._e()],2)})),t._v(" "),e("div",[t._l(t.selectedTagList,function(i,s){return e("span",[t._v(t._s(i.name)),s+1<t.selectedTagList.length?[t._v("、")]:t._e()],2)}),t._v("（合计"+t._s(t.email.expectNum)+"人）\n            ")],2),t._v(" "),"SEND"==t.email.status?e("el-button",{staticClass:"send-detail default-button",on:{click:function(i){t.sendDetail=!0}}},[t._v("发送详情")]):t._e()]:[t._v("\n            暂未选择\n          ")]],2)]),t._v(" "),e("div",{staticClass:"from-row"},[e("div",{staticClass:"from-title"},[t._v("发件状态：")]),t._v(" "),e("div",{staticClass:"from-content"},["DRAFT"==t.email.status?e("span",{staticClass:"cg-status"},[e("i",{staticClass:"iconfont icon-shijian"}),t._v(t._s(t.email.statusName))]):t._e(),t._v(" "),"SEND"==t.email.status?e("span",{staticClass:"fs-status"},[e("i",{staticClass:"iconfont icon-shijian"}),t._v(t._s(t.email.statusName))]):t._e(),t._v(" "),"AWAIT"==t.email.status?e("span",{staticClass:"dd-status"},[e("i",{staticClass:"iconfont icon-shijian"}),t._v(t._s(t.email.statusName))]):t._e()])]),t._v(" "),e("div",{staticClass:"from-row"},[e("div",{staticClass:"from-title"},[t._v("发件时间：")]),t._v(" "),e("div",{staticClass:"from-content"},[t._v(t._s(t.email.sendTime))])]),t._v(" "),e("div",{staticClass:"from-row"},[e("div",{staticClass:"from-title"},[t._v("邮件摘要：")]),t._v(" "),e("div",{staticClass:"from-content"},[e("div",[t._v(t._s(t.email.desc))])])]),t._v(" "),e("div",{staticClass:"from-row"},[e("div",{staticClass:"email-info-box",domProps:{innerHTML:t._s(t.email.content)}})]),t._v(" "),e("div",{staticClass:"step-btns"},["SEND"!==t.email.status?e("button",{staticClass:"default-button margin-fl",on:{click:t.editEmail}},[t._v("编辑邮件")]):t._e(),t._v(" "),"AWAIT"==t.email.status?e("button",{staticClass:"primary-button",on:{click:t.sendEmail}},[t._v("立即发送")]):t._e()])])]),t._v(" "),t.sendDetail?e("transition",{attrs:{name:"fade",mode:"out-in"}},[e("com-detail",{attrs:{_type:"EMAIL"},on:{handleClick:t.handleClick}})],1):t._e()],1)},[],!1,null,"93d87f9e",null);g.options.__file="info.vue";i.default=g.exports},606:function(t,i,e){},607:function(t,i,e){},787:function(t,i,e){"use strict";var s=e(606);e.n(s).a},788:function(t,i,e){"use strict";var s=e(607);e.n(s).a}}]);