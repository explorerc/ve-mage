(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{538:function(t,e,s){},539:function(t,e,s){},708:function(t,e,s){"use strict";var i=s(538);s.n(i).a},709:function(t,e,s){"use strict";var i=s(539);s.n(i).a},878:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"edit-step-box",on:{keydown:function(e){t.canPass=!1}}},[s("header",{staticClass:"email-header"},[s("div",{staticClass:"back-btn",on:{click:t.goBack}},[s("i",{staticClass:"iconfont icon-jiantou"})]),t._v(" "),s("span",[t._v("步骤2 发送设置")])]),t._v(" "),s("div",{staticClass:"live-mager"},[s("div",{staticClass:"mager-box border-box"},[s("div",{staticClass:"from-box"},[s("div",{staticClass:"from-row"},[t._m(0),t._v(" "),s("div",{staticClass:"from-content"},[s("com-input",{staticClass:"input-email",attrs:{placeholder:"输入标题，可结合变量使用","error-tips":t.errorMsg.title,value:t.email.title,"max-length":30},on:{"update:value":function(e){t.$set(t.email,"title",e)}}})],1)]),t._v(" "),s("div",{staticClass:"from-row"},[t._m(1),t._v(" "),s("div",{staticClass:"from-content"},[s("com-input",{staticClass:"input-email",attrs:{placeholder:"输入发件人名称","error-tips":t.errorMsg.senderName,value:t.email.senderName,"max-length":15},on:{"update:value":function(e){t.$set(t.email,"senderName",e)}}})],1)]),t._v(" "),s("div",{staticClass:"from-row"},[t._m(2),t._v(" "),s("div",{staticClass:"from-content"},[s("div",{class:{error:t.errorMsg.groupIds}},[s("button",{staticClass:"default-button fl",on:{click:function(e){t.selectPersonShow=!0}}},[t._v("选择分组")]),t._v(" "),s("span",{staticClass:"send-span"},[t._v("发送限额："+t._s(t.totalCountStr?t.totalCountStr:0)+"/1000")]),t._v(" "),s("ve-msg-tips",{attrs:{"tip-type":"html",tip:"1.每天最多可发送10000封邮件 <br/> 2.发送限额：当前已选中人数/剩余可发送数量<br/>3.在邮件发送前，如果分组内人员发生变化，收件人也会随之改变"}}),t._v(" "),t.errorMsg.groupIds?s("span",{staticClass:"error-msg"},[t._v(t._s(t.errorMsg.groupIds))]):t._e()],1),t._v(" "),t.selectedGroupList.length?s("transition-group",{staticClass:"edit-groups",attrs:{name:"list",tag:"div"}},t._l(t.selectedGroupList,function(e,i){return s("span",{key:e.id,staticClass:"list-item"},[t._v(t._s(e.name)+" ("+t._s(e.count)+"人）\n                "),s("i",{staticClass:"iconfont icon-shanchu",on:{click:function(e){t.delGroupPerson(i)}}})])})):t._e(),t._v(" "),t.selectedTagList.length?s("transition-group",{staticClass:"edit-groups sec",attrs:{name:"list",tag:"div"}},t._l(t.selectedTagList,function(e,i){return s("span",{key:e.id,staticClass:"list-item"},[t._v(t._s(e.name)+"\n                "),s("i",{staticClass:"iconfont icon-shanchu",on:{click:function(e){t.delTagPerson(i)}}})])})):t._e()],1)]),t._v(" "),s("div",{staticClass:"from-row"},[s("div",{staticClass:"from-title"},[t._v("发送时间：")]),t._v(" "),s("div",{class:{"from-content":!0,error:t.errorMsg.planTime}},[s("div",{staticClass:"send-type-box"},[s("el-radio",{attrs:{label:"AUTO"},model:{value:t.sendType,callback:function(e){t.sendType=e},expression:"sendType"}},[t._v("立即发送")]),t._v(" "),s("el-radio",{attrs:{label:"ONCE"},model:{value:t.sendType,callback:function(e){t.sendType=e},expression:"sendType"}},[t._v("定时发送")])],1),t._v(" "),"ONCE"==t.sendType?s("el-date-picker",{attrs:{type:"datetime",placeholder:"选择日期时间",align:"right",format:"yyyy-MM-dd HH:mm","value-format":"yyyy-MM-dd HH:mm"},model:{value:t.email.planTime,callback:function(e){t.$set(t.email,"planTime",e)},expression:"email.planTime"}}):t._e(),t._v(" "),t.errorMsg.planTime?s("span",{staticClass:"error-msg"},[t._v(t._s(t.errorMsg.planTime))]):t._e()],1)])])]),t._v(" "),s("choose-group",{attrs:{webinarType:"EMAIL",show:t.selectPersonShow,groupList:t.groupList,tagList:t.tagList,checkedData:t.checkedData},on:{okSelectList:t.okSelectList,close:t.close,searchEnter:t.searchEnter,selectedGroupListfn:t.selectedGroupListfn,selectedTagListfn:t.selectedTagListfn,totalCount:t.totalCount}})],1),t._v(" "),s("div",{staticClass:"email-bottom"},[s("button",{class:{"primary-button":!0,fr:!0,disabled:t.disabledBtn},on:{click:t.send}},[t._v("发送")]),t._v(" "),s("button",{staticClass:"primary-button margin-fl fr",on:{click:t.saveEmail}},[t._v("保存草稿")])])])};i._withStripped=!0;var a=s(98),n=s.n(a),r=s(137),o=s.n(r),c=s(30),l=s.n(c),d=s(472),u=s(483),h=s(644),m=s(470),p=s(96),f=s(15),g={name:"edit-step-two",components:{VeMsgTips:u.a,chooseGroup:h.a},data:function(){return{outValue:"",isTimer:!0,selectPersonShow:!1,sendType:"AUTO",searchPerson:"",personList:[{id:"",name:"",count:0,isChecked:!1}],selectedPersonList:[{id:"",name:"",count:0,isChecked:!1}],selectedPersonListStr:"",selectedCount:0,disabledBtn:!1,canPass:!0,errorMsg:{title:"",content:"",desc:"",senderName:"",planTime:"",groupIds:""},email:{activityId:"",emailInviteId:"",emailTemplateId:1,title:"",content:"",senderName:"",planTime:"",groupIds:"",tagIdStr:""},PC_HOST:location.protocol+"//test-zhike.vhall.com/webinar/",groupList:[{id:"",name:"",count:0,isChecked:!1}],tagList:[],checkedData:[],selectedGroupList:[{id:"",name:"",count:0,isChecked:!1}],selectedTagList:[{id:"",name:"",count:0,isChecked:!1}],selectedGroupListStr:"",selectedTagListStr:"",groupIdStr:"",tagIdStr:"",totalCountStr:""}},computed:Object(p.c)("liveMager",{emailInfo:function(t){return t.emailInfo}}),watch:{emailInfo:{handler:function(t){this.email=l()({},this.email,t),this.sendType=this.email.planTime?"ONCE":"AUTO"},immediate:!0},email:{handler:function(){this.clearError()},deep:!0}},created:function(){this.email.content?(this.totalCountStr=this.emailInfo.sendCount,this.queryGroupList().then(this.queryTagList()).then(this.reArrangeList(this.emailInfo.groupIds.split(","),this.emailInfo.tagIds.split(",")))):this.$router.go(-1)},methods:l()({},Object(p.b)("liveMager",{storeEmailInfo:f.d}),{clearError:function(){this.email.planTime&&(this.errorMsg.planTime="",this.email.title&&(this.errorMsg.title="",this.email.senderName&&(this.errorMsg.senderName="",this.email.groupIds&&(this.errorMsg.groupIds="",this.email.desc&&(this.errorMsg.desc="",this.email.content&&(this.errorMsg.content=""))))))},okSelectList:function(){this.selectPersonShow=!1,this.email.groupIds&&(this.errorMsg.groupIds="")},handleSelectPerson:function(t){"cancel"===t.action&&(this.selectPersonShow=!1)},saveEmail:function(){var t=this;this.canPass=!0,this.email.content=this.email.content.replace("$$activity$$",this.PC_HOST+"watch/"+this.email.activityId),this.$post(m.a.POST_SAVE_EMAIL_INFO,this.email).then(function(e){t.email=l()({},t.email,e.data),t.storeEmailInfo(t.email),t.$toast({header:"提示",content:"保存草稿成功",autoClose:2e3,position:"right-top"})})},sendEmail:function(){var t=this;if(this.canPass=!0,this.isTimer&&!this.email.planTime)return this.errorMsg.planTime="定时时间不能为空",void(this.disabledBtn=!1);this.checkParams(this.isTimer)?(this.email.content=this.email.content.replace("$$activity$$",this.PC_HOST+"watch/"+this.email.activityId),this.isTimer?this.$post(m.a.POST_SEND_TIMER_EMAIL_INFO,this.email).then(function(e){t.$router.push("/liveMager/email/"+t.email.activityId),t.disabledBtn=!1}):this.$post(m.a.POST_SAVE_SEND_EMAIL,this.email).then(function(e){t.$router.push("/liveMager/email/"+t.email.activityId),t.disabledBtn=!1})):this.disabledBtn=!1},send:function(){var t=this;this.canPass=!0,this.disabledBtn=!0,this.$nextTick(function(){"AUTO"===t.sendType?(t.isTimer=!1,t.immediatelySend()):"ONCE"===t.sendType&&(t.isTimer=!0,t.sendEmail())})},immediatelySend:function(){this.email.planTime="",this.isTimer=!1,this.sendEmail()},checkParams:function(){return this.errorMsg={title:"",content:"",senderName:"",planTime:""},this.email.title?this.email.senderName?!!this.email.groupIds||(this.errorMsg.groupIds="请选择收件人",!1):(this.errorMsg.senderName="发件人不能为空",!1):(this.errorMsg.title="标题不能为空",!1)},goBack:function(){this.storeEmailInfo(this.email),this.$router.go(-1)},searchEnter:function(t,e){"group"===e?this.queryGroupList(t):this.queryTagList(t)},close:function(){this.selectPersonShow=!1},delGroupPerson:function(t){var e=this.groupList.indexOf(this.selectedGroupList[t]);this.groupList[e].isChecked=!1},delTagPerson:function(t){var e=this.tagList.indexOf(this.selectedTagList[t]);this.tagList[e].isChecked=!1},queryGroupList:function(t){var e=this;return o()(n.a.mark(function t(){return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$get(d.a.GET_GROUP_LIST,{keyword:e.searchVal,type:"2"}).then(function(t){var s=[];t.data.list.forEach(function(t){s.push({id:t.group_id,name:t.title,count:t.user_count,isChecked:!1})}),e.groupList=s,e.email.groupList=e.groupList});case 2:case"end":return t.stop()}},t,e)}))()},queryTagList:function(t){var e=this;return o()(n.a.mark(function s(){return n.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.$get(d.a.GET_TAG_LIST,{keyword:t}).then(function(t){var s=[];t.data.list.forEach(function(t){s.push({name:t.tag_name,id:t.tag_id,isChecked:!1})}),e.tagList=s,e.email.tagList=e.tagList});case 2:case"end":return s.stop()}},s,e)}))()},selectedGroupListfn:function(t,e,s){this.selectedGroupListStr=e.substring(0,e.length-1),this.selectedGroupList=t,this.email.groupIds=s},selectedTagListfn:function(t,e,s){this.selectedTagListStr=e.substring(0,e.length-1),this.selectedTagList=t,this.email.tagIds=s},totalCount:function(t){this.totalCountStr=t},reArrangeList:function(t,e){var s=this;this.groupList.forEach(function(e,i){t.forEach(function(t,a){1*t===e.id&&(s.groupList[i].isChecked=!0,s.selectedGroupList.push({count:0,id:e.id,isChecked:!0,name:e.name}))})}),this.email.selectedGroupList=this.selectedGroupList,this.tagList.forEach(function(t,i){e.forEach(function(e,a){1*e===t.id&&(s.tagList[i].isChecked=!0,s.selectedTagList.push({count:0,id:t.id,isChecked:!0,name:t.name}))})}),this.email.selectedTagList=this.selectedTagList}}),beforeRouteLeave:function(t,e,s){if(this.canPass)return s(!0),!1;this.$messageBox({header:"提示",width:"400px",content:"是否放弃当前编辑？",cancelText:"否",confirmText:"是",handleClick:function(t){"confirm"===t.action?s(!0):s(!1)}})}},v=(s(708),s(709),s(2)),_=Object(v.a)(g,i,[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"from-title"},[e("i",{staticClass:"star"},[this._v("*")]),this._v("邮件标题：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"from-title"},[e("i",{staticClass:"star"},[this._v("*")]),this._v("发件人：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"from-title"},[e("i",{staticClass:"star"},[this._v("*")]),this._v("收件人：")])}],!1,null,"c4130fe2",null);_.options.__file="src/pages/live-mager/email/edit-step-two.vue";e.default=_.exports}}]);
//# sourceMappingURL=17.de73e1d2.js.map