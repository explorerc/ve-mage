(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{648:function(e,t,a){},853:function(e,t,a){"use strict";var i=a(648);a.n(i).a},872:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"v-list"},[e._m(0),e._v(" "),e._m(1),e._v(" "),i("div",{staticClass:"v-table"},[i("table",[e._m(2),e._v(" "),i("tbody",e._l(e.tableData,function(t){return i("tr",{key:t.id},[i("td",[e._v("\n            "+e._s(t.name)+"\n          ")]),e._v(" "),i("td",[e._v("\n            "+e._s(t.count)+"\n          ")]),e._v(" "),i("td",[e._v("\n            "+e._s(t.date)+"\n          ")]),e._v(" "),i("td",[i("a",{attrs:{href:"/salesTools/questionnaire/edit/"+t.id}},[e._v("编辑")]),i("span",[e._v("|")]),e._v(" "),i("a",{attrs:{href:"javascript:;"},on:{click:function(a){e.view(t.id)}}},[e._v("预览")]),i("span",[e._v("|")]),e._v(" "),i("a",{staticClass:"v-del",attrs:{href:"javascript:;"},on:{click:function(a){e.confirmDel(t.id)}}},[e._v("删除")])])])}))]),e._v(" "),i("div",{staticClass:"pagination-box"},[e.total>e.pageSize?i("div",{staticClass:"page-pagination"},[i("ve-pagination",{attrs:{total:e.total,pageSize:e.pageSize,currentPage:e.searchParams.page},on:{changePage:e.changePage}})],1):e._e()])]),e._v(" "),i("message-box",{directives:[{name:"show",rawName:"v-show",value:e.messageBoxViewShow,expression:"messageBoxViewShow"}],staticClass:"message-box v-view",attrs:{width:"700px",confirmText:"确定",type:"prompt",header:"预览"},on:{handleClick:e.messageBoxClick}},[i("div",{staticClass:"box"},[i("div",{staticClass:"text"},[e._v("预览")])]),e._v(" "),i("div",{staticClass:"v-hearder"},[i("img",{attrs:{src:a(476),alt:""}}),e._v(" "),i("p",{staticClass:"v-title"},[e._v("\n        产品调研\n      ")]),e._v(" "),i("p",{staticClass:"v-summary"},[e._v("\n       欢迎参加调查！答卷数据仅用于统计分析，请放心填写。题目选项无对错之分，按照实际情况选择即可。感谢您的帮助！\n      ")])]),e._v(" "),i("div",{staticClass:"v-questions"},[i("questions",{attrs:{dragData:e.dragData,phoneData:e.phoneData,isView:!0}})],1)])],1)};i._withStripped=!0;var s=a(471),n=a(670),r=a(485),l={components:{VePagination:s.a,questions:n.a},data:function(){return{tableData:[{date:"2016-05-02",name:"王小虎",count:2,id:1},{date:"2016-05-03",name:"王小虎",count:2,id:2},{date:"2016-05-04",name:"王小虎",count:2,id:3},{date:"2016-05-05",name:"王小虎",count:2,id:4},{date:"2016-05-06",name:"王小虎",count:2,id:5}],searchParams:{business_consumer_uid:0,page:1,page_size:9},total:20,pageSize:6,dragData:[{title:"单选题",errorTip:"",type:r.b.RADIO,required:!0,detail:{list:[{value:"选项"}]},ext:{name:"单选题"}},{title:"多选题",errorTip:"",type:r.b.CHECKBOX,value:[],required:!0,detail:{list:[{value:"选项"}]},ext:{name:"多选题"}},{title:"下拉题",errorTip:"",type:r.b.SELECT,required:!0,detail:{list:[{value:"选项"}]},ext:{name:"下拉题"}},{title:"问答题",errorTip:"",type:r.b.TEXT,style:"",required:!1,detail:{format:"textarea",max:300},ext:{name:"问答题"}},{title:"姓名",errorTip:"",type:r.b.TEXT,required:!1,detail:{format:"input",max:10},ext:{name:"姓名"}},{title:"手机号",errorTip:"",type:r.b.TEXT,required:!0,detail:{format:"mobile",max:11},verification:"Y",ext:{name:"手机号"}},{title:"邮箱",errorTip:"",type:r.b.TEXT,required:!1,detail:{format:"email",max:30},ext:{name:"邮箱"}},{title:"性别",errorTip:"",type:r.b.SELECT,required:!0,detail:{list:[{value:"男"},{value:"女"}]},ext:{fixedness:!0,name:"性别"}},{title:"生日",errorTip:"",type:r.b.DATE,required:!0,detail:{format:"yyyy-MM-dd"},ext:{name:"生日"}},{title:"地域",errorTip:"",type:r.b.AREA,required:!0,detail:{level:"address"},ext:{name:"地域"}},{title:"行业",errorTip:"",type:r.b.SELECT,required:!0,detail:{list:[{value:"IT/互联网"},{value:"电子/通信/硬件"},{value:"金融"},{value:"交通/贸易/物流"},{value:"消费品"},{value:"机械/制造"},{value:"能源/矿产环保"},{value:"制药/医疗"},{value:"专业服务"},{value:"教育/培训"},{value:"广告/媒体/娱乐/出版"},{value:"房地产/建筑"},{value:"服务业"},{value:"政府/非盈利机构/其它"}]},ext:{fixedness:!0,name:"教育水平"}},{title:"职位",type:r.b.TEXT,required:!0,detail:{format:"input",max:10},ext:{name:"职位"}},{title:"教育水平",errorTip:"",type:r.b.SELECT,required:!0,detail:{list:[{value:"博士"},{value:"硕士"},{value:"本科"},{value:"大专"},{value:"高中"}]},ext:{fixedness:!0,name:"教育水平"}}],phoneData:[],messageBoxViewShow:!1}},beforeDestroy:function(){},created:function(){},computed:{},methods:{getDataList:function(){},changePage:function(e){this.searchParams.page=e,this.getDataList()},view:function(){this.messageBoxViewShow=!0},confirmDel:function(e){var t=this;this.$messageBox({header:"提示",width:"450px",content:"是否删除问卷",cancelText:"取消",type:"error",confirmText:"确定",handleClick:function(a){"cancel"===a.action||"confirm"===a.action&&t.del(e)}})},del:function(e){alert(e)},messageBoxClick:function(e){"cancel"===e.action&&(this.messageBoxViewShow=!1)}}},o=(a(853),a(2)),v=Object(o.a)(l,i,[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"v-list-title"},[t("span",{staticClass:"title"},[this._v("问卷列表")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"v-tbns clearfix"},[t("button",{staticClass:"v-add"},[this._v("\n      新建问卷\n    ")]),this._v(" "),t("button",{staticClass:"v-view"},[this._v("\n      查看数据\n    ")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("thead",[t("tr",[t("td",[this._v("\n            问卷名称\n          ")]),this._v(" "),t("td",[this._v("\n            问卷数量\n          ")]),this._v(" "),t("td",[this._v("\n            修改时间\n          ")]),this._v(" "),t("td",[this._v("\n            操作\n          ")])])])}],!1,null,"2e6e103a",null);v.options.__file="src/pages/sales-tools/questionnaire/list.vue";t.default=v.exports}}]);
//# sourceMappingURL=48.64d3da5b.js.map