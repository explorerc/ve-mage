(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{575:function(t,a,s){},576:function(t,a,s){},755:function(t,a,s){"use strict";var e=s(575);s.n(e).a},756:function(t,a,s){"use strict";var e=s(576);s.n(e).a},886:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{directives:[{name:"ComLoading",rawName:"v-ComLoading",value:t.loading,expression:"loading"}],staticClass:"content",attrs:{"com-loading-text":"拼命加载中"}},[s("div",{staticClass:"overview-wx-page live-mager"},[s("div",{staticClass:"live-title"},[s("span",{staticClass:"title"},[t._v("短信通知")]),t._v(" "),s("com-back",{class:"back-btn"})],1),t._v(" "),s("div",{staticClass:"mager-box border-box"},[s("div",{staticClass:"from-box"},[s("div",{staticClass:"from-row"},[s("div",{staticClass:"from-title"},[t._v("短信标题：")]),t._v(" "),s("div",{staticClass:"from-content"},[t._v("\n            "+t._s(t.title)+"\n          ")])]),t._v(" "),s("div",{staticClass:"from-row"},[s("div",{staticClass:"from-title"},[t._v("收件人：")]),t._v(" "),s("div",{staticClass:"from-content"},[t._l(t.selectedGroupList,function(a,s){return[t._v(t._s(a.name)+"("+t._s(a.count)+")"),s+1<t.selectedGroupList.length?[t._v("、")]:t._e()]}),s("br"),t._v(" "),t._l(t.selectedTagList,function(a,s){return[t._v(t._s(a.name)+"("+t._s(a.count)+")"),s+1<t.selectedTagList.length?[t._v("、")]:t._e()]}),t._v(" "),"SEND"===t.status?s("el-button",{staticClass:"send-detail default-button",on:{click:function(a){t.sendDetail=!0}}},[t._v("发送详情")]):t._e()],2)]),t._v(" "),s("div",{staticClass:"from-row"},[s("div",{staticClass:"from-title"},[t._v("发送状态：")]),t._v(" "),s("div",{staticClass:"from-content"},["SEND"===t.status?s("span",{staticClass:"SEND"},[s("i"),t._v("已发送")]):t._e(),t._v(" "),"AWAIT"===t.status?s("span",{staticClass:"AWAIT"},[s("i"),t._v("已定时")]):t._e(),t._v(" "),"DRAFT"===t.status?s("span",{staticClass:"DRAFT"},[s("i"),t._v("草稿")]):t._e()])]),t._v(" "),s("div",{staticClass:"from-row"},[s("div",{staticClass:"from-title"},[t._v("发送时间：")]),t._v(" "),s("div",{staticClass:"from-content"},[t._v("\n            "+t._s(t.date)+"\n          ")])]),t._v(" "),t._m(0),t._v(" "),s("com-phone",{attrs:{titleValue:t.title,date:t.date,wxContent:t.msgContent,msgTag:t.msgTag,isWx:!1}})],1),t._v(" "),s("div",{staticClass:"btn-group"},["SEND"!==t.status&&"PREPARE"===t.type?s("router-link",{attrs:{to:{name:"msgEdit",params:{id:t.activityId},query:{id:t.id}}}},[s("el-button",{staticClass:"default-button"},[t._v("编辑短信")])],1):t._e(),t._v(" "),"SEND"===t.status?s("el-button",{staticClass:"primary-button",attrs:{disabled:""}},[t._v("已发送")]):s("el-button",{staticClass:"primary-button",on:{click:t.sendNow}},[t._v("正式发送")])],1)])]),t._v(" "),t.sendDetail?s("transition",{attrs:{name:"fade",mode:"out-in"}},[s("com-detail",{attrs:{_type:"SMS"},on:{handleClick:t.handleClick}})],1):t._e()],1)};e._withStripped=!0;var i=s(98),n=s.n(i),o=s(137),r=s.n(o),c=s(664),u=s(475),d=s(471),l=s(474),v=s(494),_=s(655),g={data:function(){return{activityId:this.$route.params.id,id:this.$route.query.id,webinarName:"",title:"",group:"",tag:"",status:"",time:"",date:"",msgTag:"",loading:!1,msgContent:"",type:"",selectedGroupList:[],selectedTagList:[],groupList:[],tagList:[],sendDetail:!1}},created:function(){var t=this;this.queryInfo(),this.queryTagList().then(this.queryGroupList()).then(function(){t.$config({loading:!0}).$get(u.a.GET_QUERY_MSG,{inviteId:t.id}).then(function(a){t.group=a.data.groupId,t.tag=a.data.tagId,t.title=a.data.title,t.status=a.data.status,t.date=a.data.sendTime?a.data.sendTime.toString():a.data.planTime.toString(),t.msgTag=a.data.signature,t.msgContent=a.data.desc,t.reArrangeList(a.data.groupId.split(","),"group"),t.reArrangeList(a.data.tagId.split(","),"tag")})})},methods:{sendNow:function(){var t=this;this.$post(u.a.POST_SEND_MSG,{inviteId:this.id}).then(function(a){t.$toast({content:"发送成功"}),t.status="SEND",t.date=Object(c.a)(new Date,"yyyy-MM-dd hh:mm:ss")})},queryInfo:function(){var t=this;this.$config({loading:!0}).$get(d.a.GET_WEBINAR_INFO,{id:this.$route.params.id}).then(function(a){t.type=a.data.status})},queryGroupList:function(t){var a=this;return r()(n.a.mark(function t(){return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.$get(l.a.GET_GROUP_LIST).then(function(t){var s=[];t.data.list.forEach(function(t){s.push({id:t.group_id,name:t.title,count:t.user_count,isChecked:!1})}),a.groupList=s});case 2:case"end":return t.stop()}},t,a)}))()},queryTagList:function(t){var a=this;return r()(n.a.mark(function t(){return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.$get(l.a.GET_TAG_LIST,{activityId:a.$route.params.id}).then(function(t){var s=[];t.data.list.forEach(function(t){s.push({name:t.tag_name,id:t.tag_id,count:t.user_count,isChecked:!1})}),a.tagList=s});case 2:case"end":return t.stop()}},t,a)}))()},reArrangeList:function(t,a){var s=this;"group"===a?this.groupList.forEach(function(a,e){t.forEach(function(t,e){1*t===a.id&&s.selectedGroupList.push({name:a.name,count:a.count})})}):(console.log(t),console.log(this.tagList),this.tagList.forEach(function(a,e){console.log(a),t.forEach(function(t,e){console.log(t+" "+e),1*t===a.id&&s.selectedTagList.push({name:a.name,count:a.count})})}))},handleClick:function(t){"cancel"===t.action&&(this.sendDetail=!1)}},components:{comPhone:v.a,comDetail:_.a}},m=(s(755),s(756),s(1)),f=Object(m.a)(g,e,[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"from-row"},[a("div",{staticClass:"from-title"})])}],!1,null,"c71415e8",null);f.options.__file="src/pages/live-mager/promote/message/overview.vue";a.default=f.exports}}]);
//# sourceMappingURL=31.2185b53e.js.map