(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{620:function(t,e,n){},817:function(t,e,n){"use strict";var i=n(620);n.n(i).a},851:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"data-container"},[n("div",{staticClass:"data-header"},[n("p",[t._v(t._s(t.activityInfo.title))]),t._v(" "),n("p",[n("span",[t._v("开播时间 "+t._s(t.activityInfo.startTime))]),t._v(" "),n("span",[t._v("直播时长 2小时23分")])]),t._v(" "),!1!==t.selectMenu?n("div",{staticClass:"nav-menu-box"},[n("nav-menu",{attrs:{menus:t.menuList,currentMenu:t.selectMenu},on:{changeMenu:t.changeMenu}})],1):t._e()]),t._v(" "),n("div",{staticClass:"data-content"},[n("router-view")],1)])};i._withStripped=!0;var a=n(30),s=n.n(a),r=n(486),u=n(468),c=n(96),o=n(15),v={name:"data-main",components:{NavMenu:r.a},data:function(){return{activeId:"",currentMenu:0,activityInfo:{},menuList:["概览数据","推广数据","直播数据","观众画像"]}},computed:s()({},Object(c.c)("dataCenter",{selectMenu:function(t){return t.selectMenu}})),created:function(){this.activeId=this.$route.params.id;var t=this.$route.name;"preview"===t?this.currentMenu=0:"spread"===t?this.currentMenu=1:"live"===t?this.currentMenu=2:"viewer"!==t&&"viewerList"!==t||(this.currentMenu=3),this.storeSelectMenu(this.currentMenu),this.getDetails()},methods:s()({},Object(c.b)("dataCenter",{storeSelectMenu:o.c}),{changeMenu:function(t){0===t?this.$router.push("/data/preview/"+this.activeId):1===t?this.$router.push("/data/spread/"+this.activeId):2===t?this.$router.push("/data/live/"+this.activeId):3===t&&this.$router.push("/data/viewer/"+this.activeId),this.storeSelectMenu(this.currentMenu)},getDetails:function(){var t=this;this.$get(u.a.GET_DETAILS,{activityId:this.activeId}).then(function(e){console.log(e),t.activityInfo=e.data.activity})}})},d=(n(817),n(2)),h=Object(d.a)(v,i,[],!1,null,"a9e0dd9e",null);h.options.__file="src/pages/data/index.vue";e.default=h.exports}}]);
//# sourceMappingURL=36.4f432e31.js.map