(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{515:function(e,a,t){"use strict";t.r(a);var s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"data-box search-box"},[t("div",{staticClass:"search-total"},[t("button",{staticClass:"default-button export-btn fl",on:{click:e.exportData}},[e._v("导出")]),e._v(" "),t("div",{staticClass:"search-item fr"},[t("com-input",{staticClass:"search-com",staticStyle:{width:"220px"},attrs:{type:"search",value:e.searchParams.keyword,maxLength:30,placeholder:"输入姓名/手机号/邮箱"},on:{"update:value":function(a){e.$set(e.searchParams,"keyword",a)}},nativeOn:{keyup:function(a){return"button"in a||!e._k(a.keyCode,"enter",13,a.key,"Enter")?e.searchEnter(a):null}}}),e._v(" "),t("span",{staticClass:"data-link",staticStyle:{"font-size":"14px","margin-left":"6px"},on:{click:function(a){e.isHigh=!e.isHigh}}},[e._v("高级筛选\n      "),t("i",{class:{iconfont:!0,"icon-Up":!0,"icon-down":!e.isHigh}})])],1)]),e._v(" "),e.isHigh?t("div",{staticClass:"data-pad"},[t("div",{staticClass:"search-item"},[t("span",{staticClass:"search-title"},[e._v("关键词搜索")]),e._v(" "),t("com-input",{staticClass:"search-com",staticStyle:{width:"220px"},attrs:{type:"search",value:e.searchParams.keyword,maxLength:30,placeholder:"输入姓名/手机号/邮箱"},on:{"update:value":function(a){e.$set(e.searchParams,"keyword",a)}},nativeOn:{keyup:function(a){return"button"in a||!e._k(a.keyCode,"enter",13,a.key,"Enter")?e.searchEnter(a):null}}})],1),e._v(" "),t("br"),e._v(" "),t("div",{staticClass:"search-item flm"},[t("span",{staticClass:"search-title"},[e._v("用户级别")]),e._v(" "),t("el-select",{model:{value:e.searchParams.user_level,callback:function(a){e.$set(e.searchParams,"user_level",a)},expression:"searchParams.user_level"}},e._l(e.watcherTypeList,function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),t("div",{staticClass:"search-item flm"},[t("span",{staticClass:"search-title"},[e._v("本次得分")]),e._v(" "),t("el-select",{attrs:{placeholder:"本次得分"},model:{value:e.searchParams.score,callback:function(a){e.$set(e.searchParams,"score",a)},expression:"searchParams.score"}},e._l(e.scoreTypeList,function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),t("div",{staticClass:"search-item flm"},[t("span",{staticClass:"search-title"},[e._v("新老用户")]),e._v(" "),t("el-select",{model:{value:e.searchParams.is_new,callback:function(a){e.$set(e.searchParams,"is_new",a)},expression:"searchParams.is_new"}},e._l(e.userTypeList,function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),t("div",{staticClass:"search-item flm"},[t("span",{staticClass:"search-title"},[e._v("用户性别")]),e._v(" "),t("el-select",{attrs:{placeholder:"用户性别"},model:{value:e.searchParams.sex,callback:function(a){e.$set(e.searchParams,"sex",a)},expression:"searchParams.sex"}},e._l(e.genderList,function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),t("div",{staticClass:"search-item flm"},[t("span",{staticClass:"search-title"},[e._v("渠道来源")]),e._v(" "),t("el-select",{attrs:{placeholder:"渠道来源"},model:{value:e.searchParams.source,callback:function(a){e.$set(e.searchParams,"source",a)},expression:"searchParams.source"}},e._l(e.sourceList,function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),t("div",{staticClass:"search-item flm"},[t("span",{staticClass:"search-title"},[e._v("观看设备")]),e._v(" "),t("el-select",{attrs:{placeholder:"观看设备"},model:{value:e.searchParams.device,callback:function(a){e.$set(e.searchParams,"device",a)},expression:"searchParams.device"}},e._l(e.deviceList,function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),t("div",{staticClass:"search-item flm"},[t("span",{staticClass:"search-title"},[e._v("所属地域")]),e._v(" "),t("el-cascader",{attrs:{options:e.options},on:{change:e.handleAreaChange},model:{value:e.citySelect,callback:function(a){e.citySelect=a},expression:"citySelect"}})],1),e._v(" "),t("div",{staticClass:"search-item flm"},[t("span",{staticClass:"search-title"},[e._v("观看类型")]),e._v(" "),t("el-select",{attrs:{placeholder:"观看类型"},model:{value:e.searchParams.type,callback:function(a){e.$set(e.searchParams,"type",a)},expression:"searchParams.type"}},e._l(e.watcherList,function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),t("div",{staticClass:"search-item flm"},[t("span",{staticClass:"search-title"},[e._v("观众出入时段")]),e._v(" "),t("el-date-picker",{attrs:{format:"yyyy-MM-dd HH:mm","value-format":"yyyy-MM-dd HH:mm",type:"datetimerange","range-separator":"至","default-time":["00:00:00","23:59:59"],"start-placeholder":"输入进入时间","end-placeholder":"输入离开时间"},model:{value:e.enterOutTime,callback:function(a){e.enterOutTime=a},expression:"enterOutTime"}})],1),e._v(" "),t("div",{staticClass:"search-btns"},[t("button",{staticClass:"primary-button",on:{click:e.searchEnter}},[e._v("查询")]),e._v(" "),t("button",{staticClass:"default-button",on:{click:e.cancelClick}},[e._v("重置")])])]):e._e(),e._v(" "),t("div",{staticClass:"table-list-box data-pad"},[t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.viewerList,"default-sort":{prop:"score",order:"descending"}}},[t("el-table-column",{attrs:{label:"姓名"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("div",{staticClass:"user-info"},[a.row.avatar?t("span",{staticClass:"user-avatar",style:{backgroundImage:"url("+e.$imgHost+"/"+a.row.avatar+")"}}):t("span",{staticClass:"user-avatar"}),e._v(" "),t("div",[t("span",{attrs:{title:a.row.nickname}},[e._v(e._s(a.row.nickname?a.row.nickname:"无")+"　"+e._s(a.row.sex?"M"==a.row.sex?"男":"女":""))]),e._v(" "),t("span",{class:{level4:4==a.row.end_user_level,level3:3==a.row.end_user_level,level2:2==a.row.end_user_level,level1:1==a.row.end_user_level}},[e._v(e._s(e._f("fmtUserLevel")(a.row.end_user_level)))])])])]}}])}),e._v(" "),t("el-table-column",{attrs:{prop:"score",sortable:"",label:"本次得分"}}),e._v(" "),t("el-table-column",{attrs:{label:"手机号"},scopedSlots:e._u([{key:"default",fn:function(a){return[e._v("\n          "+e._s(e._f("isEmpty")(a.row.phone))+"\n        ")]}}])}),e._v(" "),t("el-table-column",{attrs:{label:"邮箱"},scopedSlots:e._u([{key:"default",fn:function(a){return[e._v("\n          "+e._s(e._f("isEmpty")(a.row.email))+"\n        ")]}}])}),e._v(" "),t("el-table-column",{attrs:{label:"参会时间(首次)"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("span",{attrs:{title:a.row.first_join_at&&a.row.first_join_at.substring(0,16)}},[e._v(e._s(a.row.first_join_at&&a.row.first_join_at.substring(0,16)))])]}}])}),e._v(" "),t("el-table-column",{attrs:{label:"观看时长"},scopedSlots:e._u([{key:"default",fn:function(a){return[e._v("\n          "+e._s(e._f("fmtTime")(a.row.watch_time))+"\n        ")]}}])}),e._v(" "),t("el-table-column",{attrs:{label:"渠道来源"},scopedSlots:e._u([{key:"default",fn:function(a){return[e._v("\n          "+e._s(e._f("fmtSource")(a.row.source))+"\n        ")]}}])})],1),e._v(" "),e.total>e.searchParams.pageSize?t("div",{staticClass:"page-pagination"},[t("ve-pagination",{attrs:{total:e.total,pageSize:e.searchParams.pageSize},on:{changePage:e.changePage}})],1):e._e()],1)])};s._withStripped=!0;var l=t(30),r=t.n(l),i=t(530),c=t(536),n=t(97),o=t(15),u=t(731),v=t(732),h=t(63),d={name:"viewerList",components:{VePagination:i.a},data:function(){return{isHigh:!1,enterOutTime:[],total:0,viewerList:[],searchParams:{activityId:"",keyword:"",sex:"",user_level:"",is_new:"",provinceId:"",province:"",cityId:"",city:"",source:"",first_join_at:"",last_leave_at:"",device:"",score:"",type:"",page:1,pageSize:10},citySelect:[],genderList:[{value:"",label:"全部"},{value:"M",label:"男"},{value:"W",label:"女"}],watcherList:[{value:"",label:"全部"},{value:"live",label:"直播"},{value:"replay",label:"回放"}],watcherTypeList:[{value:"",label:"全部用户"},{value:1,label:"优质用户"},{value:2,label:"高价值用户"},{value:3,label:"一般用户"},{value:4,label:"潜力用户"},{value:5,label:"流失用户"}],options:[],sourceList:[{value:"",label:"全部"},{value:"IMPORT",label:"导入"},{value:"MOBILE",label:"手机注册"},{value:"PC",label:"PC注册"}],deviceList:[{value:"",label:"全部"},{value:"PC",label:"电脑"},{value:"MOBILE",label:"手机"}],scoreTypeList:[{value:"",label:"全部"},{value:1,label:"100>得分>90"},{value:2,label:"90>得分>80"},{value:3,label:"80>得分>60"},{value:4,label:"60>得分"}],userTypeList:[{value:"",label:"全部"},{value:0,label:"老用户"},{value:1,label:"新用户"}]}},filters:{fmtTime:function(e){return((e/3600>>0)+"").padStart(2,0)+":"+((e/60%60>>0)+"").padStart(2,0)+":"+((e%60>>0)+"").padStart(2,0)},fmtUserLevel:function(e){return{0:"没有评级",1:"优质用户",2:"高价值用户",3:"一般用户",4:"潜力用户",5:"流失用户"}[e]},fmtSource:function(e){return{"":"没有来源",IMPORT:"导入",MOBILE:"手机注册",PC:"PC注册"}[e]}},watch:{enterOutTime:function(e){if(!e)return this.searchParams.first_join_at="",void(this.searchParams.last_leave_at="");this.searchParams.first_join_at=e[0],this.searchParams.last_leave_at=e[1]}},created:function(){this.storeSelectMenu(!1),this.searchParams.activityId=this.$route.params.id,this.dealSearchParam(),this.queryList(),this.dealWithCity(),h.a.$emit("breads",[{title:"活动管理"},{title:"活动列表",url:"/liveMager/list"},{title:"活动详情",url:"/liveMager/detail/"+this.$route.params.id},{title:"观众",url:"/data/viewer/"+this.$route.params.id}])},methods:r()({},Object(n.b)("dataCenter",{storeSelectMenu:o.c}),{dealWithCity:function(){for(var e=[],a=0;a<u.length;a++){var t=u[a];e.push({value:t.value,label:t.label,children:v[t.value]})}this.options=e},handleAreaChange:function(e){if(this.searchParams.provinceId=e[0],this.searchParams.cityId=e[1],this.searchParams.provinceId){for(var a=0;a<u.length;a++)if(u[a].value===this.searchParams.provinceId){this.searchParams.province=u[a].label;break}for(var t=v[this.searchParams.provinceId],s=0;s<t.length;s++)if(t[s].value===this.searchParams.cityId){this.searchParams.city=t[s].label;break}}},dealSearchParam:function(){var e=this.$route.query.type;console.log(e),"old"===e?this.searchParams.is_new=0:"new"===e?this.searchParams.is_new=1:"high"===e?this.searchParams.user_level=1:"vip"===e?this.searchParams.user_level=2:"ord"===e?this.searchParams.user_level=3:"potent"===e?this.searchParams.user_level=4:"loss"===e&&(this.searchParams.user_level=5),"live"===e?this.searchParams.type="live":"replay"===e&&(this.searchParams.type="replay")},goPageDetail:function(e){this.$router.push("/userManage/info/"+e)},changePage:function(e){this.searchParams.page=e,this.queryList()},exportData:function(){var e="?";for(var a in this.searchParams)e+=a+"="+this.searchParams[a]+"&";e=e.substring(0,e.length-1);var t="/api"+c.a.GET_VIEWER_LIST_EXPORT+e;window.open(encodeURI(encodeURI(t)))},queryList:function(){var e=this;return this.$get(c.a.GET_VIEWER_LIST,r()({},this.searchParams)).then(function(a){200===a.code&&a.data&&(e.viewerList=a.data.list,e.total=a.data.total)})},searchEnter:function(){this.queryList()},cancelClick:function(){this.citySelect=[],this.enterOutTime=[],this.searchParams={activityId:this.searchParams.activityId,keyword:"",sex:"",user_level:"",is_new:"",province:"",city:"",source:"",first_join_at:"",last_leave_at:"",device:"",score:"",page:1,pageSize:10}}})},_=(t(911),t(912),t(1)),m=Object(_.a)(d,s,[],!1,null,"5d1403fe",null);m.options.__file="src/pages/data/viewerList.vue";a.default=m.exports},703:function(e,a,t){},704:function(e,a,t){},911:function(e,a,t){"use strict";var s=t(703);t.n(s).a},912:function(e,a,t){"use strict";var s=t(704);t.n(s).a}}]);
//# sourceMappingURL=49.2bcd05e3.js.map