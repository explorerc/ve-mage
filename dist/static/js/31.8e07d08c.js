(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{508:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{directives:[{name:"ComLoading",rawName:"v-ComLoading",value:t.loading,expression:"loading"}],staticClass:"content",attrs:{"com-loading-text":"拼命加载中"}},[e("div",{staticClass:"overview-wx-page live-mager"},[e("div",{staticClass:"live-title"},[e("span",{staticClass:"title"},[t._v("短信通知")]),t._v(" "),e("com-back",{class:"back-btn"})],1),t._v(" "),e("div",{staticClass:"mager-box border-box"},[e("div",{staticClass:"from-box"},[e("div",{staticClass:"from-row"},[e("div",{staticClass:"from-title"},[t._v("短信标题：")]),t._v(" "),e("div",{staticClass:"from-content"},[t._v("\n            "+t._s(t.title)+"\n          ")])]),t._v(" "),e("div",{staticClass:"from-row"},[e("div",{staticClass:"from-title"},[t._v("收件人：")]),t._v(" "),e("div",{staticClass:"from-content"},[t._l(t.selectedGroupList,function(a,e){return[t._v(t._s(a.name)),e+1<t.selectedGroupList.length?[t._v("、")]:t._e()]}),e("br"),t._v(" "),t._l(t.selectedTagList,function(a,e){return[t._v(t._s(a.name)),e+1<t.selectedTagList.length?[t._v("、")]:t._e()]}),t._v("（合计"+t._s(t.expectNum)+"人）\n            "),"SEND"===t.status?e("el-button",{staticClass:"send-detail default-button",on:{click:function(a){t.sendDetail=!0}}},[t._v("发送详情")]):t._e()],2)]),t._v(" "),e("div",{staticClass:"from-row"},[e("div",{staticClass:"from-title"},[t._v("发送状态：")]),t._v(" "),e("div",{staticClass:"from-content"},["SEND"===t.status?e("span",{staticClass:"SEND"},[e("i"),t._v("已发送")]):t._e(),t._v(" "),"AWAIT"===t.status?e("span",{staticClass:"AWAIT"},[e("i"),t._v("已定时")]):t._e(),t._v(" "),"DRAFT"===t.status?e("span",{staticClass:"DRAFT"},[e("i"),t._v("草稿")]):t._e()])]),t._v(" "),e("div",{staticClass:"from-row"},[e("div",{staticClass:"from-title"},[t._v("发送时间：")]),t._v(" "),e("div",{staticClass:"from-content"},[t._v("\n            "+t._s(t.date)+"\n          ")])]),t._v(" "),t._m(0),t._v(" "),e("com-phone",{attrs:{titleValue:t.title,date:t.date,wxContent:t.msgContent,msgTag:t.msgTag,isWx:!1}})],1),t._v(" "),e("div",{staticClass:"btn-group"},["SEND"!==t.status&&"PREPARE"===t.type?e("router-link",{attrs:{to:{name:"msgCreate",params:{id:t.activityId},query:{id:t.id}}}},[e("el-button",{staticClass:"default-button"},[t._v("编辑短信")])],1):t._e(),t._v(" "),"SEND"===t.status?e("el-button",{staticClass:"primary-button",attrs:{disabled:""}},[t._v("已发送")]):e("el-button",{staticClass:"primary-button",on:{click:t.sendNow}},[t._v("正式发送")])],1)])]),t._v(" "),t.sendDetail?e("transition",{attrs:{name:"fade",mode:"out-in"}},[e("com-detail",{attrs:{_type:"SMS"},on:{handleClick:t.handleClick}})],1):t._e()],1)};s._withStripped=!0;var i=e(99),n=e.n(i),o=e(138),r=e.n(o),c=e(726),u=e(533),l=e(529),d=e(532),v=e(548),m=e(719),_=e(63),g={data:function(){return{activityId:this.$route.params.id,id:this.$route.query.id,webinarName:"",title:"",group:"",tag:"",status:"",time:"",date:"",msgTag:"",loading:!1,msgContent:"",type:"",selectedGroupList:[],selectedTagList:[],groupList:[],tagList:[],sendDetail:!1,expectNum:0}},created:function(){this.queryInfo(),this.initData(),_.a.$emit("breads",[{title:"活动管理"},{title:"活动列表",url:"/liveMager/list"},{title:"活动详情",url:"/liveMager/detail/"+this.activityId},{title:"短信通知",url:"/liveMager/promote/msg/list/"+this.activityId},{title:"预览"}])},methods:{initData:function(){var t=this;return r()(n.a.mark(function a(){return n.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t.queryTagList();case 2:return a.next=4,t.queryGroupList();case 4:return a.next=6,t.queryMsgInfo();case 6:case"end":return a.stop()}},a,t)}))()},sendNow:function(){var t=this;this.$post(u.a.POST_SEND_MSG,{inviteId:this.id}).then(function(a){t.$toast({content:"发送成功"}),t.status="SEND",t.date=Object(c.a)(new Date,"yyyy-MM-dd hh:mm:ss")})},queryInfo:function(){var t=this;this.$get(l.a.GET_WEBINAR_INFO,{id:this.$route.params.id}).then(function(a){t.type=a.data.status})},queryGroupList:function(t){var a=this;return this.$get(d.a.GET_GROUP_LIST).then(function(t){var e=[];t.data.list.forEach(function(t){e.push({id:t.group_id,name:t.title,count:t.user_count,isChecked:!1})}),a.groupList=e})},queryTagList:function(t){var a=this;return this.$get(d.a.GET_TAG_LIST,{activityId:this.$route.params.id}).then(function(t){var e=[];t.data.list.forEach(function(t){e.push({name:t.tag_name,id:t.tag_id,count:t.user_count,isChecked:!1})}),a.tagList=e})},reArrangeList:function(t,a){var e=this;"group"===a?this.groupList.forEach(function(a,s){t.forEach(function(t,s){1*t===a.id&&e.selectedGroupList.push({name:a.name,count:a.count})})}):(console.log(t),console.log(this.tagList),this.tagList.forEach(function(a,s){console.log(a),t.forEach(function(t,s){console.log(t+" "+s),1*t===a.id&&e.selectedTagList.push({name:a.name,count:a.count})})}))},queryMsgInfo:function(){var t=this;return this.$get(u.a.GET_QUERY_MSG,{inviteId:this.id}).then(function(a){t.group=a.data.groupId,t.tag=a.data.tagId,t.title=a.data.title,t.status=a.data.status,t.date=a.data.sendTime?a.data.sendTime.toString():a.data.planTime.toString(),t.msgTag=a.data.signature,t.msgContent=a.data.desc,t.expectNum=a.data.expectNum,t.reArrangeList(a.data.groupId.split(","),"group"),t.reArrangeList(a.data.tagId.split(","),"tag")})},handleClick:function(t){"cancel"===t.action&&(this.sendDetail=!1)}},components:{comPhone:v.a,comDetail:m.a}},f=(e(818),e(819),e(1)),p=Object(f.a)(g,s,[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"from-row"},[a("div",{staticClass:"from-title"})])}],!1,null,"c71415e8",null);p.options.__file="src/pages/live-mager/promote/message/overview.vue";a.default=p.exports},637:function(t,a,e){},638:function(t,a,e){},818:function(t,a,e){"use strict";var s=e(637);e.n(s).a},819:function(t,a,e){"use strict";var s=e(638);e.n(s).a}}]);
//# sourceMappingURL=31.8e07d08c.js.map