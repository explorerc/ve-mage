(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{277:function(t,e,s){},278:function(t,e,s){},418:function(t,e,s){"use strict";var i=s(277);s.n(i).a},420:function(t,e,s){"use strict";var i=s(278);s.n(i).a},575:function(t,e,s){"use strict";s.r(e);var i=s(11),a=s.n(i),n=s(241),r=s(234),o=s(51),l=s(16),c={name:"edit-step-two",components:{VeMsgTips:n.a},data:function(){return{outValue:"",isTimer:!0,selectPersonShow:!1,sendType:"AUTO",searchPerson:"",personList:[{id:"",name:"",count:0,isChecked:!1}],selectedPersonList:[{id:"",name:"",count:0,isChecked:!1}],selectedPersonListStr:"",selectedCount:0,errorMsg:{title:"",content:"",desc:"",senderName:"",planTime:"",groupIds:""},email:{activityId:"",emailInviteId:"",emailTemplateId:1,title:"",content:"",senderName:"",planTime:"",groupIds:""}}},computed:Object(o.c)("liveMager",{emailInfo:function(t){return t.emailInfo}}),watch:{emailInfo:{handler:function(t){this.email=a()({},this.email,t)},immediate:!0},email:{handler:function(){this.clearError()},deep:!0},personList:{handler:function(t){var e=this,s=[],i="",a="";t.forEach(function(t,n){t.isChecked&&(s.push(t),e.selectedCount+=t.count,i+=t.name+" ("+t.count+"人）、",a+=t.id+",")}),this.selectedPersonListStr=i.substring(0,i.length-1),this.email.groupIds=a.substring(0,a.length-1),this.selectedPersonList=s},deep:!0}},created:function(){this.email.content?this.queryPersonList():this.$router.go(-1)},methods:a()({},Object(o.b)("liveMager",{storeEmailInfo:l.a}),{clearError:function(){this.email.planTime&&(this.errorMsg.planTime="",this.email.title&&(this.errorMsg.title="",this.email.senderName&&(this.errorMsg.senderName="",this.email.groupIds&&(this.errorMsg.groupIds="",this.email.desc&&(this.errorMsg.desc="",this.email.content&&(this.errorMsg.content=""))))))},searchEnter:function(){this.queryPersonList()},okSelectList:function(){this.selectPersonShow=!1,this.email.groupIds&&(this.errorMsg.groupIds="")},handleSelectPerson:function(t){"cancel"===t.action&&(this.selectPersonShow=!1)},clickRow:function(t){this.personList[t].isChecked=!this.personList[t].isChecked},delPerson:function(t){var e=this.personList.indexOf(this.selectedPersonList[t]);this.personList[e].isChecked=!1},queryPersonList:function(){var t=this;r.a.queryPersonList({activityId:this.$route.params.id,name:this.searchPerson}).then(function(e){var s=[];e.data.forEach(function(t){s.push({id:t.id,name:t.name,count:0,isChecked:!1})}),t.personList=s})},saveEmail:function(){var t=this;this.email.content=this.email.content.replace("$$activity$$",location.protocol+"//"+location.host+"/watcher/"+this.email.activityId),r.a.saveEmailInfo(this.email).then(function(e){200===e.code&&(t.email=a()({},t.email,e.data),t.storeEmailInfo(t.email),t.$toast({header:"提示",content:"保存草稿成功",autoClose:2e3,position:"right-top"}))})},sendEmail:function(){var t=this;!this.isTimer||this.email.planTime?this.checkParams(this.isTimer)&&(this.email.content=this.email.content.replace("$$activity$$",location.protocol+"//"+location.host+"/watcher/"+this.email.activityId),this.isTimer?r.a.sendTimerEmailInfo(this.email).then(function(e){t.$router.push("/liveMager/email/"+t.email.activityId)}):r.a.saveAndsendEmail(this.email).then(function(e){t.$router.push("/liveMager/email/"+t.email.activityId)})):this.errorMsg.planTime="定时时间不能为空"},send:function(){"AUTO"===this.sendType?(this.isTimer=!1,this.immediatelySend()):"ONCE"===this.sendType&&(this.isTimer=!0,this.sendEmail())},immediatelySend:function(){this.email.planTime="",this.isTimer=!1,this.sendEmail()},checkParams:function(){return this.errorMsg={title:"",content:"",senderName:"",planTime:""},this.email.title?this.email.senderName?!!this.email.groupIds||(this.errorMsg.groupIds="请选择收件人",!1):(this.errorMsg.senderName="发件人不能为空",!1):(this.errorMsg.title="标题不能为空",!1)},goBack:function(){this.$router.go(-1)}})},m=(s(418),s(420),s(1)),d=Object(m.a)(c,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"edit-step-box"},[s("header",{staticClass:"email-header"},[s("div",{staticClass:"back-btn",on:{click:t.goBack}},[s("i",{staticClass:"iconfont icon-jiantou"})]),t._v(" "),s("span",[t._v("步骤2 发送设置")])]),t._v(" "),s("div",{staticClass:"live-mager"},[s("div",{staticClass:"mager-box border-box"},[s("div",{staticClass:"from-box"},[s("div",{staticClass:"from-row"},[t._m(0),t._v(" "),s("div",{staticClass:"from-content"},[s("com-input",{staticClass:"input-email",attrs:{placeholder:"输入标题，可结合变量使用","error-tips":t.errorMsg.title,value:t.email.title,"max-length":30},on:{"update:value":function(e){t.$set(t.email,"title",e)}}})],1)]),t._v(" "),s("div",{staticClass:"from-row"},[t._m(1),t._v(" "),s("div",{staticClass:"from-content"},[s("com-input",{staticClass:"input-email",attrs:{placeholder:"输入发件人名称","error-tips":t.errorMsg.senderName,value:t.email.senderName,"max-length":15},on:{"update:value":function(e){t.$set(t.email,"senderName",e)}}})],1)]),t._v(" "),s("div",{staticClass:"from-row"},[t._m(2),t._v(" "),s("div",{staticClass:"from-content"},[s("div",{class:{error:t.errorMsg.groupIds}},[s("button",{staticClass:"default-button fl",on:{click:function(e){t.selectPersonShow=!0}}},[t._v("选择分组")]),t._v(" "),s("span",{staticClass:"send-span"},[t._v("发送限额：0/400")]),t._v(" "),s("ve-msg-tips",{attrs:{"tip-type":"html",tip:"1.每天最多可发送10000封邮件 <br/> 2.发送限额：当前已选中人数/剩余可发送数量<br/>3.在邮件发送前，如果分组内人员发生变化，收件人也会随之改变"}}),t._v(" "),t.errorMsg.groupIds?s("span",{staticClass:"error-msg"},[t._v(t._s(t.errorMsg.groupIds))]):t._e()],1),t._v(" "),t.selectedPersonList.length?s("transition-group",{staticClass:"edit-groups",attrs:{name:"list",tag:"div"}},t._l(t.selectedPersonList,function(e,i){return s("span",{key:e.id,staticClass:"list-item"},[t._v(t._s(e.name)+" ("+t._s(e.count)+"人）\n                "),s("i",{staticClass:"iconfont icon-shanchu",on:{click:function(e){t.delPerson(i)}}})])})):t._e()],1)]),t._v(" "),s("div",{staticClass:"from-row"},[s("div",{staticClass:"from-title"},[t._v("发送时间：")]),t._v(" "),s("div",{class:{"from-content":!0,error:t.errorMsg.planTime}},[s("div",{staticClass:"send-type-box"},[s("el-radio",{attrs:{label:"AUTO"},model:{value:t.sendType,callback:function(e){t.sendType=e},expression:"sendType"}},[t._v("立即发送")]),t._v(" "),s("el-radio",{attrs:{label:"ONCE"},model:{value:t.sendType,callback:function(e){t.sendType=e},expression:"sendType"}},[t._v("定时发送")])],1),t._v(" "),"ONCE"==t.sendType?s("el-date-picker",{attrs:{type:"datetime",placeholder:"选择日期时间",align:"right",format:"yyyy-MM-dd HH:mm","value-format":"yyyy-MM-dd HH:mm"},model:{value:t.email.planTime,callback:function(e){t.$set(t.email,"planTime",e)},expression:"email.planTime"}}):t._e(),t._v(" "),t.errorMsg.planTime?s("span",{staticClass:"error-msg"},[t._v(t._s(t.errorMsg.planTime))]):t._e()],1)])])]),t._v(" "),t.selectPersonShow?s("message-box",{staticClass:"select-person",attrs:{width:"740px",type:"prompt",header:"选择观众组",confirmText:"确认"},on:{handleClick:t.handleSelectPerson}},[s("div",{staticClass:"select-person-box"},[s("div",{staticClass:"select-nav fl"},[s("div",{staticClass:"select-item active"},[s("i",{staticClass:"iconfont icon-fenzu"}),t._v(" "),s("span",[t._v("分组")])]),t._v(" "),s("div",{staticClass:"select-item"},[s("i",{staticClass:"iconfont icon-biaoqian"}),t._v(" "),s("span",[t._v("标签")])])]),t._v(" "),s("div",{staticClass:"select-content fl"},[s("div",{staticClass:"search-person-box"},[s("com-input",{staticClass:"search-com",attrs:{type:"search",value:t.searchPerson,placeholder:"输入直播名称"},on:{"update:value":function(e){t.searchPerson=e}},nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.searchEnter(e):null}}})],1),t._v(" "),s("div",{staticClass:"select-person-box"},[s("ul",t._l(t.personList,function(e,i){return s("li",{key:e.id,class:{active:e.isChecked},on:{click:function(e){e.stopPropagation(),t.clickRow(i)}}},[t._v("\n                "+t._s(e.name)+" ("+t._s(e.count)+"人）\n                "),s("com-checkbox",{staticClass:"fr",attrs:{small:""},model:{value:e.isChecked,callback:function(s){t.$set(e,"isChecked",s)},expression:"person.isChecked"}})],1)}))])])]),t._v(" "),s("div",{staticClass:"select-bottom",attrs:{slot:"bottom"},slot:"bottom"},[s("span",{staticClass:"select-all fl"},[t._v("已选择"+t._s(t.selectedCount)+"人：")]),t._v(" "),s("div",{staticClass:"select-list fl",attrs:{title:t.selectedPersonListStr}},[t._v("\n          "+t._s(t.selectedPersonListStr)+"\n        ")]),t._v(" "),s("button",{staticClass:"primary-button",on:{click:t.okSelectList}},[t._v("确定")])])]):t._e()],1),t._v(" "),s("div",{staticClass:"email-bottom"},[s("button",{staticClass:"primary-button fr",on:{click:t.send}},[t._v("发送")]),t._v(" "),s("button",{staticClass:"primary-button margin-fl fr",on:{click:t.saveEmail}},[t._v("保存草稿")])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"from-title"},[e("i",{staticClass:"star"},[this._v("*")]),this._v("邮件标题：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"from-title"},[e("i",{staticClass:"star"},[this._v("*")]),this._v("发件人：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"from-title"},[e("i",{staticClass:"star"},[this._v("*")]),this._v("收件人：")])}],!1,null,"67ae5934",null);d.options.__file="edit-step-two.vue";e.default=d.exports}}]);