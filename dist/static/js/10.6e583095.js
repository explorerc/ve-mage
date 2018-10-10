(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{268:function(a,t,e){},269:function(a,t,e){},398:function(a,t,e){"use strict";var i=e(268);e.n(i).a},400:function(a,t,e){"use strict";var i=e(269);e.n(i).a},603:function(a,t,e){"use strict";e.r(t);var i=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"live-mager"},[e("div",{staticClass:"live-title"},[e("span",{staticClass:"title"},[a._v("暖场设置")]),a._v(" "),e("el-switch",{attrs:{"inactive-color":"#DEE1FF","active-color":"#4B5AFE"},on:{change:a.openSwitch},model:{value:a.isSwitch,callback:function(t){a.isSwitch=t},expression:"isSwitch"}}),a._v(" "),e("span",{staticClass:"msg-tip"},[a._v("关闭后，直播观看页将不显示开场内容")])],1),a._v(" "),e("div",{staticClass:"mager-box border-box"},[e("div",{staticClass:"from-box"},[e("div",{staticClass:"from-row"},[a._m(0),a._v(" "),e("div",{staticClass:"from-content"},[e("ve-upload-video",{attrs:{title:"视频仅支持mp4格式，文件大小不超过200M",accept:"mp4",fileSize:204800,errorMsg:a.uploadVideoErrorMsg,sdk:a.sdkParam},on:{error:a.errorUploadVideo,handleClick:a.handleVideoClick,success:a.uploadVideoSuccess}})],1)]),a._v(" "),e("div",{staticClass:"from-row"},[a._m(1),a._v(" "),e("div",{staticClass:"from-content"},[e("el-radio",{attrs:{label:"AUTO"},model:{value:a.warm.playMode,callback:function(t){a.$set(a.warm,"playMode",t)},expression:"warm.playMode"}},[a._v("自动循环\n          ")]),a._v(" "),e("el-radio",{attrs:{label:"ONCE"},model:{value:a.warm.playMode,callback:function(t){a.$set(a.warm,"playMode",t)},expression:"warm.playMode"}},[a._v("单次播放\n          ")])],1)]),a._v(" "),e("div",{staticClass:"from-row"},[e("div",{staticClass:"from-title"},[a._v("视频封面：")]),a._v(" "),e("div",{staticClass:"from-content"},[e("div",{staticClass:"from-content"},[e("ve-upload-image",{attrs:{title:"图片支持jpg、png、bmp格式，建议比例16:9，大小不超过2M",accept:"png|jpg|jpeg|bmp",defaultImg:a.defaultImg,fileSize:2048,errorMsg:a.uploadImgErrorMsg},on:{error:a.uploadError,success:a.uploadImgSuccess}})],1)])])]),a._v(" "),e("div",{staticClass:"bottom-btn"},[e("button",{class:{"primary-button":!0,disabled:a.isDisabled},on:{click:a.saveWarm}},[a._v("保存\n      ")])])])])};i._withStripped=!0;var s=e(10),r=e.n(s),o=e(237),d=e(364),n=e(233),c={name:"warm-field",components:{VeUploadImage:o.a,VeUploadVideo:d.a},data:function(){return{warm:{enabled:"N",playMode:"AUTO",playCover:"",recordId:"",activityId:"",filename:""},sdkParam:{sign:"",signed_at:"",app_id:"",fileName:"",fileSize:"",transcode_status:0},sdkPlayParam:{app_id:"",accountId:"",token:"",recordId:"",linkVideo:""},isSwitch:!1,loading:!1,isDisabled:!1,percentVideo:0,percentImg:0,uploadErrorMsg:"",uploadImgErrorMsg:"",uploadVideoErrorMsg:"",playMsg:"",canPass:!0}},computed:{defaultImg:function(){return this.warm.playCover?this.$imgHost+"/"+this.warm.playCover:""}},beforeRouteLeave:function(a,t,e){this.canPass?e(!0):this.$messageBox({header:"提示",width:"400px",content:"是否放弃当前编辑？",cancelText:"否",confirmText:"是",handleClick:function(a){"confirm"===a.action?e(!0):e(!1)}})},watch:{isSwitch:function(a){this.warm.enabled=a?"Y":"N"},"warm.playMode":function(){this.canPass=!1}},created:function(){var a=this.$route.params.id;a?(this.warm.activityId=a,this.initPage()):this.goBack()},methods:{goBack:function(){this.$router.go(-1)},prePlayVideo:function(){this.$playVideo(r()({},this.sdkPlayParam))},initPage:function(){var a=this;this.$get(n.a.GET_WRAM_INFO,{activityId:this.$route.params.id}).then(function(t){t.data&&(a.warm={activityId:a.$route.params.id,enabled:t.data.enabled,playMode:t.data.playType||a.warm.playMode,playCover:t.data.imgUrl,recordId:t.data.recordId,filename:t.data.filename},a.isSwitch="Y"===t.data.enabled,a.sdkPlayParam.recordId=t.data.recordId,a.sdkParam.fileName=t.data.filename,a.sdkParam.fileSize=t.data.record?t.data.record.storage:0,a.sdkParam.transcode_status=t.data.record&&t.data.record.list.length>0?t.data.record.list[0].transcode_status:0)}).then(function(){a.$get(n.a.GET_PAAS_SDK_INFO).then(function(t){a.$nextTick(function(){a.sdkParam.sign=t.data.sign,a.sdkParam.signed_at=t.data.signedAt,a.sdkParam.app_id=t.data.appId,a.sdkPlayParam.app_id=t.data.appId,a.sdkPlayParam.accountId=t.data.accountId,a.sdkPlayParam.token=t.data.token})})})},uploadVideo:function(){document.getElementById("upload").click()},checkoutParams:function(){return!!this.warm.recordId||(this.$toast({header:"提示",content:"请上传暖场视频",autoClose:2e3,position:"right-top"}),!1)},saveWarm:function(){var a=this;this.checkoutParams()&&(this.isDisabled=!0,this.$post(n.a.POST_SAVE_WRAM_INFO,{activityId:this.warm.activityId,recordId:this.warm.recordId,playType:this.warm.playMode,imgUrl:this.warm.playCover,enabled:this.warm.enabled,filename:this.warm.filename}).then(function(t){a.canPass=!0,a.isDisabled=!1,a.$toast({header:"提示",content:"保存成功",autoClose:2e3,position:"right-top"})}).catch(function(){a.isDisabled=!1}))},uploadImgSuccess:function(a){this.canPass=!1,this.warm.playCover=a.name},uploadVideoSuccess:function(a,t,e){this.canPass=!1,this.warm.recordId=a,this.warm.filename=t,this.sdkParam.fileName=t,this.sdkParam.fileSize=e,this.sdkPlayParam.recordId=a},handleVideoClick:function(a){var t=this;"pre-view"===a.type?this.prePlayVideo():"delete"===a.type&&this.$messageBox({header:"删除此视频",width:"400px",content:"您是否确定要删除此视频？",cancelText:"取消",confirmText:"删除",type:"error",handleClick:function(a){"confirm"===a.action&&(t.canPass=!1,t.uploadVideoErrorMsg="",t.warm.recordId="",t.warm.filename="",t.sdkPlayParam.recordId="",t.sdkParam.fileName="",t.sdkParam.fileSize="",t.sdkParam.transcode_status=0)}})},errorUploadVideo:function(a,t){this.sdkParam.fileName=t.name,this.uploadVideoErrorMsg=a},uploadError:function(a){this.uploadImgErrorMsg=a.msg,this.warm.playCover=""},openSwitch:function(a){var t=this,e={activityId:this.$route.params.id,submodule:"WARMUP",enabled:a?"Y":"N"};this.$config({handlers:!0}).$post(n.a.POST_DETAIL_SWITCH,e).then(function(a){t.$toast({content:"设置成功"})}).catch(function(e){console.log(e),60706===e.code&&(t.isSwitch=!a,t.$messageBox({header:"提示",content:e.msg,autoClose:10,confirmText:"知道了"}))})}}},l=(e(398),e(400),e(1)),m=Object(l.a)(c,i,[function(){var a=this.$createElement,t=this._self._c||a;return t("div",{staticClass:"from-title"},[t("i",{staticClass:"star"},[this._v("*")]),this._v("暖场视频：")])},function(){var a=this.$createElement,t=this._self._c||a;return t("div",{staticClass:"from-title"},[t("i",{staticClass:"star"},[this._v("*")]),this._v("播放模式：")])}],!1,null,"b73c8c64",null);m.options.__file="src/pages/live-mager/warm-field.vue";t.default=m.exports}}]);
//# sourceMappingURL=10.6e583095.js.map