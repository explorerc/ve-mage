(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{172:function(a,e,t){"use strict";var i=t(5);const s={queryList:a=>i.a.ajax({method:"post",url:"/manage/base-manage/list-activity",params:a}),deleteById:a=>i.a.ajax({method:"post",url:"/manage/base-manage/del-activity",params:{id:a}}),queryWarmInfoById:a=>i.a.ajax({method:"post",url:"/manage/warm-up-manage/get",params:{activityId:a}}),saveAndEditWarmInfo:a=>i.a.ajax({method:"post",url:"/manage/warm-up-manage/edit",params:a}),queryReminderInfoById:a=>i.a.ajax({method:"post",url:"/",params:{id:a}}),saveReminderInfo:a=>i.a.ajax({method:"post",url:"/",params:a}),roleList:a=>i.a.ajax({method:"GET",url:"/manage/role-manage/list-role",params:{activityId:a}}),delAss:a=>i.a.ajax({method:"POST",url:"/manage/role-manage/del-assistant",params:a}),handleAss:(a,e)=>i.a.ajax({method:"POST",url:a?"/manage/role-manage/update-assistant":"/manage/role-manage/add-assistant",params:e}),getLimit:a=>i.a.ajax({method:"GET",url:"/manage/view-limit/get-limit",params:{activityId:a}}),saveLimit:a=>i.a.ajax({method:"POST",url:"/manage/view-limit/update-limit",params:a}),webinarInfo:a=>i.a.ajax({method:"GET",url:"/manage/base-manage/detail-activity",params:{id:a}}),updateWebinfo:(a,e)=>i.a.ajax({method:"POST",url:a?"/manage/base-manage/add-activity":"/manage/base-manage/update-activity",params:e}),queryEmailList:a=>i.a.ajax({method:"post",url:"/expand/email-invite/list",params:a}),deleteEmailById:a=>i.a.ajax({method:"post",url:"/expand/email-invite/delete",params:{emailInviteId:a}}),queryEmailInfoById:a=>i.a.ajax({method:"post",url:"/expand/email-invite/query",params:{emailInviteId:a}}),queryEmailTemplateList:()=>i.a.ajax({method:"post",url:"/expand/email-invite/templates",params:{}}),sendEmailInfo:a=>i.a.ajax({method:"post",url:"/expand/email-invite/send",params:a}),sendTimerEmailInfo:a=>i.a.ajax({method:"post",url:"/expand/email-invite/save-and-plansend",params:a}),sendTestEmailInfo:a=>i.a.ajax({method:"post",url:"/expand/email-invite/test-send",params:a}),saveAndsendEmail:a=>i.a.ajax({method:"post",url:"/expand/email-invite/save-and-send",params:a}),saveEmailInfo:a=>i.a.ajax({method:"post",url:"/expand/email-invite/save-draft",params:a}),saveWechat:a=>i.a.ajax({method:"post",url:"/expand/wechat-invite/save",params:a}),saveMsg:a=>i.a.ajax({method:"post",url:"/expand/sms-invite/save",params:a}),queryWechat:a=>i.a.ajax({method:"post",url:"/expand/wechat-invite/query",params:{inviteId:a}}),queryMsg:a=>i.a.ajax({method:"post",url:"/expand/sms-invite/query",params:{inviteId:a}}),queryWechatlist:a=>i.a.ajax({method:"post",url:"/expand/wechat-invite/list",params:a}),queryMsglist:a=>i.a.ajax({method:"post",url:"/expand/sms-invite/list",params:a}),deleteWechat:a=>i.a.ajax({method:"post",url:"/expand/wechat-invite/delete",params:{inviteId:a}}),deleteMsg:a=>i.a.ajax({method:"post",url:"/expand/sms-invite/delete",params:{inviteId:a}}),queryPassSdkInfo:()=>i.a.ajax({method:"post",url:"/common/pass-sdk/create-access-token",params:{}})};e.a=s},220:function(a,e,t){},323:function(a,e,t){"use strict";var i=t(220);t.n(i).a},366:function(a,e,t){"use strict";t.r(e);var i=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"apply-page"},[t("div",[a._v("活动报名:\n    "),t("el-checkbox",{model:{value:a.checked,callback:function(e){a.checked=e},expression:"checked"}},[a._v("开启")]),a._v("\n    注意：活动报名与邀请观看无法同时开启，活动发布后将无法修改\n  ")],1),a._v(" "),t("div",[a._v("报名结束时间："),t("br"),a._v(" "),t("el-radio",{attrs:{label:"1"},model:{value:a.radioTime,callback:function(e){a.radioTime=e},expression:"radioTime"}},[a._v("与直播同步关闭")]),a._v(" "),t("el-radio",{attrs:{label:"2"},model:{value:a.radioTime,callback:function(e){a.radioTime=e},expression:"radioTime"}},[a._v("指定结束时间")]),a._v(" "),t("span",[a._v("设置后，报名关闭后，不可再报名，且未报名的用户，无法观看直播")]),a._v(" "),a.pickDate?t("div",{staticClass:"set-time"},[a._v("\n      报名结束时间：\n      "),t("el-date-picker",{attrs:{format:"yyyy-MM-dd HH:mm:ss","value-format":"yyyy-MM-dd HH:mm:ss",type:"datetime",placeholder:"选择日期时间","picker-options":a.pickerOptions},model:{value:a.queryData.finishTime,callback:function(e){a.$set(a.queryData,"finishTime",e)},expression:"queryData.finishTime"}})],1):a._e()],1),a._v(" "),t("div",[a._v("报名校验:"),t("br"),a._v(" "),t("el-radio",{attrs:{label:"mobile"},model:{value:a.queryData.checkField,callback:function(e){a.$set(a.queryData,"checkField",e)},expression:"queryData.checkField"}},[a._v("校验手机号")]),a._v(" "),t("el-radio",{attrs:{label:"email"},model:{value:a.queryData.checkField,callback:function(e){a.$set(a.queryData,"checkField",e)},expression:"queryData.checkField"}},[a._v("校验邮箱")]),a._v(" "),t("span",[a._v("报名观看需要校验手机号或邮箱，从而帮您获取到更加精准的观众信息")])],1),a._v(" "),t("div",{staticClass:"set-info"},[t("div",{staticClass:"title"},[t("el-button",{on:{click:a.addNew}},[a._v("添加信息")]),t("em",[a._v("最多可设置5条信息")])],1),a._v(" "),t("div",{staticClass:"set-content"},[a._m(0),a._v(" "),t("ol",{staticClass:"table-content"},[t("li",{staticClass:"clearfix"},[t("div",[t("el-select",{attrs:{disabled:"",placeholder:"请选择"},model:{value:a.phone,callback:function(e){a.phone=e},expression:"phone"}},a._l(a.options,function(a){return t("el-option",{key:a.value,attrs:{label:a.txt,value:a.value}})}))],1),a._v(" "),t("div",[t("com-input",{attrs:{customClass:"inp",value:"手机号",disabled:"","max-length":8}})],1),a._v(" "),t("div",[t("com-input",{attrs:{customClass:"inp",value:"请输入手机号",disabled:"","max-length":8}})],1),a._v(" "),t("div",[a._v("登陆校验项目")])]),a._v(" "),a._l(a.quesData,function(e,i){return t("li",{key:e.idx,staticClass:"clearfix"},[t("div",[t("el-select",{attrs:{placeholder:"请选择"},on:{change:function(t){a.selectChange(i,e.label)}},model:{value:e.label,callback:function(t){a.$set(e,"label",t)},expression:"item.label"}},a._l(a.options,function(a){return t("el-option",{key:a.value,attrs:{label:a.txt,value:a.txt}})}))],1),a._v(" "),t("div",[t("com-input",{attrs:{customClass:"inp",value:e.info,"max-length":8,placeholder:"请输入信息标题"}})],1),a._v(" "),t("div",[t("com-input",{attrs:{customClass:"inp",value:e.desc,"max-length":8,placeholder:"请输入信息描述"}})],1),a._v(" "),t("div",[t("el-button",{on:{click:function(e){a.removeItem(i)}}},[a._v("删除")])],1),a._v(" "),"下拉选择"===e.label?t("section",{staticClass:"select-item clearfix"},[t("p",[a._v("选项详情\n              "),t("el-button",{on:{click:function(e){a.addItem(i)}}},[a._v("添加选项")])],1),a._v(" "),t("ol",a._l(e.detail,function(e,s){return t("li",{key:s},[t("com-input",{attrs:{value:e,"max-length":8,placeholder:"请输入选项"}}),a._v(" "),t("span",{on:{click:function(e){a.delItem(i,s)}}},[a._v("删除")])],1)}))]):a._e()])})],2)])]),a._v(" "),t("el-button",{on:{click:a.saveLimit}},[a._v("保存")])],1)};i._withStripped=!0;var s=t(172),l={data:()=>({activityId:"",checked:"",radioTime:"",phone:"手机号码",pickDate:!1,date:new Date,pickerOptions:{disabledDate:a=>a.getTime()<Date.now()-864e5},options:[],quesData:[],queryData:{activityId:"",checkField:"",finishTime:"",questionId:""},questionId:""}),created(){this.questionId=1,this.activityId=this.$route.params.id,this.getLimit(),this.options=[{value:1,txt:"文本"},{value:2,txt:"姓名"},{value:3,txt:"数字"},{value:4,txt:"下拉选择"}],this.quesData=[{info:"标题",desc:"描述描述",label:"文本",detail:[]},{info:"标题a",desc:"描述描述a",label:"姓名",detail:[]},{info:"标题b",desc:"描述描述b",label:"数字",detail:[]},{info:"下拉",desc:"描述下拉",label:"下拉选择",detail:["男","女","奥克兰圣"]}]},methods:{removeItem(a){this.quesData.splice([a],1)},selectChange(a,e){"下拉选择"===e&&this.quesData[a].detail.push("")},addItem(a){this.quesData[a].detail.push("")},delItem(a,e){this.quesData[a].detail.splice(e,1)},addNew(){this.quesData.push({info:"标题",desc:"描述描述",label:"文本",detail:[]})},getLimit(){s.a.getLimit(this.activityId).then(a=>{200===a.code&&(console.log(a),"APPOINT"===a.data.viewCondition&&(this.queryData=a.data.detail,a.data.detail.finishTime.search("0000")>-1&&(this.queryData.finishTime=""),a.data.detail.finishTime.length>0?this.radioTime="2":this.radioTime="1"))}).catch(a=>{this.$toast({content:a.msg,position:"center"})})},saveLimit(){let a=[];"2"===this.radioTime&&(a.finishTime=this.queryData.finishTime),a.questionId=this.questionId,a.checkField=this.queryData.checkField;let e={activityId:this.activityId,viewCondition:"APPOINT",detail:a};s.a.saveLimit(e).then(a=>{200===a.code&&this.$toast({content:"保存成功",position:"center"})}).catch(a=>{this.$toast({content:"保存失败",position:"center"})})}},watch:{quesData:{handler(a){console.log("change")},deep:!0},radioTime:{handler(a){this.pickDate="2"===a}}}},n=(t(323),t(1)),d=Object(n.a)(l,i,[function(){var a=this.$createElement,e=this._self._c||a;return e("ul",{staticClass:"table-title clearfix"},[e("li",[this._v("信息类型")]),this._v(" "),e("li",[this._v("信息标题")]),this._v(" "),e("li",[this._v("信息描述")]),this._v(" "),e("li",[this._v("操作")])])}],!1,null,"c2b17eb4",null);d.options.__file="src\\pages\\live-mager\\prepare\\limit\\apply.vue";e.default=d.exports}}]);
//# sourceMappingURL=21.9310a663.js.map