(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{608:function(t,a,s){},814:function(t,a,s){"use strict";var i=s(608);s.n(i).a},876:function(t,a,s){"use strict";s.r(a);var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"pond-page"},[t._m(0),t._v(" "),s("div",{staticClass:"content from-box"},[s("ol",{staticClass:"clearfix"},[s("li",[s("p",{staticClass:"v-data"},[t._v("\n          "+t._s(t.info.total)+"\n        ")]),t._v(" "),s("p",{staticClass:"v-title"},[t._v("\n          用户总数\n        ")])]),t._v(" "),s("li",[s("p",{staticClass:"v-data"},[s("a",{attrs:{href:"/userManage/userGroupsDetails/"+t.url.highQuality+"/1"}},[t._v("\n            "+t._s(t.uersInfo[1].val))])]),t._v(" "),s("p",{staticClass:"v-title"},[t._v("\n          优质用户 ("+t._s(t.uersInfo[1].val/t.info.total==0?0:(t.uersInfo[1].val/t.info.total).toFixed(2))+"%)\n        ")])]),t._v(" "),s("li",[s("p",{staticClass:"v-data"},[s("a",{attrs:{href:"/userManage/userGroupsDetails/"+t.url.highValue+"/1"}},[t._v("\n            "+t._s(t.uersInfo[2].val))])]),t._v(" "),s("p",{staticClass:"v-title"},[t._v("\n          高价值用户 ("+t._s(t.uersInfo[2].val/t.info.total==0?0:(t.uersInfo[2].val/t.info.total).toFixed(2))+"%)\n        ")])]),t._v(" "),s("li",[s("p",{staticClass:"v-data"},[s("a",{attrs:{href:"/userManage/userGroupsDetails/"+t.url.general+"/1"}},[t._v("\n            "+t._s(t.uersInfo[3].val))])]),t._v(" "),s("p",{staticClass:"v-title"},[t._v("\n          一般用户 ("+t._s(t.uersInfo[3].val/t.info.total==0?0:(t.uersInfo[3].val/t.info.total).toFixed(2))+"%)\n        ")])]),t._v(" "),s("li",[s("p",{staticClass:"v-data"},[s("a",{attrs:{href:"/userManage/userGroupsDetails/"+t.url.potential+"/1"}},[t._v("\n            "+t._s(t.uersInfo[4].val))])]),t._v(" "),s("p",{staticClass:"v-title"},[t._v("\n          潜力用户 ("+t._s(t.uersInfo[4].val/t.info.total==0?0:(t.uersInfo[4].val/t.info.total).toFixed(2))+"%)\n        ")])]),t._v(" "),s("li",[s("p",{staticClass:"v-data"},[s("a",{attrs:{href:"/userManage/userGroupsDetails/"+t.url.loss+"/1"}},[t._v("\n            "+t._s(t.uersInfo[5].val))])]),t._v(" "),s("p",{staticClass:"v-title"},[t._v("\n          流失用户 ("+t._s(t.uersInfo[5].val/t.info.total==0?0:(t.uersInfo[5].val/t.info.total).toFixed(2))+"%)\n        ")])])])]),t._v(" "),s("div",{staticClass:"v-data-chart"},[s("p",{staticClass:"v-title"},[t._v("\n      各级别用户趋势图\n    ")]),t._v(" "),s("ul",{staticClass:"v-btns clearfix"},[s("li",{class:{active:t.isActive3},on:{click:function(a){t.selectCount(a,"isActive3")}}},[t._v("3场")]),t._v(" "),s("li",{class:{active:t.isActive7},on:{click:function(a){t.selectCount(a,"isActive7")}}},[t._v("7场")]),t._v(" "),s("li",{class:{active:t.isActive10},on:{click:function(a){t.selectCount(a,"isActive10")}}},[t._v("10场")])]),t._v(" "),s("div",{staticClass:"chart-item",staticStyle:{height:"380px"},attrs:{id:"chart01"}})]),t._v(" "),s("div",{staticClass:"v-data-list clearfix"},[s("p",{staticClass:"v-title"},[t._v("\n      数据详情\n    ")]),t._v(" "),s("ol",[t._m(1),t._v(" "),t._l(t.tableList,function(a,i){return s("li",{key:a.id,staticClass:"clearfix"},[s("div",{staticClass:"v-activity-content v-name"},[t._v("\n          "+t._s(a.title)+"\n        ")]),t._v(" "),s("div",{staticClass:"v-activity-content v-time"},[t._v("\n          "+t._s(t.times[i]?t.times[i].toString().substring(0,10):"-")+"\n        ")]),t._v(" "),s("div",{staticClass:"v-activity-content"},[t._v("\n          "+t._s(a.val5)+"\n        ")]),t._v(" "),s("div",{staticClass:"v-activity-content"},[t._v("\n          "+t._s(a.val4)+"\n        ")]),t._v(" "),s("div",{staticClass:"v-activity-content"},[t._v("\n          "+t._s(a.val3)+"\n        ")]),t._v(" "),s("div",{staticClass:"v-activity-content"},[t._v("\n          "+t._s(a.val2)+"\n        ")]),t._v(" "),s("div",{staticClass:"v-activity-content"},[t._v("\n          "+t._s(a.val1)+"\n        ")]),t._v(" "),s("div",{staticClass:"v-activity-content"},[t._v("\n          "+t._s(a.val0)+"\n        ")])])})],2)])])};i._withStripped=!0;var e=s(96),n=s(477),v=s(481),l=s(482),c={data:function(){return{info:{},datas:{},uersInfo:[{val:0,centage:0},{val:0,centage:0},{val:0,centage:0},{val:0,centage:0},{val:0,centage:0},{val:0,centage:0}],tableList:[],isActive3:!0,isActive7:!1,isActive10:!1,url:{total:"",highQuality:"",highValue:"",general:"",potential:"",loss:""},times:[]}},beforeDestroy:function(){window.callbackResize=null,this.effectChart&&this.effectChart.dispose()},created:function(){var t=this;this.$config({handlers:!0}).$get(e.a.GET_CUSTOMER_OVERVIEW,{}).then(function(a){t.info=a.data;for(var s=t.info.userLevel,i=0;i<s.length;i++)t.uersInfo[i].val=s[i],t.uersInfo[i].centage=Math.round(s[i]/t.info.total)}).catch(function(a){t.$messageBox({header:"提示",content:a.msg,confirmText:"确定",handleClick:function(t){"cancel"===t.action||t.action}})}),window.callbackResize=function(){t.resizeRenderChart()},this.getData(3),this.getGroudList()},methods:{resizeRenderChart:function(){this.effectChart&&this.effectChart.resize()},getData:function(t){var a=this;this.$get(n.a.GET_ACTIVITY_RECENT,{count:t}).then(function(t){a.datas=t.data;for(var s=0;s<a.datas.list.length;s++)a.times[s]=a.datas.list[s].name,a.datas.list[s].name=a.datas.names[s].length>10?a.datas.names[s].substring(0,10):a.datas.names[s];for(var i=[],e=0,n=a.datas.list.length-1;n>=0;n--)i[e]=a.datas.list[n],e++;console.log(i),console.log(a.datas.list),a.tableList.splice(0,a.tableList.length),a.effectChart=Object(v.b)("chart01",{legendData:a.datas.types,list:i},{left:130,bottom:70,top:30,right:50},{left:"center",top:"350px"},"人"),a.datas.list.forEach(function(t,s){var i={};i.title=a.datas.names[s],i.startTime=t.name.toString().substring(0,10),i.val0=t.data[0],i.val1=t.data[1],i.val2=t.data[2],i.val3=t.data[3],i.val4=t.data[4],i.val5=t.data[5],a.tableList.push(i)})})},getGroudList:function(){var t=this;this.$post(l.a.GROUPS_LIST,{page:1}).then(function(a){for(var s=a.data.list,i=0;i<s.length;i++)"优质用户"===s[i].title?t.url.highQuality=s[i].group_id:"流失用户"===s[i].title?t.url.loss=s[i].group_id:"一般用户"===s[i].title?t.url.general=s[i].group_id:"高价值用户"===s[i].title?t.url.highValue=s[i].group_id:"潜力用户"===s[i].title&&(t.url.potential=s[i].group_id)})},selectCount:function(t,a){switch(a){case"isActive3":this.isActive3=!0,this.isActive7=!1,this.isActive10=!1,this.getData(3);break;case"isActive7":this.isActive3=!1,this.isActive7=!0,this.isActive10=!1,this.getData(7);break;case"isActive10":this.isActive3=!1,this.isActive7=!1,this.isActive10=!0,this.getData(10)}}}},o=(s(814),s(2)),r=Object(o.a)(c,i,[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"pond-title"},[a("span",{staticClass:"title"},[this._v("总览")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("li",{staticClass:"clearfix"},[s("div",{staticClass:"v-activity-content v-name"},[t._v("\n          活动名称\n        ")]),t._v(" "),s("div",{staticClass:"v-activity-content v-time"},[t._v("\n          时间\n        ")]),t._v(" "),s("div",{staticClass:"v-activity-content v-type"},[t._v("\n          观众总数\n        ")]),t._v(" "),s("div",{staticClass:"v-activity-content v-operation"},[t._v("\n          优质用户\n        ")]),t._v(" "),s("div",{staticClass:"v-activity-content v-high"},[t._v("\n          高价值用户\n        ")]),t._v(" "),s("div",{staticClass:"v-activity-content v-operation"},[t._v("\n          潜力用户\n        ")]),t._v(" "),s("div",{staticClass:"v-activity-content v-operation"},[t._v("\n          一般用户\n        ")]),t._v(" "),s("div",{staticClass:"v-activity-content v-type"},[t._v("\n          流失用户\n        ")])])}],!1,null,"13470d66",null);r.options.__file="src/pages/users-manage/overview/index.vue";a.default=r.exports}}]);
//# sourceMappingURL=55.0a109f7b.js.map