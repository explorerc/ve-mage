(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{611:function(e,t,n){},612:function(e,t,n){},873:function(e,t,n){"use strict";var a=n(611);n.n(a).a},875:function(e,t,n){"use strict";var a=n(612);n.n(a).a},916:function(e,t,n){"use strict";n.r(t);var a=n(465),i=n.n(a),o=n(466),s=n.n(o),u=n(610),l=n(485),r={props:["type","rule"],data:function(){return{disDel:!0,saveData:[],props:{value:"key",label:"name"},outD:[[{condition:"",key:"",value:""}]],shadowOutD:[[{condition:"",key:"",value:""}]],options:[{name:"观看直播相关",key:"watch_live_dep",children:[{name:"预约/报名活动",key:"sign_up_count"},{name:"观看直播时长",key:"watch_live_time"},{name:"参与活动次数",key:"join_count"},{name:"观看回放",key:"watch_replay_time"},{name:"观看回放次数",key:"watch_replay_count"},{name:"聊天数量",key:"chat_count"}]},{name:"传播行为",key:"propagation",children:[{name:"分享次数",key:"share_count",value:""},{name:"邀请好友",key:"invite_friends_count",value:""}]},{name:"浏览行为",key:"browsing",children:[{name:"用户常用设备",key:"common_device",value:""},{name:"电脑观看常用浏览器",key:"common_browser",value:""}]},{name:"用户属性",key:"user_attr",children:[{name:"姓名",key:"real_name",value:""},{name:"职位",key:"position",value:""},{name:"邮箱",key:"email",value:""},{name:"手机号",key:"phone",value:""},{name:"性别",key:"sex",value:""},{name:"生日",key:"birthday",value:""},{name:"行业",key:"industry",value:""},{name:"省份",key:"province",value:""},{name:"城市",key:"city",value:""},{name:"用户等级",key:"user_level",value:""},{name:"首次访问时间",key:"first_visited_at",value:""},{name:"最近访问时间",key:"last_visited_at",value:""}]},{name:"其他维度",key:"other",children:[{name:"时间",key:"created_at",value:""},{name:"标签",key:"tags",value:""},{name:"群组",key:"groups",value:""}]}],condOption:{sign_up_count:{keys:["watch_live_dep","sign_up_count"],cons:[{key:"eq",name:"等于",type:"number",unit:"次"},{key:"gt",name:"大于",type:"number",unit:"次"},{key:"lt",name:"小于",type:"number",unit:"次"}]},watch_live_time:{keys:["watch_live_dep","watch_live_time"],cons:[{key:"eq",name:"等于",type:"number",unit:"分钟"},{key:"gt",name:"大于",type:"number",unit:"分钟"},{key:"lt",name:"小于",type:"number",unit:"分钟"}]},join_count:{keys:["watch_live_dep","join_count"],cons:[{key:"eq",name:"等于",type:"number",unit:"次"},{key:"gt",name:"大于",type:"number",unit:"次"},{key:"lt",name:"小于",type:"number",unit:"次"}]},watch_replay_time:{keys:["watch_live_dep","watch_replay_time"],cons:[{key:"eq",name:"等于",type:"number",unit:"分钟"},{key:"gt",name:"大于",type:"number",unit:"分钟"},{key:"lt",name:"小于",type:"number",unit:"分钟"}]},watch_replay_count:{keys:["watch_live_dep","watch_replay_count"],cons:[{key:"eq",name:"等于",type:"number",unit:"次"},{key:"gt",name:"大于",type:"number",unit:"次"},{key:"it",name:"小于",type:"number",unit:"次"}]},chat_count:{keys:["watch_live_dep","chat_count"],cons:[{key:"eq",name:"等于",type:"number",unit:"条"},{key:"gt",name:"大于",type:"number",unit:"条"},{key:"lt",name:"小于",type:"number",unit:"条"}]},share_count:{keys:["propagation","share_count"],cons:[{key:"eq",name:"等于",type:"number",unit:"次"},{key:"gt",name:"大于",type:"number",unit:"次"},{key:"lt",name:"小于",type:"number",unit:"次"}]},invite_friends_count:{keys:["propagation","invite_friends_count"],cons:[{key:"eq",name:"等于",type:"number",unit:"人"},{key:"gt",name:"大于",type:"number",unit:"人"},{key:"lt",name:"小于",type:"number",unit:"人"}]},common_device:{keys:["browsing","common_device"],cons:[{key:"eq",name:"等于",type:"select",unit:""}]},common_browser:{keys:["browsing","common_browser"],cons:[{key:"eq",name:"等于",type:"select",unit:""}]},real_name:{keys:["user_attr","real_name"],cons:[{key:"contain",name:"包含",type:"text",unit:""},{key:"not_contain",name:"不包含",type:"text",unit:""},{key:"eq",name:"是",type:"text",unit:""},{key:"neq",name:"不是",type:"text",unit:""},{key:"head_eq",name:"开头是",type:"text",unit:""},{key:"tail_eq",name:"结尾是",type:"text",unit:""},{key:"not_null",name:"不为空",type:"text",unit:""},{key:"is_null",name:"为空",type:"text",unit:""}]},position:{keys:["user_attr","position"],cons:[{key:"contain",name:"包含",type:"text",unit:""},{key:"not_contain",name:"不包含",type:"text",unit:""},{key:"eq",name:"是",type:"text",unit:""},{key:"neq",name:"不是",type:"text",unit:""},{key:"head_eq",name:"开头是",type:"text",unit:""},{key:"tail_eq",name:"结尾是",type:"text",unit:""},{key:"not_null",name:"不为空",type:"text",unit:""},{key:"is_null",name:"为空",type:"text",unit:""}]},email:{keys:["user_attr","email"],cons:[{key:"contain",name:"包含",type:"text",unit:""},{key:"not_contain",name:"不包含",type:"text",unit:""},{key:"eq",name:"是",type:"text",unit:""},{key:"neq",name:"不是",type:"text",unit:""},{key:"head_eq",name:"开头是",type:"text",unit:""},{key:"tail_eq",name:"结尾是",type:"text",unit:""},{key:"not_null",name:"不为空",type:"text",unit:""},{key:"is_null",name:"为空",type:"text",unit:""}]},phone:{keys:["user_attr","phone"],cons:[{key:"contain",name:"包含",type:"text",unit:""},{key:"not_contain",name:"不包含",type:"text",unit:""},{key:"eq",name:"是",type:"text",unit:""},{key:"neq",name:"不是",type:"text",unit:""},{key:"head_eq",name:"开头是",type:"text",unit:""},{key:"tail_eq",name:"结尾是",type:"text",unit:""},{key:"not_null",name:"不为空",type:"text",unit:""},{key:"is_null",name:"为空",type:"text",unit:""}]},sex:{keys:["user_attr","sex"],cons:[{key:"eq",name:"等于",type:"select",unit:""}]},birthday:{keys:["user_attr","birthday"],cons:[{key:"eq",name:"是（那一天）",type:"date",unit:""},{key:"gt",name:"早于（那一天）",type:"date",unit:""},{key:"lt",name:"晚于（那一天）",type:"date",unit:""},{key:"is_null",name:"为空",type:"",unit:""},{key:"not_null",name:"不为空",type:"",unit:""}]},industry:{keys:["user_attr","industry"],cons:[{key:"contain",name:"包含",type:"cascader ",unit:""},{key:"not_contain",name:"不包含",type:"cascader",unit:""},{key:"eq",name:"是",type:"cascader",unit:""},{key:"neq",name:"不是",type:"cascader",unit:""},{key:"head_eq",name:"开头是",type:"cascader",unit:""},{key:"tail_eq",name:"结尾是",type:"cascader",unit:""},{key:"not_null",name:"不为空",type:"",unit:""},{key:"is_null",name:"为空",type:"",unit:""}]},province:{keys:["user_attr","province"],cons:[{key:"contain",name:"包含",type:"text",unit:""},{key:"not_contain",name:"不包含",type:"text",unit:""},{key:"not_null",name:"不为空",type:"text",unit:""},{key:"is_null",name:"为空",type:"text",unit:""}]},city:{keys:["user_attr","city"],cons:[{key:"contain",name:"包含",type:"text",unit:""},{key:"not_contain",name:"不包含",type:"text",unit:""},{key:"not_null",name:"不为空",type:"text",unit:""},{key:"is_null",name:"为空",type:"text",unit:""}]},user_level:{keys:["user_attr","user_level"],cons:[{key:"eq",name:"等于",type:"select",unit:""}]},first_visited_at:{keys:["user_attr","first_visited_at"],cons:[{key:"eq",name:"是（那一天）",type:"date",unit:""},{key:"gt",name:"早于（那一天）",type:"date",unit:""},{key:"lt",name:"晚于（那一天）",type:"date",unit:""},{key:"is_null",name:"为空",type:"",unit:""},{key:"not_null",name:"不为空",type:"",unit:""}]},last_visited_at:{keys:["user_attr","last_visited_at"],cons:[{key:"eq",name:"是（那一天）",type:"date",unit:""},{key:"gt",name:"早于（那一天）",type:"date",unit:""},{key:"lt",name:"晚于（那一天）",type:"date",unit:""},{key:"is_null",name:"为空",type:"",unit:""},{key:"not_null",name:"不为空",type:"",unit:""}]},created_at:{keys:["other","created_at"],cons:[{key:"固定",name:"固定",type:"date",unit:""},{key:"相对",name:"相对",type:"number",unit:""}]},tags:{keys:["other","tags"],cons:[{key:"eq",name:"等于",type:"select",unit:""}]},groups:{keys:["other","groups"],cons:[{key:"eq",name:"等于",type:"select",unit:""}]}},valueOption:{common_browser:[{key:"Chrome",name:"Chrome",type:"select",unit:""},{key:"Edge",name:"Edge",type:"select",unit:""},{key:"Safari",name:"Safari",type:"select",unit:""},{key:"IE",name:"IE",type:"select",unit:""},{key:"火狐",name:"火狐",type:"select",unit:""},{key:"360浏览器",name:"360浏览器",type:"select",unit:""},{key:"QQ",name:"QQ",type:"select",unit:""}],common_device:[{key:"PC",name:"PC",type:"select",unit:""},{key:"手机-IOS",name:"手机-IOS",type:"select",unit:""},{key:"手机-Andriod",name:"手机-Andriod",type:"select",unit:""},{key:"全部",name:"全部",type:"select",unit:""}],sex:[{key:"男",name:"男",type:"select",unit:""},{key:"女",name:"女",type:"select",unit:""},{key:"全部",name:"全部",type:"select",unit:""},{key:"为空",name:"为空",type:"select",unit:""}],user_level:[{key:"优质用户",name:"优质用户",type:"select",unit:""},{key:"高价值用户",name:"高价值用户",type:"select",unit:""},{key:"潜力用户",name:"潜力用户",type:"select",unit:""},{key:"一般用户",name:"一般用户",type:"select",unit:""},{key:"流失用户",name:"流失用户",type:"select",unit:""},{key:"为空",name:"为空",type:"select",unit:""},{key:"全部",name:"全部",type:"select",unit:""}],tags:[],groups:[]}}},methods:{handleItemChange:function(e,t,n){e.conds=this.condOption[e.keys[1]].cons,this.shadowOutD[t][n].condition="",this.shadowOutD[t][n].value=""},optionItemChange:function(e,t,n){var a=this;this.shadowOutD[t][n].value="",e.conds.find(function(t){t.key===e.condition&&(e.type=t.type,e.unit=t.unit),e.optionValue=a.valueOption[e.keys[1]]})},and:function(e){this.shadowOutD[e].push({key:"",condition:"",value:""})},del:function(e,t){console.log(e,t),this.shadowOutD[e].splice(t,1),this.shadowOutD[e].length<1&&this.shadowOutD.splice(e,1),1===this.shadowOutD.length?this.disDel=!1:this.disDel=!0},or:function(){this.shadowOutD.push([{key:"",condition:"",value:""}]),console.log(this.shadowOutD.length),this.shadowOutD.length<2?this.disDel=!1:this.disDel=!0},save:function(){console.log(this.shadowOutD,"before_save_data"),this.saveData=this.shadowOutD.filter(function(e){var t=e.filter(function(e){if(""!==e.condition||""!==e.key){if(console.log(e),e.key=e.keys[1],"date"===e.type){var t=new Date(e.value);e.value=t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate()}return delete e.conds,delete e.keys,delete e.type,delete e.unit,delete e.optionValue,e}});if(t.length>0)return t}),console.log(this.shadowOutD,"this.shadowOutD"),console.log(this.saveData,"_save_data"),this.$emit("optionData",this.saveData)},analysisData:function(){var e=this;this.outD.map(function(t){t.map(function(t){t.keys=e.condOption[t.key].keys,t.optionValue=e.valueOption[t.keys[1]],e.$set(t,"conds",e.condOption[t.key].cons),t.type=e.condOption[t.key].cons.find(function(e){return e.key===t.condition}).type})}),this.shadowOutD=this.outD},clearRule:function(){this.outD=[[{condition:"",key:"",value:""}]],this.shadowOutD=[[{condition:"",key:"",value:""}]]},getTags:function(){var e=this;this.$post(u.a.ALL_TAGS).then(function(t){console.log(t),t.data.list.forEach(function(t){var n={key:t.tag_id,name:t.tag_name,type:"select",unit:""};e.valueOption.tags.push(n)})})},getGroup:function(){var e=this;this.$post(u.a.ALL_GROUPS,{type:"2,3"}).then(function(t){console.log(t),t.data.list.forEach(function(t){var n={key:t.group_id,name:t.title,type:"select",unit:""};e.valueOption.groups.push(n)})})}},created:function(){this.getTags(),this.getGroup()},mounted:function(){"edit"===this.type&&(this.outD=this.rule,console.log(this.outD),this.analysisData())}},c=(n(873),n(2)),y=Object(c.a)(r,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"cond-option"}},[n("ul",e._l(e.shadowOutD,function(t,a){return n("li",[n("div",{staticClass:"option-box"},[n("p",{staticClass:"option_title"},[e._v("筛选条件")]),e._v(" "),e._l(t,function(t,i){return n("div",[n("el-cascader",{attrs:{options:e.options,props:e.props,"show-all-levels":!1},on:{change:function(n){e.handleItemChange(t,a,i)}},model:{value:t.keys,callback:function(n){e.$set(t,"keys",n)},expression:"m.keys"}}),e._v(" "),n("el-select",{attrs:{"value-key":"name",placeholder:"请选择"},on:{change:function(n){e.optionItemChange(t,a,i)}},model:{value:t.condition,callback:function(n){e.$set(t,"condition",n)},expression:"m.condition"}},e._l(t.conds,function(e,t){return n("el-option",{key:t.name,attrs:{label:e.name,value:e.key}})})),e._v(" "),n("div",{staticClass:"option-value"},["select"==t.type?n("el-select",{attrs:{placeholder:"请选择"},model:{value:t.value,callback:function(n){e.$set(t,"value",n)},expression:"m.value"}},e._l(t.optionValue,function(e,t){return n("el-option",{key:t.key,attrs:{label:e.name,value:e.key}})})):e._e(),e._v(" "),"number"==t.type||"text"==t.type?n("el-input",{attrs:{type:t.type,placeholder:"请输入内容"},model:{value:t.value,callback:function(n){e.$set(t,"value",n)},expression:"m.value"}}):"date"==t.type?n("el-date-picker",{attrs:{type:"date",placeholder:"选择日期"},model:{value:t.value,callback:function(n){e.$set(t,"value",n)},expression:"m.value"}}):e._e(),e._v("\n            "+e._s(t.unit)+"\n          ")],1),e._v(" "),n("i",{directives:[{name:"show",rawName:"v-show",value:e.disDel,expression:"disDel"}],staticClass:"el-icon-delete",on:{click:function(t){e.del(a,i)}}})],1)}),e._v(" "),n("el-button",{attrs:{size:"mini"},on:{click:function(t){e.and(a)}}},[e._v("AND")])],2),e._v(" "),n("div",{staticClass:"orBtn"},[n("el-button",{attrs:{size:"mini"},on:{click:e.or}},[e._v("OR")])],1)])}))])},[],!1,null,null,null);y.options.__file="cond-option.vue";var p=y.exports,d={name:"index",components:{VePagination:l.a,condOption:p},created:function(){this.onSearch()},filters:{getType:function(e){var t="";switch(e){case 1:t="系统分组";break;case 2:t="固定分组";break;case 3:t="智能分组"}return t}},data:function(){return{dialogTitle:"",isAddOrEdit:"",inpNameLen:0,inpDesLen:0,search:{pageSize:10,name:"",page:1},total:0,Group:{title:"",describe:"",type:"",rule:[]},dialogFixedOrIntel:!1,tableData:[],rules:{title:[{required:!0,message:"群组名称不能为空",trigger:"blur"}]}}},methods:{onSearch:function(){var e=this;this.$post(u.a.GROUPS_LIST,this.search).then(function(t){e.tableData=t.data.list,e.total=s()(t.data.count)})},handleDetails:function(e,t){this.$router.push("/userManage/userGroupsDetails/"+e+"/"+t)},handleEdit:function(e,t,n,a,o){this.isAddOrEdit="edit",this.Group.group_id=e,this.Group.title=t,this.Group.describe=n,this.Group.type=a,2===a?this.dialogTitle="编辑固定群组":(this.$set(this.Group,"rule",JSON.parse(o)),this.dialogTitle="编辑智能群组"),this.dialogFixedOrIntel=!0,console.log("此刻点击编辑，数据是："+i()(this.Group))},handleDelete:function(e,t,n){var a=this;this.$confirm("<span>删除群组后，组内人员将不再归属于该组。</br> 是否确认删除群组？</span> ","删除群组",{confirmButtonText:"删除",cancelButtonText:"暂不",dangerouslyUseHTMLString:!0,roundButton:!0,customClass:"userGroupDelConfirm",confirmButtonClass:"userGroupDelConfirmBtn"}).then(function(){a.$post(u.a.DEL_GROUP,{group_id:e,type:t}).then(function(e){a.tableData.splice(n,1),a.$message({type:"success",message:"删除成功!"})})}).catch(function(){a.$message({type:"info",message:"已取消删除"})})},changePage:function(e){this.search.page=e,this.onSearch()},showDialog:function(e){this.isAddOrEdit="add",this.Group.type=e,this.Group.title="",this.Group.describe="",this.Group.rule="",this.dialogFixedOrIntel=!0,this.dialogTitle=2===e?"创建固定群组":"创建智能群组",console.log("此刻点击新建，数据是："+i()(this.Group))},inpC:function(e,t){1===t?this.inpNameLen=e.length:this.inpDesLen=e.length},optionData:function(e){this.Group.rules=i()(e),this.sendData()},sendData:function(){var e=this,t="";t="add"===this.isAddOrEdit?u.a.CREATE_GROUP:u.a.UPDATE_GROUP,this.$post(t,this.Group).then(function(t){200===t.code&&(e.Group.type=-1,e.onSearch())})},save:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;2===t.Group.type?t.sendData():3===t.Group.type&&t.$refs.cond_option.save(),t.dialogFixedOrIntel=!1,t.isAddOrEdit=""})},handleCloseDialog:function(e){this.Group.type=-1,this.isAddOrEdit="",e()}}},m=(n(875),Object(c.a)(d,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"userGroups"}},[n("div",{staticClass:"operation"},[n("h4",[e._v("用户群组")]),e._v(" "),n("div",[n("el-input",{attrs:{size:"small",placeholder:"输入直播名称","suffix-icon":"el-icon-search",clearable:""},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.onSearch(t):null}},model:{value:e.search.name,callback:function(t){e.$set(e.search,"name",t)},expression:"search.name"}}),e._v(" "),n("el-button",{attrs:{size:"small",round:""},on:{click:function(t){e.showDialog(2)}}},[e._v("新建固定群组")]),e._v(" "),n("el-button",{attrs:{size:"small",round:""},on:{click:function(t){e.showDialog(3)}}},[e._v("新建智能群组")])],1)]),e._v(" "),n("div",{staticClass:"table-box"},[n("el-table",{staticClass:"el-table",attrs:{data:e.tableData,border:""}},[n("el-table-column",{attrs:{label:"群组名称"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("div",[n("span",[e._v(e._s(t.row.title))]),e._v(" "),1===t.row.type?n("span",{staticClass:"default"}):e._e()])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"群组类型"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("div",[e._v(e._s(e._f("getType")(t.row.type)))])]}}])}),e._v(" "),n("el-table-column",{attrs:{prop:"user_count",label:"群组人数"}}),e._v(" "),n("el-table-column",{attrs:{prop:"updated_at",label:"更新时间"}}),e._v(" "),n("el-table-column",{attrs:{prop:"describe",label:"群组描述"}}),e._v(" "),n("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{staticClass:"btns",attrs:{type:"text",size:"mini"},on:{click:function(n){e.handleDetails(t.row.group_id,t.row.type)}}},[e._v("详情\n          ")]),e._v(" "),1!==t.row.type?n("el-button",{staticClass:"btns",attrs:{type:"text",size:"mini"},on:{click:function(n){e.handleEdit(t.row.group_id,t.row.title,t.row.describe,t.row.type,t.row.rules)}}},[e._v("编辑\n          ")]):e._e(),e._v(" "),1!==t.row.type?n("el-button",{staticClass:"btns",attrs:{type:"text",size:"mini"},on:{click:function(n){e.handleDelete(t.row.group_id,t.row.type,t.$index)}}},[e._v("删除\n          ")]):e._e()]}}])})],1),e._v(" "),n("VePagination",{staticClass:"VePagination",attrs:{pageSize:e.search.pageSize,total:e.total},on:{changePage:e.changePage}})],1),e._v(" "),n("el-dialog",{attrs:{title:e.dialogTitle,visible:e.dialogFixedOrIntel,width:"30%","before-close":e.handleCloseDialog},on:{"update:visible":function(t){e.dialogFixedOrIntel=t}}},[n("div",[n("el-form",{ref:"Group",attrs:{model:e.Group,rules:e.rules}},[n("el-form-item",{attrs:{prop:"title"}},[n("el-input",{attrs:{maxlength:10,placeholder:"请输入群组名称"},on:{input:function(t){e.inpC(e.Group.title,1)}},model:{value:e.Group.title,callback:function(t){e.$set(e.Group,"title",t)},expression:"Group.title"}},[n("template",{slot:"append"},[e._v(e._s(e.inpNameLen)+"/10")])],2)],1),e._v(" "),n("el-form-item",{attrs:{prop:"describe"}},[n("el-input",{attrs:{maxlength:30,placeholder:"请输入群组描述"},on:{input:function(t){e.inpC(e.Group.describe,2)}},model:{value:e.Group.describe,callback:function(t){e.$set(e.Group,"describe",t)},expression:"Group.describe"}},[n("template",{slot:"append"},[e._v(e._s(e.inpDesLen)+"/30")])],2)],1)],1),e._v(" "),n("div",{staticClass:"screen"},[3===e.Group.type?n("condOption",{ref:"cond_option",attrs:{rule:e.Group.rule,type:e.isAddOrEdit},on:{optionData:e.optionData}}):e._e()],1)],1),e._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{size:"small"},on:{click:function(t){e.save("Group")}}},[e._v("保 存")])],1)])],1)},[],!1,null,null,null));m.options.__file="index.vue";t.default=m.exports}}]);