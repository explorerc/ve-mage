(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{504:function(t,a,i){"use strict";i.r(a);var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"data-box spread"},[i("div",{staticClass:"data-pad"},[i("p",{staticClass:"title"},[t._v("推广渠道")]),t._v(" "),i("div",{staticClass:"item-container clearfix"},[i("div",{staticClass:"item-box fl"},[i("div",{staticClass:"box fl",staticStyle:{width:"33.3333%"}},[i("div",{staticClass:"item-title"},[i("ve-title",{attrs:{width:"180px",title:"邮件发送数量",tip:"使用邮件作为推广方式，发送的人数。"}})],1),t._v(" "),i("div",{staticClass:"item-mid"},[t._v(t._s(t.spreadChannelData.email))])]),t._v(" "),i("div",{staticClass:"box fl",staticStyle:{width:"33.3333%"}},[i("div",{staticClass:"item-title"},[i("ve-title",{attrs:{width:"180px",title:"微信发送数量",tip:"使用微信作为推广方式，发送的人数。"}})],1),t._v(" "),i("div",{staticClass:"item-mid"},[t._v(t._s(t.spreadChannelData.weChat))])]),t._v(" "),i("div",{staticClass:"box fl",staticStyle:{width:"33.3333%"}},[i("div",{staticClass:"item-title"},[i("ve-title",{attrs:{width:"180px",title:"短信发送数量",tip:"使用短信作为推广方式，发送的人数。"}})],1),t._v(" "),i("div",{staticClass:"item-mid"},[t._v(t._s(t.spreadChannelData.sms))])])])]),t._v(" "),t._m(0),t._v(" "),t._m(1)]),t._v(" "),i("div",{staticClass:"data-pad",staticStyle:{"margin-top":"20px"}},[i("p",{staticClass:"title"},[t._v("活动官网")]),t._v(" "),i("div",{staticClass:"item-container clearfix"},[i("div",{staticClass:"item-box fl"},[i("div",{staticClass:"box fl",staticStyle:{width:"33.3333%"}},[i("div",{staticClass:"item-title"},[i("ve-title",{attrs:{width:"140px",title:"页面访问人数",tip:"访问活动官网的人数。"}})],1),t._v(" "),i("div",{staticClass:"item-mid"},[t._v(t._s(t.officialChannelData.nums))])]),t._v(" "),i("div",{staticClass:"box fl",staticStyle:{width:"33.3333%"}},[i("div",{staticClass:"item-title"},[i("ve-title",{attrs:{width:"152px",title:"页面访问次数",tip:"访问活动官网的人次数。"}})],1),t._v(" "),i("div",{staticClass:"item-mid"},[t._v(t._s(t.officialChannelData.times))])]),t._v(" "),i("div",{staticClass:"box fl",staticStyle:{width:"33.3333%"}},[i("div",{staticClass:"item-title"},[i("ve-title",{attrs:{width:"176px",title:"人均停留时长",tip:"在活动官网的平均停留时间。"}})],1),t._v(" "),i("div",{staticClass:"item-mid"},[t._v(t._s(t._f("fmtTime")(t.officialChannelData.average)))])])])]),t._v(" "),t._m(2),t._v(" "),i("p",{staticClass:"title"},[t._v("活动引导页")]),t._v(" "),i("div",{staticClass:"item-container clearfix"},[i("div",{staticClass:"item-box fl"},[i("div",{staticClass:"box fl",staticStyle:{width:"20%"}},[i("div",{staticClass:"item-title"},[i("ve-title",{attrs:{width:"130px",title:"页面访问人数",tip:"访问活动引导页的人数。"}})],1),t._v(" "),i("div",{staticClass:"item-mid"},[t._v(t._s(t.leadPageData.nums))])]),t._v(" "),i("div",{staticClass:"box fl",staticStyle:{width:"20%"}},[i("div",{staticClass:"item-title"},[i("ve-title",{attrs:{width:"130px",title:"页面访问次数",tip:"访问活动引导页的人次数。"}})],1),t._v(" "),i("div",{staticClass:"item-mid"},[t._v(t._s(t.leadPageData.times))])]),t._v(" "),"APPOINT"!==t.leadPageData.isSubscribe?i("div",{staticClass:"box fl",staticStyle:{width:"20%"}},[i("div",{staticClass:"item-title"},[i("ve-title",{attrs:{width:"130px",title:"预约人数",tip:"直播开始前预约活动的人数。"}})],1),t._v(" "),i("div",{staticClass:"item-mid data-link",on:{click:t.goPreDataDetail}},[t._v(t._s(t.leadPageData.subscribe))])]):i("div",{staticClass:"box fl",staticStyle:{width:"20%"}},[i("div",{staticClass:"item-title"},[i("ve-title",{attrs:{width:"130px",title:"报名人数",tip:"报名活动的总人数。"}})],1),t._v(" "),i("div",{staticClass:"item-mid"},[t._v(t._s(t.leadPageData.signUp))])]),t._v(" "),"APPOINT"!==t.leadPageData.isSubscribe?i("div",{staticClass:"box fl",staticStyle:{width:"20%"}},[i("div",{staticClass:"item-title"},[i("ve-title",{attrs:{width:"130px",title:"实到人数",tip:"预约活动的人数中实际参加活动的人数。"}})],1),t._v(" "),i("div",{staticClass:"item-mid"},[t._v(t._s(t.leadPageData.actual))])]):i("div",{staticClass:"box fl",staticStyle:{width:"20%"}},[i("div",{staticClass:"item-title"},[i("ve-title",{attrs:{width:"130px",title:"开播前报名人数",tip:"在直播开始前进行报名的人数。"}})],1),t._v(" "),i("div",{staticClass:"item-mid"},[t._v(t._s(t.leadPageData.beforeSignUp))])]),t._v(" "),"APPOINT"!==t.leadPageData.isSubscribe?i("div",{staticClass:"box fl",staticStyle:{width:"20%"}},[i("div",{staticClass:"item-title"},[i("ve-title",{attrs:{width:"130px",title:"预约参会率",tip:"本次直播的预约参会率。"}})],1),t._v(" "),t.leadPageData.subscribe?i("div",{staticClass:"item-mid"},[t._v("\n            "+t._s((100*t.leadPageData.actual/t.leadPageData.subscribe).toFixed(2))+"%\n          ")]):i("div",{staticClass:"item-mid"},[t._v("0%")])]):i("div",{staticClass:"box fl",staticStyle:{width:"20%"}},[i("div",{staticClass:"item-title"},[i("ve-title",{attrs:{width:"130px",title:"开播后报名人数",tip:"在直播开始后进行报名的人数。"}})],1),t._v(" "),i("div",{staticClass:"item-mid"},[t._v(t._s(t.leadPageData.afterSignUp))])])])]),t._v(" "),i("div",{staticClass:"chart-container"},[i("div",{staticClass:"chart-box",staticStyle:{width:"100%"}},[i("p",{staticClass:"title"},[t._v("页面访问\n          "),i("span",{staticClass:"chart-menu"},[i("nav-menu",{attrs:{menus:["人次","人数"],currentMenu:t.pageLinkType},on:{changeMenu:t.changePageLinkMenu}})],1)]),t._v(" "),i("div",{staticClass:"chart-item",staticStyle:{height:"400px"},attrs:{id:"chart06"}})])])]),t._v(" "),i("message-box",{directives:[{name:"show",rawName:"v-show",value:t.preDataDetail,expression:"preDataDetail"}],attrs:{width:"60%",type:"prompt",header:t.header},on:{handleClick:t.closeMesssageBox}},[i("div",{staticClass:"msg-table-box"},[t.preDataList.length?i("button",{staticClass:"primary-button export-btn fr",on:{click:t.exportDataList}},[t._v("导出")]):t._e(),t._v(" "),i("div",{staticClass:"table-box"},[t.preDataList.length?[i("el-table",{staticStyle:{width:"100%"},attrs:{data:t.preDataList}},[i("el-table-column",{attrs:{label:"序号"},scopedSlots:t._u([{key:"default",fn:function(a){return[t._v("\n                "+t._s(a.$index)+"\n              ")]}}])}),t._v(" "),i("el-table-column",{attrs:{prop:"nickname",label:"姓名"}}),t._v(" "),i("el-table-column",{attrs:{prop:"phone",label:"手机号"}}),t._v(" "),i("el-table-column",{attrs:{prop:"guide_page_join_at",label:"进入引导页时间（第一次）"}}),t._v(" "),i("el-table-column",{attrs:{prop:"guide_page_leave_at",label:"离开引导页时间（最后一次）"}}),t._v(" "),i("el-table-column",{attrs:{prop:"appointment_time",label:"预约时间"}}),t._v(" "),i("el-table-column",{attrs:{prop:"first_join_at",label:"参会时间"}})],1)]:[i("div",{staticClass:"empty"},[i("div",{staticClass:"img"}),t._v(" "),i("div",{staticClass:"txt"},[t._v("暂无数据")])])]],2)])])],1)};e._withStripped=!0;var s=i(544),l=i(545),n=i(522),d=i(528),c=i(543),h=i(59),r={name:"spead",components:{VeTitle:s.a,VeCircle:l.a,NavMenu:c.a},data:function(){return{preDataDetail:!1,preDataList:[],header:"预约数据详情|报名数据详情",webwiteType:0,pageLinkType:0,pageLinkDatas:{},spreadChannelData:{},officialChannelData:{},leadPageData:{isSubscribe:"NONE",nums:0,times:0,subscribe:0,actual:0,beforeSignUp:0,afterSignUp:0},activityId:0,page:1,pageSize:10,total:0}},created:function(){h.a.$emit("breads",[{title:"活动管理"},{title:"活动列表",url:"/liveMager/list"},{title:"活动详情",url:"/liveMager/detail/"+this.$route.params.id},{title:"推广数据",url:"/data/spread/"+this.$route.params.id}])},beforeDestroy:function(){window.callbackResize=null,this.effectChart&&this.effectChart.dispose(),this.emailChart&&this.emailChart.dispose(),this.weChatChart&&this.weChatChart.dispose(),this.smsChart&&this.smsChart.dispose(),this.webChart&&this.webChart.dispose(),this.linkChart&&this.linkChart.dispose()},mounted:function(){var t=this;this.activityId=this.$route.params.id,this.initPage(),window.callbackResize=function(){t.resizeRenderChart()}},methods:{resizeRenderChart:function(){this.effectChart&&this.effectChart.resize(),this.emailChart&&this.emailChart.resize(),this.weChatChart&&this.weChatChart.resize(),this.smsChart&&this.smsChart.resize(),this.webChart&&this.webChart.resize(),this.linkChart&&this.linkChart.resize()},initPage:function(){var t=this;this.spreadChannel(),this.officialChannel(),this.leadPage(),this.$nextTick(function(){t.renderChart()})},goPreDataDetail:function(){var t=this;this.$get(n.a.GET_SPREAD_USER_LIST,{activityId:this.activityId,page:this.page,pageSize:this.pageSize}).then(function(a){200===a.code&&0!==a.data.length&&(t.preDataDetail=!0,t.preDataList=a.data.list,t.total=a.data.total,t.header="APPOINT"===a.data.viewCondition?"报名数据详情":"预约数据详情")})},exportDataList:function(){var t="/api"+n.a.GET_SPREAD_USER_LIST_EXPORT+"?activityId="+this.activityId;window.open(encodeURI(encodeURI(t)))},spreadChannel:function(){var t=this;this.$get(n.a.GET_SPREAD_COUNT,{activityId:this.activityId}).then(function(a){200===a.code&&0!==a.data.length&&(t.spreadChannelData=a.data)})},officialChannel:function(){var t=this;this.$get(n.a.GET_SPREAD_TEMP,{activityId:this.activityId}).then(function(a){200===a.code&&0!==a.data.length&&(t.officialChannelData=a.data)})},leadPage:function(){var t=this;this.$get(n.a.GET_SPREAD_GUIDE_COUNT,{activityId:this.activityId}).then(function(a){200===a.code&&0!==a.data.length&&(t.leadPageData=a.data)})},renderChart:function(){this.promotionEffect(),this.initAcitviteRatio(),this.webwiteChart(),this.pageLinkChart()},changePageLinkMenu:function(t){if(this.pageLinkType!==t){this.pageLinkType=t;var a=this.pageLinkType?"uv":"pv";Object(d.e)("chart06",{xAxisData:this.pageLinkDatas.xAxisData,datas:this.pageLinkDatas.lineObj[a]},null,{left:0})}},promotionEffect:function(){var t=this;this.$get(n.a.GET_SPREAD_RESULT,{activityId:this.activityId}).then(function(a){200===a.code&&0!==a.data.length&&(t.speadDatas=a.data,t.effectChart=Object(d.b)("chart01",{legendData:t.speadDatas.types,list:t.speadDatas.list},{left:34,bottom:52,top:18,right:20}))})},initAcitviteRatio:function(){var t=this;this.$get(n.a.GET_SPREAD_ACTIVE,{activityId:this.activityId}).then(function(a){if(200===a.code&&0!==a.data.length){var i=a.data;t.emailChart=Object(d.e)("chart02",{xAxisData:i.email.xAxis||[],datas:[{name:"活跃人数",data:i.email.nums}]},["rgba(77,132,255,1)"]),t.weChatChart=Object(d.e)("chart03",{xAxisData:i.weChat.xAxis||[],datas:[{name:"活跃人数",data:i.weChat.nums}]},["rgba(253,133,25,1)"]),t.smsChart=Object(d.e)("chart04",{xAxisData:i.sms.xAxis||[],datas:[{name:"活跃人数",data:i.sms.nums}]},["rgba(82,219,237,1)"])}else t.emailChart=Object(d.e)("chart02",{xAxisData:[],datas:[{name:"活跃人数",data:[0]}]},["rgba(77,132,255,1)"]),t.weChatChart=Object(d.e)("chart03",{xAxisData:[],datas:[{name:"活跃人数",data:[0]}]},["rgba(253,133,25,1)"]),t.smsChart=Object(d.e)("chart04",{xAxisData:[],datas:[{name:"活跃人数",data:[0]}]},["rgba(82,219,237,1)"])})},webwiteChart:function(){var t=this;this.$get(n.a.GET_SPREAD_TREND,{activityId:this.activityId}).then(function(a){200===a.code&&0!==a.data.length&&(t.webChart=Object(d.e)("chart05",{xAxisData:a.data.xAxis||[],datas:[{name:"UV",data:a.data.nums.length>0?a.data.nums:[0]},{name:"PV",data:a.data.times.length>0?a.data.nums:[0]}]},null,{left:0}))})},pageLinkChart:function(){var t=this;this.$get(n.a.GET_SPREAD_GUIDE_TREND,{activityId:this.activityId}).then(function(a){if(200===a.code&&0!==a.data.length){var i={xAxisData:a.data.xAxis||[],lineObj:{uv:[],pv:[]}};i.lineObj.uv.push({name:"全部",data:a.data.all.nums.length>0?a.data.all.nums:[0]}),i.lineObj.pv.push({name:"全部",data:a.data.all.times.length>0?a.data.all.times:[0]}),i.lineObj.uv.push({name:"邮件",data:a.data.email.nums.length>0?a.data.email.nums:[0]}),i.lineObj.pv.push({name:"邮件",data:a.data.email.times.length>0?a.data.email.times:[0]}),i.lineObj.uv.push({name:"短信",data:a.data.sms.nums.length>0?a.data.sms.nums:[0]}),i.lineObj.pv.push({name:"短信",data:a.data.sms.times.length>0?a.data.sms.times:[0]}),i.lineObj.uv.push({name:"微信",data:a.data.weChat.nums.length>0?a.data.weChat.nums:[0]}),i.lineObj.pv.push({name:"微信",data:a.data.weChat.times.length>0?a.data.weChat.times:[0]}),i.lineObj.uv.push({name:"其他",data:a.data.other.nums.length>0?a.data.other.nums:[0]}),i.lineObj.pv.push({name:"其他",data:a.data.other.times.length>0?a.data.other.times:[0]}),t.pageLinkDatas=i,t.linkChart=Object(d.e)("chart06",{xAxisData:t.pageLinkDatas.xAxisData,datas:t.pageLinkDatas.lineObj.pv},null,{left:0})}})},closeMesssageBox:function(){this.preDataDetail=!1}}},v=(i(899),i(900),i(1)),o=Object(v.a)(r,e,[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"chart-container"},[a("div",{staticClass:"chart-box",staticStyle:{width:"100%"}},[a("p",{staticClass:"title"},[this._v("推广效果")]),this._v(" "),a("div",{staticClass:"chart-item",staticStyle:{height:"270px"},attrs:{id:"chart01"}})])])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"chart-container"},[i("div",{staticClass:"chart-box"},[i("p",{staticClass:"title"},[t._v("邮件活跃概况\n          ")]),t._v(" "),i("div",{staticClass:"chart-item",staticStyle:{height:"280px"},attrs:{id:"chart02"}})]),t._v(" "),i("div",{staticClass:"chart-box"},[i("p",{staticClass:"title"},[t._v("微信活跃概况\n          ")]),t._v(" "),i("div",{staticClass:"chart-item",staticStyle:{height:"280px"},attrs:{id:"chart03"}})]),t._v(" "),i("div",{staticClass:"chart-box"},[i("p",{staticClass:"title"},[t._v("短信活跃概况\n          ")]),t._v(" "),i("div",{staticClass:"chart-item",staticStyle:{height:"280px"},attrs:{id:"chart04"}})])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"chart-container"},[a("div",{staticClass:"chart-box",staticStyle:{width:"100%"}},[a("p",{staticClass:"title"},[this._v("页面访问趋势图\n          ")]),this._v(" "),a("div",{staticClass:"chart-item",staticStyle:{height:"400px"},attrs:{id:"chart05"}})])])}],!1,null,"1799c6b8",null);o.options.__file="src/pages/data/spread.vue";a.default=o.exports},687:function(t,a,i){},688:function(t,a,i){},899:function(t,a,i){"use strict";var e=i(687);i.n(e).a},900:function(t,a,i){"use strict";var e=i(688);i.n(e).a}}]);
//# sourceMappingURL=47.27ef21b0.js.map