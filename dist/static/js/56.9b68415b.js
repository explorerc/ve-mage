(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{649:function(t,a,i){},857:function(t,a,i){"use strict";var e=i(649);i.n(e).a},917:function(t,a,i){"use strict";i.r(a);var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"v-list"},[t._m(0),t._v(" "),i("div",{staticClass:"v-tbns clearfix"},[i("router-link",{staticClass:"v-add",class:{disabled:t.isAdd},attrs:{to:{name:"questionnaire",params:{activityId:t.activityId}}}},[t._v("新建问卷")]),t._v(" "),i("router-link",{staticClass:"v-view",class:{disabled:!t.hasData},attrs:{to:"/data/live/"+this.activityId}},[t._v("查看数据")])],1),t._v(" "),i("div",{staticClass:"v-table"},[i("table",[t._m(1),t._v(" "),i("tbody",[t.tableData.length>0?t._l(t.tableData,function(a){return i("tr",{key:a.naireId},[i("td",[t._v("\n              "+t._s(a.title)+"\n            ")]),t._v(" "),i("td",[t._v("\n              "+t._s(a.questionNum)+"\n            ")]),t._v(" "),i("td",[t._v("\n              "+t._s("Y"===a.publish?"是":"否")+"\n            ")]),t._v(" "),i("td",[t._v("\n              "+t._s(a.update_time?a.update_time.substr(0,10):"-")+"\n            ")]),t._v(" "),i("td",[i("a",{attrs:{href:"javascript:;"},on:{click:function(i){t.jumpEdit(a.publish,a.naireId)}}},[t._v("编辑")]),i("span",[t._v("|")]),t._v(" "),i("a",{attrs:{href:"javascript:;"},on:{click:function(i){t.view(a.naireId)}}},[t._v("预览")]),i("span",[t._v("|")]),t._v(" "),i("a",{staticClass:"v-del",attrs:{href:"javascript:;"},on:{click:function(i){t.confirmDel(a)}}},[t._v("删除")])])])}):[t._m(2)]],2)]),t._v(" "),i("div",{staticClass:"pagination-box"},[t.total>t.pageSize?i("div",{staticClass:"page-pagination"},[i("ve-pagination",{attrs:{total:t.total,pageSize:t.pageSize,currentPage:t.searchParams.page},on:{changePage:t.changePage}})],1):t._e()])]),t._v(" "),t.messageBoxViewShow?i("message-box",{staticClass:"message-box v-view",attrs:{width:"700px",confirmText:"确定",type:"prompt",header:"预览"},on:{handleClick:t.messageBoxClick}},[i("div",{staticClass:"box"},[i("div",{staticClass:"text"},[t._v("预览")])]),t._v(" "),i("div",{staticClass:"v-content"},[i("div",{staticClass:"v-hearder"},[t.defaultImg?i("img",{attrs:{src:t.defaultImg,alt:""}}):t._e(),t._v(" "),i("p",{staticClass:"v-title"},[t._v("\n          "+t._s(this.title)+"\n        ")]),t._v(" "),i("p",{staticClass:"v-summary"},[t._v("\n          "+t._s(this.description)+"\n        ")])]),t._v(" "),i("div",{staticClass:"v-questions"},[i("questions",{attrs:{dragData:t.dragData,phoneData:t.phoneData,isView:!0}})],1)])]):t._e()],1)};e._withStripped=!0;var s=i(470),n=i(675),c=i(507),o=i(469),r={components:{VePagination:s.a,questions:n.a},data:function(){return{activityId:"",hasData:!1,title:"",description:"",imgUrl:"",tableData:[],searchParams:{business_consumer_uid:0,page:1,page_size:10},total:0,pageSize:10,dragData:[],phoneData:[],messageBoxViewShow:!1}},beforeDestroy:function(){},mounted:function(){var t=this;this.activityId=this.$route.params.activityId,this.getDataList(),this.$get(o.a.GET_DETAILS,{activityId:this.activityId}).then(function(a){a.data.data.time&&(t.hasData=!0)})},computed:{isAdd:function(){return this.tableData.length>9},defaultImg:function(){return this.imgUrl?this.$imgHost+"/"+this.imgUrl:""}},methods:{getDataList:function(){var t=this;this.$post(c.a.GET_QUESTION_LIST,{activityId:this.activityId}).then(function(a){t.tableData=a.data})},changePage:function(t){this.searchParams.page=t,this.getDataList()},jumpEdit:function(t,a){"Y"===t?this.$toast({content:"已推送问卷无法再次编辑",position:"center"}):this.$router.replace("/salesTools/questionnaire/edit/"+this.activityId+"/"+a)},view:function(t){var a=this;this.$post(c.a.GET_QUESTION,{activityId:this.activityId,naireId:t}).then(function(t){a.title=t.data.title,a.description=t.data.description,a.imgUrl=t.data.imgUrl,t.data.detail.forEach(function(t){t.ext=JSON.parse(t.ext),t._required="Y"===t.required,function(t){setTimeout(function(){"phone"===t.ext.key?a.phoneData.push(t):a.dragData.push(t)},0)}(t)}),a.messageBoxViewShow=!0})},confirmDel:function(t){var a=this;this.$messageBox({header:"提示",width:"450px",content:"是否删除问卷",cancelText:"取消",type:"error",confirmText:"确定",handleClick:function(i){"cancel"===i.action||"confirm"===i.action&&a.del(t)}})},del:function(t){var a=this;this.$post(c.a.POST_QUESTION_DELETE,{activityId:this.activityId,naireId:t.naireId}).then(function(i){var e=a.tableData.indexOf(t);a.tableData.splice(e,1)})},messageBoxClick:function(t){"cancel"===t.action&&(this.messageBoxViewShow=!1)}}},l=(i(857),i(1)),v=Object(l.a)(r,e,[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"v-list-title"},[a("span",{staticClass:"title"},[this._v("问卷列表")])])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("thead",[i("tr",[i("td",[t._v("\n            问卷名称\n          ")]),t._v(" "),i("td",[t._v("\n            问卷数量\n          ")]),t._v(" "),i("td",[t._v("\n            是否推送\n          ")]),t._v(" "),i("td",[t._v("\n            修改时间\n          ")]),t._v(" "),i("td",[t._v("\n            操作\n          ")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("tr",{staticClass:"v-nodata"},[a("td",{attrs:{colspan:"5"}},[this._v("\n              暂无数据\n            ")])])}],!1,null,"2e6e103a",null);v.options.__file="src/pages/sales-tools/questionnaire/list.vue";a.default=v.exports}}]);
//# sourceMappingURL=56.9b68415b.js.map