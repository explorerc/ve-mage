(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{1041:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"live-mager play-back"},[a("div",{staticClass:"live-title",staticStyle:{"margin-top":"30px"}},[a("span",{staticClass:"title"},[t._v("活动回放")]),t._v(" "),a("button",{staticClass:"primary-button fr",staticStyle:{"margin-top":"10px"},on:{click:t.addVideoClickShow}},[t._v("添加视频\n    ")])]),t._v(" "),a("transition",{attrs:{name:"fade"}},[t.prePlayShow?a("div",{staticClass:"video-modal-box"},[a("div",{staticClass:"video-modal",on:{click:function(e){t.prePlayShow=!1}}}),t._v(" "),a("div",{staticClass:"video-content"},[t.playBack.outLineLink?a("div",{staticClass:"iframe-box"},[a("div",{staticStyle:{width:"100%",height:"100%"},domProps:{innerHTML:t._s(t.playBack.outLineLink)}})]):!t.recordId||t.playMsg?a("span",[t._v(t._s(t.playMsg||"暂无视频"))]):a("div",{staticStyle:{width:"100%",height:"100%"},attrs:{id:"myVideo"}})])]):t._e()]),t._v(" "),a("div",{staticClass:"list-box"},[a("div",{staticClass:"list-header"},[a("nav",{staticClass:"table-nav"},[a("span",{class:{active:0===t.navIdx},on:{click:function(e){t.changeNav(0)}}},[t._v("回放片段")]),t._v(" "),a("span",{class:{active:1===t.navIdx},on:{click:function(e){t.changeNav(1)}}},[t._v("视频")])]),t._v(" "),a("ve-msg-tips",{attrs:{tip:"您可以根据需要从回放片段或视频中设置默认回放"}})],1),t._v(" "),a("div",{staticClass:"table-list-box"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.playBackList}},[a("el-table-column",{attrs:{prop:"title",label:"片段名"}}),t._v(" "),a("el-table-column",{attrs:{prop:"duration",label:"时长"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n            "+t._s(t._f("formatTime")(e.row.duration))+"\n          ")]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"生成时间"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n            "+t._s(t._f("isEmpty")(e.row.generateTime))+"\n          ")]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"回放状态"},scopedSlots:t._u([{key:"default",fn:function(e){return["SUCCESS"==e.row.status?a("span",{staticClass:"status-success"},[t._v("生成成功")]):"FAIL"==e.row.status?a("span",{staticClass:"status-error"},[t._v("生成失败")]):a("span",{staticClass:"status-default"},[t._v("生成中")])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return["FAIL"==e.row.status?a("div",[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){a.stopPropagation(),t.resetMakePlayBack(e.$index)}}},[t._v("重新生成回放\n              ")])],1):"PROCESS"!==e.row.status?a("div",[t.playBackList[e.$index].replayId==t.playBack.replayId?a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){a.stopPropagation(),t.cancelPlayBack(e.$index)}}},[t._v("取消默认回放\n              ")]):a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){a.stopPropagation(),t.playBackSetting(e.$index)}}},[t._v("设为默认回放\n              ")]),t._v(" "),a("el-button",{staticStyle:{color:"blue"},attrs:{type:"text",size:"small"},on:{click:function(a){a.stopPropagation(),t.handlerMore(e.$index,1)}}},[t._v("预览\n              ")]),t._v(" "),a("div",{staticClass:"more"},[a("span",[t._v("更多")]),t._v(" "),a("div",{staticClass:"more-menu"},[a("span",{class:{disabled:"LINK"==t.playBackList[e.$index].type},on:{click:function(a){t.handlerMore(e.$index,0)}}},[t._v("下载")]),t._v(" "),a("span",{on:{click:function(a){t.handlerMore(e.$index,2)}}},[t._v("重命名")]),t._v(" "),a("span",{on:{click:function(a){t.handlerMore(e.$index,3)}}},[t._v("删除")])])])],1):a("span",[t._v("--")])]}}])})],1),t._v(" "),t.total>t.pageSize?a("div",{staticClass:"pagination-box"},[a("div",{staticClass:"page-pagination"},[a("ve-pagination",{attrs:{total:t.total,pageSize:t.pageSize,currentPage:t.page},on:{changePage:t.changePage}})],1)]):t._e()],1)]),t._v(" "),a("message-box",{directives:[{name:"show",rawName:"v-show",value:t.renameShow,expression:"renameShow"}],attrs:{header:"",width:"340px",cancelText:"取消",confirmText:"确定"},on:{handleClick:t.renameHandleClick}},[a("div",{staticClass:"prop-input"},[t._v("\n      输入新的视频标题：\n      "),a("com-input",{attrs:{placeholder:"请输入标题","error-tips":t.newTitleError,value:t.newTitle},on:{"update:value":function(e){t.newTitle=e}}})],1)]),t._v(" "),a("message-box",{directives:[{name:"show",rawName:"v-show",value:t.addVideoShow,expression:"addVideoShow"}],attrs:{width:"646px",header:"添加视频",type:"prompt",cancelText:"取消",confirmText:"确定"},on:{handleClick:t.addVideohandleClick}},[a("div",{staticClass:"mager-box message-box-content"},[a("div",{staticClass:"from-box"},[a("div",{staticClass:"from-row"},[a("div",{staticClass:"from-title"},[a("i",{staticClass:"star"},[t._v("*")]),t._v("视频类型：\n          ")]),t._v(" "),a("div",{staticClass:"from-content"},[a("el-radio",{attrs:{label:"0"},model:{value:t.playBackMode,callback:function(e){t.playBackMode=e},expression:"playBackMode"}},[t._v("上传视频\n            ")]),t._v(" "),a("el-radio",{attrs:{label:"1"},model:{value:t.playBackMode,callback:function(e){t.playBackMode=e},expression:"playBackMode"}},[t._v("链接引用\n            ")]),t._v(" "),a("div",{staticClass:"from-msg-tip"},[a("ve-msg-tips",{attrs:{tip:'您可以直接引用视频网站上的资源，将播放地址复制到输入框。比如爱奇艺或腾讯视频“分享”中的“通用代码”，示例如下：<iframe frameborder="0" width="640" height="498" src="https://v.qq.com/iframe/player.html?vid=zxxx7hcc6iu&tiny=0&auto=0" allowfullscreen></iframe>'}})],1)],1)]),t._v(" "),0==t.playBackMode?a("div",{staticClass:"from-row"},[a("div",{staticClass:"from-title"},[a("i",{staticClass:"star"},[t._v("*")]),t._v("上传视频：\n          ")]),t._v(" "),a("div",{staticClass:"from-content"},[a("ve-upload-video",{attrs:{title:"视频仅支持mp4格式，文件大小不超过4G",accept:"mp4",fileSize:4194304,errorMsg:t.recordIdError,sdk:t.sdkParam},on:{handleClick:t.handleVideoClick,error:t.errorUploadVideo,success:t.uploadVideoSuccess}})],1)]):a("div",{staticClass:"from-row input-box"},[a("div",{staticClass:"from-title"},[a("i",{staticClass:"star"},[t._v("*")]),t._v("视频链接：\n          ")]),t._v(" "),a("div",{staticClass:"from-content"},[a("div",{staticClass:"black-box"},[a("com-input",{staticClass:"out-line-input",attrs:{"error-tips":t.outLineError,value:t.outLineLink,placeholder:"请输入链接"},on:{"update:value":function(e){t.outLineLink=e}}})],1)])]),t._v(" "),a("div",{staticClass:"from-row input-box"},[a("div",{staticClass:"from-title"},[a("i",{staticClass:"star"},[t._v("*")]),t._v("视频标题：\n          ")]),t._v(" "),a("div",{staticClass:"from-content"},[a("div",{staticClass:"black-box"},[a("com-input",{attrs:{placeholder:"请输入标题","error-tips":t.newTitleError,"max-length":30,value:t.newTitle},on:{"update:value":function(e){t.newTitle=e}}})],1)])])])])]),t._v(" "),a("message-box",{directives:[{name:"show",rawName:"v-show",value:t.playBackShow,expression:"playBackShow"}],attrs:{width:"646px",type:"prompt",header:"设置默认回放",cancelText:"取消",confirmText:"确定"},on:{handleClick:t.savePlayBackConfig}},[a("div",{staticClass:"mager-box message-box-content"},[a("div",{staticClass:"from-box"},[a("div",{staticClass:"from-row"},[a("div",{staticClass:"from-title"},[t._v("回放封面：")]),t._v(" "),a("div",{staticClass:"from-content"},[a("div",{staticClass:"from-content"},[a("ve-upload-image",{attrs:{title:"图片支持jpg、png、bmp格式，建议比例16:9，大小不超过2M",accept:"png|jpg|jpeg",defaultImg:t.defaultImg,fileSize:2048,errorMsg:t.uploadImgErrorMsg},on:{error:t.uploadError,success:t.uploadImgSuccess}})],1)])]),t._v(" "),a("div",{staticClass:"from-row"},[a("div",{staticClass:"from-title"},[a("i",{staticClass:"star"},[t._v("*")]),t._v("下线设置：\n          ")]),t._v(" "),a("div",{staticClass:"from-content"},[a("el-radio",{attrs:{label:"0"},model:{value:t.outLineMode,callback:function(e){t.outLineMode=e},expression:"outLineMode"}},[t._v("与活动同步下线\n            ")]),t._v(" "),a("el-radio",{attrs:{label:"1"},model:{value:t.outLineMode,callback:function(e){t.outLineMode=e},expression:"outLineMode"}},[t._v("指定下线时间\n            ")])],1)]),t._v(" "),a("transition",{attrs:{name:"left-right"}},[1==t.outLineMode?a("div",{staticClass:"from-row input-box"},[a("div",{staticClass:"from-title"},[a("i",{staticClass:"star"},[t._v("*")]),t._v("下线时间：\n            ")]),t._v(" "),a("div",{staticClass:"from-content"},[a("div",{staticClass:"black-box"},[a("el-date-picker",{attrs:{type:"datetime",placeholder:"选择日期时间",align:"right",editable:!1,format:"yyyy-MM-dd HH:mm","value-format":"yyyy-MM-dd HH:mm"},model:{value:t.playBack.outLineTime,callback:function(e){t.$set(t.playBack,"outLineTime",e)},expression:"playBack.outLineTime"}}),t._v(" "),t.outLineError?a("span",{staticClass:"status-error"},[t._v(t._s(t.outLineError))]):t._e()],1)])]):t._e()])],1)])])],1)};i._withStripped=!0;var o=a(97),s=a.n(o),n=a(136),r=a.n(n),l=a(30),c=a.n(l),d=a(488),u=a(689),p=a(487),h=a(501),v=a(677),m=a(678),f=a(676),y=a(95),k=a(15),L="NEVER",g="PLAN",_={name:"play-back",components:{VeUploadImage:d.a,veMsgTips:h.a,VeUploadVideo:u.a,VePagination:p.a},data:function(){return{navIdx:0,addVideoShow:!1,renameShow:!1,playBackShow:!1,newTitle:"",selectRowIdx:0,sdkParam:{sign:"",signed_at:"",app_id:"",fileName:"",fileSize:""},sdkPlayParam:{app_id:"",accountId:"",token:"",recordId:"",linkVideo:""},tempPlayBackCover:"",playBack:{isSwitch:!0,replayId:"",outLineMode:"",outLineTime:"",playBackCover:"",recordId:"",outLineLink:""},outLineError:"",recordIdError:"",newTitleError:"",playBackList:[],isLoadingList:!1,options:[{value:"0",label:"默认回放"},{value:"1",label:"上传视频"},{value:"2",label:"外部链接"}],recordId:"",activityId:"",page:1,pageSize:25,total:0,outLineLink:"",outLineMode:"0",playBackMode:"0",uploadErrorMsg:"",uploadImgErrorMsg:"",playMsg:"",loadingTimeout:0,prePlayShow:!1}},filters:{formatTime:function(t){return t?((t/3600>>0)+"").padStart(2,0)+":"+((t/60%60>>0)+"").padStart(2,0)+":"+((t%60>>0)+"").padStart(2,0):t||"--"}},computed:c()({},Object(y.c)("login",{accountInfo:function(t){return t.accountInfo}}),{defaultImg:function(){return this.tempPlayBackCover?this.$imgHost+"/"+this.tempPlayBackCover:""}}),watch:{outLineMode:function(t){"1"!==t?(this.playBack.outLineMode=L,this.playBack.outLineTime=""):this.playBack.outLineMode=g},"playBack.outLineTime":function(t){t?(this.outLineError=t?"":this.outLineError,new Date(t).getTime()<=(new Date).getTime()?this.outLineError="只能选择当前时间之后的时间":this.outLineError=""):this.outLineError=""},outLineLink:function(t){this.outLineError=t?"":this.outLineError},recordId:function(t){this.recordIdError=t?"":this.recordIdError},newTitle:function(t){this.newTitleError=t?"":this.newTitleError}},created:function(){this.activityId=this.$route.params.id,this.initPage()},methods:c()({},Object(y.b)("login",{setAccountInfo:k.a}),{initPage:function(){var t=this;this.$get(v.a.GET_PLAYBACK,{activityId:this.activityId}).then(function(e){t.playBack={replayId:e.data.replayId,outLineMode:e.data.offlineType,outLineTime:e.data.offlineTime,playBackCover:e.data.cover,outLineLink:""},t.tempPlayBackCover=e.data.cover,t.outLineMode=e.data.offlineType===g?"1":"0"}).then(function(){t.queryPlayBackList(),t.$get(v.a.GET_PAAS_SDK_INFO).then(function(e){t.$nextTick(function(){t.sdkParam.sign=e.data.sign,t.sdkParam.signed_at=e.data.signedAt,t.sdkParam.app_id=e.data.appId,t.sdkPlayParam={app_id:e.data.appId,accountId:e.data.accountId,token:e.data.token,recordId:"",linkVideo:""}})})}),this.initMsgServe()},initMsgServe:function(){var t=this;return r()(s.a.mark(function e(){var a;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$get(v.a.GET_REG_SDK_INFO,{thirdUserId:t.accountInfo.businessUserId,channel:t.accountInfo.channelRoom}).then(function(t){return t.data});case 2:a=e.sent,f.a.OBJ.init({accountId:a.accountId,token:a.token,appId:a.appId,channelId:a.channelRoom}),f.a.OBJ.regHandler(m.a.download,function(e){console.log("---------下载消息---------"),console.log(e),t.downLoadVideo()});case 5:case"end":return e.stop()}},e,t)}))()},changePage:function(t){this.page=t,this.queryPlayBackList()},queryPlayBackList:function(){var t=this;this.isLoadingList||(this.isLoadingList=!0,this.$config({handlers:!0}).$get(v.a.GET_PLAYBACK_LIST,{activityId:this.activityId,page:this.page,pageSize:this.pageSize,type:0===this.navIdx?"SLICE":""}).then(function(e){t.isLoadingList=!1,t.playBackList=e.data.list,t.total=e.data.total}).catch(function(){t.isLoadingList=!1}))},changeNav:function(t){this.page=0,this.total=0,this.navIdx=t,this.queryPlayBackList()},playBackSetting:function(t){this.playBackShow=!0,this.selectRowIdx=t,this.tempPlayBackCover=this.playBack.playBackCover},cancelPlayBack:function(t){var e=this;this.$post(v.a.POST_CANCEL_PLAYBACK_CONFIG,{activityId:this.activityId}).then(function(t){e.playBack.replayId=""})},resetMakePlayBack:function(t){var e=this;this.selectRowIdx=t;var a=this.playBackList[this.selectRowIdx];this.$post(v.a.POST_REMAKE_PLAYBACK,{replayId:a.replayId}).then(function(t){a.status="PROCESS",e.$toast({header:"提示",content:"开始重新生成回放",autoClose:2e3,position:"top-center"})})},handlerMore:function(t,e){this.selectRowIdx=t;var a=this.playBackList[this.selectRowIdx];0===e?this.downLoadVideo():1===e?("LINK"===a.type?(this.sdkPlayParam.outLineLink=a.link,this.sdkPlayParam.recordId=""):(this.sdkPlayParam.recordId=a.video,this.sdkPlayParam.outLineLink=""),this.$playVideo(c()({},this.sdkPlayParam))):2===e?(this.newTitle=a.title,this.renameShow=!0):3===e&&this.delPlayBack()},downLoadVideo:function(t){var e=this,a=0;if(a=t||this.playBackList[this.selectRowIdx].replayId,console.log("------------downLoadVideo-------------"),t)this.downLoadFile(a);else{if(this.loadingTimeout)return;this.loadingTimeout=setTimeout(function(){clearTimeout(e.loadingTimeout),e.loadingTimeout=0,e.downLoadFile(a)},1e3)}},downLoadFile:function(t){var e=this;this.$config({handlers:!0}).$post(v.a.POST_DOWNLOAD_VIDEO,{replayId:t}).then(function(t){if(t.data.downloadUrl){var e=document.createElement("a");e.href=t.data.downloadUrl,e.click()}}).catch(function(t){var a=t.msg||"网络异常";e.$messageBox({header:"提示",content:a,autoClose:5,confirmText:"知道了"})})},addVideoClickShow:function(){this.recordId="",this.outLineLink="",this.newTitle="",this.recordIdError="",this.outLineError="",this.newTitleError="",this.addVideoShow=!0},addVideohandleClick:function(t){var e=this;if("confirm"===t.action){if("0"===this.playBackMode){if(this.outLineLink="",this.outLineError="",!this.recordId)return void(this.recordIdError="视频不能为空")}else if("1"===this.playBackMode&&(this.recordId="",this.recordIdError="",!this.preViewOutLine()))return;if(!this.newTitle)return void(this.newTitleError="视频标题不能为空");this.$post(v.a.POST_CREATE_PLAYBACK,{activityId:this.activityId,title:this.newTitle,type:"0"!==this.playBackMode?"LINK":"VIDEO",link:this.outLineLink.replace("http://",location.protocol+"//"),video:this.recordId}).then(function(t){e.navIdx=1,e.queryPlayBackList()})}else this.sdkParam.fileName="",this.recordIdError="",this.outLineError="",this.newTitleError="";this.addVideoShow=!1},renameHandleClick:function(t){if("confirm"===t.action){if(!this.newTitle)return void(this.newTitleError="标题不能为空");this.updataTitle()}this.renameShow=!1},savePlayBackConfig:function(t){var e=this;if("confirm"===t.action){if("0"===this.outLineMode)this.playBack.outLineTime="";else{if(!this.playBack.outLineTime)return void(this.outLineError="请填写下线时间");if(new Date(this.playBack.outLineTime).getTime()<=(new Date).getTime())return void(this.outLineError="只能选择当前时间之后的时间")}this.playBack.playBackCover=this.tempPlayBackCover;var a=this.playBackList[this.selectRowIdx].replayId;this.$post(v.a.POST_SAVE_PLAYBACK_CONFIG,{replayId:a,cover:this.playBack.playBackCover,offlineType:"0"===this.outLineMode?"NEVER":"PLAN",offlineTime:this.playBack.outLineTime}).then(function(t){e.playBack.replayId=a})}else this.tempPlayBackCover="",this.uploadImgErrorMsg="",this.outLineError="",this.playBack.outLineTime="";this.playBackShow=!1},updataTitle:function(){var t=this,e=this.playBackList[this.selectRowIdx];this.$post(v.a.POST_RETITLE_PLAYBACK,{replayId:e.replayId,title:this.newTitle}).then(function(a){e.title=t.newTitle})},delPlayBack:function(){var t=this;this.playBackList[this.selectRowIdx].replayId+""!=this.playBack.replayId+""?this.$messageBox({header:"删除此视频",width:"400px",content:"您是否确定要删除此视频？",cancelText:"取消",confirmText:"删除",type:"error",handleClick:function(e){if("confirm"===e.action){var a=t.playBackList[t.selectRowIdx].replayId;t.$post(v.a.POST_DELETE_PLAYBACK_BY_ID,{replayId:a}).then(function(e){t.$toast({header:"提示",content:"删除成功！",autoClose:2e3,position:"right-top"}),t.queryPlayBackList()})}}}):this.$messageBox({header:"提示",content:"默认回放不能删除!",autoClose:5,confirmText:"知道了"})},preViewOutLine:function(){if(!this.outLineLink)return this.outLineError="视频链接不能为空",!1;return/^<embed|<iframe.*(embed>|iframe>)$/.test(this.outLineLink)?(this.playBack.outLineLink=this.outLineLink,!0):(this.outLineError="格式不正确",!1)},uploadImgSuccess:function(t){this.tempPlayBackCover=t.name},uploadError:function(t){this.uploadImgErrorMsg=t.msg},uploadVideo:function(){document.getElementById("upload").click()},errorUploadVideo:function(t,e){this.sdkParam.fileName=e.name,this.recordIdError=t},uploadVideoSuccess:function(t,e){this.recordId=t,this.sdkParam.fileName=e},handleVideoClick:function(t){var e=this;"pre-view"===t.type?this.$playVideo(c()({},this.sdkPlayParam)):"delete"===t.type&&this.$messageBox({header:"删除此视频",width:"400px",content:"您是否确定要删除此视频？",cancelText:"取消",confirmText:"删除",type:"error",handleClick:function(t){"confirm"===t.action&&(e.recordId="",e.sdkParam.fileName="",e.sdkParam.fileSize="")}})}})},w=(a(860),a(862),a(864),a(1)),I=Object(w.a)(_,i,[],!1,null,"1cb7a21a",null);I.options.__file="src/pages/live-mager/playBack/index.vue";e.default=I.exports},598:function(t,e,a){},599:function(t,e,a){},600:function(t,e,a){},860:function(t,e,a){"use strict";var i=a(598);a.n(i).a},862:function(t,e,a){"use strict";var i=a(599);a.n(i).a},864:function(t,e,a){"use strict";var i=a(600);a.n(i).a}}]);
//# sourceMappingURL=35.ee795711.js.map