(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{487:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"ComLoading",rawName:"v-ComLoading",value:t.loading,expression:"loading"}],staticClass:"content",attrs:{"com-loading-text":"拼命加载中"}},[i("div",{staticClass:"edit-wx-page live-mager",on:{keydown:function(e){t.canPass=!1}}},[i("div",{staticClass:"live-title"},[t.inviteId?i("span",{staticClass:"title"},[t._v("编辑微信邀约")]):i("span",{staticClass:"title"},[t._v("创建微信邀约")]),t._v(" "),i("com-back",{class:"back-btn"})],1),t._v(" "),i("div",{staticClass:"mager-box border-box"},[i("div",{staticClass:"from-box "},[i("div",{staticClass:"from-row"},[t._m(0),t._v(" "),i("div",{staticClass:"from-content"},[i("com-input",{staticClass:"msg-title",attrs:{value:t.titleValue,placeholder:"请输入标题","max-length":15,"error-tips":t.errorData.titleError},on:{"update:value":function(e){t.titleValue=e},focus:function(e){t.errorData.titleError=""}}})],1)]),t._v(" "),i("div",{staticClass:"from-row"},[t._m(1),t._v(" "),i("div",{staticClass:"from-content",on:{click:function(e){t.errorData.msgError=""}}},[i("com-input",{staticClass:"msg-content",attrs:{type:"textarea",value:t.wxContent,placeholder:"请输入微信内容","max-length":100,"error-tips":t.errorData.msgError},on:{"update:value":function(e){t.wxContent=e}}})],1)]),t._v(" "),i("div",{staticClass:"from-row"},[t._m(2),t._v(" "),i("div",{staticClass:"from-content"},[i("el-radio",{attrs:{label:"GUIDE"},model:{value:t.hrefSetting,callback:function(e){t.hrefSetting=e},expression:"hrefSetting"}},[t._v("活动引导页")]),t._v(" "),i("el-radio",{directives:[{name:"show",rawName:"v-show",value:t.siteOpen,expression:"siteOpen"}],attrs:{label:"WEB"},model:{value:t.hrefSetting,callback:function(e){t.hrefSetting=e},expression:"hrefSetting"}},[t._v("活动官网")]),t._v(" "),i("el-radio",{attrs:{label:"CUSTOM"},model:{value:t.hrefSetting,callback:function(e){t.hrefSetting=e},expression:"hrefSetting"}},[t._v("自定义")]),t._v(" "),"CUSTOM"===t.hrefSetting?i("com-input",{staticClass:"href-box",attrs:{value:t.hrefValue,placeholder:"请输入有效的链接以http://或https://开头","error-tips":t.errorData.hrefError},on:{"update:value":function(e){t.hrefValue=e},focus:function(e){t.errorData.hrefError=""}}}):t._e()],1)]),t._v(" "),i("div",{staticClass:"from-row",staticStyle:{padding:"4px 12px"}},[t._m(3),t._v(" "),i("div",{staticClass:"from-content"},[i("el-button",{staticClass:"default-button select-receiver",on:{click:t.chooseReceiver}},[t._v("选择收信人")]),t._v(" "),i("span",{staticClass:"send-span"},[t._v("发送限额："+t._s(t.sendBalance)+"/"+t._s(t.countBalance))]),t._v(" "),i("ve-tips",{class:"msg-tips",attrs:{tip:"微信邀约只能发送给关注该公众号或服务号的人群，已选收件人中没有关注微信的，将无法收到该通知。",tipType:"html"}}),t._v(" "),t.selectedGroupList.length?i("transition-group",{staticClass:"edit-groups",attrs:{name:"list",tag:"div"}},t._l(t.selectedGroupList,function(e,s){return i("span",{key:e.id,staticClass:"list-item"},[t._v(t._s(e.name)+" ("+t._s(e.count)+"人）\n                "),i("i",{staticClass:"iconfont icon-shanchu",on:{click:function(e){t.delGroupPerson(s)}}})])})):t._e(),t._v(" "),t.selectedTagList.length?i("transition-group",{staticClass:"edit-groups sec",attrs:{name:"list",tag:"div"}},t._l(t.selectedTagList,function(e,s){return i("span",{key:e.id,staticClass:"list-item"},[t._v(t._s(e.name)+" ("+t._s(e.count)+"人\n                "),i("i",{staticClass:"iconfont icon-shanchu",on:{click:function(e){t.delTagPerson(s)}}})])})):t._e(),t._v(" "),t.errorData.sendPersonError?i("div",{staticClass:"error-msg-bottom"},[t._v(t._s(t.errorData.sendPersonError))]):t._e()],1)]),t._v(" "),i("div",{staticClass:"from-row"},[t._m(4),t._v(" "),i("div",{staticClass:"from-content"},[[i("el-radio",{attrs:{label:"SEND"},model:{value:t.sendSetting,callback:function(e){t.sendSetting=e},expression:"sendSetting"}},[t._v("立即发送")]),t._v(" "),i("el-radio",{attrs:{label:"AWAIT"},model:{value:t.sendSetting,callback:function(e){t.sendSetting=e},expression:"sendSetting"}},[t._v("定时发送")])]],2)]),t._v(" "),t.pickDate?i("div",{staticClass:"from-row"},[t._m(5),t._v(" "),i("div",{staticClass:"from-content"},[i("el-date-picker",{attrs:{editable:!1,format:"yyyy-MM-dd HH:mm","value-format":"yyyy-MM-dd HH:mm",type:"datetime",placeholder:"选择日期时间","picker-options":t.pickerOptions,"default-value":t.defaultValue},on:{focus:function(e){t.dateFocus()}},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}}),t._v(" "),t.errorData.awaitTimeError?i("div",{staticClass:"error-msg-bottom"},[t._v(t._s(t.errorData.awaitTimeError))]):t._e()],1)]):t._e(),t._v(" "),i("com-phone",{attrs:{titleValue:t.titleValue,date:t.date,wxContent:t.wxContent,isWx:!0}})],1),t._v(" "),i("div",{staticClass:"btn-group"},[i("el-button",{staticClass:"default-button",on:{click:t.testSend}},[t._v("测试发送")]),t._v(" "),i("el-button",{staticClass:"primary-button",attrs:{disabled:t.saveDisabled},domProps:{innerHTML:t._s("SEND"===t.sendSetting?"立即发送":"确定")},on:{click:t.save}},[t._v("保存")])],1)]),t._v(" "),i("choose-group",{attrs:{webinarType:"WECHAT",show:t.selectPersonShow,groupList:t.groupList,tagList:t.tagList,checkedData:t.checkedData},on:{okSelectList:t.okSelectList,close:t.close,searchEnter:t.searchEnter,selectedGroupListfn:t.selectedGroupListfn,selectedTagListfn:t.selectedTagListfn,totalCount:t.totalCount}}),t._v(" "),t.testModal?i("com-test",{attrs:{imgUrl:t.qrImgurl,type:"Wechat",deliverd:t.deliverd},on:{closeTest:t.closeTest,"update:deliverd":function(e){t.deliverd=e}}}):t._e()],1)])};s._withStripped=!0;var a=i(438),n=i.n(a),r=i(439),o=i.n(r),c=i(26),l=i.n(c),d=i(524),u=i(523),h=i(517),f=i(94),v=i(707),p=i(533),g=i(514),m=i(610),_=i(518),C=i(709),S=i(536),w=i(520),T=i(534),I=i(93),E=i(15),k=i(59),L={data:function(){return{inviteId:this.$route.query.id,activityId:this.$route.params.id,testModal:!1,tabValue:1,searchTitle:"",titleValue:"",hrefValue:"",groupIdx:0,tagIdx:0,tplOptions:[{value:1,label:"活动邀请"},{value:2,label:"活动推荐"}],sendSetting:"SEND",hrefSetting:"GUIDE",wxContent:"",qrImgurl:"",pickDate:!1,date:"",pickerOptions:{disabledDate:function(t){return t.getTime()<Date.now()-864e5}},defaultValue:Object(d.a)(new Date((new Date).getTime()+18e5),"yyyy-MM-dd hh:mm"),loading:!1,searchPerson:"",groupList:[],tagList:[],selectedGroupList:[],selectedTagList:[],selectedGroupListStr:"",selectedTagListStr:"",selectPersonShow:!1,errorData:{hrefError:"",titleError:"",msgError:"",tagError:"",sendPersonError:"",awaitTimeError:""},checkedData:[],isValided:!1,canPass:!0,sdkParam:{},saveDisabled:!1,deliverd:!1,groupIdStr:"",tagIdStr:"",changed:0,countBalance:0,sendBalance:0,clicked:!1,siteOpen:!1}},created:function(){var t=this;this.inviteId&&this.$config({loading:!0}).$get(_.a.GET_QUERY_WECHAT,{inviteId:this.inviteId}).then(function(e){t.titleValue=e.data.title,t.sendSetting=e.data.status,t.date=e.data.sendTime?e.data.sendTime.toString():e.data.planTime.toString(),t.wxContent=e.data.desc,t.sendBalance=e.data.expectNum,setTimeout(function(){t.reArrangeList(e.data.groupId.split(","),e.data.tagId.split(","))},500)}),this.queryGroupList(),this.queryTaglist(),this.getLimit(),k.a.$emit("breads",[{title:"活动管理"},{title:"活动列表",url:"/liveMager/list"},{title:"活动详情",url:"/liveMager/detail/"+this.activityId},{title:"微信邀约",url:"/liveMager/promote/wechat/list/"+this.activityId},{title:this.inviteId?"编辑微信邀约":"新建微信邀约"}])},mounted:function(){var t=this;this.initSite(),this.accountInfo.businessUserId?this.initSdk():this.storeJoininfo().then(function(){t.initSdk()})},computed:l()({},Object(I.c)("login",{accountInfo:function(t){return t.accountInfo}})),methods:l()({},Object(I.b)("login",{setAccountInfo:E.a}),{closeModal:function(t){"modal-cover"===t.target.className&&(this.testModal=!1,this.groupIdx=0,this.tagIdx=0)},chooseGroup:function(t){this.groupIdx=t},chooseTag:function(t){this.tagIdx=t},save:function(){var t=this;this.saveDisabled=!0,setTimeout(function(e){t.saveDisabled=!1},3e3),this.canPass=!0;var e={change:this.changed,inviteId:this.inviteId,activityId:this.$route.params.id,title:this.titleValue,groupId:this.groupIdStr,tagId:this.tagIdStr,status:this.sendSetting.toLowerCase(),desc:this.wxContent,planTime:this.date,urlType:this.hrefSetting,customUrl:"CUSTOM"===this.hrefSetting?this.hrefValue:""};if(!this.formValid())return!1;this.$nextTick(function(i){t.$post(_.a.POST_SAVE_WECHAT,e).then(function(e){t.$toast({content:"SEND"===t.sendSetting?"发送成功":"保存成功"}),t.canPass=!0,t.$router.push({name:"promoteWechat",params:{id:t.activityId}})})})},testSend:function(){var t=this;if(!this.formValid())return!1;this.$nextTick(function(e){t.isValided&&(t.testModal=!0,t.qrImgurl="http://aliqr.e.vhall.com/qr.png?t="+encodeURIComponent("http://"+window.location.host+"/api/expand/wechat-invite/test-send?content="+t.wxContent+"&activityId="+t.activityId))})},closeTest:function(){this.testModal=!1},searchEnter:function(t,e){"group"===e?this.queryGroupList(t):this.queryTagList(t)},okSelectList:function(){this.changed=1,this.selectPersonShow=!1},close:function(){this.selectPersonShow=!1},delPerson:function(t){var e=this.groupList.indexOf(this.selectedGroupList[t]);this.groupList[e].isChecked=!1,this.changed=1},delGroupPerson:function(t){var e=this.groupList.indexOf(this.selectedGroupList[t]);this.groupList[e].isChecked=!1,this.changed=1},queryGroupList:function(t){var e=this;this.$get(h.a.GET_GROUP_LIST,{keyword:t,not_empty_field:"wx_open_id"}).then(function(t){var i=[];t.data.list.forEach(function(t){i.push({id:t.group_id,name:t.title,count:t.user_count,isChecked:!1})}),e.groupList=i})},queryTaglist:function(t){var e=this;this.$get(h.a.GET_TAG_LIST,{keyword:t}).then(function(t){var i=[];t.data.list.forEach(function(t){i.push({id:t.tag_id,name:t.tag_name,count:t.user_count,isChecked:!1})}),e.tagList=i})},selectedGroupListfn:function(t,e,i){this.selectedGroupListStr=e.substring(0,e.length-1),this.selectedGroupList=t,this.groupIdStr=i,this.errorData.sendPersonError=""},selectedTagListfn:function(t,e,i){this.selectedTagListStr=e.substring(0,e.length-1),this.selectedTagList=t,this.tagIdStr=i},reArrangeList:function(t,e){var i=this;this.groupList.forEach(function(e,s){t.forEach(function(t,a){1*t===e.id&&(i.groupList[s].isChecked=!0,i.selectedGroupList.push({count:0,id:e.id,isChecked:!0,name:e.name}))})}),this.tagList.forEach(function(t,s){e.forEach(function(e,a){1*e===t.id&&(i.tagList[s].isChecked=!0,i.selectedTagList.push({count:0,id:t.id,isChecked:!0,name:t.name}))})})},getLimit:function(){var t=this;this.$get(g.a.GET_SEND_LIMIT,{activityId:this.activityId,type:"WECHAT"}).then(function(e){t.countBalance=e.data.balance})},totalCount:function(t){this.clicked&&(this.sendBalance=t)},chooseReceiver:function(){this.selectPersonShow=!0,this.clicked=!0},formValid:function(){if(this.errorData.titleError=this.titleValue.length?"":"请输入通知标题",this.errorData.msgError=this.wxContent.length?"":"请输入微信内容",this.errorData.sendPersonError=this.groupIdStr?"":"请选择收信人","await"!==this.sendSetting.toLowerCase()||this.date||(this.errorData.awaitTimeError="请选择定时发送时间"),this.errorData.sendPersonError)return this.isValided=!1,!1;if("await"===this.sendSetting.toLowerCase()&&!this.date&&this.errorData.awaitTimeError)return this.isValided=!1,!1;if(this.titleValue.length&&this.wxContent.length){if("CUSTOM"===this.hrefSetting){return/(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/.test(this.hrefValue)?(this.errorData.hrefError="",this.isValided=!0,!0):(this.errorData.hrefError="请输入有效的链接以http://或https://开头",this.isValided=!1,!1)}return this.isValided=!0,!0}return this.isValided=!1,!1},listenMsg:function(t){},initSdk:function(){var t=this;this.$get(m.a.GET_PAAS_SDK_INFO).then(function(e){t.$nextTick(function(){t.sdkParam.sign=e.data.sign,t.sdkParam.signed_at=e.data.signedAt,t.sdkParam.app_id=e.data.appId,t.sdkPlayParam={app_id:e.data.appId,accountId:e.data.accountId,token:e.data.token,recordId:"",linkVideo:""}})}),this.initMsgServe()},initMsgServe:function(){var t=this;return o()(n.a.mark(function e(){var i;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$get(m.a.GET_REG_SDK_INFO,{thirdUserId:t.accountInfo.businessUserId,channel:t.accountInfo.channelRoom}).then(function(t){return t.data});case 2:i=e.sent,p.a.OBJ.init({accountId:i.accountId,token:i.token,appId:i.appId,channelId:i.channelRoom}),p.a.OBJ.regHandler(T.a.wechat_msg,function(e){t.deliverd=!0});case 5:case"end":return e.stop()}},e,t)}))()},storeJoininfo:function(){var t=this;return o()(n.a.mark(function e(){return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$get(f.a.GET_ACCOUNT).then(function(e){t.setAccountInfo(e.data)});case 2:case"end":return e.stop()}},e,t)}))()},initSite:function(){var t=this;this.$get(u.a.GET_SITE_DATA,{activityId:this.$route.params.id}).then(function(e){"Y"===e.data.enabled?t.siteOpen=!0:t.siteOpen=!1})},dateFocus:function(){this.date=new Date(this.defaultValue).format("yyyy-MM-dd hh:mm"),this.errorData.awaitTimeError=""}}),beforeRouteLeave:function(t,e,i){if(this.canPass)return i(!0),!1;this.$messageBox({header:"提示",width:"400px",content:"是否放弃当前编辑？",cancelText:"否",confirmText:"是",handleClick:function(t){"confirm"===t.action?i(!0):i(!1)}})},watch:{sendSetting:{handler:function(t){this.canPass=!0,"AWAIT"===t?this.pickDate=!0:(this.pickDate=!1,this.errorData.awaitTimeError="")}}},components:{comTest:C.a,comPhone:S.a,chooseGroup:v.a,veTips:w.a}},b=(i(797),i(798),i(799),i(1)),x=Object(b.a)(L,s,[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"from-title"},[e("i",{staticClass:"star"},[this._v("*")]),this._v("邀约标题：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"from-title"},[e("i",{staticClass:"star"},[this._v("*")]),this._v("微信内容：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"from-title"},[e("i",{staticClass:"star"}),this._v("详情跳转：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"from-title"},[e("i",{staticClass:"star"},[this._v("*")]),this._v("收信人：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"from-title"},[e("i",{staticClass:"star"},[this._v("*")]),this._v("发送时间：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"from-title"},[e("i",{staticClass:"star"},[this._v("*")]),this._v("选择时间：")])}],!1,null,"08eecc18",null);x.options.__file="src/pages/live-mager/promote/wechat/edit.vue";e.default=x.exports},613:function(t,e,i){},614:function(t,e,i){},615:function(t,e,i){},797:function(t,e,i){"use strict";var s=i(613);i.n(s).a},798:function(t,e,i){"use strict";var s=i(614);i.n(s).a},799:function(t,e,i){"use strict";var s=i(615);i.n(s).a}}]);
//# sourceMappingURL=27.34d89cd4.js.map