(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{562:function(t,e,i){},563:function(t,e,i){},564:function(t,e,i){},742:function(t,e,i){"use strict";var s=i(562);i.n(s).a},743:function(t,e,i){"use strict";var s=i(563);i.n(s).a},744:function(t,e,i){"use strict";var s=i(564);i.n(s).a},894:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"ComLoading",rawName:"v-ComLoading",value:t.loading,expression:"loading"}],staticClass:"content",attrs:{"com-loading-text":"拼命加载中"}},[i("div",{staticClass:"edit-wx-page live-mager",on:{mousedown:function(e){t.canPass=!1}}},[t._m(0),t._v(" "),i("div",{staticClass:"mager-box border-box"},[i("div",{staticClass:"from-box "},[i("div",{staticClass:"from-row"},[t._m(1),t._v(" "),i("div",{staticClass:"from-content"},[i("com-input",{staticClass:"msg-title",attrs:{value:t.titleValue,placeholder:"请输入标题","max-length":15,"error-tips":t.errorData.titleError},on:{"update:value":function(e){t.titleValue=e},focus:function(e){t.errorData.titleError=""}}})],1)]),t._v(" "),i("div",{staticClass:"from-row"},[t._m(2),t._v(" "),i("div",{staticClass:"from-content",on:{click:function(e){t.errorData.msgError=""}}},[i("com-input",{staticClass:"msg-content",attrs:{type:"textarea",value:t.wxContent,placeholder:"请输入微信内容","max-length":100,"error-tips":t.errorData.msgError},on:{"update:value":function(e){t.wxContent=e}}})],1)]),t._v(" "),i("div",{staticClass:"from-row",staticStyle:{padding:"4px 12px"}},[i("div",{staticClass:"from-title"},[t._v("收信人：")]),t._v(" "),i("div",{staticClass:"from-content"},[i("el-button",{staticClass:"default-button select-receiver",on:{click:function(e){t.selectPersonShow=!0}}},[t._v("选择收信人")]),t._v(" "),i("ve-tips",{attrs:{tip:"微信通知只能发送给关注该公众号或服务号的人群，已选收件人中没有关注微信的，将无法收到该通知。",tipType:"html"}}),t._v(" "),t.selectedGroupList.length?i("transition-group",{staticClass:"edit-groups",attrs:{name:"list",tag:"div"}},t._l(t.selectedGroupList,function(e,s){return i("span",{key:e.id,staticClass:"list-item"},[t._v(t._s(e.name)+" ("+t._s(e.count)+"人）\n                "),i("i",{staticClass:"iconfont icon-shanchu",on:{click:function(e){t.delGroupPerson(s)}}})])})):t._e(),t._v(" "),t.selectedTagList.length?i("transition-group",{staticClass:"edit-groups sec",attrs:{name:"list",tag:"div"}},t._l(t.selectedTagList,function(e,s){return i("span",{key:e.id,staticClass:"list-item"},[t._v(t._s(e.name)+" ("+t._s(e.count)+"人\n                "),i("i",{staticClass:"iconfont icon-shanchu",on:{click:function(e){t.delTagPerson(s)}}})])})):t._e()],1)]),t._v(" "),i("div",{staticClass:"from-row"},[t._m(3),t._v(" "),i("div",{staticClass:"from-content"},[[i("el-radio",{attrs:{label:"SEND"},model:{value:t.sendSetting,callback:function(e){t.sendSetting=e},expression:"sendSetting"}},[t._v("立即发送")]),t._v(" "),i("el-radio",{attrs:{label:"AWAIT"},model:{value:t.sendSetting,callback:function(e){t.sendSetting=e},expression:"sendSetting"}},[t._v("定时发送")])]],2)]),t._v(" "),t.pickDate?i("div",{staticClass:"from-row"},[i("div",{staticClass:"from-title"},[t._v("选择时间：")]),t._v(" "),i("div",{staticClass:"from-content"},[i("el-date-picker",{attrs:{editable:!1,format:"yyyy-MM-dd HH:mm:ss","value-format":"yyyy-MM-dd HH:mm:ss",type:"datetime",placeholder:"选择日期时间","picker-options":t.pickerOptions},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1)]):t._e(),t._v(" "),i("com-phone",{attrs:{titleValue:t.titleValue,date:t.date,wxContent:t.wxContent,isWx:!0}})],1),t._v(" "),i("div",{staticClass:"btn-group"},[i("el-button",{staticClass:"default-button",on:{click:t.testSend}},[t._v("测试发送")]),t._v(" "),i("el-button",{staticClass:"primary-button",attrs:{disabled:t.saveDisabled},on:{click:t.save}},[t._v("保存")])],1)]),t._v(" "),i("choose-group",{attrs:{webinarType:"WECHAT",show:t.selectPersonShow,groupList:t.groupList,tagList:t.tagList,checkedData:t.checkedData},on:{okSelectList:t.okSelectList,close:t.close,searchEnter:t.searchEnter,selectedGroupListfn:t.selectedGroupListfn,selectedTagListfn:t.selectedTagListfn}}),t._v(" "),t.testModal?i("com-test",{attrs:{imgUrl:t.qrImgurl,type:"Wechat",deliverd:t.deliverd},on:{closeTest:t.closeTest,"update:deliverd":function(e){t.deliverd=e}}}):t._e()],1)])};s._withStripped=!0;var n=i(97),a=i.n(n),o=i(136),r=i.n(o),c=i(30),d=i.n(c),l=i(472),u=i(96),h=i(656),f=i(659),p=i(660),g=i(473),v=i(654),m=i(490),_=i(483),C=i(661),I=i(95),k=i(15),L={data:function(){return{inviteId:this.$route.query.id,activityId:this.$route.params.id,testModal:!1,tabValue:1,searchTitle:"",titleValue:"",groupIdx:0,tagIdx:0,tplOptions:[{value:1,label:"活动邀请"},{value:2,label:"活动推荐"}],sendSetting:"SEND",wxContent:"",qrImgurl:"",pickDate:!1,date:"",pickerOptions:{disabledDate:function(t){return t.getTime()<Date.now()-864e5}},loading:!1,searchPerson:"",groupList:[],tagList:[],selectedGroupList:[],selectedTagList:[],selectedGroupListStr:"",selectedTagListStr:"",selectPersonShow:!1,errorData:{titleError:"",msgError:"",tagError:""},checkedData:[],isValided:!1,canPass:!0,sdkParam:{},saveDisabled:!1,deliverd:!1,groupIdStr:"",tagIdStr:""}},created:function(){var t=this;this.inviteId&&this.$config({loading:!0}).$get(g.a.GET_QUERY_WECHAT,{inviteId:this.inviteId}).then(function(e){t.titleValue=e.data.title,t.sendSetting=e.data.status,t.date=e.data.sendTime?e.data.sendTime.toString():e.data.planTime.toString(),t.wxContent=e.data.desc,setTimeout(function(){t.reArrangeList(e.data.groupId.split(","),e.data.tagId.split(","))},500)}),this.queryGroupList(),this.queryTaglist()},mounted:function(){var t=this;this.accountInfo.businessUserId?this.initSdk():this.storeJoininfo().then(function(){t.initSdk()})},computed:d()({},Object(I.c)("login",{accountInfo:function(t){return t.accountInfo}})),methods:d()({},Object(I.b)("login",{setAccountInfo:k.a}),{closeModal:function(t){"modal-cover"===t.target.className&&(this.testModal=!1,this.groupIdx=0,this.tagIdx=0)},chooseGroup:function(t){this.groupIdx=t},chooseTag:function(t){this.tagIdx=t},save:function(){var t=this;this.saveDisabled=!0,this.canPass=!0;var e={inviteId:this.inviteId,activityId:this.$route.params.id,title:this.titleValue,groupId:this.groupIdStr,tagId:this.tagIdStr,status:this.sendSetting.toLowerCase(),desc:this.wxContent,planTime:this.date};if(!this.formValid())return!1;this.$nextTick(function(i){t.$post(g.a.POST_SAVE_WECHAT,e).then(function(e){t.$toast({content:"保存成功",position:"center"}),t.canPass=!0,t.$router.push({name:"promoteWechat",params:{id:t.activityId}})})})},testSend:function(){var t=this;if(!this.formValid())return!1;this.$nextTick(function(e){t.isValided&&(t.testModal=!0,t.qrImgurl="http://aliqr.e.vhall.com/qr.png?t="+encodeURIComponent("http://"+window.location.host+"/api/expand/wechat-invite/test-send?content="+t.wxContent+"&activityId="+t.activityId))})},closeTest:function(){this.testModal=!1},searchEnter:function(t,e){"group"===e?this.queryGroupList(t):this.queryTagList(t)},okSelectList:function(){this.selectPersonShow=!1},close:function(){this.selectPersonShow=!1},delPerson:function(t){var e=this.groupList.indexOf(this.selectedGroupList[t]);this.groupList[e].isChecked=!1},delGroupPerson:function(t){var e=this.groupList.indexOf(this.selectedGroupList[t]);this.groupList[e].isChecked=!1},queryGroupList:function(t){var e=this;this.$get(l.a.GET_GROUP_LIST,{keyword:t,not_empty_field:"wx_open_id"}).then(function(t){var i=[];t.data.list.forEach(function(t){i.push({id:t.group_id,name:t.title,count:t.user_count,isChecked:!1})}),e.groupList=i})},queryTaglist:function(t){var e=this;this.$get(l.a.GET_TAG_LIST,{keyword:t}).then(function(t){console.log(t.data.list);var i=[];t.data.list.forEach(function(t){i.push({id:t.tag_id,name:t.tag_name,count:t.user_count,isChecked:!1})}),e.tagList=i})},selectedGroupListfn:function(t,e,i){this.selectedGroupListStr=e.substring(0,e.length-1),this.selectedGroupList=t,this.groupIdStr=i},selectedTagListfn:function(t,e,i){this.selectedTagListStr=e.substring(0,e.length-1),this.selectedTagList=t,this.tagIdStr=i},reArrangeList:function(t,e){var i=this;this.groupList.forEach(function(e,s){t.forEach(function(t,n){1*t===e.id&&(i.groupList[s].isChecked=!0,i.selectedGroupList.push({count:0,id:e.id,isChecked:!0,name:e.name}))})}),this.tagList.forEach(function(t,s){e.forEach(function(e,n){1*e===t.id&&(i.tagList[s].isChecked=!0,i.selectedTagList.push({count:0,id:t.id,isChecked:!0,name:t.name}))})})},formValid:function(){return this.errorData.titleError=this.titleValue.length?"":"请输入通知标题",this.errorData.msgError=this.wxContent.length?"":"请输入微信内容",this.titleValue.length&&this.wxContent.length?(this.isValided=!0,!0):(this.isValided=!1,!1)},listenMsg:function(t){console.log(t)},initSdk:function(){var t=this;this.$get(p.a.GET_PAAS_SDK_INFO).then(function(e){t.$nextTick(function(){t.sdkParam.sign=e.data.sign,t.sdkParam.signed_at=e.data.signedAt,t.sdkParam.app_id=e.data.appId,t.sdkPlayParam={app_id:e.data.appId,accountId:e.data.accountId,token:e.data.token,recordId:"",linkVideo:""}})}),this.initMsgServe()},initMsgServe:function(){var t=this;return r()(a.a.mark(function e(){var i;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$get(p.a.GET_REG_SDK_INFO,{thirdUserId:t.accountInfo.businessUserId,channel:t.accountInfo.channelRoom}).then(function(t){return t.data});case 2:i=e.sent,f.a.OBJ.init({accountId:i.accountId,token:i.token,appId:i.appId,channelId:i.channelRoom}),f.a.OBJ.regHandler(C.a.wechat_msg,function(e){console.log(e),t.deliverd=!0});case 5:case"end":return e.stop()}},e,t)}))()},storeJoininfo:function(){var t=this;return r()(a.a.mark(function e(){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$get(u.a.GET_ACCOUNT).then(function(e){t.setAccountInfo(e.data)});case 2:case"end":return e.stop()}},e,t)}))()}}),beforeRouteLeave:function(t,e,i){if(this.canPass)return i(!0),!1;this.$messageBox({header:"提示",width:"400px",content:"是否放弃当前编辑？",cancelText:"否",confirmText:"是",handleClick:function(t){"confirm"===t.action?i(!0):i(!1)}})},watch:{sendSetting:{handler:function(t){this.canPass=!0,this.pickDate="AWAIT"===t}}},components:{comTest:v.a,comPhone:m.a,chooseGroup:h.a,veTips:_.a}},T=(i(742),i(743),i(744),i(1)),w=Object(T.a)(L,s,[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"live-title"},[e("span",{staticClass:"title"},[this._v("创建微信通知")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"from-title"},[e("i",{staticClass:"star"},[this._v("*")]),this._v("通知标题：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"from-title"},[e("i",{staticClass:"star"},[this._v("*")]),this._v("微信内容：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"from-title"},[e("i",{staticClass:"star"},[this._v("*")]),this._v("发送时间：")])}],!1,null,"08eecc18",null);w.options.__file="src/pages/live-mager/promote/wechat/edit.vue";e.default=w.exports}}]);
//# sourceMappingURL=14.182e13d8.js.map