(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{485:function(t,a,i){"use strict";i.r(a);var s=i(99),e=i.n(s),r=i(138),c=i.n(r),l=i(30),n=i.n(l),h=i(549),d=i(548),v=i(536),o=i(540),C=i(550),u=i(97),b=i(63),_=i(15),m={name:"viewer",components:{VeTitle:h.a,VeCircle:d.a,NavMenu:C.a},data:function(){return{basicUserData:{viewerCount:0,oldUser:0,newUser:0,highUser:0,vipUser:0,ordinaryUser:0,potentialUser:0,lossUser:0}}},beforeDestroy:function(){window.callbackResize=null,this.basicChart&&this.basicChart.dispose(),this.areaChart&&this.areaChart.dispose(),this.newOldUserChart&&this.newOldUserChart.dispose(),this.deviceChart&&this.deviceChart.dispose(),this.systemChart&&this.systemChart.dispose(),this.browserChart&&this.browserChart.dispose(),this.genderChart&&this.genderChart.dispose()},created:function(){var t=this;b.a.$emit("breads",[{title:"活动管理"},{title:"活动列表",url:"/liveMager/list"},{title:"活动详情",url:"/liveMager/detail/"+this.$route.params.id},{title:"观众画像",url:"/data/viewer/"+this.$route.params.id}]),this.storeSelectMenu(3),this.activityId=this.$route.params.id,this.initPage(),window.callbackResize=function(){t.resizeRenderChart()}},methods:n()({},Object(u.b)("dataCenter",{storeSelectMenu:_.c}),{resizeRenderChart:function(){this.basicChart&&this.basicChart.resize(),this.areaChart&&this.areaChart.resize(),this.newOldUserChart&&this.newOldUserChart.resize(),this.deviceChart&&this.deviceChart.resize(),this.systemChart&&this.systemChart.resize(),this.browserChart&&this.browserChart.resize(),this.genderChart&&this.genderChart.resize()},goPage:function(t,a){0!==a&&this.$router.push("/data/viewerList/"+this.$route.params.id+"?type="+t)},initPage:function(){var t=this;return c()(e.a.mark(function a(){return e.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t.areaCountChart(),a.next=3,t.basicCount();case 3:t.viewerRate();case 4:case"end":return a.stop()}},a,t)}))()},viewerRate:function(){var t=this;return this.$get(v.a.GET_VIEWER_ROAT,{activityId:this.activityId}).then(function(a){200===a.code&&0!==a.data.length&&t.$nextTick(function(){t.newOldUserChart=Object(o.f)("chart01",a.data.viewer),t.deviceChart=Object(o.f)("chart03",a.data.device),t.systemChart=Object(o.f)("chart04",a.data.system),t.browserChart=Object(o.f)("chart05",a.data.browser),t.genderChart=Object(o.f)("chart06",a.data.gender)})})},basicCount:function(){var t=this;return this.$get(v.a.GET_VIEWER_BASE,{activityId:this.activityId}).then(function(a){var i=[{name:"优质用户",value:0},{name:"高价值用户",value:0},{name:"一般用户",value:0},{name:"潜力用户",value:0},{name:"流失用户",value:0}];200===a.code&&0!==a.data.length&&(t.basicUserData=a.data,i=[{name:"优质用户",value:t.basicUserData.highUser},{name:"高价值用户",value:t.basicUserData.vipUser},{name:"一般用户",value:t.basicUserData.ordinaryUser},{name:"潜力用户",value:t.basicUserData.potentialUser},{name:"流失用户",value:t.basicUserData.lossUser}]),t.$nextTick(function(){t.basicChart=Object(o.f)("chart02",i)})})},areaCountChart:function(){var t=this;this.$get(v.a.GET_VIEWER_REGION,{activityId:this.activityId}).then(function(a){var i=[{name:"",value:0}];200===a.code&&0!==a.data.length&&(i=a.data.list),t.$nextTick(function(){t.areaChart=Object(o.c)("chart07",i)})})}})},f=(i(906),i(907),i(1)),w=Object(f.a)(m,function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"data-box viewer"},[i("div",{staticClass:"data-pad"},[i("p",{staticClass:"title"},[t._v("基础数据")]),t._v(" "),i("div",{staticClass:"item-container clearfix"},[i("div",{staticClass:"item-box fl"},[i("div",{staticClass:"box fl",staticStyle:{width:"33.3333%"}},[i("div",{staticClass:"item-title"},[i("ve-title",{attrs:{title:"观众总数"}})],1),t._v(" "),i("div",{staticClass:"item-mid data-link",on:{click:function(a){t.goPage("all",t.basicUserData.viewerCount)}}},[t._v("\n            "+t._s(t.basicUserData.viewerCount)+"\n          ")])]),t._v(" "),i("div",{staticClass:"box fl",staticStyle:{width:"33.3333%"}},[i("div",{staticClass:"item-title"},[i("ve-title",{attrs:{title:"老用户"}})],1),t._v(" "),i("div",{staticClass:"item-mid data-link",on:{click:function(a){t.goPage("old",t.basicUserData.oldUser)}}},[t._v("\n            "+t._s(t.basicUserData.oldUser)+"\n          ")])]),t._v(" "),i("div",{staticClass:"box fl",staticStyle:{width:"33.3333%"}},[i("div",{staticClass:"item-title"},[i("ve-title",{attrs:{title:"新用户"}})],1),t._v(" "),i("div",{staticClass:"item-mid data-link",on:{click:function(a){t.goPage("new",t.basicUserData.newUser)}}},[t._v("\n            "+t._s(t.basicUserData.newUser)+"\n          ")])])]),t._v(" "),i("div",{staticClass:"item-box fl"},[i("div",{staticClass:"box fl",staticStyle:{width:"20%"}},[i("div",{staticClass:"item-title"},[i("ve-title",{attrs:{title:"优质用户"}})],1),t._v(" "),i("div",{staticClass:"item-mid data-link",on:{click:function(a){t.goPage("high",t.basicUserData.highUser)}}},[t._v("\n            "+t._s(t.basicUserData.highUser)+"\n          ")])]),t._v(" "),i("div",{staticClass:"box fl",staticStyle:{width:"20%"}},[i("div",{staticClass:"item-title"},[i("ve-title",{attrs:{width:"180px",title:"高价值用户"}})],1),t._v(" "),i("div",{staticClass:"item-mid data-link",on:{click:function(a){t.goPage("vip",t.basicUserData.vipUser)}}},[t._v("\n            "+t._s(t.basicUserData.vipUser)+"\n          ")])]),t._v(" "),i("div",{staticClass:"box fl",staticStyle:{width:"20%"}},[i("div",{staticClass:"item-title"},[i("ve-title",{attrs:{width:"180px",title:"一般用户"}})],1),t._v(" "),i("div",{staticClass:"item-mid data-link",on:{click:function(a){t.goPage("ord",t.basicUserData.ordinaryUser)}}},[t._v("\n            "+t._s(t.basicUserData.ordinaryUser)+"\n          ")])]),t._v(" "),i("div",{staticClass:"box fl",staticStyle:{width:"20%"}},[i("div",{staticClass:"item-title"},[i("ve-title",{attrs:{width:"180px",title:"潜力用户"}})],1),t._v(" "),i("div",{staticClass:"item-mid data-link",on:{click:function(a){t.goPage("potent",t.basicUserData.potentialUser)}}},[t._v("\n            "+t._s(t.basicUserData.potentialUser)+"\n          ")])]),t._v(" "),i("div",{staticClass:"box fl",staticStyle:{width:"20%"}},[i("div",{staticClass:"item-title"},[i("ve-title",{attrs:{width:"180px",title:"流失用户"}})],1),t._v(" "),i("div",{staticClass:"item-mid data-link",on:{click:function(a){t.goPage("loss",t.basicUserData.lossUser)}}},[t._v("\n            "+t._s(t.basicUserData.lossUser)+"\n          ")])])])])]),t._v(" "),t._m(0)])},[function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"data-pad"},[i("div",{staticClass:"chart-box"},[i("p",{staticClass:"title"},[t._v("观众比例")]),t._v(" "),i("div",{staticClass:"chart-container"},[i("div",{staticClass:"chart-box",staticStyle:{width:"50%"}},[i("p",{staticClass:"title"},[t._v("新老观众占比")]),t._v(" "),i("div",{staticClass:"chart-item",staticStyle:{height:"360px"},attrs:{id:"chart01"}})]),t._v(" "),i("div",{staticClass:"chart-box",staticStyle:{width:"50%"}},[i("p",{staticClass:"title"},[t._v("各级别用户占比")]),t._v(" "),i("div",{staticClass:"chart-item",staticStyle:{height:"360px"},attrs:{id:"chart02"}})])]),t._v(" "),i("div",{staticClass:"chart-container"},[i("div",{staticClass:"chart-box",staticStyle:{width:"50%"}},[i("p",{staticClass:"title"},[t._v("设备占比")]),t._v(" "),i("div",{staticClass:"chart-item",staticStyle:{height:"360px"},attrs:{id:"chart03"}})]),t._v(" "),i("div",{staticClass:"chart-box",staticStyle:{width:"50%"}},[i("p",{staticClass:"title"},[t._v("操作系统占比")]),t._v(" "),i("div",{staticClass:"chart-item",staticStyle:{height:"360px"},attrs:{id:"chart04"}})])]),t._v(" "),i("div",{staticClass:"chart-container"},[i("div",{staticClass:"chart-box",staticStyle:{width:"50%"}},[i("p",{staticClass:"title"},[t._v("浏览器占比")]),t._v(" "),i("div",{staticClass:"chart-item",staticStyle:{height:"360px"},attrs:{id:"chart05"}})]),t._v(" "),i("div",{staticClass:"chart-box",staticStyle:{width:"50%"}},[i("p",{staticClass:"title"},[t._v("性别占比")]),t._v(" "),i("div",{staticClass:"chart-item",staticStyle:{height:"360px"},attrs:{id:"chart06"}})])]),t._v(" "),i("div",{staticClass:"chart-container"},[i("div",{staticClass:"chart-box",staticStyle:{width:"100%"}},[i("p",{staticClass:"title",staticStyle:{"text-align":"left"}},[t._v("地域")]),t._v(" "),i("div",{staticClass:"chart-item",staticStyle:{height:"500px"},attrs:{id:"chart07"}})])])])])}],!1,null,"2d180215",null);w.options.__file="viewer.vue";a.default=w.exports},698:function(t,a,i){},699:function(t,a,i){},906:function(t,a,i){"use strict";var s=i(698);i.n(s).a},907:function(t,a,i){"use strict";var s=i(699);i.n(s).a}}]);