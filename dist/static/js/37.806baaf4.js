(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{325:function(t,a,e){},326:function(t,a,e){},327:function(t,a,e){},328:function(t,a,e){},462:function(t,a,e){"use strict";var i=e(325);e.n(i).a},463:function(t,a,e){"use strict";var i=e(326);e.n(i).a},464:function(t,a,e){"use strict";var i=e(327);e.n(i).a},465:function(t,a,e){"use strict";var i=e(328);e.n(i).a},469:function(t,a,e){"use strict";e.r(a);var i=e(216),s=e.n(i),o=e(53),n=e.n(o),l=e(49),c=e.n(l),d=e(217),r=e(227),v=e(466),u=e(467),p=e(233),m=e(234),f=e(236),h=e(222),b=e(223),_=e(230),k=e(226),C=e(220),g=e(221),D=e(219),x={mixins:[C.a],components:{ComEdit:g.a,ComEditer:k.a,ComFont:h.a,ComBtn:b.a,VeUpload:D.a},props:{min:{type:Number,default:2},max:{type:Number,default:6},height:{type:String,default:"150px"}},data:function(){return{active:-1,host:"//static.vhallyun.com/",uploadImgErrorMsg:"",autoplay:!0}},methods:{addBlock:function(){var t=this.value.list.length;if(t<this.max){this.value.list.push({bgColor:"",btn:{},content:"",img:"",link:"",type:"",target:"_self"}),this.active=t}},titleClick:function(t){this.active!==t?this.active=t:this.active=-1},removeClick:function(t){this.value.list.length>this.min&&this.value.list.splice(t,1)},uploadLoad:function(t,a){var e=JSON.parse(t.data);200===e.code&&(this.value.list[a].img=""+e.data.name)},hideHandle:function(){this.autoplay=!0},showHandle:function(t){this.autoplay=!1},uploadImgSuccess:function(t,a){this.value.list[a].img=""+t.name},uploadError:function(t,a){console.log("上传失败:",t),this.uploadImgErrorMsg=t.msg}},computed:{widthClass:function(){return"width"+this.value.list.length}}},y=(e(462),e(1)),$=Object(y.a)(x,function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.value.enable?e("div",{staticClass:"block2-container"},[e("div",{ref:"target",staticClass:"block2-content"},[e("el-carousel",{class:t.widthClass,attrs:{trigger:"click",autoplay:t.autoplay,height:t.height,interval:t.value.loop}},t._l(t.value.list,function(a,i){return e("el-carousel-item",{key:"block2_item_"+i,class:a.type},[e("a",{attrs:{target:"_black",href:t._f("voidLink")(a.link)}},[a.bgColor?e("div",{staticClass:"left-area",style:{backgroundColor:a.bgColor}}):t._e(),t._v(" "),a.img?e("img",{staticClass:"img",attrs:{src:0===a.img.indexOf("mp")?t.host+a.img:a.img}}):t._e(),t._v(" "),e("div",{staticClass:"content"},[e("div",{domProps:{innerHTML:t._s(a.content)}}),t._v(" "),t.value.showBtn?e("com-btn",{attrs:{edit:t.value.enable},model:{value:a.btn,callback:function(e){t.$set(a,"btn",e)},expression:"item.btn"}}):t._e()],1)])])}))],1),t._v(" "),e("com-edit",{ref:"editTarget",staticClass:"block2-edit"},[e("div",{staticClass:"nav-blank-title"},[t._v("轮播图")]),t._v(" "),e("div",{staticClass:"add-nav-box"},[e("span",{staticClass:"add-nav",on:{click:t.addBlock}},[e("i",{staticClass:"iconfont icon-jiahao"}),t._v("添加栏目")]),t._v(" "),e("span",{staticClass:"tips"},[t._v("最多可添加5个栏目")])]),t._v(" "),e("ul",{staticClass:"block2-edit-group"},t._l(t.value.list,function(a,i){return e("li",{key:"block2_edit_item"+i},[e("div",{staticClass:"block2-title",class:{active:t.active===i},on:{click:function(a){t.titleClick(i)}}},[t._v("栏目"+t._s(i+1)+" "),e("i",{staticClass:"del",on:{click:function(a){a.stopPropagation(),t.removeClick(i)}}}),e("i",{staticClass:"el-submenu__icon-arrow el-icon-arrow-down arrow"})]),t._v(" "),e("div",{staticClass:"block2-content",class:{active:t.active===i}},[e("label",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"normal",staticStyle:{"padding-top":"0"}},[t._v("对齐方式")]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"radio-box"},[e("el-radio",{attrs:{label:"top"},model:{value:a.type,callback:function(e){t.$set(a,"type",e)},expression:"item.type"}},[t._v("图片上")]),t._v(" "),e("el-radio",{attrs:{label:"bottom"},model:{value:a.type,callback:function(e){t.$set(a,"type",e)},expression:"item.type"}},[t._v("图片下")]),t._v(" "),e("el-radio",{attrs:{label:"right"},model:{value:a.type,callback:function(e){t.$set(a,"type",e)},expression:"item.type"}},[t._v("图片右")]),t._v(" "),e("el-radio",{attrs:{label:"bottom"},model:{value:a.type,callback:function(e){t.$set(a,"type",e)},expression:"item.type"}},[t._v("图片左")])],1),t._v(" "),e("div",[e("div",{staticClass:"button-item clearfix"},[e("label",{staticClass:"normal"},[t._v("栏目背景颜色")]),t._v(" "),e("el-color-picker",{attrs:{"show-alpha":""},model:{value:a.bgColor,callback:function(e){t.$set(a,"bgColor",e)},expression:"item.bgColor"}})],1),t._v(" "),e("div",{staticClass:"img-upload-box"},[e("label",{staticClass:"normal"},[t._v("上传图片")]),t._v(" "),e("ve-upload",{attrs:{title:"图片支持jpg、png、bmp格式 大小不超过2M",accept:"png|jpg|bmp",fileSize:2048,errorMsg:t.uploadImgErrorMsg,defaultImg:0===a.img.indexOf("mp")?t.host+a.img:a.img},on:{error:function(a){t.uploadError(a,i)},success:function(a){t.uploadImgSuccess(a,i)}}})],1)]),t._v(" "),e("label",{staticClass:"normal"},[t._v("文字内容")]),t._v(" "),e("div",[e("com-editer",{staticClass:"font-editer",model:{value:a.content,callback:function(e){t.$set(a,"content",e)},expression:"item.content"}})],1),t._v(" "),e("div",[e("label",{staticClass:"normal"},[t._v("跳转链接")]),t._v(" "),e("com-input",{attrs:{placeholder:"跳转链接"},model:{value:a.link,callback:function(e){t.$set(a,"link",e)},expression:"item.link"}}),t._v(" "),e("label",{staticClass:"tips"},[t._v("链接需要附带http头协议")])],1),t._v(" "),e("div",{staticClass:"clearfix show-btn"},[e("label",{staticClass:"normal"},[t._v("是否显示按钮")]),t._v(" "),e("el-switch",{model:{value:t.value.showBtn,callback:function(a){t.$set(t.value,"showBtn",a)},expression:"value.showBtn"}})],1),t._v(" "),t.value.showBtn?e("div",[e("div",{staticClass:"button-item clearfix"},[e("label",[t._v("按钮背景色")]),t._v(" "),e("el-color-picker",{attrs:{"show-alpha":""},model:{value:a.btn.bgColor,callback:function(e){t.$set(a.btn,"bgColor",e)},expression:"item.btn.bgColor"}})],1),t._v(" "),e("div",{staticClass:"button-item clearfix"},[e("label",[t._v("按钮文字色")]),t._v(" "),e("el-color-picker",{attrs:{"show-alpha":""},model:{value:a.btn.fontColor,callback:function(e){t.$set(a.btn,"fontColor",e)},expression:"item.btn.fontColor"}})],1),t._v(" "),e("div",{staticClass:"button-item clearfix"},[e("com-input",{attrs:{placeholder:"按钮文字"},model:{value:a.btn.text,callback:function(e){t.$set(a.btn,"text",e)},expression:"item.btn.text"}})],1)]):t._e()])])}))])],1):t._e()},[],!1,null,"0989ad7a",null);$.options.__file="block2.vue";var w=$.exports,T=e(229),A=e(232),E=e(224),S={components:{ComLogo:p.a,ComNav:m.a,ComPanel:f.a,ComFont:h.a,ComBtn:b.a,ComBlock1:_.a,ComShare:T.a,ComBlock2:w,ComVideo:A.a},data:function(){return{data:E.a.template3()}},props:{value:{type:Object,default:function(){return{}}},editAble:{type:Boolean,default:!1},shareData:{type:Object,default:function(){return{}}}},created:function(){this.value.tid&&(this.data=this.value)}},I=(e(463),Object(y.a)(S,function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"template1-container",class:{isEdit:t.editAble}},[e("com-panel",{staticClass:"section1",attrs:{edit:t.editAble},model:{value:t.data.section1Data.panel,callback:function(a){t.$set(t.data.section1Data,"panel",a)},expression:"data.section1Data.panel"}},[e("com-logo",{staticClass:"logo",attrs:{edit:t.editAble},model:{value:t.data.section1Data.logo,callback:function(a){t.$set(t.data.section1Data,"logo",a)},expression:"data.section1Data.logo"}}),t._v(" "),e("com-nav",{staticClass:"nav",attrs:{edit:t.editAble},model:{value:t.data.section1Data.nav,callback:function(a){t.$set(t.data.section1Data,"nav",a)},expression:"data.section1Data.nav"}})],1),t._v(" "),e("div",{staticClass:"section2",attrs:{edit:t.editAble}},[e("com-block2",{attrs:{edit:t.editAble,max:3},model:{value:t.data.section2Data.block2,callback:function(a){t.$set(t.data.section2Data,"block2",a)},expression:"data.section2Data.block2"}})],1),t._v(" "),e("com-panel",{staticClass:"section3",attrs:{edit:t.editAble},model:{value:t.data.section3Data.panel,callback:function(a){t.$set(t.data.section3Data,"panel",a)},expression:"data.section3Data.panel"}},[e("com-font",{attrs:{edit:t.editAble},model:{value:t.data.section3Data.font,callback:function(a){t.$set(t.data.section3Data,"font",a)},expression:"data.section3Data.font"}}),t._v(" "),e("com-block1",{attrs:{edit:t.editAble,max:3},model:{value:t.data.section3Data.block1,callback:function(a){t.$set(t.data.section3Data,"block1",a)},expression:"data.section3Data.block1"}})],1),t._v(" "),e("com-panel",{staticClass:"section4",attrs:{edit:t.editAble},model:{value:t.data.section4Data.panel,callback:function(a){t.$set(t.data.section4Data,"panel",a)},expression:"data.section4Data.panel"}},[e("com-font",{attrs:{edit:t.editAble},model:{value:t.data.section4Data.font,callback:function(a){t.$set(t.data.section4Data,"font",a)},expression:"data.section4Data.font"}}),t._v(" "),e("com-block1",{attrs:{edit:t.editAble},model:{value:t.data.section4Data.block1,callback:function(a){t.$set(t.data.section4Data,"block1",a)},expression:"data.section4Data.block1"}})],1),t._v(" "),e("com-panel",{staticClass:"section5",attrs:{edit:t.editAble},model:{value:t.data.section5Data.panel,callback:function(a){t.$set(t.data.section5Data,"panel",a)},expression:"data.section5Data.panel"}},[e("com-font",{attrs:{edit:t.editAble},model:{value:t.data.section5Data.font,callback:function(a){t.$set(t.data.section5Data,"font",a)},expression:"data.section5Data.font"}}),t._v(" "),e("com-block1",{attrs:{edit:t.editAble,max:3},model:{value:t.data.section5Data.block1,callback:function(a){t.$set(t.data.section5Data,"block1",a)},expression:"data.section5Data.block1"}})],1),t._v(" "),e("com-panel",{staticClass:"section6",attrs:{edit:t.editAble},model:{value:t.data.section6Data.panel,callback:function(a){t.$set(t.data.section6Data,"panel",a)},expression:"data.section6Data.panel"}},[e("com-share",{attrs:{edit:t.editAble,share:t.shareData},model:{value:t.data.section6Data.share,callback:function(a){t.$set(t.data.section6Data,"share",a)},expression:"data.section6Data.share"}})],1),t._v(" "),e("com-panel",{staticClass:"section7",attrs:{edit:t.editAble},model:{value:t.data.section7Data.panel,callback:function(a){t.$set(t.data.section7Data,"panel",a)},expression:"data.section7Data.panel"}},[e("com-font",{attrs:{edit:t.editAble},model:{value:t.data.section7Data.font,callback:function(a){t.$set(t.data.section7Data,"font",a)},expression:"data.section7Data.font"}}),t._v(" "),e("com-btn",{staticClass:"btn",attrs:{edit:t.editAble},model:{value:t.data.section7Data.btn,callback:function(a){t.$set(t.data.section7Data,"btn",a)},expression:"data.section7Data.btn"}})],1),t._v(" "),e("div",{staticClass:"support"},[t._v("微吼直播提供技术支持")])],1)},[],!1,null,"d12fced0",null));I.options.__file="template3.vue";var U=I.exports,P={components:{ComLogo:p.a,ComNav:m.a,ComPanel:f.a,ComFont:h.a,ComBtn:b.a,ComBlock1:_.a,ComShare:T.a,ComBlock2:w,ComVideo:A.a},data:function(){return{data:E.a.template4()}},props:{value:{type:Object,default:function(){return{}}},editAble:{type:Boolean,default:!1},shareData:{type:Object,default:function(){return{}}}},created:function(){this.value.tid&&(this.data=this.value)}},B=(e(464),Object(y.a)(P,function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"template1-container",class:{isEdit:t.editAble}},[e("com-panel",{staticClass:"section1",attrs:{edit:t.editAble},model:{value:t.data.section1Data.panel,callback:function(a){t.$set(t.data.section1Data,"panel",a)},expression:"data.section1Data.panel"}},[e("com-logo",{staticClass:"logo",attrs:{edit:t.editAble},model:{value:t.data.section1Data.logo,callback:function(a){t.$set(t.data.section1Data,"logo",a)},expression:"data.section1Data.logo"}}),t._v(" "),e("com-nav",{staticClass:"nav",attrs:{edit:t.editAble},model:{value:t.data.section1Data.nav,callback:function(a){t.$set(t.data.section1Data,"nav",a)},expression:"data.section1Data.nav"}})],1),t._v(" "),e("div",{staticClass:"section2",attrs:{edit:t.editAble}},[e("com-block2",{attrs:{edit:t.editAble,max:5},model:{value:t.data.section2Data.block2,callback:function(a){t.$set(t.data.section2Data,"block2",a)},expression:"data.section2Data.block2"}})],1),t._v(" "),e("div",{staticClass:"section3"},[e("com-panel",{attrs:{edit:t.editAble},model:{value:t.data.section3Data.panel,callback:function(a){t.$set(t.data.section3Data,"panel",a)},expression:"data.section3Data.panel"}}),t._v(" "),e("com-block1",{attrs:{edit:t.editAble,max:3},model:{value:t.data.section3Data.block1,callback:function(a){t.$set(t.data.section3Data,"block1",a)},expression:"data.section3Data.block1"}})],1),t._v(" "),e("com-panel",{staticClass:"section4",attrs:{edit:t.editAble},model:{value:t.data.section4Data.panel,callback:function(a){t.$set(t.data.section4Data,"panel",a)},expression:"data.section4Data.panel"}},[e("div",{staticClass:"bg"}),t._v(" "),e("com-font",{attrs:{edit:t.editAble},model:{value:t.data.section4Data.font,callback:function(a){t.$set(t.data.section4Data,"font",a)},expression:"data.section4Data.font"}}),t._v(" "),e("com-video",{attrs:{edit:t.editAble},model:{value:t.data.section4Data.video,callback:function(a){t.$set(t.data.section4Data,"video",a)},expression:"data.section4Data.video"}})],1),t._v(" "),e("com-panel",{staticClass:"section5",attrs:{edit:t.editAble},model:{value:t.data.section5Data.panel,callback:function(a){t.$set(t.data.section5Data,"panel",a)},expression:"data.section5Data.panel"}},[e("com-font",{attrs:{edit:t.editAble},model:{value:t.data.section5Data.font,callback:function(a){t.$set(t.data.section5Data,"font",a)},expression:"data.section5Data.font"}}),t._v(" "),e("com-block1",{attrs:{edit:t.editAble,btn:!0,max:4},model:{value:t.data.section5Data.block1,callback:function(a){t.$set(t.data.section5Data,"block1",a)},expression:"data.section5Data.block1"}})],1),t._v(" "),e("com-panel",{staticClass:"section6",attrs:{edit:t.editAble},model:{value:t.data.section6Data.panel,callback:function(a){t.$set(t.data.section6Data,"panel",a)},expression:"data.section6Data.panel"}},[e("com-font",{attrs:{edit:t.editAble},model:{value:t.data.section6Data.font,callback:function(a){t.$set(t.data.section6Data,"font",a)},expression:"data.section6Data.font"}}),t._v(" "),e("com-block1",{attrs:{edit:t.editAble,max:8},model:{value:t.data.section6Data.block1,callback:function(a){t.$set(t.data.section6Data,"block1",a)},expression:"data.section6Data.block1"}})],1),t._v(" "),e("com-panel",{staticClass:"section7",attrs:{edit:t.editAble},model:{value:t.data.section7Data.panel,callback:function(a){t.$set(t.data.section7Data,"panel",a)},expression:"data.section7Data.panel"}},[e("com-font",{attrs:{edit:t.editAble},model:{value:t.data.section7Data.font,callback:function(a){t.$set(t.data.section7Data,"font",a)},expression:"data.section7Data.font"}}),t._v(" "),e("com-btn",{staticClass:"btn",attrs:{edit:t.editAble},model:{value:t.data.section7Data.btn,callback:function(a){t.$set(t.data.section7Data,"btn",a)},expression:"data.section7Data.btn"}})],1),t._v(" "),e("div",{staticClass:"support"},[t._v("微吼直播提供技术支持")])],1)},[],!1,null,"22f74956",null));B.options.__file="template4.vue";var O=B.exports,q=e(337),R=e(338),N=e(345),j=e(347),W={components:{t0478320:v.default,t0478321:u.default,t0478322:U,t0478323:O,VeUpload:D.a},data:function(){return{protocol:location.protocol,editShare:!1,siteTitle:"",siteTitleError:"",keyWords:"",keyWordsError:"",siteDes:"",icon:"",0:"",uploadErrorMsg:"",options:[{label:"步骤1 内容主题",value:"tp"},{label:"步骤2 推广信息",value:"tdk"}],host:"//static.vhallyun.com/",cType:"tp",t0478320:q.a,t0478321:R.a,t0478322:N.a,t0478323:j.a,com:"",isPreview:!1,share:{des:"",title:"",imgUrl:"",link:location.protocol+"//zhike1.vhall.com/webinar/site/"+this.$route.params.id},data:{},ptid:this.$route.query.tid,tid:this.$route.params.id,title:"",mobileHost:"//zhike1.vhall.com/m/",pcHOST:"//zhike1.vhall.com/webinar/",published:"N",platform:"PC",changed:void 0}},mounted:function(){-1===this.$route.path.indexOf("edit")&&(this.isPreview=!0),this.init()},methods:{copyLink:function(){this.$toast({content:"复制成功"}),this.share.link.copyClipboard()},uploadImgSuccess:function(t){this.icon=t.name},uploadError:function(t){console.log("上传失败:",t),this.uploadErrorMsg=t.msg},init:function(){var t=this;this.ptid?this.com="t"+this.ptid:(this.$get(d.a.GET_WEBINAR_INFO,{id:this.tid}).then(function(a){var e=a.data;t.title=e.title,t.published=e.published,t.share.title=a.data.title,t.share.des="",t.share.imgUrl=a.data.imgUrl?t.host+a.data.imgUrl:"",t.$get(r.a.GET_LIVE_SHARE,{activityId:t.tid}).then(function(a){a.data&&-1!==a.data.page.indexOf("officia_route")&&(t.share.title=a.data.title,t.share.des=a.data.description,t.share.imgUrl=t.host+a.data.imgUrl)})}),this.$config({loading:!0}).$get(r.a.GET_SITE_DATA,{activityId:this.tid}).then(function(a){var e=JSON.parse(a.data.value);t.com="t"+e.tid,e.editAble=!0,t.data=e,t.siteTitle=a.data.title||"",t.keyWords=a.data.keyword||"",t.siteDes=a.data.description||"",t.icon=a.data.icon||"",setTimeout(function(){t.changed=!1},500)}))},goBack:function(){var t=this;this.data&&this.changed?this.$messageBox({header:"提示",width:"200",content:"是否保存当前编辑内容并返回",cancelText:"不保存",confirmText:"保存",handleClick:function(a){"cancel"===a.action?t.$router.replace("/liveMager/site/"+t.tid):"confirm"===a.action&&t.doSave(function(){t.$router.replace("/liveMager/site/"+t.tid)})}}):this.$router.replace("/liveMager/site/"+this.tid)},showShare:function(){},doSaveTDK:function(){var t=this;this.siteTitleError||this.keyWordsError||(this.keyWords=this.keyWords.trim().replace(/(\s)(\1)+/g,function(t,a){return a}),this.$config({loading:!0}).$post(r.a.POST_UPDATE_SITE_TDK,{activityId:this.tid,title:this.siteTitle,keyword:this.keyWords,description:this.siteDes,icon:this.icon}).then(function(a){t.$toast({content:"保存成功",autoClose:500,position:"center"})}))},doSave:function(t){var a=this;this.$config({loading:!0}).$post(r.a.POST_UPDATE_SITE,{activityId:this.tid,template:c()(this.data)}).then(function(e){a.$toast({content:"保存成功",autoClose:500,position:"center"}),setTimeout(function(){a.changed=!1},500),"function"==typeof t?setTimeout(function(){t()},500):(a.cType="tdk",a.$nextTick(function(){a.$refs.siteRef.$el.querySelector("input").focus()}))})},doReset:function(){var t=this;this.$messageBox({header:"提示",width:"200",content:"重置模板将导致您编辑的数据被清除是否确认重置模板?",cancelText:"取消",confirmText:"确定",handleClick:function(a){if("cancel"===a.action);else if("confirm"===a.action){var e=t["t"+t.data.tid]();t.$config({loading:!0}).$post(r.a.POST_UPDATE_SITE,{activityId:t.tid,template:c()(e)}).then(function(a){var i=!0,o=!1,l=void 0;try{for(var c,d=n()(s()(e));!(i=(c=d.next()).done);i=!0){var r=c.value;t.data[r]=e[r]}}catch(t){o=!0,l=t}finally{try{!i&&d.return&&d.return()}finally{if(o)throw l}}setTimeout(function(){t.changed=!1},500),t.$toast({content:"重置成功",autoClose:2e3})})}}})},changeType:function(t){var a=this;"tdk"===t&&this.$nextTick(function(){a.$refs.siteRef.$el.querySelector("input").focus()})},doSina:function(){window.open("\n      http://v.t.sina.com.cn/share/share.php?\n      url="+encodeURIComponent(this.share.link)+"\n      &title="+encodeURIComponent(this.share.des)+"\n      &pic="+encodeURIComponent(this.share.imgUrl)+"\n      &appkey=&searchPic=false\n      ")},doQQSpace:function(){window.open("\n      http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?desc="+encodeURIComponent(this.share.des)+"&url="+encodeURIComponent(this.share.link)+"&src%3Dsharemodclk131212&pics="+encodeURIComponent(this.share.imgUrl)+"\n      ")},doQQ:function(){window.open("\n      http://connect.qq.com/widget/shareqq/index.html?url="+encodeURIComponent(this.share.link)+"&title="+encodeURIComponent(this.share.title)+"&desc="+encodeURIComponent(this.share.des)+"&pics="+encodeURIComponent(this.share.imgUrl)+"\n      ")}},watch:{data:{handler:function(t,a){void 0!==this.changed&&(this.changed=!0)},deep:!0}},computed:{publishState:function(){return"N"===this.published?"未发布":"已发布"},defaultImg:function(){return this.icon?this.$imgHost+"/"+this.icon:""}}},M=(e(465),Object(y.a)(W,function(){var t=this,a=this,e=a.$createElement,i=a._self._c||e;return i("div",{staticClass:"template-container"},[i("div",{staticClass:"header"},[a.ptid?a._e():i("div",{staticClass:"title"},[a._v(a._s(a.title)+"-\n      "),i("span",[a._v(a._s(a.publishState))])]),a._v(" "),i("div",{staticClass:"back-btn",on:{click:a.goBack}},[i("i",{staticClass:"iconfont icon-jiantou"})]),a._v(" "),a.isPreview||a.ptid?a._e():i("el-select",{staticClass:"type-select",on:{change:a.changeType},model:{value:a.cType,callback:function(t){a.cType=t},expression:"cType"}},a._l(a.options,function(t){return i("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),a._v(" "),a.isPreview&&!a.ptid?i("div",{staticClass:"preview-group"},[i("a",{on:{click:function(t){a.platform="PC"}}},[a._v("电脑版")]),a._v(" "),i("a",{on:{click:function(t){a.platform="H5"}}},[a._v("手机版")]),a._v(" "),i("a",{on:{click:function(t){a.editShare=!0}}},[a._v("分享")]),a._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:a.editShare,expression:"editShare"}],staticClass:"share-box"},[i("div",{staticClass:"share-box-title"},[i("i",{staticClass:"iconfont icon-close",on:{click:function(t){a.editShare=!1}}})]),a._v(" "),i("div",{staticClass:"share-content"},[i("div",{staticClass:"left"},[i("span",[a._v("分享到:")]),a._v(" "),i("div",[i("div",{staticClass:"icon share-sina",on:{click:a.doSina}},[a._v("微博")]),a._v(" "),i("div",{staticClass:"icon share-qq",on:{click:a.doQQ}},[a._v("QQ")]),a._v(" "),i("div",{staticClass:"icon share-qq-space",on:{click:a.doQQSpace}},[a._v("QQ空间")])])]),a._v(" "),i("div",{staticClass:"right"},[i("span",[a._v("微信扫码分享：")]),a._v(" "),i("img",{attrs:{src:"http://aliqr.e.vhall.com/qr.png?t="+this.mobileHost+"site/"+this.tid}})]),a._v(" "),i("div",{staticClass:"bottom"},[i("div",{staticClass:"label"},[a._v("页面地址:")]),a._v(" "),i("com-input",{staticClass:"page-url",attrs:{value:this.protocol+this.pcHOST+"site/"+this.tid,disabled:""}}),a._v(" "),i("com-button",{on:{click:a.copyLink}},[a._v("复制")])],1)])])]):a._e(),a._v(" "),a.isPreview||a.ptid||"tp"!==a.cType?a._e():i("a",{staticClass:"reset",on:{click:a.doReset}},[a._v("重置")]),a._v(" "),a.isPreview||a.ptid||"tp"!==a.cType?a._e():i("a",{staticClass:"save",on:{click:a.doSave}},[a._v("下一步")]),a._v(" "),a.isPreview||a.ptid||"tdk"!==a.cType?a._e():i("a",{staticClass:"save",on:{click:a.doSaveTDK}},[a._v("保存")])],1),a._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:"tp"===a.cType,expression:"cType==='tp'"}],staticClass:"template-content"},["PC"===a.platform?i(a.com,{tag:"component",attrs:{editAble:!a.isPreview,shareData:a.share},model:{value:a.data,callback:function(t){a.data=t},expression:"data"}}):a._e(),a._v(" "),"H5"===a.platform?i("div",{staticClass:"h5-wrap"},[i("iframe",{staticClass:"h5-preview",attrs:{src:this.mobileHost+"site/"+this.tid,frameborder:"0"}})]):a._e()],1),a._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:"tdk"===a.cType,expression:"cType==='tdk'"}],staticClass:"template-content"},[i("div",{staticClass:"content from-box"},[i("div",{staticClass:"from-row"},[a._m(0),a._v(" "),i("div",{staticClass:"from-content"},[i("com-input",{ref:"siteRef",staticClass:"inp",attrs:{value:a.siteTitle,placeholder:"请输入官网标题","max-length":30,errorTips:a.siteTitleError},on:{"update:value":function(t){a.siteTitle=t},focus:function(t){a.siteTitleError=""},blur:function(){0===t.siteTitle.length&&(t.siteTitleError="必须填写官网标题")}}})],1)]),a._v(" "),i("div",{staticClass:"from-row"},[a._m(1),a._v(" "),i("div",{staticClass:"from-content"},[i("com-input",{staticClass:"inp",attrs:{value:a.keyWords,placeholder:"请输入推广关键字,以空格分割","max-length":30,errorTips:a.keyWordsError},on:{"update:value":function(t){a.keyWords=t},focus:function(t){a.keyWordsError=""},blur:function(){0===t.keyWords.trim().length&&(t.keyWordsError="必须填写推广关键字")}}})],1)]),a._v(" "),i("div",{staticClass:"from-row"},[i("div",{staticClass:"from-title"},[a._v("收藏图标:")]),a._v(" "),i("div",{staticClass:"from-content"},[i("ve-upload",{attrs:{title:"图片支持jpg、png、bmp格式，建议比例48*48，大小不超过500k",accept:"png|jpg|bmp",defaultImg:a.defaultImg,fileSize:500,errorMsg:a.uploadErrorMsg},on:{error:a.uploadError,success:a.uploadImgSuccess}})],1)]),a._v(" "),i("div",{staticClass:"from-row"},[i("div",{staticClass:"from-title"},[a._v("网页描述:")]),a._v(" "),i("div",{staticClass:"from-content editor-content",staticStyle:{position:"relative"}},[i("com-input",{staticClass:"inp",staticStyle:{height:"100px"},attrs:{type:"textarea",value:a.siteDes,rows:5,placeholder:"请输入网页描述信息","max-length":60},on:{"update:value":function(t){a.siteDes=t}}})],1)])])])])},[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"from-title"},[a("i",{staticClass:"star"},[this._v("*")]),this._v("官网标题:")])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"from-title"},[a("i",{staticClass:"star"},[this._v("*")]),this._v("推广关键字:")])}],!1,null,"68d224f1",null));M.options.__file="template.vue";a.default=M.exports}}]);