(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{634:function(t,a,e){},635:function(t,a,e){},841:function(t,a,e){"use strict";var i=e(634);e.n(i).a},842:function(t,a,e){"use strict";var i=e(635);e.n(i).a},908:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"data-box spread"},[e("div",{staticClass:"data-pad"},[e("p",{staticClass:"title"},[t._v("观看数据")]),t._v(" "),e("div",{staticClass:"item-container clearfix"},[e("div",{staticClass:"item-box fl"},[e("div",{staticClass:"box fl",staticStyle:{width:"33.33333%"}},[e("div",{staticClass:"item-title"},[e("ve-title",{attrs:{title:"观看直播人数"}})],1),t._v(" "),e("div",{staticClass:"item-mid data-link",on:{click:function(a){t.goPage("/data/viewerList",t.basicCountData.live.nums)}}},[t._v("\n            "+t._s(t.basicCountData.live.nums)+"\n          ")])]),t._v(" "),e("div",{staticClass:"box fl",staticStyle:{width:"33.33333%"}},[e("div",{staticClass:"item-title"},[e("ve-title",{attrs:{title:"观看直播人次（次）"}})],1),t._v(" "),e("div",{staticClass:"item-mid"},[t._v(t._s(t.basicCountData.live.times))])]),t._v(" "),e("div",{staticClass:"box fl",staticStyle:{width:"33.33333%"}},[e("div",{staticClass:"item-title"},[e("ve-title",{attrs:{title:"人均观看直播时长"}})],1),t._v(" "),e("div",{staticClass:"item-mid"},[t._v(t._s(t._f("fmtTime")(t.basicCountData.live.duration)))])])]),t._v(" "),e("div",{staticClass:"item-box fl"},[e("div",{staticClass:"box fl",staticStyle:{width:"33.33333%"}},[e("div",{staticClass:"item-title"},[e("ve-title",{attrs:{title:"观看回放人数"}})],1),t._v(" "),e("div",{staticClass:"item-mid data-link",on:{click:function(a){t.goPage("/data/viewerList",t.basicCountData.playBack.nums)}}},[t._v("\n            "+t._s(t.basicCountData.playBack.nums)+"\n          ")])]),t._v(" "),e("div",{staticClass:"box fl",staticStyle:{width:"33.33333%"}},[e("div",{staticClass:"item-title"},[e("ve-title",{attrs:{title:"观看回放人次（次）"}})],1),t._v(" "),e("div",{staticClass:"item-mid"},[t._v(t._s(t.basicCountData.playBack.times))])]),t._v(" "),e("div",{staticClass:"box fl",staticStyle:{width:"33.33333%"}},[e("div",{staticClass:"item-title"},[e("ve-title",{attrs:{title:"人均观看回放时长"}})],1),t._v(" "),e("div",{staticClass:"item-mid"},[t._v(t._s(t._f("fmtTime")(t.basicCountData.playBack.duration)))])])])]),t._v(" "),e("div",{staticClass:"chart-box"},[e("div",{staticClass:"chart-container"},[e("div",{staticClass:"chart-box",staticStyle:{width:"100%"}},[e("p",{staticClass:"title"},[e("ve-title",{attrs:{width:"200px",title:"观众访问趋势图",tip:"查看直播和回放过程中，观众人数随时间变化的趋势图"}}),t._v(" "),e("span",{staticClass:"chart-menu"},[e("nav-menu",{attrs:{menus:["直播","回放"],currentMenu:t.watchType},on:{changeMenu:t.changeMenu}})],1)],1),t._v(" "),e("div",{staticClass:"chart-item",staticStyle:{height:"360px"},attrs:{id:"chart01"}})])]),t._v(" "),e("div",{staticClass:"chart-container"},[e("div",{staticClass:"chart-box",staticStyle:{width:"50%"}},[e("p",{staticClass:"title"},[e("ve-title",{attrs:{width:"200px",title:"观看时长与观众分布图",tip:"查看直播过程中，不同观看时段的观众数量"}})],1),t._v(" "),e("div",{staticClass:"chart-item",staticStyle:{height:"360px"},attrs:{id:"chart02"}})]),t._v(" "),e("div",{staticClass:"chart-box",staticStyle:{width:"50%"}},[e("p",{staticClass:"title"},[e("ve-title",{attrs:{width:"200px",title:"观看回放规律图",tip:"查看直播结束后一个月内，每天的观看回放时间点与观众人数的规律变化图"}})],1),t._v(" "),e("div",{staticClass:"chart-item",staticStyle:{height:"360px"},attrs:{id:"chart03"}})])])])]),t._v(" "),e("div",{staticClass:"data-pad"},[e("p",{staticClass:"title"},[t._v("互动数据")]),t._v(" "),e("div",{staticClass:"item-container clearfix"},[e("div",{staticClass:"item-box hd-data-item fl live-item live-item01"},[e("span",{staticClass:"hd-title"},[t._v("聊天")]),t._v(" "),e("div",{staticClass:"hd-data",staticStyle:{width:"50%"}},[e("span",{staticClass:"data-link",on:{click:t.goChatDataDetail}},[t._v(t._s(t.interactCountData.chat.nums))]),t._v(" "),e("span",[t._v("聊天人数")])]),t._v(" "),e("div",{staticClass:"hd-data",staticStyle:{width:"50%"}},[e("span",{staticClass:"data-link",on:{click:t.goChatDataDetail}},[t._v(t._s(t.interactCountData.chat.msg))]),t._v(" "),e("span",[t._v("消息数量")])])]),t._v(" "),e("div",{staticClass:"item-box hd-data-item fr live-item live-item02"},[e("span",{staticClass:"hd-title"},[t._v("分享")]),t._v(" "),e("div",{staticClass:"hd-data",staticStyle:{width:"50%"}},[e("span",[t._v(t._s(t.interactCountData.share.effective))]),t._v(" "),e("span",[t._v("有效分享")])]),t._v(" "),e("div",{staticClass:"hd-data",staticStyle:{width:"50%"}},[e("span",[t._v(t._s(t.interactCountData.share.invite))]),t._v(" "),e("span",[t._v("邀请人数")])])]),t._v(" "),e("div",{staticClass:"item-box hd-data-item fl live-item live-item03"},[e("span",{staticClass:"hd-title"},[t._v("调查问卷")]),t._v(" "),e("div",{staticClass:"hd-data",staticStyle:{width:"50%"}},[e("span",{staticClass:"data-link",on:{click:t.goPagerDataDetail}},[t._v(t._s(t.interactCountData.pager.push))]),t._v(" "),e("span",[t._v("推送次数")])]),t._v(" "),e("div",{staticClass:"hd-data",staticStyle:{width:"50%"}},[e("span",{staticClass:"data-link",on:{click:t.goPagerDataDetail}},[t._v(t._s(t.interactCountData.pager.receive))]),t._v(" "),e("span",[t._v("收到数据")])])]),t._v(" "),e("div",{staticClass:"item-box hd-data-item fr live-item live-item04"},[e("span",{staticClass:"hd-title"},[t._v("红包雨")]),t._v(" "),e("div",{staticClass:"hd-data"},[e("span",{staticClass:"data-link",on:{click:t.goRedBagDataDetail}},[t._v(t._s(t.interactCountData.redBag.join))]),t._v(" "),e("span",[t._v("参与人数")])]),t._v(" "),e("div",{staticClass:"hd-data"},[e("span",{staticClass:"data-link",on:{click:t.goRedBagDataDetail}},[t._v(t._s(t.interactCountData.redBag.receive))]),t._v(" "),e("span",[t._v("领取人数")])]),t._v(" "),e("div",{staticClass:"hd-data"},[e("span",{staticClass:"data-link",on:{click:t.goRedBagDataDetail}},[t._v("￥"+t._s(t.interactCountData.redBag.money))]),t._v(" "),e("span",[t._v("领取金额")])])]),t._v(" "),e("div",{staticClass:"item-box hd-data-item fl live-item live-item05",staticStyle:{width:"100%"}},[e("span",{staticClass:"hd-title"},[t._v("商品推荐")]),t._v(" "),e("div",{staticClass:"hd-data",staticStyle:{width:"25%"}},[e("span",{staticClass:"data-link",on:{click:t.goGoodsDataDetail}},[t._v(t._s(t.interactCountData.goods.shelf)+"/"+t._s(t.interactCountData.goods.total))]),t._v(" "),e("span",[t._v("商品上架数")])]),t._v(" "),e("div",{staticClass:"hd-data",staticStyle:{width:"25%"}},[e("span",{staticClass:"data-link",on:{click:t.goGoodsDataDetail}},[t._v(t._s(t.interactCountData.goods.push))]),t._v(" "),e("span",[t._v("推送次数")])]),t._v(" "),e("div",{staticClass:"hd-data",staticStyle:{width:"25%"}},[e("span",{staticClass:"data-link",on:{click:t.goGoodsDataDetail}},[t._v(t._s(t.interactCountData.goods.browse))]),t._v(" "),e("span",[t._v("浏览次数")])]),t._v(" "),e("div",{staticClass:"hd-data",staticStyle:{width:"25%"}},[e("span",{staticClass:"data-link",on:{click:t.goGoodsDataDetail}},[t._v(t._s(t.interactCountData.goods.click))]),t._v(" "),e("span",[t._v("点击购买次数")])])]),t._v(" "),e("div",{staticClass:"item-box hd-data-item fl live-item live-item06"},[e("span",{staticClass:"hd-title"},[t._v("推荐卡片")]),t._v(" "),e("div",{staticClass:"hd-data"},[e("span",{staticClass:"data-link",on:{click:t.goCardDataDetail}},[t._v(t._s(t.interactCountData.card.push))]),t._v(" "),e("span",[t._v("推送次数")])]),t._v(" "),e("div",{staticClass:"hd-data"},[e("span",{staticClass:"data-link",on:{click:t.goCardDataDetail}},[t._v(t._s(t.interactCountData.card.browse))]),t._v(" "),e("span",[t._v("浏览次数")])]),t._v(" "),e("div",{staticClass:"hd-data"},[e("span",{staticClass:"data-link",on:{click:t.goCardDataDetail}},[t._v(t._s(t.interactCountData.card.click))]),t._v(" "),e("span",[t._v("点击次数")])])])]),t._v(" "),e("div",{staticClass:"chart-box"},[e("div",{staticClass:"chart-container"},[e("div",{staticClass:"chart-box",staticStyle:{width:"100%"}},[e("p",{staticClass:"title"},[e("ve-title",{attrs:{width:"200px",title:"互动工具参与趋势图",tip:"查看直播中主持人使用互动工具的情况以及观众的参与情况"}})],1),t._v(" "),e("div",{staticClass:"chart-item",staticStyle:{height:"400px"},attrs:{id:"chart04"}})])])])]),t._v(" "),e("message-box",{directives:[{name:"show",rawName:"v-show",value:t.preDataDetail,expression:"preDataDetail"}],attrs:{width:"60%",type:"none",header:"预约数据详情"},on:{handleClick:t.closeMesssageBox}},[e("div",{staticClass:"msg-table-box"},[e("button",{staticClass:"primary-button export-btn fr"},[t._v("导出")]),t._v(" "),e("div",{staticClass:"table-box"},[e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.preDataList}},[e("el-table-column",{attrs:{label:"序号"},scopedSlots:t._u([{key:"default",fn:function(a){return[t._v("\n              "+t._s(a.$index)+"\n            ")]}}])}),t._v(" "),e("el-table-column",{attrs:{prop:"userId",label:"用户Id"}}),t._v(" "),e("el-table-column",{attrs:{prop:"name",label:"姓名"}}),t._v(" "),e("el-table-column",{attrs:{prop:"phone",label:"手机号"}}),t._v(" "),e("el-table-column",{attrs:{prop:"enterDate",label:"进入引导页时间（第一次）"}}),t._v(" "),e("el-table-column",{attrs:{prop:"leaveDate",label:"离开引导页时间（最后一次）"}}),t._v(" "),e("el-table-column",{attrs:{prop:"preDate",label:"预约时间"}}),t._v(" "),e("el-table-column",{attrs:{prop:"joinDate",label:"参会时间"}})],1)],1)])]),t._v(" "),e("message-box",{directives:[{name:"show",rawName:"v-show",value:t.chatDataDetail,expression:"chatDataDetail"}],attrs:{width:"60%",type:"none",header:"聊天数据详情"},on:{handleClick:t.closeMesssageBox}},[e("div",{directives:[{name:"ComLoading",rawName:"v-ComLoading",value:t.loading,expression:"loading"}],staticClass:"msg-table-box"},[e("button",{staticClass:"primary-button export-btn fr",on:{click:function(a){t.exportFile("chart")}}},[t._v("导出")]),t._v(" "),e("div",{staticClass:"table-box"},[e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.chatDataList}},[e("el-table-column",{attrs:{label:"序号"},scopedSlots:t._u([{key:"default",fn:function(a){return[t._v("\n              "+t._s((t.page-1)*t.pageSize+a.$index+1)+"\n            ")]}}])}),t._v(" "),e("el-table-column",{attrs:{prop:"nickname",label:"姓名"}}),t._v(" "),e("el-table-column",{attrs:{prop:"phone",label:"手机号"}}),t._v(" "),e("el-table-column",{attrs:{prop:"message",label:"聊天内容"}}),t._v(" "),e("el-table-column",{attrs:{prop:"time",label:"聊天时间"}})],1)],1),t._v(" "),t.total>t.pageSize?e("div",{staticClass:"page-pagination"},[e("ve-pagination",{attrs:{total:t.total,pageSize:t.pageSize},on:{changePage:t.changePage}})],1):t._e()])]),t._v(" "),e("message-box",{directives:[{name:"show",rawName:"v-show",value:t.prizeDataDetail,expression:"prizeDataDetail"}],attrs:{width:"60%",type:"none",header:"聊天数据详情"},on:{handleClick:t.closeMesssageBox}},[e("div",{staticClass:"msg-table-box",staticStyle:{"padding-top":"20px"}},[e("div",{staticClass:"table-box"},[e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.prizeDataList}},[e("el-table-column",{attrs:{label:"序号"},scopedSlots:t._u([{key:"default",fn:function(a){return[t._v("\n              "+t._s(a.$index)+"\n            ")]}}])}),t._v(" "),e("el-table-column",{attrs:{prop:"openDate",label:"开奖时间"}}),t._v(" "),e("el-table-column",{attrs:{prop:"joinType",label:"参与条件"}}),t._v(" "),e("el-table-column",{attrs:{prop:"phone",label:"奖品名称"}}),t._v(" "),e("el-table-column",{attrs:{prop:"count",label:"奖品数量"}}),t._v(" "),e("el-table-column",{attrs:{prop:"online",label:"在线人数"}}),t._v(" "),e("el-table-column",{attrs:{prop:"joinCount",label:"参与人数"}}),t._v(" "),e("el-table-column",{attrs:{label:"中奖名单"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",{staticClass:"data-link"},[t._v("下载")])]}}])})],1)],1)])]),t._v(" "),e("message-box",{directives:[{name:"show",rawName:"v-show",value:t.pagerDataDetail,expression:"pagerDataDetail"}],attrs:{width:"60%",type:"none",header:"问卷数据详情"},on:{handleClick:t.closeMesssageBox}},[e("div",{staticClass:"msg-table-box",staticStyle:{"padding-top":"20px"}},[e("div",{staticClass:"table-box"},[e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.pagerDataList}},[e("el-table-column",{attrs:{label:"序号"},scopedSlots:t._u([{key:"default",fn:function(a){return[t._v("\n              "+t._s(a.$index+1)+"\n            ")]}}])}),t._v(" "),e("el-table-column",{attrs:{prop:"title",label:"问卷名称"}}),t._v(" "),e("el-table-column",{attrs:{prop:"send_at",label:"推送时间"}}),t._v(" "),e("el-table-column",{attrs:{prop:"questionNum",label:"题目数量"}}),t._v(" "),e("el-table-column",{attrs:{prop:"answerNum",label:"收到数据"}}),t._v(" "),e("el-table-column",{attrs:{label:"问卷结果"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",{staticClass:"data-link",on:{click:function(e){t.download({type:"pager",naireId:a.row.naireId})}}},[t._v("下载")])]}}])})],1)],1)])]),t._v(" "),e("message-box",{directives:[{name:"show",rawName:"v-show",value:t.cardDataDetail,expression:"cardDataDetail"}],attrs:{width:"60%",type:"none",header:"问卷数据详情"},on:{handleClick:t.closeMesssageBox}},[e("div",{staticClass:"msg-table-box",staticStyle:{"padding-top":"20px"}},[e("div",{staticClass:"table-box"},[e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.cardDataList}},[e("el-table-column",{attrs:{label:"序号",type:"index"}}),t._v(" "),e("el-table-column",{attrs:{prop:"title",label:"卡片名称"}}),t._v(" "),e("el-table-column",{attrs:{label:"是否设置链接"},scopedSlots:t._u([{key:"default",fn:function(a){return[t._v("\n              "+t._s("Y"===a.row.btn_display?"是":"否")+"\n            ")]}}])}),t._v(" "),e("el-table-column",{attrs:{prop:"push_num",label:"推送次数"}}),t._v(" "),e("el-table-column",{attrs:{prop:"view_num",label:"卡片浏览数"}}),t._v(" "),e("el-table-column",{attrs:{prop:"visit_person_num",label:"点击卡片次数"}}),t._v(" "),e("el-table-column",{attrs:{label:"详情数据"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",{staticClass:"data-link"},[e("router-link",{attrs:{to:"/api/manage/recommend-card/visit-list?recommend_card_id="+a.row.recommend_card_id,target:"_blank"}},[t._v("下载")])],1)]}}])})],1)],1)])]),t._v(" "),e("message-box",{directives:[{name:"show",rawName:"v-show",value:t.redBagDataDetail,expression:"redBagDataDetail"}],attrs:{width:"60%",type:"none",header:"红包-数据详情"},on:{handleClick:t.closeMesssageBox}},[e("div",{staticClass:"msg-table-box",staticStyle:{"padding-top":"20px"}},[e("div",{staticClass:"table-box"},[e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.redBagDataList}},[e("el-table-column",{attrs:{width:"50",label:"序号"},scopedSlots:t._u([{key:"default",fn:function(a){return[t._v("\n              "+t._s((t.page-1)*t.pageSize+a.$index+1)+"\n            ")]}}])}),t._v(" "),e("el-table-column",{attrs:{prop:"start_time",label:"推送时间",width:"140"}}),t._v(" "),e("el-table-column",{attrs:{label:"参与条件"},scopedSlots:t._u([{key:"default",fn:function(a){return[0==a.row.condition?e("span",[t._v("无限制参与")]):1==a.row.condition?e("span",[t._v("分享参与")]):2==a.row.condition?e("span",[t._v("口令参与")]):3==a.row.condition?e("span",[t._v("填写问卷参与")]):t._e()]}}])}),t._v(" "),e("el-table-column",{attrs:{prop:"amount",label:"红包总金额"}}),t._v(" "),e("el-table-column",{attrs:{prop:"number",label:"红包数量"}}),t._v(" "),e("el-table-column",{attrs:{prop:"online_user_count",label:"在线人数"}}),t._v(" "),e("el-table-column",{attrs:{prop:"joined_user_count",label:"参与人数"}}),t._v(" "),e("el-table-column",{attrs:{prop:"get_user_count",label:"领取人数"}}),t._v(" "),e("el-table-column",{attrs:{prop:"get_amount",label:"领取金额"}}),t._v(" "),e("el-table-column",{attrs:{label:"领取明细",width:"80"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",{staticClass:"data-link",on:{click:function(e){t.downLoadExport(a.row.red_packet_id)}}},[t._v("下载")])]}}])})],1)],1),t._v(" "),t.total>t.pageSize?e("div",{staticClass:"page-pagination"},[e("ve-pagination",{attrs:{total:t.total,pageSize:t.pageSize},on:{changePage:t.changePage}})],1):t._e()])]),t._v(" "),e("message-box",{directives:[{name:"show",rawName:"v-show",value:t.goodsDataDetail,expression:"goodsDataDetail"}],attrs:{width:"60%",type:"none",header:"商品数据详情"},on:{handleClick:t.closeMesssageBox}},[e("div",{staticClass:"msg-table-box",staticStyle:{"padding-top":"20px"}},[e("div",{staticClass:"table-box"},[e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.goodsDataList}},[e("el-table-column",{attrs:{type:"index",label:"序号",width:"50"}}),t._v(" "),e("el-table-column",{attrs:{prop:"title",label:"商品名称"}}),t._v(" "),e("el-table-column",{attrs:{prop:"push",label:"推送次数"}}),t._v(" "),e("el-table-column",{attrs:{prop:"pv",label:"商品详情浏览次数"}}),t._v(" "),e("el-table-column",{attrs:{prop:"buy_nums",label:"点击购买次数"}}),t._v(" "),e("el-table-column",{attrs:{label:"详情数据"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",{staticClass:"data-link",on:{click:function(e){t.download({type:"goods",id:a.row.goods_id})}}},[t._v("下载")])]}}])})],1)],1)])])],1)};i._withStripped=!0;var s=e(468),l=e.n(s),n=e(223),o=e.n(n),c=e(30),d=e.n(c),r=e(470),v=e(495),h=e(496),p=e(476),_=e(633),u=e(480),m=e(494),g=e(95),b=e(15),D={name:"live-data",components:{VeTitle:v.a,VeCircle:h.a,NavMenu:m.a,VePagination:r.a},data:function(){return{activityId:this.$route.params.id,loading:!1,basicCountData:{live:{nums:0,times:0,duration:0},playBack:{nums:0,times:0,duration:0}},interactCountData:{signUp:0,subscribe:0,chat:{nums:0,msg:0},share:{invite:0,effective:0},prize:{join:0,win:0},pager:{push:0,receive:0},answer:{push:0,join:0,win:0},card:{push:0,browse:0,click:0},goods:{shelf:0,total:0,push:0,browse:0,click:0},redBag:{join:0,receive:0,money:0}},watchType:0,watcherLineData:{live:{xAxis:[],pv:[],uv:[],ip:[]},playback:{xAxis:[],pv:[],uv:[],ip:[]}},preDataDetail:!1,chatDataDetail:!1,prizeDataDetail:!1,pagerDataDetail:!1,answerDataDetail:!1,cardDataDetail:!1,goodsDataDetail:!1,redBagDataDetail:!1,preDataList:[],chatDataList:[],prizeDataList:[],pagerDataList:[],answerDataList:[],cardDataList:[],goodsDataList:[],redBagDataList:[],page:1,pageSize:20,total:0}},beforeDestroy:function(){window.callbackResize=null,this.watcherChart&&this.watcherChart.dispose(),this.timeLongChart&&this.timeLongChart.dispose(),this.playBackTimeChart&&this.playBackTimeChart.dispose(),this.hdChart&&this.hdChart.dispose()},mounted:function(){var t=this;this.activityId=this.$route.params.id,this.$nextTick(function(){t.initPage()}),window.callbackResize=function(){t.resizeRenderChart()}},methods:d()({},Object(g.b)("dataCenter",{storeSelectMenu:b.c}),{resizeRenderChart:function(){this.watcherChart&&this.watcherChart.resize(),this.timeLongChart&&this.timeLongChart.resize(),this.playBackTimeChart&&this.playBackTimeChart.resize(),this.hdChart&&this.hdChart.resize()},goPage:function(t,a){0!==a&&(this.$router.push(t+"/"+this.$route.params.id),this.storeSelectMenu(3))},initPage:function(){this.basicCount(),this.watcherCountData(),this.liveTimeLengthChart(),this.playBackTimeScatter(),this.interactCount(),this.hdTrendChart()},exportFile:function(t){var a="";"chart"===t&&(a="/api"+p.a.GET_LIVE_CHAT_LIST_EXPORT+"?activityId="+this.activityId),window.open(encodeURI(encodeURI(a)))},changePage:function(t){this.page=t,this.chatDataDetail?this.goChatDataDetail():this.redBagDataDetail&&this.goRedBagDataList()},interactCount:function(){var t=this;this.$get(p.a.GET_LIVE_VIEWER_HD,{activityId:this.activityId}).then(function(a){200===a.code&&0!==a.data.length&&(t.interactCountData=a.data,console.log(t.interactCountData,"999999999999"))})},watcherCountData:function(){var t=this;this.$get(p.a.GET_LIVE_VIEWER,{activityId:this.activityId}).then(function(a){200===a.code&&0!==a.data.length&&(t.watcherLineData=a.data,t.$nextTick(function(){t.watcherChart=Object(u.e)("chart01",{xAxisData:t.watcherLineData.live.xAxis,datas:[{name:"浏览次数",data:t.watcherLineData.live.pv},{name:"独立访客",data:t.watcherLineData.live.uv},{name:"IP",data:t.watcherLineData.live.ip}]})}))})},basicCount:function(){var t=this;this.$get(p.a.GET_LIVE_COUNT,{activityId:this.activityId}).then(function(a){200===a.code&&0!==a.data.length&&(t.basicCountData=a.data)})},goChatDataDetail:function(){var t=this;this.chatDataDetail=!0,this.loading=!0,this.$get(p.a.GET_LIVE_CHAT_LIST,{activityId:this.activityId,page:this.page,pageSize:this.pageSize}).then(function(a){t.loading=!1,200===a.code&&0!==a.data.length&&(t.chatDataList=a.data.list,t.total=a.data.total)}).catch(function(){t.loading=!1})},goPagerDataDetail:function(){var t=this;this.pagerDataDetail=!0,this.$get(p.a.GET_NAIRE_LISTS,{activityId:this.activityId}).then(function(a){a&&200===a.code&&(t.pagerDataList=a.data),console.log(t.pagerDataList)})},goCardDataDetail:function(){var t=this;this.cardDataDetail=!0,this.cardDataList=[],this.$get(_.a.GET_CARDS_LIST,{activity_id:this.activityId}).then(function(a){console.log(a),t.cardDataList=a.data.list})},downLoadExport:function(t){var a="/api"+p.a.GET_LIVE_RED_BAG_LIST_EXOPORT+"?red_packet_id="+t;window.open(encodeURI(encodeURI(a)))},goRedBagDataDetail:function(){this.redBagDataDetail=!0,this.page=0,this.pageSize=20,this.total=0,this.goRedBagDataList()},goRedBagDataList:function(){var t=this;this.$get(p.a.GET_LIVE_RED_BAG_LIST,{activity_id:this.activityId,page:this.page,page_size:this.pageSize}).then(function(a){t.loading=!1,200===a.code&&(t.total=a.data.count,t.redBagDataList=a.data.list)})},goGoodsDataDetail:function(){var t=this;this.goodsDataDetail=!0,this.$get(p.a.GET_GOODS_LISTS,{activity_id:this.activityId}).then(function(a){a&&200===a.code&&(t.goodsDataList=a.data),console.log(t.goodsDataList)})},changeMenu:function(t){if(this.watchType!==t){this.watchType=t;var a=this.watchType?"playback":"live";this.watcherLineData[a]&&(this.watcherChart=Object(u.e)("chart01",{xAxisData:this.watcherLineData[a].xAxis,datas:[{name:"浏览次数",data:this.watcherLineData[a].pv},{name:"独立访问",data:this.watcherLineData[a].uv},{name:"IP",data:this.watcherLineData[a].ip}]}))}},liveTimeLengthChart:function(){var t=this;this.$get(p.a.GET_LIVE_DURATION,{activityId:this.activityId}).then(function(a){if(200===a.code&&0!==a.data.length){if(!a.data.list)return;t.timeLongChart=Object(u.d)("chart02",a.data.list,{left:48,right:20,top:20,bottom:20})}})},playBackTimeScatter:function(){var t=this;this.$get(p.a.GET_LIVE_VIEW_RECORD,{activityId:this.activityId}).then(function(a){var e=null;if(200===a.code&&0!==a.data.length){if(!a.data.list)return;var i=[],s=[];a.data.list.forEach(function(t){i.push(t.time),s.push([t.time,t.week,t.value])}),e={yAxis:["周日","周一","周二","周三","周四","周五","周六"],xAxis:o()(new l.a(i)),data:s}}else e={yAxis:["周日","周一","周二","周三","周四","周五","周六"],xAxis:o()(new l.a([0])),data:[[0,0,0]]};t.playBackTimeChart=Object(u.i)("chart03",e,{left:70,right:10,top:20,bottom:20})})},hdTrendChart:function(){var t=this;this.$get(p.a.GET_LIVE_TOOL,{activityId:this.activityId}).then(function(a){var e=null;if(200===a.code&&0!==a.data.length){a.data.xAxis=a.data.xAxis||[""],a.data.interact=a.data.interact||[{name:"红包",dataList:[0]},{name:"抽奖",dataList:[0]},{name:"答题",dataList:[0]},{name:"商品推荐",dataList:[0]}];var i=a.data.interact.map(function(t){return t.type="bar",t.data=t.dataList,delete t.dataList,t});i.push({name:a.data.viewer.name,type:"line",data:a.data.viewer.dataList||[0]}),e={xAxis:a.data.xAxis,list:i}}else e={xAxis:[""],list:[{name:"观众人数",type:"line",data:[0]}]};t.hdChart=Object(u.a)("chart04",e,{left:48,top:20,bottom:20})})},closeMesssageBox:function(){var t=this;this.preDataDetail=!1,this.chatDataDetail=!1,this.prizeDataDetail=!1,this.pagerDataDetail=!1,this.answerDataDetail=!1,this.cardDataDetail=!1,this.redBagDataDetail=!1,this.goodsDataDetail=!1,this.$nextTick(function(){t.preDataList=[],t.chatDataList=[],t.prizeDataList=[],t.pagerDataList=[],t.answerDataList=[],t.cardDataList=[],t.goodsDataList=[],t.redBagDataList=[],t.page=1,t.pageSize=10,t.total=0})},download:function(t){switch(t.type){case"goods":this.downloadGoods(t.id);break;case"pager":this.downloadPager(t)}},downloadGoods:function(t){var a="/api"+p.a.GET_GOODS_EXPORT+"?goods_id="+t;window.location.href=a},downloadPager:function(t){var a="/api"+p.a.GET_NAIRE_DOWNLOAD+"?activityId="+this.activityId+"&&naireId="+t.naireId;window.location.href=a}})},C=(e(841),e(842),e(1)),w=Object(C.a)(D,i,[],!1,null,"d55fac46",null);w.options.__file="src/pages/data/live.vue";a.default=w.exports}}]);
//# sourceMappingURL=46.dd40b1f3.js.map