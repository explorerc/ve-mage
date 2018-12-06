(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{490:function(t,e,i){"use strict";i.r(e);var a=i(456),s=i.n(a),o=i(731),n=i(63),l={components:{draggable:s.a},created:function(){this.getList(),this.isShowLiveData(),n.a.$emit("breads",[{title:"活动管理"},{title:"活动列表",url:"/liveMager/list"},{title:"活动详情",url:"/liveMager/detail/"+this.$route.params.activity_id},{title:"商品列表",url:"/salesTools/recommendGoodsList/"+this.$route.params.activity_id}])},data:function(){return{activity_id:this.$route.params.activity_id,tableData:[],timerShelf:null,isShowlive:null}},watch:{tableData:{handler:function(t,e){t.length>=1&&this.sortGoods()},deep:!0}},methods:{getList:function(){var t=this;this.$post(o.a.GOODS_LISTS,{activity_id:this.activity_id}).then(function(e){e.data.forEach(function(t,e){t.image=JSON.parse(t.image)}),t.tableData=e.data,console.log(t.tableData)}).catch(function(){t.tableData=[]})},createGoods:function(){this.$router.push("/salesTools/recommendGoodsInfo/"+this.activity_id+"/create")},sortGoods:function(){var t=this.tableData.map(function(t,e){return t.goods_id});this.$post(o.a.SORT_GOODS,{activity_id:this.activity_id,goods_ids:t.join()})},check:function(){this.isShowlive&&this.$router.push("/data/live/"+this.activity_id+"#tools")},isShowLiveData:function(){var t=this;this.$get(o.a.GET_DETAILS,{activityId:this.activity_id}).then(function(e){t.isShowlive=e.data.data.time})},handleShelf:function(t){var e=this;this.timerShelf||(this.timerShelf=setTimeout(function(){clearTimeout(e.timerShelf),e.timerShelf=null,e.$post(o.a.GOODS_SHELF,{goods_id:t.goods_id,type:"0"===t.added?"1":"0"}).then(function(t){setTimeout(function(){e.getList()},500),e.$toast({content:"操作成功!",position:"center"})})},1e3))},handleEdit:function(t,e){this.$router.push("/salesTools/recommendGoodsInfo/"+t.goods_id+"/update")},handleDelete:function(t,e){var i=this;console.log(t),this.$messageBox({header:"删除该商品",type:"error",width:"450px",content:"删除后观看页将不再显示该商品",cancelText:"取消",confirmText:"删除",handleClick:function(a){"cancel"===a.action||"confirm"===a.action&&i.$post(o.a.GOODS_DELETE,{goods_id:t.goods_id}).then(function(t){i.tableData.splice(e,1),setTimeout(function(){i.getList()},1e3),i.$toast({content:"删除成功!",position:"center"})})}})}}},c=(i(915),i(1)),r=Object(c.a)(l,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"goods-list"}},[a("header",[a("p",[t._v("商品推荐")]),t._v(" "),a("com-back",{attrs:{url:"/liveMager/detail/"+t.activity_id}}),t._v(" "),t.tableData.length>=1?a("div",{staticClass:"btn-box"},[a("com-button",{staticClass:"default-button",staticStyle:{"line-height":"29px"},attrs:{round:"",disabled:!t.isShowlive},on:{click:t.check}},[t._v("查看活动数据")]),t._v(" "),a("com-button",{staticClass:"add-goods primary-button",attrs:{disabled:t.tableData.length>=20,round:""},on:{click:t.createGoods}},[t._v("\n        新建商品（"+t._s(t.tableData.length)+" / 20）\n      ")])],1):t._e()],1),t._v(" "),t.tableData.length>=1?a("div",{staticClass:"table-box"},[a("table",{attrs:{border:"1"}},[t._m(0),t._v(" "),a("draggable",{attrs:{element:"tbody",options:{handle:".item"}},model:{value:t.tableData,callback:function(e){t.tableData=e},expression:"tableData"}},t._l(t.tableData,function(e,i){return a("tr",{key:i},[a("td",[t._v(t._s(i<10?"0"+(i+1):i+1))]),t._v(" "),a("td",[a("div",{staticClass:"cover_img",style:{backgroundImage:"url("+t.$imgHost+"/"+e.image[0].name+")"}})]),t._v(" "),a("td",[t._v(t._s(e.title))]),t._v(" "),a("td",[a("del",{directives:[{name:"show",rawName:"v-show",value:"0.00"!==e.preferential,expression:"row.preferential !== '0.00'"}]},[t._v(t._s("0.00"===e.price?"免费":"￥"+e.price))]),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:"0.00"===e.preferential,expression:"row.preferential === '0.00'"}]},[t._v(t._s("0.00"===e.price?"免费":"￥"+e.price))])]),t._v(" "),a("td",{staticClass:"dis-prices"},[t._v(t._s("0.00"===e.price?"免费":"￥"+e.preferential))]),t._v(" "),a("td",[a("div",[a("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(a){t.handleEdit(e,i)}}},[t._v("编辑")]),t._v(" "),a("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(a){t.handleShelf(e,i)}}},[t._v(t._s("0"===e.added?"上架":"下架")+"\n              ")]),t._v(" "),a("el-button",{staticClass:"item",attrs:{size:"mini",type:"text"}},[t._v("移动")]),t._v(" "),a("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(a){t.handleDelete(e,i)}}},[t._v("删除")])],1)])])}))],1)]):a("div",{staticClass:"no-goods"},[a("img",{attrs:{src:i(914),alt:""}}),t._v(" "),a("p",[t._v("暂时没有商品哦~")]),t._v(" "),t._m(1),t._v(" "),a("el-button",{staticClass:"add-goods primary-button",attrs:{round:""},on:{click:t.createGoods}},[t._v("添加商品")])],1)])},[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("thead",[i("tr",[i("th",[t._v("序号")]),t._v(" "),i("th",[t._v("封面图")]),t._v(" "),i("th",[t._v("商品名称")]),t._v(" "),i("th",[t._v("原始价格")]),t._v(" "),i("th",[t._v("优惠价格")]),t._v(" "),i("th",[t._v("操作")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("全新直播购物模式，通过实时直播带动粉丝经济，"),e("br"),this._v("你甚至可以联合品牌商一起策划品牌内容，提升观众信任感")])}],!1,null,"6b32b118",null);r.options.__file="index.vue";e.default=r.exports},705:function(t,e,i){},914:function(t,e,i){t.exports=i.p+"static/img/not-goodlist.77438fe.png"},915:function(t,e,i){"use strict";var a=i(705);i.n(a).a}}]);