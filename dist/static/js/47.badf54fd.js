(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{624:function(t,a,e){},625:function(t,a,e){},900:function(t,a,e){"use strict";var i=e(624);e.n(i).a},902:function(t,a,e){"use strict";var i=e(625);e.n(i).a},937:function(t,a,e){"use strict";e.r(a);var i=e(97),s=e.n(i),n=e(137),r=e.n(n),l=e(498),c=e(497),v=e(494),d=e(495),o=e(499),h={name:"viewer",components:{VeTitle:l.a,VeCircle:c.a,NavMenu:o.a},data:function(){return{basicUserData:{}}},mounted:function(){console.log(v.a),this.initPage()},methods:{goPage:function(t){this.$router.push("/data/viewerList/"+this.$route.params.id+"?type="+t)},initPage:function(){var t=this;return r()(s.a.mark(function a(){var e;return s.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t.areaCountChart(),a.next=3,t.basicCount();case 3:e=a.sent,t.basicUserData=e,t.viewerRate();case 6:case"end":return a.stop()}},a,t)}))()},viewerRate:function(){var t=this,a={viewer:[{type:0,name:"新观众",value:10},{type:1,name:"老观众",value:20}],device:[{type:0,name:"电脑端",value:10},{type:1,name:"移动端",value:20}],system:[{type:0,name:"Windows",value:10},{type:1,name:"Mac",value:20},{type:1,name:"IOS",value:20},{type:1,name:"Android",value:20},{type:1,name:"Other",value:20}],browser:[{type:0,name:"Safari电脑版",value:10},{type:1,name:"Chrome电脑版",value:20},{type:1,name:"UC移动版",value:20},{type:1,name:"微信",value:20},{type:1,name:"QQ",value:20},{type:1,name:"Other",value:20}],gender:[{type:0,name:"男士",value:10},{type:1,name:"女士",value:20},{type:1,name:"未知",value:20}]};this.$nextTick(function(){Object(d.f)("chart01",a.viewer),Object(d.f)("chart02",[{name:"观众总数",value:t.basicUserData.viewerCount},{name:"老用户",value:t.basicUserData.oldUser},{name:"新用户",value:t.basicUserData.newUser},{name:"优质用户",value:t.basicUserData.highUser},{name:"高价值用户",value:t.basicUserData.vipUser},{name:"一般用户",value:t.basicUserData.ordinaryUser},{name:"潜在用户",value:t.basicUserData.potentialUser},{name:"流失用户",value:t.basicUserData.lossUser}]),Object(d.f)("chart03",a.device),Object(d.f)("chart04",a.system),Object(d.f)("chart05",a.browser),Object(d.f)("chart06",a.gender)})},basicCount:function(){return{viewerCount:12221,oldUser:5305,newUser:2561,highUser:2561,vipUser:2561,ordinaryUser:2561,potentialUser:2561,lossUser:2561}},areaCountChart:function(){var t={code:200,msg:null,data:{list:[{name:"北京",value:Math.round(900*Math.random())+100},{name:"天津",value:Math.round(900*Math.random())+100},{name:"河北",value:Math.round(900*Math.random())+100},{name:"山西",value:Math.round(900*Math.random())+100},{name:"内蒙古",value:Math.round(900*Math.random())+100},{name:"辽宁",value:Math.round(900*Math.random())+100},{name:"吉林",value:Math.round(900*Math.random())+100},{name:"黑龙江",value:Math.round(900*Math.random())+100},{name:"上海",value:Math.round(900*Math.random())+100},{name:"江苏",value:Math.round(900*Math.random())+100},{name:"浙江",value:Math.round(900*Math.random())+100},{name:"安徽",value:Math.round(900*Math.random())+100},{name:"福建",value:Math.round(900*Math.random())+100},{name:"江西",value:Math.round(900*Math.random())+100},{name:"山东",value:Math.round(900*Math.random())+100},{name:"河南",value:Math.round(900*Math.random())+100},{name:"湖北",value:Math.round(900*Math.random())+100},{name:"湖南",value:Math.round(900*Math.random())+100},{name:"广东",value:Math.round(900*Math.random())+100},{name:"广西",value:Math.round(900*Math.random())+100},{name:"海南",value:Math.round(900*Math.random())+100},{name:"重庆",value:Math.round(900*Math.random())+100},{name:"四川",value:Math.round(900*Math.random())+100},{name:"贵州",value:Math.round(900*Math.random())+100},{name:"云南",value:Math.round(900*Math.random())+100},{name:"西藏",value:Math.round(900*Math.random())+100},{name:"陕西",value:Math.round(900*Math.random())+100},{name:"甘肃",value:Math.round(900*Math.random())+100},{name:"海南",value:Math.round(900*Math.random())+100},{name:"青海",value:Math.round(900*Math.random())+100},{name:"宁夏",value:Math.round(900*Math.random())+100},{name:"新疆",value:Math.round(900*Math.random())+100},{name:"香港",value:Math.round(900*Math.random())+100},{name:"澳门",value:Math.round(900*Math.random())+100},{name:"台湾",value:Math.round(900*Math.random())+100}]}};this.$nextTick(function(){Object(d.c)("chart07",t.data.list)})}}},u=(e(900),e(902),e(2)),m=Object(u.a)(h,function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"data-box spread"},[e("p",{staticClass:"title"},[t._v("基础数据")]),t._v(" "),e("div",{staticClass:"item-container clearfix"},[e("div",{staticClass:"item-box fl"},[e("div",{staticClass:"box fl",staticStyle:{width:"100%"}},[e("div",{staticClass:"item-title"},[e("ve-title",{attrs:{title:"观众总数"}})],1),t._v(" "),e("div",{staticClass:"item-mid data-link",on:{click:function(a){t.goPage("all")}}},[t._v(t._s(t.basicUserData.viewerCount))])])]),t._v(" "),e("div",{staticClass:"item-box fl"},[e("div",{staticClass:"box fl",staticStyle:{width:"50%"}},[e("div",{staticClass:"item-title"},[e("ve-title",{attrs:{title:"老用户"}})],1),t._v(" "),e("div",{staticClass:"item-mid data-link",on:{click:function(a){t.goPage("old")}}},[t._v(t._s(t.basicUserData.oldUser))])]),t._v(" "),e("div",{staticClass:"box fl",staticStyle:{width:"50%"}},[e("div",{staticClass:"item-title"},[e("ve-title",{attrs:{title:"新用户"}})],1),t._v(" "),e("div",{staticClass:"item-mid data-link",on:{click:function(a){t.goPage("new")}}},[t._v(t._s(t.basicUserData.newUser))])])]),t._v(" "),e("div",{staticClass:"item-box fl"},[e("div",{staticClass:"box fl",staticStyle:{width:"20%"}},[e("div",{staticClass:"item-title"},[e("ve-title",{attrs:{title:"优质用户"}})],1),t._v(" "),e("div",{staticClass:"item-mid data-link",on:{click:function(a){t.goPage("high")}}},[t._v(t._s(t.basicUserData.highUser))])]),t._v(" "),e("div",{staticClass:"box fl",staticStyle:{width:"20%"}},[e("div",{staticClass:"item-title"},[e("ve-title",{attrs:{width:"180px",title:"高价值用户"}})],1),t._v(" "),e("div",{staticClass:"item-mid data-link",on:{click:function(a){t.goPage("vip")}}},[t._v(t._s(t.basicUserData.vipUser))])]),t._v(" "),e("div",{staticClass:"box fl",staticStyle:{width:"20%"}},[e("div",{staticClass:"item-title"},[e("ve-title",{attrs:{width:"180px",title:"一般用户"}})],1),t._v(" "),e("div",{staticClass:"item-mid data-link",on:{click:function(a){t.goPage("ord")}}},[t._v(t._s(t.basicUserData.ordinaryUser))])]),t._v(" "),e("div",{staticClass:"box fl",staticStyle:{width:"20%"}},[e("div",{staticClass:"item-title"},[e("ve-title",{attrs:{width:"180px",title:"潜在用户"}})],1),t._v(" "),e("div",{staticClass:"item-mid data-link",on:{click:function(a){t.goPage("potent")}}},[t._v(t._s(t.basicUserData.potentialUser))])]),t._v(" "),e("div",{staticClass:"box fl",staticStyle:{width:"20%"}},[e("div",{staticClass:"item-title"},[e("ve-title",{attrs:{width:"180px",title:"流失用户"}})],1),t._v(" "),e("div",{staticClass:"item-mid data-link",on:{click:function(a){t.goPage("loss")}}},[t._v(t._s(t.basicUserData.lossUser))])])])]),t._v(" "),t._m(0)])},[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"chart-box"},[e("p",{staticClass:"title"},[t._v("观众比例")]),t._v(" "),e("div",{staticClass:"chart-container"},[e("div",{staticClass:"chart-box",staticStyle:{width:"50%"}},[e("p",{staticClass:"title"},[t._v("新老观众占比")]),t._v(" "),e("div",{staticClass:"chart-item",staticStyle:{height:"360px"},attrs:{id:"chart01"}})]),t._v(" "),e("div",{staticClass:"chart-box",staticStyle:{width:"50%"}},[e("p",{staticClass:"title"},[t._v("各级别用户占比")]),t._v(" "),e("div",{staticClass:"chart-item",staticStyle:{height:"360px"},attrs:{id:"chart02"}})])]),t._v(" "),e("div",{staticClass:"chart-container"},[e("div",{staticClass:"chart-box",staticStyle:{width:"50%"}},[e("p",{staticClass:"title"},[t._v("设备占比")]),t._v(" "),e("div",{staticClass:"chart-item",staticStyle:{height:"360px"},attrs:{id:"chart03"}})]),t._v(" "),e("div",{staticClass:"chart-box",staticStyle:{width:"50%"}},[e("p",{staticClass:"title"},[t._v("操作系统占比")]),t._v(" "),e("div",{staticClass:"chart-item",staticStyle:{height:"360px"},attrs:{id:"chart04"}})])]),t._v(" "),e("div",{staticClass:"chart-container"},[e("div",{staticClass:"chart-box",staticStyle:{width:"50%"}},[e("p",{staticClass:"title"},[t._v("浏览器占比")]),t._v(" "),e("div",{staticClass:"chart-item",staticStyle:{height:"360px"},attrs:{id:"chart05"}})]),t._v(" "),e("div",{staticClass:"chart-box",staticStyle:{width:"50%"}},[e("p",{staticClass:"title"},[t._v("性别占比")]),t._v(" "),e("div",{staticClass:"chart-item",staticStyle:{height:"360px"},attrs:{id:"chart06"}})])]),t._v(" "),e("div",{staticClass:"chart-container"},[e("div",{staticClass:"chart-box",staticStyle:{width:"100%"}},[e("p",{staticClass:"title"},[t._v("地域")]),t._v(" "),e("div",{staticClass:"chart-item",staticStyle:{height:"500px"},attrs:{id:"chart07"}})])])])}],!1,null,"3f087af2",null);m.options.__file="viewer.vue";a.default=m.exports}}]);