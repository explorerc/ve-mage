(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{1050:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"ComLoading",rawName:"v-ComLoading",value:t.loading,expression:"loading"}],staticClass:"content",attrs:{"com-loading-text":"拼命加载中"}},[s("div",{staticClass:"edit-msg-page live-mager",on:{mousedown:function(e){t.canPass=!1}}},[t._m(0),t._v(" "),s("div",{staticClass:"mager-box border-box"},[s("div",{staticClass:"from-box"},[s("div",{staticClass:"from-row"},[t._m(1),t._v(" "),s("div",{staticClass:"from-content"},[s("com-input",{attrs:{value:t.titleValue,placeholder:"请输入标题","max-length":15,"error-tips":t.errorData.titleError},on:{"update:value":function(e){t.titleValue=e},focus:function(e){t.errorData.titleError=""}}})],1)]),t._v(" "),s("div",{staticClass:"from-row"},[s("div",{staticClass:"from-title"},[t._v("接收人：")]),t._v(" "),s("div",{staticClass:"from-content"},[s("el-button",{staticClass:"default-button select-receiver",on:{click:function(e){t.selectPersonShow=!0}}},[t._v("选择收信人")]),t._v(" "),t.selectedGroupList.length?s("transition-group",{staticClass:"edit-groups",attrs:{name:"list",tag:"div"}},t._l(t.selectedGroupList,function(e,i){return s("span",{key:e.id,staticClass:"list-item"},[t._v(t._s(e.name)+" ("+t._s(e.count)+"人）\n                "),s("i",{staticClass:"iconfont icon-shanchu",on:{click:function(e){t.delGroupPerson(i)}}})])})):t._e(),t._v(" "),t.selectedTagList.length?s("transition-group",{staticClass:"edit-groups sec",attrs:{name:"list",tag:"div"}},t._l(t.selectedTagList,function(e,i){return s("span",{key:e.id,staticClass:"list-item"},[t._v(t._s(e.name)+"\n                "),s("i",{staticClass:"iconfont icon-shanchu",on:{click:function(e){t.delTagPerson(i)}}})])})):t._e()],1)]),t._v(" "),s("div",{staticClass:"from-row"},[t._m(2),t._v(" "),s("div",{staticClass:"from-content",on:{click:function(e){t.errorData.msgError=""}}},[s("com-input",{staticClass:"msg-content",attrs:{type:"textarea",value:t.msgContent,placeholder:"请输入短信内容","max-length":100,"error-tips":t.errorData.msgError},on:{"update:value":function(e){t.msgContent=e}}})],1)]),t._v(" "),s("div",{staticClass:"from-row"},[t._m(3),t._v(" "),s("div",{staticClass:"from-content"},[s("com-input",{attrs:{value:t.msgTag,placeholder:"请输入签名","max-length":10,"error-tips":t.errorData.tagError},on:{"update:value":function(e){t.msgTag=e},focus:function(e){t.errorData.tagError=""}}})],1)]),t._v(" "),s("div",{staticClass:"from-row"},[t._m(4),t._v(" "),s("div",{staticClass:"from-content"},[[s("el-radio",{attrs:{label:"SEND"},model:{value:t.sendSetting,callback:function(e){t.sendSetting=e},expression:"sendSetting"}},[t._v("立即发送")]),t._v(" "),s("el-radio",{attrs:{label:"AWAIT"},model:{value:t.sendSetting,callback:function(e){t.sendSetting=e},expression:"sendSetting"}},[t._v("定时发送")])]],2)]),t._v(" "),t.pickDate?s("div",{staticClass:"from-row"},[s("div",{staticClass:"from-title"},[t._v("选择时间：")]),t._v(" "),s("div",{staticClass:"from-content"},[s("el-date-picker",{attrs:{editable:!1,format:"yyyy-MM-dd HH:mm:ss","value-format":"yyyy-MM-dd HH:mm:ss",type:"datetime",placeholder:"选择日期时间","picker-options":t.pickerOptions},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1)]):t._e(),t._v(" "),s("com-phone",{attrs:{date:t.date,wxContent:t.msgContent,msgTag:t.msgTag,isWx:!1}})],1),t._v(" "),s("div",{staticClass:"btn-group"},[s("el-button",{staticClass:"default-button",on:{click:t.test}},[t._v("测试发送")]),t._v(" "),s("el-button",{staticClass:"primary-button",attrs:{disabled:t.saveDisabled},on:{click:t.save}},[t._v("保存")])],1)]),t._v(" "),s("choose-group",{attrs:{webinarType:"SMS",show:t.selectPersonShow,groupList:t.groupList,tagList:t.tagList,checkedData:t.checkedData},on:{okSelectList:t.okSelectList,close:t.close,searchEnter:t.searchEnter,selectedGroupListfn:t.selectedGroupListfn,selectedTagListfn:t.selectedTagListfn}})],1),t._v(" "),t.testModal?s("com-test",{attrs:{msgContent:t.msgContent,msgTag:t.msgTag,type:"SMS"},on:{closeTest:t.closeTest}}):t._e()],1)};i._withStripped=!0;var a=s(489),n=s(490),o=s(673),r=s(671),c=s(507),l={data:function(){return{inviteId:this.$route.query.id,activitId:this.$route.params.id,webinarName:"活动名字啊啊啊",testModal:!1,tabValue:1,searchTitle:"",titleValue:"",groupIdx:0,tagIdx:0,tplOptions:[{value:1,label:"活动邀请"},{value:2,label:"活动推荐"}],sendOptions:[{value:"AWAIT",label:"定时发送"},{value:"SEND",label:"立即发送"},{value:"DRAFT",label:"暂存为草稿"}],sendSetting:"SEND",pickDate:!1,msgTag:"",msgContent:"",date:"",pickerOptions:{disabledDate:function(t){return t.getTime()<Date.now()-864e5}},loading:!1,searchPerson:"",groupList:[],tagList:[],selectedTagList:[],selectedGroupList:[],selectedGroupListStr:"",selectedTagListStr:"",selectPersonShow:!1,checkedData:[],errorData:{titleError:"",msgError:"",tagError:""},isValided:!1,canPass:!0,saveDisabled:!1,groupIdStr:"",tagIdStr:""}},created:function(){var t=this;this.queryGroupList(),this.queryTagList(),this.inviteId&&this.$get(n.a.GET_QUERY_MSG,{inviteId:this.inviteId}).then(function(e){t.titleValue=e.data.title,t.sendSetting=e.data.status,t.date=e.data.sendTime?e.data.sendTime.toString():e.data.planTime.toString(),t.msgContent=e.data.desc,t.msgTag=e.data.signature,setTimeout(function(){t.reArrangeList(e.data.groupId.split(","),e.data.tagId.split(","))},500)})},methods:{closeModal:function(t){"modal-cover"===t.target.className&&(this.groupIdx=0,this.tagIdx=0)},chooseGroup:function(t){this.groupIdx=t},chooseTag:function(t){this.tagIdx=t},save:function(){var t=this;this.saveDisabled=!0,this.canPass=!0;var e={inviteId:this.inviteId,activityId:this.$route.params.id,title:this.titleValue,groupId:this.groupIdStr,tagId:this.tagIdStr,status:this.sendSetting.toLowerCase(),planTime:this.date,desc:this.msgContent,signature:this.msgTag};if(!this.formValid())return this.saveDisabled=!1,!1;this.$config({handlers:!0}).$post(n.a.POST_SAVE_MSG,e).then(function(e){t.$toast({content:"保存成功",position:"center"}),t.canPass=!0,t.$router.push({name:"promoteMsg",params:{id:t.activitId}})}).catch(function(e){t.saveDisabled=!1,t.$messageBox({header:"提示",content:e.msg,autoClose:10,confirmText:"知道了"})})},test:function(){var t=this;if(!this.formValid())return!1;this.$nextTick(function(e){t.isValided&&(t.testModal=!0)})},closeTest:function(){this.testModal=!1},searchEnter:function(t,e){"group"===e?this.queryGroupList(t):this.queryTagList(t)},okSelectList:function(){this.selectPersonShow=!1},close:function(){this.selectPersonShow=!1},delGroupPerson:function(t){var e=this.groupList.indexOf(this.selectedGroupList[t]);this.groupList[e].isChecked=!1},delTagPerson:function(t){var e=this.tagList.indexOf(this.selectedTagList[t]);this.tagList[e].isChecked=!1},queryGroupList:function(t){var e=this;this.$get(a.a.GET_GROUP_LIST,{keyword:t,not_empty_field:"phone"}).then(function(t){var s=[];t.data.list.forEach(function(t){s.push({id:t.group_id,name:t.title,count:t.user_count,isChecked:!1})}),e.groupList=s})},queryTagList:function(t){var e=this;this.$get(a.a.GET_TAG_LIST).then(function(t){var s=[];t.data.list.forEach(function(t){s.push({name:t.tag_name,id:t.tag_id,isChecked:!1})}),e.tagList=s})},selectedGroupListfn:function(t,e,s){this.selectedGroupListStr=e.substring(0,e.length-1),this.selectedGroupList=t,this.groupIdStr=s},selectedTagListfn:function(t,e,s){this.selectedTagListStr=e.substring(0,e.length-1),this.selectedTagList=t,this.tagIdStr=s},reArrangeList:function(t,e){var s=this;this.groupList.forEach(function(e,i){t.forEach(function(t,a){1*t===e.id&&(s.groupList[i].isChecked=!0,s.selectedGroupList.push({count:0,id:e.id,isChecked:!0,name:e.name}))})}),this.tagList.forEach(function(t,i){e.forEach(function(e,a){1*e===t.id&&(s.tagList[i].isChecked=!0,s.selectedTagList.push({id:t.id,isChecked:!0,name:t.name}))})})},formValid:function(){return this.errorData.titleError=this.titleValue.length?"":"请输入通知标题",this.errorData.msgError=this.msgContent.length?"":"请输入短信内容",this.errorData.tagError=this.msgTag.length?"":"请输入短信标签",this.titleValue.length&&this.msgTag.length&&this.msgContent.length?(this.isValided=!0,!0):(this.isValided=!1,!1)}},beforeRouteLeave:function(t,e,s){if(this.canPass)return s(!0),!1;this.$messageBox({header:"提示",width:"400px",content:"是否放弃当前编辑？",cancelText:"否",confirmText:"是",handleClick:function(t){"confirm"===t.action?s(!0):s(!1)}})},watch:{sendSetting:{handler:function(t){this.canPass=!0,this.pickDate="AWAIT"===t}}},components:{comTest:r.a,comPhone:c.a,chooseGroup:o.a}},d=(s(838),s(840),s(842),s(1)),u=Object(d.a)(l,i,[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"live-title"},[e("span",{staticClass:"title"},[this._v("创建短信通知")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"from-title"},[e("i",{staticClass:"star"},[this._v("*")]),this._v("通知标题：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"from-title"},[e("i",{staticClass:"star"},[this._v("*")]),this._v("短信内容：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"from-title"},[e("i",{staticClass:"star"},[this._v("*")]),this._v("短信签名：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"from-title"},[e("i",{staticClass:"star"},[this._v("*")]),this._v("发送时间：")])}],!1,null,"b7048ac6",null);u.options.__file="src/pages/live-mager/promote/message/edit.vue";e.default=u.exports},587:function(t,e,s){},588:function(t,e,s){},589:function(t,e,s){},838:function(t,e,s){"use strict";var i=s(587);s.n(i).a},840:function(t,e,s){"use strict";var i=s(588);s.n(i).a},842:function(t,e,s){"use strict";var i=s(589);s.n(i).a}}]);
//# sourceMappingURL=30.21033365.js.map