(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{512:function(t,a,i){"use strict";i.r(a);var e=i(63),s=i(530),n=i(736),c=i(545),o=i(529),r={components:{VePagination:s.a,questions:n.a},data:function(){return{activityId:"",hasData:!1,title:"",description:"",imgUrl:"",tableData:[],searchParams:{business_consumer_uid:0,page:1,page_size:10},total:0,pageSize:10,dragData:[],phoneData:[],messageBoxViewShow:!1}},beforeDestroy:function(){},created:function(){e.a.$emit("breads",[{title:"活动管理"},{title:"活动列表",url:"/liveMager/list"},{title:"活动详情",url:"/liveMager/detail/"+this.$route.params.activityId},{title:"问卷列表",url:"/salesTools/questionnaire/list/"+this.$route.params.activityId}])},mounted:function(){var t=this;this.activityId=this.$route.params.activityId,this.getDataList(),this.$get(o.a.GET_DETAILS,{activityId:this.activityId}).then(function(a){a.data.data.time&&(t.hasData=!0)})},computed:{isAdd:function(){return this.tableData.length>9},defaultImg:function(){return this.imgUrl?this.$imgHost+"/"+this.imgUrl+"?x-oss-process=image/resize,m_fill,h_140,w_700":""}},methods:{getDataList:function(){var t=this;this.$post(c.a.GET_QUESTION_LIST,{activityId:this.activityId}).then(function(a){t.tableData=a.data})},changePage:function(t){this.searchParams.page=t,this.getDataList()},jumpEdit:function(t,a){"Y"===t?this.$toast({content:"已推送问卷无法再次编辑",position:"center"}):this.$router.replace("/salesTools/questionnaire/edit/"+this.activityId+"/"+a)},view:function(t){var a=this;this.dragData=[],this.$post(c.a.GET_QUESTION,{activityId:this.activityId,naireId:t}).then(function(t){a.title=t.data.title,a.description=t.data.description,a.imgUrl=t.data.imgUrl,t.data.detail.forEach(function(t){t.ext=JSON.parse(t.ext),t._required="Y"===t.required,function(t){setTimeout(function(){"phone"===t.ext.key?a.phoneData.push(t):a.dragData.push(t)},0)}(t)}),a.messageBoxViewShow=!0})},confirmDel:function(t){var a=this;this.$messageBox({header:"提示",width:"450px",content:"删除问卷将同时删除所有答卷，是否确认删除",cancelText:"取消",type:"error",confirmText:"确定",handleClick:function(i){"cancel"===i.action||"confirm"===i.action&&a.del(t)}})},del:function(t){var a=this;this.$config({handlers:!0}).$post(c.a.POST_QUESTION_DELETE,{activityId:this.activityId,naireId:t.naireId}).then(function(i){var e=a.tableData.indexOf(t);a.tableData.splice(e,1)}).catch(function(t){15105===t.code?a.$messageBox({header:"提示",content:"问卷推送中，暂时无法删除，请活动结束后重试",autoClose:10,confirmText:"知道了",handleClick:function(t){}}):a.$messageBox({header:"提示",content:t.msg,autoClose:10,confirmText:"知道了",handleClick:function(t){}})})},messageBoxClick:function(t){"cancel"===t.action&&(this.messageBoxViewShow=!1)}}},l=(i(921),i(1)),d=Object(l.a)(r,function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"v-list"},[i("div",{staticClass:"v-list-title clearfix"},[i("span",{staticClass:"title"},[t._v("问卷")]),t._v(" "),i("com-back",{staticStyle:{"line-height":"30px"},attrs:{url:"/liveMager/detail/"+t.activityId}}),t._v(" "),t.tableData.length?[i("router-link",{staticClass:"v-add",class:{disabled:t.isAdd},attrs:{to:{name:"questionnaire",params:{activityId:t.activityId}}}},[t._v("新建问卷")]),t._v(" "),i("router-link",{staticClass:"v-view",class:{disabled:!t.hasData},attrs:{to:"/data/live/"+this.activityId+"#questions"}},[t._v("查看数据")])]:t._e()],2),t._v(" "),i("div",{staticClass:"v-table"},[t.tableData.length?[i("table",[t._m(0),t._v(" "),i("tbody",[t.tableData.length>0?t._l(t.tableData,function(a){return i("tr",{key:a.naireId},[i("td",[t._v("\n                "+t._s(a.title)+"\n              ")]),t._v(" "),i("td",[t._v("\n                "+t._s(a.questionNum)+"\n              ")]),t._v(" "),i("td",[t._v("\n                "+t._s("Y"===a.publish?"是":"否")+"\n              ")]),t._v(" "),i("td",[t._v("\n                "+t._s(a.update_time?a.update_time.substr(0,10):"-")+"\n              ")]),t._v(" "),i("td",[i("a",{attrs:{href:"javascript:;"},on:{click:function(i){t.jumpEdit(a.publish,a.naireId)}}},[t._v("编辑")]),i("span",[t._v("|")]),t._v(" "),i("a",{attrs:{href:"javascript:;"},on:{click:function(i){t.view(a.naireId)}}},[t._v("预览")]),i("span",[t._v("|")]),t._v(" "),i("a",{staticClass:"v-del",attrs:{href:"javascript:;"},on:{click:function(i){t.confirmDel(a)}}},[t._v("删除")])])])}):[t._m(1)]],2)]),t._v(" "),i("div",{staticClass:"pagination-box"},[t.total>t.pageSize?i("div",{staticClass:"page-pagination"},[i("ve-pagination",{attrs:{total:t.total,pageSize:t.pageSize,currentPage:t.searchParams.page},on:{changePage:t.changePage}})],1):t._e()])]:[i("div",{staticClass:"empty-box"},[i("p",{staticClass:"img"}),t._v(" "),i("p",{staticClass:"title"},[t._v("问卷")]),t._v(" "),t._m(2),t._v(" "),i("router-link",{attrs:{to:{name:"questionnaire",params:{activityId:t.activityId}}}},[i("el-button",{staticClass:"primary-button"},[t._v("新建问卷")])],1)],1)]],2),t._v(" "),t.messageBoxViewShow?i("message-box",{staticClass:"message-box v-view",attrs:{width:"700px",confirmText:"确定",type:"prompt",header:"预览"},on:{handleClick:t.messageBoxClick}},[i("div",{staticClass:"text"},[t._v("预览")]),t._v(" "),i("div",{staticClass:"v-content"},[i("div",{staticClass:"v-hearder"},[t.defaultImg?i("div",{staticClass:"v-question-img",style:{"background-image":"url("+t.defaultImg+")"}}):t._e(),t._v(" "),i("p",{staticClass:"v-title"},[t._v("\n          "+t._s(this.title)+"\n        ")]),t._v(" "),i("p",{staticClass:"v-summary"},[t._v("\n          "+t._s(this.description)+"\n        ")])]),t._v(" "),i("div",{staticClass:"v-questions"},[i("questions",{attrs:{dragData:t.dragData,phoneData:t.phoneData,isView:!0}})],1)])]):t._e()],1)},[function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("thead",[i("tr",[i("td",[t._v("\n              问卷名称\n            ")]),t._v(" "),i("td",[t._v("\n              问题数量\n            ")]),t._v(" "),i("td",[t._v("\n              是否推送\n            ")]),t._v(" "),i("td",[t._v("\n              修改时间\n            ")]),t._v(" "),i("td",[t._v("\n              操作\n            ")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("tr",{staticClass:"v-nodata"},[a("td",{attrs:{colspan:"5"}},[this._v("\n                暂无数据\n              ")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",{staticClass:"desc"},[this._v("您可以通过创建问卷收集活动中的用户信息"),a("br"),this._v("以获得商机或者改善您的服务。")])}],!1,null,"84247458",null);d.options.__file="list.vue";a.default=d.exports},710:function(t,a,i){},921:function(t,a,i){"use strict";var e=i(710);i.n(e).a}}]);