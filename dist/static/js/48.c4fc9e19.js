(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{634:function(t,a,i){},635:function(t,a,i){},834:function(t,a,i){"use strict";var s=i(634);i.n(s).a},835:function(t,a,i){"use strict";var s=i(635);i.n(s).a},863:function(t,a,i){"use strict";i.r(a);var s=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"data-box viewer"},[i("div",{staticClass:"data-pad"},[i("p",{staticClass:"title"},[t._v("基础数据")]),t._v(" "),i("div",{staticClass:"item-container clearfix"},[i("div",{staticClass:"item-box fl"},[i("div",{staticClass:"box fl",staticStyle:{width:"33.3333%"}},[i("div",{staticClass:"item-title"},[i("ve-title",{attrs:{title:"观众总数"}})],1),t._v(" "),i("div",{staticClass:"item-mid data-link",on:{click:function(a){t.goPage("all")}}},[t._v(t._s(t.basicUserData.viewerCount))])]),t._v(" "),i("div",{staticClass:"box fl",staticStyle:{width:"33.3333%"}},[i("div",{staticClass:"item-title"},[i("ve-title",{attrs:{title:"老用户"}})],1),t._v(" "),i("div",{staticClass:"item-mid data-link",on:{click:function(a){t.goPage("old")}}},[t._v(t._s(t.basicUserData.oldUser))])]),t._v(" "),i("div",{staticClass:"box fl",staticStyle:{width:"33.3333%"}},[i("div",{staticClass:"item-title"},[i("ve-title",{attrs:{title:"新用户"}})],1),t._v(" "),i("div",{staticClass:"item-mid data-link",on:{click:function(a){t.goPage("new")}}},[t._v(t._s(t.basicUserData.newUser))])])]),t._v(" "),i("div",{staticClass:"item-box fl"},[i("div",{staticClass:"box fl",staticStyle:{width:"20%"}},[i("div",{staticClass:"item-title"},[i("ve-title",{attrs:{title:"优质用户"}})],1),t._v(" "),i("div",{staticClass:"item-mid data-link",on:{click:function(a){t.goPage("high")}}},[t._v(t._s(t.basicUserData.highUser))])]),t._v(" "),i("div",{staticClass:"box fl",staticStyle:{width:"20%"}},[i("div",{staticClass:"item-title"},[i("ve-title",{attrs:{width:"180px",title:"高价值用户"}})],1),t._v(" "),i("div",{staticClass:"item-mid data-link",on:{click:function(a){t.goPage("vip")}}},[t._v(t._s(t.basicUserData.vipUser))])]),t._v(" "),i("div",{staticClass:"box fl",staticStyle:{width:"20%"}},[i("div",{staticClass:"item-title"},[i("ve-title",{attrs:{width:"180px",title:"一般用户"}})],1),t._v(" "),i("div",{staticClass:"item-mid data-link",on:{click:function(a){t.goPage("ord")}}},[t._v(t._s(t.basicUserData.ordinaryUser))])]),t._v(" "),i("div",{staticClass:"box fl",staticStyle:{width:"20%"}},[i("div",{staticClass:"item-title"},[i("ve-title",{attrs:{width:"180px",title:"潜在用户"}})],1),t._v(" "),i("div",{staticClass:"item-mid data-link",on:{click:function(a){t.goPage("potent")}}},[t._v(t._s(t.basicUserData.potentialUser))])]),t._v(" "),i("div",{staticClass:"box fl",staticStyle:{width:"20%"}},[i("div",{staticClass:"item-title"},[i("ve-title",{attrs:{width:"180px",title:"流失用户"}})],1),t._v(" "),i("div",{staticClass:"item-mid data-link",on:{click:function(a){t.goPage("loss")}}},[t._v(t._s(t.basicUserData.lossUser))])])])])]),t._v(" "),t._m(0)])};s._withStripped=!0;var e=i(97),c=i.n(e),r=i(136),l=i.n(r),n=i(30),h=i.n(n),d=i(485),v=i(489),o=i(476),C=i(480),u=i(493),_=i(95),m=i(15),b={name:"viewer",components:{VeTitle:d.a,VeCircle:v.a,NavMenu:u.a},data:function(){return{basicUserData:{viewerCount:0,oldUser:0,newUser:0,highUser:0,vipUser:0,ordinaryUser:0,potentialUser:0,lossUser:0}}},beforeDestroy:function(){window.callbackResize=null,this.basicChart&&this.basicChart.dispose(),this.areaChart&&this.areaChart.dispose(),this.newOldUserChart&&this.newOldUserChart.dispose(),this.deviceChart&&this.deviceChart.dispose(),this.systemChart&&this.systemChart.dispose(),this.browserChart&&this.browserChart.dispose(),this.genderChart&&this.genderChart.dispose()},created:function(){var t=this;this.storeSelectMenu(3),this.activityId=this.$route.params.id,this.initPage(),window.callbackResize=function(){t.resizeRenderChart()}},methods:h()({},Object(_.b)("dataCenter",{storeSelectMenu:m.c}),{resizeRenderChart:function(){this.basicChart&&this.basicChart.resize(),this.areaChart&&this.areaChart.resize(),this.newOldUserChart&&this.newOldUserChart.resize(),this.deviceChart&&this.deviceChart.resize(),this.systemChart&&this.systemChart.resize(),this.browserChart&&this.browserChart.resize(),this.genderChart&&this.genderChart.resize()},goPage:function(t){this.$router.push("/data/viewerList/"+this.$route.params.id+"?type="+t)},initPage:function(){var t=this;return l()(c.a.mark(function a(){return c.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t.areaCountChart(),a.next=3,t.basicCount();case 3:t.viewerRate();case 4:case"end":return a.stop()}},a,t)}))()},viewerRate:function(){var t=this;return this.$get(o.a.GET_VIEWER_ROAT,{activityId:this.activityId}).then(function(a){200===a.code&&0!==a.data.length&&t.$nextTick(function(){t.newOldUserChart=Object(C.f)("chart01",a.data.viewer),t.deviceChart=Object(C.f)("chart03",a.data.device),t.systemChart=Object(C.f)("chart04",a.data.system),t.browserChart=Object(C.f)("chart05",a.data.browser),t.genderChart=Object(C.f)("chart06",a.data.gender)})})},basicCount:function(){var t=this;return this.$get(o.a.GET_VIEWER_BASE,{activityId:this.activityId}).then(function(a){var i=[{name:"观众总数",value:0},{name:"老用户",value:0},{name:"新用户",value:0},{name:"优质用户",value:0},{name:"高价值用户",value:0},{name:"一般用户",value:0},{name:"潜在用户",value:0},{name:"流失用户",value:0}];200===a.code&&0!==a.data.length&&(t.basicUserData=a.data,i=[{name:"观众总数",value:t.basicUserData.viewerCount},{name:"老用户",value:t.basicUserData.oldUser},{name:"新用户",value:t.basicUserData.newUser},{name:"优质用户",value:t.basicUserData.highUser},{name:"高价值用户",value:t.basicUserData.vipUser},{name:"一般用户",value:t.basicUserData.ordinaryUser},{name:"潜在用户",value:t.basicUserData.potentialUser},{name:"流失用户",value:t.basicUserData.lossUser}]),t.$nextTick(function(){t.basicChart=Object(C.f)("chart02",i)})})},areaCountChart:function(){var t=this;this.$get(o.a.GET_VIEWER_REGION,{activityId:this.activityId}).then(function(a){var i=[{name:"",value:0}];200===a.code&&0!==a.data.length&&(i=a.data.list),t.$nextTick(function(){t.areaChart=Object(C.c)("chart07",i)})})}})},f=(i(834),i(835),i(2)),w=Object(f.a)(b,s,[function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"data-pad"},[i("div",{staticClass:"chart-box"},[i("p",{staticClass:"title"},[t._v("观众比例")]),t._v(" "),i("div",{staticClass:"chart-container"},[i("div",{staticClass:"chart-box",staticStyle:{width:"50%"}},[i("p",{staticClass:"title"},[t._v("新老观众占比")]),t._v(" "),i("div",{staticClass:"chart-item",staticStyle:{height:"360px"},attrs:{id:"chart01"}})]),t._v(" "),i("div",{staticClass:"chart-box",staticStyle:{width:"50%"}},[i("p",{staticClass:"title"},[t._v("各级别用户占比")]),t._v(" "),i("div",{staticClass:"chart-item",staticStyle:{height:"360px"},attrs:{id:"chart02"}})])]),t._v(" "),i("div",{staticClass:"chart-container"},[i("div",{staticClass:"chart-box",staticStyle:{width:"50%"}},[i("p",{staticClass:"title"},[t._v("设备占比")]),t._v(" "),i("div",{staticClass:"chart-item",staticStyle:{height:"360px"},attrs:{id:"chart03"}})]),t._v(" "),i("div",{staticClass:"chart-box",staticStyle:{width:"50%"}},[i("p",{staticClass:"title"},[t._v("操作系统占比")]),t._v(" "),i("div",{staticClass:"chart-item",staticStyle:{height:"360px"},attrs:{id:"chart04"}})])]),t._v(" "),i("div",{staticClass:"chart-container"},[i("div",{staticClass:"chart-box",staticStyle:{width:"50%"}},[i("p",{staticClass:"title"},[t._v("浏览器占比")]),t._v(" "),i("div",{staticClass:"chart-item",staticStyle:{height:"360px"},attrs:{id:"chart05"}})]),t._v(" "),i("div",{staticClass:"chart-box",staticStyle:{width:"50%"}},[i("p",{staticClass:"title"},[t._v("性别占比")]),t._v(" "),i("div",{staticClass:"chart-item",staticStyle:{height:"360px"},attrs:{id:"chart06"}})])]),t._v(" "),i("div",{staticClass:"chart-container"},[i("div",{staticClass:"chart-box",staticStyle:{width:"100%"}},[i("p",{staticClass:"title",staticStyle:{"text-align":"left"}},[t._v("地域")]),t._v(" "),i("div",{staticClass:"chart-item",staticStyle:{height:"500px"},attrs:{id:"chart07"}})])])])])}],!1,null,"3c89f5c3",null);w.options.__file="src/pages/data/viewer.vue";a.default=w.exports}}]);
//# sourceMappingURL=48.c4fc9e19.js.map