(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{315:function(a,t,e){},316:function(a,t,e){},317:function(a,t,e){},495:function(a,t,e){"use strict";var i=e(315);e.n(i).a},497:function(a,t,e){"use strict";var i=e(316);e.n(i).a},499:function(a,t,e){"use strict";var i=e(317);e.n(i).a},552:function(a,t,e){"use strict";e.r(t);var i=e(11),n=e.n(i),o=e(237),s=e(348),l=e(241),c=e(7),d={queryPlayBack:function(a){return c.a.ajax({method:"post",url:"/manage/replay-manage/find-config",params:a})},queryPlayBackList:function(a){return c.a.ajax({method:"post",url:"/manage/replay-manage/list",params:a})},deletePlayBackById:function(a){return c.a.ajax({method:"post",url:"/manage/replay-manage/delete",params:{replayId:a}})},retitlePlayBack:function(a,t){return c.a.ajax({method:"post",url:"/manage/replay-manage/update",params:{replayId:a,title:t}})},createPlayBack:function(a){return c.a.ajax({method:"post",url:"/manage/replay-manage/create",params:a})},savePlayBackConfig:function(a){return c.a.ajax({method:"post",url:"/manage/replay-manage/save-config",params:a})},cancelPlayBackConfig:function(a){return c.a.ajax({method:"post",url:"/manage/replay-manage/cancel-default",params:{activityId:a}})},downloadVideo:function(a){return c.a.ajax({method:"post",url:"/manage/replay-manage/download",params:{replayId:a}})}},r=e(234),p="NEVER",u="PLAN",v={name:"play-back",components:{VeUploadImage:o.a,veMsgTips:l.a,VeUploadVideo:s.a},data:function(){return{navIdx:0,addVideoShow:!1,renameShow:!1,playBackShow:!1,newTitle:"",selectRowIdx:0,sdkUploadParam:{sing:"",signed_at:"",app_id:""},sdkPlayParam:{app_id:"",accountId:"",token:"",recordId:"",linkVideo:""},playBack:{isSwitch:!0,replayId:"",outLineMode:"",outLineTime:"",playBackCover:"",recordId:"",outLineLink:""},playBackList:[],options:[{value:"0",label:"默认回放"},{value:"1",label:"上传视频"},{value:"2",label:"外部链接"}],recordId:"",activityId:"",page:1,pageSize:5,total:0,outLineLink:"",outLineMode:"0",playBackMode:"0",uploadErrorMsg:"",playMsg:"",prePlayShow:!1}},computed:{defaultImg:function(){return this.playBack.playBackCover?this.$imgHost+"/"+this.playBack.playBackCover:""}},watch:{outLineMode:function(a){"1"!==a?(this.playBack.outLineMode=p,this.playBack.outLineTime=""):this.playBack.outLineMode=u}},created:function(){this.activityId=this.$route.params.id,this.initPage()},methods:{initPage:function(){var a=this;d.queryPlayBack({activityId:this.activityId}).then(function(t){a.playBack={replayId:t.data.replayId,outLineMode:t.data.offlineType,outLineTime:t.data.offlineTime,playBackCover:t.data.cover,outLineLink:""},a.outLineMode=t.data.offlineType===u?"1":"0"}).then(function(){a.queryPlayBackList(),r.a.queryPassSdkInfo().then(function(t){a.$nextTick(function(){a.sdkUploadParam={sign:t.data.sign,signed_at:t.data.signedAt,app_id:t.data.appId},a.sdkPlayParam={app_id:t.data.appId,accountId:t.data.accountId,token:t.data.token,recordId:"",linkVideo:""}})})})},queryPlayBackList:function(){var a=this;d.queryPlayBackList({activityId:this.activityId,page:this.page,pageSize:this.pageSize,type:0===this.navIdx?"SLICE":""}).then(function(t){a.playBackList=t.data.list,a.total=t.data.total})},changeNav:function(a){this.page=0,this.total=0,this.navIdx=a,this.queryPlayBackList()},playBackSetting:function(a){this.playBackShow=!0,this.selectRowIdx=a},cancelPlayBack:function(a){var t=this;d.cancelPlayBackConfig(this.activityId).then(function(a){200===a.code&&(t.playBack.replayId="")})},handlerMore:function(a,t){this.selectRowIdx=a;var e=this.playBackList[this.selectRowIdx];0===t?this.downLoadVideo():1===t?("LINK"===e.type?(this.sdkPlayParam.outLineLink=e.link,this.sdkPlayParam.recordId=""):(this.sdkPlayParam.recordId=e.video,this.sdkPlayParam.outLineLink=""),this.$playVideo(n()({},this.sdkPlayParam))):2===t?(this.newTitle=e.title,this.renameShow=!0):3===t&&this.delPlayBack()},downLoadVideo:function(){var a=this.playBackList[this.selectRowIdx];d.downloadVideo(a.replayId).then(function(a){if(console.log(a),a.data.downloadUrl){var t=document.createElement("a");t.href=a.data.downloadUrl,t.click()}})},addVideohandleClick:function(a){var t=this;if("confirm"===a.action){if("0"===this.playBackMode)this.outLineLink="";else if("1"===this.playBackMode&&(this.recordId="",!this.preViewOutLine()))return;d.createPlayBack({activityId:this.activityId,title:this.newTitle,type:"0"!==this.playBackMode?"LINK":"VIDEO",link:this.outLineLink,video:this.recordId}).then(function(a){200===a.code&&(t.navIdx=1,t.queryPlayBackList())})}this.addVideoShow=!1},renameHandleClick:function(a){this.renameShow=!1,"confirm"===a.action&&this.updataTitle()},savePlayBackConfig:function(a){var t=this;if("confirm"===a.action){"0"===this.outLineMode&&(this.playBack.outLineTime="");var e=this.playBackList[this.selectRowIdx].replayId;d.savePlayBackConfig({replayId:e,cover:this.playBack.playBackCover,offlineType:"0"===this.outLineMode?"NEVER":"PLAN",offlineTime:this.playBack.outLineTime}).then(function(a){200===a.code&&(t.playBack.replayId=e)})}this.playBackShow=!1},updataTitle:function(){var a=this,t=this.playBackList[this.selectRowIdx];d.retitlePlayBack(t.replayId,this.newTitle).then(function(e){200===e.code&&(t.title=a.newTitle)})},delPlayBack:function(){var a=this;this.$messageBox({header:"删除此视频",width:"400px",content:"您是否确定要删除此视频？",cancelText:"取消",confirmText:"删除",type:"error",handleClick:function(t){if("confirm"===t.action){var e=a.playBackList[a.selectRowIdx].replayId;d.deletePlayBackById(e).then(function(t){200===t.code&&(a.$toast({header:"提示",content:"删除成功！",autoClose:2e3,position:"right-top"}),a.queryPlayBackList())})}}})},preViewOutLine:function(){return/^<embed|<iframe.*(embed>|iframe>)$/.test(this.outLineLink)?(this.playBack.outLineLink=this.outLineLink,!0):(this.$toast({header:"提示",content:"格式不正确",autoClose:2e4,position:"top-center"}),!1)},uploadImgSuccess:function(a){this.playBack.playBackCover=a.name},uploadError:function(a){console.log("上传失败:",a)},uploadVideo:function(){document.getElementById("upload").click()},uploadVideoSuccess:function(a){this.recordId=a}}},m=(e(495),e(497),e(499),e(1)),y=Object(m.a)(v,function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"live-mager"},[a._m(0),a._v(" "),e("message-box",{directives:[{name:"show",rawName:"v-show",value:a.renameShow,expression:"renameShow"}],attrs:{header:"",width:"340px",cancelText:"取消",confirmText:"确定"},on:{handleClick:a.renameHandleClick}},[e("div",{staticClass:"prop-input"},[a._v("\n      输入新的视频标题：\n      "),e("com-input",{attrs:{value:a.newTitle},on:{"update:value":function(t){a.newTitle=t}}})],1)]),a._v(" "),e("message-box",{directives:[{name:"show",rawName:"v-show",value:a.addVideoShow,expression:"addVideoShow"}],attrs:{width:"646px",header:"添加视频",cancelText:"取消",confirmText:"确定"},on:{handleClick:a.addVideohandleClick}},[e("div",{staticClass:"mager-box message-box-content"},[e("div",{staticClass:"from-box"},[e("div",{staticClass:"from-row"},[e("div",{staticClass:"from-title"},[a._v("视频类型：")]),a._v(" "),e("div",{staticClass:"from-content"},[e("el-radio",{attrs:{label:"0"},model:{value:a.playBackMode,callback:function(t){a.playBackMode=t},expression:"playBackMode"}},[a._v("上传视频")]),a._v(" "),e("el-radio",{attrs:{label:"1"},model:{value:a.playBackMode,callback:function(t){a.playBackMode=t},expression:"playBackMode"}},[a._v("链接引用")])],1)]),a._v(" "),0==a.playBackMode?e("div",{staticClass:"from-row"},[e("div",{staticClass:"from-title"},[a._v("上传视频：")]),a._v(" "),e("div",{staticClass:"from-content"},[e("ve-upload-video",{attrs:{title:"视频仅支持mp4格式，文件大小不超过200M",accept:"mp4",fileSize:204800,sdk:a.sdkUploadParam},on:{success:a.uploadVideoSuccess}})],1)]):e("div",{staticClass:"from-row"},[e("div",{staticClass:"from-title"},[a._v("视频链接：")]),a._v(" "),e("div",{staticClass:"from-content"},[e("com-input",{staticClass:"out-line-input",attrs:{value:a.outLineLink,placeholder:"请输入链接"},on:{"update:value":function(t){a.outLineLink=t}}})],1)]),a._v(" "),e("div",{staticClass:"from-row"},[e("div",{staticClass:"from-title"},[a._v("视频标题：")]),a._v(" "),e("div",{staticClass:"from-content"},[e("com-input",{attrs:{value:a.newTitle},on:{"update:value":function(t){a.newTitle=t}}})],1)])])])]),a._v(" "),e("message-box",{directives:[{name:"show",rawName:"v-show",value:a.playBackShow,expression:"playBackShow"}],attrs:{width:"646px",header:"设置默认回放",cancelText:"取消",confirmText:"确定"},on:{handleClick:a.savePlayBackConfig}},[e("div",{staticClass:"mager-box message-box-content"},[e("div",{staticClass:"from-box"},[e("div",{staticClass:"from-row"},[e("div",{staticClass:"from-title"},[a._v("回放封面：")]),a._v(" "),e("div",{staticClass:"from-content"},[e("div",{staticClass:"from-content"},[e("ve-upload-image",{attrs:{title:"点击上传封面",accept:"png|jpg|jpeg",defaultImg:a.defaultImg,fileSize:1024},on:{error:a.uploadError,success:a.uploadImgSuccess}})],1)])]),a._v(" "),e("div",{staticClass:"from-row"},[e("div",{staticClass:"from-title"},[a._v("下线设置：")]),a._v(" "),e("div",{staticClass:"from-content"},[e("el-radio",{attrs:{label:"0"},model:{value:a.outLineMode,callback:function(t){a.outLineMode=t},expression:"outLineMode"}},[a._v("与活动同步下线")]),a._v(" "),e("el-radio",{attrs:{label:"1"},model:{value:a.outLineMode,callback:function(t){a.outLineMode=t},expression:"outLineMode"}},[a._v("指定下线时间")]),a._v(" "),e("transition",{attrs:{name:"left-right"}},[1==a.outLineMode?e("div",{staticClass:"black-box"},[a._v("\n                设置下线时间\n                "),e("el-date-picker",{attrs:{type:"datetime",placeholder:"选择日期时间",align:"right",format:"yyyy-MM-dd HH:mm","value-format":"yyyy-MM-dd HH:mm"},model:{value:a.playBack.outLineTime,callback:function(t){a.$set(a.playBack,"outLineTime",t)},expression:"playBack.outLineTime"}})],1):a._e()])],1)])])])]),a._v(" "),e("transition",{attrs:{name:"fade"}},[a.prePlayShow?e("div",{staticClass:"video-modal-box"},[e("div",{staticClass:"video-modal",on:{click:function(t){a.prePlayShow=!1}}}),a._v(" "),e("div",{staticClass:"video-content"},[a.playBack.outLineLink?e("div",{staticClass:"iframe-box"},[e("div",{staticStyle:{width:"100%",height:"100%"},domProps:{innerHTML:a._s(a.playBack.outLineLink)}})]):!a.recordId||a.playMsg?e("span",[a._v(a._s(a.playMsg||"暂无视频"))]):e("div",{staticStyle:{width:"100%",height:"100%"},attrs:{id:"myVideo"}})])]):a._e()]),a._v(" "),e("div",{staticClass:"list-box"},[e("div",[e("nav",{staticClass:"table-nav"},[e("span",{class:{active:0===a.navIdx},on:{click:function(t){a.changeNav(0)}}},[a._v("回放片段")]),a._v(" "),e("span",{class:{active:1===a.navIdx},on:{click:function(t){a.changeNav(1)}}},[a._v("视频")])]),a._v(" "),e("ve-msg-tips",{attrs:{tip:"您可以根据需要从回放片段或视频中设置默认回放"}}),a._v(" "),e("button",{staticClass:"primary-button fr",attrs:{plain:""},on:{click:function(t){a.addVideoShow=!0}}},[a._v("添加视频")])],1),a._v(" "),e("div",{staticClass:"table-list-box"},[e("el-table",{staticStyle:{width:"100%"},attrs:{data:a.playBackList}},[e("el-table-column",{attrs:{label:"缩略图"},scopedSlots:a._u([{key:"default",fn:function(t){return[e("img",{staticClass:"play-back-img",attrs:{src:a.playBackList[t.$index].pic}})]}}])}),a._v(" "),e("el-table-column",{attrs:{prop:"title",label:"片段名"}}),a._v(" "),e("el-table-column",{attrs:{prop:"duration",label:"时长"}}),a._v(" "),e("el-table-column",{attrs:{prop:"generateTime",label:"生成时间"}}),a._v(" "),e("el-table-column",{attrs:{label:"操作"},scopedSlots:a._u([{key:"default",fn:function(t){return[a.playBackList[t.$index].replayId==a.playBack.replayId?e("el-button",{attrs:{type:"text",size:"small"},on:{click:function(e){e.stopPropagation(),a.cancelPlayBack(t.$index)}}},[a._v("取消默认回放\n            ")]):e("el-button",{attrs:{type:"text",size:"small"},on:{click:function(e){e.stopPropagation(),a.playBackSetting(t.$index)}}},[a._v("设为默认回放\n            ")]),a._v(" "),e("div",{staticClass:"more"},[e("span",[a._v("更多")]),a._v(" "),e("div",{staticClass:"more-menu"},[e("span",{class:{disabled:"LINK"==a.playBackList[t.$index].type},on:{click:function(e){a.handlerMore(t.$index,0)}}},[a._v("下载")]),a._v(" "),e("span",{on:{click:function(e){a.handlerMore(t.$index,1)}}},[a._v("预览")]),a._v(" "),e("span",{on:{click:function(e){a.handlerMore(t.$index,2)}}},[a._v("重命名")]),a._v(" "),e("span",{on:{click:function(e){a.handlerMore(t.$index,3)}}},[a._v("删除")])])])]}}])})],1)],1)])],1)},[function(){var a=this.$createElement,t=this._self._c||a;return t("div",{staticClass:"live-title"},[t("span",{staticClass:"title"},[this._v("活动回放")]),this._v(" "),t("span",{staticClass:"msg-tip"},[this._v("所有回放的设置都在本页配置，发起页前端不再有任何回放的设置项。")])])}],!1,null,"d19fd526",null);y.options.__file="index.vue";t.default=y.exports}}]);