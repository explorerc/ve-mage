(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{488:function(t,a,i){"use strict";i.r(a);var e=i(549),s=i(548),c=i(536),v=i(63),n=i(540),l={name:"preview",components:{VeTitle:e.a,VeCircle:s.a},data:function(){return{activityId:"",vhallRateData:{value:0,ratio:0,average:0},activityScoreData:{viewer:0,watchDuration:0,spread:0,extension:0,interact:0},watcherCountData:{watch:{value:0,ratio:0,average:0},viewer:{value:0,ratio:0,average:0},newUser:{value:0,ratio:0,average:0},newGoodUser:{value:0,ratio:0,average:0}},watchCoefficientData:{watchTime:{value:0,ratio:0,average:0},extension:{value:0,ratio:0,average:0},spread:{value:0,ratio:0,average:0},interactint:{value:0,ratio:0,average:0}},tripNoneData:!1}},filters:{fmtTime:function(t){return((t/3600>>0)+"").padStart(2,0)+":"+((t/60%60>>0)+"").padStart(2,0)+":"+((t%60>>0)+"").padStart(2,0)}},beforeDestroy:function(){window.callbackResize=null,this.userTrailChart&&this.userTrailChart.dispose()},created:function(){var t=this;this.activityId=this.$route.params.id,this.initPage(),window.callbackResize=function(){t.userTrailChart&&t.userTrailChart.resize()},v.a.$emit("breads",[{title:"活动管理"},{title:"活动列表",url:"/liveMager/list"},{title:"活动详情",url:"/liveMager/detail/"+this.$route.params.id},{title:"概览数据",url:"/data/preview/"+this.$route.params.id}])},methods:{initPage:function(){var t=this;this.activityScore(),this.watcherCount(),this.watchCoefficient(),this.$nextTick(function(){t.vhallRate(),t.renderChart()})},vhallRate:function(){var t=this;this.$get(c.a.GET_PREVIEW_COUNT,{activityId:this.activityId}).then(function(a){200===a.code&&0!==a.data.length?t.vhallRateData=a.data:t.vhallRateData={value:0,ratio:0,average:0},Object(n.g)("chartVallId",t.vhallRateData.value)})},activityScore:function(){var t=this;this.$get(c.a.GET_PREVIEW_SCORE,{activityId:this.activityId}).then(function(a){200===a.code&&0!==a.data.length&&(t.activityScoreData=a.data)})},watcherCount:function(){var t=this;this.$get(c.a.GET_PREVIEW_WATCHCOUNT,{activityId:this.activityId}).then(function(a){200===a.code&&0!==a.data.length&&(t.watcherCountData=a.data)})},watchCoefficient:function(){var t=this;this.$get(c.a.GET_PREVIEW_WATCHCOEFFICIENT,{activityId:this.activityId}).then(function(a){200===a.code&&0!==a.data.length&&(t.watchCoefficientData=a.data)})},renderChart:function(){var t=this;this.$get(c.a.GET_PREVIEW_USER_TRIP,{activityId:this.activityId}).then(function(a){200===a.code&&(a.data.length<=0?t.tripNoneData=!0:t.randerUserTrailChart(a.data))})},randerUserTrailChart:function(t){var a=this;if(t.sourceList&&t.sourceList.length>0){var i=[],e=[];t.sourceList.forEach(function(t){i.push({name:t.source+"",showName:t.sourceName,value:t.value})}),t.sourceLinks.forEach(function(t){e.push({source:t.source+"",sourceName:t.sourceName,target:t.target+"",targetName:t.targetName,value:t.value})}),this.$nextTick(function(){a.userTrailChart=Object(n.h)("myChart",{data:i,links:e})})}}}},r=(i(902),i(903),i(1)),o=Object(r.a)(l,function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"data-box preview"},[e("div",{staticClass:"item-container clearfix",staticStyle:{border:"none"}},[e("div",{staticClass:"data-pad"},[e("div",{staticClass:"item-box vhall-item fl",staticStyle:{"margin-top":"12px"}},[e("div",{staticClass:"item-title fzc"},[e("ve-title",{attrs:{width:"200px",title:"微吼指数",tip:"本场活动的综合效果，最高分100"}})],1),t._v(" "),e("div",{staticClass:"item-mid fzc",staticStyle:{height:"130px",position:"relative"}},[t.vhallRateData.value>=90?e("span",{staticClass:"vhall-status"},[t._v("出色")]):t.vhallRateData.value>=80?e("span",{staticClass:"vhall-status"},[t._v("不错")]):t.vhallRateData.value>=60?e("span",{staticClass:"vhall-status"},[t._v("很好")]):e("span",{staticClass:"vhall-status"},[t._v("加油")]),t._v(" "),e("div",{staticStyle:{height:"130px","margin-top":"-8px"},attrs:{id:"chartVallId"}})]),t._v(" "),e("div",{staticClass:"item-bottom fzc"},[e("span",[t._v("环比\n            "),t.vhallRateData.ratio<0?e("i",{staticClass:"down"},[t._v("▼")]):e("i",{staticClass:"up"},[t._v("▲")]),t._v("\n            "+t._s(Math.abs(t.vhallRateData.ratio))+"%\n          ")]),t._v(" "),e("span",[t._v("平均\n            "),t.vhallRateData.average<0?e("i",{staticClass:"down"},[t._v("▼")]):e("i",{staticClass:"up"},[t._v("▲")]),t._v("\n            "+t._s(Math.abs(t.vhallRateData.average))+"%\n          ")])])]),t._v(" "),e("div",{staticClass:"item-box spread fl"},[e("div",{staticClass:"box fl",staticStyle:{width:"20%"}},[e("div",{staticClass:"item-title fzc"},[e("ve-title",{attrs:{width:"300px",title:"观众",tip:"观众总数，用来衡量一场直播内容和吸引力的重要指标"}})],1),t._v(" "),e("ve-circle",{staticStyle:{"margin-top":"10px"},attrs:{d:"110px",tips:"观众得分="+t.activityScoreData.viewer+"分（满分100分）",value:t.activityScoreData.viewer}})],1),t._v(" "),e("div",{staticClass:"box fl",staticStyle:{width:"20%"}},[e("div",{staticClass:"item-title fzc"},[e("ve-title",{attrs:{width:"300px",title:"观看时长",tip:"统计该场直播中所有观众的平均观看时长，反应观众在直播间内的平均停留时长。平均观看时长=所有观众观看时长之和/观众总数；注：观看时长包含直播和回放两部分。为了计算简便，系统假定回放"}})],1),t._v(" "),e("ve-circle",{staticStyle:{"margin-top":"10px"},attrs:{d:"110px",tips:"观看得分="+t.activityScoreData.watchDuration+"分（满分100分）",value:t.activityScoreData.watchDuration}})],1),t._v(" "),e("div",{staticClass:"box fl",staticStyle:{width:"20%"}},[e("div",{staticClass:"item-title fzc"},[e("ve-title",{attrs:{width:"300px",title:"推广",tip:"衡量一场直播在前期宣传推广的触达效果。推广方式包括推广中心中的邮件、短信、微信三种方式。推广效果=最终成为观众人数/推广渠道触达人数"}})],1),t._v(" "),e("ve-circle",{staticStyle:{"margin-top":"10px"},attrs:{d:"110px",tips:"推广得分="+t.activityScoreData.extension+"分（满分100分）",value:t.activityScoreData.extension}})],1),t._v(" "),e("div",{staticClass:"box fl",staticStyle:{width:"20%"}},[e("div",{staticClass:"item-title fzc"},[e("ve-title",{attrs:{width:"300px",title:"传播",tip:"衡量一场直播中，观众的自传播效果。展现观众在直播中分享拉新的效果"}})],1),t._v(" "),e("ve-circle",{staticStyle:{"margin-top":"10px"},attrs:{d:"110px",tips:"传播得分="+t.activityScoreData.spread+"分（满分100分）",value:t.activityScoreData.spread}})],1),t._v(" "),e("div",{staticClass:"box fl",staticStyle:{width:"20%"}},[e("div",{staticClass:"item-title fzc"},[e("ve-title",{attrs:{width:"180px",title:"互动",tip:"根据直播中的互动行为，判断该场直播，观众主动参与互动的意向是否强烈。互动效果=观众的所有互动次数/观众总数"}})],1),t._v(" "),e("ve-circle",{staticStyle:{"margin-top":"10px"},attrs:{d:"110px",tips:"互动得分="+t.activityScoreData.interact+"分（满分100分）",value:t.activityScoreData.interact}})],1)])]),t._v(" "),e("div",{staticClass:"data-pad"},[e("div",{staticClass:"item-box fl"},[e("div",{staticClass:"box fl",staticStyle:{width:"25%"}},[e("div",{staticClass:"item-title"},[e("ve-title",{attrs:{width:"220px",title:"触达用户",tip:"使用推广工具（短信、微信、邮件）触达的用户数量"}})],1),t._v(" "),e("div",{staticClass:"item-mid"},[t._v(t._s(t.watcherCountData.watch.value))]),t._v(" "),e("div",{staticClass:"item-bottom"},[e("span",[t._v("环比\n            "),t.watcherCountData.watch.ratio<0?e("i",{staticClass:"down"},[t._v("▼")]):e("i",{staticClass:"up"},[t._v("▲")]),t._v("\n            "+t._s(Math.abs(t.watcherCountData.watch.ratio))+"%\n          ")]),t._v(" "),e("span",[t._v("平均\n            "),t.watcherCountData.watch.average<0?e("i",{staticClass:"down"},[t._v("▼")]):e("i",{staticClass:"up"},[t._v("▲")]),t._v("\n            "+t._s(Math.abs(t.watcherCountData.watch.average))+"%\n          ")])])]),t._v(" "),e("div",{staticClass:"box fl",staticStyle:{width:"25%"}},[e("div",{staticClass:"item-title"},[e("ve-title",{attrs:{width:"190px",title:"观众总数",tip:"观看了直播（包括回放）的人数"}})],1),t._v(" "),e("div",{staticClass:"item-mid"},[t._v(t._s(t.watcherCountData.viewer.value))]),t._v(" "),e("div",{staticClass:"item-bottom"},[e("span",[t._v("环比\n            "),t.watcherCountData.viewer.ratio<0?e("i",{staticClass:"down"},[t._v("▼")]):e("i",{staticClass:"up"},[t._v("▲")]),t._v("\n            "+t._s(Math.abs(t.watcherCountData.viewer.ratio))+"%\n          ")]),t._v(" "),e("span",[t._v("平均\n            "),t.watcherCountData.viewer.average<0?e("i",{staticClass:"down"},[t._v("▼")]):e("i",{staticClass:"up"},[t._v("▲")]),t._v("\n            "+t._s(Math.abs(t.watcherCountData.viewer.average))+"%\n          ")])])]),t._v(" "),e("div",{staticClass:"box fl",staticStyle:{width:"25%"}},[e("div",{staticClass:"item-title"},[e("ve-title",{attrs:{width:"170px",title:"新用户",tip:"第一次观看直播的用户数量"}})],1),t._v(" "),e("div",{staticClass:"item-mid"},[t._v(t._s(t.watcherCountData.newUser.value))]),t._v(" "),e("div",{staticClass:"item-bottom"},[e("span",[t._v("环比\n            "),t.watcherCountData.newUser.ratio<0?e("i",{staticClass:"down"},[t._v("▼")]):e("i",{staticClass:"up"},[t._v("▲")]),t._v("\n            "+t._s(Math.abs(t.watcherCountData.newUser.ratio))+"%\n          ")]),t._v(" "),e("span",[t._v("平均\n            "),t.watcherCountData.newUser.average<0?e("i",{staticClass:"down"},[t._v("▼")]):e("i",{staticClass:"up"},[t._v("▲")]),t._v("\n            "+t._s(Math.abs(t.watcherCountData.newUser.average))+"%\n          ")])])]),t._v(" "),e("div",{staticClass:"box fl",staticStyle:{width:"25%"}},[e("div",{staticClass:"item-title"},[e("ve-title",{attrs:{width:"140px",title:"新增优质用户",tip:"观看后变为优质用户的数量"}})],1),t._v(" "),e("div",{staticClass:"item-mid"},[t._v(t._s(t.watcherCountData.newGoodUser.value))]),t._v(" "),e("div",{staticClass:"item-bottom"},[e("span",[t._v("环比\n            "),t.watcherCountData.newGoodUser.ratio<0?e("i",{staticClass:"down"},[t._v("▼")]):e("i",{staticClass:"up"},[t._v("▲")]),t._v("\n            "+t._s(Math.abs(t.watcherCountData.newGoodUser.ratio))+"%\n          ")]),t._v(" "),e("span",[t._v("平均\n            "),t.watcherCountData.newUser.average<0?e("i",{staticClass:"down"},[t._v("▼")]):e("i",{staticClass:"up"},[t._v("▲")]),t._v("\n            "+t._s(Math.abs(t.watcherCountData.newGoodUser.average))+"%\n          ")])])])])]),t._v(" "),e("div",{staticClass:"data-pad"},[e("div",{staticClass:"item-box fl"},[e("div",{staticClass:"box fl",staticStyle:{width:"25%"}},[e("div",{staticClass:"item-title"},[e("ve-title",{attrs:{width:"160px",title:"平均观看时长",tip:"观众观看直播的平均时间"}})],1),t._v(" "),e("div",{staticClass:"item-mid"},[t._v(t._s(t._f("fmtTime")(t.watchCoefficientData.watchTime.value)))]),t._v(" "),e("div",{staticClass:"item-bottom"},[e("span",[t._v("环比\n            "),t.watchCoefficientData.watchTime.ratio<0?e("i",{staticClass:"down"},[t._v("▼")]):e("i",{staticClass:"up"},[t._v("▲")]),t._v("\n            "+t._s(Math.abs(t.watchCoefficientData.watchTime.ratio))+"%\n          ")]),t._v(" "),e("span",[t._v("平均\n            "),t.watchCoefficientData.watchTime.average<0?e("i",{staticClass:"down"},[t._v("▼")]):e("i",{staticClass:"up"},[t._v("▲")]),t._v("\n            "+t._s(Math.abs(t.watchCoefficientData.watchTime.average))+"%\n          ")])])]),t._v(" "),e("div",{staticClass:"box fl",staticStyle:{width:"25%"}},[e("div",{staticClass:"item-title"},[e("ve-title",{attrs:{width:"200px",title:"推广效果",tip:"根据活动的推广效果，评判您的推广途径是否有效"}})],1),t._v(" "),e("div",{staticClass:"item-mid"},[t._v(t._s(t.watchCoefficientData.extension.value))]),t._v(" "),e("div",{staticClass:"item-bottom"},[e("span",[t._v("环比\n            "),t.watchCoefficientData.extension.ratio<0?e("i",{staticClass:"down"},[t._v("▼")]):e("i",{staticClass:"up"},[t._v("▲")]),t._v("\n            "+t._s(Math.abs(t.watchCoefficientData.extension.ratio))+"%\n          ")]),t._v(" "),e("span",[t._v("平均\n            "),t.watchCoefficientData.extension.average<0?e("i",{staticClass:"down"},[t._v("▼")]):e("i",{staticClass:"up"},[t._v("▲")]),t._v("\n            "+t._s(Math.abs(t.watchCoefficientData.extension.average))+"%\n          ")])])]),t._v(" "),e("div",{staticClass:"box fl",staticStyle:{width:"25%"}},[e("div",{staticClass:"item-title"},[e("ve-title",{attrs:{width:"200px",title:"传播K因子",tip:"根据活动中观众分享活动的有效次数，评判活动的吸引力"}})],1),t._v(" "),e("div",{staticClass:"item-mid"},[t._v("k="+t._s(t.watchCoefficientData.spread.value))]),t._v(" "),e("div",{staticClass:"item-bottom"},[e("span",[t._v("环比\n            "),t.watchCoefficientData.spread.ratio<0?e("i",{staticClass:"down"},[t._v("▼")]):e("i",{staticClass:"up"},[t._v("▲")]),t._v("\n            "+t._s(Math.abs(t.watchCoefficientData.spread.ratio))+"%\n          ")]),t._v(" "),e("span",[t._v("平均\n            "),t.watchCoefficientData.spread.average<0?e("i",{staticClass:"down"},[t._v("▼")]):e("i",{staticClass:"up"},[t._v("▲")]),t._v("\n            "+t._s(Math.abs(t.watchCoefficientData.spread.average))+"%\n          ")])])]),t._v(" "),e("div",{staticClass:"box fl",staticStyle:{width:"25%"}},[e("div",{staticClass:"item-title"},[e("ve-title",{attrs:{width:"140px",title:"互动系数",tip:"评判直播中观众的互动活跃度"}})],1),t._v(" "),e("div",{staticClass:"item-mid"},[t._v(t._s(t.watchCoefficientData.interactint.value))]),t._v(" "),e("div",{staticClass:"item-bottom"},[e("span",[t._v("环比\n            "),t.watchCoefficientData.interactint.ratio<0?e("i",{staticClass:"down"},[t._v("▼")]):e("i",{staticClass:"up"},[t._v("▲")]),t._v("\n            "+t._s(Math.abs(t.watchCoefficientData.interactint.ratio))+"%\n          ")]),t._v(" "),e("span",[t._v("平均\n            "),t.watchCoefficientData.interactint.average<0?e("i",{staticClass:"down"},[t._v("▼")]):e("i",{staticClass:"up"},[t._v("▲")]),t._v("\n            "+t._s(Math.abs(t.watchCoefficientData.interactint.average))+"%\n          ")])])])])])]),t._v(" "),e("div",{staticClass:"data-pad"},[e("div",{staticClass:"chart-box"},[e("p",{staticClass:"title"},[e("ve-title",{attrs:{width:"200px",title:"用户旅途",tip:"展现本次直播中所有观众在各个界面的用户路径"}})],1),t._v(" "),e("div",{class:{"v-nodata":t.tripNoneData},staticStyle:{height:"500px","margin-bottom":"50px"},attrs:{id:"myChart"}},[t.tripNoneData?e("span",{staticClass:"none-chart"},[e("img",{attrs:{src:i(899),alt:""}}),t._v(" "),e("p",[t._v("\n            暂无数据\n          ")])]):t._e()])])])])},[],!1,null,"4ef704e5",null);o.options.__file="preview.vue";a.default=o.exports},692:function(t,a,i){},693:function(t,a,i){},899:function(t,a,i){t.exports=i.p+"static/img/nodata@2x.aaf1c3b.png"},902:function(t,a,i){"use strict";var e=i(692);i.n(e).a},903:function(t,a,i){"use strict";var e=i(693);i.n(e).a}}]);