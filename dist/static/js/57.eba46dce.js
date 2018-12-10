(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{484:function(t,a,e){"use strict";e.r(a);var s=e(30),i=e.n(s),l="/user/bill/list",n="/user/bill/overview",r="/user/bill/download",c={name:"asset-list",components:{VePagination:e(530).a},data:function(){return{total:0,liuTypeList:[{value:"",label:"全部"},{value:"RECHARGE",label:"账户充值"},{value:"RED_PACK",label:"红包消费"},{value:"RE_RED_PACK",label:"红包返回"}],viewerList:[],billInfo:{balance:0,serviceStartTime:"",serviceExpireTime:"",serviceName:"",payToday:""},searchParams:{type:"",date:"",page:1,pageSize:10}}},filters:{fmtStatus:function(t){return"SUCCESS"===t?"成功":"失败"},fmtType:function(t){return{RECHARGE:"账户充值",RED_PACK:"红包消费",RE_RED_PACK:"红包返回"}[t]}},created:function(){this.queryAccountInfo(),this.queryList()},methods:{changePage:function(t){this.searchParams.page=t,this.queryList()},queryAccountInfo:function(){var t=this;this.$get(n,{}).then(function(a){200===a.code&&(t.billInfo=a.data)})},queryList:function(){var t=this;this.$nextTick(function(){t.$get(l,i()({},t.searchParams)).then(function(a){200===a.code&&(t.total=a.data.total,t.viewerList=a.data.list)})})},exportTable:function(){var t="?type="+this.searchParams.type+"&date="+(this.searchParams.date||""),a="/api"+r+t;window.open(encodeURI(encodeURI(a)))}}},o=(e(924),e(1)),u=Object(o.a)(c,function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"asset-box"},[s("p",{staticClass:"v-asset-title"},[t._v("\n    资产管理\n  ")]),t._v(" "),s("div",{staticClass:"asset-header"},[s("div",{staticClass:"asset-header-item"},[s("span",[t._v("所购服务")]),t._v(" "),s("span",[t._v(t._s(t.billInfo.serviceName))]),t._v(" "),s("span",[t._v("有效期 "+t._s(t.billInfo.serviceStartTime)+" ~ "+t._s(t.billInfo.serviceExpireTime))])]),t._v(" "),s("div",{staticClass:"asset-header-item"},[s("span",[t._v("可用金额（元）")]),t._v(" "),s("img",{attrs:{width:"100",height:"60",src:e(922)}}),t._v(" "),s("span",{staticClass:"mid"},[t._v(t._s(t.billInfo.balance))])]),t._v(" "),s("div",{staticClass:"asset-header-item"},[s("span",[t._v("今日支出（元）")]),t._v(" "),s("img",{attrs:{width:"100",height:"60",src:e(923)}}),t._v(" "),s("span",{staticClass:"mid-zhichu"},[t._v(t._s(t.billInfo.payToday))])])]),t._v(" "),s("div",{staticClass:"asset-list-box"},[s("div",{staticClass:"asset-list"},[s("div",{staticClass:"search-asset"},[s("span",{staticClass:"asset-title"},[t._v("账户流水")]),t._v(" "),s("button",{staticClass:"default-button export-btn fr",on:{click:t.exportTable}},[t._v("导出")]),t._v(" "),s("div",{staticClass:"search-item flm fr"},[s("span",{staticClass:"search-title"},[t._v("时间")]),t._v(" "),s("el-date-picker",{attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"选择日期"},on:{change:t.queryList},model:{value:t.searchParams.date,callback:function(a){t.$set(t.searchParams,"date",a)},expression:"searchParams.date"}})],1),t._v(" "),s("div",{staticClass:"search-item fr"},[s("span",{staticClass:"search-title"},[t._v("渠道来源")]),t._v(" "),s("el-select",{attrs:{placeholder:"渠道来源"},on:{change:t.queryList},model:{value:t.searchParams.type,callback:function(a){t.$set(t.searchParams,"type",a)},expression:"searchParams.type"}},t._l(t.liuTypeList,function(t){return s("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))],1)])]),t._v(" "),s("div",{staticClass:"asset-list-table"},[s("el-table",{staticStyle:{width:"100%"},attrs:{data:t.viewerList}},[s("el-table-column",{attrs:{prop:"billNumber",label:"流水ID"}}),t._v(" "),s("el-table-column",{attrs:{label:"流水类型"},scopedSlots:t._u([{key:"default",fn:function(a){return[t._v("\n            "+t._s(t._f("fmtType")(a.row.type))+"\n          ")]}}])}),t._v(" "),s("el-table-column",{attrs:{prop:"amount",label:"金额"}}),t._v(" "),s("el-table-column",{attrs:{prop:"createdAt",label:"时间"}}),t._v(" "),s("el-table-column",{attrs:{label:"状态",width:"160"},scopedSlots:t._u([{key:"default",fn:function(a){return[s("span",{class:{status:!0,success:"SUCCESS"===a.row.status}},[t._v(t._s(t._f("fmtStatus")(a.row.status)))])]}}])})],1),t._v(" "),t.total>t.searchParams.pageSize?s("div",{staticClass:"page-pagination"},[s("ve-pagination",{attrs:{total:t.total,pageSize:t.searchParams.pageSize},on:{changePage:t.changePage}})],1):t._e()],1)])])},[],!1,null,"01adeb8e",null);u.options.__file="asset-list.vue";a.default=u.exports},711:function(t,a,e){},922:function(t,a,e){t.exports=e.p+"static/img/qianbao@2x.0fbed5c.png"},923:function(t,a,e){t.exports=e.p+"static/img/zhichu@2x.43655eb.png"},924:function(t,a,e){"use strict";var s=e(711);e.n(s).a}}]);