(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{532:function(t,s,i){},658:function(t,s,i){t.exports=i.p+"static/img/guid.8eb3d7d.jpg"},711:function(t,s,i){"use strict";var a=i(532);i.n(a).a},915:function(t,s,i){"use strict";i.r(s);var a=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"clearfix set-live-guided-container"},[a("p",{staticClass:"v-title"},[t._v("\n    直播引导页\n  ")]),t._v(" "),a("div",{staticClass:"v-content"},[a("div",{staticClass:"v-set clearfix"},[a("div",{staticClass:"v-edit pull-left"},[a("div",{staticClass:"input-form v-label clearfix"},[a("p",{staticClass:"v-info-label pull-left"},[t._v("\n            观看条件：\n          ")]),t._v(" "),a("p",{staticClass:"v-info pull-left",staticStyle:{"margin-top":"6px"}},[t._v("\n            "+t._s("APPOINT"===t.viewCondition?"报名":"无限制")+"\n          ")])]),t._v(" "),a("div",{staticClass:"input-form v-label clearfix"},[a("p",{staticClass:"v-info-label pull-left"},[t._v("\n            引导标题：\n          ")]),t._v(" "),a("p",{staticClass:"v-info pull-left",on:{click:function(s){t.canPass=!1}}},[a("com-input",{attrs:{value:t.title,placeholder:"标题","max-length":20},on:{"update:value":function(s){t.title=s}}})],1)]),t._v(" "),a("div",{staticClass:"input-form v-label clearfix"},[a("p",{staticClass:"v-info-label pull-left"},[t._v("\n            引导图片：\n          ")]),t._v(" "),a("ve-upload",{attrs:{title:"建议图片不小于1920*1080px<br/>支持jpg、jpeg、png格式，文件大小不超过2M",accept:"png|jpg|jpeg",defaultImg:t.defaultImg,fileSize:2048,errorMsg:t.uploadImgErrorMsg},on:{error:t.uploadError,success:t.uploadImgSuccess}})],1),t._v(" "),a("div",{staticClass:"input-form v-label clearfix"},[a("p",{staticClass:"v-info-label pull-left"},[t._v("\n            辅助信息：\n          ")]),t._v(" "),a("p",{staticClass:"v-info pull-left",staticStyle:{width:"350px","margin-top":"10px"},on:{click:function(s){t.canPass=!1}}},[a("el-radio",{attrs:{label:"DESCRIPTION"},model:{value:t.showType,callback:function(s){t.showType=s},expression:"showType"}},[t._v("显示直播简介")]),t._v(" "),a("el-radio",{attrs:{label:"COUNTDOWN"},model:{value:t.showType,callback:function(s){t.showType=s},expression:"showType"}},[t._v("显示直播倒计时")]),t._v(" "),a("com-input",{attrs:{type:"textarea",value:t.description,disabled:"COUNTDOWN"===t.showType,placeholder:"请输入简介","max-length":50},on:{"update:value":function(s){t.description=s}}})],1)])]),t._v(" "),a("div",{staticClass:"v-show pull-right"},[a("com-tabs",{attrs:{value:t.tabValue},on:{"update:value":function(s){t.tabValue=s}}},[a("com-tab",{staticClass:"clearfix",attrs:{label:"手机预览",index:1}},[a("div",{staticClass:"v-phone pull-right"},[a("div",{staticClass:"v-img"},[t.defaultImg?[a("img",{attrs:{src:t.$imgHost+"/"+t.imgUrl,alt:""}})]:[a("img",{attrs:{src:i(658),alt:""}})]],2),t._v(" "),a("div",{staticClass:"v-phone-info"},[a("p",{staticClass:"v-phone-title"},[t._v("\n                  "+t._s(t.title)+"\n                ")]),t._v(" "),a("div",{staticClass:"v-phone-operation"},["DESCRIPTION"===t.showType?a("div",{staticClass:"v-phone-description"},[a("p",{staticClass:"v-description"},[t._v("\n                      "+t._s(t.description)+"\n                    ")])]):t._e(),t._v(" "),"COUNTDOWN"===t.showType?a("div",{staticClass:"v-phone-countdown"},[a("p",{staticClass:"v-count-title"},[t._v("\n                      距离直播开始还有\n                    ")]),t._v(" "),a("div",{staticClass:"v-cutdown-content"},[a("span",{staticClass:"v-red"},[t._v("XX")]),t._v("天\n                      "),a("span",{staticClass:"v-red"},[t._v("XX")]),t._v("小时\n                      "),a("span",{staticClass:"v-red"},[t._v("XX")]),t._v("分钟\n                      "),a("span",{staticClass:"v-red"},[t._v("XX")]),t._v("秒\n                    ")])]):t._e(),t._v(" "),a("span",{staticClass:"v-phone-enroll",attrs:{href:"javascript:;"}},[t._v("\n                    "+t._s("APPOINT"===t.viewCondition?"报名":"预约")+"\n                  ")])])])])]),t._v(" "),a("com-tab",{staticClass:"clearfix",attrs:{label:"电脑预览",index:2}},[a("div",{staticClass:"v-pc  pull-right clearfix"},[a("div",{staticClass:"v-img pull-left"},[t.defaultImg?[a("img",{attrs:{src:t.$imgHost+"/"+t.imgUrl,alt:""}})]:[a("img",{attrs:{src:i(658),alt:""}})]],2),t._v(" "),a("div",{staticClass:"v-pc-info pull-left"},[a("p",{staticClass:"v-pc-title"},[t._v("\n                  "+t._s(t.title)+"\n                ")]),t._v(" "),"DESCRIPTION"===t.showType?a("div",{staticClass:"v-pc-description"},[a("p",[t._v("\n                    "+t._s(t.description)+"\n                  ")])]):a("div",{staticClass:"v-pc-operation"},[a("p",{staticClass:"v-count-title"},[t._v("\n                    距离直播开始还有\n                  ")]),t._v(" "),a("div",{staticClass:"v-cutdown-content"},[a("span",{staticClass:"v-red"},[t._v("XX")]),t._v("天\n                    "),a("span",{staticClass:"v-red"},[t._v("XX")]),t._v("小时\n                    "),a("span",{staticClass:"v-red"},[t._v("XX")]),t._v("分钟\n                    "),a("span",{staticClass:"v-red"},[t._v("XX")]),t._v("秒\n                  ")])]),t._v(" "),a("span",{staticClass:"v-pc-enroll",attrs:{href:"javascript:;"}},[t._v("\n                  "+t._s("APPOINT"===t.viewCondition?"报名":"预约")+"\n                ")])])])])],1)],1)]),t._v(" "),a("button",{staticClass:"primary-button v-share-button",on:{click:t.save}},[t._v("\n      保存\n    ")])])])};a._withStripped=!0;var e=i(484),n=i(471),l=i(469),c={data:function(){return{activityId:0,viewCondition:"",title:"",showType:"",description:"",tabValue:1,imgUrl:"",uploadImgErrorMsg:"",canPass:!0,published:""}},components:{VeUpload:n.a},computed:{defaultImg:function(){return this.imgUrl?this.$imgHost+"/"+this.imgUrl:""}},created:function(){var t=this;this.activityId=this.$route.params.id;var s={activityId:this.activityId};this.activityId?(this.$get(l.a.GET_WEBINAR_INFO,{id:this.activityId}).then(function(s){t.published=s.data.published}),this.$get(e.a.GET_LIVE_GUIDE,s).then(function(s){s.data&&(t.viewCondition=s.data.viewCondition?s.data.viewCondition:"",t.title=s.data.title?s.data.title:"",t.showType=s.data.showType?s.data.showType:"",t.description=s.data.description?s.data.description:"",t.imgUrl=s.data.imgUrl?s.data.imgUrl:"",t.tabValue=1)})):this.$router.go(-1)},mounted:function(){},watch:{},beforeRouteLeave:function(t,s,i){this.canPass?i(!0):this.$messageBox({header:"提示",width:"400px",content:"是否放弃当前编辑？",cancelText:"否",confirmText:"是",handleClick:function(t){"confirm"===t.action?i(!0):i(!1)}})},methods:{uploadImgSuccess:function(t){this.canPass=!1,this.imgUrl=t.name},uploadError:function(t){this.uploadImgErrorMsg=t.msg,this.imgUrl=""},save:function(){var t=this,s={activityId:this.activityId,title:this.title,showType:this.showType,imgUrl:this.imgUrl,description:this.description};this.$config({handlers:!0}).$post(e.a.POST_SET_LIVE_GUIDE,s).then(function(s){t.canPass=!0,t.$toast({content:"保存成功"})}).catch(function(s){t.$messageBox({header:"提示",content:s.msg,confirmText:"确定",handleClick:function(t){"cancel"===t.action||t.action}})})}}},o=(i(711),i(1)),v=Object(o.a)(c,a,[],!1,null,"ca2211a6",null);v.options.__file="src/pages/set-live-guided/index.vue";s.default=v.exports}}]);
//# sourceMappingURL=14.3ca150d0.js.map