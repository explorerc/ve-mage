(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{593:function(t,a,e){},594:function(t,a,e){},755:function(t,a,e){"use strict";var i=e(593);e.n(i).a},756:function(t,a,e){"use strict";var i=e(594);e.n(i).a},801:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"data-box spread"},[e("p",{staticClass:"title"},[t._v("基础数据")]),t._v(" "),e("div",{staticClass:"item-container clearfix"},[e("div",{staticClass:"item-box fl"},[e("div",{staticClass:"box fl",staticStyle:{width:"33.33333%"}},[e("div",{staticClass:"item-title"},[e("ve-title",{attrs:{title:"观看直播人数"}})],1),t._v(" "),e("div",{staticClass:"item-mid data-link",on:{click:function(a){t.goPage("/data/viewer")}}},[t._v("2561")])]),t._v(" "),e("div",{staticClass:"box fl",staticStyle:{width:"33.33333%"}},[e("div",{staticClass:"item-title"},[e("ve-title",{attrs:{title:"观看直播人次（次）"}})],1),t._v(" "),e("div",{staticClass:"item-mid"},[t._v("2561")])]),t._v(" "),e("div",{staticClass:"box fl",staticStyle:{width:"33.33333%"}},[e("div",{staticClass:"item-title"},[e("ve-title",{attrs:{title:"人均观看直播时长"}})],1),t._v(" "),e("div",{staticClass:"item-mid"},[t._v("00:10:10")])])]),t._v(" "),e("div",{staticClass:"item-box fl"},[e("div",{staticClass:"box fl",staticStyle:{width:"33.33333%"}},[e("div",{staticClass:"item-title"},[e("ve-title",{attrs:{title:"观看回放人数"}})],1),t._v(" "),e("div",{staticClass:"item-mid"},[t._v("2561")])]),t._v(" "),e("div",{staticClass:"box fl",staticStyle:{width:"33.33333%"}},[e("div",{staticClass:"item-title"},[e("ve-title",{attrs:{title:"观看回放人次（次）"}})],1),t._v(" "),e("div",{staticClass:"item-mid"},[t._v("2561")])]),t._v(" "),e("div",{staticClass:"box fl",staticStyle:{width:"33.33333%"}},[e("div",{staticClass:"item-title"},[e("ve-title",{attrs:{title:"人均观看回放时长"}})],1),t._v(" "),e("div",{staticClass:"item-mid"},[t._v("00:09:10")])])])]),t._v(" "),e("div",{staticClass:"chart-box"},[e("div",{staticClass:"chart-container"},[e("div",{staticClass:"chart-box",staticStyle:{width:"100%"}},[e("p",{staticClass:"title"},[t._v("观众趋势图（PV、UV）\n          "),e("span",{staticClass:"chart-menu"},[e("nav-menu",{attrs:{menus:["小时","天"],currentMenu:t.watchType},on:{changeMenu:t.changeMenu}})],1)]),t._v(" "),e("div",{staticClass:"chart-item",staticStyle:{height:"360px"},attrs:{id:"chart01"}})])]),t._v(" "),t._m(0)]),t._v(" "),e("p",{staticClass:"title"},[t._v("互动数据")]),t._v(" "),t._m(1),t._v(" "),t._m(2)])};i._withStripped=!0;var s=e(452),c=e.n(s),v=e(221),d=e.n(v),l=e(472),n=e(473),h=e(471),b=e(592),g=e(476),_={name:"live-data",components:{VeTitle:l.a,VeCircle:n.a,NavMenu:g.a},data:function(){return{watchType:0,watcherLineData:{}}},created:function(){var t=this;console.log(h.a),this.initPage(),this.$nextTick(function(){t.renderChart()})},methods:{goPage:function(t){this.$router.push(t+"/"+this.$route.params.id)},initPage:function(){var t={code:200,msg:null,data:{days:{xAxis:["2018-01-01","2018-01-02","2018-01-03","2018-01-04","2018-01-05"],pv:[Object(b.g)(20,100),Object(b.g)(20,100),Object(b.g)(20,100),36,40,50],uv:[Object(b.g)(20,100),20,Object(b.g)(20,100),36,40,50],ip:[Object(b.g)(20,100),20,Object(b.g)(20,100),36,40,50]},hours:{xAxis:["12:00","13:00","14:00","15:00","16:00"],pv:[Object(b.g)(20,100),20,Object(b.g)(20,100),36,40,50],uv:[Object(b.g)(20,100),20,Object(b.g)(20,100),36,40,50],ip:[Object(b.g)(20,100),20,Object(b.g)(20,100),36,40,50]}}};this.watcherLineData=t.data},changeMenu:function(t){if(this.watchType!==t){this.watchType=t;var a=this.watchType?"days":"hours";Object(b.e)("chart01",{xAxisData:this.watcherLineData[a].xAxis,datas:[{name:"浏览次数",data:this.watcherLineData[a].pv},{name:"独立访问",data:this.watcherLineData[a].uv},{name:"IP",data:this.watcherLineData[a].ip}]})}},renderChart:function(){Object(b.e)("chart01",{xAxisData:this.watcherLineData.hours.xAxis,datas:[{name:"浏览次数",data:this.watcherLineData.hours.pv},{name:"独立访问",data:this.watcherLineData.hours.uv},{name:"IP",data:this.watcherLineData.hours.ip}]}),this.liveTimeLengthChart(),this.playBackTimeScatter(),this.hdTrendChart()},liveTimeLengthChart:function(){var t={code:200,msg:null,data:{list:[{name:"1%-10%",value:Math.round(100*Math.random())},{name:"10%-20%",value:Math.round(100*Math.random())},{name:"2%-30%",value:Math.round(100*Math.random())},{name:"30%-50%",value:Math.round(100*Math.random())},{name:"50%-70%",value:Math.round(100*Math.random())},{name:"70%以上",value:Math.round(100*Math.random())}]}};Object(b.d)("chart02",t.data.list,{left:48,right:20,top:20,bottom:20})},playBackTimeScatter:function(){var t=[],a=[];({code:200,msg:null,data:{list:[{week:Object(b.g)(0,6),time:"零点",value:Object(b.g)(1,100)},{week:Object(b.g)(0,6),time:"1点",value:Object(b.g)(1,100)},{week:Object(b.g)(0,6),time:"2点",value:Object(b.g)(1,100)},{week:Object(b.g)(0,6),time:"3点",value:Object(b.g)(1,100)},{week:Object(b.g)(0,6),time:"4点",value:Object(b.g)(1,100)},{week:Object(b.g)(0,6),time:5,value:Object(b.g)(1,100)},{week:Object(b.g)(0,6),time:6,value:Object(b.g)(1,10)},{week:Object(b.g)(0,6),time:7,value:Object(b.g)(1,10)},{week:Object(b.g)(0,6),time:8,value:Object(b.g)(1,100)},{week:Object(b.g)(0,6),time:9,value:Object(b.g)(1,100)},{week:Object(b.g)(0,6),time:10,value:Object(b.g)(1,10)},{week:Object(b.g)(0,6),time:11,value:Object(b.g)(1,10)},{week:Object(b.g)(0,6),time:12,value:Object(b.g)(1,100)},{week:Object(b.g)(0,6),time:13,value:Object(b.g)(1,10)},{week:Object(b.g)(0,6),time:14,value:Object(b.g)(1,100)},{week:Object(b.g)(0,6),time:15,value:Object(b.g)(1,100)},{week:Object(b.g)(0,6),time:16,value:Object(b.g)(1,100)},{week:Object(b.g)(0,6),time:17,value:Object(b.g)(1,100)},{week:Object(b.g)(0,6),time:18,value:Object(b.g)(1,10)},{week:Object(b.g)(0,6),time:19,value:Object(b.g)(1,10)},{week:Object(b.g)(0,6),time:20,value:Object(b.g)(1,100)},{week:Object(b.g)(0,6),time:21,value:Object(b.g)(1,10)},{week:Object(b.g)(0,6),time:22,value:Object(b.g)(1,100)},{week:Object(b.g)(0,6),time:23,value:Object(b.g)(1,10)}]}}).data.list.forEach(function(e){t.push(e.time),a.push([e.time,e.week,e.value])});var e={yAxis:["周日","周一","周二","周三","周四","周五","周六"],xAxis:d()(new c.a(t)),data:a};Object(b.h)("chart03",e,{left:70,right:50,top:20,bottom:20})},hdTrendChart:function(){var t={code:200,msg:null,data:{xAxis:["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15"],viewer:{name:"观众人数",dataList:[Object(b.g)(),Object(b.g)(),Object(b.g)(),Object(b.g)(),Object(b.g)(),Object(b.g)(),Object(b.g)(),Object(b.g)(),Object(b.g)(),Object(b.g)(),Object(b.g)(),Object(b.g)(),Object(b.g)(),Object(b.g)(),Object(b.g)()]},interact:[{name:"红包",dataList:[Object(b.g)(),Object(b.g)(),Object(b.g)(),Object(b.g)(),Object(b.g)(),Object(b.g)(),Object(b.g)(),Object(b.g)(),Object(b.g)(),Object(b.g)(),Object(b.g)(),Object(b.g)(),Object(b.g)(),Object(b.g)(),Object(b.g)()]},{name:"抽奖",dataList:[Object(b.g)(),Object(b.g)(),Object(b.g)(),Object(b.g)(),Object(b.g)(),Object(b.g)(),Object(b.g)(),Object(b.g)(),Object(b.g)(),Object(b.g)(),Object(b.g)(),Object(b.g)(),Object(b.g)(),Object(b.g)(),Object(b.g)()]},{name:"答题",dataList:[Object(b.g)(),Object(b.g)(),Object(b.g)(),Object(b.g)(),Object(b.g)(),Object(b.g)(),Object(b.g)(),Object(b.g)(),Object(b.g)(),Object(b.g)(),Object(b.g)(),Object(b.g)(),Object(b.g)(),Object(b.g)(),Object(b.g)()]},{name:"商品推荐",dataList:[Object(b.g)(),Object(b.g)(),Object(b.g)(),Object(b.g)(),Object(b.g)(),Object(b.g)(),Object(b.g)(),Object(b.g)(),Object(b.g)(),Object(b.g)(),Object(b.g)(),Object(b.g)(),Object(b.g)(),Object(b.g)(),Object(b.g)()]}]}},a=t.data.interact.map(function(t){return t.type="bar",t.data=t.dataList,delete t.dataList,t});a.push({name:t.data.viewer.name,type:"line",data:t.data.viewer.dataList});var e={xAxis:t.data.xAxis,list:a};Object(b.a)("chart04",e,{left:48,top:20,bottom:20})}}},r=(e(755),e(756),e(2)),j=Object(r.a)(_,i,[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"chart-container"},[a("div",{staticClass:"chart-box",staticStyle:{width:"50%"}},[a("p",{staticClass:"title"},[this._v("直播观众时长分布图")]),this._v(" "),a("div",{staticClass:"chart-item",staticStyle:{height:"360px"},attrs:{id:"chart02"}})]),this._v(" "),a("div",{staticClass:"chart-box",staticStyle:{width:"50%"}},[a("p",{staticClass:"title"},[this._v("观看回放时段")]),this._v(" "),a("div",{staticClass:"chart-item",staticStyle:{height:"360px"},attrs:{id:"chart03"}})])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"item-container clearfix"},[e("div",{staticClass:"item-box hd-data-item fl"},[e("span",{staticClass:"hd-title"},[t._v("预约")]),t._v(" "),e("div",{staticClass:"hd-data"},[e("span",[t._v("6023")]),t._v(" "),e("span",[t._v("预约人数")])])]),t._v(" "),e("div",{staticClass:"item-box hd-data-item fr"},[e("span",{staticClass:"hd-title"},[t._v("聊天")]),t._v(" "),e("div",{staticClass:"hd-data"},[e("span",[t._v("6023")]),t._v(" "),e("span",[t._v("聊天人数")])]),t._v(" "),e("div",{staticClass:"hd-data"},[e("span",[t._v("6023")]),t._v(" "),e("span",[t._v("消息数量")])])]),t._v(" "),e("div",{staticClass:"item-box hd-data-item fl"},[e("span",{staticClass:"hd-title"},[t._v("分享")]),t._v(" "),e("div",{staticClass:"hd-data"},[e("span",[t._v("6023")]),t._v(" "),e("span",[t._v("有效分享")])]),t._v(" "),e("div",{staticClass:"hd-data"},[e("span",[t._v("6023")]),t._v(" "),e("span",[t._v("邀请人数")])])]),t._v(" "),e("div",{staticClass:"item-box hd-data-item fr"},[e("span",{staticClass:"hd-title"},[t._v("抽奖")]),t._v(" "),e("div",{staticClass:"hd-data"},[e("span",[t._v("6023")]),t._v(" "),e("span",[t._v("中奖人数")])]),t._v(" "),e("div",{staticClass:"hd-data"},[e("span",[t._v("6023")]),t._v(" "),e("span",[t._v("参与人数")])])]),t._v(" "),e("div",{staticClass:"item-box hd-data-item fl"},[e("span",{staticClass:"hd-title"},[t._v("调查问卷")]),t._v(" "),e("div",{staticClass:"hd-data"},[e("span",[t._v("6023")]),t._v(" "),e("span",[t._v("推送次数")])]),t._v(" "),e("div",{staticClass:"hd-data"},[e("span",[t._v("6023")]),t._v(" "),e("span",[t._v("收到数据")])])]),t._v(" "),e("div",{staticClass:"item-box hd-data-item fr"},[e("span",{staticClass:"hd-title"},[t._v("答题")]),t._v(" "),e("div",{staticClass:"hd-data"},[e("span",[t._v("6023")]),t._v(" "),e("span",[t._v("推送次数")])]),t._v(" "),e("div",{staticClass:"hd-data"},[e("span",[t._v("6023")]),t._v(" "),e("span",[t._v("参与答题人数")])]),t._v(" "),e("div",{staticClass:"hd-data"},[e("span",[t._v("6023")]),t._v(" "),e("span",[t._v("获得奖励人数")])])]),t._v(" "),e("div",{staticClass:"item-box hd-data-item fl"},[e("span",{staticClass:"hd-title"},[t._v("推荐卡片")]),t._v(" "),e("div",{staticClass:"hd-data"},[e("span",[t._v("6023")]),t._v(" "),e("span",[t._v("推送次数")])]),t._v(" "),e("div",{staticClass:"hd-data"},[e("span",[t._v("6023")]),t._v(" "),e("span",[t._v("浏览次数")])]),t._v(" "),e("div",{staticClass:"hd-data"},[e("span",[t._v("6023")]),t._v(" "),e("span",[t._v("点击次数")])])]),t._v(" "),e("div",{staticClass:"item-box hd-data-item fr"},[e("span",{staticClass:"hd-title"},[t._v("红包雨")]),t._v(" "),e("div",{staticClass:"hd-data"},[e("span",[t._v("6023")]),t._v(" "),e("span",[t._v("参与人数")])]),t._v(" "),e("div",{staticClass:"hd-data"},[e("span",[t._v("8")]),t._v(" "),e("span",[t._v("领取人数")])]),t._v(" "),e("div",{staticClass:"hd-data"},[e("span",[t._v("￥6023")]),t._v(" "),e("span",[t._v("领取金额")])])]),t._v(" "),e("div",{staticClass:"item-box hd-data-item fl",staticStyle:{width:"66%"}},[e("span",{staticClass:"hd-title"},[t._v("商品推荐")]),t._v(" "),e("div",{staticClass:"hd-data",staticStyle:{width:"25%"}},[e("span",[t._v("7/20")]),t._v(" "),e("span",[t._v("商品上架数")])]),t._v(" "),e("div",{staticClass:"hd-data",staticStyle:{width:"25%"}},[e("span",[t._v("8")]),t._v(" "),e("span",[t._v("推送次数")])]),t._v(" "),e("div",{staticClass:"hd-data",staticStyle:{width:"25%"}},[e("span",[t._v("8")]),t._v(" "),e("span",[t._v("浏览次数")])]),t._v(" "),e("div",{staticClass:"hd-data",staticStyle:{width:"25%"}},[e("span",[t._v("6023")]),t._v(" "),e("span",[t._v("点击购买次数")])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"chart-box"},[a("div",{staticClass:"chart-container"},[a("div",{staticClass:"chart-box",staticStyle:{width:"100%"}},[a("p",{staticClass:"title"},[this._v("互动工具参与趋势图（PV、UV）")]),this._v(" "),a("div",{staticClass:"chart-item",staticStyle:{height:"400px"},attrs:{id:"chart04"}})])])])}],!1,null,"d55fac46",null);j.options.__file="src/pages/data/live.vue";a.default=j.exports}}]);
//# sourceMappingURL=43.fc85a88d.js.map