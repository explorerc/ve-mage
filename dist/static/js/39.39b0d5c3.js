(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{515:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"pond-page"},[t._m(0),t._v(" "),i("div",{staticClass:"content from-box"},[i("div",{staticClass:"handle-bar"},[i("div",{staticClass:"left"},[i("el-dropdown",{on:{command:t.handleCommandk}},[i("span",{staticClass:"el-dropdown-link"},[i("el-button",{attrs:{round:"",disabled:t.multipleSelection.length<=0}},[t._v("批量操作")])],1),t._v(" "),i("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[i("el-dropdown-item",{attrs:{command:"addGroup",disabled:t.multipleSelection.length<=0}},[t._v("添加到群组")]),t._v(" "),i("el-dropdown-item",{attrs:{command:"del",disabled:t.multipleSelection.length<=0}},[t._v("删除")])],1)],1),t._v(" "),i("el-button",{attrs:{round:""},on:{click:function(e){t.exportAll()}}},[t._v("全部导出")]),t._v(" "),i("el-button",{attrs:{round:""},on:{click:function(e){t.showImport=!0}}},[t._v("批量导入")])],1),t._v(" "),i("div",{staticClass:"right"},[i("com-input",{attrs:{type:"search",value:t.filterCondition.keyword,placeholder:"姓名/昵称/手机号/邮箱"},on:{"update:value":function(e){t.$set(t.filterCondition,"keyword",e)},focus:function(e){t.showFilter=!1}},nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.filterSearch(e):null}}}),t._v(" "),i("span",{on:{click:function(e){t.showFilter=!t.showFilter}}},[t._v("精准搜索"),i("i",{staticClass:"el-submenu__icon-arrow el-icon-arrow-down",class:{"is-open":t.showFilter}})])],1)]),t._v(" "),t.showFilter?i("div",{staticClass:"handle-filter page-bg"},[i("div",{staticClass:"filter-item"},[i("div",{staticClass:"condition"},[i("span",{staticClass:"label"},[t._v("用户级别")]),t._v(" "),i("el-select",{staticStyle:{width:"216px"},attrs:{placeholder:"请选择"},model:{value:t.filterCondition.user_level,callback:function(e){t.$set(t.filterCondition,"user_level",e)},expression:"filterCondition.user_level"}},t._l(t.grands,function(t){return i("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))],1),t._v(" "),i("div",{staticClass:"condition"},[i("span",{staticClass:"label"},[t._v("来源")]),t._v(" "),i("el-select",{attrs:{placeholder:"请选择"},model:{value:t.filterCondition.source,callback:function(e){t.$set(t.filterCondition,"source",e)},expression:"filterCondition.source"}},t._l(t.sources,function(t){return i("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))],1),t._v(" "),i("div",{staticClass:"condition"},[i("span",{staticClass:"label"},[t._v("参与场次")]),t._v(" "),i("com-input",{attrs:{value:t.filterCondition.join_count,placeholder:"请输入至少参与活动的次数",type:"number"},on:{"update:value":function(e){t.$set(t.filterCondition,"join_count",e)}}})],1)]),t._v(" "),i("div",{staticClass:"filter-item"},[i("div",{staticClass:"condition area"},[i("span",{staticClass:"label"},[t._v("所属地域")]),t._v(" "),i("el-select",{staticStyle:{width:"100px"},attrs:{placeholder:"省份"},model:{value:t.provinceId,callback:function(e){t.provinceId=e},expression:"provinceId"}},t._l(t.provinceList,function(t){return i("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),t._v(" "),i("el-select",{staticStyle:{width:"112px"},attrs:{placeholder:"城市"},model:{value:t.cityId,callback:function(e){t.cityId=e},expression:"cityId"}},t._l(t.cityList,function(t){return i("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))],1),t._v(" "),i("div",{staticClass:"condition"},[i("span",{staticClass:"label"},[t._v("性别")]),t._v(" "),i("el-select",{attrs:{placeholder:"请选择"},model:{value:t.filterCondition.sex,callback:function(e){t.$set(t.filterCondition,"sex",e)},expression:"filterCondition.sex"}},t._l(t.sexs,function(t){return i("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))],1),t._v(" "),i("div",{staticClass:"condition"},[i("span",{staticClass:"label"},[t._v("所属行业")]),t._v(" "),i("el-select",{attrs:{placeholder:"请选择"},model:{value:t.filterCondition.industry,callback:function(e){t.$set(t.filterCondition,"industry",e)},expression:"filterCondition.industry"}},t._l(t.industrys,function(t){return i("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))],1)]),t._v(" "),i("div",{staticClass:"filter-item"},[i("div",{staticClass:"condition"},[i("span",{staticClass:"label"},[t._v("首次访问")]),t._v(" "),i("el-date-picker",{attrs:{clearable:!0,type:"datetimerange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期",editable:!1,"default-time":["00:00:00","23:59:59"],align:"left"},model:{value:t.firstVal,callback:function(e){t.firstVal=e},expression:"firstVal"}})],1),t._v(" "),i("div",{staticClass:"condition"},[i("span",{staticClass:"label"},[t._v("最后访问")]),t._v(" "),i("el-date-picker",{attrs:{clearable:!0,type:"datetimerange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期",editable:!1,"default-time":["00:00:00","23:59:59"],align:"left"},model:{value:t.lastVal,callback:function(e){t.lastVal=e},expression:"lastVal"}})],1)]),t._v(" "),i("div",{staticClass:"filter-item"},[i("span",{staticClass:"label"},[t._v("参与活动")]),t._v(" "),t.activityArray.name.length?i("div",{staticClass:"selected"},[i("ol",{staticClass:"tag-box"},[t._l(t.activityArray.name,function(e,a){return i("li",{key:a,staticClass:"tag"},[t._v(t._s(e)+" "),i("span",{staticClass:"close",on:{click:function(e){t.handleDel(a,"activityArray")}}})])}),t._v(" "),i("li",{staticClass:"added",on:{click:function(e){t.showChooseActive=!0}}})],2)]):i("el-button",{attrs:{round:""},on:{click:function(e){t.showChooseActive=!0}}},[t._v("选择活动")])],1),t._v(" "),i("div",{staticClass:"filter-item"},[i("span",{staticClass:"label"},[t._v("活动标签")]),t._v(" "),t.tagArray.name.length?i("div",{staticClass:"selected"},[i("ol",{staticClass:"tag-box"},[t._l(t.tagArray.name,function(e,a){return i("li",{key:a,staticClass:"tag"},[t._v(t._s(e)+" "),i("span",{staticClass:"close",on:{click:function(e){t.handleDel(a,"tagArray")}}})])}),t._v(" "),i("li",{staticClass:"added",on:{click:function(e){t.showChooseTag=!0}}})],2)]):i("el-button",{attrs:{round:""},on:{click:function(e){t.showChooseTag=!0}}},[t._v("选择标签")])],1),t._v(" "),i("div",{staticClass:"filter-item"},[i("span",{staticClass:"label"},[t._v("所属群组")]),t._v(" "),t.groupArray.name.length?i("div",{staticClass:"selected"},[i("ol",{staticClass:"tag-box"},[t._l(t.groupArray.name,function(e,a){return i("li",{key:a,staticClass:"tag"},[t._v(t._s(e)+" "),i("span",{staticClass:"close",on:{click:function(e){t.handleDel(a,"groupArray")}}})])}),t._v(" "),i("li",{staticClass:"added",on:{click:function(e){t.showChooseGroup=!0}}})],2)]):i("el-button",{attrs:{round:""},on:{click:function(e){t.showChooseGroup=!0}}},[t._v("选择分组")])],1),t._v(" "),i("div",{staticClass:"filter-confirm"},[i("el-button",{staticClass:"primary-button",attrs:{round:""},on:{click:t.doFilter}},[t._v("查询")]),t._v(" "),i("el-button",{attrs:{round:""},on:{click:t.reset}},[t._v("重置")])],1)]):t._e(),t._v(" "),i("div",{staticClass:"users-list page-bg table_box ",class:{"has-page":t.total>t.filterCondition.page_size}},[i("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.usersListData,"tooltip-effect":"dark"},on:{"selection-change":t.handleSelectionChange}},[i("el-table-column",{attrs:{type:"selection",width:"55"}}),t._v(" "),i("el-table-column",{attrs:{label:"用户信息",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("dl",{staticClass:"users-info clearfix"},[e.row.avatar.length?i("dt",[i("img",{staticClass:"img",attrs:{src:e.row.avatar}})]):i("dt",{staticClass:"avatar-empty"},[i("span",{staticClass:"img"})]),t._v(" "),i("dd",[i("span",{staticClass:"name"},[t._v(t._s(e.row.name))]),t._v(" "),i("span",{staticClass:"gender"},[t._v(t._s(e.row.gender))])]),t._v(" "),i("dd",{staticClass:"name",class:t._f("filterLevelclass")(e.row.level)},[t._v(t._s(t._f("filterLevel")(e.row.level)))])])]}}])}),t._v(" "),i("el-table-column",{attrs:{prop:"phone",label:"手机号",width:"140","show-overflow-tooltip":""}}),t._v(" "),i("el-table-column",{attrs:{prop:"mail",width:"180",label:"邮箱","show-overflow-tooltip":""}}),t._v(" "),i("el-table-column",{attrs:{prop:"count",label:"参与(次)",width:"90"}}),t._v(" "),i("el-table-column",{attrs:{prop:"lastActive",label:"最后活跃","show-overflow-tooltip":""}}),t._v(" "),i("el-table-column",{attrs:{prop:"comment",label:"备注","show-overflow-tooltip":""}}),t._v(" "),i("el-table-column",{attrs:{prop:"count",label:"操作",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("router-link",{attrs:{to:"/userManage/info/"+e.row.business_consumer_uid}},[i("el-button",{staticClass:"detail",attrs:{type:"text"}},[t._v("\n                详情\n              ")])],1)]}}])})],1),t._v(" "),i("div",{staticClass:"total"},[t._v("共 "),i("span",[t._v(t._s(t.total))]),t._v(" 条数据")]),t._v(" "),t.total>t.filterCondition.page_size?i("div",{staticClass:"pagination-box"},[i("div",{staticClass:"page-pagination"},[i("ve-pagination",{attrs:{total:t.total,pageSize:t.filterCondition.page_size,currentPage:t.currPage},on:{changePage:t.currentChange}})],1)]):t._e()],1)]),t._v(" "),t.showAddgroup?i("transition",{attrs:{name:"fade",mode:"out-in"}},[i("com-addgroup",{on:{handleClick:t.handleClick,groupData:t.groupData}})],1):t._e(),t._v(" "),t.showChooseActive?i("transition",{attrs:{name:"fade",mode:"out-in"}},[i("com-choose",{attrs:{checkedData:t.activityArray,max:10,name:"活动"},on:{handleClick:t.handleClick,selectComConfirm:t.selectActiveConfirm,searchHandler:t.searchHandler}})],1):t._e(),t._v(" "),t.showChooseTag?i("transition",{attrs:{name:"fade",mode:"out-in"}},[i("com-choose",{attrs:{checkedData:t.tagArray,max:10,name:"标签"},on:{handleClick:t.handleClick,selectComConfirm:t.selectTagConfirm,searchHandler:t.searchHandler}})],1):t._e(),t._v(" "),t.showChooseGroup?i("transition",{attrs:{name:"fade",mode:"out-in"}},[i("com-choose",{attrs:{checkedData:t.groupArray,max:10,name:"固定群组"},on:{handleClick:t.handleClick,selectComConfirm:t.selectGroupConfirm,searchHandler:t.searchHandler}})],1):t._e(),t._v(" "),t.showImport?i("transition",{attrs:{name:"fade",mode:"out-in"}},[i("com-import",{on:{handleClick:t.handleClickImport}})],1):t._e()],1)};a._withStripped=!0;var s=i(100),l=i.n(s),o=i(144),n=i.n(o),r=i(737),c=i(722),d=i(530),u=i(738),v=i(532),h=i(732),p=i(733),f=i(63),_={data:function(){return{filterVal:"",showFilter:!1,grands:[{value:"",label:"全部"},{value:1,label:"优质用户"},{value:2,label:"高价值用户"},{value:3,label:"一般用户"},{value:4,label:"潜力用户"},{value:5,label:"流失用户"},{value:0,label:"没有评级"}],sources:[{value:"",label:"全部"},{value:"IMPORT",label:"导入"},{value:"WAP",label:"手机注册"},{value:"PC",label:"PC注册"}],sourcesVal:"",sexs:[{value:"",label:"全部"},{value:"M",label:"男"},{value:"W",label:"女"}],sexsVal:"",industrys:[{value:"",label:"全部"},{value:"IT/互联网",label:"IT/互联网"},{value:"电子/通信/硬件",label:"电子/通信/硬件"},{value:"金融",label:"金融"},{value:"交通/贸易/物流",label:"交通/贸易/物流"},{value:"消费品",label:"消费品"},{value:"机械/制造",label:"机械/制造"},{value:"能源/矿产环保",label:"能源/矿产环保"},{value:"制药/医疗",label:"制药/医疗"},{value:"专业服务",label:"专业服务"},{value:"教育/培训",label:"教育/培训"},{value:"广告/媒体/娱乐/出版",label:"广告/媒体/娱乐/出版"},{value:"房地产/建筑",label:"房地产/建筑"},{value:"服务业",label:"服务业"},{value:"政府/非盈利机构/其它",label:"政府/非盈利机构/其它"}],industrysVal:"",provinceList:[{value:"",label:"全部"}].concat(n()(h)),cityList:[{value:"",label:"全部"}],firstVal:"",lastVal:"",activityArray:{id:[],name:[]},tagArray:{id:[],name:[]},groupArray:{id:[],name:[]},usersListData:[],multipleSelection:[],checkedArr:[],total:0,currPage:1,showAddgroup:!1,showChooseActive:!1,showChooseTag:!1,showChooseGroup:!1,showImport:!1,chooseType:"活动",provinceId:"",cityId:"",filterCondition:{keyword:"",user_level:"",first_visited_at_start:"",first_visited_at_end:"",last_visited_at_start:"",last_visited_at_end:"",sex:"",province:"",city:"",industry:"",join_count:"",source:"",activity_ids:"",tags:"",groups:"",page:1,page_size:100},exportStr:"",imgHost:"//test-zhike.oss-cn-beijing.aliyuncs.com/"}},created:function(){f.a.$emit("breads",[{title:"用户管理"},{title:"用户池"}])},mounted:function(){this.queryUserPool(this.filterCondition)},filters:{filterLevel:function(t){switch(t){case 1:return"优质用户";case 2:return"高价值用户";case 3:return"一般用户";case 4:return"潜力用户";case 5:return"流失用户";case 0:return"没有评级"}},filterLevelclass:function(t){switch(t){case 1:return"high";case 2:return"good";case 3:return"common";case 4:return"protential";case 5:case 0:return""}}},methods:{handleSelectionChange:function(t){this.multipleSelection=t},currentChange:function(t){l()(this.filterCondition,{page:t}),this.queryUserPool(this.filterCondition)},handleDel:function(t,e){this[e].name.splice(t,1),this[e].id.splice(t,1)},handleClick:function(t){"cancel"===t.action&&(this.showAddgroup=!1,this.showChooseActive=!1,this.showChooseTag=!1,this.showChooseGroup=!1)},handleClickImport:function(t){var e=this;this.showImport=!1,"cancel"===t.action&&(this.filterCondition.keyword="",setTimeout(function(){e.queryUserPool("search")},500))},selectActiveConfirm:function(t){console.log(t),this.activityArray.name=t.name,this.activityArray.id=t.id},selectTagConfirm:function(t){console.log(t),this.tagArray.name=t.name,this.tagArray.id=t.id},selectGroupConfirm:function(t){console.log(t),this.groupArray.name=t.name,this.groupArray.id=t.id},searchHandler:function(t){console.log(t)},filterSearch:function(){console.log("search"),this.showFilter=!1,this.queryUserPool("search")},groupData:function(t){var e=t;l()(e,{business_consumer_uids:this.checkedArr.toString()}),console.log(e),this.addGroup(e)},addGroup:function(t){var e=this;this.$post(v.a.POST_ADD_TO_GROUP,t).then(function(t){e.showAddgroup=!1,e.$toast({content:"导入成功",position:"center"}),e.checkedArr=[],e.$refs.multipleTable.clearSelection()})},delUsers:function(){var t=this,e={},i=[];l()(e,{business_consumer_uids:this.checkedArr.toString()}),this.usersListData.forEach(function(e,a){-1===t.checkedArr.indexOf(e.business_consumer_uid)&&i.push(e)}),this.usersListData=i,this.$post(v.a.POST_DEL_USERS,e).then(function(e){t.$toast({content:"删除成功",position:"center"}),setTimeout(function(e){t.queryTotal(t.filterCondition)},1e3)})},queryUserPool:function(t){var e=this;l()(t,{activity_ids:this.activityArray.id.toString(),groups:this.groupArray.id.toString(),tags:this.tagArray.id.toString()}),"全部"===t.city&&(t.city=""),"全部"===t.province&&(t.province=""),"search"===t&&(t={keyword:this.filterCondition.keyword,page:1,page_size:100}),console.log(t),this.$get(v.a.GET_USERS_POOL,t).then(function(t){var i=[];console.log(t),e.total=t.data.count,e.currPage=t.data.page,t.data.list.forEach(function(t){i.push({business_consumer_uid:t.business_consumer_uid,avatar:t.avatar?e.$imgHost+"/"+t.avatar:"",name:t.real_name.length>0?t.real_name.length<=5?t.real_name:t.real_name.substr(0,5)+"...":t.nickname.length<=5?t.nickname:t.nickname.substr(0,5)+"...",gender:t.sex?"M"===t.sex?"男":"女":"未知",phone:t.phone,mail:t.email,lastActive:t.last_visited_at,comment:t.remark,level:t.user_level,count:t.join_count})}),e.usersListData=i})},queryTotal:function(t){var e=this;l()(t,{activity_ids:this.activityArray.id.toString(),groups:this.groupArray.id.toString(),tags:this.tagArray.id.toString()}),"全部"===t.city&&(t.city=""),"全部"===t.province&&(t.province=""),"search"===t&&(t={keyword:this.filterCondition.keyword,page:1,page_size:100}),this.$get(v.a.GET_USERS_POOL,t).then(function(t){e.total=t.data.count})},doFilter:function(){this.queryUserPool(this.filterCondition)},handleCommandk:function(t){var e=this;switch(t){case"addGroup":this.showAddgroup=!0;break;case"export":break;case"del":this.$messageBox({header:"提示",width:"400px",content:"删除用户后将无法恢复,是否确定删除该用户？",cancelText:"否",confirmText:"是",handleClick:function(t){"confirm"===t.action&&e.delUsers()}})}},exportAll:function(){for(var t in l()(this.filterCondition,{activity_ids:this.activityArray.id.toString(),groups:this.groupArray.id.toString(),tags:this.tagArray.id.toString()}),this.exportStr="","全部"===this.filterCondition.city&&(this.filterCondition.city=""),"全部"===this.filterCondition.province&&(this.filterCondition.province=""),this.filterCondition)if(this.filterCondition.hasOwnProperty(t)){var e=this.filterCondition[t];""!==e&&"page"!==t&&"page_size"!==t&&(this.exportStr+="?"+t+"="+e)}window.location.href="/api/user/customer/export"+this.exportStr},reset:function(){this.groupArray.id=[],this.groupArray.name=[],this.tagArray.id=[],this.tagArray.name=[],this.activityArray.id=[],this.activityArray.name=[],this.firstVal=[],this.lastVal=[],this.cityId="",this.provinceId="";var t=this.filterCondition;for(var e in t)"page"!==e&&"page_size"!==e&&(t[e]="")}},watch:{firstVal:{handler:function(t){null===t?(this.filterCondition.first_visited_at_start="",this.filterCondition.first_visited_at_end=""):(this.filterCondition.first_visited_at_start=t[0],this.filterCondition.first_visited_at_end=t[1])}},lastVal:{handler:function(t){null===t?(this.filterCondition.last_visited_at_start="",this.filterCondition.last_visited_at_end=""):(this.filterCondition.last_visited_at_start=t[0],this.filterCondition.last_visited_at_end=t[1])}},multipleSelection:{handler:function(t){var e=[];t.forEach(function(t){e.push(t.business_consumer_uid)}),this.checkedArr=e}},provinceId:function(t){if(t){for(var e=0;e<h.length;e++)if(h[e].value===t){this.filterCondition.province=h[e].label;break}this.cityList=[{value:"",label:"全部"}].concat(n()(p[t])),this.filterCondition.city="",this.cityId=""}},cityId:function(t){for(var e=0;e<this.cityList.length;e++)if(this.cityList[e].value===t){this.filterCondition.city=this.cityList[e].label;break}}},components:{VePagination:d.a,comAddgroup:c.a,comChoose:r.a,comImport:u.a}},m=(i(885),i(1)),C=Object(m.a)(_,a,[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"pond-title"},[e("span",{staticClass:"title"},[this._v("用户池")])])}],!1,null,"728f1d49",null);C.options.__file="src/pages/users-manage/pond/index.vue";e.default=C.exports},676:function(t,e,i){},885:function(t,e,i){"use strict";var a=i(676);i.n(a).a}}]);
//# sourceMappingURL=39.39b0d5c3.js.map