(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{506:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"ComLoading",rawName:"v-ComLoading",value:t.loading,expression:"loading"}],staticClass:"content",attrs:{"com-loading-text":"拼命加载中"}},[a("div",{staticClass:"overview-wx-page live-mager"},[a("div",{staticClass:"live-title"},[a("span",{staticClass:"title"},[t._v("微信通知")]),t._v(" "),a("com-back",{class:"back-btn"})],1),t._v(" "),a("div",{staticClass:"mager-box border-box"},[a("div",{staticClass:"from-box"},[a("div",{staticClass:"from-row"},[a("div",{staticClass:"from-title"},[t._v("微信标题：")]),t._v(" "),a("div",{staticClass:"from-content"},[t._v("\n            "+t._s(t.title)+"\n          ")])]),t._v(" "),a("div",{staticClass:"from-row"},[a("div",{staticClass:"from-title"},[t._v("收件人：")]),t._v(" "),a("div",{staticClass:"from-content"},[t._l(t.selectedGroupList,function(e,a){return[t._v(t._s(e.name)),a+1<t.selectedGroupList.length?[t._v("、")]:t._e()]}),a("br"),t._v(" "),t._l(t.selectedTagList,function(e,a){return[t._v(t._s(e.name)),a+1<t.selectedTagList.length?[t._v("、")]:t._e()]}),t._v(" （合计"+t._s(t.expectNum)+"人）\n            "),"SEND"===t.status?a("el-button",{staticClass:"send-detail default-button",on:{click:function(e){t.sendDetail=!0}}},[t._v("发送详情")]):t._e()],2)]),t._v(" "),a("div",{staticClass:"from-row"},[a("div",{staticClass:"from-title"},[t._v("发送状态：")]),t._v(" "),a("div",{staticClass:"from-content"},["SEND"===t.status?a("span",{staticClass:"SEND"},[a("i"),t._v("已发送")]):t._e(),t._v(" "),"AWAIT"===t.status?a("span",{staticClass:"AWAIT"},[a("i"),t._v("已定时")]):t._e(),t._v(" "),"DRAFT"===t.status?a("span",{staticClass:"DRAFT"},[a("i"),t._v("草稿")]):t._e()])]),t._v(" "),a("div",{staticClass:"from-row"},[a("div",{staticClass:"from-title"},[t._v("发送时间：")]),t._v(" "),a("div",{staticClass:"from-content"},[t._v("\n            "+t._s(t.date)+"\n          ")])]),t._v(" "),t._m(0),t._v(" "),a("com-phone",{attrs:{titleValue:t.title,date:t.date,isWx:!0,wxContent:t.wxContent,webinarName:t.webinarName}})],1),t._v(" "),a("div",{staticClass:"btn-group"},["SEND"!==t.status&&"PREPARE"===t.type?a("router-link",{attrs:{to:{name:"wechatEdit",params:{id:t.activityId},query:{id:t.id}}}},[a("el-button",{staticClass:"default-button"},[t._v("编辑微信")])],1):t._e(),t._v(" "),"SEND"===t.status?a("el-button",{staticClass:"primary-button",attrs:{disabled:""}},[t._v("已发送")]):a("el-button",{staticClass:"primary-button",on:{click:t.sendNow}},[t._v("正式发送")])],1)])]),t._v(" "),t.sendDetail?a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("com-detail",{attrs:{_type:"WECHAT"},on:{handleClick:t.handleClick}})],1):t._e()],1)};i._withStripped=!0;var s=a(99),n=a.n(s),o=a(138),r=a.n(o),c=a(725),u=a(533),d=a(529),l=a(532),v=a(553),_=a(717),m=a(63),f={data:function(){return{activityId:this.$route.params.id,id:this.$route.query.id,title:"",group:"",status:"",time:"",tpl:"",date:"",loading:!1,sendDetail:!1,wxContent:"",webinarName:"",type:"",selectedGroupList:[],selectedTagList:[],groupList:[],tagList:[],expectNum:0}},created:function(){var t=this;this.queryInfo(),this.queryTagList().then(this.queryGroupList()).then(function(){t.$get(u.a.GET_QUERY_WECHAT,{inviteId:t.id}).then(function(e){t.group=e.data.groupId,t.title=e.data.title,t.tpl=e.data.templateId,t.status=e.data.status,t.date=e.data.sendTime?e.data.sendTime.toString():e.data.planTime.toString(),t.wxContent=e.data.desc,t.expectNum=e.data.expectNum,setTimeout(function(){t.reArrangeList(e.data.groupId.split(","),e.data.tagId.split(","))},500)})}),m.a.$emit("breads",[{title:"活动管理"},{title:"活动列表",url:"/liveMager/list"},{title:"活动详情",url:"/liveMager/detail/"+this.activityId},{title:"微信通知",url:"/liveMager/promote/wechat/list/"+this.activityId},{title:"预览"}])},methods:{sendNow:function(){var t=this;this.$post(u.a.POST_SEND_WECHAT,{inviteId:this.id}).then(function(e){t.$toast({content:"发送成功",position:"center"}),t.status="SEND",t.date=Object(c.a)(new Date,"yyyy-MM-dd hh:mm:ss")})},queryInfo:function(){var t=this;this.$get(d.a.GET_WEBINAR_INFO,{id:this.$route.params.id}).then(function(e){t.type=e.data.status})},queryGroupList:function(t){var e=this;return r()(n.a.mark(function t(){return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$get(l.a.GET_GROUP_LIST).then(function(t){var a=[];t.data.list.forEach(function(t){a.push({id:t.group_id,name:t.title,count:t.user_count,isChecked:!1})}),e.groupList=a});case 2:case"end":return t.stop()}},t,e)}))()},queryTagList:function(t){var e=this;return r()(n.a.mark(function t(){return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$get(l.a.GET_TAG_LIST,{activityId:e.$route.params.id}).then(function(t){var a=[];t.data.list.forEach(function(t){a.push({name:t.tag_name,count:t.user_count,id:t.tag_id,isChecked:!1})}),e.tagList=a});case 2:case"end":return t.stop()}},t,e)}))()},reArrangeList:function(t,e){var a=this;this.groupList.forEach(function(e,i){t.forEach(function(t,i){1*t===e.id&&a.selectedGroupList.push({name:e.name,count:e.count})})}),this.tagList.forEach(function(t,i){e.forEach(function(e,i){1*e===t.id&&a.selectedTagList.push({name:t.name,count:t.count})})})},handleClick:function(t){"cancel"===t.action&&(this.sendDetail=!1)}},components:{comPhone:v.a,comDetail:_.a}},p=(a(809),a(810),a(1)),h=Object(p.a)(f,i,[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"from-row"},[e("div",{staticClass:"from-title"})])}],!1,null,"56bbd107",null);h.options.__file="src/pages/live-mager/promote/wechat/overview.vue";e.default=h.exports},629:function(t,e,a){},630:function(t,e,a){},809:function(t,e,a){"use strict";var i=a(629);a.n(i).a},810:function(t,e,a){"use strict";var i=a(630);a.n(i).a}}]);
//# sourceMappingURL=28.ad2003f2.js.map