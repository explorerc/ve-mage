(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{303:function(t,e,s){},304:function(t,e,s){},305:function(t,e,s){},469:function(t,e,s){"use strict";var i=s(303);s.n(i).a},471:function(t,e,s){"use strict";var i=s(304);s.n(i).a},473:function(t,e,s){"use strict";var i=s(305);s.n(i).a},570:function(t,e,s){"use strict";s.r(e);var i=s(234),a=s(337),n=s(239),o={data:function(){return{inviteId:this.$route.query.id,activitId:this.$route.params.id,webinarName:"活动名字啊啊啊",testModal:!1,tabValue:1,searchTitle:"",titleValue:"",groupIdx:0,tagIdx:0,tplOptions:[{value:1,label:"活动邀请"},{value:2,label:"活动推荐"}],sendOptions:[{value:"AWAIT",label:"定时发送"},{value:"SEND",label:"立即发送"},{value:"DRAFT",label:"暂存为草稿"}],sendSetting:"SEND",pickDate:!1,msgTag:"",msgContent:"",date:(new Date).toString(),pickerOptions:{disabledDate:function(t){return t.getTime()<Date.now()-864e5}},loading:!1,searchPerson:"",personList:[{id:"",name:"",count:0,isChecked:!1}],selectedPersonList:[{id:"",name:"",count:0,isChecked:!1}],selectedPersonListStr:"",selectPersonShow:!1,selectedCount:0,errorData:{titleError:"",msgError:"",tagError:""},isValided:!1}},created:function(){var t=this;this.queryPersonList(),this.inviteId&&i.a.queryMsg(this.inviteId).then(function(e){t.titleValue=e.data.title,t.sendSetting=e.data.status,t.date=e.data.sendTime.toString(),t.msgContent=e.data.desc,t.msgTag=e.data.signature}).catch(function(t){console.log(t)})},methods:{closeModal:function(t){"modal-cover"===t.target.className&&(this.groupIdx=0,this.tagIdx=0)},chooseGroup:function(t){this.groupIdx=t},chooseTag:function(t){this.tagIdx=t},save:function(){var t=this,e={inviteId:this.inviteId,activityId:this.$route.params.id,title:this.titleValue,groupId:"1",status:this.sendSetting.toLowerCase(),sendTime:this.date,desc:this.msgContent,signature:this.msgTag};i.a.saveMsg(e).then(function(e){t.$toast({content:"保存成功",position:"center"}),t.$router.push({name:"promoteMsg",params:{id:t.activitId}})}).catch(function(e){t.$toast({content:"保存失败",position:"center"})})},test:function(){var t=this;this.formValid(),this.$nextTick(function(e){t.isValided&&(t.testModal=!0)})},closeTest:function(){this.testModal=!1},searchEnter:function(){this.queryPersonList()},okSelectList:function(){this.selectPersonShow=!1},handleSelectPerson:function(t){"cancel"===t.action&&(this.selectPersonShow=!1)},clickRow:function(t){this.personList[t].isChecked=!this.personList[t].isChecked},delPerson:function(t){var e=this.personList.indexOf(this.selectedPersonList[t]);this.personList[e].isChecked=!1},queryPersonList:function(){var t=this;i.a.queryPersonList({activityId:this.$route.params.id,name:this.searchPerson}).then(function(e){var s=[];e.data.forEach(function(t){s.push({id:t.id,name:t.name,count:0,isChecked:!1})}),t.personList=s})},formValid:function(){this.errorData.titleError=this.titleValue.length?"":"请输入通知标题",this.errorData.msgError=this.msgContent.length?"":"请输入短信内容",this.errorData.tagError=this.msgTag.length?"":"请输入短信标签",this.titleValue.length&&this.msgTag.length&&this.msgContent.length?this.isValided=!0:this.isValided=!1}},watch:{sendSetting:{handler:function(t){this.pickDate="AWAIT"===t}},personList:{handler:function(t){var e=this,s=[],i="";t.forEach(function(t,a){t.isChecked&&(s.push(t),e.selectedCount+=t.count,i+=t.name+" ("+t.count+"人）、")}),this.selectedPersonListStr=i.substring(0,i.length-1),this.selectedPersonList=s},deep:!0}},components:{comTest:a.a,comPhone:n.a}},r=(s(469),s(471),s(473),s(1)),c=Object(r.a)(o,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"ComLoading",rawName:"v-ComLoading",value:t.loading,expression:"loading"}],staticClass:"content",attrs:{"com-loading-text":"拼命加载中"}},[s("div",{staticClass:"edit-msg-page live-mager"},[t._m(0),t._v(" "),s("div",{staticClass:"mager-box border-box"},[s("div",{staticClass:"from-box"},[s("div",{staticClass:"from-row"},[t._m(1),t._v(" "),s("div",{staticClass:"from-content"},[s("com-input",{attrs:{value:t.titleValue,placeholder:"请输入标题","max-length":30,"error-tips":t.errorData.titleError},on:{"update:value":function(e){t.titleValue=e},focus:function(e){t.errorData.titleError=""}}})],1)]),t._v(" "),s("div",{staticClass:"from-row"},[s("div",{staticClass:"from-title"},[t._v("接收人：")]),t._v(" "),s("div",{staticClass:"from-content"},[s("el-button",{staticClass:"default-button select-receiver",on:{click:function(e){t.selectPersonShow=!0}}},[t._v("选择收信人")]),t._v(" "),t.selectedPersonList.length?s("transition-group",{staticClass:"edit-groups",attrs:{name:"list",tag:"div"}},t._l(t.selectedPersonList,function(e,i){return s("span",{key:e.id,staticClass:"list-item"},[t._v(t._s(e.name)+" ("+t._s(e.count)+"人）\n                "),s("i",{staticClass:"iconfont icon-shanchu",on:{click:function(e){t.delPerson(i)}}})])})):t._e()],1)]),t._v(" "),s("div",{staticClass:"from-row"},[t._m(2),t._v(" "),s("div",{staticClass:"from-content",on:{click:function(e){t.errorData.msgError=""}}},[s("com-input",{staticClass:"msg-content",attrs:{type:"textarea",value:t.msgContent,placeholder:"请输入短信内容","max-length":60,"error-tips":t.errorData.msgError},on:{"update:value":function(e){t.msgContent=e}}})],1)]),t._v(" "),s("div",{staticClass:"from-row"},[t._m(3),t._v(" "),s("div",{staticClass:"from-content"},[s("com-input",{attrs:{value:t.msgTag,placeholder:"请输入签名","max-length":10,"error-tips":t.errorData.tagError},on:{"update:value":function(e){t.msgTag=e},focus:function(e){t.errorData.tagError=""}}})],1)]),t._v(" "),s("div",{staticClass:"from-row"},[t._m(4),t._v(" "),s("div",{staticClass:"from-content"},[[s("el-radio",{attrs:{label:"SEND"},model:{value:t.sendSetting,callback:function(e){t.sendSetting=e},expression:"sendSetting"}},[t._v("立即发送")]),t._v(" "),s("el-radio",{attrs:{label:"AWAIT"},model:{value:t.sendSetting,callback:function(e){t.sendSetting=e},expression:"sendSetting"}},[t._v("定时发送")])]],2)]),t._v(" "),t.pickDate?s("div",{staticClass:"from-row"},[s("div",{staticClass:"from-title"},[t._v("选择时间：")]),t._v(" "),s("div",{staticClass:"from-content"},[s("el-date-picker",{attrs:{format:"yyyy-MM-dd HH:mm:ss","value-format":"yyyy-MM-dd HH:mm:ss",type:"datetime",placeholder:"选择日期时间","picker-options":t.pickerOptions},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1)]):t._e(),t._v(" "),s("com-phone",{attrs:{date:t.date,wxContent:t.msgContent,msgTag:t.msgTag,isWx:!1}})],1),t._v(" "),s("div",{staticClass:"btn-group"},[s("el-button",{staticClass:"default-button",on:{click:t.test}},[t._v("测试发送")]),t._v(" "),s("el-button",{staticClass:"primary-button",on:{click:t.save}},[t._v("保存")])],1)]),t._v(" "),t.selectPersonShow?s("message-box",{staticClass:"select-person",attrs:{width:"740px",type:"prompt",header:"选择观众组",confirmText:"确认"},on:{handleClick:t.handleSelectPerson}},[s("div",{staticClass:"select-person-box"},[s("div",{staticClass:"select-nav fl"},[s("div",{staticClass:"select-item active"},[s("i",{staticClass:"iconfont icon-fenzu"}),t._v(" "),s("span",[t._v("分组")])]),t._v(" "),s("div",{staticClass:"select-item"},[s("i",{staticClass:"iconfont icon-biaoqian"}),t._v(" "),s("span",[t._v("标签")])])]),t._v(" "),s("div",{staticClass:"select-content fl"},[s("div",{staticClass:"search-person-box"},[s("com-input",{staticClass:"search-com",attrs:{type:"search",value:t.searchPerson,placeholder:"输入直播名称"},on:{"update:value":function(e){t.searchPerson=e}},nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.searchEnter(e):null}}})],1),t._v(" "),s("div",{staticClass:"select-person-box"},[s("ul",t._l(t.personList,function(e,i){return s("li",{key:e.id,class:{active:e.isChecked},on:{click:function(e){e.stopPropagation(),t.clickRow(i)}}},[t._v("\n                "+t._s(e.name)+" ("+t._s(e.count)+"人）\n                "),s("com-checkbox",{staticClass:"fr",attrs:{small:""},model:{value:e.isChecked,callback:function(s){t.$set(e,"isChecked",s)},expression:"person.isChecked"}})],1)}))])])]),t._v(" "),s("div",{staticClass:"select-bottom",attrs:{slot:"bottom"},slot:"bottom"},[s("span",{staticClass:"select-all fl"},[t._v("已选择"+t._s(t.selectedCount)+"人：")]),t._v(" "),s("div",{staticClass:"select-list fl",attrs:{title:t.selectedPersonListStr}},[t._v("\n          "+t._s(t.selectedPersonListStr)+"\n        ")]),t._v(" "),s("button",{staticClass:"primary-button",on:{click:t.okSelectList}},[t._v("确定")])])]):t._e()],1),t._v(" "),t.testModal?s("com-test",{attrs:{msgContent:t.msgContent,type:"SMS"},on:{closeTest:t.closeTest}}):t._e()],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"live-title"},[e("span",{staticClass:"title"},[this._v("创建短信通知")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"from-title"},[e("i",{staticClass:"star"},[this._v("*")]),this._v("通知标题：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"from-title"},[e("i",{staticClass:"star"},[this._v("*")]),this._v("短信内容：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"from-title"},[e("i",{staticClass:"star"},[this._v("*")]),this._v("短信签名：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"from-title"},[e("i",{staticClass:"star"},[this._v("*")]),this._v("发送时间：")])}],!1,null,"6e823595",null);c.options.__file="edit.vue";e.default=c.exports}}]);