(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{642:function(t,a,e){},849:function(t,a,e){"use strict";var s=e(642);e.n(s).a},902:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"wrap-page card-list-page"},[e("div",{staticClass:"page-title"},[e("span",{staticClass:"title"},[t._v("推荐卡片")]),t._v(" "),t.tableData.length>0?e("div",{staticClass:"top-bar clearfix"},[e("el-button",{staticClass:"btn add-new primary-button",attrs:{round:"",disabled:t.tableData.length>=20}},[e("router-link",{attrs:{to:t.tableData.length>=20?"":"/salesTools/recommendCardsDetails/"+t.activityId+"?cardId=new"}},[t._v("新建卡片 "+t._s(t.tableData.length)+"/20")])],1),t._v(" "),e("el-button",{staticClass:"btn more",attrs:{round:""}},[e("router-link",{attrs:{to:"/data/live/"+t.activityId}},[t._v("查看活动数据")])],1)],1):t._e()]),t._v(" "),e("div",{staticClass:"content from-box"},[t.tableData.length>0?[e("el-table",{class:"table-box",staticStyle:{width:"100%"},attrs:{data:t.tableData,stripe:""}},[e("el-table-column",{attrs:{label:"卡片图片",width:"150"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("img",{class:"img",attrs:{src:t.imgHost+"/"+a.row.pic}})]}}])}),t._v(" "),e("el-table-column",{attrs:{label:"卡片名称","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(a){return[e("div",{staticClass:"cell-txt"},[t._v(t._s(a.row.title))])]}}])}),t._v(" "),e("el-table-column",{attrs:{label:"卡片描述","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(a){return[e("div",{staticClass:"cell-txt"},[t._v(t._s(a.row.desc))])]}}])}),t._v(" "),e("el-table-column",{attrs:{label:"按钮链接","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(a){return[e("div",{staticClass:"cell-txt"},[t._v(t._s(a.row.btn_link))])]}}])}),t._v(" "),e("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",{staticClass:"edit"},[e("router-link",{attrs:{to:"/salesTools/recommendCardsDetails/"+t.activityId+"?cardId="+a.row.recommend_card_id}},[t._v("编辑")])],1),e("em",{staticClass:"blank"},[t._v("|")]),t._v(" "),e("span",{staticClass:"delete",on:{click:function(e){t.del(a.row.recommend_card_id,a.row.title,a.row.index)}}},[t._v("删除")])]}}])})],1)]:t._e(),t._v(" "),t.tableData.length<=0&&t.notFirst?[e("div",{staticClass:"empty-box"},[e("p",{staticClass:"img"}),t._v(" "),e("p",{staticClass:"title"},[t._v("推荐卡片")]),t._v(" "),t._m(0),t._v(" "),e("router-link",{attrs:{to:"/salesTools/recommendCardsDetails/"+t.activityId+"?cardId=new"}},[e("el-button",{staticClass:"primary-button"},[t._v("创建卡片")])],1)],1)]:t._e()],2)])};s._withStripped=!0;var i=e(633),l={data:function(){return{activityId:this.$route.params.id,imgHost:"//test-zhike.oss-cn-beijing.aliyuncs.com/",tableData:[],notFirst:!1}},mounted:function(){this.getList()},created:function(){this.tableData=[]},methods:{getList:function(){var t=this;this.$config({loading:!0}).$get(i.a.GET_CARDS_LIST,{activity_id:this.activityId}).then(function(a){t.notFirst=!0,t.tableData=a.data.list})},del:function(t,a,e){var s=this;this.$messageBox({header:"提示",width:"400px",content:"是否确认删除 "+a+" 推荐卡片",cancelText:"否",confirmText:"是",handleClick:function(a){"confirm"===a.action&&s.delItem(t,e)}})},delItem:function(t,a){var e=this;this.$get(i.a.POST_DELETE_CARD,{recommend_card_id:t}).then(function(t){e.$toast({content:"删除成功",position:"center"}),e.tableData.splice(a,1)})}}},n=(e(849),e(1)),o=Object(n.a)(l,s,[function(){var t=this.$createElement,a=this._self._c||t;return a("p",{staticClass:"desc"},[this._v("自定卡片内容进行引流，"),a("br"),this._v("推送二维码、店铺链接、微信公众号、图片海报等内容")])}],!1,null,null,null);o.options.__file="src/pages/sales-tools/recommend-cards/index.vue";a.default=o.exports}}]);
//# sourceMappingURL=51.19783b16.js.map