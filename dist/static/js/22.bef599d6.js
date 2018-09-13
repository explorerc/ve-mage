(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{172:function(a,e,t){"use strict";var s=t(5);const i={queryList:a=>s.a.ajax({method:"post",url:"/manage/base-manage/list-activity",params:a}),deleteById:a=>s.a.ajax({method:"post",url:"/manage/base-manage/del-activity",params:{id:a}}),queryWarmInfoById:a=>s.a.ajax({method:"post",url:"/manage/warm-up-manage/get",params:{activityId:a}}),saveAndEditWarmInfo:a=>s.a.ajax({method:"post",url:"/manage/warm-up-manage/edit",params:a}),queryReminderInfoById:a=>s.a.ajax({method:"post",url:"/",params:{id:a}}),saveReminderInfo:a=>s.a.ajax({method:"post",url:"/",params:a}),roleList:a=>s.a.ajax({method:"GET",url:"/manage/role-manage/list-role",params:{activityId:a}}),delAss:a=>s.a.ajax({method:"POST",url:"/manage/role-manage/del-assistant",params:a}),handleAss:(a,e)=>s.a.ajax({method:"POST",url:a?"/manage/role-manage/update-assistant":"/manage/role-manage/add-assistant",params:e}),getLimit:a=>s.a.ajax({method:"GET",url:"/manage/view-limit/get-limit",params:{activityId:a}}),saveLimit:a=>s.a.ajax({method:"POST",url:"/manage/view-limit/update-limit",params:a}),webinarInfo:a=>s.a.ajax({method:"GET",url:"/manage/base-manage/detail-activity",params:{id:a}}),updateWebinfo:(a,e)=>s.a.ajax({method:"POST",url:a?"/manage/base-manage/add-activity":"/manage/base-manage/update-activity",params:e}),queryEmailList:a=>s.a.ajax({method:"post",url:"/expand/email-invite/list",params:a}),deleteEmailById:a=>s.a.ajax({method:"post",url:"/expand/email-invite/delete",params:{emailInviteId:a}}),queryEmailInfoById:a=>s.a.ajax({method:"post",url:"/expand/email-invite/query",params:{emailInviteId:a}}),queryEmailTemplateList:()=>s.a.ajax({method:"post",url:"/expand/email-invite/templates",params:{}}),sendEmailInfo:a=>s.a.ajax({method:"post",url:"/expand/email-invite/send",params:a}),sendTimerEmailInfo:a=>s.a.ajax({method:"post",url:"/expand/email-invite/save-and-plansend",params:a}),sendTestEmailInfo:a=>s.a.ajax({method:"post",url:"/expand/email-invite/test-send",params:a}),saveAndsendEmail:a=>s.a.ajax({method:"post",url:"/expand/email-invite/save-and-send",params:a}),saveEmailInfo:a=>s.a.ajax({method:"post",url:"/expand/email-invite/save-draft",params:a}),saveWechat:a=>s.a.ajax({method:"post",url:"/expand/wechat-invite/save",params:a}),saveMsg:a=>s.a.ajax({method:"post",url:"/expand/sms-invite/save",params:a}),queryWechat:a=>s.a.ajax({method:"post",url:"/expand/wechat-invite/query",params:{inviteId:a}}),queryMsg:a=>s.a.ajax({method:"post",url:"/expand/sms-invite/query",params:{inviteId:a}}),queryWechatlist:a=>s.a.ajax({method:"post",url:"/expand/wechat-invite/list",params:a}),queryMsglist:a=>s.a.ajax({method:"post",url:"/expand/sms-invite/list",params:a}),deleteWechat:a=>s.a.ajax({method:"post",url:"/expand/wechat-invite/delete",params:{inviteId:a}}),deleteMsg:a=>s.a.ajax({method:"post",url:"/expand/sms-invite/delete",params:{inviteId:a}}),queryPassSdkInfo:()=>s.a.ajax({method:"post",url:"/common/pass-sdk/create-access-token",params:{}})};e.a=i},221:function(a,e,t){},325:function(a,e,t){"use strict";var s=t(221);t.n(s).a},368:function(a,e,t){"use strict";t.r(e);var s=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"content",on:{click:function(e){return e.stopPropagation(),a.closeAlltool(e)}}},[t("div",{staticClass:"form-row"},[t("el-button",[t("router-link",{attrs:{to:{name:"wechatCreate",params:{id:a.queryData.activityId}}}},[a._v("新建")])],1),a._v(" "),t("div",{staticClass:"content"},[t("el-table",{staticStyle:{width:"100%"},attrs:{data:a.tableData,stripe:""}},[t("el-table-column",{attrs:{prop:"title",label:"任务标题",width:"200"}}),a._v(" "),t("el-table-column",{attrs:{prop:"templateId",label:"任务模版",width:"200"}}),a._v(" "),t("el-table-column",{attrs:{prop:"sendTime",label:"发送时间",width:"200"}}),a._v(" "),t("el-table-column",{attrs:{label:"观众分组",width:"200",prop:"groupId"}}),a._v(" "),t("el-table-column",{attrs:{label:"状态",width:"200",prop:"status"},scopedSlots:a._u([{key:"default",fn:function(e){return["AWAIT"===e.row.status?t("span",[a._v("等待发送")]):a._e(),a._v(" "),"SEND"===e.row.status?t("span",[a._v("已发送")]):a._e(),a._v(" "),"DRAFT"===e.row.status?t("span",[a._v("草稿")]):a._e()]}}])}),a._v(" "),t("el-table-column",{attrs:{label:"操作"},scopedSlots:a._u([{key:"default",fn:function(e){return[t("div",{staticClass:"tool-box"},[t("span",[t("router-link",{attrs:{to:{name:"wechatOverview",query:{id:e.row.inviteId}}}},[a._v("查看")])],1),a._v(" "),t("span",{on:{click:function(t){a.del(e.row.inviteId,e.$index)}}},[a._v("删除")])])]}}])})],1)],1)],1),a._v(" "),t("div",{staticClass:"form-row"},[t("div",{staticClass:"block"},[t("el-pagination",{attrs:{layout:"prev, pager, next",total:a.total,"current-page":a.currPage,"page-count":a.totalPage},on:{"current-change":a.currentChange}})],1)]),a._v(" "),a.delConfirm?t("message-box",{attrs:{header:"提示",content:"删除短信后，短信内容将无法找回，确认删除？",cancelText:"取消",confirmText:"确认删除"},on:{handleClick:a.confirmDel}}):a._e()],1)};s._withStripped=!0;var i=t(172),r={data(){return{tableData:[{activityId:82,createTime:"2018-08-27 12:34:23",groupId:"1",inviteId:3,sendTime:"2018-08-27 03:37:56",status:"SEND",templateId:1,title:"23123"}],queryData:{activityId:this.$route.params.id,page:1,pageSize:10},switchVal:!0,total:1,currPage:1,totalPage:1,moreIdx:NaN,delConfirm:!1,delId:"",delIdx:""}},created(){this.queryList()},methods:{switchAutosend(a,e){!1===e[a].autoSend?e[a].autoSend=!0:e[a].autoSend=!1},del(a,e){this.delConfirm=!0,this.delId=a,this.delIdx=e},confirmDel(a){"confirm"===a.action&&i.a.deleteWechat(this.delId).then(a=>{this.tableData.splice(this.delIdx,1),this.$toast({content:"删除成功",position:"center"}),this.delConfirm=!1}).catch(a=>{console.log(a)}),this.delConfirm=!1},showMore(a,e){this.moreIdx=a},closeAlltool(a){-1!==a.target.className.search("more")&&-1!==a.target.className.search("more")||this.tableData.forEach(a=>{a.toolShow=!1})},queryList(){i.a.queryWechatlist(this.queryData).then(a=>{console.log(a),this.tableData=a.data.list,this.currPage=parseInt(a.data.currPage),this.totalPage=parseInt(a.data.totalPage),this.total=parseInt(a.data.total)}).catch(a=>{console.log(a)})},currentChange(a){this.queryData.page=a,this.queryList()}}},n=(t(325),t(1)),l=Object(n.a)(r,s,[],!1,null,"0cb2b6a8",null);l.options.__file="src\\pages\\live-mager\\promote\\wechat\\list.vue";e.default=l.exports}}]);
//# sourceMappingURL=22.bef599d6.js.map