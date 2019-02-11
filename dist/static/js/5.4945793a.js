(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{462:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"ComLoading",rawName:"v-ComLoading",value:t.loading,expression:"loading"}],staticClass:"live-mager",attrs:{"com-loading-text":"拼命加载中"}},[i("div",{staticClass:"live-title"},[i("span",{staticClass:"title"},[t._v("活动列表")]),t._v(" "),t.tableList.length||t.isSearch?i("div",{staticClass:"search-box fr"},[i("el-select",{attrs:{placeholder:"直播状态","popper-class":"webinar-list-select"},on:{change:t.statusChange},model:{value:t.searchParams.status,callback:function(e){t.$set(t.searchParams,"status",e)},expression:"searchParams.status"}},t._l(t.optionsStates,function(t){return i("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),t._v(" "),i("el-select",{attrs:{placeholder:"请选择","popper-class":"webinar-list-select"},model:{value:t.searchParams.sortBy,callback:function(e){t.$set(t.searchParams,"sortBy",e)},expression:"searchParams.sortBy"}},t._l(t.optionsOrder,function(t){return i("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),t._v(" "),i("com-input",{staticClass:"search-com",attrs:{type:"search",value:t.searchParams.keyword,maxLength:30,placeholder:"输入直播名称"},on:{"update:value":function(e){t.$set(t.searchParams,"keyword",e)}},nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.searchEnter(e):null}}}),t._v(" "),i("button",{staticClass:"primary-button create-btn",on:{click:t.createLive}},[t._v("新建活动\n      ")])],1):t._e()]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.endRequset,expression:"endRequset"}],staticClass:"mager-box",staticStyle:{"padding-bottom":"60px"}},[t.tableList.length?[i("live-table",{attrs:{tableList:t.tableList},on:{handleClick:t.handleClick}}),t._v(" "),i("div",{staticClass:"pagination-box"},[t.total>t.pageSize?i("div",{staticClass:"page-pagination"},[i("ve-pagination",{attrs:{total:t.total,pageSize:t.pageSize,currentPage:t.searchParams.page},on:{changePage:t.changePage}})],1):t._e()])]:[t.isSearch?[t._m(0)]:[i("div",{staticClass:"empty-box"},[i("p",{staticClass:"img"}),t._v(" "),i("p",{staticClass:"title"},[t._v("你还没有活动，快去创建吧")]),t._v(" "),i("router-link",{attrs:{to:"/liveMager/create"}},[i("el-button",{staticClass:"primary-button"},[t._v("创建活动")])],1)],1)]]],2),t._v(" "),i("message-box",{directives:[{name:"show",rawName:"v-show",value:t.inCountdown,expression:"inCountdown"}],staticClass:"in-countdown",attrs:{width:"300",header:"提示",cancelText:"放弃",confirmText:"仍然进入"},on:{handleClick:t.inCountdownClick}},[i("p",[t._v("当前时间与您预先设置的时间不一致，是否现在发起正式直播？")]),t._v(" "),i("p",[t._v("您设置的时间为:")]),t._v(" "),i("p",[t._v(t._s(t.startTime))])]),t._v(" "),t.browserHelpShow?i("message-box",{attrs:{type:"prompt",width:"500px",header:"微吼知客"},on:{handleClick:function(e){t.browserHelpShow=!1}}},[i("div",{staticClass:"browser-help"},[i("span",[t._v("不支持使用该浏览器发起直播")]),t._v(" "),i("img",{attrs:{src:a(712)}}),t._v(" "),i("span",{staticClass:"tip-info"},[t._v("为了您可以正常使用直播发起端功能，请使用"),i("a",{attrs:{title:"下载"},on:{click:function(e){t.downChrome("https://chrome.en.softonic.com/")}}},[t._v("Google Chrome")]),t._v("浏览器")])]),t._v(" "),i("div",{attrs:{slot:"bottom"},slot:"bottom"})]):t._e()],1)};i._withStripped=!0;var s=a(95),n=a.n(s),o=a(438),l=a.n(o),r=a(439),c=a.n(r),u=a(514),v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"live-list"},[t._l(t.tableList,function(e){return a("div",{key:e.id,staticClass:"live-item-box"},[a("live-item",{attrs:{height:"300",liveData:e},on:{handleClick:t.handleClick}})],1)}),t._v(" "),t.tableList&&t.tableList.length>0?t._e():a("div",{staticClass:"none-data"},[t._v("暂无数据")])],2)};v._withStripped=!0;var h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"live-item",style:{height:this.height+"px"},on:{click:function(e){t.goDetail(t.liveData.id)}}},["PREPARE"==t.liveData.status?a("span",{staticClass:"live-state"},[t._v("预告")]):t._e(),t._v(" "),"LIVING"==t.liveData.status?a("span",{staticClass:"live-state"},[a("i",{staticClass:"live-point"}),t._v("直播中")]):t._e(),t._v(" "),"PLAYBACK"==t.liveData.status?a("span",{staticClass:"live-state"},[t._v("回放")]):t._e(),t._v(" "),"FINISH"==t.liveData.status?a("span",{staticClass:"live-state"},[t._v("结束")]):t._e(),t._v(" "),a("div",{staticClass:"live-img",style:t.imgStyle,on:{click:function(e){e.stopPropagation(),t.handleClick(t.action.info)}}},["empty"!==t.imgUrl?a("div",{staticClass:"img",style:{backgroundImage:"url("+t.liveData.imgUrl+")"},attrs:{src:t.liveData.imgUrl}}):a("div",{staticClass:"img"})]),t._v(" "),a("div",{staticClass:"live-md",on:{click:function(e){e.stopPropagation(),t.handleClick(t.action.info)}}},[a("span",{attrs:{title:t.liveData.title}},[t._v(t._s(t.liveData.title))]),t._v(" "),a("span",{staticClass:"time"},[t._v(t._s(t.liveData.startTime))])]),t._v(" "),a("div",{staticClass:"live-bottom",on:{click:function(t){t.stopPropagation()}}},[a("span",{staticClass:"item",attrs:{title:"开播"},on:{click:function(e){e.stopPropagation(),t.handleClick(t.action.play)}}},[a("i",{staticClass:"ico ico-kaibo"}),a("span",[t._v("开播")])]),t._v(" "),a("span",{staticClass:"item",attrs:{title:"推广"},on:{click:function(e){e.stopPropagation(),t.handleClick(t.action.share)}}},[a("i",{staticClass:"ico ico-tuiguang"}),a("span",[t._v("推广")])]),t._v(" "),a("span",{staticClass:"item",attrs:{title:"详情"},on:{click:function(e){e.stopPropagation(),t.handleClick(t.action.info)}}},[a("i",{staticClass:"ico ico-xiangqing"}),a("span",[t._v("详情")])]),t._v(" "),a("span",{staticClass:"item item-more",on:{mouseover:function(e){e.stopPropagation(),t.showMore=!0},mouseout:function(e){e.stopPropagation(),t.showMore=!1}}},[a("i",{staticClass:"ico ico-gengduo"}),t._v(" "),a("transition",{attrs:{name:"slide-fade"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.showMore,expression:"showMore"}],staticClass:"live-more"},[a("span",{class:{disabled:"PREPARE"===t.liveData.status||"LIVING"===t.liveData.status||!t.liveData.data_finish_time},on:{click:function(e){e.stopPropagation(),t.handleClick(t.action.data)}}},[t._v("活动数据")]),t._v(" "),a("span",{class:{disabled:"PREPARE"===t.liveData.status||"LIVING"===t.liveData.status||!t.liveData.data_finish_time},on:{click:function(e){e.stopPropagation(),t.handleClick(t.action.viewer)}}},[t._v("观众列表")]),t._v(" "),a("span",{class:{disabled:"LIVING"===t.liveData.status},on:{click:function(e){e.stopPropagation(),t.handleClick(t.action.delete)}}},[t._v("删除")])])])],1)])])};h._withStripped=!0;var d=a(26),p=a.n(d),m={play:{type:"play",text:"开播"},share:{type:"share",text:"推广"},info:{type:"info",text:"详情"},viewer:{type:"viewer",text:"观众"},data:{type:"data",text:"数据"},edit:{type:"edit",text:"编辑"},delete:{type:"delete",text:"删除"}},g={name:"live-item",data:function(){return{showMore:!1,action:m}},props:{liveData:{type:Object,default:{id:0,title:"-",status:"-",imgUrl:"",startTime:"0000-00-00 00-00"}},height:{type:String,default:"260"}},computed:{imgStyle:function(){this.imgUrl=this.liveData.imgUrl?this.liveData.imgUrl:"empty"}},methods:{handleClick:function(t){this.$emit("handleClick",p()({},t,this.liveData))},goDetail:function(t){this.$router.push("/liveMager/detail/"+t)}}},f=(a(745),a(1)),_=Object(f.a)(g,h,[],!1,null,"9b7622e6",null);_.options.__file="src/pages/live-mager/live/live-item.vue";var C={name:"live-table",components:{LiveItem:_.exports},props:{tableList:{type:Array,default:[]}},data:function(){return{}},methods:{handleClick:function(t){this.$emit("handleClick",t)}}},b=(a(746),Object(f.a)(C,v,[],!1,null,"bbdbbd78",null));b.options.__file="src/pages/live-mager/live/live-table.vue";var w=b.exports,y=a(515),k=a(59),P={name:"index",components:{LiveTable:w,VePagination:y.a},data:function(){return{show:!1,pageSize:16,loading:!1,inCountdown:!1,isPublished:!1,hostOnline:!1,browserHelpShow:!1,jumpId:"",startTime:"",optionsStates:[{value:"",label:"全部"},{value:"PREPARE",label:"预告"},{value:"LIVING",label:"直播中"},{value:"FINISH",label:"已结束"},{value:"PLAYBACK",label:"回放"}],optionsOrder:[{value:"createTime",label:"按创建时间排序"},{value:"startTime",label:"按开播时间排序"}],searchParams:{status:"",sortBy:"createTime",keyword:"",page:1,pageSize:16},tableList:[],total:0,PC_HOST:"//dev-zhike.vhall.com/webinar/",isSearch:!1,endRequset:!1}},watch:{searchParams:{handler:function(t){t.keyword||this.queryList()},immediate:!0,deep:!0}},created:function(){k.a.$emit("breads",[{title:"活动管理"},{title:"活动列表"}])},methods:{handleClick:function(t){var e=this;if(console.log(t),"play"===t.type){if("N"===t.validStatus)return this.$toast({content:"该活动已过期，无法再次发起直播"}),!1;this.isPublished="Y"===t.published,this.startTime=t.startTime,this.jumpId=t.id,this.getDetails(t.id)}else"delete"===t.type?this.$messageBox({header:"删除活动",content:"活动删除后，所有数据将一并删除，并且不可恢复。确定要删除吗？",cancelText:"暂不删除",confirmText:"仍要删除",type:"error",width:"400px",handleClick:function(a){"confirm"===a.action&&e.deleteLive(t.id)}}):"share"===t.type?this.$router.push("/liveMager/detail/"+t.id+"#tg"):"info"===t.type?this.$router.push("/liveMager/detail/"+t.id):"data"===t.type?this.$router.push("/data/preview/"+t.id):"viewer"===t.type&&this.$router.push("/data/viewerList/"+t.id+"?type=all")},inCountdownClick:function(t){console.log(t),"cancel"===t.action?this.inCountdown=!1:"confirm"===t.action&&(this.inCountdown=!0,this.judgePublish())},getBrowserInfo:function(){var t={},e=navigator.userAgent.toLowerCase().match(/(msie|firefox|chrome|opera|version).*?([\d.]+)/);return t.browser=e[1].replace(/version/,"'safari"),t.ver=e[2],t},downChrome:function(t){this.browserHelpShow=!1,window.open(t)},judgePublish:function(){var t=this;this.isPublished?(this.inCountdown=!1,"chrome"!==this.getBrowserInfo().browser?this.browserHelpShow=!0:window.open("_blank").location=this.PC_HOST+"master/"+this.jumpId):(this.inCountdown=!1,this.$messageBox({header:"提示",width:"400px",content:"进入直播后，您的活动官网和观看引导页将正式对外发布，是否继续执行？",cancelText:"暂不开播",confirmText:"确认开播",handleClick:function(e){if(console.log(e),"cancel"===e.action);else if("confirm"===e.action){window.open("_blank").location=t.PC_HOST+"master/"+t.jumpId,t.publish(t.jumpId)}}}))},isToday:function(t){return new Date(t).toDateString()===(new Date).toDateString()?(console.log("当天"),!1):(console.log("非当天"),!0)},isOverdue:function(t){return null!==t&&(new Date).getTime()-new Date(t).getTime()>1728e5},getDetails:function(t){var e=this;return c()(l.a.mark(function a(){return l.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.$get(u.a.GET_HOSTING,{activityId:e.jumpId}).then(function(t){e.hostOnline=t.data.hostOnline});case 2:if(!e.hostOnline){a.next=5;break}return e.$toast({content:"暂不支持这种方式发起直播"}),a.abrupt("return",!1);case 5:e.$get(u.a.GET_DETAILS,{activityId:t}).then(function(t){e.isToday(t.data.activity.startTime)?e.inCountdown=!0:e.judgePublish()});case 6:case"end":return a.stop()}},a,e)}))()},changePage:function(t){this.searchParams.page=t},searchEnter:function(){this.isSearch=!0,this.queryList()},createLive:function(){this.$router.push("/liveMager/create")},deleteLive:function(t){var e=this;this.$post(u.a.POST_DEL_ACTIVITY,{id:t}).then(function(t){e.queryList()})},queryList:function(){var t=this;this.$config().$get(u.a.GET_ACTIVITY_LIST,n()(this.searchParams,{page:1})).then(function(e){e.data.list.map(function(e,a){return e.imgUrl&&(e.imgUrl=t.$imgHost+"/"+e.imgUrl),e}),t.tableList=e.data.list,t.endRequset=!0,t.total=e.data.total})},publish:function(t){var e=this;this.$config().$post(u.a.POST_PUBLISH_ACTIVITE,{activityId:t}).then(function(t){e.$toast({content:"活动发布成功"})})},statusChange:function(t){this.isSearch=!0}}},x=(a(748),a(749),Object(f.a)(P,i,[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"empty-box empty-search"},[e("p",{staticClass:"img"}),this._v(" "),e("p",{staticClass:"title"},[this._v("很抱歉，没有找到搜索结果")])])}],!1,null,"6f9d3f66",null));x.options.__file="src/pages/live-mager/index.vue";e.default=x.exports},560:function(t,e,a){},561:function(t,e,a){},563:function(t,e,a){},564:function(t,e,a){},745:function(t,e,a){"use strict";var i=a(560);a.n(i).a},746:function(t,e,a){"use strict";var i=a(561);a.n(i).a},748:function(t,e,a){"use strict";var i=a(563);a.n(i).a},749:function(t,e,a){"use strict";var i=a(564);a.n(i).a}}]);
//# sourceMappingURL=5.4945793a.js.map