(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{269:function(t,i,a){},401:function(t,i,a){"use strict";var e=a(269);a.n(e).a},545:function(t,i,a){"use strict";a.r(i);var e=a(7),n={getLiveGuided:function(t){return e.a.ajax({method:"post",url:"/manage/guide-manage/get",params:t})},setLiveGuided:function(t){return e.a.ajax({method:"post",url:"/manage/guide-manage/edit",params:t})}},s={data:function(){return{activityId:0,viewCondition:"活动报名",title:"标题",enableCountdown:!0,enableDescription:!1,description:"666",tabValue:1,imgUrl:""}},components:{},created:function(){var t=this;this.activityId=this.$route.params.id;var i={activityId:this.activityId};this.activityId?n.getLiveGuided(i).then(function(i){200!==i.code?console.log(i.msg):(t.viewCondition=i.data.viewCondition?i.data.viewCondition:"",t.title=i.data.title?i.data.title:"",t.enableCountdown="Y"===i.data.enableCountdown,t.enableDescription="Y"===i.data.enableDescription,t.description=i.data.description?i.data.description:"",t.imgUrl=i.data.imgUrl?i.data.imgUrl:"",t.tabValue=1)}):this.$router.go(-1)},mounted:function(){},watch:{},methods:{uploadImgSuccess:function(t){var i=JSON.parse(t.data);console.log(i),this.imgUrl=i.data.name},uploadError:function(t){console.log("上传失败:",t)},save:function(){var t={activityId:this.activityId,title:this.title,enableDescription:this.enableDescription?"Y":"N",enableCountdown:this.enableCountdown?"Y":"N",imgUrl:this.imgUrl,description:this.description};n.setLiveGuided(t).then(function(t){200!==t.code?console.log(t.msg):alert("保存成功")})}}},l=(a(401),a(1)),o=Object(l.a)(s,function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"clearfix set-live-guided-container"},[a("p",{staticClass:"v-title"},[t._v("\n    直播引导页\n  ")]),t._v(" "),a("div",{staticClass:"v-edit pull-left"},[a("div",{staticClass:"input-form v-label clearfix"},[a("p",{staticClass:"v-info-label pull-left"},[t._v("\n        观看条件：\n      ")]),t._v(" "),a("p",{staticClass:"v-info pull-left"},[t._v("\n        "+t._s(t.viewCondition)+"\n      ")])]),t._v(" "),a("div",{staticClass:"input-form v-label clearfix"},[a("p",{staticClass:"v-info-label pull-left"},[t._v("\n        引导标题：\n      ")]),t._v(" "),a("p",{staticClass:"v-info pull-left"},[a("com-input",{attrs:{value:t.title,placeholder:"标题","max-length":15},on:{"update:value":function(i){t.title=i}}})],1)]),t._v(" "),a("div",{staticClass:"input-form v-label clearfix"},[a("p",{staticClass:"v-info-label pull-left"},[t._v("\n        引导图片：\n      ")]),t._v(" "),a("p",{staticClass:"v-info pull-left"},[t._v("\n        为了保证显示效果，请上传不大于1920x1080大小的图片，支持jpg、jpeg、png格式，文件大小不超过2M\n      "),a("com-upload",{attrs:{accept:"png|jpg|jpeg|bmp|gif",actionUrl:"/api/upload/image",inputName:"file",fileSize:2048},on:{error:t.uploadError,load:t.uploadImgSuccess}},[a("div",{staticClass:"test-upload"},[t._v("上传引导图")])])],1)]),t._v(" "),a("div",{staticClass:"input-form v-label clearfix"},[a("p",{staticClass:"v-info-label pull-left"},[t._v("\n        辅助信息：\n      ")]),t._v(" "),a("p",{staticClass:"v-info pull-left"},[a("el-checkbox",{model:{value:t.enableCountdown,callback:function(i){t.enableCountdown=i},expression:"enableCountdown"}},[t._v("活动开始前显示直播倒计时")]),t._v(" "),a("el-checkbox",{model:{value:t.enableDescription,callback:function(i){t.enableDescription=i},expression:"enableDescription"}},[t._v("显示直播简介")]),t._v(" "),a("el-input",{attrs:{type:"textarea",rows:5,placeholder:"请输入内容"},model:{value:t.description,callback:function(i){t.description=i},expression:"description"}})],1)]),t._v(" "),a("a",{staticClass:"v-save",attrs:{href:"javascript:;"},on:{click:function(i){t.save()}}},[t._v("保存")])]),t._v(" "),a("div",{staticClass:"v-show pull-left"},[a("p",{staticClass:"v-sub-title"},[t._v("\n      预览\n    ")]),t._v(" "),a("com-tabs",{attrs:{value:t.tabValue},on:{"update:value":function(i){t.tabValue=i}}},[a("com-tab",{attrs:{label:"手机",index:1}},[a("div",{staticClass:"v-phone"},[a("div",{staticClass:"v-img"},[a("img",{attrs:{src:t.$imgHost+"/"+t.imgUrl,alt:""}})]),t._v(" "),a("div",{staticClass:"v-phone-info"},[a("p",{staticClass:"v-phone-title"},[t._v("\n              "+t._s(t.title)+"\n            ")]),t._v(" "),t.enableDescription?a("div",{staticClass:"v-phone-description"},[a("p",[t._v("\n                "+t._s(t.description)+"\n              ")])]):t._e(),t._v(" "),a("div",{staticClass:"v-phone-operation"},[t.enableCountdown?a("div",{staticClass:"v-phone-countdown"},[t._v("\n                5天23小时44分钟12秒\n              ")]):t._e(),t._v(" "),a("a",{staticClass:"v-phone-enroll",attrs:{href:"javascript:;"}},[t._v("\n                "+t._s("活动报名"===t.viewCondition?"报名":"预约")+"\n              ")])])])])]),t._v(" "),a("com-tab",{attrs:{label:"电脑",index:2}},[a("div",{staticClass:"v-pc clearfix"},[a("div",{staticClass:"v-img pull-left"},[a("img",{attrs:{src:t.$imgHost+"/"+t.imgUrl,alt:""}})]),t._v(" "),a("div",{staticClass:"v-pc-info pull-left"},[a("p",{staticClass:"v-pc-title"},[t._v("\n              "+t._s(t.title)+"\n            ")]),t._v(" "),t.enableDescription?a("div",{staticClass:"v-pc-description"},[a("p",[t._v("\n                "+t._s(t.description)+"\n              ")])]):t._e(),t._v(" "),a("div",{staticClass:"v-pc-operation"},[t.enableCountdown?a("div",{staticClass:"v-pc-countdown"},[t._v("\n                5天23小时44分钟12秒\n              ")]):t._e(),t._v(" "),a("a",{staticClass:"v-pc-enroll",attrs:{href:"javascript:;"}},[t._v("\n                报名\n              ")])])])])])],1)],1)])},[],!1,null,"18df9082",null);o.options.__file="index.vue";i.default=o.exports}}]);