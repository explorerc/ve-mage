(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{489:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"data-container"},[i("div",{staticClass:"data-header"},[i("p",{staticClass:"title"},[t._v(t._s(t.activityInfo.title))]),t._v(" "),i("p",{staticClass:"detail"},[i("span",[t._v("开播时间："+t._s(t.activityInfo.realStartTime||"0000-00-00"))]),t._v(" "),i("span",[t._v("直播时长："+t._s(t._f("fmtTime")(t.activityInfo.liveTime)))])]),t._v(" "),!1!==t.selectMenu?i("div",{staticClass:"nav-menu-box"},[i("nav-menu",{attrs:{menus:t.menuList,currentMenu:t.selectMenu},on:{changeMenu:t.changeMenu}})],1):t._e()]),t._v(" "),i("div",{staticClass:"data-content"},[i("router-view")],1)])};a._withStripped=!0;var n=i(30),s=i.n(n),r=i(550),u=i(536),c=i(97),v=i(15),d={name:"data-main",components:{NavMenu:r.a},data:function(){return{activeId:"",currentMenu:0,activityInfo:{title:"",realStartTime:"",liveTime:0,status:""},menuList:["概览数据","推广数据","直播数据","观众画像"]}},filters:{fmtTime:function(t){return((t/3600>>0)+"").padStart(2,0)+":"+((t/60%60>>0)+"").padStart(2,0)+":"+((t%60>>0)+"").padStart(2,0)}},computed:s()({},Object(c.c)("dataCenter",{selectMenu:function(t){return t.selectMenu}})),created:function(){this.activeId=this.$route.params.id;var t=this.$route.name;"preview"===t?this.currentMenu=0:"spread"===t?this.currentMenu=1:"live"===t?this.currentMenu=2:"viewer"!==t&&"viewerList"!==t||(this.currentMenu=3),this.storeSelectMenu(this.currentMenu),this.getDetails()},methods:s()({},Object(c.b)("dataCenter",{storeSelectMenu:v.c}),{changeMenu:function(t){this.currentMenu=t,0===t?this.$router.push("/data/preview/"+this.activeId):1===t?this.$router.push("/data/spread/"+this.activeId):2===t?this.$router.push("/data/live/"+this.activeId):3===t&&this.$router.push("/data/viewer/"+this.activeId),this.storeSelectMenu(this.currentMenu)},getDetails:function(){var t=this;this.$get(u.a.GET_ACTIVITY_INFO,{activityId:this.activeId}).then(function(e){t.activityInfo=e.data})}})},o=(i(898),i(1)),h=Object(o.a)(d,a,[],!1,null,"a9e0dd9e",null);h.options.__file="src/pages/data/index.vue";e.default=h.exports},689:function(t,e,i){},898:function(t,e,i){"use strict";var a=i(689);i.n(a).a}}]);
//# sourceMappingURL=44.c83a900b.js.map