(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{642:function(t,e,a){},845:function(t,e,a){"use strict";var n=a(642);a.n(n).a},891:function(t,e,a){"use strict";a.r(e);var n=a(453),s={components:{draggable:a.n(n).a},data:function(){return{tableData:[{id:"1",date:"2016-05-02",name:"王小虎1",address:"上海市普陀区金沙江路 100 弄"},{id:"2",date:"2016-05-04",name:"王小虎2",address:"上海市普陀区金沙江路 200 弄"},{id:"3",date:"2016-05-01",name:"王小虎3",address:"上海市普陀区金沙江路 300 弄"},{id:"4",date:"2016-05-03",name:"王小虎4",address:"上海市普陀区金沙江路 400 弄"}],arr:[1,2,3,4,5,6,7],myArray:[{id:1,name:1},{id:2,name:2},{id:3,name:3},{id:4,name:5}]}},methods:{createGoods:function(){this.$router.push("/salesTools/recommendGoodsInfo")},check:function(){},handleShelf:function(){},handleEdit:function(t,e){this.$router.push("/salesTools/recommendGoodsInfo/45"),console.log(this.tableData),console.log(t,e)},handleDelete:function(t,e){var a=this;this.$messageBox({header:"删除该商品",type:"error",width:"450px",content:"删除后观看页将不再显示该商品",cancelText:"取消",confirmText:"删除",handleClick:function(t){"cancel"===t.action?a.$toast({content:"已取消删除",position:"center"}):t.action}})}}},o=(a(845),a(2)),i=Object(o.a)(s,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"goods-list"}},[n("header",[n("p",[t._v("商品推荐")]),t._v(" "),t.tableData.length>1?n("div",[n("el-button",{attrs:{round:""},on:{click:t.check}},[t._v("查看活动数据")]),t._v(" "),n("el-button",{staticClass:"add-goods primary-button",attrs:{disabled:t.tableData.length>20,round:""},on:{click:t.createGoods}},[t._v("\n        新建商品（"+t._s(t.tableData.length)+" / 20）\n      ")])],1):t._e()]),t._v(" "),t.tableData.length>1?n("div",{staticClass:"table-box"},[n("table",{attrs:{border:"1"}},[t._m(0),t._v(" "),n("draggable",{attrs:{element:"tbody",options:{handle:".item"}},model:{value:t.tableData,callback:function(e){t.tableData=e},expression:"tableData"}},t._l(t.tableData,function(e,s){return n("tr",{key:s},[n("td",[t._v(t._s(s<10?"0"+(s+1):s+1))]),t._v(" "),n("td",[n("img",{attrs:{src:e.avatar?t.$imgHost+"/"+e.avatar:a(479),alt:""}})]),t._v(" "),n("td",[t._v(t._s(e.name))]),t._v(" "),n("td",[n("del",[t._v(t._s(e.address))])]),t._v(" "),n("td",{staticClass:"dis-prices"},[t._v(t._s(e.address))]),t._v(" "),n("td",[n("div",[n("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(a){t.handleEdit(e,s)}}},[t._v("编辑")]),t._v(" "),n("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(a){t.handleShelf(e,s)}}},[t._v("上下架")]),t._v(" "),n("el-button",{staticClass:"item",attrs:{size:"mini",type:"text"},on:{click:function(e){t.handleDelete(s)}}},[t._v("移动")]),t._v(" "),n("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(a){t.handleDelete(e,s)}}},[t._v("删除")])],1)])])}))],1)]):n("div",{staticClass:"no-goods"},[n("img",{attrs:{src:a(479),alt:""}}),t._v(" "),n("p",[t._v("暂时没有商品哦~")]),t._v(" "),t._m(1),t._v(" "),n("el-button",{staticClass:"add-goods primary-button",attrs:{round:""},on:{click:t.createGoods}},[t._v("添加商品")])],1)])},[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("序号")]),t._v(" "),a("th",[t._v("封面图")]),t._v(" "),a("th",[t._v("商品名称")]),t._v(" "),a("th",[t._v("原始价格")]),t._v(" "),a("th",[t._v("优惠价格")]),t._v(" "),a("th",[t._v("操作")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("全新直播购物模式，通过实时直播带动粉丝经济，"),e("br"),this._v("你甚至可以联合品牌商一起策划品牌内容，提升观众信任感")])}],!1,null,"2fe110d0",null);i.options.__file="index.vue";e.default=i.exports}}]);