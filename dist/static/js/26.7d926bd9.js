(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{1053:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{directives:[{name:"ComLoading",rawName:"v-ComLoading",value:t.loading,expression:"loading"}],staticClass:"content",attrs:{"com-loading-text":"拼命加载中"},on:{click:function(a){return a.stopPropagation(),t.closeAlltool(a)}}},[e("div",{staticClass:"form-row live-mager wechat-list-page"},[e("div",{staticClass:"live-title"},[e("span",{staticClass:"title"},[t._v("微信通知")]),t._v(" "),e("div",{staticClass:"right-box"},[e("router-link",{attrs:{to:{name:"wechatCreate",params:{id:t.queryData.activityId}}}},[e("button",{staticClass:"default-button btn fr"},[t._v("新建微信")])])],1)]),t._v(" "),e("div",{staticClass:"content table"},[e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,stripe:""}},[e("el-table-column",{attrs:{prop:"title",label:"微信标题",width:"300"}}),t._v(" "),e("el-table-column",{attrs:{prop:"time",label:"发送时间",width:"180"}}),t._v(" "),e("el-table-column",{attrs:{prop:"sendCount",label:"发送数量",width:"150"}}),t._v(" "),e("el-table-column",{attrs:{label:"状态",width:"180",prop:"status"},scopedSlots:t._u([{key:"default",fn:function(a){return["AWAIT"===a.row.status?e("span",{staticClass:"await"},[t._v("等待发送")]):t._e(),t._v(" "),"SEND"===a.row.status?e("span",{staticClass:"send"},[t._v("已发送")]):t._e(),t._v(" "),"DRAFT"===a.row.status?e("span",{staticClass:"draft"},[t._v("草稿")]):t._e()]}}])}),t._v(" "),e("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("div",{staticClass:"tool-box"},[e("span",[e("router-link",{attrs:{to:{name:"wechatOverview",query:{id:a.row.inviteId}}}},[t._v("查看")])],1),t._v(" "),"PREPARE"===t.type&&"SEND"!==a.row.status?e("span",{staticClass:"del-btn",on:{click:function(e){t.del(a.row.inviteId,a.$index)}}},[t._v("删除")]):t._e()])]}}])})],1),t._v(" "),e("div",{staticClass:"form-row"},[e("div",{staticClass:"pagination-box"},[e("div",{staticClass:"page-pagination"},[e("ve-pagination",{attrs:{total:t.total,pageSize:t.queryData.pageSize,currentPage:t.currPage},on:{changePage:t.currentChange}})],1)])])],1)]),t._v(" "),t.delConfirm?e("message-box",{attrs:{header:"提示",content:"删除微信后，微信内容将无法找回，确认删除？",cancelText:"取消",confirmText:"确认删除"},on:{handleClick:t.confirmDel}}):t._e()],1)};i._withStripped=!0;var n=e(490),s=e(486),o={data:function(){return{tableData:[{activityId:82,createTime:"2018-08-27 12:34:23",inviteId:3,sendTime:"2018-08-27 03:37:56",status:"SEND",templateId:1,title:"23123"}],queryData:{activityId:this.$route.params.id,page:1,pageSize:10},switchVal:!0,total:1,currPage:1,totalPage:1,moreIdx:NaN,delConfirm:!1,delId:"",delIdx:"",type:"",loading:!1}},created:function(){this.queryList(),this.queryInfo()},methods:{switchAutosend:function(t,a){!1===a[t].autoSend?a[t].autoSend=!0:a[t].autoSend=!1},del:function(t,a){this.delConfirm=!0,this.delId=t,this.delIdx=a},confirmDel:function(t){var a=this;"confirm"===t.action&&this.$post(n.a.POST_DELETE_WECHAT,{inviteId:this.delId}).then(function(t){a.tableData.splice(a.delIdx,1),a.$toast({content:"删除成功",position:"center"}),a.delConfirm=!1}),this.delConfirm=!1},showMore:function(t,a){this.moreIdx=t},closeAlltool:function(t){-1!==t.target.className.search("more")&&-1!==t.target.className.search("more")||this.tableData.forEach(function(t){t.toolShow=!1})},queryList:function(){var t=this;this.$get(n.a.GET_WECHAT_LIST,this.queryData).then(function(a){t.tableData=a.data.list,t.currPage=parseInt(a.data.currPage),t.totalPage=parseInt(a.data.totalPage),t.total=parseInt(a.data.total),t.tableData.forEach(function(t){"SEND"===t.status?t.time=t.sendTime:"AWAIT"===t.status&&(t.time=t.planTime)})})},queryInfo:function(){var t=this;this.$get(s.a.GET_WEBINAR_INFO,{id:this.$route.params.id}).then(function(a){t.type=a.data.status})},currentChange:function(t){this.queryData.page=t,this.queryList()}},components:{VePagination:e(487).a}},r=(e(812),e(814),e(816),e(1)),l=Object(r.a)(o,i,[],!1,null,"0cb2b6a8",null);l.options.__file="src/pages/live-mager/promote/wechat/list.vue";a.default=l.exports},574:function(t,a,e){},575:function(t,a,e){},576:function(t,a,e){},812:function(t,a,e){"use strict";var i=e(574);e.n(i).a},814:function(t,a,e){"use strict";var i=e(575);e.n(i).a},816:function(t,a,e){"use strict";var i=e(576);e.n(i).a}}]);
//# sourceMappingURL=26.7d926bd9.js.map