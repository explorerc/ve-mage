(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{614:function(e,t,a){},814:function(e,t,a){"use strict";var o=a(614);a.n(o).a},881:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"groupDetails"}},[o("header",[e._v(e._s(e.group_title)+"群组（"+e._s(e.total)+"）")]),e._v(" "),o("div",{staticClass:"operation"},[o("div",{staticClass:"opBtns"},[2===e.type?o("el-dropdown",{on:{command:e.dialogImportShow}},[o("el-button",{attrs:{size:"small",round:"",disabled:e.selectRow.length<1}},[e._v("批量操作")]),e._v(" "),o("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[o("el-dropdown-item",{staticStyle:{width:"96px"},attrs:{command:"delall"}},[e._v("删除")])],1)],1):e._e(),e._v(" "),2===e.type?o("el-button",{attrs:{size:"small",round:""},on:{click:e.batchImport}},[e._v("批量导入")]):e._e(),e._v(" "),o("el-button",{attrs:{size:"small",round:"",disabled:!e.tableData.length>0},on:{click:e.exportFile}},[e._v("全部导出")]),e._v(" "),e.dialogImport?o("transition",{attrs:{name:"fade",mode:"out-in"}},[o("com-import",{attrs:{groupId:Number.parseInt(e.search.group_id)},on:{handleClick:e.handleClick}})],1):e._e()],1),e._v(" "),o("el-input",{staticClass:"search",attrs:{size:"small",placeholder:"搜索用户ID/姓名/手机号/邮箱","suffix-icon":"el-icon-search",clearable:""},on:{blur:e.onSearch},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.onSearch(t):null}},model:{value:e.search.keyword,callback:function(t){e.$set(e.search,"keyword",t)},expression:"search.keyword"}})],1),e._v(" "),o("div",{staticClass:"table_box"},[o("el-table",{ref:"multipleTable",staticClass:"el-table",attrs:{data:e.tableData,"tooltip-effect":"dark",border:""},on:{"selection-change":e.handleSelectionChange}},[2===e.type?o("el-table-column",{attrs:{type:"selection",width:"55"}}):e._e(),e._v(" "),o("el-table-column",{attrs:{label:"用户信息"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("div",{staticClass:"user_info"},[o("img",{attrs:{src:t.row.avatar?e.$imgHost+"/"+t.row.avatar:a(549),alt:""}}),e._v(" "),o("div",[o("span",{staticClass:"table_info"},[e._v(e._s(t.row.real_name))]),e._v("   "),o("span",{staticClass:"table_info"},[e._v(e._s(e._f("getSex")(t.row.sex))+" ")]),e._v(" "),o("div",{domProps:{innerHTML:e._s(t.row.user_level)}})])])]}}])}),e._v(" "),o("el-table-column",{attrs:{prop:"phone",label:"手机号"}}),e._v(" "),o("el-table-column",{attrs:{prop:"email",label:"邮箱"}}),e._v(" "),o("el-table-column",{attrs:{prop:"attention_goods_count",label:"参与（次）"}}),e._v(" "),o("el-table-column",{attrs:{prop:"updated_at",label:"最后活跃"}}),e._v(" "),o("el-table-column",{attrs:{prop:"remark",label:"备注"}}),e._v(" "),o("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-button",{staticClass:"btns",attrs:{type:"text",size:"mini"},on:{click:function(a){e.handleDetails(t.row.business_consumer_uid)}}},[e._v("详情\n          ")]),e._v(" "),2==e.type?o("el-button",{staticClass:"btns",attrs:{type:"text",size:"mini"},on:{click:function(a){e.handleDelete(t.row.business_consumer_uid,t.$index)}}},[e._v("删除\n          ")]):e._e()]}}])})],1),e._v(" "),o("VePagination",{staticClass:"VePagination",attrs:{pageSize:e.search.pageSize,total:e.total},on:{changePage:e.changePage}})],1)])};o._withStripped=!0;var s=a(453),n=a.n(s),l=a(471),i=a(611),r=a(648),c=a(665),u={name:"group-details",components:{VePagination:l.a,comImport:c.a,comAddgroup:r.a},created:function(){this.onSearch(),this.getGroupDetail()},filters:{getSex:function(e){return"M"===e?"男":"女"}},data:function(){return{selectRow:[],group_title:"",tableData:[],dialogTitle:"",dialogImport:!1,Group:{name:"",description:"",region:"",resource:"1"},type:n()(this.$route.params.type),search:{group_id:this.$route.params.id,keyword:"",page:1,pageSize:10},total:0}},methods:{handleClick:function(){this.dialogImport=!1,this.onSearch()},onSearch:function(){var e=this;this.$post(i.a.USER_LISTS,this.search).then(function(t){e.total=n()(t.data.count),t.data.list.forEach(function(e){var t=void 0;switch(e.user_level){case 1:t='<span style="color:#0FBDAA;">优质用户</span>';break;case 2:t='<span style="color:#714CEA;">高价值用户</span>';break;case 3:t='<span style="color:#FFAA00;">一般客户</span>';break;case 4:t='<span style="color:#FB5757;">潜在用户</span>';break;case 5:t='<span style="color:#333333;">流失客户</span>';break;case 0:t='<span style="color:#4B5AFE;">没有评级</span>'}e.user_level=t}),e.tableData=t.data.list})},changePage:function(e){this.search.page=e,this.onSearch()},handleDetails:function(e){this.$router.push("/userManage/info/"+e)},dialogImportShow:function(e){"delall"===e?this.delAll():"export"===e&&this.exportFile()},delAll:function(){var e=this.selectRow.map(function(e){return e.business_consumer_uid});this.handleDelete(e.join())},exportFile:function(){var e="/api"+i.a.USER_EXPORT+"?group_id="+this.search.group_id+"&&keyword="+this.search.keyword;window.location.href=e},batchImport:function(){this.dialogImport=!0,this.dialogTitle="批量导入"},getGroupDetail:function(){var e=this;this.$post(i.a.GROUP_DETAIL,{group_id:this.search.group_id}).then(function(t){e.group_title=t.data.title})},handleSelectionChange:function(e){this.selectRow=e},handleDelete:function(e,t){var a=this;this.$messageBox({header:"删除用戶",type:"error",width:"450px",content:"是否从群组内删除该用户",cancelText:"暂不",confirmText:"删除",handleClick:function(t){console.log(t),"cancel"===t.action?a.$message({type:"info",message:"已取消删除"}):"confirm"===t.action&&a.$post(i.a.DEL_GROUP_USER,{business_consumer_uids:e,group_id:a.search.group_id}).then(function(e){setTimeout(function(){a.onSearch()},0),a.$message({type:"success",message:"删除成功!"})})}})}}},p=(a(814),a(2)),d=Object(p.a)(u,o,[],!1,null,"0e63f167",null);d.options.__file="src/pages/user-groups/group-details.vue";t.default=d.exports}}]);
//# sourceMappingURL=42.c937233b.js.map