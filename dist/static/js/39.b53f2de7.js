(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{495:function(t,e,a){"use strict";a.r(e);var i=a(100),l=a.n(i),s=a(144),o=a.n(s),n=a(732),r=a(716),c=a(530),d=a(736),u=a(532),v=a(729),h=a(730),p=a(63),f={data:function(){return{filterVal:"",showFilter:!1,grands:[{value:"",label:"全部"},{value:1,label:"优质用户"},{value:2,label:"高价值用户"},{value:3,label:"一般用户"},{value:4,label:"潜力用户"},{value:5,label:"流失用户"},{value:0,label:"没有评级"}],sources:[{value:"",label:"全部"},{value:"IMPORT",label:"导入"},{value:"WAP",label:"手机注册"},{value:"PC",label:"PC注册"}],sourcesVal:"",sexs:[{value:"",label:"全部"},{value:"M",label:"男"},{value:"W",label:"女"}],sexsVal:"",industrys:[{value:"",label:"全部"},{value:"IT/互联网",label:"IT/互联网"},{value:"电子/通信/硬件",label:"电子/通信/硬件"},{value:"金融",label:"金融"},{value:"交通/贸易/物流",label:"交通/贸易/物流"},{value:"消费品",label:"消费品"},{value:"机械/制造",label:"机械/制造"},{value:"能源/矿产环保",label:"能源/矿产环保"},{value:"制药/医疗",label:"制药/医疗"},{value:"专业服务",label:"专业服务"},{value:"教育/培训",label:"教育/培训"},{value:"广告/媒体/娱乐/出版",label:"广告/媒体/娱乐/出版"},{value:"房地产/建筑",label:"房地产/建筑"},{value:"服务业",label:"服务业"},{value:"政府/非盈利机构/其它",label:"政府/非盈利机构/其它"}],industrysVal:"",provinceList:[{value:"",label:"全部"}].concat(o()(v)),cityList:[{value:"",label:"全部"}],firstVal:"",lastVal:"",activityArray:{id:[],name:[]},tagArray:{id:[],name:[]},groupArray:{id:[],name:[]},usersListData:[],multipleSelection:[],checkedArr:[],total:0,currPage:1,showAddgroup:!1,showChooseActive:!1,showChooseTag:!1,showChooseGroup:!1,showImport:!1,chooseType:"活动",provinceId:"",cityId:"",filterCondition:{keyword:"",user_level:"",first_visited_at_start:"",first_visited_at_end:"",last_visited_at_start:"",last_visited_at_end:"",sex:"",province:"",city:"",industry:"",join_count:"",source:"",activity_ids:"",tags:"",groups:"",page:1,page_size:100},exportStr:"",imgHost:"//static.vhallyun.com/"}},created:function(){p.a.$emit("breads",[{title:"用户管理"},{title:"用户池"}])},mounted:function(){this.queryUserPool(this.filterCondition)},filters:{filterLevel:function(t){switch(t){case 1:return"优质用户";case 2:return"高价值用户";case 3:return"一般用户";case 4:return"潜力用户";case 5:return"流失用户";case 0:return"没有评级"}},filterLevelclass:function(t){switch(t){case 1:return"high";case 2:return"good";case 3:return"common";case 4:return"protential";case 5:case 0:return""}}},methods:{handleSelectionChange:function(t){this.multipleSelection=t},currentChange:function(t){l()(this.filterCondition,{page:t}),this.queryUserPool(this.filterCondition)},handleDel:function(t,e){this[e].name.splice(t,1),this[e].id.splice(t,1)},handleClick:function(t){"cancel"===t.action&&(this.showAddgroup=!1,this.showChooseActive=!1,this.showChooseTag=!1,this.showChooseGroup=!1)},handleClickImport:function(t){var e=this;this.showImport=!1,"cancel"===t.action&&(this.filterCondition.keyword="",setTimeout(function(){e.queryUserPool("search")},500))},selectActiveConfirm:function(t){console.log(t),this.activityArray.name=t.name,this.activityArray.id=t.id},selectTagConfirm:function(t){console.log(t),this.tagArray.name=t.name,this.tagArray.id=t.id},selectGroupConfirm:function(t){console.log(t),this.groupArray.name=t.name,this.groupArray.id=t.id},searchHandler:function(t){console.log(t)},filterSearch:function(){console.log("search"),this.queryUserPool("search")},groupData:function(t){var e=t;l()(e,{business_consumer_uids:this.checkedArr.toString()}),console.log(e),this.addGroup(e)},addGroup:function(t){var e=this;this.$post(u.a.POST_ADD_TO_GROUP,t).then(function(t){e.showAddgroup=!1,e.$toast({content:"导入成功",position:"center"}),e.checkedArr=[],e.$refs.multipleTable.clearSelection()})},delUsers:function(){var t=this,e={},a=[];l()(e,{business_consumer_uids:this.checkedArr.toString()}),this.usersListData.forEach(function(e,i){-1===t.checkedArr.indexOf(e.business_consumer_uid)&&a.push(e)}),this.usersListData=a,this.$post(u.a.POST_DEL_USERS,e).then(function(e){t.$toast({content:"删除成功",position:"center"})})},queryUserPool:function(t){var e=this;l()(t,{activity_ids:this.activityArray.id.toString(),groups:this.groupArray.id.toString(),tags:this.tagArray.id.toString()}),"全部"===t.city&&(t.city=""),"全部"===t.province&&(t.province=""),"search"===t&&(t={keyword:this.filterCondition.keyword,page:1,page_size:100}),console.log(t),this.$get(u.a.GET_USERS_POOL,t).then(function(t){var a=[];console.log(t),e.total=t.data.count,e.currPage=t.data.page,t.data.list.forEach(function(t){a.push({business_consumer_uid:t.business_consumer_uid,avatar:t.avatar?e.$imgHost+"/"+t.avatar:"",name:t.real_name.length>0?t.real_name.length<=5?t.real_name:t.real_name.substr(0,5)+"...":t.nickname.length<=5?t.nickname:t.nickname.substr(0,5)+"...",gender:t.sex?"M"===t.sex?"男":"女":"未知",phone:t.phone,mail:t.email,lastActive:t.last_visited_at,comment:t.remark,level:t.user_level,count:t.join_count})}),e.usersListData=a})},doFilter:function(){this.queryUserPool(this.filterCondition)},handleCommandk:function(t){var e=this;switch(t){case"addGroup":this.showAddgroup=!0;break;case"export":break;case"del":this.$messageBox({header:"提示",width:"400px",content:"删除用户后将无法恢复,是否确定删除该用户？",cancelText:"否",confirmText:"是",handleClick:function(t){"confirm"===t.action&&e.delUsers()}})}},exportAll:function(){for(var t in l()(this.filterCondition,{activity_ids:this.activityArray.id.toString(),groups:this.groupArray.id.toString(),tags:this.tagArray.id.toString()}),this.exportStr="","全部"===this.filterCondition.city&&(this.filterCondition.city=""),"全部"===this.filterCondition.province&&(this.filterCondition.province=""),this.filterCondition)if(this.filterCondition.hasOwnProperty(t)){var e=this.filterCondition[t];""!==e&&"page"!==t&&"page_size"!==t&&(this.exportStr+="?"+t+"="+e)}window.location.href="/api/user/customer/export"+this.exportStr},reset:function(){this.groupArray.id=[],this.groupArray.name=[],this.tagArray.id=[],this.tagArray.name=[],this.activityArray.id=[],this.activityArray.name=[],this.firstVal=[],this.lastVal=[],this.cityId="",this.provinceId="";var t=this.filterCondition;for(var e in t)"page"!==e&&"page_size"!==e&&(t[e]="")}},watch:{firstVal:{handler:function(t){null===t?(this.filterCondition.first_visited_at_start="",this.filterCondition.first_visited_at_end=""):(this.filterCondition.first_visited_at_start=t[0],this.filterCondition.first_visited_at_end=t[1])}},lastVal:{handler:function(t){null===t?(this.filterCondition.last_visited_at_start="",this.filterCondition.last_visited_at_end=""):(this.filterCondition.last_visited_at_start=t[0],this.filterCondition.last_visited_at_end=t[1])}},multipleSelection:{handler:function(t){var e=[];t.forEach(function(t){e.push(t.business_consumer_uid)}),this.checkedArr=e}},provinceId:function(t){if(t){for(var e=0;e<v.length;e++)if(v[e].value===t){this.filterCondition.province=v[e].label;break}this.cityList=[{value:"",label:"全部"}].concat(o()(h[t])),this.filterCondition.city="",this.cityId=""}},cityId:function(t){for(var e=0;e<this.cityList.length;e++)if(this.cityList[e].value===t){this.filterCondition.city=this.cityList[e].label;break}}},components:{VePagination:c.a,comAddgroup:r.a,comChoose:n.a,comImport:d.a}},_=(a(882),a(1)),m=Object(_.a)(f,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pond-page"},[t._m(0),t._v(" "),a("div",{staticClass:"content from-box"},[a("div",{staticClass:"handle-bar"},[a("div",{staticClass:"left"},[a("el-dropdown",{on:{command:t.handleCommandk}},[a("span",{staticClass:"el-dropdown-link"},[a("el-button",{attrs:{round:"",disabled:t.multipleSelection.length<=0}},[t._v("批量操作")])],1),t._v(" "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{attrs:{command:"addGroup",disabled:t.multipleSelection.length<=0}},[t._v("添加到群组")]),t._v(" "),a("el-dropdown-item",{attrs:{command:"del",disabled:t.multipleSelection.length<=0}},[t._v("删除")])],1)],1),t._v(" "),a("el-button",{attrs:{round:""},on:{click:function(e){t.exportAll()}}},[t._v("全部导出")]),t._v(" "),a("el-button",{attrs:{round:""},on:{click:function(e){t.showImport=!0}}},[t._v("批量导入")])],1),t._v(" "),a("div",{staticClass:"right"},[a("com-input",{attrs:{value:t.filterCondition.keyword,placeholder:"姓名/昵称/手机号/邮箱"},on:{"update:value":function(e){t.$set(t.filterCondition,"keyword",e)}},nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.filterSearch(e):null}}}),t._v(" "),a("span",{on:{click:function(e){t.showFilter=!t.showFilter}}},[t._v("精准搜索"),a("i",{staticClass:"el-submenu__icon-arrow el-icon-arrow-down",class:{"is-open":t.showFilter}})])],1)]),t._v(" "),a("transition",{attrs:{name:"left-right",mode:"out-in"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.showFilter,expression:"showFilter"}],staticClass:"handle-filter page-bg"},[a("div",{staticClass:"filter-item"},[a("div",{staticClass:"condition"},[a("span",{staticClass:"label"},[t._v("用户级别")]),t._v(" "),a("el-select",{staticStyle:{width:"216px"},attrs:{placeholder:"请选择"},model:{value:t.filterCondition.user_level,callback:function(e){t.$set(t.filterCondition,"user_level",e)},expression:"filterCondition.user_level"}},t._l(t.grands,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))],1),t._v(" "),a("div",{staticClass:"condition"},[a("span",{staticClass:"label"},[t._v("来源")]),t._v(" "),a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.filterCondition.source,callback:function(e){t.$set(t.filterCondition,"source",e)},expression:"filterCondition.source"}},t._l(t.sources,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))],1),t._v(" "),a("div",{staticClass:"condition"},[a("span",{staticClass:"label"},[t._v("参与场次")]),t._v(" "),a("com-input",{attrs:{value:t.filterCondition.join_count,placeholder:"请输入至少参与活动的次数",type:"number"},on:{"update:value":function(e){t.$set(t.filterCondition,"join_count",e)}}})],1)]),t._v(" "),a("div",{staticClass:"filter-item"},[a("div",{staticClass:"condition area"},[a("span",{staticClass:"label"},[t._v("所属地域")]),t._v(" "),a("el-select",{staticStyle:{width:"100px"},attrs:{placeholder:"省份"},model:{value:t.provinceId,callback:function(e){t.provinceId=e},expression:"provinceId"}},t._l(t.provinceList,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),t._v(" "),a("el-select",{staticStyle:{width:"112px"},attrs:{placeholder:"城市"},model:{value:t.cityId,callback:function(e){t.cityId=e},expression:"cityId"}},t._l(t.cityList,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))],1),t._v(" "),a("div",{staticClass:"condition"},[a("span",{staticClass:"label"},[t._v("性别")]),t._v(" "),a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.filterCondition.sex,callback:function(e){t.$set(t.filterCondition,"sex",e)},expression:"filterCondition.sex"}},t._l(t.sexs,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))],1),t._v(" "),a("div",{staticClass:"condition"},[a("span",{staticClass:"label"},[t._v("所属行业")]),t._v(" "),a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.filterCondition.industry,callback:function(e){t.$set(t.filterCondition,"industry",e)},expression:"filterCondition.industry"}},t._l(t.industrys,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))],1)]),t._v(" "),a("div",{staticClass:"filter-item"},[a("div",{staticClass:"condition"},[a("span",{staticClass:"label"},[t._v("首次访问")]),t._v(" "),a("el-date-picker",{attrs:{clearable:!0,type:"datetimerange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期",editable:!1,"default-time":["00:00:00","23:59:59"],align:"left"},model:{value:t.firstVal,callback:function(e){t.firstVal=e},expression:"firstVal"}})],1),t._v(" "),a("div",{staticClass:"condition"},[a("span",{staticClass:"label"},[t._v("最后访问")]),t._v(" "),a("el-date-picker",{attrs:{clearable:!0,type:"datetimerange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期",editable:!1,"default-time":["00:00:00","23:59:59"],align:"left"},model:{value:t.lastVal,callback:function(e){t.lastVal=e},expression:"lastVal"}})],1)]),t._v(" "),a("div",{staticClass:"filter-item"},[a("span",{staticClass:"label"},[t._v("参与活动")]),t._v(" "),t.activityArray.name.length?a("div",{staticClass:"selected"},[a("ol",{staticClass:"tag-box"},[t._l(t.activityArray.name,function(e,i){return a("li",{key:i,staticClass:"tag"},[t._v(t._s(e)+" "),a("span",{staticClass:"close",on:{click:function(e){t.handleDel(i,"activityArray")}}})])}),t._v(" "),a("li",{staticClass:"added",on:{click:function(e){t.showChooseActive=!0}}})],2)]):a("el-button",{attrs:{round:""},on:{click:function(e){t.showChooseActive=!0}}},[t._v("选择活动")])],1),t._v(" "),a("div",{staticClass:"filter-item"},[a("span",{staticClass:"label"},[t._v("活动标签")]),t._v(" "),t.tagArray.name.length?a("div",{staticClass:"selected"},[a("ol",{staticClass:"tag-box"},[t._l(t.tagArray.name,function(e,i){return a("li",{key:i,staticClass:"tag"},[t._v(t._s(e)+" "),a("span",{staticClass:"close",on:{click:function(e){t.handleDel(i,"tagArray")}}})])}),t._v(" "),a("li",{staticClass:"added",on:{click:function(e){t.showChooseTag=!0}}})],2)]):a("el-button",{attrs:{round:""},on:{click:function(e){t.showChooseTag=!0}}},[t._v("选择标签")])],1),t._v(" "),a("div",{staticClass:"filter-item"},[a("span",{staticClass:"label"},[t._v("所属群组")]),t._v(" "),t.groupArray.name.length?a("div",{staticClass:"selected"},[a("ol",{staticClass:"tag-box"},[t._l(t.groupArray.name,function(e,i){return a("li",{key:i,staticClass:"tag"},[t._v(t._s(e)+" "),a("span",{staticClass:"close",on:{click:function(e){t.handleDel(i,"groupArray")}}})])}),t._v(" "),a("li",{staticClass:"added",on:{click:function(e){t.showChooseGroup=!0}}})],2)]):a("el-button",{attrs:{round:""},on:{click:function(e){t.showChooseGroup=!0}}},[t._v("选择分组")])],1),t._v(" "),a("div",{staticClass:"filter-confirm"},[a("el-button",{staticClass:"primary-button",attrs:{round:""},on:{click:t.doFilter}},[t._v("查询")]),t._v(" "),a("el-button",{attrs:{round:""},on:{click:t.reset}},[t._v("重置")])],1)])]),t._v(" "),a("div",{staticClass:"users-list page-bg table_box ",class:{"has-page":t.total>t.filterCondition.page_size}},[a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.usersListData,"tooltip-effect":"dark"},on:{"selection-change":t.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),t._v(" "),a("el-table-column",{attrs:{label:"用户信息",width:"250"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("dl",{staticClass:"users-info clearfix"},[e.row.avatar.length?a("dt",[a("img",{staticClass:"img",attrs:{src:e.row.avatar}})]):a("dt",{staticClass:"avatar-empty"},[a("span",{staticClass:"img"})]),t._v(" "),a("dd",[a("span",{staticClass:"name"},[t._v(t._s(e.row.name))]),t._v(" "),a("span",{staticClass:"gender"},[t._v(t._s(e.row.gender))])]),t._v(" "),a("dd",{staticClass:"name",class:t._f("filterLevelclass")(e.row.level)},[t._v(t._s(t._f("filterLevel")(e.row.level)))])])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"phone",label:"手机号","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{prop:"mail",label:"邮箱","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{prop:"count",label:"参与(次)",width:"100"}}),t._v(" "),a("el-table-column",{attrs:{prop:"lastActive",label:"最后活跃",width:"150","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{prop:"comment",label:"备注",width:"150","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{prop:"count",label:"操作",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("router-link",{attrs:{to:"/userManage/info/"+e.row.business_consumer_uid}},[a("el-button",{staticClass:"detail",attrs:{type:"text",size:"small"}},[t._v("\n              详情\n            ")])],1)]}}])})],1),t._v(" "),a("div",{staticClass:"total"},[t._v("共 "),a("span",[t._v(t._s(t.total))]),t._v(" 条数据")]),t._v(" "),t.total>t.filterCondition.page_size?a("div",{staticClass:"pagination-box"},[a("div",{staticClass:"page-pagination"},[a("ve-pagination",{attrs:{total:t.total,pageSize:t.filterCondition.page_size,currentPage:t.currPage},on:{changePage:t.currentChange}})],1)]):t._e()],1)],1),t._v(" "),t.showAddgroup?a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("com-addgroup",{on:{handleClick:t.handleClick,groupData:t.groupData}})],1):t._e(),t._v(" "),t.showChooseActive?a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("com-choose",{attrs:{checkedData:t.activityArray,max:10,name:"活动"},on:{handleClick:t.handleClick,selectComConfirm:t.selectActiveConfirm,searchHandler:t.searchHandler}})],1):t._e(),t._v(" "),t.showChooseTag?a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("com-choose",{attrs:{checkedData:t.tagArray,max:10,name:"标签"},on:{handleClick:t.handleClick,selectComConfirm:t.selectTagConfirm,searchHandler:t.searchHandler}})],1):t._e(),t._v(" "),t.showChooseGroup?a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("com-choose",{attrs:{checkedData:t.groupArray,max:10,name:"固定群组"},on:{handleClick:t.handleClick,selectComConfirm:t.selectGroupConfirm,searchHandler:t.searchHandler}})],1):t._e(),t._v(" "),t.showImport?a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("com-import",{on:{handleClick:t.handleClickImport}})],1):t._e()],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"pond-title"},[e("span",{staticClass:"title"},[this._v("用户池")])])}],!1,null,"aedd719e",null);m.options.__file="index.vue";e.default=m.exports},673:function(t,e,a){},882:function(t,e,a){"use strict";var i=a(673);a.n(i).a}}]);