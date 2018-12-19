(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{479:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"ComLoading",rawName:"v-ComLoading",value:t.loading,expression:"loading"}],staticClass:"live-mager",attrs:{"com-loading-text":"拼命加载中"}},[a("div",{staticClass:"live-title"},[a("span",{staticClass:"title"},[t._v("活动列表")]),t._v(" "),t.tableList.length||t.isSearch?a("div",{staticClass:"search-box fr"},[a("el-select",{attrs:{placeholder:"直播状态","popper-class":"webinar-list-select"},on:{change:t.statusChange},model:{value:t.searchParams.status,callback:function(e){t.$set(t.searchParams,"status",e)},expression:"searchParams.status"}},t._l(t.optionsStates,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),t._v(" "),a("el-select",{attrs:{placeholder:"请选择","popper-class":"webinar-list-select"},model:{value:t.searchParams.sortBy,callback:function(e){t.$set(t.searchParams,"sortBy",e)},expression:"searchParams.sortBy"}},t._l(t.optionsOrder,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),t._v(" "),a("com-input",{staticClass:"search-com",attrs:{type:"search",value:t.searchParams.keyword,maxLength:30,placeholder:"输入直播名称"},on:{"update:value":function(e){t.$set(t.searchParams,"keyword",e)}},nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.searchEnter(e):null}}}),t._v(" "),a("button",{staticClass:"primary-button create-btn",on:{click:t.createLive}},[t._v("新建活动\n      ")])],1):t._e()]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.endRequset,expression:"endRequset"}],staticClass:"mager-box",staticStyle:{"padding-bottom":"60px"}},[t.tableList.length?[a("live-table",{attrs:{tableList:t.tableList},on:{handleClick:t.handleClick}}),t._v(" "),a("div",{staticClass:"pagination-box"},[t.total>t.pageSize?a("div",{staticClass:"page-pagination"},[a("ve-pagination",{attrs:{total:t.total,pageSize:t.pageSize,currentPage:t.searchParams.page},on:{changePage:t.changePage}})],1):t._e()])]:[t.isSearch?[t._m(0)]:[a("div",{staticClass:"empty-box"},[a("p",{staticClass:"img"}),t._v(" "),a("p",{staticClass:"title"},[t._v("你还没有活动，快去创建吧")]),t._v(" "),a("router-link",{attrs:{to:"/liveMager/create"}},[a("el-button",{staticClass:"primary-button"},[t._v("创建活动")])],1)],1)]]],2),t._v(" "),a("message-box",{directives:[{name:"show",rawName:"v-show",value:t.inCountdown,expression:"inCountdown"}],staticClass:"in-countdown",attrs:{width:"300",header:"提示",cancelText:"放弃",confirmText:"仍然进入"},on:{handleClick:t.inCountdownClick}},[a("p",[t._v("当前时间与您预先设置的时间不一致，是否现在发起正式直播？")]),t._v(" "),a("p",[t._v("您设置的时间为:")]),t._v(" "),a("p",[t._v(t._s(t.startTime))])])],1)};i._withStripped=!0;var s=a(99),n=a.n(s),l=a(138),o=a.n(l),c=a(529),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"live-list"},[t._l(t.tableList,function(e){return a("div",{key:e.id,staticClass:"live-item-box"},[a("live-item",{attrs:{height:"300",liveData:e},on:{handleClick:t.handleClick}})],1)}),t._v(" "),t.tableList&&t.tableList.length>0?t._e():a("div",{staticClass:"none-data"},[t._v("暂无数据")])],2)};r._withStripped=!0;var u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"live-item",style:{height:this.height+"px"}},["PREPARE"==t.liveData.status?a("span",{staticClass:"live-state"},[t._v("预告")]):t._e(),t._v(" "),"LIVING"==t.liveData.status?a("span",{staticClass:"live-state"},[a("i",{staticClass:"live-point"}),t._v("直播中")]):t._e(),t._v(" "),"PLAYBACK"==t.liveData.status?a("span",{staticClass:"live-state"},[t._v("回放")]):t._e(),t._v(" "),"FINISH"==t.liveData.status?a("span",{staticClass:"live-state"},[t._v("结束")]):t._e(),t._v(" "),a("div",{staticClass:"live-img",style:t.imgStyle,on:{click:function(e){e.stopPropagation(),t.handleClick(t.action.info)}}},["empty"!==t.imgUrl?a("div",{staticClass:"img",style:{backgroundImage:"url("+t.liveData.imgUrl+")"},attrs:{src:t.liveData.imgUrl}}):a("div",{staticClass:"img"})]),t._v(" "),a("div",{staticClass:"live-md",on:{click:function(e){e.stopPropagation(),t.handleClick(t.action.info)}}},[a("span",{attrs:{title:t.liveData.title}},[t._v(t._s(t.liveData.title))]),t._v(" "),a("span",{staticClass:"time"},[t._v(t._s(t.liveData.startTime))])]),t._v(" "),a("div",{staticClass:"live-bottom"},[a("span",{staticClass:"item",attrs:{title:"开播"},on:{click:function(e){e.stopPropagation(),t.handleClick(t.action.play)}}},[a("i",{staticClass:"iconfont icon-shipin"})]),t._v(" "),a("span",{staticClass:"item",attrs:{title:"推广"},on:{click:function(e){e.stopPropagation(),t.handleClick(t.action.share)}}},[a("i",{staticClass:"iconfont icon-fasong"})]),t._v(" "),a("span",{staticClass:"item",attrs:{title:"详情"},on:{click:function(e){e.stopPropagation(),t.handleClick(t.action.info)}}},[a("i",{staticClass:"iconfont icon-xiangqingjieshao"})]),t._v(" "),a("span",{staticClass:"item",on:{mouseover:function(e){e.stopPropagation(),t.showMore=!0},mouseout:function(e){e.stopPropagation(),t.showMore=!1}}},[a("i",{staticClass:"iconfont icon-gengduo"}),t._v(" "),a("transition",{attrs:{name:"slide-fade"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.showMore,expression:"showMore"}],staticClass:"live-more"},[a("span",{class:{disabled:"PREPARE"===t.liveData.status||"LIVING"===t.liveData.status||!t.liveData.data_finish_time},on:{click:function(e){e.stopPropagation(),t.handleClick(t.action.viewer)}}},[t._v("观众")]),t._v(" "),a("span",{class:{disabled:"PREPARE"===t.liveData.status||"LIVING"===t.liveData.status||!t.liveData.data_finish_time},on:{click:function(e){e.stopPropagation(),t.handleClick(t.action.data)}}},[t._v("数据")]),t._v(" "),a("span",{class:{disabled:"LIVING"===t.liveData.status},on:{click:function(e){e.stopPropagation(),t.handleClick(t.action.delete)}}},[t._v("删除")])])])],1)])])};u._withStripped=!0;var v=a(30),d=a.n(v),h={play:{type:"play",text:"开播"},share:{type:"share",text:"推广"},info:{type:"info",text:"详情"},viewer:{type:"viewer",text:"观众"},data:{type:"data",text:"数据"},edit:{type:"edit",text:"编辑"},delete:{type:"delete",text:"删除"}},p={name:"live-item",data:function(){return{showMore:!1,action:h}},props:{liveData:{type:Object,default:{id:0,title:"-",status:"-",imgUrl:"",startTime:"0000-00-00 00-00"}},height:{type:String,default:"260"}},computed:{imgStyle:function(){this.imgUrl=this.liveData.imgUrl?this.liveData.imgUrl:"empty"}},methods:{handleClick:function(t){this.$emit("handleClick",d()({},t,this.liveData))}}},m=(a(755),a(1)),g=Object(m.a)(p,u,[],!1,null,"9b7622e6",null);g.options.__file="src/pages/live-mager/live/live-item.vue";var f={name:"live-table",components:{LiveItem:g.exports},props:{tableList:{type:Array,default:[]}},data:function(){return{}},methods:{handleClick:function(t){this.$emit("handleClick",t)}}},_=(a(756),Object(m.a)(f,r,[],!1,null,"bbdbbd78",null));_.options.__file="src/pages/live-mager/live/live-table.vue";var C=_.exports,b=a(530),w=a(63),y={name:"index",components:{LiveTable:C,VePagination:b.a},data:function(){return{show:!1,pageSize:16,loading:!1,inCountdown:!1,isPublished:!1,hostOnline:!1,jumpId:"",startTime:"",optionsStates:[{value:"",label:"全部"},{value:"PREPARE",label:"预告"},{value:"LIVING",label:"直播中"},{value:"FINISH",label:"已结束"},{value:"PLAYBACK",label:"回放"}],optionsOrder:[{value:"createTime",label:"按创建时间排序"},{value:"startTime",label:"按直播开始时间排序"}],searchParams:{status:"",sortBy:"createTime",keyword:"",page:1,pageSize:16},tableList:[],total:0,PC_HOST:"//test-zhike.vhall.com/webinar/",isSearch:!1,endRequset:!1}},watch:{searchParams:{handler:function(t){t.keyword||this.queryList()},immediate:!0,deep:!0}},created:function(){w.a.$emit("breads",[{title:"活动管理"},{title:"活动列表"}])},methods:{handleClick:function(t){var e=this;if(console.log(t),"play"===t.type){if(this.isOverdue(t.endTime))return this.$toast({content:"该活动已结束超过48小时，无法再次开启",position:"center"}),!1;this.isPublished="Y"===t.published,this.startTime=t.startTime,this.jumpId=t.id,this.getDetails(t.id)}else"delete"===t.type?this.$messageBox({header:"删除活动",content:"活动删除后，所有数据将一并删除，并且不可恢复。确定要删除吗？",cancelText:"暂不删除",confirmText:"仍要删除",type:"error",width:"400px",handleClick:function(a){"confirm"===a.action&&e.deleteLive(t.id)}}):"share"===t.type?this.$router.push("/liveMager/detail/"+t.id+"#tg"):"info"===t.type?this.$router.push("/liveMager/detail/"+t.id):"data"===t.type?this.$router.push("/data/preview/"+t.id):"viewer"===t.type&&this.$router.push("/data/viewerList/"+t.id+"?type=all")},inCountdownClick:function(t){console.log(t),"cancel"===t.action?this.inCountdown=!1:"confirm"===t.action&&(this.inCountdown=!0,this.judgePublish())},judgePublish:function(){var t=this;this.isPublished?(this.inCountdown=!1,window.open("_blank").location=this.PC_HOST+"master/"+this.jumpId):(this.inCountdown=!1,this.$messageBox({header:"提示",width:"400px",content:"进入直播后，您的活动官网和观看引导页将正式对外发布，是否继续执行？",cancelText:"暂不开播",confirmText:"确认开播",handleClick:function(e){if(console.log(e),"cancel"===e.action);else if("confirm"===e.action){window.open("_blank").location=t.PC_HOST+"master/"+t.jumpId,t.publish(t.jumpId)}}}))},isToday:function(t){return new Date(t).toDateString()===(new Date).toDateString()?(console.log("当天"),!1):(console.log("非当天"),!0)},isOverdue:function(t){return null!==t&&(new Date).getTime()-new Date(t).getTime()>1728e5},getDetails:function(t){var e=this;return o()(n.a.mark(function a(){return n.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.$get(c.a.GET_HOSTING,{activityId:e.jumpId}).then(function(t){e.hostOnline=t.data.hostOnline});case 2:if(!e.hostOnline){a.next=5;break}return e.$toast({content:"暂不支持这种方式发起直播",position:"center"}),a.abrupt("return",!1);case 5:e.$get(c.a.GET_DETAILS,{activityId:t}).then(function(t){e.isToday(t.data.activity.startTime)?e.inCountdown=!0:e.judgePublish()});case 6:case"end":return a.stop()}},a,e)}))()},changePage:function(t){this.searchParams.page=t},searchEnter:function(){this.isSearch=!0,this.queryList()},createLive:function(){this.$router.push("/liveMager/create")},deleteLive:function(t){var e=this;this.$post(c.a.POST_DEL_ACTIVITY,{id:t}).then(function(t){e.queryList()})},queryList:function(){var t=this;this.$config().$get(c.a.GET_ACTIVITY_LIST,this.searchParams).then(function(e){e.data.list.map(function(e,a){return e.imgUrl&&(e.imgUrl=t.$imgHost+"/"+e.imgUrl),e}),t.tableList=e.data.list,t.endRequset=!0,t.total=e.data.total})},publish:function(t){var e=this;this.$config().$post(c.a.POST_PUBLISH_ACTIVITE,{activityId:t}).then(function(t){e.$toast({content:"活动发布成功",position:"center"})})},statusChange:function(t){this.isSearch=!0}}},k=(a(758),a(759),Object(m.a)(y,i,[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"empty-box empty-search"},[e("p",{staticClass:"img"}),this._v(" "),e("p",{staticClass:"title"},[this._v("很抱歉，没有找到搜索结果")])])}],!1,null,"6f9d3f66",null));k.options.__file="src/pages/live-mager/index.vue";e.default=k.exports},572:function(t,e,a){},573:function(t,e,a){},575:function(t,e,a){},576:function(t,e,a){},755:function(t,e,a){"use strict";var i=a(572);a.n(i).a},756:function(t,e,a){"use strict";var i=a(573);a.n(i).a},758:function(t,e,a){"use strict";var i=a(575);a.n(i).a},759:function(t,e,a){"use strict";var i=a(576);a.n(i).a}}]);
//# sourceMappingURL=5.2d25fa50.js.map