(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{341:function(t,a,e){},342:function(t,a,e){},343:function(t,a,e){},344:function(t,a,e){},557:function(t,a,e){"use strict";var i=e(341);e.n(i).a},559:function(t,a,e){"use strict";var i=e(342);e.n(i).a},561:function(t,a,e){"use strict";var i=e(343);e.n(i).a},563:function(t,a,e){"use strict";var i=e(344);e.n(i).a},567:function(t,a,e){"use strict";e.r(a);var i=e(233),o=e.n(i),s=e(53),n=e.n(s),c=e(50),l=e.n(c),d=e(234),r=e(244),u=e(565),v=e(566),p=e(249),m=e(250),f=e(252),h=e(240),b=e(239),k=e(246),_=e(243),C=e(236),D=e(237),g={mixins:[C.a],components:{ComEdit:D.a,ComEditer:_.a,ComFont:h.a,ComBtn:b.a},props:{min:{type:Number,default:2},max:{type:Number,default:4},height:{type:String,default:"150px"}},data:function(){return{active:-1,host:"//test-zhike.oss-cn-beijing.aliyuncs.com/",autoplay:!0}},methods:{addBlock:function(){var t=this.value.data.length;t<8&&(this.value.data.push({content:"",img:""}),this.active=t)},titleClick:function(t){this.active!==t?this.active=t:this.active=-1},removeClick:function(t){this.value.data.length>2&&this.value.data.splice(t,1)},uploadLoad:function(t,a){var e=JSON.parse(t.data);200===e.code&&(this.value.list[a].img=""+e.data.name)},hideHandle:function(){this.autoplay=!0},showHandle:function(t){this.autoplay=!1}},computed:{widthClass:function(){return"width"+this.value.list.length}}},x=(e(557),e(1)),$=Object(x.a)(g,function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.value.enable?e("div",{staticClass:"block2-container"},[e("div",{ref:"target",staticClass:"block2-content"},[e("el-carousel",{class:t.widthClass,attrs:{trigger:"click",autoplay:t.autoplay,height:t.height,interval:t.value.loop}},t._l(t.value.list,function(a,i){return e("el-carousel-item",{key:"block2_item_"+i,class:a.type},[e("a",{attrs:{target:"_black",href:t._f("voidLink")(a.link)}},[a.bgColor?e("div",{staticClass:"left-area",style:{backgroundColor:a.bgColor}}):t._e(),t._v(" "),a.img?e("img",{staticClass:"img",attrs:{src:0===a.img.indexOf("mp")?t.host+a.img:a.img}}):t._e(),t._v(" "),e("div",{staticClass:"content"},[e("div",{domProps:{innerHTML:t._s(a.content)}}),t._v(" "),t.value.showBtn?e("com-btn",{attrs:{edit:t.value.enable},model:{value:a.btn,callback:function(e){t.$set(a,"btn",e)},expression:"item.btn"}}):t._e()],1)])])}))],1),t._v(" "),e("com-edit",{ref:"editTarget",staticClass:"block2-edit"},[e("com-button",{staticClass:"add-btn",on:{click:t.addBlock}},[t._v("添加图块")]),t._v(" "),e("div",[e("el-checkbox",{model:{value:t.value.showBtn,callback:function(a){t.$set(t.value,"showBtn",a)},expression:"value.showBtn"}},[t._v("是否显示按钮")])],1),t._v(" "),e("ul",{staticClass:"block2-edit-group"},t._l(t.value.list,function(a,i){return e("li",{key:"block2_edit_item"+i},[e("div",{staticClass:"block2-title",on:{click:function(a){t.titleClick(i)}}},[t._v(t._s("图块"+(i+1))),e("i",{staticClass:"iconfont icon-close",on:{click:function(a){a.stopPropagation(),t.removeClick(i)}}})]),t._v(" "),e("div",{staticClass:"block2-content",class:{active:t.active===i}},[e("div",[e("el-radio",{attrs:{label:"top"},model:{value:a.type,callback:function(e){t.$set(a,"type",e)},expression:"item.type"}},[t._v("图片上")]),t._v(" "),e("el-radio",{attrs:{label:"bottom"},model:{value:a.type,callback:function(e){t.$set(a,"type",e)},expression:"item.type"}},[t._v("图片下")]),t._v(" "),e("el-radio",{attrs:{label:"right"},model:{value:a.type,callback:function(e){t.$set(a,"type",e)},expression:"item.type"}},[t._v("图片右")]),t._v(" "),e("el-radio",{attrs:{label:"bottom"},model:{value:a.type,callback:function(e){t.$set(a,"type",e)},expression:"item.type"}},[t._v("图片左")])],1),t._v(" "),e("div",[e("div",[t._v("\n              图块颜色\n              "),e("el-color-picker",{attrs:{"show-alpha":""},model:{value:a.bgColor,callback:function(e){t.$set(a,"bgColor",e)},expression:"item.bgColor"}})],1),t._v(" "),e("com-upload",{attrs:{accept:"png|jpg|jpeg|bmp|gif",uploadTxt:"上传",actionUrl:"/api/upload/image",inputName:"file",fileSize:2048e3,exParams:{}},on:{load:function(a){t.uploadLoad(a,i)}}})],1),t._v(" "),e("div",[e("com-editer",{staticClass:"font-editer",model:{value:a.content,callback:function(e){t.$set(a,"content",e)},expression:"item.content"}})],1),t._v(" "),e("div",[e("com-input",{attrs:{placeholder:"跳转链接"},model:{value:a.link,callback:function(e){t.$set(a,"link",e)},expression:"item.link"}})],1),t._v(" "),t.value.showBtn?e("div",[e("div",[t._v("\n              按钮背景色\n              "),e("el-color-picker",{attrs:{"show-alpha":""},model:{value:a.btn.bgColor,callback:function(e){t.$set(a.btn,"bgColor",e)},expression:"item.btn.bgColor"}})],1),t._v(" "),e("div",[t._v("\n              按钮文字色\n              "),e("el-color-picker",{attrs:{"show-alpha":""},model:{value:a.btn.fontColor,callback:function(e){t.$set(a.btn,"fontColor",e)},expression:"item.btn.fontColor"}})],1),t._v(" "),e("div",[e("com-input",{attrs:{placeholder:"按钮文字"},model:{value:a.btn.text,callback:function(e){t.$set(a.btn,"text",e)},expression:"item.btn.text"}})],1)]):t._e()])])}))],1)],1):t._e()},[],!1,null,"49c4aa12",null);$.options.__file="block2.vue";var y=$.exports,T=e(245),w=e(247),A=e(241),S={components:{ComLogo:p.a,ComNav:m.a,ComPanel:f.a,ComFont:h.a,ComBtn:b.a,ComBlock1:k.a,ComShare:T.a,ComBlock2:y,ComVideo:w.a},data:function(){return{data:A.a.template3()}},props:{value:{type:Object,default:function(){return{}}},editAble:{type:Boolean,default:!1},shareData:{type:Object,default:function(){return{}}}},created:function(){this.value.tid&&(this.data=this.value)}},E=(e(559),Object(x.a)(S,function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"template1-container",class:{isEdit:t.editAble}},[e("com-panel",{staticClass:"section1",attrs:{edit:t.editAble},model:{value:t.data.section1Data.panel,callback:function(a){t.$set(t.data.section1Data,"panel",a)},expression:"data.section1Data.panel"}},[e("com-logo",{staticClass:"logo",attrs:{edit:t.editAble},model:{value:t.data.section1Data.logo,callback:function(a){t.$set(t.data.section1Data,"logo",a)},expression:"data.section1Data.logo"}}),t._v(" "),e("com-nav",{staticClass:"nav",attrs:{edit:t.editAble},model:{value:t.data.section1Data.nav,callback:function(a){t.$set(t.data.section1Data,"nav",a)},expression:"data.section1Data.nav"}})],1),t._v(" "),e("com-panel",{staticClass:"section2",attrs:{edit:t.editAble},model:{value:t.data.section2Data.panel,callback:function(a){t.$set(t.data.section2Data,"panel",a)},expression:"data.section2Data.panel"}},[e("div",{staticClass:"mask"},[e("com-font",{attrs:{edit:t.editAble},model:{value:t.data.section2Data.font,callback:function(a){t.$set(t.data.section2Data,"font",a)},expression:"data.section2Data.font"}}),t._v(" "),e("com-btn",{staticClass:"btn",attrs:{edit:t.editAble},model:{value:t.data.section2Data.btn,callback:function(a){t.$set(t.data.section2Data,"btn",a)},expression:"data.section2Data.btn"}})],1)]),t._v(" "),e("com-panel",{staticClass:"section3",attrs:{edit:t.editAble},model:{value:t.data.section3Data.panel,callback:function(a){t.$set(t.data.section3Data,"panel",a)},expression:"data.section3Data.panel"}},[e("com-font",{attrs:{edit:t.editAble},model:{value:t.data.section3Data.font,callback:function(a){t.$set(t.data.section3Data,"font",a)},expression:"data.section3Data.font"}}),t._v(" "),e("com-block1",{attrs:{edit:t.editAble,max:3},model:{value:t.data.section3Data.block1,callback:function(a){t.$set(t.data.section3Data,"block1",a)},expression:"data.section3Data.block1"}})],1),t._v(" "),e("com-panel",{staticClass:"section4",attrs:{edit:t.editAble},model:{value:t.data.section4Data.panel,callback:function(a){t.$set(t.data.section4Data,"panel",a)},expression:"data.section4Data.panel"}},[e("com-font",{attrs:{edit:t.editAble},model:{value:t.data.section4Data.font,callback:function(a){t.$set(t.data.section4Data,"font",a)},expression:"data.section4Data.font"}}),t._v(" "),e("com-block1",{attrs:{edit:t.editAble},model:{value:t.data.section4Data.block1,callback:function(a){t.$set(t.data.section4Data,"block1",a)},expression:"data.section4Data.block1"}})],1),t._v(" "),e("com-panel",{staticClass:"section5",attrs:{edit:t.editAble},model:{value:t.data.section5Data.panel,callback:function(a){t.$set(t.data.section5Data,"panel",a)},expression:"data.section5Data.panel"}},[e("com-font",{attrs:{edit:t.editAble},model:{value:t.data.section5Data.font,callback:function(a){t.$set(t.data.section5Data,"font",a)},expression:"data.section5Data.font"}}),t._v(" "),e("com-block1",{attrs:{edit:t.editAble,max:3},model:{value:t.data.section5Data.block1,callback:function(a){t.$set(t.data.section5Data,"block1",a)},expression:"data.section5Data.block1"}})],1),t._v(" "),e("com-panel",{staticClass:"section6",attrs:{edit:t.editAble},model:{value:t.data.section6Data.panel,callback:function(a){t.$set(t.data.section6Data,"panel",a)},expression:"data.section6Data.panel"}},[e("com-share",{attrs:{edit:t.editAble,share:t.shareData},model:{value:t.data.section6Data.share,callback:function(a){t.$set(t.data.section6Data,"share",a)},expression:"data.section6Data.share"}})],1),t._v(" "),e("com-panel",{staticClass:"section7",attrs:{edit:t.editAble},model:{value:t.data.section7Data.panel,callback:function(a){t.$set(t.data.section7Data,"panel",a)},expression:"data.section7Data.panel"}},[e("com-font",{attrs:{edit:t.editAble},model:{value:t.data.section7Data.font,callback:function(a){t.$set(t.data.section7Data,"font",a)},expression:"data.section7Data.font"}}),t._v(" "),e("com-btn",{staticClass:"btn",attrs:{edit:t.editAble},model:{value:t.data.section7Data.btn,callback:function(a){t.$set(t.data.section7Data,"btn",a)},expression:"data.section7Data.btn"}})],1),t._v(" "),e("div",{staticClass:"support"},[t._v("微吼直播提供技术支持")])],1)},[],!1,null,"aaf3c7ac",null));E.options.__file="template3.vue";var I=E.exports,U={components:{ComLogo:p.a,ComNav:m.a,ComPanel:f.a,ComFont:h.a,ComBtn:b.a,ComBlock1:k.a,ComShare:T.a,ComBlock2:y,ComVideo:w.a},data:function(){return{data:A.a.template4()}},props:{value:{type:Object,default:function(){return{}}},editAble:{type:Boolean,default:!1},shareData:{type:Object,default:function(){return{}}}},created:function(){this.value.tid&&(this.data=this.value)}},P=(e(561),Object(x.a)(U,function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"template1-container",class:{isEdit:t.editAble}},[e("com-panel",{staticClass:"section1",attrs:{edit:t.editAble},model:{value:t.data.section1Data.panel,callback:function(a){t.$set(t.data.section1Data,"panel",a)},expression:"data.section1Data.panel"}},[e("com-logo",{staticClass:"logo",attrs:{edit:t.editAble},model:{value:t.data.section1Data.logo,callback:function(a){t.$set(t.data.section1Data,"logo",a)},expression:"data.section1Data.logo"}}),t._v(" "),e("com-nav",{staticClass:"nav",attrs:{edit:t.editAble},model:{value:t.data.section1Data.nav,callback:function(a){t.$set(t.data.section1Data,"nav",a)},expression:"data.section1Data.nav"}})],1),t._v(" "),e("div",{staticClass:"section2",attrs:{edit:t.editAble}},[e("com-block2",{attrs:{edit:t.editAble,max:3},model:{value:t.data.section2Data.block2,callback:function(a){t.$set(t.data.section2Data,"block2",a)},expression:"data.section2Data.block2"}})],1),t._v(" "),e("div",{staticClass:"section3"},[e("com-panel",{attrs:{edit:t.editAble},model:{value:t.data.section3Data.panel,callback:function(a){t.$set(t.data.section3Data,"panel",a)},expression:"data.section3Data.panel"}}),t._v(" "),e("com-block1",{attrs:{edit:t.editAble,max:3},model:{value:t.data.section3Data.block1,callback:function(a){t.$set(t.data.section3Data,"block1",a)},expression:"data.section3Data.block1"}})],1),t._v(" "),e("com-panel",{staticClass:"section4",attrs:{edit:t.editAble},model:{value:t.data.section4Data.panel,callback:function(a){t.$set(t.data.section4Data,"panel",a)},expression:"data.section4Data.panel"}},[e("div",{staticClass:"bg"}),t._v(" "),e("com-font",{attrs:{edit:t.editAble},model:{value:t.data.section4Data.font,callback:function(a){t.$set(t.data.section4Data,"font",a)},expression:"data.section4Data.font"}}),t._v(" "),e("com-video",{attrs:{edit:t.editAble},model:{value:t.data.section4Data.video,callback:function(a){t.$set(t.data.section4Data,"video",a)},expression:"data.section4Data.video"}})],1),t._v(" "),e("com-panel",{staticClass:"section5",attrs:{edit:t.editAble},model:{value:t.data.section5Data.panel,callback:function(a){t.$set(t.data.section5Data,"panel",a)},expression:"data.section5Data.panel"}},[e("com-font",{attrs:{edit:t.editAble},model:{value:t.data.section5Data.font,callback:function(a){t.$set(t.data.section5Data,"font",a)},expression:"data.section5Data.font"}}),t._v(" "),e("com-block1",{attrs:{edit:t.editAble,max:3},model:{value:t.data.section5Data.block1,callback:function(a){t.$set(t.data.section5Data,"block1",a)},expression:"data.section5Data.block1"}})],1),t._v(" "),e("com-panel",{staticClass:"section6",attrs:{edit:t.editAble},model:{value:t.data.section6Data.panel,callback:function(a){t.$set(t.data.section6Data,"panel",a)},expression:"data.section6Data.panel"}},[e("com-font",{attrs:{edit:t.editAble},model:{value:t.data.section6Data.font,callback:function(a){t.$set(t.data.section6Data,"font",a)},expression:"data.section6Data.font"}}),t._v(" "),e("com-block1",{attrs:{edit:t.editAble,max:3},model:{value:t.data.section6Data.block1,callback:function(a){t.$set(t.data.section6Data,"block1",a)},expression:"data.section6Data.block1"}})],1),t._v(" "),e("com-panel",{staticClass:"section7",attrs:{edit:t.editAble},model:{value:t.data.section7Data.panel,callback:function(a){t.$set(t.data.section7Data,"panel",a)},expression:"data.section7Data.panel"}},[e("com-font",{attrs:{edit:t.editAble},model:{value:t.data.section7Data.font,callback:function(a){t.$set(t.data.section7Data,"font",a)},expression:"data.section7Data.font"}}),t._v(" "),e("com-btn",{staticClass:"btn",attrs:{edit:t.editAble},model:{value:t.data.section7Data.btn,callback:function(a){t.$set(t.data.section7Data,"btn",a)},expression:"data.section7Data.btn"}})],1),t._v(" "),e("div",{staticClass:"support"},[t._v("微吼直播提供技术支持")])],1)},[],!1,null,"56bd0328",null));P.options.__file="template4.vue";var B=P.exports,O=e(349),q=e(350),R=e(357),j=e(358),N=e(238),W={components:{t0478320:u.default,t0478321:v.default,t0478322:I,t0478323:B,VeUpload:N.a},data:function(){return{protocol:location.protocol,editShare:!1,siteTitle:"",siteTitleError:"",keyWords:"",keyWordsError:"",siteDes:"",icon:"",uploadImgErrorMsg:"",options:[{label:"内容主题",value:"tp"},{label:"推广信息",value:"tdk"}],host:"//test-zhike.oss-cn-beijing.aliyuncs.com/",cType:"tp",t0478320:O.a,t0478321:q.a,t0478322:R.a,t0478323:j.a,com:"",isPreview:!1,share:{des:"",title:"",imgUrl:"",link:location.protocol+"//test-zhike.vhall.com/watch/site/"+this.$route.params.id},data:{},ptid:this.$route.query.tid,tid:this.$route.params.id,title:"",mobileHost:"//test-zhike.vhall.com/m/",pcHOST:"//test-zhike.vhall.com/watch/",published:"N",platform:"PC",changed:void 0}},mounted:function(){-1===this.$route.path.indexOf("edit")&&(this.isPreview=!0),this.init()},methods:{copyLink:function(){this.share.link.copyClipboard()},uploadImgSuccess:function(t){this.icon=t.name},uploadError:function(t){console.log("上传失败:",t)},init:function(){var t=this;this.ptid?this.com="t"+this.ptid:(this.$get(d.a.GET_WEBINAR_INFO,{id:this.tid}).then(function(a){var e=a.data;t.title=e.title,t.published=e.published,t.share.title=a.data.title,t.share.des="",t.share.imgUrl=a.data.imgUrl?t.host+a.data.imgUrl:"",t.$get(r.a.GET_LIVE_SHARE,{activityId:t.tid}).then(function(a){a.data&&-1!==a.data.page.indexOf("officia_route")&&(t.share.title=a.data.title,t.share.des=a.data.description,t.share.imgUrl=t.host+a.data.imgUrl)})}),this.$config({loading:!0}).$get(r.a.GET_SITE_DATA,{activityId:this.tid}).then(function(a){var e=JSON.parse(a.data.value);t.com="t"+e.tid,e.editAble=!0,t.data=e,t.siteTitle=a.data.title||"",t.keyWords=a.data.keyword||"",t.siteDes=a.data.description||"",t.icon=a.data.icon||"",setTimeout(function(){t.changed=!1},500)}))},goBack:function(){var t=this;this.data&&this.changed?this.$messageBox({header:"提示",width:"200",content:"是否保存当前编辑内容并返回",cancelText:"不保存",confirmText:"保存",handleClick:function(a){"cancel"===a.action?t.$router.replace("/liveMager/site/"+t.tid):"confirm"===a.action&&t.doSave(function(){t.$router.replace("/liveMager/site/"+t.tid)})}}):this.$router.replace("/liveMager/site/"+this.tid)},showShare:function(){},doSaveTDK:function(){var t=this;this.siteTitleError||this.keyWordsError||(this.keyWords=this.keyWords.trim().replace(/(\s)(\1)+/g,function(t,a){return a}),this.$config({loading:!0}).$post(r.a.POST_UPDATE_SITE_TDK,{activityId:this.tid,title:this.siteTitle,keyword:this.keyWords,description:this.siteDes,icon:this.icon}).then(function(a){t.$toast({content:"保存成功",autoClose:500})}))},doSave:function(t){var a=this;this.$config({loading:!0}).$post(r.a.POST_UPDATE_SITE,{activityId:this.tid,template:l()(this.data)}).then(function(e){a.$toast({content:"保存成功",autoClose:500}),setTimeout(function(){a.changed=!1},500),"function"==typeof t?setTimeout(function(){t()},500):(a.cType="tdk",a.$nextTick(function(){a.$refs.siteRef.$el.querySelector("input").focus()}))})},doReset:function(){var t=this;this.$messageBox({header:"提示",width:"200",content:"重置模板将导致您编辑的数据被清除是否确认重置模板?",cancelText:"取消",confirmText:"确定",handleClick:function(a){if("cancel"===a.action);else if("confirm"===a.action){var e=t["t"+t.data.tid]();t.$config({loading:!0}).$post(r.a.POST_UPDATE_SITE,{activityId:t.tid,template:l()(e)}).then(function(a){var i=!0,s=!1,c=void 0;try{for(var l,d=n()(o()(e));!(i=(l=d.next()).done);i=!0){var r=l.value;t.data[r]=e[r]}}catch(t){s=!0,c=t}finally{try{!i&&d.return&&d.return()}finally{if(s)throw c}}setTimeout(function(){t.changed=!1},500),t.$toast({content:"重置成功",autoClose:2e3})})}}})},changeType:function(t){var a=this;"tdk"===t&&this.$nextTick(function(){a.$refs.siteRef.$el.querySelector("input").focus()})},doSina:function(){window.open("\n      http://v.t.sina.com.cn/share/share.php?\n      url="+encodeURIComponent(this.share.link)+"\n      &title="+encodeURIComponent(this.share.des)+"\n      &pic="+encodeURIComponent(this.share.imgUrl)+"\n      &appkey=&searchPic=false\n      ")},doQQSpace:function(){window.open("\n      http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?desc="+encodeURIComponent(this.share.des)+"&url="+encodeURIComponent(this.share.link)+"&src%3Dsharemodclk131212&pics="+encodeURIComponent(this.share.imgUrl)+"\n      ")},doQQ:function(){window.open("\n      http://connect.qq.com/widget/shareqq/index.html?url="+encodeURIComponent(this.share.link)+"&title="+encodeURIComponent(this.share.title)+"&desc="+encodeURIComponent(this.share.des)+"&pics="+encodeURIComponent(this.share.imgUrl)+"\n      ")}},watch:{data:{handler:function(t,a){void 0!==this.changed&&(this.changed=!0)},deep:!0}},computed:{publishState:function(){return"N"===this.published?"未发布":"已发布"},defaultImg:function(){return this.icon?this.$imgHost+"/"+this.icon:""}}},H=(e(563),Object(x.a)(W,function(){var t=this,a=this,e=a.$createElement,i=a._self._c||e;return i("div",{staticClass:"template-container"},[i("div",{staticClass:"header"},[a.ptid?a._e():i("div",{staticClass:"title"},[a._v(a._s(a.title)+"-\n      "),i("span",[a._v(a._s(a.publishState))])]),a._v(" "),i("a",{staticClass:"back",on:{click:a.goBack}},[a._v("返回")]),a._v(" "),i("el-select",{staticClass:"type-select",on:{change:a.changeType},model:{value:a.cType,callback:function(t){a.cType=t},expression:"cType"}},a._l(a.options,function(t){return i("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),a._v(" "),a.isPreview&&!a.ptid?i("div",{staticClass:"preview-group"},[i("a",{on:{click:function(t){a.platform="PC"}}},[a._v("电脑版")]),a._v(" "),i("a",{on:{click:function(t){a.platform="H5"}}},[a._v("手机版")]),a._v(" "),i("a",{on:{click:function(t){a.editShare=!0}}},[a._v("分享")]),a._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:a.editShare,expression:"editShare"}],staticClass:"share-box"},[i("div",{staticClass:"share-box-title"},[i("i",{staticClass:"iconfont icon-close",on:{click:function(t){a.editShare=!1}}})]),a._v(" "),i("div",{staticClass:"share-content"},[i("div",{staticClass:"left"},[i("span",[a._v("分享到:")]),a._v(" "),i("div",[i("div",{staticClass:"icon share-sina",on:{click:a.doSina}},[a._v("微博")]),a._v(" "),i("div",{staticClass:"icon share-qq",on:{click:a.doQQ}},[a._v("QQ")]),a._v(" "),i("div",{staticClass:"icon share-qq-space",on:{click:a.doQQSpace}},[a._v("QQ空间")])])]),a._v(" "),i("div",{staticClass:"right"},[i("span",[a._v("微信扫码分享：")]),a._v(" "),i("img",{attrs:{src:"http://aliqr.e.vhall.com/qr.png?t="+this.mobileHost+"site/"+this.tid}})]),a._v(" "),i("div",{staticClass:"bottom"},[i("div",{staticClass:"label"},[a._v("页面地址:")]),a._v(" "),i("com-input",{staticClass:"page-url",attrs:{value:this.protocol+this.pcHOST+"site/"+this.tid,disabled:""}}),a._v(" "),i("com-button",{on:{click:a.copyLink}},[a._v("复制")])],1)])])]):a._e(),a._v(" "),a.isPreview||a.ptid||"tp"!==a.cType?a._e():i("a",{staticClass:"reset",on:{click:a.doReset}},[a._v("重置")]),a._v(" "),a.isPreview||a.ptid||"tp"!==a.cType?a._e():i("a",{staticClass:"save",on:{click:a.doSave}},[a._v("下一步")]),a._v(" "),a.isPreview||a.ptid||"tdk"!==a.cType?a._e():i("a",{staticClass:"save",on:{click:a.doSaveTDK}},[a._v("保存")])],1),a._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:"tp"===a.cType,expression:"cType==='tp'"}],staticClass:"template-content"},["PC"===a.platform?i(a.com,{tag:"component",attrs:{editAble:!a.isPreview},model:{value:a.data,callback:function(t){a.data=t},expression:"data"}}):a._e(),a._v(" "),"H5"===a.platform?i("div",{staticClass:"h5-wrap"},[i("iframe",{staticClass:"h5-preview",attrs:{src:this.mobileHost+"site/"+this.tid,frameborder:"0"}})]):a._e()],1),a._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:"tdk"===a.cType,expression:"cType==='tdk'"}],staticClass:"template-content"},[i("div",{staticClass:"content from-box"},[i("div",{staticClass:"from-row"},[a._m(0),a._v(" "),i("div",{staticClass:"from-content"},[i("com-input",{ref:"siteRef",staticClass:"inp",attrs:{value:a.siteTitle,placeholder:"请输入官网标题","max-length":30,errorTips:a.siteTitleError},on:{"update:value":function(t){a.siteTitle=t},focus:function(t){a.siteTitleError=""},blur:function(){0===t.siteTitle.length&&(t.siteTitleError="必须填写官网标题")}}})],1)]),a._v(" "),i("div",{staticClass:"from-row"},[a._m(1),a._v(" "),i("div",{staticClass:"from-content"},[i("com-input",{staticClass:"inp",attrs:{value:a.keyWords,placeholder:"请输入推广关键字,以空格分割","max-length":30,errorTips:a.keyWordsError},on:{"update:value":function(t){a.keyWords=t},focus:function(t){a.keyWordsError=""},blur:function(){0===t.keyWords.trim().length&&(t.keyWordsError="必须填写推广关键字")}}})],1)]),a._v(" "),i("div",{staticClass:"from-row"},[i("div",{staticClass:"from-title"},[a._v("收藏图标:")]),a._v(" "),i("div",{staticClass:"from-content"},[i("ve-upload",{attrs:{title:"图片支持jpg、png、bmp格式，建议比例48*48，大小不超过500k",accept:"png|jpg|jpeg|bmp|gif",defaultImg:a.defaultImg,fileSize:500,errorMsg:a.uploadImgErrorMsg},on:{error:a.uploadError,success:a.uploadImgSuccess}})],1)]),a._v(" "),i("div",{staticClass:"from-row"},[i("div",{staticClass:"from-title"},[a._v("网页描述:")]),a._v(" "),i("div",{staticClass:"from-content editor-content",staticStyle:{position:"relative"}},[i("com-input",{staticClass:"inp",staticStyle:{height:"100px"},attrs:{type:"textarea",value:a.siteDes,rows:5,placeholder:"请输入网页描述信息","max-length":60},on:{"update:value":function(t){a.siteDes=t}}})],1)])])])])},[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"from-title"},[a("i",{staticClass:"star"},[this._v("*")]),this._v("官网标题:")])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"from-title"},[a("i",{staticClass:"star"},[this._v("*")]),this._v("推广关键字:")])}],!1,null,"4fe905df",null));H.options.__file="template.vue";a.default=H.exports}}]);