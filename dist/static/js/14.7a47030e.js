(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{476:function(t,i,s){"use strict";s.r(i);var a=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"clearfix set-live-guided-container"},[s("p",{staticClass:"v-title"},[t._v("\n    直播引导页\n    "),s("com-back")],1),t._v(" "),s("div",{staticClass:"v-content"},[s("div",{staticClass:"v-set clearfix"},[s("div",{staticClass:"v-edit pull-left"},[s("div",{staticClass:"input-form v-label clearfix"},[s("p",{staticClass:"v-info-label pull-left"},[t._v("\n            观看条件：\n          ")]),t._v(" "),s("p",{staticClass:"v-info pull-left",staticStyle:{"margin-top":"6px"}},[t._v("\n            "+t._s("APPOINT"===t.viewCondition?"报名":"无限制")+"\n          ")])]),t._v(" "),s("div",{staticClass:"input-form v-label clearfix"},[s("p",{staticClass:"v-info-label pull-left"},[t._v("\n            引导标题：\n          ")]),t._v(" "),s("p",{staticClass:"v-info pull-left",on:{click:function(i){t.canPass=!1}}},[s("com-input",{attrs:{value:t.title,placeholder:"标题","max-length":30},on:{"update:value":function(i){t.title=i}}})],1)]),t._v(" "),s("div",{staticClass:"input-form v-label clearfix"},[s("p",{staticClass:"v-info-label pull-left"},[t._v("\n            引导图片：\n          ")]),t._v(" "),s("ve-upload",{attrs:{title:"建议图片不小于900*1080px<br/>支持jpg、jpeg、png格式，文件大小不超过2M",accept:"png|jpg|jpeg",defaultImg:t.defaultImg,fileSize:2048,errorMsg:t.uploadImgErrorMsg},on:{error:t.uploadError,success:t.uploadImgSuccess}})],1),t._v(" "),s("div",{staticClass:"input-form v-label clearfix"},[s("p",{staticClass:"v-info-label pull-left"},[t._v("\n            辅助信息：\n          ")]),t._v(" "),s("p",{staticClass:"v-info pull-left",staticStyle:{width:"332px","margin-top":"10px"},on:{click:function(i){t.canPass=!1}}},[s("el-radio",{attrs:{label:"DESCRIPTION"},model:{value:t.showType,callback:function(i){t.showType=i},expression:"showType"}},[t._v("显示直播简介")]),t._v(" "),s("el-radio",{attrs:{label:"COUNTDOWN"},model:{value:t.showType,callback:function(i){t.showType=i},expression:"showType"}},[t._v("显示直播倒计时")]),t._v(" "),"COUNTDOWN"!==t.showType?s("com-input",{attrs:{type:"textarea",value:t.description,placeholder:"请输入简介","max-length":50},on:{"update:value":function(i){t.description=i}}}):t._e()],1)])]),t._v(" "),s("div",{staticClass:"v-show pull-right"},[s("com-tabs",{attrs:{value:t.tabValue},on:{"update:value":function(i){t.tabValue=i}}},[s("com-tab",{staticClass:"clearfix",attrs:{label:"电脑预览",index:1}},[s("div",{staticClass:"v-pc  pull-right clearfix"},[s("div",{staticClass:"v-img pull-left"},[t.defaultImg?[s("div",{staticClass:"img-bg",style:{backgroundImage:"url("+t.$imgHost+"/"+t.imgUrl+")"}})]:[s("div",{staticClass:"img-bg"})]],2),t._v(" "),s("div",{staticClass:"v-pc-info pull-left"},[s("p",{staticClass:"v-pc-title"},[t._v("\n                  "+t._s(t.title)+"\n                ")]),t._v(" "),"DESCRIPTION"===t.showType?s("div",{staticClass:"v-pc-description"},[s("p",[t._v("\n                    "+t._s(t.description)+"\n                  ")])]):s("div",{staticClass:"v-pc-operation"},[s("p",{staticClass:"v-count-title"},[t._v("\n                    距离直播开始还有\n                  ")]),t._v(" "),s("div",{staticClass:"v-cutdown-content"},[s("span",{staticClass:"v-red"},[t._v("XX")]),t._v("天\n                    "),s("span",{staticClass:"v-red"},[t._v("XX")]),t._v("小时\n                    "),s("span",{staticClass:"v-red"},[t._v("XX")]),t._v("分钟\n                    "),s("span",{staticClass:"v-red"},[t._v("XX")]),t._v("秒\n                  ")])]),t._v(" "),s("span",{staticClass:"v-pc-enroll",attrs:{href:"javascript:;"}},[t._v("\n                  "+t._s("APPOINT"===t.viewCondition?"报名":"预约")+"\n                ")])])])]),t._v(" "),s("com-tab",{staticClass:"clearfix",attrs:{label:"手机预览",index:2}},[s("div",{staticClass:"v-phone pull-right"},[s("div",{staticClass:"v-img"},[t.defaultImg?[s("div",{staticClass:"img-bg",style:{backgroundImage:"url("+t.$imgHost+"/"+t.imgUrl+")"}})]:[s("div",{staticClass:"img-bg"})]],2),t._v(" "),s("div",{staticClass:"v-phone-info"},[s("p",{staticClass:"v-phone-title"},[t._v("\n                  "+t._s(t.title)+"\n                ")]),t._v(" "),s("div",{staticClass:"v-phone-operation"},["DESCRIPTION"===t.showType?s("div",{staticClass:"v-phone-description"},[s("p",{staticClass:"v-description"},[t._v("\n                      "+t._s(t.description)+"\n                    ")])]):t._e(),t._v(" "),"COUNTDOWN"===t.showType?s("div",{staticClass:"v-phone-countdown"},[s("p",{staticClass:"v-count-title"},[t._v("\n                      距离直播开始还有\n                    ")]),t._v(" "),s("div",{staticClass:"v-cutdown-content"},[s("span",{staticClass:"v-red"},[t._v("XX")]),t._v("天\n                      "),s("span",{staticClass:"v-red"},[t._v("XX")]),t._v("小时\n                      "),s("span",{staticClass:"v-red"},[t._v("XX")]),t._v("分钟\n                      "),s("span",{staticClass:"v-red"},[t._v("XX")]),t._v("秒\n                    ")])]):t._e(),t._v(" "),s("span",{staticClass:"v-phone-enroll",attrs:{href:"javascript:;"}},[t._v("\n                    "+t._s("APPOINT"===t.viewCondition?"报名":"预约")+"\n                  ")])])])])])],1)],1)]),t._v(" "),s("button",{staticClass:"primary-button v-share-button",on:{click:t.save}},[t._v("\n      保存\n    ")])])])};a._withStripped=!0;var e=s(523),l=s(516),n=s(514),c=s(59),o={data:function(){return{activityId:0,viewCondition:"",title:"",showType:"",description:"",tabValue:1,imgUrl:"",uploadImgErrorMsg:"",canPass:!0,published:""}},components:{VeUpload:l.a},computed:{defaultImg:function(){return this.imgUrl?this.$imgHost+"/"+this.imgUrl:""}},created:function(){var t=this;this.activityId=this.$route.params.id,c.a.$emit("breads",[{title:"活动管理"},{title:"活动列表",url:"/liveMager/list"},{title:"活动详情",url:"/liveMager/detail/"+this.activityId},{title:"直播引导页"}]);var i={activityId:this.activityId};this.activityId?(this.$get(n.a.GET_WEBINAR_INFO,{id:this.activityId}).then(function(i){t.published=i.data.published}),this.$get(e.a.GET_LIVE_GUIDE,i).then(function(i){i.data&&(t.viewCondition=i.data.viewCondition?i.data.viewCondition:"",t.title=i.data.title?i.data.title:"",t.showType=i.data.showType?i.data.showType:"",t.description=i.data.description?i.data.description:"",t.imgUrl=i.data.imgUrl?i.data.imgUrl:"",t.tabValue=1)})):this.$router.go(-1)},mounted:function(){},watch:{},beforeRouteLeave:function(t,i,s){this.canPass?s(!0):this.$messageBox({header:"提示",width:"400px",content:"是否放弃当前编辑？",cancelText:"否",confirmText:"是",handleClick:function(t){"confirm"===t.action?s(!0):s(!1)}})},methods:{uploadImgSuccess:function(t){this.canPass=!1,this.imgUrl=t.name},uploadError:function(t){this.uploadImgErrorMsg=t.msg,this.imgUrl=""},save:function(){var t=this,i={activityId:this.activityId,title:this.title,showType:this.showType,imgUrl:this.imgUrl,description:this.description};this.$config({handlers:!0}).$post(e.a.POST_SET_LIVE_GUIDE,i).then(function(i){t.canPass=!0,t.$router.push("/liveMager/detail/"+t.activityId)}).catch(function(i){t.$messageBox({header:"提示",content:i.msg,confirmText:"确定",handleClick:function(t){"cancel"===t.action||t.action}})})}}},v=(s(766),s(1)),r=Object(v.a)(o,a,[],!1,null,"ca2211a6",null);r.options.__file="src/pages/set-live-guided/index.vue";i.default=r.exports},582:function(t,i,s){},766:function(t,i,s){"use strict";var a=s(582);s.n(a).a}}]);
//# sourceMappingURL=14.7a47030e.js.map