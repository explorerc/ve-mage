(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{173:function(t,e,a){},177:function(t,e,a){"use strict";var i=a(173);a.n(i).a},179:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("com-upload",{attrs:{accept:t.accept,actionUrl:"/api/upload/do-upload",inputName:"file",fileSize:t.fileSize},on:{error:t.uploadError,progress:t.uploadProgress,load:t.uploadImgSuccess}},[a("div",{staticClass:"upload-file-box",attrs:{title:"点击上传"}},[t.percentImg?a("el-progress",{attrs:{type:"circle",percentage:t.percentImg}}):t._e(),t._v(" "),a("i",{staticClass:"iconfont icon-jiahao"}),t._v(" "),a("span",[t._v(t._s(t.tipTxt))]),t._v(" "),t.fileSrc||t.coverImg?a("div",{staticClass:"upload-file-botton",on:{click:function(e){return e.stopPropagation(),t.deleteImage(e)}}},[t._v("删除")]):t._e(),t._v(" "),a("transition",{attrs:{name:"fade"}},[t.fileSrc?a("div",{staticClass:"temp-img",style:{backgroundImage:"url("+t.imgHost+"/"+t.fileSrc+")"}}):t._e(),t._v(" "),!t.fileSrc&&t.coverImg?a("div",{staticClass:"temp-img",style:{backgroundImage:"url("+t.coverImg+")"}}):t._e()])],1)])};i._withStripped=!0;var s={name:"ve-upload",components:{ComUpload:a(41).a},data:()=>({imgHost:"",fileSrc:"",coverImg:"",tipTxt:"",percentImg:0}),props:{accept:{type:String,default:"png|jpg|jpeg|bmp|gif|doc|mp4"},fileSize:{type:Number,default:1024},defaultImg:{type:String,default:""},title:{type:String,default:"上传文件"}},watch:{defaultImg:{handler(t){this.coverImg=t},immediate:!0},title:{handler(t){this.tipTxt=t},immediate:!0}},methods:{deleteImage(){this.coverImg="",this.fileSrc="",this.$emit("success",{name:"",host:""})},uploadProgress(t){this.percentImg=parseFloat(parseFloat(t.percent.replace("%","")).toFixed(2)),100===this.percentImg&&(this.percentImg=0)},uploadImgSuccess(t){const e=JSON.parse(t.data).data;e.host&&(this.imgHost=e.host),e.name&&(this.fileSrc=e.name),this.$emit("success",e)},uploadError(t){this.fileSrc="",this.$emit("error",t)}}},o=(a(177),a(1)),l=Object(o.a)(s,i,[],!1,null,null,null);l.options.__file="src\\components\\ve-upload.vue";e.a=l.exports},230:function(t,e,a){},231:function(t,e,a){},232:function(t,e,a){},343:function(t,e,a){"use strict";var i=a(230);a.n(i).a},345:function(t,e,a){"use strict";var i=a(231);a.n(i).a},347:function(t,e,a){"use strict";var i=a(232);a.n(i).a},353:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"live-mager"},[t._m(0),t._v(" "),a("div",{staticClass:"mager-box"},[a("div",{staticClass:"from-box"},[a("div",{staticClass:"from-row"},[a("div",{staticClass:"from-title"},[t._v("回放设置：")]),t._v(" "),a("div",{staticClass:"from-content"},[a("el-checkbox",{model:{value:t.playBack.isSwitch,callback:function(e){t.$set(t.playBack,"isSwitch",e)},expression:"playBack.isSwitch"}},[t._v("开启")]),t._v(" "),a("span",{staticClass:"msg-tip"},[t._v("功能已开启，直播结束后观众可观看回放")])],1)]),t._v(" "),a("div",{staticClass:"from-row"},[a("div",{staticClass:"from-title"},[t._v("回放下线设置：")]),t._v(" "),a("div",{staticClass:"from-content"},[a("el-radio",{attrs:{label:"0"},model:{value:t.outLineMode,callback:function(e){t.outLineMode=e},expression:"outLineMode"}},[t._v("永不下线，长期有效")]),t._v(" "),a("el-radio",{attrs:{label:"1"},model:{value:t.outLineMode,callback:function(e){t.outLineMode=e},expression:"outLineMode"}},[t._v("定时下线(下线后回放将不能观看)")]),t._v(" "),a("transition",{attrs:{name:"left-right"}},[1==t.outLineMode?a("div",{staticClass:"black-box"},[t._v("\n              设置下线时间\n              "),a("el-date-picker",{attrs:{type:"datetime",placeholder:"选择日期时间",align:"right",format:"yyyy-MM-dd HH:mm","value-format":"yyyy-MM-dd HH:mm"},model:{value:t.playBack.outLineTime,callback:function(e){t.$set(t.playBack,"outLineTime",e)},expression:"playBack.outLineTime"}})],1):t._e()])],1)]),t._v(" "),a("div",{staticClass:"from-row"},[a("div",{staticClass:"from-title"},[t._v("回放封面：")]),t._v(" "),a("div",{staticClass:"from-content"},[a("div",{staticClass:"from-content"},[a("ve-upload",{attrs:{title:"点击上传封面",accept:"png|jpg|jpeg",defaultImg:"",fileSize:1024},on:{error:t.uploadError,success:t.uploadImgSuccess}}),t._v(" "),a("div",{staticClass:"upload-tips"},[a("span",[t._v("为了保证显示效果，请上传不大于1280x720大小的图片，支持jpg、jpeg、png格式，文件大小不超过2M")]),t._v(" "),t.uploadImgErrorMsg?a("span",{staticClass:"error"},[t._v(t._s(t.uploadImgErrorMsg))]):t._e()])],1)])]),t._v(" "),a("div",{staticClass:"from-row"},[a("div",{staticClass:"from-title"},[t._v("回放内容：")]),t._v(" "),a("div",{staticClass:"from-content"},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.playBackMode,callback:function(e){t.playBackMode=e},expression:"playBackMode"}},t._l(t.options,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),t._v(" "),a("ve-msg-tips",{attrs:{tip:'当回放内容选择“外部链接”时，现在该提示符，鼠标移动到提示符上时会显示如下文案：为了达到最好的播放效果，推荐您先将视频上传到视频网站，再将播放地址复制到输入框。比如爱奇艺或腾讯视频“分享”中的“通用代码”，示例如下：<iframe frameborder="0" width="640" height="498" src="https://v.qq.com/iframe/player.html?vid=zxxx7hcc6iu&tiny=0&auto=0" allowfullscreen></iframe>'}}),t._v(" "),a("div",{staticClass:"black-box"},[1==t.playBackMode?a("div",{staticClass:"upload-video"},[a("div",{directives:[{name:"ComLoading",rawName:"v-ComLoading",value:t.loading,expression:"loading"}],staticClass:"upload-file-box",attrs:{title:"点击上传","com-loading-text":"准备中..."},on:{click:t.uploadVideo}},[t.percentVideo?a("el-progress",{attrs:{type:"circle",percentage:t.percentVideo}}):t._e(),t._v(" "),a("i",{staticClass:"iconfont icon-jiahao"}),t._v(" "),a("span",[t._v("上传视频")]),t._v(" "),t._m(1)],1),t._v(" "),a("div",{staticClass:"upload-tips"},[a("span",[t._v("视频仅支持mp4格式，文件大小不超过200M")]),t._v(" "),t.uploadErrorMsg?a("span",{staticClass:"error"},[t._v(t._s(t.uploadErrorMsg))]):t._e()])]):t._e(),t._v(" "),2==t.playBackMode?a("div",{staticClass:"play-content"},[a("div",{staticClass:"out-line"},[a("span",[t._v("输入链接")]),t._v(" "),a("com-input",{attrs:{customClass:"out-line-input",value:t.outLineLink,placeholder:"请输入链接"},on:{"update:value":function(e){t.outLineLink=e}}}),t._v(" "),a("el-button",{staticClass:"live-btn",attrs:{type:"primary",plain:""},on:{click:t.preViewOutLine}},[t._v("确定")])],1),t._v(" "),a("div",{staticClass:"out-line"},[a("span",[t._v("链接预览")]),t._v(" "),a("div",{staticClass:"play-box"},[t.playBack.outLineLink?t._e():a("span",[t._v("暂无预览")]),t._v(" "),t.playBack.outLineLink?a("div",{staticClass:"iframe-box",domProps:{innerHTML:t._s(t.playBack.outLineLink)}}):t._e()])])]):t._e()])],1)])])]),t._v(" "),a("div",{staticClass:"list-box"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.playBackList}},[a("el-table-column",{attrs:{label:"缩略图"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("img",{staticClass:"play-back-img",attrs:{src:t.playBackList[e.$index].playCover}})]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"片段名"}}),t._v(" "),a("el-table-column",{attrs:{prop:"timeLength",label:"时长"}}),t._v(" "),a("el-table-column",{attrs:{prop:"createTime",label:"生成时间"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[t.playBackList[e.$index].isDefault?a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(t){t.stopPropagation()}}},[t._v("默认回放\n          ")]):a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(t){t.stopPropagation()}}},[t._v("设为默认回放\n          ")]),t._v(" "),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(t){t.stopPropagation()}}},[t._v("更多\n          ")])]}}])})],1)],1),t._v(" "),a("div",{staticClass:"step-btns"},[a("el-button",{staticClass:"live-btn fl",attrs:{type:"primary",plain:""},on:{click:function(t){}}},[t._v("保存")])],1)])};i._withStripped=!0;var s=a(179),o=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"msg-tip-box"},[e("i",[this._v("?")]),this._v(" "),e("span",[this._v(this._s(this.tip))])])};o._withStripped=!0;var l={name:"ve-msg-tips",data:()=>({}),props:{tip:{type:String,default:""}}},n=(a(343),a(1)),r=Object(n.a)(l,o,[],!1,null,"a14436fc",null);r.options.__file="src\\components\\ve-msg-tips.vue";var c=r.exports;const p="forever",d="timing";var u={name:"play-back",components:{VeUpload:s.a,veMsgTips:c},data:()=>({vhallParams:{sign:"41256133923f50e3ae298e5f89b784b5",signed_at:"1534486369",app_id:"e909e583",access_token:"access:e909e583:85615832f2d648f7",recordId:"",accountId:"v770"},playBack:{isSwitch:!0,outLineMode:"",outLineTime:"",playBackCover:"",recordId:"",outLineLink:""},playBackList:[{id:0,playCover:"https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2896936926,3592497727&fm=173&app=25&f=JPEG?w=400&h=266&s=3822CE1449634F1D24ED2441030050F2",isDefault:1,title:"缩略图1",name:"片段名1",timeLength:"10:22",createTime:"2018-7-14 12:00"},{id:1,playCover:"https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2896936926,3592497727&fm=173&app=25&f=JPEG?w=400&h=266&s=3822CE1449634F1D24ED2441030050F2",isDefault:0,title:"缩略图2",name:"片段名2",timeLength:"10:22",createTime:"2018-7-14 12:00"}],options:[{value:"0",label:"默认回放"},{value:"1",label:"上传视频"},{value:"2",label:"外部链接"}],outLineLink:"",outLineMode:"0",playBackMode:"0",loading:!1,uploadImgErrorMsg:"",uploadErrorMsg:"",percentVideo:""}),watch:{outLineMode(t){"1"!==t?(this.playBack.outLineMode=p,this.playBack.outLineTime=""):this.playBack.outLineMode=d}},methods:{preViewOutLine(){/^<embed|<iframe.*(embed>|iframe>)$/.test(this.outLineLink)?this.playBack.outLineLink=this.outLineLink:this.$toast({header:"提示",content:"格式不正确",autoClose:2e3,position:"top-center"})},uploadImgSuccess(t){this.playBack.playBackCover=t.name},uploadError(t){console.log("上传失败:",t),this.uploadImgErrorMsg="上传图片失败"},uploadVideo(){document.getElementById("upload").click()},initVhallUpload(){window.vhallCloudDemandSDK("#upload",{params:{confirmBtn:"#confirmUpload",name:"#rename",sign:this.vhallParams.sign,signed_at:this.vhallParams.signed_at,app_id:this.vhallParams.app_id},beforeUpload:t=>"video/mp4"!==t.type?(this.uploadErrorMsg="不支持该视频格式，请上传mp4格式视频",!1):t.size/1024/1024>this.videoSize?(this.uploadErrorMsg="视频太大，请不要大于200M",!1):(this.uploadErrorMsg="",this.loading=!0,this.percentVideo=0,!0),progress:t=>{this.loading=!1,this.percentVideo=parseFloat(t.replace("%","")),100===this.percentVideo&&(this.percentVideo=0)},uploadSuccess(){document.getElementById("confirmUpload").click()},saveSuccess:t=>{this.recordId.record_id=t.record_id},error:(t,e,a)=>{this.loading=!1,this.uploadErrorMsg=t}})}}},v=(a(345),a(347),Object(n.a)(u,i,[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"live-title"},[e("span",[this._v("回放设置")]),this._v(" "),e("span",{staticClass:"msg-tip"},[this._v("所有回放的设置都在本页配置，发起页前端不再有任何回放的设置项。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hide"},[e("input",{attrs:{type:"file",id:"upload"}}),this._v(" "),e("input",{attrs:{type:"text",id:"rename"}}),this._v(" "),e("button",{staticClass:"saveBtn",attrs:{id:"confirmUpload"}})])}],!1,null,"1cb7a21a",null));v.options.__file="src\\pages\\live-mager\\playBack\\index.vue";e.default=v.exports}}]);
//# sourceMappingURL=31.4b8b364e.js.map