(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{525:function(e,t,i){},526:function(e,t,i){},704:function(e,t,i){"use strict";var s=i(525);i.n(s).a},705:function(e,t,i){"use strict";var s=i(526);i.n(s).a},907:function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"live-mager"},[e._m(0),e._v(" "),i("div",{staticClass:"mager-box"},[i("div",{staticClass:"from-box"},[i("div",{staticClass:"from-row"},[i("div",{staticClass:"from-title"},[e._v("活动提醒：")]),e._v(" "),i("div",{staticClass:"from-content"},[i("el-checkbox",{model:{value:e.reminder.isSwitch,callback:function(t){e.$set(e.reminder,"isSwitch",t)},expression:"reminder.isSwitch"}},[e._v("开启")]),e._v(" "),i("span",{staticClass:"msg-tip"},[e._v("开启后，可以对观众进行活动提醒，每场活动最多只能选择发送2次")])],1)]),e._v(" "),i("div",{staticClass:"from-row"},[e._m(1),e._v(" "),i("div",{staticClass:"from-content"},[i("div",{staticClass:"input-box"},[i("el-input",{attrs:{type:"textarea",rows:2},model:{value:e.reminder.name,callback:function(t){e.$set(e.reminder,"name",t)},expression:"reminder.name"}})],1)])]),e._v(" "),i("div",{staticClass:"from-row"},[i("div",{staticClass:"from-title"},[e._v("短信签名：")]),e._v(" "),i("div",{staticClass:"from-content"},[i("div",{staticClass:"input-box"},[i("el-input",{attrs:{type:"textarea",rows:2},model:{value:e.reminder.message,callback:function(t){e.$set(e.reminder,"message",t)},expression:"reminder.message"}})],1)])]),e._v(" "),i("div",{staticClass:"from-row"},[i("div",{staticClass:"from-title"},[e._v("通知方式：")]),e._v(" "),i("div",{staticClass:"from-content"},[i("el-checkbox-group",{model:{value:e.reminder.reminderType,callback:function(t){e.$set(e.reminder,"reminderType",t)},expression:"reminder.reminderType"}},e._l(e.reminderTypes,function(t){return i("el-checkbox",{key:t.value,attrs:{label:t.label}},[e._v(e._s(t.label)+"\n            ")])}))],1)]),e._v(" "),i("div",{staticClass:"from-row"},[i("div",{staticClass:"from-title"},[e._v("通知时间：")]),e._v(" "),i("div",{staticClass:"from-content"},[i("el-checkbox-group",{model:{value:e.reminder.reminderTime,callback:function(t){e.$set(e.reminder,"reminderTime",t)},expression:"reminder.reminderTime"}},e._l(e.reminderTimes,function(t){return i("el-checkbox",{key:t.value,attrs:{label:t.label}},[e._v(e._s(t.label)+"\n            ")])}))],1)]),e._v(" "),i("div",{staticClass:"from-row"},[i("div",{staticClass:"from-title"},[e._v("通知范围：")]),e._v(" "),i("div",{staticClass:"from-content"},[i("el-select",{attrs:{disabled:"",placeholder:"请选择"},model:{value:e.reminder.reminderRand,callback:function(t){e.$set(e.reminder,"reminderRand",t)},expression:"reminder.reminderRand"}},e._l(e.randOptions,function(e){return i("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1)]),e._v(" "),i("div",{staticClass:"from-row"},[i("div",{staticClass:"from-title"}),e._v(" "),i("div",{staticClass:"from-content"},[i("el-button",{staticClass:"live-btn",attrs:{type:"primary",plain:""},on:{click:e.saveRemider}},[e._v("保存")])],1)])]),e._v(" "),e._m(2)])])};s._withStripped=!0;var a=i(99),r=i(471),n=i(469),l={name:"reminder",components:{ComUpload:a.a,VeUpload:r.a},data:function(){return{reminderTypes:[{value:"0",label:"短信通知"},{value:"1",label:"微信通知"}],reminderTimes:[{value:"0",label:"提前1天"},{value:"1",label:"提前1小时"},{value:"2",label:"提前10分钟"},{value:"3",label:"活动开始时"}],randOptions:[{value:"0",label:"预约用户"},{value:"1",label:"报名用户"},{value:"2",label:"邀请用户"}],reminder:{isSwitch:!1,reminderType:[],reminderTime:[],reminderRand:"0",message:"",name:""}}},created:function(){this.$route.params.id?this.queryReminInfo():this.goBack()},methods:{goBack:function(){this.$router.go(-1)},queryReminInfo:function(){this.$get(n.a.GET_REMINDER_INFO,{id:this.$route.params.id})},saveRemider:function(){this.$post(n.a.POST_REMINDER_INFO,this.reminder)}}},o=(i(704),i(705),i(1)),c=Object(o.a)(l,s,[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"live-title"},[t("span",[this._v("活动提醒")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"from-title"},[t("i",{staticClass:"star"},[this._v("*")]),this._v("活动名称：")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"from-left"},[t("div",{staticClass:"phone-menu"},[this._v("\n        预览\n        "),t("nav",[t("span",[this._v("短信")]),this._v(" "),t("span",[this._v("微信")])])]),this._v(" "),t("div",{staticClass:"phone-box"},[t("div",{staticClass:"phone"})])])}],!1,null,"cd1e48e4",null);c.options.__file="src/pages/live-mager/reminder.vue";t.default=c.exports}}]);
//# sourceMappingURL=30.d20d9e7f.js.map