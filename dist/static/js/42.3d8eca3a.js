(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{615:function(t,e,a){},818:function(t,e,a){"use strict";var o=a(615);a.n(o).a},903:function(t,e,a){"use strict";a.r(e);var o=a(454),n=a.n(o),s=a(472),l=a(482),i=a(650),r=a(668),c={name:"group-details",components:{VePagination:s.a,comImport:r.a,comAddgroup:i.a},created:function(){this.onSearch(),this.getGroupDetail()},filters:{getSex:function(t){return t?"M"===t?"男":"女":"未知"}},data:function(){return{selectRow:[],group_title:"",tableData:[],dialogTitle:"",dialogImport:!1,Group:{name:"",description:"",region:"",resource:"1"},type:n()(this.$route.params.type),search:{group_id:this.$route.params.id,keyword:"",page:1,pageSize:10},total:0}},methods:{handleClick:function(){this.dialogImport=!1,this.onSearch()},onSearch:function(){var t=this;this.$post(l.a.USER_LISTS,this.search).then(function(e){t.total=n()(e.data.count),e.data.list.forEach(function(t){var e=void 0;switch(t.user_level){case 1:e='<span style="color:#0FBDAA;">优质用户</span>';break;case 2:e='<span style="color:#714CEA;">高价值用户</span>';break;case 3:e='<span style="color:#FFAA00;">一般客户</span>';break;case 4:e='<span style="color:#FB5757;">潜在用户</span>';break;case 5:e='<span style="color:#333333;">流失客户</span>';break;case 0:e='<span style="color:#4B5AFE;">没有评级</span>'}t.user_level=e}),t.tableData=e.data.list})},changePage:function(t){this.search.page=t,this.onSearch()},handleDetails:function(t){this.$router.push("/userManage/info/"+t)},dialogImportShow:function(t){"delall"===t?this.delAll():"export"===t&&this.exportFile()},delAll:function(){var t=this.selectRow.map(function(t){return t.business_consumer_uid});this.handleDelete(t.join())},exportFile:function(){var t="/api"+l.a.USER_EXPORT+"?group_id="+this.search.group_id+"&&keyword="+this.search.keyword;window.location.href=t},batchImport:function(){this.dialogImport=!0,this.dialogTitle="批量导入"},getGroupDetail:function(){var t=this;this.$post(l.a.GROUP_DETAIL,{group_id:this.search.group_id}).then(function(e){t.group_title=e.data.title})},handleSelectionChange:function(t){this.selectRow=t},handleDelete:function(t,e){var a=this;this.$messageBox({header:"删除用戶",type:"error",width:"450px",content:"是否从群组内删除该用户",cancelText:"暂不",confirmText:"删除",handleClick:function(e){"cancel"===e.action?a.$toast({content:"已取消删除!",position:"center"}):"confirm"===e.action&&a.$post(l.a.DEL_GROUP_USER,{business_consumer_uids:t,group_id:a.search.group_id}).then(function(t){setTimeout(function(){a.onSearch()},0),a.$toast({content:"删除成功!",position:"center"})})}})}}},u=(a(818),a(2)),p=Object(u.a)(c,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"groupDetails"}},[o("header",[t._v(t._s(t.group_title)+"群组（"+t._s(t.total)+"）")]),t._v(" "),o("div",{staticClass:"operation"},[o("div",{staticClass:"opBtns"},[2===t.type?o("el-dropdown",{on:{command:t.dialogImportShow}},[o("el-button",{attrs:{size:"small",round:"",disabled:t.selectRow.length<1}},[t._v("批量操作")]),t._v(" "),o("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[o("el-dropdown-item",{staticStyle:{width:"96px"},attrs:{command:"delall"}},[t._v("删除")])],1)],1):t._e(),t._v(" "),2===t.type?o("el-button",{attrs:{size:"small",round:""},on:{click:t.batchImport}},[t._v("批量导入")]):t._e(),t._v(" "),o("el-button",{attrs:{size:"small",round:"",disabled:!t.tableData.length>0},on:{click:t.exportFile}},[t._v("全部导出")]),t._v(" "),t.dialogImport?o("com-import",{attrs:{isFixed:"0",isDis:!0,groupId:Number.parseInt(t.search.group_id)},on:{handleClick:t.handleClick}}):t._e()],1),t._v(" "),o("el-input",{staticClass:"search",attrs:{size:"small",placeholder:"搜索用户ID/姓名/手机号/邮箱","suffix-icon":"el-icon-search",clearable:""},on:{blur:t.onSearch},nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.onSearch(e):null}},model:{value:t.search.keyword,callback:function(e){t.$set(t.search,"keyword",e)},expression:"search.keyword"}})],1),t._v(" "),o("div",{staticClass:"table_box"},[o("el-table",{ref:"multipleTable",staticClass:"el-table",attrs:{data:t.tableData,"tooltip-effect":"dark",border:""},on:{"selection-change":t.handleSelectionChange}},[2===t.type?o("el-table-column",{attrs:{type:"selection",width:"55"}}):t._e(),t._v(" "),o("el-table-column",{attrs:{label:"用户信息"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("div",{staticClass:"user_info"},[o("img",{attrs:{src:e.row.avatar?t.$imgHost+"/"+e.row.avatar:a(479),alt:""}}),t._v(" "),o("div",[o("span",{staticClass:"table_info"},[t._v(t._s(e.row.real_name?e.row.real_name:e.row.nickname))]),t._v("   \n              "),o("span",{staticClass:"table_info"},[t._v(t._s(t._f("getSex")(e.row.sex))+" ")]),t._v(" "),o("div",{domProps:{innerHTML:t._s(e.row.user_level)}})])])]}}])}),t._v(" "),o("el-table-column",{attrs:{prop:"phone",label:"手机号"}}),t._v(" "),o("el-table-column",{attrs:{prop:"email",label:"邮箱","show-overflow-tooltip":""}}),t._v(" "),o("el-table-column",{attrs:{prop:"join_count",label:"参与（次）"}}),t._v(" "),o("el-table-column",{attrs:{prop:"updated_at",label:"最后活跃","show-overflow-tooltip":""}}),t._v(" "),o("el-table-column",{attrs:{prop:"remark",label:"备注"}}),t._v(" "),o("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("el-button",{staticClass:"btns",attrs:{type:"text",size:"mini"},on:{click:function(a){t.handleDetails(e.row.business_consumer_uid)}}},[t._v("详情\n          ")]),t._v(" "),2==t.type?o("el-button",{staticClass:"btns",attrs:{type:"text",size:"mini"},on:{click:function(a){t.handleDelete(e.row.business_consumer_uid,e.$index)}}},[t._v("删除\n          ")]):t._e()]}}])})],1),t._v(" "),o("VePagination",{staticClass:"VePagination",attrs:{pageSize:t.search.pageSize,total:t.total},on:{changePage:t.changePage}})],1)])},[],!1,null,"206e0999",null);p.options.__file="group-details.vue";e.default=p.exports}}]);