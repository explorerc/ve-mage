(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{503:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"ComLoading",rawName:"v-ComLoading",value:t.loading,expression:"loading"}],staticClass:"content",attrs:{"com-loading-text":"拼命加载中"}},[s("div",{staticClass:"edit-msg-page live-mager",on:{keydown:function(e){t.canPass=!1}}},[s("div",{staticClass:"live-title"},[t.inviteId?s("span",{staticClass:"title"},[t._v("编辑短信通知")]):s("span",{staticClass:"title"},[t._v("创建短信通知")]),t._v(" "),s("com-back",{class:"back-btn"})],1),t._v(" "),s("div",{staticClass:"mager-box border-box"},[s("div",{staticClass:"from-box"},[s("div",{staticClass:"from-row"},[t._m(0),t._v(" "),s("div",{staticClass:"from-content"},[s("com-input",{attrs:{value:t.titleValue,placeholder:"请输入标题","max-length":15,"error-tips":t.errorData.titleError},on:{"update:value":function(e){t.titleValue=e},focus:function(e){t.errorData.titleError=""}}})],1)]),t._v(" "),s("div",{staticClass:"from-row"},[s("div",{staticClass:"from-title"},[t._v("接收人：")]),t._v(" "),s("div",{staticClass:"from-content"},[s("el-button",{staticClass:"default-button select-receiver",on:{click:t.chooseReceiver}},[t._v("选择收信人")]),t._v(" "),s("span",{staticClass:"send-span"},[t._v("发送限额："+t._s(t.sendBalance)+"/"+t._s(t.countBalance))]),t._v(" "),t.selectedGroupList.length?s("transition-group",{staticClass:"edit-groups",attrs:{name:"list",tag:"div"}},t._l(t.selectedGroupList,function(e,i){return s("span",{key:e.id,staticClass:"list-item"},[t._v(t._s(e.name)+"\n                "),s("i",{staticClass:"iconfont icon-shanchu",on:{click:function(e){t.delGroupPerson(i)}}})])})):t._e(),t._v(" "),t.selectedTagList.length?s("transition-group",{staticClass:"edit-groups sec",attrs:{name:"list",tag:"div"}},t._l(t.selectedTagList,function(e,i){return s("span",{key:e.id,staticClass:"list-item"},[t._v(t._s(e.name)+"\n                "),s("i",{staticClass:"iconfont icon-shanchu",on:{click:function(e){t.delTagPerson(i)}}})])})):t._e()],1)]),t._v(" "),s("div",{staticClass:"from-row"},[t._m(1),t._v(" "),s("div",{staticClass:"from-content",on:{click:function(e){t.errorData.msgError=""}}},[s("com-input",{staticClass:"msg-content",attrs:{type:"textarea",value:t.msgContent,placeholder:"请输入短信内容","max-length":100,"error-tips":t.errorData.msgError},on:{"update:value":function(e){t.msgContent=e}}})],1)]),t._v(" "),s("div",{staticClass:"from-row"},[t._m(2),t._v(" "),s("div",{staticClass:"from-content"},[s("com-input",{attrs:{value:t.msgTag,placeholder:"请输入签名","max-length":10,"error-tips":t.errorData.tagError},on:{"update:value":function(e){t.msgTag=e},focus:function(e){t.errorData.tagError=""}}})],1)]),t._v(" "),s("div",{staticClass:"from-row"},[t._m(3),t._v(" "),s("div",{staticClass:"from-content"},[[s("el-radio",{attrs:{label:"SEND"},model:{value:t.sendSetting,callback:function(e){t.sendSetting=e},expression:"sendSetting"}},[t._v("立即发送")]),t._v(" "),s("el-radio",{attrs:{label:"AWAIT"},model:{value:t.sendSetting,callback:function(e){t.sendSetting=e},expression:"sendSetting"}},[t._v("定时发送")])]],2)]),t._v(" "),t.pickDate?s("div",{staticClass:"from-row"},[s("div",{staticClass:"from-title"},[t._v("选择时间：")]),t._v(" "),s("div",{staticClass:"from-content"},[s("el-date-picker",{attrs:{editable:!1,format:"yyyy-MM-dd HH:mm:ss","value-format":"yyyy-MM-dd HH:mm:ss",type:"datetime",placeholder:"选择日期时间","picker-options":t.pickerOptions},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1)]):t._e(),t._v(" "),s("com-phone",{attrs:{date:t.date,wxContent:t.msgContent,msgTag:t.msgTag,isWx:!1}})],1),t._v(" "),s("div",{staticClass:"btn-group"},[s("el-button",{staticClass:"default-button",on:{click:t.test}},[t._v("测试发送")]),t._v(" "),s("el-button",{staticClass:"primary-button",attrs:{disabled:t.saveDisabled},on:{click:t.save}},[t._v("保存")])],1)]),t._v(" "),s("choose-group",{attrs:{webinarType:"SMS",show:t.selectPersonShow,groupList:t.groupList,tagList:t.tagList,checkedData:t.checkedData},on:{okSelectList:t.okSelectList,close:t.close,searchEnter:t.searchEnter,selectedGroupListfn:t.selectedGroupListfn,selectedTagListfn:t.selectedTagListfn,totalCount:t.totalCount}})],1),t._v(" "),t.testModal?s("com-test",{attrs:{msgContent:t.msgContent,msgTag:t.msgTag,type:"SMS"},on:{closeTest:t.closeTest}}):t._e()],1)};i._withStripped=!0;var a=s(532),n=s(533),o=s(529),r=s(714),c=s(717),l=s(554),d=s(63),u={data:function(){return{inviteId:this.$route.query.id,activitId:this.$route.params.id,webinarName:"活动名字啊啊啊",testModal:!1,tabValue:1,searchTitle:"",titleValue:"",groupIdx:0,tagIdx:0,tplOptions:[{value:1,label:"活动邀请"},{value:2,label:"活动推荐"}],sendOptions:[{value:"AWAIT",label:"定时发送"},{value:"SEND",label:"立即发送"},{value:"DRAFT",label:"暂存为草稿"}],sendSetting:"SEND",pickDate:!1,msgTag:"",msgContent:"",date:"",pickerOptions:{disabledDate:function(t){return t.getTime()<Date.now()-864e5}},loading:!1,searchPerson:"",groupList:[],tagList:[],selectedTagList:[],selectedGroupList:[],selectedGroupListStr:"",selectedTagListStr:"",selectPersonShow:!1,checkedData:[],errorData:{titleError:"",msgError:"",tagError:""},isValided:!1,canPass:!0,saveDisabled:!1,groupIdStr:"",tagIdStr:"",changed:0,countBalance:0,sendBalance:0,clicked:!1}},created:function(){var t=this;this.getLimit(),this.queryGroupList(),this.queryTagList(),d.a.$emit("breads",[{title:"活动管理"},{title:"活动列表",url:"/liveMager/list"},{title:"活动详情",url:"/liveMager/detail/"+this.activitId},{title:"短信通知",url:"/liveMager/promote/msg/list/"+this.activitId},{title:this.inviteId?"编辑":"新建"}]),this.inviteId&&this.$get(n.a.GET_QUERY_MSG,{inviteId:this.inviteId}).then(function(e){t.titleValue=e.data.title,t.sendSetting=e.data.status,t.date=e.data.sendTime?e.data.sendTime.toString():e.data.planTime.toString(),t.msgContent=e.data.desc,t.msgTag=e.data.signature,t.sendBalance=e.data.expectNum,setTimeout(function(){t.reArrangeList(e.data.groupId.split(","),e.data.tagId.split(","))},500)})},methods:{closeModal:function(t){"modal-cover"===t.target.className&&(this.groupIdx=0,this.tagIdx=0)},chooseGroup:function(t){this.groupIdx=t},chooseTag:function(t){this.tagIdx=t},save:function(){var t=this;this.saveDisabled=!0,this.canPass=!0;var e={change:this.changed,inviteId:this.inviteId,activityId:this.$route.params.id,title:this.titleValue,groupId:this.groupIdStr,tagId:this.tagIdStr,status:this.sendSetting.toLowerCase(),planTime:this.date,desc:this.msgContent,signature:this.msgTag};if(!this.formValid())return this.saveDisabled=!1,!1;this.$config({handlers:!0}).$post(n.a.POST_SAVE_MSG,e).then(function(e){t.$toast({content:"保存成功",position:"center"}),t.canPass=!0,t.$router.push({name:"promoteMsg",params:{id:t.activitId}})}).catch(function(e){t.saveDisabled=!1,t.$messageBox({header:"提示",content:e.msg,autoClose:10,confirmText:"知道了"})})},test:function(){var t=this;if(!this.formValid())return!1;this.$nextTick(function(e){t.isValided&&(t.testModal=!0)})},closeTest:function(){this.testModal=!1},searchEnter:function(t,e){"group"===e?this.queryGroupList(t):this.queryTagList(t)},okSelectList:function(){this.changed=1,this.selectPersonShow=!1},close:function(){this.selectPersonShow=!1},delGroupPerson:function(t){var e=this.groupList.indexOf(this.selectedGroupList[t]);this.groupList[e].isChecked=!1,this.changed=1},delTagPerson:function(t){var e=this.tagList.indexOf(this.selectedTagList[t]);this.tagList[e].isChecked=!1,this.changed=1},queryGroupList:function(t){var e=this;this.$get(a.a.GET_GROUP_LIST,{keyword:t,not_empty_field:"phone"}).then(function(t){var s=[];t.data.list.forEach(function(t){s.push({id:t.group_id,name:t.title,count:t.user_count,isChecked:!1})}),e.groupList=s})},queryTagList:function(t){var e=this;this.$get(a.a.GET_TAG_LIST,{keyword:t}).then(function(t){var s=[];t.data.list.forEach(function(t){s.push({name:t.tag_name,id:t.tag_id,count:t.user_count,isChecked:!1})}),e.tagList=s})},selectedGroupListfn:function(t,e,s){this.selectedGroupListStr=e.substring(0,e.length-1),this.selectedGroupList=t,this.groupIdStr=s},selectedTagListfn:function(t,e,s){this.selectedTagListStr=e.substring(0,e.length-1),this.selectedTagList=t,this.tagIdStr=s},reArrangeList:function(t,e){var s=this;this.groupList.forEach(function(e,i){t.forEach(function(t,a){1*t===e.id&&(s.groupList[i].isChecked=!0,s.selectedGroupList.push({count:0,id:e.id,isChecked:!0,name:e.name}))})}),this.tagList.forEach(function(t,i){e.forEach(function(e,a){1*e===t.id&&(s.tagList[i].isChecked=!0,s.selectedTagList.push({id:t.id,isChecked:!0,name:t.name}))})})},getLimit:function(){var t=this;this.$get(o.a.GET_SEND_LIMIT,{activityId:this.activitId,type:"SMS"}).then(function(e){console.log(e),t.countBalance=e.data.balance})},totalCount:function(t){this.clicked&&(this.sendBalance=t)},chooseReceiver:function(){this.selectPersonShow=!0,this.clicked=!0},formValid:function(){return this.errorData.titleError=this.titleValue.length?"":"请输入通知标题",this.errorData.msgError=this.msgContent.length?"":"请输入短信内容",this.errorData.tagError=this.msgTag.length?"":"请输入短信标签",this.titleValue.length&&this.msgTag.length&&this.msgContent.length?(this.isValided=!0,!0):(this.isValided=!1,!1)}},beforeRouteLeave:function(t,e,s){if(this.canPass)return s(!0),!1;this.$messageBox({header:"提示",width:"400px",content:"是否放弃当前编辑？",cancelText:"否",confirmText:"是",handleClick:function(t){"confirm"===t.action?s(!0):s(!1)}})},watch:{sendSetting:{handler:function(t){this.canPass=!0,this.pickDate="AWAIT"===t}}},components:{comTest:c.a,comPhone:l.a,chooseGroup:r.a}},h=(s(812),s(813),s(814),s(1)),g=Object(h.a)(u,i,[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"from-title"},[e("i",{staticClass:"star"},[this._v("*")]),this._v("通知标题：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"from-title"},[e("i",{staticClass:"star"},[this._v("*")]),this._v("短信内容：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"from-title"},[e("i",{staticClass:"star"},[this._v("*")]),this._v("短信签名：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"from-title"},[e("i",{staticClass:"star"},[this._v("*")]),this._v("发送时间：")])}],!1,null,"b7048ac6",null);g.options.__file="src/pages/live-mager/promote/message/edit.vue";e.default=g.exports},631:function(t,e,s){},632:function(t,e,s){},633:function(t,e,s){},812:function(t,e,s){"use strict";var i=s(631);s.n(i).a},813:function(t,e,s){"use strict";var i=s(632);s.n(i).a},814:function(t,e,s){"use strict";var i=s(633);s.n(i).a}}]);
//# sourceMappingURL=30.2e07ec76.js.map