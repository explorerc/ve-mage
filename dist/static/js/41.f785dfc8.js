(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{1009:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"userGroups"}},[n("div",{staticClass:"operation"},[n("h4",[e._v("用户群组")]),e._v(" "),n("div",[n("el-input",{attrs:{size:"small",placeholder:"输入群组名称","suffix-icon":"el-icon-search",clearable:""},on:{blur:e.onSearch},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.onSearch(t):null}},model:{value:e.search.keyword,callback:function(t){e.$set(e.search,"keyword",t)},expression:"search.keyword"}}),e._v(" "),n("el-button",{attrs:{size:"small",round:""},on:{click:function(t){e.showDialog(2)}}},[e._v("新建固定群组")]),e._v(" "),n("el-button",{attrs:{size:"small",round:""},on:{click:function(t){e.showDialog(3)}}},[e._v("新建智能群组")])],1)]),e._v(" "),n("div",{staticClass:"table-box"},[n("el-table",{staticClass:"el-table",attrs:{data:e.tableData,border:""}},[n("el-table-column",{attrs:{label:"群组名称"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("div",[n("span",[e._v(e._s(t.row.title))]),e._v(" "),1===t.row.type?n("span",{staticClass:"default"}):e._e()])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"群组类型"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("div",[e._v(e._s(e._f("getType")(t.row.type)))])]}}])}),e._v(" "),n("el-table-column",{attrs:{prop:"user_count",label:"群组人数"}}),e._v(" "),n("el-table-column",{attrs:{label:"更新时间"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.updated_at?t.row.updated_at:t.row.created_at))])]}}])}),e._v(" "),n("el-table-column",{attrs:{prop:"describe",label:"群组描述"}}),e._v(" "),n("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{staticClass:"btns",attrs:{type:"text",size:"mini"},on:{click:function(n){e.handleDetails(t.row.group_id,t.row.type)}}},[e._v("详情\n          ")]),e._v(" "),1!==t.row.type?n("el-button",{staticClass:"btns",attrs:{type:"text",size:"mini"},on:{click:function(n){e.handleEdit(t.row.group_id,t.row.title,t.row.describe,t.row.type,t.row.rules)}}},[e._v("\n            编辑\n          ")]):e._e(),e._v(" "),1!==t.row.type?n("el-button",{staticClass:"btns",attrs:{type:"text",size:"mini"},on:{click:function(n){e.handleDelete(t.row.group_id,t.row.type,t.$index)}}},[e._v("删除\n          ")]):e._e()]}}])})],1),e._v(" "),n("VePagination",{staticClass:"VePagination",attrs:{pageSize:e.search.pageSize,total:e.total},on:{changePage:e.changePage}})],1),e._v(" "),n("el-dialog",{attrs:{title:e.dialogTitle,visible:e.dialogFixedOrIntel,width:"30%","before-close":e.handleCloseDialog},on:{"update:visible":function(t){e.dialogFixedOrIntel=t}}},[n("div",[n("el-form",{ref:"Group",attrs:{model:e.Group,rules:e.rules}},[n("el-form-item",{attrs:{prop:"title"}},[e.dialogFixedOrIntel?n("com-input",{staticClass:"input_s",attrs:{"max-length":10,placeholder:"请输入群组名称"},on:{input:function(t){e.inpC(e.Group.title,1)}},model:{value:e.Group.title,callback:function(t){e.$set(e.Group,"title","string"==typeof t?t.trim():t)},expression:"Group.title"}}):e._e()],1),e._v(" "),n("el-form-item",{attrs:{prop:"describe"}},[e.dialogFixedOrIntel?n("com-input",{staticClass:"input_s",attrs:{"max-length":30,placeholder:"请输入群组描述"},on:{input:function(t){e.inpC(e.Group.describe,2)}},model:{value:e.Group.describe,callback:function(t){e.$set(e.Group,"describe","string"==typeof t?t.trim():t)},expression:"Group.describe"}}):e._e()],1)],1),e._v(" "),n("div",{staticClass:"screen"},[3===e.Group.type?n("condOption",{ref:"cond_option",attrs:{rule:e.Group.rule,type:e.isAddOrEdit},on:{optionData:e.optionData}}):e._e()],1)],1),e._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{size:"small"},on:{click:function(t){e.save("Group")}}},[e._v("保 存")])],1)])],1)};i._withStripped=!0;var a=n(469),s=n.n(a),o=n(470),u=n.n(o),l=n(628),r=n(488),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"cond-option"}},[n("ul",e._l(e.shadowOutD,function(t,i){return n("li",[n("div",{staticClass:"option-box"},[n("p",{staticClass:"option_title"},[e._v("筛选条件")]),e._v(" "),e._l(t,function(t,a){return n("div",[n("el-cascader",{attrs:{options:e.options,props:e.props,"show-all-levels":!1},on:{change:function(n){e.handleItemChange(t,i,a)}},model:{value:t.keys,callback:function(n){e.$set(t,"keys",n)},expression:"m.keys"}}),e._v(" "),n("el-select",{attrs:{"value-key":"name",placeholder:"请选择"},on:{change:function(n){e.optionItemChange(t,i,a)}},model:{value:t.condition,callback:function(n){e.$set(t,"condition",n)},expression:"m.condition"}},e._l(t.conds,function(e,t){return n("el-option",{key:t.name,attrs:{label:e.name,value:e.key}})})),e._v(" "),n("div",{staticClass:"option-value"},["select"==t.type?n("el-select",{attrs:{filterable:"",placeholder:"请选择"},model:{value:t.value,callback:function(n){e.$set(t,"value",n)},expression:"m.value"}},e._l(t.optionValue,function(e,t){return n("el-option",{key:t.key,attrs:{label:e.name,value:e.key}})})):e._e(),e._v(" "),"text"===t.type?n("el-input",{attrs:{type:t.type,placeholder:"请输入内容"},model:{value:t.value,callback:function(n){e.$set(t,"value",n)},expression:"m.value"}}):e._e(),e._v(" "),"number"===t.type?n("el-input-number",{attrs:{placeholder:"请输入",controls:!1,min:1,max:365},model:{value:t.value,callback:function(n){e.$set(t,"value",n)},expression:"m.value"}}):e._e(),e._v(" "),"date"===t.type?n("el-date-picker",{attrs:{type:"date",placeholder:"选择日期"},model:{value:t.value,callback:function(n){e.$set(t,"value",n)},expression:"m.value"}}):e._e(),e._v("\n            "+e._s(t.unit)+"\n          ")],1),e._v(" "),n("i",{directives:[{name:"show",rawName:"v-show",value:e.disDel,expression:"disDel"}],staticClass:"el-icon-delete",on:{click:function(t){e.del(i,a)}}})],1)}),e._v(" "),n("el-button",{directives:[{name:"show",rawName:"v-show",value:e.shadowOutD[i].length<10,expression:"shadowOutD[ind].length<10"}],attrs:{size:"mini"},on:{click:function(t){e.and(i)}}},[e._v("AND")])],2),e._v(" "),n("div",{staticClass:"orBtn"},[n("el-button",{directives:[{name:"show",rawName:"v-show",value:e.shadowOutD.length<10,expression:"shadowOutD.length<10"}],attrs:{size:"mini"},on:{click:e.or}},[e._v("OR")])],1)])}))])};c._withStripped=!0;var y=n(677),p=n(678),d={props:["type","rule"],data:function(){return{disDel:!1,saveData:[],props:{value:"key",label:"name"},outD:[[{condition:"",key:"",value:""}]],shadowOutD:[[{condition:"",key:"",value:""}]],options:[{name:"观看直播相关",key:"watch_live_dep",children:[{name:"预约/报名活动",key:"sign_up_count"},{name:"观看直播时长",key:"watch_live_time"},{name:"参与活动次数",key:"join_count"},{name:"观看回放",key:"watch_replay_time"},{name:"观看回放次数",key:"watch_replay_count"},{name:"聊天数量",key:"chat_count"}]},{name:"传播行为",key:"propagation",children:[{name:"分享次数",key:"share_count",value:""},{name:"邀请好友",key:"invite_friends_count",value:""}]},{name:"用户属性",key:"user_attr",children:[{name:"姓名",key:"real_name",value:""},{name:"职位",key:"position",value:""},{name:"邮箱",key:"email",value:""},{name:"手机号",key:"phone",value:""},{name:"性别",key:"sex",value:""},{name:"生日",key:"birthday",value:""},{name:"行业",key:"industry",value:""},{name:"省份",key:"province",value:""},{name:"城市",key:"city",value:""},{name:"用户等级",key:"user_level",value:""},{name:"首次访问时间",key:"first_visited_at",value:""},{name:"最近访问时间",key:"last_visited_at",value:""}]},{name:"其他维度",key:"other",children:[{name:"时间",key:"created_at",value:""},{name:"标签",key:"tags",value:""},{name:"群组",key:"groups",value:""}]}],condOption:{sign_up_count:{keys:["watch_live_dep","sign_up_count"],cons:[{key:"eq",name:"等于",type:"number",unit:"次"},{key:"gt",name:"大于",type:"number",unit:"次"},{key:"lt",name:"小于",type:"number",unit:"次"}]},watch_live_time:{keys:["watch_live_dep","watch_live_time"],cons:[{key:"eq",name:"等于",type:"number",unit:"分钟"},{key:"gt",name:"大于",type:"number",unit:"分钟"},{key:"lt",name:"小于",type:"number",unit:"分钟"}]},join_count:{keys:["watch_live_dep","join_count"],cons:[{key:"eq",name:"等于",type:"number",unit:"次"},{key:"gt",name:"大于",type:"number",unit:"次"},{key:"lt",name:"小于",type:"number",unit:"次"}]},watch_replay_time:{keys:["watch_live_dep","watch_replay_time"],cons:[{key:"eq",name:"等于",type:"number",unit:"分钟"},{key:"gt",name:"大于",type:"number",unit:"分钟"},{key:"lt",name:"小于",type:"number",unit:"分钟"}]},watch_replay_count:{keys:["watch_live_dep","watch_replay_count"],cons:[{key:"eq",name:"等于",type:"number",unit:"次"},{key:"gt",name:"大于",type:"number",unit:"次"},{key:"it",name:"小于",type:"number",unit:"次"}]},chat_count:{keys:["watch_live_dep","chat_count"],cons:[{key:"eq",name:"等于",type:"number",unit:"条"},{key:"gt",name:"大于",type:"number",unit:"条"},{key:"lt",name:"小于",type:"number",unit:"条"}]},share_count:{keys:["propagation","share_count"],cons:[{key:"eq",name:"等于",type:"number",unit:"次"},{key:"gt",name:"大于",type:"number",unit:"次"},{key:"lt",name:"小于",type:"number",unit:"次"}]},invite_friends_count:{keys:["propagation","invite_friends_count"],cons:[{key:"eq",name:"等于",type:"number",unit:"人"},{key:"gt",name:"大于",type:"number",unit:"人"},{key:"lt",name:"小于",type:"number",unit:"人"}]},common_device:{keys:["browsing","common_device"],cons:[{key:"eq",name:"等于",type:"select",unit:""}]},common_browser:{keys:["browsing","common_browser"],cons:[{key:"eq",name:"等于",type:"select",unit:""}]},real_name:{keys:["user_attr","real_name"],cons:[{key:"contain",name:"包含",type:"text",unit:""},{key:"not_contain",name:"不包含",type:"text",unit:""},{key:"eq",name:"是",type:"text",unit:""},{key:"neq",name:"不是",type:"text",unit:""},{key:"head_eq",name:"开头是",type:"text",unit:""},{key:"tail_eq",name:"结尾是",type:"text",unit:""},{key:"not_null",name:"不为空",type:"text",unit:""},{key:"is_null",name:"为空",type:"text",unit:""}]},position:{keys:["user_attr","position"],cons:[{key:"contain",name:"包含",type:"text",unit:""},{key:"not_contain",name:"不包含",type:"text",unit:""},{key:"eq",name:"是",type:"text",unit:""},{key:"neq",name:"不是",type:"text",unit:""},{key:"head_eq",name:"开头是",type:"text",unit:""},{key:"tail_eq",name:"结尾是",type:"text",unit:""},{key:"not_null",name:"不为空",type:"text",unit:""},{key:"is_null",name:"为空",type:"text",unit:""}]},email:{keys:["user_attr","email"],cons:[{key:"contain",name:"包含",type:"text",unit:""},{key:"not_contain",name:"不包含",type:"text",unit:""},{key:"eq",name:"是",type:"text",unit:""},{key:"neq",name:"不是",type:"text",unit:""},{key:"head_eq",name:"开头是",type:"text",unit:""},{key:"tail_eq",name:"结尾是",type:"text",unit:""},{key:"not_null",name:"不为空",type:"text",unit:""},{key:"is_null",name:"为空",type:"text",unit:""}]},phone:{keys:["user_attr","phone"],cons:[{key:"contain",name:"包含",type:"text",unit:""},{key:"not_contain",name:"不包含",type:"text",unit:""},{key:"eq",name:"是",type:"text",unit:""},{key:"neq",name:"不是",type:"text",unit:""},{key:"head_eq",name:"开头是",type:"text",unit:""},{key:"tail_eq",name:"结尾是",type:"text",unit:""},{key:"not_null",name:"不为空",type:"text",unit:""},{key:"is_null",name:"为空",type:"text",unit:""}]},sex:{keys:["user_attr","sex"],cons:[{key:"eq",name:"等于",type:"select",unit:""}]},birthday:{keys:["user_attr","birthday"],cons:[{key:"eq",name:"是（那一天）",type:"date",unit:""},{key:"gt",name:"早于（那一天）",type:"date",unit:""},{key:"lt",name:"晚于（那一天）",type:"date",unit:""},{key:"is_null",name:"为空",type:"",unit:""},{key:"not_null",name:"不为空",type:"",unit:""}]},industry:{keys:["user_attr","industry"],cons:[{key:"contain",name:"包含",type:"select ",unit:""},{key:"not_contain",name:"不包含",type:"select",unit:""},{key:"eq",name:"是",type:"select",unit:""},{key:"neq",name:"不是",type:"select",unit:""},{key:"head_eq",name:"开头是",type:"select",unit:""},{key:"tail_eq",name:"结尾是",type:"select",unit:""},{key:"not_null",name:"不为空",type:"",unit:""},{key:"is_null",name:"为空",type:"",unit:""}]},province:{keys:["user_attr","province"],cons:[{key:"contain",name:"包含",type:"select",unit:""},{key:"not_contain",name:"不包含",type:"select",unit:""},{key:"not_null",name:"不为空",type:"select",unit:""},{key:"is_null",name:"为空",type:"select",unit:""}]},city:{keys:["user_attr","city"],cons:[{key:"contain",name:"包含",type:"select",unit:""},{key:"not_contain",name:"不包含",type:"select",unit:""},{key:"not_null",name:"不为空",type:"select",unit:""},{key:"is_null",name:"为空",type:"select",unit:""}]},user_level:{keys:["user_attr","user_level"],cons:[{key:"eq",name:"等于",type:"select",unit:""}]},first_visited_at:{keys:["user_attr","first_visited_at"],cons:[{key:"eq",name:"是（那一天）",type:"date",unit:""},{key:"gt",name:"早于（那一天）",type:"date",unit:""},{key:"lt",name:"晚于（那一天）",type:"date",unit:""},{key:"is_null",name:"为空",type:"",unit:""},{key:"not_null",name:"不为空",type:"",unit:""}]},last_visited_at:{keys:["user_attr","last_visited_at"],cons:[{key:"eq",name:"是（那一天）",type:"date",unit:""},{key:"gt",name:"早于（那一天）",type:"date",unit:""},{key:"lt",name:"晚于（那一天）",type:"date",unit:""},{key:"is_null",name:"为空",type:"",unit:""},{key:"not_null",name:"不为空",type:"",unit:""}]},created_at:{keys:["other","created_at"],cons:[{key:"固定",name:"固定",type:"date",unit:""},{key:"相对",name:"相对",type:"number",unit:""}]},tags:{keys:["other","tags"],cons:[{key:"eq",name:"等于",type:"select",unit:""}]},groups:{keys:["other","groups"],cons:[{key:"eq",name:"等于",type:"select",unit:""}]}},valueOption:{common_browser:[{key:"Chrome",name:"Chrome",type:"select",unit:""},{key:"Edge",name:"Edge",type:"select",unit:""},{key:"Safari",name:"Safari",type:"select",unit:""},{key:"IE",name:"IE",type:"select",unit:""},{key:"火狐",name:"火狐",type:"select",unit:""},{key:"360浏览器",name:"360浏览器",type:"select",unit:""},{key:"QQ",name:"QQ",type:"select",unit:""}],common_device:[{key:"PC",name:"PC",type:"select",unit:""},{key:"手机-IOS",name:"手机-IOS",type:"select",unit:""},{key:"手机-Andriod",name:"手机-Andriod",type:"select",unit:""},{key:"全部",name:"全部",type:"select",unit:""}],sex:[{key:"男",name:"男",type:"select",unit:""},{key:"女",name:"女",type:"select",unit:""},{key:"全部",name:"全部",type:"select",unit:""},{key:"为空",name:"为空",type:"select",unit:""}],user_level:[{key:"优质用户",name:"优质用户",type:"select",unit:""},{key:"高价值用户",name:"高价值用户",type:"select",unit:""},{key:"潜力用户",name:"潜力用户",type:"select",unit:""},{key:"一般用户",name:"一般用户",type:"select",unit:""},{key:"流失用户",name:"流失用户",type:"select",unit:""},{key:"为空",name:"为空",type:"select",unit:""},{key:"全部",name:"全部",type:"select",unit:""}],industry:[{key:"IT/互联网 ",name:"IT/互联网 ",type:"select",unit:""},{key:"电子/通信/硬件 ",name:"电子/通信/硬件 ",type:"select",unit:""},{key:"金融 ",name:"金融 ",type:"select",unit:""},{key:"交通/贸易/物流 ",name:"交通/贸易/物流 ",type:"select",unit:""},{key:"消费品 ",name:"消费品 ",type:"select",unit:""},{key:"能源/矿产环保",name:"能源/矿产环保 ",type:"select",unit:""},{key:"制药/医疗 ",name:"制药/医疗 ",type:"select",unit:""},{key:"专业服务 ",name:"专业服务 ",type:"select",unit:""},{key:"教育/培训 ",name:"教育/培训 ",type:"select",unit:""},{key:"广告/媒体/娱乐/出版 ",name:"广告/媒体/娱乐/出版 ",type:"select",unit:""},{key:"房地产/建筑 ",name:"房地产/建筑 ",type:"select",unit:""},{key:"服务业 ",name:"服务业 ",type:"select",unit:""},{key:"政府/非盈利机构/其它 ",name:"政府/非盈利机构/其它 ",type:"select",unit:""}],tags:[],groups:[],province:[],city:[]}}},methods:{filVal:function(e){e<1&&(e=1),console.log(e)},handleItemChange:function(e,t,n){e.conds=this.condOption[e.keys[1]].cons,this.shadowOutD[t][n].condition="",this.shadowOutD[t][n].value=""},optionItemChange:function(e,t,n){var i=this;this.shadowOutD[t][n].value="",e.conds.find(function(t){t.key===e.condition&&(e.type=t.type,e.unit=t.unit),e.optionValue=i.valueOption[e.keys[1]]})},and:function(e){var t=this;this.shadowOutD[e].push({key:"",condition:"",value:""}),this.$nextTick(function(){t.shadowOutD[e].length>1&&(t.disDel=!0)})},del:function(e,t){var n=this;this.shadowOutD[e].splice(t,1),this.shadowOutD[e].length<1&&this.shadowOutD.splice(e,1),this.$nextTick(function(){n.shadowOutD&&n.shadowOutD.length<2&&1===n.shadowOutD[0].length?n.disDel=!1:n.disDel=!0})},or:function(){var e=this;this.shadowOutD.push([{key:"",condition:"",value:""}]),this.$nextTick(function(){e.shadowOutD.length<2?e.disDel=!1:e.disDel=!0})},save:function(){console.log(this.shadowOutD,"before_save_data"),this.saveData=this.shadowOutD.filter(function(e){var t=e.filter(function(e){if(""!==e.condition||""!==e.key){if(console.log(e),e.key=e.keys[1],"date"===e.type){var t=new Date(e.value);e.value=t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate()}return delete e.conds,delete e.keys,delete e.type,delete e.unit,delete e.optionValue,e}});if(t.length>0)return t}),this.$emit("optionData",this.saveData)},analysisData:function(){var e=this;this.outD.map(function(t){t.map(function(t){t.keys=e.condOption[t.key].keys,t.optionValue=e.valueOption[t.keys[1]],e.$set(t,"conds",e.condOption[t.key].cons),t.type=e.condOption[t.key].cons.find(function(e){return e.key===t.condition}).type,t.unit=e.condOption[t.key].cons.find(function(e){return e.key===t.condition}).unit})}),this.shadowOutD=this.outD},getTags:function(){var e=this;this.$post(l.a.ALL_TAGS).then(function(t){t.data.list.forEach(function(t){var n={key:t.tag_id,name:t.tag_name,type:"select",unit:""};e.valueOption.tags.push(n)})})},getGroup:function(){var e=this;this.$post(l.a.ALL_GROUPS,{type:"2"}).then(function(t){t.data.list.forEach(function(t){var n={key:t.group_id,name:t.title,type:"select",unit:""};e.valueOption.groups.push(n)})})},getProvince:function(){var e=this;y.a.forEach(function(t){var n={key:t.id,name:t.name,type:"select",unit:""};e.valueOption.province.push(n)})},getCity:function(){var e=this;p.a.forEach(function(t){var n={key:t.id,name:t.name,type:"select",unit:""};e.valueOption.city.push(n)})}},created:function(){this.getTags(),this.getGroup(),this.getProvince(),this.getCity()},mounted:function(){"edit"===this.type&&(this.outD=this.rule,this.outD.length>1||1===this.outD.length&&this.outD[0].length>1?this.disDel=!0:this.disDel=!1,this.analysisData())}},m=(n(935),n(2)),h=Object(m.a)(d,c,[],!1,null,"99a8fa9a",null);h.options.__file="src/pages/user-groups/cond-option.vue";var k=h.exports,_={name:"index",components:{VePagination:r.a,condOption:k},created:function(){this.onSearch()},filters:{getType:function(e){var t="";switch(e){case 1:t="系统分组";break;case 2:t="固定分组";break;case 3:t="智能分组"}return t}},data:function(){var e=this;return{dialogTitle:"",isAddOrEdit:"",inpNameLen:0,inpDesLen:0,search:{pageSize:10,keyword:"",page:1},total:0,Group:{title:"",describe:"",type:"",rule:[]},dialogFixedOrIntel:!1,tableData:[],rules:{title:[{validator:function(t,n,i){if(!n)return i(new Error("群组名称不能为空"));var a={title:n};"edit"===e.isAddOrEdit&&e.$set(a,"group_id",e.Group.group_id),e.repeatTitle(a).then(function(e){if(200!==e.code)return i(new Error("该群组名称已存在"));i()}).catch(function(e){if(200!==e.code)return i(new Error("该群组名称已存在"));i()})},trigger:"blur"}],describe:[{required:!0,message:"群组描述不能为空",trigger:"blur"}]}}},methods:{onSearch:function(){var e=this;this.$post(l.a.GROUPS_LIST,this.search).then(function(t){e.tableData=t.data.list,e.total=u()(t.data.count)})},repeatTitle:function(e){return this.$config({handlers:!0}).$post(l.a.VALI_TITLE,e)},handleDetails:function(e,t){this.$router.push("/userManage/userGroupsDetails/"+e+"/"+t)},handleEdit:function(e,t,n,i,a){this.isAddOrEdit="edit",this.Group.group_id=e,this.Group.title=t,this.Group.describe=n,this.inpNameLen=t.length,this.inpDesLen=n.length,this.Group.type=i,2===i?this.dialogTitle="编辑固定群组":(this.$set(this.Group,"rule",JSON.parse(a)),this.dialogTitle="编辑智能群组"),this.dialogFixedOrIntel=!0,console.log("此刻点击编辑，数据是："+s()(this.Group))},handleDelete:function(e,t,n){var i=this;this.$messageBox({header:"删除群组",type:"error",width:"450px",content:"<span>删除群组后，组内人员将不再归属于该组。</br> 是否确认删除群组？</span> ",cancelText:"暂不",confirmText:"删除",handleClick:function(a){console.log(a),"cancel"===a.action?i.$message({type:"info",message:"已取消删除"}):"confirm"===a.action&&i.$post(l.a.DEL_GROUP,{group_id:e,type:t}).then(function(e){i.tableData.splice(n,1),i.$message({type:"success",message:"删除成功!"})})}})},changePage:function(e){this.search.page=e,this.onSearch()},showDialog:function(e){this.isAddOrEdit="add",this.Group.type=e,this.Group.title="",this.Group.describe="",this.Group.rule="",this.dialogFixedOrIntel=!0,this.dialogTitle=2===e?"创建固定群组":"创建智能群组",console.log("此刻点击新建，数据是："+s()(this.Group))},inpC:function(e,t){1===t?this.inpNameLen=e.length:this.inpDesLen=e.length},optionData:function(e){this.Group.rules=s()(e),this.sendData()},sendData:function(){var e=this,t="";t="add"===this.isAddOrEdit?l.a.CREATE_GROUP:l.a.UPDATE_GROUP,this.$post(t,this.Group).then(function(t){200===t.code&&(e.Group.type=-1,e.dialogFixedOrIntel=!1,e.isAddOrEdit="",e.inpNameLen=0,e.inpDesLen=0,e.onSearch())})},save:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;2===t.Group.type?t.sendData():3===t.Group.type&&t.$refs.cond_option.save()})},handleCloseDialog:function(e){this.Group.type=-1,this.isAddOrEdit="",this.dialogFixedOrIntel=!1,e()}}},v=(n(937),Object(m.a)(_,i,[],!1,null,"122dad76",null));v.options.__file="src/pages/user-groups/index.vue";t.default=v.exports},629:function(e,t,n){},630:function(e,t,n){},935:function(e,t,n){"use strict";var i=n(629);n.n(i).a},937:function(e,t,n){"use strict";var i=n(630);n.n(i).a}}]);
//# sourceMappingURL=41.f785dfc8.js.map