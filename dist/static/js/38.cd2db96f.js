(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{332:function(t,e,a){},333:function(t,e,a){},336:function(t,e,a){},531:function(t,e,a){"use strict";var i=a(332);a.n(i).a},533:function(t,e,a){"use strict";var i=a(333);a.n(i).a},539:function(t,e,a){"use strict";var i=a(336);a.n(i).a},550:function(t,e,a){"use strict";a.r(e);var i=a(54),s=a.n(i),n=a(77),o=a.n(n),r=a(240),c=a(11),l=a.n(c),v=a(342),u=a(227),d=a.n(u),h=a(228),m=a.n(h),f=function(){function t(){d()(this,t)}return m()(t,null,[{key:"start",value:function(t,e,a,i,s){var n=this;clearInterval(this.interval);var o=Math.ceil(Math.pow((e-t)*a,1/3));console.log("总共分N块",o),this.timeInterval=1e3*a/o>>0,console.log("时间间隔",this.timeInterval),this.step=Math.abs(e-t)/o>>0,console.log("单次步长基准",this.step);var r=e;this.interval=setInterval(function(){var a=n.step+n.step*n.getRange(i)>>0;if((r-=a)-t<0)return clearInterval(n.interval),void(s&&s(e+t>>0));s&&s(e-r+t>>0)},this.timeInterval)}},{key:"stop",value:function(){clearInterval(this.interval)}},{key:"getRange",value:function(t){return t*(2*Math.random()-1)}}]),t}(),p="SELECT_CAMERA",_="SELECT_MIC",C={name:"settings",data:function(){return{pushStreamShow:!1,deviceShow:!1,addPersonCount:"30",addCount:0,rtmpUrl:"",streamPlayUrl:"",activityId:"",addPersoning:!1,initOnlineNum:0,countError:"",setting:{isChart:!1,isPersonCount:!1,pushStreamType:0},cameraDevices:[],micDevices:[],camera:"",mic:"",options:[{value:10,label:"10秒"},{value:30,label:"30秒"},{value:60,label:"1分钟"},{value:180,label:"3分钟"},{value:300,label:"5分钟"},{value:600,label:"10分钟"},{value:900,label:"15分钟"},{value:1800,label:"30分钟"},{value:2700,label:"45分钟"},{value:3600,label:"60分钟"},{value:5400,label:"90分钟"},{value:7200,label:"120分钟"},{value:9e3,label:"150分钟"},{value:10800,label:"180分钟"}],addPersonTime:30}},props:{paasParams:{type:Object,required:!0,default:{appId:"",roomId:"",inavId:"",token:"",accountId:""}}},computed:{afterPersonCount:function(){return this.countError="",this.addPersonCount?parseInt(this.addPersonCount)+parseInt(this.initOnlineNum):this.addCount+parseInt(this.initOnlineNum)}},watch:{setting:{handler:function(){this.liveSetting()},deep:!0},paasParams:function(){this.querySettingInfo()}},beforeDestroy:function(){console.log("setting--beforeDestroy"),this.hostPusher&&this.hostPusher.destroy()},created:function(){var t=this.$route.params.id;t||this.$router.go(-1),this.activityId=t},methods:{settingOk:function(){this.addPersoning||(this.addPersonCount?/^[0-9]+$/.test(this.addPersonCount)?(this.$emit("settingOk",l()({cameraDevices:this.camera,micDevices:this.mic,addPersonCount:this.addPersonCount,addPersonTime:this.addPersonTime},this.setting)),this.addLivePersonCount()):this.countError="格式不正确":this.countError="不能为空")},querySettingInfo:function(){var t=this;r.a.querySettingInfo(this.activityId).then(function(e){t.setting={isChart:"Y"===e.data.gag,isPersonCount:"Y"===e.data.showOnlineNum,pushStreamType:"THIRD"===e.data.pushType},t.initOnlineNum=e.data.initOnlineNum})},selectDevice:function(){this.deviceShow=!0,this.initPusher()},pushStreamSet:function(){var t=this;this.pushStreamShow=!0,r.a.getPushUrl(this.activityId).then(function(e){200===e.code&&e.data&&(t.rtmpUrl=e.data.push_address,t.streamPlayUrl=e.data.stream_number)})},liveSetting:function(){r.a.setLiveSetting({activityId:this.activityId,gag:this.setting.isChart?"Y":"N",pushType:this.setting.pushStreamType?"THIRD":"BROESER",showOnlineNum:this.setting.isPersonCount?"Y":"N"})},addLivePersonCount:function(){var t=this;this.addPersoning=!0,this.addCount=parseInt(this.addPersonCount),this.addPersonCount="",f.start(0,this.addCount,this.addPersonTime,.1,function(e){r.a.addLivePersons({activityId:t.activityId,num:e}).catch(function(){f.stop()}),t.addCount===e&&(t.addPersoning=!1)})},cancelAddPersonCount:function(){this.addPersoning=!1,f.stop()},initPusher:function(){var t=this;this.$nextTick(function(){t.hostPusher=new v.a(t.paasParams.appId,t.paasParams.roomId,t.paasParams.inavId,t.paasParams.token,"videoBoxId"),t.hostPusher.initHostPusher({conf:{videoSize:[400,225,400,225]}}).then(function(){t.getDevice()}).catch(function(t){console.log(t)}),t.hostPusher.accountId=t.paasParams.accountId})},getDevice:function(){var t=this;this.hostPusher.getDevices().then(function(e){t.cameraDevices=e.cameras,t.micDevices=e.mics,t.camera=sessionStorage.getItem(p)||t.cameraDevices[0].deviceId,t.mic=sessionStorage.getItem(_)||t.micDevices[0].deviceId}).catch(function(t){console.log(t)})},changeNav:function(t){this.setting.pushStreamType=t},handleMsgClick:function(){this.pushStreamShow=!1},deviceMsgClick:function(t){this.deviceShow=!1,"confirm"===t.action&&(sessionStorage.setItem(p,this.camera),sessionStorage.setItem(_,this.mic),this.hostPusher.changeSetting({video:this.camera,audio:this.mic}))},copyInput:function(t){var e=this;(t?this.streamPlayUrl:this.rtmpUrl).copyClipboard(function(){e.$toast({header:"提示",content:"复制成功",autoClose:1e3,position:"top-center"})})}}},g=(a(531),a(533),a(1)),I=Object(g.a)(C,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"setting-box setting-box-select"},[a("div",{staticClass:"form-list"},[a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-title"},[t._v("推流方式")]),t._v(" "),a("div",{staticClass:"form-content"},[a("div",{staticClass:"nav-menu fr"},[a("span",{class:{active:0==t.setting.pushStreamType},on:{click:function(e){t.changeNav(0)}}},[t._v("浏览器发起")]),t._v(" "),a("span",{class:{active:1==t.setting.pushStreamType},on:{click:function(e){t.changeNav(1)}}},[t._v("第三方推流")])])])]),t._v(" "),t.setting.pushStreamType?a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-title"},[t._v("推流设置")]),t._v(" "),a("div",{staticClass:"form-content"},[a("button",{staticClass:"default-button fr",on:{click:t.pushStreamSet}},[t._v("推流设置")])])]):a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-title"},[t._v("媒体设备")]),t._v(" "),a("div",{staticClass:"form-content"},[a("button",{staticClass:"default-button fr",on:{click:t.selectDevice}},[t._v("选择设备")])])]),t._v(" "),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-title"},[t._v("观众聊天禁言")]),t._v(" "),a("div",{staticClass:"form-content"},[a("el-switch",{staticClass:"fr",model:{value:t.setting.isChart,callback:function(e){t.$set(t.setting,"isChart",e)},expression:"setting.isChart"}})],1)]),t._v(" "),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-title"},[t._v("观众端显示在线人数")]),t._v(" "),a("div",{staticClass:"form-content"},[a("el-switch",{staticClass:"fr",model:{value:t.setting.isPersonCount,callback:function(e){t.$set(t.setting,"isPersonCount",e)},expression:"setting.isPersonCount"}})],1)]),t._v(" "),a("transition",{attrs:{name:"left-right"}},[t.setting.isPersonCount?a("div",{staticClass:"person-count-setting"},[a("p",[t._v("当前真实人数："+t._s(t.initOnlineNum)+" 人")]),t._v(" "),a("p",[t._v("调整后显示人数："+t._s(t.afterPersonCount)+" 人")]),t._v(" "),a("p",[t._v("在\n          "),a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.addPersonTime,callback:function(e){t.addPersonTime=e},expression:"addPersonTime"}},t._l(t.options,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),t._v("\n          内增加\n          "),a("com-input",{attrs:{value:t.addPersonCount,"error-tips":t.countError},on:{"update:value":function(e){t.addPersonCount=e}}}),t._v("\n          人\n        ")],1),t._v(" "),a("p",{staticClass:"btn-box"},[a("button",{staticClass:"primary-button",on:{click:t.settingOk}},[t._v(t._s(t.addPersoning?"正在执行...":"确定"))]),t._v(" "),a("button",{staticClass:"default-button",on:{click:t.cancelAddPersonCount}},[t._v("取消")])])]):t._e()])],1),t._v(" "),t.deviceShow?a("message-box",{attrs:{type:"prompt",header:"媒体设置",confirmText:"确定",width:"442px"},on:{handleClick:t.deviceMsgClick}},[a("div",{staticClass:"form-list form-message-box device-box"},[a("div",{staticClass:"video-box",attrs:{id:"videoBoxId"}}),t._v(" "),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-title fzr"},[t._v("摄像头")]),t._v(" "),a("div",{staticClass:"form-content"},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.camera,callback:function(e){t.camera=e},expression:"camera"}},t._l(t.cameraDevices,function(t){return a("el-option",{key:t.deviceId,attrs:{label:t.label,value:t.deviceId}})}))],1)]),t._v(" "),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-title fzr"},[t._v("麦克风")]),t._v(" "),a("div",{staticClass:"form-content"},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.mic,callback:function(e){t.mic=e},expression:"mic"}},t._l(t.micDevices,function(t){return a("el-option",{key:t.deviceId,attrs:{label:t.label,value:t.deviceId}})}))],1)]),t._v(" "),a("p",{staticClass:"update-device fzr",on:{click:t.getDevice}},[t._v("刷新设备")])])]):t._e(),t._v(" "),t.pushStreamShow?a("message-box",{attrs:{type:"prompt",header:"推流设置",confirmText:"确定",width:"660px"},on:{handleClick:t.handleMsgClick}},[a("div",{staticClass:"form-list form-message-box"},[a("h3",{staticStyle:{"text-align":"center"}},[t._v("正在使用第三方推流工具发起直播")]),t._v(" "),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-title fzr"},[t._v("RTMP URL")]),t._v(" "),a("div",{staticClass:"form-content"},[a("com-input",{attrs:{value:t.rtmpUrl},on:{"update:value":function(e){t.rtmpUrl=e}}}),t._v(" "),a("button",{staticClass:"default-button",on:{click:function(e){t.copyInput(0)}}},[t._v("复制")])],1)]),t._v(" "),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-title fzr"},[t._v("串流码/播放路径")]),t._v(" "),a("div",{staticClass:"form-content"},[a("com-input",{attrs:{value:t.streamPlayUrl},on:{"update:value":function(e){t.streamPlayUrl=e}}}),t._v(" "),a("button",{staticClass:"default-button",on:{click:function(e){t.copyInput(1)}}},[t._v("复制")])],1)]),t._v(" "),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-title fzr"},[t._v("使用场景：")]),t._v(" "),a("div",{staticClass:"form-content"},[t._v("\n          大会直播、活动拍摄等使用OBS、VMIX等第三方推流软件进行直播的场景\n        ")])]),t._v(" "),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-title fzr"},[t._v("使用步骤：")]),t._v(" "),a("div",{staticClass:"form-content"},[a("p",[t._v("1.在第三方推流工具中添加RTMP URL与串流码。")]),t._v(" "),a("p",{staticStyle:{"line-height":"10px"}},[t._v("2.使用第三方推流工具进行推流。")]),t._v(" "),a("p",[t._v("3.在右上角点击开始直播按钮。")])])])])]):t._e()],1)},[],!1,null,"be059d3a",null);I.options.__file="settings.vue";var P="PREPARE",y="LIVING",b="FINISH",S="PLAYBACK",k={name:"master",components:{Setting:I.exports,PlayVideo:a(346).a},data:function(){return{activityId:"",settingShow:!1,startInit:!1,playType:"live",livingTime:0,setIntervalHandler:0,activityInfo:{status:""},paasParams:{appId:"",roomId:"",inavId:"",token:"",accountId:""}}},computed:{liveBtnShow:function(){var t=this.activityInfo.status;return t===P||t===b||t===S},liveStartTime:function(){return this.formatDate(this.livingTime)}},beforeDestroy:function(){console.log("beforeDestroy"),clearInterval(this.setIntervalHandler)},created:function(){var t=this.$route.params.id;t||this.$router.go(-1),this.activityId=t,this.initPage()},methods:{initPage:function(){var t=this;return o()(s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.initToken();case 2:return e.next=4,r.a.queryActivityInfo(t.activityId).then(function(e){t.livingTime=0,t.activityInfo=e.data.activity,t.activityInfo.status===y?t.startInit=!0:t.startInit=!1});case 4:case"end":return e.stop()}},e,t)}))()},clickSetting:function(){this.settingShow=!0},startPull:function(){var t=this;clearInterval(this.setIntervalHandler),this.setIntervalHandler=setInterval(function(){t.livingTime++},1e3)},initToken:function(){var t=this;return r.a.getLiveTtoken(this.activityId).then(function(e){"live"===t.playType&&t.initPusherParams()})},initPusherParams:function(){var t=this;r.a.getPaasParam(this.activityId).then(function(e){t.paasParams={appId:e.data.appId,roomId:e.data.liveRoom,inavId:e.data.hdRoom,token:e.data.token,accountId:e.data.accountId}})},starAndEndtLive:function(t){var e=this;this.startInit=t,this.startInit?(this.activityInfo.status=y,r.a.startLive(this.activityId).then(function(t){200===t.code&&e.$toast({header:"提示",content:"成功开始直播",autoClose:1e3,position:"top-center"})})):(clearInterval(this.setIntervalHandler),this.activityInfo.status=b,r.a.stopLive(this.activityId).then(function(t){200===t.code&&e.$toast({header:"提示",content:"成功结束直播",autoClose:1e3,position:"top-center"})}))},formatDate:function(t){var e=((t/3600>>0)+"").padStart(2,0),a=((t/60%60>>0)+"").padStart(2,0),i=((t%60>>0)+"").padStart(2,0);return e>0?e+":"+a+":"+i:a+":"+i}}},w=(a(539),Object(g.a)(k,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"master-box"},[a("div",{staticClass:"master-play-box clearfix"},[a("div",{staticClass:"master-box-left"},[a("div",{staticClass:"play-header"},[t._v("当前画面为摄像头回显画面，您还未开始直播，如需开播，请点击【开始直播】")]),t._v(" "),a("div",{staticClass:"play-video-box"},[a("play-video",{attrs:{role:"master","play-type":t.playType,startInit:t.startInit},on:{startPull:t.startPull}})],1)]),t._v(" "),a("div",{staticClass:"master-box-right"},[a("div",{staticClass:"master-header"},[a("div",{staticClass:"header-item"},[t.liveBtnShow?a("button",{staticClass:"primary-button",on:{click:function(e){t.starAndEndtLive(!0)}}},[t._v("开始直播")]):a("button",{staticClass:"primary-button",on:{click:function(e){t.starAndEndtLive(!1)}}},[t._v("结束直播")]),t._v(" "),a("span",[t._v(t._s(t.liveStartTime))])]),t._v(" "),t._m(0),t._v(" "),t._m(1)]),t._v(" "),a("div",{staticClass:"master-content"},[a("div",{staticClass:"content-box"},[a("transition",{attrs:{name:"fade",mode:"out-in"}},[t.settingShow?a("setting",{attrs:{paasParams:t.paasParams}}):t._e()],1)],1),t._v(" "),a("div",{staticClass:"content-menu"},[a("span",[t._v("聊天")]),t._v(" "),a("span",[t._v("成员")]),t._v(" "),a("span",[t._v("数据")]),t._v(" "),a("span",[t._v("商品展示")]),t._v(" "),a("div",{staticClass:"menu-bottom"},[a("span",[t._v("分享")]),t._v(" "),a("span",{on:{click:t.clickSetting}},[t._v("设置")])])])])])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-item"},[e("div",[this._v("在线人数")]),this._v(" "),e("span",[this._v("142")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-item"},[e("div",[this._v("网络状况")]),this._v(" "),e("span",[this._v("网络信号")])])}],!1,null,"523b51ff",null));w.options.__file="master.vue";e.default=w.exports}}]);