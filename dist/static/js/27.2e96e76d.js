(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{287:function(t,e,s){},288:function(t,e,s){},289:function(t,e,s){},402:function(t,e,s){"use strict";var i=s(287);s.n(i).a},403:function(t,e,s){"use strict";var i=s(288);s.n(i).a},404:function(t,e,s){"use strict";var i=s(289);s.n(i).a},476:function(t,e,s){"use strict";s.r(e);var i=s(51),n=s.n(i),a=s(76),o=s.n(a),c=s(333),r=s(334),l=s(218),d=s(329),u=s(230),h=s(234),v=s(335),p={data:function(){return{inviteId:this.$route.query.id,activityId:this.$route.params.id,testModal:!1,tabValue:1,searchTitle:"",titleValue:"",groupIdx:0,tagIdx:0,tplOptions:[{value:1,label:"活动邀请"},{value:2,label:"活动推荐"}],sendSetting:"SEND",wxContent:"",qrImgurl:"",pickDate:!1,date:"",pickerOptions:{disabledDate:function(t){return t.getTime()<Date.now()-864e5}},loading:!1,searchPerson:"",personList:[{id:"",name:"",count:0,isChecked:!1}],selectedPersonList:[{id:"",name:"",count:0,isChecked:!1}],selectedPersonListStr:"",selectPersonShow:!1,selectedCount:0,errorData:{titleError:"",msgError:"",tagError:""},isValided:!1,canPass:!0,sdkParam:{},saveDisabled:!1,deliverd:!1}},created:function(){var t=this;this.initSdk(),this.queryPersonList(),this.inviteId&&this.$config({loading:!0}).$get(l.a.GET_QUERY_WECHAT,{inviteId:this.inviteId}).then(function(e){t.titleValue=e.data.title,t.sendSetting=e.data.status,t.date=e.data.sendTime?e.data.sendTime.toString():e.data.planTime.toString(),t.wxContent=e.data.desc})},methods:{closeModal:function(t){"modal-cover"===t.target.className&&(this.testModal=!1,this.groupIdx=0,this.tagIdx=0)},chooseGroup:function(t){this.groupIdx=t},chooseTag:function(t){this.tagIdx=t},save:function(){var t=this;this.saveDisabled=!0,this.canPass=!0;var e={inviteId:this.inviteId,activityId:this.$route.params.id,title:this.titleValue,groupId:"1",status:this.sendSetting.toLowerCase(),desc:this.wxContent,planTime:this.date};if(!this.formValid())return!1;this.$nextTick(function(s){t.$post(l.a.POST_SAVE_WECHAT,e).then(function(e){t.$toast({content:"保存成功",position:"center"}),t.canPass=!0,t.$router.push({name:"promoteWechat",params:{id:t.activityId}})})})},testSend:function(){var t=this;if(!this.formValid())return!1;this.$nextTick(function(e){t.isValided&&(t.testModal=!0,t.qrImgurl="http://aliqr.e.vhall.com/qr.png?t="+encodeURIComponent("http://"+window.location.host+"/api/expand/wechat-invite/test-send?content="+t.wxContent+"&activityId="+t.activityId))})},closeTest:function(){this.testModal=!1},searchEnter:function(){this.queryPersonList()},okSelectList:function(){this.selectPersonShow=!1},handleSelectPerson:function(t){"cancel"===t.action&&(this.selectPersonShow=!1)},clickRow:function(t){this.personList[t].isChecked=!this.personList[t].isChecked},delPerson:function(t){var e=this.personList.indexOf(this.selectedPersonList[t]);this.personList[e].isChecked=!1},queryPersonList:function(){var t=this;this.$get(l.a.GET_PERSON_LIST,{activityId:this.$route.params.id,name:this.searchPerson}).then(function(e){var s=[];e.data.forEach(function(t){s.push({id:t.id,name:t.name,count:0,isChecked:!1})}),t.personList=s})},formValid:function(){return this.errorData.titleError=this.titleValue.length?"":"请输入通知标题",this.errorData.msgError=this.wxContent.length?"":"请输入微信内容",this.titleValue.length&&this.wxContent.length?(this.isValided=!0,!0):(this.isValided=!1,!1)},listenMsg:function(t){console.log(t)},initSdk:function(){var t=this;this.$get(r.a.GET_PAAS_SDK_INFO).then(function(e){t.$nextTick(function(){t.sdkParam.sign=e.data.sign,t.sdkParam.signed_at=e.data.signedAt,t.sdkParam.app_id=e.data.appId,t.sdkPlayParam={app_id:e.data.appId,accountId:e.data.accountId,token:e.data.token,recordId:"",linkVideo:""}})}),this.initMsgServe()},initMsgServe:function(){var t=this;return o()(n.a.mark(function e(){var s,i;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return s=JSON.parse(sessionStorage.getItem("accountInfo")),e.next=3,t.$get(r.a.GET_REG_SDK_INFO,{thirdUserId:s.businessUserId,channel:s.channelRoom}).then(function(t){return t.data});case 3:i=e.sent,c.a.OBJ.init({accountId:i.accountId,token:i.token,appId:i.appId,channelId:i.channelRoom}),c.a.OBJ.regHandler(v.a.wechat_msg,function(e){console.log(e),t.deliverd=!0});case 6:case"end":return e.stop()}},e,t)}))()}},beforeRouteLeave:function(t,e,s){if(this.canPass)return s(!0),!1;this.$messageBox({header:"提示",width:"400px",content:"是否放弃当前编辑？",cancelText:"否",confirmText:"是",handleClick:function(t){"confirm"===t.action?s(!0):s(!1)}})},watch:{sendSetting:{handler:function(t){this.canPass=!0,this.pickDate="AWAIT"===t}},personList:{handler:function(t){var e=this,s=[],i="";t.forEach(function(t,n){t.isChecked&&(s.push(t),e.selectedCount+=t.count,i+=t.name+" ("+t.count+"人）、")}),this.selectedPersonListStr=i.substring(0,i.length-1),this.selectedPersonList=s},deep:!0}},components:{comTest:d.a,comPhone:u.a,veTips:h.a}},m=(s(402),s(403),s(404),s(1)),f=Object(m.a)(p,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"ComLoading",rawName:"v-ComLoading",value:t.loading,expression:"loading"}],staticClass:"content",attrs:{"com-loading-text":"拼命加载中"}},[s("div",{staticClass:"edit-wx-page live-mager",on:{mousedown:function(e){t.canPass=!1}}},[t._m(0),t._v(" "),s("div",{staticClass:"mager-box border-box"},[s("div",{staticClass:"from-box "},[s("div",{staticClass:"from-row"},[t._m(1),t._v(" "),s("div",{staticClass:"from-content"},[s("com-input",{staticClass:"msg-title",attrs:{value:t.titleValue,placeholder:"请输入标题","max-length":15,"error-tips":t.errorData.titleError},on:{"update:value":function(e){t.titleValue=e},focus:function(e){t.errorData.titleError=""}}})],1)]),t._v(" "),s("div",{staticClass:"from-row"},[t._m(2),t._v(" "),s("div",{staticClass:"from-content",on:{click:function(e){t.errorData.msgError=""}}},[s("com-input",{staticClass:"msg-content",attrs:{type:"textarea",value:t.wxContent,placeholder:"请输入短信内容","max-length":100,"error-tips":t.errorData.msgError},on:{"update:value":function(e){t.wxContent=e}}})],1)]),t._v(" "),s("div",{staticClass:"from-row",staticStyle:{padding:"4px 12px"}},[s("div",{staticClass:"from-title"},[t._v("收信人：")]),t._v(" "),s("div",{staticClass:"from-content"},[s("el-button",{staticClass:"default-button select-receiver",on:{click:function(e){t.selectPersonShow=!0}}},[t._v("选择收信人")]),t._v(" "),s("ve-tips",{attrs:{tip:"微信通知只能发送给关注该公众号或服务号的人群，已选收件人中没有关注微信的，将无法收到该通知。",tipType:"html"}}),t._v(" "),t.selectedPersonList.length?s("transition-group",{staticClass:"edit-groups",attrs:{name:"list",tag:"div"}},t._l(t.selectedPersonList,function(e,i){return s("span",{key:e.id,staticClass:"list-item"},[t._v(t._s(e.name)+" ("+t._s(e.count)+"人）\n                "),s("i",{staticClass:"iconfont icon-shanchu",on:{click:function(e){t.delPerson(i)}}})])})):t._e()],1)]),t._v(" "),s("div",{staticClass:"from-row"},[t._m(3),t._v(" "),s("div",{staticClass:"from-content"},[[s("el-radio",{attrs:{label:"SEND"},model:{value:t.sendSetting,callback:function(e){t.sendSetting=e},expression:"sendSetting"}},[t._v("立即发送")]),t._v(" "),s("el-radio",{attrs:{label:"AWAIT"},model:{value:t.sendSetting,callback:function(e){t.sendSetting=e},expression:"sendSetting"}},[t._v("定时发送")])]],2)]),t._v(" "),t.pickDate?s("div",{staticClass:"from-row"},[s("div",{staticClass:"from-title"},[t._v("选择时间：")]),t._v(" "),s("div",{staticClass:"from-content"},[s("el-date-picker",{attrs:{editable:!1,format:"yyyy-MM-dd HH:mm:ss","value-format":"yyyy-MM-dd HH:mm:ss",type:"datetime",placeholder:"选择日期时间","picker-options":t.pickerOptions},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1)]):t._e(),t._v(" "),s("com-phone",{attrs:{titleValue:t.titleValue,date:t.date,wxContent:t.wxContent}})],1),t._v(" "),s("div",{staticClass:"btn-group"},[s("el-button",{staticClass:"default-button",on:{click:t.testSend}},[t._v("测试发送")]),t._v(" "),s("el-button",{staticClass:"primary-button",attrs:{disabled:t.saveDisabled},on:{click:t.save}},[t._v("保存")])],1)]),t._v(" "),t.selectPersonShow?s("message-box",{staticClass:"select-person",attrs:{width:"740px",type:"prompt",header:"选择观众组",confirmText:"确认"},on:{handleClick:t.handleSelectPerson}},[s("div",{staticClass:"select-person-box"},[s("div",{staticClass:"select-nav fl"},[s("div",{staticClass:"select-item active"},[s("i",{staticClass:"iconfont icon-fenzu"}),t._v(" "),s("span",[t._v("分组")])]),t._v(" "),s("div",{staticClass:"select-item"},[s("i",{staticClass:"iconfont icon-biaoqian"}),t._v(" "),s("span",[t._v("标签")])])]),t._v(" "),s("div",{staticClass:"select-content fl"},[s("div",{staticClass:"search-person-box"},[s("com-input",{staticClass:"search-com",attrs:{type:"search",value:t.searchPerson,placeholder:"输入直播名称"},on:{"update:value":function(e){t.searchPerson=e}},nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.searchEnter(e):null}}})],1),t._v(" "),s("div",{staticClass:"select-person-box"},[s("ul",t._l(t.personList,function(e,i){return s("li",{key:e.id,class:{active:e.isChecked},on:{click:function(e){e.stopPropagation(),t.clickRow(i)}}},[t._v("\n                "+t._s(e.name)+" ("+t._s(e.count)+"人）\n                "),s("com-checkbox",{staticClass:"fr",attrs:{small:""},model:{value:e.isChecked,callback:function(s){t.$set(e,"isChecked",s)},expression:"person.isChecked"}})],1)}))])])]),t._v(" "),s("div",{staticClass:"select-bottom",attrs:{slot:"bottom"},slot:"bottom"},[s("span",{staticClass:"select-all fl"},[t._v("已选择"+t._s(t.selectedCount)+"人：")]),t._v(" "),s("div",{staticClass:"select-list fl",attrs:{title:t.selectedPersonListStr}},[t._v("\n          "+t._s(t.selectedPersonListStr)+"\n        ")]),t._v(" "),s("button",{staticClass:"primary-button",on:{click:t.okSelectList}},[t._v("确定")])])]):t._e(),t._v(" "),t.testModal?s("com-test",{attrs:{imgUrl:t.qrImgurl,type:"Wechat",deliverd:t.deliverd},on:{closeTest:t.closeTest,"update:deliverd":function(e){t.deliverd=e}}}):t._e()],1)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"live-title"},[e("span",{staticClass:"title"},[this._v("创建微信通知")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"from-title"},[e("i",{staticClass:"star"},[this._v("*")]),this._v("通知标题：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"from-title"},[e("i",{staticClass:"star"},[this._v("*")]),this._v("微信内容：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"from-title"},[e("i",{staticClass:"star"},[this._v("*")]),this._v("发送时间：")])}],!1,null,"f1c574c2",null);f.options.__file="edit.vue";e.default=f.exports}}]);