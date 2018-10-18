(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{263:function(t,i,e){},264:function(t,i,e){},376:function(t,i,e){"use strict";var a=e(263);e.n(a).a},377:function(t,i,e){"use strict";var a=e(264);e.n(a).a},503:function(t,i,e){"use strict";e.r(i);var a=e(10),s=e.n(a),n=e(217),l=e(225),o=e(48),c=e(15),d={info:"queryInfoEmail",send:"sendEmail",edit:"editEmail",delete:"deleteEmail"},r={DRAFT:"草稿",SEND:"已发送",AWAIT:"等待发送",FAIL:"发送失败"},u={name:"index",components:{VePagination:l.a},data:function(){return{pageSize:10,total:0,currentPage:1,activeId:"",sendShow:!1,currentEmailIdx:"",handleType:d,loading:!1,emailList:[{activityId:0,emailInviteId:0,title:"",content:"",desc:"",planTime:"",sendTime:"",senderName:"",sendCount:0,status:"",statusName:""}]}},computed:{currentEmail:function(){return this.emailList[this.currentEmailIdx]}},created:function(){var t=this.$route.params.id;t||this.$router.go(-1),this.activeId=t,this.queryEmailListById()},methods:s()({},Object(o.b)("liveMager",{storeEmailInfo:c.a}),{changePage:function(t){this.currentPage=t,this.queryEmailListById()},queryEmailListById:function(){var t=this;this.$get(n.a.GET_EMAIL_LIST,{activityId:this.activeId,pageSize:this.pageSize,page:this.currentPage}).then(function(i){i.data.list.map(function(t){return t.statusName=r[t.status],t.sendTime=t.sendTime||"--",t.title=t.title||"--",t}),t.total=i.data.total,t.emailList=i.data.list})},clickEmail:function(t,i){var e=this;this.currentEmailIdx=t,i===this.handleType.info?this.queryInfoEmail():i===this.handleType.edit?this.editEmail():i===this.handleType.send?this.sendShow=!0:i===this.handleType.delete&&this.$messageBox({header:"",content:"删除邮件后，邮件内容将无法找回，确认删除？",cancelText:"取消",confirmText:"删除",width:"400px",handleClick:function(t){"confirm"===t.action&&e.delEmail()}})},queryInfoEmail:function(){var t=this.emailList[this.currentEmailIdx];this.storeEmailInfo(t),this.$router.push("/liveMager/emailInfo/"+this.activeId+"?email="+t.emailInviteId)},sendEmail:function(){this.$post(n.a.POST_SEND_EMAIL_INFO,{emailInviteId:this.emailList[this.currentEmailIdx].emailInviteId}).then(function(t){console.log("邮件发送成功"),console.log(t)})},handleClickSendEmail:function(t){this.sendShow=!1,"confirm"===t.action&&this.sendEmail()},delEmail:function(){var t=this,i=this.emailList[this.currentEmailIdx].emailInviteId;this.$post(n.a.POST_DEL_EMAIL,{emailInviteId:i}).then(function(i){t.queryEmailListById()})},editEmail:function(){var t=this.emailList[this.currentEmailIdx];this.storeEmailInfo(t),this.$router.push("/liveMager/emailEdit/"+this.activeId+"?email="+t.emailInviteId)},addEmail:function(){this.$router.push("/liveMager/emailEditOne/"+this.activeId)}})},m=(e(376),e(377),e(1)),h=Object(m.a)(u,function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"live-mager email-box"},[e("div",{staticClass:"live-title"},[e("span",{staticClass:"title"},[t._v("邮件邀约")]),t._v(" "),e("button",{staticClass:"primary-button fr",on:{click:t.addEmail}},[t._v("新建邮件")]),t._v(" "),e("span",{staticClass:"send-box fr"},[t._v("发送限额：2399/10000")])]),t._v(" "),e("div",{directives:[{name:"ComLoading",rawName:"v-ComLoading",value:t.loading,expression:"loading"}],staticClass:"email-table-box"},[e("div",{staticClass:"tip-box"},[t._v("\n      通过邮件邀约，定制邀约邮件，邀请特定客户群参加直播活动\n    ")]),t._v(" "),e("div",{staticClass:"table-list-box",staticStyle:{"padding-top":"20px"}},[e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.emailList}},[e("el-table-column",{attrs:{prop:"title",label:"邮件标题"}}),t._v(" "),e("el-table-column",{attrs:{prop:"sendTime",label:"发送时间"}}),t._v(" "),e("el-table-column",{attrs:{prop:"sendCount",label:"发送数量"}}),t._v(" "),e("el-table-column",{attrs:{prop:"statusName",label:"状态"},scopedSlots:t._u([{key:"default",fn:function(i){return["DRAFT"==i.row.status?e("span",{staticClass:"cg-status"},[t._v(t._s(i.row.statusName))]):t._e(),t._v(" "),"SEND"==i.row.status?e("span",{staticClass:"fs-status"},[t._v(t._s(i.row.statusName))]):t._e(),t._v(" "),"AWAIT"==i.row.status?e("span",{staticClass:"dd-status"},[t._v(t._s(i.row.statusName))]):t._e(),t._v(" "),"FAIL"==i.row.status?e("span",{staticClass:"del-status"},[t._v(t._s(i.row.statusName))]):t._e()]}}])}),t._v(" "),e("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(i){return[e("div",{staticClass:"table-handler"},[e("span",{on:{click:function(e){e.stopPropagation(),t.clickEmail(i.$index,t.handleType.info)}}},[t._v("查看")]),t._v(" "),"SEND"!==t.emailList[i.$index].status?e("span",{on:{click:function(e){e.stopPropagation(),t.clickEmail(i.$index,t.handleType.delete)}}},[t._v("删除")]):t._e()])]}}])})],1)],1),t._v(" "),e("div",{staticClass:"pagination-box"},[e("div",{staticClass:"page-pagination"},[e("ve-pagination",{attrs:{total:t.total,pageSize:t.pageSize},on:{changePage:t.changePage}})],1)])])])},[],!1,null,"f447a0c0",null);h.options.__file="index.vue";i.default=h.exports}}]);