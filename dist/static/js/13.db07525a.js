(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{181:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"kind-list"}},[t._m(0),t._v(" "),a("div",{staticClass:"table-box"},[a("table",{attrs:{border:"1"}},[t._m(1),t._v(" "),a("draggable",{attrs:{element:"tbody"}},t._l(t.tableData,function(e,i){return a("tr",{key:i},[a("td",[t._v(t._s(e.id<10?"0"+e.id:e.id))]),t._v(" "),a("td",[t._v(t._s(e.name))]),t._v(" "),a("td",[t._v(t._s(e.openId))]),t._v(" "),a("td",[t._v(t._s(e.nickname))]),t._v(" "),a("td",[t._v(t._s(e.address))]),t._v(" "),a("td",[t._v(t._s(e.tel))]),t._v(" "),a("td",[t._v(t._s(e.postCode))]),t._v(" "),a("td",[t._v(t._s(e.birth))]),t._v(" "),a("td",{staticStyle:{width:"15%","min-width":"140px"}},[a("div",{staticClass:"btn-box"},[a("el-button",{attrs:{type:"text"},on:{click:function(a){t.handleEdit(e.id)}}},[t._v("编辑")]),t._v(" "),a("el-button",{attrs:{type:"text"},on:{click:function(a){t.handleDelete(e)}}},[t._v("删除")])],1)])])}))],1),t._v(" "),t.total>t.searchParams.pageSize?a("div",{staticClass:"page-pagination"},[a("ve-pagination",{attrs:{total:t.total,pageSize:t.searchParams.pageSize,currentPage:t.currentPage},on:{changePage:t.changePage}})],1):t._e()]),t._v(" "),t.isDelShow?a("message-box",{staticClass:"kind-edit",attrs:{width:"464px",type:"error"},on:{handleClick:t.handleDelShow}},[a("div",{staticClass:"mager-box message-box-content"},[t._v("\n            删除该粉丝后，将无法再找回，请问要删除吗？\n        ")])]):t._e()],1)};i._withStripped=!0;var n=a(9),s=a.n(n),o=a(176),r=a.n(o),d="/user/page",l=a(59),c=a(190),_={components:{draggable:r.a,VePagination:c.a},data:function(){return{tableData:[{id:1,name:""}],isInit:!1,isNoGoods:!1,isEditShow:!1,isDelShow:!1,editTitle:"",kindInfo:{id:null,name:""},kindError:"",searchParams:{type:"",date:"",page:1,pageSize:10},total:null,currentPage:1}},created:function(){this.queryList(),l.a.$emit("breads",[{title:"用户管理"},{title:"粉丝管理",url:"/goodMager/list/"}])},mounted:function(){},watch:{tableData:{handler:function(t,e){t.length>=1&&this.isInit},deep:!0}},methods:{queryList:function(){var t=this;this.$get(d,s()({},this.searchParams)).then(function(e){200===e.code&&(t.tableData=e.data.info,t.total=e.data.total,t.tableData.length<1?t.isNoGoods=!0:t.isNoGoods=!1)}).catch(function(){t.tableData=[]})},handleEdit:function(t){},handleDelete:function(t){this.isDelShow=!0,this.kindInfo=t},handleDelShow:function(t){"cancel"===t.action&&(this.isDelShow=!1)},changePage:function(t){this.searchParams.page=t,this.queryList()}}},h=(a(233),a(0)),v=Object(h.a)(_,i,[function(){var t=this.$createElement,e=this._self._c||t;return e("header",[e("p",[this._v("粉丝管理")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("id")]),t._v(" "),a("th",[t._v("名字")]),t._v(" "),a("th",[t._v("openId")]),t._v(" "),a("th",[t._v("昵称")]),t._v(" "),a("th",[t._v("地址")]),t._v(" "),a("th",[t._v("电话")]),t._v(" "),a("th",[t._v("postCode")]),t._v(" "),a("th",[t._v("生日")]),t._v(" "),a("th",{staticStyle:{width:"15%","min-width":"140px"}},[t._v("操作")])])])}],!1,null,"b628375a",null);v.options.__file="src/pages/user-mager/user-list.vue";e.default=v.exports},209:function(t,e,a){},233:function(t,e,a){"use strict";var i=a(209);a.n(i).a}}]);
//# sourceMappingURL=13.db07525a.js.map