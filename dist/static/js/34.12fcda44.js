(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{499:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content"},[e("p",[t._v("编辑微信通知2")]),t._v(" "),e("div",{staticClass:"from-box"},[e("div",{staticClass:"from-row"},[e("div",{staticClass:"from-title"},[t._v("短信模板：")]),t._v(" "),e("div",{staticClass:"from-content"},[e("el-select",{attrs:{placeholder:"请选择"},on:{change:t.selChange},model:{value:t.tplValue,callback:function(a){t.tplValue=a},expression:"tplValue"}},t._l(t.tplOptions,function(t){return e("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))],1)]),t._v(" "),e("div",{staticClass:"from-row"},[e("div",{staticClass:"from-title"},[t._v("短信签名：")]),t._v(" "),e("div",{staticClass:"from-content"},[e("com-input",{attrs:{value:t.tplData.tag,placeholder:"请输入签名","max-length":8,disabled:""},on:{"update:value":function(a){t.$set(t.tplData,"tag",a)}}})],1)]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),e("div",{staticClass:"from-row"},[e("div",{staticClass:"from-title"}),t._v(" "),e("div",{staticClass:"from-content"},[e("el-button",[t._v("测试")]),t._v(" "),e("el-button",{on:{click:t.save}},[t._v("保存")])],1)])]),t._v(" "),e("send-tpl",{attrs:{isDom:!0,type:t.tplData.type,tpl:t.tplData.tpl,tag:t.tplData.tag,webinarName:t.tplData.webinarName,hostName:t.tplData.hostName,date:t.tplData.date,triggerType:t.tplData.triggerType,firstCount:t.tplData.firstCount,secondCount:t.tplData.secondCount}})],1)};s._withStripped=!0;var i=e(719),l=e(533),n={data:function(){return{activityId:this.$route.params.id,noticeId:this.$route.query.noticeId,webinarName:"",sign:"",tplOptions:[],tplValue:1,tplData:{type:"msg",tpl:1,tag:"",webinarName:"",hostName:"",date:"",triggerType:""}}},created:function(){this.noticeId?(this.getParams(),this.getTpl()):(this.tplData.triggerType=this.$route.query.timing,this.getParams(),this.pushOption(this.$route.query.timing))},methods:{selChange:function(t){this.tplData.tpl=t},save:function(){var t=this,a={activityId:this.activityId,templateId:this.tplValue,triggerType:this.tplData.triggerType,type:"SMS"};this.$post(l.a.POST_AUTO_SAVE_TASK,a).then(function(a){t.$toast({content:"保存成功",position:"center"}),t.$router.push({name:"auto",params:{id:t.activityId}})})},getParams:function(){var t=this;this.$get(l.a.GET_AUTO_PARAMS,{activityId:this.activityId}).then(function(a){t.tplData.tag=a.data.tag,t.tplData.webinarName=a.data.webinarName,t.tplData.date=a.data.date,t.tplData.hostName=a.data.hostName,t.tplData.firstCount=a.data.firstCount,t.tplData.secondCount=a.data.secondCount})},getTpl:function(){var t=this;this.$get(l.a.POST_AUTO_FIND_TASK,{noticeTaskId:this.noticeId}).then(function(a){t.tplData.tpl=a.data.templateId,t.tplData.triggerType=a.data.triggerType,t.pushOption(t.tplData.triggerType)})},pushOption:function(t){switch(t){case"BEFORE_ORDER":this.tplValue=1,this.tplOptions.push({value:1,label:"预约成功通知"});break;case"BEFORE_APPLY":this.tplValue=2,this.tplOptions.push({value:2,label:"报名成功通知"});break;case"BEFORE_HOUR":case"BEFORE_MINUTE":this.tplValue=3,this.tplOptions.push({value:3,label:"开播提醒通知"});break;case"SUBSCRIBE":this.tplValue=4,this.tplOptions.push({value:4,label:"订阅成功提醒"});break;case"REPLAY":this.tplValue=5,this.tplOptions.push({value:5,label:"回放设置成功提醒"})}}},watch:{},components:{sendTpl:i.a}},o=(e(825),e(1)),p=Object(o.a)(n,s,[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"from-row"},[a("div",{staticClass:"from-title"},[this._v("接收人：")]),this._v(" "),a("div",{staticClass:"from-content"},[a("p",[this._v("预约用户/邀请观看用户/活动报名用户（547人） "),a("span",{staticClass:"show-group"},[this._v(" 查看观众组")])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"from-row"},[a("div",{staticClass:"from-title"},[this._v("发送规则：")]),this._v(" "),a("div",{staticClass:"from-content"},[a("p",[this._v("自动化发送")])])])}],!1,null,"7110fc58",null);p.options.__file="src/pages/live-mager/promote/automation/msg.vue";a.default=p.exports},644:function(t,a,e){},825:function(t,a,e){"use strict";var s=e(644);e.n(s).a}}]);
//# sourceMappingURL=34.12fcda44.js.map