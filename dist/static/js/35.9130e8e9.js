(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{322:function(t,a,e){},323:function(t,a,e){},324:function(t,a,e){},507:function(t,a,e){"use strict";var i=e(322);e.n(i).a},509:function(t,a,e){"use strict";var i=e(323);e.n(i).a},511:function(t,a,e){"use strict";var i=e(324);e.n(i).a},583:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"live-mager play-back"},[e("div",{staticClass:"live-title",staticStyle:{"margin-top":"30px"}},[e("span",{staticClass:"title"},[t._v("活动回放")]),t._v(" "),e("button",{staticClass:"primary-button fr",staticStyle:{"margin-top":"10px"},on:{click:t.addVideoClickShow}},[t._v("添加视频\n    ")])]),t._v(" "),e("transition",{attrs:{name:"fade"}},[t.prePlayShow?e("div",{staticClass:"video-modal-box"},[e("div",{staticClass:"video-modal",on:{click:function(a){t.prePlayShow=!1}}}),t._v(" "),e("div",{staticClass:"video-content"},[t.playBack.outLineLink?e("div",{staticClass:"iframe-box"},[e("div",{staticStyle:{width:"100%",height:"100%"},domProps:{innerHTML:t._s(t.playBack.outLineLink)}})]):!t.recordId||t.playMsg?e("span",[t._v(t._s(t.playMsg||"暂无视频"))]):e("div",{staticStyle:{width:"100%",height:"100%"},attrs:{id:"myVideo"}})])]):t._e()]),t._v(" "),e("div",{staticClass:"list-box"},[e("div",{staticClass:"list-header"},[e("nav",{staticClass:"table-nav"},[e("span",{class:{active:0===t.navIdx},on:{click:function(a){t.changeNav(0)}}},[t._v("回放片段")]),t._v(" "),e("span",{class:{active:1===t.navIdx},on:{click:function(a){t.changeNav(1)}}},[t._v("视频")])]),t._v(" "),e("ve-msg-tips",{attrs:{tip:"您可以根据需要从回放片段或视频中设置默认回放"}})],1),t._v(" "),e("div",{staticClass:"table-list-box"},[e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.playBackList}},[e("el-table-column",{attrs:{prop:"title",label:"片段名"}}),t._v(" "),e("el-table-column",{attrs:{prop:"duration",label:"时长"},scopedSlots:t._u([{key:"default",fn:function(a){return[t._v("\n            "+t._s(t._f("formatTime")(a.row.duration))+"\n          ")]}}])}),t._v(" "),e("el-table-column",{attrs:{label:"生成时间"},scopedSlots:t._u([{key:"default",fn:function(a){return[t._v("\n            "+t._s(t._f("isEmpty")(a.row.generateTime))+"\n          ")]}}])}),t._v(" "),e("el-table-column",{attrs:{label:"回放状态"},scopedSlots:t._u([{key:"default",fn:function(a){return["SUCCESS"==a.row.status?e("span",{staticClass:"status-success"},[t._v("生成成功")]):"FAIL"==a.row.status?e("span",{staticClass:"status-error"},[t._v("生成失败")]):e("span",{staticClass:"status-default"},[t._v("生成中")])]}}])}),t._v(" "),e("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(a){return["FAIL"==a.row.status?e("div",[e("el-button",{attrs:{type:"text",size:"small"},on:{click:function(e){e.stopPropagation(),t.resetMakePlayBack(a.$index)}}},[t._v("重新生成回放\n              ")])],1):"PROCESS"!==a.row.status?e("div",[t.playBackList[a.$index].replayId==t.playBack.replayId?e("el-button",{attrs:{type:"text",size:"small"},on:{click:function(e){e.stopPropagation(),t.cancelPlayBack(a.$index)}}},[t._v("取消默认回放\n              ")]):e("el-button",{attrs:{type:"text",size:"small"},on:{click:function(e){e.stopPropagation(),t.playBackSetting(a.$index)}}},[t._v("设为默认回放\n              ")]),t._v(" "),e("el-button",{staticStyle:{color:"blue"},attrs:{type:"text",size:"small"},on:{click:function(e){e.stopPropagation(),t.handlerMore(a.$index,1)}}},[t._v("预览\n              ")]),t._v(" "),e("div",{staticClass:"more"},[e("span",[t._v("更多")]),t._v(" "),e("div",{staticClass:"more-menu"},[e("span",{class:{disabled:"LINK"==t.playBackList[a.$index].type},on:{click:function(e){t.handlerMore(a.$index,0)}}},[t._v("下载")]),t._v(" "),e("span",{on:{click:function(e){t.handlerMore(a.$index,2)}}},[t._v("重命名")]),t._v(" "),e("span",{on:{click:function(e){t.handlerMore(a.$index,3)}}},[t._v("删除")])])])],1):e("span",[t._v("--")])]}}])})],1),t._v(" "),t.total>t.pageSize?e("div",{staticClass:"pagination-box"},[e("div",{staticClass:"page-pagination"},[e("ve-pagination",{attrs:{total:t.total,pageSize:t.pageSize,currentPage:t.page},on:{changePage:t.changePage}})],1)]):t._e()],1)]),t._v(" "),e("message-box",{directives:[{name:"show",rawName:"v-show",value:t.renameShow,expression:"renameShow"}],attrs:{header:"",width:"340px",cancelText:"取消",confirmText:"确定"},on:{handleClick:t.renameHandleClick}},[e("div",{staticClass:"prop-input"},[t._v("\n      输入新的视频标题：\n      "),e("com-input",{attrs:{placeholder:"请输入标题","error-tips":t.newTitleError,value:t.newTitle},on:{"update:value":function(a){t.newTitle=a}}})],1)]),t._v(" "),e("message-box",{directives:[{name:"show",rawName:"v-show",value:t.addVideoShow,expression:"addVideoShow"}],attrs:{width:"646px",header:"添加视频",type:"prompt",cancelText:"取消",confirmText:"确定"},on:{handleClick:t.addVideohandleClick}},[e("div",{staticClass:"mager-box message-box-content"},[e("div",{staticClass:"from-box"},[e("div",{staticClass:"from-row"},[e("div",{staticClass:"from-title"},[e("i",{staticClass:"star"},[t._v("*")]),t._v("视频类型：")]),t._v(" "),e("div",{staticClass:"from-content"},[e("el-radio",{attrs:{label:"0"},model:{value:t.playBackMode,callback:function(a){t.playBackMode=a},expression:"playBackMode"}},[t._v("上传视频\n            ")]),t._v(" "),e("el-radio",{attrs:{label:"1"},model:{value:t.playBackMode,callback:function(a){t.playBackMode=a},expression:"playBackMode"}},[t._v("链接引用\n            ")]),t._v(" "),e("div",{staticClass:"from-msg-tip"},[e("ve-msg-tips",{attrs:{tip:'您可以直接引用视频网站上的资源，将播放地址复制到输入框。比如爱奇艺或腾讯视频“分享”中的“通用代码”，示例如下：<iframe frameborder="0" width="640" height="498" src="https://v.qq.com/iframe/player.html?vid=zxxx7hcc6iu&tiny=0&auto=0" allowfullscreen></iframe>'}})],1)],1)]),t._v(" "),0==t.playBackMode?e("div",{staticClass:"from-row"},[e("div",{staticClass:"from-title"},[e("i",{staticClass:"star"},[t._v("*")]),t._v("上传视频：")]),t._v(" "),e("div",{staticClass:"from-content"},[e("ve-upload-video",{attrs:{title:"视频仅支持mp4格式，文件大小不超过4G",accept:"mp4",fileSize:4194304,errorMsg:t.recordIdError,sdk:t.sdkParam},on:{handleClick:t.handleVideoClick,error:t.errorUploadVideo,success:t.uploadVideoSuccess}})],1)]):e("div",{staticClass:"from-row input-box"},[e("div",{staticClass:"from-title"},[e("i",{staticClass:"star"},[t._v("*")]),t._v("视频链接：")]),t._v(" "),e("div",{staticClass:"from-content"},[e("div",{staticClass:"black-box"},[e("com-input",{staticClass:"out-line-input",attrs:{"error-tips":t.outLineError,value:t.outLineLink,placeholder:"请输入链接"},on:{"update:value":function(a){t.outLineLink=a}}})],1)])]),t._v(" "),e("div",{staticClass:"from-row input-box"},[e("div",{staticClass:"from-title"},[e("i",{staticClass:"star"},[t._v("*")]),t._v("视频标题：")]),t._v(" "),e("div",{staticClass:"from-content"},[e("div",{staticClass:"black-box"},[e("com-input",{attrs:{placeholder:"请输入标题","error-tips":t.newTitleError,"max-length":30,value:t.newTitle},on:{"update:value":function(a){t.newTitle=a}}})],1)])])])])]),t._v(" "),e("message-box",{directives:[{name:"show",rawName:"v-show",value:t.playBackShow,expression:"playBackShow"}],attrs:{width:"646px",type:"prompt",header:"设置默认回放",cancelText:"取消",confirmText:"确定"},on:{handleClick:t.savePlayBackConfig}},[e("div",{staticClass:"mager-box message-box-content"},[e("div",{staticClass:"from-box"},[e("div",{staticClass:"from-row"},[e("div",{staticClass:"from-title"},[t._v("回放封面：")]),t._v(" "),e("div",{staticClass:"from-content"},[e("div",{staticClass:"from-content"},[e("ve-upload-image",{attrs:{title:"图片支持jpg、png、bmp格式，建议比例16:9，大小不超过2M",accept:"png|jpg|jpeg",defaultImg:t.defaultImg,fileSize:2048,errorMsg:t.uploadImgErrorMsg},on:{error:t.uploadError,success:t.uploadImgSuccess}})],1)])]),t._v(" "),e("div",{staticClass:"from-row"},[e("div",{staticClass:"from-title"},[e("i",{staticClass:"star"},[t._v("*")]),t._v("下线设置：")]),t._v(" "),e("div",{staticClass:"from-content"},[e("el-radio",{attrs:{label:"0"},model:{value:t.outLineMode,callback:function(a){t.outLineMode=a},expression:"outLineMode"}},[t._v("与活动同步下线\n            ")]),t._v(" "),e("el-radio",{attrs:{label:"1"},model:{value:t.outLineMode,callback:function(a){t.outLineMode=a},expression:"outLineMode"}},[t._v("指定下线时间\n            ")])],1)]),t._v(" "),e("transition",{attrs:{name:"left-right"}},[1==t.outLineMode?e("div",{staticClass:"from-row input-box"},[e("div",{staticClass:"from-title"},[e("i",{staticClass:"star"},[t._v("*")]),t._v("下线时间：")]),t._v(" "),e("div",{staticClass:"from-content"},[e("div",{staticClass:"black-box"},[e("el-date-picker",{attrs:{type:"datetime",placeholder:"选择日期时间",align:"right",editable:!1,format:"yyyy-MM-dd HH:mm","value-format":"yyyy-MM-dd HH:mm"},model:{value:t.playBack.outLineTime,callback:function(a){t.$set(t.playBack,"outLineTime",a)},expression:"playBack.outLineTime"}}),t._v(" "),t.outLineError?e("span",{staticClass:"status-error"},[t._v(t._s(t.outLineError))]):t._e()],1)])]):t._e()])],1)])])],1)};i._withStripped=!0;var o=e(10),s=e.n(o),n=e(51),r=e.n(n),l=e(76),c=e.n(l),d=e(237),p=e(364),u=e(241),h=e(250),v=e(350),m=e(351),f=e(349),k="NEVER",y="PLAN",L={name:"play-back",components:{VeUploadImage:d.a,veMsgTips:h.a,VeUploadVideo:p.a,VePagination:u.a},data:function(){return{navIdx:0,addVideoShow:!1,renameShow:!1,playBackShow:!1,newTitle:"",selectRowIdx:0,sdkParam:{sign:"",signed_at:"",app_id:"",fileName:"",fileSize:""},sdkPlayParam:{app_id:"",accountId:"",token:"",recordId:"",linkVideo:""},tempPlayBackCover:"",playBack:{isSwitch:!0,replayId:"",outLineMode:"",outLineTime:"",playBackCover:"",recordId:"",outLineLink:""},outLineError:"",recordIdError:"",newTitleError:"",playBackList:[],isLoadingList:!1,options:[{value:"0",label:"默认回放"},{value:"1",label:"上传视频"},{value:"2",label:"外部链接"}],recordId:"",activityId:"",page:1,pageSize:25,total:0,outLineLink:"",outLineMode:"0",playBackMode:"0",uploadErrorMsg:"",uploadImgErrorMsg:"",playMsg:"",prePlayShow:!1}},filters:{formatTime:function(t){return t?((t/3600>>0)+"").padStart(2,0)+":"+((t/60%60>>0)+"").padStart(2,0)+":"+((t%60>>0)+"").padStart(2,0):t||"--"}},computed:{defaultImg:function(){return this.tempPlayBackCover?this.$imgHost+"/"+this.tempPlayBackCover:""}},watch:{outLineMode:function(t){"1"!==t?(this.playBack.outLineMode=k,this.playBack.outLineTime=""):this.playBack.outLineMode=y},"playBack.outLineTime":function(t){this.outLineError=t?"":this.outLineError},outLineLink:function(t){this.outLineError=t?"":this.outLineError},recordId:function(t){this.recordIdError=t?"":this.recordIdError},newTitle:function(t){this.newTitleError=t?"":this.newTitleError}},created:function(){this.activityId=this.$route.params.id,this.initPage()},methods:{initPage:function(){var t=this;this.$get(v.a.GET_PLAYBACK,{activityId:this.activityId}).then(function(a){t.playBack={replayId:a.data.replayId,outLineMode:a.data.offlineType,outLineTime:a.data.offlineTime,playBackCover:a.data.cover,outLineLink:""},t.tempPlayBackCover=a.data.cover,t.outLineMode=a.data.offlineType===y?"1":"0"}).then(function(){t.queryPlayBackList(),t.$get(v.a.GET_PAAS_SDK_INFO).then(function(a){t.$nextTick(function(){t.sdkParam.sign=a.data.sign,t.sdkParam.signed_at=a.data.signedAt,t.sdkParam.app_id=a.data.appId,t.sdkPlayParam={app_id:a.data.appId,accountId:a.data.accountId,token:a.data.token,recordId:"",linkVideo:""}})})}),this.initMsgServe()},initMsgServe:function(){var t=this;return c()(r.a.mark(function a(){var e,i;return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return e=JSON.parse(sessionStorage.getItem("accountInfo")),a.next=3,t.$get(v.a.GET_REG_SDK_INFO,{thirdUserId:e.businessUserId,channel:e.channelRoom}).then(function(t){return t.data});case 3:i=a.sent,f.a.OBJ.init({accountId:i.accountId,token:i.token,appId:i.appId,channelId:i.channelRoom}),f.a.OBJ.regHandler(m.a.download,function(a){t.downLoadVideo()});case 6:case"end":return a.stop()}},a,t)}))()},changePage:function(t){this.page=t,this.queryPlayBackList()},queryPlayBackList:function(){var t=this;this.isLoadingList||(this.isLoadingList=!0,this.$config({handlers:!0}).$get(v.a.GET_PLAYBACK_LIST,{activityId:this.activityId,page:this.page,pageSize:this.pageSize,type:0===this.navIdx?"SLICE":""}).then(function(a){t.isLoadingList=!1,t.playBackList=a.data.list,t.total=a.data.total}).catch(function(){t.isLoadingList=!1}))},changeNav:function(t){this.page=0,this.total=0,this.navIdx=t,this.queryPlayBackList()},playBackSetting:function(t){this.playBackShow=!0,this.selectRowIdx=t,this.tempPlayBackCover=this.playBack.playBackCover},cancelPlayBack:function(t){var a=this;this.$post(v.a.POST_CANCEL_PLAYBACK_CONFIG,{activityId:this.activityId}).then(function(t){a.playBack.replayId=""})},resetMakePlayBack:function(t){var a=this;this.selectRowIdx=t;var e=this.playBackList[this.selectRowIdx];this.$post(v.a.POST_REMAKE_PLAYBACK,{replayId:e.replayId}).then(function(t){e.status="PROCESS",a.$toast({header:"提示",content:"成功生成回放",autoClose:2e3,position:"top-center"})})},handlerMore:function(t,a){this.selectRowIdx=t;var e=this.playBackList[this.selectRowIdx];0===a?this.downLoadVideo():1===a?("LINK"===e.type?(this.sdkPlayParam.outLineLink=e.link,this.sdkPlayParam.recordId=""):(this.sdkPlayParam.recordId=e.video,this.sdkPlayParam.outLineLink=""),this.$playVideo(s()({},this.sdkPlayParam))):2===a?(this.newTitle=e.title,this.renameShow=!0):3===a&&this.delPlayBack()},downLoadVideo:function(){var t=this,a=this.playBackList[this.selectRowIdx];this.$config({handlers:!0}).$post(v.a.POST_DOWNLOAD_VIDEO,{replayId:a.replayId}).then(function(t){if(t.data.downloadUrl){var a=document.createElement("a");a.href=t.data.downloadUrl,a.click()}}).catch(function(a){var e=a.msg||"网络异常";t.$messageBox({header:"提示",content:e,autoClose:5,confirmText:"知道了"})})},addVideoClickShow:function(){this.recordId="",this.outLineLink="",this.newTitle="",this.recordIdError="",this.outLineError="",this.newTitleError="",this.addVideoShow=!0},addVideohandleClick:function(t){var a=this;if("confirm"===t.action){if("0"===this.playBackMode){if(this.outLineLink="",this.outLineError="",!this.recordId)return void(this.recordIdError="视频不能为空")}else if("1"===this.playBackMode&&(this.recordId="",this.recordIdError="",!this.preViewOutLine()))return;if(!this.newTitle)return void(this.newTitleError="视频标题不能为空");this.$post(v.a.POST_CREATE_PLAYBACK,{activityId:this.activityId,title:this.newTitle,type:"0"!==this.playBackMode?"LINK":"VIDEO",link:this.outLineLink.replace("http://",location.protocol+"//"),video:this.recordId}).then(function(t){a.navIdx=1,a.queryPlayBackList()})}else this.sdkParam.fileName="",this.recordIdError="",this.outLineError="",this.newTitleError="";this.addVideoShow=!1},renameHandleClick:function(t){if("confirm"===t.action){if(!this.newTitle)return void(this.newTitleError="标题不能为空");this.updataTitle()}this.renameShow=!1},savePlayBackConfig:function(t){var a=this;if("confirm"===t.action){if("0"===this.outLineMode)this.playBack.outLineTime="";else if(!this.playBack.outLineTime)return void(this.outLineError="请填写下线时间");this.playBack.playBackCover=this.tempPlayBackCover;var e=this.playBackList[this.selectRowIdx].replayId;this.$post(v.a.POST_SAVE_PLAYBACK_CONFIG,{replayId:e,cover:this.playBack.playBackCover,offlineType:"0"===this.outLineMode?"NEVER":"PLAN",offlineTime:this.playBack.outLineTime}).then(function(t){a.playBack.replayId=e})}else this.tempPlayBackCover="",this.uploadImgErrorMsg="",this.outLineError="";this.playBackShow=!1},updataTitle:function(){var t=this,a=this.playBackList[this.selectRowIdx];this.$post(v.a.POST_RETITLE_PLAYBACK,{replayId:a.replayId,title:this.newTitle}).then(function(e){a.title=t.newTitle})},delPlayBack:function(){var t=this;this.$messageBox({header:"删除此视频",width:"400px",content:"您是否确定要删除此视频？",cancelText:"取消",confirmText:"删除",type:"error",handleClick:function(a){if("confirm"===a.action){var e=t.playBackList[t.selectRowIdx].replayId;t.$post(v.a.POST_DELETE_PLAYBACK_BY_ID,{replayId:e}).then(function(a){t.$toast({header:"提示",content:"删除成功！",autoClose:2e3,position:"right-top"}),t.queryPlayBackList()})}}})},preViewOutLine:function(){if(!this.outLineLink)return this.outLineError="视频链接不能为空",!1;return/^<embed|<iframe.*(embed>|iframe>)$/.test(this.outLineLink)?(this.playBack.outLineLink=this.outLineLink,!0):(this.outLineError="格式不正确",!1)},uploadImgSuccess:function(t){this.tempPlayBackCover=t.name},uploadError:function(t){this.uploadImgErrorMsg=t.msg},uploadVideo:function(){document.getElementById("upload").click()},errorUploadVideo:function(t,a){this.sdkParam.fileName=a.name,this.recordIdError=t},uploadVideoSuccess:function(t,a){this.recordId=t,this.sdkParam.fileName=a},handleVideoClick:function(t){var a=this;"pre-view"===t.type?this.$playVideo(s()({},this.sdkPlayParam)):"delete"===t.type&&this.$messageBox({header:"删除此视频",width:"400px",content:"您是否确定要删除此视频？",cancelText:"取消",confirmText:"删除",type:"error",handleClick:function(t){"confirm"===t.action&&(a.recordId="",a.sdkParam.fileName="",a.sdkParam.fileSize="")}})}}},_=(e(507),e(509),e(511),e(1)),g=Object(_.a)(L,i,[],!1,null,"1cb7a21a",null);g.options.__file="src/pages/live-mager/playBack/index.vue";a.default=g.exports}}]);
//# sourceMappingURL=35.9130e8e9.js.map