(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{1062:function(a,t,e){"use strict";e.r(t);var i=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"live-mager"},[e("div",{staticClass:"live-title"},[e("span",{staticClass:"title"},[a._v("暖场设置")]),a._v(" "),e("el-switch",{attrs:{"inactive-color":"#DEE1FF","active-color":"#4B5AFE"},on:{change:a.openSwitch},model:{value:a.isSwitch,callback:function(t){a.isSwitch=t},expression:"isSwitch"}})],1),a._v(" "),e("div",{staticClass:"mager-box border-box"},[e("div",{staticClass:"from-box"},[e("div",{staticClass:"from-row"},[a._m(0),a._v(" "),e("div",{staticClass:"from-content"},[e("ve-upload-video",{attrs:{title:"视频仅支持mp4格式，文件大小不超过200M",accept:"mp4",fileSize:204800,errorMsg:a.uploadVideoErrorMsg,sdk:a.sdkParam},on:{error:a.errorUploadVideo,progress:a.uploadProgress,handleClick:a.handleVideoClick,success:a.uploadVideoSuccess}})],1)]),a._v(" "),e("div",{staticClass:"from-row"},[a._m(1),a._v(" "),e("div",{staticClass:"from-content"},[e("el-radio",{attrs:{label:"AUTO"},model:{value:a.warm.playMode,callback:function(t){a.$set(a.warm,"playMode",t)},expression:"warm.playMode"}},[a._v("自动循环\n          ")]),a._v(" "),e("el-radio",{attrs:{label:"ONCE"},model:{value:a.warm.playMode,callback:function(t){a.$set(a.warm,"playMode",t)},expression:"warm.playMode"}},[a._v("单次播放\n          ")])],1)]),a._v(" "),e("div",{staticClass:"from-row"},[e("div",{staticClass:"from-title"},[a._v("视频封面：")]),a._v(" "),e("div",{staticClass:"from-content"},[e("div",{staticClass:"from-content"},[e("ve-upload-image",{attrs:{title:"图片支持jpg、png、bmp格式，建议比例16:9，大小不超过2M",accept:"png|jpg|jpeg|bmp",defaultImg:a.defaultImg,fileSize:2048,errorMsg:a.uploadImgErrorMsg},on:{error:a.uploadError,success:a.uploadImgSuccess}})],1)])])]),a._v(" "),e("div",{staticClass:"bottom-btn"},[e("button",{class:{"primary-button":!0,disabled:a.isDisabled},on:{click:a.saveWarm}},[a._v("保存\n      ")])])])])};i._withStripped=!0;var s=e(30),r=e.n(s),o=e(488),n=e(689),d=e(486),c={name:"warm-field",components:{VeUploadImage:o.a,VeUploadVideo:n.a},data:function(){return{warm:{enabled:"N",playMode:"AUTO",playCover:"",recordId:"",activityId:"",filename:"",fileSize:""},sdkParam:{sign:"",signed_at:"",app_id:"",fileName:"",fileSize:"",transcode_status:0},sdkPlayParam:{app_id:"",accountId:"",token:"",recordId:"",linkVideo:""},isSwitch:!1,loading:!1,isDisabled:!1,percentVideo:0,percentImg:0,uploadErrorMsg:"",uploadImgErrorMsg:"",uploadVideoErrorMsg:"",playMsg:"",canPass:!0,progress:0}},computed:{defaultImg:function(){return this.warm.playCover?this.$imgHost+"/"+this.warm.playCover:""}},beforeRouteLeave:function(a,t,e){this.canPass?e(!0):this.$messageBox({header:"提示",width:"400px",content:"是否放弃当前编辑？",cancelText:"否",confirmText:"是",handleClick:function(a){"confirm"===a.action?e(!0):e(!1)}})},watch:{isSwitch:function(a){this.warm.enabled=a?"Y":"N"},"warm.playMode":function(){this.canPass=!1}},created:function(){var a=this.$route.params.id;a?(this.warm.activityId=a,this.initPage()):this.goBack()},methods:{goBack:function(){this.$router.go(-1)},prePlayVideo:function(){this.$playVideo(r()({},this.sdkPlayParam))},initPage:function(){var a=this;this.$get(d.a.GET_WRAM_INFO,{activityId:this.$route.params.id}).then(function(t){t.data&&(a.warm={activityId:a.$route.params.id,enabled:t.data.enabled,playMode:t.data.playType||a.warm.playMode,playCover:t.data.imgUrl,recordId:t.data.recordId,filename:t.data.filename,fileSize:t.data.fileSize||0},a.isSwitch="Y"===t.data.enabled,a.sdkPlayParam.recordId=t.data.recordId,a.sdkParam.fileName=t.data.filename,a.sdkParam.fileSize=t.data.fileSize||0,a.sdkParam.transcode_status=t.data.record&&t.data.record.list.length>0?t.data.record.list[0].transcode_status:0)}).then(function(){a.$get(d.a.GET_PAAS_SDK_INFO).then(function(t){a.$nextTick(function(){a.sdkParam.sign=t.data.sign,a.sdkParam.signed_at=t.data.signedAt,a.sdkParam.app_id=t.data.appId,a.sdkPlayParam.app_id=t.data.appId,a.sdkPlayParam.accountId=t.data.accountId,a.sdkPlayParam.token=t.data.token})})})},uploadProgress:function(a){this.progress=a},uploadVideo:function(){document.getElementById("upload").click()},checkoutParams:function(){var a=this;if(0!==this.progress&&100!==this.progress){this.$toast({content:"请等待视频上传完成后保存",position:"center"});var t=setTimeout(function(){clearTimeout(t),a.isDisabled=!1},3e3);return!1}if(!this.warm.recordId){this.$toast({content:"请上传暖场视频",position:"center"});var e=setTimeout(function(){clearTimeout(e),a.isDisabled=!1},3e3);return!1}return!0},saveWarm:function(){var a=this;this.isDisabled=!0,this.checkoutParams()&&this.$post(d.a.POST_SAVE_WRAM_INFO,{activityId:this.warm.activityId,recordId:this.warm.recordId,playType:this.warm.playMode,imgUrl:this.warm.playCover,enabled:this.warm.enabled,filename:this.warm.filename,fileSize:parseInt(this.warm.fileSize)}).then(function(t){a.canPass=!0,a.$toast({content:"保存成功",position:"center"});var e=setTimeout(function(){clearTimeout(e),a.isDisabled=!1},3e3)}).catch(function(){a.isDisabled=!1})},uploadImgSuccess:function(a){this.canPass=!1,this.warm.playCover=a.name},uploadVideoSuccess:function(a,t,e){this.canPass=!1,this.warm.recordId=a,this.warm.filename=t,this.warm.fileSize=e,this.sdkParam.fileName=t,this.sdkParam.fileSize=e,this.sdkPlayParam.recordId=a},handleVideoClick:function(a){var t=this;"pre-view"===a.type?this.prePlayVideo():"delete"===a.type&&this.$messageBox({header:"删除此视频",width:"400px",content:"您是否确定要删除此视频？",cancelText:"取消",confirmText:"删除",type:"error",handleClick:function(a){"confirm"===a.action&&(t.canPass=!1,t.uploadVideoErrorMsg="",t.warm.recordId="",t.warm.filename="",t.sdkPlayParam.recordId="",t.sdkParam.fileName="",t.sdkParam.fileSize="",t.sdkParam.transcode_status=0,t.progress=0)}})},errorUploadVideo:function(a,t){this.sdkParam.fileName=t.name,this.uploadVideoErrorMsg=a},uploadError:function(a){this.uploadImgErrorMsg=a.msg,this.warm.playCover=""},openSwitch:function(a){var t=this,e={activityId:this.$route.params.id,submodule:"WARMUP",enabled:a?"Y":"N"};this.$config({handlers:!0}).$post(d.a.POST_DETAIL_SWITCH,e).then(function(a){t.$toast({content:"设置成功"})}).catch(function(e){console.log(e),60706===e.code&&(t.isSwitch=!a,t.$messageBox({header:"提示",content:e.msg,autoClose:10,confirmText:"知道了"}))})}}},l=(e(743),e(745),e(1)),m=Object(l.a)(c,i,[function(){var a=this.$createElement,t=this._self._c||a;return t("div",{staticClass:"from-title"},[t("i",{staticClass:"star"},[this._v("*")]),this._v("暖场视频：")])},function(){var a=this.$createElement,t=this._self._c||a;return t("div",{staticClass:"from-title"},[t("i",{staticClass:"star"},[this._v("*")]),this._v("播放模式：")])}],!1,null,"b73c8c64",null);m.options.__file="src/pages/live-mager/warm-field.vue";t.default=m.exports},540:function(a,t,e){},541:function(a,t,e){},743:function(a,t,e){"use strict";var i=e(540);e.n(i).a},745:function(a,t,e){"use strict";var i=e(541);e.n(i).a}}]);
//# sourceMappingURL=10.2bc6a8c3.js.map