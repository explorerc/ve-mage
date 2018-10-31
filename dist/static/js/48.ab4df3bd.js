(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{618:function(t,i,a){},619:function(t,i,a){},802:function(t,i,a){"use strict";var s=a(618);a.n(s).a},803:function(t,i,a){"use strict";var s=a(619);a.n(s).a},861:function(t,i,a){"use strict";a.r(i);var s=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"data-box viewer"},[a("div",{staticClass:"data-pad"},[a("p",{staticClass:"title"},[t._v("基础数据")]),t._v(" "),a("div",{staticClass:"item-container clearfix"},[a("div",{staticClass:"item-box fl"},[a("div",{staticClass:"box fl",staticStyle:{width:"33.3333%"}},[a("div",{staticClass:"item-title"},[a("ve-title",{attrs:{title:"观众总数"}})],1),t._v(" "),a("div",{staticClass:"item-mid data-link",on:{click:function(i){t.goPage("all")}}},[t._v(t._s(t.basicUserData.viewerCount))])]),t._v(" "),a("div",{staticClass:"box fl",staticStyle:{width:"33.3333%"}},[a("div",{staticClass:"item-title"},[a("ve-title",{attrs:{title:"老用户"}})],1),t._v(" "),a("div",{staticClass:"item-mid data-link",on:{click:function(i){t.goPage("old")}}},[t._v(t._s(t.basicUserData.oldUser))])]),t._v(" "),a("div",{staticClass:"box fl",staticStyle:{width:"33.3333%"}},[a("div",{staticClass:"item-title"},[a("ve-title",{attrs:{title:"新用户"}})],1),t._v(" "),a("div",{staticClass:"item-mid data-link",on:{click:function(i){t.goPage("new")}}},[t._v(t._s(t.basicUserData.newUser))])])]),t._v(" "),a("div",{staticClass:"item-box fl"},[a("div",{staticClass:"box fl",staticStyle:{width:"20%"}},[a("div",{staticClass:"item-title"},[a("ve-title",{attrs:{title:"优质用户"}})],1),t._v(" "),a("div",{staticClass:"item-mid data-link",on:{click:function(i){t.goPage("high")}}},[t._v(t._s(t.basicUserData.highUser))])]),t._v(" "),a("div",{staticClass:"box fl",staticStyle:{width:"20%"}},[a("div",{staticClass:"item-title"},[a("ve-title",{attrs:{width:"180px",title:"高价值用户"}})],1),t._v(" "),a("div",{staticClass:"item-mid data-link",on:{click:function(i){t.goPage("vip")}}},[t._v(t._s(t.basicUserData.vipUser))])]),t._v(" "),a("div",{staticClass:"box fl",staticStyle:{width:"20%"}},[a("div",{staticClass:"item-title"},[a("ve-title",{attrs:{width:"180px",title:"一般用户"}})],1),t._v(" "),a("div",{staticClass:"item-mid data-link",on:{click:function(i){t.goPage("ord")}}},[t._v(t._s(t.basicUserData.ordinaryUser))])]),t._v(" "),a("div",{staticClass:"box fl",staticStyle:{width:"20%"}},[a("div",{staticClass:"item-title"},[a("ve-title",{attrs:{width:"180px",title:"潜在用户"}})],1),t._v(" "),a("div",{staticClass:"item-mid data-link",on:{click:function(i){t.goPage("potent")}}},[t._v(t._s(t.basicUserData.potentialUser))])]),t._v(" "),a("div",{staticClass:"box fl",staticStyle:{width:"20%"}},[a("div",{staticClass:"item-title"},[a("ve-title",{attrs:{width:"180px",title:"流失用户"}})],1),t._v(" "),a("div",{staticClass:"item-mid data-link",on:{click:function(i){t.goPage("loss")}}},[t._v(t._s(t.basicUserData.lossUser))])])])])]),t._v(" "),t._m(0)])};s._withStripped=!0;var e=a(97),c=a.n(e),r=a(138),l=a.n(r),n=a(489),h=a(487),d=a(480),v=a(481),o=a(491),C={name:"viewer",components:{VeTitle:n.a,VeCircle:h.a,NavMenu:o.a},data:function(){return{basicUserData:{viewerCount:0,oldUser:0,newUser:0,highUser:0,vipUser:0,ordinaryUser:0,potentialUser:0,lossUser:0}}},beforeDestroy:function(){window.callbackResize=null,this.basicChart&&this.basicChart.dispose(),this.areaChart&&this.areaChart.dispose(),this.newOldUserChart&&this.newOldUserChart.dispose(),this.deviceChart&&this.deviceChart.dispose(),this.systemChart&&this.systemChart.dispose(),this.browserChart&&this.browserChart.dispose(),this.genderChart&&this.genderChart.dispose()},created:function(){var t=this;this.activityId=this.$route.params.id,this.initPage(),window.callbackResize=function(){t.resizeRenderChart()}},methods:{resizeRenderChart:function(){this.basicChart&&this.basicChart.resize(),this.areaChart&&this.areaChart.resize(),this.newOldUserChart&&this.newOldUserChart.resize(),this.deviceChart&&this.deviceChart.resize(),this.systemChart&&this.systemChart.resize(),this.browserChart&&this.browserChart.resize(),this.genderChart&&this.genderChart.resize()},goPage:function(t){this.$router.push("/data/viewerList/"+this.$route.params.id+"?type="+t)},initPage:function(){var t=this;return l()(c.a.mark(function i(){return c.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return t.areaCountChart(),i.next=3,t.basicCount();case 3:t.viewerRate();case 4:case"end":return i.stop()}},i,t)}))()},viewerRate:function(){var t=this;return this.$get(d.a.GET_VIEWER_ROAT,{activityId:this.activityId}).then(function(i){200===i.code&&t.$nextTick(function(){t.newOldUserChart=Object(v.f)("chart01",i.data.viewer),t.deviceChart=Object(v.f)("chart03",i.data.device),t.systemChart=Object(v.f)("chart04",i.data.system),t.browserChart=Object(v.f)("chart05",i.data.browser),t.genderChart=Object(v.f)("chart06",i.data.gender)})})},basicCount:function(){var t=this;return this.$get(d.a.GET_VIEWER_BASE,{activityId:this.activityId}).then(function(i){200===i.code&&(t.basicUserData=i.data,t.basicChart=Object(v.f)("chart02",[{name:"观众总数",value:t.basicUserData.viewerCount},{name:"老用户",value:t.basicUserData.oldUser},{name:"新用户",value:t.basicUserData.newUser},{name:"优质用户",value:t.basicUserData.highUser},{name:"高价值用户",value:t.basicUserData.vipUser},{name:"一般用户",value:t.basicUserData.ordinaryUser},{name:"潜在用户",value:t.basicUserData.potentialUser},{name:"流失用户",value:t.basicUserData.lossUser}]))})},areaCountChart:function(){var t=this;this.$get(d.a.GET_VIEWER_REGION,{activityId:this.activityId}).then(function(i){i.data.list&&t.$nextTick(function(){t.areaChart=Object(v.c)("chart07",i.data.list)})})}}},u=(a(802),a(803),a(2)),_=Object(u.a)(C,s,[function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"data-pad"},[a("div",{staticClass:"chart-box"},[a("p",{staticClass:"title"},[t._v("观众比例")]),t._v(" "),a("div",{staticClass:"chart-container"},[a("div",{staticClass:"chart-box",staticStyle:{width:"50%"}},[a("p",{staticClass:"title"},[t._v("新老观众占比")]),t._v(" "),a("div",{staticClass:"chart-item",staticStyle:{height:"360px"},attrs:{id:"chart01"}})]),t._v(" "),a("div",{staticClass:"chart-box",staticStyle:{width:"50%"}},[a("p",{staticClass:"title"},[t._v("各级别用户占比")]),t._v(" "),a("div",{staticClass:"chart-item",staticStyle:{height:"360px"},attrs:{id:"chart02"}})])]),t._v(" "),a("div",{staticClass:"chart-container"},[a("div",{staticClass:"chart-box",staticStyle:{width:"50%"}},[a("p",{staticClass:"title"},[t._v("设备占比")]),t._v(" "),a("div",{staticClass:"chart-item",staticStyle:{height:"360px"},attrs:{id:"chart03"}})]),t._v(" "),a("div",{staticClass:"chart-box",staticStyle:{width:"50%"}},[a("p",{staticClass:"title"},[t._v("操作系统占比")]),t._v(" "),a("div",{staticClass:"chart-item",staticStyle:{height:"360px"},attrs:{id:"chart04"}})])]),t._v(" "),a("div",{staticClass:"chart-container"},[a("div",{staticClass:"chart-box",staticStyle:{width:"50%"}},[a("p",{staticClass:"title"},[t._v("浏览器占比")]),t._v(" "),a("div",{staticClass:"chart-item",staticStyle:{height:"360px"},attrs:{id:"chart05"}})]),t._v(" "),a("div",{staticClass:"chart-box",staticStyle:{width:"50%"}},[a("p",{staticClass:"title"},[t._v("性别占比")]),t._v(" "),a("div",{staticClass:"chart-item",staticStyle:{height:"360px"},attrs:{id:"chart06"}})])]),t._v(" "),a("div",{staticClass:"chart-container"},[a("div",{staticClass:"chart-box",staticStyle:{width:"100%"}},[a("p",{staticClass:"title",staticStyle:{"text-align":"left"}},[t._v("地域")]),t._v(" "),a("div",{staticClass:"chart-item",staticStyle:{height:"500px"},attrs:{id:"chart07"}})])])])])}],!1,null,"3c89f5c3",null);_.options.__file="src/pages/data/viewer.vue";i.default=_.exports}}]);
//# sourceMappingURL=48.ab4df3bd.js.map