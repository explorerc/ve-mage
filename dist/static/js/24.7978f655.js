(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{510:function(t,a,i){"use strict";i.r(a);var s=i(30),e=i.n(s),l=i(546),o=i(531),n=i(98),r=i(529),c=i(97),u=i(15),v=i(63),d={data:function(){return{activityId:0,tabValue:1,bgImgUrl:"",logoImgUrl:"",shareImgUrl:"",shareTitle:"",shareIntroduction:"",isShowWatch:!0,isShowOfficialWebsite:!0,isShowGuided:!0,uploadBgErrorMsg:"",uploadLogoErrorMsg:"",uploadShareErrorMsg:"",avatar:"",status:"",canPass:!0,activityTitle:"",errorTips:""}},components:{VeUpload:o.a},created:function(){var t=this;this.activityId=this.$route.params.id,v.a.$emit("breads",[{title:"活动管理"},{title:"活动列表",url:"/liveMager/list"},{title:"活动详情",url:"/liveMager/detail/"+this.activityId},{title:"观看页"}]);var a={activityId:this.activityId};this.activityId?(this.accountInfo&&this.accountInfo.userName?(this.name=this.accountInfo.name,this.avatar=this.accountInfo.avatar):this.$get(n.a.GET_ACCOUNT).then(function(a){t.name=a.data.name,t.avatar=a.data.avatar,t.setAccountInfo(a.data)}),this.$get(r.a.GET_WEBINAR_INFO,{id:this.activityId}).then(function(a){t.status=a.data.status,t.activityTitle=a.data.title?a.data.title:""}),this.$get(l.a.GET_LIVE_SHARE,a).then(function(a){a.data&&(t.shareImgUrl=a.data.imgUrl?a.data.imgUrl:"",t.shareTitle=a.data.title?a.data.title:"",t.shareIntroduction=a.data.description?a.data.description:"",t.isShowWatch=a.data.page.indexOf("live_route")>-1,t.isShowOfficialWebsite=a.data.page.indexOf("officia_route")>-1,t.isShowGuided=a.data.page.indexOf("guide_route")>-1,t.tabValue=1)}),this.$get(l.a.GET_LIVE_BRAND,a).then(function(a){a.data&&(t.bgImgUrl=a.data.backgroundUrl?a.data.backgroundUrl:"",t.logoImgUrl=a.data.logoUrl?a.data.logoUrl:"",t.tabValue=1)})):this.$router.go(-1)},computed:e()({},Object(c.c)("login",{accountInfo:function(t){return t.accountInfo}}),{defaultBgImg:function(){return this.bgImgUrl?this.$imgHost+"/"+this.bgImgUrl:""},defaultLogoImg:function(){return this.logoImgUrl?this.$imgHost+"/"+this.logoImgUrl:""},defaultShareImg:function(){return this.shareImgUrl?this.$imgHost+"/"+this.shareImgUrl:""},avatarImg:function(){return this.avatar?this.$imgHost+"/"+this.avatar:i(544)}}),mounted:function(){},watch:{},beforeRouteLeave:function(t,a,i){this.canPass?i(!0):this.$messageBox({header:"提示",width:"400px",content:"是否放弃当前编辑？",cancelText:"否",confirmText:"是",handleClick:function(t){"confirm"===t.action?i(!0):i(!1)}})},methods:e()({},Object(c.b)("login",{setAccountInfo:u.a}),{uploadBgSuccess:function(t){this.canPass=!1,this.bgImgUrl=t.name},uploadBgError:function(t){this.uploadBgErrorMsg=t.msg,this.bgImgUrl=""},uploadLogoSuccess:function(t){this.canPass=!1,this.logoImgUrl=t.name},uploadLogoError:function(t){this.uploadLogoErrorMsg=t.msg,this.logoImgUrl=""},uploadShareSuccess:function(t){this.canPass=!1,this.shareImgUrl=t.name},uploadShareError:function(t){this.uploadShareErrorMsg=t.msg,this.shareImgUrl=""},brandClick:function(){var t=this,a={activityId:this.activityId,backgroundUrl:this.bgImgUrl,logoUrl:this.logoImgUrl};this.$config({handlers:!0}).$post(l.a.POST_SET_LIVE_BRAND,a).then(function(a){t.canPass=!0,t.$toast({content:"保存成功",position:"center"})}).catch(function(a){t.$messageBox({header:"提示",content:a.msg,confirmText:"确定",handleClick:function(t){"cancel"===t.action||t.action}})})},shareClick:function(){var t=this;if(!this.shareTitle)return this.errorTips="请填写标题",!1;var a={activityId:this.activityId,title:this.shareTitle,description:this.shareIntroduction,imgUrl:this.shareImgUrl,page:[]};this.isShowWatch&&a.page.push("live_route"),this.isShowOfficialWebsite&&a.page.push("officia_route"),this.isShowGuided&&a.page.push("guide_route"),this.$config({handlers:!0}).$post(l.a.POST_SET_LIVE_SHARE,a).then(function(a){t.canPass=!0,t.$toast({content:"保存成功"})}).catch(function(a){t.$messageBox({header:"提示",content:a.msg,confirmText:"确定",handleClick:function(t){"cancel"===t.action||t.action}})})},shareTitleFocus:function(){this.canPass=!1,this.errorTips=""}})},h=(i(795),i(1)),g=Object(h.a)(d,function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"clearfix set-live-watch-container"},[s("p",{staticClass:"v-title"},[t._v("\n    观看页\n    "),s("com-back")],1),t._v(" "),s("div",{staticClass:"v-content"},[s("com-tabs",{attrs:{value:t.tabValue},on:{"update:value":function(a){t.tabValue=a}}},[s("com-tab",{attrs:{label:"品牌",index:1}},[s("div",{staticClass:"v-brand clearfix"},[s("div",{staticClass:"v-set pull-left"},[s("div",{staticClass:"input-form v-label clearfix"},[s("p",{staticClass:"v-info-label pull-left"},[t._v("\n                背景图片：\n              ")]),t._v(" "),s("ve-upload",{attrs:{title:"建议图片不小于1920*1080px<br/>支持jpg、jpeg、png格式，文件大小不超过2M",accept:"png|jpg|jpeg",defaultImg:t.defaultBgImg,fileSize:2048,errorMsg:t.uploadBgErrorMsg},on:{error:t.uploadBgError,success:t.uploadBgSuccess}}),t._v(" "),s("p",{staticClass:"v-notes"},[t._v("\n                注：背景图片，只对PC页面生效\n              ")])],1),t._v(" "),s("div",{staticClass:"input-form v-label clearfix"},[s("p",{staticClass:"v-info-label pull-left"},[t._v("\n                logo图片：\n              ")]),t._v(" "),s("ve-upload",{attrs:{title:"建议图片不小于140*50<br/>支持jpg、jpeg、png格式，文件大小不超过2M",accept:"png|jpg|jpeg",defaultImg:t.defaultLogoImg,fileSize:2048,errorMsg:t.uploadLogoErrorMsg},on:{error:t.uploadLogoError,success:t.uploadLogoSuccess}}),t._v(" "),s("p",{staticClass:"v-notes"},[t._v("\n                注：logo图片，只对PC页面生效\n              ")])],1)]),t._v(" "),s("div",{staticClass:"v-show pull-right"},[s("div",{staticClass:"v-pc",style:{backgroundImage:"url("+t.defaultBgImg+")"}},[s("div",{staticClass:"clearfix",staticStyle:{"padding-left":"30px",position:"relative"}},[t.defaultLogoImg?[s("img",{staticClass:"v-logo pull-left",attrs:{src:t.defaultLogoImg,alt:"logo"}})]:t._e(),t._v(" "),s("div",{staticClass:"pull-left"},[s("p",{staticClass:"v-live-title"},[t._v("\n                    "+t._s(t.activityTitle)+"\n                  ")]),t._v(" "),s("img",{staticClass:"v-pc-icon",attrs:{src:i(794),alt:""}})])],2),t._v(" "),s("div",{staticClass:"v-show-content"})]),t._v(" "),s("p",{staticClass:"v-preview"},[t._v("品牌预览")])])]),t._v(" "),s("button",{staticClass:"primary-button",on:{click:t.brandClick}},[t._v("\n          保存\n        ")])]),t._v(" "),s("com-tab",{attrs:{label:"分享",index:2}},[s("div",{staticClass:"v-share clearfix"},[s("div",{staticClass:"v-set pull-left"},[s("div",{staticClass:"input-form v-label clearfix"},[s("p",{staticClass:"v-info-label pull-left"},[t._v("\n                分享图标：\n              ")]),t._v(" "),s("ve-upload",{attrs:{title:"建议图片不小于80*80px<br/>支持jpg、jpeg、png格式，文件大小不超过2M",accept:"png|jpg|jpeg",defaultImg:t.defaultShareImg,fileSize:2048,errorMsg:t.uploadShareErrorMsg},on:{error:t.uploadShareError,success:t.uploadShareSuccess}})],1),t._v(" "),s("div",{staticClass:"input-form v-label clearfix"},[s("p",{staticClass:"v-info-label pull-left"},[s("span",{staticClass:"v-red"},[t._v("*")]),t._v(" 分享标题：\n              ")]),t._v(" "),s("div",{staticClass:"v-info pull-left"},[s("com-input",{attrs:{value:t.shareTitle,placeholder:"标题","max-length":30,errorTips:t.errorTips},on:{"update:value":function(a){t.shareTitle=a},focus:t.shareTitleFocus}}),t._v(" "),s("p",{staticClass:"v-notes",staticStyle:{"margin-top":"0"}},[t._v("\n                  注：为了您的内容获得有效传播，建议标题长度不要超过\n                  "),s("span",{staticClass:"v-blue"},[t._v("14")]),t._v("个字\n                ")])],1)]),t._v(" "),s("div",{staticClass:"input-form v-label clearfix v-shareIntroduction"},[s("p",{staticClass:"v-info-label pull-left"},[t._v("\n                分享简介：\n              ")]),t._v(" "),s("p",{staticClass:"v-info pull-left"},[s("com-input",{attrs:{type:"textarea",value:t.shareIntroduction,placeholder:"请输入分享简介","max-length":120},on:{"update:value":function(a){t.shareIntroduction=a}}})],1)]),t._v(" "),s("div",{staticClass:"input-form v-label clearfix"},[s("p",{staticClass:"v-info-label pull-left"},[t._v("\n                应用页面：\n              ")]),t._v(" "),s("p",{staticClass:"v-info pull-left",staticStyle:{"padding-top":"6px"}},[s("el-checkbox",{model:{value:t.isShowWatch,callback:function(a){t.isShowWatch=a},expression:"isShowWatch"}},[t._v("直播观看页")]),t._v(" "),s("el-checkbox",{model:{value:t.isShowOfficialWebsite,callback:function(a){t.isShowOfficialWebsite=a},expression:"isShowOfficialWebsite"}},[t._v("活动官网")]),t._v(" "),s("el-checkbox",{model:{value:t.isShowGuided,callback:function(a){t.isShowGuided=a},expression:"isShowGuided"}},[t._v("直播引导页")])],1)])]),t._v(" "),s("div",{staticClass:"v-show pull-left"},[s("div",{staticClass:"clearfix"},[s("div",{staticClass:"pull-left v-share-friend clearfix"},[s("p",{staticClass:"v-share-title"},[t._v("\n                  "+t._s(t.shareTitle)+"\n                ")]),t._v(" "),s("div",{staticClass:"v-show-content"},[s("div",{staticClass:"v-introduction"},[t._v("\n                    "+t._s(t.shareIntroduction)+"\n                  ")]),t._v(" "),t.defaultShareImg?[s("img",{staticClass:"v-show-img",attrs:{src:t.defaultShareImg,alt:"分享图片"}})]:t._e()],2)]),t._v(" "),s("img",{staticClass:"v-avatar pull-left",attrs:{src:t.avatarImg,alt:"头像"}})]),t._v(" "),s("p",{staticClass:"v-preview"},[t._v("预览")])])]),t._v(" "),s("button",{staticClass:"primary-button v-share-button",on:{click:t.shareClick}},[t._v("\n          保存\n        ")])])],1)],1)])},[],!1,null,"7115fe56",null);g.options.__file="index.vue";a.default=g.exports},614:function(t,a,i){},794:function(t,a,i){t.exports=i.p+"static/img/mac-icon@2x.8f50363.png"},795:function(t,a,i){"use strict";var s=i(614);i.n(s).a}}]);