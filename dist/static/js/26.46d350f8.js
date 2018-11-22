(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{533:function(t,i,a){},534:function(t,i,a){},712:function(t,i,a){"use strict";var e=a(533);a.n(e).a},713:function(t,i,a){"use strict";var e=a(534);a.n(e).a},914:function(t,i,a){"use strict";a.r(i);var e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"live-mager email-box"},[a("div",{staticClass:"live-title"},[a("span",{staticClass:"title"},[t._v("邮件邀约")]),t._v(" "),a("button",{staticClass:"primary-button fr",on:{click:t.addEmail}},[t._v("新建邮件")]),t._v(" "),a("span",{staticClass:"send-box fr"},[t._v("发送限额："+t._s(t.countBalance)+"/"+t._s(t.countTotal))])]),t._v(" "),a("div",{directives:[{name:"ComLoading",rawName:"v-ComLoading",value:t.loading,expression:"loading"}],staticClass:"email-table-box"},[a("div",{staticClass:"tip-box"},[t._v("\n      通过邮件邀约，定制邀约邮件，邀请特定客户群参加直播活动\n    ")]),t._v(" "),a("div",{staticClass:"table-list-box",staticStyle:{"padding-top":"20px"}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.emailList}},[a("el-table-column",{attrs:{prop:"title",label:"邮件标题"}}),t._v(" "),a("el-table-column",{attrs:{prop:"sendTime",label:"发送时间"}}),t._v(" "),a("el-table-column",{attrs:{prop:"sendCount",label:"发送数量"}}),t._v(" "),a("el-table-column",{attrs:{prop:"statusName",label:"状态"},scopedSlots:t._u([{key:"default",fn:function(i){return["DRAFT"==i.row.status?a("span",{staticClass:"cg-status"},[t._v(t._s(i.row.statusName))]):t._e(),t._v(" "),"SEND"==i.row.status?a("span",{staticClass:"fs-status"},[t._v(t._s(i.row.statusName))]):t._e(),t._v(" "),"AWAIT"==i.row.status?a("span",{staticClass:"dd-status"},[t._v(t._s(i.row.statusName))]):t._e(),t._v(" "),"FAIL"==i.row.status?a("span",{staticClass:"del-status"},[t._v(t._s(i.row.statusName))]):t._e()]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(i){return[a("div",{staticClass:"table-handler"},[a("span",{on:{click:function(a){a.stopPropagation(),t.clickEmail(i.$index,t.handleType.info)}}},[t._v("查看")]),t._v(" "),"SEND"!==t.emailList[i.$index].status?a("span",{on:{click:function(a){a.stopPropagation(),t.clickEmail(i.$index,t.handleType.delete)}}},[t._v("删除")]):t._e()])]}}])})],1)],1),t._v(" "),a("div",{staticClass:"pagination-box"},[a("div",{staticClass:"page-pagination"},[a("ve-pagination",{attrs:{total:t.total,pageSize:t.pageSize},on:{changePage:t.changePage}})],1)])])])};e._withStripped=!0;var s=a(30),n=a.n(s),l=a(469),o=a(470),c=a(95),d=a(15),r={info:"queryInfoEmail",send:"sendEmail",edit:"editEmail",delete:"deleteEmail"},u={DRAFT:"草稿",SEND:"已发送",AWAIT:"等待发送",FAIL:"发送失败"},m={name:"index",components:{VePagination:o.a},data:function(){return{pageSize:10,total:0,currentPage:1,activeId:"",sendShow:!1,currentEmailIdx:"",handleType:r,loading:!1,emailList:[{activityId:0,emailInviteId:0,title:"",content:"",desc:"",planTime:"",sendTime:"",senderName:"",sendCount:0,status:"",statusName:""}],countTotal:0,countBalance:0}},computed:{currentEmail:function(){return this.emailList[this.currentEmailIdx]}},created:function(){var t=this.$route.params.id;t||this.$router.go(-1),this.activeId=t,this.getLimit(),this.queryEmailListById()},methods:n()({},Object(c.b)("liveMager",{storeEmailInfo:d.d}),{changePage:function(t){this.currentPage=t,this.queryEmailListById()},queryEmailListById:function(){var t=this;this.$get(l.a.GET_EMAIL_LIST,{activityId:this.activeId,pageSize:this.pageSize,page:this.currentPage}).then(function(i){i.data.list.map(function(t){return t.statusName=u[t.status],t.sendTime=t.sendTime||"--",t.title=t.title||"--",t}),t.total=i.data.total,t.emailList=i.data.list})},clickEmail:function(t,i){var a=this;this.currentEmailIdx=t,i===this.handleType.info?this.queryInfoEmail():i===this.handleType.edit?this.editEmail():i===this.handleType.send?this.sendShow=!0:i===this.handleType.delete&&this.$messageBox({header:"",content:"删除邮件后，邮件内容将无法找回，确认删除？",cancelText:"取消",confirmText:"删除",width:"400px",handleClick:function(t){"confirm"===t.action&&a.delEmail()}})},queryInfoEmail:function(){var t=this.emailList[this.currentEmailIdx];this.storeEmailInfo(t),this.$router.push("/liveMager/emailInfo/"+this.activeId+"?email="+t.emailInviteId)},sendEmail:function(){this.$post(l.a.POST_SEND_EMAIL_INFO,{emailInviteId:this.emailList[this.currentEmailIdx].emailInviteId}).then(function(t){console.log("邮件发送成功"),console.log(t)})},handleClickSendEmail:function(t){this.sendShow=!1,"confirm"===t.action&&this.sendEmail()},delEmail:function(){var t=this,i=this.emailList[this.currentEmailIdx].emailInviteId;this.$post(l.a.POST_DEL_EMAIL,{emailInviteId:i}).then(function(i){t.queryEmailListById()})},editEmail:function(){var t=this.emailList[this.currentEmailIdx];this.storeEmailInfo(t),this.$router.push("/liveMager/emailEdit/"+this.activeId+"?email="+t.emailInviteId)},addEmail:function(){this.$router.push("/liveMager/emailEditOne/"+this.activeId)},getLimit:function(){var t=this;this.$get(l.a.GET_SEND_LIMIT,{activityId:this.activeId,type:"EMAIL"}).then(function(i){console.log(i),t.countBalance=i.data.balance,t.countTotal=i.data.total})}})},h=(a(712),a(713),a(1)),v=Object(h.a)(m,e,[],!1,null,"6533cfb3",null);v.options.__file="src/pages/live-mager/email/index.vue";i.default=v.exports}}]);
//# sourceMappingURL=26.46d350f8.js.map