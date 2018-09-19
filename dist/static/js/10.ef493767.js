(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{261:function(a,t,e){},262:function(a,t,e){},386:function(a,t,e){"use strict";var i=e(261);e.n(i).a},388:function(a,t,e){"use strict";var i=e(262);e.n(i).a},571:function(a,t,e){"use strict";e.r(t);var i=e(11),s=e.n(i),r=e(237),o=e(348),d=e(234),n={name:"warm-field",components:{VeUploadImage:r.a,VeUploadVideo:o.a},data:function(){return{warm:{enabled:"N",playMode:"AUTO",playCover:"",recordId:"",activityId:"",filename:""},sdkParam:{sign:"",signed_at:"",app_id:"",fileName:"",fileSize:""},sdkPlayParam:{app_id:"",accountId:"",token:"",recordId:"",linkVideo:""},isSwitch:!1,loading:!1,videoSize:"200",percentVideo:0,percentImg:0,uploadErrorMsg:"",uploadImgErrorMsg:"",uploadVideoErrorMsg:"",playMsg:""}},computed:{defaultImg:function(){return this.warm.playCover?this.$imgHost+"/"+this.warm.playCover:""}},watch:{isSwitch:function(a){this.warm.enabled=a?"Y":"N"}},created:function(){var a=this.$route.params.id;a?(this.warm.activityId=a,this.initPage()):this.goBack()},methods:{goBack:function(){this.$router.go(-1)},prePlayVideo:function(){this.$playVideo(s()({},this.sdkPlayParam))},initPage:function(){var a=this;d.a.queryWarmInfoById(this.$route.params.id).then(function(t){200===t.code&&t.data&&(a.warm={activityId:a.$route.params.id,enabled:t.data.enabled,playMode:t.data.playType,playCover:t.data.imgUrl,recordId:t.data.recordId,filename:t.data.filename},a.isSwitch="Y"===t.data.enabled,a.sdkPlayParam.recordId=t.data.recordId,a.sdkParam.fileName=t.data.filename,a.sdkParam.fileSize=t.data.record?t.data.record.storage:0)}).then(function(){d.a.queryPassSdkInfo().then(function(t){a.$nextTick(function(){a.sdkParam.sign=t.data.sign,a.sdkParam.signed_at=t.data.signedAt,a.sdkParam.app_id=t.data.appId,a.sdkPlayParam.app_id=t.data.appId,a.sdkPlayParam.accountId=t.data.accountId,a.sdkPlayParam.token=t.data.token})})})},uploadVideo:function(){document.getElementById("upload").click()},saveWarm:function(){var a=this;d.a.saveAndEditWarmInfo({activityId:this.warm.activityId,recordId:this.warm.recordId,playType:this.warm.playMode,imgUrl:this.warm.playCover,enabled:this.warm.enabled,filename:this.warm.filename}).then(function(t){200===t.code&&a.$toast({header:"提示",content:"保存成功",autoClose:2e3,position:"right-top"})})},uploadImgSuccess:function(a){this.warm.playCover=a.name},uploadVideoSuccess:function(a,t){this.warm.recordId=a,this.warm.filename=t},handleVideoClick:function(a){var t=this;"pre-view"===a.type?this.prePlayVideo():"delete"===a.type&&this.$messageBox({header:"删除此视频",width:"400px",content:"您是否确定要删除此视频？",cancelText:"取消",confirmText:"删除",type:"error",handleClick:function(a){"confirm"===a.action&&(t.warm.recordId="",t.warm.filename="",t.sdkParam.fileName="",t.sdkParam.fileSize="")}})},uploadError:function(a){this.uploadImgErrorMsg="上传图片失败"}}},l=(e(386),e(388),e(1)),c=Object(l.a)(n,function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"live-mager"},[e("div",{staticClass:"live-title"},[e("span",{staticClass:"title"},[a._v("暖场设置")]),a._v(" "),e("el-switch",{attrs:{"inactive-color":"#DEE1FF","active-color":"#4B5AFE"},model:{value:a.isSwitch,callback:function(t){a.isSwitch=t},expression:"isSwitch"}}),a._v(" "),e("span",{staticClass:"msg-tip"},[a._v("关闭后，直播观看页将不显示开场内容")])],1),a._v(" "),e("div",{staticClass:"mager-box border-box"},[e("div",{staticClass:"from-box"},[e("div",{staticClass:"from-row"},[a._m(0),a._v(" "),e("div",{staticClass:"from-content"},[e("ve-upload-video",{attrs:{title:"视频仅支持mp4格式，文件大小不超过200M",accept:"mp4",fileSize:204800,errorMsg:a.uploadVideoErrorMsg,sdk:a.sdkParam},on:{handleClick:a.handleVideoClick,success:a.uploadVideoSuccess}})],1)]),a._v(" "),e("div",{staticClass:"from-row"},[a._m(1),a._v(" "),e("div",{staticClass:"from-content"},[e("el-radio",{attrs:{label:"AUTO"},model:{value:a.warm.playMode,callback:function(t){a.$set(a.warm,"playMode",t)},expression:"warm.playMode"}},[a._v("自动循环")]),a._v(" "),e("el-radio",{attrs:{label:"ONCE"},model:{value:a.warm.playMode,callback:function(t){a.$set(a.warm,"playMode",t)},expression:"warm.playMode"}},[a._v("单次播放")])],1)]),a._v(" "),e("div",{staticClass:"from-row"},[e("div",{staticClass:"from-title"},[a._v("视频封面：")]),a._v(" "),e("div",{staticClass:"from-content"},[e("div",{staticClass:"from-content"},[e("ve-upload-image",{attrs:{title:"图片支持jpg、png、bmp格式，建议比例16:9，大小不超过2M",accept:"png|jpg|jpeg|bmp|gif",defaultImg:a.defaultImg,fileSize:2048,errorMsg:a.uploadImgErrorMsg},on:{error:a.uploadError,success:a.uploadImgSuccess}})],1)])])]),a._v(" "),e("div",{staticClass:"bottom-btn"},[e("button",{staticClass:"primary-button",on:{click:a.saveWarm}},[a._v("保存")])])])])},[function(){var a=this.$createElement,t=this._self._c||a;return t("div",{staticClass:"from-title"},[t("i",{staticClass:"star"},[this._v("*")]),this._v("暖场视频：")])},function(){var a=this.$createElement,t=this._self._c||a;return t("div",{staticClass:"from-title"},[t("i",{staticClass:"star"},[this._v("*")]),this._v("播放模式：")])}],!1,null,"6ca439fe",null);c.options.__file="warm-field.vue";t.default=c.exports}}]);