(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{593:function(t,s,a){},778:function(t,s,a){"use strict";var n=a(593);a.n(n).a},831:function(t,s,a){"use strict";a.r(s);var n=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"pond-page"},[t._m(0),t._v(" "),a("div",{staticClass:"content from-box"},[a("ol",{staticClass:"clearfix"},[a("li",[a("p",{staticClass:"v-data"},[t._v("\n          "+t._s(t.info.total)+"\n        ")]),t._v(" "),a("p",{staticClass:"v-title"},[t._v("\n          用户总数\n        ")])]),t._v(" "),a("li",[a("p",{staticClass:"v-data"},[t._v("\n          "+t._s(t.uersInfo[1].val)+"\n        ")]),t._v(" "),a("p",{staticClass:"v-title"},[t._v("\n          优质用户 ("+t._s(t.uersInfo[1].centage)+"%)\n        ")])]),t._v(" "),a("li",[a("p",{staticClass:"v-data"},[t._v("\n          "+t._s(t.uersInfo[2].val)+"\n        ")]),t._v(" "),a("p",{staticClass:"v-title"},[t._v("\n          高价值用户 ("+t._s(t.uersInfo[2].centage)+"%)\n        ")])]),t._v(" "),a("li",[a("p",{staticClass:"v-data"},[t._v("\n          "+t._s(t.uersInfo[3].val)+"\n        ")]),t._v(" "),a("p",{staticClass:"v-title"},[t._v("\n          一般用户 ("+t._s(t.uersInfo[3].centage)+"%)\n        ")])]),t._v(" "),a("li",[a("p",{staticClass:"v-data"},[t._v("\n          "+t._s(t.uersInfo[4].val)+"\n        ")]),t._v(" "),a("p",{staticClass:"v-title"},[t._v("\n          潜在用户 ("+t._s(t.uersInfo[4].centage)+"%)\n        ")])]),t._v(" "),a("li",[a("p",{staticClass:"v-data"},[t._v("\n          "+t._s(t.uersInfo[5].val)+"\n        ")]),t._v(" "),a("p",{staticClass:"v-title"},[t._v("\n          流失用户 ("+t._s(t.uersInfo[5].centage)+"%)\n        ")])])])]),t._v(" "),a("div",{staticClass:"v-data-list clearfix"},[a("p",{staticClass:"v-title"},[t._v("\n      数据详情\n    ")]),t._v(" "),a("ol",[t._m(1),t._v(" "),t._l(t.tableList,function(s){return a("li",{key:s.id,staticClass:"clearfix"},[a("div",{staticClass:"v-activity-content v-name"},[t._v("\n          "+t._s(s.title)+"\n        ")]),t._v(" "),a("div",{staticClass:"v-activity-content v-time"},[t._v("\n          "+t._s(s.startTime)+"\n        ")]),t._v(" "),a("div",{staticClass:"v-activity-content"},[t._v("\n          "+t._s(s.status)+"\n        ")]),t._v(" "),a("div",{staticClass:"v-activity-content"},[t._v("\n          "+t._s(s.status)+"\n        ")]),t._v(" "),a("div",{staticClass:"v-activity-content"},[t._v("\n          "+t._s(s.status)+"\n        ")]),t._v(" "),a("div",{staticClass:"v-activity-content"},[t._v("\n          "+t._s(s.status)+"\n        ")]),t._v(" "),a("div",{staticClass:"v-activity-content"},[t._v("\n          "+t._s(s.status)+"\n        ")])])})],2)])])};n._withStripped=!0;var i=a(96),v={data:function(){return{info:{},uersInfo:[{val:0,centage:0},{val:0,centage:0},{val:0,centage:0},{val:0,centage:0},{val:0,centage:0},{val:0,centage:0}],tableList:[{title:"666",startTime:"2018-08-25",status:"265"},{title:"666",startTime:"2018-08-25",status:"265"},{title:"666",startTime:"2018-08-25",status:"265"}]}},created:function(){var t=this;this.$config({handlers:!0}).$get(i.a.GET_CUSTOMER_OVERVIEW,{}).then(function(s){t.info=s.data;var a=t.info.userLevel,n=t;a.forEach(function(t){n.uersInfo[a.indexOf(t)].val=t,n.uersInfo[a.indexOf(t)].centage=Math.round(t/n.info.total)}),console.log(n.uersInfo)}).catch(function(s){t.$messageBox({header:"提示",content:s.msg,confirmText:"确定",handleClick:function(t){"cancel"===t.action||t.action}})})}},e=(a(778),a(2)),c=Object(e.a)(v,n,[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"pond-title"},[s("span",{staticClass:"title"},[this._v("总览")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("li",{staticClass:"clearfix"},[a("div",{staticClass:"v-activity-content v-name"},[t._v("\n          活动名称\n        ")]),t._v(" "),a("div",{staticClass:"v-activity-content v-time"},[t._v("\n          时间\n        ")]),t._v(" "),a("div",{staticClass:"v-activity-content v-type"},[t._v("\n          流失用户\n        ")]),t._v(" "),a("div",{staticClass:"v-activity-content v-operation"},[t._v("\n          一般用户\n        ")]),t._v(" "),a("div",{staticClass:"v-activity-content v-operation"},[t._v("\n          潜力用户\n        ")]),t._v(" "),a("div",{staticClass:"v-activity-content v-operation"},[t._v("\n          高价值用户\n        ")]),t._v(" "),a("div",{staticClass:"v-activity-content v-operation"},[t._v("\n          优质用户\n        ")])])}],!1,null,"13470d66",null);c.options.__file="src/pages/users-manage/overview/index.vue";s.default=c.exports}}]);
//# sourceMappingURL=38.6abacc2a.js.map