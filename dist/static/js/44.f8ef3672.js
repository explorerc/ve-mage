(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{1037:function(t,e,i){"use strict";var n=i(707);i.n(n).a},507:function(t,e,i){"use strict";i.r(e);var n=i(30),a=i.n(n),s=i(568),r=i(554),u=i(97),c=i(15),v={name:"data-main",components:{NavMenu:s.a},data:function(){return{activeId:"",currentMenu:0,activityInfo:{title:"",realStartTime:"",liveTime:0,status:""},menuList:["概览数据","推广数据","直播数据","观众画像"]}},filters:{fmtTime:function(t){return((t/3600>>0)+"").padStart(2,0)+":"+((t/60%60>>0)+"").padStart(2,0)+":"+((t%60>>0)+"").padStart(2,0)}},computed:a()({},Object(u.c)("dataCenter",{selectMenu:function(t){return t.selectMenu}})),created:function(){this.activeId=this.$route.params.id;var t=this.$route.name;"preview"===t?this.currentMenu=0:"spread"===t?this.currentMenu=1:"live"===t?this.currentMenu=2:"viewer"!==t&&"viewerList"!==t||(this.currentMenu=3),this.storeSelectMenu(this.currentMenu),this.getDetails()},methods:a()({},Object(u.b)("dataCenter",{storeSelectMenu:c.c}),{changeMenu:function(t){this.currentMenu=t,0===t?this.$router.push("/data/preview/"+this.activeId):1===t?this.$router.push("/data/spread/"+this.activeId):2===t?this.$router.push("/data/live/"+this.activeId):3===t&&this.$router.push("/data/viewer/"+this.activeId),this.storeSelectMenu(this.currentMenu)},getDetails:function(){var t=this;this.$get(r.a.GET_ACTIVITY_INFO,{activityId:this.activeId}).then(function(e){t.activityInfo=e.data})}})},o=(i(1037),i(1)),d=Object(o.a)(v,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"data-container"},[i("div",{staticClass:"data-header"},[i("p",{staticClass:"title"},[t._v(t._s(t.activityInfo.title))]),t._v(" "),i("p",{staticClass:"detail"},[i("span",[t._v("开播时间："+t._s(t.activityInfo.realStartTime||"0000-00-00"))]),t._v(" "),i("span",[t._v("直播时长："+t._s(t._f("fmtTime")(t.activityInfo.liveTime)))])]),t._v(" "),!1!==t.selectMenu?i("div",{staticClass:"nav-menu-box"},[i("nav-menu",{attrs:{menus:t.menuList,currentMenu:t.selectMenu},on:{changeMenu:t.changeMenu}})],1):t._e()]),t._v(" "),i("div",{staticClass:"data-content"},[i("router-view")],1)])},[],!1,null,"23e46431",null);d.options.__file="index.vue";e.default=d.exports},707:function(t,e,i){}}]);