(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{545:function(t,s,a){},546:function(t,s,a){},679:function(t,s,a){"use strict";var i=a(545);a.n(i).a},680:function(t,s,a){"use strict";var i=a(546);a.n(i).a},788:function(t,s,a){"use strict";a.r(s);var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{directives:[{name:"ComLoading",rawName:"v-ComLoading",value:t.loading,expression:"loading"}],staticClass:"content",attrs:{"com-loading-text":"拼命加载中"}},[a("div",{staticClass:"overview-wx-page live-mager"},[t._m(0),t._v(" "),a("div",{staticClass:"mager-box border-box"},[a("div",{staticClass:"from-box"},[a("div",{staticClass:"from-row"},[a("div",{staticClass:"from-title"},[t._v("短信标题：")]),t._v(" "),a("div",{staticClass:"from-content"},[t._v("\n            "+t._s(t.title)+"\n          ")])]),t._v(" "),a("div",{staticClass:"from-row"},[a("div",{staticClass:"from-title"},[t._v("收件人：")]),t._v(" "),a("div",{staticClass:"from-content"},[t._v("\n            "+t._s(t.group)+"\n            "),"SEND"===t.status?a("el-button",{staticClass:"send-detail default-button"},[t._v("发送详情")]):t._e()],1)]),t._v(" "),a("div",{staticClass:"from-row"},[a("div",{staticClass:"from-title"},[t._v("发送状态：")]),t._v(" "),a("div",{staticClass:"from-content"},["SEND"===t.status?a("span",{staticClass:"SEND"},[a("i"),t._v("已发送")]):t._e(),t._v(" "),"AWAIT"===t.status?a("span",{staticClass:"AWAIT"},[a("i"),t._v("已定时")]):t._e(),t._v(" "),"DRAFT"===t.status?a("span",{staticClass:"DRAFT"},[a("i"),t._v("草稿")]):t._e()])]),t._v(" "),a("div",{staticClass:"from-row"},[a("div",{staticClass:"from-title"},[t._v("发送时间：")]),t._v(" "),a("div",{staticClass:"from-content"},[t._v("\n            "+t._s(t.date)+"\n          ")])]),t._v(" "),t._m(1),t._v(" "),a("com-phone",{attrs:{titleValue:t.title,date:t.date,wxContent:t.msgContent,msgTag:t.msgTag}})],1),t._v(" "),a("div",{staticClass:"btn-group"},["SEND"!==t.status&&"PREPARE"===t.type?a("router-link",{attrs:{to:{name:"msgEdit",params:{id:t.activityId},query:{id:t.id}}}},[a("el-button",{staticClass:"default-button"},[t._v("编辑短信")])],1):t._e(),t._v(" "),"SEND"===t.status?a("el-button",{staticClass:"primary-button",attrs:{disabled:""}},[t._v("已发送")]):a("el-button",{staticClass:"primary-button",on:{click:t.sendNow}},[t._v("正式发送")])],1)])])])};i._withStripped=!0;var e=a(608),n=a(459),o=a(458),r={data:function(){return{activityId:this.$route.params.id,id:this.$route.query.id,webinarName:"",title:"",group:"",status:"",time:"",date:"",msgTag:"",loading:!1,msgContent:"",type:""}},created:function(){var t=this;this.queryInfo(),this.$config({loading:!0}).$get(n.a.GET_QUERY_MSG,{inviteId:this.id}).then(function(s){t.group=s.data.groupId,t.title=s.data.title,t.status=s.data.status,t.date=s.data.sendTime?s.data.sendTime.toString():s.data.planTime.toString(),t.msgTag=s.data.signature,t.msgContent=s.data.desc})},methods:{sendNow:function(){var t=this;this.$post(n.a.POST_SEND_MSG,{inviteId:this.id}).then(function(s){t.$toast({content:"发送成功"}),t.status="SEND",t.date=Object(e.a)(new Date,"yyyy-MM-dd hh:mm:ss")})},queryInfo:function(){var t=this;this.$config({loading:!0}).$get(o.a.GET_WEBINAR_INFO,{id:this.$route.params.id}).then(function(s){t.type=s.data.status})}},components:{comPhone:a(473).a}},d=(a(679),a(680),a(2)),c=Object(d.a)(r,i,[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"live-title"},[s("span",{staticClass:"title"},[this._v("短信通知")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"from-row"},[s("div",{staticClass:"from-title"})])}],!1,null,"c71415e8",null);c.options.__file="src/pages/live-mager/promote/message/overview.vue";s.default=c.exports}}]);
//# sourceMappingURL=31.e836b57c.js.map