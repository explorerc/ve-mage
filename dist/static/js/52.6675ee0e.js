(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{640:function(t,e,a){},840:function(t,e,a){"use strict";var i=a(640);a.n(i).a},878:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrap-page"},[t._m(0),t._v(" "),a("div",{staticClass:"content from-box"},[t.tableData.length>0?[a("div",{staticClass:"top-bar"},[a("el-button",{attrs:{disabled:t.tableData.length>=20}},[t._v("新建卡片 "+t._s(t.tableData.length)+"/20")]),t._v(" "),a("el-button",[t._v("查看活动数据")])],1),t._v(" "),a("el-table",{class:"table-box",staticStyle:{width:"100%"},attrs:{data:t.tableData,stripe:""}},[a("el-table-column",{attrs:{label:"卡片图片",width:"150"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("img",{class:"img",attrs:{src:t.row.pic}})]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"卡片名称",width:"250","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{prop:"desc",label:"卡片描述",width:"350","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{prop:"link",label:"按钮链接",width:"350","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{label:"操作",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{round:""}},[t._v("编辑")]),t._v(" "),a("el-button",{attrs:{round:""},on:{click:function(a){t.del(e.row.id,e.row.name)}}},[t._v("删除")])]}}])})],1)]:[a("div",{staticClass:"empty-box"},[a("p",[t._v("创建一张推荐卡片")]),t._v(" "),a("p",[t._v("在直播中为观众推送卡片")]),t._v(" "),a("p",[t._v("制作一张精美的自定义卡片，在直播中推送给观众，企业可以根据自己的需求定义卡片的内容。可以推送二维码、店铺链接、自媒体链接、图片等各种各样的内容")]),t._v(" "),a("el-button",[t._v("新建卡片")])],1)]],2)])};i._withStripped=!0;var n={data:function(){return{tableData:[{id:1,pic:"//cnstatic01.e.vhall.com/static/img/v35-webinar.png",name:"安监局安静安静啊",desc:"阿克苏角度看拉萨的",link:"www.baidu.com"},{id:2,pic:"//cnstatic01.e.vhall.com/static/img/v35-webinar.png",name:"安监局安静安静啊",desc:"阿克苏角度看拉萨的",link:"www.baidu.com"},{id:3,pic:"//cnstatic01.e.vhall.com/static/img/v35-webinar.png",name:"安监局安静安静啊",desc:"阿克苏角度看拉萨的",link:"www.baidu.com"},{id:4,pic:"//cnstatic01.e.vhall.com/static/img/v35-webinar.png",name:"安监局安静安静啊",desc:"阿克苏角度看拉萨的",link:"www.baidu.com"},{id:5,pic:"//cnstatic01.e.vhall.com/static/img/v35-webinar.png",name:"安监局安静安静啊",desc:"阿克苏角度看拉萨的",link:"www.baidu.com"}]}},created:function(){},methods:{getList:function(){},del:function(t,e){var a=this;this.$messageBox({header:"提示",width:"400px",content:"是否确认删除 "+e+" 推荐卡片",cancelText:"否",confirmText:"是",handleClick:function(e){"confirm"===e.action&&a.delItem(t)}})},delItem:function(t){}}},l=(a(840),a(2)),c=Object(l.a)(n,i,[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page-title"},[e("span",{staticClass:"title"},[this._v("推荐卡片")])])}],!1,null,null,null);c.options.__file="src/pages/sales-tools/recommend-cards/index.vue";e.default=c.exports}}]);
//# sourceMappingURL=52.6675ee0e.js.map