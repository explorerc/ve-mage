(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{506:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"edit-step-box",on:{keydown:function(e){t.canPass=!1}}},[i("header",{staticClass:"email-header"},[i("div",{staticClass:"back-btn",on:{click:t.goBack}},[i("i",{staticClass:"iconfont icon-jiantou"})]),t._v(" "),i("span",[t._v("步骤2 发送设置")])]),t._v(" "),i("div",{staticClass:"live-mager"},[i("div",{staticClass:"mager-box border-box"},[i("div",{staticClass:"from-box"},[i("div",{staticClass:"from-row"},[t._m(0),t._v(" "),i("div",{staticClass:"from-content"},[i("com-input",{staticClass:"input-email",attrs:{placeholder:"输入标题，可结合变量使用","error-tips":t.errorMsg.title,value:t.email.title,"max-length":30},on:{"update:value":function(e){t.$set(t.email,"title",e)}}})],1)]),t._v(" "),i("div",{staticClass:"from-row"},[t._m(1),t._v(" "),i("div",{staticClass:"from-content"},[i("com-input",{staticClass:"input-email",attrs:{placeholder:"输入发件人名称","error-tips":t.errorMsg.senderName,value:t.email.senderName,"max-length":15},on:{"update:value":function(e){t.$set(t.email,"senderName",e)}}})],1)]),t._v(" "),i("div",{staticClass:"from-row"},[t._m(2),t._v(" "),i("div",{staticClass:"from-content"},[i("div",{class:{error:t.errorMsg.groupIds}},[i("button",{staticClass:"default-button fl",on:{click:t.chooseGroup}},[t._v("选择分组\n              ")]),t._v(" "),i("span",{staticClass:"send-span"},[t._v("发送限额："+t._s(t.totalCountStr?t.totalCountStr:0)+"/"+t._s(t.countBalance))]),t._v(" "),i("ve-msg-tips",{class:"msg-tips",attrs:{"tip-type":"html",tip:"1.每天最多可发送5000封邮件 <br/> 2.发送限额：当前已选中人数/剩余可发送数量<br/>3.在邮件发送前，如果分组内人员发生变化，收件人也会随之改变"}}),t._v(" "),t.errorMsg.groupIds?i("span",{staticClass:"error-msg"},[t._v(t._s(t.errorMsg.groupIds))]):t._e()],1),t._v(" "),t.selectedGroupList.length?i("transition-group",{staticClass:"edit-groups",attrs:{name:"list",tag:"div"}},t._l(t.selectedGroupList,function(e,s){return i("span",{key:e.id,staticClass:"list-item"},[t._v(t._s(e.name)+"\n                "),i("i",{staticClass:"iconfont icon-shanchu",on:{click:function(e){t.delGroupPerson(s)}}})])})):t._e(),t._v(" "),t.selectedTagList.length?i("transition-group",{staticClass:"edit-groups sec",attrs:{name:"list",tag:"div"}},t._l(t.selectedTagList,function(e,s){return i("span",{key:e.id,staticClass:"list-item"},[t._v(t._s(e.name)+"\n                "),i("i",{staticClass:"iconfont icon-shanchu",on:{click:function(e){t.delTagPerson(s)}}})])})):t._e()],1)]),t._v(" "),i("div",{staticClass:"from-row"},[t._m(3),t._v(" "),i("div",{class:{"from-content":!0,error:t.errorMsg.planTime}},[i("div",{staticClass:"send-type-box"},[i("el-radio",{attrs:{label:"AUTO"},model:{value:t.sendType,callback:function(e){t.sendType=e},expression:"sendType"}},[t._v("立即发送\n              ")]),t._v(" "),i("el-radio",{attrs:{label:"ONCE"},model:{value:t.sendType,callback:function(e){t.sendType=e},expression:"sendType"}},[t._v("定时发送\n              ")])],1),t._v(" "),"ONCE"==t.sendType?i("el-date-picker",{attrs:{type:"datetime",placeholder:"选择日期时间",align:"center","default-value":t.defaultValue,"picker-options":t.pickerOptions,format:"yyyy-MM-dd HH:mm","value-format":"yyyy-MM-dd HH:mm"},on:{focus:function(e){t.dateFocus()}},model:{value:t.email.planTime,callback:function(e){t.$set(t.email,"planTime",e)},expression:"email.planTime"}}):t._e(),t._v(" "),t.errorMsg.planTime?i("span",{staticClass:"error-msg"},[t._v(t._s(t.errorMsg.planTime))]):t._e()],1)])])]),t._v(" "),i("choose-group",{attrs:{webinarType:"EMAIL",show:t.selectPersonShow,groupList:t.groupList,tagList:t.tagList,checkedData:t.checkedData},on:{okSelectList:t.okSelectList,close:t.close,searchEnter:t.searchEnter,selectedGroupListfn:t.selectedGroupListfn,selectedTagListfn:t.selectedTagListfn,totalCount:t.totalCount}})],1),t._v(" "),i("div",{staticClass:"email-bottom"},[i("button",{class:{"primary-button":!0,fr:!0,disabled:t.disabledBtn},domProps:{innerHTML:t._s("AUTO"===t.sendType?"立即发送":"确定")},on:{click:t.send}}),t._v(" "),i("button",{staticClass:"default-button margin-fl fr",on:{click:t.saveEmail}},[t._v("保存草稿\n    ")]),t._v(" "),i("button",{staticClass:"default-button margin-fl fr",on:{click:t.goBack}},[t._v("上一步")])])])};s._withStripped=!0;var a=i(95),n=i.n(a),r=i(131),o=i.n(r),c=i(27),l=i.n(c),u=i(517),d=i(521),h=i(709),m=i(514),p=i(93),f=i(15),g={name:"edit-step-two",components:{VeMsgTips:d.a,chooseGroup:h.a},data:function(){return{outValue:"",isTimer:!0,selectPersonShow:!1,sendType:"AUTO",searchPerson:"",personList:[],selectedPersonList:[],selectedPersonListStr:"",selectedCount:0,disabledBtn:!1,canPass:!0,errorMsg:{title:"",content:"",desc:"",senderName:"",planTime:"",groupIds:""},defaultValue:new Date,pickerOptions:{disabledDate:function(t){return t.getTime()<Date.now()-864e5}},email:{activityId:"",emailInviteId:"",emailTemplateId:1,title:"",content:"",senderName:"",planTime:"",groupIds:"",tagIdStr:""},PC_HOST:location.protocol+"//test-zhike.vhall.com/webinar/",groupList:[],tagList:[],checkedData:[],selectedGroupList:[],selectedTagList:[],selectedGroupListStr:"",selectedTagListStr:"",groupIdStr:"",tagIdStr:"",totalCountStr:"",countBalance:0,clicked:!1}},computed:Object(p.c)("liveMager",{emailInfo:function(t){return t.emailInfo}}),watch:{emailInfo:{handler:function(t){this.email=l()({},this.email,t),this.sendType=this.email.planTime?"ONCE":"AUTO"},immediate:!0},email:{handler:function(){this.clearError()},deep:!0},sendType:function(t){this.errorMsg.planTime="",this.email.planTime="","ONCE"===t&&(this.defaultValue=new Date((new Date).getTime()+18e5))}},created:function(){var t=this.$route.query.email;if(this.email.content)this.totalCountStr=this.emailInfo.expectNum;else{if(!t)return void this.$router.go(-1);this.queryEmailInfo(t)}this.email.activityId=this.$route.params.id,this.getLimit(),this.initData()},methods:l()({},Object(p.b)("liveMager",{storeEmailInfo:f.d}),{initData:function(){var t=this;return o()(n.a.mark(function e(){return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.queryTagList();case 2:return e.next=4,t.queryGroupList();case 4:return e.next=6,t.reArrangeList(t.emailInfo.groupIds?t.emailInfo.groupIds.split(","):[],t.emailInfo.tagIds?t.emailInfo.tagIds.split(","):[]);case 6:case"end":return e.stop()}},e,t)}))()},chooseGroup:function(){this.selectPersonShow=!0,this.clicked=!0},clearError:function(){this.email.title&&(this.errorMsg.title="",this.email.planTime&&(this.errorMsg.planTime="",this.email.senderName&&(this.errorMsg.senderName="",this.email.groupIds&&(this.errorMsg.groupIds="",this.email.desc&&(this.errorMsg.desc="",this.email.content&&(this.errorMsg.content=""))))))},queryEmailInfo:function(t){var e=this;t&&this.$get(m.a.GET_EMAIL_INFO,{emailInviteId:t}).then(function(t){e.email=t.data,e.storeEmailInfo(e.email),e.totalCountStr=e.emailInfo.expectNum})},okSelectList:function(){this.selectPersonShow=!1,this.email.change=1,this.email.groupIds&&(this.errorMsg.groupIds="")},handleSelectPerson:function(t){"cancel"===t.action&&(this.selectPersonShow=!1)},saveEmail:function(){var t=this;if(this.totalCountStr>this.countBalance)return this.$toast({content:"收件人数量超出限额"}),!1;this.canPass=!0,this.email.content=this.email.content.replace("$$activity$$",this.PC_HOST+"watch/"+this.email.activityId),this.$post(m.a.POST_SAVE_EMAIL_INFO,this.email).then(function(e){t.$router.push("/liveMager/email/"+t.email.activityId)})},sendEmail:function(){var t=this;if(this.canPass=!0,this.isTimer&&!this.email.planTime)return this.errorMsg.planTime="定时时间不能为空",void(this.disabledBtn=!1);this.checkParams(this.isTimer)?(this.email.content=this.email.content.replace("$$activity$$",this.PC_HOST+"watch/"+this.email.activityId),this.isTimer?this.$config({handlers:!0}).$post(m.a.POST_SEND_TIMER_EMAIL_INFO,this.email).then(function(e){t.$router.push("/liveMager/email/"+t.email.activityId),t.disabledBtn=!1}).catch(function(e){var i=setTimeout(function(){clearTimeout(i),t.disabledBtn=!1},2e3)}):this.$post(m.a.POST_SAVE_SEND_EMAIL,this.email).then(function(e){t.$router.push("/liveMager/email/"+t.email.activityId),t.disabledBtn=!1})):this.disabledBtn=!1},send:function(){var t=this;if(this.totalCountStr>this.countBalance)return this.$toast({content:"收件人数量超出限额"}),!1;this.canPass=!0,this.disabledBtn=!0,this.$nextTick(function(){"AUTO"===t.sendType?(t.isTimer=!1,t.immediatelySend()):"ONCE"===t.sendType&&(t.isTimer=!0,t.sendEmail())})},immediatelySend:function(){this.email.planTime="",this.isTimer=!1,this.sendEmail()},checkParams:function(){return this.errorMsg={title:"",content:"",senderName:"",planTime:""},this.email.title?this.email.senderName?!(!this.email.groupIds&&!this.email.tagIds)||(this.errorMsg.groupIds="请选择收件人",!1):(this.errorMsg.senderName="发件人不能为空",!1):(this.errorMsg.title="标题不能为空",!1)},goBack:function(){this.storeEmailInfo(this.email),this.$router.go(-1)},searchEnter:function(t,e){"group"===e?this.queryGroupList(t):this.queryTagList(t)},close:function(){this.selectPersonShow=!1},delGroupPerson:function(t){var e=this.groupList.indexOf(this.selectedGroupList[t]);this.groupList[e].isChecked=!1,this.email.change=1},delTagPerson:function(t){var e=this.tagList.indexOf(this.selectedTagList[t]);this.tagList[e].isChecked=!1,this.email.change=1},queryGroupList:function(t){var e=this;return this.$get(u.a.GET_GROUP_LIST,{keyword:t,not_empty_field:"email"}).then(function(t){var i=[];t.data.list.forEach(function(t){i.push({id:t.group_id,name:t.title,count:t.user_count,isChecked:!1})}),e.groupList=i,e.email.groupList=e.groupList})},queryTagList:function(t){var e=this;return this.$get(u.a.GET_TAG_LIST,{keyword:t}).then(function(t){var i=[];t.data.list.forEach(function(t){i.push({name:t.tag_name,id:t.tag_id,count:t.user_count,isChecked:!1})}),e.tagList=i,e.email.tagList=e.tagList})},selectedGroupListfn:function(t,e,i){this.selectedGroupListStr=e.substring(0,e.length-1),this.selectedGroupList=t,this.email.groupIds=i},selectedTagListfn:function(t,e,i){this.selectedTagListStr=e.substring(0,e.length-1),this.selectedTagList=t,this.email.tagIds=i},totalCount:function(t){this.clicked&&(this.totalCountStr=t)},reArrangeList:function(t,e){var i=this;this.groupList.forEach(function(e,s){t.forEach(function(t,a){1*t===e.id&&(i.groupList[s].isChecked=!0,i.selectedGroupList.push({count:e.count,id:e.id,isChecked:!0,name:e.name}))})}),this.email.selectedGroupList=this.selectedGroupList,this.tagList.forEach(function(t,s){e.forEach(function(e,a){1*e===t.id&&(i.tagList[s].isChecked=!0,i.selectedTagList.push({count:t.count,id:t.id,isChecked:!0,name:t.name}))})}),this.email.selectedTagList=this.selectedTagList},getLimit:function(){var t=this;this.$get(m.a.GET_SEND_LIMIT,{activityId:this.email.activityId,type:"EMAIL"}).then(function(e){console.log(e),t.countBalance=e.data.balance})},dateFocus:function(){this.email.planTime=new Date(this.defaultValue).format("yyyy-MM-dd hh:mm")}}),beforeRouteLeave:function(t,e,i){if(this.canPass)return i(!0),!1;this.$messageBox({header:"提示",width:"400px",content:"是否放弃当前编辑？",cancelText:"否",confirmText:"是",handleClick:function(t){"confirm"===t.action?i(!0):i(!1)}})}},v=(i(775),i(776),i(1)),_=Object(v.a)(g,s,[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"from-title"},[e("i",{staticClass:"star"},[this._v("*")]),this._v("邮件标题：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"from-title"},[e("i",{staticClass:"star"},[this._v("*")]),this._v("发件人：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"from-title"},[e("i",{staticClass:"star"},[this._v("*")]),this._v("收件人：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"from-title"},[e("i",{staticClass:"star"},[this._v("*")]),this._v("发送时间：")])}],!1,null,"c4130fe2",null);_.options.__file="src/pages/live-mager/email/edit-step-two.vue";e.default=_.exports},589:function(t,e,i){},590:function(t,e,i){},775:function(t,e,i){"use strict";var s=i(589);i.n(s).a},776:function(t,e,i){"use strict";var s=i(590);i.n(s).a}}]);
//# sourceMappingURL=17.be01da90.js.map