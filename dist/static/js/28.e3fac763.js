(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{562:function(t,a,e){},563:function(t,a,e){},735:function(t,a,e){"use strict";var i=e(562);e.n(i).a},736:function(t,a,e){"use strict";var i=e(563);e.n(i).a},873:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{directives:[{name:"ComLoading",rawName:"v-ComLoading",value:t.loading,expression:"loading"}],staticClass:"content",attrs:{"com-loading-text":"拼命加载中"}},[e("div",{staticClass:"overview-wx-page live-mager"},[t._m(0),t._v(" "),e("div",{staticClass:"mager-box border-box"},[e("div",{staticClass:"from-box"},[e("div",{staticClass:"from-row"},[e("div",{staticClass:"from-title"},[t._v("微信标题：")]),t._v(" "),e("div",{staticClass:"from-content"},[t._v("\n            "+t._s(t.title)+"\n          ")])]),t._v(" "),e("div",{staticClass:"from-row"},[e("div",{staticClass:"from-title"},[t._v("收件人：")]),t._v(" "),e("div",{staticClass:"from-content"},[t._l(t.selectedGroupList,function(a){return[t._v(t._s(a.name)+"("+t._s(a.count)+")、")]}),t._v(" "),t._l(t.selectedTagList,function(a){return[t._v(t._s(a.name)+"、")]}),t._v(" "),"SEND"===t.status?e("el-button",{staticClass:"send-detail default-button",on:{click:function(a){t.sendDetail=!0}}},[t._v("发送详情")]):t._e()],2)]),t._v(" "),e("div",{staticClass:"from-row"},[e("div",{staticClass:"from-title"},[t._v("发送状态：")]),t._v(" "),e("div",{staticClass:"from-content"},["SEND"===t.status?e("span",{staticClass:"SEND"},[e("i"),t._v("已发送")]):t._e(),t._v(" "),"AWAIT"===t.status?e("span",{staticClass:"AWAIT"},[e("i"),t._v("已定时")]):t._e(),t._v(" "),"DRAFT"===t.status?e("span",{staticClass:"DRAFT"},[e("i"),t._v("草稿")]):t._e()])]),t._v(" "),e("div",{staticClass:"from-row"},[e("div",{staticClass:"from-title"},[t._v("发送时间：")]),t._v(" "),e("div",{staticClass:"from-content"},[t._v("\n            "+t._s(t.date)+"\n          ")])]),t._v(" "),t._m(1),t._v(" "),e("com-phone",{attrs:{titleValue:t.title,date:t.date,wxContent:t.wxContent,webinarName:t.webinarName}})],1),t._v(" "),e("div",{staticClass:"btn-group"},["SEND"!==t.status&&"PREPARE"===t.type?e("router-link",{attrs:{to:{name:"wechatEdit",params:{id:t.activityId},query:{id:t.id}}}},[e("el-button",{staticClass:"default-button"},[t._v("编辑微信")])],1):t._e(),t._v(" "),"SEND"===t.status?e("el-button",{staticClass:"primary-button",attrs:{disabled:""}},[t._v("已发送")]):e("el-button",{staticClass:"primary-button",on:{click:t.sendNow}},[t._v("正式发送")])],1)])]),t._v(" "),t.sendDetail?e("transition",{attrs:{name:"fade",mode:"out-in"}},[e("com-detail",{attrs:{_type:"WECHAT"},on:{handleClick:t.handleClick}})],1):t._e()],1)};i._withStripped=!0;var s=e(97),n=e.n(s),o=e(136),r=e.n(o),c=e(654),u=e(472),d=e(469),l=e(470),v=e(494),_=e(644),f={data:function(){return{activityId:this.$route.params.id,id:this.$route.query.id,title:"",group:"",status:"",time:"",tpl:"",date:"",loading:!1,sendDetail:!1,wxContent:"",webinarName:"",type:"",selectedGroupList:[],selectedTagList:[],groupList:[],tagList:[]}},created:function(){var t=this;this.queryInfo(),this.queryGroupList().then(this.queryTagList()).then(function(){t.$config({loading:!0}).$get(u.a.GET_QUERY_WECHAT,{inviteId:t.id}).then(function(a){t.group=a.data.groupId,t.title=a.data.title,t.tpl=a.data.templateId,t.status=a.data.status,t.date=a.data.sendTime?a.data.sendTime.toString():a.data.planTime.toString(),t.wxContent=a.data.desc,setTimeout(function(){t.reArrangeList(a.data.groupId.split(","),a.data.tagId.split(","))},500)})})},methods:{sendNow:function(){var t=this;this.$post(u.a.POST_SEND_WECHAT,{inviteId:this.id}).then(function(a){t.$toast({content:"发送成功",position:"center"}),t.status="SEND",t.date=Object(c.a)(new Date,"yyyy-MM-dd hh:mm:ss")})},queryInfo:function(){var t=this;this.$config({loading:!0}).$get(d.a.GET_WEBINAR_INFO,{id:this.$route.params.id}).then(function(a){t.type=a.data.status})},queryGroupList:function(t){var a=this;return r()(n.a.mark(function t(){return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.$get(l.a.GET_GROUP_LIST,{type:"2"}).then(function(t){var e=[];t.data.list.forEach(function(t){e.push({id:t.group_id,name:t.title,count:t.user_count,isChecked:!1})}),a.groupList=e});case 2:case"end":return t.stop()}},t,a)}))()},queryTagList:function(t){var a=this;return r()(n.a.mark(function t(){return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.$get(l.a.GET_TAG_LIST,{activityId:a.$route.params.id}).then(function(t){var e=[];t.data.list.forEach(function(t){e.push({name:t.tag_name,id:t.tag_id,isChecked:!1})}),a.tagList=e});case 2:case"end":return t.stop()}},t,a)}))()},reArrangeList:function(t,a){var e=this;this.groupList.forEach(function(a,i){t.forEach(function(t,i){1*t===a.id&&e.selectedGroupList.push({name:a.name,count:a.count})})}),this.tagList.forEach(function(t,i){a.forEach(function(a,i){1*a===t.id&&e.selectedTagList.push({name:t.name})})})},handleClick:function(t){"cancel"===t.action&&(this.sendDetail=!1)}},components:{comPhone:v.a,comDetail:_.a}},m=(e(735),e(736),e(2)),p=Object(m.a)(f,i,[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"live-title"},[a("span",{staticClass:"title"},[this._v("微信通知")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"from-row"},[a("div",{staticClass:"from-title"})])}],!1,null,"56bbd107",null);p.options.__file="src/pages/live-mager/promote/wechat/overview.vue";a.default=p.exports}}]);
//# sourceMappingURL=28.e3fac763.js.map