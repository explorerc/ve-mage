(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{188:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"goods-list"}},[a("header",[a("p",[t._v("商品列表")]),t._v(" "),a("div",{staticClass:"btn-box"},[a("span",[t._v("共"+t._s(t.total)+"件商品")]),t._v(" "),a("com-button",{staticClass:"add-goods primary-button",attrs:{round:""},on:{click:t.createGoods}},[t._v("\n        新建商品\n      ")])],1)]),t._v(" "),a("div",{staticClass:"table-box"},[a("table",{attrs:{border:"1"}},[t._m(0),t._v(" "),a("tbody",t._l(t.tableData,function(e,i){return a("tr",{key:i},[a("td",[t._v(t._s(e.id<10?"0"+e.id:e.id))]),t._v(" "),a("td",[a("img",{staticClass:"cover_img",attrs:{src:e.imgUrl}})]),t._v(" "),a("td",[t._v(t._s(e.name))]),t._v(" "),a("td",[t._v(t._s("0"===e.added?"已下架":"已上架"))]),t._v(" "),a("td",[t._v("\n            "+t._s(e.price)+"\n          ")]),t._v(" "),a("td",{staticClass:"dis-prices"},[t._v(t._s(e.disprice?e.disprice:0))]),t._v(" "),a("td",{staticStyle:{width:"15%","min-width":"140px"}},[a("div",{staticClass:"btn-box"},[a("el-button",{attrs:{type:"text"},on:{click:function(a){t.handleEdit(e.id)}}},[t._v("编辑")]),t._v(" "),a("el-button",{attrs:{type:"text"},on:{click:function(a){t.handleShelf(e.added)}}},[t._v(t._s("0"===e.added?"上架":"下架")+"\n              ")]),t._v(" "),a("el-button",{attrs:{type:"text"},on:{click:function(a){t.handleDelete(e,i)}}},[t._v("删除")])],1)])])}))]),t._v(" "),t.total>t.searchParams.pageSize?a("div",{staticClass:"page-pagination"},[a("ve-pagination",{attrs:{total:t.total,pageSize:t.searchParams.pageSize,currentPage:t.currentPage},on:{changePage:t.changePage}})],1):t._e()])])};i._withStripped=!0;var n=a(9),s=a.n(n),r=a(176),o=a.n(r),d=a(201),c=a(59),l=a(190),_={components:{draggable:o.a,VePagination:l.a},data:function(){return{tableData:[{id:1,name:"都市轻食 沙拉菜组合 约700g 新鲜蔬菜",kindId:8,price:108,disprice:null,imgUrl:"https://img12.360buyimg.com/n1/jfs/t4615/75/2562967019/401522/7ac201c3/58f0a6e2Ne90f3e12.jpg",inventory:12,added:"0"}],isInit:!1,timerShelf:null,isShowlive:null,isNoGoods:!1,searchParams:{type:"",date:"",page:1,pageSize:10},total:null,currentPage:1}},created:function(){c.a.$emit("breads",[{title:"商品管理"},{title:"商品列表",url:"/goodMager/list/"}])},mounted:function(){this.queryList()},watch:{tableData:{handler:function(t,e){t.length>=1&&this.isInit},deep:!0}},methods:{changePage:function(t){this.searchParams.page=t,this.queryList()},queryList:function(){var t=this;this.$nextTick(function(){t.$get(d.a.GET_GOODS_PAGE,s()({},t.searchParams)).then(function(e){200===e.code&&(t.total=e.data.total,t.tableData=e.data.info)})})},createGoods:function(){this.$router.push("/goodMager/edit/create")},handleEdit:function(t){this.$router.push("/goodMager/edit/"+t+"/update")}}},u=(a(227),a(0)),v=Object(u.a)(_,i,[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("商品id")]),t._v(" "),a("th",[t._v("封面图")]),t._v(" "),a("th",[t._v("商品名称")]),t._v(" "),a("th",[t._v("商品状态")]),t._v(" "),a("th",[t._v("原始价格")]),t._v(" "),a("th",[t._v("优惠价格")]),t._v(" "),a("th",{staticStyle:{width:"15%","min-width":"140px"}},[t._v("操作")])])])}],!1,null,"207eabc9",null);v.options.__file="src/pages/good-mager/list.vue";e.default=v.exports},203:function(t,e,a){},227:function(t,e,a){"use strict";var i=a(203);a.n(i).a}}]);
//# sourceMappingURL=10.d9fbd558.js.map